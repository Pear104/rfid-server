import { BadRequestException, Injectable } from '@nestjs/common';
import { StudentRepository } from './student.repository';
import { UtilsRepository } from 'src/utils/utils.repository';

@Injectable()
export class StudentService {
  constructor(
    public studentRepo: StudentRepository,
    public utilsRepo: UtilsRepository,
  ) {}
  async findOne(id) {
    try {
      return {
        message: 'Found',
        err: 0,
        data: await this.studentRepo.findOne(id),
      };
    } catch (error) {
      return {
        message: 'Not found',
        err: 1,
      };
    }
  }
  async findAll() {
    return await this.studentRepo.findAll();
  }
  async create(data) {
    const exist = await this.findOne(data.id);
    if (exist.err == 0) {
      throw new BadRequestException('Id already existed');
    }
    await this.utilsRepo.added();
    return await this.studentRepo.create(data);
  }
}
