/**
 * Interface representing options for configuring the donut animation.
 */
interface DonutOptions {
    /**
     * Foreground color for the donut animation.
     * Must be a valid color method from `ConsoleColors`.
     */
    foregroundColor?: string;
    /**
     * Background color for the donut animation.
     * Must be a valid color method from `ConsoleColors`.
     */
    backgroundColor?: string;
    /**
     * Interval time in milliseconds for the animation frame refresh rate.
     * Default is 50ms.
     */
    interval?: number;
}
/**
 * Interface representing parameters for initializing the Donut class.
 */
interface DonutParams {
    /**
     * Height of the animation area.
     */
    height: number;
    /**
     * Width of the animation area.
     */
    width: number;
    /**
     * Optional configuration for animation appearance and timing.
     */
    options?: DonutOptions;
}
/**
 * Class responsible for rendering and animating an ASCII donut in the console.
 */
export declare class Donut {
    private height;
    private width;
    private foregroundColor;
    private backgroundColor;
    private interval;
    private intervalId;
    private a;
    private b;
    /**
       * Creates an instance of the Donut class.
       * @param params - Parameters for initializing the donut animation.
       */
    constructor({ height, width, options }: DonutParams);
    /**
       * Initializes the console for the donut animation by clearing it.
       */
    private initNode;
    /**
     * Generates the ASCII donut frame output for the current angles `a` and `b`.
     * @returns The ASCII donut output string.
     */
    private generateFrameOutput;
    /**
     * Private method that applies color to `inputString`.
     * @param inputString - The string to apply color into.
     * @returns The color applied output string.
     */
    private applyColors;
    /**
     * Starts the ASCII donut animation in the console.
     */
    startAnimation(): void;
    /**
     * Stops the ASCII donut animation and clears the console.
     */
    stopAnimation(): void;
    /**
   * Asynchronous generator that yields ASCII donut frames at the specified interval.
   * @param duration - Total duration (in milliseconds) for generating frames.
   * @returns An async iterator that yields ASCII frames as strings.
   */
    generateFrames(duration: number): AsyncGenerator<string>;
}
export {};
