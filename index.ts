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
    return `\x1b[91m${text}\x1b[0m`; // Bright Red
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

export class Donut {
  private height: number;
  private width: number;
  private foregroundColor: string;
  private backgroundColor: string;
  private interval: number;
  private intervalId: NodeJS.Timeout | null = null;

  constructor({ height, width, options = {} }: DonutParams) {
    this.height = height || 22; // Default height for animation
    this.width = width || 80;  // Default width for animation
    this.foregroundColor = options.foregroundColor || 'white';
    this.backgroundColor = options.backgroundColor || 'black';
    this.interval = options.interval || 50;

    this.initNode();
  }

  private initNode(): void {
    console.clear();
  }

  public startAnimation(): void {
    let a = 1;
    let b = 0;

    const renderFrame = (): void => {
      const X: string[] = [];
      const Y: number[] = [];
      a += 0.05;
      b += 0.07;

      const cosA = Math.cos(a);
      const sinA = Math.sin(a);
      const cosB = Math.cos(b);
      const sinB = Math.sin(b);

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

      console.clear();
      const fgColorFn = ConsoleColors[this.foregroundColor as keyof typeof ConsoleColors] as (text: string) => string;
      const bgColorFn = ConsoleColors[this.backgroundColor as keyof typeof ConsoleColors] as (text: string) => string;
      // Use default colors if undefined
      const fgApplied = fgColorFn ? fgColorFn(output) : output;
      const bgApplied = bgColorFn ? bgColorFn(fgApplied) : fgApplied;

      console.log(bgApplied);
    };

    this.intervalId = setInterval(renderFrame, this.interval);
  }

  public stopAnimation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;

      console.clear();
    }
  }
}

