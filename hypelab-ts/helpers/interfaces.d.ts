import { HypeLab } from '../client';
export declare enum Environment {
    Development = 0,
    Production = 1
}
export declare enum EventType {
    impression = 0,
    videoView = 1,
    videoComplete = 2,
    videoStart = 3,
    videoError = 4,
    reward = 5,
    click = 6
}
export interface Callback {
    (placementId: string): void;
}
export interface Placement {
    id: string;
}
export interface AdMetadata {
    advertiser: string;
    headline: string;
    body: string;
    display_url: string;
    cta_url: string;
    cta_text: string;
    campaign_slug: string;
    creative_set_slug: string;
    creative_set_type: string;
    creative_set: CreativeSet;
}
export interface ViewContext {
    client?: HypeLab;
}
export interface ViewConfiguration {
    context?: ViewContext;
    placement: Placement;
}
export interface CreativeSet {
    [key: string]: string;
}
export interface RequestParams {
    status: 'success' | 'error';
    code: string;
    message: string;
    data?: AdMetadata;
}
export declare namespace RequestParams {
    interface Data {
        status: 'success' | 'error';
        code: string;
        message: string;
        data?: AdMetadata;
    }
}
export interface DefaultAdProps {
    client: HypeLab;
    placement: Placement;
}
