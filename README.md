# ![ascii-donut-logo](https://github.com/Debajyati/asciiDonut/blob/main/ASCII-DONUT.png)
A versatile JavaScript library (written in typescript) to render mesmerizing ASCII donut animations in Node.js. Customizable foreground and background colors, interval timing, and resolution make it perfect for adding a retro terminal aesthetic to CLIs.

## Usage Example

1. The `startAnimation()` and `stopAnimation()` methods must be used together.
They directly print animation to the console. Without `stopAnimation()`, `startAnimation()` won't work.

As these methods cause side effects, they aren't suitable for browser/gui use.

To use in browser, check out `generateFrames()` method.
```js
import { Donut } from "ascii-donut";

const asciiDonut = new Donut({
  height: 22,
  width: 60,
  options: {
    foregroundColor: "green",
    // backgroundColor: "bgGreen",
    interval: 25,
  }
});

asciiDonut.startAnimation();

setTimeout(() => {
  asciiDonut.stopAnimation();
  console.log("Animation stopped.");
}, 8000);
```

2. The `generateFrames()` is an asynchronous generator method that yields ASCII donut frames at the specified interval for the given time duration.
It returns An async iterator that yields ASCII frames as strings.

This method is universal ( **I guess so :)** ).
For example, you can achieve the above functionality with the `generateFrames()` method also. Look below - 
```js
const { Donut } = require("ascii-donut");

const asciiDonut = new Donut({
  height: 22,
  width: 60,
  options: {
    foregroundColor: "ylBright",
    interval: 25,
  },
});

(async () => {
  const duration = 8000; // Total animation duration in milliseconds

  const startTime = Date.now();

  // Generating and logging frames for the specified duration
  for await (const frame of asciiDonut.generateFrames(duration)) {
    console.clear();
    console.log(frame);

    console.log(`Time elapsed: ${(Date.now() - startTime) / 1000}s`);
  }

  console.log("Animation stopped.");
})();
```

In many interesting ways, user can implement the ascii animation by the generated frames of strings in the DOM, which is upto the user how he/she will implement that.
## Library Exports

The `Donut` constructor is the only export from the library.

## Constructor arguments

The `Donut` constructor is the only export from the library. It takes one argument which is an object. The object has three keys - `height`, `width` and `options`.
The `height` and `width` are the height and width of the donut respectively. The options key takes another object which has three properties, - `foregroundColor`, `backgroundColor` and `interval`.

foregroundColor - color of the ascii texts in the animation (the donut). "white" by default.
backgroundColor - color of the background of the donut. "bgBlack" by default.
interval - frame rate of the animation. It is 50 by default.

### Valid Values of Colors (`foregroundColor` and `backgroundColor` in options) for the ascii art

Foreground colors: "black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "orange", "pink", "peach", "gold", "silver", "brown", "ylBright", "rdBright", "cyBright", "blBright", "mgBright", "grBright"

Background colors: "bgBlack", "bgRed", "bgGreen", "bgYellow", "bgMagenta", "bgCyan", "bgWhite", "bgOrange", "bgPeach", "bgPink", "bgBlue", "bgGold", "bgSilver", "bgBrown"
