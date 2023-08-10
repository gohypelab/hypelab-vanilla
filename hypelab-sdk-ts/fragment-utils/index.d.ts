export declare enum HandleType {
    internal = 0,
    external = 1
}
export interface HandleRequest {
    type: HandleType;
    id: string;
    data?: any;
}
export declare enum EventType {
    impression = "impression",
    click = "click",
    videoStart = "videoStart",
    videoComplete = "videoComplete",
    videoError = "videoError"
}
export declare function identifier(): any;
export declare function data(id?: string): any;
export declare function performRequest(request: HandleRequest): Promise<any>;
export declare function internalRequest(id: string, data?: any): Promise<any>;
export declare function externalRequest(id: string, data?: any): Promise<any>;
export declare function id(id: string): HTMLElement | null;
export declare function ref(id: string): HTMLElement;
export declare function refs(ids: string[]): {
    [id in string]: HTMLElement;
};
export declare function requestAd(): Promise<any>;
export declare function trackAd(type: EventType, response: any): Promise<boolean>;
export declare function style(ref: HTMLElement, props: {
    [prop in string]: any;
}, animated?: boolean): void;
export declare function resetStyle(ref: HTMLElement, props: string[], animated?: boolean): void;
export declare function wait(time: number): Promise<void>;
