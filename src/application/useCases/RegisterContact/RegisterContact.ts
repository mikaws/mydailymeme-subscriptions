import { RegisterContactDTO } from "./RegisterContactDTO";
import { RegisterContactResponse } from "./RegisterContactResponse";

export interface RegisterContact {
    registerContactOnMailingList(contactData: RegisterContactDTO): Promise<RegisterContactResponse>
}