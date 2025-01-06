var Donut = /** @class */ (function () {
    function Donut(_a) {
        var height = _a.height, width = _a.width, environment = _a.environment, _b = _a.options, options = _b === void 0 ? {} : _b;
        this.intervalId = null;
        this.outputElement = null;
        if (!['node', 'browser'].includes(environment)) {
            throw new Error("Invalid environment. Use 'node' or 'browser'.");
        }
        this.height = height || 22; // Default height for animation
        this.width = width || 80; // Default width for animation
        this.environment = environment;
        this.foregroundColor = options.foregroundColor || 'white';
        this.backgroundColor = options.backgroundColor || 'black';
        this.interval = options.interval || 50;
        if (this.environment === 'browser') {
            this.initBrowser();
        }
        else {
            this.initNode();
        }
    }
    Donut.prototype.initBrowser = function () {
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
        this.outputElement.style.height = "".concat(this.height, "px");
        this.outputElement.style.width = "".concat(this.width, "px");
        document.body.appendChild(this.outputElement);
    };
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
            if (_this.environment === 'browser' && _this.outputElement) {
                _this.outputElement.textContent = output;
            }
            else {
                console.clear();
                console.log(output);
            }
        };
        this.intervalId = setInterval(renderFrame, this.interval);
    };
    Donut.prototype.stopAnimation = function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            if (this.environment === 'browser' && this.outputElement) {
                this.outputElement.textContent = '';
            }
            else {
                console.clear();
            }
        }
    };
    return Donut;
}());
export { Donut };
