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
exports.UtilsService = void 0;
const common_1 = require("@nestjs/common");
const utils_repository_1 = require("./utils.repository");
let UtilsService = class UtilsService {
    constructor(utilsRepo) {
        this.utilsRepo = utilsRepo;
    }
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
};
exports.UtilsService = UtilsService;
exports.UtilsService = UtilsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [utils_repository_1.UtilsRepository])
], UtilsService);
//# sourceMappingURL=utils.service.js.map