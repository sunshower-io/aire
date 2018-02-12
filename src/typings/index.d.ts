
declare module 'aire/routing' {

    import {RouteConfig} from "aurelia-router";

    export class StructureAwareRouter {
        hasAnyChildren(parent: RouteConfig[]) : boolean;
        hasChildren(parent: RouteConfig[], path: string) : boolean;
        protected routeConfig(cfgs: RouteConfig[]): RouteRelationship;
        protected children(parent: RouteConfig[], path: string): RouteConfig[];
    }

    export interface RouteRelationship {
        isChildOf(cfgs:RouteConfig[], path: string);
    }
    export module StructureAwareRouter {

    }
}

declare module 'aire/components/drawer' {
    
    export class Drawer {
        public expanded: boolean;
        public open() : void;
        public close() : void;
    }
}

declare module 'aire/components' {

    export class Step {
        title : string;
        optional : boolean;
        number : number;
        editable : boolean;
        done : boolean;
    }

    export class Stepper {
        steps : Step[];
        activeStep : number;
    }

}

declare module 'aire/components/events' {
    import {Logger} from "aurelia-logging";
    import {EventAggregator, Subscription} from "aurelia-event-aggregator";
    import {Drawer as VMDrawer} from 'aire/components/drawer';
    
    export class Drawer {
        expanded: boolean;
        open() : void;
        
        close() : void;
        
        
    }
    
    
    export module Events {
        const log: Logger;

        export var eventAggregator: EventAggregator;

        export function setEventAggregator(e: EventAggregator): void;

        export type Action<T> = (T) => void;

        export class Drawer {
            
            
            public readonly drawer:VMDrawer;
            
            static readonly TOGGLED : string;
            static readonly OPENED  : string;
            static readonly CLOSED  : string;
            
            constructor(opened: boolean);
            
            public static publish(t: string, d:VMDrawer);

            static on(topic: string, cb: Action<Drawer>): Subscription;
        }
    }
}

declare module "aire/lib/lang" {
    export interface Serializable {
        toJson() : string;
    }

    export const parseBoolean: (a: any) => boolean;

    export const range: (a: number, b: number) => number[];

    export class UUID {

        public readonly value: string;

        constructor(value: string);

        static random(): string;

        static fromString(str: string): UUID;

        static randomBytes(): number[];

        static randomUUID(): UUID;
    }

}

declare module "aire/api/storage" {


    export enum StorageMode {
        Cookie,
        Local
    }


    export interface BrowserStorage {
        get(key: string): string;

        set(key: string, value: string): string;

        clear(key: string);

        contains(key: string): boolean;
    }

    export class CookieStorage implements BrowserStorage {
        get(key: string): string;

        set(key: string, value: string): string;

        clear(key: string);

        contains(key: string): boolean;

    }

    export const Cookies: BrowserStorage;
    export const Local: BrowserStorage;

    export function clear(key: string, mode: StorageMode): string;

    export function set(key: string, value: string, mode: StorageMode): string;

    export function get(key: string, mode: StorageMode): string;
}

declare module "aire/api/security" {

    import {NavigationInstruction, Next, PipelineStep} from "aurelia-router";
    import {HttpClient} from "aurelia-fetch-client";

    export class Token {
        static CookieKey: string;

        static HeaderKey: string;

        value: string;

        constructor(value?: string);

    }


    export class AuthenticationManager {
        constructor(service: SecurityService);
        logout() : Promise<void>;

        login(user: User): Promise<Authentication>

        getAuthentication(): Promise<User>;

    }

    export class Authentication {
        type: string;
        token: Token;
        principal: User;

        constructor(a?: any)
    }

    export class SecurityService {
        constructor(client: HttpClient);
        
        logout(t: Token) : Promise<Boolean>;

        isActive(): Promise<boolean>

        login(u: User): Promise<Authentication>

        activate(u: User): Promise<Activation>;

        validate(token: Token): Promise<boolean>;

        authenticateByToken(token: Token): Promise<Authentication>;
    }

    export class Activation {
        public activator: User;
        public temporaryPassword: string;

        constructor(a?: any);
    }


    export class User {
        public username: string;
        public password: string;
        public firstName: string;
        public lastName: string;
        public emailAddress: string;
        public phoneNumber: string;

        constructor(v?: any);

        toJson(): Object;
    }

    export class ActivationStep implements PipelineStep {
        constructor(service: SecurityService,
                    activationLocation: string);


        run(instruction: NavigationInstruction, next: Next): Promise<any>;
    }
}