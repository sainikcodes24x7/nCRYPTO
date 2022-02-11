(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [14563], {
        814563: (e, r, n) => {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var a = n(775496);

            function f(e, r, n) {
                return a.isNaN(r) || r < e ? e : r > n ? n : Math.round(r)
            }

            function t(e, r, n) {
                return a.isNaN(r) || r < e ? e : r > n ? n : Math.round(1e4 * r) / 1e4
            }

            function i(e) {
                return f(0, e, 255)
            }

            function o(e) {
                return f(0, e, 255)
            }

            function u(e) {
                return f(0, e, 255)
            }

            function l(e) {
                return t(0, e, 1)
            }

            function d(e) {
                return t(0, e, 1)
            }

            function c(e) {
                return t(0, e, 1)
            }

            function s(e) {
                return t(0, e, 1)
            }

            function b(e) {
                return t(0, e, 1)
            }

            function g(e) {
                return t(0, e, 1)
            }

            function h(e) {
                var r = e[0] / 255,
                    n = e[1] / 255,
                    a = e[2] / 255,
                    f = Math.min(r, n, a),
                    t = Math.max(r, n, a),
                    i = 0,
                    o = 0,
                    u = (f + t) / 2;
                if (f === t) i = 0, o = 0;
                else {
                    var l = t - f;
                    switch (o = u > .5 ? l / (2 - t - f) : l / (t + f), t) {
                        case r:
                            i = ((n - a) / l + (n < a ? 6 : 0)) / 6;
                            break;
                        case n:
                            i = ((a - r) / l + 2) / 6;
                            break;
                        case a:
                            i = ((r - n) / l + 4) / 6
                    }
                }
                return [i, o, u]
            }

            function v(e, r, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (r - e) * n : n < .5 ? r : n < 2 / 3 ? e + (r - e) * (2 / 3 - n) * 6 : e
            }

            function m(e) {
                var r, n, a, f = e[0],
                    t = e[1],
                    l = e[2];
                if (0 === t) r = n = a = l;
                else {
                    var d = l < .5 ? l * (1 + t) : l + t - l * t,
                        c = 2 * l - d;
                    r = v(c, d, f + 1 / 3), n = v(c, d, f), a = v(c, d, f - 1 / 3)
                }
                return [i(255 * r), o(255 * n), u(255 * a)]
            }
            r.normalizeRedComponent = i, r.normalizeGreenComponent = o, r.normalizeBlueComponent = u, r.normalizeAlphaComponent = l, r.rgb = function(e, r, n) {
                return [i(e), o(r), u(n)]
            }, r.areEqualRgb = function(e, r) {
                return e[0] === r[0] && e[1] === r[1] && e[2] === r[2]
            }, r.rgba = function(e, r, n, a) {
                if (Array.isArray(e)) {
                    var f = e;
                    return a = r, [f[0], f[1], f[2], l(a)]
                }
                var t = r;
                return n = n || 0, a = a || 0, [i(e), o(t), u(n), l(a)]
            }, r.areEqualRgba = function(e, r) {
                return e[0] === r[0] && e[1] === r[1] && e[2] === r[2] && e[3] === r[3]
            }, r.normalizeHue = d, r.normalizeHslSaturation = c, r.normalizeHsvSaturation = s, r.normalizeLightness = b, r.normalizeValue = g, r.hsl = function(e, r, n) {
                return [d(e), c(r), b(n)]
            }, r.areEqualHsl = function(e, r) {
                return e[0] === r[0] && e[1] === r[1] && e[2] === r[2]
            }, r.hsv = function(e, r, n) {
                return [d(e), s(r), g(n)]
            }, r.areEqualHsv = function(e, r) {
                return e[0] === r[0] && e[1] === r[1] && e[2] === r[2]
            }, r.rgbToHsl = h, r.hslToRgb = m, r.rgbToHsv = function(e) {
                var r = e[0],
                    n = e[1],
                    a = e[2],
                    f = r / 255,
                    t = n / 255,
                    i = a / 255,
                    o = Math.min(f, t, i),
                    u = Math.max(f, t, i),
                    l = u - o,
                    d = 0,
                    c = 0 === u ? 0 : l / u,
                    s = u;
                if (u === o) d = 0;
                else switch (u) {
                    case r:
                        d = ((t - i) / l + (t < i ? 6 : 0)) / 6;
                        break;
                    case n:
                        d = ((i - f) / l + 2) / 6;
                        break;
                    case a:
                        d = ((f - t) / l + 4) / 6
                }
                return [d, c, s]
            }, r.hsvToRgb = function(e) {
                var r = e[0],
                    n = e[1],
                    a = e[2],
                    f = Math.floor(6 * r),
                    t = 6 * r - f,
                    l = a * (1 - n),
                    d = a * (1 - t * n),
                    c = a * (1 - (1 - t) * n),
                    s = 0,
                    b = 0,
                    g = 0;
                switch (f % 6) {
                    case 0:
                        s = a, b = c, g = l;
                        break;
                    case 1:
                        s = d, b = a, g = l;
                        break;
                    case 2:
                        s = l, b = a, g = c;
                        break;
                    case 3:
                        s = l, b = d, g = a;
                        break;
                    case 4:
                        s = c, b = l, g = a;
                        break;
                    case 5:
                        s = a, b = l, g = d
                }
                return [i(255 * s), o(255 * b), u(255 * g)]
            };
            var p = [.199, .687, .114];

            function k(e) {
                return p[0] * e[0] + p[1] * e[1] + p[2] * e[2]
            }

            function w(e, r, n) {
                void 0 === n && (n = .05);
                var a = h(e),
                    f = a[0] + r * n;
                return a[0] = d(f - Math.floor(f)), m(a)
            }

            function y(e, r, n) {
                void 0 === n && (n = .05);
                var a = e[0],
                    f = e[1],
                    t = e[2],
                    i = e[3],
                    o = w([a, f, t], r, n);
                return [o[0], o[1], o[2], i]
            }
            r.rgbToGrayscale = k, r.distanceRgb = function(e, r) {
                var n = e[0],
                    a = e[1],
                    f = e[2],
                    t = r[0] - n,
                    i = r[1] - a,
                    o = r[2] - f;
                return Math.sqrt(t * t + i * i + o * o)
            }, r.invertRgb = function(e) {
                return [255 - e[0], 255 - e[1], 255 - e[2]]
            }, r.darkenRgb = function(e, r) {
                var n = h(e);
                return m([n[0], n[1], b(n[2] - r / 100)])
            }, r.blendRgba = function(e, r) {
                var n = e[0],
                    a = e[1],
                    f = e[2],
                    t = e[3],
                    d = r[0],
                    c = r[1],
                    s = r[2],
                    b = r[3],
                    g = l(1 - (1 - b) * (1 - t));
                return [i(d * b / g + n * t * (1 - b) / g), o(c * b / g + a * t * (1 - b) / g), u(s * b / g + f * t * (1 - b) / g), g]
            }, r.shiftRgb = w, r.shiftRgba = y, r.shiftColor = function(e, r, n) {
                return void 0 === n && (n = .05), H(y(P(e), r, n))
            };
            var R, q, I, z, M = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dodgerblue: "#1e90ff",
                feldspar: "#d19275",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslateblue: "#8470ff",
                lightslategray: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370d8",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#d87093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                violetred: "#d02090",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            };

            function A(e, r) {
                return r in e
            }

            function C(e) {
                var r = R.re.exec(e);
                return null !== r ? R.parse(r) : null
            }

            function E(e) {
                var r = q.re.exec(e);
                return null !== r ? q.parse(r) : null
            }

            function S(e) {
                var r = I.re.exec(e);
                return null !== r ? I.parse(r) : null
            }

            function T(e) {
                var r = z.re.exec(e);
                return null !== r ? z.parse(r) : null
            }

            function H(e) {
                return "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")"
            }

            function x(e) {
                if (e = e.toLowerCase(), A(M, e)) {
                    var r = E(M[e]);
                    if (null !== r) return r;
                    throw new Error("Invalid named color definition")
                }
                var n = C(e);
                if (null !== n) return n;
                var a = E(e);
                if (null !== a) return a;
                var f = S(e);
                if (null !== f) return f;
                var t = T(e);
                return null !== t ? [t[0], t[1], t[2]] : null
            }

            function F(e) {
                if (e = e.toLowerCase(), A(M, e)) {
                    var r = E(M[e]);
                    if (null !== r) return [r[0], r[1], r[2], 1];
                    throw new Error("Invalid named color definition")
                }
                var n = C(e);
                if (null !== n) return [n[0], n[1], n[2], 1];
                var a = E(e);
                if (null !== a) return [a[0], a[1], a[2], 1];
                var f = S(e);
                if (null !== f) return [f[0], f[1], f[2], 1];
                var t = T(e);
                return null !== t ? t : null
            }

            function P(e) {
                var r = F(e);
                if (null !== r) return r;
                throw new Error("Passed color string does not match any of the known color representations")
            }! function(e) {
                e.re = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/, e.parse = function(e) {
                    return [i(parseInt(e[1], 10)), o(parseInt(e[2], 10)), u(parseInt(e[3], 10))]
                }
            }(R || (R = {})), r.rgbToString = function(e) {
                    return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
                },
                function(e) {
                    e.re = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, e.parse = function(e) {
                        return [i(parseInt(e[1], 16)), o(parseInt(e[2], 16)), u(parseInt(e[3], 16))]
                    }
                }(q || (q = {})), r.rgbToHexString = function(e) {
                    var r = e[0],
                        n = e[1],
                        a = e[2],
                        f = r.toString(16),
                        t = n.toString(16),
                        i = a.toString(16);
                    return "#" + (1 === f.length ? "0" : "") + f + (1 === t.length ? "0" : "") + t + (1 === i.length ? "0" : "") + i
                },
                function(e) {
                    e.re = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/, e.parse = function(e) {
                        return [i(parseInt(e[1] + e[1], 16)), o(parseInt(e[2] + e[2], 16)), u(parseInt(e[3] + e[3], 16))]
                    }
                }(I || (I = {})),
                function(e) {
                    e.re = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/, e.parse = function(e) {
                        return [i(parseInt(e[1], 10)), o(parseInt(e[2], 10)), u(parseInt(e[3], 10)), l(parseFloat(e[4]))]
                    }
                }(z || (z = {})), r.rgbaToString = H, r.rgbToBlackWhiteString = function(e, r) {
                    if (r < 0 || r > 255) throw new Error("invalid threshold value, valid values are [0, 255]");
                    return k(e) >= r ? "white" : "black"
                }, r.tryParseRgb = x, r.parseRgb = function(e) {
                    var r = x(e);
                    if (null !== r) return r;
                    throw new Error("Passed color string does not match any of the known color representations")
                }, r.tryParseRgba = F, r.parseRgba = P
        }
    }
]);