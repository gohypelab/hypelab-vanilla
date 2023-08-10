import { Bundle } from './bundle';
export declare enum SignatureStatus {
    verified = 0,
    invalid = 1,
    cannotVerify = 2
}
export declare class Signature {
    private bundle;
    private static pk?;
    constructor(bundle: Bundle);
    verify(): Promise<SignatureStatus>;
    private fetch;
    private bytes;
    private stringBuffer;
    private stringArray;
    private pkContent;
}
