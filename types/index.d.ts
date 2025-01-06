interface DonutOptions {
    foregroundColor?: string;
    backgroundColor?: string;
    interval?: number;
}
interface DonutParams {
    height: number;
    width: number;
    environment: 'node' | 'browser';
    options?: DonutOptions;
}
export declare class Donut {
    private height;
    private width;
    private environment;
    private foregroundColor;
    private backgroundColor;
    private interval;
    private intervalId;
    private outputElement;
    constructor({ height, width, environment, options }: DonutParams);
    private initBrowser;
    private initNode;
    startAnimation(): void;
    stopAnimation(): void;
}
export {};
