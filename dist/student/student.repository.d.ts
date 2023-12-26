export declare class StudentRepository {
    db: any;
    constructor();
    findOne(id: any): Promise<import("@firebase/firestore").DocumentData>;
    findAll(): Promise<import("@firebase/firestore").DocumentData[]>;
    create(data: any): Promise<{
        message: string;
        data: any;
        messeage?: undefined;
    } | {
        messeage: any;
        message?: undefined;
        data?: undefined;
    }>;
}
