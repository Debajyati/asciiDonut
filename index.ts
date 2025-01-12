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
 * Utility class providing methods for styling console output using ANSI color codes.
 */
class ConsoleColors {
  // Foreground colors
  static black(text: string): string {
    return `\x1b[30m${text}\x1b[0m`;
  }
  static red(text: string): string {
    return `\x1b[31m${text}\x1b[0m`;
  }
  static green(text: string): string {
    return `\x1b[32m${text}\x1b[0m`;
  }
  static yellow(text: string): string {
    return `\x1b[33m${text}\x1b[0m`;
  }
  static blue(text: string): string {
    return `\x1b[34m${text}\x1b[0m`;
  }
  static magenta(text: string): string {
    return `\x1b[35m${text}\x1b[0m`;
  }
  static cyan(text: string): string {
    return `\x1b[36m${text}\x1b[0m`;
  }
  static white(text: string): string {
    return `\x1b[37m${text}\x1b[0m`;
  }

  static grBright(text: string): string {
    return `\x1b[92m${text}\x1b[0m`; // Bright Green
  }

  static rdBright(text: string): string {
    return `\x1b[91m${text}\x1b[0m`;  // Bright Red
  }

  static ylBright(text: string): string {
    return `\x1b[93m${text}\x1b[0m`; // Bright Yellow
  }

  static blBright(text: string): string {
    return `\x1b[94m${text}\x1b[0m`; // Bright Blue
  }

  static mgBright(text: string): string {
    return `\x1b[95m${text}\x1b[0m`; // Bright Magenta
  }

  static cyBright(text: string): string {
    return `\x1b[96m${text}\x1b[0m`; // Bright Cyan
  }

  static orange(text: string): string {
    return `\x1b[38;5;214m${text}\x1b[0m`; // Orange background (using 256-color mode)
  }

  static peach(text: string): string {
    return `\x1b[38;5;219m${text}\x1b[0m`; // Peach background (using 256-color mode)
  }

  static gold(text: string): string {
    return `\x1b[38;5;220m${text}\x1b[0m`; // Gold background (using 256-color mode)
  }

  static silver(text: string): string {
    return `\x1b[38;5;230m${text}\x1b[0m`; // Silver background (using 256-color mode)
  }

  static pink(text: string): string {
    return `\x1b[38;5;213m${text}\x1b[0m`; // Pink background (using 256-color mode)
  }

  static brown(text: string): string {
    return `\x1b[38;5;94m${text}\x1b[0m`; // Brown background (using 256-color mode)
  }

  // Background colors
  static bgBlack(text: string): string {
    return `\x1b[40m${text}\x1b[0m`;
  }
  static bgRed(text: string): string {
    return `\x1b[41m${text}\x1b[0m`;
  }
  static bgGreen(text: string): string {
    return `\x1b[42m${text}\x1b[0m`;
  }
  static bgYellow(text: string): string {
    return `\x1b[43m${text}\x1b[0m`;
  }
  static bgBlue(text: string): string {
    return `\x1b[44m${text}\x1b[0m`;
  }
  static bgMagenta(text: string): string {
    return `\x1b[45m${text}\x1b[0m`;
  }
  static bgCyan(text: string): string {
    return `\x1b[46m${text}\x1b[0m`;
  }
  static bgWhite(text: string): string {
    return `\x1b[47m${text}\x1b[0m`;
  }

  static bgOrange(text: string): string {
    return `\x1b[48;5;214m${text}\x1b[0m`; // Orange background (using 256-color mode)
  }

  static bgPeach(text: string): string {
    return `\x1b[48;5;219m${text}\x1b[0m`; // Peach background (using 256-color mode)
  }

  static bgGold(text: string): string {
    return `\x1b[48;5;220m${text}\x1b[0m`; // Gold background (using 256-color mode)
  }

  static bgSilver(text: string): string {
    return `\x1b[48;5;230m${text}\x1b[0m`; // Silver background (using 256-color mode)
  }

  static bgPink(text: string): string {
    return `\x1b[48;5;213m${text}\x1b[0m`; // Pink background (using 256-color mode)
  }

  static bgBrown(text: string): string {
    return `\x1b[48;5;94m${text}\x1b[0m`; // Brown background (using 256-color mode)
  }
}

/**
 * Class responsible for rendering and animating an ASCII donut in the console.
 */
export class Donut {
  private height: number;
  private width: number;
  private foregroundColor: string;
  private backgroundColor: string;
  private interval: number;
  private intervalId: NodeJS.Timeout | null = null;

  private a: number = 1; // Angle variable for rotation
  private b: number = 0; // Angle variable for rotation

/**
   * Creates an instance of the Donut class.
   * @param params - Parameters for initializing the donut animation.
   */  
  constructor({ height, width, options = {} }: DonutParams) {
    this.height = height || 22; // Default height for animation
    this.width = width || 80;  // Default width for animation
    this.foregroundColor = options.foregroundColor || 'white';
    this.backgroundColor = options.backgroundColor || 'black';
    this.interval = options.interval || 50;

    this.initNode();
  }

/**
   * Initializes the console for the donut animation by clearing it.
   */
  private initNode(): void {
    console.clear();
  }

  /**
   * Generates the ASCII donut frame output for the current angles `a` and `b`.
   * @returns The ASCII donut output string.
   */
  private generateFrameOutput(): string {
    const X: string[] = [];
    const Y: number[] = [];
    this.a += 0.05;
    this.b += 0.07;

    const cosA = Math.cos(this.a);
    const sinA = Math.sin(this.a);
    const cosB = Math.cos(this.b);
    const sinB = Math.sin(this.b);

    for (let k = 0; k < this.width * this.height; k++) {
      X[k] = k % this.width === this.width - 1 ? "\n" : " ";
      Y[k] = 0;
    }

    for (let j = 0; j < 6.28; j += 0.07) {
      const cosT = Math.cos(j);
      const sinT = Math.sin(j);

      for (let i = 0; i < 6.28; i += 0.02) {
        const sinP = Math.sin(i);
        const cosP = Math.cos(i);
        const h = cosT + 2;
        const d = 1 / (sinP * h * sinA + sinT * cosA + 5);
        const t = sinP * h * cosA - sinT * sinA;
        const x = (this.width / 2 + (this.width / 2.5) * d * (cosP * h * cosB - t * sinB)) | 0;
        const y = (this.height / 2 + (this.height / 3) * d * (cosP * h * sinB + t * cosB)) | 0;
        const o = x + this.width * y;
        const n =
          (8 *
            ((sinT * sinA - sinP * cosT * cosA) * cosB -
              sinP * cosT * sinA -
              sinT * cosA -
              cosP * cosT * sinB)) |
            0;

        if (y < this.height && y >= 0 && x >= 0 && x < this.width && d > Y[o]) {
          Y[o] = d;
          X[o] = ".,-~:;=!*#$@"[n > 0 ? n : 0];
        }
      }
    }

    const output = X.join("");
    return output;
  }

  /**
   * Private method that applies color to `inputString`.
   * @param inputString - The string to apply color into.
   * @returns The color applied output string.
   */
  private applyColors(inputString: string): string {
    const fgColorFn = ConsoleColors[this.foregroundColor as keyof typeof ConsoleColors] as (text: string) => string;
    const bgColorFn = ConsoleColors[this.backgroundColor as keyof typeof ConsoleColors] as (text: string) => string;
    const fgApplied = fgColorFn ? fgColorFn(inputString) : inputString;
    const bgApplied = bgColorFn ? bgColorFn(fgApplied) : fgApplied;
      
    return bgApplied;
  }

  /**
   * Starts the ASCII donut animation in the console.
   */
  public startAnimation(): void {
    const renderFrame = (): void => {
      const output = this.generateFrameOutput();
      const coloredOutput = this.applyColors(output);

      console.clear();

      console.log(coloredOutput);
    };

    this.intervalId = setInterval(renderFrame, this.interval);
  }

  /**
   * Stops the ASCII donut animation and clears the console.
   */
  public stopAnimation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;

      console.clear();
    }
  }

    /**
   * Asynchronous generator that yields ASCII donut frames at the specified interval.
   * @param duration - Total duration (in milliseconds) for generating frames.
   * @returns An async iterator that yields ASCII frames as strings.
   */
  public async *generateFrames(duration: number): AsyncGenerator<string> {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
      yield this.applyColors(this.generateFrameOutput());
      await new Promise(resolve => setTimeout(resolve, this.interval));
    }
  }
}

