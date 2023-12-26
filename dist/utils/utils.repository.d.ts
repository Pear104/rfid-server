export declare class UtilsRepository {
    db: any;
    constructor();
    getDBState(): Promise<import("@firebase/firestore").DocumentData>;
    gotten(data: any): Promise<void>;
    added(): Promise<void>;
}
