export class User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;

    constructor(v?: any) {
        if (v) {
            Object.assign(this, v);
            this.firstName = v['first-name'];
            this.lastName = v['last-name'];
            this.emailAddress = v['email-address'];
            this.phoneNumber = v['phone-number'];
        }
    }

    toJson(): Object {
        return {
            username: this.username,
            "first-name": this.firstName,
            "last-name": this.lastName,
            "email-address": this.emailAddress,
            "phone-number": this.phoneNumber,
            password: this.password
        }
    }


}


export class Activation {

    activator: User;
    temporaryPassword: string;
    
    

    constructor(a?: any) {
        if (a) {
            Object.assign(this, a);
            if (a.activator) {
                this.activator = new User(a.activator);
            }
        }
    }
}