// await db.ref('contacts').child('egertwrg').child('ahmed-01111111').set({ firstName: 'Ahmed'});
// import { User } from '../../models/userModel';
import jwt from 'jsonwebtoken';
import { config } from '../../config/env';
import { User } from '../../models'; 
import { AuthUser } from './types';
import db from '../../config/firebase';

export class ContactsService {
  private static instance: ContactsService;

  public static get Instance() {
    if (!ContactsService.instance) {
      ContactsService.instance = new ContactsService();
    }
    return ContactsService.instance;
  }

  public async addContact(): Promise<AuthUser> {
    
    return {
      
    };
  }
}
