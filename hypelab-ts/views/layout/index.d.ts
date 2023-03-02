import { ViewConfiguration, AdMetadata, EventType } from '../../helpers/interfaces';
import { ComponentChild, ComponentChildren } from 'preact';
export { LayoutFragment, FragmentType } from './fragment';
export { useRef, useState, useEffect, useCallback, useReducer, useContext, useMemo } from 'preact/hooks';
export type { ComponentChildren };
export declare class LayoutView<T> {
    private client;
    private placement;
    private actions;
    private identifier;
    private currentCampaign;
    private ref?;
    private rendered?;
    private eventHandlers;
    constructor(config: ViewConfiguration);
    assign(ref: HTMLElement | null): void;
    on(event: string, action: (result: T) => void): void;
    protected render(base: HTMLElement): void;
    protected load(_: AdMetadata): void;
    protected renderComponent(component: ComponentChild, base?: HTMLElement): void;
    protected perform(action: string, result: T): void;
    protected track(event: EventType): Promise<void>;
    private layoutRender;
    private layoutLoad;
    private layoutShow;
    private derender;
}
