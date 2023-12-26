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
exports.LecturerService = void 0;
const common_1 = require("@nestjs/common");
const lecturer_repository_1 = require("./lecturer.repository");
const utils_repository_1 = require("../utils/utils.repository");
let LecturerService = class LecturerService {
    constructor(lecturerRepo, utilsRepo) {
        this.lecturerRepo = lecturerRepo;
        this.utilsRepo = utilsRepo;
    }
    async findOne(id) {
        try {
            return {
                message: 'Found',
                err: 0,
                data: await this.lecturerRepo.findOne(id),
            };
        }
        catch (error) {
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
            throw new common_1.BadRequestException('Id already existed');
        }
        await this.utilsRepo.added();
        return await this.lecturerRepo.create(data);
    }
};
exports.LecturerService = LecturerService;
exports.LecturerService = LecturerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [lecturer_repository_1.LecturerRepository,
        utils_repository_1.UtilsRepository])
], LecturerService);
//# sourceMappingURL=lecturer.service.js.map