declare module "sunshower/lang" {
    export class UUID {
       
        public readonly value : string;
        
        constructor(value: string);

        static random(): string;
        
        static fromString(str:string) : UUID;
        
        static randomBytes() : number[];
        
        static randomUUID() : UUID;
    }

}