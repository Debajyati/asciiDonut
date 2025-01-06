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

export class Donut {
  private height: number;
  private width: number;
  private environment: 'node' | 'browser';
  private foregroundColor: string;
  private backgroundColor: string;
  private interval: number;
  private intervalId: NodeJS.Timeout | null = null;
  private outputElement: HTMLElement | null = null;

  constructor({ height, width, environment, options = {} }: DonutParams) {
    if (!['node', 'browser'].includes(environment)) {
      throw new Error("Invalid environment. Use 'node' or 'browser'.");
    }

    this.height = height || 22; // Default height for animation
    this.width = width || 80;  // Default width for animation
    this.environment = environment;
    this.foregroundColor = options.foregroundColor || 'white';
    this.backgroundColor = options.backgroundColor || 'black';
    this.interval = options.interval || 50;

    if (this.environment === 'browser') {
      this.initBrowser();
    } else {
      this.initNode();
    }
  }

  private initBrowser(): void {
    // Create and style the <pre> element for the browser
    this.outputElement = document.createElement('pre');
    this.outputElement.style.color = this.foregroundColor;
    this.outputElement.style.backgroundColor = this.backgroundColor;
    this.outputElement.style.fontFamily = 'monospace';
    this.outputElement.style.fontSize = '10px';
    this.outputElement.style.lineHeight = '10px';
    this.outputElement.style.margin = '0';
    this.outputElement.style.padding = '0';
    this.outputElement.style.whiteSpace = 'pre-wrap';
    this.outputElement.style.overflow = 'hidden';
    this.outputElement.style.height = `${this.height}px`;
    this.outputElement.style.width = `${this.width}px`;
    document.body.appendChild(this.outputElement);
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

      if (this.environment === 'browser' && this.outputElement) {
        this.outputElement.textContent = output;
      } else {
        console.clear();
        console.log(output);
      }
    };

    this.intervalId = setInterval(renderFrame, this.interval);
  }

  public stopAnimation(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;

      if (this.environment === 'browser' && this.outputElement) {
        this.outputElement.textContent = '';
      } else {
        console.clear();
      }
    }
  }
}

