export declare class AttendanceRepository {
    db: any;
    constructor();
    findOne(role: any, key: any, value: any): Promise<{
        dbId: string;
    }>;
    findAll(role: any): Promise<import("@firebase/firestore").DocumentData[]>;
    checkAttendance(role: any, dbId: any, data: any): Promise<void>;
}
