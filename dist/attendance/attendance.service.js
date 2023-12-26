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
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const attendance_repository_1 = require("./attendance.repository");
let AttendanceService = class AttendanceService {
    constructor(attendanceRepo) {
        this.attendanceRepo = attendanceRepo;
    }
    async findOne(role, uid) {
        try {
            return {
                message: 'Found',
                err: 0,
                data: await this.attendanceRepo.findOne(role, 'uid', uid),
            };
        }
        catch (error) {
            return {
                message: 'Not found',
                err: 1,
            };
        }
    }
    async findAll(role) {
        return this.attendanceRepo.findAll(role);
    }
    async checkAttendance(role, uid) {
        const exist = await this.findOne(role, uid);
        const d = new Date().toLocaleString('en-GB', {
            timeZone: 'Asia/Ho_Chi_Minh',
        });
        let date = `${d.slice(0, 2)}/${d.slice(3, 5)}/${d.slice(6, 10)}`;
        let time = `${d.slice(12, 14)}:${d.slice(15, 17)}:${d.slice(18, 20)}`;
        let data;
        if (exist.err == 0) {
            if (!exist.data.attendance) {
                data = {
                    ...exist.data,
                    attendance: {
                        [date]: [time],
                    },
                };
            }
            else {
                if (exist.data.attendance[date]) {
                    exist.data.attendance[date].push(time);
                    data = {
                        ...exist.data,
                    };
                }
                else {
                    data = {
                        ...exist.data,
                        attendance: {
                            ...exist.data.attendance,
                            [date]: [time],
                        },
                    };
                }
            }
            try {
                await this.attendanceRepo.checkAttendance(role, exist.data.dbId, data);
                return {
                    err: 0,
                    message: 'attend successfully',
                };
            }
            catch (error) {
                return {
                    err: 3,
                    message: error,
                };
            }
        }
        else {
            return {
                err: 1,
                message: 'Not found',
            };
        }
    }
};
exports.AttendanceService = AttendanceService;
exports.AttendanceService = AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [attendance_repository_1.AttendanceRepository])
], AttendanceService);
//# sourceMappingURL=attendance.service.js.map