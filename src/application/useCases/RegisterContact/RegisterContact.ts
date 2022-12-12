import { Contact } from "../../../domain/Contact";
import { IRegisterContactDTO } from './IRegisterContactDTO'

export interface RegisterContact {
    registerUserOnMailingList(contactData: IRegisterContactDTO): Promise<Contact>
}