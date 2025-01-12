"use strict";
/**
 * Interface representing options for configuring the donut animation.
 */
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Donut = void 0;
/**
 * Utility class providing methods for styling console output using ANSI color codes.
 */
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
    ConsoleColors.orange = function (text) {
        return "\u001B[38;5;214m".concat(text, "\u001B[0m"); // Orange background (using 256-color mode)
    };
    ConsoleColors.peach = function (text) {
        return "\u001B[38;5;219m".concat(text, "\u001B[0m"); // Peach background (using 256-color mode)
    };
    ConsoleColors.gold = function (text) {
        return "\u001B[38;5;220m".concat(text, "\u001B[0m"); // Gold background (using 256-color mode)
    };
    ConsoleColors.silver = function (text) {
        return "\u001B[38;5;230m".concat(text, "\u001B[0m"); // Silver background (using 256-color mode)
    };
    ConsoleColors.pink = function (text) {
        return "\u001B[38;5;213m".concat(text, "\u001B[0m"); // Pink background (using 256-color mode)
    };
    ConsoleColors.brown = function (text) {
        return "\u001B[38;5;94m".concat(text, "\u001B[0m"); // Brown background (using 256-color mode)
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
/**
 * Class responsible for rendering and animating an ASCII donut in the console.
 */
var Donut = /** @class */ (function () {
    /**
       * Creates an instance of the Donut class.
       * @param params - Parameters for initializing the donut animation.
       */
    function Donut(_a) {
        var height = _a.height, width = _a.width, _b = _a.options, options = _b === void 0 ? {} : _b;
        this.intervalId = null;
        this.a = 1; // Angle variable for rotation
        this.b = 0; // Angle variable for rotation
        this.height = height || 22; // Default height for animation
        this.width = width || 80; // Default width for animation
        this.foregroundColor = options.foregroundColor || 'white';
        this.backgroundColor = options.backgroundColor || 'black';
        this.interval = options.interval || 50;
        this.initNode();
    }
    /**
       * Initializes the console for the donut animation by clearing it.
       */
    Donut.prototype.initNode = function () {
        console.clear();
    };
    /**
     * Generates the ASCII donut frame output for the current angles `a` and `b`.
     * @returns The ASCII donut output string.
     */
    Donut.prototype.generateFrameOutput = function () {
        var X = [];
        var Y = [];
        this.a += 0.05;
        this.b += 0.07;
        var cosA = Math.cos(this.a);
        var sinA = Math.sin(this.a);
        var cosB = Math.cos(this.b);
        var sinB = Math.sin(this.b);
        for (var k = 0; k < this.width * this.height; k++) {
            X[k] = k % this.width === this.width - 1 ? "\n" : " ";
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
                var x = (this.width / 2 + (this.width / 2.5) * d * (cosP * h * cosB - t * sinB)) | 0;
                var y = (this.height / 2 + (this.height / 3) * d * (cosP * h * sinB + t * cosB)) | 0;
                var o = x + this.width * y;
                var n = (8 *
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
        var output = X.join("");
        return output;
    };
    /**
     * Private method that applies color to `inputString`.
     * @param inputString - The string to apply color into.
     * @returns The color applied output string.
     */
    Donut.prototype.applyColors = function (inputString) {
        var fgColorFn = ConsoleColors[this.foregroundColor];
        var bgColorFn = ConsoleColors[this.backgroundColor];
        var fgApplied = fgColorFn ? fgColorFn(inputString) : inputString;
        var bgApplied = bgColorFn ? bgColorFn(fgApplied) : fgApplied;
        return bgApplied;
    };
    /**
     * Starts the ASCII donut animation in the console.
     */
    Donut.prototype.startAnimation = function () {
        var _this = this;
        var renderFrame = function () {
            var output = _this.generateFrameOutput();
            var coloredOutput = _this.applyColors(output);
            console.clear();
            console.log(coloredOutput);
        };
        this.intervalId = setInterval(renderFrame, this.interval);
    };
    /**
     * Stops the ASCII donut animation and clears the console.
     */
    Donut.prototype.stopAnimation = function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            console.clear();
        }
    };
    /**
   * Asynchronous generator that yields ASCII donut frames at the specified interval.
   * @param duration - Total duration (in milliseconds) for generating frames.
   * @returns An async iterator that yields ASCII frames as strings.
   */
    Donut.prototype.generateFrames = function (duration) {
        return __asyncGenerator(this, arguments, function generateFrames_1() {
            var startTime;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startTime = Date.now();
                        _a.label = 1;
                    case 1:
                        if (!(Date.now() - startTime < duration)) return [3 /*break*/, 5];
                        return [4 /*yield*/, __await(this.applyColors(this.generateFrameOutput()))];
                    case 2: return [4 /*yield*/, _a.sent()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, __await(new Promise(function (resolve) { return setTimeout(resolve, _this.interval); }))];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return Donut;
}());
exports.Donut = Donut;
