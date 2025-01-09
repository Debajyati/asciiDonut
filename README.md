A versatile JavaScript library to render mesmerizing ASCII donut animations in Node.js. Customizable foreground and background colors, interval timing, and resolution make it perfect for adding a retro terminal aesthetic to CLIs.

## Usage Example

```js
import { Donut } from "asciidonut";

const asciiDonut = new Donut({
  height: 22,
  width: 60,
  options: {
    foregroundColor: "green",
    // backgroundColor: "bgGreen",
    interval: 25,
  }
})

asciiDonut.startAnimation();

setTimeout(() => {
  asciiDonut.stopAnimation();
  console.log("Animation stopped.");
}, 8000);
```

## Constructor arguments

The Donut constructor is the only export from the library. 

## Constructor arguments

The `Donut` constructor is the only export from the library. It takes one argument which is an object. The object has three keys - `height`, `width` and `options`.
The `height` and `width` are the height and width of the donut respectively. The options key takes another object which has three properties, - `foregroundColor`, `backgroundColor` and `interval`.

foregroundColor - color of the ascii texts in the animation (the donut). "white" by default.
backgroundColor - color of the background of the donut. "bgBlack" by default.
interval - frame rate of the animation. It is 50 by default.

### Valid Values of Colors (foregroundColor and backgroundColor in options) for the ascii art

Foreground colors: "black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "orange", "pink", "peach", "gold", "silver", "brown"

Background colors: "bgBlack", "bgRed", "bgGreen", "bgYellow", "bgMagenta", "bgCyan", "bgWhite", "bgOrange", "bgPeach", "bgPink", "bgBlue", "bgGold", "bgSilver", "bgBrown"
