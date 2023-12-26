"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepository = void 0;
const common_1 = require("@nestjs/common");
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const firestore_2 = require("firebase/firestore");
let StudentRepository = class StudentRepository {
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
        const application = (0, app_1.initializeApp)(firebaseConfig);
        this.db = (0, firestore_1.getFirestore)(application);
    }
    async findOne(id) {
        return (await (0, firestore_2.getDocs)((0, firestore_2.query)((0, firestore_2.collection)(this.db, 'student'), (0, firestore_1.where)('id', '==', id)))).docs[0].data();
    }
    async findAll() {
        return (await (0, firestore_2.getDocs)((0, firestore_2.collection)(this.db, 'student'))).docs.map((item) => item.data());
    }
    async create(data) {
        try {
            await (0, firestore_2.addDoc)((0, firestore_2.collection)(this.db, 'student'), data);
            return {
                message: 'add student succesfully',
                data: data,
            };
        }
        catch (error) {
            return {
                messeage: error,
            };
        }
    }
};
exports.StudentRepository = StudentRepository;
exports.StudentRepository = StudentRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StudentRepository);
//# sourceMappingURL=student.repository.js.map