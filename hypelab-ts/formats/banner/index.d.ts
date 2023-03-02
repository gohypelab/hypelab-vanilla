import { AdMetadata } from '../../client';
import { LayoutView } from '../../views/layout';
interface BannerAction {
}
export declare class BannerView extends LayoutView<BannerAction> {
    private a?;
    private image?;
    render(base: HTMLElement): void;
    load(metadata: AdMetadata): void;
}
export {};
