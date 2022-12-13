import { Contact } from "../../domain/Contact";
import { Email } from '../../domain/Email'

export interface IContactRepository {
    findSubscriptedEmails(): Promise<Contact[] | []>
    findAllContacts(): Promise<Contact[] | []>
    exists(email: string | Email): Promise<Contact | null>
    add(contact: Contact): Promise<Contact>
}
