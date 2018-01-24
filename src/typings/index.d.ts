declare module "aire/lib/lang" {

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


declare module "aire/api/security" {
    import {NavigationInstruction, Next, PipelineStep} from "aurelia-router";

    export class SecurityService {
        isActive(): Promise<boolean>
    }
    
    
    export class User {
        public username : string;
        public password : string;
        public firstName: string;
        public lastName: string;
        public emailAddress: string;
        public phoneNumber: string;
        constructor(v?: any);
        
        toJson(): Object;
    }

    export class ActivationStep implements PipelineStep {
        constructor(service: SecurityService,
                    activationLocation: string
        );


        run(instruction: NavigationInstruction, next: Next): Promise<any>;
    }
}