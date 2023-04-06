import { HypeLab } from './Client';
export type APIParams = Record<string, string | number | null | undefined>;
export declare class APIRequester {
    private axios;
    private readonly baseURL;
    private client;
    constructor(client: HypeLab, baseURL: string);
    private computeEndpoint;
    get<T>(endpoint: string, params?: URLSearchParams | APIParams): Promise<T>;
    post<T>(endpoint: string, data?: any): Promise<T>;
}
