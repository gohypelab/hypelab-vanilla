import { Component } from './hypelab-ts';
export { HypeLab, Environment } from './hypelab-ts';
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
export declare function loadNative(props: DefaultProps): void;
export declare function loadBanner(props: DefaultProps): void;
