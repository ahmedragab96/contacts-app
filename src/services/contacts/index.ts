import { db } from "../../config/firebase";
import { IContact } from "../../models/contact";

export class ContactsService {
  private static instance: ContactsService;

  public static get Instance() {
    if (!ContactsService.instance) {
      ContactsService.instance = new ContactsService();
    }
    return ContactsService.instance;
  }

  public async addContact(
    userId: string,
    contactData: IContact
  ): Promise<void> {
    await db
      .ref("contacts")
      .child(userId)
      .child(
        `${contactData.firstName}-${contactData.lastName}-${contactData.phoneNumber}`
      )
      .set(contactData);
  }
}
