var ConsoleColors = /** @class */ (function () {
    function ConsoleColors() {
    }
    // Foreground colors
    ConsoleColors.black = function (text) {
        return "\u001B[30m".concat(text, "\u001B[0m");
    };
    ConsoleColors.red = function (text) {
        return "\u001B[31m".concat(text, "\u001B[0m");
    };
    ConsoleColors.green = function (text) {
        return "\u001B[32m".concat(text, "\u001B[0m");
    };
    ConsoleColors.yellow = function (text) {
        return "\u001B[33m".concat(text, "\u001B[0m");
    };
    ConsoleColors.blue = function (text) {
        return "\u001B[34m".concat(text, "\u001B[0m");
    };
    ConsoleColors.magenta = function (text) {
        return "\u001B[35m".concat(text, "\u001B[0m");
    };
    ConsoleColors.cyan = function (text) {
        return "\u001B[36m".concat(text, "\u001B[0m");
    };
    ConsoleColors.white = function (text) {
        return "\u001B[37m".concat(text, "\u001B[0m");
    };
    ConsoleColors.grBright = function (text) {
        return "\u001B[92m".concat(text, "\u001B[0m"); // Bright Green
    };
    ConsoleColors.rdBright = function (text) {
        return "\u001B[91m".concat(text, "\u001B[0m"); // Bright Red
    };
    ConsoleColors.ylBright = function (text) {
        return "\u001B[93m".concat(text, "\u001B[0m"); // Bright Yellow
    };
    ConsoleColors.blBright = function (text) {
        return "\u001B[94m".concat(text, "\u001B[0m"); // Bright Blue
    };
    ConsoleColors.mgBright = function (text) {
        return "\u001B[95m".concat(text, "\u001B[0m"); // Bright Magenta
    };
    ConsoleColors.cyBright = function (text) {
        return "\u001B[96m".concat(text, "\u001B[0m"); // Bright Cyan
    };
    // Background colors
    ConsoleColors.bgBlack = function (text) {
        return "\u001B[40m".concat(text, "\u001B[0m");
    };
    ConsoleColors.bgRed = function (text) {
        return "\u001B[41m".concat(text, "\u001B[0m");
    };
    ConsoleColors.bgGreen = function (text) {
        return "\u001B[42m".concat(text, "\u001B[0m");
    };
    ConsoleColors.bgYellow = function (text) {
        return "\u001B[43m".concat(text, "\u001B[0m");
    };
    ConsoleColors.bgBlue = function (text) {
        return "\u001B[44m".concat(text, "\u001B[0m");
    };
    ConsoleColors.bgMagenta = function (text) {
        return "\u001B[45m".concat(text, "\u001B[0m");
    };
    ConsoleColors.bgCyan = function (text) {
        return "\u001B[46m".concat(text, "\u001B[0m");
    };
    ConsoleColors.bgWhite = function (text) {
        return "\u001B[47m".concat(text, "\u001B[0m");
    };
    ConsoleColors.bgOrange = function (text) {
        return "\u001B[48;5;214m".concat(text, "\u001B[0m"); // Orange background (using 256-color mode)
    };
    ConsoleColors.bgPeach = function (text) {
        return "\u001B[48;5;219m".concat(text, "\u001B[0m"); // Peach background (using 256-color mode)
    };
    ConsoleColors.bgGold = function (text) {
        return "\u001B[48;5;220m".concat(text, "\u001B[0m"); // Gold background (using 256-color mode)
    };
    ConsoleColors.bgSilver = function (text) {
        return "\u001B[48;5;230m".concat(text, "\u001B[0m"); // Silver background (using 256-color mode)
    };
    ConsoleColors.bgPink = function (text) {
        return "\u001B[48;5;213m".concat(text, "\u001B[0m"); // Pink background (using 256-color mode)
    };
    ConsoleColors.bgBrown = function (text) {
        return "\u001B[48;5;94m".concat(text, "\u001B[0m"); // Brown background (using 256-color mode)
    };
    return ConsoleColors;
}());
var Donut = /** @class */ (function () {
    function Donut(_a) {
        var height = _a.height, width = _a.width, _b = _a.options, options = _b === void 0 ? {} : _b;
        this.intervalId = null;
        this.height = height || 22; // Default height for animation
        this.width = width || 80; // Default width for animation
        this.foregroundColor = options.foregroundColor || 'white';
        this.backgroundColor = options.backgroundColor || 'black';
        this.interval = options.interval || 50;
        this.initNode();
    }
    Donut.prototype.initNode = function () {
        console.clear();
    };
    Donut.prototype.startAnimation = function () {
        var _this = this;
        var a = 1;
        var b = 0;
        var renderFrame = function () {
            var X = [];
            var Y = [];
            a += 0.05;
            b += 0.07;
            var cosA = Math.cos(a);
            var sinA = Math.sin(a);
            var cosB = Math.cos(b);
            var sinB = Math.sin(b);
            for (var k = 0; k < _this.width * _this.height; k++) {
                X[k] = k % _this.width === _this.width - 1 ? "\n" : " ";
                Y[k] = 0;
            }
            for (var j = 0; j < 6.28; j += 0.07) {
                var cosT = Math.cos(j);
                var sinT = Math.sin(j);
                for (var i = 0; i < 6.28; i += 0.02) {
                    var sinP = Math.sin(i);
                    var cosP = Math.cos(i);
                    var h = cosT + 2;
                    var d = 1 / (sinP * h * sinA + sinT * cosA + 5);
                    var t = sinP * h * cosA - sinT * sinA;
                    var x = (_this.width / 2 + (_this.width / 2.5) * d * (cosP * h * cosB - t * sinB)) | 0;
                    var y = (_this.height / 2 + (_this.height / 3) * d * (cosP * h * sinB + t * cosB)) | 0;
                    var o = x + _this.width * y;
                    var n = (8 *
                        ((sinT * sinA - sinP * cosT * cosA) * cosB -
                            sinP * cosT * sinA -
                            sinT * cosA -
                            cosP * cosT * sinB)) |
                        0;
                    if (y < _this.height && y >= 0 && x >= 0 && x < _this.width && d > Y[o]) {
                        Y[o] = d;
                        X[o] = ".,-~:;=!*#$@"[n > 0 ? n : 0];
                    }
                }
            }
            var output = X.join("");
            console.clear();
            var fgColorFn = ConsoleColors[_this.foregroundColor];
            var bgColorFn = ConsoleColors[_this.backgroundColor];
            // Use default colors if undefined
            var fgApplied = fgColorFn ? fgColorFn(output) : output;
            var bgApplied = bgColorFn ? bgColorFn(fgApplied) : fgApplied;
            console.log(bgApplied);
        };
        this.intervalId = setInterval(renderFrame, this.interval);
    };
    Donut.prototype.stopAnimation = function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            console.clear();
        }
    };
    return Donut;
}());
export { Donut };
