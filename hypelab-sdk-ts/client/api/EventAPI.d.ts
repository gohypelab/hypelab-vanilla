import { HypeLab } from '../Client';
import { BaseAPI } from './BaseAPI';
import { EventType } from '../Client';
import { Placement, AdMetadata } from '../../helpers/interfaces';
export interface EventParams {
    status: 'success' | 'error';
    message?: string;
}
export declare namespace EventParams {
    interface Data {
        status: 'success' | 'error';
        message?: string;
    }
}
export declare class EventAPI extends BaseAPI {
    client: HypeLab;
    constructor(client: HypeLab);
    create(placement: Placement, campaign: AdMetadata, type: EventType, customParams?: {
        [key: string]: number | string;
    }): Promise<EventParams.Data>;
}
