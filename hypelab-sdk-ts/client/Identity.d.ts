import { HypeLab } from './Client';
export declare class Identity {
    uuid: string;
    walletAddresses?: Array<string>;
    private walletSet;
    private client;
    constructor(client: HypeLab);
    setWalletAddresses(walletAddresses: Array<string>): void;
    toObject(): {
        wids: string[] | undefined;
        uuid: string;
    };
    private getOrSetUUID;
    private getUUID;
    private setUUID;
    private isValidUUID;
}
