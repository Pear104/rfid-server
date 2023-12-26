import { StudentService } from './student.service';
import { StudentCreateDto } from './dtos/student-create.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getAllStudent(): Promise<import("@firebase/firestore").DocumentData[]>;
    getOneStudent(id: any): Promise<{
        message: string;
        err: number;
        data: import("@firebase/firestore").DocumentData;
    } | {
        message: string;
        err: number;
        data?: undefined;
    }>;
    postCreateStudent(body: StudentCreateDto): Promise<{
        message: string;
        data: any;
        messeage?: undefined;
    } | {
        messeage: any;
        message?: undefined;
        data?: undefined;
    }>;
}
