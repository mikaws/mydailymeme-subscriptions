import { Either, left, right } from '../shared/either'
import { Email } from './Email'
import { InvalidEmailError } from './errors/InvalidEmailError'

interface IContactData {
  email: string,
  subscription: boolean
}
export class Contact {
  private readonly _email: Email
  private readonly _subscription: boolean

  get email (): Email {
    return this._email
  }

  get subscription (): boolean {
    return this._subscription
  }

  constructor(email: Email, subscription: boolean) {
    this._email = email
    this._subscription = subscription
    Object.freeze(this)
  }

  static create(userData: IContactData): Either<InvalidEmailError, Contact> {
    const subscription = userData.subscription;
    const result = Email.create(userData.email);
    if (result.isLeft()) {
      return left(result.value);
    }

    const email = result.value;

    return right(new Contact(email, subscription));
  }
}
