import { AdMetadata } from '../../client';
import { LayoutView } from '../../views/layout';
export declare class ServerView extends LayoutView<any> {
    private fragment?;
    render(base: HTMLElement): void;
    load(metadata: AdMetadata): void;
}
