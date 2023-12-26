import { LecturerService } from './lecturer.service';
import { LecturerCreateDto } from './dtos/lecturer-create.dto';
export declare class LecturerController {
    private readonly lecturerService;
    constructor(lecturerService: LecturerService);
    getAllLecturer(): Promise<import("@firebase/firestore").DocumentData[]>;
    getOneLecturer(id: any): Promise<{
        message: string;
        err: number;
        data: import("@firebase/firestore").DocumentData;
    } | {
        message: string;
        err: number;
        data?: undefined;
    }>;
    postCreateLecturer(body: LecturerCreateDto): Promise<{
        message: string;
        data: any;
        messeage?: undefined;
    } | {
        messeage: any;
        message?: undefined;
        data?: undefined;
    }>;
}
