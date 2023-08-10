export declare class Bundle {
    private data;
    private format;
    private static memoryCache;
    version: string;
    build: string;
    html: string;
    css: string;
    js: string;
    signature: string;
    constructor(data: string, format: string);
    updateLocalCache(): void;
    static fromMemoryCache(format: string): Bundle | null;
    static fromLocalCache(format: string): Bundle | null;
    private component;
}
