import { FragmentAsset } from './fragment';
export declare enum SignatureStatus {
    verified = 0,
    invalid = 1,
    cannotVerify = 2
}
export declare class Signature {
    private asset;
    private static pk?;
    constructor(asset: FragmentAsset);
    verify(): Promise<SignatureStatus>;
    private fetch;
    private bytes;
    private stringBuffer;
    private stringArray;
    private pkContent;
}
