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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LecturerController = void 0;
const common_1 = require("@nestjs/common");
const lecturer_service_1 = require("./lecturer.service");
const lecturer_create_dto_1 = require("./dtos/lecturer-create.dto");
let LecturerController = class LecturerController {
    constructor(lecturerService) {
        this.lecturerService = lecturerService;
    }
    async getAllLecturer() {
        return this.lecturerService.findAll();
    }
    async getOneLecturer(id) {
        return this.lecturerService.findOne(id);
    }
    async postCreateLecturer(body) {
        return this.lecturerService.create(body);
    }
};
exports.LecturerController = LecturerController;
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LecturerController.prototype, "getAllLecturer", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LecturerController.prototype, "getOneLecturer", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lecturer_create_dto_1.LecturerCreateDto]),
    __metadata("design:returntype", Promise)
], LecturerController.prototype, "postCreateLecturer", null);
exports.LecturerController = LecturerController = __decorate([
    (0, common_1.Controller)('lecturer'),
    __metadata("design:paramtypes", [lecturer_service_1.LecturerService])
], LecturerController);
//# sourceMappingURL=lecturer.controller.js.map