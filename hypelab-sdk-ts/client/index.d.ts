import { Environment } from '../';
import { AdMetadata, CreativeSet, EventType, Provider } from './interfaces';
import { Identity } from './identity';
export { EventType };
export { Environment };
export type { AdMetadata };
export type { CreativeSet };
export interface ClientConfig {
    URL: string;
    propertySlug: string;
    walletAddresses?: Array<string>;
    environment?: Environment;
    fragmentURL?: string;
}
export declare class HypeLab {
    propertySlug: string;
    environment: Environment;
    config: ClientConfig;
    identity: Identity;
    static instance: HypeLab;
    static provider: Provider;
    constructor(config: ClientConfig);
    static setClient(client: HypeLab): void;
    private logInitialization;
    private log;
    private logError;
}
