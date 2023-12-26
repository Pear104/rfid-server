import { BadRequestException, Injectable } from '@nestjs/common';
import { LecturerRepository } from './lecturer.repository';
import { UtilsRepository } from 'src/utils/utils.repository';
@Injectable()
export class LecturerService {
  constructor(
    public lecturerRepo: LecturerRepository,
    public utilsRepo: UtilsRepository,
  ) {}
  async findOne(id) {
    try {
      return {
        message: 'Found',
        err: 0,
        data: await this.lecturerRepo.findOne(id),
      };
    } catch (error) {
      return {
        message: 'Not found',
        err: 1,
      };
    }
  }
  async findAll() {
    return await this.lecturerRepo.findAll();
  }
  async create(data) {
    const exist = await this.findOne(data.id);
    if (exist.err == 0) {
      throw new BadRequestException('Id already existed');
    }
    await this.utilsRepo.added();
    return await this.lecturerRepo.create(data);
  }
}
