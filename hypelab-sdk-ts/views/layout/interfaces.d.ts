export type LayoutRender = (base: HTMLElement) => void;
export type AdActions<T> = {
    [action: string]: (result: T) => void;
};
export declare const PlacementIdentifier = "hypelabPlacementIdentifier";
