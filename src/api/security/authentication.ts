import {autoinject, LogManager} from 'aurelia-framework';
import {BrowserStorage, CookieStorage} from "aire/api/storage";
import {
    Authentication, 
    SecurityService, 
    Token, 
    User
} from "aire/api/security";

var log = LogManager.getLogger("aire:authentication-manager");

@autoinject
export class AuthenticationManager {

    private user: User;
    private token: Token;

    private lastHit: Date;

    static cacheExpiry: number = 15 * 1000; // default to 15 seconds

    private storage: BrowserStorage;

    constructor(private service: SecurityService) {
        this.storage = new CookieStorage();
    }


    async login(user: User): Promise<Authentication> {
        this.storage.clear(Token.CookieKey);
        let auth = await this.service.login(user);
        this.user = auth.principal;
        this.token = auth.token;
        return auth;
    }

    async getAuthentication(): Promise<User> {
        if (this.cacheExpired()) {
            log.debug("token-cache expired--hydrating");
            return this.load();
        }
        log.debug("accessed current user");
        return Promise.resolve(this.user);
    }


    private async load(): Promise<User> {
        let token = this.resolveToken(),
            tokv = new Token(token);
        if (this.user) {
            log.info("attempting to validate current user session...");
            await this.service.validate(tokv);
            log.info("successfully validated current user session");
            return this.user;
        }
        log.info("no current user in context.  Attempting to retrieve saved session...");
        let auth = await this.service.authenticateByToken(new Token(token)),
            user = auth.principal,
            tok = auth.token;
        log.info("successfully retrieved saved session");
        this.token = tok;
        this.user = user;
        return user;
    }


    private resolveToken(): string {
        if (this.token) {
            log.debug("found token from current visit");
            return this.token.value;
        }
        let token = this.storage.get(Token.CookieKey);
        if (token) {
            log.debug("found non-expired token from previous visit");
            this.token.value = token;
            return token;
        }
        log.debug("no existing tokens");
        throw new Error("no existing user session--please log in again");
    }


    private cacheExpired(): boolean {
        let now = new Date(),
            lastHit = this.lastHit;

        if (lastHit && now.getTime() - lastHit.getTime() > AuthenticationManager.cacheExpiry) {
            this.lastHit = now;
            return true;
        }

        if (!lastHit) {
            this.lastHit = now;
        }
        return false;

    }


}