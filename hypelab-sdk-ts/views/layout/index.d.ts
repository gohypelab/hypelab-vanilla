import { ViewConfiguration, AdMetadata, EventType } from '../../helpers/interfaces';
export { LayoutFragment } from './fragment';
import { ComponentChild, ComponentChildren } from 'preact';
export { useRef, useState, useEffect, useCallback, useReducer, useContext, useMemo } from 'preact/hooks';
export type { ComponentChildren };
export declare class LayoutView<T> {
    private client;
    private placement;
    private fragment;
    private errorHandler;
    private actions;
    private identifier;
    private currentCampaign;
    private ref?;
    private rendered?;
    private layoutFragment?;
    private eventHandlers;
    private eventQueue;
    constructor(config: ViewConfiguration);
    assign(ref: HTMLElement | null): void;
    on(event: string, action: (result: T) => void): void;
    handle(action: string, data?: any, completion?: () => void): void;
    protected render(base: HTMLElement): void;
    protected load(_: AdMetadata): void;
    protected renderComponent(component: ComponentChild, base?: HTMLElement): void;
    protected perform(action: string, result: T): void;
    protected track(event: EventType): Promise<void>;
    private renderLayout;
    private renderFragment;
    private loadFragment;
    private request;
    private refresh;
    private handleBridge;
    private show;
    private derender;
}
export declare class ServerView extends LayoutView<any> {
}
