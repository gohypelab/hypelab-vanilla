import { LoadError } from 'hypelab-sdk-ts';
export { HypeLab, Environment } from 'hypelab-sdk-ts';
export interface DefaultProps {
    placement: string;
    container: string;
}
export declare enum TemplateMethod {
    identifier = 0,
    ref = 1
}
export declare function native(props: DefaultProps): null;
export declare function banner(props: DefaultProps): null;
export interface RewardedProps {
    placement: string;
    container: string;
    autoReload?: boolean;
    onReady?: () => void;
    onComplete?: () => void;
    onError?: (error: LoadError) => void;
    onVideoStart?: () => void;
    onVideoComplete?: () => void;
}
export interface Rewarded {
    show: () => void;
    setAutoReload: (reload: boolean) => void;
}
export declare function rewarded(props: RewardedProps): {
    show: () => void;
} | null;
