import { Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  collection,
  getDocs,
  query,
  doc,
  updateDoc,
  addDoc,
  where,
} from 'firebase/firestore';

@Injectable()
export class AttendanceRepository {
  public db;
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyC0KXzWCGKwrr2eb-dcE1m-8oS6k5hiZ3g',
      authDomain: 'rfid-23e43.firebaseapp.com',
      projectId: 'rfid-23e43',
      storageBucket: 'rfid-23e43.appspot.com',
      messagingSenderId: '290776495920',
      appId: '1:290776495920:web:180a284deaa3cdc6647af5',
      measurementId: 'G-LW0PPPZVW0',
    };
    const application = initializeApp(firebaseConfig);
    this.db = getFirestore(application);
  }

  async findOne(role, key, value) {
    const data = (
      await getDocs(query(collection(this.db, role), where(key, '==', value)))
    ).docs[0];
    return {
      ...data.data(),
      dbId: data.id,
    };
  }

  async findAll(role) {
    return (await getDocs(collection(this.db, role))).docs.map((item) =>
      item.data(),
    );
  }

  async checkAttendance(role, dbId, data) {
    await updateDoc(doc(this.db, role, dbId), data);
  }
}
