import { HypeLab } from '../client';
export interface Props {
    client?: HypeLab | null;
    placement: string;
    format: string;
}
export declare class View {
    private client;
    private placement;
    private format;
    private ref?;
    private assigner;
    private invalid;
    private fragment?;
    private actions;
    constructor(props: Props);
    assign(ref?: HTMLElement): void;
    derender(): void;
    on(event: string, action: (result: any) => Promise<any>): void;
    private load;
    private download;
    private request;
    private handler;
}
export declare const PlacementIdentifier = "hypelabPlacementIdentifier";
