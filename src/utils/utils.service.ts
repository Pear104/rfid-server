import { Injectable } from '@nestjs/common';
import { UtilsRepository } from './utils.repository';

@Injectable()
export class UtilsService {
  constructor(public utilsRepo: UtilsRepository) {}

  getDBState() {
    return this.utilsRepo.getDBState();
  }

  async gotten(uid) {
    let data = {
      currentUID: uid,
      isGotten: true,
    };
    return this.utilsRepo.gotten(data);
  }
  async added() {
    return this.utilsRepo.added();
  }

  async emptyDB() {
    return this.utilsRepo.emptyDB();
  }
}
