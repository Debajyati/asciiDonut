A versatile JavaScript library to render mesmerizing ASCII donut animations in Node.js. Customizable foreground and background colors, interval timing, and resolution make it perfect for adding a retro terminal aesthetic to terminals (CLIs)

## Usage Example

```js
import { Donut } from "asciidonut";

const asciiDonut = new Donut({
  height: 22,
  width: 60,
  environment: "node",
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
