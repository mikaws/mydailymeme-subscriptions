import { Left, Right } from '../shared/either';
import { Email } from './Email';
import { InvalidEmailError } from './errors/InvalidEmailError';

describe('Create email', () => {
    it('should returns the email', () => {
        const result = Email.create('nome@email.com');
        expect(result.value["_email"]).toBe('nome@email.com');
    })
    it("should returns an error when email isn't valid", () => {
        const result = Email.create('nomeemail.com');
        expect(result.value).toEqual(new InvalidEmailError("nomeemail.com"));
    })
    it("should returns isLeft with true when error", () => {
        const result = Email.create('nomeemail.com');
        expect(result.isLeft()).toBeTruthy();
    })
    it("should returns isRight with true when success", () => {
        const result = Email.create('nome@email.com');
        expect(result.isRight()).toBeTruthy();
    })
    it("should returns isLeft with false when success", () => {
        const result = Email.create('nome@email.com');
        expect(result.isLeft()).toBeFalsy();
    })
    it("should returns isRight with false when error", () => {
        const result = Email.create('nomeemail.com');
        expect(result.isRight()).toBeFalsy();
    })
    it(`should returns an Email instance with "_email" property`, () => {
        const result = Email.create('nome@email.com');
        expect(result.value).toHaveProperty("_email");
    })
    it('should returns the value property with an Email instance if did pass the validation', () => {
        const result = Email.create('nome@email.com');
        expect(result.value).toBeInstanceOf(Email);
    })
    it("should returns the value property with an InvalidEmailError instance if the email didn't pass the validation", () => {
        const result = Email.create('nomeemail.com');
        expect(result.value).toBeInstanceOf(InvalidEmailError);
    })
    it('should returns an Right instance if the email did pass the validation', () => {
        const result = Email.create('nome@email.com');
        expect(result).toBeInstanceOf(Right);
    })
    it("should returns a Left instance if the email didn't pass the validation", () => {
        const result = Email.create('nomeemail.com');
        expect(result).toBeInstanceOf(Left);
    })
})

describe('Validate email', () => {
    it('should pass a valid email and return true', () => {
        expect(Email.validate('nome@email.com')).toBeTruthy();
    })
    it('should pass a invalid email and return false', () => {
        expect(Email.validate('nomeemail.com')).toBeFalsy();
    })
})