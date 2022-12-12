import { Email } from './Email'

export class Contact {
  private readonly _email: Email
  private readonly _subscription: boolean

  get email (): Email {
    return this._email
  }

  get subscription (): boolean {
    return this._subscription
  }

  constructor (email: Email, subscription: boolean) {
    this._email = email
    this._subscription = subscription
    Object.freeze(this)
  }

  static create (email: string, subscription: boolean): Contact {
    const validEmail = Email.create(email)
    if (!validEmail) {
      throw Error('User cannot be created')
    }

    return new Contact(validEmail as unknown as Email, subscription) // need refactor
  }
}
