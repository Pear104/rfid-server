import { StudentRepository } from './student.repository';
import { UtilsRepository } from 'src/utils/utils.repository';
export declare class StudentService {
    studentRepo: StudentRepository;
    utilsRepo: UtilsRepository;
    constructor(studentRepo: StudentRepository, utilsRepo: UtilsRepository);
    findOne(id: any): Promise<{
        message: string;
        err: number;
        data: import("@firebase/firestore").DocumentData;
    } | {
        message: string;
        err: number;
        data?: undefined;
    }>;
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
