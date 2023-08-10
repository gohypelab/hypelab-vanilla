import { HypeLab } from '../client';
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
    fragment: Fragment;
    as: string;
}
export interface Fragment {
    version: number;
    format: string;
    url: string;
}
export declare enum LoadError {
    fragmentNotLoaded = 0,
    metadataNotLoaded = 1
}
export interface ViewContext {
    client?: HypeLab;
}
export interface ViewConfiguration {
    context?: ViewContext;
    placement: Placement;
    fragment?: boolean;
    onError?: (error: LoadError) => void;
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
export interface Provider {
    name: string;
    type: string;
    version: string;
}
