import { Environment } from '../util/interfaces';
import { Identity } from './Identity';
import { APIRequester } from './APIRequester';
import { AliasAPI, EventAPI, RequestAPI } from './api';
import { AdMetadata, CreativeSet, EventType, Provider } from '../helpers/interfaces';
export { EventType };
export { Environment };
export type { AdMetadata };
export type { CreativeSet };
export interface ClientConfig {
    URL: string;
    propertySlug: string;
    walletAddresses?: Array<string>;
    environment?: Environment;
}
export declare class HypeLab {
    propertySlug: string;
    environment: Environment;
    identity: Identity;
    config: ClientConfig;
    apiRequester: APIRequester;
    alias: AliasAPI;
    event: EventAPI;
    request: RequestAPI;
    static instance: HypeLab;
    static provider: Provider;
    constructor(config: ClientConfig);
    static setClient(client: HypeLab): void;
    private logInitialization;
}
