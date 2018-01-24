declare module "aire/lib/lang" {
    
    export const range: (a:number, b:number) =>  number[];
    
    export class UUID {
       
        public readonly value : string;
        
        constructor(value: string);

        static random(): string;
        
        static fromString(str:string) : UUID;
        
        static randomBytes() : number[];
        
        static randomUUID() : UUID;
    }

}