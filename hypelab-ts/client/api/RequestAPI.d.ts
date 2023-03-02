import { HypeLab } from '../Client';
import { BaseAPI } from './BaseAPI';
import { Placement, RequestParams } from '../../helpers/interfaces';
export declare class RequestAPI extends BaseAPI {
    client: HypeLab;
    constructor(client: HypeLab);
    create(placement: Placement): Promise<RequestParams>;
}
