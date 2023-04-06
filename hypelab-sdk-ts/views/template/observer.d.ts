export declare class Observer {
    private loaders;
    private showers;
    private loadObserver?;
    private showObserver?;
    private completedLoads;
    private completedShows;
    constructor();
    load(identifier: string, ref: HTMLElement, action: () => void): void;
    show(identifier: string, ref: HTMLElement | undefined, action: () => void): void;
    private observeLoad;
    private observeShow;
}
