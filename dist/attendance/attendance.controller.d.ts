import { AttendanceService } from './attendance.service';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    getAllAttendance(role: string): Promise<import("@firebase/firestore").DocumentData[]>;
    getAttendance(role: string, uid: string): Promise<{
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
    checkAttendance(role: string, body: any): Promise<{
        err: number;
        message: any;
    }>;
}
