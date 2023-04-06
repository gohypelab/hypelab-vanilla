export declare enum Environment {
    Development = "development",
    Production = "production"
}
export interface Callback {
    (placementId: string): void;
}
export interface EventListeners {
    [key: string]: Callback;
}
