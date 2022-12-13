import { UseCaseError } from "../errors/UseCaseError";

export class ContactAlreadyExists extends Error implements UseCaseError{
    constructor(message: string) {
        super(`This email ${message} already exists in the mailing list`);
        this.name = 'Contact Already Exists';
    }
}