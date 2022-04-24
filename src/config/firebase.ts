/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-var-requires */
import * as admin from 'firebase-admin';

var serviceAccount = require('../../strv-addressbook-ragab-ahmed.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://strv-addressbook-ragab-ahmed-default-rtdb.europe-west1.firebasedatabase.app",
});

const db = admin.database();
const auth = admin.auth();

export { db, auth };
