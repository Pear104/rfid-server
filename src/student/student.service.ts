import { Injectable } from '@nestjs/common';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  studentRepo: StudentRepository;
  constructor() {
    this.studentRepo = new StudentRepository();
  }
  findOne() {
    return this.studentRepo.findOne();
  }
}
