import { AttendanceRepository } from './attendance.repository';
export declare class AttendanceService {
    attendanceRepo: AttendanceRepository;
    constructor(attendanceRepo: AttendanceRepository);
    findOne(role: any, uid: any): Promise<{
        message: string;
        err: number;
        data: {
            dbId: string;
        };
    } | {
        message: string;
        err: number;
        data?: undefined;
    }>;
    findAll(role: any): Promise<import("@firebase/firestore").DocumentData[]>;
    checkAttendance(role: any, uid: any): Promise<{
        err: number;
        message: any;
    }>;
}
