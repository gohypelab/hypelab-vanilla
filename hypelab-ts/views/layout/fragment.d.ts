export declare enum FragmentType {
    html = 0,
    css = 1,
    js = 2
}
export type FragmentAsset = {
    [type in FragmentType]: string;
};
export declare enum FragmentStack {
    vanilla = 0,
    react = 1
}
export interface FragmentTransformer {
    type: FragmentType;
    match: string;
}
export declare class LayoutFragment {
    fragment: DocumentFragment;
    asset: FragmentAsset;
    stack: FragmentStack;
    private identifier;
    private handler?;
    private rendered;
    constructor(asset: FragmentAsset, stack?: FragmentStack);
    on(handler: (action: string, result: any) => void): void;
    render(base: HTMLElement): void;
    private transform;
}
