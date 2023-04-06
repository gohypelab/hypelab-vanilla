import { Component, LoadError } from './hypelab-sdk-ts';
export { HypeLab, Environment } from './hypelab-sdk-ts';
export interface DefaultProps {
    placement: string;
    container: string;
}
export interface TemplateRefs {
    headline?: string;
    body?: string;
    ctaText?: string;
    ctaLink?: string;
    displayUrl?: string;
    image?: string;
    video?: string;
    icon?: string;
    advertiser?: string;
}
export type Template = {
    [component in Component]?: string | HTMLElement;
};
export declare enum TemplateMethod {
    identifier = 0,
    ref = 1
}
export declare function native(props: DefaultProps): void;
export declare function banner(props: DefaultProps): void;
export interface RewardedProps {
    placement: string;
    container: string;
    onComplete?: () => void;
    onError?: (error: LoadError) => void;
}
export interface Rewarded {
    show: () => void;
}
export declare function rewarded(props: RewardedProps): Rewarded;
