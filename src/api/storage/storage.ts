import {LogManager} from "aurelia-framework";

export enum StorageMode {
    Cookie,
    Local
}

var log = LogManager.getLogger("aire:storage");

export interface BrowserStorage {
    get(key: string): string;

    set(key: string, value: string): string;
    
    clear(key:string);

    contains(key: string): boolean;
}

export class LocalStorage implements BrowserStorage {

    private supportsLocalStorage: boolean = false;

    constructor() {
        this.supportsLocalStorage = LocalStorage.supportsLocalStorage();
    }

    static supportsLocalStorage(): boolean {
        let val = "test-value";
        try {
            log.debug("testing local storage...")
            localStorage.setItem(val, val);
            localStorage.removeItem(val);
            log.debug("local storage exists and can be written to");
            return true;
        } catch (e) {
            log.debug("local storage not supported");
            return false;
        }
    }
    
    public clear(key: string) {
        this.set(key, null);
    }
    
    public contains(key: string): boolean {
        return this.supportsLocalStorage && this.get(key) != null;
    }

    public get(key: string): string {
        return localStorage.getItem(key);
    }

    public set(key: string, value:string): string {
        let existing = this.get(key);
        localStorage.setItem(key, value);
        return existing;
    }
}


export class CookieStorage implements BrowserStorage {
    public clear(key: string) {
        this.set(key, null);
    }
    
    public get(key: string): string {
        return this.doGet(key);
    }

    public set(key: string, value: string): string {
        let currentval = this.doGet(key);
        this.doSet(key, value, 7);
        return currentval;
    }

    public contains(key: string): boolean {
        return this.doGet(key) != null;
    }


    private doGet(key: string) : string {
        let name = key + "=",
            ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }


    private doSet(key: string, value: string, expiration: number) {
        let d = new Date(),
            expires = "expires=" + d.toUTCString();
        d.setTime(d.getTime() + (expiration * 24 * 60 * 60 * 1000));
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    }
}