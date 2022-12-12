import { InvalidEmailError } from "./errors/InvalidEmailError";

export class Email {
    private readonly _email: string;

    get email(): string {
        return this._email;
    }

    constructor(email: string) {
        this._email = email;
        Object.freeze(this);
    }

    static create(email: string): Email | InvalidEmailError {
        const isValid = this.validate(email);
        if(!isValid) {
            throw new InvalidEmailError(email);
        }
        return new Email(email);
    }

    static validate(email: string): boolean {
        if(!email.includes('@')) {
            return false;
        }

        return true;
    }
}