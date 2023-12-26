import { UtilsRepository } from './utils.repository';
export declare class UtilsService {
    utilsRepo: UtilsRepository;
    constructor(utilsRepo: UtilsRepository);
    getDBState(): Promise<import("@firebase/firestore").DocumentData>;
    gotten(uid: any): Promise<void>;
    added(): Promise<void>;
    emptyDB(): Promise<void>;
}
