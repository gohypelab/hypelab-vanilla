import { Bundle } from './bundle';
export declare enum HandleType {
    internal = 0,
    external = 1
}
export interface HandleRequest {
    type: HandleType;
    id: string;
    data: any;
}
export declare class Fragment {
    identifier: number;
    private bundle;
    private data;
    private html;
    private css;
    private js;
    handler: (request: HandleRequest) => any;
    private ref?;
    private offscreen?;
    private base?;
    private rendered;
    private static instanceCount;
    constructor(bundle: Bundle, data: any, view?: boolean);
    render(base?: HTMLElement): void;
    derender(): void;
    handle(action: string, data: any, deferred: boolean, completion?: () => void): void;
    private execute;
    private run;
    private instance;
    private runner;
}
