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
} from 'firebase/firestore';

export class StudentRepository {
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

  async findOne() {
    let databaseState = (
      await getDocs(query(collection(this.db, 'utils')))
    ).docs[0].data();
    return databaseState;
  }
}
