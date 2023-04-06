import { HypeLab } from '../Client';
import { BaseAPI } from './BaseAPI';
export interface AliasParams {
    status: 'success' | 'error';
}
export declare namespace AliasParams {
    interface Data {
        status: 'success' | 'error';
    }
}
export declare class AliasAPI extends BaseAPI {
    client: HypeLab;
    constructor(client: HypeLab);
    create(newId: string, oldId: string): Promise<AliasParams>;
}
