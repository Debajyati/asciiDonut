interface DonutOptions {
    foregroundColor?: string;
    backgroundColor?: string;
    interval?: number;
}
interface DonutParams {
    height: number;
    width: number;
    options?: DonutOptions;
}
export declare class Donut {
    private height;
    private width;
    private foregroundColor;
    private backgroundColor;
    private interval;
    private intervalId;
    constructor({ height, width, options }: DonutParams);
    private initNode;
    startAnimation(): void;
    stopAnimation(): void;
}
export {};
