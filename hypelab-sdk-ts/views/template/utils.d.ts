import { TypeAttributes } from './ui';
export declare function init<T>(attributes: TypeAttributes): T;
export declare function validate(ref: HTMLElement, attributes: TypeAttributes): boolean;
export declare function apply(ref: HTMLElement, attributes: TypeAttributes): void;
export declare function remove(ref: HTMLElement, children: HTMLElement[]): void;
export declare function playVideos(children: HTMLElement[]): void;
