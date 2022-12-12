import { RegisterContact } from './RegisterContact';
import { Contact } from '../../../domain/Contact';
import { IContactRepository } from '../../repository/IContactRepository';
import { IRegisterContactDTO } from '../RegisterContact/IRegisterContactDTO';

export class RegisterUserOnMailingList implements RegisterContact {
    private readonly contactRepository: IContactRepository;
    constructor (contactRepo: IContactRepository) {
        this.contactRepository = contactRepo;
    }

    async registerUserOnMailingList(contactData: IRegisterContactDTO): Promise<Contact> {
        const { email, subscription } = contactData;
        const contact = Contact.create(email, subscription);
        
        if(await this.contactRepository.exists(contact.email)) {
            throw new Error('This contact already exists');
        }

        return await this.contactRepository.add(contact);
    }
}