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
  getDoc,
  where,
} from 'firebase/firestore';

@Injectable()
export class LecturerRepository {
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

  async findOne(id) {
    return (
      await getDocs(
        query(collection(this.db, 'lecturer'), where('id', '==', id)),
      )
    ).docs[0].data();
  }

  async findAll() {
    return (await getDocs(collection(this.db, 'lecturer'))).docs.map((item) =>
      item.data(),
    );
  }

  async create(data) {
    try {
      await addDoc(collection(this.db, 'lecturer'), data);
      return {
        message: 'add lecturer succesfully',
        data: data,
      };
    } catch (error) {
      return {
        messeage: error,
      };
    }
  }

  async updateOne() {
    return 1;
  }

  async deleteOne() {
    return 1;
  }

  async deleteAll() {
    return 1;
  }
}
