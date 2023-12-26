import { UtilsService } from './utils.service';
export declare class UtilsController {
    private readonly utilsService;
    constructor(utilsService: UtilsService);
    getDBState(): Promise<import("@firebase/firestore").DocumentData>;
    getUID(body: any): Promise<void>;
    postAdded(body: any): Promise<void>;
    emptyDB(): Promise<void>;
}
