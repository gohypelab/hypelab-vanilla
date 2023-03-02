import { Component } from './interfaces';
import { ViewConfiguration, AdMetadata } from '../../helpers/interfaces';
export declare class TemplateView {
    private client;
    private placement;
    private identifier;
    private currentCampaign?;
    private currentMetadata?;
    private activators;
    private activatorsValid;
    private actions;
    private eventHandlers;
    private stateHandlers;
    constructor(config: ViewConfiguration);
    assign(ref: HTMLElement | null, component: Component): void;
    on(stateHandler: (metadata: AdMetadata) => void): void;
    private load;
    private track;
    private display;
    private show;
    private action;
}
