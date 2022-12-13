import { Contact } from "../../../domain/Contact";
import { Either } from "../../../shared/either";
import { ContactAlreadyExists } from "./RegisterContactErrors";

export type RegisterContactResponse = Promise<Either<ContactAlreadyExists, Contact>>