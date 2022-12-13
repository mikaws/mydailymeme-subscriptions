import { InvalidEmailError } from "./errors/InvalidEmailError";
import { Either, left, right } from '../shared/either';
export class Email {
    private readonly _email: string;

    get email(): string {
        return this._email;
    }

    constructor(email: string) {
        this._email = email;
        Object.freeze(this);
    }

    static create(email: string): Either<InvalidEmailError, Email>  {
        const isValid = this.validate(email);
        if(!isValid) {
            return left(new InvalidEmailError(email));
        }
        return right(new Email(email));
    }

    static validate(email: string): boolean {
        if(!email.includes('@')) {
            return false;
        }

        return true;
    }
}