import { Email } from './Email';

describe('Create email', () => {
    it('should create an email', () => {
        const email = Email.create('michael@gmail.com');
        expect(email).toMatchObject({_email: 'michael@gmail.com'});
    })
    it('should returns an Email instance', () => {
        const email = Email.create('nome@email.com');
        expect(email).toBeInstanceOf(Email);
    })
    it('should throw an error when email is valid', () => {
        expect(() => {
            Email.create('nomeemail.com')
        }).toThrow("The email \"nomeemail.com\" is invalid.");        
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