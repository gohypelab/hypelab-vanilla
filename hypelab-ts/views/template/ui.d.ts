import { Component, DisplayCampaign, Media } from './interfaces';
export declare enum ComponentType {
    text = 0,
    image = 1,
    media = 2,
    link = 3
}
interface Activator {
    set?: (value?: string) => void;
    link?: (value?: string) => void;
    load?: (media?: Media) => void;
    click?: (action?: () => void) => void;
    display?: () => void;
}
export type ComponentActivators = {
    [component in Component]?: Activator;
};
export type ComponentActions = {
    [component in Component]?: () => void;
};
export interface TypeAttributes {
    tag?: string;
    style?: {
        [prop: string]: any;
    };
    props?: {
        [prop: string]: any;
    };
}
export declare const activator: (ref: HTMLElement, type: ComponentType) => Activator;
export declare const activate: (campaign: DisplayCampaign, activators: ComponentActivators, actions: ComponentActions) => void;
export declare const componentTypes: {
    [component in Component]: ComponentType;
};
export {};
