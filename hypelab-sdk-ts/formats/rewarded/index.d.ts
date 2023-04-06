import { AdMetadata } from '../../client';
import { LayoutView } from '../../views/layout';
type ModalProps = {
    ctaUrl: string;
    ctaText: string;
    poster: string;
    video: string;
    icon: string;
    displayUrl: string;
    headline: string;
    handleClose: (shouldReward: boolean) => void;
    handleClick: () => void;
    handleVideoView: Function;
    handleVideoStart: Function;
    handleVideoEnd: Function;
    handleVideoError: Function;
};
export declare function _RewardedModal(props: ModalProps): import("preact").JSX.Element;
export interface RewardResult {
    credits: number;
}
export declare class RewardedView extends LayoutView<RewardResult> {
    load(metadata: AdMetadata): void;
}
export {};
