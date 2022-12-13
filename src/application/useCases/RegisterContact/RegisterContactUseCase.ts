
import { Contact } from '../../../domain/Contact';
import { RegisterContact } from './RegisterContact';
import { RegisterContactDTO } from './RegisterContactDTO';
import { RegisterContactResponse } from './RegisterContactResponse';
import { IContactRepository } from '../../repository/IContactRepository';
import { left, right } from '../../../shared/either';
import { ContactAlreadyExists } from './RegisterContactErrors';
export class RegisterContactOnMailingList implements RegisterContact {
    private readonly contactRepository: IContactRepository;
    constructor (contactRepo: IContactRepository) {
        this.contactRepository = contactRepo;
    }

    async registerContactOnMailingList(contactData: RegisterContactDTO): Promise<RegisterContactResponse> {
        const result = Contact.create(contactData);
        if(result.isLeft()) {
            return left(result.value);
        }
        
        if(await this.contactRepository.exists(contactData.email)) {
            return left(new ContactAlreadyExists(contactData.email));
        }

        const contact = result.value;


        return right(await this.contactRepository.add(contact));
    }
}