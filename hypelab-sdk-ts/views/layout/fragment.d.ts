declare enum FragmentType {
    html = "html",
    css = "css",
    js = "js"
}
export declare class FragmentAsset {
    version: string;
    build: string;
    html: string;
    css: string;
    js: string;
    signature: string;
    constructor(bundle: string);
    private decode;
}
export interface FragmentTransformer {
    type: FragmentType;
    match: string;
}
export declare class LayoutFragment {
    asset: FragmentAsset;
    identifier: number;
    bridge: (action: string, result: any) => void;
    action: (action: string, result: any) => void;
    private fragment;
    private rendered;
    private static instanceCount;
    constructor(asset: FragmentAsset);
    render(base: HTMLElement, data: any): void;
    derender(base: HTMLElement): void;
    handle(action: string, data: any, deferred: boolean, completion?: () => void): void;
    private initialize;
    private execute;
}
export {};
