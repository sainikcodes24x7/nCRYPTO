(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [13034, 9726, 99928, 79836, 36170, 802, 14563, 9622, 73715, 26945, 38405, 28788, 92462, 37621, 52300, 40989, 70797, 18194, 94770], {
        373211: (t, e) => {
            "use strict";
            e.hasProperty = e.isObject = void 0, e.isObject = function(t) {
                var e = typeof t;
                return null !== t && ("object" === e || "function" === e)
            }, e.hasProperty = function(t, e) {
                return e in t
            }
        },
        814563: (t, e, i) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = i(775496);

            function r(t, e, i) {
                return s.isNaN(e) || e < t ? t : e > i ? i : Math.round(e)
            }

            function n(t, e, i) {
                return s.isNaN(e) || e < t ? t : e > i ? i : Math.round(1e4 * e) / 1e4
            }

            function o(t) {
                return r(0, t, 255)
            }

            function a(t) {
                return r(0, t, 255)
            }

            function l(t) {
                return r(0, t, 255)
            }

            function h(t) {
                return n(0, t, 1)
            }

            function c(t) {
                return n(0, t, 1)
            }

            function u(t) {
                return n(0, t, 1)
            }

            function d(t) {
                return n(0, t, 1)
            }

            function p(t) {
                return n(0, t, 1)
            }

            function f(t) {
                return n(0, t, 1)
            }

            function g(t) {
                var e = t[0] / 255,
                    i = t[1] / 255,
                    s = t[2] / 255,
                    r = Math.min(e, i, s),
                    n = Math.max(e, i, s),
                    o = 0,
                    a = 0,
                    l = (r + n) / 2;
                if (r === n) o = 0, a = 0;
                else {
                    var h = n - r;
                    switch (a = l > .5 ? h / (2 - n - r) : h / (n + r), n) {
                        case e:
                            o = ((i - s) / h + (i < s ? 6 : 0)) / 6;
                            break;
                        case i:
                            o = ((s - e) / h + 2) / 6;
                            break;
                        case s:
                            o = ((e - i) / h + 4) / 6
                    }
                }
                return [o, a, l]
            }

            function m(t, e, i) {
                return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function _(t) {
                var e, i, s, r = t[0],
                    n = t[1],
                    h = t[2];
                if (0 === n) e = i = s = h;
                else {
                    var c = h < .5 ? h * (1 + n) : h + n - h * n,
                        u = 2 * h - c;
                    e = m(u, c, r + 1 / 3), i = m(u, c, r), s = m(u, c, r - 1 / 3)
                }
                return [o(255 * e), a(255 * i), l(255 * s)]
            }
            e.normalizeRedComponent = o, e.normalizeGreenComponent = a, e.normalizeBlueComponent = l, e.normalizeAlphaComponent = h, e.rgb = function(t, e, i) {
                return [o(t), a(e), l(i)]
            }, e.areEqualRgb = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
            }, e.rgba = function(t, e, i, s) {
                if (Array.isArray(t)) {
                    var r = t;
                    return s = e, [r[0], r[1], r[2], h(s)]
                }
                var n = e;
                return i = i || 0, s = s || 0, [o(t), a(n), l(i), h(s)]
            }, e.areEqualRgba = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
            }, e.normalizeHue = c, e.normalizeHslSaturation = u, e.normalizeHsvSaturation = d, e.normalizeLightness = p, e.normalizeValue = f, e.hsl = function(t, e, i) {
                return [c(t), u(e), p(i)]
            }, e.areEqualHsl = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
            }, e.hsv = function(t, e, i) {
                return [c(t), d(e), f(i)]
            }, e.areEqualHsv = function(t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
            }, e.rgbToHsl = g, e.hslToRgb = _, e.rgbToHsv = function(t) {
                var e = t[0],
                    i = t[1],
                    s = t[2],
                    r = e / 255,
                    n = i / 255,
                    o = s / 255,
                    a = Math.min(r, n, o),
                    l = Math.max(r, n, o),
                    h = l - a,
                    c = 0,
                    u = 0 === l ? 0 : h / l,
                    d = l;
                if (l === a) c = 0;
                else switch (l) {
                    case e:
                        c = ((n - o) / h + (n < o ? 6 : 0)) / 6;
                        break;
                    case i:
                        c = ((o - r) / h + 2) / 6;
                        break;
                    case s:
                        c = ((r - n) / h + 4) / 6
                }
                return [c, u, d]
            }, e.hsvToRgb = function(t) {
                var e = t[0],
                    i = t[1],
                    s = t[2],
                    r = Math.floor(6 * e),
                    n = 6 * e - r,
                    h = s * (1 - i),
                    c = s * (1 - n * i),
                    u = s * (1 - (1 - n) * i),
                    d = 0,
                    p = 0,
                    f = 0;
                switch (r % 6) {
                    case 0:
                        d = s, p = u, f = h;
                        break;
                    case 1:
                        d = c, p = s, f = h;
                        break;
                    case 2:
                        d = h, p = s, f = u;
                        break;
                    case 3:
                        d = h, p = c, f = s;
                        break;
                    case 4:
                        d = u, p = h, f = s;
                        break;
                    case 5:
                        d = s, p = h, f = c
                }
                return [o(255 * d), a(255 * p), l(255 * f)]
            };
            var v = [.199, .687, .114];

            function y(t) {
                return v[0] * t[0] + v[1] * t[1] + v[2] * t[2]
            }

            function b(t, e, i) {
                void 0 === i && (i = .05);
                var s = g(t),
                    r = s[0] + e * i;
                return s[0] = c(r - Math.floor(r)), _(s)
            }

            function w(t, e, i) {
                void 0 === i && (i = .05);
                var s = t[0],
                    r = t[1],
                    n = t[2],
                    o = t[3],
                    a = b([s, r, n], e, i);
                return [a[0], a[1], a[2], o]
            }
            e.rgbToGrayscale = y, e.distanceRgb = function(t, e) {
                var i = t[0],
                    s = t[1],
                    r = t[2],
                    n = e[0] - i,
                    o = e[1] - s,
                    a = e[2] - r;
                return Math.sqrt(n * n + o * o + a * a)
            }, e.invertRgb = function(t) {
                return [255 - t[0], 255 - t[1], 255 - t[2]]
            }, e.darkenRgb = function(t, e) {
                var i = g(t);
                return _([i[0], i[1], p(i[2] - e / 100)])
            }, e.blendRgba = function(t, e) {
                var i = t[0],
                    s = t[1],
                    r = t[2],
                    n = t[3],
                    c = e[0],
                    u = e[1],
                    d = e[2],
                    p = e[3],
                    f = h(1 - (1 - p) * (1 - n));
                return [o(c * p / f + i * n * (1 - p) / f), a(u * p / f + s * n * (1 - p) / f), l(d * p / f + r * n * (1 - p) / f), f]
            }, e.shiftRgb = b, e.shiftRgba = w, e.shiftColor = function(t, e, i) {
                return void 0 === i && (i = .05), D(w(F(t), e, i))
            };
            var S, C, x, M, k = {
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

            function E(t, e) {
                return e in t
            }

            function P(t) {
                var e = S.re.exec(t);
                return null !== e ? S.parse(e) : null
            }

            function T(t) {
                var e = C.re.exec(t);
                return null !== e ? C.parse(e) : null
            }

            function A(t) {
                var e = x.re.exec(t);
                return null !== e ? x.parse(e) : null
            }

            function L(t) {
                var e = M.re.exec(t);
                return null !== e ? M.parse(e) : null
            }

            function D(t) {
                return "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }

            function I(t) {
                if (t = t.toLowerCase(), E(k, t)) {
                    var e = T(k[t]);
                    if (null !== e) return e;
                    throw new Error("Invalid named color definition")
                }
                var i = P(t);
                if (null !== i) return i;
                var s = T(t);
                if (null !== s) return s;
                var r = A(t);
                if (null !== r) return r;
                var n = L(t);
                return null !== n ? [n[0], n[1], n[2]] : null
            }

            function N(t) {
                if (t = t.toLowerCase(), E(k, t)) {
                    var e = T(k[t]);
                    if (null !== e) return [e[0], e[1], e[2], 1];
                    throw new Error("Invalid named color definition")
                }
                var i = P(t);
                if (null !== i) return [i[0], i[1], i[2], 1];
                var s = T(t);
                if (null !== s) return [s[0], s[1], s[2], 1];
                var r = A(t);
                if (null !== r) return [r[0], r[1], r[2], 1];
                var n = L(t);
                return null !== n ? n : null
            }

            function F(t) {
                var e = N(t);
                if (null !== e) return e;
                throw new Error("Passed color string does not match any of the known color representations")
            }! function(t) {
                t.re = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/, t.parse = function(t) {
                    return [o(parseInt(t[1], 10)), a(parseInt(t[2], 10)), l(parseInt(t[3], 10))]
                }
            }(S || (S = {})), e.rgbToString = function(t) {
                    return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                },
                function(t) {
                    t.re = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, t.parse = function(t) {
                        return [o(parseInt(t[1], 16)), a(parseInt(t[2], 16)), l(parseInt(t[3], 16))]
                    }
                }(C || (C = {})), e.rgbToHexString = function(t) {
                    var e = t[0],
                        i = t[1],
                        s = t[2],
                        r = e.toString(16),
                        n = i.toString(16),
                        o = s.toString(16);
                    return "#" + (1 === r.length ? "0" : "") + r + (1 === n.length ? "0" : "") + n + (1 === o.length ? "0" : "") + o
                },
                function(t) {
                    t.re = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/, t.parse = function(t) {
                        return [o(parseInt(t[1] + t[1], 16)), a(parseInt(t[2] + t[2], 16)), l(parseInt(t[3] + t[3], 16))]
                    }
                }(x || (x = {})),
                function(t) {
                    t.re = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/, t.parse = function(t) {
                        return [o(parseInt(t[1], 10)), a(parseInt(t[2], 10)), l(parseInt(t[3], 10)), h(parseFloat(t[4]))]
                    }
                }(M || (M = {})), e.rgbaToString = D, e.rgbToBlackWhiteString = function(t, e) {
                    if (e < 0 || e > 255) throw new Error("invalid threshold value, valid values are [0, 255]");
                    return y(t) >= e ? "white" : "black"
                }, e.tryParseRgb = I, e.parseRgb = function(t) {
                    var e = I(t);
                    if (null !== e) return e;
                    throw new Error("Passed color string does not match any of the known color representations")
                }, e.tryParseRgba = N, e.parseRgba = F
        },
        277431: (t, e, i) => {
            t.exports = i.p + "e5dccab09e22148aa733ae7e0962f0a4.svg"
        },
        487855: (t, e, i) => {
            t.exports = i.p + "042ec21ea57ec386282b5e437ced14a0.svg"
        },
        846838: (t, e, i) => {
            t.exports = i.p + "7087220f54cd749f878bda12494954eb.svg"
        },
        219112: (t, e, i) => {
            t.exports = i.p + "f10291bc2bf8e3dea0bb036041d3e89f.svg"
        },
        830864: (t, e, i) => {
            t.exports = i.p + "ad82bf804943b35baebe7dff417a2904.svg"
        },
        349775: (t, e, i) => {
            t.exports = i.p + "cd8614eed2c9ecd0111030d6ae43b07c.svg"
        },
        869031: (t, e, i) => {
            t.exports = i.p + "ab0aa08606b4a9db4f1d6115cbff1246.svg"
        },
        399296: (t, e, i) => {
            t.exports = i.p + "2dab12e8a6c93cdc361b475dcd7b3074.svg"
        },
        463010: (t, e, i) => {
            t.exports = i.p + "8e74262607de7641e1443e206ecf02d8.svg"
        },
        611712: (t, e, i) => {
            t.exports = i.p + "a1276c0533823933334715fc20c6742e.svg"
        },
        244161: (t, e, i) => {
            t.exports = i.p + "de7f5bc35af05c24d9640b6fd0910bdf.svg"
        },
        559686: (t, e, i) => {
            t.exports = i.p + "f5ed10ec1625eb393ada7073b9afd17e.svg"
        },
        567851: (t, e, i) => {
            t.exports = i.p + "c2a5c0fb8c6ef112474fde18c2946640.svg"
        },
        263471: (t, e, i) => {
            t.exports = i.p + "9b5c4a3a01194407c91bf996bba0c1a4.svg"
        },
        945185: (t, e, i) => {
            t.exports = i.p + "cc72d282b465b57676eca56e46cf1e8c.svg"
        },
        966755: (t, e, i) => {
            t.exports = i.p + "8c3b568f1adc6a626342305c8f60b203.svg"
        },
        273472: (t, e, i) => {
            t.exports = i.p + "95a7715d1c9835b4b280996e2493639c.svg"
        },
        913060: (t, e, i) => {
            t.exports = i.p + "3ce97881321c8c909b3d05f641fad866.svg"
        },
        756199: (t, e, i) => {
            t.exports = i.p + "e7b7ff011682d59763997a75104c9979.svg"
        },
        909687: (t, e, i) => {
            t.exports = i.p + "ec6d305d7d06a84ea3f54c3d6db5e83a.svg"
        },
        91995: (t, e, i) => {
            t.exports = i.p + "e7ed49ce872797c8630fd5f8446ffbee.svg"
        },
        101440: (t, e, i) => {
            t.exports = i.p + "86e22a99d9d9ee81924e0b438e204dd7.svg"
        },
        785239: (t, e, i) => {
            t.exports = i.p + "d369378aefaaed47363bffaedb308143.svg"
        },
        524226: (t, e, i) => {
            t.exports = i.p + "d1f58926528e2a3debceb59dff7e58b0.svg"
        },
        667596: (t, e, i) => {
            t.exports = i.p + "3fd81bada8bbd48683f94d307a01fac4.svg"
        },
        21340: (t, e, i) => {
            t.exports = i.p + "c7b2bfd6a12a1c0991a575c3b31ad7b6.svg"
        },
        851258: (t, e, i) => {
            t.exports = i.p + "95127900436e4305bca6653ca8d9957f.svg"
        },
        783397: (t, e, i) => {
            t.exports = i.p + "65876f64a690a9c40a4f3d84367678ad.svg"
        },
        651253: (t, e, i) => {
            t.exports = i.p + "47b1e1cc6cc78ac578822f22213f5eb3.svg"
        },
        364253: (t, e, i) => {
            t.exports = i.p + "0788cb238b1a4b247dc64b6520a1de87.svg"
        },
        824059: (t, e, i) => {
            t.exports = i.p + "f869295c1d9ceedfc8c6ddd92efb8ca2.svg"
        },
        829951: (t, e, i) => {
            t.exports = i.p + "de4367c3fa9f075bbf58943188ba32b3.svg"
        },
        482317: (t, e, i) => {
            t.exports = i.p + "a7de26af1e65164293180f1c5ddcf8de.svg"
        },
        312762: (t, e, i) => {
            t.exports = i.p + "6cc5af4752574eb61f0c8075ca1b7881.svg"
        },
        545475: (t, e, i) => {
            t.exports = i.p + "6b4a6bb049ac33e322b700e50fc5b926.svg"
        },
        48871: (t, e, i) => {
            t.exports = i.p + "5c568c6ba25fd3ccffedc7df6cdbcfc6.svg"
        },
        849665: (t, e, i) => {
            t.exports = i.p + "a6b73d85f90f4b55b4d8560f175fb635.svg"
        },
        147939: (t, e, i) => {
            t.exports = i.p + "bc4c0e86357177d9b1ed96f8568684d1.svg"
        },
        501534: (t, e, i) => {
            t.exports = i.p + "ed5c3ae146310a1a24fcde23e7b60bb1.svg"
        },
        91592: (t, e, i) => {
            t.exports = i.p + "869b5f01bc7105cc3788b584c5bc1bef.svg"
        },
        293941: (t, e, i) => {
            t.exports = i.p + "69938b544b1d77792db3e429284a98c1.svg"
        },
        640514: (t, e, i) => {
            t.exports = i.p + "2d9e49752791b82092387b7ffd7e427f.svg"
        },
        295761: (t, e, i) => {
            t.exports = i.p + "81f2326cf9c77d248b96f6bc5f80c13d.svg"
        },
        7e5: (t, e, i) => {
            t.exports = i.p + "5962c52be69d3c2cb79834452a20bf16.svg"
        },
        807371: (t, e, i) => {
            t.exports = i.p + "a54eae35e396c3f9ec2c154c8389933e.svg"
        },
        777158: (t, e, i) => {
            t.exports = i.p + "1a129ec3eee7754e48466838566ab14e.svg"
        },
        57906: (t, e, i) => {
            t.exports = i.p + "ab02a73c827877d701e4dd32eb729ed9.svg"
        },
        963836: (t, e, i) => {
            t.exports = i.p + "ed080993df791efad30f99a0e698601e.svg"
        },
        910513: (t, e, i) => {
            t.exports = i.p + "6e8ce773ae74687cfa9576d1210fe5f6.svg"
        },
        666158: (t, e, i) => {
            t.exports = i.p + "e8b18b343c3c9e2d653fc3a550de819f.svg"
        },
        34440: (t, e, i) => {
            t.exports = i.p + "696572b26ab674046f403ec18f2b5e5d.svg"
        },
        101683: (t, e, i) => {
            t.exports = i.p + "32cface5c212ebc32a5fd783e6072dd5.svg"
        },
        627453: (t, e, i) => {
            t.exports = i.p + "cf8abee42c4cb03e0a2105caec8909eb.svg"
        },
        492378: (t, e, i) => {
            t.exports = i.p + "52d1261e628f634b5e62c0d6071d82c1.svg"
        },
        987683: (t, e, i) => {
            t.exports = i.p + "27419b53618cdc6022ec621a38a2e27e.svg"
        },
        599769: (t, e, i) => {
            t.exports = i.p + "c3bf6a8b432dba36fcdb79e0e7b892e4.svg"
        },
        272564: (t, e, i) => {
            t.exports = i.p + "52452294a138eb19309852a5bba8fdf2.svg"
        },
        716808: (t, e, i) => {
            t.exports = i.p + "883627aca446035b3986466acc71a69b.svg"
        },
        331572: (t, e, i) => {
            t.exports = i.p + "3332346bb9d5603152808536c3251c00.svg"
        },
        60388: (t, e, i) => {
            t.exports = i.p + "5dfba3ffcfb87b70fcff70fe469745e0.svg"
        },
        529016: (t, e, i) => {
            t.exports = i.p + "9a4ecd71d78aab6194857007fcc20464.svg"
        },
        472792: (t, e, i) => {
            t.exports = i.p + "6474d98d9f212d0a5b3edc7c81fce0a4.svg"
        },
        405862: (t, e, i) => {
            t.exports = i.p + "386646a0d8b2c0e75d201d07083beb35.svg"
        },
        971321: (t, e, i) => {
            t.exports = i.p + "c416c4db2f76c13e5cfb1cd73b057264.svg"
        },
        402459: (t, e, i) => {
            t.exports = i.p + "0f7af004dd47aafc17272eca6e543808.svg"
        },
        629760: (t, e, i) => {
            t.exports = i.p + "fe631cd46d01b4816097228f3591db19.svg"
        },
        509278: (t, e, i) => {
            t.exports = i.p + "062c248cf8d2c525bd9526653ab95657.svg"
        },
        392599: (t, e, i) => {
            t.exports = i.p + "e62b523f0ed069cf4e2afa903fece44f.svg"
        },
        967132: (t, e, i) => {
            t.exports = i.p + "1d3eecfc50933a84c28985cffe2fbb4e.svg"
        },
        12099: (t, e, i) => {
            t.exports = i.p + "fe924d5d871ef07299ad5e11db2c8a70.svg"
        },
        832423: (t, e, i) => {
            t.exports = i.p + "4c2b4fdaa4afbe49682badbe3e6d5092.svg"
        },
        75511: (t, e, i) => {
            t.exports = i.p + "650a8fb9d8083fd5887fa14d5a48b917.svg"
        },
        625515: (t, e, i) => {
            t.exports = i.p + "a846e4087642a8ea8bf05187847140c6.svg"
        },
        391112: (t, e, i) => {
            t.exports = i.p + "e561e7a86e83dab817de9b4fba1be15e.svg"
        },
        447094: (t, e, i) => {
            t.exports = i.p + "6c45a28c69aad8a75655bdd555d86f68.svg"
        },
        59315: (t, e, i) => {
            t.exports = i.p + "dddac09a7572568f517e22700f4c8474.svg"
        },
        382821: (t, e, i) => {
            t.exports = i.p + "e2fa422bd9aedee688fb7765794fd5c2.svg"
        },
        573306: (t, e, i) => {
            t.exports = i.p + "9e8a00c2e2b16d8ece1e344906002df9.svg"
        },
        189539: (t, e, i) => {
            t.exports = i.p + "cddf3ae477d555d4eed060347c2268eb.svg"
        },
        855061: (t, e, i) => {
            t.exports = i.p + "4bc8348594c9430c735366fc72d9f36b.svg"
        },
        939483: (t, e, i) => {
            t.exports = i.p + "e8e5b1c68e4f95acd9322863c0b363f6.svg"
        },
        865614: (t, e, i) => {
            t.exports = i.p + "6cfd08ce7e4a1dbbd15225a8bf79a4e3.svg"
        },
        256932: (t, e, i) => {
            t.exports = i.p + "44239307acfe2269d7827563273f2bfa.svg"
        },
        364749: (t, e, i) => {
            t.exports = i.p + "4752624c631776e721a978174febf46b.svg"
        },
        160257: (t, e, i) => {
            t.exports = i.p + "953f6834f68153142229a6d2237076cf.svg"
        },
        125797: (t, e, i) => {
            t.exports = i.p + "5579d8b53d2a1a0e6007198f97b91039.svg"
        },
        139174: (t, e, i) => {
            t.exports = i.p + "584a79e77d4432cf0ca27a1063d9ba0d.svg"
        },
        43438: (t, e, i) => {
            t.exports = i.p + "2c713a3aca13638904167e66cf9eeab0.svg"
        },
        848104: (t, e, i) => {
            t.exports = i.p + "4791e97b8673d0b0ec66d93ef3f02bb0.svg"
        },
        623748: (t, e, i) => {
            t.exports = i.p + "f8f54d8b574077d60ffb81a4bc19ed57.svg"
        },
        944571: (t, e, i) => {
            t.exports = i.p + "dea459c5c4ebb211e652e99cd6ba6354.svg"
        },
        549078: (t, e, i) => {
            t.exports = i.p + "8bb7f62042bd238c645c4213b08db12e.svg"
        },
        33037: (t, e, i) => {
            t.exports = i.p + "157dc69b8355dc521689079cb859216d.svg"
        },
        202074: (t, e, i) => {
            t.exports = i.p + "885565ce0ebf9919066eb4196290c711.svg"
        },
        134221: (t, e, i) => {
            t.exports = i.p + "1eafeadca5e616cc4525be1fb1caafc7.svg"
        },
        364833: (t, e, i) => {
            t.exports = i.p + "8b5301ac782c0b3c5144e7aae810127a.svg"
        },
        463365: (t, e, i) => {
            t.exports = i.p + "9d7b9ed22b710cbeeb852226989e1bc7.svg"
        },
        96318: (t, e, i) => {
            t.exports = i.p + "a6ccd18373271b1e45b1ca35f8825c8d.svg"
        },
        367530: (t, e, i) => {
            t.exports = i.p + "23b30bfe2f6b2e6edf84470252fa5d54.svg"
        },
        805549: (t, e, i) => {
            t.exports = i.p + "c4ba5e799038b2fac1d8a5cee58aac2d.svg"
        },
        158438: (t, e, i) => {
            t.exports = i.p + "e97d7f751ade192748c3e05a54ead255.svg"
        },
        788307: (t, e, i) => {
            t.exports = i.p + "d9da6caea5ca1cd55417f1978b047b13.svg"
        },
        795984: (t, e, i) => {
            t.exports = i.p + "2e59cb1da31075c39dc3b0c1e75e5fd7.svg"
        },
        534244: (t, e, i) => {
            t.exports = i.p + "2aecc106c5eb83ecada117376a8c8f2a.svg"
        },
        63716: (t, e, i) => {
            t.exports = i.p + "32c094ea79fdd66912058ade88c27860.svg"
        },
        348726: (t, e, i) => {
            t.exports = i.p + "6ca6e081b7d7a80d94f38bf6ef9db3fa.svg"
        },
        911145: (t, e, i) => {
            t.exports = i.p + "118186fbbe46a3201d049161d17aa76a.svg"
        },
        576285: (t, e, i) => {
            t.exports = i.p + "a83c7f196f69856c6661350dcd280ca2.svg"
        },
        959322: (t, e, i) => {
            t.exports = i.p + "b6a66bf5808bbb5de2d3bf45a5971fbd.svg"
        },
        800284: (t, e, i) => {
            t.exports = i.p + "9d67227cfad5ec4cdbe9f0cd169856c5.svg"
        },
        310794: (t, e, i) => {
            t.exports = i.p + "6d9fd8899d084d7f9698d9b2d5862c00.svg"
        },
        236276: (t, e, i) => {
            t.exports = i.p + "e01f83be117e562a91ac14daa904e198.svg"
        },
        173869: (t, e, i) => {
            t.exports = i.p + "802533204295f3c58b0072fdd6d46d1d.svg"
        },
        406122: (t, e, i) => {
            t.exports = i.p + "c8d5bc45cecd625d597da5bc33011da7.svg"
        },
        806922: (t, e, i) => {
            t.exports = i.p + "52d36f2ef75daabe5d00dc144cc9d4d6.svg"
        },
        462814: (t, e, i) => {
            t.exports = i.p + "6ae825abf83e791f0247b4143d5a85ad.svg"
        },
        665618: (t, e, i) => {
            t.exports = i.p + "1985b030fba93c1acee7ccb45534cabd.svg"
        },
        544130: (t, e, i) => {
            t.exports = i.p + "b1cad18bd8a6be021c3177353bda5345.svg"
        },
        650852: (t, e, i) => {
            t.exports = i.p + "c33468197e6cfac63316a6cd3a67cd6c.svg"
        },
        279101: (t, e, i) => {
            t.exports = i.p + "a825a6c4082ba46b45131ab0bd16d96c.svg"
        },
        281055: (t, e, i) => {
            t.exports = i.p + "8c6b45f07db2a25f33f279d2da19dc3b.svg"
        },
        51177: (t, e, i) => {
            t.exports = i.p + "46eec22a6748063a64a9d7fdce4efc95.svg"
        },
        447504: (t, e, i) => {
            t.exports = i.p + "e129b4d2d79d07ecf5b6b7c4d10b83fb.svg"
        },
        846265: (t, e, i) => {
            t.exports = i.p + "f15ab85cea9ea5749e2befe786e1c9d3.svg"
        },
        313306: (t, e, i) => {
            t.exports = i.p + "291ae25931a5df9f61006569e1fb2819.svg"
        },
        787442: (t, e, i) => {
            t.exports = i.p + "428cfc463b541dfa1321f35af861fada.svg"
        },
        640787: (t, e, i) => {
            t.exports = i.p + "548b90a6603f1a11a0104f3be28274d5.svg"
        },
        663019: (t, e, i) => {
            t.exports = i.p + "b1ee1e8ecc3caeb6e4e1dd6d5a45e2c8.svg"
        },
        825679: (t, e, i) => {
            t.exports = i.p + "ebca4cec794b70db74c63a7e6aca8ed8.svg"
        },
        362037: (t, e, i) => {
            t.exports = i.p + "9b979eba8adb5bda46b48a4d26ccf2de.svg"
        },
        346603: (t, e, i) => {
            t.exports = i.p + "5824a756d7227972e0d24375246ee236.svg"
        },
        644991: (t, e, i) => {
            t.exports = i.p + "d4b8b8cb1909ea6d3f0a3182c8ec0a96.svg"
        },
        562255: (t, e, i) => {
            t.exports = i.p + "2d4c81f5074ead4d91e24dce1782b828.svg"
        },
        832295: (t, e, i) => {
            t.exports = i.p + "2c22bc38345265a3c18504acca3e0d56.svg"
        },
        42882: (t, e, i) => {
            t.exports = i.p + "66b0098c00f242056c72b05aa3796de9.svg"
        },
        977143: (t, e, i) => {
            t.exports = i.p + "7ef32ae8f080d2d6c6f0784e334e30e1.svg"
        },
        308083: (t, e, i) => {
            t.exports = i.p + "49d1ea5b7ccbfbae29bbc21c506e617c.svg"
        },
        567420: (t, e, i) => {
            t.exports = i.p + "ec31494f78cee41a02dbfbafba232515.svg"
        },
        822090: (t, e, i) => {
            t.exports = i.p + "53fe5ab19eeaaea654235a0bdb7f71f1.svg"
        },
        78486: (t, e, i) => {
            t.exports = i.p + "efef6421ade56c03ee355809562ecbc0.svg"
        },
        163075: (t, e, i) => {
            t.exports = i.p + "7fb90d13db9ad6d2ddec01d48b241d85.svg"
        },
        872413: (t, e, i) => {
            t.exports = i.p + "192a7bbb73684d1f6dae83700fb21173.svg"
        },
        798225: (t, e, i) => {
            t.exports = i.p + "43c5b49b5b8e01e4505c7c251746a8b7.svg"
        },
        241026: (t, e, i) => {
            t.exports = i.p + "74009555a8dd165b067723f234f915a5.svg"
        },
        892157: (t, e, i) => {
            t.exports = i.p + "7231b99c7054c64e47372a672c441a6d.svg"
        },
        977024: (t, e, i) => {
            t.exports = i.p + "e30c321e33a1859340a2bb6037bff515.svg"
        },
        429481: (t, e, i) => {
            t.exports = i.p + "492d9a718a2c25d234151474b0206977.svg"
        },
        558174: (t, e, i) => {
            t.exports = i.p + "7042e54b024475a394cb498377852b96.svg"
        },
        918366: (t, e, i) => {
            t.exports = i.p + "c65f8d4a514fd5839e611a6c7f146acb.svg"
        },
        390291: (t, e, i) => {
            t.exports = i.p + "aca94e827472fdbe847af7982d2e10f1.svg"
        },
        532559: (t, e, i) => {
            t.exports = i.p + "27ed1587b819df769e0fcdb40c17bc0a.svg"
        },
        452096: (t, e, i) => {
            t.exports = i.p + "455e18987c2c85ec010fd1456751ab61.svg"
        },
        653648: (t, e, i) => {
            t.exports = i.p + "8bf52e61de18aca35d5a9e2f5ce14ae2.svg"
        },
        231564: (t, e, i) => {
            t.exports = i.p + "f3530d099857810e5d04b52373b1cb41.svg"
        },
        137654: (t, e, i) => {
            t.exports = i.p + "31dc9f78a1a526c14002cfcece0cc5d9.svg"
        },
        436983: (t, e, i) => {
            t.exports = i.p + "61da80123bd4db4b54f857a53d7718da.svg"
        },
        259725: (t, e, i) => {
            t.exports = i.p + "f4d0c0597f2db7dcd7cd774b822de366.svg"
        },
        555798: (t, e, i) => {
            t.exports = i.p + "c229767ec3f6e517744b027e36b24831.svg"
        },
        181634: (t, e, i) => {
            t.exports = i.p + "53f95b864ea8104267dc566bfb803a23.svg"
        },
        787276: (t, e, i) => {
            t.exports = i.p + "c26643f969ec665d63ddfe7dbcf16871.svg"
        },
        539857: (t, e, i) => {
            t.exports = i.p + "5980ed8829231afb216d42cd14dfc746.svg"
        },
        733093: (t, e, i) => {
            t.exports = i.p + "33ead7196e74520279899683905fa945.svg"
        },
        232341: (t, e, i) => {
            t.exports = i.p + "e9a1bd918b9924de48740078fc49f7c8.svg"
        },
        804874: (t, e, i) => {
            t.exports = i.p + "1098c7da5fcb389d9ca6f1b830c9dc7b.svg"
        },
        770015: (t, e, i) => {
            t.exports = i.p + "52be2cab70919abd4ba4dffefe331384.svg"
        },
        593575: (t, e, i) => {
            t.exports = i.p + "47f09a2aa1752e19fb33290fcc46c47a.svg"
        },
        700177: (t, e, i) => {
            t.exports = i.p + "0bfbdf5c0e06948136651805ba740256.svg"
        },
        391252: (t, e, i) => {
            t.exports = i.p + "3952276d502a2b3659f3cb3c163e9541.svg"
        },
        376341: (t, e, i) => {
            t.exports = i.p + "8cf9d19315d87fe9bb98469d22f78a72.svg"
        },
        80209: (t, e, i) => {
            t.exports = i.p + "4f21dea2767b186965157eba97f085b2.svg"
        },
        938688: (t, e, i) => {
            t.exports = i.p + "7fc3c4075dd1ab62905126ce5623a7b5.svg"
        },
        23162: (t, e, i) => {
            t.exports = i.p + "939c709099ed020091dc58cbd5207cbd.svg"
        },
        953323: (t, e, i) => {
            t.exports = i.p + "a685e425d7c7db0c14c7b97352f4dd4b.svg"
        },
        619879: (t, e, i) => {
            t.exports = i.p + "a86b168bc533484e6274628d63888308.svg"
        },
        20769: (t, e, i) => {
            t.exports = i.p + "ea2822078cff5228899c74ce3525125c.svg"
        },
        43938: (t, e, i) => {
            t.exports = i.p + "f073a4ed2f2edbf549bad8b3c546af03.svg"
        },
        661591: (t, e, i) => {
            t.exports = i.p + "fd1f2a821ac21b8c757f95ba0b5032e0.svg"
        },
        715319: (t, e, i) => {
            t.exports = i.p + "c4978c8d35ff46ddde11765f574e2586.svg"
        },
        538418: (t, e, i) => {
            t.exports = i.p + "33e4a650ec09d861a47f0f2c2d912774.svg"
        },
        552185: (t, e, i) => {
            t.exports = i.p + "e097b411b3e34f5a4a979cc428c289b1.svg"
        },
        511063: (t, e, i) => {
            t.exports = i.p + "9b10f00f014bc0f9d1a452e07a0d161a.svg"
        },
        734979: (t, e, i) => {
            t.exports = i.p + "b755b85a9536ead06ef26ecd24724e0c.svg"
        },
        830302: (t, e, i) => {
            t.exports = i.p + "e33a72eb50fe28dc0289c2257014fc6a.svg"
        },
        783764: (t, e, i) => {
            t.exports = i.p + "63bccd48089718d7044ce87890d1af22.svg"
        },
        644359: (t, e, i) => {
            t.exports = i.p + "0dccec7ce2c9a2fe85d49d9ab8f1480b.svg"
        },
        837269: (t, e, i) => {
            t.exports = i.p + "1bf2c1b06e7ab37b765dd3f5b891a241.svg"
        },
        84452: (t, e, i) => {
            t.exports = i.p + "d3c2e6ce4be2a5b1bf9ca5a18d2d1238.svg"
        },
        325903: (t, e, i) => {
            t.exports = i.p + "107e8251a0eb3758b47077295437a81e.svg"
        },
        312442: (t, e, i) => {
            t.exports = i.p + "1e2e718c683b1d6325a427dff2d6c78f.svg"
        },
        335248: (t, e, i) => {
            t.exports = i.p + "e8e5b1c68e4f95acd9322863c0b363f6.svg"
        },
        801195: (t, e, i) => {
            t.exports = i.p + "36a36b038ee2b086d99f0dff97512fec.svg"
        },
        954617: (t, e, i) => {
            t.exports = i.p + "e40ab9cc58df416f4b384648a7af369c.svg"
        },
        106702: (t, e, i) => {
            t.exports = i.p + "d17555267bdf6ed9e01a7f4d525ef080.svg"
        },
        665030: (t, e, i) => {
            t.exports = i.p + "3daf0fa39e9e67bfc0f12166dd01adfd.svg"
        },
        958541: (t, e, i) => {
            t.exports = i.p + "62bf57b352114c25f178d892fef2c1d8.svg"
        },
        918277: (t, e, i) => {
            t.exports = i.p + "6169c60c8d04924d194452dff1191b8e.svg"
        },
        768713: (t, e, i) => {
            t.exports = i.p + "60542233074e88f72cb7738cd671069f.svg"
        },
        58480: (t, e, i) => {
            t.exports = i.p + "85398f0b883442712a726600cec9c27d.svg"
        },
        846803: (t, e, i) => {
            t.exports = i.p + "6ce4af2df856e7fd43f8786a3c3a2e5d.svg"
        },
        286390: (t, e, i) => {
            t.exports = i.p + "bbd4456a4e25c099b7f49fe4f00e032f.svg"
        },
        523: (t, e, i) => {
            t.exports = i.p + "858bcfa8c8d9c8d8551fcb9a8cdc2499.svg"
        },
        245767: (t, e, i) => {
            t.exports = i.p + "f071c28bf387d220afe4bd2c6f60323a.svg"
        },
        72946: (t, e, i) => {
            t.exports = i.p + "bf89688b20c1bf96847619b6059daaf5.svg"
        },
        905344: (t, e, i) => {
            t.exports = i.p + "c5bcb60600a07405427fb25b45bc6e53.svg"
        },
        579035: (t, e, i) => {
            t.exports = i.p + "7cc409e9b4b8e2ad95146d0ae8be70e5.svg"
        },
        637536: (t, e, i) => {
            t.exports = i.p + "5c347ffc08d08d0f94ff06366781743d.svg"
        },
        129053: (t, e, i) => {
            t.exports = i.p + "cab55de6e22849402b5982a8e390c8fb.svg"
        },
        86055: (t, e, i) => {
            t.exports = i.p + "ff8661f5c81b7137caa81145ed74b154.svg"
        },
        541654: (t, e, i) => {
            t.exports = i.p + "54405675d653aa1a161b6abcb43291ed.svg"
        },
        242251: (t, e, i) => {
            t.exports = i.p + "ca21ee51c72ab8851ed796a469ec00b8.svg"
        },
        633627: (t, e, i) => {
            t.exports = i.p + "2fc23c00813c60848572b5d28ee7dfb9.svg"
        },
        211983: (t, e, i) => {
            t.exports = i.p + "bf56aba49a57eba71be490bc83a7071c.svg"
        },
        243149: (t, e, i) => {
            t.exports = i.p + "832264ecc6d4da63cbcff71ea9186b3e.svg"
        },
        522995: (t, e, i) => {
            t.exports = i.p + "9f9bbea98fd39966101544a0c55e14e5.svg"
        },
        541030: (t, e, i) => {
            t.exports = i.p + "b31adf0f45d2fb04730c422394eb6ae2.svg"
        },
        940754: (t, e, i) => {
            t.exports = i.p + "3d1dbbd08f14657e981c2a0759373a97.svg"
        },
        458310: (t, e, i) => {
            t.exports = i.p + "111e5d0e64351b2f7ac606b653993cbe.svg"
        },
        99720: (t, e, i) => {
            t.exports = i.p + "c7232e3bcddb5cf2fedab803b86d4e88.svg"
        },
        891382: (t, e, i) => {
            t.exports = i.p + "8dd843123d511ff5adee498714213548.svg"
        },
        635975: (t, e, i) => {
            t.exports = i.p + "b119250cad0725ccc4f8288726f56f6b.svg"
        },
        471326: (t, e, i) => {
            t.exports = i.p + "d92d6ecce7375134958d8e623f59dd3e.svg"
        },
        528217: (t, e, i) => {
            t.exports = i.p + "2f71391908131b082aab4d129f7b5272.svg"
        },
        162469: (t, e, i) => {
            t.exports = i.p + "5b42511a0696d2cbb686e323db88556c.svg"
        },
        875514: (t, e, i) => {
            t.exports = i.p + "f89dbcaf40a5563735910a76243dc1b3.svg"
        },
        652593: (t, e, i) => {
            t.exports = i.p + "ccac1949542b285e1ce6a4fe7f67d942.svg"
        },
        331729: (t, e, i) => {
            t.exports = i.p + "70717ad43398a435ef78d38d226c6c37.svg"
        },
        591948: (t, e, i) => {
            t.exports = i.p + "727ca3bc1d3c5915d9ccc4ba3eee978a.svg"
        },
        375974: (t, e, i) => {
            t.exports = i.p + "a61ec3126315febd0304300cb8098ae5.svg"
        },
        447338: (t, e, i) => {
            t.exports = i.p + "cbd8834b7f336d8d6aa529e87ea89c5d.svg"
        },
        349021: (t, e, i) => {
            t.exports = i.p + "3bceb8e8c9086be15f6d9034fbb8ab90.svg"
        },
        82026: (t, e, i) => {
            t.exports = i.p + "3f0b266c14a3e0a41685729a6dd63515.svg"
        },
        389760: (t, e, i) => {
            t.exports = i.p + "6dfaf2afda613a97ef15734acea4f691.svg"
        },
        288398: (t, e, i) => {
            t.exports = i.p + "9e8a00c2e2b16d8ece1e344906002df9.svg"
        },
        385612: (t, e, i) => {
            t.exports = i.p + "b51b73c5dc965960d789d4616c9372e5.svg"
        },
        378455: (t, e, i) => {
            t.exports = i.p + "752c67ea7ac85fb0cd2f01623bd213bc.svg"
        },
        44390: (t, e, i) => {
            t.exports = i.p + "8ed702249e5be2de3aa98fb61301b23f.svg"
        },
        290978: (t, e, i) => {
            t.exports = i.p + "9efe6680cb2318c0ff0e818ade988fa1.svg"
        },
        14550: (t, e, i) => {
            t.exports = i.p + "842fcb191878b2812c044528ff533832.svg"
        },
        580865: (t, e, i) => {
            t.exports = i.p + "743d0db623f41a2597c1e441233e4a78.svg"
        },
        552902: (t, e, i) => {
            t.exports = i.p + "71968c0503e30bbb4fe32b57c8fdd68d.svg"
        },
        981312: (t, e, i) => {
            t.exports = i.p + "fba03cbebf73ac8a537f901ec25dd0be.svg"
        },
        877568: (t, e, i) => {
            t.exports = i.p + "f8385849a7dacc12bc2195528ceb1085.svg"
        },
        156447: (t, e, i) => {
            t.exports = i.p + "727813bcf45ceaaa481f086bcd697b95.svg"
        },
        753010: (t, e, i) => {
            t.exports = i.p + "e8e5b1c68e4f95acd9322863c0b363f6.svg"
        },
        521376: (t, e, i) => {
            t.exports = i.p + "b8b5ebf760eccf4bd10d0c3ccd100800.svg"
        },
        707721: (t, e, i) => {
            t.exports = i.p + "115d41d15c6f506cd74214a1b277d0c9.svg"
        },
        552616: (t, e, i) => {
            t.exports = i.p + "8f0a3dbc200954cc05d71f00f94c9918.svg"
        },
        30819: (t, e, i) => {
            t.exports = i.p + "8aac8f79a7e13ea8992d4cb7ea372de7.svg"
        },
        955065: (t, e, i) => {
            t.exports = i.p + "b9a5c368e039eba4bf66e0f75e899eb7.svg"
        },
        769721: (t, e, i) => {
            t.exports = i.p + "07958991e829b26257b34748fe61b908.svg"
        },
        885950: (t, e, i) => {
            t.exports = i.p + "ba8de9bab341fb25cc068a78171500ba.svg"
        },
        182909: (t, e, i) => {
            t.exports = i.p + "7eb7a15aebedb479210436be19e02f7f.svg"
        },
        52300: (t, e, i) => {
            "use strict";
            i.d(e, {
                CrosshairMode: () => U,
                LineStyle: () => r,
                PriceScaleMode: () => ft,
                createChart: () => Ki,
                isBusinessDay: () => Ft
            });
            var s, r, n, o = i(768545);

            function a(t, e) {
                var i, s = ((i = {})[0] = [], i[1] = [t.lineWidth, t.lineWidth], i[2] = [2 * t.lineWidth, 2 * t.lineWidth], i[3] = [6 * t.lineWidth, 6 * t.lineWidth], i[4] = [t.lineWidth, 4 * t.lineWidth], i)[e];
                t.setLineDash(s)
            }

            function l(t, e, i, s) {
                t.beginPath();
                var r = t.lineWidth % 2 ? .5 : 0;
                t.moveTo(i, e + r), t.lineTo(s, e + r), t.stroke()
            }(n = s || (s = {}))[n.Simple = 0] = "Simple", n[n.WithSteps = 1] = "WithSteps",
                function(t) {
                    t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed",
                        t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted"
                }(r || (r = {}));
            var h = function(t, e) {
                return (h = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                    })(t, e)
            };

            function c(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function i() {
                    this.constructor = t
                }
                h(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }
            var u = function() {
                return (u = Object.assign || function(t) {
                    for (var e, i = 1, s = arguments.length; i < s; i++)
                        for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }).apply(this, arguments)
            };

            function d(t, e) {
                for (var i = 0, s = e.length, r = t.length; i < s; i++, r++) t[r] = e[i];
                return t
            }

            function p(t, e) {
                if (!t) throw new Error("Assertion failed" + (e ? ": " + e : ""))
            }

            function f(t) {
                if (void 0 === t) throw new Error("Value is undefined");
                return t
            }

            function g(t) {
                if (null === t) throw new Error("Value is null");
                return t
            }

            function m(t) {
                return g(f(t))
            }

            function _(t) {
                for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                for (var s = 0, r = e; s < r.length; s++) {
                    var n = r[s];
                    for (var o in n) void 0 !== n[o] && ("object" != typeof n[o] || void 0 === t[o] ? t[o] = n[o] : _(t[o], n[o]))
                }
                return t
            }

            function v(t) {
                return "number" == typeof t && isFinite(t)
            }

            function y(t) {
                return "number" == typeof t && t % 1 == 0
            }

            function b(t) {
                return "string" == typeof t
            }

            function w(t) {
                return "boolean" == typeof t
            }

            function S(t) {
                var e, i, s, r = t;
                if (!r || "object" != typeof r) return r;
                for (i in e = Array.isArray(r) ? [] : {}, r) r.hasOwnProperty(i) && (s = r[i], e[i] = s && "object" == typeof s ? S(s) : s);
                return e
            }

            function C(t) {
                return null !== t
            }

            function x(t) {
                return null === t ? void 0 : t
            }
            var M = function() {
                    function t() {
                        this.t = []
                    }
                    return t.prototype.i = function(t) {
                        this.t = t
                    }, t.prototype.h = function(t, e, i, s) {
                        this.t.forEach((function(r) {
                            t.save(), r.h(t, e, i, s), t.restore()
                        }))
                    }, t
                }(),
                k = function() {
                    function t() {}
                    return t.prototype.h = function(t, e, i, s) {
                        t.save(), t.scale(e, e), this.u(t, i, s), t.restore()
                    }, t.prototype.o = function(t, e, i, s) {
                        t.save(), t.scale(e, e), this.l(t, i, s), t.restore()
                    }, t.prototype.l = function(t, e, i) {}, t
                }(),
                E = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.v = null, e
                    }
                    return c(e, t), e.prototype._ = function(t) {
                        this.v = t
                    }, e.prototype.u = function(t) {
                        if (null !== this.v && null !== this.v.M) {
                            var e = this.v.M,
                                i = this.v,
                                s = function(s) {
                                    t.beginPath();
                                    for (var r = e.to - 1; r >= e.from; --r) {
                                        var n = i.m[r];
                                        t.moveTo(n.g, n.p), t.arc(n.g, n.p, s, 0, 2 * Math.PI)
                                    }
                                    t.fill()
                                };
                            t.fillStyle = i.k, s(i.N + 2), t.fillStyle = i.S, s(i.N)
                        }
                    }, e
                }(k),
                P = {
                    from: 0,
                    to: 1
                },
                T = function() {
                    function t(t, e) {
                        this.C = new M, this.D = [], this.T = [], this.B = !0, this.L = t, this.A = e, this.C.i(this.D)
                    }
                    return t.prototype.V = function(t) {
                        var e = this,
                            i = this.L.O();
                        i.length !== this.D.length && (this.T = i.map((function() {
                            return {
                                m: [{
                                    g: 0,
                                    p: 0,
                                    P: 0,
                                    F: 0
                                }],
                                S: "",
                                k: e.L.I().layout.backgroundColor,
                                N: 0,
                                M: null
                            }
                        })), this.D = this.T.map((function(t) {
                            var e = new E;
                            return e._(t), e
                        })), this.C.i(this.D)), this.B = !0
                    }, t.prototype.W = function(t, e, i) {
                        return this.B && (this.R(), this.B = !1), this.C
                    }, t.prototype.R = function() {
                        var t = this,
                            e = this.L.O(),
                            i = this.A.j(),
                            s = this.L.U();
                        e.forEach((function(e, r) {
                            var n = t.T[r],
                                o = e.q(i);
                            if (null !== o && e.H()) {
                                var a = g(e.Y());
                                n.S = o.K, n.k = o.$, n.N = o.N, n.m[0].F = o.F, n.m[0].p = e.Z().X(o.F, a.J), n.m[0].P = i, n.m[0].g = s.G(i), n.M = P
                            } else n.M = null
                        }))
                    }, t
                }(),
                A = function() {
                    function t(t) {
                        this.tt = t
                    }
                    return t.prototype.h = function(t, e, i, s) {
                        if (null !== this.tt) {
                            var r = this.tt.it.H,
                                n = this.tt.nt.H;
                            if (r || n) {
                                t.save();
                                var o = Math.round(this.tt.g * e),
                                    h = Math.round(this.tt.p * e),
                                    c = Math.ceil(this.tt.ht * e),
                                    u = Math.ceil(this.tt.st * e);
                                t.lineCap = "butt", r && o >= 0 && (t.lineWidth = Math.floor(this.tt.it.rt * e), t.strokeStyle = this.tt.it.et, t.fillStyle = this.tt.it.et, a(t, this.tt.it.ut), function(t, e, i, s) {
                                    t.beginPath();
                                    var r = t.lineWidth % 2 ? .5 : 0;
                                    t.moveTo(e + r, 0), t.lineTo(e + r, s), t.stroke()
                                }(t, o, 0, u)), n && h >= 0 && (t.lineWidth = Math.floor(this.tt.nt.rt * e), t.strokeStyle = this.tt.nt.et, t.fillStyle = this.tt.nt.et, a(t, this.tt.nt.ut), l(t, h, 0, c)), t.restore()
                            }
                        }
                    }, t
                }(),
                L = function() {
                    function t(t) {
                        this.B = !0, this.at = {
                            it: {
                                rt: 1,
                                ut: 0,
                                et: "",
                                H: !1
                            },
                            nt: {
                                rt: 1,
                                ut: 0,
                                et: "",
                                H: !1
                            },
                            ht: 0,
                            st: 0,
                            g: 0,
                            p: 0
                        }, this.ot = new A(this.at), this.lt = t
                    }
                    return t.prototype.V = function() {
                        this.B = !0
                    }, t.prototype.W = function(t, e) {
                        return this.B && (this.R(), this.B = !1), this.ot
                    }, t.prototype.R = function() {
                        var t = this.lt.H(),
                            e = g(this.lt.ft()),
                            i = e.ct().I().crosshair,
                            s = this.at;
                        s.nt.H = t && this.lt.vt(e), s.it.H = t && this.lt._t(), s.nt.rt = i.horzLine.width, s.nt.ut = i.horzLine.style, s.nt.et = i.horzLine.color, s.it.rt = i.vertLine.width, s.it.ut = i.vertLine.style, s.it.et = i.vertLine.color, s.ht = e.dt(), s.st = e.wt(), s.g = this.lt.Mt(), s.p = this.lt.bt()
                    }, t
                }(),
                D = {
                    khaki: "#f0e68c",
                    azure: "#f0ffff",
                    aliceblue: "#f0f8ff",
                    ghostwhite: "#f8f8ff",
                    gold: "#ffd700",
                    goldenrod: "#daa520",
                    gainsboro: "#dcdcdc",
                    gray: "#808080",
                    green: "#008000",
                    honeydew: "#f0fff0",
                    floralwhite: "#fffaf0",
                    lightblue: "#add8e6",
                    lightcoral: "#f08080",
                    lemonchiffon: "#fffacd",
                    hotpink: "#ff69b4",
                    lightyellow: "#ffffe0",
                    greenyellow: "#adff2f",
                    lightgoldenrodyellow: "#fafad2",
                    limegreen: "#32cd32",
                    linen: "#faf0e6",
                    lightcyan: "#e0ffff",
                    magenta: "#f0f",
                    maroon: "#800000",
                    olive: "#808000",
                    orange: "#ffa500",
                    oldlace: "#fdf5e6",
                    mediumblue: "#0000cd",
                    transparent: "#0000",
                    lime: "#0f0",
                    lightpink: "#ffb6c1",
                    mistyrose: "#ffe4e1",
                    moccasin: "#ffe4b5",
                    midnightblue: "#191970",
                    orchid: "#da70d6",
                    mediumorchid: "#ba55d3",
                    mediumturquoise: "#48d1cc",
                    orangered: "#ff4500",
                    royalblue: "#4169e1",
                    powderblue: "#b0e0e6",
                    red: "#f00",
                    coral: "#ff7f50",
                    turquoise: "#40e0d0",
                    white: "#fff",
                    whitesmoke: "#f5f5f5",
                    wheat: "#f5deb3",
                    teal: "#008080",
                    steelblue: "#4682b4",
                    bisque: "#ffe4c4",
                    aquamarine: "#7fffd4",
                    aqua: "#0ff",
                    sienna: "#a0522d",
                    silver: "#c0c0c0",
                    springgreen: "#00ff7f",
                    antiquewhite: "#faebd7",
                    burlywood: "#deb887",
                    brown: "#a52a2a",
                    beige: "#f5f5dc",
                    chocolate: "#d2691e",
                    chartreuse: "#7fff00",
                    cornflowerblue: "#6495ed",
                    cornsilk: "#fff8dc",
                    crimson: "#dc143c",
                    cadetblue: "#5f9ea0",
                    tomato: "#ff6347",
                    fuchsia: "#f0f",
                    blue: "#00f",
                    salmon: "#fa8072",
                    blanchedalmond: "#ffebcd",
                    slateblue: "#6a5acd",
                    slategray: "#708090",
                    thistle: "#d8bfd8",
                    tan: "#d2b48c",
                    cyan: "#0ff",
                    darkblue: "#00008b",
                    darkcyan: "#008b8b",
                    darkgoldenrod: "#b8860b",
                    darkgray: "#a9a9a9",
                    blueviolet: "#8a2be2",
                    black: "#000",
                    darkmagenta: "#8b008b",
                    darkslateblue: "#483d8b",
                    darkkhaki: "#bdb76b",
                    darkorchid: "#9932cc",
                    darkorange: "#ff8c00",
                    darkgreen: "#006400",
                    darkred: "#8b0000",
                    dodgerblue: "#1e90ff",
                    darkslategray: "#2f4f4f",
                    dimgray: "#696969",
                    deepskyblue: "#00bfff",
                    firebrick: "#b22222",
                    forestgreen: "#228b22",
                    indigo: "#4b0082",
                    ivory: "#fffff0",
                    lavenderblush: "#fff0f5",
                    feldspar: "#d19275",
                    indianred: "#cd5c5c",
                    lightgreen: "#90ee90",
                    lightgrey: "#d3d3d3",
                    lightskyblue: "#87cefa",
                    lightslategray: "#789",
                    lightslateblue: "#8470ff",
                    snow: "#fffafa",
                    lightseagreen: "#20b2aa",
                    lightsalmon: "#ffa07a",
                    darksalmon: "#e9967a",
                    darkviolet: "#9400d3",
                    mediumpurple: "#9370d8",
                    mediumaquamarine: "#66cdaa",
                    skyblue: "#87ceeb",
                    lavender: "#e6e6fa",
                    lightsteelblue: "#b0c4de",
                    mediumvioletred: "#c71585",
                    mintcream: "#f5fffa",
                    navajowhite: "#ffdead",
                    navy: "#000080",
                    olivedrab: "#6b8e23",
                    palevioletred: "#d87093",
                    violetred: "#d02090",
                    yellow: "#ff0",
                    yellowgreen: "#9acd32",
                    lawngreen: "#7cfc00",
                    pink: "#ffc0cb",
                    paleturquoise: "#afeeee",
                    palegoldenrod: "#eee8aa",
                    darkolivegreen: "#556b2f",
                    darkseagreen: "#8fbc8f",
                    darkturquoise: "#00ced1",
                    peachpuff: "#ffdab9",
                    deeppink: "#ff1493",
                    violet: "#ee82ee",
                    palegreen: "#98fb98",
                    mediumseagreen: "#3cb371",
                    peru: "#cd853f",
                    saddlebrown: "#8b4513",
                    sandybrown: "#f4a460",
                    rosybrown: "#bc8f8f",
                    purple: "#800080",
                    seagreen: "#2e8b57",
                    seashell: "#fff5ee",
                    papayawhip: "#ffefd5",
                    mediumslateblue: "#7b68ee",
                    plum: "#dda0dd",
                    mediumspringgreen: "#00fa9a"
                };

            function I(t) {
                return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0
            }
            var N = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
                F = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
                B = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
                R = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;

            function O(t) {
                var e, i = function(t) {
                    var e;
                    if ((t = t.toLowerCase()) in D && (t = D[t]), e = R.exec(t) || B.exec(t)) return [I(parseInt(e[1], 10)), I(parseInt(e[2], 10)), I(parseInt(e[3], 10))];
                    if (e = F.exec(t)) return [I(parseInt(e[1], 16)), I(parseInt(e[2], 16)), I(parseInt(e[3], 16))];
                    if (e = N.exec(t)) return [I(17 * parseInt(e[1], 16)), I(17 * parseInt(e[2], 16)), I(17 * parseInt(e[3], 16))];
                    throw new Error("Cannot parse color: " + t)
                }(t);
                return {
                    gt: "rgb(" + i[0] + ", " + i[1] + ", " + i[2] + ")",
                    yt: (e = i, .199 * e[0] + .687 * e[1] + .114 * e[2] > 160 ? "black" : "white")
                }
            }

            function q(t, e, i, s, r, n) {
                t.fillRect(e + n, i, s - 2 * n, n), t.fillRect(e + n, i + r - n, s - 2 * n, n), t.fillRect(e, i, n, r), t.fillRect(e + s - n, i, n, r)
            }

            function W(t, e, i) {
                t.save(), t.scale(e, e), i(), t.restore()
            }

            function z(t, e, i, s, r, n) {
                t.save(), t.globalCompositeOperation = "copy", t.fillStyle = n, t.fillRect(e, i, s, r), t.restore()
            }
            var U, V = function() {
                    function t(t, e) {
                        this._(t, e)
                    }
                    return t.prototype._ = function(t, e) {
                        this.tt = t, this.kt = e
                    }, t.prototype.h = function(t, e, i, s, r, n) {
                        if (this.tt.H) {
                            t.font = e.xt;
                            var o = this.tt.Nt || !this.tt.St ? e.Ct : 0,
                                a = e.Dt,
                                l = e.Tt,
                                h = e.Bt,
                                c = e.Et,
                                u = e.Lt,
                                d = this.tt.At,
                                p = Math.ceil(i.Vt(t, d)),
                                f = e.Ot,
                                g = e.zt + l + h,
                                m = Math.ceil(.5 * g),
                                _ = a + p + c + u + o,
                                v = this.kt.Pt;
                            this.kt.Ft && (v = this.kt.Ft);
                            var y, b, w = (v = Math.round(v)) - m,
                                S = w + g,
                                C = "right" === r,
                                x = C ? s : 0,
                                M = Math.ceil(s * n),
                                k = x;
                            if (t.fillStyle = this.kt.gt, t.lineWidth = 1, t.lineCap = "butt", d) {
                                C ? (y = x - o, b = (k = x - _) + u) : (k = x + _, y = x + o, b = x + a + o + c);
                                var E = Math.max(1, Math.floor(n)),
                                    P = Math.max(1, Math.floor(a * n)),
                                    T = C ? M : 0,
                                    A = Math.round(w * n),
                                    L = Math.round(k * n),
                                    D = Math.round(v * n) - Math.floor(.5 * n),
                                    I = D + E + (D - A),
                                    N = Math.round(y * n);
                                t.save(), t.beginPath(), t.moveTo(T, A), t.lineTo(L, A), t.lineTo(L, I), t.lineTo(T, I), t.fill(), t.fillStyle = this.tt.$, t.fillRect(C ? M - P : 0, A, P, I - A), this.tt.Nt && (t.fillStyle = this.kt.et, t.fillRect(T, D, N - T, E)), t.textAlign = "left", t.fillStyle = this.kt.et, W(t, n, (function() {
                                    t.fillText(d, b, S - h - f)
                                })), t.restore()
                            }
                        }
                    }, t.prototype.wt = function(t, e) {
                        return this.tt.H ? t.zt + t.Tt + t.Bt : 0
                    }, t
                }(),
                H = function() {
                    function t(t) {
                        this.It = {
                            Pt: 0,
                            et: "#FFF",
                            gt: "#000"
                        }, this.Wt = {
                            At: "",
                            H: !1,
                            Nt: !0,
                            St: !1,
                            $: ""
                        }, this.Rt = {
                            At: "",
                            H: !1,
                            Nt: !1,
                            St: !0,
                            $: ""
                        }, this.B = !0, this.jt = new(t || V)(this.Wt, this.It), this.Ut = new(t || V)(this.Rt, this.It)
                    }
                    return t.prototype.At = function() {
                        return this.Wt.At
                    }, t.prototype.Pt = function() {
                        return this.qt(), this.It.Pt
                    }, t.prototype.V = function() {
                        this.B = !0
                    }, t.prototype.wt = function(t, e) {
                        return void 0 === e && (e = !1), Math.max(this.jt.wt(t, e), this.Ut.wt(t, e))
                    }, t.prototype.Ht = function() {
                        return this.It.Ft || 0
                    }, t.prototype.Yt = function(t) {
                        this.It.Ft = t
                    }, t.prototype.Kt = function() {
                        return this.qt(), this.Wt.H || this.Rt.H
                    }, t.prototype.$t = function() {
                        return this.qt(), this.Wt.H
                    }, t.prototype.W = function(t) {
                        return this.qt(), this.Wt.Nt = this.Wt.Nt && t.I().drawTicks, this.Rt.Nt = this.Rt.Nt && t.I().drawTicks, this.jt._(this.Wt, this.It), this.Ut._(this.Rt, this.It), this.jt
                    }, t.prototype.Xt = function() {
                        return this.qt(), this.jt._(this.Wt, this.It), this.Ut._(this.Rt, this.It), this.Ut
                    }, t.prototype.qt = function() {
                        this.B && (this.Wt.Nt = !0, this.Rt.Nt = !1, this.Zt(this.Wt, this.Rt, this.It))
                    }, t
                }(),
                $ = function(t) {
                    function e(e, i, s) {
                        var r = t.call(this) || this;
                        return r.lt = e, r.Jt = i, r.Gt = s, r
                    }
                    return c(e, t), e.prototype.Zt = function(t, e, i) {
                        t.H = !1;
                        var s = this.lt.I().horzLine;
                        if (s.labelVisible) {
                            var r = this.Jt.Y();
                            if (this.lt.H() && !this.Jt.Qt() && null !== r) {
                                var n = O(s.labelBackgroundColor);
                                i.gt = n.gt, i.et = n.yt;
                                var o = this.Gt(this.Jt);
                                i.Pt = o.Pt, t.At = this.Jt.ti(o.F, r), t.H = !0
                            }
                        }
                    }, e
                }(H),
                j = /[1-9]/g,
                Y = function() {
                    function t() {
                        this.tt = null
                    }
                    return t.prototype._ = function(t) {
                        this.tt = t
                    }, t.prototype.h = function(t, e, i) {
                        var s = this;
                        if (null !== this.tt && !1 !== this.tt.H && 0 !== this.tt.At.length) {
                            t.font = e.xt;
                            var r = Math.round(e.ii.Vt(t, this.tt.At, j));
                            if (!(r <= 0)) {
                                t.save();
                                var n = e.ni,
                                    o = r + 2 * n,
                                    a = o / 2,
                                    l = this.tt.dt,
                                    h = this.tt.Pt,
                                    c = Math.floor(h - a) + .5;
                                c < 0 ? (h += Math.abs(0 - c), c = Math.floor(h - a) + .5) : c + o > l && (h -= Math.abs(l - (c + o)), c = Math.floor(h - a) + .5);
                                var u = c + o,
                                    d = 0 + e.Dt + e.Tt + e.zt + e.Bt;
                                t.fillStyle = this.tt.gt;
                                var p = Math.round(c * i),
                                    f = Math.round(0 * i),
                                    m = Math.round(u * i),
                                    _ = Math.round(d * i);
                                t.fillRect(p, f, m - p, _ - f);
                                var v = Math.round(this.tt.Pt * i),
                                    y = f,
                                    b = Math.round((y + e.Dt + e.Ct) * i);
                                t.fillStyle = this.tt.et;
                                var w = Math.max(1, Math.floor(i)),
                                    S = Math.floor(.5 * i);
                                t.fillRect(v - S, y, w, b - y);
                                var C = d - e.Ot - e.Bt;
                                t.textAlign = "left", t.fillStyle = this.tt.et, W(t, i, (function() {
                                    t.fillText(g(s.tt).At, c + n, C)
                                })), t.restore()
                            }
                        }
                    }, t
                }(),
                G = function() {
                    function t(t, e, i) {
                        this.B = !0, this.ot = new Y, this.at = {
                            H: !1,
                            gt: "#4c525e",
                            et: "white",
                            At: "",
                            dt: 0,
                            Pt: NaN
                        }, this.A = t, this.hi = e, this.Gt = i
                    }
                    return t.prototype.V = function() {
                        this.B = !0
                    }, t.prototype.W = function() {
                        return this.B && (this.R(), this.B = !1), this.ot._(this.at), this.ot
                    }, t.prototype.R = function() {
                        var t = this.at;
                        t.H = !1;
                        var e = this.A.I().vertLine;
                        if (e.labelVisible) {
                            var i = this.hi.U();
                            if (!i.Qt()) {
                                var s = i.si(this.A.j());
                                t.dt = i.dt();
                                var r = this.Gt();
                                if (r.P) {
                                    t.Pt = r.Pt, t.At = i.ri(g(s)), t.H = !0;
                                    var n = O(e.labelBackgroundColor);
                                    t.gt = n.gt, t.et = n.yt
                                }
                            }
                        }
                    }, t
                }(),
                X = function() {
                    function t() {
                        this.ei = null, this.ui = 0
                    }
                    return t.prototype.ai = function() {
                        return this.ui
                    }, t.prototype.oi = function(t) {
                        this.ui = t
                    }, t.prototype.Z = function() {
                        return this.ei
                    }, t.prototype.li = function(t) {
                        this.ei = t
                    }, t.prototype.fi = function(t, e) {
                        return []
                    }, t.prototype.ci = function(t) {
                        return []
                    }, t.prototype.vi = function() {
                        return []
                    }, t.prototype.H = function() {
                        return !0
                    }, t
                }();
            ! function(t) {
                t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet"
            }(U || (U = {}));
            var J = function(t) {
                function e(e, i) {
                    var s, r, n = t.call(this) || this;
                    n._i = null, n.di = NaN, n.wi = 0, n.Mi = !0, n.bi = new Map, n.mi = !1, n.gi = NaN, n.pi = NaN, n.yi = NaN, n.ki = NaN, n.hi = e, n.xi = i, n.Ni = new T(e, n), n.Si = (s = function() {
                        return n.di
                    }, r = function() {
                        return n.pi
                    }, function(t) {
                        var e = r(),
                            i = s();
                        if (t === g(n._i).Ci()) return {
                            F: i,
                            Pt: e
                        };
                        var o = g(t.Y());
                        return {
                            F: t.Di(e, o),
                            Pt: e
                        }
                    });
                    var o = function() {
                        return {
                            P: n.hi.U().si(n.wi),
                            Pt: n.Mt()
                        }
                    };
                    return n.Ti = new G(n, e, o), n.Bi = new L(n), n
                }
                return c(e, t), e.prototype.I = function() {
                    return this.xi
                }, e.prototype.Ei = function(t, e) {
                    this.yi = t, this.ki = e
                }, e.prototype.Li = function() {
                    this.yi = NaN, this.ki = NaN
                }, e.prototype.Ai = function() {
                    return this.yi
                }, e.prototype.Vi = function() {
                    return this.ki
                }, e.prototype.Oi = function(t, e, i) {
                    this.mi || (this.mi = !0), this.Mi = !0, this.zi(t, e, i)
                }, e.prototype.j = function() {
                    return this.wi
                }, e.prototype.Mt = function() {
                    return this.gi
                }, e.prototype.bt = function() {
                    return this.pi
                }, e.prototype.H = function() {
                    return this.Mi
                }, e.prototype.Pi = function() {
                    this.Mi = !1, this.Fi(), this.di = NaN, this.gi = NaN, this.pi = NaN, this._i = null, this.Li()
                }, e.prototype.ci = function(t) {
                    return null !== this._i ? [this.Bi, this.Ni] : []
                }, e.prototype.vt = function(t) {
                    return t === this._i && this.xi.horzLine.visible
                }, e.prototype._t = function() {
                    return this.xi.vertLine.visible
                }, e.prototype.fi = function(t, e) {
                    this.Mi && this._i === t || this.bi.clear();
                    var i = [];
                    return this._i === t && i.push(this.Ii(this.bi, e, this.Si)), i
                }, e.prototype.vi = function() {
                    return this.Mi ? [this.Ti] : []
                }, e.prototype.ft = function() {
                    return this._i
                }, e.prototype.Wi = function() {
                    this.Bi.V(), this.bi.forEach((function(t) {
                        return t.V()
                    })), this.Ti.V(), this.Ni.V()
                }, e.prototype.Ri = function(t) {
                    return t && !t.Ci().Qt() ? t.Ci() : null
                }, e.prototype.zi = function(t, e, i) {
                    this.ji(t, e, i) && this.Wi()
                }, e.prototype.ji = function(t, e, i) {
                    var s = this.gi,
                        r = this.pi,
                        n = this.di,
                        o = this.wi,
                        a = this._i,
                        l = this.Ri(i);
                    this.wi = t, this.gi = isNaN(t) ? NaN : this.hi.U().G(t), this._i = i;
                    var h = null !== l ? l.Y() : null;
                    return null !== l && null !== h ? (this.di = e, this.pi = l.X(e, h)) : (this.di = NaN, this.pi = NaN), s !== this.gi || r !== this.pi || o !== this.wi || n !== this.di || a !== this._i
                }, e.prototype.Fi = function() {
                    var t = this.hi.O().map((function(t) {
                            return t.qi().Ui()
                        })).filter(C),
                        e = 0 === t.length ? null : Math.max.apply(Math, t);
                    this.wi = null !== e ? e : NaN
                }, e.prototype.Ii = function(t, e, i) {
                    var s = t.get(e);
                    return void 0 === s && (s = new $(this, e, i), t.set(e, s)), s
                }, e
            }(X);

            function Q(t, e) {
                if (!v(t)) return "n/a";
                if (!y(e)) throw new TypeError("invalid length");
                if (e < 0 || e > 16) throw new TypeError("invalid length");
                return 0 === e ? t.toString() : ("0000000000000000" + t.toString()).slice(-e)
            }
            var Z = function() {
                    function t(t, e) {
                        if (e || (e = 1), v(t) && y(t) || (t = 100), t < 0) throw new TypeError("invalid base");
                        this.Jt = t, this.Hi = e, this.Yi()
                    }
                    return t.prototype.format = function(t) {
                        var e = t < 0 ? "−" : "";
                        return t = Math.abs(t), e + this.Ki(t)
                    }, t.prototype.Yi = function() {
                        if (this.$i = 0, this.Jt > 0 && this.Hi > 0)
                            for (var t = this.Jt; t > 1;) t /= 10, this.$i++
                    }, t.prototype.Ki = function(t) {
                        var e = this.Jt / this.Hi,
                            i = Math.floor(t),
                            s = "",
                            r = void 0 !== this.$i ? this.$i : NaN;
                        if (e > 1) {
                            var n = +(Math.round(t * e) - i * e).toFixed(this.$i);
                            n >= e && (n -= e, i += 1), s = "." + Q(+n.toFixed(this.$i) * this.Hi, r)
                        } else i = Math.round(i * e) / e, r > 0 && (s = "." + Q(0, r));
                        return i.toFixed(0) + s
                    }, t
                }(),
                K = function(t) {
                    function e(e) {
                        return void 0 === e && (e = 100), t.call(this, e) || this
                    }
                    return c(e, t), e.prototype.format = function(e) {
                        return t.prototype.format.call(this, e) + "%"
                    }, e
                }(Z),
                tt = function() {
                    function t() {
                        this.Xi = []
                    }
                    return t.prototype.Zi = function(t, e, i) {
                        var s = {
                            Ji: t,
                            Gi: e,
                            Qi: !0 === i
                        };
                        this.Xi.push(s)
                    }, t.prototype.tn = function(t) {
                        var e = this.Xi.findIndex((function(e) {
                            return t === e.Ji
                        }));
                        e > -1 && this.Xi.splice(e, 1)
                    }, t.prototype.nn = function(t) {
                        this.Xi = this.Xi.filter((function(e) {
                            return e.Gi === t
                        }))
                    }, t.prototype.hn = function(t, e) {
                        var i = d([], this.Xi);
                        this.Xi = this.Xi.filter((function(t) {
                            return !t.Qi
                        })), i.forEach((function(i) {
                            return i.Ji(t, e)
                        }))
                    }, t.prototype.sn = function() {
                        return this.Xi.length > 0
                    }, t.prototype.rn = function() {
                        this.Xi = []
                    }, t
                }(),
                et = function() {
                    function t(t, e) {
                        this.en = t, this.un = e
                    }
                    return t.prototype.an = function(t) {
                        return null !== t && this.en === t.en && this.un === t.un
                    }, t.prototype.on = function() {
                        return new t(this.en, this.un)
                    }, t.prototype.ln = function() {
                        return this.en
                    }, t.prototype.fn = function() {
                        return this.un
                    }, t.prototype.cn = function() {
                        return this.un - this.en
                    }, t.prototype.Qt = function() {
                        return this.un === this.en || Number.isNaN(this.un) || Number.isNaN(this.en)
                    }, t.prototype.vn = function(e) {
                        return null === e ? this : new t(Math.min(this.ln(), e.ln()), Math.max(this.fn(), e.fn()))
                    }, t.prototype._n = function(t) {
                        if (v(t) && 0 != this.un - this.en) {
                            var e = .5 * (this.un + this.en),
                                i = this.un - e,
                                s = this.en - e;
                            i *= t, s *= t, this.un = e + i, this.en = e + s
                        }
                    }, t.prototype.dn = function(t) {
                        v(t) && (this.un += t, this.en += t)
                    }, t.prototype.wn = function() {
                        return {
                            minValue: this.en,
                            maxValue: this.un
                        }
                    }, t.Mn = function(e) {
                        return null === e ? null : new t(e.minValue, e.maxValue)
                    }, t
                }();

            function it(t, e, i) {
                return Math.min(Math.max(t, e), i)
            }

            function st(t, e, i) {
                return e - t <= i
            }

            function rt(t) {
                return t <= 0 ? NaN : Math.log(t) / Math.log(10)
            }

            function nt(t) {
                var e = Math.ceil(t);
                return e % 2 != 0 ? e - 1 : e
            }

            function ot(t) {
                var e = Math.ceil(t);
                return e % 2 == 0 ? e - 1 : e
            }

            function at(t, e) {
                var i = 100 * (t - e) / e;
                return e < 0 ? -i : i
            }

            function lt(t, e) {
                var i = at(t.ln(), e),
                    s = at(t.fn(), e);
                return new et(i, s)
            }

            function ht(t, e) {
                var i = 100 * (t - e) / e + 100;
                return e < 0 ? -i : i
            }

            function ct(t, e) {
                var i = ht(t.ln(), e),
                    s = ht(t.fn(), e);
                return new et(i, s)
            }

            function ut(t) {
                var e = Math.abs(t);
                if (e < 1e-8) return 0;
                var i = rt(e + 1e-4) + 4;
                return t < 0 ? -i : i
            }

            function dt(t) {
                var e = Math.abs(t);
                if (e < 1e-8) return 0;
                var i = Math.pow(10, e - 4) - 1e-4;
                return t < 0 ? -i : i
            }

            function pt(t) {
                if (null === t) return null;
                var e = ut(t.ln()),
                    i = ut(t.fn());
                return new et(e, i)
            }
            var ft, gt = function() {
                    function t(t, e) {
                        if (this.bn = t, this.mn = e, function(t) {
                                if (t < 0) return !1;
                                for (var e = t; e > 1; e /= 10)
                                    if (e % 10 != 0) return !1;
                                return !0
                            }(this.bn)) this.gn = [2, 2.5, 2];
                        else {
                            this.gn = [];
                            for (var i = this.bn; 1 !== i;) {
                                if (i % 2 == 0) this.gn.push(2), i /= 2;
                                else {
                                    if (i % 5 != 0) throw new Error("unexpected base");
                                    this.gn.push(2, 2.5), i /= 5
                                }
                                if (this.gn.length > 100) throw new Error("something wrong with base")
                            }
                        }
                    }
                    return t.prototype.pn = function(t, e, i) {
                        for (var s, r = 0 === this.bn ? 0 : 1 / this.bn, n = 1e-9, o = Math.pow(10, Math.max(0, Math.ceil(rt(t - e)))), a = 0, l = this.mn[0];;) {
                            var h = st(o, r, n) && o > r + n,
                                c = st(o, i * l, n),
                                u = st(o, 1, n);
                            if (!(h && c && u)) break;
                            o /= l, l = this.mn[++a % this.mn.length]
                        }
                        if (o <= r + n && (o = r), o = Math.max(1, o), this.gn.length > 0 && (s = o, 1, n, Math.abs(s - 1) < 1e-9))
                            for (a = 0, l = this.gn[0]; st(o, i * l, n) && o > r + n;) o /= l, l = this.gn[++a % this.gn.length];
                        return o
                    }, t
                }(),
                mt = function() {
                    function t(t, e, i, s) {
                        this.yn = [], this.Jt = t, this.bn = e, this.kn = i, this.xn = s
                    }
                    return t.prototype.pn = function(t, e) {
                        if (t < e) throw new Error("high < low");
                        var i = this.Jt.wt(),
                            s = (t - e) * this.Nn() / i,
                            r = new gt(this.bn, [2, 2.5, 2]),
                            n = new gt(this.bn, [2, 2, 2.5]),
                            o = new gt(this.bn, [2.5, 2, 2]),
                            a = [];
                        return a.push(r.pn(t, e, s), n.pn(t, e, s), o.pn(t, e, s)),
                            function(t) {
                                if (t.length < 1) throw Error("array is empty");
                                for (var e = t[0], i = 1; i < t.length; ++i) t[i] < e && (e = t[i]);
                                return e
                            }(a)
                    }, t.prototype.Sn = function() {
                        var t = this.Jt,
                            e = t.Y();
                        if (null !== e) {
                            var i = t.wt(),
                                s = this.kn(i - 1, e),
                                r = this.kn(0, e),
                                n = this.Jt.I().entireTextOnly ? this.Cn() / 2 : 0,
                                o = n,
                                a = i - 1 - n,
                                l = Math.max(s, r),
                                h = Math.min(s, r);
                            if (l !== h) {
                                for (var c = this.pn(l, h), u = l % c, d = l >= h ? 1 : -1, p = null, f = 0, g = l - (u += u < 0 ? c : 0); g > h; g -= c) {
                                    var m = this.xn(g, e, !0);
                                    null !== p && Math.abs(m - p) < this.Nn() || m < o || m > a || (f < this.yn.length ? (this.yn[f].Dn = m, this.yn[f].Tn = t.Bn(g)) : this.yn.push({
                                        Dn: m,
                                        Tn: t.Bn(g)
                                    }), f++, p = m, t.En() && (c = this.pn(g * d, h)))
                                }
                                this.yn.length = f
                            } else this.yn = []
                        } else this.yn = []
                    }, t.prototype.Ln = function() {
                        return this.yn
                    }, t.prototype.Cn = function() {
                        return this.Jt.zt()
                    }, t.prototype.Nn = function() {
                        return Math.ceil(2.5 * this.Cn())
                    }, t
                }();

            function _t(t) {
                return t.slice().sort((function(t, e) {
                    return g(t.ai()) - g(e.ai())
                }))
            }! function(t) {
                t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100"
            }(ft || (ft = {}));
            var vt, yt = new K,
                bt = new Z(100, 1),
                wt = function() {
                    function t(t, e, i, s) {
                        this.An = 0, this.Vn = null, this.On = null, this.zn = null, this.Pn = {
                            Fn: !1,
                            In: null
                        }, this.Wn = 0, this.Rn = 0, this.jn = new tt, this.Un = new tt, this.qn = [], this.Hn = null, this.Yn = null, this.Kn = null, this.$n = null, this.Xn = bt, this.Zn = t, this.xi = e, this.Jn = i, this.Gn = s, this.Qn = new mt(this, 100, this.th.bind(this), this.ih.bind(this))
                    }
                    return t.prototype.nh = function() {
                        return this.Zn
                    }, t.prototype.I = function() {
                        return this.xi
                    }, t.prototype.hh = function(t) {
                        if (_(this.xi, t), this.sh(), void 0 !== t.mode && this.rh({
                                eh: t.mode
                            }), void 0 !== t.scaleMargins) {
                            var e = f(t.scaleMargins.top),
                                i = f(t.scaleMargins.bottom);
                            if (e < 0 || e > 1) throw new Error("Invalid top margin - expect value between 0 and 1, given=" + e);
                            if (i < 0 || i > 1 || e + i > 1) throw new Error("Invalid bottom margin - expect value between 0 and 1, given=" + i);
                            if (e + i > 1) throw new Error("Invalid margins - sum of margins must be less than 1, given=" + (e + i));
                            this.uh(), this.Yn = null
                        }
                    }, t.prototype.ah = function() {
                        return this.xi.autoScale
                    }, t.prototype.En = function() {
                        return 1 === this.xi.mode
                    }, t.prototype.oh = function() {
                        return 2 === this.xi.mode
                    }, t.prototype.lh = function() {
                        return 3 === this.xi.mode
                    }, t.prototype.eh = function() {
                        return {
                            fh: this.xi.autoScale,
                            _h: this.xi.invertScale,
                            eh: this.xi.mode
                        }
                    }, t.prototype.rh = function(t) {
                        var e = this.eh(),
                            i = null;
                        void 0 !== t.fh && (this.xi.autoScale = t.fh), void 0 !== t.eh && (this.xi.mode = t.eh, 2 !== t.eh && 3 !== t.eh || (this.xi.autoScale = !0), this.Pn.Fn = !1), 1 === e.eh && t.eh !== e.eh && (function(t) {
                            if (null === t) return !1;
                            var e = dt(t.ln()),
                                i = dt(t.fn());
                            return isFinite(e) && isFinite(i)
                        }(this.On) ? null !== (i = function(t) {
                            if (null === t) return null;
                            var e = dt(t.ln()),
                                i = dt(t.fn());
                            return new et(e, i)
                        }(this.On)) && this.dh(i) : this.xi.autoScale = !0), 1 === t.eh && t.eh !== e.eh && null !== (i = pt(this.On)) && this.dh(i);
                        var s = e.eh !== this.xi.mode;
                        s && (2 === e.eh || this.oh()) && this.sh(), s && (3 === e.eh || this.lh()) && this.sh(), void 0 !== t._h && e._h !== t._h && (this.xi.invertScale = t._h, this.wh()), this.Un.hn(e, this.eh())
                    }, t.prototype.Mh = function() {
                        return this.Un
                    }, t.prototype.zt = function() {
                        return this.Jn.fontSize
                    }, t.prototype.wt = function() {
                        return this.An
                    }, t.prototype.bh = function(t) {
                        this.An !== t && (this.An = t, this.uh(), this.Yn = null)
                    }, t.prototype.mh = function() {
                        if (this.Vn) return this.Vn;
                        var t = this.wt() - this.gh() - this.ph();
                        return this.Vn = t, t
                    }, t.prototype.yh = function() {
                        return this.kh(), this.On
                    }, t.prototype.dh = function(t, e) {
                        var i = this.On;
                        (e || null === i && null !== t || null !== i && !i.an(t)) && (this.Yn = null, this.On = t)
                    }, t.prototype.Qt = function() {
                        return this.kh(), 0 === this.An || !this.On || this.On.Qt()
                    }, t.prototype.xh = function(t) {
                        return this._h() ? t : this.wt() - 1 - t
                    }, t.prototype.X = function(t, e) {
                        return this.oh() ? t = at(t, e) : this.lh() && (t = ht(t, e)), this.ih(t, e)
                    }, t.prototype.Nh = function(t, e, i) {
                        this.kh();
                        for (var s = this.ph(), r = g(this.yh()), n = r.ln(), o = r.fn(), a = this.mh() - 1, l = this._h(), h = a / (o - n), c = void 0 === i ? 0 : i.from, u = void 0 === i ? t.length : i.to, d = this.Sh(), p = c; p < u; p++) {
                            var f = t[p],
                                m = f.F;
                            if (!isNaN(m)) {
                                var _ = m;
                                null !== d && (_ = d(f.F, e));
                                var v = s + h * (_ - n),
                                    y = l ? v : this.An - 1 - v;
                                f.p = y
                            }
                        }
                    }, t.prototype.Ch = function(t, e, i) {
                        this.kh();
                        for (var s = this.ph(), r = g(this.yh()), n = r.ln(), o = r.fn(), a = this.mh() - 1, l = this._h(), h = a / (o - n), c = void 0 === i ? 0 : i.from, u = void 0 === i ? t.length : i.to, d = this.Sh(), p = c; p < u; p++) {
                            var f = t[p],
                                m = f.open,
                                _ = f.high,
                                v = f.low,
                                y = f.close;
                            null !== d && (m = d(f.open, e), _ = d(f.high, e), v = d(f.low, e), y = d(f.close, e));
                            var b = s + h * (m - n),
                                w = l ? b : this.An - 1 - b;
                            f.Dh = w, b = s + h * (_ - n), w = l ? b : this.An - 1 - b, f.Th = w, b = s + h * (v - n), w = l ? b : this.An - 1 - b, f.Bh = w, b = s + h * (y - n), w = l ? b : this.An - 1 - b, f.Eh = w
                        }
                    }, t.prototype.Di = function(t, e) {
                        var i = this.th(t, e);
                        return this.Lh(i, e)
                    }, t.prototype.Lh = function(t, e) {
                        var i = t;
                        return this.oh() ? i = function(t, e) {
                            return e < 0 && (t = -t), t / 100 * e + e
                        }(i, e) : this.lh() && (i = function(t, e) {
                            return t -= 100, e < 0 && (t = -t), t / 100 * e + e
                        }(i, e)), i
                    }, t.prototype.Ah = function() {
                        return this.qn
                    }, t.prototype.Vh = function() {
                        if (this.Hn) return this.Hn;
                        for (var t = [], e = 0; e < this.qn.length; e++) {
                            var i = this.qn[e];
                            null === i.ai() && i.oi(e + 1), t.push(i)
                        }
                        return t = _t(t), this.Hn = t, this.Hn
                    }, t.prototype.Oh = function(t) {
                        -1 === this.qn.indexOf(t) && (this.qn.push(t), this.sh(), this.zh())
                    }, t.prototype.Ph = function(t) {
                        var e = this.qn.indexOf(t);
                        if (-1 === e) throw new Error("source is not attached to scale");
                        this.qn.splice(e, 1), 0 === this.qn.length && (this.rh({
                            fh: !0
                        }), this.dh(null)), this.sh(), this.zh()
                    }, t.prototype.Y = function() {
                        for (var t = null, e = 0, i = this.qn; e < i.length; e++) {
                            var s = i[e].Y();
                            null !== s && (null === t || s.Fh < t.Fh) && (t = s)
                        }
                        return null === t ? null : t.J
                    }, t.prototype._h = function() {
                        return this.xi.invertScale
                    }, t.prototype.Ln = function() {
                        return this.Yn || (this.Qn.Sn(), this.Yn = this.Qn.Ln(), this.jn.hn()), this.Yn
                    }, t.prototype.Ih = function() {
                        return this.jn
                    }, t.prototype.Wh = function(t) {
                        this.oh() || this.lh() || null === this.Kn && null === this.zn && (this.Qt() || (this.Kn = this.An - t, this.zn = g(this.yh()).on()))
                    }, t.prototype.Rh = function(t) {
                        if (!this.oh() && !this.lh() && null !== this.Kn) {
                            this.rh({
                                fh: !1
                            }), (t = this.An - t) < 0 && (t = 0);
                            var e = (this.Kn + .2 * (this.An - 1)) / (t + .2 * (this.An - 1)),
                                i = g(this.zn).on();
                            e = Math.max(e, .1), i._n(e), this.dh(i)
                        }
                    }, t.prototype.jh = function() {
                        this.oh() || this.lh() || (this.Kn = null, this.zn = null)
                    }, t.prototype.Uh = function(t) {
                        this.ah() || null === this.$n && null === this.zn && (this.Qt() || (this.$n = t, this.zn = g(this.yh()).on()))
                    }, t.prototype.qh = function(t) {
                        if (!this.ah() && null !== this.$n) {
                            var e = g(this.yh()).cn() / (this.mh() - 1),
                                i = t - this.$n;
                            this._h() && (i *= -1);
                            var s = i * e,
                                r = g(this.zn).on();
                            r.dn(s), this.dh(r, !0), this.Yn = null
                        }
                    }, t.prototype.Hh = function() {
                        this.ah() || null !== this.$n && (this.$n = null, this.zn = null)
                    }, t.prototype.Yh = function() {
                        return this.Xn || this.sh(), this.Xn
                    }, t.prototype.ti = function(t, e) {
                        switch (this.xi.mode) {
                            case 2:
                                return this.Yh().format(at(t, e));
                            case 3:
                                return this.Yh().format(ht(t, e));
                            default:
                                return this.Kh(t)
                        }
                    }, t.prototype.Bn = function(t) {
                        switch (this.xi.mode) {
                            case 2:
                            case 3:
                                return this.Yh().format(t);
                            default:
                                return this.Kh(t)
                        }
                    }, t.prototype.$h = function(t) {
                        return this.Kh(t, g(this.Xh()).Yh())
                    }, t.prototype.Zh = function(t, e) {
                        return t = at(t, e), yt.format(t)
                    }, t.prototype.Jh = function() {
                        return this.qn
                    }, t.prototype.Gh = function(t) {
                        this.Pn = {
                            In: t,
                            Fn: !1
                        }
                    }, t.prototype.Wi = function() {
                        this.qn.forEach((function(t) {
                            return t.Wi()
                        }))
                    }, t.prototype.sh = function() {
                        this.Yn = null;
                        var t = this.Xh(),
                            e = 100;
                        null !== t && (e = Math.round(1 / t.Qh())), this.Xn = bt, this.oh() ? (this.Xn = yt, e = 100) : this.lh() ? (this.Xn = new Z(100, 1), e = 100) : null !== t && (this.Xn = t.Yh()), this.Qn = new mt(this, e, this.th.bind(this), this.ih.bind(this)), this.Qn.Sn()
                    }, t.prototype.zh = function() {
                        this.Hn = null
                    }, t.prototype.Xh = function() {
                        return this.qn[0] || null
                    }, t.prototype.gh = function() {
                        return this._h() ? this.xi.scaleMargins.bottom * this.wt() + this.Rn : this.xi.scaleMargins.top * this.wt() + this.Wn
                    }, t.prototype.ph = function() {
                        return this._h() ? this.xi.scaleMargins.top * this.wt() + this.Wn : this.xi.scaleMargins.bottom * this.wt() + this.Rn
                    }, t.prototype.kh = function() {
                        this.Pn.Fn || (this.Pn.Fn = !0, this.ts())
                    }, t.prototype.uh = function() {
                        this.Vn = null
                    }, t.prototype.ih = function(t, e) {
                        if (this.kh(), this.Qt()) return 0;
                        t = this.En() && t ? ut(t) : t;
                        var i = g(this.yh()),
                            s = this.ph() + (this.mh() - 1) * (t - i.ln()) / i.cn();
                        return this.xh(s)
                    }, t.prototype.th = function(t, e) {
                        if (this.kh(), this.Qt()) return 0;
                        var i = this.xh(t),
                            s = g(this.yh()),
                            r = s.ln() + s.cn() * ((i - this.ph()) / (this.mh() - 1));
                        return this.En() ? dt(r) : r
                    }, t.prototype.wh = function() {
                        this.Yn = null, this.Qn.Sn()
                    }, t.prototype.ts = function() {
                        var t = this.Pn.In;
                        if (null !== t) {
                            for (var e = null, i = 0, s = 0, r = 0, n = this.Jh(); r < n.length; r++) {
                                var o = n[r];
                                if (o.H()) {
                                    var a = o.Y();
                                    if (null !== a) {
                                        var l = o.ns(t.hs(), t.ss()),
                                            h = l && l.yh();
                                        if (null !== h) {
                                            switch (this.xi.mode) {
                                                case 1:
                                                    h = pt(h);
                                                    break;
                                                case 2:
                                                    h = lt(h, a.J);
                                                    break;
                                                case 3:
                                                    h = ct(h, a.J)
                                            }
                                            if (e = null === e ? h : e.vn(g(h)), null !== l) {
                                                var c = l.rs();
                                                null !== c && (i = Math.max(i, c.above), s = Math.max(i, c.below))
                                            }
                                        }
                                    }
                                }
                            }
                            if (i === this.Wn && s === this.Rn || (this.Wn = i, this.Rn = s, this.Yn = null, this.uh()), null !== e) {
                                if (e.ln() === e.fn()) {
                                    var u = this.Xh(),
                                        d = 5 * (null === u || this.oh() || this.lh() ? 1 : u.Qh());
                                    e = new et(e.ln() - d, e.fn() + d)
                                }
                                this.dh(e)
                            } else null === this.On && this.dh(new et(-.5, .5));
                            this.Pn.Fn = !0
                        }
                    }, t.prototype.Sh = function() {
                        return this.oh() ? at : this.lh() ? ht : this.En() ? ut : null
                    }, t.prototype.Kh = function(t, e) {
                        return void 0 === this.Gn.priceFormatter ? (void 0 === e && (e = this.Yh()), e.format(t)) : this.Gn.priceFormatter(t)
                    }, t
                }();

            function St(t) {
                void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor)
            }! function(t) {
                t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible"
            }(vt || (vt = {}));
            var Ct = function(t) {
                return t.getUTCFullYear()
            };
            var xt = function() {
                    function t(t, e) {
                        void 0 === t && (t = "yyyy-MM-dd"), void 0 === e && (e = "default"), this.es = t, this.us = e
                    }
                    return t.prototype.os = function(t) {
                        return function(t, e, i) {
                            return e.replace(/yyyy/g, function(t) {
                                return Q(Ct(t), 4)
                            }(t)).replace(/yy/g, function(t) {
                                return Q(Ct(t) % 100, 2)
                            }(t)).replace(/MMMM/g, function(t, e) {
                                return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(e, {
                                    month: "long"
                                })
                            }(t, i)).replace(/MMM/g, function(t, e) {
                                return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(e, {
                                    month: "short"
                                })
                            }(t, i)).replace(/MM/g, function(t) {
                                return Q(function(t) {
                                    return t.getUTCMonth() + 1
                                }(t), 2)
                            }(t)).replace(/dd/g, function(t) {
                                return Q(function(t) {
                                    return t.getUTCDate()
                                }(t), 2)
                            }(t))
                        }(t, this.es, this.us)
                    }, t
                }(),
                Mt = function() {
                    function t(t) {
                        this.ls = t || "%h:%m:%s"
                    }
                    return t.prototype.os = function(t) {
                        return this.ls.replace("%h", Q(t.getUTCHours(), 2)).replace("%m", Q(t.getUTCMinutes(), 2)).replace("%s", Q(t.getUTCSeconds(), 2))
                    }, t
                }(),
                kt = {
                    fs: "yyyy-MM-dd",
                    cs: "%h:%m:%s",
                    vs: " ",
                    _s: "default"
                },
                Et = function() {
                    function t(t) {
                        void 0 === t && (t = {});
                        var e = u(u({}, kt), t);
                        this.ds = new xt(e.fs, e._s), this.ws = new Mt(e.cs), this.Ms = e.vs
                    }
                    return t.prototype.os = function(t) {
                        return "" + this.ds.os(t) + this.Ms + this.ws.os(t)
                    }, t
                }(),
                Pt = function() {
                    function t(t, e) {
                        void 0 === e && (e = 50), this.bs = 0, this.gs = 1, this.ps = 1, this.ys = new Map, this.ks = new Map, this.xs = t, this.Ns = e
                    }
                    return t.prototype.os = function(t) {
                        var e = void 0 === t.Ss ? new Date(1e3 * t.Cs).getTime() : new Date(Date.UTC(t.Ss.year, t.Ss.month - 1, t.Ss.day)).getTime(),
                            i = this.ys.get(e);
                        if (void 0 !== i) return i.Ds;
                        if (this.bs === this.Ns) {
                            var s = this.ks.get(this.ps);
                            this.ks.delete(this.ps), this.ys.delete(f(s)), this.ps++, this.bs--
                        }
                        var r = this.xs(t);
                        return this.ys.set(e, {
                            Ds: r,
                            Ts: this.gs
                        }), this.ks.set(this.gs, e), this.bs++, this.gs++, r
                    }, t
                }(),
                Tt = function() {
                    function t(t, e) {
                        p(t <= e, "right should be >= left"), this.Bs = t, this.Es = e
                    }
                    return t.prototype.hs = function() {
                        return this.Bs
                    }, t.prototype.ss = function() {
                        return this.Es
                    }, t.prototype.Ls = function() {
                        return this.Es - this.Bs + 1
                    }, t.prototype.As = function(t) {
                        return this.Bs <= t && t <= this.Es
                    }, t.prototype.an = function(t) {
                        return this.Bs === t.hs() && this.Es === t.ss()
                    }, t
                }();

            function At(t, e) {
                return null === t || null === e ? t === e : t.an(e)
            }
            var Lt, Dt = function() {
                    function t() {
                        this.Vs = new Map, this.ys = null
                    }
                    return t.prototype.Os = function(t) {
                        var e = this;
                        this.ys = null, this.Vs.clear(), t.forEach((function(t, i) {
                            var s = e.Vs.get(t.zs);
                            void 0 === s && (s = [], e.Vs.set(t.zs, s)), s.push({
                                Ps: i,
                                P: t.P,
                                Fs: t.zs
                            })
                        }))
                    }, t.prototype.Is = function(t, e) {
                        var i = Math.ceil(e / t);
                        return null !== this.ys && this.ys.Ws === i || (this.ys = {
                            Ln: this.Rs(i),
                            Ws: i
                        }), this.ys.Ln
                    }, t.prototype.Rs = function(t) {
                        for (var e = [], i = 0, s = Array.from(this.Vs.keys()).sort((function(t, e) {
                                return e - t
                            })); i < s.length; i++) {
                            var r = s[i];
                            if (this.Vs.get(r)) {
                                var n = e;
                                e = [];
                                for (var o = n.length, a = 0, l = f(this.Vs.get(r)), h = l.length, c = 1 / 0, u = -1 / 0, d = 0; d < h; d++) {
                                    for (var p = l[d], g = p.Ps; a < o;) {
                                        var m = n[a],
                                            _ = m.Ps;
                                        if (!(_ < g)) {
                                            c = _;
                                            break
                                        }
                                        a++, e.push(m), u = _, c = 1 / 0
                                    }
                                    c - g >= t && g - u >= t && (e.push(p), u = g)
                                }
                                for (; a < o; a++) e.push(n[a])
                            }
                        }
                        return e
                    }, t
                }(),
                It = function() {
                    function t(t) {
                        this.js = t
                    }
                    return t.prototype.Us = function() {
                        return null === this.js ? null : new Tt(Math.floor(this.js.hs()), Math.ceil(this.js.ss()))
                    }, t.prototype.qs = function() {
                        return this.js
                    }, t.Hs = function() {
                        return new t(null)
                    }, t
                }();
            ! function(t) {
                t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds"
            }(Lt || (Lt = {}));
            var Nt = function() {
                function t(t, e, i) {
                    this.Ys = 0, this.Ks = null, this.$s = [], this.$n = null, this.Kn = null, this.Xs = new Dt, this.Zs = new Map, this.Js = It.Hs(), this.Gs = !0, this.Qs = new tt, this.tr = new tt, this.ir = new tt, this.nr = null, this.hr = null, this.sr = [], this.xi = e, this.Gn = i, this.rr = e.rightOffset, this.er = e.barSpacing, this.hi = t, this.ur()
                }
                return t.prototype.I = function() {
                        return this.xi
                    }, t.prototype.ar = function(t) {
                        _(this.Gn, t), this.lr(), this.ur()
                    }, t.prototype.hh = function(t, e) {
                        var i;
                        _(this.xi, t), this.xi.fixLeftEdge && this.cr(), this.xi.fixRightEdge && this.vr(), void 0 !== t.barSpacing && this.hi._r(t.barSpacing), void 0 !== t.rightOffset && this.hi.dr(t.rightOffset), void 0 !== t.minBarSpacing && this.hi._r(null !== (i = t.barSpacing) && void 0 !== i ? i : this.er), this.lr(), this.ur(), this.ir.hn()
                    }, t.prototype.si = function(t) {
                        var e;
                        return (null === (e = this.$s[t]) || void 0 === e ? void 0 : e.P) || null
                    }, t.prototype.wr = function(t, e) {
                        if (this.$s.length < 1) return null;
                        if (t.Cs > this.$s[this.$s.length - 1].P.Cs) return e ? this.$s.length - 1 : null;
                        for (var i = 0; i < this.$s.length; ++i) {
                            if (t.Cs === this.$s[i].P.Cs) return i;
                            if (t.Cs < this.$s[i].P.Cs) return e ? i : null
                        }
                        return null
                    }, t.prototype.Qt = function() {
                        return 0 === this.Ys || 0 === this.$s.length
                    }, t.prototype.Mr = function() {
                        return this.br(), this.Js.Us()
                    }, t.prototype.mr = function() {
                        return this.br(), this.Js.qs()
                    },
                    t.prototype.gr = function() {
                        var t = this.Mr();
                        if (null === t) return null;
                        var e = {
                            from: t.hs(),
                            to: t.ss()
                        };
                        return this.pr(e)
                    }, t.prototype.pr = function(t) {
                        var e = Math.round(t.from),
                            i = Math.round(t.to),
                            s = g(this.yr()),
                            r = g(this.kr());
                        return {
                            from: g(this.si(Math.max(s, e))),
                            to: g(this.si(Math.min(r, i)))
                        }
                    }, t.prototype.Nr = function(t) {
                        return {
                            from: g(this.wr(t.from, !0)),
                            to: g(this.wr(t.to, !0))
                        }
                    }, t.prototype.Sr = function() {
                        return this.Xs
                    }, t.prototype.dt = function() {
                        return this.Ys
                    }, t.prototype.Cr = function(t) {
                        if (isFinite(t) && !(t <= 0) && this.Ys !== t) {
                            if (this.xi.lockVisibleTimeRangeOnResize && this.Ys) {
                                var e = this.er * t / this.Ys;
                                this.Dr(e)
                            }
                            if (this.xi.fixLeftEdge) {
                                var i = this.Mr();
                                if (null !== i && i.hs() <= 0) {
                                    var s = this.Ys - t;
                                    this.rr -= Math.round(s / this.er) + 1
                                }
                            }
                            this.Ys = t, this.Gs = !0, this.Tr(), this.Br()
                        }
                    }, t.prototype.G = function(t) {
                        if (this.Qt() || !y(t)) return 0;
                        var e = this.Er() + this.rr - t;
                        return this.Ys - (e + .5) * this.er - 1
                    }, t.prototype.Lr = function(t, e) {
                        for (var i = this.Er(), s = void 0 === e ? 0 : e.from, r = void 0 === e ? t.length : e.to, n = s; n < r; n++) {
                            var o = t[n].P,
                                a = i + this.rr - o,
                                l = this.Ys - (a + .5) * this.er - 1;
                            t[n].g = l
                        }
                    }, t.prototype.Ar = function(t) {
                        return Math.ceil(this.Vr(t))
                    }, t.prototype.dr = function(t) {
                        this.Gs = !0, this.rr = t, this.Br(), this.hi.Or(), this.hi.zr()
                    }, t.prototype.Pr = function() {
                        return this.er
                    }, t.prototype._r = function(t) {
                        this.Dr(t), this.Br(), this.hi.Or(), this.hi.zr()
                    }, t.prototype.Fr = function() {
                        return this.rr
                    }, t.prototype.Ln = function() {
                        if (this.Qt()) return null;
                        if (null !== this.hr) return this.hr;
                        for (var t = this.er, e = 5 * (this.hi.I().layout.fontSize + 4), i = Math.round(e / t), s = g(this.Mr()), r = Math.max(s.hs(), s.hs() - i), n = Math.max(s.ss(), s.ss() - i), o = 0, a = 0, l = this.Xs.Is(t, e); a < l.length; a++) {
                            var h = l[a];
                            if (r <= h.Ps && h.Ps <= n) {
                                var c = this.si(h.Ps);
                                if (null !== c) {
                                    if (o < this.sr.length) {
                                        var u = this.sr[o];
                                        u.Dn = this.G(h.Ps), u.Tn = this.Ir(c, h.Fs), u.Fs = h.Fs
                                    } else this.sr.push({
                                        Dn: this.G(h.Ps),
                                        Tn: this.Ir(c, h.Fs),
                                        Fs: h.Fs
                                    });
                                    o++
                                }
                            }
                        }
                        return this.sr.length = o, this.hr = this.sr, this.sr
                    }, t.prototype.Wr = function() {
                        this.Gs = !0, this._r(this.xi.barSpacing), this.dr(this.xi.rightOffset)
                    }, t.prototype.Rr = function(t) {
                        this.Gs = !0, this.Ks = t, this.Br(), this.cr()
                    }, t.prototype.jr = function(t, e) {
                        var i = this.Vr(t),
                            s = this.Pr(),
                            r = s + e * (s / 10);
                        this._r(r), this.xi.rightBarStaysOnScroll || this.dr(this.Fr() + (i - this.Vr(t)))
                    }, t.prototype.Wh = function(t) {
                        this.$n && this.Hh(), null === this.Kn && null === this.nr && (this.Qt() || (this.Kn = t, this.Ur()))
                    }, t.prototype.Rh = function(t) {
                        if (null !== this.nr) {
                            var e = it(this.Ys - t, 0, this.Ys),
                                i = it(this.Ys - g(this.Kn), 0, this.Ys);
                            0 !== e && 0 !== i && this._r(this.nr.Pr * e / i)
                        }
                    }, t.prototype.jh = function() {
                        null !== this.Kn && (this.Kn = null, this.qr())
                    }, t.prototype.Uh = function(t) {
                        null === this.$n && null === this.nr && (this.Qt() || (this.$n = t, this.Ur()))
                    }, t.prototype.qh = function(t) {
                        if (null !== this.$n) {
                            var e = (this.$n - t) / this.Pr();
                            this.rr = g(this.nr).Fr + e, this.Gs = !0, this.Br()
                        }
                    }, t.prototype.Hh = function() {
                        null !== this.$n && (this.$n = null, this.qr())
                    }, t.prototype.Hr = function() {
                        this.Yr(this.xi.rightOffset)
                    }, t.prototype.Yr = function(t, e) {
                        var i = this;
                        if (void 0 === e && (e = 400), !isFinite(t)) throw new RangeError("offset is required and must be finite number");
                        if (!isFinite(e) || e <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
                        var s = this.rr,
                            r = Date.now(),
                            n = function() {
                                var o = (Date.now() - r) / e,
                                    a = o >= 1,
                                    l = a ? t : s + (t - s) * o;
                                i.dr(l), a || setTimeout(n, 20)
                            };
                        n()
                    }, t.prototype.V = function(t) {
                        this.Gs = !0, this.$s = t, this.Xs.Os(t), this.Br()
                    }, t.prototype.Kr = function() {
                        return this.Qs
                    }, t.prototype.$r = function() {
                        return this.tr
                    }, t.prototype.Xr = function() {
                        return this.ir
                    }, t.prototype.Er = function() {
                        return this.Ks || 0
                    }, t.prototype.Zr = function(t) {
                        var e = t.Ls();
                        this.Dr(this.Ys / e), this.rr = t.ss() - this.Er(), this.Br(), this.Gs = !0, this.hi.Or(), this.hi.zr()
                    }, t.prototype.Jr = function() {
                        var t = this.yr(),
                            e = this.kr();
                        null !== t && null !== e && this.Zr(new Tt(t, e + this.xi.rightOffset))
                    }, t.prototype.Gr = function(t) {
                        var e = new Tt(t.from, t.to);
                        this.Zr(e)
                    }, t.prototype.ri = function(t) {
                        return void 0 !== this.Gn.timeFormatter ? this.Gn.timeFormatter(t.Ss || t.Cs) : this.Qr.os(new Date(1e3 * t.Cs))
                    }, t.prototype.yr = function() {
                        return 0 === this.$s.length ? null : 0
                    }, t.prototype.kr = function() {
                        return 0 === this.$s.length ? null : this.$s.length - 1
                    }, t.prototype.te = function(t) {
                        return (this.Ys - 1 - t) / this.er
                    }, t.prototype.Vr = function(t) {
                        var e = this.te(t),
                            i = this.Er() + this.rr - e;
                        return Math.round(1e6 * i) / 1e6
                    }, t.prototype.Dr = function(t) {
                        var e = this.er;
                        this.er = t, this.Tr(), e !== this.er && (this.Gs = !0, this.ie())
                    }, t.prototype.br = function() {
                        if (this.Gs)
                            if (this.Gs = !1, this.Qt()) this.ne(It.Hs());
                            else {
                                var t = this.Er(),
                                    e = this.Ys / this.er,
                                    i = this.rr + t,
                                    s = new Tt(i - e + 1, i);
                                this.ne(new It(s))
                            }
                    }, t.prototype.Tr = function() {
                        var t = this.he();
                        if (this.er < t && (this.er = t, this.Gs = !0), 0 !== this.Ys) {
                            var e = .5 * this.Ys;
                            this.er > e && (this.er = e, this.Gs = !0)
                        }
                    }, t.prototype.he = function() {
                        return this.xi.fixLeftEdge && this.xi.fixRightEdge ? this.Ys / this.$s.length : this.xi.minBarSpacing
                    }, t.prototype.Br = function() {
                        var t = this.se();
                        this.rr > t && (this.rr = t, this.Gs = !0);
                        var e = this.re();
                        null !== e && this.rr < e && (this.rr = e, this.Gs = !0)
                    }, t.prototype.re = function() {
                        var t = this.yr(),
                            e = this.Ks;
                        return null === t || null === e ? null : t - e - 1 + (this.xi.fixLeftEdge ? this.Ys / this.er : Math.min(2, this.$s.length))
                    }, t.prototype.se = function() {
                        return this.xi.fixRightEdge ? 0 : this.Ys / this.er - Math.min(2, this.$s.length)
                    }, t.prototype.Ur = function() {
                        this.nr = {
                            Pr: this.Pr(),
                            Fr: this.Fr()
                        }
                    }, t.prototype.qr = function() {
                        this.nr = null
                    }, t.prototype.Ir = function(t, e) {
                        var i = this,
                            s = this.Zs.get(e);
                        return void 0 === s && (s = new Pt((function(t) {
                            return i.ee(t, e)
                        })), this.Zs.set(e, s)), s.os(t)
                    }, t.prototype.ee = function(t, e) {
                        var i, s, r = this.xi.timeVisible;
                        return s = e < 20 && r ? this.xi.secondsVisible ? 4 : 3 : e < 40 && r ? 3 : e < 50 || e < 60 ? 2 : e < 70 ? 1 : 0, void 0 !== this.xi.tickMarkFormatter ? this.xi.tickMarkFormatter(null !== (i = t.Ss) && void 0 !== i ? i : t.Cs, s, this.Gn.locale) : function(t, e, i) {
                            var s = {};
                            switch (e) {
                                case 0:
                                    s.year = "numeric";
                                    break;
                                case 1:
                                    s.month = "short";
                                    break;
                                case 2:
                                    s.day = "numeric";
                                    break;
                                case 3:
                                    s.hour12 = !1, s.hour = "2-digit", s.minute = "2-digit";
                                    break;
                                case 4:
                                    s.hour12 = !1, s.hour = "2-digit", s.minute = "2-digit", s.second = "2-digit"
                            }
                            var r = void 0 === t.Ss ? new Date(1e3 * t.Cs) : new Date(Date.UTC(t.Ss.year, t.Ss.month - 1, t.Ss.day));
                            return new Date(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate(), r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds()).toLocaleString(i, s)
                        }(t, s, this.Gn.locale)
                    }, t.prototype.ne = function(t) {
                        var e = this.Js;
                        this.Js = t, At(e.Us(), this.Js.Us()) || this.Qs.hn(), At(e.qs(), this.Js.qs()) || this.tr.hn(), this.ie()
                    }, t.prototype.ie = function() {
                        this.hr = null
                    }, t.prototype.lr = function() {
                        this.ie(), this.Zs.clear()
                    }, t.prototype.ur = function() {
                        var t = this.Gn.dateFormat;
                        this.xi.timeVisible ? this.Qr = new Et({
                            fs: t,
                            cs: this.xi.secondsVisible ? "%h:%m:%s" : "%h:%m",
                            vs: "   ",
                            _s: this.Gn.locale
                        }) : this.Qr = new xt(t, this.Gn.locale)
                    }, t.prototype.cr = function() {
                        if (this.xi.fixLeftEdge) {
                            var t = this.yr();
                            if (null !== t) {
                                var e = g(this.Mr()).hs() - t;
                                if (e < 0) {
                                    var i = this.rr - e - 1;
                                    this.dr(i)
                                }
                                this.Tr()
                            }
                        }
                    }, t.prototype.vr = function() {
                        this.Br(), this.Tr()
                    }, t
            }();

            function Ft(t) {
                return !v(t) && !b(t)
            }

            function Bt(t) {
                return v(t)
            }
            var Rt = "'Trebuchet MS', Roboto, Ubuntu, sans-serif";

            function Ot(t, e, i) {
                return void 0 !== i ? i += " " : i = "", void 0 === e && (e = Rt), "" + i + t + "px " + e
            }
            var qt = function() {
                function t(t) {
                    this.ue = {
                        Dt: 1,
                        Ct: 4,
                        zt: NaN,
                        xt: "",
                        ae: "",
                        et: "",
                        Bt: 0,
                        Et: 0,
                        Lt: 0,
                        Tt: 0,
                        Ot: 0
                    }, this.L = t
                }
                return t.prototype.I = function() {
                    var t = this.ue,
                        e = this.oe(),
                        i = this.le();
                    return t.zt === e && t.ae === i || (t.zt = e, t.ae = i, t.xt = Ot(e, i), t.Tt = Math.floor(e / 3.5), t.Bt = t.Tt, t.Et = Math.max(Math.ceil(e / 2 - t.Ct / 2), 0), t.Lt = Math.ceil(e / 2 + t.Ct / 2), t.Ot = Math.round(e / 10)), t.et = this.fe(), this.ue
                }, t.prototype.fe = function() {
                    return this.L.I().layout.textColor
                }, t.prototype.oe = function() {
                    return this.L.I().layout.fontSize
                }, t.prototype.le = function() {
                    return this.L.I().layout.fontFamily
                }, t
            }();

            function Wt(t) {
                return "left" === t || "right" === t
            }
            var zt = function() {
                    function t(t) {
                        this.ce = new Map, this.ve = !1, this._e = [], this.de = t
                    }
                    return t.prototype.we = function(t, e) {
                        var i = function(t, e) {
                            return void 0 === t ? e : {
                                Me: Math.max(t.Me, e.Me),
                                fh: t.fh || e.fh
                            }
                        }(this.ce.get(t), e);
                        this.ce.set(t, i)
                    }, t.prototype.be = function() {
                        return this.de
                    }, t.prototype.me = function(t) {
                        var e = this.ce.get(t);
                        return void 0 === e ? {
                            Me: this.de
                        } : {
                            Me: Math.max(this.de, e.Me),
                            fh: e.fh
                        }
                    }, t.prototype.ge = function() {
                        this._e = [{
                            pe: 0
                        }]
                    }, t.prototype.ye = function(t) {
                        this._e = [{
                            pe: 1,
                            J: t
                        }]
                    }, t.prototype.ke = function() {
                        this._e = [{
                            pe: 4
                        }]
                    }, t.prototype._r = function(t) {
                        this._e.push({
                            pe: 2,
                            J: t
                        })
                    }, t.prototype.dr = function(t) {
                        this._e.push({
                            pe: 3,
                            J: t
                        })
                    }, t.prototype.xe = function() {
                        return this._e
                    }, t.prototype.vn = function(t) {
                        var e = this;
                        this.ve = this.ve || t.ve, this._e = this._e.concat(t._e);
                        for (var i = 0, s = t._e; i < s.length; i++) {
                            var r = s[i];
                            this.Ne(r)
                        }
                        this.de = Math.max(this.de, t.de), t.ce.forEach((function(t, i) {
                            e.we(i, t)
                        }))
                    }, t.prototype.Ne = function(t) {
                        switch (t.pe) {
                            case 0:
                                this.ge();
                                break;
                            case 1:
                                this.ye(t.J);
                                break;
                            case 2:
                                this._r(t.J);
                                break;
                            case 3:
                                this.dr(t.J);
                                break;
                            case 4:
                                this.ke()
                        }
                    }, t
                }(),
                Ut = function() {
                    function t(t) {
                        this.Se = t
                    }
                    return t.prototype.format = function(t) {
                        var e = "";
                        return t < 0 && (e = "-", t = -t), t < 995 ? e + this.Ce(t) : t < 999995 ? e + this.Ce(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), e + this.Ce(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), e + this.Ce(t / 1e9) + "B")
                    }, t.prototype.Ce = function(t) {
                        var e = Math.pow(10, this.Se);
                        return ((t = Math.round(t * e) / e) >= 1e-15 && t < 1 ? t.toFixed(this.Se).replace(/\.?0+$/, "") : String(t)).replace(/(\.[1-9]*)0+$/, (function(t, e) {
                            return e
                        }))
                    }, t
                }();

            function Vt(t, e, i, s) {
                if (0 !== e.length) {
                    var r = e[s.from].g,
                        n = e[s.from].p;
                    t.moveTo(r, n);
                    for (var o = s.from + 1; o < s.to; ++o) {
                        var a = e[o];
                        if (1 === i) {
                            var l = e[o - 1].p,
                                h = a.g;
                            t.lineTo(h, l)
                        }
                        t.lineTo(a.g, a.p)
                    }
                }
            }
            var Ht = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.v = null, e
                    }
                    return c(e, t), e.prototype._ = function(t) {
                        this.v = t
                    }, e.prototype.u = function(t) {
                        if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
                            if (t.lineCap = "butt", t.lineJoin = "round", t.strokeStyle = this.v.S, t.lineWidth = this.v.rt, a(t, this.v.ut), t.lineWidth = 1, t.beginPath(), 1 === this.v.m.length) {
                                var e = this.v.m[0],
                                    i = this.v.De / 2;
                                t.moveTo(e.g - i, this.v.Te), t.lineTo(e.g - i, e.p), t.lineTo(e.g + i, e.p), t.lineTo(e.g + i, this.v.Te)
                            } else t.moveTo(this.v.m[this.v.M.from].g, this.v.Te), t.lineTo(this.v.m[this.v.M.from].g, this.v.m[this.v.M.from].p), Vt(t, this.v.m, this.v.Be, this.v.M), this.v.M.to > this.v.M.from && (t.lineTo(this.v.m[this.v.M.to - 1].g, this.v.Te), t.lineTo(this.v.m[this.v.M.from].g, this.v.Te));
                            t.closePath();
                            var s = t.createLinearGradient(0, 0, 0, this.v.Te);
                            s.addColorStop(0, this.v.Ee), s.addColorStop(1, this.v.Le), t.fillStyle = s, t.fill()
                        }
                    }, e
                }(k),
                $t = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.v = null, e
                    }
                    return c(e, t), e.prototype._ = function(t) {
                        this.v = t
                    }, e.prototype.u = function(t) {
                        if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
                            if (t.lineCap = "butt", t.lineWidth = this.v.rt, a(t, this.v.ut), t.strokeStyle = this.v.S, t.lineJoin = "round", t.beginPath(), 1 === this.v.m.length) {
                                var e = this.v.m[0];
                                t.moveTo(e.g - this.v.De / 2, e.p), t.lineTo(e.g + this.v.De / 2, e.p)
                            } else Vt(t, this.v.m, this.v.Be, this.v.M);
                            t.stroke()
                        }
                    }, e
                }(k);

            function jt(t, e, i, s, r) {
                void 0 === s && (s = 0), void 0 === r && (r = t.length);
                for (var n = r - s; 0 < n;) {
                    var o = n >> 1,
                        a = s + o;
                    i(t[a], e) ? (s = a + 1, n -= o + 1) : n = o
                }
                return s
            }

            function Yt(t, e, i, s, r) {
                void 0 === s && (s = 0), void 0 === r && (r = t.length);
                for (var n = r - s; 0 < n;) {
                    var o = n >> 1,
                        a = s + o;
                    i(e, t[a]) ? n = o : (s = a + 1, n -= o + 1)
                }
                return s
            }

            function Gt(t, e) {
                return t.P < e
            }

            function Xt(t, e) {
                return t < e.P
            }

            function Jt(t, e, i) {
                var s = e.hs(),
                    r = e.ss(),
                    n = jt(t, s, Gt),
                    o = Yt(t, r, Xt);
                if (!i) return {
                    from: n,
                    to: o
                };
                var a = n,
                    l = o;
                return n > 0 && n < t.length && t[n].P >= s && (a = n - 1), o > 0 && o < t.length && t[o - 1].P <= r && (l = o + 1), {
                    from: a,
                    to: l
                }
            }
            var Qt = function() {
                    function t(t, e, i) {
                        this.Ae = !0, this.Ve = !0, this.Oe = !0, this.ze = [], this.Pe = null, this.Fe = t, this.Ie = e, this.We = i
                    }
                    return t.prototype.V = function(t) {
                        this.Ae = !0, "data" === t && (this.Ve = !0), "options" === t && (this.Oe = !0)
                    }, t.prototype.Re = function() {
                        this.Ve && (this.je(), this.Ve = !1), this.Ae && (this.Ue(), this.Ae = !1), this.Oe && (this.qe(), this.Oe = !1)
                    }, t.prototype.He = function() {
                        this.Pe = null
                    }, t.prototype.Ue = function() {
                        var t = this.Fe.Z(),
                            e = this.Ie.U();
                        if (this.He(), !e.Qt() && !t.Qt()) {
                            var i = e.Mr();
                            if (null !== i && 0 !== this.Fe.qi().Ye()) {
                                var s = this.Fe.Y();
                                null !== s && (this.Pe = Jt(this.ze, i, this.We), this.Ke(t, e, s.J))
                            }
                        }
                    }, t
                }(),
                Zt = function(t) {
                    function e(e, i) {
                        return t.call(this, e, i, !0) || this
                    }
                    return c(e, t), e.prototype.Ke = function(t, e, i) {
                            e.Lr(this.ze, x(this.Pe)), t.Nh(this.ze, i, x(this.Pe))
                        },
                        e.prototype.$e = function(t, e) {
                            return {
                                P: t,
                                F: e,
                                g: NaN,
                                p: NaN
                            }
                        }, e.prototype.qe = function() {}, e.prototype.je = function() {
                            var t = this,
                                e = this.Fe.Xe();
                            this.ze = this.Fe.qi().Ze().map((function(i) {
                                var s = i.J[3];
                                return t.Je(i.Ps, s, e)
                            }))
                        }, e
                }(Qt),
                Kt = function(t) {
                    function e(e, i) {
                        var s = t.call(this, e, i) || this;
                        return s.ot = new M, s.Ge = new Ht, s.Qe = new $t, s.ot.i([s.Ge, s.Qe]), s
                    }
                    return c(e, t), e.prototype.W = function(t, e) {
                        if (!this.Fe.H()) return null;
                        var i = this.Fe.I();
                        this.Re();
                        var s = {
                            Be: i.lineType,
                            m: this.ze,
                            S: i.lineColor,
                            ut: i.lineStyle,
                            rt: i.lineWidth,
                            Ee: i.topColor,
                            Le: i.bottomColor,
                            Te: t,
                            M: this.Pe,
                            De: this.Ie.U().Pr()
                        };
                        return this.Ge._(s), this.Qe._(s), this.ot
                    }, e.prototype.Je = function(t, e) {
                        return this.$e(t, e)
                    }, e
                }(Zt),
                te = function() {
                    function t() {
                        this.tt = null, this.tu = 0, this.iu = 0
                    }
                    return t.prototype._ = function(t) {
                        this.tt = t
                    }, t.prototype.h = function(t, e, i, s) {
                        if (null !== this.tt && 0 !== this.tt.qi.length && null !== this.tt.M) {
                            this.tu = this.nu(e), this.tu >= 2 && Math.max(1, Math.floor(e)) % 2 != this.tu % 2 && this.tu--, this.iu = this.tt.hu ? Math.min(this.tu, Math.floor(e)) : this.tu;
                            for (var r = null, n = this.iu <= this.tu && this.tt.Pr >= Math.floor(1.5 * e), o = this.tt.M.from; o < this.tt.M.to; ++o) {
                                var a = this.tt.qi[o];
                                r !== a.et && (t.fillStyle = a.et, r = a.et);
                                var l = Math.floor(.5 * this.iu),
                                    h = Math.round(a.g * e),
                                    c = h - l,
                                    u = this.iu,
                                    d = c + u - 1,
                                    p = Math.min(a.Th, a.Bh),
                                    f = Math.max(a.Th, a.Bh),
                                    g = Math.round(p * e) - l,
                                    m = Math.round(f * e) + l,
                                    _ = Math.max(m - g, this.iu);
                                t.fillRect(c, g, u, _);
                                var v = Math.ceil(1.5 * this.tu);
                                if (n) {
                                    if (this.tt.su) {
                                        var y = h - v,
                                            b = Math.max(g, Math.round(a.Dh * e) - l),
                                            w = b + u - 1;
                                        w > g + _ - 1 && (b = (w = g + _ - 1) - u + 1), t.fillRect(y, b, c - y, w - b + 1)
                                    }
                                    var S = h + v,
                                        C = Math.max(g, Math.round(a.Eh * e) - l),
                                        x = C + u - 1;
                                    x > g + _ - 1 && (C = (x = g + _ - 1) - u + 1), t.fillRect(d + 1, C, S - d, x - C + 1)
                                }
                            }
                        }
                    }, t.prototype.nu = function(t) {
                        var e = Math.floor(t);
                        return Math.max(e, Math.floor(function(t, e) {
                            return Math.floor(.3 * t * e)
                        }(g(this.tt).Pr, t)))
                    }, t
                }(),
                ee = function(t) {
                    function e(e, i) {
                        return t.call(this, e, i, !1) || this
                    }
                    return c(e, t), e.prototype.Ke = function(t, e, i) {
                        e.Lr(this.ze, x(this.Pe)), t.Ch(this.ze, i, x(this.Pe))
                    }, e.prototype.ru = function(t, e, i) {
                        return {
                            P: t,
                            open: e.J[0],
                            high: e.J[1],
                            low: e.J[2],
                            close: e.J[3],
                            g: NaN,
                            Dh: NaN,
                            Th: NaN,
                            Bh: NaN,
                            Eh: NaN
                        }
                    }, e.prototype.je = function() {
                        var t = this,
                            e = this.Fe.Xe();
                        this.ze = this.Fe.qi().Ze().map((function(i) {
                            return t.Je(i.Ps, i, e)
                        }))
                    }, e
                }(Qt),
                ie = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.ot = new te, e
                    }
                    return c(e, t), e.prototype.W = function(t, e) {
                        if (!this.Fe.H()) return null;
                        var i = this.Fe.I();
                        this.Re();
                        var s = {
                            qi: this.ze,
                            Pr: this.Ie.U().Pr(),
                            su: i.openVisible,
                            hu: i.thinBars,
                            M: this.Pe
                        };
                        return this.ot._(s), this.ot
                    }, e.prototype.qe = function() {
                        var t = this;
                        this.ze.forEach((function(e) {
                            e.et = t.Fe.Xe().uu(e.P).eu
                        }))
                    }, e.prototype.Je = function(t, e, i) {
                        return u(u({}, this.ru(t, e, i)), {
                            et: i.uu(t).eu
                        })
                    }, e
                }(ee),
                se = function() {
                    function t() {
                        this.tt = null, this.tu = 0
                    }
                    return t.prototype._ = function(t) {
                        this.tt = t
                    }, t.prototype.h = function(t, e, i, s) {
                        if (null !== this.tt && 0 !== this.tt.qi.length && null !== this.tt.M) {
                            this.tu = function(t, e) {
                                if (t >= 2.5 && t <= 4) return Math.floor(3 * e);
                                var i = 1 - .2 * Math.atan(Math.max(4, t) - 4) / (.5 * Math.PI),
                                    s = Math.floor(t * i * e),
                                    r = Math.floor(t * e),
                                    n = Math.min(s, r);
                                return Math.max(Math.floor(e), n)
                            }(this.tt.Pr, e), this.tu >= 2 && Math.floor(e) % 2 != this.tu % 2 && this.tu--;
                            var r = this.tt.qi;
                            this.tt.au && this.ou(t, r, this.tt.M, e), this.tt.lu && this.fu(t, r, this.tt.M, this.tt.Pr, e);
                            var n = this.cu(e);
                            (!this.tt.lu || this.tu > 2 * n) && this.vu(t, r, this.tt.M, e)
                        }
                    }, t.prototype.ou = function(t, e, i, s) {
                        if (null !== this.tt) {
                            var r = "",
                                n = Math.min(Math.floor(s), Math.floor(this.tt.Pr * s));
                            n = Math.max(Math.floor(s), Math.min(n, this.tu));
                            for (var o = Math.floor(.5 * n), a = null, l = i.from; l < i.to; l++) {
                                var h = e[l];
                                h._u !== r && (t.fillStyle = h._u, r = h._u);
                                var c = Math.round(Math.min(h.Dh, h.Eh) * s),
                                    u = Math.round(Math.max(h.Dh, h.Eh) * s),
                                    d = Math.round(h.Th * s),
                                    p = Math.round(h.Bh * s),
                                    f = Math.round(s * h.g) - o,
                                    g = f + n - 1;
                                null !== a && (f = Math.max(a + 1, f), f = Math.min(f, g));
                                var m = g - f + 1;
                                t.fillRect(f, d, m, c - d), t.fillRect(f, u + 1, m, p - u), a = g
                            }
                        }
                    }, t.prototype.cu = function(t) {
                        var e = Math.floor(1 * t);
                        this.tu <= 2 * e && (e = Math.floor(.5 * (this.tu - 1)));
                        var i = Math.max(Math.floor(t), e);
                        return this.tu <= 2 * i ? Math.max(Math.floor(t), Math.floor(1 * t)) : i
                    }, t.prototype.fu = function(t, e, i, s, r) {
                        if (null !== this.tt)
                            for (var n = "", o = this.cu(r), a = null, l = i.from; l < i.to; l++) {
                                var h = e[l];
                                h.$ !== n && (t.fillStyle = h.$, n = h.$);
                                var c = Math.round(h.g * r) - Math.floor(.5 * this.tu),
                                    u = c + this.tu - 1,
                                    d = Math.round(Math.min(h.Dh, h.Eh) * r),
                                    p = Math.round(Math.max(h.Dh, h.Eh) * r);
                                if (null !== a && (c = Math.max(a + 1, c), c = Math.min(c, u)), this.tt.Pr * r > 2 * o) q(t, c, d, u - c + 1, p - d + 1, o);
                                else {
                                    var f = u - c + 1;
                                    t.fillRect(c, d, f, p - d + 1)
                                }
                                a = u
                            }
                    }, t.prototype.vu = function(t, e, i, s) {
                        if (null !== this.tt)
                            for (var r = "", n = this.cu(s), o = i.from; o < i.to; o++) {
                                var a = e[o],
                                    l = Math.round(Math.min(a.Dh, a.Eh) * s),
                                    h = Math.round(Math.max(a.Dh, a.Eh) * s),
                                    c = Math.round(a.g * s) - Math.floor(.5 * this.tu),
                                    u = c + this.tu - 1;
                                if (a.et !== r) {
                                    var d = a.et;
                                    t.fillStyle = d, r = d
                                }
                                this.tt.lu && (c += n, l += n, u -= n, h -= n), l > h || t.fillRect(c, l, u - c + 1, h - l + 1)
                            }
                    }, t
                }(),
                re = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.ot = new se, e
                    }
                    return c(e, t), e.prototype.W = function(t, e) {
                        if (!this.Fe.H()) return null;
                        var i = this.Fe.I();
                        this.Re();
                        var s = {
                            qi: this.ze,
                            Pr: this.Ie.U().Pr(),
                            au: i.wickVisible,
                            lu: i.borderVisible,
                            M: this.Pe
                        };
                        return this.ot._(s), this.ot
                    }, e.prototype.qe = function() {
                        var t = this;
                        this.ze.forEach((function(e) {
                            var i = t.Fe.Xe().uu(e.P);
                            e.et = i.eu, e._u = i.du, e.$ = i.wu
                        }))
                    }, e.prototype.Je = function(t, e, i) {
                        var s = i.uu(t);
                        return u(u({}, this.ru(t, e, i)), {
                            et: s.eu,
                            _u: s.du,
                            $: s.wu
                        })
                    }, e
                }(ee),
                ne = function() {
                    function t() {
                        this.tt = null, this.Mu = []
                    }
                    return t.prototype._ = function(t) {
                        this.tt = t, this.Mu = []
                    }, t.prototype.h = function(t, e, i, s) {
                        if (null !== this.tt && 0 !== this.tt.m.length && null !== this.tt.M) {
                            this.Mu.length || this.bu(e);
                            for (var r = Math.max(1, Math.floor(e)), n = Math.round(this.tt.mu * e) - Math.floor(r / 2), o = n + r, a = this.tt.M.from; a < this.tt.M.to; a++) {
                                var l = this.tt.m[a],
                                    h = this.Mu[a - this.tt.M.from],
                                    c = Math.round(l.p * e);
                                t.fillStyle = l.et;
                                var u = void 0,
                                    d = void 0;
                                c <= n ? (u = c, d = o) : (u = n, d = c - Math.floor(r / 2) + r), t.fillRect(h.hs, u, h.ss - h.hs + 1, d - u)
                            }
                        }
                    }, t.prototype.bu = function(t) {
                        if (null !== this.tt && 0 !== this.tt.m.length && null !== this.tt.M) {
                            var e = Math.ceil(this.tt.Pr * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
                                i = Math.round(this.tt.Pr * t) - e;
                            this.Mu = new Array(this.tt.M.to - this.tt.M.from);
                            for (var s = this.tt.M.from; s < this.tt.M.to; s++) {
                                var r, n = this.tt.m[s],
                                    o = Math.round(n.g * t),
                                    a = void 0,
                                    l = void 0;
                                i % 2 ? (a = o - (r = (i - 1) / 2), l = o + r) : (a = o - (r = i / 2), l = o + r - 1), this.Mu[s - this.tt.M.from] = {
                                    hs: a,
                                    ss: l,
                                    gu: o,
                                    pu: n.g * t,
                                    P: n.P
                                }
                            }
                            for (s = this.tt.M.from + 1; s < this.tt.M.to; s++) {
                                var h = this.Mu[s - this.tt.M.from],
                                    c = this.Mu[s - this.tt.M.from - 1];
                                h.P === c.P + 1 && h.hs - c.ss !== e + 1 && (c.gu > c.pu ? c.ss = h.hs - e - 1 : h.hs = c.ss + e + 1)
                            }
                            var u = Math.ceil(this.tt.Pr * t);
                            for (s = this.tt.M.from; s < this.tt.M.to; s++) {
                                (h = this.Mu[s - this.tt.M.from]).ss < h.hs && (h.ss = h.hs);
                                var d = h.ss - h.hs + 1;
                                u = Math.min(d, u)
                            }
                            if (e > 0 && u < 4)
                                for (s = this.tt.M.from; s < this.tt.M.to; s++)(d = (h = this.Mu[s - this.tt.M.from]).ss - h.hs + 1) > u && (h.gu > h.pu ? h.ss -= 1 : h.hs += 1)
                        } else this.Mu = []
                    }, t
                }();

            function oe(t) {
                return {
                    m: [],
                    Pr: t,
                    mu: NaN,
                    M: null
                }
            }

            function ae(t, e, i) {
                return {
                    P: t,
                    F: e,
                    g: NaN,
                    p: NaN,
                    et: i
                }
            }
            var le = function(t) {
                    function e(e, i) {
                        var s = t.call(this, e, i, !1) || this;
                        return s.C = new M, s.yu = oe(0), s.ot = new ne, s
                    }
                    return c(e, t), e.prototype.W = function(t, e) {
                        return this.Fe.H() ? (this.Re(), this.C) : null
                    }, e.prototype.je = function() {
                        var t = this.Ie.U().Pr();
                        this.yu = oe(t);
                        for (var e = 0, i = 0, s = this.Fe.I().color, r = 0, n = this.Fe.qi().Ze(); r < n.length; r++) {
                            var o = n[r],
                                a = o.J[3],
                                l = void 0 !== o.et ? o.et : s,
                                h = ae(o.Ps, a, l);
                            ++e < this.yu.m.length ? this.yu.m[e] = h : this.yu.m.push(h), this.ze[i++] = {
                                P: o.Ps,
                                g: 0
                            }
                        }
                        this.ot._(this.yu), this.C.i([this.ot])
                    }, e.prototype.qe = function() {}, e.prototype.He = function() {
                        t.prototype.He.call(this), this.yu.M = null
                    }, e.prototype.Ke = function(t, e, i) {
                        if (null !== this.Pe) {
                            var s = e.Pr(),
                                r = g(e.Mr()),
                                n = t.X(this.Fe.I().base, i);
                            e.Lr(this.yu.m), t.Nh(this.yu.m, i), this.yu.mu = n, this.yu.M = Jt(this.yu.m, r, !1), this.yu.Pr = s, this.ot._(this.yu)
                        }
                    }, e
                }(Qt),
                he = function(t) {
                    function e(e, i) {
                        var s = t.call(this, e, i) || this;
                        return s.Qe = new $t, s
                    }
                    return c(e, t), e.prototype.W = function(t, e) {
                        if (!this.Fe.H()) return null;
                        var i = this.Fe.I();
                        this.Re();
                        var s = {
                            m: this.ze,
                            S: i.color,
                            ut: i.lineStyle,
                            Be: i.lineType,
                            rt: i.lineWidth,
                            M: this.Pe,
                            De: this.Ie.U().Pr()
                        };
                        return this.Qe._(s), this.Qe
                    }, e.prototype.Je = function(t, e) {
                        return this.$e(t, e)
                    }, e
                }(Zt),
                ce = /[2-9]/g,
                ue = function() {
                    function t(t) {
                        void 0 === t && (t = 50), this.ys = new Map, this.ku = 0, this.xu = Array.from(new Array(t))
                    }
                    return t.prototype.Nu = function() {
                        this.ys.clear(), this.xu.fill(void 0)
                    }, t.prototype.Vt = function(t, e, i) {
                        var s = i || ce,
                            r = String(e).replace(s, "0"),
                            n = this.ys.get(r);
                        if (void 0 === n) {
                            if (0 === (n = t.measureText(r).width) && 0 !== e.length) return 0;
                            var o = this.xu[this.ku];
                            void 0 !== o && this.ys.delete(o), this.xu[this.ku] = r, this.ku = (this.ku + 1) % this.xu.length, this.ys.set(r, n)
                        }
                        return n
                    }, t
                }(),
                de = function() {
                    function t(t) {
                        this.Su = null, this.ue = null, this.Cu = "right", this.Ys = 0, this.Du = t
                    }
                    return t.prototype.Tu = function(t, e, i, s) {
                        this.Su = t, this.ue = e, this.Ys = i, this.Cu = s
                    }, t.prototype.h = function(t, e) {
                        null !== this.ue && null !== this.Su && this.Su.h(t, this.ue, this.Du, this.Ys, this.Cu, e)
                    }, t
                }(),
                pe = function() {
                    function t(t, e, i) {
                        this.Bu = t, this.Du = new ue(50), this.Eu = e, this.L = i, this.oe = -1, this.ot = new de(this.Du)
                    }
                    return t.prototype.W = function(t, e) {
                        var i = this.L.Lu(this.Eu);
                        if (null === i) return null;
                        var s = i.Au(this.Eu) ? i.Ci() : this.Eu.Z();
                        if (null === s) return null;
                        var r = i.Vu(s);
                        if ("overlay" === r) return null;
                        var n = this.L.Ou();
                        return n.zt !== this.oe && (this.oe = n.zt, this.Du.Nu()), this.ot.Tu(this.Bu.Xt(), n, e, r), this.ot
                    }, t
                }(),
                fe = function() {
                    function t() {
                        this.tt = null
                    }
                    return t.prototype._ = function(t) {
                        this.tt = t
                    }, t.prototype.h = function(t, e, i, s) {
                        if (null !== this.tt && !1 !== this.tt.H) {
                            var r = Math.round(this.tt.p * e);
                            if (!(r < 0 || r > Math.ceil(this.tt.wt * e))) {
                                var n = Math.ceil(this.tt.dt * e);
                                t.lineCap = "butt", t.strokeStyle = this.tt.et, t.lineWidth = Math.floor(this.tt.rt * e), a(t, this.tt.ut), l(t, r, 0, n)
                            }
                        }
                    }, t
                }(),
                ge = function() {
                    function t(t) {
                        this.zu = {
                            dt: 0,
                            wt: 0,
                            p: 0,
                            et: "rgba(0, 0, 0, 0)",
                            rt: 1,
                            ut: 0,
                            H: !1
                        }, this.Pu = new fe, this.B = !0, this.Fe = t, this.Ie = t.ct(), this.Pu._(this.zu)
                    }
                    return t.prototype.V = function() {
                        this.B = !0
                    }, t.prototype.W = function(t, e) {
                        return this.Fe.H() ? (this.B && (this.Fu(t, e), this.B = !1), this.Pu) : null
                    }, t
                }(),
                me = function(t) {
                    function e(e) {
                        return t.call(this, e) || this
                    }
                    return c(e, t), e.prototype.Fu = function(t, e) {
                        this.zu.H = !1;
                        var i = this.Fe.Z(),
                            s = i.eh().eh;
                        if (2 === s || 3 === s) {
                            var r = this.Fe.I();
                            if (r.baseLineVisible && this.Fe.H()) {
                                var n = this.Fe.Y();
                                null !== n && (this.zu.H = !0, this.zu.p = i.X(n.J, n.J), this.zu.dt = e, this.zu.wt = t, this.zu.et = r.baseLineColor, this.zu.rt = r.baseLineWidth, this.zu.ut = r.baseLineStyle)
                            }
                        }
                    }, e
                }(ge);

            function _e(t, e) {
                return ot(Math.min(Math.max(t, 12), 30) * e)
            }

            function ve(t, e) {
                switch (t) {
                    case "arrowDown":
                    case "arrowUp":
                        return _e(e, 1);
                    case "circle":
                        return _e(e, .8);
                    case "square":
                        return _e(e, .7)
                }
            }

            function ye(t) {
                return nt(_e(t, 1))
            }

            function be(t) {
                return Math.max(_e(t, .1), 3)
            }

            function we(t, e, i, s, r) {
                var n = ve("square", i),
                    o = (n - 1) / 2,
                    a = t - o,
                    l = e - o;
                return s >= a && s <= a + n && r >= l && r <= l + n
            }

            function Se(t, e, i, s, r) {
                var n = (ve("arrowUp", r) - 1) / 2,
                    o = (ot(r / 2) - 1) / 2;
                e.beginPath(), t ? (e.moveTo(i - n, s), e.lineTo(i, s - n), e.lineTo(i + n, s), e.lineTo(i + o, s), e.lineTo(i + o, s + n), e.lineTo(i - o, s + n), e.lineTo(i - o, s)) : (e.moveTo(i - n, s), e.lineTo(i, s + n), e.lineTo(i + n, s), e.lineTo(i + o, s), e.lineTo(i + o, s - n), e.lineTo(i - o, s - n), e.lineTo(i - o, s)), e.fill()
            }
            var Ce = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.tt = null, e.Du = new ue, e.oe = -1, e.le = "", e.Iu = "", e
                }
                return c(e, t), e.prototype._ = function(t) {
                    this.tt = t
                }, e.prototype.Tu = function(t, e) {
                    this.oe === t && this.le === e || (this.oe = t, this.le = e, this.Iu = Ot(t, e), this.Du.Nu())
                }, e.prototype.Wu = function(t, e) {
                    if (null === this.tt || null === this.tt.M) return null;
                    for (var i = this.tt.M.from; i < this.tt.M.to; i++) {
                        var s = this.tt.m[i];
                        if (Me(s, t, e)) return {
                            Ru: s.ju,
                            Uu: s.Uu
                        }
                    }
                    return null
                }, e.prototype.u = function(t, e, i) {
                    if (null !== this.tt && null !== this.tt.M) {
                        t.textBaseline = "middle", t.font = this.Iu;
                        for (var s = this.tt.M.from; s < this.tt.M.to; s++) {
                            var r = this.tt.m[s];
                            void 0 !== r.At && (r.At.dt = this.Du.Vt(t, r.At.qu), r.At.wt = this.oe), xe(r, t)
                        }
                    }
                }, e
            }(k);

            function xe(t, e) {
                e.fillStyle = t.et, void 0 !== t.At && function(t, e, i, s) {
                        t.fillText(e, i, s)
                    }(e, t.At.qu, t.g - t.At.dt / 2, t.At.p),
                    function(t, e) {
                        if (0 !== t.Ye) {
                            switch (t.Hu) {
                                case "arrowDown":
                                    return void Se(!1, e, t.g, t.p, t.Ye);
                                case "arrowUp":
                                    return void Se(!0, e, t.g, t.p, t.Ye);
                                case "circle":
                                    return void
                                    function(t, e, i, s) {
                                        var r = (ve("circle", s) - 1) / 2;
                                        t.beginPath(), t.arc(e, i, r, 0, 2 * Math.PI, !1), t.fill()
                                    }(e, t.g, t.p, t.Ye);
                                case "square":
                                    return void
                                    function(t, e, i, s) {
                                        var r = ve("square", s),
                                            n = (r - 1) / 2,
                                            o = e - n,
                                            a = i - n;
                                        t.fillRect(o, a, r, r)
                                    }(e, t.g, t.p, t.Ye)
                            }
                            t.Hu
                        }
                    }(t, e)
            }

            function Me(t, e, i) {
                return !(void 0 === t.At || ! function(t, e, i, s, r, n) {
                    var o = s / 2;
                    return r >= t && r <= t + i && n >= e - o && n <= e + o
                }(t.g, t.At.p, t.At.dt, t.At.wt, e, i)) || function(t, e, i) {
                    if (0 === t.Ye) return !1;
                    switch (t.Hu) {
                        case "arrowDown":
                        case "arrowUp":
                            return function(t, e, i, s, r, n) {
                                return we(e, i, s, r, n)
                            }(0, t.g, t.p, t.Ye, e, i);
                        case "circle":
                            return function(t, e, i, s, r) {
                                var n = 2 + ve("circle", i) / 2,
                                    o = t - s,
                                    a = e - r;
                                return Math.sqrt(o * o + a * a) <= n
                            }(t.g, t.p, t.Ye, e, i);
                        case "square":
                            return we(t.g, t.p, t.Ye, e, i)
                    }
                    t.Hu
                }(t, e, i)
            }

            function ke(t, e, i, s, r, n, o, a, l) {
                var h = v(i) ? i : i.close,
                    c = v(i) ? i : i.high,
                    u = v(i) ? i : i.low,
                    d = v(e.size) ? Math.max(e.size, 0) : 1,
                    p = ye(a.Pr()) * d,
                    f = p / 2;
                switch (t.Ye = p, e.position) {
                    case "inBar":
                        return t.p = o.X(h, l), void(void 0 !== t.At && (t.At.p = t.p + f + n + .6 * r));
                    case "aboveBar":
                        return t.p = o.X(c, l) - f - s.Yu, void 0 !== t.At && (t.At.p = t.p - f - .6 * r, s.Yu += 1.2 * r), void(s.Yu += p + n);
                    case "belowBar":
                        return t.p = o.X(u, l) + f + s.Ku, void 0 !== t.At && (t.At.p = t.p + f + n + .6 * r, s.Ku += 1.2 * r), void(s.Ku += p + n)
                }
                e.position
            }
            var Ee = function() {
                    function t(t, e) {
                        this.B = !0, this.$u = !0, this.Xu = !0, this.Zu = null, this.ot = new Ce, this.Ju = t, this.hi = e, this.tt = {
                            m: [],
                            M: null
                        }
                    }
                    return t.prototype.V = function(t) {
                        this.B = !0, this.Xu = !0, "data" === t && (this.$u = !0)
                    }, t.prototype.W = function(t, e, i) {
                        if (!this.Ju.H()) return null;
                        this.B && this.Re();
                        var s = this.hi.I().layout;
                        return this.ot.Tu(s.fontSize, s.fontFamily), this.ot._(this.tt), this.ot
                    }, t.prototype.Gu = function() {
                        if (this.Xu) {
                            if (this.Ju.Qu().length > 0) {
                                var t = this.hi.U().Pr(),
                                    e = be(t),
                                    i = 1.5 * ye(t) + 2 * e;
                                this.Zu = {
                                    above: i,
                                    below: i
                                }
                            } else this.Zu = null;
                            this.Xu = !1
                        }
                        return this.Zu
                    }, t.prototype.Re = function() {
                        var t = this.Ju.Z(),
                            e = this.hi.U(),
                            i = this.Ju.Qu();
                        this.$u && (this.tt.m = i.map((function(t) {
                            return {
                                P: t.time,
                                g: 0,
                                p: 0,
                                Ye: 0,
                                Hu: t.shape,
                                et: t.color,
                                ju: t.ju,
                                Uu: t.id,
                                At: void 0
                            }
                        })), this.$u = !1);
                        var s = this.hi.I().layout;
                        this.tt.M = null;
                        var r = e.Mr();
                        if (null !== r) {
                            var n = this.Ju.Y();
                            if (null !== n && 0 !== this.tt.m.length) {
                                var o = NaN,
                                    a = be(e.Pr()),
                                    l = {
                                        Yu: a,
                                        Ku: a
                                    };
                                this.tt.M = Jt(this.tt.m, r, !0);
                                for (var h = this.tt.M.from; h < this.tt.M.to; h++) {
                                    var c = i[h];
                                    c.time !== o && (l.Yu = a, l.Ku = a, o = c.time);
                                    var u = this.tt.m[h];
                                    u.g = e.G(c.time), void 0 !== c.text && c.text.length > 0 && (u.At = {
                                        qu: c.text,
                                        p: 0,
                                        dt: 0,
                                        wt: 0
                                    });
                                    var d = this.Ju.ta(c.time);
                                    null !== d && ke(u, c, d, l, s.fontSize, a, t, e, n.J)
                                }
                                this.B = !1
                            }
                        }
                    }, t
                }(),
                Pe = function(t) {
                    function e(e) {
                        return t.call(this, e) || this
                    }
                    return c(e, t), e.prototype.Fu = function(t, e) {
                        var i = this.zu;
                        i.H = !1;
                        var s = this.Fe.I();
                        if (s.priceLineVisible && this.Fe.H()) {
                            var r = this.Fe.ia(0 === s.priceLineSource);
                            r.na || (i.H = !0, i.p = r.Pt, i.et = this.Fe.ha(r.et), i.dt = e, i.wt = t, i.rt = s.priceLineWidth, i.ut = s.priceLineStyle)
                        }
                    }, e
                }(ge),
                Te = function(t) {
                    function e(e) {
                        var i = t.call(this) || this;
                        return i.lt = e, i
                    }
                    return c(e, t), e.prototype.Zt = function(t, e, i) {
                            if (t.H = !1, e.H = !1, this.lt.H()) {
                                var s = this.lt.I(),
                                    r = s.lastValueVisible,
                                    n = "" !== this.lt.sa(),
                                    o = 0 === s.seriesLastValueMode,
                                    a = this.lt.ia(!1);
                                if (!a.na) {
                                    r && (t.At = this.ra(a, r, o), t.H = 0 !== t.At.length), (n || o) && (e.At = this.ea(a, r, n, o), e.H = e.At.length > 0);
                                    var l = this.lt.ha(a.et),
                                        h = O(l);
                                    i.gt = h.gt, i.et = h.yt, i.Pt = a.Pt, e.$ = this.lt.ct().I().layout.backgroundColor, t.$ = l
                                }
                            }
                        },
                        e.prototype.ea = function(t, e, i, s) {
                            var r = "",
                                n = this.lt.sa();
                            return i && 0 !== n.length && (r += n + " "), e && s && (r += this.lt.Z().oh() ? t.ua : t.aa), r.trim()
                        }, e.prototype.ra = function(t, e, i) {
                            return e ? i ? this.lt.Z().oh() ? t.aa : t.ua : t.At : ""
                        }, e
                }(H),
                Ae = function() {
                    function t(t, e) {
                        this.On = t, this.oa = e || null
                    }
                    return t.prototype.yh = function() {
                        return this.On
                    }, t.prototype.rs = function() {
                        return this.oa
                    }, t.prototype.wn = function() {
                        return null === this.On ? null : {
                            priceRange: this.On.wn(),
                            margins: this.oa || void 0
                        }
                    }, t.Mn = function(e) {
                        return null === e ? null : new t(et.Mn(e.priceRange), e.margins)
                    }, t
                }(),
                Le = function(t) {
                    function e(e, i) {
                        var s = t.call(this, e) || this;
                        return s.la = i, s
                    }
                    return c(e, t), e.prototype.Fu = function(t, e) {
                        var i = this.zu;
                        if (i.H = !1, this.Fe.H()) {
                            var s = this.la.fa();
                            if (null !== s) {
                                var r = this.la.I();
                                i.H = !0, i.p = s, i.et = r.color, i.dt = e, i.wt = t, i.rt = r.lineWidth, i.ut = r.lineStyle
                            }
                        }
                    }, e
                }(ge),
                De = function(t) {
                    function e(e, i) {
                        var s = t.call(this) || this;
                        return s.Ju = e, s.la = i, s
                    }
                    return c(e, t), e.prototype.Zt = function(t, e, i) {
                        t.H = !1, e.H = !1;
                        var s = this.la.I(),
                            r = s.axisLabelVisible,
                            n = "" !== s.title;
                        if (r && this.Ju.H()) {
                            var o = this.la.fa();
                            if (null !== o) {
                                n && (e.At = s.title, e.H = !0), e.$ = this.Ju.ct().I().layout.backgroundColor, t.At = this.Ju.Z().$h(s.price), t.H = !0;
                                var a = O(s.color);
                                i.gt = a.gt, i.et = a.yt, i.Pt = o
                            }
                        }
                    }, e
                }(H),
                Ie = function() {
                    function t(t, e) {
                        this.Ju = t, this.xi = e, this.ca = new Le(t, this), this.Bu = new De(t, this), this.va = new pe(this.Bu, t, t.ct())
                    }
                    return t.prototype.hh = function(t) {
                        _(this.xi, t), this.V(), this.Ju.ct().zr()
                    }, t.prototype.I = function() {
                        return this.xi
                    }, t.prototype.ci = function() {
                        return [this.ca, this.va]
                    }, t.prototype._a = function() {
                        return this.Bu
                    }, t.prototype.V = function() {
                        this.ca.V(), this.Bu.V()
                    }, t.prototype.fa = function() {
                        var t = this.Ju,
                            e = t.Z();
                        if (t.ct().U().Qt() || e.Qt()) return null;
                        var i = t.Y();
                        return null === i ? null : e.X(this.xi.price, i.J)
                    }, t
                }(),
                Ne = function(t) {
                    function e(e) {
                        var i = t.call(this) || this;
                        return i.hi = e, i
                    }
                    return c(e, t), e.prototype.ct = function() {
                        return this.hi
                    }, e
                }(X),
                Fe = {
                    eu: "",
                    wu: "",
                    du: ""
                },
                Be = function() {
                    function t(t) {
                        this.Ju = t
                    }
                    return t.prototype.uu = function(t, e) {
                        var i = this.Ju.da(),
                            s = this.Ju.I();
                        switch (i) {
                            case "Line":
                                return this.wa(s);
                            case "Area":
                                return this.Ma(s);
                            case "Bar":
                                return this.ba(s, t, e);
                            case "Candlestick":
                                return this.ma(s, t, e);
                            case "Histogram":
                                return this.ga(s, t, e)
                        }
                        throw new Error("Unknown chart style")
                    }, t.prototype.ba = function(t, e, i) {
                        var s = u({}, Fe),
                            r = t.upColor,
                            n = t.downColor,
                            o = r,
                            a = n,
                            l = g(this.pa(e, i)),
                            h = m(l.J[0]) <= m(l.J[3]);
                        return s.eu = h ? r : n, s.wu = h ? o : a, s
                    }, t.prototype.ma = function(t, e, i) {
                        var s = u({}, Fe),
                            r = t.upColor,
                            n = t.downColor,
                            o = t.borderUpColor,
                            a = t.borderDownColor,
                            l = t.wickUpColor,
                            h = t.wickDownColor,
                            c = g(this.pa(e, i)),
                            d = m(c.J[0]) <= m(c.J[3]);
                        return s.eu = d ? r : n, s.wu = d ? o : a, s.du = d ? l : h, s
                    }, t.prototype.Ma = function(t) {
                        return u(u({}, Fe), {
                            eu: t.lineColor
                        })
                    }, t.prototype.wa = function(t) {
                        return u(u({}, Fe), {
                            eu: t.color
                        })
                    }, t.prototype.ga = function(t, e, i) {
                        var s = u({}, Fe),
                            r = g(this.pa(e, i));
                        return s.eu = void 0 !== r.et ? r.et : t.color, s
                    }, t.prototype.pa = function(t, e) {
                        return void 0 !== e ? e.J : this.Ju.qi().ya(t)
                    }, t
                }(),
                Re = function() {
                    function t() {
                        this.ka = [], this.xa = new Map, this.Na = new Map
                    }
                    return t.prototype.Sa = function() {
                        this.ka = [],
                            this.xa.clear(), this.Na.clear()
                    }, t.prototype.Ca = function() {
                        return this.Ye() > 0 ? this.ka[this.ka.length - 1] : null
                    }, t.prototype.Da = function() {
                        return this.Ye() > 0 ? this.Ta(0) : null
                    }, t.prototype.Ui = function() {
                        return this.Ye() > 0 ? this.Ta(this.ka.length - 1) : null
                    }, t.prototype.Ye = function() {
                        return this.ka.length
                    }, t.prototype.Qt = function() {
                        return 0 === this.Ye()
                    }, t.prototype.As = function(t) {
                        return null !== this.Ba(t, 0)
                    }, t.prototype.ya = function(t) {
                        return this.Ea(t)
                    }, t.prototype.Ea = function(t, e) {
                        void 0 === e && (e = 0);
                        var i = this.Ba(t, e);
                        return null === i ? null : u(u({}, this.La(i)), {
                            Ps: this.Ta(i)
                        })
                    }, t.prototype.Ze = function() {
                        return this.ka
                    }, t.prototype.Aa = function(t, e, i) {
                        if (this.Qt()) return null;
                        for (var s = null, r = 0, n = i; r < n.length; r++) {
                            var o = n[r];
                            s = Oe(s, this.Va(t, e, o))
                        }
                        return s
                    }, t.prototype.vn = function(t) {
                        0 !== t.length && (this.Qt() || t[t.length - 1].Ps < this.ka[0].Ps ? this.Oa(t) : t[0].Ps > this.ka[this.ka.length - 1].Ps ? this.za(t) : 1 !== t.length || t[0].Ps !== this.ka[this.ka.length - 1].Ps ? this.Pa(t) : this.Fa(t[0]))
                    }, t.prototype.Ta = function(t) {
                        return this.ka[t].Ps
                    }, t.prototype.La = function(t) {
                        return this.ka[t]
                    }, t.prototype.Ba = function(t, e) {
                        var i = this.Ia(t);
                        if (null === i && 0 !== e) switch (e) {
                            case -1:
                                return this.Wa(t);
                            case 1:
                                return this.Ra(t);
                            default:
                                throw new TypeError("Unknown search mode")
                        }
                        return i
                    }, t.prototype.Wa = function(t) {
                        var e = this.ja(t);
                        return e > 0 && (e -= 1), e !== this.ka.length && this.Ta(e) < t ? e : null
                    }, t.prototype.Ra = function(t) {
                        var e = this.Ua(t);
                        return e !== this.ka.length && t < this.Ta(e) ? e : null
                    }, t.prototype.Ia = function(t) {
                        var e = this.ja(t);
                        return e === this.ka.length || t < this.ka[e].Ps ? null : e
                    }, t.prototype.ja = function(t) {
                        return jt(this.ka, t, (function(t, e) {
                            return t.Ps < e
                        }))
                    }, t.prototype.Ua = function(t) {
                        return Yt(this.ka, t, (function(t, e) {
                            return e.Ps > t
                        }))
                    }, t.prototype.qa = function(t, e, i) {
                        for (var s = null, r = t; r < e; r++) {
                            var n = this.ka[r].J[i];
                            Number.isNaN(n) || (null === s ? s = {
                                Ha: n,
                                Ya: n
                            } : (n < s.Ha && (s.Ha = n), n > s.Ya && (s.Ya = n)))
                        }
                        return s
                    }, t.prototype.Ka = function(t) {
                        var e = Math.floor(t.Ps / 30);
                        this.xa.forEach((function(t) {
                            return t.delete(e)
                        }))
                    }, t.prototype.Oa = function(t) {
                        p(0 !== t.length, "plotRows should not be empty"), this.Na.clear(), this.xa.clear(), this.ka = t.concat(this.ka)
                    }, t.prototype.za = function(t) {
                        p(0 !== t.length, "plotRows should not be empty"), this.Na.clear(), this.xa.clear(), this.ka = this.ka.concat(t)
                    }, t.prototype.Fa = function(t) {
                        p(!this.Qt(), "plot list should not be empty"), p(this.ka[this.ka.length - 1].Ps === t.Ps, "last row index should match new row index"), this.Ka(t), this.Na.delete(t.Ps), this.ka[this.ka.length - 1] = t
                    }, t.prototype.Pa = function(t) {
                        p(0 !== t.length, "plot rows should not be empty"), this.Na.clear(), this.xa.clear(), this.ka = function(t, e) {
                            for (var i = function(t, e) {
                                    for (var i = t.length, s = e.length, r = i + s, n = 0, o = 0; n < i && o < s;) t[n].Ps < e[o].Ps ? n++ : t[n].Ps > e[o].Ps ? o++ : (n++, o++, r--);
                                    return r
                                }(t, e), s = new Array(i), r = 0, n = 0, o = t.length, a = e.length, l = 0; r < o && n < a;) t[r].Ps < e[n].Ps ? (s[l] = t[r], r++) : t[r].Ps > e[n].Ps ? (s[l] = e[n], n++) : (s[l] = e[n], r++, n++), l++;
                            for (; r < o;) s[l] = t[r], r++, l++;
                            for (; n < a;) s[l] = e[n], n++, l++;
                            return s
                        }(this.ka, t)
                    }, t.prototype.Va = function(t, e, i) {
                        if (this.Qt()) return null;
                        var s = null,
                            r = g(this.Da()),
                            n = g(this.Ui()),
                            o = Math.max(t, r),
                            a = Math.min(e, n),
                            l = 30 * Math.ceil(o / 30),
                            h = Math.max(l, 30 * Math.floor(a / 30)),
                            c = this.ja(o),
                            u = this.Ua(Math.min(a, l, e));
                        s = Oe(s, this.qa(c, u, i));
                        var d = this.xa.get(i);
                        void 0 === d && (d = new Map, this.xa.set(i, d));
                        for (var p = Math.max(l + 1, o); p < h; p += 30) {
                            var f = Math.floor(p / 30),
                                m = d.get(f);
                            if (void 0 === m) {
                                var _ = this.ja(30 * f),
                                    v = this.Ua(30 * (f + 1) - 1);
                                m = this.qa(_, v, i), d.set(f, m)
                            }
                            s = Oe(s, m)
                        }
                        return c = this.ja(h), u = this.Ua(a), Oe(s, this.qa(c, u, i))
                    }, t
                }();

            function Oe(t, e) {
                return null === t ? e : null === e ? t : {
                    Ha: Math.min(t.Ha, e.Ha),
                    Ya: Math.max(t.Ya, e.Ya)
                }
            }
            var qe = function(t) {
                    function e(e, i, s) {
                        var r = t.call(this, e) || this;
                        r.tt = new Re, r.ca = new Pe(r), r.$a = [], r.Xa = new me(r), r.Za = null, r.Ja = [], r.Ga = [], r.xi = i, r.Qa = s;
                        var n = new Te(r);
                        return r.bi = [n], r.va = new pe(n, r, e), r.io(), r.no(), r
                    }
                    return c(e, t), e.prototype.rn = function() {}, e.prototype.ha = function(t) {
                        return this.xi.priceLineColor || t
                    }, e.prototype.ia = function(t, e) {
                        var i = {
                                na: !0
                            },
                            s = this.Z();
                        if (this.ct().U().Qt() || s.Qt() || this.tt.Qt()) return i;
                        var r, n, o = this.ct().U().Mr(),
                            a = this.Y();
                        if (null === o || null === a) return i;
                        if (t) {
                            var l = this.tt.Ca();
                            if (null === l) return i;
                            r = l, n = l.Ps
                        } else {
                            var h = this.tt.Ea(o.ss(), -1);
                            if (null === h) return i;
                            if (null === (r = this.tt.ya(h.Ps))) return i;
                            n = h.Ps
                        }
                        var c = r.J[3],
                            u = this.Xe().uu(n, {
                                J: r
                            }),
                            d = s.X(c, a.J);
                        return {
                            na: !1,
                            F: e ? c : void 0,
                            At: s.ti(c, a.J),
                            ua: s.$h(c),
                            aa: s.Zh(c, a.J),
                            et: u.eu,
                            Pt: d,
                            Ps: n
                        }
                    }, e.prototype.Xe = function() {
                        return null !== this.Za || (this.Za = new Be(this)), this.Za
                    }, e.prototype.I = function() {
                        return this.xi
                    }, e.prototype.hh = function(t) {
                        var e = t.priceScaleId;
                        void 0 !== e && e !== this.xi.priceScaleId && this.ct().ho(this, e), _(this.xi, t), null !== this.ei && void 0 !== t.scaleMargins && this.ei.hh({
                            scaleMargins: t.scaleMargins
                        }), void 0 !== t.priceFormat && this.io(), this.ct().so(this), this.ct().ro(), this.Bi.V("options")
                    }, e.prototype.eo = function() {
                        this.tt.Sa(), this.no()
                    }, e.prototype.uo = function(t, e) {
                        e && this.tt.Sa(), this.tt.vn(t), this.ao(), this.Bi.V("data"), this.Ni.V("data");
                        var i = this.ct().Lu(this);
                        this.ct().oo(i), this.ct().so(this), this.ct().ro(), this.ct().zr()
                    }, e.prototype.lo = function(t) {
                        this.Ja = t.map((function(t) {
                            return u({}, t)
                        })), this.ao();
                        var e = this.ct().Lu(this);
                        this.Ni.V("data"), this.ct().oo(e), this.ct().so(this), this.ct().ro(), this.ct().zr()
                    }, e.prototype.Qu = function() {
                        return this.Ga
                    }, e.prototype.fo = function(t) {
                        var e = new Ie(this, t);
                        return this.$a.push(e), this.ct().so(this), e
                    }, e.prototype.co = function(t) {
                        var e = this.$a.indexOf(t); - 1 !== e && this.$a.splice(e, 1), this.ct().so(this)
                    }, e.prototype.da = function() {
                        return this.Qa
                    }, e.prototype.Y = function() {
                        var t = this.vo();
                        return null === t ? null : {
                            J: t.J[3],
                            Fh: t.P
                        }
                    }, e.prototype.vo = function() {
                        var t = this.ct().U().Mr();
                        if (null === t) return null;
                        var e = t.hs();
                        return this.tt.Ea(e, 1)
                    }, e.prototype.qi = function() {
                        return this.tt
                    }, e.prototype.ta = function(t) {
                        var e = this.tt.ya(t);
                        return null === e ? null : "Bar" === this.Qa || "Candlestick" === this.Qa ? {
                            open: e.J[0],
                            high: e.J[1],
                            low: e.J[2],
                            close: e.J[3]
                        } : e.J[3]
                    }, e.prototype.ci = function() {
                        var t = [];
                        this._o() || t.push(this.Xa);
                        for (var e = 0, i = this.$a; e < i.length; e++) {
                            var s = i[e];
                            t.push.apply(t, s.ci())
                        }
                        return t.push(this.Bi, this.ca, this.va, this.Ni), t
                    }, e.prototype.fi = function(t, e) {
                        for (var i = e === this.ei || this._o() ? d([], this.bi) : [], s = 0, r = this.$a; s < r.length; s++) {
                            var n = r[s];
                            i.push(n._a())
                        }
                        return i
                    }, e.prototype.ns = function(t, e) {
                        var i = this;
                        if (void 0 !== this.xi.autoscaleInfoProvider) {
                            var s = this.xi.autoscaleInfoProvider((function() {
                                var s = i.do(t, e);
                                return null === s ? null : s.wn()
                            }));
                            return Ae.Mn(s)
                        }
                        return this.do(t, e)
                    }, e.prototype.Qh = function() {
                        return this.xi.priceFormat.minMove
                    }, e.prototype.Yh = function() {
                        return this.Xn
                    }, e.prototype.Wi = function() {
                        this.Bi.V(), this.Ni.V();
                        for (var t = 0, e = this.bi; t < e.length; t++) e[t].V();
                        for (var i = 0, s = this.$a; i < s.length; i++) s[i].V();
                        this.ca.V(), this.Xa.V()
                    }, e.prototype.Z = function() {
                        return g(this.ei)
                    }, e.prototype.q = function(t) {
                        if ("Line" !== this.Qa && "Area" !== this.Qa || !this.xi.crosshairMarkerVisible) return null;
                        var e = this.tt.ya(t);
                        return null === e ? null : {
                            F: e.J[3],
                            N: this.wo(),
                            $: this.Mo(),
                            K: this.bo(t)
                        }
                    }, e.prototype.sa = function() {
                        return this.xi.title
                    }, e.prototype.H = function() {
                        return this.xi.visible
                    }, e.prototype._o = function() {
                        return !Wt(this.Z().nh())
                    }, e.prototype.do = function(t, e) {
                        if (!y(t) || !y(e) || this.tt.Qt()) return null;
                        var i = "Line" === this.Qa || "Area" === this.Qa || "Histogram" === this.Qa ? [3] : [2, 1],
                            s = this.tt.Aa(t, e, i),
                            r = null !== s ? new et(s.Ha, s.Ya) : null;
                        if ("Histogram" === this.da()) {
                            var n = this.xi.base,
                                o = new et(n, n);
                            r = null !== r ? r.vn(o) : o
                        }
                        return new Ae(r, this.Ni.Gu())
                    }, e.prototype.wo = function() {
                        switch (this.Qa) {
                            case "Line":
                            case "Area":
                                return this.xi.crosshairMarkerRadius
                        }
                        return 0
                    }, e.prototype.Mo = function() {
                        switch (this.Qa) {
                            case "Line":
                            case "Area":
                                var t = this.xi.crosshairMarkerBorderColor;
                                if (0 !== t.length) return t
                        }
                        return this.ct().I().layout.backgroundColor
                    }, e.prototype.bo = function(t) {
                        switch (this.Qa) {
                            case "Line":
                            case "Area":
                                var e = this.xi.crosshairMarkerBackgroundColor;
                                if (0 !== e.length) return e
                        }
                        return this.Xe().uu(t).eu
                    }, e.prototype.io = function() {
                        switch (this.xi.priceFormat.type) {
                            case "custom":
                                this.Xn = {
                                    format: this.xi.priceFormat.formatter
                                };
                                break;
                            case "volume":
                                this.Xn = new Ut(this.xi.priceFormat.precision);
                                break;
                            case "percent":
                                this.Xn = new K(this.xi.priceFormat.precision);
                                break;
                            default:
                                var t = Math.pow(10, this.xi.priceFormat.precision);
                                this.Xn = new Z(t, this.xi.priceFormat.minMove * t)
                        }
                        null !== this.ei && this.ei.sh()
                    }, e.prototype.ao = function() {
                        var t = this,
                            e = this.ct().U();
                        if (e.Qt() || 0 === this.tt.Ye()) this.Ga = [];
                        else {
                            var i = g(this.tt.Da());
                            this.Ga = this.Ja.map((function(s, r) {
                                var n = g(e.wr(s.time, !0)),
                                    o = n < i ? 1 : -1;
                                return {
                                    time: g(t.tt.Ea(n, o)).Ps,
                                    position: s.position,
                                    shape: s.shape,
                                    color: s.color,
                                    id: s.id,
                                    ju: r,
                                    text: s.text,
                                    size: s.size
                                }
                            }))
                        }
                    }, e.prototype.no = function() {
                        switch (this.Ni = new Ee(this, this.ct()), this.Qa) {
                            case "Bar":
                                this.Bi = new ie(this, this.ct());
                                break;
                            case "Candlestick":
                                this.Bi = new re(this, this.ct());
                                break;
                            case "Line":
                                this.Bi = new he(this, this.ct());
                                break;
                            case "Area":
                                this.Bi = new Kt(this, this.ct());
                                break;
                            case "Histogram":
                                this.Bi = new le(this, this.ct());
                                break;
                            default:
                                throw Error("Unknown chart style assigned: " + this.Qa)
                        }
                    }, e
                }(Ne),
                We = function() {
                    function t(t) {
                        this.xi = t
                    }
                    return t.prototype.mo = function(t, e, i) {
                        var s = t;
                        if (0 === this.xi.mode) return s;
                        var r = i.Ci(),
                            n = r.Y();
                        if (null === n) return s;
                        var o = r.X(t, n),
                            a = i.Ah().filter((function(t) {
                                return t instanceof qe
                            })).reduce((function(t, s) {
                                if (i.Au(s) || !s.H()) return t;
                                var r = s.Z(),
                                    n = s.qi();
                                if (r.Qt() || !n.As(e)) return t;
                                var o = n.ya(e);
                                if (null === o) return t;
                                var a = m(s.Y());
                                return t.concat([r.X(o.J[3], a.J)])
                            }), []);
                        if (0 === a.length) return s;
                        a.sort((function(t, e) {
                            return Math.abs(t - o) - Math.abs(e - o)
                        }));
                        var l = a[0];
                        return r.Di(l, n)
                    }, t
                }(),
                ze = function() {
                    function t() {
                        this.tt = null
                    }
                    return t.prototype._ = function(t) {
                        this.tt = t
                    }, t.prototype.h = function(t, e, i, s) {
                        var r = this;
                        if (null !== this.tt) {
                            var n = Math.max(1, Math.floor(e));
                            t.lineWidth = n;
                            var o = Math.ceil(this.tt.st * e),
                                l = Math.ceil(this.tt.ht * e);
                            ! function(t, e) {
                                t.save(), t.lineWidth % 2 && t.translate(.5, .5), e(), t.restore()
                            }(t, (function() {
                                var i = g(r.tt);
                                if (i.po) {
                                    t.strokeStyle = i.yo, a(t, i.ko), t.beginPath();
                                    for (var s = 0, h = i.xo; s < h.length; s++) {
                                        var c = h[s],
                                            u = Math.round(c.Dn * e);
                                        t.moveTo(u, -n), t.lineTo(u, o + n)
                                    }
                                    t.stroke()
                                }
                                if (i.No) {
                                    t.strokeStyle = i.So, a(t, i.Co), t.beginPath();
                                    for (var d = 0, p = i.Do; d < p.length; d++) {
                                        var f = p[d],
                                            m = Math.round(f.Dn * e);
                                        t.moveTo(-n, m), t.lineTo(l + n, m)
                                    }
                                    t.stroke()
                                }
                            }))
                        }
                    }, t
                }(),
                Ue = function() {
                    function t(t) {
                        this.ot = new ze, this.B = !0, this._i = t
                    }
                    return t.prototype.V = function() {
                        this.B = !0
                    }, t.prototype.W = function(t, e) {
                        if (this.B) {
                            var i = this._i.ct().I().grid,
                                s = {
                                    st: t,
                                    ht: e,
                                    No: i.horzLines.visible,
                                    po: i.vertLines.visible,
                                    So: i.horzLines.color,
                                    yo: i.vertLines.color,
                                    Co: i.horzLines.style,
                                    ko: i.vertLines.style,
                                    Do: this._i.Ci().Ln(),
                                    xo: this._i.ct().U().Ln() || []
                                };
                            this.ot._(s), this.B = !1
                        }
                        return this.ot
                    }, t
                }(),
                Ve = function() {
                    function t(t) {
                        this.Bi = new Ue(t)
                    }
                    return t.prototype.To = function() {
                        return this.Bi
                    }, t
                }(),
                He = function() {
                    function t(t, e) {
                        this.qn = [], this.Bo = new Map, this.An = 0, this.Ys = 0, this.Eo = 1e3, this.Hn = null, this.Lo = new tt, this.Ao = t, this.hi = e, this.Vo = new Ve(this);
                        var i = e.I();
                        this.Oo = this.zo("left", i.leftPriceScale), this.Po = this.zo("right", i.rightPriceScale), this.Oo.Mh().Zi(this.Fo.bind(this, this.Oo), this), this.Po.Mh().Zi(this.Fo.bind(this, this.Oo), this), this.Io(i)
                    }
                    return t.prototype.Io = function(t) {
                        if (t.leftPriceScale && this.Oo.hh(t.leftPriceScale), t.rightPriceScale && this.Po.hh(t.rightPriceScale), t.localization && (this.Oo.sh(), this.Po.sh()), t.overlayPriceScales)
                            for (var e = 0, i = Array.from(this.Bo.values()); e < i.length; e++) {
                                var s = g(i[e][0].Z());
                                s.hh(t.overlayPriceScales), t.localization && s.sh()
                            }
                    }, t.prototype.Wo = function(t) {
                        switch (t) {
                            case "left":
                                return this.Oo;
                            case "right":
                                return this.Po
                        }
                        return this.Bo.has(t) ? f(this.Bo.get(t))[0].Z() : null
                    }, t.prototype.rn = function() {
                        this.ct().Ro().nn(this), this.Oo.Mh().nn(this), this.Po.Mh().nn(this), this.qn.forEach((function(t) {
                            t.rn && t.rn()
                        })), this.Lo.hn()
                    }, t.prototype.jo = function() {
                        return this.Eo
                    }, t.prototype.Uo = function(t) {
                        this.Eo = t
                    }, t.prototype.ct = function() {
                        return this.hi
                    }, t.prototype.dt = function() {
                        return this.Ys
                    }, t.prototype.wt = function() {
                        return this.An
                    }, t.prototype.Cr = function(t) {
                        this.Ys = t, this.qo()
                    }, t.prototype.bh = function(t) {
                        var e = this;
                        this.An = t, this.Oo.bh(t), this.Po.bh(t), this.qn.forEach((function(i) {
                            if (e.Au(i)) {
                                var s = i.Z();
                                null !== s && s.bh(t)
                            }
                        })), this.qo()
                    }, t.prototype.Ah = function() {
                        return this.qn
                    }, t.prototype.Au = function(t) {
                        var e = t.Z();
                        return null === e || this.Oo !== e && this.Po !== e
                    }, t.prototype.Oh = function(t, e, i) {
                        var s = void 0 !== i ? i : this.Yo().Ho - 1;
                        this.Ko(t, e, s)
                    }, t.prototype.Ph = function(t) {
                        var e = this.qn.indexOf(t);
                        p(-1 !== e, "removeDataSource: invalid data source"), this.qn.splice(e, 1);
                        var i = g(t.Z()).nh();
                        if (this.Bo.has(i)) {
                            var s = f(this.Bo.get(i)),
                                r = s.indexOf(t); - 1 !== r && (s.splice(r, 1), 0 === s.length && this.Bo.delete(i))
                        }
                        var n = t.Z();
                        n && n.Ah().indexOf(t) >= 0 && n.Ph(t), null !== n && (n.zh(), this.$o(n)), this.Hn = null
                    }, t.prototype.Vu = function(t) {
                        return t === this.Oo ? "left" : t === this.Po ? "right" : "overlay"
                    }, t.prototype.Xo = function() {
                        return this.Oo
                    }, t.prototype.Zo = function() {
                        return this.Po
                    }, t.prototype.Jo = function(t, e) {
                        t.Wh(e)
                    }, t.prototype.Go = function(t, e) {
                        t.Rh(e), this.qo()
                    }, t.prototype.Qo = function(t) {
                        t.jh()
                    }, t.prototype.tl = function(t, e) {
                        t.Uh(e)
                    }, t.prototype.il = function(t, e) {
                        t.qh(e), this.qo()
                    }, t.prototype.nl = function(t) {
                        t.Hh()
                    }, t.prototype.qo = function() {
                        this.qn.forEach((function(t) {
                            t.Wi()
                        }))
                    }, t.prototype.Ci = function() {
                        var t = null;
                        return this.hi.I().rightPriceScale.visible && 0 !== this.Po.Ah().length ? t = this.Po : this.hi.I().leftPriceScale.visible && 0 !== this.Oo.Ah().length ? t = this.Oo : 0 !== this.qn.length && (t = this.qn[0].Z()), null === t && (t = this.Po), t
                    }, t.prototype.$o = function(t) {
                        null !== t && t.ah() && this.hl(t)
                    }, t.prototype.sl = function(t) {
                        var e = this.Ao.Mr();
                        t.rh({
                            fh: !0
                        }), null !== e && t.Gh(e), this.qo()
                    }, t.prototype.rl = function() {
                        this.hl(this.Oo), this.hl(this.Po)
                    }, t.prototype.el = function() {
                        var t = this;
                        this.$o(this.Oo), this.$o(this.Po), this.qn.forEach((function(e) {
                            t.Au(e) && t.$o(e.Z())
                        })), this.qo(), this.hi.zr()
                    }, t.prototype.Vh = function() {
                        return null === this.Hn && (this.Hn = _t(this.qn)), this.Hn
                    }, t.prototype.ul = function() {
                        return this.Lo
                    }, t.prototype.al = function() {
                        return this.Vo
                    }, t.prototype.hl = function(t) {
                        var e = t.Jh();
                        if (e && e.length > 0 && !this.Ao.Qt()) {
                            var i = this.Ao.Mr();
                            null !== i && t.Gh(i)
                        }
                        t.Wi()
                    }, t.prototype.Yo = function() {
                        var t = this.Vh();
                        if (0 === t.length) return {
                            Ho: 0,
                            ol: 0
                        };
                        for (var e = 0, i = 0, s = 0; s < t.length; s++) {
                            var r = t[s].ai();
                            null !== r && (r < e && (e = r), r > i && (i = r))
                        }
                        return {
                            Ho: e,
                            ol: i
                        }
                    }, t.prototype.Ko = function(t, e, i) {
                        var s = this.Wo(e);
                        if (null === s && (s = this.zo(e, this.hi.I().overlayPriceScales)), this.qn.push(t), !Wt(e)) {
                            var r = this.Bo.get(e) || [];
                            r.push(t), this.Bo.set(e, r)
                        }
                        s.Oh(t), t.li(s), t.oi(i), this.$o(s), this.Hn = null
                    }, t.prototype.Fo = function(t, e, i) {
                        e.eh !== i.eh && this.hl(t)
                    }, t.prototype.zo = function(t, e) {
                        var i = u({
                                visible: !0,
                                autoScale: !0
                            }, S(e)),
                            s = new wt(t, i, this.hi.I().layout, this.hi.I().localization);
                        return s.bh(this.wt()), s
                    }, t
                }(),
                $e = function(t) {
                    function e(e) {
                        var i = t.call(this) || this;
                        return i.ll = new Map, i.tt = e, i
                    }
                    return c(e, t), e.prototype.u = function(t) {}, e.prototype.l = function(t) {
                        if (this.tt.H) {
                            t.save();
                            for (var e = 0, i = 0, s = this.tt.fl; i < s.length; i++)
                                if (0 !== (l = s[i]).At.length) {
                                    t.font = l.xt;
                                    var r = this.cl(t, l.At);
                                    r > this.tt.dt ? l.jr = this.tt.dt / r : l.jr = 1, e += l.vl * l.jr
                                }
                            var n = 0;
                            switch (this.tt._l) {
                                case "top":
                                    n = 0;
                                    break;
                                case "center":
                                    n = Math.max((this.tt.wt - e) / 2, 0);
                                    break;
                                case "bottom":
                                    n = Math.max(this.tt.wt - e, 0)
                            }
                            t.fillStyle = this.tt.et;
                            for (var o = 0, a = this.tt.fl; o < a.length; o++) {
                                var l = a[o];
                                t.save();
                                var h = 0;
                                switch (this.tt.dl) {
                                    case "left":
                                        t.textAlign = "left", h = l.vl / 2;
                                        break;
                                    case "center":
                                        t.textAlign = "center", h = this.tt.dt / 2;
                                        break;
                                    case "right":
                                        t.textAlign = "right", h = this.tt.dt - 1 - l.vl / 2
                                }
                                t.translate(h, n), t.textBaseline = "top", t.font = l.xt, t.scale(l.jr, l.jr), t.fillText(l.At, 0, l.wl), t.restore(), n += l.vl * l.jr
                            }
                            t.restore()
                        }
                    }, e.prototype.cl = function(t, e) {
                        var i = this.Ml(t.font),
                            s = i.get(e);
                        return void 0 === s && (s = t.measureText(e).width, i.set(e, s)), s
                    }, e.prototype.Ml = function(t) {
                        var e = this.ll.get(t);
                        return void 0 === e && (e = new Map, this.ll.set(t, e)), e
                    }, e
                }(k),
                je = function() {
                    function t(t) {
                        this.B = !0, this.at = {
                            H: !1,
                            et: "",
                            wt: 0,
                            dt: 0,
                            fl: [],
                            _l: "center",
                            dl: "center"
                        }, this.ot = new $e(this.at), this.lt = t
                    }
                    return t.prototype.V = function() {
                        this.B = !0
                    }, t.prototype.W = function(t, e) {
                        return this.B && (this.R(t, e), this.B = !1), this.ot
                    }, t.prototype.R = function(t, e) {
                        var i = this.lt.I(),
                            s = this.at;
                        s.H = i.visible, s.H && (s.et = i.color, s.dt = e, s.wt = t, s.dl = i.horzAlign, s._l = i.vertAlign, s.fl = [{
                            At: i.text,
                            xt: Ot(i.fontSize, i.fontFamily, i.fontStyle),
                            vl: 1.2 * i.fontSize,
                            wl: 0,
                            jr: 0
                        }])
                    }, t
                }(),
                Ye = function(t) {
                    function e(e, i) {
                        var s = t.call(this) || this;
                        return s.xi = i, s.Bi = new je(s), s
                    }
                    return c(e, t), e.prototype.ci = function() {
                        return [this.Bi]
                    }, e.prototype.I = function() {
                        return this.xi
                    }, e.prototype.Wi = function() {
                        this.Bi.V()
                    }, e
                }(X),
                Ge = function() {
                    function t(t, e) {
                        this.bl = [], this.ml = [], this.Ys = 0, this.gl = null, this.pl = null, this.yl = new tt, this.kl = new tt, this.xl = t, this.xi = e, this.Nl = new qt(this), this.Ao = new Nt(this, e.timeScale, this.xi.localization), this.A = new J(this, e.crosshair), this.Sl = new We(e.crosshair), this.Cl = new Ye(this, e.watermark), this.Dl(), this.bl[0].Uo(2e3)
                    }
                    return t.prototype.Tl = function() {
                            this.Bl(new zt(3))
                        }, t.prototype.zr = function() {
                            this.Bl(new zt(2))
                        }, t.prototype.so = function(t) {
                            var e = this.El(t);
                            this.Bl(e)
                        }, t.prototype.Ll = function() {
                            return this.pl
                        }, t.prototype.Al = function(t) {
                            var e = this.pl;
                            this.pl = t, null !== e && this.so(e.Vl), null !== t && this.so(t.Vl)
                        }, t.prototype.I = function() {
                            return this.xi
                        }, t.prototype.hh = function(t) {
                            _(this.xi, t), this.bl.forEach((function(e) {
                                return e.Io(t)
                            })), void 0 !== t.timeScale && this.Ao.hh(t.timeScale), void 0 !== t.localization && this.Ao.ar(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.yl.hn(), this.Tl()
                        }, t.prototype.Ol = function(t, e) {
                            var i = this.zl(t);
                            null !== i && (i.Z.hh(e), this.yl.hn())
                        }, t.prototype.zl = function(t) {
                            for (var e = 0, i = this.bl; e < i.length; e++) {
                                var s = i[e],
                                    r = s.Wo(t);
                                if (null !== r) return {
                                    ft: s,
                                    Z: r
                                }
                            }
                            return null
                        }, t.prototype.U = function() {
                            return this.Ao
                        }, t.prototype.Pl = function() {
                            return this.bl
                        }, t.prototype.Fl = function() {
                            return this.Cl
                        }, t.prototype.Il = function() {
                            return this.A
                        }, t.prototype.Wl = function() {
                            return this.kl
                        }, t.prototype.Rl = function(t, e) {
                            t.bh(e), this.Or()
                        }, t.prototype.Cr = function(t) {
                            this.Ys = t, this.Ao.Cr(this.Ys), this.bl.forEach((function(e) {
                                return e.Cr(t)
                            })), this.Or()
                        }, t.prototype.Dl = function(t) {
                            var e = new He(this.Ao, this);
                            void 0 !== t ? this.bl.splice(t, 0, e) : this.bl.push(e);
                            var i = void 0 === t ? this.bl.length - 1 : t,
                                s = new zt(3);
                            return s.we(i, {
                                Me: 0,
                                fh: !0
                            }), this.Bl(s), e
                        }, t.prototype.Jo = function(t, e, i) {
                            t.Jo(e, i)
                        }, t.prototype.Go = function(t, e, i) {
                            t.Go(e, i), this.ro(), this.Bl(this.jl(t, 2))
                        }, t.prototype.Qo = function(t, e) {
                            t.Qo(e),
                                this.Bl(this.jl(t, 2))
                        }, t.prototype.tl = function(t, e, i) {
                            e.ah() || t.tl(e, i)
                        }, t.prototype.il = function(t, e, i) {
                            e.ah() || (t.il(e, i), this.ro(), this.Bl(this.jl(t, 2)))
                        }, t.prototype.nl = function(t, e) {
                            e.ah() || (t.nl(e), this.Bl(this.jl(t, 2)))
                        }, t.prototype.sl = function(t, e) {
                            t.sl(e), this.Bl(this.jl(t, 2))
                        }, t.prototype.Ul = function(t) {
                            this.Ao.Wh(t)
                        }, t.prototype.ql = function(t, e) {
                            var i = this.U();
                            if (!i.Qt() && 0 !== e) {
                                var s = i.dt();
                                t = Math.max(1, Math.min(t, s)), i.jr(t, e), this.Or()
                            }
                        }, t.prototype.Hl = function(t) {
                            this.Yl(0), this.Kl(t), this.$l()
                        }, t.prototype.Xl = function(t) {
                            this.Ao.Rh(t), this.Or()
                        }, t.prototype.Zl = function() {
                            this.Ao.jh(), this.zr()
                        }, t.prototype.Yl = function(t) {
                            this.gl = t, this.Ao.Uh(t)
                        }, t.prototype.Kl = function(t) {
                            var e = !1;
                            return null !== this.gl && Math.abs(t - this.gl) > 20 && (this.gl = null, e = !0), this.Ao.qh(t), this.Or(), e
                        }, t.prototype.$l = function() {
                            this.Ao.Hh(), this.zr(), this.gl = null
                        }, t.prototype.O = function() {
                            return this.ml
                        }, t.prototype.Jl = function(t, e, i) {
                            this.A.Ei(t, e);
                            var s = NaN,
                                r = this.Ao.Ar(t),
                                n = this.Ao.Mr();
                            null !== n && (r = Math.min(Math.max(n.hs(), r), n.ss()));
                            var o = i.Ci(),
                                a = o.Y();
                            null !== a && (s = o.Di(e, a)), s = this.Sl.mo(s, r, i), this.A.Oi(r, s, i), this.Gl(), this.kl.hn(this.A.j(), {
                                x: t,
                                y: e
                            })
                        }, t.prototype.Ql = function() {
                            this.Il().Pi(), this.Gl(), this.kl.hn(null, null)
                        }, t.prototype.ro = function() {
                            var t = this.A.ft();
                            if (null !== t) {
                                var e = this.A.Ai(),
                                    i = this.A.Vi();
                                this.Jl(e, i, t)
                            }
                            this.A.Wi()
                        }, t.prototype.tf = function(t, e) {
                            var i = this.Ao.si(0);
                            void 0 !== e && this.Ao.V(e);
                            var s = this.Ao.si(0),
                                r = this.Ao.Er(),
                                n = this.Ao.Mr();
                            if (null !== n && null !== i && null !== s) {
                                var o = n.As(r),
                                    a = i.Cs > s.Cs,
                                    l = null !== t && t > r && !a,
                                    h = o && this.Ao.I().shiftVisibleRangeOnNewBar;
                                if (l && !h && null !== t) {
                                    var c = t - r;
                                    this.Ao.dr(this.Ao.Fr() - c)
                                }
                            }
                            this.Ao.Rr(t)
                        }, t.prototype.oo = function(t) {
                            null !== t && t.el()
                        }, t.prototype.Lu = function(t) {
                            var e = this.bl.find((function(e) {
                                return e.Vh().includes(t)
                            }));
                            return void 0 === e ? null : e
                        }, t.prototype.Or = function() {
                            this.Cl.Wi(), this.bl.forEach((function(t) {
                                return t.el()
                            })), this.ro()
                        }, t.prototype.rn = function() {
                            this.bl.forEach((function(t) {
                                return t.rn()
                            })), this.bl.length = 0, this.xi.localization.priceFormatter = void 0, this.xi.localization.timeFormatter = void 0
                        }, t.prototype.if = function() {
                            return this.Nl
                        }, t.prototype.Ou = function() {
                            return this.Nl.I()
                        }, t.prototype.Ro = function() {
                            return this.yl
                        }, t.prototype.nf = function(t, e) {
                            var i = this.bl[0],
                                s = this.hf(e, t, i);
                            return this.ml.push(s), 1 === this.ml.length ? this.Tl() : this.zr(), s
                        }, t.prototype.sf = function(t) {
                            var e = this.Lu(t),
                                i = this.ml.indexOf(t);
                            p(-1 !== i, "Series not found"), this.ml.splice(i, 1), g(e).Ph(t), t.rn && t.rn()
                        }, t.prototype.ho = function(t, e) {
                            var i = g(this.Lu(t));
                            i.Ph(t);
                            var s = this.zl(e);
                            if (null === s) {
                                var r = t.ai();
                                i.Oh(t, e, r)
                            } else r = s.ft === i ? t.ai() : void 0, s.ft.Oh(t, e, r)
                        }, t.prototype.Jr = function() {
                            var t = new zt(2);
                            t.ge(), this.Bl(t)
                        }, t.prototype.rf = function(t) {
                            var e = new zt(2);
                            e.ye(t), this.Bl(e)
                        }, t.prototype.ke = function() {
                            var t = new zt(2);
                            t.ke(), this.Bl(t)
                        }, t.prototype._r = function(t) {
                            var e = new zt(2);
                            e._r(t), this.Bl(e)
                        }, t.prototype.dr = function(t) {
                            var e = new zt(2);
                            e.dr(t), this.Bl(e)
                        }, t.prototype.ef = function() {
                            return this.xi.rightPriceScale.visible ? "right" : "left"
                        },
                        t.prototype.jl = function(t, e) {
                            var i = new zt(e);
                            if (null !== t) {
                                var s = this.bl.indexOf(t);
                                i.we(s, {
                                    Me: e
                                })
                            }
                            return i
                        }, t.prototype.El = function(t, e) {
                            return void 0 === e && (e = 2), this.jl(this.Lu(t), e)
                        }, t.prototype.Bl = function(t) {
                            this.xl && this.xl(t), this.bl.forEach((function(t) {
                                return t.al().To().V()
                            }))
                        }, t.prototype.Gl = function() {
                            this.Bl(new zt(1))
                        }, t.prototype.hf = function(t, e, i) {
                            var s = new qe(this, t, e),
                                r = void 0 !== t.priceScaleId ? t.priceScaleId : this.ef();
                            return i.Oh(s, r), Wt(r) || s.hh(t), s
                        }, t
                }(),
                Xe = function() {
                    function t(t, e) {
                        this.ht = t, this.st = e
                    }
                    return t.prototype.an = function(t) {
                        return this.ht === t.ht && this.st === t.st
                    }, t
                }();

            function Je(t) {
                return t.ownerDocument && t.ownerDocument.defaultView && t.ownerDocument.defaultView.devicePixelRatio || 1
            }

            function Qe(t) {
                var e = g(t.getContext("2d"));
                return e.setTransform(1, 0, 0, 1, 0, 0), e
            }

            function Ze(t, e) {
                var i = t.createElement("canvas"),
                    s = Je(i);
                return i.style.width = e.ht + "px", i.style.height = e.st + "px", i.width = e.ht * s, i.height = e.st * s, i
            }

            function Ke(t, e) {
                var i = g(t.ownerDocument).createElement("canvas");
                t.appendChild(i);
                var s = (0, o.bindToDevicePixelRatio)(i);
                return s.resizeCanvas({
                    width: e.ht,
                    height: e.st
                }), s
            }
            var ti = "undefined" != typeof window,
                ei = function() {
                    if (!ti) return !1;
                    var t = !!navigator.maxTouchPoints || !!navigator.msMaxTouchPoints || !!ti && ("ontouchstart" in window || Boolean(window.DocumentTouch && document instanceof window.DocumentTouch));
                    return "onorientationchange" in window && t
                }(),
                ii = function() {
                    if (!ti) return !1;
                    var t = /Android/i.test(navigator.userAgent),
                        e = /iPhone|iPad|iPod|AppleWebKit.+Mobile/i.test(navigator.userAgent);
                    return t || e
                }(),
                si = function() {
                    function t(t, e, i) {
                        this.uf = 0, this.af = null, this.lf = null, this.ff = !1, this.cf = null, this.vf = !1, this._f = !1, this.df = null, this.wf = null, this.Mf = null, this.bf = null, this.mf = 0, this.gf = !1, this.pf = !1, this.yf = !1, this.kf = t, this.xf = e, this.xi = i, this.Nf()
                    }
                    return t.prototype.rn = function() {
                        null !== this.df && (this.df(), this.df = null), null !== this.wf && (this.wf(), this.wf = null), null !== this.Mf && (this.Mf(), this.Mf = null), this.Sf(), this.Cf()
                    }, t.prototype.Df = function(t) {
                        var e = this;
                        this.wf && this.wf();
                        var i = this.Tf.bind(this);
                        this.wf = function() {
                            e.kf.removeEventListener("mousemove", i)
                        }, this.kf.addEventListener("mousemove", i), oi(t) && this.Tf(t);
                        var s = this.Bf(t);
                        this.Ef(s, this.xf.Lf)
                    }, t.prototype.Cf = function() {
                        null !== this.af && clearTimeout(this.af), this.uf = 0, this.af = null
                    }, t.prototype.Tf = function(t) {
                        if (!this.yf || oi(t)) {
                            var e = this.Bf(t);
                            this.Ef(e, this.xf.Af)
                        }
                    }, t.prototype.Vf = function(t) {
                        if ((!("button" in t) || 0 === t.button) && null === this.bf) {
                            var e = oi(t);
                            if (!this.pf || !e) {
                                this.gf = !0;
                                var i = this.Bf(t),
                                    s = m(this.cf),
                                    r = Math.abs(s.g - i.Of),
                                    n = Math.abs(s.p - i.zf),
                                    o = r + n > 5;
                                if (o || !e) {
                                    if (o && !this.vf && e) {
                                        var a = .5 * r,
                                            l = n >= a && !this.xi.Pf,
                                            h = a > n && !this.xi.Ff;
                                        l || h || (this.pf = !0)
                                    }
                                    o && (this.vf = !0, this._f = !0, e && this.Sf()), this.pf || (this.Ef(i, this.xf.If), e && ai(t))
                                }
                            }
                        }
                    }, t.prototype.Wf = function(t) {
                        if (!("button" in t) || 0 === t.button) {
                            var e = this.Bf(t);
                            this.Sf(), this.cf = null, this.yf = !1, this.Mf && (this.Mf(), this.Mf = null), oi(t) && this.Rf(t), this.Ef(e, this.xf.jf), ++this.uf, this.af && this.uf > 1 ? (this.Ef(e, this.xf.Uf), this.Cf()) : this._f || this.Ef(e, this.xf.qf), oi(t) && (ai(t),
                                this.Rf(t), 0 === t.touches.length && (this.ff = !1))
                        }
                    }, t.prototype.Sf = function() {
                        null !== this.lf && (clearTimeout(this.lf), this.lf = null)
                    }, t.prototype.Hf = function(t) {
                        if (!("button" in t) || 0 === t.button) {
                            var e = this.Bf(t);
                            this._f = !1, this.vf = !1, this.pf = !1, oi(t) && this.Df(t), this.cf = {
                                g: e.Of,
                                p: e.zf
                            }, this.Mf && (this.Mf(), this.Mf = null);
                            var i = this.Vf.bind(this),
                                s = this.Wf.bind(this),
                                r = this.kf.ownerDocument.documentElement;
                            this.Mf = function() {
                                r.removeEventListener("touchmove", i), r.removeEventListener("touchend", s), r.removeEventListener("mousemove", i), r.removeEventListener("mouseup", s)
                            }, r.addEventListener("touchmove", i, {
                                passive: !1
                            }), r.addEventListener("touchend", s, {
                                passive: !1
                            }), this.Sf(), oi(t) && 1 === t.touches.length ? this.lf = setTimeout(this.Yf.bind(this, t), 240) : (r.addEventListener("mousemove", i), r.addEventListener("mouseup", s)), this.yf = !0, this.Ef(e, this.xf.Kf), this.af || (this.uf = 0, this.af = setTimeout(this.Cf.bind(this), 500))
                        }
                    }, t.prototype.Nf = function() {
                        var t = this;
                        this.kf.addEventListener("mouseenter", this.Df.bind(this)), this.kf.addEventListener("touchcancel", this.Sf.bind(this));
                        var e = this.kf.ownerDocument,
                            i = function(e) {
                                t.xf.$f && (e.composed && t.kf.contains(e.composedPath()[0]) || e.target && t.kf.contains(e.target) || t.xf.$f())
                            };
                        this.df = function() {
                            e.removeEventListener("mousedown", i), e.removeEventListener("touchstart", i)
                        }, e.addEventListener("mousedown", i), e.addEventListener("touchstart", i, {
                            passive: !0
                        }), this.kf.addEventListener("mouseleave", this.Rf.bind(this)), this.kf.addEventListener("touchstart", this.Hf.bind(this), {
                            passive: !0
                        }), ei || this.kf.addEventListener("mousedown", this.Hf.bind(this)), this.Xf(), this.kf.addEventListener("touchmove", (function() {}), {
                            passive: !1
                        })
                    }, t.prototype.Xf = function() {
                        var t = this;
                        void 0 === this.xf.Zf && void 0 === this.xf.Jf && void 0 === this.xf.Gf || (this.kf.addEventListener("touchstart", (function(e) {
                            return t.Qf(e.touches)
                        }), {
                            passive: !0
                        }), this.kf.addEventListener("touchmove", (function(e) {
                            if (2 === e.touches.length && null !== t.bf && void 0 !== t.xf.Jf) {
                                var i = ni(e.touches[0], e.touches[1]) / t.mf;
                                t.xf.Jf(t.bf, i), ai(e)
                            }
                        }), {
                            passive: !1
                        }), this.kf.addEventListener("touchend", (function(e) {
                            t.Qf(e.touches)
                        })))
                    }, t.prototype.Qf = function(t) {
                        1 === t.length && (this.gf = !1), 2 !== t.length || this.gf || this.ff ? this.tc() : this.ic(t)
                    }, t.prototype.ic = function(t) {
                        var e = ri(this.kf);
                        this.bf = {
                            g: (t[0].clientX - e.left + (t[1].clientX - e.left)) / 2,
                            p: (t[0].clientY - e.top + (t[1].clientY - e.top)) / 2
                        }, this.mf = ni(t[0], t[1]), void 0 !== this.xf.Zf && this.xf.Zf(), this.Sf()
                    }, t.prototype.tc = function() {
                        null !== this.bf && (this.bf = null, void 0 !== this.xf.Gf && this.xf.Gf())
                    }, t.prototype.Rf = function(t) {
                        this.wf && this.wf();
                        var e = this.Bf(t);
                        this.Ef(e, this.xf.nc)
                    }, t.prototype.Yf = function(t) {
                        var e = this.Bf(t);
                        this.Ef(e, this.xf.hc), this._f = !0, this.ff = !0
                    }, t.prototype.Ef = function(t, e) {
                        e && e.call(this.xf, t)
                    }, t.prototype.Bf = function(t) {
                        var e;
                        e = "touches" in t && t.touches.length ? t.touches[0] : "changedTouches" in t && t.changedTouches.length ? t.changedTouches[0] : t;
                        var i = ri(this.kf);
                        return {
                            sc: e.clientX,
                            rc: e.clientY,
                            Of: e.pageX,
                            zf: e.pageY,
                            ec: e.screenX,
                            uc: e.screenY,
                            ac: e.clientX - i.left,
                            oc: e.clientY - i.top,
                            lc: t.ctrlKey,
                            fc: t.altKey,
                            cc: t.shiftKey,
                            vc: t.metaKey,
                            pe: t.type.startsWith("mouse") ? "mouse" : "touch",
                            _c: t.view
                        }
                    }, t
                }();

            function ri(t) {
                return t.getBoundingClientRect() || {
                    left: 0,
                    top: 0
                }
            }

            function ni(t, e) {
                var i = t.clientX - e.clientX,
                    s = t.clientY - e.clientY;
                return Math.sqrt(i * i + s * s)
            }

            function oi(t) {
                return Boolean(t.touches)
            }

            function ai(t) {
                t.cancelable && t.preventDefault()
            }
            var li = function() {
                    function t(t, e, i, s) {
                        this.Du = new ue(200), this.oe = 0, this.dc = "", this.Iu = "", this.xu = [], this.wc = new Map, this.oe = t, this.dc = e, this.Iu = Ot(t, i, s)
                    }
                    return t.prototype.rn = function() {
                        this.Du.Nu(), this.xu = [], this.wc.clear()
                    }, t.prototype.Mc = function(t, e, i, s, r) {
                        var n = this.bc(t, e);
                        if ("left" !== r) {
                            var o = Je(t.canvas);
                            i -= Math.floor(n.mc * o)
                        }
                        s -= Math.floor(n.wt / 2), t.drawImage(n.gc, i, s, n.dt, n.wt)
                    }, t.prototype.bc = function(t, e) {
                        var i, s = this;
                        if (this.wc.has(e)) i = f(this.wc.get(e));
                        else {
                            if (this.xu.length >= 200) {
                                var r = f(this.xu.shift());
                                this.wc.delete(r)
                            }
                            var n = Je(t.canvas),
                                o = Math.ceil(this.oe / 4.5),
                                a = Math.round(this.oe / 10),
                                l = Math.ceil(this.Du.Vt(t, e)),
                                h = nt(Math.round(l + 2 * o)),
                                c = nt(this.oe + 2 * o),
                                u = Ze(document, new Xe(h, c));
                            i = {
                                At: e,
                                mc: Math.round(Math.max(1, l)),
                                dt: Math.ceil(h * n),
                                wt: Math.ceil(c * n),
                                gc: u
                            }, 0 !== l && (this.xu.push(i.At), this.wc.set(i.At, i)), W(t = Qe(i.gc), n, (function() {
                                t.font = s.Iu, t.fillStyle = s.dc, t.fillText(e, 0, c - o - a)
                            }))
                        }
                        return i
                    }, t
                }(),
                hi = function() {
                    function t(t, e, i, s) {
                        var r = this;
                        this.Jt = null, this.yc = null, this.kc = null, this.xc = !1, this.Nc = new ue(50), this.Sc = new li(11, "#000"), this.dc = null, this.Iu = null, this.Cc = 0, this.Dc = function() {
                            r.Tc(r.Nl.I()), r._i.Bc().ct().zr()
                        }, this.Ec = function() {
                            r._i.Bc().ct().zr()
                        }, this._i = t, this.xi = e, this.Nl = i, this.Lc = "left" === s, this.Ac = document.createElement("div"), this.Ac.style.height = "100%", this.Ac.style.overflow = "hidden", this.Ac.style.width = "25px", this.Ac.style.left = "0", this.Ac.style.position = "relative", this.Vc = Ke(this.Ac, new Xe(16, 16)), this.Vc.subscribeCanvasConfigured(this.Dc);
                        var n = this.Vc.canvas;
                        n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.Oc = Ke(this.Ac, new Xe(16, 16)), this.Oc.subscribeCanvasConfigured(this.Ec);
                        var o = this.Oc.canvas;
                        o.style.position = "absolute", o.style.zIndex = "2", o.style.left = "0", o.style.top = "0";
                        var a = {
                            Kf: this.zc.bind(this),
                            If: this.Pc.bind(this),
                            $f: this.Fc.bind(this),
                            jf: this.Ic.bind(this),
                            Uf: this.Wc.bind(this),
                            Lf: this.Rc.bind(this),
                            nc: this.jc.bind(this)
                        };
                        this.Uc = new si(this.Oc.canvas, a, {
                            Pf: !1,
                            Ff: !0
                        })
                    }
                    return t.prototype.rn = function() {
                        this.Uc.rn(), this.Oc.unsubscribeCanvasConfigured(this.Ec), this.Oc.destroy(), this.Vc.unsubscribeCanvasConfigured(this.Dc), this.Vc.destroy(), null !== this.Jt && this.Jt.Ih().nn(this), this.Jt = null, null !== this.kc && (clearTimeout(this.kc), this.kc = null), this.Sc.rn()
                    }, t.prototype.qc = function() {
                        return this.Ac
                    }, t.prototype.K = function() {
                        return this.xi.backgroundColor
                    }, t.prototype.S = function() {
                        return g(this.Jt).I().borderColor
                    }, t.prototype.Hc = function() {
                        return this.xi.textColor
                    }, t.prototype.zt = function() {
                        return this.xi.fontSize
                    }, t.prototype.Yc = function() {
                        return Ot(this.zt(), this.xi.fontFamily)
                    }, t.prototype.Kc = function() {
                        var t = this.Nl.I(),
                            e = this.dc !== t.et,
                            i = this.Iu !== t.xt;
                        return (e || i) && (this.Tc(t), this.dc = t.et),
                            i && (this.Nc.Nu(), this.Iu = t.xt), t
                    }, t.prototype.$c = function() {
                        if (null === this.Jt) return 0;
                        var t = 34,
                            e = this.Kc(),
                            i = Qe(this.Vc.canvas),
                            s = this.Jt.Ln();
                        i.font = this.Yc(), s.length > 0 && (t = Math.max(this.Nc.Vt(i, s[0].Tn), this.Nc.Vt(i, s[s.length - 1].Tn)));
                        for (var r = this.Xc(), n = r.length; n--;) {
                            var o = this.Nc.Vt(i, r[n].At());
                            o > t && (t = o)
                        }
                        var a = Math.ceil(e.Dt + e.Ct + e.Et + e.Lt + t);
                        return a + a % 2
                    }, t.prototype.Zc = function(t) {
                        if (t.ht < 0 || t.st < 0) throw new Error("Try to set invalid size to PriceAxisWidget " + JSON.stringify(t));
                        null !== this.yc && this.yc.an(t) || (this.yc = t, this.Vc.resizeCanvas({
                            width: t.ht,
                            height: t.st
                        }), this.Oc.resizeCanvas({
                            width: t.ht,
                            height: t.st
                        }), this.Ac.style.width = t.ht + "px", this.Ac.style.height = t.st + "px", this.Ac.style.minWidth = t.ht + "px")
                    }, t.prototype.Jc = function() {
                        return g(this.yc).ht
                    }, t.prototype.li = function(t) {
                        this.Jt !== t && (null !== this.Jt && this.Jt.Ih().nn(this), this.Jt = t, t.Ih().Zi(this.jn.bind(this), this))
                    }, t.prototype.Z = function() {
                        return this.Jt
                    }, t.prototype.Nu = function() {
                        var t = this._i.Gc();
                        this._i.Bc().ct().sl(t, g(this.Z()))
                    }, t.prototype.Qc = function(t) {
                        if (null !== this.yc) {
                            if (1 !== t) {
                                var e = Qe(this.Vc.canvas);
                                this.tv(), this.iv(e, this.Vc.pixelRatio), this.fu(e, this.Vc.pixelRatio), this.nv(e, this.Vc.pixelRatio), this.hv(e, this.Vc.pixelRatio)
                            }
                            var i = Qe(this.Oc.canvas),
                                s = this.yc.ht,
                                r = this.yc.st;
                            W(i, this.Oc.pixelRatio, (function() {
                                i.clearRect(0, 0, s, r)
                            })), this.sv(i, this.Oc.pixelRatio)
                        }
                    }, t.prototype.rv = function() {
                        return this.Vc.canvas
                    }, t.prototype.zc = function(t) {
                        if (null !== this.Jt && !this.Jt.Qt() && this._i.Bc().I().handleScale.axisPressedMouseMove.price) {
                            var e = this._i.Bc().ct(),
                                i = this._i.Gc();
                            this.xc = !0, e.Jo(i, this.Jt, t.oc)
                        }
                    }, t.prototype.Pc = function(t) {
                        if (null !== this.Jt && this._i.Bc().I().handleScale.axisPressedMouseMove.price) {
                            var e = this._i.Bc().ct(),
                                i = this._i.Gc(),
                                s = this.Jt;
                            e.Go(i, s, t.oc)
                        }
                    }, t.prototype.Fc = function() {
                        if (null !== this.Jt && this._i.Bc().I().handleScale.axisPressedMouseMove.price) {
                            var t = this._i.Bc().ct(),
                                e = this._i.Gc(),
                                i = this.Jt;
                            this.xc && (this.xc = !1, t.Qo(e, i))
                        }
                    }, t.prototype.Ic = function(t) {
                        if (null !== this.Jt && this._i.Bc().I().handleScale.axisPressedMouseMove.price) {
                            var e = this._i.Bc().ct(),
                                i = this._i.Gc();
                            this.xc = !1, e.Qo(i, this.Jt)
                        }
                    }, t.prototype.Wc = function(t) {
                        this._i.Bc().I().handleScale.axisDoubleClickReset && this.Nu()
                    }, t.prototype.Rc = function(t) {
                        null !== this.Jt && (!this._i.Bc().ct().I().handleScale.axisPressedMouseMove.price || this.Jt.oh() || this.Jt.lh() || this.ev(1))
                    }, t.prototype.jc = function(t) {
                        this.ev(0)
                    }, t.prototype.Xc = function() {
                        var t = this,
                            e = [],
                            i = null === this.Jt ? void 0 : this.Jt;
                        return function(s) {
                            for (var r = 0; r < s.length; ++r)
                                for (var n = s[r].fi(t._i.Gc(), i), o = 0; o < n.length; o++) e.push(n[o])
                        }(this._i.Gc().Vh()), e
                    }, t.prototype.iv = function(t, e) {
                        var i = this;
                        if (null !== this.yc) {
                            var s = this.yc.ht,
                                r = this.yc.st;
                            W(t, e, (function() {
                                z(t, 0, 0, s, r, i.K())
                            }))
                        }
                    }, t.prototype.fu = function(t, e) {
                        if (null !== this.yc && null !== this.Jt && this.Jt.I().borderVisible) {
                            t.save(), t.fillStyle = this.S();
                            var i, s = Math.max(1, Math.floor(this.Kc().Dt * e));
                            i = this.Lc ? Math.floor(this.yc.ht * e) - s : 0, t.fillRect(i, 0, s, Math.ceil(this.yc.st * e)), t.restore()
                        }
                    }, t.prototype.nv = function(t, e) {
                        if (null !== this.yc && null !== this.Jt) {
                            var i = this.Jt.Ln();
                            t.save(), t.strokeStyle = this.S(), t.font = this.Yc(), t.fillStyle = this.S();
                            var s = this.Kc(),
                                r = this.Jt.I().borderVisible && this.Jt.I().drawTicks,
                                n = this.Lc ? Math.floor((this.yc.ht - s.Ct) * e - s.Dt * e) : Math.floor(s.Dt * e),
                                o = this.Lc ? Math.round(n - s.Et * e) : Math.round(n + s.Ct * e + s.Et * e),
                                a = this.Lc ? "right" : "left",
                                l = Math.max(1, Math.floor(e)),
                                h = Math.floor(.5 * e);
                            if (r) {
                                var c = Math.round(s.Ct * e);
                                t.beginPath();
                                for (var u = 0, d = i; u < d.length; u++) {
                                    var p = d[u];
                                    t.rect(n, Math.round(p.Dn * e) - h, c, l)
                                }
                                t.fill()
                            }
                            t.fillStyle = this.Hc();
                            for (var f = 0, g = i; f < g.length; f++) p = g[f], this.Sc.Mc(t, p.Tn, o, Math.round(p.Dn * e), a);
                            t.restore()
                        }
                    }, t.prototype.tv = function() {
                        if (null !== this.yc && null !== this.Jt) {
                            var t = this.yc.st / 2,
                                e = [],
                                i = this.Jt.Vh().slice(),
                                s = this._i.Gc(),
                                r = this.Kc();
                            this.Jt === s.Ci() && this._i.Gc().Vh().forEach((function(t) {
                                s.Au(t) && i.push(t)
                            }));
                            var n = this.Jt.Ah()[0],
                                o = this.Jt;
                            i.forEach((function(i) {
                                var r = i.fi(s, o);
                                r.forEach((function(t) {
                                    t.Yt(null), t.Kt() && e.push(t)
                                })), n === i && r.length > 0 && (t = r[0].Pt())
                            }));
                            var a = e.filter((function(e) {
                                    return e.Pt() <= t
                                })),
                                l = e.filter((function(e) {
                                    return e.Pt() > t
                                }));
                            if (a.sort((function(t, e) {
                                    return e.Pt() - t.Pt()
                                })), a.length && l.length && l.push(a[0]), l.sort((function(t, e) {
                                    return t.Pt() - e.Pt()
                                })), e.forEach((function(t) {
                                    return t.Yt(t.Pt())
                                })), this.Jt.I().alignLabels) {
                                for (var h = 1; h < a.length; h++) {
                                    var c = a[h],
                                        u = (p = a[h - 1]).wt(r, !1);
                                    c.Pt() > (f = p.Ht()) - u && c.Yt(f - u)
                                }
                                for (var d = 1; d < l.length; d++) {
                                    var p, f;
                                    c = l[d], u = (p = l[d - 1]).wt(r, !0), c.Pt() < (f = p.Ht()) + u && c.Yt(f + u)
                                }
                            }
                        }
                    }, t.prototype.hv = function(t, e) {
                        var i = this;
                        if (null !== this.yc) {
                            t.save();
                            var s = this.yc,
                                r = this.Xc(),
                                n = this.Kc(),
                                o = this.Lc ? "right" : "left";
                            r.forEach((function(r) {
                                if (r.$t()) {
                                    var a = r.W(g(i.Jt));
                                    t.save(), a.h(t, n, i.Nc, s.ht, o, e), t.restore()
                                }
                            })), t.restore()
                        }
                    }, t.prototype.sv = function(t, e) {
                        var i = this;
                        if (null !== this.yc && null !== this.Jt) {
                            t.save();
                            var s = this.yc,
                                r = this._i.Bc().ct(),
                                n = [],
                                o = this._i.Gc(),
                                a = r.Il().fi(o, this.Jt);
                            a.length && n.push(a);
                            var l = this.Kc(),
                                h = this.Lc ? "right" : "left";
                            n.forEach((function(r) {
                                r.forEach((function(r) {
                                    t.save(), r.W(g(i.Jt)).h(t, l, i.Nc, s.ht, h, e), t.restore()
                                }))
                            })), t.restore()
                        }
                    }, t.prototype.ev = function(t) {
                        this.Ac.style.cursor = 1 === t ? "ns-resize" : "default"
                    }, t.prototype.jn = function() {
                        var t = this,
                            e = this.$c();
                        if (this.Cc < e) {
                            var i = this._i.Bc();
                            null === this.kc && (this.kc = setTimeout((function() {
                                i && i.ct().Tl(), t.kc = null
                            }), 100))
                        }
                        this.Cc = e
                    }, t.prototype.Tc = function(t) {
                        this.Sc.rn(), this.Sc = new li(t.zt, t.et, t.ae)
                    }, t
                }(),
                ci = ii,
                ui = function() {
                    function t(t, e) {
                        var i = this;
                        this.yc = new Xe(0, 0), this.uv = null, this.av = null, this.ov = null, this.lv = !1, this.fv = new tt, this.cv = 0, this.vv = !1, this._v = null, this.dv = !1, this.wv = null, this.Dc = function() {
                            return i.Mv && i.hi().zr()
                        }, this.Ec = function() {
                            return i.Mv && i.hi().zr()
                        }, this.bv = t, this.Mv = e, this.Mv.ul().Zi(this.mv.bind(this), this, !0), this.gv = document.createElement("td"), this.gv.style.padding = "0", this.gv.style.position = "relative";
                        var s = document.createElement("div");
                        s.style.width = "100%", s.style.height = "100%", s.style.position = "relative", s.style.overflow = "hidden", this.pv = document.createElement("td"), this.pv.style.padding = "0",
                            this.yv = document.createElement("td"), this.yv.style.padding = "0", this.gv.appendChild(s), this.Vc = Ke(s, new Xe(16, 16)), this.Vc.subscribeCanvasConfigured(this.Dc);
                        var r = this.Vc.canvas;
                        r.style.position = "absolute", r.style.zIndex = "1", r.style.left = "0", r.style.top = "0", this.Oc = Ke(s, new Xe(16, 16)), this.Oc.subscribeCanvasConfigured(this.Ec);
                        var n = this.Oc.canvas;
                        n.style.position = "absolute", n.style.zIndex = "2", n.style.left = "0", n.style.top = "0", this.kv = document.createElement("tr"), this.kv.appendChild(this.pv), this.kv.appendChild(this.gv), this.kv.appendChild(this.yv), this.xv();
                        var o = this.Bc().I().handleScroll;
                        this.Uc = new si(this.Oc.canvas, this, {
                            Pf: !o.vertTouchDrag,
                            Ff: !o.horzTouchDrag
                        })
                    }
                    return t.prototype.rn = function() {
                            null !== this.uv && this.uv.rn(), null !== this.av && this.av.rn(), this.Oc.unsubscribeCanvasConfigured(this.Ec), this.Oc.destroy(), this.Vc.unsubscribeCanvasConfigured(this.Dc), this.Vc.destroy(), null !== this.Mv && this.Mv.ul().nn(this), this.Uc.rn()
                        }, t.prototype.Gc = function() {
                            return g(this.Mv)
                        }, t.prototype.Nv = function(e) {
                            null !== this.Mv && this.Mv.ul().nn(this), this.Mv = e, null !== this.Mv && this.Mv.ul().Zi(t.prototype.mv.bind(this), this, !0), this.xv()
                        }, t.prototype.Bc = function() {
                            return this.bv
                        }, t.prototype.qc = function() {
                            return this.kv
                        }, t.prototype.xv = function() {
                            if (null !== this.Mv && (this.Sv(), 0 !== this.hi().O().length)) {
                                if (null !== this.uv) {
                                    var t = this.Mv.Xo();
                                    this.uv.li(g(t))
                                }
                                if (null !== this.av) {
                                    var e = this.Mv.Zo();
                                    this.av.li(g(e))
                                }
                            }
                        }, t.prototype.jo = function() {
                            return null !== this.Mv ? this.Mv.jo() : 0
                        }, t.prototype.Uo = function(t) {
                            this.Mv && this.Mv.Uo(t)
                        }, t.prototype.Lf = function(t) {
                            if (this.Mv) {
                                var e = t.ac,
                                    i = t.oc;
                                ei || this.Cv(e, i)
                            }
                        }, t.prototype.Kf = function(t) {
                            if (this.vv = !1, this.dv = null !== this._v, this.Mv) {
                                if (document.activeElement !== document.body && document.activeElement !== document.documentElement) g(document.activeElement).blur();
                                else {
                                    var e = document.getSelection();
                                    null !== e && e.removeAllRanges()
                                }
                                var i = this.hi();
                                if (!this.Mv.Ci().Qt() && !i.U().Qt()) {
                                    if (null !== this._v) {
                                        var s = i.Il();
                                        this.wv = {
                                            x: s.Mt(),
                                            y: s.bt()
                                        }, this._v = {
                                            x: t.ac,
                                            y: t.oc
                                        }
                                    }
                                    ei || this.Cv(t.ac, t.oc)
                                }
                            }
                        }, t.prototype.Af = function(t) {
                            if (this.Mv) {
                                var e = t.ac,
                                    i = t.oc;
                                if (this.Dv() && this.Tv(), !ei) {
                                    this.Cv(e, i);
                                    var s = this.Wu(e, i);
                                    this.hi().Al(s && {
                                        Vl: s.Vl,
                                        Bv: s.Bv
                                    }), null !== s && void 0 !== s._c.Ev && s._c.Ev(e, i)
                                }
                            }
                        }, t.prototype.qf = function(t) {
                            if (null !== this.Mv) {
                                var e = t.ac,
                                    i = t.oc,
                                    s = this.Wu(e, i);
                                if (null !== s && void 0 !== s._c.Lv && s._c.Lv(e, i), this.fv.sn()) {
                                    var r = this.hi().Il().j();
                                    this.fv.hn(r, {
                                        x: e,
                                        y: i
                                    })
                                }
                                this.Av()
                            }
                        }, t.prototype.If = function(t) {
                            if (null !== this.Mv) {
                                var e = this.hi(),
                                    i = t.ac,
                                    s = t.oc;
                                if (null !== this._v) {
                                    this.dv = !1;
                                    var r = g(this.wv),
                                        n = r.x + (i - this._v.x),
                                        o = r.y + (s - this._v.y);
                                    this.Cv(n, o)
                                } else this.Dv() || this.Cv(i, s);
                                if (!e.U().Qt()) {
                                    var a = this.bv.I().handleScroll;
                                    if (a.pressedMouseMove && "touch" !== t.pe || (a.horzTouchDrag || a.vertTouchDrag) && "mouse" !== t.pe) {
                                        var l = this.Mv.Ci();
                                        null !== this.ov || this.Vv() || (this.ov = {
                                            x: t.sc,
                                            y: t.rc
                                        }), null === this.ov || this.ov.x === t.sc && this.ov.y === t.rc || this.lv || (l.Qt() || e.tl(this.Mv, l, t.oc), e.Yl(t.ac), this.lv = !0), this.lv && (l.Qt() || e.il(this.Mv, l, t.oc), e.Kl(t.ac))
                                    }
                                }
                            }
                        }, t.prototype.jf = function(t) {
                            if (null !== this.Mv) {
                                this.vv = !1;
                                var e = this.hi();
                                if (this.lv) {
                                    var i = this.Mv.Ci();
                                    e.nl(this.Mv, i), e.$l(), this.ov = null, this.lv = !1
                                }
                            }
                        }, t.prototype.hc = function(t) {
                            if (this.vv = !0, null === this._v && ci) {
                                var e = {
                                    x: t.ac,
                                    y: t.oc
                                };
                                this.Ov(e, e)
                            }
                        }, t.prototype.nc = function(t) {
                            null !== this.Mv && (this.Mv.ct().Al(null), ii || this.Tv())
                        }, t.prototype.zv = function() {
                            return this.fv
                        }, t.prototype.Zf = function() {
                            this.cv = 1
                        }, t.prototype.Jf = function(t, e) {
                            if (this.bv.I().handleScale.pinch) {
                                var i = 5 * (e - this.cv);
                                this.cv = e, this.hi().ql(t.g, i)
                            }
                        }, t.prototype.Wu = function(t, e) {
                            var i = this.Mv;
                            if (null === i) return null;
                            for (var s = 0, r = i.Vh(); s < r.length; s++) {
                                var n = r[s],
                                    o = this.Pv(n.ci(i), t, e);
                                if (null !== o) return {
                                    Vl: n,
                                    _c: o._c,
                                    Bv: o.Bv
                                }
                            }
                            return null
                        }, t.prototype.Fv = function(t, e) {
                            g("left" === e ? this.uv : this.av).Zc(new Xe(t, this.yc.st))
                        }, t.prototype.Iv = function() {
                            return this.yc
                        }, t.prototype.Zc = function(t) {
                            if (t.ht < 0 || t.st < 0) throw new Error("Try to set invalid size to PaneWidget " + JSON.stringify(t));
                            this.yc.an(t) || (this.yc = t, this.Vc.resizeCanvas({
                                width: t.ht,
                                height: t.st
                            }), this.Oc.resizeCanvas({
                                width: t.ht,
                                height: t.st
                            }), this.gv.style.width = t.ht + "px", this.gv.style.height = t.st + "px")
                        }, t.prototype.Wv = function() {
                            var t = g(this.Mv);
                            t.$o(t.Xo()), t.$o(t.Zo());
                            for (var e = 0, i = t.Ah(); e < i.length; e++) {
                                var s = i[e];
                                if (t.Au(s)) {
                                    var r = s.Z();
                                    null !== r && t.$o(r), s.Wi()
                                }
                            }
                        }, t.prototype.rv = function() {
                            return this.Vc.canvas
                        }, t.prototype.Qc = function(t) {
                            if (0 !== t && null !== this.Mv) {
                                if (t > 1 && this.Wv(), null !== this.uv && this.uv.Qc(t), null !== this.av && this.av.Qc(t), 1 !== t) {
                                    var e = Qe(this.Vc.canvas);
                                    e.save(), this.iv(e, this.Rv(), this.Vc.pixelRatio), this.Mv && (this.jv(e, this.Vc.pixelRatio), this.Uv(e, this.Vc.pixelRatio), this.qv(e, this.Vc.pixelRatio)), e.restore()
                                }
                                var i = Qe(this.Oc.canvas);
                                i.clearRect(0, 0, Math.ceil(this.yc.ht * this.Oc.pixelRatio), Math.ceil(this.yc.st * this.Oc.pixelRatio)), this.Hv(i, this.Oc.pixelRatio)
                            }
                        }, t.prototype.Yv = function() {
                            return this.uv
                        }, t.prototype.Kv = function() {
                            return this.av
                        }, t.prototype.Rv = function() {
                            return this.bv.I().layout.backgroundColor
                        }, t.prototype.mv = function() {
                            null !== this.Mv && this.Mv.ul().nn(this), this.Mv = null
                        }, t.prototype.iv = function(t, e, i) {
                            var s = this;
                            W(t, i, (function() {
                                z(t, 0, 0, s.yc.ht, s.yc.st, e)
                            }))
                        }, t.prototype.jv = function(t, e) {
                            var i = g(this.Mv),
                                s = i.al().To().W(i.wt(), i.dt());
                            null !== s && (t.save(), s.h(t, e, !1), t.restore())
                        }, t.prototype.Uv = function(t, e) {
                            var i = this.hi().Fl();
                            this.$v(i, t, e), this.Xv(i, t, e)
                        }, t.prototype.Hv = function(t, e) {
                            this.Xv(this.hi().Il(), t, e)
                        }, t.prototype.qv = function(t, e) {
                            for (var i = g(this.Mv).Vh(), s = 0, r = i; s < r.length; s++) {
                                var n = r[s];
                                this.$v(n, t, e)
                            }
                            for (var o = 0, a = i; o < a.length; o++) n = a[o], this.Xv(n, t, e)
                        }, t.prototype.Xv = function(t, e, i) {
                            for (var s = g(this.Mv), r = t.ci(s), n = s.wt(), o = s.dt(), a = s.ct().Ll(), l = null !== a && a.Vl === t, h = null !== a && l && void 0 !== a.Bv ? a.Bv.Ru : void 0, c = 0, u = r; c < u.length; c++) {
                                var d = u[c].W(n, o);
                                null !== d && (e.save(), d.h(e, i, l, h), e.restore())
                            }
                        }, t.prototype.$v = function(t, e, i) {
                            for (var s = g(this.Mv), r = t.ci(s), n = s.wt(), o = s.dt(), a = s.ct().Ll(), l = null !== a && a.Vl === t, h = null !== a && l && void 0 !== a.Bv ? a.Bv.Ru : void 0, c = 0, u = r; c < u.length; c++) {
                                var d = u[c].W(n, o);
                                null !== d && void 0 !== d.o && (e.save(), d.o(e, i, l, h), e.restore())
                            }
                        },
                        t.prototype.Pv = function(t, e, i) {
                            for (var s = 0, r = t; s < r.length; s++) {
                                var n = r[s],
                                    o = n.W(this.yc.st, this.yc.ht);
                                if (null !== o && o.Wu) {
                                    var a = o.Wu(e, i);
                                    if (null !== a) return {
                                        _c: n,
                                        Bv: a
                                    }
                                }
                            }
                            return null
                        }, t.prototype.Sv = function() {
                            if (null !== this.Mv) {
                                var t = this.bv;
                                t.I().leftPriceScale.visible || null === this.uv || (this.pv.removeChild(this.uv.qc()), this.uv.rn(), this.uv = null), t.I().rightPriceScale.visible || null === this.av || (this.yv.removeChild(this.av.qc()), this.av.rn(), this.av = null);
                                var e = t.ct().if();
                                t.I().leftPriceScale.visible && null === this.uv && (this.uv = new hi(this, t.I().layout, e, "left"), this.pv.appendChild(this.uv.qc())), t.I().rightPriceScale.visible && null === this.av && (this.av = new hi(this, t.I().layout, e, "right"), this.yv.appendChild(this.av.qc()))
                            }
                        }, t.prototype.Dv = function() {
                            return ci && null === this._v
                        }, t.prototype.Vv = function() {
                            return ci && this.vv || null !== this._v
                        }, t.prototype.Zv = function(t) {
                            return Math.max(0, Math.min(t, this.yc.ht - 1))
                        }, t.prototype.Jv = function(t) {
                            return Math.max(0, Math.min(t, this.yc.st - 1))
                        }, t.prototype.Cv = function(t, e) {
                            this.hi().Jl(this.Zv(t), this.Jv(e), g(this.Mv))
                        }, t.prototype.Tv = function() {
                            this.hi().Ql()
                        }, t.prototype.Av = function() {
                            this.dv && (this._v = null, this.Tv())
                        }, t.prototype.Ov = function(t, e) {
                            this._v = t, this.dv = !1, this.Cv(e.x, e.y);
                            var i = this.hi().Il();
                            this.wv = {
                                x: i.Mt(),
                                y: i.bt()
                            }
                        }, t.prototype.hi = function() {
                            return this.bv.ct()
                        }, t
                }(),
                di = function() {
                    function t(t, e, i, s) {
                        var r = this;
                        this.B = !0, this.yc = new Xe(0, 0), this.Dc = function() {
                            return r.Qc(3)
                        }, this.Lc = "left" === t, this.Nl = i.if, this.xi = e, this.Gv = s, this.Ac = document.createElement("div"), this.Ac.style.width = "25px", this.Ac.style.height = "100%", this.Ac.style.overflow = "hidden", this.Vc = Ke(this.Ac, new Xe(16, 16)), this.Vc.subscribeCanvasConfigured(this.Dc)
                    }
                    return t.prototype.rn = function() {
                        this.Vc.unsubscribeCanvasConfigured(this.Dc), this.Vc.destroy()
                    }, t.prototype.qc = function() {
                        return this.Ac
                    }, t.prototype.Iv = function() {
                        return this.yc
                    }, t.prototype.Zc = function(t) {
                        if (t.ht < 0 || t.st < 0) throw new Error("Try to set invalid size to PriceAxisStub " + JSON.stringify(t));
                        this.yc.an(t) || (this.yc = t, this.Vc.resizeCanvas({
                            width: t.ht,
                            height: t.st
                        }), this.Ac.style.width = t.ht + "px", this.Ac.style.minWidth = t.ht + "px", this.Ac.style.height = t.st + "px", this.B = !0)
                    }, t.prototype.Qc = function(t) {
                        if ((!(t < 3) || this.B) && 0 !== this.yc.ht && 0 !== this.yc.st) {
                            this.B = !1;
                            var e = Qe(this.Vc.canvas);
                            this.iv(e, this.Vc.pixelRatio), this.fu(e, this.Vc.pixelRatio)
                        }
                    }, t.prototype.rv = function() {
                        return this.Vc.canvas
                    }, t.prototype.fu = function(t, e) {
                        if (this.Gv()) {
                            var i = this.yc.ht;
                            t.save(), t.fillStyle = this.xi.timeScale.borderColor;
                            var s = Math.floor(this.Nl.I().Dt * e),
                                r = this.Lc ? Math.round(i * e) - s : 0;
                            t.fillRect(r, 0, s, s), t.restore()
                        }
                    }, t.prototype.iv = function(t, e) {
                        var i = this;
                        W(t, e, (function() {
                            z(t, 0, 0, i.yc.ht, i.yc.st, i.xi.layout.backgroundColor)
                        }))
                    }, t
                }();

            function pi(t, e) {
                return t.Fs > e.Fs ? t : e
            }
            var fi = function() {
                    function t(t) {
                        var e = this;
                        this.Qv = null, this.t_ = null, this.ue = null, this.i_ = !1, this.yc = new Xe(0, 0), this.Dc = function() {
                                return e.bv.ct().zr()
                            }, this.Ec = function() {
                                return e.bv.ct().zr()
                            }, this.bv = t, this.xi = t.I().layout, this.n_ = document.createElement("tr"),
                            this.h_ = document.createElement("td"), this.h_.style.padding = "0", this.s_ = document.createElement("td"), this.s_.style.padding = "0", this.Ac = document.createElement("td"), this.Ac.style.height = "25px", this.Ac.style.padding = "0", this.r_ = document.createElement("div"), this.r_.style.width = "100%", this.r_.style.height = "100%", this.r_.style.position = "relative", this.r_.style.overflow = "hidden", this.Ac.appendChild(this.r_), this.Vc = Ke(this.r_, new Xe(16, 16)), this.Vc.subscribeCanvasConfigured(this.Dc);
                        var i = this.Vc.canvas;
                        i.style.position = "absolute", i.style.zIndex = "1", i.style.left = "0", i.style.top = "0", this.Oc = Ke(this.r_, new Xe(16, 16)), this.Oc.subscribeCanvasConfigured(this.Ec);
                        var s = this.Oc.canvas;
                        s.style.position = "absolute", s.style.zIndex = "2", s.style.left = "0", s.style.top = "0", this.n_.appendChild(this.h_), this.n_.appendChild(this.Ac), this.n_.appendChild(this.s_), this.e_(), this.bv.ct().Ro().Zi(this.e_.bind(this), this), this.Uc = new si(this.Oc.canvas, this, {
                            Pf: !0,
                            Ff: !1
                        })
                    }
                    return t.prototype.rn = function() {
                            this.Uc.rn(), null !== this.Qv && this.Qv.rn(), null !== this.t_ && this.t_.rn(), this.Oc.unsubscribeCanvasConfigured(this.Ec), this.Oc.destroy(), this.Vc.unsubscribeCanvasConfigured(this.Dc), this.Vc.destroy()
                        }, t.prototype.qc = function() {
                            return this.n_
                        }, t.prototype.u_ = function() {
                            return this.Qv
                        }, t.prototype.a_ = function() {
                            return this.t_
                        }, t.prototype.Kf = function(t) {
                            if (!this.i_) {
                                this.i_ = !0;
                                var e = this.bv.ct();
                                !e.U().Qt() && this.bv.I().handleScale.axisPressedMouseMove.time && e.Ul(t.ac)
                            }
                        }, t.prototype.$f = function() {
                            var t = this.bv.ct();
                            !t.U().Qt() && this.i_ && (this.i_ = !1, this.bv.I().handleScale.axisPressedMouseMove.time && t.Zl())
                        }, t.prototype.If = function(t) {
                            var e = this.bv.ct();
                            !e.U().Qt() && this.bv.I().handleScale.axisPressedMouseMove.time && e.Xl(t.ac)
                        }, t.prototype.jf = function(t) {
                            this.i_ = !1;
                            var e = this.bv.ct();
                            e.U().Qt() && !this.bv.I().handleScale.axisPressedMouseMove.time || e.Zl()
                        }, t.prototype.Uf = function() {
                            this.bv.I().handleScale.axisDoubleClickReset && this.bv.ct().ke()
                        }, t.prototype.Lf = function(t) {
                            this.bv.ct().I().handleScale.axisPressedMouseMove.time && this.ev(1)
                        }, t.prototype.nc = function(t) {
                            this.ev(0)
                        }, t.prototype.Iv = function() {
                            return this.yc
                        }, t.prototype.o_ = function(t, e, i) {
                            this.yc && this.yc.an(t) || (this.yc = t, this.Vc.resizeCanvas({
                                width: t.ht,
                                height: t.st
                            }), this.Oc.resizeCanvas({
                                width: t.ht,
                                height: t.st
                            }), this.Ac.style.width = t.ht + "px", this.Ac.style.height = t.st + "px"), null !== this.Qv && this.Qv.Zc(new Xe(e, t.st)), null !== this.t_ && this.t_.Zc(new Xe(i, t.st))
                        }, t.prototype.l_ = function() {
                            var t = this.f_();
                            return Math.ceil(t.Dt + t.Ct + t.zt + t.Tt + t.Bt)
                        }, t.prototype.V = function() {
                            this.bv.ct().U().Ln()
                        }, t.prototype.rv = function() {
                            return this.Vc.canvas
                        }, t.prototype.Qc = function(t) {
                            if (0 !== t) {
                                if (1 !== t) {
                                    var e = Qe(this.Vc.canvas);
                                    this.iv(e, this.Vc.pixelRatio), this.fu(e, this.Vc.pixelRatio), this.nv(e, this.Vc.pixelRatio), null !== this.Qv && this.Qv.Qc(t), null !== this.t_ && this.t_.Qc(t)
                                }
                                var i = Qe(this.Oc.canvas),
                                    s = this.Oc.pixelRatio;
                                i.clearRect(0, 0, Math.ceil(this.yc.ht * s), Math.ceil(this.yc.st * s)), this.c_([this.bv.ct().Il()], i, s)
                            }
                        }, t.prototype.iv = function(t, e) {
                            var i = this;
                            W(t, e, (function() {
                                z(t, 0, 0, i.yc.ht, i.yc.st, i.Rv())
                            }))
                        },
                        t.prototype.fu = function(t, e) {
                            if (this.bv.I().timeScale.borderVisible) {
                                t.save(), t.fillStyle = this.v_();
                                var i = Math.max(1, Math.floor(this.f_().Dt * e));
                                t.fillRect(0, 0, Math.ceil(this.yc.ht * e), i), t.restore()
                            }
                        }, t.prototype.nv = function(t, e) {
                            var i = this,
                                s = this.bv.ct().U().Ln();
                            if (s && 0 !== s.length) {
                                var r = s.reduce(pi, s[0]).Fs;
                                r > 30 && r < 40 && (r = 30), t.save(), t.strokeStyle = this.v_();
                                var n = this.f_(),
                                    o = n.Dt + n.Ct + n.Tt + n.zt - n.Ot;
                                t.textAlign = "center", t.fillStyle = this.v_();
                                var a = Math.floor(this.f_().Dt * e),
                                    l = Math.max(1, Math.floor(e)),
                                    h = Math.floor(.5 * e);
                                if (this.bv.ct().U().I().borderVisible) {
                                    t.beginPath();
                                    for (var c = Math.round(n.Ct * e), u = s.length; u--;) {
                                        var d = Math.round(s[u].Dn * e);
                                        t.rect(d - h, a, l, c)
                                    }
                                    t.fill()
                                }
                                t.fillStyle = this.fe(), W(t, e, (function() {
                                    t.font = i.__();
                                    for (var e = 0, n = s; e < n.length; e++)(h = n[e]).Fs < r && t.fillText(h.Tn, h.Dn, o);
                                    t.font = i.d_();
                                    for (var a = 0, l = s; a < l.length; a++) {
                                        var h;
                                        (h = l[a]).Fs >= r && t.fillText(h.Tn, h.Dn, o)
                                    }
                                }))
                            }
                        }, t.prototype.c_ = function(t, e, i) {
                            for (var s = this.f_(), r = 0, n = t; r < n.length; r++)
                                for (var o = 0, a = n[r].vi(); o < a.length; o++) {
                                    var l = a[o];
                                    e.save(), l.W().h(e, s, i), e.restore()
                                }
                        }, t.prototype.Rv = function() {
                            return this.xi.backgroundColor
                        }, t.prototype.v_ = function() {
                            return this.bv.I().timeScale.borderColor
                        }, t.prototype.fe = function() {
                            return this.xi.textColor
                        }, t.prototype.oe = function() {
                            return this.xi.fontSize
                        }, t.prototype.__ = function() {
                            return Ot(this.oe(), this.xi.fontFamily)
                        }, t.prototype.d_ = function() {
                            return Ot(this.oe(), this.xi.fontFamily, "bold")
                        }, t.prototype.f_ = function() {
                            null === this.ue && (this.ue = {
                                Dt: 1,
                                Ot: NaN,
                                Tt: NaN,
                                Bt: NaN,
                                ni: NaN,
                                Ct: 3,
                                zt: NaN,
                                xt: "",
                                ii: new ue
                            });
                            var t = this.ue,
                                e = this.__();
                            if (t.xt !== e) {
                                var i = this.oe();
                                t.zt = i, t.xt = e, t.Tt = Math.ceil(i / 2.5), t.Bt = t.Tt, t.ni = Math.ceil(i / 2), t.Ot = Math.round(this.oe() / 5), t.ii.Nu()
                            }
                            return this.ue
                        }, t.prototype.ev = function(t) {
                            this.Ac.style.cursor = 1 === t ? "ew-resize" : "default"
                        }, t.prototype.e_ = function() {
                            var t = this.bv.ct(),
                                e = t.I();
                            e.leftPriceScale.visible || null === this.Qv || (this.h_.removeChild(this.Qv.qc()), this.Qv.rn(), this.Qv = null), e.rightPriceScale.visible || null === this.t_ || (this.s_.removeChild(this.t_.qc()), this.t_.rn(), this.t_ = null);
                            var i = {
                                if: this.bv.ct().if()
                            };
                            if (e.leftPriceScale.visible && null === this.Qv) {
                                var s = function() {
                                    return e.leftPriceScale.borderVisible && t.U().I().borderVisible
                                };
                                this.Qv = new di("left", this.bv.I(), i, s), this.h_.appendChild(this.Qv.qc())
                            }
                            e.rightPriceScale.visible && null === this.t_ && (s = function() {
                                return e.rightPriceScale.borderVisible && t.U().I().borderVisible
                            }, this.t_ = new di("right", this.bv.I(), i, s), this.s_.appendChild(this.t_.qc()))
                        }, t
                }(),
                gi = function() {
                    function t(t, e) {
                        var i;
                        this.w_ = [], this.M_ = 0, this.An = 0, this.Ys = 0, this.b_ = 0, this.m_ = 0, this.g_ = null, this.p_ = !1, this.fv = new tt, this.kl = new tt, this.xi = e, this.n_ = document.createElement("div"), this.n_.classList.add("tv-lightweight-charts"), this.n_.style.overflow = "hidden", this.n_.style.width = "100%", this.n_.style.height = "100%", (i = this.n_).style.userSelect = "none", i.style.webkitUserSelect = "none", i.style.msUserSelect = "none", i.style.MozUserSelect = "none", i.style.webkitTapHighlightColor = "transparent", this.y_ = document.createElement("table"),
                            this.y_.setAttribute("cellspacing", "0"), this.n_.appendChild(this.y_), this.k_ = this.x_.bind(this), this.n_.addEventListener("wheel", this.k_, {
                                passive: !1
                            }), this.hi = new Ge(this.xl.bind(this), this.xi), this.ct().Wl().Zi(this.N_.bind(this), this), this.S_ = new fi(this), this.y_.appendChild(this.S_.qc());
                        var s = this.xi.width,
                            r = this.xi.height;
                        if (0 === s || 0 === r) {
                            var n = t.getBoundingClientRect();
                            0 === s && (s = Math.floor(n.width), s -= s % 2), 0 === r && (r = Math.floor(n.height), r -= r % 2)
                        }
                        this.C_(s, r), this.D_(), t.appendChild(this.n_), this.T_(), this.hi.U().Xr().Zi(this.hi.Tl.bind(this.hi), this), this.hi.Ro().Zi(this.hi.Tl.bind(this.hi), this)
                    }
                    return t.prototype.ct = function() {
                        return this.hi
                    }, t.prototype.I = function() {
                        return this.xi
                    }, t.prototype.B_ = function() {
                        return this.w_
                    }, t.prototype.rn = function() {
                        this.n_.removeEventListener("wheel", this.k_), 0 !== this.M_ && window.cancelAnimationFrame(this.M_), this.hi.Wl().nn(this), this.hi.U().Xr().nn(this), this.hi.Ro().nn(this), this.hi.rn();
                        for (var t = 0, e = this.w_; t < e.length; t++) {
                            var i = e[t];
                            this.y_.removeChild(i.qc()), i.zv().nn(this), i.rn()
                        }
                        this.w_ = [], g(this.S_).rn(), null !== this.n_.parentElement && this.n_.parentElement.removeChild(this.n_), this.kl.rn(), this.fv.rn()
                    }, t.prototype.C_ = function(t, e, i) {
                        if (void 0 === i && (i = !1), this.An !== e || this.Ys !== t) {
                            this.An = e, this.Ys = t;
                            var s = e + "px",
                                r = t + "px";
                            g(this.n_).style.height = s, g(this.n_).style.width = r, this.y_.style.height = s, this.y_.style.width = r, i ? this.E_(new zt(3)) : this.hi.Tl()
                        }
                    }, t.prototype.Qc = function(t) {
                        void 0 === t && (t = new zt(3));
                        for (var e = 0; e < this.w_.length; e++) this.w_[e].Qc(t.me(e).Me);
                        this.S_.Qc(t.be())
                    }, t.prototype.hh = function(t) {
                        this.hi.hh(t), this.T_();
                        var e = t.width || this.Ys,
                            i = t.height || this.An;
                        this.C_(e, i)
                    }, t.prototype.zv = function() {
                        return this.fv
                    }, t.prototype.Wl = function() {
                        return this.kl
                    }, t.prototype.L_ = function() {
                        var t = this;
                        null !== this.g_ && (this.E_(this.g_), this.g_ = null);
                        var e = this.w_[0],
                            i = Ze(document, new Xe(this.Ys, this.An)),
                            s = Qe(i),
                            r = Je(i);
                        return W(s, r, (function() {
                            var i = 0,
                                r = 0,
                                n = function(e) {
                                    for (var n = 0; n < t.w_.length; n++) {
                                        var o = t.w_[n],
                                            a = o.Iv().st,
                                            l = g("left" === e ? o.Yv() : o.Kv()),
                                            h = l.rv();
                                        s.drawImage(h, i, r, l.Jc(), a), r += a
                                    }
                                };
                            t.A_() && (n("left"), i = g(e.Yv()).Jc()), r = 0;
                            for (var o = 0; o < t.w_.length; o++) {
                                var a = t.w_[o],
                                    l = a.Iv(),
                                    h = a.rv();
                                s.drawImage(h, i, r, l.ht, l.st), r += l.st
                            }
                            i += e.Iv().ht, t.V_() && (r = 0, n("right"));
                            var c = function(e) {
                                var n = g("left" === e ? t.S_.u_() : t.S_.a_()),
                                    o = n.Iv(),
                                    a = n.rv();
                                s.drawImage(a, i, r, o.ht, o.st)
                            };
                            if (t.xi.timeScale.visible) {
                                i = 0, t.A_() && (c("left"), i = g(e.Yv()).Jc());
                                var u = t.S_.Iv();
                                h = t.S_.rv(), s.drawImage(h, i, r, u.ht, u.st), t.V_() && (i = e.Iv().ht, c("right"), s.restore())
                            }
                        })), i
                    }, t.prototype.O_ = function(t) {
                        return "none" === t || "left" === t && !this.A_() || "right" === t && !this.V_() || 0 === this.w_.length ? 0 : g("left" === t ? this.w_[0].Yv() : this.w_[0].Kv()).Jc()
                    }, t.prototype.z_ = function() {
                        for (var t = 0, e = 0, i = 0, s = 0, r = this.w_; s < r.length; s++) {
                            var n = r[s];
                            this.A_() && (e = Math.max(e, g(n.Yv()).$c())), this.V_() && (i = Math.max(i, g(n.Kv()).$c())), t += n.jo()
                        }
                        var o = this.Ys,
                            a = this.An,
                            l = Math.max(o - e - i, 0),
                            h = this.xi.timeScale.visible ? this.S_.l_() : 0;
                        h % 2 && (h += 1);
                        for (var c = 0 + h, u = a < c ? 0 : a - c, d = u / t, p = 0, f = 0; f < this.w_.length; ++f) {
                            (n = this.w_[f]).Nv(this.hi.Pl()[f]);
                            var m, _;
                            _ = f === this.w_.length - 1 ? u - p : Math.round(n.jo() * d), p += m = Math.max(_, 2), n.Zc(new Xe(l, m)), this.A_() && n.Fv(e, "left"), this.V_() && n.Fv(i, "right"), n.Gc() && this.hi.Rl(n.Gc(), m)
                        }
                        this.S_.o_(new Xe(l, h), e, i), this.hi.Cr(l), this.b_ !== e && (this.b_ = e), this.m_ !== i && (this.m_ = i)
                    }, t.prototype.x_ = function(t) {
                        var e = t.deltaX / 100,
                            i = -t.deltaY / 100;
                        if (0 !== e && this.xi.handleScroll.mouseWheel || 0 !== i && this.xi.handleScale.mouseWheel) {
                            switch (t.cancelable && t.preventDefault(), t.deltaMode) {
                                case t.DOM_DELTA_PAGE:
                                    e *= 120, i *= 120;
                                    break;
                                case t.DOM_DELTA_LINE:
                                    e *= 32, i *= 32
                            }
                            if (0 !== i && this.xi.handleScale.mouseWheel) {
                                var s = Math.sign(i) * Math.min(1, Math.abs(i)),
                                    r = t.clientX - this.n_.getBoundingClientRect().left;
                                this.ct().ql(r, s)
                            }
                            0 !== e && this.xi.handleScroll.mouseWheel && this.ct().Hl(-80 * e)
                        }
                    }, t.prototype.E_ = function(t) {
                        var e = t.be();
                        if (3 === e && this.P_(), 3 === e || 2 === e) {
                            for (var i = this.hi.Pl(), s = 0; s < i.length; s++) t.me(s).fh && i[s].rl();
                            for (var r = t.xe(), n = 0, o = r; n < o.length; n++) {
                                var a = o[n];
                                this.Ne(a)
                            }
                            r.length > 0 && (this.hi.Or(), this.hi.ro(), this.hi.zr()), this.S_.V()
                        }
                        this.Qc(t)
                    }, t.prototype.Ne = function(t) {
                        var e = this.hi.U();
                        switch (t.pe) {
                            case 0:
                                e.Jr();
                                break;
                            case 1:
                                e.Gr(t.J);
                                break;
                            case 2:
                                e._r(t.J);
                                break;
                            case 3:
                                e.dr(t.J);
                                break;
                            case 4:
                                e.Wr()
                        }
                    }, t.prototype.xl = function(t) {
                        var e = this;
                        null !== this.g_ ? this.g_.vn(t) : this.g_ = t, this.p_ || (this.p_ = !0, this.M_ = window.requestAnimationFrame((function() {
                            e.p_ = !1, e.M_ = 0, null !== e.g_ && (e.E_(e.g_), e.g_ = null)
                        })))
                    }, t.prototype.P_ = function() {
                        this.D_()
                    }, t.prototype.D_ = function() {
                        for (var t = this.hi.Pl(), e = t.length, i = this.w_.length, s = e; s < i; s++) {
                            var r = f(this.w_.pop());
                            this.y_.removeChild(r.qc()), r.zv().nn(this), r.rn()
                        }
                        for (s = i; s < e; s++)(r = new ui(this, t[s])).zv().Zi(this.F_.bind(this), this), this.w_.push(r), this.y_.insertBefore(r.qc(), this.S_.qc());
                        for (s = 0; s < e; s++) {
                            var n = t[s];
                            (r = this.w_[s]).Gc() !== n ? r.Nv(n) : r.xv()
                        }
                        this.T_(), this.z_()
                    }, t.prototype.I_ = function(t, e) {
                        var i, s = new Map;
                        if (null !== t && this.hi.O().forEach((function(e) {
                                var i = e.ta(t);
                                null !== i && s.set(e, i)
                            })), null !== t) {
                            var r = this.hi.U().si(t);
                            null !== r && (i = r)
                        }
                        var n = this.ct().Ll(),
                            o = null !== n && n.Vl instanceof qe ? n.Vl : void 0,
                            a = null !== n && void 0 !== n.Bv ? n.Bv.Uu : void 0;
                        return {
                            P: i,
                            W_: e || void 0,
                            R_: o,
                            j_: s,
                            U_: a
                        }
                    }, t.prototype.F_ = function(t, e) {
                        var i = this;
                        this.fv.hn((function() {
                            return i.I_(t, e)
                        }))
                    }, t.prototype.N_ = function(t, e) {
                        var i = this;
                        this.kl.hn((function() {
                            return i.I_(t, e)
                        }))
                    }, t.prototype.T_ = function() {
                        var t = this.xi.timeScale.visible ? "" : "none";
                        this.S_.qc().style.display = t
                    }, t.prototype.A_ = function() {
                        return this.xi.leftPriceScale.visible
                    }, t.prototype.V_ = function() {
                        return this.xi.rightPriceScale.visible
                    }, t
                }();

            function mi(t, e, i) {
                var s = i.value,
                    r = {
                        Ps: e,
                        P: t,
                        J: [s, s, s, s]
                    };
                return "color" in i && void 0 !== i.color && (r.et = i.color), r
            }

            function _i(t, e, i) {
                return {
                    Ps: e,
                    P: t,
                    J: [i.open, i.high, i.low, i.close]
                }
            }

            function vi(t) {
                return void 0 !== t.J
            }

            function yi(t) {
                return function(e, i, s) {
                    return void 0 === (r = s).open && void 0 === r.value ? {
                        P: e,
                        Ps: i
                    } : t(e, i, s);
                    var r
                }
            }
            var bi = {
                Candlestick: yi(_i),
                Bar: yi(_i),
                Area: yi(mi),
                Histogram: yi(mi),
                Line: yi(mi)
            };

            function wi(t) {
                return bi[t]
            }

            function Si(t) {
                return 60 * t * 60 * 1e3
            }

            function Ci(t) {
                return 60 * t * 1e3
            }
            var xi = [{
                q_: 1,
                Fs: 20
            }, {
                q_: (1, 1e3),
                Fs: 19
            }, {
                q_: Ci(1),
                Fs: 20
            }, {
                q_: Ci(5),
                Fs: 21
            }, {
                q_: Ci(30),
                Fs: 22
            }, {
                q_: Si(1),
                Fs: 30
            }, {
                q_: Si(3),
                Fs: 31
            }, {
                q_: Si(6),
                Fs: 32
            }, {
                q_: Si(12),
                Fs: 33
            }];

            function Mi(t, e) {
                if (null !== e) {
                    var i = new Date(1e3 * e),
                        s = new Date(1e3 * t);
                    if (s.getUTCFullYear() !== i.getUTCFullYear()) return 70;
                    if (s.getUTCMonth() !== i.getUTCMonth()) return 60;
                    if (s.getUTCDate() !== i.getUTCDate()) return 50;
                    for (var r = xi.length - 1; r >= 0; --r)
                        if (Math.floor(i.getTime() / xi[r].q_) !== Math.floor(s.getTime() / xi[r].q_)) return xi[r].Fs
                }
                return 20
            }

            function ki(t) {
                if (!Ft(t)) throw new Error("time must be of type BusinessDay");
                var e = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
                return {
                    Cs: Math.round(e.getTime() / 1e3),
                    Ss: t
                }
            }

            function Ei(t) {
                if (!Bt(t)) throw new Error("time must be of type isUTCTimestamp");
                return {
                    Cs: t
                }
            }

            function Pi(t) {
                return 0 === t.length ? null : Ft(t[0].time) ? ki : Ei
            }

            function Ti(t) {
                return Bt(t) ? Ei(t) : Ft(t) ? ki(t) : ki(Ai(t))
            }

            function Ai(t) {
                var e = new Date(t);
                if (isNaN(e.getTime())) throw new Error("Invalid date string=" + t + ", expected format=yyyy-mm-dd");
                return {
                    day: e.getUTCDate(),
                    month: e.getUTCMonth() + 1,
                    year: e.getUTCFullYear()
                }
            }

            function Li(t) {
                b(t.time) && (t.time = Ai(t.time))
            }

            function Di(t) {
                return {
                    Ps: 0,
                    H_: new Map,
                    Fh: t
                }
            }
            var Ii = function() {
                    function t() {
                        this.Y_ = new Map, this.K_ = new Map, this.X_ = new Map, this.Z_ = []
                    }
                    return t.prototype.rn = function() {
                        this.Y_.clear(), this.K_.clear(), this.X_.clear(), this.Z_ = []
                    }, t.prototype.J_ = function(t, e) {
                        var i = this;
                        this.X_.has(t) && this.Y_.forEach((function(e) {
                            return e.H_.delete(t)
                        }));
                        var s = [];
                        if (0 !== e.length) {
                            ! function(t) {
                                t.forEach(Li)
                            }(e);
                            var r = g(Pi(e)),
                                n = wi(t.da());
                            s = e.map((function(e) {
                                var s = r(e.time),
                                    o = i.Y_.get(s.Cs);
                                void 0 === o && (o = Di(s), i.Y_.set(s.Cs, o));
                                var a = n(s, o.Ps, e);
                                return o.H_.set(t, a), a
                            }))
                        }
                        return this.G_(), this.Q_(t, s), this.td(t)
                    }, t.prototype.sf = function(t) {
                        return this.J_(t, [])
                    }, t.prototype.nd = function(t, e) {
                        Li(e);
                        var i = g(Pi([e]))(e.time),
                            s = this.X_.get(t);
                        if (void 0 !== s && i.Cs < s.Cs) throw new Error("Cannot update oldest data, last time=" + s.Cs + ", new time=" + i.Cs);
                        var r = this.Y_.get(i.Cs),
                            n = void 0 === r;
                        void 0 === r && (r = Di(i), this.Y_.set(i.Cs, r));
                        var o = wi(t.da())(i, r.Ps, e);
                        r.H_.set(t, o);
                        var a = this.hd(t, o);
                        if (!n) {
                            var l = new Map;
                            return null !== a && l.set(t, a), {
                                sd: l,
                                U: {
                                    Er: this.rd()
                                }
                            }
                        }
                        return this.td(t)
                    }, t.prototype.hd = function(t, e) {
                        var i = this.K_.get(t);
                        void 0 === i && (i = [], this.K_.set(t, i));
                        var s = 0 !== i.length ? i[i.length - 1] : null,
                            r = null;
                        return null === s || e.P.Cs > s.P.Cs ? vi(e) && (i.push(e), r = {
                            Tl: !1,
                            ed: [e]
                        }) : vi(e) ? (i[i.length - 1] = e, r = {
                            Tl: !1,
                            ed: [e]
                        }) : (i.splice(-1, 1), r = {
                            Tl: !0,
                            ed: i
                        }), this.X_.set(t, e.P), r
                    }, t.prototype.Q_ = function(t, e) {
                        0 !== e.length ? (this.K_.set(t, e.filter(vi)), this.X_.set(t, e[e.length - 1].P)) : (this.K_.delete(t), this.X_.delete(t))
                    }, t.prototype.G_ = function() {
                        var t = new Map;
                        this.Y_.forEach((function(e, i) {
                            e.H_.size > 0 && t.set(i, e)
                        })), this.Y_ = t
                    }, t.prototype.ud = function(t) {
                        for (var e = -1, i = 0; i < this.Z_.length && i < t.length; ++i) {
                            var s = this.Z_[i],
                                r = t[i];
                            if (s.P.Cs !== r.P.Cs) {
                                e = i;
                                break
                            }
                            r.zs = s.zs
                        }
                        if (-1 === e && this.Z_.length !== t.length && (e = Math.min(this.Z_.length, t.length)), -1 === e) return -1;
                        var n = function(e) {
                                var i = f(o.Y_.get(t[e].P.Cs));
                                i.Ps = e,
                                    i.H_.forEach((function(t) {
                                        t.Ps = e
                                    }))
                            },
                            o = this;
                        for (i = e; i < t.length; ++i) n(i);
                        return function(t, e) {
                            void 0 === e && (e = 0);
                            for (var i = 0 === e || 0 === t.length ? null : t[e - 1].P.Cs, s = 0, r = e; r < t.length; ++r) {
                                var n = t[r];
                                n.zs = Mi(n.P.Cs, i), s += n.P.Cs - (i || n.P.Cs), i = n.P.Cs
                            }
                            if (0 === e && t.length > 1) {
                                var o = Math.ceil(s / (t.length - 1)),
                                    a = t[0].P.Cs - o;
                                t[0].zs = Mi(t[0].P.Cs, a)
                            }
                        }(t, e), this.Z_ = t, e
                    }, t.prototype.rd = function() {
                        if (0 === this.K_.size) return null;
                        var t = 0;
                        return this.K_.forEach((function(e) {
                            0 !== e.length && (t = Math.max(t, e[e.length - 1].Ps))
                        })), t
                    }, t.prototype.td = function(t) {
                        var e = Array.from(this.Y_.values()).map((function(t) {
                            return {
                                zs: 0,
                                P: t.Fh
                            }
                        }));
                        e.sort((function(t, e) {
                            return t.P.Cs - e.P.Cs
                        }));
                        var i = this.ud(e),
                            s = {
                                sd: new Map,
                                U: {
                                    Er: this.rd()
                                }
                            };
                        if (-1 !== i) this.K_.forEach((function(t, e) {
                            s.sd.set(e, {
                                ed: t,
                                Tl: !0
                            })
                        })), this.K_.has(t) || s.sd.set(t, {
                            ed: [],
                            Tl: !0
                        }), s.U.ad = this.Z_;
                        else {
                            var r = this.K_.get(t);
                            s.sd.set(t, {
                                ed: r || [],
                                Tl: !0
                            })
                        }
                        return s
                    }, t
                }(),
                Ni = {
                    color: "#FF0000",
                    price: 0,
                    lineStyle: 2,
                    lineWidth: 1,
                    axisLabelVisible: !0,
                    title: ""
                },
                Fi = function() {
                    function t(t) {
                        this.la = t
                    }
                    return t.prototype.applyOptions = function(t) {
                        this.la.hh(t)
                    }, t.prototype.options = function() {
                        return this.la.I()
                    }, t.prototype.od = function() {
                        return this.la
                    }, t
                }();

            function Bi(t) {
                var e = t.overlay,
                    i = function(t, e) {
                        var i = {};
                        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && e.indexOf(s) < 0 && (i[s] = t[s]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (s = Object.getOwnPropertySymbols(t); r < s.length; r++) e.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[r]) && (i[s[r]] = t[s[r]])
                        }
                        return i
                    }(t, ["overlay"]);
                return e && (i.priceScaleId = ""), i
            }
            var Ri = function() {
                    function t(t, e, i) {
                        this.Fe = t, this.ld = e, this.fd = i
                    }
                    return t.prototype.priceFormatter = function() {
                        return this.Fe.Yh()
                    }, t.prototype.priceToCoordinate = function(t) {
                        var e = this.Fe.Y();
                        return null === e ? null : this.Fe.Z().X(t, e.J)
                    }, t.prototype.coordinateToPrice = function(t) {
                        var e = this.Fe.Y();
                        return null === e ? null : this.Fe.Z().Di(t, e.J)
                    }, t.prototype.barsInLogicalRange = function(t) {
                        if (null === t) return null;
                        var e = new It(new Tt(t.from, t.to)).Us(),
                            i = this.Fe.qi();
                        if (i.Qt()) return null;
                        var s = i.Ea(e.hs(), 1),
                            r = i.Ea(e.ss(), -1),
                            n = g(i.Da()),
                            o = g(i.Ui());
                        if (null !== s && null !== r && s.Ps > r.Ps) return {
                            barsBefore: t.from - n,
                            barsAfter: o - t.to
                        };
                        var a = {
                            barsBefore: null === s || s.Ps === n ? t.from - n : s.Ps - n,
                            barsAfter: null === r || r.Ps === o ? o - t.to : o - r.Ps
                        };
                        return null !== s && null !== r && (a.from = s.P.Ss || s.P.Cs, a.to = r.P.Ss || r.P.Cs), a
                    }, t.prototype.setData = function(t) {
                        this.Fe.da(), this.ld.vd(this.Fe, t)
                    }, t.prototype.update = function(t) {
                        this.Fe.da(), this.ld.uo(this.Fe, t)
                    }, t.prototype.setMarkers = function(t) {
                        var e = t.map((function(t) {
                            return u(u({}, t), {
                                time: Ti(t.time)
                            })
                        }));
                        this.Fe.lo(e)
                    }, t.prototype.applyOptions = function(t) {
                        var e = Bi(t);
                        this.Fe.hh(e)
                    }, t.prototype.options = function() {
                        return S(this.Fe.I())
                    }, t.prototype.priceScale = function() {
                        return this.fd.priceScale(this.Fe.Z().nh())
                    }, t.prototype.createPriceLine = function(t) {
                        var e = _(S(Ni), t),
                            i = this.Fe.fo(e);
                        return new Fi(i)
                    }, t.prototype.removePriceLine = function(t) {
                        this.Fe.co(t.od())
                    }, t.prototype.seriesType = function() {
                        return this.Fe.da()
                    }, t
                }(),
                Oi = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return c(e, t), e.prototype.applyOptions = function(e) {
                        St(e), t.prototype.applyOptions.call(this, e)
                    }, e
                }(Ri),
                qi = {
                    autoScale: !0,
                    mode: 0,
                    invertScale: !1,
                    alignLabels: !0,
                    borderVisible: !0,
                    borderColor: "#2B2B43",
                    entireTextOnly: !1,
                    visible: !1,
                    drawTicks: !0,
                    scaleMargins: {
                        bottom: .1,
                        top: .2
                    }
                },
                Wi = {
                    color: "rgba(0, 0, 0, 0)",
                    visible: !1,
                    fontSize: 48,
                    fontFamily: Rt,
                    fontStyle: "",
                    text: "",
                    horzAlign: "center",
                    vertAlign: "center"
                },
                zi = {
                    width: 0,
                    height: 0,
                    layout: {
                        backgroundColor: "#FFFFFF",
                        textColor: "#191919",
                        fontSize: 11,
                        fontFamily: Rt
                    },
                    crosshair: {
                        vertLine: {
                            color: "#758696",
                            width: 1,
                            style: 3,
                            visible: !0,
                            labelVisible: !0,
                            labelBackgroundColor: "#4c525e"
                        },
                        horzLine: {
                            color: "#758696",
                            width: 1,
                            style: 3,
                            visible: !0,
                            labelVisible: !0,
                            labelBackgroundColor: "#4c525e"
                        },
                        mode: 1
                    },
                    grid: {
                        vertLines: {
                            color: "#D6DCDE",
                            style: 0,
                            visible: !0
                        },
                        horzLines: {
                            color: "#D6DCDE",
                            style: 0,
                            visible: !0
                        }
                    },
                    overlayPriceScales: u({}, qi),
                    leftPriceScale: u(u({}, qi), {
                        visible: !1
                    }),
                    rightPriceScale: u(u({}, qi), {
                        visible: !0
                    }),
                    timeScale: {
                        rightOffset: 0,
                        barSpacing: 6,
                        minBarSpacing: .5,
                        fixLeftEdge: !1,
                        fixRightEdge: !1,
                        lockVisibleTimeRangeOnResize: !1,
                        rightBarStaysOnScroll: !1,
                        borderVisible: !0,
                        borderColor: "#2B2B43",
                        visible: !0,
                        timeVisible: !1,
                        secondsVisible: !0,
                        shiftVisibleRangeOnNewBar: !0
                    },
                    watermark: Wi,
                    localization: {
                        locale: ti ? navigator.language : "",
                        dateFormat: "dd MMM 'yy"
                    },
                    handleScroll: {
                        mouseWheel: !0,
                        pressedMouseMove: !0,
                        horzTouchDrag: !0,
                        vertTouchDrag: !0
                    },
                    handleScale: {
                        axisPressedMouseMove: {
                            time: !0,
                            price: !0
                        },
                        axisDoubleClickReset: !0,
                        mouseWheel: !0,
                        pinch: !0
                    }
                },
                Ui = {
                    upColor: "#26a69a",
                    downColor: "#ef5350",
                    wickVisible: !0,
                    borderVisible: !0,
                    borderColor: "#378658",
                    borderUpColor: "#26a69a",
                    borderDownColor: "#ef5350",
                    wickColor: "#737375",
                    wickUpColor: "#26a69a",
                    wickDownColor: "#ef5350"
                },
                Vi = {
                    upColor: "#26a69a",
                    downColor: "#ef5350",
                    openVisible: !0,
                    thinBars: !0
                },
                Hi = {
                    color: "#2196f3",
                    lineStyle: 0,
                    lineWidth: 3,
                    lineType: 0,
                    crosshairMarkerVisible: !0,
                    crosshairMarkerRadius: 4,
                    crosshairMarkerBorderColor: "",
                    crosshairMarkerBackgroundColor: ""
                },
                $i = {
                    topColor: "rgba( 46, 220, 135, 0.4)",
                    bottomColor: "rgba( 40, 221, 100, 0)",
                    lineColor: "#33D778",
                    lineStyle: 0,
                    lineWidth: 3,
                    lineType: 0,
                    crosshairMarkerVisible: !0,
                    crosshairMarkerRadius: 4,
                    crosshairMarkerBorderColor: "",
                    crosshairMarkerBackgroundColor: ""
                },
                ji = {
                    color: "#26a69a",
                    base: 0
                },
                Yi = {
                    title: "",
                    visible: !0,
                    lastValueVisible: !0,
                    priceLineVisible: !0,
                    priceLineSource: 0,
                    priceLineWidth: 1,
                    priceLineColor: "",
                    priceLineStyle: 2,
                    baseLineVisible: !0,
                    baseLineWidth: 1,
                    baseLineColor: "#B2B5BE",
                    baseLineStyle: 0,
                    priceFormat: {
                        type: "price",
                        precision: 2,
                        minMove: .01
                    }
                },
                Gi = function() {
                    function t(t, e) {
                        this._d = t, this.dd = e
                    }
                    return t.prototype.applyOptions = function(t) {
                        this._d.ct().Ol(this.dd, t)
                    }, t.prototype.options = function() {
                        return this.Jt().I()
                    }, t.prototype.width = function() {
                        return Wt(this.dd) ? this._d.O_("left" === this.dd ? "left" : "right") : 0
                    }, t.prototype.Jt = function() {
                        return g(this._d.ct().zl(this.dd)).Z
                    }, t
                }(),
                Xi = function() {
                    function t(t) {
                        this.wd = new tt, this.tr = new tt, this.hi = t, this.Ao().Kr().Zi(this.Md.bind(this)), this.Ao().$r().Zi(this.bd.bind(this))
                    }
                    return t.prototype.rn = function() {
                            this.Ao().Kr().nn(this), this.Ao().$r().nn(this), this.wd.rn()
                        },
                        t.prototype.scrollPosition = function() {
                            return this.Ao().Fr()
                        }, t.prototype.scrollToPosition = function(t, e) {
                            e ? this.Ao().Yr(t, 1e3) : this.hi.dr(t)
                        }, t.prototype.scrollToRealTime = function() {
                            this.Ao().Hr()
                        }, t.prototype.getVisibleRange = function() {
                            var t, e, i = this.Ao().gr();
                            return null === i ? null : {
                                from: null !== (t = i.from.Ss) && void 0 !== t ? t : i.from.Cs,
                                to: null !== (e = i.to.Ss) && void 0 !== e ? e : i.to.Cs
                            }
                        }, t.prototype.setVisibleRange = function(t) {
                            var e = {
                                    from: Ti(t.from),
                                    to: Ti(t.to)
                                },
                                i = this.Ao().Nr(e);
                            this.hi.rf(i)
                        }, t.prototype.getVisibleLogicalRange = function() {
                            var t = this.Ao().mr();
                            return null === t ? null : {
                                from: t.hs(),
                                to: t.ss()
                            }
                        }, t.prototype.setVisibleLogicalRange = function(t) {
                            p(t.from <= t.to, "The from index cannot be after the to index."), this.hi.rf(t)
                        }, t.prototype.resetTimeScale = function() {
                            this.hi.ke()
                        }, t.prototype.fitContent = function() {
                            this.hi.Jr()
                        }, t.prototype.logicalToCoordinate = function(t) {
                            var e = this.hi.U();
                            return e.Qt() ? null : e.G(t)
                        }, t.prototype.coordinateToLogical = function(t) {
                            var e = this.hi.U();
                            return e.Qt() ? null : e.Ar(t)
                        }, t.prototype.timeToCoordinate = function(t) {
                            var e = Ti(t),
                                i = this.hi.U(),
                                s = i.wr(e, !1);
                            return null === s ? null : i.G(s)
                        }, t.prototype.coordinateToTime = function(t) {
                            var e, i = this.hi.U(),
                                s = i.Ar(t),
                                r = i.si(s);
                            return null === r ? null : null !== (e = r.Ss) && void 0 !== e ? e : r.Cs
                        }, t.prototype.subscribeVisibleTimeRangeChange = function(t) {
                            this.wd.Zi(t)
                        }, t.prototype.unsubscribeVisibleTimeRangeChange = function(t) {
                            this.wd.tn(t)
                        }, t.prototype.subscribeVisibleLogicalRangeChange = function(t) {
                            this.tr.Zi(t)
                        }, t.prototype.unsubscribeVisibleLogicalRangeChange = function(t) {
                            this.tr.tn(t)
                        }, t.prototype.applyOptions = function(t) {
                            this.Ao().hh(t)
                        }, t.prototype.options = function() {
                            return S(this.Ao().I())
                        }, t.prototype.Ao = function() {
                            return this.hi.U()
                        }, t.prototype.Md = function() {
                            this.wd.sn() && this.wd.hn(this.getVisibleRange())
                        }, t.prototype.bd = function() {
                            this.tr.sn() && this.tr.hn(this.getVisibleLogicalRange())
                        }, t
                }();

            function Ji(t) {
                if (void 0 !== t && "custom" !== t.type) {
                    var e = t;
                    void 0 !== e.minMove && void 0 === e.precision && (e.precision = function(t) {
                        if (t >= 1) return 0;
                        for (var e = 0; e < 8; e++) {
                            var i = Math.round(t);
                            if (Math.abs(i - t) < 1e-8) return e;
                            t *= 10
                        }
                        return e
                    }(e.minMove))
                }
            }

            function Qi(t) {
                return function(t) {
                        if (w(t.handleScale)) {
                            var e = t.handleScale;
                            t.handleScale = {
                                axisDoubleClickReset: e,
                                axisPressedMouseMove: {
                                    time: e,
                                    price: e
                                },
                                mouseWheel: e,
                                pinch: e
                            }
                        } else if (void 0 !== t.handleScale && w(t.handleScale.axisPressedMouseMove)) {
                            var i = t.handleScale.axisPressedMouseMove;
                            t.handleScale.axisPressedMouseMove = {
                                time: i,
                                price: i
                            }
                        }
                        var s = t.handleScroll;
                        w(s) && (t.handleScroll = {
                            horzTouchDrag: s,
                            vertTouchDrag: s,
                            mouseWheel: s,
                            pressedMouseMove: s
                        })
                    }(t),
                    function(t) {
                        if (t.priceScale) {
                            t.leftPriceScale = t.leftPriceScale || {}, t.rightPriceScale = t.rightPriceScale || {};
                            var e = t.priceScale.position;
                            delete t.priceScale.position, t.leftPriceScale = _(t.leftPriceScale, t.priceScale), t.rightPriceScale = _(t.rightPriceScale, t.priceScale), "left" === e && (t.leftPriceScale.visible = !0, t.rightPriceScale.visible = !1), "right" === e && (t.leftPriceScale.visible = !1, t.rightPriceScale.visible = !0), "none" === e && (t.leftPriceScale.visible = !1, t.rightPriceScale.visible = !1),
                                t.overlayPriceScales = t.overlayPriceScales || {}, void 0 !== t.priceScale.invertScale && (t.overlayPriceScales.invertScale = t.priceScale.invertScale), void 0 !== t.priceScale.scaleMargins && (t.overlayPriceScales.scaleMargins = t.priceScale.scaleMargins)
                        }
                    }(t), t
            }
            var Zi = function() {
                function t(t, e) {
                    var i = this;
                    this.md = new Ii, this.gd = new Map, this.pd = new Map, this.yd = new tt, this.kd = new tt;
                    var s = void 0 === e ? S(zi) : _(S(zi), Qi(e));
                    this._d = new gi(t, s), this._d.zv().Zi((function(t) {
                        i.yd.sn() && i.yd.hn(i.xd(t()))
                    }), this), this._d.Wl().Zi((function(t) {
                        i.kd.sn() && i.kd.hn(i.xd(t()))
                    }), this);
                    var r = this._d.ct();
                    this.Nd = new Xi(r)
                }
                return t.prototype.remove = function() {
                    this._d.zv().nn(this), this._d.Wl().nn(this), this.Nd.rn(), this._d.rn(), this.gd.clear(), this.pd.clear(), this.yd.rn(), this.kd.rn(), this.md.rn()
                }, t.prototype.resize = function(t, e, i) {
                    this._d.C_(t, e, i)
                }, t.prototype.addAreaSeries = function(t) {
                    void 0 === t && (t = {}), Ji((t = Bi(t)).priceFormat);
                    var e = _(S(Yi), $i, t),
                        i = this._d.ct().nf("Area", e),
                        s = new Ri(i, this, this);
                    return this.gd.set(s, i), this.pd.set(i, s), s
                }, t.prototype.addBarSeries = function(t) {
                    void 0 === t && (t = {}), Ji((t = Bi(t)).priceFormat);
                    var e = _(S(Yi), Vi, t),
                        i = this._d.ct().nf("Bar", e),
                        s = new Ri(i, this, this);
                    return this.gd.set(s, i), this.pd.set(i, s), s
                }, t.prototype.addCandlestickSeries = function(t) {
                    void 0 === t && (t = {}), St(t = Bi(t)), Ji(t.priceFormat);
                    var e = _(S(Yi), Ui, t),
                        i = this._d.ct().nf("Candlestick", e),
                        s = new Oi(i, this, this);
                    return this.gd.set(s, i), this.pd.set(i, s), s
                }, t.prototype.addHistogramSeries = function(t) {
                    void 0 === t && (t = {}), Ji((t = Bi(t)).priceFormat);
                    var e = _(S(Yi), ji, t),
                        i = this._d.ct().nf("Histogram", e),
                        s = new Ri(i, this, this);
                    return this.gd.set(s, i), this.pd.set(i, s), s
                }, t.prototype.addLineSeries = function(t) {
                    void 0 === t && (t = {}), Ji((t = Bi(t)).priceFormat);
                    var e = _(S(Yi), Hi, t),
                        i = this._d.ct().nf("Line", e),
                        s = new Ri(i, this, this);
                    return this.gd.set(s, i), this.pd.set(i, s), s
                }, t.prototype.removeSeries = function(t) {
                    var e = f(this.gd.get(t)),
                        i = this.md.sf(e);
                    this._d.ct().sf(e), this.Sd(i), this.gd.delete(t), this.pd.delete(e)
                }, t.prototype.vd = function(t, e) {
                    this.Sd(this.md.J_(t, e))
                }, t.prototype.uo = function(t, e) {
                    this.Sd(this.md.nd(t, e))
                }, t.prototype.subscribeClick = function(t) {
                    this.yd.Zi(t)
                }, t.prototype.unsubscribeClick = function(t) {
                    this.yd.tn(t)
                }, t.prototype.subscribeCrosshairMove = function(t) {
                    this.kd.Zi(t)
                }, t.prototype.unsubscribeCrosshairMove = function(t) {
                    this.kd.tn(t)
                }, t.prototype.priceScale = function(t) {
                    return void 0 === t && (t = this._d.ct().ef()), new Gi(this._d, t)
                }, t.prototype.timeScale = function() {
                    return this.Nd
                }, t.prototype.applyOptions = function(t) {
                    this._d.hh(Qi(t))
                }, t.prototype.options = function() {
                    return this._d.I()
                }, t.prototype.takeScreenshot = function() {
                    return this._d.L_()
                }, t.prototype.Sd = function(t) {
                    var e = this._d.ct();
                    e.tf(t.U.Er, t.U.ad), t.sd.forEach((function(t, e) {
                        return e.uo(t.ed, t.Tl)
                    })), e.Or()
                }, t.prototype.Cd = function(t) {
                    return f(this.pd.get(t))
                }, t.prototype.xd = function(t) {
                    var e = this,
                        i = new Map;
                    t.j_.forEach((function(t, s) {
                        i.set(e.Cd(s), t)
                    }));
                    var s = void 0 === t.R_ ? void 0 : this.Cd(t.R_);
                    return {
                        time: t.P && (t.P.Ss || t.P.Cs),
                        point: t.W_,
                        hoveredSeries: s,
                        hoveredMarkerId: t.U_,
                        seriesPrices: i
                    }
                }, t
            }();

            function Ki(t, e) {
                var i;
                if (b(t)) {
                    var s = document.getElementById(t);
                    p(null !== s, "Cannot find element in DOM with id=" + t), i = s
                } else i = t;
                return new Zi(i, e)
            }
        },
        896741: t => {
            t.exports = {
                container: "container-vMoQJXBo",
                top: "top-vMoQJXBo"
            }
        },
        887552: t => {
            t.exports = {
                wrap: "wrap-YTIWpbLa",
                list: "list-YTIWpbLa",
                item: "item-YTIWpbLa",
                selected: "selected-YTIWpbLa",
                bluishItem: "bluishItem-YTIWpbLa",
                noPadding: "noPadding-YTIWpbLa"
            }
        },
        715934: t => {
            t.exports = {
                list: "list-1Qt6-ooT list-2R-eCARO"
            }
        },
        313995: t => {
            t.exports = {
                wrap: "wrap-1Vlh_Gq_",
                disabled: "disabled-1Vlh_Gq_",
                button: "button-1Vlh_Gq_",
                title: "title-1Vlh_Gq_",
                dropdownWithFlagList: "dropdownWithFlagList-1Vlh_Gq_",
                item: "item-1Vlh_Gq_",
                selected: "selected-1Vlh_Gq_",
                caret: "caret-1Vlh_Gq_"
            }
        },
        578433: t => {
            t.exports = {
                list: "list-2R-eCARO",
                item: "item-2R-eCARO"
            }
        },
        918266: () => {},
        834936: () => {},
        638619: () => {},
        280531: () => {},
        397082: () => {},
        488e3: () => {},
        254851: () => {},
        372012: () => {},
        199708: () => {},
        716638: () => {},
        182520: () => {},
        375848: () => {},
        406486: () => {},
        184404: t => {
            t.exports = {
                floatingTooltipContainer: "floatingTooltipContainer-pgdxQCj7",
                floatingTooltipContainer_show: "floatingTooltipContainer_show-pgdxQCj7",
                floatingTooltip: "floatingTooltip-pgdxQCj7",
                floatingTooltip_style_line: "floatingTooltip_style_line-pgdxQCj7",
                floatingTooltip_align_left: "floatingTooltip_align_left-pgdxQCj7",
                priceAndVolume: "priceAndVolume-pgdxQCj7",
                priceAndVolume__price: "priceAndVolume__price-pgdxQCj7",
                priceAndVolume__volume: "priceAndVolume__volume-pgdxQCj7",
                ohlc: "ohlc-pgdxQCj7",
                ohlc__row: "ohlc__row-pgdxQCj7",
                ohlc__column: "ohlc__column-pgdxQCj7",
                ohlc__column_volume: "ohlc__column_volume-pgdxQCj7",
                ohlc__legends: "ohlc__legends-pgdxQCj7",
                time: "time-pgdxQCj7"
            }
        },
        672929: t => {
            t.exports = {
                icon: "icon-1ldriq-A",
                bg: "bg-1ldriq-A"
            }
        },
        29699: t => {
            t.exports = {
                btn: "btn-1TM2XdyF",
                btnDesktop: "btnDesktop-1TM2XdyF",
                btnMobile: "btnMobile-1TM2XdyF",
                content: "content-1TM2XdyF"
            }
        },
        917806: t => {
            t.exports = {
                symbolShortName: "symbolShortName-maMvv6Kx"
            }
        },
        475781: t => {
            t.exports = {
                desktopVersion: "desktopVersion-jrNCZ-pW",
                tabletVersion: "tabletVersion-jrNCZ-pW"
            }
        },
        238103: t => {
            t.exports = {
                container: "container-3YIRsP74",
                img: "img-3YIRsP74",
                icon: "icon-3YIRsP74",
                iconCalendar: "iconCalendar-3YIRsP74"
            }
        },
        923724: t => {
            t.exports = {
                item: "item-1EQYLgci",
                pinImage: "pinImage-1EQYLgci",
                meta: "meta-1EQYLgci",
                symbolName: "symbolName-1EQYLgci",
                date: "date-1EQYLgci",
                title: "title-1EQYLgci",
                description: "description-1EQYLgci"
            }
        },
        437431: t => {
            t.exports = {
                innerContainer: "innerContainer-1z7Y_lzv"
            }
        },
        970459: () => {},
        236857: () => {},
        754242: () => {},
        283660: t => {
            t.exports = {
                "news-item": "news-item-14OMzC2A",
                "news-item--no-hover": "news-item--no-hover-14OMzC2A",
                "news-item--highlight": "news-item--highlight-14OMzC2A",
                "news-item__header": "news-item__header-14OMzC2A",
                "news-item__breadcrumbs": "news-item__breadcrumbs-14OMzC2A",
                "news-item__logos": "news-item__logos-14OMzC2A",
                "news-item--card": "news-item--card-14OMzC2A",
                "news-item__title": "news-item__title-14OMzC2A",
                "news-item__title--external-link": "news-item__title--external-link-14OMzC2A",
                "news-item__description": "news-item__description-14OMzC2A"
            }
        },
        350298: () => {},
        816427: () => {},
        981409: () => {},
        129795: () => {},
        391522: t => {
            t.exports = {
                heartbeating: "heartbeating-1Keb18za"
            }
        },
        15993: () => {},
        499773: () => {},
        396383: t => {
            t.exports = {
                "navigation-element-border-radius": "22px",
                "navigation-element-dimension": "42px",
                "narrow-layout-margin": "8px"
            }
        },
        857071: t => {
            t.exports = {
                "navigation-element-border-radius": "22px",
                "navigation-element-dimension": "42px",
                "display-mode": "inline-flex",
                "tv-feed-rounded-button__button-hit-area--no-hover": "tv-feed-rounded-button__button-hit-area--no-hover-1pgAEwHT"
            }
        },
        364830: () => {},
        39972: () => {},
        873929: () => {},
        725827: () => {},
        850047: () => {},
        687453: () => {},
        210140: () => {},
        366768: () => {},
        83857: t => {
            t.exports = {
                scrollContainer: "scrollContainer-3W2j0nkN",
                top: "top-3W2j0nkN",
                bottom: "bottom-3W2j0nkN"
            }
        },
        961502: () => {},
        885210: () => {},
        249956: t => {
            t.exports = {
                "badge-broker": "badge-broker-1ZVP_YdH",
                featured: "featured-1ZVP_YdH",
                platinum: "platinum-1ZVP_YdH",
                link: "link-1ZVP_YdH",
                gold: "gold-1ZVP_YdH",
                silver: "silver-1ZVP_YdH"
            }
        },
        754080: t => {
            t.exports = {
                "badge-promo": "badge-promo-1tFHPd0W"
            }
        },
        94691: t => {
            t.exports = {
                "badge-user": "badge-user-2PRu_G83",
                "pro-premium": "pro-premium-2PRu_G83",
                "pro-realtime": "pro-realtime-2PRu_G83",
                pro: "pro-2PRu_G83",
                moderator: "moderator-2PRu_G83",
                trial: "trial-2PRu_G83",
                "pine-wizard": "pine-wizard-2PRu_G83",
                employee: "employee-2PRu_G83",
                "employee-logo-icon": "employee-logo-icon-2PRu_G83",
                "size-xsmall": "size-xsmall-2PRu_G83",
                "size-small": "size-small-2PRu_G83",
                "size-medium": "size-medium-2PRu_G83",
                "size-large": "size-large-2PRu_G83",
                "size-xlarge": "size-xlarge-2PRu_G83"
            }
        },
        734036: t => {
            t.exports = {
                badge: "badge-3eBx0vQz",
                anchor: "anchor-3eBx0vQz",
                "size-xsmall": "size-xsmall-3eBx0vQz",
                "size-small": "size-small-3eBx0vQz",
                "size-medium": "size-medium-3eBx0vQz",
                "size-large": "size-large-3eBx0vQz",
                "size-xlarge": "size-xlarge-3eBx0vQz"
            }
        },
        474588: t => {
            t.exports = {
                stack: "stack-2yW_fi3o",
                counter: "counter-2yW_fi3o"
            }
        },
        736677: t => {
            t.exports = {
                wrap: "wrap-3obNZqvj",
                wrapWithArrowsOuting: "wrapWithArrowsOuting-3obNZqvj",
                wrapOverflow: "wrapOverflow-3obNZqvj",
                scrollWrap: "scrollWrap-3obNZqvj",
                noScrollBar: "noScrollBar-3obNZqvj",
                icon: "icon-3obNZqvj",
                scrollLeft: "scrollLeft-3obNZqvj",
                scrollRight: "scrollRight-3obNZqvj",
                isVisible: "isVisible-3obNZqvj",
                iconWrap: "iconWrap-3obNZqvj",
                fadeLeft: "fadeLeft-3obNZqvj",
                fadeRight: "fadeRight-3obNZqvj"
            }
        },
        920269: t => {
            t.exports = {
                item: "item-3xTS48lj",
                hovered: "hovered-3xTS48lj",
                isActive: "isActive-3xTS48lj",
                icon: "icon-3xTS48lj",
                content: "content-3xTS48lj"
            }
        },
        445202: t => {
            t.exports = {
                menuOuter: "menuOuter--YwtCpqu",
                isVisibleBackground: "isVisibleBackground--YwtCpqu"
            }
        },
        997838: t => {
            t.exports = {
                menu: "menu-12GJ_ZxX",
                menuWrapper: "menuWrapper-12GJ_ZxX",
                menuWrapperOuter: "menuWrapperOuter-12GJ_ZxX"
            }
        },
        568552: t => {
            t.exports = {
                separator: "separator-3No0pWrk"
            }
        },
        702632: t => {
            t.exports = {
                icon: "icon-19OjtB6A",
                dropped: "dropped-19OjtB6A"
            }
        },
        679712: () => {},
        853875: (t, e, i) => {
            "use strict";
            i.d(e, {
                SEPARATOR_PREFIX: () => s,
                isSeparatorItem: () => r
            });
            const s = "###";

            function r(t) {
                return t.startsWith(s)
            }
        },
        99256: (t, e, i) => {
            "use strict";
            i.d(e, {
                SquareAnchorButton: () => g,
                SquareButton: () => p
            });
            var s = i(667294),
                r = i(294184),
                n = i(469586),
                o = i(640539);
            const a = JSON.parse('{"button":"button-qM2OSl9-","content":"content-1UNGmyXO","icon-only":"icon-only-3MOZiWvj","color-brand":"color-brand-eDTq6RMz","variant-primary":"variant-primary-3m2-v4cq","variant-secondary":"variant-secondary-1Uk9Idy8","color-gray":"color-gray-3HYlDQXq","color-green":"color-green-2oUhAFCl","color-red":"color-red-1RbzZRrI","size-xsmall":"size-xsmall-1UtgdwJA","size-small":"size-small-2YFjX8Gj","size-medium":"size-medium-2nH4uA9w","size-large":"size-large-2XXsyjkq","size-xlarge":"size-xlarge-2FzvZzq6","with-start-icon":"with-start-icon-9wsLqtS_","with-end-icon":"with-end-icon-QoUMC8CG","start-icon-wrap":"start-icon-wrap-2aT5KsIF","end-icon-wrap":"end-icon-wrap-Pxzjlxw8","animated":"animated-FJhsKjPT","stretch":"stretch-1Wufk-aY","grouped":"grouped-1mJ_9XNG","adjust-position":"adjust-position-22XnoSny","first-row":"first-row-okSvkChI","first-col":"first-col-3cdfq6Yc","no-corner-top-left":"no-corner-top-left-1dhEuLwK","no-corner-top-right":"no-corner-top-right-2B-9Lz7Y","no-corner-bottom-right":"no-corner-bottom-right-2YOfeKyh","no-corner-bottom-left":"no-corner-bottom-left-3MsE9Q0B"}');

            function l(t) {
                const {
                    color: e = "brand",
                    size: i = "medium",
                    variant: s = "primary",
                    stretch: o = !1,
                    icon: l,
                    startIcon: h,
                    endIcon: c,
                    iconOnly: u = !1,
                    className: d,
                    isGrouped: p,
                    cellState: f,
                    disablePositionAdjustment: g = !1
                } = t, m = function(t) {
                    let e = "";
                    return 0 !== t && (1 & t && (e = r(e, a["no-corner-top-left"])), 2 & t && (e = r(e, a["no-corner-top-right"])), 4 & t && (e = r(e, a["no-corner-bottom-right"])), 8 & t && (e = r(e, a["no-corner-bottom-left"]))), e
                }((0, n.getGroupCellRemoveRoundBorders)(f));
                return r(d, a.button, a["size-" + i], a["color-" + e], a["variant-" + s], o && a.stretch, (l || h) && a["with-start-icon"], c && a["with-end-icon"], u && a["icon-only"], m, p && a.grouped, p && !g && a["adjust-position"], p && f.isTop && a["first-row"], p && f.isLeft && a["first-col"])
            }

            function h(t) {
                const {
                    size: e,
                    startIcon: i,
                    icon: r,
                    iconOnly: n,
                    children: l,
                    endIcon: h
                } = t, c = null != i ? i : r;
                return s.createElement(s.Fragment, null, c && "xsmall" !== e && s.createElement(o.Icon, {
                    icon: c,
                    className: a["start-icon-wrap"]
                }), l && s.createElement("span", {
                    className: a.content
                }, l), h && !n && "xsmall" !== e && s.createElement(o.Icon, {
                    icon: h,
                    className: a["end-icon-wrap"]
                }))
            }
            var c = i(62624),
                u = i(13279);

            function d(t) {
                const {
                    className: e,
                    color: i,
                    variant: s,
                    size: r,
                    stretch: n,
                    animated: o,
                    icon: a,
                    iconOnly: l,
                    startIcon: h,
                    endIcon: c,
                    ...d
                } = t;
                return { ...d,
                    ...(0, u.filterDataProps)(t),
                    ...(0, u.filterAriaProps)(t)
                }
            }

            function p(t) {
                const {
                    reference: e,
                    ...i
                } = t, {
                    isGrouped: r,
                    cellState: n,
                    disablePositionAdjustment: o
                } = (0, s.useContext)(c.ControlGroupContext), a = l({ ...i,
                    isGrouped: r,
                    cellState: n,
                    disablePositionAdjustment: o
                });
                return s.createElement("button", { ...d(i),
                    className: a,
                    ref: e
                }, s.createElement(h, { ...i
                }))
            }

            function f(t) {
                const {
                    className: e,
                    color: i,
                    variant: s,
                    size: r,
                    stretch: n,
                    animated: o,
                    icon: a,
                    iconOnly: l,
                    startIcon: h,
                    endIcon: c,
                    ...d
                } = t;
                return { ...d,
                    ...(0, u.filterDataProps)(t),
                    ...(0, u.filterAriaProps)(t)
                }
            }

            function g(t) {
                const {
                    reference: e
                } = t, {
                    isGrouped: i,
                    cellState: r,
                    disablePositionAdjustment: n
                } = (0, s.useContext)(c.ControlGroupContext), o = l({ ...t,
                    isGrouped: i,
                    cellState: r,
                    disablePositionAdjustment: n
                });
                return s.createElement("a", { ...f(t),
                    className: o,
                    ref: e
                }, s.createElement(h, { ...t
                }))
            }
        },
        62624: (t, e, i) => {
            "use strict";
            i.d(e, {
                ControlGroupContext: () => s
            });
            const s = i(667294).createContext({
                isGrouped: !1,
                cellState: {
                    isTop: !0,
                    isRight: !0,
                    isBottom: !0,
                    isLeft: !0
                }
            })
        },
        469586: (t, e, i) => {
            "use strict";

            function s(t) {
                let e = 0;
                return t.isTop && t.isLeft || (e += 1), t.isTop && t.isRight || (e += 2), t.isBottom && t.isLeft || (e += 8), t.isBottom && t.isRight || (e += 4), e
            }
            i.d(e, {
                getGroupCellRemoveRoundBorders: () => s
            })
        },
        13279: (t, e, i) => {
            "use strict";

            function s(t) {
                return n(t, o)
            }

            function r(t) {
                return n(t, a)
            }

            function n(t, e) {
                const i = Object.entries(t).filter(e),
                    s = {};
                for (const [t, e] of i) s[t] = e;
                return s
            }

            function o(t) {
                const [e, i] = t;
                return 0 === e.indexOf("data-") && "string" == typeof i
            }

            function a(t) {
                return 0 === t[0].indexOf("aria-")
            }
            i.d(e, {
                filterDataProps: () => s,
                filterAriaProps: () => r,
                filterProps: () => n,
                isDataAttribute: () => o,
                isAriaAttribute: () => a
            })
        },
        772637: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                CategoriesTypes: () => o,
                CategoriesProvider: () => a
            });
            var s = i(987380),
                r = i(685864);
            const n = (0, s.getLogger)("Idea.CategoriesProvider");
            var o;
            ! function(t) {
                t.Ideas = "Ideas", t.Scripts = "Scripts", t.Libraries = "Libraries"
            }(o || (o = {}));
            class a {
                constructor() {
                    this._categoriesUrl = "/categories/"
                }
                getCategories() {
                    return (0, r.fetch)(this._categoriesUrl, {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "GET"
                    }).then(t => t.json(), t => {
                        n.logError(t)
                    })
                }
            }
        },
        895389: (t, e, i) => {
            "use strict";

            function s() {
                ! function() {
                    const t = document.querySelector(".js-broker-branding-banner");
                    if (null === t) return;
                    Promise.all([i.e(11216), i.e(11228), i.e(52946), i.e(62728)]).then(i.bind(i, 692955)).then(e => {
                        null !== r && r.destroy(), r = e.initBrokerBrandingAnalytics(t)
                    })
                }()
            }
            i.d(e, {
                initCategoryBrokerBrandingAnalytics: () => s
            });
            let r = null
        },
        777465: (t, e, i) => {
            "use strict";
            i.d(e, {
                initCategoryHeader: () => d
            });
            var s = i(416282),
                r = i(524926),
                n = i(929098);
            const o = /^\/broker\/([^/]+)\/([^/]*)\/?/;

            function a(t) {
                const e = o.exec(t);
                return e && {
                    username: e[1],
                    tabPath: "" === e[2] ? "overview" : e[2]
                }
            }

            function l(t) {
                const e = t.target;
                if (null === e) return;
                if (! function(t) {
                        return "A" === t.tagName
                    }(e)) return;
                const i = a(e.pathname);
                null !== i && (0, n.trackEvent)("Brokers", "Tabs", i.tabPath)
            }
            var h = i(743334),
                c = i(170797);
            const u = () => {};

            function d(t) {
                ! function(t) {
                    const e = document.querySelector(".js-header-symbol-quotes");
                    e && void 0 === t && (t = e.getAttribute("data-symbol"));
                    if (!e || !t) return;
                    Promise.all([i.e(87127), i.e(76520), i.e(40788), i.e(74540), i.e(11216), i.e(11228), i.e(93669), i.e(6798), i.e(94970), i.e(85285), i.e(75095), i.e(14615)]).then(i.bind(i, 246352)).then(i => {
                        p && p.destroy();
                        const r = e.dataset.type || "undefined";
                        p = new i.HeaderQuoteBlocks(e, (0, s.ensureDefined)(t), r)
                    })
                }(t),
                function(t) {
                    const e = document.querySelector(".js-sticky-symbol-header-container");
                    if (!t || !e) return;
                    const s = document.querySelector(".js-header-symbol-quotes"),
                        r = e.dataset.logoUrls,
                        n = null == s ? void 0 : s.dataset.type,
                        o = r && r.length > 0 ? r.split(",") : void 0;
                    delete e.dataset.logoUrls,
                        function(t, e, s, r) {
                            Promise.all([i.e(87127), i.e(53684), i.e(51219), i.e(76520), i.e(40788), i.e(71631), i.e(11216), i.e(11228), i.e(93669), i.e(6798), i.e(94970), i.e(85285), i.e(75095), i.e(22744)]).then(i.bind(i, 908142)).then(i => {
                                f && f.destroy(), f = new i.StickySymbolHeader(t, e, s, r)
                            })
                        }(t, e, o, n)
                }(t),
                function(t) {
                    const e = document.querySelector(".js-header-symbol-quotes");
                    e && void 0 === t && (t = e.dataset.symbol);
                    if (!e || !t || "market_crypto" !== e.dataset.type && "crypto" !== e.dataset.type && "USD" !== e.dataset.currency) return;
                    Promise.all([i.e(11216), i.e(11228), i.e(17999)]).then(i.bind(i, 917999)).then(i => {
                        g && g.destroy(), g = new i.HeaderCryptoMarketBlocks(e, (0, s.ensureDefined)(t))
                    })
                }(),
                function() {
                    if (null === document.querySelector(".js-category-dropdown")) return;
                    Promise.all([i.e(67470), i.e(11216), i.e(69109)]).then(i.bind(i, 669109)).then(t => {
                        t.initCategoryDropdown()
                    })
                }(),
                function() {
                    const t = document.querySelector(".js-market-category-tabs");
                    if (null === t) return;
                    Promise.all([i.e(40587), i.e(63497), i.e(99022), i.e(11216), i.e(91050), i.e(73713)]).then(i.bind(i, 274018)).then(e => {
                        null !== m && m.destroy(), m = e.initMarketCategoryTabs(t)
                    })
                }(),
                function() {
                    const t = document.querySelector(".js-category-profile-header");
                    if (!t) return;
                    const e = t.querySelector(".js-header-login-status");
                    if (e) {
                        (0, r.initAgoDateFormatters)(e, !1, !0);
                        const i = t.querySelector(".js-badge");
                        if (i) {
                            const t = 12;
                            e.style.width = `calc(100% - ${i.offsetWidth+2*t}px)`
                        }
                    }
                    const n = Array.from(document.querySelectorAll(".js-open-account"));
                    if (n.length > 0) {
                        const t = async t => {
                            const e = t.currentTarget.dataset,
                                [{
                                    tryInvokeOpenAccountHandler: r
                                }, {
                                    BrokerReviewPageData: n
                                }, {
                                    trackOpenAccountButtonPress: o
                                }] = await Promise.all([i.e(89198).then(i.bind(i, 737969)), i.e(1650).then(i.bind(i, 454685)), i.e(71708).then(i.bind(i, 777606))]),
                                a = (0, s.ensureNotNull)(n.getBrokerData()),
                                l = e.openAccountType;
                            o(a.brokerSlugName, "broker-profile", l), r({
                                openAccountType: l,
                                referralLink: e.referralLink,
                                source: "broker-profile",
                                brokerData: a
                            })
                        };
                        for (const e of n) e.addEventListener("click", t)
                    }
                }(),
                function() {
                    const t = document.querySelector(".js-symbol-exchanges-dropdown");
                    if (null === t) return;
                    Promise.all([i.e(11216), i.e(11228), i.e(52946), i.e(62728)]).then(i.bind(i, 357621)).then(e => {
                        null !== _ && _.destroy(), _ = e.initSymbolExchangesDropdown(t)
                    })
                }(),
                function() {
                    const t = document.querySelector(".js-mobile-symbol-exchanges-dropdown");
                    if (null === t) return;
                    Promise.all([i.e(11216), i.e(11228), i.e(52946), i.e(62728)]).then(i.bind(i, 357621)).then(e => {
                        null !== v && v.destroy(), v = e.initSymbolExchangesDropdown(t)
                    })
                }(),
                function(t) {
                    null !== y && (y.forEach(t => {
                        t.destroy()
                    }), y = null);
                    const e = document.querySelectorAll(".js-go-to-chart-button-init-ssr");
                    if (0 === e.length) return;
                    const i = document.querySelectorAll(".js-full-chart-view-container");
                    y = (0, h.initGoToChartButtons)(e, i, t)
                }(t);
                const e = a(window.location.pathname);
                document.querySelectorAll(".js-category-tabs").forEach(t => new c.Tabs(t, void 0, {
                    onTabClick: null !== e ? l : u
                }))
            }
            let p = null;
            let f = null;
            let g = null;
            let m = null;
            let _ = null;
            let v = null;
            let y = null
        },
        743334: (t, e, i) => {
            "use strict";
            i.d(e, {
                initGoToChartButtons: () => y
            });
            var s = i(540062),
                r = i(667294),
                n = i(973935),
                o = i(879405),
                a = i(706754),
                l = i(120220),
                h = i(294184),
                c = i.n(h),
                u = i(99256),
                d = i(672929),
                p = i(323391);

            function f(t) {
                const {
                    className: e,
                    size: i,
                    symbol: s,
                    stretch: n,
                    onClick: o
                } = t, a = c()(e, d.bg);
                return r.createElement(u.SquareAnchorButton, {
                    icon: p,
                    href: s && "/chart/?symbol=" + encodeURIComponent(s),
                    target: "_blank",
                    onClick: o,
                    variant: "secondary",
                    size: i,
                    className: a,
                    stretch: n
                }, (0, l.t)("Launch full chart view"))
            }
            var g = i(391699),
                m = i(912869);
            class _ {
                constructor(t, e, i) {
                    this._container = t, n.hydrate(r.createElement(a.GoToChartButton, {
                        symbol: e,
                        onClick: () => (0, g.sendGoToChartAnalitycs)("header"),
                        size: i
                    }), this._container)
                }
                destroy() {
                    n.unmountComponentAtNode(this._container)
                }
            }
            class v {
                constructor(t, e) {
                    this._container = t, n.render(r.createElement(o.MatchMedia, {
                        rule: m["media-phone-vertical"]
                    }, t => r.createElement(f, {
                        symbol: e,
                        onClick: () => (0, g.sendGoToChartAnalitycs)("symbol_page_chart"),
                        size: t ? "large" : "small",
                        stretch: t
                    })), this._container)
                }
                destroy() {
                    n.unmountComponentAtNode(this._container)
                }
            }

            function y(t, e, i) {
                const r = [];
                return t.forEach(t => {
                    const {
                        symbol: e,
                        size: i
                    } = (0, s.getComponentInitData)(t);
                    r.push(new _(t, e, i))
                }), i && e && e.forEach(t => {
                    r.push(new v(t, i))
                }), r
            }
        },
        391699: (t, e, i) => {
            "use strict";
            i.d(e, {
                sendGoToChartAnalitycs: () => r
            });
            var s = i(771073);
            async function r(t) {
                const e = await (0, s.getTracker)();
                if (null === e) return;
                const i = location.pathname,
                    r = window.user.id || "";
                e.trackFullFeaturedChartButton(r.toString(), (i || "").toString(), t)
            }
        },
        706754: (t, e, i) => {
            "use strict";
            i.d(e, {
                GoToChartButton: () => c
            });
            var s = i(120220),
                r = i(667294),
                n = i(294184),
                o = i(99256),
                a = i(29699),
                l = i(71487),
                h = i(606628);

            function c(t) {
                const e = (0, s.t)("See more on advanced chart"),
                    i = function(t) {
                        const {
                            size: e,
                            symbol: i,
                            onClick: s
                        } = t;
                        return {
                            variant: "secondary",
                            href: i && "/chart?symbol=" + encodeURIComponent(i),
                            target: "_blank",
                            onClick: s,
                            size: e
                        }
                    }(t);
                return r.createElement(r.Fragment, null, r.createElement(o.SquareAnchorButton, { ...i,
                    startIcon: l,
                    endIcon: h,
                    className: n(a.btn, a.btnDesktop, t.className)
                }, e), r.createElement(o.SquareAnchorButton, { ...i,
                    startIcon: l,
                    endIcon: h,
                    className: n(a.btn, a.btnMobile, t.className),
                    stretch: !0
                }, e))
            }
        },
        628676: (t, e, i) => {
            "use strict";
            var s;
            i.d(e, {
                    DelayType: () => s
                }),
                function(t) {
                    t[t.Anon = 1] = "Anon", t[t.Delay = 2] = "Delay", t[t.FreeDelay = 3] = "FreeDelay"
                }(s || (s = {}))
        },
        237196: (t, e, i) => {
            "use strict";
            i.d(e, {
                getNewsCardVisualProps: () => l,
                prepareLogoUrls: () => h
            });
            var s = i(739132),
                r = i(17125),
                n = i(115537),
                o = i(54917),
                a = i(24084);

            function l(t, e) {
                const [i, s] = (0, a.getFormattedDateTimeForNews)(t.published);
                return {
                    date: i,
                    time: s,
                    title: t.title,
                    source: t.source,
                    link: (0, n.getNewsItemLink)(t),
                    logoUrlsOrSymbols: t.relatedSymbols ? h(t.relatedSymbols, e) : [],
                    showExternalLink: (0, n.showExternalLink)(t),
                    withHover: (0, r.isInteractiveNewsItem)(t)
                }
            }

            function h(t, e) {
                return (0, s.default)(t, t => {
                    const i = (0, o.resolveLogoUrls)(function(t, e) {
                        if ("crypto" === e && "country/US" === t["currency-logoid"]) return {
                            "base-currency-logoid": t["base-currency-logoid"],
                            symbol: t.symbol
                        };
                        return t
                    }(t, e));
                    return i.length ? i.map(c) : {
                        symbol: t.symbol
                    }
                })
            }

            function c(t) {
                return {
                    logoUrl: t
                }
            }
        },
        328788: (t, e, i) => {
            "use strict";
            i.d(e, {
                getDefaultMarketForLocale: () => u,
                getMarketsByScreenerType: () => d,
                getMarketFieldValuesByScreenerType: () => _,
                marketFilterValues: () => v,
                getMarketFromSymbol: () => b,
                getExchangesByMarkets: () => C
            });
            var s = i(918184);
            const r = i(954122),
                n = i(513141),
                o = {};
            for (const t of n) {
                const e = r[t];
                e.screenerName && (o[e.screenerName] = {
                    flag: e.flag || t,
                    title: window.t(e.title),
                    stocks: e.exchangesStocks || [],
                    timezone: e.screenerTimezone,
                    group: e.group,
                    country: t
                })
            }
            const a = {
                forex: "forex",
                cfd: "cfd",
                crypto: "crypto"
            };
            for (const t of n) {
                const e = r[t];
                e.screenerName && (a[e.tvLocale || t] = e.screenerName)
            }
            const l = i(753985),
                h = {
                    forex: {
                        icon: `<span class="tv-screener-market-select__item-forex">${i(944050)}</span>`,
                        title: s.t("Forex"),
                        stocks: []
                    }
                },
                c = {
                    crypto: {
                        icon: `<span class="tv-screener-market-select__item-bitcoin">${l}</span>`,
                        title: s.t("Cryptocurrencies"),
                        stocks: []
                    }
                };

            function u(t, e = "stock") {
                return "forex" === e ? "forex" : "crypto" === e ? "crypto" : a[t] || "america"
            }

            function d(t) {
                return "stock" === t ? o : "forex" === t ? h : "crypto" === t ? c : o
            }
            const p = {
                    america: {
                        market_cap_basic: [5e7, 3e8, 2e9, 1e10, 5e10, 1e11, 2e12],
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        average_volume_10d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        average_volume_30d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        average_volume_60d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        average_volume_90d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        relative_volume_10d_calc: [0, 5, 10, 15, 20, 50, 75, 100],
                        premarket_volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        postmarket_volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        change_abs: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        change: [-50, -20, -10, 0, 10, 20, 50],
                        open: [10, 20, 50, 100],
                        close: [10, 20, 50, 100],
                        high: [10, 20, 50, 100],
                        low: [10, 20, 50, 100],
                        gap: [-50, -20, -10, 0, 10, 20, 50],
                        price_earnings_ttm: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        price_earnings_to_growth_ttm: [0, 1, 2, 3],
                        price_sales_ratio: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        return_on_assets: [-50, -30, -20, -15, -10, -5, 0, 5, 10, 15, 20, 30, 50],
                        return_on_equity: [-50, -30, -20, -15, -10, -5, 0, 5, 10, 15, 20, 30, 50],
                        debt_to_equity: [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1],
                        current_ratio: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        quick_ratio: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        price_book_fq: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        price_book_ratio: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        price_free_cash_flow_ttm: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100],
                        beta_1_year: [-2, -1.5, -1, -.5, 0, .5, 1, 1.5, 2],
                        operating_margin: [-50, -20, -10, 0, 10, 20, 50],
                        earnings_per_share_basic_ttm: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        ebitda: [5e5, 1e6, 5e6, 1e7, 5e7, 1e8, 5e8, 1e9, 2e9, 5e9, 1e10, 25e9, 5e10],
                        change_from_open: [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.W": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.1M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.3M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.6M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.Y": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.YTD": [-50, -20, -10, 0, 10, 20, 50],
                        "Volatility.W": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.M": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.D": [0, 5, 10, 15, 20, 30, 50, 70],
                        ADX: [10, 20, 30, 40, 50, 60, 70, 80, 90],
                        ATR: [.25, .5, .75, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
                        Mom: [-30, -20, -15, -10, -5, 0, 5, 10, 15, 20, 30],
                        goodwill: [5e7, 3e8, 2e9, 1e10, 2e11],
                        net_debt: [-2e11, -1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11],
                        total_debt: [5e7, 3e8, 2e9, 1e10, 2e11],
                        revenue_per_employee: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        return_on_invested_capital: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        after_tax_margin: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        pre_tax_margin: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        gross_margin: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        dividends_paid: [-2e11, -1e10, -2e9, -3e8, -5e7, 0],
                        dividend_yield_recent: [0, 5, 10, 15, 20, 25, 50, 100],
                        basic_eps_net_income: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        net_income: [-5e10, -1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11],
                        gross_profit: [-2e11, -1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11],
                        gross_profit_fq: [-2e11, -1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11],
                        number_of_shareholders: [100, 500, 1e3, 1e4, 1e5, 1e6],
                        float_shares_outstanding: [5e7, 3e8, 2e9, 1e10, 2e11],
                        total_shares_outstanding_fundamental: [5e7, 3e8, 2e9, 1e10, 2e11],
                        total_assets: [5e7, 3e8, 2e9, 1e10, 2e11],
                        total_current_assets: [5e7, 3e8, 2e9, 1e10, 2e11],
                        total_revenue: [0, 5e7, 3e8, 2e9, 1e10, 2e11, 5e11],
                        total_liabilities_fy: [5e7, 3e8, 2e9, 1e10, 2e11],
                        total_liabilities_fq: [5e7, 3e8, 2e9, 1e10, 2e11],
                        earnings_per_share_diluted_ttm: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        earnings_per_share_forecast_next_fq: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        earnings_per_share_fq: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        enterprise_value_ebitda_ttm: [-5e3, -1e3, 0, 1e3, 5e3],
                        enterprise_value_fq: [-2e11, -1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11],
                        eps_surprise_fq: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        eps_surprise_percent_fq: [-30, -20, -15, -10, -5, 0, 5, 10, 15, 20, 30],
                        price_revenue_ttm: [0, 5, 10, 50, 100, 1e3, 5e3, 1e4],
                        number_of_employees: [100, 500, 1e3, 1e4, 1e5, 1e6],
                        last_annual_eps: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        last_annual_revenue: [5e7, 3e8, 2e9, 1e10, 2e11],
                        CCI20: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        ChaikinMoneyFlow: [-1, -.9, -.8, -.7, -.6, -.5, -.4, -.3, -.2, -.1, 0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1],
                        MoneyFlow: [0, 5, 10, 15, 25, 50, 100],
                        "Value.Traded": [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 5e8, 75e7]
                    },
                    uk: {
                        average_volume_10d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8],
                        open: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        close: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        high: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        low: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        current_ratio: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75, 100],
                        total_shares_outstanding_fundamental: [5e6, 1e7, 5e7, 3e8, 2e9, 1e10, 5e10, 1e11],
                        dividends_paid: [-2e11, -15e10, -5e10, -1e10, -2e9, -3e8, -1e8, -5e7, 0],
                        gross_profit: [-1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11]
                    },
                    india: {
                        market_cap_basic: [1e7, 5e7, 3e8, 2e9, 1e10, 2e11, 5e11, 1e12, 2e12],
                        open: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        close: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        high: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        low: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        quick_ratio: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 500],
                        change_from_open: [-20, -10, 0, 10, 20, 50],
                        revenue_per_employee: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 3e8, 5e8],
                        dividends_paid: [-5e10, -1e10, -2e9, -3e8, -1e8, -5e7, 0],
                        gross_profit: [-1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11],
                        total_shares_outstanding_fundamental: [5e7, 3e8, 2e9, 5e9, 1e10],
                        number_of_employees: [100, 500, 1e3, 1e4, 1e5, 2e5]
                    },
                    spain: {
                        market_cap_basic: [1e7, 3e7, 5e7, 1e8, 3e8, 5e8, 1e9, 1e10, 5e10],
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7],
                        relative_volume_10d_calc: [0, 1, 2, 3, 4, 5, 10],
                        change: [-10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10],
                        gap: [-10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10],
                        quick_ratio: [0, 1, 2, 3, 4, 5, 10],
                        ebitda: [5e5, 1e6, 5e6, 1e7, 5e7, 1e8, 5e8, 1e9, 2e9, 5e9, 1e10, 15e9],
                        "Volatility.W": [0, 5, 10, 15, 20],
                        "Volatility.M": [0, 5, 10, 15, 20],
                        "Volatility.D": [0, 5, 10, 15, 20],
                        Mom: [-15, -10, -5, 0, 5, 10, 15],
                        goodwill: [5e7, 3e8, 2e9, 1e10, 25e9],
                        revenue_per_employee: [1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7],
                        dividends_paid: [-5e9, -2e9, -3e8, -1e8, -5e7, 0],
                        gross_profit: [-2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e10],
                        price_revenue_ttm: [0, 5, 10, 50, 100]
                    },
                    russia: {
                        market_cap_basic: [1e7, 5e7, 3e8, 2e9, 1e10, 2e11, 5e11, 1e12, 2e12],
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 25e7, 5e8, 1e9],
                        average_volume_10d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 25e7, 5e8, 1e9],
                        relative_volume_10d_calc: [0, 1, 2, 3, 4, 5, 10, 15, 20, 50],
                        change: [-30, -20, -15, -10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        open: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3],
                        close: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3],
                        high: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3],
                        low: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3],
                        gap: [-10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10],
                        quick_ratio: [0, 1, 2, 3, 4, 5, 10, 15, 20],
                        price_free_cash_flow_ttm: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        change_from_open: [-10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10],
                        "Volatility.W": [0, 5, 10, 15, 20, 30, 50],
                        "Volatility.M": [0, 5, 10, 15, 20, 30, 50],
                        "Volatility.D": [0, 5, 10, 15, 20, 30, 50],
                        goodwill: [1e7, 5e7, 3e8, 2e9, 1e10, 1e11],
                        revenue_per_employee: [1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 3e7],
                        dividends_paid: [-15e10, -5e10, -1e10, -2e9, -3e8, -1e8, -5e7, 0],
                        gross_profit: [-1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11],
                        price_revenue_ttm: [0, 5, 10, 50, 100],
                        number_of_employees: [100, 500, 1e3, 1e4, 1e5, 5e5],
                        last_annual_eps: [-100, -50, -20, -10, 0, 10, 20, 50, 100, 500, 1e3]
                    },
                    australia: {
                        market_cap_basic: [5e7, 3e8, 2e9, 1e10, 5e10, 1e11, 15e10],
                        earnings_per_share_basic_ttm: [-10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10],
                        ebitda: [5e5, 1e6, 5e6, 1e7, 5e7, 1e8, 5e8, 1e9, 2e9, 5e9, 1e10, 2e10],
                        dividends_paid: [-5e9, -2e9, -3e8, -5e7, 0]
                    },
                    brazil: {
                        market_cap_basic: [1e7, 5e7, 3e8, 2e9, 1e10, 2e11, 5e11, 1e12],
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7],
                        average_volume_10d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7],
                        relative_volume_10d_calc: [0, 1, 2, 3, 4, 5, 10, 15, 20, 50],
                        open: [10, 20, 50, 100, 200, 500, 1e3],
                        close: [10, 20, 50, 100, 200, 500, 1e3],
                        high: [10, 20, 50, 100, 200, 500, 1e3],
                        low: [10, 20, 50, 100, 200, 500, 1e3],
                        earnings_per_share_basic_ttm: [-50, -20, -10, 0, 10, 20, 50],
                        change_from_open: [-20, -10, 0, 10, 20],
                        "Volatility.W": [0, 5, 10, 15, 20],
                        "Volatility.M": [0, 5, 10, 15, 20],
                        goodwill: [5e7, 3e8, 2e9, 1e10],
                        revenue_per_employee: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6],
                        dividends_paid: [-1e10, -2e9, -3e8, -1e8, -5e7, 0],
                        net_income: [-2e10, -1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e10],
                        gross_profit: [-1e8, -5e7, 5e7, 3e8, 2e9, 1e10, 1e11],
                        total_shares_outstanding_fundamental: [5e7, 3e8, 2e9, 5e9, 1e10],
                        total_current_assets: [5e7, 3e8, 2e9, 1e10, 1e11],
                        total_revenue: [0, 5e7, 3e8, 2e9, 1e10, 2e11],
                        price_revenue_ttm: [0, 5, 10, 50, 100, 1e3],
                        number_of_employees: [100, 500, 1e3, 1e4, 1e5],
                        last_annual_eps: [-100, -50, -20, -10, 0, 10, 20]
                    },
                    japan: {
                        market_cap_basic: [1e7, 5e7, 3e8, 2e9, 1e10, 2e11, 5e11, 1e12, 2e12, 5e12],
                        price_revenue_ttm: [0, 5, 10, 50, 100],
                        relative_volume_10d_calc: [0, 5, 10, 15, 20, 50],
                        change: [-30, -20, -10, 0, 10, 20, 30],
                        open: [10, 20, 50, 100, 200, 500, 1e3, 1e4, 1e5],
                        close: [10, 20, 50, 100, 200, 500, 1e3, 1e4, 1e5],
                        high: [10, 20, 50, 100, 200, 500, 1e3, 1e4, 1e5],
                        low: [10, 20, 50, 100, 200, 500, 1e3, 1e4, 1e5],
                        gap: [-20, -10, 0, 10, 20],
                        ebitda: [5e5, 1e6, 5e6, 1e7, 5e7, 1e8, 5e8, 1e9, 2e9, 5e9, 1e10, 25e9, 5e10, 1e11, 2e11, 5e11],
                        change_from_open: [-20, -10, -5, 0, 5, 10, 20],
                        "Volatility.W": [0, 5, 10, 15, 20, 30],
                        "Volatility.M": [0, 5, 10, 15, 20, 30],
                        "Volatility.D": [0, 5, 10, 15, 20, 30],
                        revenue_per_employee: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 5e7]
                    },
                    newzealand: {
                        market_cap_basic: [5e7, 3e8, 2e9, 1e10, 5e10, 1e11],
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7],
                        average_volume_10d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7],
                        relative_volume_10d_calc: [0, 1, 2, 3, 4, 5, 10, 15],
                        open: [5, 10, 20, 50],
                        close: [5, 10, 20, 50],
                        high: [5, 10, 20, 50],
                        low: [5, 10, 20, 50],
                        current_ratio: [0, 5, 10, 15, 20, 25],
                        quick_ratio: [0, 5, 10, 15, 20, 25],
                        earnings_per_share_basic_ttm: [-10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10],
                        ebitda: [5e5, 1e6, 5e6, 1e7, 5e7, 1e8, 5e8, 1e9, 2e9, 5e9, 1e10, 2e10],
                        change_from_open: [-20, -15, -10, -5, 0, 5, 10, 15, 20],
                        "Volatility.W": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        "Volatility.M": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        "Volatility.D": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        ATR: [.25, .5, .75, 1, 1.5, 2],
                        Mom: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
                        goodwill: [25e6, 5e7, 1e8, 25e7, 5e8, 2e9],
                        revenue_per_employee: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6],
                        dividends_paid: [-5e9, -2e9, -3e8, -5e7, 0],
                        basic_eps_net_income: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
                        net_income: [-5e10, -1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 5e9],
                        gross_profit: [0, 25e6, 5e7, 25e7, 5e8, 2e9, 1e10],
                        total_shares_outstanding_fundamental: [5e7, 3e8, 2e9, 1e10],
                        total_current_assets: [5e7, 3e8, 2e9, 1e10],
                        total_revenue: [0, 5e7, 3e8, 2e9, 1e10, 25e9],
                        earnings_per_share_diluted_ttm: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
                        earnings_per_share_forecast_next_fq: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
                        earnings_per_share_fq: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
                        price_revenue_ttm: [0, 5, 10, 50, 100],
                        number_of_employees: [100, 500, 1e3, 1e4, 5e4],
                        last_annual_eps: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
                        "Value.Traded": [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7]
                    },
                    turkey: {
                        market_cap_basic: [5e6, 1e7, 5e7, 3e8, 2e9, 1e10, 3e10, 5e10],
                        relative_volume_10d_calc: [0, 1, 2, 3, 4, 5, 10, 15],
                        change: [-20, -15, -10, -5, 0, 5, 10, 15, 20],
                        gap: [-20, -10, -5, 0, 5, 10, 20],
                        "Volatility.W": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        "Volatility.M": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        "Volatility.D": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        "Value.Traded": [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7]
                    },
                    switzerland: {
                        volume: [5e4, 1e5, 25e4, 5e5, 75e4, 1e6, 2e6, 5e6],
                        average_volume_10d_calc: [5e4, 1e5, 25e4, 5e5, 75e4, 1e6, 2e6, 5e6],
                        change: [-20, -15, -10, -5, 0, 5, 10, 15, 20]
                    },
                    hongkong: {
                        market_cap_basic: [5e7, 3e8, 2e9, 1e10, 5e10, 1e11, 2e11, 25e10, 5e11, 75e10, 1e12],
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 25e7],
                        average_volume_10d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 25e7]
                    },
                    taiwan: {
                        change: [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        "Volatility.W": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        "Volatility.M": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        "Volatility.D": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30]
                    },
                    netherlands: {},
                    belgium: {},
                    portugal: {},
                    france: {},
                    mexico: {
                        market_cap_basic: [1e7, 5e7, 3e8, 2e9, 1e10, 2e11, 5e11, 1e12, 2e12],
                        change: [-30, -20, -15, -10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        open: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3],
                        close: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3],
                        high: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3],
                        low: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3]
                    },
                    canada: {
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7]
                    },
                    colombia: {},
                    uae: {},
                    nigeria: {},
                    singapore: {},
                    germany: {
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 25e6]
                    },
                    peru: {},
                    poland: {
                        volume: [5e4, 1e5, 2e5, 5e5, 75e4, 1e6, 2e6]
                    },
                    italy: {},
                    argentina: {
                        volume: [5e4, 1e5, 2e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7]
                    },
                    israel: {},
                    egypt: {},
                    serbia: {},
                    chile: {},
                    china: {},
                    malaysia: {},
                    ksa: {},
                    bahrain: {},
                    qatar: {},
                    indonesia: {},
                    finland: {},
                    iceland: {},
                    denmark: {},
                    sweden: {},
                    slovakia: {},
                    lithuania: {},
                    luxembourg: {},
                    estonia: {},
                    latvia: {},
                    vietnam: {},
                    rsa: {},
                    thailand: {},
                    korea: {},
                    norway: {},
                    philippines: {},
                    greece: {}
                },
                f = {
                    forex: {
                        change_abs: [-50, -20, -10, 0, 10, 20, 50],
                        change: [-5, -1, -.5, -.4, -.3, -.2, -.1, 0, -.1, .2, .3, .4, .5, 1, 5],
                        bid: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        ask: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        open: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        close: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        high: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        low: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        change_from_open: [-5, -2.5, -1, -.5, -.4, -.3, -.2, -.1, 0, -.1, .2, .3, .4, .5, 1, 2.5, 5],
                        "Perf.W": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.1M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.3M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.6M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.Y": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.YTD": [-50, -20, -10, 0, 10, 20, 50],
                        "Volatility.W": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.M": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.D": [0, 5, 10, 15, 20, 30, 50, 70],
                        ADX: [10, 20, 30, 40, 50, 60, 70, 80, 90],
                        ATR: [.25, .5, .75, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
                        Mom: [-30, -20, -15, -10, -5, 0, 5, 10, 15, 20, 30],
                        CCI20: [-100, -50, -20, -10, 0, 10, 20, 50, 100]
                    }
                },
                g = {
                    crypto: {
                        market_cap_calc: [1e4, 1e5, 5e5, 1e6, 1e7, 3e8, 2e9, 1e10, 5e10, 1e11],
                        market_cap_diluted_calc: [1e4, 1e5, 5e5, 1e6, 1e7, 3e8, 2e9, 1e10, 5e10, 1e11],
                        total_shares_outstanding: [1e6, 5e6, 1e7, 5e7, 1e8, 5e8, 1e9, 5e9, 1e10, 5e10, 1e11],
                        total_shares_diluted: [1e6, 5e6, 1e7, 5e7, 1e8, 5e8, 1e9, 5e9, 1e10, 5e10, 1e11],
                        total_value_traded: [1e4, 1e5, 5e5, 1e6, 1e7, 3e8, 2e9, 1e10, 5e10],
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        average_volume_10d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 3e8, 5e8, 2e9],
                        relative_volume_10d_calc: [0, .5, 1, 1.5, 2, 2.5, 5],
                        change_abs: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        change: [-50, -20, -10, 0, 10, 20, 50],
                        bid: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        ask: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        open: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        close: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        high: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        low: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        change_from_open: [-10, -5, -4, -3, -2, -1, -.5, 0, .5, 1, 2, 3, 4, 5, 10],
                        "Perf.W": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.1M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.3M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.6M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.Y": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.YTD": [-50, -20, -10, 0, 10, 20, 50],
                        "Volatility.W": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.M": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.D": [0, 5, 10, 15, 20, 30, 50, 70],
                        ADX: [10, 20, 30, 40, 50, 60, 70, 80, 90],
                        ATR: [.25, .5, .75, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
                        Mom: [-30, -20, -15, -10, -5, 0, 5, 10, 15, 20, 30],
                        CCI20: [-100, -50, -20, -10, 0, 10, 20, 50, 100]
                    }
                },
                m = {
                    cfd: {
                        volume: [1e3, 5e3, 1e4, 5e4, 1e5],
                        average_volume_10d_calc: [5e3, 1e4, 5e4, 1e5, 1e6, 1e7, 1e8, 1e9],
                        relative_volume_10d_calc: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1],
                        change_abs: [-50, -20, -10, 0, 10, 20, 50],
                        change: [-5, -1, -.5, -.4, -.3, -.2, -.1, 0, -.1, .2, .3, .4, .5, 1, 5],
                        bid: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        ask: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        open: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        close: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        high: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        low: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        change_from_open: [-5, -4, -3, -2, -1, -.5, 0, .5, 1, 2, 3, 4, 5],
                        "Perf.W": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.1M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.3M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.6M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.Y": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.YTD": [-50, -20, -10, 0, 10, 20, 50],
                        "Volatility.W": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.M": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.D": [0, 5, 10, 15, 20, 30, 50, 70],
                        ADX: [10, 20, 30, 40, 50, 60, 70, 80, 90],
                        ATR: [.25, .5, .75, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
                        Mom: [-30, -20, -15, -10, -5, 0, 5, 10, 15, 20, 30],
                        CCI20: [-100, -50, -20, -10, 0, 10, 20, 50, 100]
                    }
                };

            function _(t) {
                switch (t) {
                    case "stock":
                    case "futures":
                        return p;
                    case "forex":
                        return f;
                    case "crypto":
                    case "crypto_mkt":
                        return g;
                    case "cfd":
                        return m
                }
                return p
            }
            const v = {
                    america: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: 1
                            }
                        },
                        earnings_this_week: {
                            earnings_release_next_date: s.t("This Week")
                        }
                    },
                    uk: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    india: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: 2
                            }
                        }
                    },
                    spain: {
                        top_gainers: {
                            close: [1, 1e4]
                        },
                        top_losers: {
                            close: [1, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .1
                            }
                        }
                    },
                    russia: {
                        top_gainers: {
                            close: null
                        },
                        top_losers: {
                            close: null
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .5
                            }
                        }
                    },
                    australia: {
                        top_gainers: {
                            close: null
                        },
                        top_losers: {
                            close: null
                        }
                    },
                    brazil: {
                        top_gainers: {
                            close: null
                        },
                        top_losers: {
                            close: null
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .5
                            }
                        }
                    },
                    japan: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    newzealand: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .2
                            }
                        }
                    },
                    turkey: {
                        top_gainers: {
                            close: null
                        },
                        top_losers: {
                            close: null
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .2
                            }
                        }
                    },
                    switzerland: {
                        top_gainers: {
                            close: [.1, 1e4]
                        },
                        top_losers: {
                            close: [.1, 1e4]
                        }
                    },
                    hongkong: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    taiwan: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    netherlands: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    belgium: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    portugal: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    france: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    mexico: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .5
                            }
                        }
                    },
                    canada: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    singapore: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    germany: {
                        top_gainers: {
                            close: [1, 1e4]
                        },
                        top_losers: {
                            close: [1, 1e4]
                        }
                    },
                    poland: {
                        top_gainers: {
                            close: [1, 1e4]
                        },
                        top_losers: {
                            close: [1, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .5
                            }
                        }
                    },
                    israel: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .5
                            }
                        }
                    },
                    italy: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .5
                            }
                        }
                    },
                    argentina: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .2
                            }
                        }
                    },
                    forex: {
                        top_gainers: {
                            close: null
                        },
                        top_losers: {
                            close: null
                        },
                        most_capitalized: null,
                        earnings_this_week: null,
                        volume_leaders: null,
                        most_volatile: {
                            "Volatility.D": {
                                operator: "greater",
                                value: 1
                            }
                        },
                        unusual_volume: null,
                        high_dividend: null
                    },
                    crypto: {
                        top_gainers: {
                            close: null
                        },
                        top_losers: {
                            close: null
                        },
                        most_capitalized: null,
                        earnings_this_week: null,
                        volume_leaders: null,
                        most_volatile: {
                            "Volatility.D": {
                                operator: "greater",
                                value: 1
                            }
                        },
                        unusual_volume: null,
                        high_dividend: null
                    },
                    china: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    chile: {
                        top_gainers: {
                            close: [1, 1e4]
                        },
                        top_losers: {
                            close: [1, 1e4]
                        }
                    },
                    bahrain: {
                        top_gainers: {
                            close: [.01, 1e4]
                        },
                        top_losers: {
                            close: [.01, 1e4]
                        }
                    },
                    malaysia: {
                        top_gainers: {
                            close: [.01, 1e4]
                        },
                        top_losers: {
                            close: [.01, 1e4]
                        }
                    },
                    serbia: {
                        top_gainers: {
                            close: [.1, 1e4]
                        },
                        top_losers: {
                            close: [.1, 1e4]
                        }
                    },
                    ksa: {
                        top_gainers: {
                            close: [1, 1e4]
                        },
                        top_losers: {
                            close: [1, 1e4]
                        }
                    },
                    egypt: {
                        top_gainers: {
                            close: [1, 1e4]
                        },
                        top_losers: {
                            close: [1, 1e4]
                        }
                    }
                },
                y = {
                    bond: "cfd",
                    cfd: "cfd",
                    crypto: "crypto",
                    dr: "stock",
                    forex: "forex",
                    fund: "stock",
                    futures: "futures",
                    index: "index",
                    right: "stock",
                    stock: "stock",
                    structured: "stock",
                    warrant: "stock"
                },
                b = (t, e, i) => {
                    if (i && 0 !== i.length) {
                        if (i.includes("government")) return "cfd";
                        if (i.includes("warrant") || i.includes("right") || i.includes("structured") || i.includes("bond") || i.includes("convertible") || i.includes("corporate")) return S(t)
                    }
                    const s = y[e];
                    return "stock" === s || "index" === s || "futures" === s ? S(t) : s || e
                },
                w = {
                    EURONEXT: "euronext"
                };

            function S(t) {
                return w[t] || a[(t => {
                    let e = "us";
                    for (const i of n) {
                        const s = r[i];
                        if (s.exchangesStocks && s.exchangesStocks.includes(t) || s.defaultExchange === t) {
                            e = s.tvLocale || i;
                            break
                        }
                    }
                    return e
                })(t)]
            }

            function C(t) {
                return t.reduce((t, e) => t.concat(function(t) {
                    return o[t] && o[t].stocks || []
                }(e)), [])
            }
        },
        129786: (t, e, i) => {
            "use strict";
            i.d(e, {
                DEFAULT_SIZE: () => s
            });
            const s = "large"
        },
        380238: (t, e, i) => {
            "use strict";
            i.d(e, {
                Spinner: () => o
            });
            i(918266);
            var s = i(13548),
                r = i(129786);
            const n = (0, s.parseHtmlElement)('\n\t\t<div class="tv-spinner" role="progressbar">\n\t\t\t<div class="tv-spinner__spinner-layer">\n\t\t\t\t<div class="tv-spinner__background tv-spinner__width_element"></div>\n\t\t\t\t<div class="tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left"></div>\x3c!--\n\t\t\t\t--\x3e<div class="tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right"></div>\n\t\t\t</div>\n\t\t</div>\n\t');
            class o {
                constructor(t) {
                    this._shown = !1, this._el = n.cloneNode(!0), this.setSize(t || r.DEFAULT_SIZE)
                }
                spin(t) {
                    return this._el.classList.add("tv-spinner--shown"),
                        void 0 === this._container && (this._container = t, void 0 !== t && t.appendChild(this._el)), this._shown = !0, this
                }
                stop(t) {
                    return t && void 0 !== this._container && this._container.removeChild(this._el), this._el.classList.remove("tv-spinner--shown"), this._shown = !1, this
                }
                setStyle(t) {
                    return Object.keys(t).forEach(e => {
                        const i = t[e];
                        void 0 !== i && this._el.style.setProperty(e, i)
                    }), this
                }
                style() {
                    return this._el.style
                }
                setSize(t) {
                    const e = void 0 !== t ? "tv-spinner--size_" + t : "";
                    return this._el.className = `tv-spinner ${e} ${this._shown?"tv-spinner--shown":""}`, this
                }
                getEl() {
                    return this._el
                }
                destroy() {
                    this.stop(), delete this._el, delete this._container
                }
            }
        },
        759288: (t, e, i) => {
            "use strict";
            i.d(e, {
                flagUrl: () => r,
                flagHtml: () => n
            });
            var s = i(309622);

            function r(t) {
                return (0, s.flagUrl)(t)
            }

            function n(t) {
                return `<img alt="${t}" src="${r(t)}" class="tv-flag-country tv-flag-country--${t}">`
            }
        },
        309622: (t, e, i) => {
            "use strict";
            i.d(e, {
                flagUrl: () => n,
                getMockedFlag: () => o
            });
            var s = i(953321);
            const r = {
                erl: "eu",
                uk: "gb",
                bitcoin: "btc"
            };

            function n(t, e) {
                t in r && (t = r[t]);
                try {
                    return i(104879)("./flag-square-" + t + ".svg")
                } catch (t) {
                    return o(e)
                }
            }

            function o(t) {
                return t === s.StdTheme.Dark ? i(390291) : i(532559)
            }
        },
        193742: (t, e, i) => {
            "use strict";
            i.d(e, {
                tvSolutionLinkInit: () => n
            });
            var s = i(416282),
                r = i(797087);
            i(754242);

            function n() {
                document.addEventListener("click", t => {
                    const e = t.target,
                        i = e ? e.closest(".js-solution-link") : null;
                    if (null !== i) {
                        const t = i.dataset.solutionId;
                        (0, r.showSupportDialog)({
                            solutionId: parseInt((0, s.ensure)(t))
                        })
                    }
                })
            }
        },
        894770: (t, e, i) => {
            "use strict";
            i.d(e, {
                ChartSession: () => l
            });
            var s = i(896276),
                r = i.n(s),
                n = i(494129),
                o = i(331565);
            const a = (0, i(987380).getLogger)("ChartSession");
            class l extends n.Session {
                constructor(t, e = !1) {
                    super(t, "cs", !1), this._sessionDisabled = !1, this._handler = null, this._criticalError = new(r()), this._disableStatistics = e
                }
                destroy() {
                    this._criticalError.destroy(), this._handler = null, super.destroy()
                }
                serverTimeOffset() {
                    return this._getChartApi().serverTimeOffset()
                }
                switchTimezone(t) {
                    return this._getChartApi().switchTimezone(this.sessionId(), t)
                }
                defaultResolutions() {
                    return this._getChartApi().defaultResolutions()
                }
                availableCurrencies() {
                    return this._getChartApi().availableCurrencies()
                }
                availableUnits() {
                    return this._getChartApi().availableUnits()
                }
                resolveSymbol(t, e, i) {
                    return this._getChartApi().resolveSymbol(this.sessionId(), t, e, i)
                }
                requestFirstBarTime(t, e, i) {
                    return this._getChartApi().requestFirstBarTime(this.sessionId(), t, e, i)
                }
                createSeries(t, e, i, s, r, n, o) {
                    return this._getChartApi().createSeries(this.sessionId(), t, e, i, s, r, n, o)
                }
                modifySeries(t, e, i, s, r, n) {
                    return this._getChartApi().modifySeries(this.sessionId(), t, e, i, s, r, n)
                }
                removeSeries(t) {
                    return !!this.isConnected().value() && this._getChartApi().removeSeries(this.sessionId(), t)
                }
                requestMoreData(t, e, i) {
                    return "number" == typeof t ? this._getChartApi().requestMoreData(this.sessionId(), t) : this._getChartApi().requestMoreData(this.sessionId(), t, e, i)
                }
                requestMoreTickmarks(t, e, i) {
                    return (0, o.isNumber)(t) ? this._getChartApi().requestMoreTickmarks(this.sessionId(), t) : this._getChartApi().requestMoreTickmarks(this.sessionId(), t, e, i)
                }
                requestMetadata(t, e) {
                    const i = () => this._getChartApi().requestMetadata(this.sessionId(), t, e);
                    window.localForageReady.done(i).fail(t => {
                        a.logError("localForage is not initialized, cannot proceed. " + t)
                    })
                }
                isCanCreateStudy(t) {
                    return this._getChartApi().isCanCreateStudy(t)
                }
                createStudy(t, e, i, s, r, n, o) {
                    return this._getChartApi().createStudy(this.sessionId(), t, e, i, s, r, n, o)
                }
                rebindStudy(t, e, i, s, r, n, o) {
                    return this._getChartApi().rebindStudy(this.sessionId(), t, e, i, s, r, n, o)
                }
                modifyStudy(t, e, i, s) {
                    return this._getChartApi().modifyStudy(this.sessionId(), t, e, i, s)
                }
                removeStudy(t, e) {
                    return this._getChartApi().removeStudy(this.sessionId(), t, e)
                }
                createPointset(t, e, i, s, r, n) {
                    return this._getChartApi().createPointset(this.sessionId(), t, e, i, s, r, n)
                }
                modifyPointset(t, e, i, s) {
                    return this._getChartApi().modifyPointset(this.sessionId(), t, e, i, s)
                }
                removePointset(t) {
                    return this._getChartApi().removePointset(this.sessionId(), t)
                }
                setVisibleTimeRange(t, e, i, s, r, n) {
                    0
                }
                criticalError() {
                    return this._criticalError
                }
                connect(t = null) {
                    null !== t && (this._handler = t), super.connect()
                }
                setHandler(t) {
                    this._handler = t
                }
                connected() {
                    return this.isConnected().value() && !this._sessionDisabled
                }
                disable() {
                    this._sessionDisabled = !0
                }
                chartApi() {
                    return this._getChartApi()
                }
                _sendCreateSession() {
                    Object.keys(this).forEach(t => {
                        /^(s|st|symbol_)\d+$/.test(t) && delete this[t]
                    }), this._getChartApi().chartCreateSession(this.sessionId(), this._disableStatistics)
                }
                _sendRemoveSession() {
                    this._getChartApi().chartDeleteSession(this.sessionId())
                }
                _onMessage(t) {
                    this._handler && this._handler(t)
                }
                _onCriticalError(t, e) {
                    this._criticalError.fire(t, e), super._onCriticalError(t, e)
                }
            }
        },
        4543: (t, e, i) => {
            "use strict";

            function s(t, e) {
                return t < e
            }

            function r(t, e, i, s, r) {
                let n = r - s;
                for (; 0 < n;) {
                    const r = n >> 1,
                        o = s + r;
                    i(t(o), e) ? (s = o + 1, n -= r + 1) : n = r
                }
                return s
            }

            function n(t, e, i, s = 0, n = t.length) {
                return r(e => t[e], e, i, s, n)
            }

            function o(t, e, i = 0, r = t.length) {
                return n(t, e, s, i, r)
            }

            function a(t, e, i, s = 0, r = t.length) {
                let n = r - s;
                for (; 0 < n;) {
                    const r = n >> 1,
                        o = s + r;
                    i(e, t[o]) ? n = r : (s = o + 1, n -= r + 1)
                }
                return s
            }

            function l(t, e) {
                return t.filter(t => !e.includes(t))
            }

            function h(t, e) {
                const i = t.indexOf(e);
                return i < 0 ? t.slice() : [e].concat(t.slice(0, i)).concat(t.slice(i + 1))
            }

            function c(t, e, i) {
                const s = new Set(e),
                    r = [],
                    n = [],
                    a = [];
                return t.forEach((t, e) => {
                    s.has(t) ? n.push(t) : (r.push(t), a.push(e))
                }), i = i < t.length - 1 ? o(a, i + 1) : r.length, r.splice(i, 0, ...n), {
                    newItems: r,
                    movedItemsStartIndex: i
                }
            }

            function u(t, e, i) {
                const s = new Set(e),
                    r = [],
                    n = [],
                    a = [];
                return t.forEach((t, e) => {
                    s.has(t) ? n.push(t) : (r.push(t), a.push(e))
                }), i = i <= t.length - 1 ? o(a, i) : r.length, r.splice(i, 0, ...n), {
                    newItems: r,
                    movedItemsStartIndex: i
                }
            }

            function d(t, e) {
                const i = new Set;
                return t.forEach(t => {
                    e.has(t) && i.add(t)
                }), i
            }
            i.d(e, {
                lowerboundExt: () => r,
                lowerbound: () => n,
                upperbound: () => a,
                subtract: () => l,
                moveToHead: () => h,
                moveAfter: () => c,
                moveBefore: () => u,
                intersect: () => d
            })
        },
        826150: (t, e, i) => {
            "use strict";

            function s(t) {
                return t.includes(":") ? t.split(":") : ["", t]
            }
            i.d(e, {
                splitSymbolName: () => s
            })
        },
        673715: (t, e, i) => {
            "use strict";
            var s = i(307833),
                r = [{
                    d: "E-Mini S&P 500",
                    t: "ES"
                }, {
                    d: "E-Mini Nasdaq 100",
                    t: "NQ"
                }, {
                    d: "Gold",
                    t: "GC"
                }, {
                    d: "Silver",
                    t: "SI"
                }, {
                    d: "Crude Oil WTI",
                    t: "CL"
                }, {
                    d: "Natural Gas",
                    t: "NG"
                }, {
                    d: "Australian Dollar",
                    t: "6A"
                }, {
                    d: "Australian Dollar (Floor)",
                    t: "AD"
                }, {
                    d: "Euro FX",
                    t: "6E"
                }, {
                    d: "Euro FX (Floor)",
                    t: "EC"
                }, {
                    d: "Corn",
                    t: "ZC"
                }, {
                    d: "Corn (Floor)",
                    t: "C"
                }, {
                    d: "Eurodollar",
                    t: "GE"
                }, {
                    d: "Eurodollar (Floor)",
                    t: "ED"
                }],
                n = function() {
                    var t = [{
                        pattern: "(",
                        ctor: o
                    }, {
                        pattern: ")",
                        ctor: a
                    }, {
                        pattern: "+",
                        ctor: h
                    }, {
                        pattern: "-",
                        ctor: c
                    }, {
                        pattern: "*",
                        ctor: u
                    }, {
                        pattern: "/",
                        ctor: d
                    }, {
                        pattern: "^",
                        ctor: p
                    }, {
                        pattern: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                        ctor: _
                    }, {
                        pattern: /\./,
                        ctor: b
                    }, {
                        pattern: s.enabled("charting_library_base") ? /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&]*|'.+?'/ : /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&]*|'.+?'/,
                        ctor: m
                    }, {
                        pattern: /'[^']*/,
                        ctor: y
                    }, {
                        pattern: /[\0-\x20\s]+/,
                        ctor: n
                    }];

                    function e(t, e) {
                        var i = function() {};
                        return i.prototype = e.prototype, t.prototype = new i, t
                    }

                    function i() {}

                    function n(t) {
                        this.value = t
                    }

                    function o() {}

                    function a() {}

                    function l() {}

                    function h() {}

                    function c() {}

                    function u() {}

                    function d() {}

                    function p() {}
                    i.prototype.toString = function() {
                        return this.value
                    }, e(n, i), e(o, i), o.prototype.value = "(", e(a, i), a.prototype.value = ")", e(l, i), e(h, l), h.prototype.value = "+", h.prototype.precedence = 0, h.prototype.commutative = !0, e(c, l), c.prototype.value = "-", c.prototype.precedence = 0, c.prototype.commutative = !1, e(u, l), u.prototype.value = "*", u.prototype.precedence = 1, u.prototype.commutative = !0, e(d, l), d.prototype.value = "/", d.prototype.precedence = 1, d.prototype.commutative = !1, e(p, l), p.prototype.value = "^", p.prototype.precedence = 2, p.prototype.commutative = !1;
                    var f = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i,
                        g = /[+\-/*]/;

                    function m(t) {
                        this.value = t
                    }

                    function _(t) {
                        this.value = t
                    }

                    function v(t) {
                        this.value = t
                    }

                    function y() {
                        m.apply(this, arguments)
                    }

                    function b() {
                        _.apply(this, arguments)
                    }
                    e(m, i), m.prototype.toString = function() {
                        if (this.hasOwnProperty("_ticker")) {
                            var t = g.test(this._ticker) ? "'" : "";
                            return t + (this._exchange ? this._exchange + ":" : "") + this._ticker + t
                        }
                        return this.value
                    }, m.prototype.parse = function() {
                        var t = f.exec(this.value);
                        t[1] && (this._exchange = t[1]), this._ticker = t[2]
                    }, m.prototype.parseAsFutures = function() {
                        this.hasOwnProperty("_ticker") || this.parse();
                        for (var t = function(t) {
                                return r.some((function(e) {
                                    return e.t === t
                                }))
                            }, e = 2; e >= 1; --e) {
                            var i = this._ticker.slice(0, e);
                            if (t(i)) {
                                this._root = i, this._contract = this._ticker.slice(e);
                                break
                            }
                        }
                    }, m.prototype.exchange = function(t) {
                        if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._exchange;
                        null == t ? delete this._exchange : this._exchange = t + ""
                    }, m.prototype.ticker = function(t) {
                        if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._ticker;
                        null == t ? delete this._ticker : this._ticker = t + "", delete this._root, delete this._contract
                    }, m.prototype.root = function(t) {
                        if (this.hasOwnProperty("_root") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                        null == t ? delete this._root : (this._root = t + "", this._root && (this._ticker = this._root + (this._contract || "")))
                    }, m.prototype.contract = function(t) {
                        if (this.hasOwnProperty("_contract") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                        null == t ? delete this._contract : (this._contract = t + "", this._root && (this._ticker = this._root + this._contract))
                    }, e(_, i), _.prototype.toString = function() {
                        return this.hasOwnProperty("_normalizedValue") ? this._normalizedValue : this.value
                    }, _.prototype.parse = function() {
                        this._normalizedValue = this.value.replace(/^0+|\.0*$/g, "").replace(/(\.\d*?)0+$/, "$1").replace(/^(\.|$)/, "0$1")
                    }, v.prototype.toString = function() {
                        return this.value
                    }, e(y, m), y.prototype.isIncomplete = !0, y.prototype.incompleteSuggest = function() {
                        if ("'" !== this.value) return String("'")
                    }, e(b, _), b.prototype.isIncomplete = !0;
                    var w = new RegExp(t.map((function(t) {
                        return "(" + ("string" == typeof t.pattern ? t.pattern.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&") : t.pattern.source) + ")"
                    })).concat(".").join("|"), "g");

                    function S(e, i) {
                        var s, r = [];
                        t: for (; s = w.exec(e);) {
                            for (var o = t.length; o--;)
                                if (s[o + 1]) {
                                    if (t[o].ctor) {
                                        var a = new t[o].ctor(s[o + 1]);
                                        a._offset = s.index, r.push(a)
                                    }
                                    continue t
                                }
                            var l = new v(s[0]);
                            l._offset = s.index, r.push(l)
                        }
                        if (i && i.recover) {
                            var h;
                            for (o = r.length; o--;) {
                                var c = r[o];
                                if (c instanceof _ || c instanceof m) {
                                    if (void 0 !== h) {
                                        var u = new m(""),
                                            d = r.splice(o, h - o + 1, u);
                                        u.value = d.map((function(t) {
                                            return t.value
                                        })).join("")
                                    }
                                    h = o
                                } else c instanceof n || (h = void 0)
                            }
                        }
                        return r
                    }

                    function C(t) {
                        for (var e = [], i = 0; i < t.length; i++) t[i] instanceof n || e.push(t[i]);
                        return e
                    }

                    function x(t) {
                        t = C(t);
                        for (var e, i = [], s = [], r = 0; r < t.length; r++) {
                            var n = t[r];
                            if (n instanceof l) s.length && s[s.length - 1].minPrecedence > n.precedence && (s[s.length - 1].minPrecedence = n.precedence);
                            else if (n instanceof o) s.push(e = {
                                minPrecedence: 1 / 0,
                                openBraceIndex: r
                            });
                            else if (n instanceof a) {
                                var h = t[(e = s.pop()).openBraceIndex - 1],
                                    c = t[r + 1];
                                c instanceof l && !(c.precedence <= e.minPrecedence) || !(!(h instanceof l) || h.precedence < e.minPrecedence || h.precedence === e.minPrecedence && h.commutative) || (i.unshift(e.openBraceIndex), i.push(r), s.length && s[s.length - 1].minPrecedence > e.minPrecedence && (s[s.length - 1].minPrecedence = e.minPrecedence))
                            }
                        }
                        for (r = i.length; r--;) t.splice(i[r], 1);
                        return t
                    }

                    function M(t) {
                        if ("string" != typeof t) throw new TypeError("expression must be a string");
                        return (t = S(t)).filter((function(t) {
                            return t instanceof m
                        })).map((function(t) {
                            return t.exchange()
                        })).filter((function(t) {
                            return t
                        }))
                    }

                    function k(t) {
                        return 1 !== (t = M(t)).length ? null : t[0]
                    }

                    function E(t, e) {
                        return (t = M(t)).some((function(t) {
                            return e.includes((t || "").toUpperCase())
                        }))
                    }

                    function P(t) {
                        return t.join("")
                    }
                    return {
                        tokenize: S,
                        validate: function(t) {
                            if (s.enabled("charting_library_base")) return {
                                currentState: "var"
                            };
                            for (var e = "init", i = {
                                    warnings: [],
                                    errors: [],
                                    isEmpty: !0
                                }, r = [], h = 0; h < t.length; h++) {
                                if (!((u = t[h]) instanceof n)) {
                                    if (delete i.isEmpty, u.isIncomplete) {
                                        var c = {
                                            status: "incomplete",
                                            reason: "incomplete_token",
                                            offset: u._offset,
                                            token: u
                                        };
                                        if (u.incompleteSuggest && (c.recover = {
                                                append: u.incompleteSuggest()
                                            }), i.warnings.push(c), h !== t.length - 1) {
                                            c.status = "error";
                                            continue
                                        }
                                    }
                                    if (u instanceof m || u instanceof _) {
                                        if ("var" === e) {
                                            i.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: u._offset,
                                                token: u
                                            });
                                            continue
                                        }
                                        e = "var"
                                    } else if (u instanceof l) {
                                        if ("var" !== e) {
                                            i.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: u._offset,
                                                token: u
                                            });
                                            continue
                                        }
                                        e = "operator"
                                    } else if (u instanceof o) {
                                        if ("var" === e) {
                                            i.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: u._offset,
                                                token: u
                                            });
                                            continue
                                        }
                                        r.push(u), e = "init"
                                    } else if (u instanceof a) {
                                        if ("var" !== e) {
                                            i.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: u._offset,
                                                token: u
                                            });
                                            continue
                                        }
                                        r.pop() || i.errors.push({
                                            status: "error",
                                            reason: "unbalanced_brace",
                                            offset: u._offset,
                                            token: u,
                                            recover: {
                                                prepend: new o
                                            }
                                        }), e = "var"
                                    } else u instanceof v && i.errors.push({
                                        status: "error",
                                        reason: "unparsed_entity",
                                        offset: u._offset,
                                        token: u
                                    })
                                }
                            }
                            for (i.braceBalance = r.length, "var" !== e && i.warnings.push({
                                    status: "incomplete"
                                }); r.length;) {
                                var u;
                                c = {
                                    status: "incomplete",
                                    reason: "unbalanced_brace",
                                    offset: (u = r.pop())._offset,
                                    token: u
                                };
                                "var" === e && (c.recover = {
                                    append: new a
                                }), i.warnings.push(c)
                            }
                            return i.currentState = e, 0 === i.warnings.length && delete i.warnings, 0 === i.errors.length && delete i.errors, i
                        },
                        factorOutBraces: x,
                        normalizeTokens: function(t) {
                            for (var e = 0; e < t.length; e++) t[e].parse && t[e].parse();
                            return t
                        },
                        flip: function(t) {
                            var e = function(t) {
                                for (var e, i = 0, s = 0, r = 0; r < t.length; r++) {
                                    var h = t[r];
                                    if (!(h instanceof n)) switch (i) {
                                        case 0:
                                            if (!(h instanceof _ && 1 == +h.value)) return !1;
                                            i = 1;
                                            break;
                                        case 1:
                                            if (!(1 === i && h instanceof d)) return !1;
                                            i = 2, e = r + 1;
                                            break;
                                        case 2:
                                            if (h instanceof o) i = 3, s = 1;
                                            else if (h instanceof l) return !1;
                                            break;
                                        case 3:
                                            h instanceof o ? s++ : h instanceof a && --s <= 0 && (i = 2)
                                    }
                                }
                                return t.slice(e)
                            }(t);
                            return x(e || [new _("1"), new d, new o].concat(t).concat(new a))
                        },
                        hasBatsSymbols: function(t) {
                            return E(t, ["BATS"])
                        },
                        hasEodSymbols: function(t) {
                            return (t = k(t)) && -1 !== t.toUpperCase().indexOf("_EOD")
                        },
                        hasChxjpySymbols: function(t) {
                            return E(t, ["CHXJPY"])
                        },
                        hasFreeDelaySymbols: function(t) {
                            return E(t, pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(t) {
                                return t.exchange.toUpperCase() + "_DLY"
                            })))
                        },
                        getExchange: k,
                        getExchanges: M,
                        isExchange: function(t, e) {
                            return !!(t = k(t)) && t.substring(0, e.length) === e
                        },
                        SymbolToken: m,
                        IncompleteSymbolToken: y,
                        NumberToken: _,
                        BinaryOperatorToken: l,
                        OpenBraceToken: o,
                        CloseBraceToken: a,
                        ticker: function(t) {
                            return new m(t).ticker()
                        },
                        shortName: function(t) {
                            if ("string" != typeof t) throw new TypeError("expression must be a string");
                            var e = x(C(S(t)));
                            return e.forEach((function(t) {
                                t instanceof m && t.exchange(null)
                            })), P(e)
                        },
                        normalize: function(t) {
                            if ("string" != typeof t) throw new TypeError("expression must be a string");
                            return P(x(C(S(t))))
                        }
                    }
                }();
            t.exports = n
        },
        218194: (t, e, i) => {
            "use strict";
            i.d(e, {
                quoteFieldTitles: () => r
            });
            var s = i(120220);
            i(568421);
            const r = {
                name: [(0, s.t)("Ticker"), (0, s.t)("Ticker")],
                description: [(0, s.t)("Description"), (0, s.t)("Description")],
                country: [(0, s.t)("Country"), (0, s.t)("Country")],
                type: [(0, s.t)("Symbol Type"), (0, s.t)("Symbol Type")],
                after_tax_margin: [(0, s.t)("Net Margin (TTM)"), (0, s.t)("Net Margin")],
                average_volume: [(0, s.t)("Average Volume (10 day)"), (0, s.t)("Avg Vol (10)")],
                average_volume_30d_calc: [(0, s.t)("Average Volume (30 day)"), (0, s.t)("Avg Vol (30)")],
                average_volume_60d_calc: [(0, s.t)("Average Volume (60 day)"), (0, s.t)("Avg Vol (60)")],
                average_volume_90d_calc: [(0, s.t)("Average Volume (90 day)"), (0, s.t)("Avg Vol (90)")],
                basic_eps_net_income: [(0,
                    s.t)("Basic EPS (FY)"), (0, s.t)("EPS (FY)")],
                beta_1_year: [(0, s.t)("1-Year Beta"), (0, s.t)("1-Y Beta")],
                beta_3_year: [(0, s.t)("Beta - 3 Year"), (0, s.t)("Beta 3Y")],
                beta_5_year: [(0, s.t)("Beta - 5 Year"), (0, s.t)("Beta 5Y")],
                candlestick: [(0, s.t)("Pattern", {
                    context: "candlestick_pattern"
                }), (0, s.t)("Pattern", {
                    context: "candlestick_pattern"
                })],
                current_ratio: [(0, s.t)("Current Ratio (MRQ)"), (0, s.t)("Current Ratio")],
                debt_to_assets: [(0, s.t)("Debt to Assets"), (0, s.t)("Debt to Assets")],
                debt_to_equity: [(0, s.t)("Debt to Equity Ratio (MRQ)"), (0, s.t)("DEBT/EQUITY")],
                dividends_paid: [(0, s.t)("Dividends Paid (FY)"), (0, s.t)("Div Paid")],
                dividends_per_share_fq: [(0, s.t)("Dividends per Share (MRQ)"), (0, s.t)("Div per Share (MRQ)")],
                dividends_yield: [(0, s.t)("Dividends Yield (FY)"), (0, s.t)("Div Yield")],
                dividend_yield_recent: [(0, s.t)("Dividends Yield (FY)"), (0, s.t)("Div Yield")],
                dps_common_stock_prim_issue_fy: [(0, s.t)("Dividends per Share (FY)"), (0, s.t)("Div per Share (FY)")],
                earnings_per_share_basic_ttm: [(0, s.t)("Basic EPS (TTM)"), (0, s.t)("EPS (TTM)")],
                earnings_per_share_diluted_ttm: [(0, s.t)("EPS Diluted (TTM)"), (0, s.t)("EPS Diluted (TTM)")],
                earnings_per_share_forecast_next_fq: [(0, s.t)("EPS Forecast (FQ)"), (0, s.t)("EPS Forecast")],
                earnings_per_share_fq: [(0, s.t)("EPS Diluted (MRQ)"), (0, s.t)("EPS Diluted (MRQ)")],
                earnings_release_date: [(0, s.t)("Recent Earnings Date"), (0, s.t)("Recent Earnings Date")],
                earnings_release_next_date: [(0, s.t)("Upcoming Earnings Date"), (0, s.t)("Upcoming Earnings Date")],
                ebitda: [(0, s.t)("EBITDA (TTM)"), (0, s.t)("EBITDA")],
                enterprise_value_ebitda_ttm: [(0, s.t)("Enterprise Value/EBITDA (TTM)"), (0, s.t)("EV/EBITDA")],
                enterprise_value_fq: [(0, s.t)("Enterprise Value (MRQ)"), (0, s.t)("EV")],
                exchange: [(0, s.t)("Exchange"), (0, s.t)("Exchange")],
                gross_margin: [(0, s.t)("Gross Margin (TTM)"), (0, s.t)("Gross Margin")],
                gross_profit: [(0, s.t)("Gross Profit (FY)"), (0, s.t)("Gross Profit (FY)")],
                gross_profit_fq: [(0, s.t)("Gross Profit (MRQ)"), (0, s.t)("Gross Profit (MRQ)")],
                index: [(0, s.t)("Index"), (0, s.t)("Index")],
                industry: [(0, s.t)("Industry"), (0, s.t)("Industry")],
                last_annual_eps: [(0, s.t)("EPS Diluted (FY)"), (0, s.t)("EPS Diluted (FY)")],
                last_annual_revenue: [(0, s.t)("Last Year Revenue (FY)"), (0, s.t)("Annual Rev")],
                long_term_capital: [(0, s.t)("Capital Long Term"), (0, s.t)("Capital Long Term")],
                market_cap_basic: [(0, s.t)("Market Capitalization"), (0, s.t)("Mkt Cap")],
                market_cap_calc: [(0, s.t)("Market Capitalization"), (0, s.t)("Mkt Cap")],
                market_cap_diluted_calc: [(0, s.t)("Fully Diluted Market Cap"), (0, s.t)("FD Mkt Cap")],
                net_debt: [(0, s.t)("Net Debt (MRQ)"), (0, s.t)("Net Debt")],
                net_income: [(0, s.t)("Net Income (FY)"), (0, s.t)("Income")],
                number_of_employees: [(0, s.t)("Number of Employees"), (0, s.t)("EMPLOYEES")],
                number_of_shareholders: [(0, s.t)("Number of Shareholders"), (0, s.t)("Shareholders")],
                open_price: [(0, s.t)("Open Price"), (0, s.t)("Open")],
                operating_margin: [(0, s.t)("Operating Margin (TTM)"), (0, s.t)("Operating Margin")],
                pre_tax_margin: [(0, s.t)("Pretax Margin (TTM)"), (0, s.t)("Pretax Margin")],
                preferred_dividends: [(0, s.t)("Dividends Preferred"), (0, s.t)("Div Pref")],
                prev_close_price: [(0, s.t)("Previous Close Price"), (0, s.t)("Prev")],
                price_52_week_high: [(0, s.t)("52 Week High"), (0, s.t)("High 52W")],
                price_52_week_low: [(0, s.t)("52 Week Low"), (0, s.t)("Low 52W")],
                price_book_ratio: [(0, s.t)("Price to Book (FY)"), (0, s.t)("P/B (FY)")],
                price_earnings_ttm: [(0, s.t)("Price to Earnings Ratio (TTM)"), (0, s.t)("P/E")],
                price_percent_change_1_week: [(0, s.t)("Price % Change 1 Week"), (0, s.t)("Chng 1W")],
                price_percent_change_4_week: [(0, s.t)("Price % Change 4 Week"), (0, s.t)("Chng 4W")],
                price_percent_change_52_week: [(0, s.t)("Price % Change 52 Week"), (0, s.t)("Chng 52W")],
                price_revenue_ttm: [(0, s.t)("Price to Revenue Ratio (TTM)"), (0, s.t)("Price/Rev")],
                price_sales_ratio: [(0, s.t)("Price to Sales (FY)"), (0, s.t)("P/S")],
                quick_ratio: [(0, s.t)("Quick Ratio (MRQ)"), (0, s.t)("Quick Ratio")],
                return_of_invested_capital_percent_ttm: [(0, s.t)("Return on Invested Capital % (TTM)"), (0, s.t)("ROI %")],
                return_on_assets: [(0, s.t)("Return on Assets (TTM)"), (0, s.t)("ROA")],
                return_on_equity: [(0, s.t)("Return on Equity (TTM)"), (0, s.t)("ROE")],
                return_on_invested_capital: [(0, s.t)("Return on Invested Capital (TTM)"), (0, s.t)("ROI %")],
                revenue_per_employee: [(0, s.t)("Revenue per Employee (TTM)"), (0, s.t)("Revenue per Employee")],
                sector: [(0, s.t)("Sector"), (0, s.t)("Sector")],
                submarket: [(0, s.t)("Submarket"), (0, s.t)("Submarket")],
                is_primary: [(0, s.t)("Show primary exchange symbols only"), (0, s.t)("Show primary exchange symbols only")],
                eps_surprise_fq: [(0, s.t)("Surprise"), (0, s.t)("Surprise")],
                eps_surprise_percent_fq: [(0, s.t)("Surprise %"), (0, s.t)("Surprise %")],
                total_assets: [(0, s.t)("Total Assets (MRQ)"), (0, s.t)("Assets")],
                total_capital: [(0, s.t)("Total Capital"), (0, s.t)("Capital")],
                total_current_assets: [(0, s.t)("Total Current Assets (MRQ)"), (0, s.t)("Current Assets")],
                total_debt: [(0, s.t)("Total Debt (MRQ)"), (0, s.t)("Debt")],
                total_revenue: [(0, s.t)("Total Revenue (FY)"), (0, s.t)("Revenue")],
                total_liabilities_fy: [(0, s.t)("Total Liabilities (FY)"), (0, s.t)("Liabilities (FY)")],
                total_liabilities_fq: [(0, s.t)("Total Liabilities (MRQ)"), (0, s.t)("Liabilities (MRQ)")],
                total_shares_outstanding_fundamental: [(0, s.t)("Total Shares Outstanding (MRQ)"), (0, s.t)("Shares")],
                volume: [(0, s.t)("Volume"), (0, s.t)("Vol")],
                relative_volume: [(0, s.t)("Relative Volume"), (0, s.t)("Relative Vol")],
                change_abs: [(0, s.t)("Change"), (0, s.t)("Chg")],
                change: [(0, s.t)("Change %"), (0, s.t)("Chg %")],
                "change.1": [(0, s.t)("Change {resolution}, %").format({
                    resolution: (0, s.t)("1m")
                }), (0, s.t)("{resolution} CHG %").format({
                    resolution: (0, s.t)("1m")
                })],
                "change_abs.1": [(0, s.t)("Change {resolution}").format({
                    resolution: (0, s.t)("1m")
                }), (0, s.t)("{resolution} CHG").format({
                    resolution: (0, s.t)("1m")
                })],
                "change.5": [(0, s.t)("Change {resolution}, %").format({
                    resolution: (0, s.t)("5m")
                }), (0, s.t)("{resolution} CHG %").format({
                    resolution: (0, s.t)("5m")
                })],
                "change_abs.5": [(0, s.t)("Change {resolution}").format({
                    resolution: (0, s.t)("5m")
                }), (0, s.t)("{resolution} CHG").format({
                    resolution: (0, s.t)("5m")
                })],
                "change.15": [(0, s.t)("Change {resolution}, %").format({
                    resolution: (0, s.t)("15m")
                }), (0, s.t)("{resolution} CHG %").format({
                    resolution: (0, s.t)("15m")
                })],
                "change_abs.15": [(0, s.t)("Change {resolution}").format({
                    resolution: (0, s.t)("15m")
                }), (0, s.t)("{resolution} CHG").format({
                    resolution: (0, s.t)("15m")
                })],
                "change.60": [(0, s.t)("Change {resolution}, %").format({
                    resolution: (0, s.t)("1h")
                }), (0, s.t)("{resolution} CHG %").format({
                    resolution: (0, s.t)("1h")
                })],
                "change_abs.60": [(0, s.t)("Change {resolution}").format({
                    resolution: (0, s.t)("1h")
                }), (0, s.t)("{resolution} CHG").format({
                    resolution: (0, s.t)("1h")
                })],
                "change.240": [(0, s.t)("Change {resolution}, %").format({
                    resolution: (0, s.t)("4h")
                }), (0, s.t)("{resolution} CHG %").format({
                    resolution: (0, s.t)("4h")
                })],
                "change_abs.240": [(0, s.t)("Change {resolution}").format({
                    resolution: (0, s.t)("4h")
                }), (0, s.t)("{resolution} CHG").format({
                    resolution: (0, s.t)("4h")
                })],
                "change.1W": [(0, s.t)("Change {resolution}, %").format({
                    resolution: (0, s.t)("1W")
                }), (0, s.t)("{resolution} CHG %").format({
                    resolution: (0, s.t)("1W")
                })],
                "change_abs.1W": [(0, s.t)("Change {resolution}").format({
                    resolution: (0, s.t)("1W")
                }), (0, s.t)("{resolution} CHG").format({
                    resolution: (0, s.t)("1W")
                })],
                "change.1M": [(0, s.t)("Change {resolution}, %").format({
                    resolution: (0, s.t)("1M")
                }), (0, s.t)("{resolution} CHG %").format({
                    resolution: (0, s.t)("1M")
                })],
                "change_abs.1M": [(0, s.t)("Change {resolution}").format({
                    resolution: (0, s.t)("1M")
                }), (0, s.t)("{resolution} CHG").format({
                    resolution: (0, s.t)("1M")
                })],
                pre_change: [(0, s.t)("Pre-market Change %"), (0, s.t)("Pre-market chg %")],
                post_change: [(0, s.t)("Post-market Change %"), (0, s.t)("Post-market chg %")],
                bid: [(0, s.t)("Bid"), (0, s.t)("Bid")],
                ask: [(0, s.t)("Ask"), (0, s.t)("Ask")],
                close: [(0, s.t)("Close"), (0, s.t)("Close")],
                open: [(0, s.t)("Open"), (0, s.t)("Open")],
                high: [(0, s.t)("High"), (0, s.t)("High")],
                low: [(0, s.t)("Low"), (0, s.t)("Low")],
                gap: [(0, s.t)("Gap %"), (0, s.t)("Gap %")],
                price_earnings_to_growth_ttm: [(0, s.t)("Price/Earnings/Growth (TTM)"), (0, s.t)("PEG")],
                price_sales: [(0, s.t)("Price/Sales"), (0, s.t)("Price/Sales")],
                price_book_fq: [(0, s.t)("Price to Book (MRQ)"), (0, s.t)("P/B (MRQ)")],
                price_free_cash_flow_ttm: [(0, s.t)("Price to Free Cash Flow (TTM)"), (0, s.t)("Price/Free Cash Flow")],
                float_shares_outstanding: [(0, s.t)("Shares Float"), (0, s.t)("Float")],
                free_cash_flow: [(0, s.t)("Free Cash Flow (TTM)"), (0, s.t)("Free Cash Flow")],
                total_shares_outstanding: [(0, s.t)("Shares Outstanding"), (0, s.t)("Shares Outstanding")],
                total_shares_diluted: [(0, s.t)("Total Coins"), (0, s.t)("Total Coins")],
                total_value_traded: [(0, s.t)("Traded Volume"), (0, s.t)("Traded Vol")],
                change_from_open: [(0, s.t)("Change from Open %"), (0, s.t)("Chg from Open %")],
                change_from_open_abs: [(0, s.t)("Change from Open"), (0, s.t)("Chg from Open")],
                "Perf.W": [(0, s.t)("Weekly Performance"), (0, s.t)("Weekly Perf")],
                "Perf.1M": [(0, s.t)("Monthly Performance"), (0, s.t)("Monthly Perf")],
                "Perf.3M": [(0, s.t)("3-Month Performance"), (0, s.t)("3-Month Perf")],
                "Perf.6M": [(0, s.t)("6-Month Performance"), (0, s.t)("6-Month Perf")],
                "Perf.Y": [(0, s.t)("Yearly Performance"), (0, s.t)("Yearly Perf")],
                "Perf.YTD": [(0, s.t)("YTD Performance"), (0, s.t)("YTD Perf")],
                "Volatility.W": [(0, s.t)("Volatility Week"), (0, s.t)("Volatility W")],
                "Volatility.M": [(0, s.t)("Volatility Month"), (0, s.t)("Volatility M")],
                "Volatility.D": [(0, s.t)("Volatility"), (0, s.t)("Volatility")],
                RSI: [(0, s.t)("Relative Strength Index (14)"), (0, s.t)("RSI14")],
                RSI7: [(0, s.t)("Relative Strength Index (7)"), (0, s.t)("RSI7")],
                ADX: [(0, s.t)("Average Directional Index (14)"), (0, s.t)("ADX")],
                "ADX+DI": [(0, s.t)("Positive Directional Indicator (14)"), (0, s.t)("+DI", {
                    context: "Positive_Directional_Indicator_short_title"
                })],
                "ADX-DI": [(0, s.t)("Negative Directional Indicator (14)"), (0, s.t)("-DI", {
                    context: "Negative_Directional_Indicator_short_title"
                })],
                ATR: [(0, s.t)("Average True Range (14)"), (0, s.t)("ATR")],
                Mom: [(0, s.t)("Momentum (10)"), (0, s.t)("MOM")],
                "High.All": [(0, s.t)("All Time High"), (0, s.t)("All Time High")],
                "Low.All": [(0, s.t)("All Time Low"), (0, s.t)("All Time Low")],
                "High.6M": [(0, s.t)("6-Month High"), (0, s.t)("6-Month High")],
                "Low.6M": [(0, s.t)("6-Month Low"), (0, s.t)("6-Month Low")],
                "High.3M": [(0, s.t)("3-Month High"), (0, s.t)("3-Month High")],
                "Low.3M": [(0, s.t)("3-Month Low"), (0, s.t)("3-Month Low")],
                "High.1M": [(0, s.t)("1-Month High"), (0, s.t)("1-Month High")],
                "Low.1M": [(0, s.t)("1-Month Low"), (0, s.t)("1-Month Low")],
                EMA5: [(0, s.t)("Exponential Moving Average ({number})").format({
                    number: "5"
                }), (0, s.t)("EMA5")],
                EMA10: [(0, s.t)("Exponential Moving Average ({number})").format({
                    number: "10"
                }), (0, s.t)("EMA10")],
                EMA20: [(0, s.t)("Exponential Moving Average ({number})").format({
                    number: "20"
                }), (0, s.t)("EMA20")],
                EMA30: [(0, s.t)("Exponential Moving Average ({number})").format({
                    number: "30"
                }), (0, s.t)("EMA30")],
                EMA50: [(0, s.t)("Exponential Moving Average ({number})").format({
                    number: "50"
                }), (0, s.t)("EMA50")],
                EMA100: [(0, s.t)("Exponential Moving Average ({number})").format({
                    number: "100"
                }), (0, s.t)("EMA100")],
                EMA200: [(0, s.t)("Exponential Moving Average ({number})").format({
                    number: "200"
                }), (0, s.t)("EMA200")],
                SMA5: [(0, s.t)("Simple Moving Average ({number})").format({
                    number: "5"
                }), (0, s.t)("SMA5")],
                SMA10: [(0, s.t)("Simple Moving Average ({number})").format({
                    number: "10"
                }), (0, s.t)("SMA10")],
                SMA20: [(0, s.t)("Simple Moving Average ({number})").format({
                    number: "20"
                }), (0, s.t)("SMA20")],
                SMA30: [(0, s.t)("Simple Moving Average ({number})").format({
                    number: "30"
                }), (0, s.t)("SMA30")],
                SMA50: [(0, s.t)("Simple Moving Average ({number})").format({
                    number: "50"
                }), (0, s.t)("SMA50")],
                SMA100: [(0, s.t)("Simple Moving Average ({number})").format({
                    number: "100"
                }), (0, s.t)("SMA100")],
                SMA200: [(0, s.t)("Simple Moving Average ({number})").format({
                    number: "200"
                }), (0, s.t)("SMA200")],
                "Stoch.K": [(0, s.t)("Stochastic %K (14, 3, 3)"), (0, s.t)("Stoch %K")],
                "Stoch.D": [(0, s.t)("Stochastic %D (14, 3, 3)"), (0, s.t)("Stoch %D")],
                "MACD.macd": [(0, s.t)("MACD Level (12, 26)"), (0, s.t)("MACD Level")],
                "MACD.signal": [(0, s.t)("MACD Signal (12, 26)"), (0, s.t)("MACD Signal")],
                "Aroon.Up": [(0, s.t)("Aroon Up (14)"), (0, s.t)("Aroon Up")],
                "Aroon.Down": [(0, s.t)("Aroon Down (14)"), (0, s.t)("Aroon Down")],
                "BB.upper": [(0, s.t)("Bollinger Upper Band (20)"), (0, s.t)("BB Up")],
                "BB.lower": [(0, s.t)("Bollinger Lower Band (20)"), (0, s.t)("BB Low")],
                goodwill: [(0, s.t)("Goodwill"), (0, s.t)("Goodwill")],
                debt_to_equity_fq: [(0,
                    s.t)("Debt/Equity, MRQ"), (0, s.t)("Debt/Eq")],
                CCI20: [(0, s.t)("Commodity Channel Index (20)"), (0, s.t)("CCI20")],
                "DonchCh20.Upper": [(0, s.t)("Donchian Channels Upper Band (20)"), (0, s.t)("DonchCh20 Up")],
                "DonchCh20.Lower": [(0, s.t)("Donchian Channels Lower Band (20)"), (0, s.t)("DonchCh20 Low")],
                HullMA9: [(0, s.t)("Hull Moving Average (9)"), (0, s.t)("HullMA9")],
                AO: [(0, s.t)("Awesome Oscillator"), (0, s.t)("AO")],
                "Pivot.M.Classic.S3": [(0, s.t)("1-Month Pivot Classic S3"), (0, s.t)("S3")],
                "Pivot.M.Classic.S2": [(0, s.t)("1-Month Pivot Classic S2"), (0, s.t)("S2")],
                "Pivot.M.Classic.S1": [(0, s.t)("1-Month Pivot Classic S1"), (0, s.t)("S1")],
                "Pivot.M.Classic.Middle": [(0, s.t)("1-Month Pivot Classic P"), (0, s.t)("P")],
                "Pivot.M.Classic.R1": [(0, s.t)("1-Month Pivot Classic R1"), (0, s.t)("R1")],
                "Pivot.M.Classic.R2": [(0, s.t)("1-Month Pivot Classic R2"), (0, s.t)("R2")],
                "Pivot.M.Classic.R3": [(0, s.t)("1-Month Pivot Classic R3"), (0, s.t)("R3")],
                "Pivot.M.Fibonacci.S3": [(0, s.t)("1-Month Pivot Fibonacci S3"), (0, s.t)("S3")],
                "Pivot.M.Fibonacci.S2": [(0, s.t)("1-Month Pivot Fibonacci S2"), (0, s.t)("S2")],
                "Pivot.M.Fibonacci.S1": [(0, s.t)("1-Month Pivot Fibonacci S1"), (0, s.t)("S1")],
                "Pivot.M.Fibonacci.Middle": [(0, s.t)("1-Month Pivot Fibonacci P"), (0, s.t)("P")],
                "Pivot.M.Fibonacci.R1": [(0, s.t)("1-Month Pivot Fibonacci R1"), (0, s.t)("R1")],
                "Pivot.M.Fibonacci.R2": [(0, s.t)("1-Month Pivot Fibonacci R2"), (0, s.t)("R2")],
                "Pivot.M.Fibonacci.R3": [(0, s.t)("1-Month Pivot Fibonacci R3"), (0, s.t)("R3")],
                "Pivot.M.Camarilla.S3": [(0, s.t)("1-Month Pivot Camarilla S3"), (0, s.t)("S3")],
                "Pivot.M.Camarilla.S2": [(0, s.t)("1-Month Pivot Camarilla S2"), (0, s.t)("S2")],
                "Pivot.M.Camarilla.S1": [(0, s.t)("1-Month Pivot Camarilla S1"), (0, s.t)("S1")],
                "Pivot.M.Camarilla.Middle": [(0, s.t)("1-Month Pivot Camarilla P"), (0, s.t)("P")],
                "Pivot.M.Camarilla.R1": [(0, s.t)("1-Month Pivot Camarilla R1"), (0, s.t)("R1")],
                "Pivot.M.Camarilla.R2": [(0, s.t)("1-Month Pivot Camarilla R2"), (0, s.t)("R2")],
                "Pivot.M.Camarilla.R3": [(0, s.t)("1-Month Pivot Camarilla R3"), (0, s.t)("R3")],
                "Pivot.M.Woodie.S3": [(0, s.t)("1-Month Pivot Woodie S3"), (0, s.t)("S3")],
                "Pivot.M.Woodie.S2": [(0, s.t)("1-Month Pivot Woodie S2"), (0, s.t)("S2")],
                "Pivot.M.Woodie.S1": [(0, s.t)("1-Month Pivot Woodie S1"), (0, s.t)("S1")],
                "Pivot.M.Woodie.Middle": [(0, s.t)("1-Month Pivot Woodie P"), (0, s.t)("P")],
                "Pivot.M.Woodie.R1": [(0, s.t)("1-Month Pivot Woodie R1"), (0, s.t)("R1")],
                "Pivot.M.Woodie.R2": [(0, s.t)("1-Month Pivot Woodie R2"), (0, s.t)("R2")],
                "Pivot.M.Woodie.R3": [(0, s.t)("1-Month Pivot Woodie R3"), (0, s.t)("R3")],
                "Pivot.M.Demark.S1": [(0, s.t)("1-Month Pivot DM S1"), (0, s.t)("S1")],
                "Pivot.M.Demark.Middle": [(0, s.t)("1-Month Pivot DM P"), (0, s.t)("P")],
                "Pivot.M.Demark.R1": [(0, s.t)("1-Month Pivot DM R1"), (0, s.t)("R1")],
                "KltChnl.upper": [(0, s.t)("Keltner Channels Upper Band (20)"), (0, s.t)("KltCh20 Up")],
                "KltChnl.lower": [(0, s.t)("Keltner Channels Lower Band (20)"), (0, s.t)("KltCh20 Low")],
                "P.SAR": [(0, s.t)("Parabolic SAR"), (0, s.t)("SAR")],
                "Value.Traded": [(0, s.t)("Volume*Price"), (0, s.t)("Volume*Price")],
                MoneyFlow: [(0, s.t)("Money Flow (14)"), (0, s.t)("MFI", {
                    context: "Money_Flow_short_title"
                })],
                ChaikinMoneyFlow: [(0, s.t)("Chaikin Money Flow (20)"), (0, s.t)("CMF", {
                    context: "Chaikin_Money_Flow_short_title"
                })],
                "Recommend.All": [(0, s.t)("Technical Rating"), (0, s.t)("Technical Rating")],
                "Recommend.MA": [(0, s.t)("Moving Averages Rating"), (0, s.t)("Moving Averages Rating")],
                "Recommend.Other": [(0, s.t)("Oscillators Rating"), (0, s.t)("Oscillators Rating")],
                "Stoch.RSI.K": [(0, s.t)("Stochastic RSI Fast (3, 3, 14, 14)"), (0, s.t)("Stoch RSI Fast")],
                "Stoch.RSI.D": [(0, s.t)("Stochastic RSI Slow (3, 3, 14, 14)"), (0, s.t)("Stoch RSI Slow")],
                "W.R": [(0, s.t)("Williams Percent Range (14)"), (0, s.t)("%R")],
                ROC: [(0, s.t)("Rate Of Change (9)"), (0, s.t)("ROC")],
                BBPower: [(0, s.t)("Bull Bear Power"), (0, s.t)("BBPower")],
                UO: [(0, s.t)("Ultimate Oscillator (7, 14, 28)"), (0, s.t)("UO")],
                "Ichimoku.CLine": [(0, s.t)("Ichimoku Conversion Line (9, 26, 52, 26)"), (0, s.t)("Ichimoku Conversion")],
                "Ichimoku.BLine": [(0, s.t)("Ichimoku Base Line (9, 26, 52, 26)"), (0, s.t)("Ichimoku Base")],
                "Ichimoku.Lead1": [(0, s.t)("Ichimoku Leading Span A (9, 26, 52, 26)"), (0, s.t)("Ichimoku Leading Span A")],
                "Ichimoku.Lead2": [(0, s.t)("Ichimoku Leading Span B (9, 26, 52, 26)"), (0, s.t)("Ichimoku Leading Span B")],
                VWAP: [(0, s.t)("Volume Weighted Average Price"), (0, s.t)("VWAP")],
                VWMA: [(0, s.t)("Volume Weighted Moving Average (20)"), (0, s.t)("VWMA")],
                ADR: [(0, s.t)("Average Day Range (14)"), (0, s.t)("ADR")]
            }
        },
        169494: (t, e, i) => {
            "use strict";
            i.d(e, {
                importanceSwitcherValues: () => s
            });
            const s = {
                true: [0, 1],
                false: [-1, 0, 1]
            }
        },
        719200: (t, e, i) => {
            "use strict";
            i.d(e, {
                ReutersCalendarWidget: () => L
            });
            i(500466);
            var s = i(416282),
                r = i(669388),
                n = (i(488e3), i(120220)),
                o = i(380238),
                a = i(607562),
                l = i(169494),
                h = i(454059),
                c = i(759288),
                u = i(4980);
            const d = (0, n.t)("Get Widget");

            function p(t, e) {
                let i = "tv-get-widget-button apply-common-tooltip";
                e && (i += " " + e);
                return `<a class="${i}" href="${`/widget/${t}/`}" target="_blank" title="${d}">${u}</a>`
            }
            const f = {
                    de: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "CAD", "FRF", "CNY", "ITL", "NZD", "ESP", "MXN", "RUR", "HKD", "BRL", "INR", "CHF", "TRL", "SEK", "ARS", "PLZ", "ATS"],
                    fr: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "CAD", "FRF", "CNY", "ITL", "NZD", "ESP"],
                    it: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "CAD", "FRF", "CNY", "ITL", "NZD", "ESP"],
                    tr: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "CAD", "FRF", "CNY", "ITL", "NZD", "ESP", "TRL"],
                    kr: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "CAD", "FRF", "CNY", "MXN", "RUR", "HKD", "BRL", "INR", "SGD", "KRW", "THB", "TWD", "VND"],
                    in: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "CAD", "FRF", "CNY", "RUR", "HKD", "BRL", "INR", "SGD", "IDR", "MYR", "AED", "QAR"],
                    my: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "CAD", "FRF", "CNY", "HKD", "SGD", "MYR"],
                    ru: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "CAD", "FRF", "ITL", "NZD", "ESP", "MXN", "RUR", "CHF", "TRL"],
                    uk: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "CAD", "FRF", "ITL", "NZD", "ESP", "MXN", "CHF", "TRL", "SEK", "NOK", "GRD"],
                    en: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "CAD", "FRF", "ITL", "NZD", "ESP", "MXN", "CHF", "TRL", "ZAR"],
                    tw: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "CAD", "FRF", "ITL", "NZD", "ESP", "MXN", "CHF", "TRL", "ZAR", "TWD"],
                    pl: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "CAD", "CNY", "ITL", "NZD", "SEK", "NOK", "PLZ"],
                    es: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "CAD", "ITL", "ESP", "MXN", "CHF", "ARS", "CLP", "COP"],
                    cn: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "CAD", "FRF", "CNY", "NZD", "HKD", "SGD"],
                    br: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "FRF", "CNY", "MXN", "RUR", "BRL", "INR"],
                    id: ["USD", "EUR", "JPY", "AUD", "DEM", "GBP", "FRF", "RUR", "HKD", "BRL", "INR", "SGD", "IDR"],
                    ja: ["USD", "EUR", "JPY", "AUD", "DEM", "CAD", "FRF", "CNY", "ITL", "NZD", "MXN", "RUR", "HKD", "BRL", "INR", "SGD", "KRW", "ZAR"]
                },
                g = t => (f[t] || f.en).slice();
            var m = i(987380),
                _ = i(896276),
                v = i.n(_),
                y = i(13548),
                b = i(491496),
                w = i(976623),
                S = i(971928),
                C = i(468450),
                x = i(195777),
                M = i(678486),
                k = i(385946),
                E = i(28843),
                P = (i(638619), i(280531), i(500466));
            const T = (0, m.getLogger)("ReutersCalendar"),
                A = (t, e, i, s) => null == t ? "—" : (e && (t += e), i && i !== s && ("%" === i ? t += i : "USD" === i ? t = "$" + t : t += " " + i), t);
            class L {
                constructor(t) {
                    this.onLayoutUpdated = new(v()), this._chartEvents = new h.ChartEvents, this._dateBlocks = [], this._collapsedDateBlocksDict = {}, this._importanceSwitcher = null, this._configButton = null, this._noContentStub = null, this._popup = null, this._disposeOutside = null, this._scroll = null, this._historyEnd = !1, this._pendingRequestPromise = null, this._updateHighlightTimeoutId = null, this._markTodayTimeoutId = null, this._historyLoading = !1, this._expands = new WeakMap, this._handleAnimationEnd = t => {
                        t.currentTarget instanceof Element && t.target === t.currentTarget && t.currentTarget.classList.remove("tv-reuters-calendar__item--highlighted")
                    }, this._fixBridge(t), this._bridge = t, this._container = t.container, this._templates = this._createTemplates(), this._addUtmInfoToHeader(), this._updateFilter(!0), this._refDate = new Date, this._container.classList.add("tv-reuters-calendar"), this._container.innerHTML = "", this._container.addEventListener("contextmenu", t => t.preventDefault());
                    const {
                        isTransparent: e,
                        hideImportanceIndicator: i,
                        noScroll: r,
                        showHeaderIcons: n,
                        showGetWidgetBtn: o
                    } = this._bridge.options;
                    i && this._container.classList.add("tv-reuters-calendar--hide-importance-indicator"), e && this._container.classList.add("tv-reuters-calendar--transparent");
                    const a = (0, y.parseHtml)(P.render(this._templates.calendarContent, {
                        showHeaderIcons: n,
                        showGetWidgetBtn: o
                    }));
                    this._header = (0, s.ensureNotNull)(a.querySelector(".js-calendar-header")), this._widget = (0, s.ensureNotNull)(a.querySelector(".js-calendar-widget")), this._data = (0, s.ensureNotNull)(a.querySelector(".js-calendar-data")), this._container.appendChild(a), r || this.initScroll(), this._bridge.width.subscribe(this.resize.bind(this)), this._bridge.height.subscribe(this.resize.bind(this)), this.resize(), this._initialRequest(), this._chartEvents.changed.subscribe(null, t => {
                        this._pendingRequestPromise || this._updateLayout(t)
                    }), this._createHeaderButtons()
                }
                get importanceFilterState() {
                    var t;
                    return null !== (t = this._getProperty("importanceFilter")) && void 0 !== t ? t : []
                }
                get currencyFilterState() {
                    var t;
                    return null !== (t = this._getProperty("currencyFilter")) && void 0 !== t ? t : []
                }
                get months() {
                    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                }
                saveFilter(t, e) {
                    if (!Array.isArray(e)) return void T.logError("Wow! {0} state you've tried to set isn't an array for some reason".format(t));
                    const i = { ...this._bridge.properties.value()
                    };
                    0 === e.length ? delete i[t] : i[t] = e, this._bridge.properties.setValue(i), setTimeout(() => this._onSettingsChanged(), 0)
                }
                getAnchorPoint(t) {
                    let e = 0,
                        i = 0;
                    const r = (0, s.ensureNotNull)(this._configButton),
                        n = { ...(0, b.offset)(r),
                            width: (0, b.outerWidth)(r),
                            height: (0, b.outerHeight)(r)
                        };
                    let o = r.parentElement;
                    for (; null !== o;) n.left -= o.scrollLeft, n.top -= o.scrollTop, o = o.parentElement;
                    return i = n.top + n.height + 1, e = n.left + n.width, "fixed" !== t && (i += window.scrollY), {
                        left: e,
                        top: i
                    }
                }
                initScroll() {
                    this._scroll || (this._data.classList.add("tv-reuters-calendar__dcnt--scroll-inited"), this._scroll = new a.SidebarCustomScroll(this._widget, this._data, {
                        vAlignBottom: !0,
                        showBottomShadow: !1,
                        bubbleScrollEvent: () => !!this._scroll && (!!this._scroll.atEnd() || this._historyEnd && this._scroll.atStart())
                    }), this._initInfiniteScroll())
                }
                destroyScroll() {
                    this._data.classList.remove("tv-reuters-calendar__dcnt--scroll-inited"), this._scroll && (this._scroll.destroy(), this._scroll = null, this.resize())
                }
                updateScroll() {
                    this._scroll && (this._scroll.updateScrollBar(), this._scroll.atEnd() && this._scroll.scrollToEnd(), this._scroll.updateScrollBar())
                }
                scrollToLastVisibleItem() {
                    if (!this._scroll) return;
                    const t = (0, b.outerHeight)(this._widget);
                    let e = 0;
                    Array.from(this._data.children).forEach(i => {
                        e || (0, b.position)(i).top + (0, b.contentHeight)(i) > t && (e = (0, b.position)(i).top)
                    }), this._scroll.animateTo(e - 15)
                }
                resize() {
                    let t;
                    const e = this._bridge.options.layout;
                    t = "wide" === e || "narrow" !== e && this._bridge.width.value() > 500;
                    if (t !== this._container.classList.contains("tv-reuters-calendar--wide-layout")) {
                        const e = this._topmostVisibleItem();
                        this._container.classList.toggle("tv-reuters-calendar--wide-layout", t), this._scroll && e && (this._scroll.resize(), this._scroll.scrollTo((0, b.position)(e.element).top + e.offsetDelta, {
                            position: "top"
                        }))
                    }
                    if (this._scroll) {
                        const t = Math.max(0, this._bridge.height.value() - (0, b.outerHeight)(this._header));
                        this._widget.style.height = t + "px", this._scroll.resize()
                    } else this._widget.style.cssText = ""
                }
                setLayout(t) {
                    this._bridge.options.layout !== t && (this._bridge.options.layout = t, this.resize())
                }
                _fixBridge(t) {
                    t.options = t.options || {}
                }
                _initialRequest() {
                    let t;
                    if (this.currencyFilterState.length) {
                        if (this._bridge.options.rewind && null == this._bridge.options.maxHistoryInHours) return T.logError("cannot rewind events history: maxHistoryInHours is not set"), Promise.reject();
                        this._historyEnd = !1, t = new Promise((t, e) => {
                            const i = s => {
                                const r = this._chartEvents.items();
                                s ? t({
                                    added: r
                                }) : this._chartEvents.requestMore().done(i).fail(t => {
                                    e(t)
                                })
                            };
                            i(null)
                        })
                    } else this._historyEnd = !0, t = Promise.resolve({
                        noResults: !0
                    });
                    this._pendingRequestPromise = t, t.catch(() => null).then(e => {
                        this._pendingRequestPromise === t && (this._pendingRequestPromise = null, e && (this._updateLayout(e), this._scrollToUpcoming() || this._scroll && this._scroll.scrollToEnd()))
                    });
                    const e = new o.Spinner("mini").spin(this._container);
                    return t.catch(() => {}).then(() => {
                        e.stop()
                    }), t
                }
                _onSettingsChanged() {
                    this._updateFilter(!1),
                        this._data.innerHTML = "", this._dateBlocks.length = 0, this._initialRequest(), this._scroll && this._scroll.resize()
                }
                _updateFilter(t) {
                    let e = this.currencyFilterState,
                        i = this.importanceFilterState;
                    if (t) {
                        let t = !1;
                        e.length || (e = g(window.locale), t = !0), i = -1 !== this.importanceFilterState.indexOf(-1) ? l.importanceSwitcherValues.false : l.importanceSwitcherValues.true, t = t || JSON.stringify(this.importanceFilterState) !== JSON.stringify(i), t && this._bridge.properties.setValue({
                            currencyFilter: e,
                            importanceFilter: i
                        })
                    }
                    const s = {
                        minImportance: i[0],
                        currencyFilter: this.currencyFilterState,
                        to: Date.now() + 12096e5
                    };
                    "number" == typeof this._bridge.options.maxHistoryInHours && (s.historyLimit = s.from = Date.now() - 36e5 * this._bridge.options.maxHistoryInHours), this._bridge.options.maxItems && this._bridge.options.maxItems > 0 && (s.maxItems = this._bridge.options.maxItems), this._chartEvents.reset(s)
                }
                _getProperty(t) {
                    return (this._bridge.properties.value() || {})[t]
                }
                _addUtmInfoToHeader() {
                    const t = this._bridge.options.utmInfo;
                    if (!t) return;
                    document.querySelectorAll(".js-embed-widget-head a").forEach(e => {
                        e.search = new URLSearchParams(t).toString()
                    })
                }
                _createHeaderButtons() {
                    var t, e, i;
                    const s = t => t === this._bridge.options.widgetType;
                    if (s("widgetbar")) {
                        const e = (0, y.parseHtmlElement)(P.render(this._templates.closestEventButton, {}));
                        e.classList.add("apply-common-tooltip"), e.title = (0, n.t)("Closest Event"), e.addEventListener("click", t => {
                            t.preventDefault(), this._scrollToUpcoming(), this._highlightUpcoming()
                        }), null === (t = this._bridge.headerspace) || void 0 === t || t.appendChild(e)
                    }
                    if (this._bridge.readonly) return;
                    let r, o, a;
                    if (r = s("widgetbar") ? this._templates.importanceSwitcher_widgetbar : s("full_page") ? this._templates.importanceSwitcher_page : this._templates.importanceSwitcher_widget, s("external_widget") || s("full_page")) {
                        const t = this._importanceSwitcher = this._header.querySelector(".js-embed-widget-calendar-importance");
                        null == t || t.classList.remove("i-hidden")
                    } else {
                        const t = this._importanceSwitcher = (0, y.parseHtmlElement)(P.render(r, {}));
                        null === (e = this._bridge.headerspace) || void 0 === e || e.appendChild(t)
                    }
                    if (this._importanceSwitcher) {
                        const t = this._importanceSwitcher;
                        t.classList.toggle("i-active", this.importanceFilterState.toString() === l.importanceSwitcherValues.true.toString()), t.classList.toggle("active", this.importanceFilterState.toString() === l.importanceSwitcherValues.true.toString()), t.classList.add("apply-common-tooltip"), t.title = (0, n.t)("Only High Importance"), t.addEventListener("click", () => {
                            const e = this.importanceFilterState.toString() === l.importanceSwitcherValues.true.toString();
                            t.classList.toggle("i-active", !e), t.classList.toggle("active", !e), e ? this.saveFilter("importanceFilter", l.importanceSwitcherValues.false) : this.saveFilter("importanceFilter", l.importanceSwitcherValues.true)
                        })
                    }
                    if (s("widgetbar") ? (a = "fixed", o = this._templates.configButton_widgetbar) : o = s("full_page") ? this._templates.configButton_page : this._templates.configButton_widget, s("external_widget") || s("full_page")) {
                        const t = this._configButton = this._header.querySelector(".js-embed-widget-calendar-config");
                        null == t || t.classList.remove("i-hidden")
                    } else {
                        const t = this._configButton = (0, y.parseHtmlElement)(P.render(o, {}));
                        null === (i = this._bridge.headerspace) || void 0 === i || i.appendChild(t)
                    }
                    if (this._configButton) {
                        const t = this._configButton;
                        t.classList.add("apply-common-tooltip"), t.title = (0, n.t)("Filter"), t.addEventListener("click", t => {
                            t.preventDefault(), this._popup ? this._closeConfigPopup() : this._createConfigPopup(a || "absolute")
                        })
                    }
                }
                _createConfigPopup(t) {
                    if (this._popup) return;
                    const e = this.getAnchorPoint(t),
                        s = {
                            left: e.left,
                            top: e.top,
                            onCurrencyFilterChange: t => this.saveFilter("currencyFilter", t),
                            chartEventsInstance: this._chartEvents,
                            positioning: t,
                            state: {
                                currencyFilter: this.currencyFilterState
                            },
                            defaultCurrencyFilterState: this._bridge.options.defaultCurrencyFilterState || g(window.locale)
                        };
                    Promise.all([i.e(12141), i.e(12399), i.e(70797), i.e(30629)]).then(i.bind(i, 411898)).then(t => {
                        var e, i;
                        this._popup || (this._popup = new t.CalendarConfig(s), null === (e = this._configButton) || void 0 === e || e.classList.add("active", "i-active"), null === (i = this._configButton) || void 0 === i || i.classList.toggle("i-active", !0), this._disposeOutside = (0, w.addOutsideEventListener)(performance.now(), this._popup.el, t => {
                            t.target instanceof Element && (this._configButton && this._configButton.contains(t.target) || this._closeConfigPopup())
                        }, document, {
                            mouseDown: !0,
                            touchStart: !0
                        }))
                    })
                }
                _closeConfigPopup() {
                    var t, e, i;
                    this._popup && (null === (t = this._disposeOutside) || void 0 === t || t.call(this), this._popup.destroy(), this._popup = null, null === (e = this._configButton) || void 0 === e || e.classList.remove("active"), null === (i = this._configButton) || void 0 === i || i.classList.toggle("i-active", !1))
                }
                _scrollToUpcoming() {
                    if (!this._scroll) return !1;
                    const t = this._data.querySelector(".tv-reuters-calendar__item--upcoming");
                    if (!t) return !1;
                    const e = (0, b.position)(t.closest(".tv-reuters-calendar__day-content")).top + (0, b.position)(t).top;
                    return this._scroll.scrollTo(e, {
                        position: "top"
                    }), this._scroll.atStart() && this._scroll.scrollToEnd(), !0
                }
                _initInfiniteScroll() {
                    (0, s.ensureNotNull)(this._scroll).scrolltostart.subscribe(this, this._onScrollToStart), this._onScrollToStart()
                }
                _onScrollToStart() {
                    this._scroll && this.currencyFilterState.length && (this._historyLoading || this._historyEnd || this._bridge.visible.value() && this._scroll.atStart() && (this._historyLoading = !0, this._data.classList.add("tv-reuters-calendar__scnt--loading"), this._chartEvents.requestMore().always(() => {
                        this._historyLoading = !1, this._data.classList.remove("tv-reuters-calendar__scnt--loading")
                    })))
                }
                _updateHighlight() {
                    var t, e;
                    this._updateHighlightTimeoutId && (clearTimeout(this._updateHighlightTimeoutId), this._updateHighlightTimeoutId = null);
                    const i = this._dateBlocks,
                        s = +new Date;
                    null === (t = this._data.querySelector(".tv-reuters-calendar__item--future")) || void 0 === t || t.classList.remove("tv-reuters-calendar__item--future"), null === (e = this._data.querySelector(".tv-reuters-calendar__item--upcoming")) || void 0 === e || e.classList.remove("tv-reuters-calendar__item--upcoming");
                    let r = null,
                        n = null;
                    t: for (let t = i.length; t--;) {
                        const e = i[t].items;
                        for (let o = e.length; o--;) {
                            const a = e[o],
                                l = a.element;
                            if (!(a.timestamp > s)) break t;
                            r = o, n = i[t],
                                l.classList.add("tv-reuters-calendar__item--future")
                        }
                    }
                    if (null === n || null === r) return;
                    const o = n.items[r].timestamp;
                    for (let t = r; t < n.items.length; t++) {
                        const e = n.items[t];
                        if (e.timestamp !== o) break;
                        e.element.classList.add("tv-reuters-calendar__item--upcoming")
                    }
                    this._updateHighlightTimeoutId = setTimeout(this._updateHighlight.bind(this), o - s)
                }
                _highlightUpcoming() {
                    Array.from(this._data.querySelectorAll(".tv-reuters-calendar__item--upcoming"), t => {
                        t.classList.add("tv-reuters-calendar__item--highlighted"), t.addEventListener("animationend", this._handleAnimationEnd), t.addEventListener("animationcancel", this._handleAnimationEnd)
                    })
                }
                _markToday() {
                    const t = new Date,
                        e = this._localDateHash(t),
                        i = new Date;
                    i.setHours(0, 0, 0, 0), i.setDate(i.getDate() + 1), this._markTodayTimeoutId && clearTimeout(this._markTodayTimeoutId), this._markTodayTimeoutId = setTimeout(this._markToday.bind(this), Number(i) - Number(t));
                    let s = null;
                    for (let t = this._dateBlocks.length; t-- > 0;)
                        if (this._dateBlocks[t].localDateHash === e) {
                            s = this._dateBlocks[t].element;
                            break
                        }
                    const r = this._data.querySelectorAll(".tv-reuters-calendar__date-block--today");
                    1 === r.length && r[0] === s || (r.forEach(t => t.classList.remove("tv-reuters-calendar__date-block--today")), s && s.classList.add("tv-reuters-calendar__date-block--today"))
                }
                _addNoContentStub() {
                    this._noContentStub || (this._noContentStub = (0, y.parseHtmlElement)(this._templates.noContent));
                    let t = (0, n.t)("There are no events in the next 7 days");
                    this.currencyFilterState.length || (t = (0, n.t)("No country has been selected. Please select at least 1 country to view the events")), this._noContentStub.textContent = t, this._data.insertAdjacentElement("beforebegin", this._noContentStub), this._scroll && this._scroll.updateScroll()
                }
                _updateLayout(t) {
                    var e;
                    t.noResults && (this._historyEnd = !0), this._chartEvents.items().length ? null === (e = this._noContentStub) || void 0 === e || e.remove() : this._addNoContentStub();
                    const i = t.added || [],
                        s = t.changed || [];
                    (i.length || s.length) && (this._scroll && this._scroll.save(), this._data.style.display = "none", this._createItems(i), this._changeItems(s), this._updateHighlight(), this._markToday(), this._data.style.display = "block", this._scroll && (this._scroll.restore(), this._scroll.atEnd() && this._scroll.scrollToEnd()), this.onLayoutUpdated.fire()), this._scroll && this._onScrollToStart()
                }
                _topmostVisibleItem() {
                    if (!this._scroll) return null;
                    const t = -this._scroll.currentPosition(),
                        e = this._dateBlocks;
                    if (!e.length) return null;
                    let i;
                    if (1 === e.length) i = e[0];
                    else if (t >= (0, b.position)(e[e.length - 1].element).top) i = e[e.length - 1];
                    else if (t <= 0) i = e[0];
                    else {
                        let s, r = 0,
                            n = e.length - 1;
                        for (; n - r > 1;) s = r + n >> 1, t >= (0, b.position)(e[s].element).top ? r = s : n = s;
                        i = e[r]
                    }
                    const s = i.items;
                    let r = 0,
                        n = (0, b.position)(s[r].element).top;
                    if (t > n) {
                        let e, i = s.length - 1;
                        for (; i - r > 1;) {
                            e = r + i >> 1;
                            const o = (0, b.position)(s[e].element).top;
                            t >= o ? (n = o, r = e) : i = e
                        }
                    }
                    return {
                        element: s[r].element,
                        offsetDelta: t - n
                    }
                }
                _localDateHash(t) {
                    return t.getFullYear() + "-" + ("0" + (t.getMonth() + 1)).slice(-2) + "-" + ("0" + t.getDate()).slice(-2)
                }
                _createItems(t) {
                    if (!t.length) return;
                    const e = {},
                        i = {},
                        r = this._dateBlocks.map(t => t.localDateHash);
                    let o;
                    const a = this._dateBlocks[0] ? this._dateBlocks[0].items[0] : void 0,
                        l = this._dateBlocks[this._dateBlocks.length - 1],
                        h = l ? l.items[l.items.length - 1] : void 0;
                    if (!a || t[0].timestamp >= (0, s.ensureDefined)(h).timestamp) o = "future";
                    else {
                        if (!(t[t.length - 1].timestamp <= a.timestamp)) return void T.logError("Don't know where to put events");
                        o = "past"
                    }
                    for (let s = t.length - 1; s >= 0; s--) {
                        const o = t[s];
                        if (o.indicator = (0, n.t)(o.indicator), this._addDataToItem(o), -1 !== r.indexOf(o.localDateHash)) {
                            const t = e[o.localDateHash];
                            t ? t.items.push(o) : e[o.localDateHash] = {
                                items: [o]
                            }
                        } else i[o.localDateHash] ? i[o.localDateHash].items.push(o) : i[o.localDateHash] = {
                            localDateHash: o.localDateHash,
                            localDateStr: o.localDateStr,
                            items: [o]
                        }
                    }
                    Object.keys(e).forEach(t => {
                        const i = r.indexOf(t),
                            s = (0, y.parseHtml)(P.render(this._templates.items, {
                                items: e[t].items
                            }, this._templates));
                        "past" === o ? this._dateBlocks[i].contents.prepend(s) : this._dateBlocks[i].contents.append(s);
                        const n = e[t].items.map(t => this._prependItemToStorage(t, this._dateBlocks[i].contents));
                        this._dateBlocks[i].items = "past" === o ? [...n, ...this._dateBlocks[i].items] : [...this._dateBlocks[i].items, ...n]
                    });
                    const c = [];
                    Object.keys(i).sort().forEach(t => {
                        c.push(i[t])
                    });
                    const u = (0, y.parseHtml)(P.render(this._templates.dateBlock, {
                        dateBlocks: c
                    }, this._templates));
                    "past" === o ? this._data.prepend(u) : this._data.append(u);
                    const d = c.map(t => {
                        const e = t.element = this._data.querySelector(`[data-hash="${t.localDateHash}"]`),
                            i = t.contents = e.querySelector(".js-expand__body.js-calendar-day"),
                            s = new D({
                                element: e
                            });
                        s.setOpened(!this._collapsedDateBlocksDict[t.localDateHash]), e.addEventListener("beforeOpen", () => {
                            this._collapsedDateBlocksDict[t.localDateHash] = !0
                        }), e.addEventListener("afterOpen", () => {
                            this.updateScroll()
                        }), e.addEventListener("afterClose", () => {
                            delete this._collapsedDateBlocksDict[t.localDateHash], this.updateScroll()
                        }), this._expands.set(e, s);
                        const r = t.items.map(t => this._prependItemToStorage(t, i));
                        return { ...t,
                            element: e,
                            contents: i,
                            items: r
                        }
                    });
                    this._dateBlocks = "past" === o ? [...d, ...this._dateBlocks] : [...this._dateBlocks, ...d]
                }
                _prependItemToStorage(t, e) {
                    const i = t.element = e.querySelector(`[data-item-id="${this._prepareItemId(t)}"]`);
                    if (t.comment) {
                        const t = new D({
                            element: i
                        });
                        i.addEventListener("beforeOpen", () => {
                            i.classList.add("tv-reuters-calendar__item--expanded"), setTimeout(() => {
                                this._scroll && this._scroll.animateTo((0, b.position)(i).top + (0, b.position)(i.parentElement).top - 4)
                            }, 20)
                        }), i.addEventListener("afterOpen", () => {
                            this.updateScroll()
                        }), i.addEventListener("afterClose", () => {
                            i.classList.remove("tv-reuters-calendar__item--expanded"), this.updateScroll()
                        }), this._expands.set(i, t)
                    }
                    return {
                        timestamp: t.timestamp,
                        id: t.id,
                        element: t.element
                    }
                }
                _addDataToItem(t) {
                    t.formattedActual = A(t.actual, t.scale, t.unit, t.currency), t.formattedForecast = A(t.forecast, t.scale, t.unit, t.currency), t.formattedPrevious = A(t.previous, t.scale, t.unit, t.currency);
                    const e = new Date(t.timestamp);
                    let i = "";
                    if (e.getTimezoneOffset) {
                        const t = -e.getTimezoneOffset() / 60;
                        i = "UTC", i += t < 0 ? t : "+" + t
                    }
                    t.localTimeStr = ("0" + e.getHours()).slice(-2) + ":" + ("0" + e.getMinutes()).slice(-2), t.localDateStr = (0,
                        n.t)(this.months[e.getMonth()]) + " " + e.getDate();
                    const s = e.getFullYear(),
                        r = t.localDateStr + ", " + s;
                    t.fullLocalDateTimeStr = r + " " + t.localTimeStr + " " + i, s !== this._refDate.getFullYear() && (t.localDateStr = r), t.localDateHash = this._localDateHash(e);
                    let o = "";
                    t.importance > 0 ? o = "tv-reuters-calendar__importance-indicator--high" : 0 === t.importance && (o = "tv-reuters-calendar__importance-indicator--normal"), t.importanceModifier = o, t.flagSrc = (0, c.flagUrl)(t.country && t.country.toLowerCase())
                }
                _prepareItemId(t) {
                    return t.id.replace(/\n|\u21b5/g, "")
                }
                _changeItems(t) {
                    t.forEach(t => {
                        var e;
                        this._addDataToItem(t);
                        const i = this._data.querySelector(`[data-item-id="${this._prepareItemId(t)}"]`);
                        i && (i.classList.toggle("tv-reuters-calendar__item--expandable", !!t.comment), i.innerHTML = P.render(this._templates.itemContent, t), null === (e = this._expands.get(i)) || void 0 === e || e.delegateEvents())
                    })
                }
                _createTemplates() {
                    var t;
                    const e = document.createElement("a");
                    e.innerHTML = k, null === (t = e.querySelector("svg")) || void 0 === t || t.setAttribute("class", "tv-reuters-calendar__drop-arrow");
                    const i = e.innerHTML;
                    return {
                        calendarContent: '<div class="tv-reuters-calendar__header js-calendar-header"><span class="tv-reuters-calendar__header-column tv-reuters-calendar__header-column--time js-calendar-header-time">' + (0, n.t)("Time") + '</span><span class="tv-reuters-calendar__header-column tv-reuters-calendar__header-column--icons">{{#showHeaderIcons}}<span class="apply-common-tooltip tv-reuters-calendar__header-icon tv-reuters-calendar__importance-button js-embed-widget-calendar-importance i-hidden">' + E + '</span><span class="tv-reuters-calendar__header-icon tv-reuters-calendar__config-button js-embed-widget-calendar-config i-hidden">' + x + "</span>{{/showHeaderIcons}}{{#showGetWidgetBtn}}" + p("economic-calendar", "tv-reuters-calendar__header-icon tv-reuters-calendar__get-widget-button") + '{{/showGetWidgetBtn}}</span><span class="tv-reuters-calendar__header-column-group tv-reuters-calendar__header-column-group"><span class="tv-reuters-calendar__header-column tv-reuters-calendar__header-column--actual">' + (0, n.t)("Actual") + '</span><span class="tv-reuters-calendar__header-column tv-reuters-calendar__header-column--forecast">' + (0, n.t)("Forecast") + '</span><span class="tv-reuters-calendar__header-column tv-reuters-calendar__header-column--prior">' + (0, n.t)("Prior") + '</span></span></div><div class="tv-reuters-calendar__scnt js-calendar-widget"><div class="tv-reuters-calendar__dcnt js-calendar-data"></div></div>',
                        closestEventButton: '<a class="button widgetbar-icon-button">' + M + "</a>",
                        configButton_widgetbar: '<a class="button widgetbar-icon-button">' + x + "</a>",
                        configButton_widget: '<div class="tv-feed-widget__control-icon tv-feed-widget__control-icon--calendar-config">' + x + "</div>",
                        configButton_page: '<div class="tv-feed-widget__calendar-filter-icon">' + x + "</div>",
                        importanceSwitcher_widgetbar: '<a class="button widgetbar-icon-button">' + E + "</a>",
                        importanceSwitcher_widget: '<div class="tv-feed-widget__control-icon tv-feed-widget__control-icon--importance-switcher">' + E + "</div>",
                        importanceSwitcher_page: '<div class="tv-feed-widget__importance-switcher-icon">' + E + "</div>",
                        dateBlock: '{{#dateBlocks}}<div data-hash="{{ localDateHash }}" class="tv-reuters-calendar__date-block{{#collapsed}} i-hidden{{/collapsed}}"><div data-type="day" class="tv-reuters-calendar__day js-expand__title">{{ localDateStr }}</div><div class="tv-reuters-calendar__day-content js-expand__body js-calendar-day">{{>items}}</div></div>{{/dateBlocks}}',
                        items: '{{#items}}<div class="tv-reuters-calendar__item{{#comment}} tv-reuters-calendar__item--expandable{{/comment}}"{{#id}} data-item-id="{{ id }}{{/id}}">{{>itemContent}}</div>{{/items}}',
                        itemContent: '<div class="tv-reuters-calendar__heading-block {{#comment}}tv-reuters-calendar__heading-block--expandable js-expand__title{{/comment}}" data-type="event"><div class="tv-reuters-calendar__time-block"><span class="tv-reuters-calendar__time"><span class="tv-reuters-calendar__timebadge apply-common-tooltip" title="{{ fullLocalDateTimeStr }}">{{ localTimeStr }}</span></span><img class="tv-reuters-calendar__flag" src="{{flagSrc}}">' + (this._bridge.options.hideImportanceIndicator ? "" : '<span class="tv-reuters-calendar__importance-indicator {{&importanceModifier}}"></span>') + '</div><span class="tv-reuters-calendar__value-group {{^actual}}tv-reuters-calendar__value-group--no-actual{{/actual}}"><span class="tv-reuters-calendar__value tv-reuters-calendar__value--actual">{{ formattedActual }}</span><span class="tv-reuters-calendar__value">{{ formattedForecast }}</span><span class="tv-reuters-calendar__value">{{ formattedPrevious }}</span></span><div class="tv-reuters-calendar__heading"><span class="tv-reuters-calendar__heading-title apply-common-tooltip" title="{{ indicator }}">{{ indicator }}</span>{{#comment}}' + i + '{{/comment}}</div></div>{{#comment}}<div class="tv-reuters-calendar__comment js-expand__body js-calendar-comment i-hidden">{{ comment }}</div>{{/comment}}',
                        noContent: '<div class="tv-widget-empty-message"></div>'
                    }
                }
            }
            class D {
                constructor(t) {
                    this.opened = !1, this.animated = !1, this.paused = !1, this.body = null, this._trigger = null, this._handleClick = t => {
                        t.defaultPrevented || this.toggle()
                    }, this.opened = !1, this.animated = !1, this.element = t.element, this.delegateEvents(), this.element.classList.add("i-inited")
                }
                delegateEvents() {
                    this.body = this.element.querySelector(".js-expand__body"), this._trigger && this._trigger.removeEventListener("click", this._handleClick), this._trigger = this.element.querySelector(".js-expand__title"), this._trigger && this._trigger.addEventListener("click", this._handleClick)
                }
                setOpened(t) {
                    this.opened = t
                }
                setPause(t) {
                    this.paused = t
                }
                toggle() {
                    this[this.opened ? "close" : "open"]()
                }
                open(t = !1) {
                    var e, i, s;
                    if (!this.element || !this.body) return;
                    if (this.animated || this.opened || this.paused) return;
                    if (this.opened = !0, this.animated = !0, this.element.classList.add("i-dropped"), this.element.dispatchEvent(new CustomEvent("beforeOpen", {
                            bubbles: !0,
                            cancelable: !1
                        })), t) return this.body.classList.remove("i-hidden"), this.element.dispatchEvent(new CustomEvent("afterOpen", {
                        bubbles: !0,
                        cancelable: !1
                    })), void(this.animated = !1);
                    const n = this.body;
                    n.classList.remove("i-hidden");
                    const o = getComputedStyle(n),
                        a = null !== (e = parseFloat(o.height)) && void 0 !== e ? e : 0,
                        l = null !== (i = parseFloat(o.paddingTop)) && void 0 !== i ? i : 0,
                        h = null !== (s = parseFloat(o.paddingBottom)) && void 0 !== s ? s : 0;
                    n.style.height = "0", n.style.paddingTop = "0", n.style.paddingBottom = "0", n.style.overflow = "hidden", n.style.display = "block", (0, C.doAnimate)({
                        duration: .75 * S.dur,
                        from: 0,
                        to: 1,
                        easing: r.easingFunc.easeOutCubic,
                        onComplete: () => {
                            n.style.overflow = "", n.style.display = "", n.style.paddingBottom = "", n.style.paddingTop = "", n.style.height = "", n.classList.remove("i-hidden")
                        },
                        onStep: (t, e) => {
                            n.style.height = (0, C.lerp)(0, a, e) + "px", n.style.paddingTop = (0, C.lerp)(0, l, e) + "px", n.style.paddingBottom = (0, C.lerp)(0, h, e) + "px"
                        }
                    }), (0, C.doAnimate)({
                        duration: .5 * S.dur,
                        from: 0,
                        to: 1,
                        easing: r.easingFunc.easeOutCubic,
                        onComplete: () => {
                            n.style.cssText = "", this.element.dispatchEvent(new CustomEvent("afterOpen", {
                                bubbles: !0,
                                cancelable: !1
                            })), this.animated = !1
                        },
                        onStep: (t, e) => {
                            n.style.opacity = String(e)
                        }
                    })
                }
                close(t = !1) {
                    var e, i, s;
                    if (!this.element || !this.body) return;
                    if (this.animated || !this.opened || this.paused) return;
                    if (this.opened = !1, this.animated = !0, this.element.classList.remove("i-dropped"), this.element.dispatchEvent(new CustomEvent("beforeClose", {
                            bubbles: !0,
                            cancelable: !1
                        })), t) return this.body.classList.add("i-hidden"), this.element.dispatchEvent(new CustomEvent("afterClose", {
                        bubbles: !0,
                        cancelable: !1
                    })), void(this.animated = !1);
                    const n = this.body,
                        o = getComputedStyle(n),
                        a = null !== (e = parseFloat(o.height)) && void 0 !== e ? e : 0,
                        l = null !== (i = parseFloat(o.paddingTop)) && void 0 !== i ? i : 0,
                        h = null !== (s = parseFloat(o.paddingBottom)) && void 0 !== s ? s : 0;
                    n.style.height = a + "px", n.style.paddingTop = l + "px", n.style.paddingBottom = h + "px", n.style.overflow = "hidden", n.style.display = "block", (0, C.doAnimate)({
                        duration: .5 * S.dur,
                        from: 1,
                        to: 0,
                        easing: r.easingFunc.easeOutCubic,
                        onStep: (t, e) => {
                            n.style.opacity = String(e)
                        }
                    }), (0, C.doAnimate)({
                        duration: .75 * S.dur,
                        from: 1,
                        to: 0,
                        easing: r.easingFunc.easeOutCubic,
                        onComplete: () => {
                            n.style.overflow = "", n.style.display = "", n.style.paddingBottom = "", n.style.paddingTop = "", n.style.height = "", n.classList.add("i-hidden"), this.element.dispatchEvent(new CustomEvent("afterClose", {
                                bubbles: !0,
                                cancelable: !1
                            })), this.animated = !1
                        },
                        onStep: (t, e) => {
                            n.style.height = (0, C.lerp)(0, a, e) + "px", n.style.paddingTop = (0, C.lerp)(0, l, e) + "px", n.style.paddingBottom = (0, C.lerp)(0, h, e) + "px"
                        }
                    })
                }
            }
        },
        454059: (t, e, i) => {
            "use strict";
            i.d(e, {
                ChartEvents: () => u
            });
            i(918184);
            var s = i(4516),
                r = i.n(s),
                n = i(110164),
                o = i(987380),
                a = i(896276),
                l = i.n(a),
                h = i(918184);
            const c = (0, o.getLogger)("ReutersCalendar");
            class u {
                constructor(t) {
                    if (this.changed = new(l()), this._pendingDfd = null, this._pushstreamHandler = t => {
                            const e = this._mergeItems([].concat(t));
                            (e.changed.length || e.added.length) && this.changed.fire(e)
                        }, !(this instanceof u)) throw new Error("ChartEvents is a constructor");
                    this.reset(t), r().on("chartevents-reuters", this._pushstreamHandler)
                }
                get defaultSelectionTimeAmount() {
                    return 6048e5
                }
                items() {
                    return this._items
                }
                reset(t) {
                    var e;
                    this._pendingDfd && (this._pendingDfd.reject(), this._pendingDfd = null), this._items = [], this._itemsById = {},
                        this.minObtainedTimestamp = 1 / 0, this._noResults = !1, t && null != t.from ? this.from = Number(t.from) : this.from = Date.now() - 864e5, this._historyLimit = t && t.historyLimit, this._maxItems = 1 / 0, t && void 0 !== t.maxItems && t.maxItems > 0 && (this._maxItems = +t.maxItems), t && null != t.to ? this.to = t.to : this.to = this.from + this.defaultSelectionTimeAmount, this.from = this.cacheFriendlyTimestamp(this.from), this.to = this.cacheFriendlyTimestamp(this.to), this.currencyFilter = null !== (e = null == t ? void 0 : t.currencyFilter) && void 0 !== e ? e : [], t && void 0 !== t.minImportance && isFinite(+t.minImportance) ? this.minImportance = Math.max(-1, Math.min(1, Math.floor(t.minImportance))) : this.minImportance = -1
                }
                cacheFriendlyTimestamp(t) {
                    return t - t % 36e5
                }
                formatTimestampForRequest(t) {
                    return new Date(t).toISOString()
                }
                requestMore(t) {
                    if (this._pendingDfd) return this._pendingDfd.promise();
                    if (isFinite(this.minObtainedTimestamp) && void 0 !== this._historyLimit && Number(new Date(this.from)) < this._historyLimit && (this._noResults = !0), this._items.length >= this._maxItems && (this._noResults = !0), this._noResults) return h.Deferred().resolve({
                        added: [],
                        changed: [],
                        noResults: !0
                    }).promise();
                    const e = h.Deferred();
                    this._pendingDfd = e, e.always(() => {
                        this._pendingDfd = null
                    });
                    const i = new URL(window.CHARTEVENTS_URL ? window.CHARTEVENTS_URL + "events" : "/chartevents/"); - 1 !== this.minImportance && i.searchParams.set("minImportance", this.minImportance.toString()), isFinite(this.minObtainedTimestamp) && (this.to = this.from, this.from = this.from - this.defaultSelectionTimeAmount), t && t.from && t.from < this.minObtainedTimestamp && (this.from = this.cacheFriendlyTimestamp(t.from)), i.searchParams.set("from", this.formatTimestampForRequest(this.from)), i.searchParams.set("to", this.formatTimestampForRequest(this.to)), this.currencyFilter.length && i.searchParams.set("currencies", this.currencyFilter.toString());
                    const s = Date.now(),
                        r = h.ajax({
                            method: "GET",
                            url: i.toString(),
                            dataType: "json"
                        }).done((t, i, r) => {
                            const o = Date.now() - s;
                            if (n.telemetry.sendReport("calendars", "chartevents_http_status", {
                                    value: r.status,
                                    additional: {
                                        source: "ChartEvents"
                                    }
                                }), n.telemetry.sendReport("calendars", "chartevents_response_time_frame", {
                                    value: o,
                                    additional: {
                                        source: "ChartEvents"
                                    }
                                }), e !== this._pendingDfd) return;
                            if (!t || !t.status || "error" === t.status) {
                                n.telemetry.sendReport("calendars", "chartevents_error");
                                const i = t && t.errmsg || "invalid response";
                                return c.logError(i), void e.reject(new Error(i))
                            }
                            n.telemetry.sendReport("calendars", "chartevents_ok"), this.minObtainedTimestamp = this.from, "no_data" === t.status && (this._noResults = !0, this.minObtainedTimestamp = -1 / 0);
                            const a = this._mergeItems(t.result || []);
                            e.resolve(a), this.changed.fire(a)
                        }).fail((t, r) => {
                            if (e === this._pendingDfd && "abort" !== r) {
                                c.logWarn("ChartEvents error on request {0}, status: {1}, status text: {2}".format(i.toString(), t.status, t.statusText));
                                const e = Date.now() - s;
                                n.telemetry.sendReport("calendars", "chartevents_error"), n.telemetry.sendReport("calendars", "chartevents_http_status", {
                                    value: t.status || 400,
                                    additional: {
                                        source: "ChartEvents"
                                    }
                                }), n.telemetry.sendReport("calendars", "chartevents_response_time_frame", {
                                    value: e,
                                    additional: {
                                        source: "ChartEvents"
                                    }
                                })
                            }
                            e.reject(t)
                        });
                    return e.fail(() => {
                        r.abort()
                    }), e.promise()
                }
                destroy() {
                    r().off("chartevents-reuters", this._pushstreamHandler), this._items = [], this.reset()
                }
                _mergeItems(t) {
                    var e;
                    const i = [],
                        s = [],
                        r = this._noResults,
                        n = [];
                    for (let i = t.length; i--;) {
                        const s = t[i]; - 1 !== this.minImportance && this.minImportance > (null !== (e = s.importance) && void 0 !== e ? e : 1 / 0) || (s.timestamp = Date.parse(s.date), void 0 !== this._historyLimit && s.timestamp < this._historyLimit || n.push(s))
                    }
                    for (let t = 0; t < n.length; t++) {
                        const e = n[t];
                        if (this._itemsById[e.id]) {
                            let t = !1;
                            const i = this._itemsById[e.id];
                            for (const s of Object.keys(e)) {
                                const r = s;
                                i[r] !== e[r] && (i[r] = e[r], t = !0)
                            }
                            t && s.push(i)
                        } else this._items.length === this._maxItems && (delete this._itemsById[this._items[0].id], this._items.shift(), i.shift()), this._itemsById[e.id] = e, this._items.push(e), i.push(e)
                    }
                    return {
                        added: i,
                        changed: s,
                        noResults: r
                    }
                }
            }
        },
        143607: (t, e, i) => {
            "use strict";

            function s(t) {
                return Boolean(t.inputs) || function(t) {
                    return Boolean(t.replay)
                }(t) || t.session || t.adjustment || t["currency-id"] || t["unit-id"] ? function(t) {
                    return "=" + JSON.stringify(t)
                }(t) : t.symbol
            }

            function r(t) {
                if ("=" !== t[0]) return {
                    symbol: t
                };
                try {
                    return JSON.parse(t.slice(1))
                } catch (e) {
                    return {
                        symbol: t
                    }
                }
            }
            i.d(e, {
                encodeExtendedSymbolOrGetSimpleSymbolString: () => s,
                decodeExtendedSymbol: () => r
            })
        },
        261314: (t, e, i) => {
            "use strict";
            i.d(e, {
                customFormatters: () => s
            });
            const s = {
                dateFormatter: null,
                timeFormatter: null,
                tickMarkFormatter: null
            }
        },
        210934: (t, e, i) => {
            "use strict";
            i.d(e, {
                monthFormatFunction: () => p,
                dateFormatFunctions: () => f,
                availableDateFormats: () => g,
                defaultDateFormat: () => m
            });
            var s = i(120220),
                r = i(511228);
            const n = {
                    1: () => (0, s.t)("Jan"),
                    2: () => (0, s.t)("Feb"),
                    3: () => (0, s.t)("Mar"),
                    4: () => (0, s.t)("Apr"),
                    5: () => (0, s.t)("May", {
                        context: "short"
                    }),
                    6: () => (0, s.t)("Jun"),
                    7: () => (0, s.t)("Jul"),
                    8: () => (0, s.t)("Aug"),
                    9: () => (0, s.t)("Sep"),
                    10: () => (0, s.t)("Oct"),
                    11: () => (0, s.t)("Nov"),
                    12: () => (0, s.t)("Dec")
                },
                o = (t, e) => (e ? t.getMonth() : t.getUTCMonth()) + 1,
                a = (t, e) => e ? t.getFullYear() : t.getUTCFullYear(),
                l = (t, e) => (0, r.numberToStringWithLeadingZero)(((t, e) => e ? t.getDate() : t.getUTCDate())(t, e), 2),
                h = (t, e) => n[o(t, e)](),
                c = (t, e) => (0, r.numberToStringWithLeadingZero)(o(t, e), 2),
                u = (t, e) => (0, r.numberToStringWithLeadingZero)(a(t, e) % 100, 2),
                d = (t, e) => (0, r.numberToStringWithLeadingZero)(a(t, e), 4),
                p = (t, e) => h(t, e),
                f = {
                    "dd MMM 'yy": (t, e) => `${l(t,e)} ${h(t,e)} '${u(t,e)}`,
                    "MMM dd, yyyy": (t, e) => `${h(t,e)} ${l(t,e)}, ${d(t,e)}`,
                    "MMM dd": (t, e) => `${h(t,e)} ${l(t,e)}`,
                    "yyyy-MM-dd": (t, e) => `${d(t,e)}-${c(t,e)}-${l(t,e)}`,
                    "yy-MM-dd": (t, e) => `${u(t,e)}-${c(t,e)}-${l(t,e)}`,
                    "yy/MM/dd": (t, e) => `${u(t,e)}/${c(t,e)}/${l(t,e)}`,
                    "yyyy/MM/dd": (t, e) => `${d(t,e)}/${c(t,e)}/${l(t,e)}`,
                    "dd-MM-yyyy": (t, e) => `${l(t,e)}-${c(t,e)}-${d(t,e)}`,
                    "dd-MM-yy": (t, e) => `${l(t,e)}-${c(t,e)}-${u(t,e)}`,
                    "dd/MM/yy": (t, e) => `${l(t,e)}/${c(t,e)}/${u(t,e)}`,
                    "dd/MM/yyyy": (t, e) => `${l(t,e)}/${c(t,e)}/${d(t,e)}`,
                    "MM/dd/yy": (t, e) => `${c(t,e)}/${l(t,e)}/${u(t,e)}`,
                    "MM/dd/yyyy": (t, e) => `${c(t,e)}/${l(t,e)}/${d(t,e)}`
                },
                g = Object.keys(f),
                m = () => -1 !== ["ja", "ko", "zh", "zh_TW"].indexOf(window.language || "") ? "yyyy-MM-dd" : "dd MMM 'yy"
        },
        443389: (t, e, i) => {
            "use strict";
            i.d(e, {
                DateFormatter: () => n
            });
            var s = i(261314),
                r = i(210934);
            class n {
                constructor(t = "yyyy-MM-dd") {
                    this._dateFormatFunc = r.dateFormatFunctions[t]
                }
                format(t) {
                    return s.customFormatters && s.customFormatters.dateFormatter ? s.customFormatters.dateFormatter.format(t) : this._dateFormatFunc(t, !1)
                }
                formatLocal(t) {
                    return s.customFormatters.dateFormatter ? s.customFormatters.dateFormatter.formatLocal ? s.customFormatters.dateFormatter.formatLocal(t) : s.customFormatters.dateFormatter.format(t) : this._dateFormatFunc(t, !0)
                }
            }
        },
        833: (t, e, i) => {
            "use strict";
            i.d(e, {
                DateTimeFormatter: () => o
            });
            var s = i(115055),
                r = i(443389);
            const n = {
                dateFormat: "yyyy-MM-dd",
                timeFormat: "%h:%m:%s",
                dateTimeSeparator: " "
            };
            class o {
                constructor(t = {}) {
                    const e = Object.assign({}, n, t);
                    this._dateFormatter = new r.DateFormatter(e.dateFormat), this._timeFormatter = new s.TimeFormatter(e.timeFormat), this._separator = e.dateTimeSeparator
                }
                format(t) {
                    return `${this._dateFormatter.format(t)}${this._separator}${this._timeFormatter.format(t)}`
                }
                formatLocal(t) {
                    return `${this._dateFormatter.formatLocal(t)}${this._separator}${this._timeFormatter.formatLocal(t)}`
                }
            }
        },
        115055: (t, e, i) => {
            "use strict";
            i.d(e, {
                TimeFormatter: () => n
            });
            var s = i(261314),
                r = i(511228);
            class n {
                constructor(t) {
                    this._formatStr = t || "%h:%m:%s"
                }
                format(t) {
                    return s.customFormatters.timeFormatter ? s.customFormatters.timeFormatter.format(t) : this._formatStr.replace("%h", (0, r.numberToStringWithLeadingZero)(t.getUTCHours(), 2)).replace("%m", (0, r.numberToStringWithLeadingZero)(t.getUTCMinutes(), 2)).replace("%s", (0, r.numberToStringWithLeadingZero)(t.getUTCSeconds(), 2))
                }
                formatLocal(t) {
                    return s.customFormatters.timeFormatter ? s.customFormatters.timeFormatter.formatLocal ? s.customFormatters.timeFormatter.formatLocal(t) : s.customFormatters.timeFormatter.format(t) : this._formatStr.replace("%h", (0, r.numberToStringWithLeadingZero)(t.getHours(), 2)).replace("%m", (0, r.numberToStringWithLeadingZero)(t.getMinutes(), 2)).replace("%s", (0, r.numberToStringWithLeadingZero)(t.getSeconds(), 2))
                }
            }
        },
        221218: (t, e, i) => {
            "use strict";
            var s;
            i.d(e, {
                    SymbolErrorPermissionDeniedReason: () => s,
                    permissionDenied: () => r
                }),
                function(t) {
                    t.Symbol = "symbol", t.GroupPermission = "group"
                }(s || (s = {}));
            const r = "permission denied"
        },
        407627: (t, e, i) => {
            "use strict";
            i.d(e, {
                ensureTimePointIndexIndex: () => o,
                unpackNonSeriesData: () => a
            });
            var s = i(373211),
                r = i(416282);

            function n(t) {
                if (!(0, s.isObject)(t)) throw new Error("Graphics commands should be wrapped in an object");
                if ((0, s.hasProperty)(t, "create"), (0, s.hasProperty)(t, "erase")) {
                    const e = t.erase;
                    (0, r.assert)(Array.isArray(e), "Collection of erase commands should be array");
                    for (const t of e) {
                        if (!(0, s.isObject)(t) || !(0, s.hasProperty)(t, "action")) throw new Error("Command should be an object with 'action' property");
                        (0, r.assert)("all" === t.action || "one" === t.action, "Erase command action should be 'all' or 'one'")
                    }
                }
                return t
            }

            function o(t) {
                if (t < 0) throw new Error("TimePointIndexIndex should be non-negative integer");
                return t
            }
            async function a(t) {
                if ("" === t) return null;
                const e = JSON.parse(t);
                if (!(0, s.isObject)(e) || "function" == typeof e) throw new Error("Non-object content in the non-series envelope");
                if ((0, s.hasProperty)(e, "indexes_replace")) return {
                    indexes_replace: !0
                };
                const r = {
                    indexes_replace: !1
                };
                if ((0, s.hasProperty)(e, "offsets") && (r.offsets = e.offsets), (0, s.hasProperty)(e, "isUpdate")) {
                    if ("boolean" != typeof e.isUpdate) throw new Error('Invalid type of "isUpdate" field');
                    r.isUpdate = e.isUpdate
                }
                if ((0, s.hasProperty)(e, "data") && (r.data = e.data), (0, s.hasProperty)(e, "graphicsCmds") && (r.graphicsCmds = n(e.graphicsCmds)), (0, s.hasProperty)(e, "dataCompressed") || (0, s.hasProperty)(e, "graphicsCmdsCompressed")) {
                    const {
                        default: t
                    } = await i.e(81578).then(i.t.bind(i, 966085, 23));
                    if ((0, s.hasProperty)(e, "dataCompressed")) {
                        const i = await (new t).loadAsync(e.dataCompressed, {
                            base64: !0
                        });
                        r.data = JSON.parse(await i.file("").async("text"))
                    }
                    if ((0, s.hasProperty)(e, "graphicsCmdsCompressed")) {
                        const i = await (new t).loadAsync(e.graphicsCmdsCompressed, {
                            base64: !0
                        });
                        r.graphicsCmds = n(JSON.parse(await i.file("").async("text")))
                    }
                    return r
                }
                return r
            }
        },
        540989: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                PlotRowSearchMode: () => a,
                PlotList: () => c,
                mergeMinMax: () => u,
                mergePlotRows: () => d
            });
            var s = i(416282),
                r = i(4543),
                n = i(741657);
            const o = (0, i(987380).getLogger)("Chart.PlotList");
            var a;
            ! function(t) {
                t[t.NearestLeft = -1] = "NearestLeft", t[t.Exact = 0] = "Exact", t[t.NearestRight = 1] = "NearestRight"
            }(a || (a = {}));

            function l(t) {
                return t.index
            }

            function h(t) {
                return t.value[0]
            }
            class c {
                constructor(t = null, e = null) {
                    this._items = [], this._start = 0, this._end = 0, this._shareRead = !1, this._minMaxCache = new Map, this._rowSearchCacheByIndex = new Map, this._rowSearchCacheByIndexWithoutEmptyValues = new Map, this._rowSearchCacheByTime = new Map, this._rowSearchCacheByTimeWithoutEmptyValues = new Map, this._plotFunctions = t || new Map, this._emptyValuePredicate = e
                }
                clear() {
                    this._items = [], this._start = 0, this._end = 0, this._shareRead = !1, this._minMaxCache.clear(), this._invalidateSearchCaches()
                }
                first() {
                    return this.size() > 0 ? this._items[this._start] : null
                }
                last() {
                    return this.size() > 0 ? this._items[this._end - 1] : null
                }
                firstIndex() {
                    return this.size() > 0 ? this._indexAt(this._start) : null
                }
                lastIndex() {
                    return this.size() > 0 ? this._indexAt(this._end - 1) : null
                }
                size() {
                    return this._end - this._start
                }
                isEmpty() {
                    return 0 === this.size()
                }
                contains(t) {
                    return null !== this.search(t, a.Exact)
                }
                valueAt(t) {
                    const e = this.search(t);
                    return null !== e ? e.value : null
                }
                add(t, e) {
                    if (this._shareRead) return o.logDebug("add: readonly collection modification attempt"), !1;
                    const i = {
                            index: t,
                            value: e
                        },
                        s = this._nonCachedSearch(t, a.Exact, l);
                    return this._invalidateSearchCaches(), null === s ? (this._items.splice(this._lowerbound(t, l), 0, i), this._start = 0, this._end = this._items.length, !0) : (this._items[s] = i, !1)
                }
                search(t, e = a.Exact, i) {
                    return this._searchImpl(t, e, this._rowSearchCacheByIndex, this._rowSearchCacheByIndexWithoutEmptyValues, l, i)
                }
                searchByTime(t, e = a.Exact, i) {
                    return this._searchImpl(t, e, this._rowSearchCacheByTime, this._rowSearchCacheByTimeWithoutEmptyValues, h, i)
                }
                fold(t, e) {
                    let i = e;
                    for (let e = this._start; e < this._end; ++e) {
                        i = t(this._indexAt(e), this._valueAt(e), i)
                    }
                    return i
                }
                findFirst(t, e) {
                    const i = void 0 !== e && Math.min(this._start + e, this._end) || this._end;
                    for (let e = this._start; e < i; ++e) {
                        const i = this._indexAt(e),
                            s = this._valueAt(e);
                        if (t(i, s)) return {
                            index: i,
                            value: s
                        }
                    }
                    return null
                }
                findLast(t, e) {
                    const i = void 0 !== e && Math.max(this._end - e, this._start) || this._start;
                    for (let e = this._end - 1; e >= i; --e) {
                        const i = this._indexAt(e),
                            s = this._valueAt(e);
                        if (t(i, s)) return {
                            index: i,
                            value: s
                        }
                    }
                    return null
                }
                each(t) {
                    for (let e = this._start; e < this._end; ++e) {
                        if (t(this._indexAt(e), this._valueAt(e))) break
                    }
                }
                reduce(t, e) {
                    let i = e;
                    for (let e = this._start; e < this._end; ++e) {
                        i = t(i, this._indexAt(e), this._valueAt(e))
                    }
                    return i
                }
                range(t, e) {
                    const i = new c(this._plotFunctions, this._emptyValuePredicate);
                    return i._items = this._items, i._start = this._lowerbound(t, l), i._end = this._upperbound(e), i._shareRead = !0, i
                }
                rangeIterator(t, e) {
                    const i = this._lowerbound(t, l),
                        s = this._upperbound(e);
                    if (i === s) return {
                        hasNext: () => !1,
                        next: () => {
                            throw new Error("Invalid operation")
                        }
                    };
                    let r = i - 1;
                    return {
                        hasNext: () => r < s - 1,
                        next: () => (r += 1, this._items[r])
                    }
                }
                minMaxOnRangeCached(t, e, i) {
                    if (this.isEmpty()) return null;
                    let s = null;
                    for (const r of i) {
                        s = u(s, this._minMaxOnRangeCachedImpl(t - r.offset, e - r.offset, r.name))
                    }
                    return s
                }
                minMaxOnRange(t, e, i) {
                    if (this.isEmpty()) return null;
                    let s = null;
                    for (const r of i) {
                        s = u(s, this._minMaxOnRange(t - r.offset, e - r.offset, r.name))
                    }
                    return s
                }
                merge(t) {
                    return this._shareRead ? (o.logDebug("merge: readonly collection modification attempt"), null) : 0 === t.length ? null : this.isEmpty() || t[t.length - 1].index < this._items[0].index ? this._prepend(t) : t[0].index > this._items[this._items.length - 1].index ? this._append(t) : 1 === t.length && t[0].index === this._items[this._items.length - 1].index ? (this._updateLast(t[0]), t[0]) : this._merge(t)
                }
                addTail(t, e = !1) {
                    let i = 0;
                    e && this._end - this._start > 0 && (i = 1, this._items[this._end - this._start - 1].value = t[0].value);
                    for (let e = i; e < t.length; ++e) {
                        const i = t[e],
                            s = this.lastIndex();
                        if (null === s) {
                            o.logError("Can't add tail to the empty plotlist");
                            break
                        }
                        this.add(s + 1, i.value)
                    }
                    this._invalidateSearchCaches()
                }
                move(t) {
                    if (this._shareRead) return void o.logDebug("move: readonly collection modification attempt");
                    if (0 === t.length) return;
                    const e = this._items.slice();
                    for (const i of t) {
                        const t = this._bsearch(i.old, l);
                        if (null !== t && void 0 !== e[t])
                            if (i.new === n.INVALID_TIME_POINT_INDEX) e[t] = void 0;
                            else {
                                e[t] = {
                                    index: i.new,
                                    value: e[t].value
                                };
                                const s = this._bsearch(i.new, l);
                                if (null !== s) {
                                    const t = e[s];
                                    void 0 !== t && t.index === i.new && (e[s] = void 0)
                                }
                            }
                    }
                    this._items = e.filter(t => void 0 !== t).sort((t, e) => t.index - e.index), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._start = 0, this._end = this._items.length
                }
                remove(t) {
                    if (this._shareRead) return o.logDebug("remove: readonly collection modification attempt"), null;
                    const e = this._nonCachedSearch(t, a.NearestRight, l);
                    if (null === e) return null;
                    const i = this._items.splice(e);
                    return this._end = this._items.length, this._minMaxCache.clear(), this._invalidateSearchCaches(), i.length > 0 ? i[0] : null
                }
                state() {
                    return {
                        start: this._start,
                        end: this._end,
                        data: this._items,
                        shareread: this._shareRead
                    }
                }
                restoreState(t) {
                    t ? (this._start = t.start, this._end = t.end, this._shareRead = t.shareread, this._items = t.data, this._minMaxCache.clear(), this._invalidateSearchCaches()) : this.clear()
                }
                _indexAt(t) {
                    return this._items[t].index
                }
                _valueAt(t) {
                    return this._items[t].value
                }
                _length() {
                    return this._items.length
                }
                _searchImpl(t, e, i, s, r, n) {
                    const o = void 0 !== n ? i : s,
                        a = void 0 !== n ? 1e4 * (e + 1) + n : e;
                    let l = o.get(t);
                    if (void 0 !== l) {
                        const t = l.get(a);
                        if (void 0 !== t) return t
                    }
                    const h = this._nonCachedSearch(t, e, r, n);
                    if (null === h) return null;
                    const c = {
                        index: this._indexAt(h),
                        value: this._valueAt(h)
                    };
                    return void 0 === l && (l = new Map, o.set(t, l)), l.set(a, c), c
                }
                _nonCachedSearch(t, e, i, s) {
                    const r = this._lowerbound(t, i),
                        n = r === this._end || t !== i(this._items[r]);
                    if (n && e !== a.Exact) switch (e) {
                        case a.NearestLeft:
                            return this._searchNearestLeft(r, s);
                        case a.NearestRight:
                            return this._searchNearestRight(r, s);
                        default:
                            throw new TypeError("Unknown search mode")
                    }
                    if (void 0 === s || n || e === a.Exact) return n ? null : r;
                    switch (e) {
                        case a.NearestLeft:
                            return this._nonEmptyNearestLeft(r, s);
                        case a.NearestRight:
                            return this._nonEmptyNearestRight(r, s);
                        default:
                            throw new TypeError("Unknown search mode")
                    }
                }
                _nonEmptyNearestRight(t, e) {
                    const i = (0, s.ensure)(this._emptyValuePredicate),
                        r = (0, s.ensure)(e);
                    for (; t < this._end && i(this._valueAt(t), r);) t += 1;
                    return t === this._end ? null : t
                }
                _nonEmptyNearestLeft(t, e) {
                    const i = (0, s.ensureNotNull)(this._emptyValuePredicate),
                        r = (0, s.ensure)(e);
                    for (; t >= this._start && i(this._valueAt(t), r);) t -= 1;
                    return t < this._start ? null : t
                }
                _searchNearestLeft(t, e) {
                    if (t === this._start) return null;
                    const i = t - 1,
                        s = i !== this._end ? i : null;
                    return void 0 !== e && null !== s ? this._nonEmptyNearestLeft(s, e) : s
                }
                _searchNearestRight(t, e) {
                    const i = t,
                        s = i !== this._end ? i : null;
                    return void 0 !== e && null !== s ? this._nonEmptyNearestRight(s, e) : s
                }
                _bsearch(t, e) {
                    const i = this._lowerbound(t, e);
                    return i !== this._end && t === e(this._items[i]) ? i : null
                }
                _lowerbound(t, e) {
                    return (0, r.lowerbound)(this._items, t, (t, i) => e(t) < i, this._start, this._end)
                }
                _upperbound(t) {
                    return (0, r.upperbound)(this._items, t, (t, e) => e.index > t, this._start, this._end)
                }
                _plotMinMax(t, e, i) {
                    let s = null;
                    const r = this._plotFunctions.get(i);
                    if (void 0 === r) throw new Error(`Plot "${i}" is not registered`);
                    for (let i = t; i < e; i++) {
                        const t = r(this._items[i].value);
                        null == t || Number.isNaN(t) || (null === s ? s = {
                            min: t,
                            max: t
                        } : (t < s.min && (s.min = t), t > s.max && (s.max = t)))
                    }
                    return s
                }
                _invalidateCacheForRow(t) {
                    const e = Math.floor(t.index / 30);
                    this._minMaxCache.forEach(t => t.delete(e))
                }
                _prepend(t) {
                    return (0, s.assert)(!this._shareRead, "collection should not be readonly"), (0, s.assert)(0 !== t.length, "plotRows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items = t.concat(this._items), this._start = 0, this._end = this._items.length, t[0]
                }
                _append(t) {
                    return (0, s.assert)(!this._shareRead, "collection should not be readonly"), (0, s.assert)(0 !== t.length, "plotRows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items = this._items.concat(t), this._start = 0, this._end = this._items.length, t[0]
                }
                _updateLast(t) {
                    (0, s.assert)(!this.isEmpty(), "plot list should not be empty");
                    const e = this._items[this._end - 1];
                    (0, s.assert)(e.index === t.index, "last row index should match new row index"), this._invalidateCacheForRow(t), this._invalidateSearchCaches(), this._items[this._end - 1] = t
                }
                _merge(t) {
                    return (0, s.assert)(0 !== t.length, "plot rows should not be empty"), this._invalidateSearchCaches(),
                        this._minMaxCache.clear(), this._items = d(this._items, t), this._start = 0, this._end = this._items.length, t[0]
                }
                _minMaxOnRangeCachedImpl(t, e, i) {
                    if (this.isEmpty()) return null;
                    let r = null;
                    const n = (0, s.ensureNotNull)(this.firstIndex()),
                        o = (0, s.ensureNotNull)(this.lastIndex()),
                        a = Math.max(t, n),
                        l = Math.min(e, o),
                        h = 30 * Math.ceil(a / 30),
                        c = Math.max(h, 30 * Math.floor(l / 30));
                    r = u(r, this._minMaxOnRange(a, Math.min(h, e, l), i));
                    let d = this._minMaxCache.get(i);
                    void 0 === d && (d = new Map, this._minMaxCache.set(i, d));
                    for (let t = Math.max(h + 1, a); t < c; t += 30) {
                        const e = Math.floor(t / 30);
                        let s = d.get(e);
                        if (void 0 === s) {
                            const t = 30 * e,
                                r = 30 * (e + 1) - 1;
                            s = this._minMaxOnRange(t, r, i), d.set(e, s)
                        }
                        r = u(r, s)
                    }
                    r = u(r, this._minMaxOnRange(c, l, i));
                    return r
                }
                _minMaxOnRange(t, e, i) {
                    return this._plotMinMax(this._lowerbound(t, l), this._upperbound(e), i)
                }
                _invalidateSearchCaches() {
                    this._rowSearchCacheByIndex.clear(), this._rowSearchCacheByIndexWithoutEmptyValues.clear(), this._rowSearchCacheByTime.clear(), this._rowSearchCacheByTimeWithoutEmptyValues.clear()
                }
            }

            function u(t, e) {
                if (null === t) return e;
                if (null === e) return t;
                return {
                    min: Math.min(t.min, e.min),
                    max: Math.max(t.max, e.max)
                }
            }

            function d(t, e) {
                const i = function(t, e) {
                        const i = t.length,
                            s = e.length;
                        let r = i + s,
                            n = 0,
                            o = 0;
                        for (; n < i && o < s;) t[n].index < e[o].index ? n++ : t[n].index > e[o].index ? o++ : (n++, o++, r--);
                        return r
                    }(t, e),
                    s = new Array(i);
                let r = 0,
                    n = 0;
                const o = t.length,
                    a = e.length;
                let l = 0;
                for (; r < o && n < a;) t[r].index < e[n].index ? (s[l] = t[r], r++) : t[r].index > e[n].index ? (s[l] = e[n], n++) : (s[l] = e[n], r++, n++), l++;
                for (; r < o;) s[l] = t[r], r++, l++;
                for (; n < a;) s[l] = e[n], n++, l++;
                return s
            }
        },
        357086: (t, e, i) => {
            "use strict";
            var s;
            i.d(e, {
                    PriceAxisLastValueMode: () => s
                }),
                function(t) {
                    t[t.LastPriceAndPercentageValue = 0] = "LastPriceAndPercentageValue", t[t.LastValueAccordingToScale = 1] = "LastValueAccordingToScale"
                }(s || (s = {}))
        },
        746561: (t, e, i) => {
            "use strict";
            i.d(e, {
                seriesPlotFunctionMap: () => l,
                barFunction: () => h,
                SeriesData: () => u
            });
            var s, r = i(416282),
                n = i(540989);
            ! function(t) {
                t[t.FromLeft = -1] = "FromLeft", t[t.FromRight = 1] = "FromRight"
            }(s || (s = {}));
            const o = {
                    open: t => t[1],
                    high: t => t[2],
                    low: t => t[3],
                    close: t => t[4],
                    hl2: t => (t[2] + t[3]) / 2,
                    hlc3: t => (t[2] + t[3] + t[4]) / 3,
                    ohlc4: t => (t[1] + t[2] + t[3] + t[4]) / 4
                },
                a = ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"];

            function l() {
                const t = new Map;
                return a.forEach((e, i) => {
                    t.set(e, h(e))
                }), t
            }

            function h(t) {
                return o[t]
            }

            function c(t, e) {
                return null == t[e]
            }
            class u {
                constructor() {
                    this.m_bars = new n.PlotList(l(), c), this.m_nsBars = new n.PlotList(l(), c)
                }
                bars() {
                    return this.m_bars
                }
                nsBars() {
                    return this.m_nsBars
                }
                size() {
                    return this.m_bars.size() + this.m_nsBars.size()
                }
                each(t) {
                    this.m_bars.each(t), this.m_nsBars.each(t)
                }
                clear() {
                    this.m_bars.clear(), this.m_nsBars.clear(), this.lastProjectionPrice = void 0
                }
                isEmpty() {
                    return this.m_bars.isEmpty() && this.m_nsBars.isEmpty()
                }
                first() {
                    return this.m_bars.isEmpty() ? this.m_nsBars.first() : this.m_bars.first()
                }
                last() {
                    return this.m_nsBars.isEmpty() ? this.m_bars.last() : this.m_nsBars.last()
                }
                search(t, e) {
                    return this.nsBars().isEmpty() ? this.bars().search(t, e) : this.bars().isEmpty() || (0, r.ensureNotNull)(this.nsBars().firstIndex()) <= t ? this.nsBars().search(t, e) : this.bars().search(t, e)
                }
                valueAt(t) {
                    const e = this.search(t);
                    return null !== e ? e.value : null
                }
                plotValueToTimePointIndex(t, e, i) {
                    if (i === s.FromRight) {
                        const i = (i, s) => {
                                const r = s[e];
                                return null != r && t >= r
                            },
                            s = this.m_bars.findLast(i);
                        if (null !== s) return s.index;
                        const r = this.m_nsBars.findLast(i);
                        return null !== r ? r.index : this.m_bars.firstIndex()
                    }
                    if (i === s.FromLeft) {
                        const i = (i, s) => {
                                const r = s[e];
                                return null != r && t <= r
                            },
                            s = this.m_bars.findFirst(i);
                        if (null !== s) return s.index;
                        const r = this.m_nsBars.findFirst(i);
                        return null !== r ? r.index : this.m_bars.lastIndex()
                    }
                    throw new Error("plotValueToTimePointIndex: unsupported search mode")
                }
                moveData(t) {
                    this.m_bars.move(t), this.m_nsBars.move(t)
                }
            }
        },
        792462: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                SeriesDataSource: () => v,
                initialRequestOptionsToNumBars: () => _,
                parseJapaneseProjectionBars: () => y
            });
            var s = i(416282),
                r = i(331565),
                n = i(143607),
                o = i(302459),
                a = i(746561),
                l = i(407627),
                h = i(221218),
                c = i(896276),
                u = i.n(c);
            class d {
                constructor() {
                    this._loading = new(u()), this._completed = new(u()), this._error = new(u()), this._symbolError = new(u()), this._symbolResolved = new(u()), this._seriesError = new(u()), this._symbolNotPermitted = new(u()), this._symbolGroupNotPermitted = new(u()), this._chartTypeNotPermitted = new(u()), this._intradaySpreadNotPermitted = new(u()), this._intradayExchangeNotPermitted = new(u()), this._customIntervalNotPermitted = new(u()), this._secondsIntervalNotPermitted = new(u()), this._tickMarksRangeChanged = new(u()), this._barReceived = new(u()), this._seriesTimeFrame = new(u()), this._dataUpdated = new(u())
                }
                destroy() {
                    this._loading.destroy(), this._completed.destroy(), this._error.destroy(), this._symbolError.destroy(), this._symbolResolved.destroy(), this._seriesError.destroy(), this._symbolNotPermitted.destroy(), this._symbolGroupNotPermitted.destroy(), this._chartTypeNotPermitted.destroy(), this._intradaySpreadNotPermitted.destroy(), this._intradayExchangeNotPermitted.destroy(), this._customIntervalNotPermitted.destroy(), this._secondsIntervalNotPermitted.destroy(), this._tickMarksRangeChanged.destroy(), this._barReceived.destroy(), this._seriesTimeFrame.destroy(), this._dataUpdated.destroy()
                }
                loading() {
                    return this._loading
                }
                completed() {
                    return this._completed
                }
                error() {
                    return this._error
                }
                symbolError() {
                    return this._symbolError
                }
                symbolResolved() {
                    return this._symbolResolved
                }
                seriesError() {
                    return this._seriesError
                }
                symbolNotPermitted() {
                    return this._symbolNotPermitted
                }
                symbolGroupNotPermitted() {
                    return this._symbolGroupNotPermitted
                }
                chartTypeNotPermitted() {
                    return this._chartTypeNotPermitted
                }
                intradaySpreadNotPermitted() {
                    return this._intradaySpreadNotPermitted
                }
                intradayExchangeNotPermitted() {
                    return this._intradayExchangeNotPermitted
                }
                customIntervalNotPermitted() {
                    return this._customIntervalNotPermitted
                }
                secondsIntervalNotPermitted() {
                    return this._secondsIntervalNotPermitted
                }
                tickMarksRangeChanged() {
                    return this._tickMarksRangeChanged
                }
                barReceived() {
                    return this._barReceived
                }
                seriesTimeFrame() {
                    return this._seriesTimeFrame
                }
                dataUpdated() {
                    return this._dataUpdated
                }
                fireCompleted(t, e) {
                    this._completed.fire(t, e)
                }
                fireLoading(t) {
                    this._loading.fire(t)
                }
                fireError() {
                    this._error.fire()
                }
                fireSymbolError(t) {
                    this._symbolError.fire(t), this.fireError()
                }
                fireSymbolResolved(t) {
                    this._symbolResolved.fire(t)
                }
                fireSeriesError(t) {
                    this._seriesError.fire(t), this.fireError()
                }
                fireSymbolNotPermitted(t) {
                    this._symbolNotPermitted.fire(t), this.fireError()
                }
                fireSymbolGroupNotPermitted(t) {
                    this._symbolGroupNotPermitted.fire(t), this.fireError()
                }
                fireChartTypeNotPermitted(t) {
                    this._chartTypeNotPermitted.fire(t), this.fireError()
                }
                fireIntradaySpreadNotPermitted() {
                    this._intradaySpreadNotPermitted.fire(), this.fireError()
                }
                fireIntradayExchangeNotPermitted() {
                    this._intradayExchangeNotPermitted.fire(), this.fireError()
                }
                fireCustomIntervalNotPermitted() {
                    this._customIntervalNotPermitted.fire(), this.fireError()
                }
                fireSecondsIntervalNotPermitted() {
                    this._secondsIntervalNotPermitted.fire(), this.fireError()
                }
                fireTickMarksRangeChanged(t) {
                    this._tickMarksRangeChanged.fire(t)
                }
                fireBarReceived(t) {
                    this._barReceived.fire(t)
                }
                fireSeriesTimeFrame(t, e, i, s, r) {
                    this._seriesTimeFrame.fire(t, e, i, s, r)
                }
                fireDataUpdated(t, e) {
                    this._dataUpdated.fire(t, e)
                }
            }
            const p = (0, i(987380).getLogger)("Chart.SeriesDataSource");
            var f;
            ! function(t) {
                t[t.Idle = 0] = "Idle", t[t.AwaitingConnection = 1] = "AwaitingConnection", t[t.AwaitingFirstDataUpdate = 2] = "AwaitingFirstDataUpdate", t[t.Active = 3] = "Active"
            }(f || (f = {}));
            let g = 1;
            let m = 1;

            function _(t) {
                return t.startDate ? t.endDate || t.count ? t.endDate ? ["from_to", t.startDate, t.endDate] : ["bar_count", t.startDate, (0, s.ensure)(t.count)] : ["from_to", t.startDate] : t.count || 300
            }
            class v {
                constructor(t, e, i) {
                    this._instanceId = null, this._symbolInstanceId = null, this._symbol = null, this._resolution = null, this._timeFrame = null, this._data = new a.SeriesData, this._dataEvents = new d, this._status = f.Idle, this._turnaroundCounter = 1, this._boundOnGatewayIsConnectedChanged = this._onGatewayIsConnectedChanged.bind(this), this._ongoingDataUpdate = Promise.resolve(), this._gateway = t, this._turnaroundPrefix = e, this._createSeriesParams = _(null != i ? i : {
                        count: 300
                    }), this._gateway.isConnected().subscribe(this._boundOnGatewayIsConnectedChanged)
                }
                destroy() {
                    this.stop(), this._gateway.isConnected().unsubscribe(this._boundOnGatewayIsConnectedChanged)
                }
                modifySeries(t, e, i = null, n = !1) {
                    n && (p.logNormal("Due to force flag clearing symbol & resolution to force re-requesting data."), this._symbol = null, this._resolution = null);
                    const a = this._symbol,
                        l = this._resolution;
                    if (this._symbol = t, this._resolution = e, null === this._instanceId) return void(this._timeFrame = i);
                    const h = !(0, r.deepEquals)(a, t)[0],
                        c = null === l || !o.Interval.isEqual(l, e);
                    (h || c || null !== i) && (this._timeFrame = null, (h || c) && this._turnaroundCounter++, h && this._resolveSymbol(), this._gateway.modifySeries(this._instanceId, this.turnaround(), (0, s.ensureNotNull)(this._symbolInstanceId), this._resolution, i, this._onMessage.bind(this)))
                }
                requestMoreData(t) {
                    null !== this._instanceId && this._gateway.requestMoreData(this._instanceId, t, this._onMessage.bind(this))
                }
                requestMoreTickmarks(t) {
                    null !== this._instanceId && this._gateway.requestMoreTickmarks(this._instanceId, t, this._onMessage.bind(this))
                }
                isStarted() {
                    return this._status !== f.Idle
                }
                isActive() {
                    return this._status === f.Active
                }
                start() {
                    this.isStarted() ? p.logNormal("start: data source is already started, nothing to do") : ((0,
                        s.assert)(null !== this._symbol, "symbol must be set before start"), (0, s.assert)(null !== this._resolution, "resolution must be set before start"), this._gateway.isConnected().value() ? this._createSeries() : this._changeStatusTo(f.AwaitingConnection))
                }
                stop() {
                    this.isStarted() ? (null !== this._instanceId && (this._gateway.removeSeries(this._instanceId), this._instanceId = null), this._changeStatusTo(f.Idle)) : p.logNormal("stop: data source is already stopped, nothing to do")
                }
                instanceId() {
                    return this._instanceId
                }
                data() {
                    return this._data
                }
                clearData() {
                    this.isStarted() ? this._enqueueUpdate(() => this._clearDataImpl()) : this._clearDataImpl()
                }
                dataEvents() {
                    return this._dataEvents
                }
                turnaround() {
                    return `${this._turnaroundPrefix}${this._turnaroundCounter}`
                }
                symbolInstanceId() {
                    return this._symbolInstanceId
                }
                moveData(t) {
                    this._enqueueUpdate(() => this._data.moveData(t))
                }
                _clearDataImpl() {
                    this._data.clear()
                }
                _resolveSymbol() {
                    null !== this._symbol && (this._symbolInstanceId = "sds_sym_" + g++, this._gateway.resolveSymbol(this._symbolInstanceId, (0, n.encodeExtendedSymbolOrGetSimpleSymbolString)(this._symbol), this._onMessage.bind(this)))
                }
                _changeStatusTo(t) {
                    (0, s.assert)(this._status !== t, "Source and destination status should be distinct"), p.logNormal(`Status changed from ${f[this._status]} to ${f[t]}`), this._status = t
                }
                _createSeries() {
                    (0, s.assert)(this._status !== f.Active, 'Status should not be "Active" when creating a study'), this._instanceId = "sds_" + m++, this._resolveSymbol(), this._gateway.createSeries(this._instanceId, this.turnaround(), (0, s.ensureNotNull)(this._symbolInstanceId), (0, s.ensureNotNull)(this._resolution), this._createSeriesParams, this._timeFrame, this._onMessage.bind(this)), this._timeFrame = null, this._changeStatusTo(f.AwaitingFirstDataUpdate)
                }
                _onGatewayIsConnectedChanged(t) {
                    t ? this._onGatewayConnected() : this._onGatewayDisconnected()
                }
                _onGatewayConnected() {
                    this._status === f.AwaitingConnection && this._createSeries()
                }
                _onGatewayDisconnected() {
                    this._status !== f.Idle && this._status !== f.AwaitingConnection && (this._instanceId = null, this._changeStatusTo(f.AwaitingConnection)), this._turnaroundCounter = 1
                }
                _onMessage(t) {
                    this._enqueueUpdate(() => this._onMessageImpl(t))
                }
                async _onMessageImpl(t) {
                    switch (t.method) {
                        case "symbol_resolved":
                            {
                                const [e, i] = t.params;
                                if (e !== this._symbolInstanceId) {
                                    p.logNormal(`Resolve for old symbol, expected: ${this._symbolInstanceId}, actual ${t.params[0]}`);
                                    break
                                }
                                this._onSymbolResolved(i);
                                break
                            }
                        case "symbol_error":
                            if (t.params[0] !== this._symbolInstanceId) {
                                p.logNormal(`Symbol error for old symbol, expected: ${this._symbolInstanceId}, actual ${t.params[0]}`);
                                break
                            }
                            this._onSymbolError(t);
                            break;
                        case "series_timeframe":
                            {
                                const [e, i, s, r, n, o, a] = t.params;
                                if (!this._checkTurnaround(e, i)) {
                                    p.logNormal(`Time frame for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${e} (${i})`);
                                    break
                                }
                                this._onSeriesTimeFrame(s, r, n, o, a);
                                break
                            }
                        case "series_error":
                            {
                                const [e, i] = t.params;
                                if (!this._checkTurnaround(e, i)) {
                                    p.logNormal(`Series error for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${e} (${i})`);
                                    break
                                }
                                this._onSeriesError(t.params[2]);
                                break
                            }
                        case "series_loading":
                            {
                                const [e, i] = t.params;
                                if (!this._checkTurnaround(e, i)) break;this._onSeriesLoading(t.time);
                                break
                            }
                        case "series_completed":
                            {
                                const [e, i, s] = t.params;
                                if (!this._checkTurnaround(e, s)) {
                                    p.logNormal(`Series completed for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${e} (${s})`);
                                    break
                                }
                                this._onSeriesCompleted(i, t.time);
                                break
                            }
                        case "data_update":
                            if (!this._checkTurnaround(t.params.customId, t.params.turnaround)) {
                                p.logNormal(`Data update for old data, expected: ${this._symbolInstanceId} (${this.turnaround()}), actual ${t.params.customId} (${t.params.turnaround})`);
                                break
                            }
                            await this._onDataUpdate(t.params.plots, t.params.nonseries, t.params.lastBar);
                            break;
                        case "clear_data":
                            if (t.params.turnaround !== this.turnaround()) {
                                p.logNormal(`Clear data for old data, expected: ${this.turnaround()}, actual ${t.params.turnaround}`);
                                break
                            }
                            this._clearDataImpl(), this._dataEvents.fireDataUpdated(void 0, !1)
                    }
                }
                _onSeriesError(t) {
                    let e, i;
                    if ("string" == typeof t) i = {
                        error: t
                    }, e = t;
                    else if (i = t, t.ctx) {
                        const i = {};
                        Object.entries(t.ctx).forEach(([t, e]) => {
                            i[t] = e.toString()
                        }), e = t.error.format(i)
                    } else e = t.error;
                    if (e.startsWith("study_not_auth:")) {
                        const t = e.split(":", 2)[1].split("@", 2)[0];
                        ["BarSetRenko", "BarSetPriceBreak", "BarSetKagi", "BarSetPnF"].includes(t) ? this._dataEvents.fireChartTypeNotPermitted(t) : "BarSetSpread" === t ? this._dataEvents.fireIntradaySpreadNotPermitted() : "BarSetRange" === t && this._dataEvents.fireCustomIntervalNotPermitted()
                    } else "resolution_not_entitled" === e ? this._dataEvents.fireIntradayExchangeNotPermitted() : "custom_resolution" === e ? this._dataEvents.fireCustomIntervalNotPermitted() : "seconds_not_entitled" === e && this._dataEvents.fireSecondsIntervalNotPermitted();
                    this._dataEvents.fireSeriesError(i)
                }
                _onSeriesTimeFrame(t, e, i, s, r) {
                    this._dataEvents.fireSeriesTimeFrame(t, e, i, null == s || s, r)
                }
                _onSymbolError(t) {
                    if (t.params[1] === h.permissionDenied) switch (t.params[2]) {
                        case h.SymbolErrorPermissionDeniedReason.Symbol:
                            this._dataEvents.fireSymbolNotPermitted(t.params[3]);
                            break;
                        case h.SymbolErrorPermissionDeniedReason.GroupPermission:
                            this._dataEvents.fireSymbolGroupNotPermitted(t.params[3]);
                            break;
                        default:
                            this._dataEvents.fireSymbolNotPermitted(t.params[2])
                    }
                    this._dataEvents.fireSymbolError(t.params[1])
                }
                _onSymbolResolved(t) {
                    this._dataEvents.fireSymbolResolved(t)
                }
                async _onDataUpdate(t, e, i) {
                    this._onDataUnpacked(t, i, await y(e))
                }
                _enqueueUpdate(t) {
                    return this._ongoingDataUpdate = this._ongoingDataUpdate.then(t, t), this._ongoingDataUpdate
                }
                _onDataUnpacked(t, e, i) {
                    if (this._status === f.Idle) return;
                    this._status === f.AwaitingFirstDataUpdate && (this._changeStatusTo(f.Active), this._clearDataImpl());
                    const s = this._data.bars().size(),
                        r = this._data.bars().firstIndex(),
                        n = this._data.bars().merge(t);
                    null !== i && (this._data.nsBars().clear(), this._data.nsBars().merge(i.projectionPlots), this._data.lastProjectionPrice = i.lastPrice, null !== i.boxSize && (this._data.boxSize = i.boxSize), this._data.reversalAmount = i.reversalAmount);
                    const o = null === r || null !== n && n.index < r;
                    this._dataEvents.fireDataUpdated(e, o), s !== this._data.bars().size() && null !== n && this._dataEvents.fireBarReceived(n)
                }
                _onSeriesLoading(t) {
                    this._dataEvents.fireLoading(t)
                }
                _onSeriesCompleted(t, e) {
                    this._dataEvents.fireCompleted(t, e)
                }
                _checkTurnaround(t, e) {
                    return this._instanceId === t && (void 0 === e || e === this.turnaround())
                }
            }
            async function y(t) {
                if (void 0 === t) return {
                    projectionPlots: [],
                    boxSize: null
                };
                if ("" === t.d || "nochange" === t.indexes) return null;
                const e = await (0, l.unpackNonSeriesData)(t.d);
                if (null === e || e.indexes_replace) return null;
                const i = t.indexes,
                    {
                        bars: s,
                        price: r,
                        boxSize: n,
                        reversalAmount: o
                    } = e.data;
                return {
                    lastPrice: r,
                    projectionPlots: (s || []).map(t => {
                        let e;
                        return "factor" in t ? e = t.factor : "additionalPrice" in t && (e = t.additionalPrice), {
                            index: i[t.time],
                            value: [0, t.open, t.high, t.low, t.close, t.volume, e]
                        }
                    }),
                    reversalAmount: o,
                    boxSize: n
                }
            }
        },
        494129: (t, e, i) => {
            "use strict";
            i.d(e, {
                Session: () => c
            });
            var s = i(416282),
                r = i(765066),
                n = i.n(r),
                o = i(896276),
                a = i.n(o),
                l = i(75443);
            const h = (0, i(987380).getLogger)("ChartApi.AbstractSession");
            class c {
                constructor(t, e, i) {
                    this._isConnected = new(n())(!1), this._state = 0, this._isConnectForbidden = !1, this._sessionId = "", this._sessionIdChanged = new(a()), this._chartApi = t, this._sessionPrefix = e, this._shouldReconnectAfterCriticalError = i
                }
                destroy() {
                    this._logNormal("Destroying session"), this._isConnected.unsubscribe(), this.disconnect(), this._sessionIdChanged.destroy(), delete this._chartApi, this._logNormal("Session has been destroyed")
                }
                isConnected() {
                    return this._isConnected
                }
                sessionId() {
                    return this._sessionId
                }
                onSessionIdChanged() {
                    return this._sessionIdChanged
                }
                connect() {
                    0 === this._state && ((0, s.assert)(!this._isConnectForbidden, "Cannot call connect because it is forbidden at this moment"), this._setSessionId(`${this._sessionPrefix}_${(0,l.randomHash)()}`), this._logNormal("Connecting session - wait until transport stay connected"), this._state = 1, this._chartApi.createSession(this._sessionId, this))
                }
                disconnect() {
                    0 !== this._state && ((0, s.assert)("" !== this._sessionId, "sessionId must not be invalid"), this._logNormal("Disconnecting session..."), this._forbidConnectWhile(() => {
                        this._chartApi.connected() && this._sendRemoveSession(), this._processDestroyingOnServer()
                    }))
                }
                onMessage(t) {
                    switch (t.method) {
                        case "connected":
                            return void this._onChartApiConnected();
                        case "disconnected":
                            return void this._onChartApiDisconnected();
                        case "critical_error":
                            const e = String(t.params[0]),
                                i = String(t.params[1]);
                            return void this._onCriticalError(e, i)
                    }
                    this._onMessage(t)
                }
                _getChartApi() {
                    return this._chartApi
                }
                _generateLogMessage(t) {
                    return `[${this._sessionId}] ${t}`
                }
                _onCriticalError(t, e) {
                    this._logError(`Critical error. Reason=${t}, info=${e}.`), this._forbidConnectWhile(() => {
                        this._processDestroyingOnServer()
                    }), this._shouldReconnectAfterCriticalError ? (this._logNormal("Reconnecting after critical error..."), this.connect()) : this._logNormal("Reconnecting after critical error skipped")
                }
                _onChartApiConnected() {
                    (0, s.assert)(1 === this._state, "Session is not registered"), this._logNormal("Transport is connected. Creating session on the server"), this._sendCreateSession(), this._state = 2, this._isConnected.setValue(!0)
                }
                _onChartApiDisconnected() {
                    this._logNormal("Transport is disconnected. Reconnecting..."),
                        this._forbidConnectWhile(() => {
                            this._processDestroyingOnServer()
                        }), this.connect()
                }
                _setSessionId(t) {
                    const e = this._sessionId;
                    this._logNormal(`Changing sessionId: old=${e}, new=${t}`), this._sessionId = t, this._sessionIdChanged.fire(t, e)
                }
                _logNormal(t) {
                    h.logNormal(this._generateLogMessage(t))
                }
                _logError(t) {
                    h.logError(this._generateLogMessage(t))
                }
                _processDestroyingOnServer() {
                    this._state = 0, this._isConnected.setValue(!1), this._chartApi.removeSession(this._sessionId), this._setSessionId("")
                }
                _forbidConnectWhile(t) {
                    this._isConnectForbidden = !0, t(), this._isConnectForbidden = !1
                }
            }
        },
        741657: (t, e, i) => {
            "use strict";
            i.d(e, {
                INVALID_TIME_POINT_INDEX: () => s
            });
            const s = -2e6
        },
        429987: (t, e, i) => {
            "use strict";
            i(875853);
            var s = i(336520),
                r = i(795498),
                n = i(871351),
                o = i(457137);
            const a = {
                lightLtr: "/21803441042/ideas_stream_ad_unit",
                lightRtl: "/21803441042/ideas_stream_ad_unit/ideas_stream_ad_unit_rtl",
                darkLtr: "/21803441042/ideas_stream_ad_unit/ideas_stream_ad_unit",
                darkRtl: "/21803441042/ideas_stream_ad_unit/ideas_stream_ad_unit_rtl_dark"
            };
            async function l(t) {
                const e = document.querySelector(".js-native-promo-block"),
                    i = document.querySelector(".js-native-promo-block-content");
                if (null === e || null === i) return;
                if (!(0, n.isEnabled)()) return void(t && (e.classList.add("i-hidden"), t(!0)));
                const s = await async function() {
                    return {
                        placementId: "feed",
                        adUnitPath: await (0, n.getAdUnitPath)(a),
                        size: "fluid",
                        optDiv: "div-gpt-ad-1579255427657-0"
                    }
                }();
                const r = new IntersectionObserver(o => {
                    for (const a of o) a.isIntersecting && (null == i || i.setAttribute("id", s.optDiv), null == i || i.classList.remove("js-native-promo-block-content"), null == e || e.classList.remove("i-hidden", "js-native-promo-block"), (0, n.displaySlot)(s, i => {
                        i && (null == e || e.classList.add("i-hidden")), t && t(i), (0, n.trackAdDialogEvent)(n.AdUnit.IdeasStream, n.Placement.Feeds, "show", !i)
                    }), r.unobserve(e))
                }, {
                    rootMargin: "50px",
                    threshold: 0
                });
                r.observe(e)
            }
            class h {
                constructor() {
                    this._ready = (0, o.createDeferredPromise)()
                }
                load() {
                    l(t => {
                        this._ready.resolve(t), this._ready = (0, o.createDeferredPromise)()
                    })
                }
                ready() {
                    return this._ready.promise
                }
            }
            var c = i(903851),
                u = i(305803),
                d = i(777465),
                p = i(485139);
            const f = {
                ".js-broker-about-init-ssr": async () => (await Promise.all([i.e(25535), i.e(78895), i.e(53911), i.e(55189), i.e(33660), i.e(2926)]).then(i.bind(i, 292457))).brokerAboutSsrInit,
                ".js-broker-reviews-ssr": async () => (await Promise.all([i.e(61212), i.e(85597), i.e(25535), i.e(81542), i.e(37653), i.e(84044), i.e(13893), i.e(32575), i.e(96343), i.e(97945), i.e(23189), i.e(11216), i.e(19894), i.e(92765), i.e(73362), i.e(86172), i.e(85701)]).then(i.bind(i, 661325))).brokerReviewsSsrInit,
                ".js-stars-rating-interactive.tv-stars-rating-block--interactive": async () => (await i.e(73707).then(i.bind(i, 40081))).starsRatingHandlerInit,
                ".js-users-list": async () => (await i.e(63731).then(i.bind(i, 449191))).brokerFollowPagesInit,
                ".js-feed-pagination": async () => (await i.e(62642).then(i.bind(i, 767008))).brokerReviewPaginationHandlerInit,
                ".js-symbol-follow-buttons": async () => (await Promise.all([i.e(36778), i.e(63060), i.e(35224), i.e(67550), i.e(80448), i.e(40835)]).then(i.bind(i, 940608))).initSymbolFollowButtons,
                ".js-main-page-brokers-block": async () => (await Promise.all([i.e(36778), i.e(63060), i.e(35224), i.e(67550), i.e(80448), i.e(40835)]).then(i.bind(i, 731354))).mainPageBrokersWidgetSsrInit
            };

            function g(t) {
                if (!(0, p.isCancelled)(t)) throw t
            }

            function m() {
                const t = [],
                    e = [];
                for (const [i, s] of Object.entries(f)) {
                    const r = Array.from(document.querySelectorAll(i));
                    0 !== r.length && (t.push(r), e.push(s))
                }
                const i = (0, p.makeCancelable)(Promise.all(e.map(t => t()))),
                    s = [];
                return i.promise.then(e => {
                    for (let i = 0; i < e.length; i++) {
                        const r = t[i];
                        for (const t of r) {
                            const r = e[i](t);
                            s.push(r)
                        }
                    }
                }, g), () => {
                    i.cancel(), s.forEach(t => t())
                }
            }
            i(473579), i(487021), i(497698);
            var _ = i(344020),
                v = i(929098),
                y = i(685864),
                b = i(13548),
                w = i(969817),
                S = i(106798),
                C = i(464079),
                x = i(607562),
                M = i(75443),
                k = (i(372012), i(918184));

            function E(t, e = {}) {
                const i = t.tvSiteWidget("getInstance");
                if (i) return i;
                this.$el = t, this.scroll = null, this._options = k.extend({}, this.deafultOptions, t.data("tv-feed-widget-options") || {}, e), this._fixedHeightElement = null;
                let s = !1;
                (this._options.$scrollWrapper || {}).length && (this._options.$scrollInner || {}).length && (this.setScrollElements({
                    $scrollWrapper: this._options.$scrollWrapper,
                    $scrollInner: this._options.$scrollInner
                }), s = !0), this._options.needScroll && (s || (t.addClass("tv-feed-widget--scrollable"), this.wrapContent()), this.initScroll())
            }
            k.fn.tvSiteWidget = (0, C.createTvBlockWithInstance)("tv-feed-widget", (function(t, e) {
                return new E(t, e)
            })), E.prototype.deafultOptions = {
                needScroll: !1,
                scrollOptions: {
                    showTopShadow: !0,
                    showBottomShadow: !1,
                    bubbleScrollEvent: !0
                }
            }, E.prototype._allowedElements = ["head", "title", "body", "footer", "show-more", "scroll-wrapper", "scroll-inner", "scroll-content"], E.prototype.setScrollElements = function({
                $scrollWrapper: t,
                $scrollInner: e
            }) {
                this.$scrollWrapper = t, this.$scrollInner = e
            }, E.prototype.getElement = function(t) {
                if (-1 !== this._allowedElements.indexOf(t)) return this._cache || (this._cache = {}), this._cache[t] || (this._cache[t] = this.$el.find(".tv-feed-widget__" + t).eq(0)), this._cache[t].length || delete this._cache[t], this._cache[t]
            }, E.prototype._setElement = function(t, e) {
                var i = this.getElement(t);
                e = e || "", i && i.length && i.html(e)
            }, E.prototype.setElements = function(t) {
                var e;
                t = t || {};
                for (var i = this._allowedElements.length - 1; i >= 0; i--) e = this._allowedElements[i], t.hasOwnProperty(e) && this._setElement(e, t[e])
            }, E.prototype.wrapContent = function() {
                if (!(this.$scrollWrapper || {}).length || !(this.$scrollInner || {}).length) {
                    var t, e, i, s, r = this.$el,
                        n = r.children(".tv-feed-widget__scroll-wrapper"),
                        o = 1 === n.children().length && n.children(".tv-feed-widget__scroll-inner"),
                        a = n.length && o.length,
                        l = this.getElement("head"),
                        h = r.height();
                    a ? (t = 0, r.children().not(n).each((function() {
                        t += k(this).outerHeight(!0)
                    })), n.height(h - t)) : (e = r.children().not(l), i = (0, M.guid)(), n = k('<div class="tv-feed-widget__scroll-wrapper" id="' + i + '">'), t = l && l.outerHeight(!0) || 0, n.height(h - t), e.wrapAll(n), s = (0, M.guid)(), o = k('<div class="tv-feed-widget__scroll-inner" id="' + s + '">'), e.wrapAll(o), n = r.find("#" + i), o = r.find("#" + s)), this.$scrollWrapper = n, this.$scrollInner = o
                }
            }, E.prototype.initScroll = function() {
                !this.scroll && (this.$scrollWrapper || {}).length && (this.$scrollInner || {}).length && (this.scroll = new x.SidebarCustomScroll(this.$scrollWrapper[0], this.$scrollInner[0], this._options.scrollOptions))
            }, E.prototype.destroyScroll = function() {
                this.scroll && (this.scroll.destroy(), delete this.scroll)
            };
            var P = i(195355);
            class T {
                constructor(t) {
                    this._listeners = [], this._el = t
                }
                init() {
                    this._el.addEventListener("ga-feed-widget-event", this.gaTrackEvent)
                }
                gaTrackEvent(t) {
                    (0, v.trackEvent)("Index_widget", t.detail.title, t.detail.name + (t.detail.data ? t.detail.data : "") + " (" + function() {
                        const t = window.location.pathname.split("/");
                        let e = "";
                        return "" === t[1] || t[1].match(/(ideas)/) ? e = "Main" : t[1].match(/(chart)/) && (e = t[2].match(/(stocks|indices|commodities|currencies|bitcoin|crypto)/) || "" === t[2] ? "Market page" : "Symbol page"), e
                    }() + ")")
                }
                gaDispatchEvent(t, e, i = "", s = null) {
                    s || (s = this._el), s.dispatchEvent(new CustomEvent("ga-feed-widget-event", {
                        detail: {
                            title: t,
                            name: e,
                            data: i
                        }
                    }))
                }
                gaBindClick(t, e, i, s) {
                    Array.prototype.slice.call(this._el.querySelectorAll(t)).forEach(t => {
                        const r = t => {
                            const r = s ? t.currentTarget.dataset[s] : "";
                            this.gaDispatchEvent(e, i, r, this._el)
                        };
                        t.addEventListener("click", r), this._listeners.push({
                            target: t,
                            handler: r
                        })
                    })
                }
                destroy() {
                    this._el.removeEventListener("ga-feed-widget-event", this.gaTrackEvent), this._listeners.forEach(t => {
                        t.target.removeEventListener("click", t.handler)
                    })
                }
            }
            class A {
                constructor(t, e, i = {}) {
                    this._analytics = null, this._contentWidget = null, this._contentWidgetPromise = null, this._id = t, this._el = e, this._initData = i, this._initData.trackEventsGA && !this._initData.is_embed_widget && (this._analytics = new T(e), this._analytics.init())
                }
                async init() {
                    return null !== this._contentWidget ? Promise.resolve(this._contentWidget) : (this._contentWidgetPromise || (this._prepareInitData(), this._contentWidgetPromise = this._loadContentWidget(), this._contentWidgetPromise.then(t => {
                        this._contentWidget = t, this._afterWidgetLoad()
                    })), this._contentWidgetPromise)
                }
                readyForBalancing() {
                    return Promise.resolve()
                }
                destroy() {
                    null !== this._analytics && this._analytics.destroy(), null !== this._contentWidgetPromise && this._contentWidgetPromise.then(t => {
                        null !== t && "function" == typeof t.destroy && t.destroy()
                    })
                }
                _prepareInitData() {}
                _afterWidgetLoad() {}
            }
            var L = i(170797),
                D = i(504898);

            function I(t, e, s, r) {
                return Promise.all([i.e(89104).then(i.bind(i, 89104)), Promise.all([i.e(60239), i.e(25106)]).then(i.bind(i, 525106)), i.e(62344).then(i.bind(i, 462344)), i.e(91239).then(i.bind(i, 791239))]).then(i => {
                    const [n, o, a, l] = i, h = a.getScrollOffsetCalculationData({ ...s,
                        scrollButtonSize: o.scrollButtonSize
                    });
                    return n.initScrollButtons({
                        buttonsWrapper: t,
                        scrollWrapper: e,
                        scrollType: D.ScrollType.Horizontal,
                        addScrollButtonsFunction: o.addScrollButtons,
                        scrollData: h,
                        scrollBehaviour: {
                            getNextPositionBackward: l.getNextScrollPositionBackwardCard,
                            getNextPositionForward: l.getNextScrollPositionForwardCard
                        },
                        onScroll: r
                    })
                })
            }
            var N = i(524926),
                F = i(250401);
            i(210140), i(687453), i(679712), i(350298), i(873929), i(39972);
            class B extends A {
                _afterWidgetLoad() {
                    const t = this._initData.id;
                    null !== this._analytics && t && (this._analytics.gaBindClick(".js-widget-tab", t, "tab: ", "content"), this._analytics.gaBindClick(".js-widget-title-link", t, "title-link"), this._analytics.gaBindClick(".js-userlink-popup", t, "user-link"), this._analytics.gaBindClick(".js-badge", t, "user-badge"))
                }
                async _loadContentWidget() {
                    return Promise.resolve(new R(this._el))
                }
            }
            class R {
                constructor(t) {
                    const e = t.querySelector(".js-pages");
                    if (e)
                        for (const t of Array.from(e.children)) {
                            (0, F.initImageLoad)(t);
                            const e = t.querySelector(".js-scroll-content");
                            if (e) {
                                const i = (0, D.wrapWithScroll)(t, e, D.ScrollType.Horizontal);
                                P.mobiletouch || I(t, i, {
                                    elementSize: 184,
                                    elementsCount: e.children.length,
                                    scrollWrapper: i,
                                    scrollButtonsAffectVisibilitySize: !1,
                                    startPaddingSize: 8,
                                    endPaddingSize: 0,
                                    gapSize: 8
                                })
                            }
                        }
                    const s = t.querySelector(".js-tabs");
                    s && (this._tabs = new L.Tabs(s, e || void 0, {
                        activeTabClass: "i-active",
                        activePageClass: void 0,
                        inactiveTabClass: void 0,
                        inactivePageClass: "i-hidden"
                    }));
                    const r = Array.from(t.querySelectorAll(".js-open-account"));
                    if (r.length > 0) {
                        const t = async t => {
                            const e = t.currentTarget.dataset,
                                [{
                                    tryInvokeOpenAccountHandler: s
                                }, {
                                    trackOpenAccountButtonPress: r
                                }] = await Promise.all([i.e(89198).then(i.bind(i, 737969)), i.e(71708).then(i.bind(i, 777606))]),
                                n = e.brokerSlugName,
                                o = e.openAccountType;
                            r(n, "index-page-widget", o), s({
                                brokerData: {
                                    brokerId: Number(e.brokerId),
                                    brokerName: e.brokerName,
                                    brokerSlugName: n
                                },
                                openAccountType: o,
                                referralLink: e.referralLink,
                                source: "index-page-widget"
                            })
                        };
                        for (const e of r) e.addEventListener("click", t)
                    }
                    this._destroyAgoFormatters = (0, N.initAgoDateFormatters)(t, !1, !0)
                }
                destroy() {
                    var t;
                    null === (t = this._tabs) || void 0 === t || t.stop(), this._destroyAgoFormatters()
                }
            }
            class O {}
            var q = i(307833);
            i(628676);
            const W = () => i.e(80336).then(i.bind(i, 824370));
            var z = i(205966),
                U = i(697786),
                V = i(357086),
                H = (i(182520), i(254851), i(725827), i(918184));
            const $ = i(987380).getLogger("FeedWidgets.FeedWidgetChart");
            class j extends A {
                init() {
                    return null === this._findRenderTarget(this._el) && (this._contentWidget = new O, this._contentWidgetPromise = Promise.resolve(this._contentWidget)), this._checkSymbolAvailable() ? (this.$el = H(this._el), super.init()) : this._contentWidgetPromise
                }
                _checkSymbolAvailable() {
                    const t = this._initData,
                        e = t.symbol.split(":")[0].toLowerCase();
                    if (t.symbol_available !== z.OK) {
                        return async function(t, e, i) {
                            return (await W()).chartWidgetAddBlanketActions(t, e, i)
                        }(this._findRenderTarget(this._el), e, t.symbol_available).then(t => {
                            t && window.location.reload()
                        }), this._contentWidget = new O, this._contentWidgetPromise = Promise.resolve(this._contentWidget), !1
                    }
                    return !!t.symbol || ($.logError("`initData.symbol` is required"), this._contentWidget = new O, this._contentWidgetPromise = Promise.resolve(this._contentWidget), !1)
                }
                async _loadContentWidget() {
                    const t = this._findRenderTarget(this._el);
                    q.disable("edit_buttons_in_legend"), q.disable("popup_hints"), q.disable("control_bar");
                    return Promise.all([Promise.all([i.e(32637), i.e(51008), i.e(11216), i.e(34698), i.e(68981), i.e(4033), i.e(19453), i.e(84234), i.e(18229), i.e(51021), i.e(14080), i.e(11008), i.e(77929), i.e(87048), i.e(94965), i.e(60380), i.e(59958), i.e(7009), i.e(69202), i.e(54376), i.e(2566)]).then(i.bind(i, 437165)), Promise.all([i.e(34698), i.e(68981), i.e(27218)]).then(i.bind(i, 162138)), this._getThemeOverride()]).then(e => {
                        const [i, s, r] = e, n = i.createFeedWidgetChart(t, this._getChartSettings());
                        return this._chartThemeBound = new s.ChartThemeBound(n, r), this._chartThemeBound.init(), n
                    })
                }
                _getChartSettings() {
                    return {
                        defTimeframe: "12m",
                        symbol: this._initData.symbol,
                        interval: this._initData.interval,
                        overrides: {
                            "scalesProperties.showSymbolLabels": !1,
                            "mainSeriesProperties.showCountdown": !1
                        },
                        handleScale: {
                            axisPressedMouseMove: {
                                time: !1,
                                price: !0
                            },
                            mouseWheel: !1,
                            pinch: !1
                        },
                        handleScroll: {
                            mouseWheel: !1,
                            pressedMouseMove: !1,
                            horzTouchDrag: !1,
                            vertTouchDrag: !1
                        }
                    }
                }
                _afterWidgetLoad() {
                    if (null !== this._analytics) {
                        const t = "symbol-widget";
                        this._analytics.gaBindClick(".js-interactive-chart", t, "interactive-chart", !1), this._analytics.gaBindClick(".js-timeframe-tab", t, "timeframe-tab: ", "timeframe"), this.$el.on("click", ".js-follow-symbol", e => {
                            const i = H(e.currentTarget).hasClass("js-follow-symbol--followed") ? "unfollow" : "follow";
                            this._analytics.gaDispatchEvent(t, i, !1)
                        })
                    }
                    if (this._initData.withChartModel) {
                        const t = this._contentWidget.activeChartWidget.value();
                        t.withModel(this, (function() {
                            this._initData.withChartModel(t.model().model())
                        }))
                    }
                    this._initData.platform_placement && Promise.all([Promise.all([i.e(49531), i.e(72867), i.e(63443), i.e(83639)]).then(i.bind(i, 163443)), Promise.all([i.e(35507), i.e(64466), i.e(11216), i.e(28139), i.e(94291)]).then(i.bind(i, 999037))]).then(([{
                        PlatformPlacement: t
                    }, {
                        globalToasts: e
                    }]) => {
                        this._platformPlacement = new t(e, !0, n.Placement.Symbols), this._platformPlacement.display()
                    })
                }
                destroy() {
                    this._chartThemeBound && this._chartThemeBound.destroy(), this._platformPlacement && this._platformPlacement.destroy(), super.destroy()
                }
                _findRenderTarget(t) {
                    const e = H(t).find(".js-feed-widget-chart-container");
                    return e.length ? e : null
                }
                async _getThemeOverride() {
                    return (await Promise.all([i.e(11216), i.e(34698), i.e(68981), i.e(25373)]).then(i.bind(i, 137151))).feedChartThemesOverride
                }
            }
            class Y extends j {
                destroy() {
                    document.body.removeEventListener("update-timeline-events", this._updateChartTimelineEvents), super.destroy()
                }
                async _loadContentWidget() {
                    const [t, {
                        getTimelineEventsInitData: e
                    }, {
                        getAllTimelineEvents: s
                    }] = await Promise.all([super._loadContentWidget(), Promise.all([i.e(11216), i.e(34698), i.e(68981), i.e(25373)]).then(i.bind(i, 163962)), Promise.all([i.e(11216), i.e(34698), i.e(68981), i.e(25373)]).then(i.bind(i, 564232))]), {
                        symbol: r
                    } = await e(), n = await s(r);
                    return this._addTimelineEventsToChart(t, n), document.body.addEventListener("update-timeline-events", this._updateChartTimelineEvents.bind(this), !1), t
                }
                async _addTimelineEventsToChart(t, e) {
                    const [{
                        getStoriesTimeLineItemData: s
                    }, {
                        addStoriesTimeLineSource: r
                    }, {
                        isTimelineEventShownOnChart: n
                    }] = await Promise.all([Promise.all([i.e(11216), i.e(34698), i.e(68981), i.e(25373)]).then(i.bind(i, 919580)), Promise.all([i.e(26822), i.e(74814), i.e(18436), i.e(78895), i.e(53471), i.e(55337), i.e(4033), i.e(19453), i.e(18229), i.e(60380), i.e(33660), i.e(49984), i.e(99314)]).then(i.bind(i, 370730)), Promise.all([i.e(11216), i.e(34698), i.e(68981), i.e(25373)]).then(i.bind(i, 649615))]);
                    r(t, () => e.filter(n).map(s))
                }
                _getChartSettings() {
                    const t = Object.assign({}, super._getChartSettings(), {
                        chartStyle: U.STYLE_LINE,
                        showBottomToolbar: !1,
                        legendWidgetEnabled: !1,
                        publishedChartsEnabled: !1,
                        lastPriceAnimationEnabled: !1,
                        zoomInOut: !1,
                        useKineticScroll: !0,
                        handleScale: {
                            axisPressedMouseMove: {
                                time: !1,
                                price: !0
                            },
                            mouseWheel: !1,
                            pinch: !1
                        }
                    });
                    return delete t.handleScroll, delete t.defTimeframe, t.overrides = Object.assign({}, t.overrides, {
                        "scalesProperties.showSymbolLabels": !1,
                        "scalesProperties.showPrePostMarketPriceLabel": !1,
                        "scalesProperties.seriesLastValueMode": V.PriceAxisLastValueMode.LastValueAccordingToScale
                    }), t
                }
                async _getThemeOverride() {
                    return (await Promise.all([i.e(11216), i.e(34698), i.e(68981), i.e(25373)]).then(i.bind(i, 137151))).feedTimelineThemesOverride
                }
                async _updateChartTimelineEvents(t) {
                    const e = this._contentWidget,
                        {
                            removeStoriesTimeLineSource: s
                        } = await Promise.all([i.e(26822), i.e(74814), i.e(18436), i.e(78895), i.e(53471), i.e(55337), i.e(4033), i.e(19453), i.e(18229), i.e(60380), i.e(33660), i.e(49984), i.e(99314)]).then(i.bind(i, 370730));
                    s(e), this._addTimelineEventsToChart(e, t.detail.timelineEvents)
                }
            }
            var G = i(719200),
                X = i(342098),
                J = i.n(X),
                Q = i(918184),
                Z = i(765066);
            class K extends A {
                static get type() {
                    return "chartevents"
                }
                _prepareInitData() {
                    const t = this._el,
                        {
                            importanceFilter: e,
                            currencyFilter: i,
                            is_embed_widget: s
                        } = this._initData;
                    if (this.$el = Q(t), this.$tvSiteWidget = this.$el.find(".tv-feed-widget").tvSiteWidget({
                            needScroll: !1
                        }), this._propertiesWV = new Z({
                            importanceFilter: e,
                            currencyFilter: i
                        }), !s) {
                        const t = "chartevents-standalone";
                        this._propertiesWV.setValue(Object.assign(this._propertiesWV.value(), J().getJSON(t, null))), this._propertiesWV.subscribe(e => {
                            J().setJSON(t, e)
                        })
                    }
                    const r = this.$tvSiteWidget.tvSiteWidget("get", "getElement", "body").height(),
                        n = _.mediaState.width > _.mediaState.breakpoints.phone ? "wide" : "narrow";
                    this._bridge = {
                        container: this.$el.find(".js-reuters-calendar").get(0),
                        headerspace: this.$el.find(".js-feed-widget-control-icons").get(0),
                        properties: this._propertiesWV,
                        visible: this.visible,
                        width: new Z(430),
                        height: new Z(r),
                        options: {
                            layout: n,
                            hideImportanceIndicator: !0,
                            maxHistoryInHours: 0,
                            maxItems: 8,
                            noScroll: !0,
                            widgetType: "feed",
                            showHeaderIcons: !0
                        }
                    }
                }
                async _loadContentWidget() {
                    return Promise.resolve(new G.ReutersCalendarWidget(this._bridge))
                }
                _afterWidgetLoad() {
                    const {
                        id: t
                    } = this._initData;
                    _.mediaState.on("changeDevice", this._checkMode.bind(this)), null !== this._analytics && (this._analytics.gaBindClick(".js-widget-title-link", t, "toggle-link", !1), this._analytics.gaBindClick(".js-show-more", t, "show-more", !1), this._contentWidget.onLayoutUpdated.subscribe(this, () => {
                        this._analytics.gaBindClick(".js-expand__title", t, "toggle-", "type")
                    }))
                }
                _checkMode() {
                    const t = this._contentWidget;
                    _.mediaState.width > _.mediaState.breakpoints.phone ? t.setLayout("wide") : t.setLayout("narrow"), _.mediaState.width > _.mediaState.breakpoints.tablet && this.$tvSiteWidget.tvSiteWidget("get", "showMoreExpanded") ? t.initScroll() : _.mediaState.width <= _.mediaState.breakpoints.tablet && t.destroyScroll()
                }
            }
            var tt = i(896276),
                et = i.n(tt);
            class it extends A {
                constructor() {
                    super(...arguments), this._onHasNoData = new(et())
                }
                onHasNoData() {
                    return this._onHasNoData
                }
            }
            var st = i(331565),
                rt = i(280790),
                nt = i(681293),
                ot = i(218194),
                at = i(120220),
                lt = (i(406486), i(500466));
            const ht = Math.pow(10, 6),
                ct = {
                    valuation: ["market_cap_basic", "enterprise_value_fq", "enterprise_value_ebitda_ttm", "total_shares_outstanding_fundamental", "number_of_employees", "number_of_shareholders", "price_earnings_ttm", "price_revenue_ttm", "price_book_ratio", "price_sales_ratio"],
                    price_history: ["average_volume", "beta_1_year", "price_52_week_high", "price_52_week_low", "price_percent_change_1_week", "price_percent_change_52_week"],
                    balance_sheet: ["quick_ratio", "current_ratio", "debt_to_equity", "net_debt", "total_debt", "total_current_assets", "total_assets"],
                    dividends: ["dividends_paid", "dividends_yield", "dps_common_stock_prim_issue_fy"],
                    operating_metrics: ["return_on_assets", "return_on_equity", "return_on_invested_capital", "revenue_per_employee"],
                    margins: ["after_tax_margin", "gross_margin", "operating_margin", "pre_tax_margin"],
                    income_statement: ["basic_eps_net_income", "earnings_per_share_basic_ttm", "earnings_per_share_fq", "last_annual_eps", "earnings_per_share_diluted_ttm", "net_income", "ebitda", "gross_profit_fq", "gross_profit", "last_annual_revenue", "total_revenue", "free_cash_flow"]
                },
                ut = {
                    valuation: ["market_cap_basic", "enterprise_value_fq", "enterprise_value_ebitda_ttm", "total_shares_outstanding_fundamental", "number_of_employees", "number_of_shareholders", "price_earnings_ttm", "price_revenue_ttm", "price_book_ratio", "price_sales_ratio"],
                    price_history: ["average_volume", "beta_1_year", "price_52_week_high", "price_52_week_low"],
                    balance_sheet: ["quick_ratio", "current_ratio", "debt_to_equity", "net_debt", "total_debt", "total_assets"],
                    dividends: ["dividends_paid", "dividends_yield", "dps_common_stock_prim_issue_fy"],
                    operating_metrics: ["return_on_assets", "return_on_equity", "return_on_invested_capital", "revenue_per_employee"],
                    margins: ["after_tax_margin", "gross_margin", "operating_margin", "pre_tax_margin"],
                    income_statement: ["basic_eps_net_income", "earnings_per_share_basic_ttm", "last_annual_eps", "net_income", "ebitda", "gross_profit_fq", "gross_profit", "last_annual_revenue", "total_revenue", "free_cash_flow"]
                },
                dt = [
                    ["valuation", "balance_sheet", "operating_metrics"],
                    ["price_history", "dividends", "margins", "income_statement"]
                ],
                pt = {
                    valuation: (0, at.t)("Valuation"),
                    price_history: (0, at.t)("Price History"),
                    balance_sheet: (0, at.t)("Balance Sheet"),
                    dividends: (0, at.t)("Dividends"),
                    operating_metrics: (0, at.t)("Operating Metrics"),
                    income_statement: (0, at.t)("Income Statement"),
                    margins: (0, at.t)("Margins")
                };

            function ft(t, e, i) {
                const s = parseFloat(String(t));
                return isNaN(s) ? "—" : (0, st.isInteger)(s) || (0, st.isNumber)(s) && Math.abs(s) > ht ? e.format(s) : (0, st.isNumber)(s) ? i.format(s) : s
            }
            var gt = i(901694),
                mt = i(194795),
                _t = i.n(mt);
            const vt = i(987380).getLogger("SymbolQuotes");
            class yt extends(_t()) {
                constructor(t, e = [], i = !1) {
                    super(), this._subscribed = !1, this._qs_id = (0, M.guid)(), this._watchedFields = e, this._stopAfterFieldsReceived = i, this._fieldsReceived = new Set([]), t ? this.symbol = t : vt.logError("`symbol` is required", "SymbolQuotes")
                }
                set symbol(t) {
                    this.unsubscribe(), this._symbol = t, this.subscribe()
                }
                get symbol() {
                    return this._symbol
                }
                subscribe() {
                    this._subscribed || (this._subscribed = !0, (0, S.getQuoteSessionInstance)("full").subscribe(this._qs_id, this._symbol, this._onData.bind(this)))
                }
                getExistingData() {
                    return (0, S.getQuoteSessionInstance)("full").snapshot(this._symbol)
                }
                unsubscribe() {
                    this._subscribed && (this._subscribed = !1, this._fieldsReceived = new Set([]), (0, S.getQuoteSessionInstance)("full").unsubscribe(this._qs_id, this._symbol))
                }
                _onData(t, e) {
                    switch (t.status) {
                        case "ok":
                            this._successData(t, e);
                            break;
                        case "permission_denied":
                            this._onPermissionDenied(t);
                            break;
                        case "error":
                            this._errorData(t)
                    }
                }
                _successData(t, e) {
                    const i = this._watchedFields;
                    let s;
                    if (i.length) {
                        if (!this._isDataChanged(e.values)) return;
                        s = {};
                        for (let e = 0; e < i.length; e++) {
                            const r = i[e];
                            r in t.values && (s[r] = t.values[r], this._fieldsReceived.add(r))
                        }
                        this._stopAfterFieldsReceived && this._allFieldsReceived() && (vt.logDebug("All fields received, disconnecting"), this.unsubscribe())
                    } else s = (0, gt.deepCopy)(t.values);
                    this.trigger("updated", [s])
                }
                _isDataChanged(t) {
                    const e = this._watchedFields;
                    for (let i = 0; i < e.length; i++)
                        if (e[i] in t) return !0;
                    return !1
                }
                _allFieldsReceived() {
                    return this._fieldsReceived.size === this._watchedFields.length && this._watchedFields.every(t => this._fieldsReceived.has(t))
                }
                _onPermissionDenied(t) {
                    this.trigger("permission_denied"), vt.logDebug("Permission denied for symbol: " + this._symbol, "SymbolQuotes")
                }
                _errorData(t) {
                    this.unsubscribe(), this.trigger("error"), vt.logWarn("Invalid symbol: " + this._symbol, "SymbolQuotes")
                }
            }
            var bt = i(222495),
                wt = i(513469),
                St = i(272316);
            const Ct = i(987380).getLogger("WidgetFundamendals", {
                    maxCount: 1e3
                }),
                xt = [].concat.apply([], wt.values(ct)),
                Mt = St.Model.extend({
                    initialize: function({
                        symbol: t,
                        el: e
                    }) {
                        e ? t ? (this.view = new kt({
                            model: this
                        }), this.view.setElement(e), this.symbolQuotes = new yt(t, xt, !0), this.symbolQuotes.getExistingData().then(this.update.bind(this)), this.symbolQuotes.on("updated", this.update.bind(this)), this.symbolQuotes.on("error", () => {
                            clearTimeout(this._timeoutHandle), this.trigger("symbol_error"), this.trigger("load")
                        }), this.hasData = !1, this.hasTimedOut = !1, this._timeoutHandle = setTimeout(() => {
                            this.hasTimedOut = !0, this.trigger("load")
                        }, 5e3), this._renderView = () => this.view.render(), _.mediaState.on("changeDevice", this._renderView)) : Ct.logError("`symbol` is required") : Ct.logError("`el` is required")
                    },
                    update: function(t) {
                        this.hasTimedOut || (this.set(t), !this.hasData && Object.keys(t).some(t => xt.includes(t)) && (clearTimeout(this._timeoutHandle), this.hasData = !0, this.trigger("load")))
                    },
                    destroy: function() {
                        this.symbolQuotes.unsubscribe(),
                            this.symbolQuotes.off(), this.view.stopListening(), clearTimeout(this._timeoutHandle), _.mediaState.off("changeDevice", this._renderView)
                    }
                }),
                kt = St.View.extend({
                    initialize: function() {
                        this.model.on("change", () => this.render()), this.firstRender = !0, this._verticalScrollDecorator = null
                    },
                    render: function() {
                        const t = this.model.attributes,
                            e = t.title ? t.title : null === t.title ? null : window.t("Financials", {
                                context: "data"
                            }),
                            i = Boolean(t.isTransparent),
                            s = Boolean(t.isCardViewItemBgLegacy),
                            r = "adaptive" === t.displayMode,
                            n = "compact" === t.displayMode,
                            o = "desktop" === _.mediaState.device || "desktopHd" === _.mediaState.device,
                            a = function(t = {}) {
                                const e = t.volumeFormatter || new nt.VolumeFormatter,
                                    i = t.numericFormatter || new rt.NumericFormatter(4),
                                    s = t.isCardView,
                                    r = t.isTransparent,
                                    n = t.data,
                                    o = t.isCardViewItemBgLegacy,
                                    a = t.isCompact ? ut : ct;
                                if (!n) return null;

                                function l(t) {
                                    return {
                                        name: t,
                                        title: pt[t],
                                        items: a[t].map(t => ({
                                            label: ot.quoteFieldTitles[t][0],
                                            value: ft(n[t], e, i)
                                        }))
                                    }
                                }
                                let h;
                                h = s ? Object.keys(a).map(t => l(t)) : dt.map(t => t.map(t => l(t)));
                                const c = {
                                    main: '\n\t\t\t<div class="tv-widget-fundamentals\n\t\t\t\t{{#isCardView}}tv-widget-fundamentals--card-view{{/isCardView}}\n\t\t\t\t{{#isTransparent}}tv-widget-fundamentals--transparent{{/isTransparent}}\n\t\t\t\t">\n\t\t\t\t{{^isCardView}}\n\t\t\t\t\t{{#preparedData}}\n\t\t\t\t\t\t<div class="tv-widget-fundamentals__column">\n\t\t\t\t\t\t\t{{#.}}\n\t\t\t\t\t\t\t\t{{> item}}\n\t\t\t\t\t\t\t{{/.}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/preparedData}}\n\t\t\t\t{{/isCardView}}\n\t\t\t\t{{#isCardView}}\n\t\t\t\t\t{{#preparedData}}\n\t\t\t\t\t\t{{> item}}\n\t\t\t\t\t{{/preparedData}}\n\t\t\t\t{{/isCardView}}\n\t\t\t</div>\n\t\t',
                                    item: '\n\t\t\t<div class="tv-widget-fundamentals__item{{#isCardViewItemBgLegacy}} tv-widget-fundamentals__item--legacy-bg{{/isCardViewItemBgLegacy}}">\n\t\t\t\t<div class="tv-widget-fundamentals__title">\n\t\t\t\t\t{{title}}\n\t\t\t\t</div>\n\t\t\t\t{{#items}}\n\t\t\t\t\t<div class="tv-widget-fundamentals__row">\n\t\t\t\t\t<span class="tv-widget-fundamentals__label apply-overflow-tooltip">\n\t\t\t\t\t\t{{label}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t<span class="tv-widget-fundamentals__value apply-overflow-tooltip">\n\t\t\t\t\t\t{{value}}\n\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t{{/items}}\n\t\t\t</div>\n\t\t'
                                };
                                return lt.render(c.main, {
                                    preparedData: h,
                                    isCardView: s,
                                    isTransparent: r,
                                    isCardViewItemBgLegacy: o
                                }, c)
                            }({
                                data: t,
                                isCompact: !0,
                                isCardView: r ? !o : n,
                                isTransparent: i,
                                isCardViewItemBgLegacy: s
                            }),
                            l = this.$el.find(".tv-feed-widget"),
                            h = {
                                "scroll-content": a
                            };
                        if (e && (h.title = e), l.tvSiteWidget(), l.tvSiteWidget("setElements", h), this.firstRender) {
                            if (this.firstRender = !1, Boolean(t.useVerticalScroll)) {
                                const t = l.tvSiteWidget("getInstance");
                                t.wrapContent();
                                const e = t.getElement("scroll-wrapper").get(0);
                                this._verticalScrollDecorator = new bt.NativeScrollDecorator(e)
                            }
                            const e = this.$el[0].querySelector(".js-widget-body"),
                                i = e.querySelector(".js-scroll-content");
                            if (i) {
                                const t = (0, D.wrapWithScroll)(e, i, D.ScrollType.Horizontal);
                                P.mobiletouch || I(e, t, {
                                    elementSize: 348,
                                    startPaddingSize: 8,
                                    endPaddingSize: 0,
                                    elementsCount: Object.keys(ct).length,
                                    scrollWrapper: t,
                                    scrollButtonsAffectVisibilitySize: !1,
                                    gapSize: 8
                                })
                            }
                        } else this._verticalScrollDecorator && this._verticalScrollDecorator.update();
                        this.trigger("rendered")
                    }
                });
            var Et = i(526945);
            class Pt extends it {
                static get type() {
                    return "fundamentals"
                }
                _prepareInitData() {
                    this._initData.el = this._el, this._initData.displayMode = "adaptive"
                }
                async _loadContentWidget() {
                    return Promise.resolve(new Mt(this._initData))
                }
                _afterWidgetLoad() {
                    Array.from(this._el.querySelectorAll(".js-widget-title-link")).forEach(t => {
                        t.addEventListener("click", () => {
                            const t = (0, Et.makeSymbolFinancialsPageUrl)({
                                proName: this._initData.symbol
                            });
                            (0, v.trackEvent)("GUI", "Financials", "Symbol Page"), window.location.href = t
                        })
                    }), this._contentWidget.once("load", () => {
                        this._contentWidget.hasData || this._onHasNoData.fire()
                    }), this._contentWidget.view.render()
                }
            }
            var Tt = i(667294),
                At = i(973935),
                Lt = (i(918184), i(500466), i(100855)),
                Dt = i(337891),
                It = i(294184),
                Nt = i.n(It),
                Ft = i(416282),
                Bt = i(993669),
                Rt = i(814563),
                Ot = i(669388),
                qt = i(772881),
                Wt = i(54917),
                zt = i(40899),
                Ut = i(710031),
                Vt = i(350946),
                Ht = i(37945),
                $t = i(821318),
                jt = i(52300),
                Yt = i(690481),
                Gt = i(76539),
                Xt = i(494972),
                Jt = i(987380),
                Qt = i(894770),
                Zt = i(347251),
                Kt = i(302459),
                te = i(765066),
                ee = i.n(te),
                ie = i(380238),
                se = i(184404);
            const re = (0, at.t)("O", {
                    context: "in_legend"
                }),
                ne = (0, at.t)("H", {
                    context: "in_legend"
                }),
                oe = (0, at.t)("L", {
                    context: "in_legend"
                }),
                ae = (0, at.t)("C", {
                    context: "in_legend"
                }),
                le = (0, at.t)("Vol", {
                    context: "in_legend"
                }),
                he = [re, ne, oe, ae];

            function ce(t) {
                const {
                    time: e,
                    children: i,
                    style: s,
                    className: r
                } = t;
                return Tt.createElement("div", {
                    className: Nt()(se.floatingTooltip, "line" === s && se.floatingTooltip_style_line, r)
                }, Tt.createElement("div", null, i), Tt.createElement("div", {
                    className: se.time
                }, e))
            }

            function ue(t) {
                const {
                    price: e,
                    volume: i,
                    time: s,
                    style: r
                } = t;
                return Tt.createElement(ce, {
                    time: s,
                    style: r
                }, Tt.createElement("div", {
                    className: se.priceAndVolume
                }, Tt.createElement("div", {
                    className: se.priceAndVolume__price
                }, e), i && Tt.createElement("div", {
                    className: se.priceAndVolume__volume
                }, `${le} ${i}`)))
            }

            function de(t) {
                const {
                    prices: e,
                    volume: i,
                    time: s,
                    style: r
                } = t;
                return Tt.createElement(ce, {
                    time: s,
                    className: se.floatingTooltip_align_left,
                    style: r
                }, Tt.createElement("div", {
                    className: se.ohlc
                }, Tt.createElement(Tt.Fragment, null, e.map((t, e) => Tt.createElement(pe, {
                    key: he[e],
                    legend: he[e],
                    price: t
                })), i && Tt.createElement(pe, {
                    legend: le,
                    price: i,
                    className: se.ohlc__column_volume
                }))))
            }

            function pe(t) {
                const {
                    legend: e,
                    price: i,
                    className: s
                } = t;
                return Tt.createElement("div", {
                    className: se.ohlc__row
                }, Tt.createElement("div", {
                    className: Nt()(se.ohlc__column, se.ohlc__legends)
                }, e), Tt.createElement("div", {
                    className: Nt()(se.ohlc__column, s)
                }, i))
            }

            function fe(t) {
                switch (t.type) {
                    case "ohlc":
                        {
                            const {
                                type: e,
                                ...i
                            } = t;
                            return Tt.createElement(de, { ...i
                            })
                        }
                    case "line":
                        {
                            const {
                                type: e,
                                ...i
                            } = t;
                            return Tt.createElement(ue, { ...i
                            })
                        }
                    default:
                        return Tt.createElement("div", null)
                }
            }
            class ge {
                constructor(t = document.body, e) {
                    this._cursorPosition = [0, 0], this._updatePosition = () => {
                        const {
                            width: t,
                            height: e
                        } = this._tooltipContainer.getBoundingClientRect(), [i, s] = this._cursorPosition, r = Math.max(0, Math.min(this._container.clientWidth - t, i - t / 2));
                        let n = s - (e + 12);
                        n < 0 && (n = s + 12),
                            this._tooltipContainer.style.left = r + "px", this._tooltipContainer.style.top = n + "px"
                    }, this._container = t, this._style = e;
                    const i = document.createElement("div");
                    i.classList.add(se.floatingTooltipContainer), this._tooltipContainer = i, this._container.appendChild(i)
                }
                destroy() {
                    At.unmountComponentAtNode(this._tooltipContainer), this._tooltipContainer.remove()
                }
                hide() {
                    this._tooltipContainer.classList.remove(se.floatingTooltipContainer_show)
                }
                show() {
                    this._tooltipContainer.classList.add(se.floatingTooltipContainer_show)
                }
                update(t) {
                    if (t) {
                        const {
                            cursorPosition: e,
                            time: i,
                            prices: s,
                            volume: r,
                            priceColor: n = "initial",
                            volumeColor: o = "initial"
                        } = t;
                        this._cursorPosition = e, this._tooltipContainer.style.setProperty("--priceColor", n), this._tooltipContainer.style.setProperty("--volumeColor", o), Array.isArray(s) ? this._render({
                            type: "ohlc",
                            prices: s,
                            volume: r,
                            time: i,
                            style: this._style
                        }) : this._render({
                            type: "line",
                            price: s,
                            volume: r,
                            time: i,
                            style: this._style
                        }), this.show()
                    } else this.hide()
                }
                _render(t) {
                    At.render(Tt.createElement(fe, t), this._tooltipContainer, this._updatePosition)
                }
            }
            var me = i(443389),
                _e = i(833),
                ve = i(792462);
            const ye = (0, Jt.getLogger)("Chart.MiniChart"),
                be = new nt.VolumeFormatter,
                we = {
                    value: "12M",
                    type: "period-back"
                },
                Se = {
                    chartType: "area",
                    topColor: (0, Vt.generateColor)(Bt.colorsPalette["color-tv-blue-500"], 70),
                    bottomColor: (0, Vt.generateColor)(Bt.colorsPalette["color-tv-blue-500"], 100),
                    lineColor: Bt.colorsPalette["color-tv-blue-500"],
                    lineWidth: 2,
                    priceLineVisible: !1,
                    crosshairMarkerVisible: !1,
                    lastValueVisible: !1,
                    scaleMargins: {
                        top: .01,
                        bottom: .01
                    }
                },
                Ce = {
                    scaleMargins: {
                        top: .8,
                        bottom: 0
                    },
                    priceScaleId: "overlay",
                    upColor: (0, Vt.applyTransparency)(Bt.colorsPalette["color-minty-green-400"], 50),
                    downColor: (0, Vt.applyTransparency)("#ef5350", 50),
                    visible: !1,
                    lastValueVisible: !1,
                    priceLineVisible: !1
                },
                xe = {
                    noSpinner: !0,
                    width: 4,
                    color: Bt.colorsPalette["color-brand"]
                },
                Me = {
                    onFirstData: null,
                    description: "",
                    showDescription: !0,
                    valuesTracking: "0",
                    timeframe: {
                        visible: !1,
                        value: we.value,
                        options: new Set(["1D", "1M", "3M", "12M", "60M", "ALL"])
                    },
                    chartOptions: {
                        minWidth: 0,
                        minHeight: 0,
                        chart: {
                            grid: {
                                horzLines: {
                                    color: "rgba(120, 123, 134, 0.1)",
                                    visible: !1
                                },
                                vertLines: {
                                    color: "#ffffff",
                                    visible: !1
                                }
                            },
                            crosshair: {
                                horzLine: {
                                    visible: !1,
                                    style: 3,
                                    width: 1,
                                    labelVisible: !1
                                },
                                vertLine: {
                                    visible: !1,
                                    style: 3,
                                    width: 1,
                                    labelVisible: !1
                                }
                            },
                            layout: {
                                fontFamily: "Trebuchet MS",
                                fontSize: 10,
                                textColor: "#83888D",
                                backgroundColor: "transparent"
                            },
                            watermark: {
                                visible: !1,
                                color: "#83888D",
                                fontSize: 12
                            },
                            rightPriceScale: {
                                visible: !0,
                                borderVisible: !1,
                                entireTextOnly: !0,
                                mode: jt.PriceScaleMode.Normal
                            },
                            leftPriceScale: {
                                visible: !1,
                                borderVisible: !1,
                                entireTextOnly: !0,
                                mode: jt.PriceScaleMode.Normal
                            },
                            timeScale: {
                                borderVisible: !1,
                                timeVisible: !0,
                                secondsVisible: !1
                            },
                            handleScale: !1,
                            handleScroll: !1
                        },
                        series: Se,
                        volume: Ce,
                        loading: xe
                    }
                },
                ke = {
                    "1y": {
                        value: "12M",
                        type: "period-back"
                    },
                    "5y": {
                        value: "60M",
                        type: "period-back"
                    },
                    max: {
                        value: "ALL",
                        type: "period-back"
                    }
                };

            function Ee(t, e) {
                return {
                    time: t,
                    value: e[4]
                }
            }

            function Pe(t, e) {
                return {
                    time: t,
                    open: e[1],
                    high: e[2],
                    low: e[3],
                    close: e[4]
                }
            }
            class Te {
                constructor(t, e, i, s = Zt.miniTimeFrameOptions) {
                    var r;
                    this._elTimeframe = null, this._timeframeView = null,
                        this._availableResolutions = [], this._chartSession = null, this._connectCallback = null, this._connected = !1, this._loadErrorTimeout = null, this._isLoading = !1, this._spinner = null, this._floatingTooltip = null, this._onCrosshairMoveBound = null, this._seriesUpDownColors = null, this._volumeUpDownColors = null, this._onPlotStatusChanged = t => {
                            switch (t) {
                                case 3:
                                    this._onPlotDataReady();
                                    break;
                                case 2:
                                    this._onPlotDataError();
                                    break;
                                case 1:
                                    this._onPlotDataSymbolResolvingError()
                            }
                        }, this._onChartSessionIsConnectedChanged = t => {
                            t ? (this._connected = !0, "function" == typeof this._connectCallback && this._connectCallback(), this._requestData()) : (this._connected = !1, this._plot.disconnect())
                        }, this._options = (0, Gt.default)(Me, i), this._widget = (0, jt.createChart)(e, null === (r = this._options.chartOptions) || void 0 === r ? void 0 : r.chart), this._timeFrameOptions = s, this._container = e, this._timeframe = {
                            type: "period-back",
                            value: this._options.timeframe.value
                        }, this.setTimeframe(this._timeframe, !1), this._plot = new Le(this, this._options.chartOptions.series, this._options.chartOptions.volume), this._plot.setSymbol(t), this._plot.symbolResolved.subscribe(this, this._onSymbolResolved), this._plot.status.subscribe(this._onPlotStatusChanged), this.connect(), this._createFloatingTooltip(), window.addEventListener("resize", () => this.resizeByContainer());
                    const n = this._options.chartOptions.series;
                    switch (n.chartType) {
                        case "candlesticks":
                            this._seriesUpDownColors = {
                                up: n.borderUpColor,
                                down: n.borderDownColor
                            };
                            break;
                        case "bars":
                            this._seriesUpDownColors = {
                                up: n.upColor,
                                down: n.downColor
                            };
                            break;
                        default:
                            this._seriesUpDownColors = null
                    }
                    const o = this._options.chartOptions.volume;
                    this._volumeUpDownColors = {
                        up: o.upColor,
                        down: o.downColor
                    }
                }
                container() {
                    return this._container
                }
                getChartContainer() {
                    var t, e, i, s, r;
                    return null !== (r = null === (s = null === (i = null === (e = null === (t = this._container.getElementsByTagName("div").item(0)) || void 0 === t ? void 0 : t.getElementsByTagName("table").item(0)) || void 0 === e ? void 0 : e.getElementsByTagName("tr").item(0)) || void 0 === i ? void 0 : i.getElementsByTagName("td").item(1)) || void 0 === s ? void 0 : s.getElementsByTagName("div").item(0)) && void 0 !== r ? r : null
                }
                resizeByContainer() {
                    const t = this.container().clientHeight,
                        e = this.container().clientWidth;
                    this._widget.applyOptions({
                        height: t,
                        width: e
                    }), this._plot.fitContent()
                }
                connect(t) {
                    "function" == typeof t && (this._connectCallback = t), this.connected() || (this._showLoading(), this._plot.flush(), this._chartSession || (this._chartSession = new Qt.ChartSession(window.ChartApiInstance, !0)), this._chartSession.isConnected().subscribe(this._onChartSessionIsConnectedChanged), this._chartSession.criticalError().subscribe(this, this._onChartSessionCriticalError), this._chartSession.connect(), this._clearLoadErrorTimeout(), this._loadErrorTimeout = setTimeout(() => {
                        this.showMessage((0, at.t)("No data here yet")), "function" == typeof this._options.onFirstData && (this._options.onFirstData(), this._options.onFirstData = null)
                    }, 15e3))
                }
                disconnect() {
                    if (!this.connected()) return;
                    const t = (0, Ft.ensureNotNull)(this._chartSession);
                    t.criticalError().unsubscribe(this, this._onChartSessionCriticalError),
                        t.isConnected().unsubscribe(this._onChartSessionIsConnectedChanged), this._plot.disconnect(), this._chartSession && this._chartSession.isConnected().value() && this._chartSession.disconnect(), this._connected = !1, this._clearLoadErrorTimeout()
                }
                connected() {
                    return Boolean(this._connected && this._chartSession && this._chartSession.isConnected().value())
                }
                setTimeframe(t, e = !0) {
                    const i = this._timeframe;
                    let s = t;
                    const r = ke[s.value];
                    void 0 !== r && (s = r), this._timeframe = this._timeframeIsValid(s) ? s : we, e && i !== this._timeframe && this.connect()
                }
                chartSession() {
                    return (0, Ft.ensureNotNull)(this._chartSession)
                }
                widget() {
                    return this._widget
                }
                timeframe() {
                    return this._timeframe
                }
                resolution() {
                    const t = this._timeFrameOptions.find(t => t.value.value === this.timeframe().value);
                    return (0, Ft.ensureDefined)((0, Ft.ensureDefined)(t).targetResolution)
                }
                changeSymbol(t, e) {
                    var i;
                    void 0 !== e && (null === (i = this._options.chartOptions) || void 0 === i ? void 0 : i.series) && (this._options.chartOptions.series = (0, Gt.default)(Se, e)), this._plot.deleteView(), this._plot.setSymbol(t), this._plot.requestData(), this.connect()
                }
                showMessage(t) {
                    this._hideLoading(), this._widget.applyOptions({
                        watermark: {
                            visible: !0,
                            text: t
                        }
                    })
                }
                hideMessage() {
                    this._widget.applyOptions({
                        watermark: {
                            visible: !1
                        }
                    })
                }
                from() {
                    const t = this._timeFrameOptions.find(t => t.value.value === this.timeframe().value);
                    return [null == t ? void 0 : t.from]
                }
                enable(t) {
                    this.connect(t)
                }
                disable() {
                    this.disconnect()
                }
                destroy() {
                    this.disconnect(), this._destroyFloatingTooltip(), this._widget.remove(), this._plot.symbolResolved.unsubscribeAll(null), this._plot.destroy(), this._timeframeView && this._timeframeView.destroy()
                }
                updateAvailableTimeframes(t) {
                    const e = this._plot.availableResolutions || [];
                    this._plot.symbolInfo ? (e.push(...this._plot.symbolInfo.resolutions || []), this._availableResolutions = (0, Xt.uniq)(e), this._timeframeView && this._options.timeframe.visible && this._timeframeView.update({
                        ranges: this._getAvailableTimeFrames()
                    }), this.setTimeframe(this._timeframe, !!t)) : ye.logWarn("Updating available resolutions without full symbol info")
                }
                plot() {
                    return this._plot
                }
                subscribeCrosshairMove(t) {
                    this.unsubscribeCrosshairMove(), this._onCrosshairMoveBound = e => {
                        t(this._onCrosshairMoveHandler(e))
                    }, this._widget.subscribeCrosshairMove(this._onCrosshairMoveBound)
                }
                unsubscribeCrosshairMove() {
                    this._onCrosshairMoveBound && this._widget.unsubscribeCrosshairMove(this._onCrosshairMoveBound)
                }
                _onPlotDataReady() {
                    "function" == typeof this._options.onFirstData && (this._options.onFirstData(), this._options.onFirstData = null), this._hideLoading(), this.hideMessage(), this._clearLoadErrorTimeout(), this.disconnect()
                }
                _onPlotDataError() {
                    this._hideLoading(), this.showMessage((0, at.t)("Error")), this._clearLoadErrorTimeout()
                }
                _onPlotDataSymbolResolvingError() {
                    this._hideLoading(), this.showMessage((0, at.t)("No data here yet")), this._clearLoadErrorTimeout()
                }
                _clearLoadErrorTimeout() {
                    this._loadErrorTimeout && (clearTimeout(this._loadErrorTimeout), this._loadErrorTimeout = null)
                }
                _onCrosshairMoveHandler(t) {
                    const {
                        point: e,
                        time: i,
                        seriesPrices: s
                    } = t, r = this._plot.series(), n = this._plot.volume();
                    if (void 0 === e || void 0 === i || null === r) return;
                    const o = (0,
                            Ft.ensureDefined)(s.get(r)),
                        a = n && s.get(n),
                        l = null != a ? be.format(a) : void 0;
                    let h, c, u, d;
                    const p = r.priceFormatter();
                    if ("number" == typeof o) {
                        if (h = r.priceToCoordinate(o), null === h) return;
                        c = p.format(o), u = this._options.chartOptions.series.lineColor
                    } else {
                        if (h = r.priceToCoordinate(o.high), null === h) return;
                        c = [p.format(o.open), p.format(o.high), p.format(o.low), p.format(o.close)];
                        const t = o.close >= o.open;
                        u = t ? (0, Vt.resetTransparency)((0, Ft.ensureNotNull)(this._seriesUpDownColors).up) : (0, Vt.resetTransparency)((0, Ft.ensureNotNull)(this._seriesUpDownColors).down), void 0 !== l && (d = t ? (0, Vt.resetTransparency)((0, Ft.ensureNotNull)(this._volumeUpDownColors).up) : (0, Vt.resetTransparency)((0, Ft.ensureNotNull)(this._volumeUpDownColors).down))
                    }
                    const f = this._dateTimeFormatter.format(new Date(1e3 * i)),
                        {
                            left: g,
                            top: m
                        } = (this.getChartContainer() || this._container).getBoundingClientRect();
                    return {
                        cursorPosition: [e.x + g, ~~h + m],
                        time: f,
                        prices: c,
                        volume: l,
                        priceColor: u,
                        volumeColor: d
                    }
                }
                _initTimeframeSelector() {
                    if (!this._options.timeframe.visible) return;
                    this._options.timeframe.container ? this._elTimeframe = this._options.timeframe.container : (this._elTimeframe = document.createElement("div"), this._container.appendChild(this._elTimeframe));
                    const t = this._getAvailableTimeFrames(),
                        e = (e, i) => {
                            this._timeframeView = new e.TimeFrameViewRenderer((0, Ft.ensureNotNull)(this._elTimeframe), {
                                name: "minichart_timeframe",
                                activeRange: this._timeframe.value,
                                ranges: t,
                                onSelectRange: t => {
                                    this.setTimeframe({
                                        value: t,
                                        type: "period-back"
                                    }), (0, Ft.ensureNotNull)(this._timeframeView).update({
                                        activeRange: t
                                    })
                                },
                                theme: i
                            })
                        };
                    Promise.all([i.e(28378), i.e(31891)]).then(i.bind(i, 593690)).then(t => {
                        (this._options.timeframe.getTheme || (() => Promise.resolve(void 0)))().then(i => e(t, i))
                    })
                }
                _getAvailableTimeFrames() {
                    const t = [];
                    for (const e of this._timeFrameOptions) this._timeframeIsValid(e.value) && this._options.timeframe.options.has(e.value.value) && t.push({
                        value: e.value.value,
                        text: e.text,
                        description: e.description
                    });
                    return t
                }
                _timeframeIsValid(t) {
                    const e = this._timeFrameOptions.find(e => e.value.value === t.value),
                        i = !!e,
                        s = this._availableResolutions && this._availableResolutions.length;
                    let r = !1;
                    if (e && s) {
                        const t = /(\d+)(\w+)/.exec(e.targetResolution);
                        null !== t && -1 !== this._availableResolutions.indexOf(t[2]) && (r = !0)
                    }
                    return i && (!s || r)
                }
                _onChartSessionCriticalError() {
                    this._connected = !1
                }
                _requestData() {
                    const t = Kt.Interval.parse(this.resolution());
                    this._widget.timeScale().applyOptions({
                        timeVisible: !t.isDWM(),
                        secondsVisible: t.isSeconds()
                    });
                    const e = this._widget.options().localization.dateFormat;
                    if (t.isDWM()) this._dateTimeFormatter = new me.DateFormatter(e);
                    else {
                        const i = t.isSeconds() || t.isTicks() ? "%h:%m:%s" : "%h:%m";
                        this._dateTimeFormatter = new _e.DateTimeFormatter({
                            dateFormat: e,
                            timeFormat: i,
                            dateTimeSeparator: "\n"
                        })
                    }
                    this._plot.requestData(), this._widget.applyOptions({
                        timeScale: {
                            timeVisible: !Kt.Interval.parse(this._plot.resolution()).isDWM()
                        }
                    })
                }
                _onSymbolResolved() {
                    this.updateAvailableTimeframes(!1), this._initTimeframeSelector()
                }
                _showLoading() {
                    if (this._isLoading) return;
                    this.hideMessage();
                    const t = this._options.chartOptions.loading;
                    t.noSpinner || (this._spinner || (this._spinner = new ie.Spinner("mini").setStyle({
                        color: this._options.chartOptions.loading.color,
                        width: t.width.toString(),
                        zIndex: "10"
                    })), this._spinner.spin(this._container)), this._isLoading = !0
                }
                _hideLoading() {
                    this._isLoading && (this._spinner && this._spinner.stop(), this._isLoading = !1)
                }
                _createFloatingTooltip() {
                    switch (this._options.valuesTracking) {
                        case "0":
                        case "3":
                            return;
                        case "1":
                            this._floatingTooltip = new ge;
                            break;
                        case "2":
                            this._floatingTooltip = new ge(void 0, "line");
                            break;
                        default:
                            return
                    }
                    this.subscribeCrosshairMove(this._floatingTooltip.update.bind(this._floatingTooltip))
                }
                _destroyFloatingTooltip() {
                    this._floatingTooltip && (this._floatingTooltip.destroy(), this.unsubscribeCrosshairMove(), this._floatingTooltip = null)
                }
            }

            function Ae(t) {
                return (0, st.isInteger)(t)
            }
            class Le {
                constructor(t, e, i) {
                    this.symbol = "", this.status = new(ee())(0), this.symbolResolved = new(et()), this.symbolInfo = null, this.availableResolutions = [], this.minBarIndex = null, this.maxBarIndex = null, this._seriesDataSource = null, this._series = null, this._volume = null, this.id = (0, M.guid)(), this._miniChart = t, this._originalSeriesOptions = e, this._currentSeriesOptions = (0, Yt.default)({}, e), this._originalVolumeOptions = i
                }
                setSymbol(t) {
                    this.symbol = t
                }
                chartSession() {
                    return this._miniChart.chartSession()
                }
                series() {
                    return this._series
                }
                volume() {
                    return this._volume
                }
                requestData() {
                    const t = this._getSeriesDataSource();
                    this._modifySeries(), t.isStarted() || t.start()
                }
                updateData(t) {
                    var e;
                    const i = this._miniChart;
                    t && this._bars().clear();
                    const s = this._originalSeriesOptions;
                    let r;
                    switch (s.chartType) {
                        case "area":
                            r = this._getViewData(Ee);
                            break;
                        case "bars":
                        case "candlesticks":
                            r = this._getViewData(Pe)
                    }
                    if (r.series.length) {
                        if ("area" === s.chartType) {
                            const t = this._currentSeriesOptions,
                                e = r.series;
                            e[r.series.length - 1].value > e[0].value ? (t.lineColor = s.growingLineColor || s.lineColor, t.topColor = s.growingTopColor || s.topColor, t.bottomColor = s.growingBottomColor || s.bottomColor) : (t.lineColor = s.fallingLineColor || s.lineColor, t.topColor = s.fallingTopColor || s.topColor, t.bottomColor = s.fallingBottomColor || s.bottomColor)
                        }
                        if (!this._series) {
                            switch (this._currentSeriesOptions.chartType) {
                                case "area":
                                    this._series = i.widget().addAreaSeries(this._currentSeriesOptions);
                                    break;
                                case "bars":
                                    this._series = i.widget().addBarSeries(this._currentSeriesOptions);
                                    break;
                                case "candlesticks":
                                    this._series = i.widget().addCandlestickSeries(this._currentSeriesOptions)
                            }
                            this._series.priceScale().applyOptions({
                                scaleMargins: this._currentSeriesOptions.scaleMargins
                            })
                        }
                        null === this._volume && this._originalVolumeOptions.visible && (this._volume = i.widget().addHistogramSeries(this._originalVolumeOptions)), this._series.setData(r.series), null === (e = this._volume) || void 0 === e || e.setData(r.volume), this._miniChart.resizeByContainer()
                    }
                }
                fitContent() {
                    if (null === this.maxBarIndex || null === this.minBarIndex) return;
                    const t = this.maxBarIndex - this.minBarIndex,
                        e = this._miniChart.widget(),
                        i = 4 / ((e.options().width - e.priceScale("left").width() - e.priceScale("right").width()) / (t + 1));
                    e.timeScale().setVisibleLogicalRange({
                        from: .5 - i,
                        to: t - .5 + i
                    })
                }
                deleteView() {
                    this._series && (this._miniChart.widget().removeSeries(this._series), this._series = null), this._volume && (this._miniChart.widget().removeSeries(this._volume), this._volume = null)
                }
                disconnect() {
                    null !== this._seriesDataSource && this._seriesDataSource.stop()
                }
                flush() {
                    var t;
                    this.symbolInfo = null, null !== this._seriesDataSource && (this._seriesDataSource.stop(), this._seriesDataSource.data().clear()), null !== this._series && (this._series.setData([]), null === (t = this._volume) || void 0 === t || t.setData([])), this.minBarIndex = null, this.maxBarIndex = null, this.status.setValue(0)
                }
                updateBarIndexes(t, e) {
                    this.minBarIndex = t, this.maxBarIndex = e, this.updateData(!1)
                }
                resolution() {
                    return this._miniChart.resolution()
                }
                destroy() {
                    this.status.unsubscribe()
                }
                firstBar() {
                    return Ae(this.minBarIndex) ? this._bars().search(this.minBarIndex) : this._bars().first()
                }
                lastBar() {
                    return Ae(this.maxBarIndex) ? this._bars().search(this.maxBarIndex) : this._bars().last()
                }
                _onSymbolResolved(t) {
                    this.symbolInfo = t, this._applyFormatter(), this.symbolResolved.fire(this.symbolInfo)
                }
                _onSymbolError(t) {
                    ye.logWarn(this.symbol + " symbol resolving error: " + t), this.updateData(!0), this.status.setValue(1)
                }
                _onResolutionOrExchangeNotPermittedError() {
                    ye.logError(this.symbol + " resolution or exchange permission error"), this.updateData(!0), this._miniChart.showMessage((0, at.t)("No data for this resolution")), this.availableResolutions = ["D", "W", "M"], setTimeout(() => this._miniChart.updateAvailableTimeframes(!0), 1e3)
                }
                _onSeriesError() {
                    1 !== this.status.value() && this.status.setValue(2)
                }
                _onSeriesCompleted() {
                    this.status.setValue(3), 0 !== this._bars().size() || this._miniChart.showMessage((0, at.t)("No data for this conditions"))
                }
                _onTimeFrame(t, e) {
                    this.updateBarIndexes(t, e)
                }
                _onData() {
                    this.updateData(!1)
                }
                _applyFormatter() {
                    const t = (0, Ft.ensureNotNull)(this.symbolInfo);
                    if ("volume" === t.format) this._currentSeriesOptions.priceFormat = {
                        type: "volume",
                        precision: 2,
                        minMove: t.minmov / t.pricescale
                    };
                    else {
                        let e = t.pricescale,
                            i = 0;
                        for (; e > 1;) e /= 10, i += 1;
                        this._currentSeriesOptions.priceFormat = {
                            type: "price",
                            precision: i,
                            minMove: t.minmov / t.pricescale
                        }
                    }
                    this._series && this._series.applyOptions(this._currentSeriesOptions)
                }
                _getViewData(t) {
                    const e = {
                        series: [],
                        volume: []
                    };
                    let i = -1 / 0;
                    const s = this._bars(),
                        r = Ae(this.minBarIndex) ? this.minBarIndex : s.firstIndex(),
                        n = Ae(this.maxBarIndex) ? this.maxBarIndex : s.lastIndex();
                    return null === r || null === n || s.range(r, n).each((s, r) => {
                        const n = new Date(1e3 * r[0]),
                            o = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds()) / 1e3;
                        if (o <= i) return !1;
                        i = o, e.series.push(t(o, r));
                        const a = r[4] >= r[1] ? this._originalVolumeOptions.upColor : this._originalVolumeOptions.downColor;
                        return e.volume.push({
                            time: o,
                            value: r[5],
                            color: a
                        }), !1
                    }), e
                }
                _modifySeries() {
                    this._getSeriesDataSource().modifySeries({
                        symbol: this.symbol
                    }, this.resolution(), this._miniChart.timeframe())
                }
                _getSeriesDataSource() {
                    if (null === this._seriesDataSource) {
                        this._seriesDataSource = new ve.SeriesDataSource(this.chartSession(), "s");
                        const t = this._seriesDataSource.dataEvents();
                        t.symbolResolved().subscribe(this, this._onSymbolResolved),
                            t.symbolError().subscribe(this, this._onSymbolError), t.intradayExchangeNotPermitted().subscribe(this, this._onResolutionOrExchangeNotPermittedError), t.customIntervalNotPermitted().subscribe(this, this._onResolutionOrExchangeNotPermittedError), t.completed().subscribe(this, this._onSeriesCompleted), t.seriesError().subscribe(this, this._onSeriesError), t.seriesTimeFrame().subscribe(this, this._onTimeFrame), t.dataUpdated().subscribe(this, this._onData)
                    }
                    return this._seriesDataSource
                }
                _bars() {
                    return this._getSeriesDataSource().data().bars()
                }
            }
            var De = i(375095),
                Ie = i(620446),
                Ne = i(115701),
                Fe = i(432166);
            var Be = i(764075);
            i(850047);
            var Re = i(48370),
                Oe = i(918184),
                qe = i(500466);
            const We = (0, Jt.getLogger)("WidgetWatchlist"),
                ze = ["symbolActiveColor", "symbolShortNameColor", "symbolDescriptionColor", "symbolSeparatorColor", "tabActiveColor", "tabInactiveColor", "tabSliderColor", "changeUpColor", "changeDownColor", "changeNeutralColor", "lastColor", "lastGrowingFlashColor", "lastFallingFlashColor"],
                Ue = ["plotLineColor", "plotLineColorGrowing", "plotLineColorFalling", "gridLineColor", "scaleFontColor", "belowLineFillColorGrowing", "belowLineFillColorFalling", "belowLineFillColorGrowingBottom", "belowLineFillColorFallingBottom", "lastPriceLineColor", "lastPriceLineColorGrowing", "lastPriceLineColorFalling"];
            class Ve {
                constructor(t, e = {}) {
                    this._stopPageTimeouts = {}, this._activePageLoadedPromise = null, this._destroyTabLabels = null, t || (We.logError("`el` is required"), (0, Ft.assert)(Boolean(t), "`el` is required")), this.$el = Oe(t), this.settings = this._prepareSettings(e), this._activePageLoadedPromise = null, this.tabsLabels = this.settings.tabs.map(t => t.title || t.title_raw);
                    const i = (0, Ht.pickFields)(this.settings, ze);
                    this.widgetColorClassMap = function(t) {
                        const e = (0, M.randomHashN)(4);
                        return t.reduce((t, i) => {
                            const s = i.replace(/[A-Z]/g, t => "-" + t.toLowerCase());
                            return t[i] = `${s}--${e}`, t
                        }, {})
                    }(Object.keys(i)), t.appendChild(function(t, e, i) {
                        const s = (t, e) => `.${t}, .${t}:hover, .${t}:active { color: ${e} }`,
                            r = {
                                symbolActiveColor: (t, e) => `.${t} { background: ${e} }`,
                                symbolSeparatorColor: (t, e) => `.${t}:after { background: ${e} }`,
                                tabSliderColor: (t, e) => `.${t} { background: ${e} }`
                            },
                            n = document.createElement("style"),
                            o = [];
                        for (const n of t) {
                            const t = i[n],
                                a = e[n];
                            if (!t || !a || null === (0, Rt.tryParseRgb)(a)) continue;
                            const l = r[n];
                            o.push(l ? l(t, a) : s(t, a))
                        }
                        return n.textContent = o.join(" "), n
                    }(ze, i, this.widgetColorClassMap)), this.settings.isEmbedWidget || "hotlists" === this.widgetName ? (1 === this.settings.tabs.length && this.$el.find(".js-widget-head").addClass("i-hidden"), this.renderContent().then(() => {
                        this._initPages(), this.setAutoUpdate()
                    }, t => {
                        console.log("WidgetWatchlist constructor error", t)
                    })) : this._initPages()
                }
                setAutoUpdate() {}
                get widgetName() {
                    return "marketoverview"
                }
                get settingsKey() {
                    return "watchlist__summary.properties"
                }
                get userSettings() {
                    return {}
                }
                get templates() {
                    return {
                        tab: '\n\t\t\t\t<div class="tv-widget-watch-list__blank-tab js-widget-tab" data-content="{{ title_raw }}">{{ title }}\n\t\t\t\t</div>',
                        tabContent: `\n\t\t\t\t<div class="tv-widget-watch-list{{^firstTab}} i-hidden{{/firstTab}}{{#firstTab}}{{#hotlistsSelectEnabled}} i-loading{{/hotlistsSelectEnabled}}{{/firstTab}}"{{#group}} data-tab-group="{{ group }}"{{/group}}>\n\t\t\t\t\t{{#showChart}}\n\t\t\t\t\t\t<div class="js-chart tv-widget-watch-list__chart"></div>\n\t\t\t\t\t\t<div class="js-timeframes tv-widget-watch-list__timeframe"></div>\n\t\t\t\t\t{{/showChart}}\n\t\t\t\t\t<div class="js-symbols-wrapper"\n\t\t\t\t\t\t {{#minTableHeight}} style="min-height: {{ minTableHeight }}" {{/minTableHeight}}\n\t\t\t\t\t>\n\t\t\t\t\t\t<div class="tv-site-table tv-widget-watch-list__table\n\t\t\t\t\t\t\t{{#isEmbedWidget}} tv-site-table--start-border {{/isEmbedWidget}}\n\t\t\t\t\t\t\t{{^showChart}} tv-site-table--no-start-border {{/showChart}}\n\t\t\t\t\t\t\t{{#forceEndBorder}} tv-site-table--with-end-border {{/forceEndBorder}}\n\t\t\t\t\t\t\t js-symbols-body">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t{{^isEmbedWidget}}\n\t\t\t\t\t\t{{#quickLink}}\n\t\t\t\t\t\t\t<div class="js-quick-link-wrapper tv-feed-widget__quick-link-wrap tv-feed-widget__padded">\n\t\t\t\t\t\t\t\t<a class="tv-feed-widget__quick-link" href="{{ quickLink.href }}">{{ quickLink.title }}${i(811797)}</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{/quickLink}}\n\t\t\t\t\t{{/isEmbedWidget}}\n\t\t\t\t</div>`,
                        tabContentSkin: '\n\t\t\t\t<div class="tv-widget-watch-list{{^firstTab}} i-hidden{{/firstTab}}{{#firstTab}}{{#hotlistsSelectEnabled}} i-loading{{/hotlistsSelectEnabled}}{{/firstTab}}"{{#group}} data-tab-group="{{ group }}"{{/group}}>\n\t\t\t\t</div>'
                    }
                }
                renderContent() {
                    const t = this.settings.tabs.map(t => {
                        const e = Oe(qe.render(this.templates.tabContent, {
                            showChart: this.settings.show_chart,
                            isEmbedWidget: this.settings.isEmbedWidget,
                            group: t.group,
                            firstTab: t === this.settings.tabs[0],
                            forceEndBorder: this.settings.force_end_border
                        }, this.templates));
                        return e.data("symbols", t.symbols.map(t => Object({
                            s: t.s,
                            d: t.d,
                            t: t.t
                        }))), this.$el.find(".js-pages").append(e), !0
                    });
                    return new Promise(e => {
                        Promise.all(t).then(e)
                    })
                }
                saveToTVSettings(t) {
                    const e = window.locale;
                    let i = (0, X.getJSON)(this.settingsKey);
                    i || (i = {}), i[e] = t, (0, X.setJSON)(this.settingsKey, i)
                }
                destroy() {
                    this.$pagesContainer && (this.$pagesContainer.children().each((t, e) => {
                        this._stopPage(Oe(e))
                    }), this._destroyTabLabels && this._destroyTabLabels())
                }
                resetCaches() {
                    this.$pagesContainer && this.$pagesContainer.children().each((t, e) => {
                        const i = Oe(e);
                        this._getCachedWidgetPage(i) && this._cacheWidgetPage(i, this._createWidgetWatchlistPage(i))
                    })
                }
                _startPage(t) {
                    let e = this._getCachedWidgetPage(t);
                    if (e ? (this._deleteStopTimeout(t), e.start()) : (e = this._createWidgetWatchlistPage(t), this._cacheWidgetPage(t, e)), "function" == typeof this.settings.onActivePageLoaded) {
                        const t = this._activePageLoadedPromise = e.hasData().then(e => {
                            t === this._activePageLoadedPromise && this.settings.onActivePageLoaded && this.settings.onActivePageLoaded(e)
                        })
                    }
                }
                _getCachedWidgetPage(t) {
                    return t.data("watchlist-widget-page")
                }
                _initPages() {
                    const t = this.$el.find(".js-tabs").eq(0),
                        e = this.$el.find(".js-pages").eq(0),
                        i = 1 === e.children().length;
                    this.settings.fixedChartHeight && (this._normalizeSymbolListHeight(), setTimeout(() => this._adjustSymbolsListHeight(), 0)), i ? this._startPage(e.children().eq(0)) : (this._initTabs(t, e), !this.settings.fixedChartHeight && this.settings.adjust_widget_height && e.find(".js-chart").length && this._adjustChartHeight(e, this.settings.adjust_widget_height)), this.$pagesContainer = e
                }
                _getPagesArray(t) {
                    return t ? Array.prototype.slice.call(t.children) : []
                }
                _prepareSettings(t) {
                    let e;
                    const i = this.$el.data("widget-data");
                    if (i)
                        if (i.is_embed_widget) e = Object.assign({}, i, t);
                        else {
                            const s = this.userSettings;
                            (!1 === i.hotlists_select_enabled || i.override_user_exchange) && delete s.exchange, e = Object.assign({}, i, t, s)
                        }
                    else this.$el.data("widget-data", t), e = t;
                    return void 0 !== e.is_embed_widget && (e.isEmbedWidget = e.is_embed_widget), e.is_embed_widget = void 0, e
                }
                _initTabs(t, e) {
                    const s = this._getPagesArray(e.get(0));
                    (async function(t, e, s, r, n) {
                        return (await Promise.all([i.e(15500), i.e(91050), i.e(11233)]).then(i.bind(i, 363230))).createTabLabelsImp(t, e, s, r, n)
                    })(this.tabsLabels, t.get(0), s, this._onActivePageChanged.bind(this)).then(t => this._destroyTabLabels = t), this._startPage(Oe((0, Ft.ensureNotNull)(this._getActivePage(s))))
                }
                _adjustChartHeight(t, e) {
                    const i = t.children(),
                        s = document.querySelector(".js-quote-ticker"),
                        r = document.querySelector(".js-chart");
                    if (s && r) {
                        const t = s.offsetHeight,
                            n = r.offsetHeight;
                        for (let s = 0; s < i.length; s++) {
                            let r = e - i[s].querySelectorAll(".js-quote-ticker").length;
                            if (r === e && (r = 1), r < e) {
                                const e = i[s].querySelector(".js-chart");
                                (0, Ft.ensureNotNull)(e).style.height = n + t * r + "px"
                            }
                        }
                    }
                }
                _normalizeSymbolListHeight() {
                    const t = (0, Ft.ensureNotNull)(this.$el[0].firstElementChild),
                        e = t.querySelector(".js-pages");
                    if (!e) return;
                    let i = 0;
                    if (e) {
                        let s = 0;
                        for (let t = 0; t < e.children.length; t++) {
                            const r = e.children[t];
                            if (s = Math.max(r.querySelectorAll(".js-quote-ticker").length, s), !r.classList.contains("i-hidden")) {
                                const t = r.querySelector(".js-quote-ticker");
                                t && (i = t.offsetHeight)
                            }
                        }
                        const r = t.querySelectorAll(".js-symbols-wrapper");
                        for (let t = 0; t < r.length; t++) {
                            r[t].style.minHeight = i * s + "px"
                        }
                    }
                }
                _adjustSymbolsListHeight() {
                    const t = this.$el[0].firstElementChild,
                        e = getComputedStyle(t),
                        i = t.offsetHeight - parseInt(e.paddingTop) - parseInt(e.paddingBottom),
                        s = t.querySelector(".js-widget-head");
                    let r = 0;
                    if (s) {
                        const t = getComputedStyle(s);
                        r = s.offsetHeight + parseInt(t.marginTop) + parseInt(t.marginBottom)
                    }
                    const n = t.querySelector(".js-pages");
                    if (!n) return;
                    let o = 0,
                        a = 0,
                        l = 0;
                    for (let t = 0; t < n.children.length; t++) {
                        const e = n.children[t];
                        if (!e.classList.contains("i-hidden")) {
                            const t = e.querySelector(".js-chart");
                            t && (o = t.offsetHeight);
                            const i = e.querySelector(".js-timeframes");
                            if (i) {
                                const t = getComputedStyle(i);
                                a = i.offsetHeight + parseInt(t.marginTop) + parseInt(t.marginBottom)
                            }
                            const s = e.querySelector(".js-quick-link-wrapper");
                            s && (l = s.offsetHeight);
                            break
                        }
                    }
                    const h = i - r - (o + a + l),
                        c = n.querySelectorAll(".js-symbols-wrapper");
                    for (let t = 0; t < c.length; t++) {
                        c[t].style.minHeight = h + "px"
                    }
                }
                _createWidgetWatchlistPage(t) {
                    return new He(t, {
                        chartColorMap: (0, Ht.pickFields)(this.settings, Ue),
                        dateRange: this.settings.dateRange || Be.timeFrames["12m"].value.value,
                        dateRangeOptions: this.settings.dateRangeOptions,
                        disableLastFallingFlash: this.settings.disableLastFallingFlash,
                        disableLastGrowingFlash: this.settings.disableLastGrowingFlash,
                        hideAbsoluteChange: this.settings.hideAbsoluteChange,
                        indexNameBold: this.settings.indexNameBold,
                        indexNonClickable: this.settings.indexNonClickable,
                        isEmbedWidget: this.settings.isEmbedWidget,
                        largeChartUrl: this.settings.largeChartUrl,
                        noLinks: this.settings.noLinks,
                        onlyDescription: this.settings.onlyDescription,
                        paintLastWithChangeColors: this.settings.paintLastWithChangeColors,
                        showDataMode: this.settings.showDataMode,
                        showMarketStatus: this.settings.showMarketStatus,
                        showTitles: this.settings.showTitles,
                        tradingviewBaseUrl: this.settings.tradingviewBaseUrl,
                        utmInfo: this.settings.utmInfo,
                        valueBold: this.settings.valueBold,
                        valueTitleMarked: this.settings.valueTitleMarked,
                        widgetColorClassMap: this.widgetColorClassMap,
                        widgetName: this.widgetName,
                        showSymbolLogo: this.settings.showSymbolLogo,
                        locale: this.settings.locale,
                        showFloatingTooltip: this.settings.showFloatingTooltip,
                        colorTheme: this.settings.colorTheme
                    })
                }
                _stopPage(t, e) {
                    const i = this._getCachedWidgetPage(t);
                    i && (e ? this._setStopTimeout(t) : i.stop())
                }
                _onActivePageChanged(t, e) {
                    e.forEach((e, i) => {
                        t === i ? this._startPage(Oe(e)) : this._stopPage(Oe(e))
                    })
                }
                _getActivePage(t) {
                    for (const e of t)
                        if (!e.classList.contains("i-hidden")) return e;
                    return null
                }
                _cacheWidgetPage(t, e) {
                    t.data("watchlist-widget-page", e)
                }
                _setStopTimeout(t) {
                    this._stopPageTimeouts[t.index()] = setTimeout(this._stopPage.bind(this, t))
                }
                _deleteStopTimeout(t) {
                    const e = this._stopPageTimeouts[t.index()];
                    e && (clearTimeout(e), delete this._stopPageTimeouts[t.index()])
                }
            }
            class He {
                constructor(t, e) {
                    if (this._symbols = [], this._chart = null, this._symbol = null, this._started = !1, this._hasDataPromise = null, this._scroll = null, t && t.length || (We.logError("`$el` is required"), (0, Ft.assert)(Boolean(t && t.length), "`$el` is required")), this.$el = t, this.$chart = t.find(".js-chart").eq(0), this.hasChart = !!this.$chart.length, this.settings = this.transferSettings(e), this.showDataMode = !(!1 === this.settings.showDataMode), this.showMarketStatus = !(!1 === this.settings.showMarketStatus), this.chartColorMap = this.settings.chartColorMap, this.widgetColorClassMap = this.settings.widgetColorClassMap, "hotlists" === this.settings.widgetName || this.settings.isEmbedWidget) {
                        this._symbols = this.$el.data("symbols");
                        this.$el.find(".js-symbols-wrapper").find(".js-symbols-body").append(this._renderPage())
                    }
                    this.settings.isEmbedWidget && this._adjustToAvailableSizes(), this.start()
                }
                transferSettings(t) {
                    const e = t.utmInfo ? Oe.param(t.utmInfo) : void 0;
                    let i;
                    if (t.largeChartUrl) {
                        i = t.largeChartUrl;
                        i.match(/^https?:\/\//) || (i = "http://" + i)
                    }
                    return {
                        chartColorMap: Object.assign({}, this.defaultChartColors, t.chartColorMap),
                        customer: t.customer,
                        dateRange: t.dateRange,
                        dateRangeOptions: t.dateRangeOptions,
                        disableLastFallingFlash: Boolean(t.disableLastFallingFlash),
                        disableLastGrowingFlash: Boolean(t.disableLastGrowingFlash),
                        hideAbsoluteChange: Boolean(t.hideAbsoluteChange),
                        indexNameBold: t.indexNameBold,
                        indexNonClickable: t.indexNonClickable,
                        isEmbedWidget: t.isEmbedWidget,
                        largeChartUrl: i,
                        noLinks: t.noLinks,
                        onlyDescription: t.onlyDescription,
                        paintLastWithChangeColors: Boolean(t.paintLastWithChangeColors),
                        showDataMode: t.showDataMode,
                        showMarketStatus: t.showMarketStatus,
                        showTitles: t.showTitles,
                        tradingviewBaseUrl: t.tradingviewBaseUrl,
                        utmStringified: e,
                        valueBold: t.valueBold,
                        valueTitleMarked: t.valueTitleMarked,
                        widgetColorClassMap: Object.assign({}, t.widgetColorClassMap),
                        widgetName: t.widgetName,
                        showSymbolLogo: t.showSymbolLogo,
                        locale: t.locale,
                        showFloatingTooltip: t.showFloatingTooltip,
                        colorTheme: t.colorTheme
                    }
                }
                get $symbols() {
                    return this.$el.find(".js-quote-ticker")
                }
                set symbols(t) {
                    let e, i;
                    const s = this._symbols.map(t => t.s),
                        r = t.map(t => t.s),
                        n = (t, i) => Oe(i).data("symbol") === e;
                    if (s && s.toString() !== r.toString()) {
                        const o = {},
                            a = [],
                            l = [];
                        for (let t = 0; t < s.length; t++) {
                            e = s[t];
                            const l = r.indexOf(e),
                                h = t,
                                c = this.$symbols.filter(n);
                            l !== h && a.push(e), -1 === l ? (this._stopSymbolRow(c), this._symbol === e && (i = r[h])) : o[e] = c.detach()
                        }
                        const h = this.$el.find(".js-symbols-wrapper").find(".js-symbols-body");
                        h.empty(), this.settings.showTitles && h.append(this._renderTitle()), r.forEach(t => {
                            t in o ? h.append(o[t]) : (a.push(t), l.push(t), this._renderSymbol({
                                s: t
                            })), i && i === t && (this.symbol = i)
                        }), this._symbols = t, this.$symbols.each((t, e) => {
                            const i = Oe(e),
                                s = i.data("symbol"); - 1 !== a.indexOf(s) && (i.addClass("tv-site-table__row--updated"), setTimeout(() => i.removeClass("tv-site-table__row--updated"), 2 * Ot.dur)), -1 !== l.indexOf(s) && this._startSymbolRow(i)
                        })
                    }
                }
                get defaultChartColors() {
                    return {
                        gridLineColor: (0, Vt.generateColor)(Bt.colorsPalette["color-widget-border"], 100),
                        scaleFontColor: (0, Vt.generateColor)(Bt.colorsPalette["color-text-secondary"]),
                        plotLineColor: (0, Vt.generateColor)(Bt.colorsPalette["color-brand"]),
                        plotLineColorGrowing: void 0,
                        plotLineColorFalling: void 0,
                        belowLineFillColorGrowing: (0, Vt.generateColor)(Bt.colorsPalette["color-tv-blue-500"], 82),
                        belowLineFillColorFalling: (0, Vt.generateColor)(Bt.colorsPalette["color-tv-blue-500"], 82),
                        belowLineFillColorGrowingBottom: (0, Vt.generateColor)(Bt.colorsPalette["color-tv-blue-500"], 100),
                        belowLineFillColorFallingBottom: (0, Vt.generateColor)(Bt.colorsPalette["color-tv-blue-500"], 100),
                        lastPriceLineColor: (0, Vt.generateColor)(Bt.colorsPalette["color-brand"], 50),
                        lastPriceLineColorGrowing: void 0,
                        lastPriceLineColorFalling: void 0
                    }
                }
                get pageTemplates() {
                    return {
                        page: "\n\t\t\t\t{{#showTitles}}\n\t\t\t\t\t{{>title}}\n\t\t\t\t{{/showTitles}}\n\t\t\t\t{{#symbols}}\n\t\t\t\t\t{{>symbol}}\n\t\t\t\t{{/symbols}}",
                        symbol: `\n\t\t\t\t<div class="tv-widget-watch-list__row js-quote-ticker tv-site-table__row {{#showChart}} tv-site-table__row--interactive tv-widget-watch-list__row--interactive{{/showChart}}{{#updated}} tv-site-table__row--updated{{/updated}}" data-symbol="{{ s }}" data-description="{{ description }}">\n\t\t\t\t\t<div class="tv-site-table__column tv-widget-watch-list__main-column{{#symbolColumnClass}} {{symbolColumnClass}}{{/symbolColumnClass}}">\n\t\t\t\t\t\t<div class="tv-widget-watch-list__icon js-symbol-logo">\n\t\t\t\t\t\t\t${this.settings.showSymbolLogo&&(0,qt.getCircleLogoAnyHtml)({logoUrls:[],size:"medium"
})}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="tv-widget-watch-list__name">\n\t\t\t\t\t\t\t<div class="tv-widget-watch-list__ticker">\n\t\t\t\t\t\t\t\t{{^noLinks}}\n\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\thref="{{^largeChartUrl}}{{ symbolUrl }}{{/largeChartUrl}}{{#largeChartUrl}}{{ largeChartUrl }}{{/largeChartUrl}}"\n\t\t\t\t\t\t\t\t\t\t{{#isEmbedWidget}}target="_blank"{{/isEmbedWidget}}\n\t\t\t\t\t\t\t\t{{/noLinks}}\n\t\t\t\t\t\t\t\t{{#noLinks}}\n\t\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\t{{/noLinks}}\n\t\t\t\t\t\t\t\t\t\tdata-symbol="{{ s }}"\n\t\t\t\t\t\t\t\t\t\tclass="\n\t\t\t\t\t\t\t\t\t\t\ttv-widget-watch-list__short-name\n\t\t\t\t\t\t\t\t\t\t\tapply-overflow-tooltip\n\t\t\t\t\t\t\t\t\t\t\tjs-symbol-link\n\t\t\t\t\t\t\t\t\t\t\t{{#indexNameBold}}tv-widget-watch-list__short-name--bold{{/indexNameBold}}\n\t\t\t\t\t\t\t\t\t\t\t{{#noLinks}}tv-widget-watch-list__short-name--not-clickable{{/noLinks}}\n\t\t\t\t\t\t\t\t\t\t\t{{#onlyDescription}}\n\t\t\t\t\t\t\t\t\t\t\t\ttv-widget-watch-list__short-name--whole-height\n\t\t\t\t\t\t\t\t\t\t\t\t{{^description}}js-symbol-description-name{{/description}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#descriptionClass}}{{descriptionClass}}{{/descriptionClass}}\n\t\t\t\t\t\t\t\t\t\t\t{{/onlyDescription}}\n\t\t\t\t\t\t\t\t\t\t\t{{^onlyDescription}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#shortNameClass}}{{shortNameClass}}{{/shortNameClass}}\n\t\t\t\t\t\t\t\t\t\t\t{{/onlyDescription}}\n\t\t\t\t\t\t\t\t\t\t"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t{{^onlyDescription}}{{ shortName }}{{/onlyDescription}}\n\t\t\t\t\t\t\t\t\t\t{{#onlyDescription}}\n\t\t\t\t\t\t\t\t\t\t\t{{#description}}{{ description }}{{/description}}\n\t\t\t\t\t\t\t\t\t\t{{/onlyDescription}}\n\t\t\t\t\t\t\t\t{{^noLinks}}\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t{{/noLinks}}\n\t\t\t\t\t\t\t\t{{#noLinks}}\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t{{/noLinks}}\n\t\t\t\t\t\t\t\t{{#showDataMode}}\n\t\t\t\t\t\t\t\t\t<span class="tv-data-mode--watch-list js-data-mode"></span>\n\t\t\t\t\t\t\t\t{{/showDataMode}}\n\t\t\t\t\t\t\t\t{{#showMarketStatus}}\n\t\t\t\t\t\t\t\t\t<span class="tv-market-status--watch-list js-market-status"></span>\n\t\t\t\t\t\t\t\t{{/showMarketStatus}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{^onlyDescription}}\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<span class="tv-widget-watch-list__description{{^isEmbedWidget}} tv-widget-watch-list__description--uppercase{{/isEmbedWidget}} apply-overflow-tooltip{{^description}} js-symbol-description-name{{/description}}{{#descriptionClass}} {{descriptionClass}}{{/descriptionClass}}">\n\t\t\t\t\t\t\t\t\t{{#description}}{{ description }}{{/description}}{{^description}}&nbsp;{{/description}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t{{/onlyDescription}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tv-widget-watch-list__quote-column tv-site-table__column tv-site-table__column--align_right tv-site-table__column--last-phone-vertical{{#symbolColumnClass}} {{symbolColumnClass}}{{/symbolColumnClass}}">\n\t\t\t\t\t\t<div class="tv-widget-watch-list__last-wrap">\n\t\t\t\t\t\t\t<div class="tv-widget-watch-list__last{{#valueBold}} tv-widget-watch-list__last--bold{{/valueBold}}{{#lastClass}} {{lastClass}}{{/lastClass}}{{#lastDirection}} js-symbol-change-direction{{/lastDirection}} js-symbol-last apply-overflow-tooltip">\n\t\t\t\t\t\t\t\t{{#last}}{{ last }}{{/last}}{{^last}}&nbsp;{{/last}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="tv-widget-watch-list__change{{#hideAbsoluteChange}} tv-widget-watch-list__change--whole-height{{/hideAbsoluteChange}} apply-overflow-tooltip js-symbol-change-direction">\n\t\t\t\t\t\t\t<span class="tv-widget-watch-list__change-inline{{#hideAbsoluteChange}} tv-widget-watch-list__change-inline--whole-height{{/hideAbsoluteChange}} js-symbol-change-pt">\n\t\t\t\t\t\t\t\t{{#change_pt}}{{ change_pt }}{{/change_pt}}{{^change_pt}}&nbsp;{{/change_pt}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{^hideAbsoluteChange}}\n\t\t\t\t\t\t\t<span class="tv-widget-watch-list__change-inline js-symbol-change">\n\t\t\t\t\t\t\t\t{{#change}}{{ change }}{{/change}}{{^change}}&nbsp;{{/change}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{/hideAbsoluteChange}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>`,
                        title: '\n\t\t\t\t<div class="tv-site-table__row js-symbols-titles">\n\t\t\t\t\t<div class="tv-site-table__column tv-widget-watch-list__main-column tv-widget-watch-list__main-column--title">\n\t\t\t\t\t\t<div class="tv-widget-watch-list__name">\n\t\t\t\t\t\t\t<span class="tv-widget-watch-list__title tv-widget-watch-list__short-name--whole-height apply-overflow-tooltip">Index</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tv-widget-watch-list__quote-column tv-widget-watch-list__quote-column--title tv-site-table__column tv-site-table__column--align_right tv-site-table__column--last-phone-vertical">\n\t\t\t\t\t\t<div class="tv-widget-watch-list__last apply-overflow-tooltip tv-widget-watch-list__title">\n\t\t\t\t\t\t\tValue{{#valueTitleMarked}}*{{/valueTitleMarked}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="tv-widget-watch-list__change tv-widget-watch-list__title apply-overflow-tooltip">\n\t\t\t\t\t\t\t<span class="tv-widget-watch-list__change-inline">Change</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>'
                    }
                }
                set symbol(t) {
                    if (this._symbol = t, this._chart && this._chart.changeSymbol(t, this._getSeriesOptions()), this.hasChart) {
                        const e = Nt()("tv-site-table__row--highlighted tv-widget-watch-list__row--highlighted", this.widgetColorClassMap.symbolActiveColor);
                        this.$symbols.removeClass(e).filter((e, i) => Oe(i).data("symbol") === t).addClass(e)
                    } else this.$symbols.filter((e, i) => Oe(i).data("symbol") === t)
                }
                get symbol() {
                    return this._symbol || ""
                }
                start() {
                    this._started || (this.symbol || (this.symbol = this.$symbols.eq(0).data("symbol")), this.hasChart && (this._bindSymbolClick(), this._startChart()), this._startSymbolRows(), this._started = !0)
                }
                stop() {
                    this._started && (this._unbindSymbolClick(), this._stopChart(), this._stopSymbolRows(), this._started = !1)
                }
                hasData() {
                    if (null === this._hasDataPromise) {
                        const t = [];
                        this.$symbols.each((e, i) => {
                            const s = Oe(i).data("watchlist-widget__symbol-row");
                            t.push(s.hasData())
                        }), this._hasDataPromise = Promise.all(t).then(t => t.some(t => t))
                    }
                    return this._hasDataPromise
                }
                _bindSymbolClick() {
                    this.$el.on("click", ".js-quote-ticker", t => {
                        this.symbol = Oe(t.currentTarget).data("symbol")
                    })
                }
                _unbindSymbolClick() {
                    this.$el.off("click", ".js-quote-ticker")
                }
                _adjustToAvailableSizes() {
                    const t = window.innerHeight - (0, Ft.ensureNotNull)(document.querySelector(".js-watchlist-widget")).offsetHeight,
                        e = this.$el.find(".js-symbols-wrapper"),
                        i = e.get(0).offsetHeight;
                    if (t < 0) {
                        e.css("height", i + t + "px").addClass("sb-scrollbar__content-wrapper--scroll-inited");
                        const s = e.find(".js-symbols-body");
                        s.addClass("sb-scrollbar__content--scroll-inited"), this._scroll || (this._scroll = new x.SidebarCustomScroll(e[0], s[0], {
                            vAlignBottom: !0,
                            showBottomShadow: !1
                        }))
                    } else this.hasChart && (this.$chart[0].style.height = this.$chart.height() + t + "px")
                }
                _getSymbolDataToRender(t) {
                    const [e, i] = t.s.split(":"), s = t.t || i, r = this.settings.largeChartUrl && (0, Et.makeTemplateSymbolUrl)(this.settings.largeChartUrl, {
                        shortName: i,
                        exchange: e
                    }) || "", n = (0, Et.makeSymbolPageUrl)({
                        shortName: i,
                        exchange: e
                    }, this.settings.utmInfo), o = t.d;
                    return {
                        s: t.s,
                        description: o,
                        exchange: e,
                        shortName: s,
                        symbolUrl: n,
                        showChart: this.hasChart,
                        onlyDescription: this.settings.onlyDescription,
                        isEmbedWidget: this.settings.isEmbedWidget,
                        utmStringified: this.settings.utmStringified,
                        largeChartUrl: r,
                        tradingviewBaseUrl: this.settings.tradingviewBaseUrl,
                        showDataMode: this.showDataMode && je(t.s),
                        showMarketStatus: this.showMarketStatus && je(t.s),
                        indexNameBold: this.settings.indexNameBold,
                        valueBold: this.settings.valueBold,
                        shortNameClass: this.widgetColorClassMap.symbolShortNameColor,
                        descriptionClass: this.widgetColorClassMap.symbolDescriptionColor,
                        symbolColumnClass: this.widgetColorClassMap.symbolSeparatorColor,
                        lastClass: this.widgetColorClassMap.lastColor,
                        lastDirection: this.settings.paintLastWithChangeColors,
                        hideAbsoluteChange: this.settings.hideAbsoluteChange,
                        noLinks: this.settings.noLinks
                    }
                }
                _renderSymbol(t) {
                    return qe.render(this.pageTemplates.symbol, this._getSymbolDataToRender(t))
                }
                _renderPage() {
                    const t = [];
                    return this._symbols.forEach(e => t.push(this._getSymbolDataToRender(e))), qe.render(this.pageTemplates.page, {
                        symbols: t,
                        showTitles: this.settings.showTitles,
                        showDataMode: this.showDataMode,
                        showMarketStatus: this.showMarketStatus,
                        valueTitleMarked: this.settings.valueTitleMarked
                    }, this.pageTemplates)
                }
                _renderTitle() {
                    return qe.render(this.pageTemplates.title, {
                        valueTitleMarked: this.settings.valueTitleMarked
                    })
                }
                _startChart() {
                    if (this._chart) return void this._chart.enable();
                    if (!this.symbol) return;
                    const t = this.settings.showFloatingTooltip,
                        e = this._getSeriesOptions();
                    let i;
                    if (t) {
                        e.crosshairMarkerVisible = !0, e.crosshairMarkerBorderColor = "dark" === this.settings.colorTheme ? Bt.colorsPalette["color-cold-gray-850"] : Bt.colorsPalette["color-white"];
                        const t = "dark" === this.settings.colorTheme ? Bt.colorsPalette["color-cold-gray-750"] : Bt.colorsPalette["color-cold-gray-200"];
                        i = {
                            vertLine: {
                                visible: !0,
                                style: jt.LineStyle.Solid,
                                width: 1,
                                color: t
                            },
                            mode: jt.CrosshairMode.Magnet
                        }
                    }
                    this._chart = new Te(this.symbol, this.$chart.get(0), {
                        timeframe: {
                            visible: !0,
                            container: (0, Ft.ensureDefined)(this.$el.find(".js-timeframes").get(0)),
                            value: this.settings.dateRange,
                            options: this.settings.dateRangeOptions
                        },
                        valuesTracking: t ? "1" : "0",
                        chartOptions: {
                            minWidth: this.$chart.width(),
                            minHeight: this.$chart.height(),
                            chart: {
                                grid: {
                                    horzLines: {
                                        visible: !0,
                                        color: this.chartColorMap.gridLineColor,
                                        style: jt.LineStyle.Dotted
                                    }
                                },
                                crosshair: i,
                                layout: {
                                    textColor: this.chartColorMap.scaleFontColor,
                                    fontSize: 12
                                },
                                localization: {
                                    locale: (0, Re.getIsoLanguageCodeFromLanguage)(this.settings.locale)
                                },
                                rightPriceScale: {
                                    visible: !1
                                }
                            },
                            series: e,
                            loading: {
                                noSpinner: !1
                            }
                        }
                    })
                }
                _stopChart() {
                    this._chart && this._chart.disable()
                }
                _getSeriesOptions() {
                    const t = {
                        chartType: "area",
                        lineColor: this.chartColorMap.plotLineColor,
                        growingLineColor: this.chartColorMap.plotLineColorGrowing,
                        fallingLineColor: this.chartColorMap.plotLineColorFalling,
                        lineWidth: 2,
                        growingTopColor: this.chartColorMap.belowLineFillColorGrowing,
                        fallingTopColor: this.chartColorMap.belowLineFillColorFalling,
                        growingBottomColor: this.chartColorMap.belowLineFillColorGrowingBottom,
                        fallingBottomColor: this.chartColorMap.belowLineFillColorFallingBottom,
                        crosshairMarkerVisible: this.settings.showFloatingTooltip,
                        crosshairMarkerBorderColor: "dark" === this.settings.colorTheme ? Bt.colorsPalette["color-cold-gray-850"] : Bt.colorsPalette["color-white"],
                        scaleMargins: {
                            top: .01,
                            bottom: .05
                        }
                    };
                    return (0, $t.deepExtend)(t, function(t) {
                        const e = {
                                "COVID19:CONFIRMED": Bt.colorsPalette["color-covid19-confirmed"],
                                "COVID19:RECOVERED": Bt.colorsPalette["color-covid19-recovered"],
                                "COVID19:DEATHS": Bt.colorsPalette["color-covid19-deaths"],
                                "US:TRUMP": Bt.colorsPalette["color-ripe-red-500"],
                                "US:BIDEN": Bt.colorsPalette["color-tv-blue-500"]
                            },
                            i = Object.keys(e).find(e => t.startsWith(e)),
                            s = i && e[i];
                        if (!s) return {};
                        return {
                            lineColor: s,
                            growingLineColor: void 0,
                            fallingLineColor: void 0,
                            topColor: (0, Vt.generateColor)(s, 88),
                            growingTopColor: void 0,
                            fallingTopColor: void 0,
                            bottomColor: (0, Vt.generateColor)(s, 0),
                            growingBottomColor: void 0,
                            fallingBottomColor: void 0
                        }
                    }(this.symbol)), t
                }
                _startSymbolRows() {
                    this.$symbols.each((t, e) => {
                        this._startSymbolRow(Oe(e))
                    })
                }
                _startSymbolRow(t) {
                    const e = t.data("watchlist-widget__symbol-row");
                    e ? e.start() : t.data("watchlist-widget__symbol-row", new $e(t, {
                        tradingviewBaseUrl: this.settings.tradingviewBaseUrl,
                        largeChartUrl: this.settings.largeChartUrl,
                        isEmbedWidget: this.settings.isEmbedWidget,
                        directionUpClass: this.widgetColorClassMap.changeUpColor,
                        directionDownClass: this.widgetColorClassMap.changeDownColor,
                        directionNeutralClass: this.widgetColorClassMap.changeNeutralColor,
                        lastGrowingClass: this.settings.disableLastGrowingFlash ? null : this.widgetColorClassMap.lastGrowingFlashColor,
                        lastFallingClass: this.settings.disableLastFallingFlash ? null : this.widgetColorClassMap.lastFallingFlashColor,
                        noLinks: this.settings.noLinks,
                        showSymbolLogo: this.settings.showSymbolLogo
                    }))
                }
                _stopSymbolRows() {
                    this.$symbols.each((t, e) => {
                        this._stopSymbolRow(Oe(e))
                    })
                }
                _stopSymbolRow(t) {
                    const e = t.data("watchlist-widget__symbol-row");
                    e && e.stop()
                }
            }
            class $e {
                constructor(t, e) {
                    this._hasData = new(ee()), this._setSymbolLinkCompleted = !1, t && t.length || (We.logError("`$el` is required"), (0, Ft.assert)(Boolean(t && t.length), "`$el` is required")), this.$el = t, this.symbol = t.data("symbol"), this.description = t.data("description"), this.start(), this._largeChartUrl = e.largeChartUrl || "", this._utmInfo = e.utmInfo || {}, this._isEmbedWidget = !!e.isEmbedWidget, this._noLinks = e.noLinks, this._showSymbolLogo = e.showSymbolLogo;
                    const i = (0, Ht.pickFields)(e, ["directionUpClass", "directionDownClass", "directionNeutralClass", "lastGrowingClass", "lastFallingClass"]);
                    this._isEmbedWidget || (0, $t.deepExtend)(i, function(t) {
                        if (!(0, Fe.isCovid19Symbol)({
                                proName: t
                            })) return {};
                        return {
                            directionUpClass: null,
                            directionDownClass: null,
                            directionNeutralClass: null
                        }
                    }(this.symbol)), this._directionUpClass = i.directionUpClass, this._directionDownClass = i.directionDownClass, this._directionNeutralClass = i.directionNeutralClass, this._lastGrowingClass = i.lastGrowingClass, this._lastFallingClass = i.lastFallingClass, this._setSymbolLogo = (0, Wt.getLogoUrlsHook)(t => {
                        const e = this.symbol.split(":")[1],
                            i = (this.description || e || "")[0];
                        (0, Ft.ensureNotNull)(this.$el[0].querySelector(".js-symbol-logo")).innerHTML = (0, qt.getCircleLogoAnyHtml)({
                            logoUrls: t,
                            size: "medium",
                            placeholderLetter: i
                        })
                    })
                }
                start() {
                    this._startQuoteTicker().then(() => {
                        this._startMarketStatus()
                    }).catch(t => We.logError(`${t.exchange} ${t.reason}`))
                }
                stop() {
                    this._stopQuoteTicker(), this._stopMarketStatus()
                }
                hasData() {
                    return void 0 === this._hasData.value() ? new Promise(t => {
                        this._hasData.subscribe(t, {
                            once: !0
                        })
                    }) : Promise.resolve(this._hasData.value())
                }
                _startMarketStatus() {
                    if (this.$el.find(".js-market-status")[0]) {
                        const t = new Ie.MarketStatusIndicator({
                            classSuffix: "--for-watch-list",
                            el: this.$el.find(".js-market-status")[0],
                            short: !0,
                            symbol: this.symbol
                        });
                        t.start(), this.$el.data("market-status", t)
                    }
                    const t = this.$el.find(".js-data-mode")[0];
                    if (t) {
                        const e = new Ne.DataModeIndicator({
                            classSuffix: "--for-watch-list",
                            el: t,
                            short: !0,
                            symbol: this.symbol
                        });
                        e.start(), this.$el.data("data-mode", e)
                    }
                }
                _stopMarketStatus() {
                    const t = this.$el.data("market-status"),
                        e = this.$el.data("data-mode");
                    t && t.stop(), e && e.stop()
                }
                _showSFWarning() {
                    const t = this.$el.get(0);
                    if (t.getElementsByClassName("js-exclamationed-symbol").length) return;
                    const e = document.createElement("span");
                    e.classList.add("tv-widget-watch-list__symbol-exclamation-mark", "js-exclamationed-symbol", "apply-common-tooltip"), e.setAttribute("title", (0, Ut.getSFWarningTextForFreeUsers)());
                    const i = t.getElementsByClassName("js-symbol-link").item(0);
                    i && (i.appendChild(e), window.loginStateChange.subscribe(null, () => {
                        if (window.is_authenticated) {
                            const e = t.getElementsByClassName("js-exclamationed-symbol");
                            for (; e.length > 0;)(0, Ft.ensureNotNull)(e[0].parentNode).removeChild(e[0])
                        }
                    }))
                }
                _startQuoteTicker() {
                    let t = this.$el.data("quote-ticker");
                    if (t) return t.enable(), Promise.resolve(t);
                    const e = this._showSFWarning.bind(this),
                        i = (t, e, i) => {
                            this._setSymbolLinkCompleted || this._noLinks || this._setSymbolLink(t), this._showSymbolLogo && this._setSymbolLogo(t, e, i)
                        };
                    return new Promise((s, r) => {
                        (0, zt.check)(this.symbol, !1).then(r => {
                            const n = {
                                dontDyePrice: !0,
                                addDescriptionTitle: !1,
                                signPositive: !0,
                                changePercentInBrackets: !1,
                                setStateHook: i,
                                changeDirectionUpClass: this._directionUpClass || void 0,
                                changeDirectionDownClass: this._directionDownClass || void 0,
                                changeDirectionNeutralClass: this._directionNeutralClass || void 0,
                                lastGrowingClass: this._lastGrowingClass || void 0,
                                lastFallingClass: this._lastFallingClass || void 0,
                                initedHook: () => {
                                    this._hasData.setValue(!0)
                                },
                                noSuchSymbolHook: () => {
                                    this._hasData.setValue(!1)
                                },
                                sfPermissionDeniedHook: () => {
                                    this._hasData.setValue(!1), e()
                                }
                            };
                            t = new De.QuoteTicker(r, this.$el.get(0), n), this.$el.data("quote-ticker", t), s(t)
                        }).catch(t => {
                            this._hasData.setValue(!1), e(), r(t)
                        })
                    })
                }
                _setSymbolLink(t) {
                    const e = t.short_name,
                        i = t.exchange,
                        s = t.pro_name,
                        r = t.type;
                    if (!(e && i && s && r)) return;
                    const n = this.$el[0].getElementsByClassName("js-symbol-link")[0],
                        o = this._largeChartUrl && this._isEmbedWidget,
                        a = {
                            shortName: e,
                            exchange: i,
                            proName: s,
                            type: r
                        };
                    n.href = o ? (0, Et.makeTemplateSymbolUrl)(this._largeChartUrl, a) : (0, Et.makeSymbolPageUrl)(a, this._utmInfo), this._setSymbolLinkCompleted = !0
                }
                _stopQuoteTicker() {
                    const t = this.$el.data("quote-ticker");
                    t && t.disable()
                }
            }

            function je(t) {
                return !(0, Fe.isCovid19Symbol)({
                    proName: t
                }) && ! function({
                    proName: t
                }) {
                    return "US:TRUMP" === t || "US:BIDEN" === t
                }({
                    proName: t
                })
            }
            var Ye = i(904742),
                Ge = i(918184),
                Xe = i(500466);
            const Je = (0, Jt.getLogger)("HotLists.Widget"),
                Qe = new Ye.HotlistsManager,
                Ze = {
                    volume_gainers: {
                        title: (0, at.t)("More active stocks"),
                        href: "market-movers-active"
                    },
                    percent_change_gainers: {
                        title: (0, at.t)("More gainers"),
                        href: "market-movers-gainers"
                    },
                    percent_change_loosers: {
                        title: (0, at.t)("More losers"),
                        href: "market-movers-losers"
                    }
                };
            class Ke extends Ve {
                constructor(t, e = {}) {
                    super(t, e), this.updateInterval = 6e4, this.updateIntervalId = null, this.listLimit = this.settings.symbol_limit || 5, this.settings.isEmbedWidget || this.initHotlistsDropdown(), this.updateInterval = 6e4, this.tabsLabels = this.settings.tabs.map(t => this.groupsTitlesMap[t.group] || (0, at.t)(t.title_raw))
                }
                get widgetName() {
                    return "hotlists"
                }
                get settingsKey() {
                    return "watchlist__hot.properties"
                }
                get userSettings() {
                    const t = (0, X.getJSON)(this.settingsKey);
                    let e;
                    return t && t[window.locale] && (e = t[window.locale]), e ? {
                        exchange: e
                    } : {}
                }
                get groupsTitlesMap() {
                    return {
                        volume_gainers: (0, at.t)("Active"),
                        percent_change_gainers: (0, at.t)("Gainers"),
                        percent_change_loosers: (0, at.t)("Losers")
                    }
                }
                renderContent() {
                    if (this.settings.isEmbedWidget) {
                        if ((0, Dt.getEmbedDeprecatedExchanges)(this.settings.customer).includes(this.settings.exchange)) return this.stopRenderWithMessage((0, at.t)("This exchange is not available for widget")), Promise.reject()
                    }
                    Qe.isExchangeDistributed(this.settings.exchange) || (this.settings.exchange = Ye.hotlistsDefaults.exchange, Je.logWarn(`${this.settings.exchange} is not available, default exchange was used: ${Ye.hotlistsDefaults.exchange}`));
                    const t = this.$el.find(".js-widget-title-link")[0];
                    t && (t.href = Qe.getStockMarketUrl(this.settings.exchange, "market-movers-large-cap")), this._updateTabQuickLinks();
                    const e = [],
                        i = this.groupsTitlesMap;
                    return this.settings.tabs.forEach(t => {
                        t.title = i[t.group] || (0, at.t)(t.title_raw);
                        let s = this._getTabEl(t.group);
                        const r = s.find(".js-symbols-wrapper").css("min-height");
                        if (!s.length) {
                            const e = Ge(Xe.render(this.templates.tabContentSkin, {
                                group: t.group,
                                firstTab: t === this.settings.tabs[0],
                                hotlistsSelectEnabled: this.settings.hotlists_select_enabled
                            }));
                            this.$el.find(".js-pages").append(e), s = this._getTabEl(t.group)
                        }
                        const n = Ge(Xe.render(this.templates.tabContent, {
                            showChart: this.settings.show_chart,
                            isEmbedWidget: this.settings.isEmbedWidget,
                            group: t.group,
                            firstTab: t === this.settings.tabs[0],
                            hotlistsSelectEnabled: this.settings.hotlists_select_enabled,
                            quickLink: t.quick_link,
                            forceEndBorder: this.settings.force_end_border,
                            minTableHeight: "0px" !== r && r,
                            showFloatingTooltip: this.settings.showFloatingTooltip
                        }));
                        s.html(n.html()), this._getCachedWidgetPage(s) && e.push(this._setSymbolsToPageData(t.group, s))
                    }), new Promise(t => {
                        Promise.all(e).then(t)
                    })
                }
                stopRenderWithMessage(t) {
                    if (this.$el.find(".js-widget-head").addClass("i-align_center").text(t).end().css("height", "auto"), this.$el.find(".js-widget-body").remove(), window.frameElement) {
                        const t = document.querySelector(".js-embed-widget-head"),
                            e = document.querySelector(".js-embed-widget-body"),
                            i = t ? t.offsetHeight : 0,
                            s = e ? e.offsetHeight : this.$el.outerHeight(),
                            r = window.frameElement;
                        r.height = (i + s + parseInt(r.style.paddingBottom)).toString(), r.parentElement && (r.parentElement.style.height = "auto")
                    }
                }
                initHotlistsDropdown() {
                    const t = [];
                    let e = 0;
                    Qe.availableExchanges.forEach(e => {
                        t.push({
                            key: e,
                            title: Qe.getExchangeFullName(e),
                            flagId: Qe.getExchangeFlag(e),
                            flagTitle: e
                        })
                    }), t.some((t, i) => t.key === this.settings.exchange && (e = i, !0)), this.addExchangeSelect(t, e)
                }
                addExchangeSelect(t, e) {
                    const i = {
                            options: t,
                            initialSelected: e,
                            onSelect: this.onExchangeChange.bind(this),
                            disabled: !this.settings.hotlists_select_enabled,
                            maxHeight: 535,
                            maxColumns: 3,
                            itemWidth: 230,
                            itemHeight: 38,
                            horizontalAttachment: "top",
                            flagSize: "block-title"
                        },
                        s = Tt.createElement(Lt.DropdownWithFlag, i),
                        r = document.createElement("span");
                    r.classList.add("tv-feed-widget__title-inline-select-wrapper"), this.$el.find(".js-hotlists-dropdown").prepend(r), At.render(s, r)
                }
                onExchangeChange(t) {
                    const e = t.key;
                    this.destroy(), this.settings.exchange = e, null !== this.updateIntervalId && (clearInterval(this.updateIntervalId), this.updateIntervalId = null), this.renderContent().then(() => {
                        this.resetCaches(), this._initPages(), this.setAutoUpdate()
                    }), this.saveToTVSettings(e)
                }
                setAutoUpdate() {
                    const t = this.$el.find(".js-pages").eq(0),
                        e = this._getPagesArray(t.get(0));
                    this.updateIntervalId = setInterval(() => {
                        e.forEach(t => {
                            const e = Ge(t),
                                i = this._getCachedWidgetPage(e);
                            i && this._setSymbolsToPageData(e.data("tab-group"), e).then(t => {
                                i.symbols = t
                            })
                        })
                    }, this.updateInterval)
                }
                _startPage(t) {
                    if (t.find(".js-symbols-wrapper").css("min-height", 60 * this.listLimit + "px"), t.data("symbols")) super._startPage(t);
                    else {
                        const e = t.data("tabGroup");
                        this._setSymbolsToPageData(e, t).then(() => {
                            super._startPage(t)
                        })
                    }
                }
                _getTabEl(t) {
                    return this.$el.find(".js-pages").find(`[data-tab-group="${t}"]`)
                }
                _setSymbolsToPageData(t, e) {
                    return new Promise(i => {
                        Qe.getOneHotlist(this.settings.exchange, t, this.listLimit).then(s => {
                            (e = e || this._getTabEl(t)).data("symbols", s.map(t => Object({
                                s: t.s
                            }))), i(s)
                        })
                    })
                }
                _updateTabQuickLinks() {
                    this.settings.tabs.forEach(t => {
                        const e = t.group;
                        t.quick_link || (t.quick_link = {
                            title: Ze[e].title
                        }), t.quick_link.href = Qe.getStockMarketUrl(this.settings.exchange, Ze[e].href)
                    })
                }
            }
            class ti extends A {
                static get type() {
                    return "watchlist--hot"
                }
                async _loadContentWidget() {
                    return Promise.resolve(new Ke(this._el, {
                        fixedChartHeight: !0,
                        symbol_limit: 6,
                        showSymbolLogo: !0,
                        locale: window.locale
                    }))
                }
                _afterWidgetLoad() {
                    const t = this._initData;
                    null !== this._analytics && (this._analytics.gaBindClick(".js-widget-tab", t.id, "tab: ", "content"), this._analytics.gaBindClick(".js-inline-chart-link", t.id, "inline-chart: ", "symbol"), this._analytics.gaBindClick(".js-symbol-link", t.id, "symbol-link: ", "symbol"), this._analytics.gaBindClick(".js-widget-dropdown-button", t.id, "dropdown", !1), this._analytics.gaBindClick(".js-dropdown__item", t.id, "dropdown-item", !1))
                }
            }
            var ei = i(686485),
                ii = i(202441);
            const si = JSON.parse('{"ae":"AE","ar_AE":"SA","ar":"AR","au":"AU","be":"BE","bh":"BH","br":"BR","ca":"CA","ch":"CH","cl":"CL","co":"CO","de_DE":"DE","dk":"DK","ee":"EE","eg":"EG","es":"ES","fi":"FI","fr":"FR","hk":"HK","id":"ID","il":"IL","in":"IN","is":"IS","it":"IT","ja":"JP","kr":"KR","lt":"LT","lv":"LV","ms_MY":"MY","mx":"MX","ng":"NG","nl":"NL","no":"NO","nz":"NZ","pe":"PE","pl":"PL","pt":"PT","qa":"QA","rs":"RS","ru":"RU","sg":"SG","sv_SE":"SE","th_TH":"TH","tr":"TR","uk":"GB","us":"US","vi_VN":"VN","za":"ZA","zh_CN":"CN","zh_TW":"TW"}'),
                ri = (0, Jt.getLogger)("Lib.CountryCode");

            function ni(t) {
                try {
                    return (0, ii.toCountryCode)(si[t])
                } catch (e) {
                    return ri.logError(`Get ISO country code from country "${t}" failed: ${e.message}`), (0, ii.toCountryCode)(si.us)
                }
            }
            var oi = i(283660),
                ai = i(272316);
            const li = i(987380).getLogger("WidgetNews"),
                hi = ai.Model.extend({
                    initialize: function(t) {
                        void 0 === t.count && (t.count = 20), this.widgetName = "main", this.view = new ci({
                            model: this
                        }), this.view.setElement(t.el), this.initProvider(), this.requestNews(!0), this._setAutoRefresh(), window.loginStateChange.subscribe(this, this._reRequestOnLogin)
                    },
                    initProvider: function() {
                        this._newsProvider || (this._newsProvider = new ei.TradingViewNewsProvider)
                    },
                    _setAutoRefresh: function() {
                        !this._refreshInterval && this._newsProvider && (this._refreshInterval = setInterval(() => this.requestNews(), this._newsProvider.timeout()))
                    },
                    _stopAutoRefresh: function() {
                        clearInterval(this._refreshInterval)
                    },
                    requestNews: async function(t = !1) {
                        try {
                            const {
                                newsItems: t
                            } = await this._newsProvider.getNews({
                                pro_name: this.get("pro_name"),
                                type: this.get("type"),
                                typespecs: this.get("typespecs"),
                                lang: (0, Re.getIsoLanguageCodeFromLanguage)(this.get("language") || window.language),
                                locale: this.get("locale") || window.locale,
                                country: this.get("country") ? ni(this.get("country")) : (0, ii.getIsoCountryCodeFromLocale)(window.locale)
                            }), e = this._prepareNews(t);
                            this.set("news", e)
                        } catch (e) {
                            li.logError("Feed widget news request error: " + e.toString()), t || this.set("news", [])
                        }
                    },
                    _reRequestOnLogin: function() {
                        this.requestNews(!0)
                    },
                    _prepareNews: function(t = []) {
                        const e = this.get("count");
                        return e ? t.splice(0, e) : t
                    },
                    destroy: function() {
                        this._stopAutoRefresh(), this.view.remove(), this.trigger("destroy", this, this.collection), this._newsProvider && this._newsProvider.unmountItems(), window.loginStateChange.unsubscribe(this, this._reRequestOnLogin)
                    }
                }),
                ci = ai.View.extend({
                    initialize: function() {
                        this.model.on("change:news", () => this.render())
                    },
                    render: function() {
                        if (!this.model.has("news")) return;
                        const t = this.model.get("news").map(t => {
                            const e = Object.assign({}, t);
                            e.shortDescription = void 0;
                            const i = this.model._newsProvider.renderItem(e);
                            return this.model._newsProvider.addClickHandlers(t, i), i.classList.add(oi["news-item--card"]), i
                        });
                        !this.$tvSiteWidget ? (this.$tvSiteWidget = this.$el.find(".tv-feed-widget"), this.$tvSiteWidget && this.$tvSiteWidget.length ? (this.$tvSiteWidget.tvSiteWidget("init").tvSiteWidget("setElements", {
                            body: t
                        }), function(t, e) {
                            const i = t.querySelector(".js-news-widget-wrapper"),
                                s = i.querySelector(".js-news-widget-content");
                            if (!s) return;
                            const r = (0,
                                D.wrapWithScroll)(i, s, D.ScrollType.Horizontal);
                            if (P.mobiletouch) return;
                            I(i, r, {
                                elementSize: 292,
                                startPaddingSize: 8,
                                endPaddingSize: 0,
                                elementsCount: e,
                                scrollWrapper: r,
                                scrollButtonsAffectVisibilitySize: !1,
                                gapSize: 8
                            })
                        }(this.$el[0], this.model.get("news").length), this.trigger("rendered")) : li.logError("`.tv-feed-widget` element is required")) : this.reRender(t)
                    },
                    reRender: function(t) {
                        this.$tvSiteWidget.tvSiteWidget("setElements", {
                            body: t
                        }), this.trigger("rendered")
                    }
                });
            class ui extends A {
                static get type() {
                    return "news"
                }
                destroy() {
                    super.destroy()
                }
                _prepareInitData() {
                    this._initData.el = this._el, this._initData.count = 20
                }
                async _loadContentWidget() {
                    return Promise.resolve(new hi(this._initData))
                }
                _afterWidgetLoad() {
                    const t = this._initData;
                    this._contentWidget.on("change:news", () => {
                        null !== this._analytics && (this._analytics.gaBindClick(".js-widget-title-link", t.id, "Header", !1), this._analytics.gaBindClick(".js-quick-link-wrapper", t.id, "More", !1));
                        (!this._contentWidget.get("news") || !this._contentWidget.get("news").length) && this.destroy()
                    })
                }
            }
            class di extends A {
                static get type() {
                    return "promo_block"
                }
                constructor(t, e, i) {
                    super(t, e, i);
                    const s = (0, o.createDeferredPromise)();
                    this._readyPromise = s.promise, this._resolveReadyPromise = s.resolve
                }
                _loadContentWidget() {
                    const t = this._initData.adPlacement;
                    return t ? (t.load(), t.ready().then(e => {
                        this._resolveReadyPromise(t)
                    }), this._contentWidget = new O, Promise.resolve(this._contentWidget)) : (this._resolveReadyPromise(), this._contentWidget = new O, Promise.resolve(this._contentWidget))
                }
                readyForBalancing() {
                    return this._readyPromise
                }
            }
            class pi extends A {
                static get type() {
                    return "technicals"
                }
                _prepareInitData() {
                    this._initData.el = this._el
                }
                async _loadContentWidget() {
                    const {
                        WidgetTechnicalsModel: t
                    } = await Promise.all([i.e(64810), i.e(51866), i.e(90649), i.e(4033), i.e(11970), i.e(59485), i.e(82089)]).then(i.bind(i, 899979));
                    return this._contentWidget = new t(this._initData), this._contentWidget.view.render(), this._contentWidget
                }
            }
            var fi;
            i(775074);
            class gi extends A {
                static get type() {
                    return "watchlist"
                }
                async _loadContentWidget() {
                    return Promise.resolve(new Ve(this._el, {
                        fixedChartHeight: !0,
                        locale: window.locale
                    }))
                }
                _afterWidgetLoad() {
                    const t = this._initData;
                    null !== this._analytics && (this._analytics.gaBindClick(".js-symbol-row-interactive", t.id, "symbol-row: ", "symbol"), this._analytics.gaBindClick(".js-widget-tab", t.id, "tab: ", "content"), this._analytics.gaBindClick(".js-symbol-link", t.id, "symbol-link: ", "symbol"), this._analytics.gaBindClick(".js-timeframe-tab", t.id, "timeframe-tab: ", "timeframe"))
                }
            }! function(t) {
                t.IDEA = "idea", t.AUTHORS = "authors", t.BROKERS = "brokers", t.CHART = "chart", t.TIMELINE_CHART = "timeline_chart", t.TIMELINE = "timeline"
            }(fi || (fi = {}));
            class mi extends A {
                async _loadContentWidget() {
                    return (await Promise.all([i.e(55704), i.e(15025), i.e(99856), i.e(23303)]).then(i.bind(i, 970759))).createFeedWidget(this._el, this._initData)
                }
            }
            var _i = i(604346);
            i(736677), i(238103), i(923724), i(437431);
            class vi extends A {
                async _loadContentWidget() {
                    const [t, e, {
                        TimelineWidgetList: s
                    }] = await Promise.all([Promise.resolve().then(i.t.bind(i, 667294, 19)), Promise.resolve().then(i.t.bind(i, 973935, 19)), Promise.all([i.e(37853), i.e(60239), i.e(32299), i.e(11216), i.e(91050), i.e(31936)]).then(i.bind(i, 766577))]), r = (0, Ft.ensureNotNull)(this._el.querySelector(".js-timeline-widget-list-ssr-root")), n = (0, _i.getFreshInitData)()[(0, Ft.ensureDefined)(r.dataset.propsId)];
                    return e.hydrate(t.createElement(s, { ...n
                    }), r), {
                        destroy: () => {
                            e.unmountComponentAtNode(r)
                        }
                    }
                }
            }
            i(375848);
            const yi = i(987380).getLogger("FeedWidgets.FeedWidgetFactory");
            var bi = i(204860);
            class wi extends bi.default {
                constructor(t, e) {
                    super(t, e), this._page = parseInt(e.page, 10) || 1
                }
                load(t, e) {
                    return this._page = 1, super.load(t, e)
                }
                resetItems() {
                    this._page = 1, super.resetItems()
                }
                nextPage(t, e) {
                    return this._page++, this._load(this._getData(t), e)
                }
                loadPage(t, e, i) {
                    return this._page = parseInt(t, 10), this._itemsOffset = (this._page - 1) * this._itemsLimit, this._load(this._getData(e), i)
                }
                _getUrl() {
                    return this._url + this._getPageUrlPart()
                }
                _getPageUrlPart() {
                    return this._page > 1 ? "page-" + this._page + "/" : ""
                }
                _resolveAjaxPath(t) {
                    return t.ajaxPath ? t.ajaxPath + this._getPageUrlPart() : super._resolveAjaxPath(t)
                }
                getPage() {
                    return this._page
                }
            }
            var Si = i(640539),
                Ci = i(920269);

            function xi(t) {
                return Tt.createElement("button", {
                    className: It(t.className, Ci.item, t.isActive && Ci.isActive),
                    onClick: t.onClick,
                    "data-type": t.dataType,
                    "data-to-value": t.dataToValue
                }, Tt.createElement(Si.Icon, {
                    className: Ci.icon,
                    icon: t.icon
                }), Tt.createElement("div", {
                    className: Ci.content
                }, t.children))
            }
            var Mi = i(373113),
                ki = i(630587);
            class Ei {
                constructor(t, e) {
                    this._disabled = !1, this._getElements = () => Array.from(this._container.querySelectorAll("[data-to-value][data-type]")), this._handleClick = t => {
                        if (t.preventDefault(), this._disabled) return;
                        const e = t.currentTarget,
                            i = (0, Ft.ensure)(e.dataset.type),
                            s = (0, Ft.ensure)(e.dataset.toValue);
                        this._callback({
                            [i]: s
                        })
                    }, this._container = t, this._callback = e, this._bind()
                }
                disable() {
                    this._disabled = !0
                }
                enable() {
                    this._disabled = !1
                }
                updateBindings() {
                    this._unbind(), this._bind()
                }
                getContainer() {
                    return this._container
                }
                destroy() {
                    this._unbind()
                }
                _bind() {
                    this._getElements().forEach(t => t.addEventListener("click", this._handleClick))
                }
                _unbind() {
                    this._getElements().forEach(t => t.removeEventListener("click", this._handleClick))
                }
            }
            var Pi = i(548984),
                Ti = i(333391),
                Ai = i(386111),
                Li = i(739123),
                Di = i(636520),
                Ii = i(354951);
            const Ni = {
                video: Ai,
                script_access: i(856454),
                script_type_all: Ii,
                script_type_indicators: Di,
                script_type_strategies: Li,
                sort_recent: Ti,
                sort_latest_popular: Pi,
                sort_month_popular: Pi,
                sort_picked_time: Ti,
                default: Ti
            };
            class Fi {
                constructor(t, e, i) {
                    this._container = t, At.render(Tt.createElement(Bi, {
                        filtersInfo: e,
                        filterChangeHandler: i
                    }), this._container)
                }
                destroy() {
                    At.unmountComponentAtNode(this._container)
                }
            }
            class Bi extends Tt.PureComponent {
                render() {
                    return Tt.createElement(Ri, { ...this.props
                    })
                }
            }

            function Ri(t) {
                const e = function(t) {
                        const e = t.controls.slice().reverse(),
                            i = t.active,
                            s = [];
                        for (const t of e) {
                            switch (t.control_type) {
                                case "fc_toggle":
                                    {
                                        const e = t.control_context;s.push(Tt.createElement(xi, {
                                            icon: Ni[`${t.filter_name}_${e.right_side.next_value}`] || Ni.default,
                                            key: e.right_side.href,
                                            href: e.right_side.href,
                                            isActive: e.right_side.active,
                                            dataType: t.filter_name,
                                            dataToValue: e.right_side.next_value
                                        }, e.right_side.mobile_title || e.right_side.title), Tt.createElement(xi, {
                                            icon: Ni[`${t.filter_name}_${e.left_side.next_value}`] || Ni.default,
                                            key: e.left_side.href,
                                            href: e.left_side.href,
                                            isActive: e.left_side.active,
                                            dataType: t.filter_name,
                                            dataToValue: e.left_side.next_value
                                        }, e.left_side.mobile_title || e.left_side.title));
                                        break
                                    }
                                case "fc_checkbox":
                                    {
                                        const e = t.control_context;s.push(Tt.createElement(xi, {
                                            icon: Ni[t.filter_name] || Ni.default,
                                            href: e.href,
                                            key: e.href,
                                            dataType: t.filter_name,
                                            dataToValue: e.next_value,
                                            isActive: e.active
                                        }, e.mobile_title || e.title));
                                        break
                                    }
                                case "fc_dropdown":
                                    {
                                        const e = t.control_context;
                                        for (const r of e.options) s.push(Tt.createElement(xi, {
                                            icon: Ni[`${t.filter_name}_${r.name}`] || Ni.default,
                                            href: r.href,
                                            key: r.name,
                                            dataType: t.filter_name,
                                            dataToValue: r.name,
                                            isActive: r.name === i[t.filter_name]
                                        }, r.title));
                                        break
                                    }
                            }
                            s.push(Tt.createElement(Mi.Separator, {
                                key: t.filter_name
                            }))
                        }
                        return s.pop(), s
                    }(t.filtersInfo),
                    [i, s] = (0, Tt.useState)(!0),
                    {
                        shouldClose: r,
                        setShouldClose: n,
                        outsideEventContainerRef: o
                    } = (0, ki.useMobileDropdownMenu)();
                return (0, Tt.useEffect)(() => {
                    const e = new Ei((0, Ft.ensureNotNull)(o.current), e => {
                        t.filterChangeHandler(e), n(!0)
                    });
                    return () => e.destroy()
                }, []), i ? Tt.createElement(ki.MobileDropdownMenu, {
                    shouldClose: r,
                    setShouldClose: n,
                    onClose: () => {
                        s(!1), n(!1)
                    },
                    reference: o
                }, e) : null
            }
            class Oi {
                constructor(t, e) {
                    this._handleClick = t => {
                        t.preventDefault();
                        const e = t.currentTarget,
                            i = Number(e.getAttribute("data-page"));
                        this._callback(i)
                    }, this._container = t, this._callback = e, Array.from(this._container.querySelectorAll("a.js-page-reference")).forEach(t => {
                        t.addEventListener("click", this._handleClick)
                    })
                }
                destroy() {
                    Array.from(this._container.querySelectorAll("a.js-page-reference")).forEach(t => {
                        t.removeEventListener("click", this._handleClick)
                    })
                }
            }
            class qi {
                constructor(t) {
                    if (this._trackData = t.dataset.trackEvent && JSON.parse(t.dataset.trackEvent), this._headerLink = t.querySelector(".js-header-link"), null !== this._headerLink && void 0 !== this._trackData) {
                        const t = (0, Ft.ensureDefined)(this._trackData).label || window.location.pathname;
                        this._headerLinkClick = () => {
                            (0, v.trackEvent)((0, Ft.ensureDefined)(this._trackData).category, (0, Ft.ensureDefined)(this._trackData).event, "Header " + t)
                        }, this._headerLink.addEventListener("click", this._headerLinkClick)
                    }
                    if (this._footerLink = t.querySelector(".js-footer-link"), null !== this._footerLink) {
                        const t = (0, Ft.ensureDefined)(this._trackData).label || window.location.pathname;
                        this._footerLinkClick = () => {
                            (0, v.trackEvent)((0, Ft.ensureDefined)(this._trackData).category, (0, Ft.ensureDefined)(this._trackData).event, "More " + t)
                        }, this._footerLink.addEventListener("click", this._footerLinkClick)
                    }
                }
                destroy() {
                    null !== this._headerLink && void 0 !== this._headerLinkClick && this._headerLink.removeEventListener("click", this._headerLinkClick), null !== this._footerLink && void 0 !== this._footerLinkClick && this._footerLink.removeEventListener("click", this._footerLinkClick)
                }
            }

            function Wi() {
                return Array.from(document.querySelectorAll(".js-feed-block")).map(t => new qi(t))
            }

            function zi(t) {
                for (const e of t) e.destroy()
            }
            var Ui = i(895389),
                Vi = i(771073),
                Hi = i(772637);
            class $i {
                constructor(t) {
                    this._categoriesList = {}, this._categoryType = this._getCategoryType(t)
                }
                async updateCategories(t, e) {
                    if (null === this._categoryType) return;
                    const i = t && t.extra_data && t.extra_data.filter_controls;
                    let s = null;
                    i.some(t => "script_type" === t.filter_name && (s = t.control_context.active_option.name, !0));
                    const r = this._getCategoryType(s);
                    if (this._categoryType !== r)
                        if (this._categoryType = r, Object.keys(this._categoriesList).length) this._updateCategoriesValues(e);
                        else {
                            const t = new Hi.CategoriesProvider;
                            (await t.getCategories()).forEach(t => {
                                this._categoriesList[t.name] = t.categories
                            }), this._updateCategoriesValues(e)
                        }
                }
                _getCategoryType(t) {
                    return null === t ? null : "all" === t ? "All" : "libraries" === t ? Hi.CategoriesTypes.Libraries : "strategies" === t || "indicators" === t ? Hi.CategoriesTypes.Scripts : null
                }
                _updateCategoriesValues(t) {
                    if (null === this._categoryType) return;
                    let e;
                    e = "All" === this._categoryType ? this._categoriesList[Hi.CategoriesTypes.Scripts].concat(this._categoriesList[Hi.CategoriesTypes.Libraries]) : this._categoryType === Hi.CategoriesTypes.Libraries ? this._categoriesList[Hi.CategoriesTypes.Libraries] : this._categoriesList[Hi.CategoriesTypes.Scripts], t.innerHTML = "", e.forEach(e => {
                        const i = document.createElement("a");
                        i.href = "/scripts/" + e.tag, i.classList.add("tv-tag-label"), i.classList.add("tv-tag-label--rounded"), i.text = e.name, t.appendChild(i)
                    })
                }
            }
            class ji {
                constructor(t, e) {
                    window.history.replaceState(this._checkAndPrepareState(t), document.title, window.location.href), window.addEventListener("popstate", () => {
                        const t = window.history.state;
                        (function(t) {
                            return t && "searchChartCategoryHistoryState" in t
                        })(t) && e(function(t) {
                            const e = Object.assign({}, t);
                            return delete e.searchChartCategoryHistoryState, e
                        }(t))
                    })
                }
                pushState(t, e, i) {
                    window.history.pushState(this._checkAndPrepareState(t), e, i)
                }
                _checkAndPrepareState(t) {
                    return (0, Ft.ensureDefined)(t.filterData), (0, Ft.ensureDefined)(t.page), (0, Ft.ensureDefined)(t.feedType), (0, Ft.ensureDefined)(t.initOptions), (0, Ft.ensureDefined)(t.initOptions.url), "symbol" === t.feedType && (0, Ft.ensureDefined)(t.symbolStr),
                        function(t) {
                            return Object.assign({
                                searchChartCategoryHistoryState: !0
                            }, t)
                        }(t)
                }
            }
            const Yi = "js-card--changed-by-balancer";

            function Gi(t) {
                const {
                    cards: e,
                    columnsCount: i
                } = t, s = Qi(e).length % i;
                Zi(e, e.length - 1 - s)
            }

            function Xi(t) {
                const {
                    cards: e,
                    showLimit: i
                } = t, s = i - 1;
                Zi(Qi(e), s)
            }

            function Ji(t) {
                for (let e = 0; e < t.length; e++) Ki(t[e])
            }

            function Qi(t) {
                return t.filter(t => !t.classList.contains("i-hidden") || t.classList.contains(Yi))
            }

            function Zi(t, e) {
                if (!(e >= t.length - 1))
                    for (let i = 0; i < t.length; i++) {
                        const s = t[i];
                        e < i ? ts(s) : Ki(s)
                    }
            }

            function Ki(t) {
                const e = t.classList;
                e.contains(Yi) && e.contains("i-hidden") && e.remove("i-hidden")
            }

            function ts(t) {
                t.classList.add("i-hidden"), t.classList.add(Yi)
            }
            var es = i(473018),
                is = (i(857071), i(499773), i(396383), i(199708), i(816427), i(918184)),
                ss = i(765066),
                rs = i(896276),
                ns = i(513469);
            const os = i(152946).linking,
                as = i(987380).getLogger("SearchCharts"),
                ls = is(window),
                hs = is(document.body);

            function cs(t) {
                this.loadingSymbol = new ss(!1), this.onSearchBySymbol = new rs, this._paginationController = null, this._filtersController = null, this._categoriesUpdater = null, this._init(t), this._hookCleanup = null, this._contentLifecycleHook = {
                    init: () => {
                        t.contentLifecycleHook && (this._hookCleanup = t.contentLifecycleHook())
                    },
                    cleanup: () => {
                        this._hookCleanup && this._hookCleanup()
                    }
                }, this._contentLifecycleHook.init()
            }
            cs.prototype.feedBySymbol = function(t) {
                    if (!0 === this.loadingSymbol.value()) return;
                    this.loadingSymbol.setValue(!0);
                    const e = t;
                    this._startLoadSpinner(), this._setLoadingState(), this._preloadAd(), (0, S.getQuoteSessionInstance)("simple").snapshot(t).then(s => {
                        let r = (0, Et.getSymbolPagePath)({
                            proName: t,
                            type: s.type,
                            exchange: s.exchange
                        });
                        r += -1 !== r.indexOf("?") ? "&" : "?", r += "route_range=full", Promise.all([Promise.all([i.e(61167), i.e(94226), i.e(15501), i.e(39339), i.e(99377)]).then(i.bind(i, 303207)), (0, y.fetch)(r).then(t => t.ok ? t.json() : (as.logWarn("failed to fetch " + e), Promise.reject()))]).then(([i, s]) => {
                            if (this.loadingSymbol.setValue(!1), os.symbol.value() !== e) return void as.logWarn(`feedBySymbol. Symbols mismatch! ${os.symbol.value()} !== ${e}`);
                            this._contentLifecycleHook.cleanup(), this._stopWidgets(this._$feed), zi(this.titledBlocks || []), is("#js-category-content").replaceWith(s.render_results.content), (0, d.initCategoryHeader)(t, this.dataSourceHubPromise), (0, w.checkSymbol)(t), (0, Ui.initCategoryBrokerBrandingAnalytics)();
                            const r = {
                                url: s.path_wo_pagination,
                                itemsMeta: s.results,
                                symbolInfo: s.symbol_info
                            };
                            this._init(r), this._contentLifecycleHook.init();
                            const n = new URL(`${s.path_wo_pagination}${s.results.relative_url||""}`, window.location.href),
                                {
                                    categoryHeaderExchangeSelected: o
                                } = window.history.state;
                            if (o) {
                                const t = (0, es.getExchangeSearchString)(o);
                                window.location.search === t && (n.search = t)
                            }
                            this._history.pushState({
                                filterData: this._itemLoader.getState(),
                                page: this._itemLoader.getPage(),
                                ajaxPath: this._getAjaxPathFromDom(),
                                feedType: this._feedType,
                                symbolStr: t,
                                initOptions: r
                            }, s.page_title, n.toString()), (0, Vi.getTracker)().then(t => {
                                t && t.trackPageView()
                            })
                        }, () => {
                            this.loadingSymbol.setValue(!1)
                        })
                    })
                }, cs.prototype._getAjaxPathFromDom = function() {
                    return this._$cardContainerMain.get(0) && this._$cardContainerMain.get(0).dataset.ajaxPath || null
                }, cs.prototype._toggleFilters = function(t) {
                    this._filtersController && (t ? this._filtersController.enable() : this._filtersController.disable()), this._elMobileFiltersToggler && (t ? this._elMobileFiltersToggler.addEventListener("click", this._handleTogglerClickBinded) : this._elMobileFiltersToggler.removeEventListener("click", this._handleTogglerClickBinded))
                }, cs.prototype._load = function(t, e = {}) {
                    const i = e.ajaxPath || this._getAjaxPathFromDom(),
                        s = {
                            ajaxPath: i
                        },
                        r = e.source && e.source.includes("filter_change"),
                        n = {};
                    r && (n.route_range = 1), e.ajaxPath = i, this._toggleFilters(!1), this._startLoadSpinner(), this._setLoadingState(), this._preloadAd(), this._itemLoader.load(s, n).then(t => (delete this._infiniteLoopDefender, this._$feed.css("height", this._$feed.height()),
                        t)).then(this._onLoadHandler(!1, e).bind(this)).then(t => {
                        r ? this._scrollToFilters(() => this._$feed.css("height", "auto")) : this._scrollUp(() => this._$feed.css("height", "auto")), this._streamModificators = t.streamModificators || {}
                    }).catch((e, i) => {
                        this._stopSpinner(), this._toggleFilters(!0), this._infiniteLoopDefender ? delete this._infiniteLoopDefender : (this._infiniteLoopDefender = !0, t && this._itemLoader.setState(t)), this._handleLoadError(e)
                    })
                }, cs.prototype.showMore = function(t) {
                    this._setLoadingState(), this._preloadAd();
                    this._$showMoreButton || this._startLoadMoreSpinner();
                    const e = this._getAjaxPathFromDom(),
                        i = {
                            ajaxPath: e + "ideas/"
                        };
                    return t.ajaxPath = e, this._itemLoader.nextPage({
                        route_range: 1
                    }, i).then(this._onLoadHandler(!0, t).bind(this)).then(() => {
                        if (this._itemLoader.allItemsLoaded()) {
                            this._turnOffNavigation();
                            Ji(this._getWidgets({
                                $container: this._$cardContainerIdeas
                            }).toArray())
                        }
                    }).catch(t => {
                        this._stopSpinner(), this._handleLoadError(t)
                    })
                }, cs.prototype.loadPageNum = function(t, e) {
                    this._toggleFilters(!1), this._setLoadingState(), this._preloadAd();
                    "trending" === this._itemLoader.getState().sort && this._streamModificators.trending_one_idea_mode && console.error("SearchCharts not support pagination for trending_one_idea_mode");
                    const i = e.ajaxPath || this._getAjaxPathFromDom(),
                        s = {
                            ajaxPath: i,
                            allowAbortPrevious: !0
                        };
                    e.ajaxPath = i;
                    const r = this._itemLoader.loadPage(t, {
                            route_range: 1
                        }, s),
                        n = new Promise(t => {
                            this._scrollUpColumns(t)
                        });
                    return Promise.race([r.then(() => "fetched"), n.then(() => "scrolled")]).then(t => {
                        "scrolled" === t && this._startColumnLoadSpinner()
                    }).catch(() => this._stopSpinner()), Promise.all([r, n]).then(([t]) => t).then(this._onLoadHandler(!1, e).bind(this)).catch(t => {
                        this._toggleFilters(!0), this._handleLoadError(t)
                    })
                }, cs.prototype._handleLoadError = function(t) {
                    let e;
                    e = t instanceof Error ? t.toString() + (t.stack || "").toString() : "object" == typeof t ? JSON.stringify(t) : t.toString(), as.logError(e)
                }, cs.prototype._scrollUp = function(t) {
                    (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) - this._$feed.position().top > 100 ? this._$feed.velocity("scroll", {
                        offset: -100,
                        duration: 400,
                        easing: "easeInOutCubic",
                        complete: t
                    }) : t && t()
                }, cs.prototype._scrollUpColumns = function(t) {
                    return this._$cardContainerColumns.velocity("scroll", {
                        duration: 400,
                        easing: "easeInOutCubic",
                        complete: t
                    })
                }, cs.prototype._scrollToFilters = function(t) {
                    const e = this._filtersController && this._filtersController.getContainer();
                    e && e.getBoundingClientRect().top > 0 ? is(e).velocity("scroll", {
                        duration: 400,
                        easing: "easeInOutCubic",
                        complete: t
                    }) : t && t()
                }, cs.prototype._setLoadingState = function() {
                    this._isLoading = !0
                }, cs.prototype._startColumnLoadSpinner = function() {
                    return this._$cardContainerIdeas.addClass("tv-card-container__ideas--loading"), this._$cardContainerIdeas.tvFeed("startLoadSpinner", {
                        css: {
                            top: 90,
                            left: "50%"
                        }
                    }), this
                }, cs.prototype._startLoadSpinner = function() {
                    if (0 === this._$feed.length) return;
                    const t = this._$feed.position().top,
                        e = ls.height(),
                        i = this._$feed.height(),
                        s = hs.scrollTop(),
                        r = (Math.max(t, s) + Math.min(s + e, i + t) - 50) / 2;
                    this._$feed.tvFeed("startLoadSpinner", {
                        css: {
                            top: r,
                            left: "50%"
                        }
                    })
                },
                cs.prototype._startLoadMoreSpinner = function() {
                    return this._$navigation().tvFeed("startLoadMoreSpinner"), this
                }, cs.prototype._stopSpinner = function() {
                    return this._$feed.tvFeed("stopSpinner"), this._$navigation().tvFeed("stopSpinner"), this._$cardContainerIdeas.tvFeed("stopSpinner"), this._$cardContainerIdeas.removeClass("tv-card-container__ideas--loading"), this
                }, cs.prototype.bindAutoLoad = function(t) {
                    this._boundScrollHandler || (t = +t || 600, this._boundScrollHandler = () => {
                        if (this._itemLoader.allItemsLoaded() || this._isLoading) return;
                        if (document.body.classList.contains("i-no-scroll")) return;
                        this._$cardContainerIdeas[0].getBoundingClientRect().bottom > window.innerHeight + t || this.showMore({
                            source: ["autoload"]
                        })
                    }, window.addEventListener("scroll", this._boundScrollHandler, !1), is(".js-footer").addClass("i-hidden"))
                }, cs.prototype.unbindAutoLoad = function(t) {
                    this._boundScrollHandler && (window.removeEventListener("scroll", this._boundScrollHandler, !1), this._boundScrollHandler = null), is(".js-footer").removeClass("i-hidden")
                }, cs.prototype._onLoadHandler = function(t, e) {
                    return ([i, s, r]) => {
                        this._isLoading = !1;
                        if ((!e.source || !e.source.includes("history_navigation")) && this._history.pushState({
                                filterData: this._itemLoader.getState(),
                                page: this._itemLoader.getPage(),
                                ajaxPath: e.ajaxPath || "",
                                feedType: "ideas",
                                initOptions: {
                                    url: this._initOptions.url,
                                    itemsMeta: this._initOptions.itemsMeta,
                                    symbolInfo: this._initOptions.symbolInfo
                                }
                            }, i.page_title, this._url + (i.results.relative_url || "")), t) {
                            const t = i.render_results.content;
                            this._addWidgets(t, this._$cardContainerMain)
                        } else {
                            const t = i.render_results.content;
                            this._replaceLoadedContent(t)
                        }
                        return i.symbol_info ? this._linkSymbolInfo(i.symbol_info) : this._unlinkSymbolInfo(), this._$feedWrapper.find(".tv-dropdown").tvDropdown(), this._stopSpinner(), this._categoriesUpdater.updateCategories(i, this._$categoriesContainer.get(0)), i
                    }
                }, cs.prototype._replaceLoadedContent = function(t) {
                    this._contentLifecycleHook.cleanup(), this._turnOffNavigation(), this._unbindFilters(), this._stopWidgets(this._$cardContainerMain), zi(this.titledBlocks);
                    const e = this._$cardContainerMain.get(0),
                        i = e.parentNode,
                        s = (0, b.parseHtmlElement)(t);
                    i.replaceChild(s, e), this._updateContainersReferences(), this._markAsAnchor(this._$header), this._activateNavigation(), this._bindFilters(), this._startAndPrepareWidgetsForBalancing(this._$cardContainerMain).then(this._balanceCards.bind(this)), this.titledBlocks = Wi(), this._contentLifecycleHook.init()
                }, cs.prototype._filterChangePreproccess = function(t) {
                    const e = this._itemLoader.getState();
                    return "recent" === t.sort && "recent" !== e.sort ? this._savedInterval = e.interval : this._savedInterval && "recent" === e.sort && "recent" !== t.sort && (t.interval = this._savedInterval, delete this._savedInterval), t
                }, cs.prototype._filterChangeHandler = function(t) {
                    t = this._filterChangePreproccess(t), this._trackFiltersChange(t);
                    const e = ns.clone(this._itemLoader.getState());
                    this._itemLoader.updateState(t) && this._load(e, {
                        source: ["filter_change"]
                    })
                }, cs.prototype._trackFiltersChange = function(t) {
                    const e = window.location.pathname + (window.location.search || "");
                    for (const [i, s] of Object.entries(t)) switch (i) {
                        case "video":
                            (0, v.trackEvent)("Ideas Filters", "Videos Only", e);
                            break;
                        case "sort":
                            (0, v.trackEvent)("Ideas Filters", "recent" === s ? "Newest" : "Popular", e);
                            break;
                        case "script_type":
                            (0, v.trackEvent)("Script Filters", "Script Type", s);
                            break;
                        case "script_access":
                            (0, v.trackEvent)("Script Filters", "Source Type", "open" === s ? "Open source only" : "All");
                            break;
                        default:
                            (0, v.trackEvent)("Ideas Filters", "", e)
                    }
                }, cs.prototype._bindFilters = function() {
                    this._unbindFilters();
                    const t = document.querySelector(".js-feed-filters");
                    t && (this._filtersInfo = JSON.parse(t.dataset.filters), this._itemLoader.setState(this._filtersInfo.active), this._filtersController = new Ei(t, this._filterChangeHandler.bind(this)), this._elMobileFiltersToggler = t.querySelector(".js-feed-filters-mobile__toggler"), this._elMobileFiltersToggler && (this._renderer = null, this._handleTogglerClickBinded = this._handleTogglerClick.bind(this), this._elMobileFiltersToggler.addEventListener("click", this._handleTogglerClickBinded)))
                }, cs.prototype._handleTogglerClick = function() {
                    const t = this._elMobileFiltersToggler.querySelector(".tv-feed-rounded-button__dropdown-container");
                    this._renderer && this._renderer.destroy(), this._renderer = new Fi(t, this._filtersInfo, this._filterChangeHandler.bind(this)), this._filtersController.updateBindings()
                }, cs.prototype._unbindFilters = function() {
                    this._elMobileFiltersToggler && this._elMobileFiltersToggler.removeEventListener("click", this._handleTogglerClickBinded), null !== this._filtersController && (this._filtersController.destroy(), this._filtersController = null)
                }, cs.prototype._bindHistory = function(t) {
                    this._history || (this._history = new ji({
                        filterData: this._itemLoader.getState(),
                        page: this._itemLoader.getPage(),
                        ajaxPath: this._getAjaxPathFromDom(),
                        feedType: this._feedType,
                        symbolStr: "symbol" === this._feedType ? this._initOptions.symbolInfo.pro_symbol : "",
                        initOptions: {
                            url: t.url,
                            itemsMeta: t.itemsMeta,
                            symbolInfo: t.symbolInfo
                        }
                    }, t => {
                        const e = this._itemLoader.checkState(t.filterData),
                            i = t.page && this._itemLoader.getPage() !== t.page;
                        if (this._feedType !== t.feedType) window.location.href = t.initOptions.url;
                        else if (!e && i) {
                            const e = is("#anchor-page-" + t.page);
                            e.length ? e.velocity("scroll", {
                                duration: 400,
                                easing: "easeInOutCubic"
                            }) : this.loadPageNum(t.page, {
                                source: ["history_navigation", "pagination"]
                            })
                        } else if (e) {
                            const e = this._filterChangePreproccess(t.filterData);
                            if (this._itemLoader.updateState(e), t.page > 1) this.loadPageNum(t.page, {
                                source: ["history_navigation", "pagination"]
                            });
                            else {
                                const e = ns.clone(this._itemLoader.getState());
                                this._load(e, {
                                    source: ["history_navigation", "filter_change"],
                                    ajaxPath: t.ajaxPath || ""
                                })
                            }
                        }
                    }))
                }, cs.prototype._turnOffNavigation = function() {
                    this.unbindAutoLoad()
                }, cs.prototype._activateNavigation = function() {
                    this._bindPagination(), this._bindShowMoreButton()
                }, cs.prototype._bindShowMoreButton = function() {
                    this._$showMoreButton = is(".js-load-more"), this._$showMoreButton.tvButtonLoader(), this._$showMoreButton.on("click", function() {
                        this._$showMoreButton.addClass("js-loading"), this._$showMoreButton.tvButtonLoader("start"), this._$pagination().remove();
                        return this.showMore({
                            source: ["show_more_button"]
                        }).then(() => {
                            this._$showMoreButton.remove(), delete this._$showMoreButton, this._itemLoader.allItemsLoaded() || this.bindAutoLoad(800)
                        }, t => {
                            const e = this._$showMoreButton.tvButtonLoader("get", "contentHtml"),
                                i = this._$showMoreButton.width();
                            this._$showMoreButton.removeClass("js-loading"), this._$showMoreButton.tvButtonLoader("stop"), this._$showMoreButton.css("width", i), this._$showMoreButton.tvButtonLoader("contentHtml", is.t("Error")), setTimeout(() => {
                                this._$showMoreButton.tvButtonLoader("contentHtml", e), this._$showMoreButton.css("width", "auto")
                            }, 3e3)
                        }), !1
                    }.bind(this))
                }, cs.prototype._bindPagination = function() {
                    null !== this._paginationController && (this._paginationController.destroy(), this._paginationController = null);
                    const t = this._$pagination().get(0);
                    t && (this._paginationController = new Oi(t, t => this.loadPageNum(t, {
                        source: ["pagination"]
                    })))
                }, cs.prototype._preloadAd = function() {
                    this._adPlacement && this._adPlacement.load()
                }, cs.prototype._markAsAnchor = function(t) {
                    t.eq(0).attr("id", "anchor-page-" + this._itemLoader.getPage())
                }, cs.prototype._addWidgets = function(t, e) {
                    const i = is(t);
                    this._markAsAnchor(i.eq(0)), e.find(".tv-feed__item").last().after(i), this._startAndPrepareWidgetsForBalancing(e).then(this._balanceCards.bind(this))
                }, cs.prototype._getWidgets = function({
                    $container: t,
                    notStartedOnly: e = !1
                }) {
                    let i = [".tv-feed__item", ".js-feed__item"];
                    return e && (i = i.map(t => t + ":not(.js-feed__item--inited)")), t.find(i.join(","))
                }, cs.prototype._startAndPrepareWidgetsForBalancing = function(t) {
                    const e = this,
                        i = [];
                    return this._getWidgets({
                        $container: t,
                        notStartedOnly: !0
                    }).each((function() {
                        const t = is(this),
                            s = this.dataset.widgetId,
                            r = this.dataset.widgetType;
                        let n = this.dataset.widgetData ? JSON.parse(this.dataset.widgetData) : {};
                        if ("promo_block" === r && e._adPlacement && (n = {
                                adPlacement: e._adPlacement
                            }), r === fi.CHART && (n.withChartModel = e._withChartModel), this.dataset.feedWidget) return;
                        const o = class {
                            static create(t, e, i, s = {}) {
                                const r = [j, K, Pt, ti, ui, di, pi, gi, {
                                    type: "empty_card",
                                    isNull: !0
                                }, {
                                    type: "description",
                                    isNull: !0
                                }];
                                let n = null;
                                switch (e) {
                                    case fi.IDEA:
                                        n = mi;
                                        break;
                                    case fi.BROKERS:
                                    case fi.AUTHORS:
                                        n = B;
                                        break;
                                    case fi.CHART:
                                        n = j;
                                        break;
                                    case fi.TIMELINE_CHART:
                                        n = Y;
                                        break;
                                    case fi.TIMELINE:
                                        n = vi
                                }
                                if (null === n) {
                                    if (n = r.find(i => i.type === ("watchlist__hot" === t ? "watchlist--hot" : e)), void 0 === n) return yi.logError("Unknown widget type: " + e), null;
                                    if (n.isNull) return null
                                }
                                return new n(t, i, s)
                            }
                        }.create(s, r, this, { ...n,
                            trackEventsGA: r !== fi.BROKERS,
                            id: s
                        });
                        if (o) {
                            if (o.init(), "function" == typeof o.onHasNoData) {
                                const t = o.onHasNoData();
                                t instanceof rs ? t.subscribe(this, () => {
                                    const t = is(this);
                                    t.data("feedWidget").destroy(), t.addClass("i-hidden").removeData("feedWidget")
                                }) : console.error("feedWidget.onHasNoData() should return Delegate instance")
                            }
                            i.push(o.readyForBalancing()), t.data("feedWidget", o), t.addClass("js-feed__item--inited")
                        }
                    })).find(".js-time-upd").timeUpdate(), Promise.all(i)
                }, cs.prototype._stopWidgets = function(t) {
                    this._getWidgets({
                        $container: t
                    }).each((function() {
                        const t = is(this).data("feedWidget");
                        t && "function" == typeof t.destroy && t.destroy()
                    }))
                },
                cs.prototype._balanceCards = function() {
                    const t = Array.from(document.querySelectorAll(".js-balance-content"));
                    for (const e of t) {
                        const t = is(e),
                            i = this._getWidgets({
                                $container: t
                            }).toArray();
                        if (!e.classList.contains("js-force-balancing") && this._itemLoader.allItemsLoaded()) Ji(i);
                        else if ("balanceLimit" in e.dataset) {
                            Xi({
                                cards: i,
                                showLimit: e.dataset.balanceLimit
                            })
                        } else {
                            Gi({
                                cards: i,
                                columnsCount: this._getIdeasColumnsNumber(t)
                            })
                        }
                    }
                }, cs.prototype._getIdeasColumnsNumber = function(t) {
                    return _.mediaState.width <= _.mediaState.breakpoints.tablet ? 1 : t.width() < 1500 ? 2 : 3
                }, cs.prototype._linkSymbolInfo = function(t) {
                    this.onSearchBySymbol.fire(t), this._symbolInfo = t
                }, cs.prototype._unlinkSymbolInfo = function() {
                    delete this._symbolInfo
                }, cs.prototype._updateContainersReferences = function() {
                    this._$cardContainerColumns = this._$feed.find(".tv-card-container__columns"), this._$cardContainerMain = this._$feed.find(".tv-card-container__main"), this._$cardContainerIdeas = this._$feed.find(".tv-card-container__ideas")
                }, cs.prototype._init = function(t = {}) {
                    this._$feedWrapper = is(".js-feed-wrap"), this._$feed = is(".tv-feed"), this._$header = is(".tv-category-header"), this._$categoriesContainer = is(".tv-category-header__tags-content"), this._$feedWrapper.find(".tv-dropdown").tvDropdown(), this._updateContainersReferences(), this._url = t.url, t.adPlacement && (this._adPlacement = t.adPlacement), t.itemsMeta && t.itemsMeta.filters && t.itemsMeta.filters.script_type ? this._categoriesUpdater = new $i(t.itemsMeta.filters.script_type) : this._categoriesUpdater = new $i(null), this._streamModificators = t.itemsMeta.streamModificators || {}, this._itemLoader = new wi(t.url, t.itemsMeta), this._itemLoader.updateState(t.itemsMeta.filters), this._feedType = t.symbolInfo ? "symbol" : "ideas", this._initOptions = t, this.dataSourceHubPromise = new Promise(t => {
                        this._withChartModel = e => {
                            t(e)
                        }
                    }), this._balanceCards = this._balanceCards.bind(this), this._markAsAnchor(this._$header), this._startAndPrepareWidgetsForBalancing(this._$feed).then(this._balanceCards), this.titledBlocks = Wi(), _.mediaState.on("changeDevice", this._balanceCards), this._bindHistory(t), this._bindShowMoreButton(), this._bindPagination(), t.symbolInfo && this._linkSymbolInfo(t.symbolInfo), this._bindFilters(), os.bindToSearchCharts(this)
                }, cs.prototype._$pagination = function() {
                    return is(".js-feed-pagination", this._$feedWrapper)
                }, cs.prototype._$navigation = function() {
                    return is(".js-feed-navigation", this._$feedWrapper)
                }, cs.prototype.destroy = function(t) {
                    null !== this._paginationController && (this._paginationController.destroy(), this._paginationController = null), this._elMobileFiltersToggler && this._elMobileFiltersToggler.removeEventListener("click", this._handleTogglerClickBinded), null !== this._filtersController && (this._filtersController.destroy(), this._filtersController = null), _.mediaState.off("changeDevice", this._balanceCards), this._contentLifecycleHook.cleanup(), this._stopWidgets(this._$feed), this.unbindAutoLoad()
                };
            class us {
                constructor(t) {
                    this._iframes = [], this._columns = Array.from(t.getElementsByClassName("tv-sticky-columns__column"));
                    if (/\sEdge\/\d\d\b/.test(navigator.userAgent) || this._columns.length <= 1) {
                        for (const t of this._columns) t.classList.remove("tv-sticky-columns__column");
                        this._columns = []
                    } else this._recalc = this._recalc.bind(this), this._recalc(), this._initResize()
                }
                destroy() {
                    window.removeEventListener("resize", this._recalc, !1);
                    for (const t of this._iframes.splice(0, 1 / 0)) t.parentNode && t.parentNode.removeChild(t);
                    this._observer && (this._observer.disconnect(), this._observer = void 0)
                }
                _recalc() {
                    const t = document.documentElement.clientHeight,
                        e = [];
                    let i = 0;
                    for (let t = 0; t < this._columns.length; t++) {
                        const s = this._columns[t].getBoundingClientRect();
                        e[t] = s, s.height > i && (i = s.height)
                    }
                    for (let s = 0; s < this._columns.length; s++) {
                        const r = this._columns[s],
                            n = e[s];
                        n.height >= i ? (r.classList.add("tv-sticky-columns__column--fix-bottom"), r.classList.remove("tv-sticky-columns__column--layered")) : n.height < t ? (r.classList.remove("tv-sticky-columns__column--fix-bottom"), r.classList.add("tv-sticky-columns__column--layered")) : (r.classList.add("tv-sticky-columns__column--fix-bottom"), r.classList.add("tv-sticky-columns__column--layered"))
                    }
                }
                _initResize() {
                    if (window.addEventListener("resize", this._recalc, !1), window.ResizeObserver) {
                        this._observer = new window.ResizeObserver(this._recalc);
                        for (const t of this._columns) this._observer.observe(t)
                    } else
                        for (const t of this._columns) {
                            const e = document.createElement("iframe");
                            e.setAttribute("frameborder", "0"), e.className = "tv-sticky-columns__oldskool-resize-observer", t.insertBefore(e, t.firstChild), e.contentWindow && e.contentWindow.addEventListener("resize", this._recalc, !1), this._iframes.push(e)
                        }
                }
            }
            var ds = i(193742);
            i(397082), i(981409), i(129795), i(379481), i(716638), i(364830), i(734036), i(94691), i(249956), i(754080), i(391522), i(15993), i(885210), i(366768), i(917806), i(475781);
            const ps = window.initData;
            let fs = null;
            (0, s.initFromInitData)(), (0, c.enabled)(u.ProductFeatures.NO_SPONSORED_ADS) || (fs = new h), (0, r.whenDocumentReady)(async () => {
                ps.feed_meta ? new cs({
                    itemsMeta: ps.feed_meta,
                    url: ps.url,
                    symbolInfo: ps.symbolInfo,
                    adPlacement: fs,
                    contentLifecycleHook: m
                }) : m();
                const t = (ps.symbolInfo || {}).pro_symbol;
                if ((0, w.checkSymbol)(t), (0, d.initCategoryHeader)(t), (0, ds.tvSolutionLinkInit)(), ps.liveStreams && ps.liveStreams.length) {
                    (await Promise.all([i.e(61212), i.e(69756), i.e(36778), i.e(70650), i.e(62001), i.e(84044), i.e(7236), i.e(46641), i.e(789), i.e(73263), i.e(52778), i.e(89897), i.e(59576), i.e(82052), i.e(92219), i.e(11216), i.e(41153), i.e(10247), i.e(73362), i.e(45873), i.e(39554), i.e(25991), i.e(34056), i.e(72949)]).then(i.bind(i, 557668))).render(ps.liveStreams)
                }
            }); {
                const t = document.querySelector(".tv-sticky-columns");
                null !== t && new us(t)
            }! function() {
                const t = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
                let e = 0,
                    s = t[0];
                const r = n => {
                    n.code === s ? s === t[t.length - 1] ? (Promise.all([i.e(3712), i.e(17172)]).then(i.bind(i, 101580)).then(t => {
                        t.startGame()
                    }), document.removeEventListener("keydown", r)) : (e++, s = t[e]) : (e = 0, s = t[e])
                };
                document.addEventListener("keydown", r)
            }(), (0, Ui.initCategoryBrokerBrandingAnalytics)()
        },
        487021: (t, e, i) => {
            "use strict";
            var s = i(464079),
                r = i(971928),
                n = i(380238),
                o = i(918184);

            function a(t) {
                this.$el = t, this.$spinner = null, this.spinner = null
            }
            o.fn.tvFeed = (0, s.createTvBlockWithInstance)("tv-feed", (function(t) {
                return new a(t)
            })), a.prototype.startLoadSpinner = function(t = {}) {
                this.stopSpinner(!0), this.$spinner = o('<div class="tv-feed__preloader"></div>'), t.css && this.$spinner.css(t.css), this.$el.addClass("i-loading"), this.$el.append(this.$spinner), this.spinner = (new n.Spinner).spin(this.$spinner.get(0))
            }, a.prototype.startLoadMoreSpinner = function() {
                this.stopSpinner(!0), this.$spinner = o('<div class="tv-feed__preloader-wrapper" style="display :none;"><div class="tv-feed__preloader" style="left: 50%; top: 50%;"></div></div>'), this.$el.append(this.$spinner), this.$spinner.velocity("slideDown", {
                    duration: r.dur,
                    easing: "easeInOutQuad"
                }), this.spinner = (new n.Spinner).spin(this.$spinner.find(".tv-feed__preloader").get(0))
            }, a.prototype.stopSpinner = function(t = !1) {
                return t || this.$el.removeClass("i-loading"), this.spinner && (this.spinner.stop(), delete this.spinner), this.$spinner && (this.$spinner.remove(), delete this.$spinner), this
            }
        },
        350946: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                generateColor: () => r,
                alphaToTransparency: () => n,
                transparencyToAlpha: () => o,
                applyTransparency: () => a,
                resetTransparency: () => l,
                getLuminance: () => h,
                isHexColor: () => c,
                colorFromBackground: () => u,
                gradientColorAtPercent: () => d,
                isColorDark: () => p,
                rgbaFromInteger: () => f,
                rgbaToInteger: () => g,
                colorToInteger: () => m
            });
            var s = i(814563);

            function r(t, e, i) {
                if (e = e || 0, !c(t)) return i ? (0, s.rgbaToString)((0, s.rgba)((0, s.parseRgb)(t), (0, s.normalizeAlphaComponent)(o(e)))) : t;
                const [r, n, a] = (0, s.parseRgb)(t), l = (0, s.normalizeAlphaComponent)(o(e));
                return (0, s.rgbaToString)([r, n, a, l])
            }

            function n(t) {
                return 100 * (1 - t)
            }

            function o(t) {
                if (t < 0 || t > 100) throw new Error("invalid transparency");
                return 1 - t / 100
            }

            function a(t, e) {
                if ("transparent" === t) return t;
                const i = (0, s.parseRgba)(t),
                    r = i[3];
                return (0, s.rgbaToString)((0, s.rgba)(i[0], i[1], i[2], o(e) * r))
            }

            function l(t) {
                return "transparent" === t || c(t) ? t : (0, s.rgbaToString)((0, s.rgba)((0, s.parseRgb)(t), (0, s.normalizeAlphaComponent)(1)))
            }

            function h(t) {
                const e = (0, s.parseRgb)(t).map(t => (t /= 255) <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4));
                return Number((.2126 * e[0] + .7152 * e[1] + .0722 * e[2]).toFixed(3))
            }

            function c(t) {
                return 0 === t.indexOf("#")
            }

            function u(t) {
                return "black" === (0, s.rgbToBlackWhiteString)((0, s.parseRgb)(t), 150) ? "#ffffff" : "#000000"
            }

            function d(t, e, i) {
                const [r, n, o, a] = (0, s.parseRgba)(t), [l, h, c, u] = (0, s.parseRgba)(e), d = (0, s.rgba)(Math.round(r + i * (l - r)), Math.round(n + i * (h - n)), Math.round(o + i * (c - o)), a + i * (u - a));
                return (0, s.rgbaToString)(d)
            }

            function p(t) {
                return h(l(t)) < .5
            }

            function f(t) {
                const e = (t = Math.round(t)) % 256;
                t -= e;
                const i = (t /= 256) % 256;
                t -= i;
                const s = (t /= 256) % 256;
                t -= s;
                return `rgba(${e},${i},${s},${(t/=256)/255})`
            }

            function g(t) {
                const e = Math.round(255 * t[3]);
                return t[0] + 256 * t[1] + 65536 * t[2] + 16777216 * e
            }

            function m(t) {
                const e = (0, s.tryParseRgba)(t);
                return null === e ? 0 : g(e)
            }
        },
        780072: (t, e, i) => {
            "use strict";

            function s(t) {
                return ["forex", "bitcoin", "crypto"].includes(t)
            }
            i.d(e, {
                isCurrencySymbol: () => s
            })
        },
        317617: (t, e, i) => {
            "use strict";

            function s() {
                return Promise.all([i.e(70964), i.e(38817), i.e(91877), i.e(59456), i.e(25535), i.e(5058), i.e(11216), i.e(99752), i.e(64011), i.e(7562), i.e(21015)]).then(i.bind(i, 7828))
            }

            function r() {
                s().then(t => t.createIdcAgreementDialog().open())
            }

            function n(t) {
                return s().then(e => e.createIdcAgreementDelayDialog(t))
            }

            function o() {
                return s().then(t => t.createIdcDelayAddServiceDialog())
            }
            i.r(e), i.d(e, {
                showIdcAgreementDialog: () => r,
                createIdcDelayAgreementDialog: () => n,
                createIdcDelayAddServiceDialog: () => o
            })
        },
        24084: (t, e, i) => {
            "use strict";
            i.d(e, {
                getFormattedDateTimeForNews: () => n
            });
            var s = i(115055),
                r = i(210934);

            function n(t) {
                const e = new Date(t),
                    i = new s.TimeFormatter("%h:%m"),
                    n = r.dateFormatFunctions["MMM dd"](e, !0);
                return [i.formatLocal(e), n]
            }
        },
        526945: (t, e, i) => {
            "use strict";
            i.d(e, {
                getSymbolPagePath: () => o,
                makeSymbolChartUrl: () => p,
                makeSymbolFinancialsPageUrl: () => f,
                makeSymbolPageUrl: () => d,
                makeSymbolTimelinePageUrl: () => g,
                makeTemplateSymbolUrl: () => c
            });
            var s = i(744990);
            var r = i(450284),
                n = i(780072);

            function o(t, e) {
                return l(h(t, e), a(t))
            }

            function a(t) {
                const e = {
                    shortName: t.shortName,
                    exchange: t.exchange,
                    proName: t.proName,
                    type: t.type
                };
                return t.proName && t.proName.includes(":") && ([e.exchange, e.shortName] = t.proName.split(":")), e
            }

            function l(t, e) {
                const i = encodeURIComponent(e.shortName || ""),
                    s = encodeURIComponent(e.exchange || ""),
                    r = encodeURIComponent(e.proName || "");
                return t.replace("{tvexchange}", s).replace("{tvsymbol}", i).replace("{tvprosymbol}", r)
            }

            function h(t, e = "") {
                const i = ["UKOIL", "USOIL", "XAGAUD", "XAGCAD", "XAGCHF", "XAGEUR", "XAGGBP", "XAGHKD", "XAGJPY", "XAGUSD", "XAUAUD", "XAUCAD", "XAUCHF", "XAUEUR", "XAUGBP", "XAUHKD", "XAUJPY", "XAUNZD", "XAUUSD", "XPDUSD", "XPTUSD", "SPX"];
                return t.type && ["spread", "expression"].includes(t.type) ? t.proName ? "/symbols/spread/{tvprosymbol}/" + e : "/" + e : void 0 === t.shortName && void 0 === t.proName ? (console.warn("Params missed"), "/") : m(t) ? t.exchange ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : "/symbols/{tvsymbol}/" + e : t.exchange || t.proName ? t.shortName && i.includes(t.shortName) ? "/symbols/{tvsymbol}/" + e : "/symbols/{tvexchange}-{tvsymbol}/" + e : "/symbols/{tvsymbol}/" + e
            }

            function c(t, e) {
                let i = t;
                if (!/{tvsymbol}|{tvexchange}|{tvprosymbol}/.test(t)) {
                    let s = "tvprosymbol";
                    void 0 === e.proName && (s = "tvsymbol"), i = `${t}?tvwidgetsymbol={${s}}`
                }
                const s = l(i, a(e));
                if (!(0, r.isSafeUrl)(s)) throw new Error(`The symbol URL ${s} is not allowed.`);
                return s
            }

            function u(t, e, i, r) {
                const n = (window.locale_domains ? function(t, e) {
                    const i = e || window.locale || "en";
                    let s = t[i] ? t[i] : t.en;
                    return s = "tradingview.com" === s ? "www.tradingview.com" : s, s ? document.location.protocol + "//" + s : ""
                }(window.locale_domains, r) : window.location.origin) + l(t, a(e));
                return i ? (0, s.addUtmToUrl)(n, i) : n
            }

            function d(t, e, i, s) {
                return u(h(t, s), t, e, i)
            }

            function p(t, e) {
                return u("/chart/?symbol={tvprosymbol}", t, e)
            }

            function f(t, e, i) {
                return d(t, e, i, "financials-overview/")
            }

            function g(t, e, i) {
                return u(function(t) {
                    return t.exchange && !m(t) ? "/symbols/{tvexchange}-{tvsymbol}/history-timeline/" : "/symbols/{tvsymbol}/history-timeline/"
                }(t), t, e, i)
            }

            function m(t) {
                return !!t.type && (0, n.isCurrencySymbol)(t.type)
            }
        },
        904742: (t, e, i) => {
            "use strict";
            i.d(e, {
                hotlistsDefaults: () => h,
                HotlistsManager: () => d
            });
            var s = i(685864),
                r = i(328788),
                n = i(106798),
                o = i(533333),
                a = i(918184);
            const l = i(987380).getLogger("HotLists.Manager"),
                h = {
                    exchange: "US",
                    group: "volume_gainers"
                },
                c = i(954122),
                u = {};
            for (const [t, e] of Object.entries(c)) {
                const i = e.exchangesForHotlist || e.exchangesStocks;
                if (i)
                    for (const e of i) u[e] = t
            }
            class d {
                constructor() {
                    this.metainfoUrl = window.HOTLISTS_URL + "metainfo/", this.hotlistUrl = window.HOTLISTS_URL + "hotlist/"
                }
                get _emptyFlagId() {
                    return "mock"
                }
                get sortOptions() {
                    return {
                        percent_change_loosers: {
                            rule: "increase",
                            field: "change_percent"
                        },
                        percent_change_gainers: {
                            rule: "decrease",
                            field: "change_percent"
                        }
                    }
                }
                get groupsTitlesMap() {
                    return {
                        volume_gainers: a.t("Volume Gainers"),
                        percent_change_gainers: a.t("Percent Change Gainers"),
                        percent_change_loosers: a.t("Percent Change Losers"),
                        percent_range_gainers: a.t("Percent Range Gainers"),
                        percent_range_loosers: a.t("Percent Range Losers"),
                        gap_gainers: a.t("Gap Gainers"),
                        gap_loosers: a.t("Gap Losers"),
                        percent_gap_gainers: a.t("Percent Gap Gainers"),
                        percent_gap_loosers: a.t("Percent Gap Losers")
                    }
                }
                get compilations() {
                    return {
                        US: a.t("US Exchanges")
                    }
                }
                get availableExchanges() {
                    if (!this._availableExchanges) {
                        const t = Object.keys(u);
                        this._availableExchanges = this.sortExchanges(t)
                    }
                    return this._availableExchanges
                }
                sortExchanges(t) {
                    return t.sort((t, e) => "US" === t && "US" !== e ? -1 : "US" !== t && "US" === e || "AMEX" === t && "NYSE" === e ? 1 : "NYSE" === t && "AMEX" === e || "us" === this.getExchangeFlag(t) && "us" !== this.getExchangeFlag(e) ? -1 : "us" !== this.getExchangeFlag(t) && "us" === this.getExchangeFlag(e) ? 1 : this.getExchangeFullName(t).localeCompare(this.getExchangeFullName(e)))
                }
                isExchangeDistributed(t) {
                    return Boolean(u[t])
                }
                getOneHotlist(t, e, i) {
                    const r = (0, s.fetch)(`${this.hotlistUrl}${t}/${e}/`).then(t => t.json()).then(t => {
                        let s = t.symbols;
                        return i && (s = t.symbols.slice(0, i)), this.sortOptions[e] ? this.sortSymbolsByPercentChange(s, this.sortOptions[e].rule) : s
                    });
                    return r.catch(t => {
                        l.logError("Error while recieving hotlist: " + t)
                    }), r
                }
                sortSymbolsByPercentChange(t, e) {
                    let i, s = !1;
                    const r = new Promise((e, r) => {
                            i = setTimeout(() => {
                                s = !0, e(t)
                            }, 2e3)
                        }),
                        o = t.map(t => new Promise((e, i) => {
                            const r = (0, n.getQuoteSessionInstance)("simple"),
                                o = i => {
                                    const n = i && i.values && i.values.change_percent;
                                    n && (t.chp = i.values.change_percent), (n || s) && (r.unsubscribe("hotlists-manager", t.s, o), e(t))
                                };
                            r.subscribe("hotlists-manager", t.s, o)
                        })),
                        a = Promise.all(o);
                    return Promise.race([r, a]).then(t => (s || (clearTimeout(i), t.sort((t, i) => "decrease" === e ? i.chp - t.chp : "increase" === e ? t.chp - i.chp : 0)), t))
                }
                getExchangeName(t) {
                    const e = {
                        AMEX: "NYSE ARCA",
                        EURONEXT_BRU: "EURONEXTBRU",
                        EURONEXT_PAR: "EURONEXTPAR",
                        EURONEXT_AMS: "EURONEXTAMS",
                        EURONEXT_LIS: "EURONEXTLIS",
                        BCBA: "BYMA",
                        OSL: "EURONEXTOSE"
                    }[t] || t;
                    return this.compilations[t] ? this.compilations[t] : e
                }
                getExchangeFullName(t) {
                    const e = this.getExchangeName(t);
                    return `${this.getExchangeCountryName(e)} (${e})`
                }
                getExchangeFlag(t) {
                    return u[t] || this._emptyFlagId
                }
                getExchangeCountryName(t) {
                    const e = (0, r.getMarketsByScreenerType)("stock");
                    if ("US Exchanges" === t) return e.america.title;
                    for (const i in e)
                        if (e[i].stocks.includes(t)) return e[i].title;
                    return ""
                }
                getExchangeStockMarket(t) {
                    return o[t] || o.US
                }
                getStockMarketUrl(t, e = "") {
                    let i = `/markets/${this.getExchangeStockMarket(t)}/${e}`;
                    return e && (i += "/"), i
                }
                isFlagEmpty(t) {
                    return t === this._emptyFlagId
                }
            }
        },
        204860: (t, e, i) => {
            "use strict";
            i.d(e, {
                default: () => r
            });
            var s = i(918184);
            class r {
                constructor(t, e) {
                    e = e || {}, this._state = {}, this._url = t, this._itemsOffset = e.itemsLoad || e.offset + e.count || 0, this._itemsTotal = e.itemsTotal || e.total || 0, this._itemsLimit = e.itemsLimit || e.limit || 18, this._thatsAll = e.thatsAll || !1
                }
                setUrl(t) {
                    this._url = t
                }
                _getUrl(t) {
                    return this._url
                }
                setState(t) {
                    this._state = t
                }
                getState() {
                    return this._state
                }
                setStateParam(t, e) {
                    null == e ? delete this._state[t] : this._state[t] = e
                }
                getStateParam(t, e) {
                    return this._state[t]
                }
                updateState(t) {
                    const e = this.checkState(t);
                    return this._state = s.extend(this._state, t), e
                }
                checkState(t) {
                    t = t || {};
                    return Object.keys(t).some(e => this._state[e] !== t[e])
                }
                _getData(t) {
                    var e = t ? s.extend(!0, {}, this._state, t) : this._state;
                    return s.param(e)
                }
                _load(t, e = {}) {
                    if (this._promise && e.allowAbortPrevious && (this._jqAjax.abort(), delete this._promise), this._promise) return new Promise((t, e) => {
                        e("Two requests at the same time")
                    }); {
                        const i = e.ajaxPath ? this._resolveAjaxPath(e) : this._getUrl();
                        return this._promise = new Promise((e, r) => {
                            this._jqAjax = s.get(i, t).done((t, i, s) => {
                                const n = void 0 !== t.results.total,
                                    o = void 0 !== t.results.count,
                                    a = void 0 !== t.results.offset;
                                t.errors && "" !== t.errors ? r(t.errors) : n && o ? (this._itemsTotal = t.results.total || 0, this._itemsOffset += t.results.count, e([t, this._itemsOffset, this._itemsTotal])) : n && a ? (this._itemsTotal = t.results.total || 0, this._itemsOffset = t.results.offset, this._thatsAll = this._itemsTotal <= this._itemsOffset + this._itemsLimit, e([t, this._itemsOffset, this._itemsTotal])) : (this._itemsTotal = 1 / 0, this._itemsOffset += t.results.count, this._thatsAll = !!t.results.thats_all, e([t, this._itemsOffset]))
                            }).fail((t, i, s) => {
                                if (403 === t.status) try {
                                    const i = JSON.parse(t.responseText);
                                    if (i.results) return void e([i, 0])
                                } catch (t) {}
                                r(t.statusText || i, t)
                            }).always(() => {
                                delete this._promise
                            })
                        }), this._promise
                    }
                }
                _resolveAjaxPath(t) {
                    throw Error("Not implemented")
                }
                isLoading() {
                    return !!this._promise
                }
                load(t, e) {
                    return this._itemsOffset = 0, this._itemsTotal = 0, this._thatsAll = !1, this._load(this._getData(e), t)
                }
                resetItems() {
                    this._itemsOffset = 0, this._itemsTotal = 0
                }
                allItemsLoaded() {
                    return this._itemsOffset >= this._itemsTotal || this._thatsAll
                }
                nextPage(t, e) {
                    let i = this._getData(t);
                    return "" !== i && (i += "&"), i += "s=" + this._itemsOffset, this._load(i, e)
                }
                loadPage(t, e, i) {
                    return this._itemsOffset = (parseInt(t, 10) - 1) * this._itemsLimit, this.nextPage(e, i)
                }
            }
        },
        170797: (t, e, i) => {
            "use strict";
            i.d(e, {
                Tabs: () => v
            });
            i(716638);
            var s, r = i(416282),
                n = i(195355),
                o = i(971928),
                a = i(821318),
                l = i(896276),
                h = i.n(l),
                c = i(703181),
                u = i(194803),
                d = i(342098),
                p = i(582755),
                f = i(468450);
            ! function(t) {
                t[t.Left = 0] = "Left", t[t.Right = 1] = "Right"
            }(s || (s = {}));
            const g = {
                    saveTab: "",
                    noSlider: !1,
                    onTabClick: !1,
                    loadedClass: "i-loaded",
                    tabsContainerClass: "tv-tabs",
                    tabClass: "tv-tabs__tab",
                    tabDisabledClass: "disabled",
                    activeTabClass: "i-active",
                    activePageClass: "active",
                    sliderClass: "tv-tabs__slider",
                    scrollBoxClass: "tv-tabs__scroll-box",
                    scrollWrapClass: "tv-tabs__scroll-wrap",
                    lArrowClass: "tv-tabs__left-arrow",
                    rArrowClass: "tv-tabs__right-arrow"
                },
                m = c,
                _ = u;
            class v {
                constructor(t, e, i = {}) {
                    this._animating = !1, this._prevWidth = -1, this._bindings = [], this._options = (0, a.deepExtend)({}, g, i), this.tabChanged = new(h()), this._elTabs = t, this._elPages = e, this._elScrollWrap = b(this._options.scrollWrapClass || "", this._elTabs, "wrapInner"), this._elScrollBox = b(this._options.scrollBoxClass || "", this._elScrollWrap, "wrapInner"), this._options.noSlider || (this._elSlider = b(this._options.sliderClass || "", this._elScrollBox, "append")), n.mobiletouch || (this._elArrowLeft = b(this._options.lArrowClass || "", this._elTabs, "append", `<div class="${this._options.lArrowClass||""} i-slided">${m}</div>`), this._elArrowRight = b(this._options.rArrowClass || "", this._elTabs, "append", `<div class="${this._options.rArrowClass||""} i-slided">${_}</div>`), this._addClass(this._elArrowLeft, this._options.addLeftArrowsClass), this._addClass(this._elArrowRight, this._options.addRightArrowsClass)), this._addClass(this._elScrollBox, this._options.addScrollBoxClass), this._addClass(this._elSlider, this._options.addSliderClass), this._addClass(this._elTabs, this._options.tabsContainerClass), this._addClass(this.getTabsArray(), this._options.tabClass), this._addClass(this._elTabs, this._options.loadedClass), this.checkScrollArrows(!0), this._initActivePage(), this._bindEvents()
                }
                getTabsArray() {
                    const t = this._elScrollBox.children;
                    if (!this._options.sliderClass) return Array.prototype.slice.call(t);
                    const e = [];
                    for (let i = 0; i < t.length; i++) {
                        const s = t[i];
                        C(s, this._options.sliderClass) || e.push(s)
                    }
                    return e
                }
                getPagesArray() {
                    return this._elPages ? Array.prototype.slice.call(this._elPages.children) : []
                }
                getElTabs() {
                    return this._elTabs
                }
                getElPages() {
                    return this._elPages
                }
                checkScrollArrows(t = !1) {
                    const e = Math.ceil(this._elScrollWrap.scrollLeft),
                        i = y(this._elScrollWrap),
                        r = this._elScrollWrap.scrollWidth - i - 2;

                    function n(t) {
                        S(t, "i-slided"), t.style.transition = ""
                    }

                    function o(e, i) {
                        w(e, "i-slided"), t && (e.style.transition = "none")
                    }
                    this._elArrowLeft && (e >= 1 ? n(this._elArrowLeft) : (e <= 1 || this._elScrollWrap.scrollWidth <= i) && o(this._elArrowLeft, s.Left)), this._elArrowRight && (r - e > 1 ? n(this._elArrowRight) : (e >= r || this._elScrollWrap.scrollWidth <= i) && o(this._elArrowRight, s.Right))
                }
                index() {
                    const t = this.getElActiveTab();
                    return t ? this.getTabsArray().indexOf(t) : -1
                }
                getElActiveTab() {
                    return this._getActiveElement(this.getTabsArray(), this._options.activeTabClass || "", this._options.inactiveTabClass)
                }
                getElActivePage() {
                    return this._getActiveElement(this.getPagesArray(), this._options.activePageClass || "", this._options.inactivePageClass)
                }
                setActivePage(t, e, i) {
                    if (-1 === t || t === this.index() && !i) return;
                    const s = this.index();

                    function r(e, i, s) {
                        e.forEach((e, r) => {
                            const n = t === r;
                            i && x(e, i, n), s && x(e, s, !n)
                        })
                    }
                    r(this.getTabsArray(), this._options.activeTabClass, this._options.inactiveTabClass), r(this.getPagesArray(), this._options.activePageClass, this._options.inactivePageClass), this._options.noSlider || this.updateSlider(s, t, e), this._options.saveTab && d.setValue(this._options.saveTab, t), this.tabChanged.fire(t)
                }
                updateSlider(t, e, i) {
                    if (this._options.noSlider) return;
                    const s = this.getTabsArray()[e];
                    if (0 === s.clientWidth || 0 === s.clientHeight || "none" === window.getComputedStyle(s).getPropertyValue("display")) return;
                    const r = window.getComputedStyle(s);
                    let n = s.offsetLeft + parseInt(r.getPropertyValue("padding-left")),
                        a = y(s);
                    const l = s.querySelector(".js-tabs__slider-pos");
                    if (l) {
                        const t = window.getComputedStyle(l);
                        n += parseInt(t.getPropertyValue("padding-left")) + l.offsetLeft, a -= a - y(l)
                    }
                    if (i = i || -1 === t || document.all && !window.atob) this._elSlider.style.left = n + "px", this._elSlider.style.width = a + "px";
                    else {
                        this._animating = !0;
                        const t = parseInt(getComputedStyle(this._elSlider).left),
                            e = parseInt(getComputedStyle(this._elSlider).width);
                        (0, f.doAnimate)({
                            from: t,
                            to: n,
                            duration: o.dur,
                            onStep: (t, e) => {
                                this._elSlider.style.left = e + "px"
                            }
                        }), (0, f.doAnimate)({
                            from: e,
                            to: a,
                            duration: o.dur,
                            onStep: (t, e) => {
                                this._elSlider.style.width = e + "px"
                            },
                            onComplete: () => {
                                this._animating = !1
                            }
                        })
                    }
                }
                onTabClick(t) {
                    const e = t.currentTarget || t.target,
                        i = this.getTabsArray().indexOf(e); - 1 === i || this._isTabDisabled(e) || this.setActivePage(i), document.activeElement.blur(), t.preventDefault()
                }
                resizeSlider() {
                    if (this._options.noSlider) return;
                    const t = this._elTabs.offsetWidth;
                    if (t === this._prevWidth) return;
                    this._prevWidth = t;
                    const e = this.index();
                    this.updateSlider(e, e, !0)
                }
                count() {
                    return this.getTabsArray().length
                }
                add(t, e) {
                    this._elScrollBox.appendChild(t), this._elPages && e && this._elPages.appendChild(e), this._bindTabEvents(t), this.checkScrollArrows(!0)
                }
                remove(t) {
                    function e(t) {
                        t.parentElement && t.parentElement.removeChild(t)
                    }
                    const i = this.tabAt(t);
                    i && (this._unbindTabEvents(i), e(i));
                    const s = this.pageAt(t);
                    s && e(s);
                    const r = t - 1 >= 0 ? t - 1 : 0;
                    this.setActivePage(r), this.checkScrollArrows(!0)
                }
                indexOfTab(t) {
                    return this.getTabsArray().indexOf(t)
                }
                indexOfPage(t) {
                    return this.getPagesArray().indexOf(t)
                }
                pageAt(t) {
                    return this.getPagesArray()[t] || null
                }
                tabAt(t) {
                    return this.getTabsArray()[t] || null
                }
                deselect() {
                    const t = this.getElActiveTab();
                    this._options.activeTabClass && t && S(t, this._options.activeTabClass);
                    const e = this.getElActivePage();
                    return this._options.activePageClass && e && S(e, this._options.activePageClass), this._elSlider && (this._elSlider.style.left = "", this._elSlider.style.width = ""), this
                }
                stop() {
                    this._unbindEvents({})
                }
                _addClass(t, e) {
                    "string" == typeof e && (Array.isArray(t) || (t = [t]), t.forEach(t => {
                        w(t, e)
                    }))
                }
                _initActivePage() {
                    let t = 0;
                    this._options.saveTab && (t = d.getInt(this._options.saveTab, 0));
                    const e = this.index(); - 1 !== e && (t = e), void 0 !== this._options.activeTab && (t = this._options.activeTab), this.setActivePage(t, !0, !0)
                }
                _bindEvents() {
                    this.getTabsArray().forEach(this._bindTabEvents.bind(this)), this._bindOneEvent({
                        eventName: "scroll",
                        listener: this.checkScrollArrows.bind(this, !1),
                        target: this._elScrollWrap
                    }), this._elArrowLeft && this._bindOneEvent({
                        eventName: "click",
                        listener: () => {
                            const t = this.getTabsArray();
                            let e = 0,
                                i = !1;
                            const s = this._elScrollWrap.scrollLeft;
                            (0, p.isRtl)() && t.reverse(), t.forEach(t => {
                                if (i) return;
                                const r = t.offsetLeft + t.offsetWidth;
                                r > s ? i = !0 : e = r
                            }), (0, f.doAnimate)({
                                from: this._elScrollWrap.scrollLeft,
                                to: this._elScrollWrap.scrollLeft + Math.floor(e - s - y(this._elArrowLeft)),
                                duration: o.dur / 2,
                                onStep: (t, e) => {
                                    this._elScrollWrap.scrollLeft = e
                                }
                            })
                        },
                        target: this._elArrowLeft
                    }), this._elArrowRight && this._bindOneEvent({
                        eventName: "click",
                        listener: () => {
                            const t = this.getTabsArray();
                            let e = 0;
                            const i = (0, p.isRtl)() ? 0 : this._elScrollWrap.scrollLeft + y(this._elScrollWrap);
                            (0, p.isRtl)() && t.reverse(), t.forEach(t => {
                                if (0 !== e) return;
                                const s = t.offsetLeft + t.offsetWidth;
                                s > i && (e = s)
                            }), (0, f.doAnimate)({
                                from: this._elScrollWrap.scrollLeft,
                                to: this._elScrollWrap.scrollLeft + Math.ceil(e - i + y((0, r.ensureDefined)(this._elArrowRight))),
                                duration: o.dur / 2,
                                onStep: (t, e) => {
                                    this._elScrollWrap.scrollLeft = e
                                }
                            })
                        },
                        target: this._elArrowRight
                    });
                    const t = Array.prototype.slice.call(this._elTabs.querySelectorAll(".js-tabs__slider-hover") || []);
                    t.length && t.forEach(t => this._bindOneEvent({
                        eventName: "mouseenter",
                        listener: t => {
                            if (this._animating) return;
                            const e = t.currentTarget;
                            e && this._options.activeTabClass && C(e, this._options.activeTabClass) && this._hoverSlider(e)
                        },
                        target: t
                    }));
                    let e = null;
                    const i = () => {
                        e = null, this.checkScrollArrows(!0), this._options.noSlider || this.resizeSlider()
                    };
                    this._bindOneEvent({
                        eventName: "resize",
                        listener: () => {
                            null === e && (e = window.requestAnimationFrame(i))
                        },
                        target: window
                    })
                }
                _bindTabEvents(t) {
                    this._bindOneEvent({
                        eventName: "click",
                        listener: t => {
                            "function" == typeof this._options.onTabClick ? this._options.onTabClick(t) : this.onTabClick(t)
                        },
                        target: t
                    })
                }
                _unbindTabEvents(t) {
                    this._unbindEvents({
                        target: t
                    })
                }
                _bindOneEvent(t) {
                    t.target.addEventListener(t.eventName, t.listener), this._bindings.push(t)
                }
                _unbindEvents(t) {
                    const e = e => !(void 0 !== e.eventName && e.eventName !== t.eventName || void 0 !== e.target && e.target !== t.target || void 0 !== e.listener && e.listener !== t.listener);
                    this._bindings.filter(e).forEach(t => t.target.removeEventListener(t.eventName, t.listener)), this._bindings = this._bindings.filter(t => !e(t))
                }
                _getActiveElement(t, e, i) {
                    return t.filter(t => e ? C(t, e) : !!i && !C(t, i))[0] || null
                }
                _isTabDisabled(t) {
                    return C(t, "i-disabled") || this._options.tabDisabledClass && C(t, this._options.tabDisabledClass) || t.hasAttribute("disabled")
                }
                _hoverSlider(t) {
                    const e = y(t),
                        i = window.getComputedStyle(t),
                        s = t.offsetLeft + parseInt(i.getPropertyValue("padding-left")) + parseInt(i.getPropertyValue("margin-left"));
                    (0, f.doAnimate)({
                        from: parseInt(getComputedStyle(this._elSlider).left),
                        to: s,
                        duration: o.dur / 4,
                        onStep: (t, e) => {
                            this._elSlider.style.left = e + "px"
                        }
                    }), (0, f.doAnimate)({
                        from: parseInt(getComputedStyle(this._elSlider).width),
                        to: e,
                        duration: o.dur / 4,
                        onStep: (t, e) => {
                            this._elSlider.style.width = e + "px"
                        }
                    });
                    const r = () => {
                        this.getElActiveTab() === t && this._unhoverSlider(t), t.removeEventListener("mousleave", r)
                    };
                    t.addEventListener("mouseleave", r)
                }
                _unhoverSlider(t) {
                    const e = window.getComputedStyle(t),
                        i = t.querySelector(".js-tabs__slider-pos"),
                        s = window.getComputedStyle(i),
                        r = t.offsetLeft + parseInt(e.getPropertyValue("padding-left")) + parseInt(e.getPropertyValue("margin-left")) + parseInt(s.getPropertyValue("padding-left")) + i.offsetLeft,
                        n = y(t),
                        a = n - (n - y(i));
                    (0, f.doAnimate)({
                        from: parseInt(getComputedStyle(this._elSlider).left),
                        to: r,
                        duration: o.dur / 2,
                        onStep: (t, e) => {
                            this._elSlider.style.left = e + "px"
                        }
                    }), (0, f.doAnimate)({
                        from: parseInt(getComputedStyle(this._elSlider).width),
                        to: a,
                        duration: o.dur / 2,
                        onStep: (t, e) => {
                            this._elSlider.style.width = e + "px"
                        }
                    })
                }
            }

            function y(t) {
                if (0 === t.offsetWidth) return 0; {
                    const e = window.getComputedStyle(t);
                    return t.offsetWidth - parseFloat(e.getPropertyValue("padding-left")) - parseFloat(e.getPropertyValue("padding-right")) - parseFloat(e.getPropertyValue("border-left-width")) - parseFloat(e.getPropertyValue("border-right-width"))
                }
            }

            function b(t, e, i, s) {
                let r = e.querySelector("." + t);
                if (!r) {
                    const n = document.createElement("div");
                    if (n.innerHTML = s || `<div class="${t}"></div>`, r = n.firstElementChild, "append" === i) e.appendChild(r);
                    else {
                        if ("wrapInner" !== i) throw new Error("Unknown insertMethod"); {
                            const t = Array.prototype.slice.call(e.childNodes);
                            for (let e = 0; e < t.length; e++) r.appendChild(t[e]);
                            e.appendChild(r)
                        }
                    }
                }
                return r
            }

            function w(t, e) {
                t.classList.add(...M(e))
            }

            function S(t, e) {
                t.classList.remove(...M(e))
            }

            function C(t, e) {
                return M(e).every(e => t.classList.contains(e))
            }

            function x(t, e, i) {
                M(e).forEach(e => t.classList.toggle(e, i))
            }

            function M(t) {
                return t.split(/\s+/)
            }
        },
        764075: (t, e, i) => {
            "use strict";
            i.d(e, {
                timeFrames: () => r
            });
            var s = i(120220);
            const r = {
                "1d": {
                    text: (0, s.t)("1D"),
                    value: {
                        value: "1D",
                        type: "period-back"
                    },
                    targetResolution: "1",
                    description: (0, s.t)("%d day", {
                        plural: "%d days",
                        count: 1
                    }).replace("%d", "1")
                },
                "5d": {
                    text: (0, s.t)("5D"),
                    value: {
                        value: "5D",
                        type: "period-back"
                    },
                    targetResolution: "5",
                    description: (0, s.t)("%d day", {
                        plural: "%d days",
                        count: 5
                    }).replace("%d", "5")
                },
                "1m": {
                    text: (0, s.t)("1M"),
                    value: {
                        value: "1M",
                        type: "period-back"
                    },
                    targetResolution: "30",
                    description: (0, s.t)("%d month", {
                        plural: "%d months",
                        count: 1
                    }).replace("%d", "1")
                },
                "3m": {
                    text: (0, s.t)("3M"),
                    value: {
                        value: "3M",
                        type: "period-back"
                    },
                    targetResolution: "60",
                    description: (0, s.t)("%d month", {
                        plural: "%d months",
                        count: 3
                    }).replace("%d", "3")
                },
                "6m": {
                    text: (0, s.t)("6M"),
                    value: {
                        value: "6M",
                        type: "period-back"
                    },
                    targetResolution: "120",
                    description: (0, s.t)("%d month", {
                        plural: "%d months",
                        count: 6
                    }).replace("%d", "6")
                },
                ytd: {
                    text: (0, s.t)("YTD"),
                    value: {
                        value: "YTD",
                        type: "period-back"
                    },
                    targetResolution: "1D"
                },
                "12m": {
                    text: (0, s.t)("1Y"),
                    value: {
                        value: "12M",
                        type: "period-back"
                    },
                    targetResolution: "1D",
                    description: (0, s.t)("%d year", {
                        plural: "%d years",
                        count: 1
                    }).replace("%d", "1")
                },
                "60m": {
                    text: (0, s.t)("5Y"),
                    value: {
                        value: "60M",
                        type: "period-back"
                    },
                    targetResolution: "1W",
                    description: (0, s.t)("%d year", {
                        plural: "%d years",
                        count: 5
                    }).replace("%d", "5")
                },
                all: {
                    text: (0, s.t)("All"),
                    value: {
                        value: "ALL",
                        type: "period-back"
                    },
                    targetResolution: "1M"
                }
            }
        },
        347251: (t, e, i) => {
            "use strict";
            i.d(e, {
                miniTimeFrameOptions: () => a
            });
            var s = i(764075);
            const r = Date.now();

            function n(t) {
                const e = new Date(r);
                return e.setMonth(e.getMonth() - t), Math.trunc(e.valueOf() / 1e3)
            }

            function o(t) {
                const e = new Date(r);
                return e.setFullYear(e.getFullYear() - t), Math.trunc(e.valueOf() / 1e3)
            }
            const a = [{ ...s.timeFrames["1d"]
            }, { ...s.timeFrames["1m"],
                targetResolution: "1D",
                from: n(1)
            }, { ...s.timeFrames["3m"],
                targetResolution: "1D",
                from: n(3)
            }, { ...s.timeFrames["12m"],
                from: o(1)
            }, { ...s.timeFrames["60m"],
                targetResolution: "1M",
                from: o(5)
            }, { ...s.timeFrames.all
            }];
            s.timeFrames["1d"], s.timeFrames["1m"], n(1),
                s.timeFrames["3m"], n(3), s.timeFrames["12m"], o(1), s.timeFrames["60m"], o(5), s.timeFrames.all
        },
        901694: (t, e, i) => {
            "use strict";

            function s(t) {
                let e;
                if ("object" != typeof t || null == t || "number" == typeof t.nodeType) e = t;
                else if (t instanceof Date) e = new Date(t.valueOf());
                else if (Array.isArray(t)) {
                    e = [];
                    let i = 0;
                    const r = t.length;
                    for (; i < r; i++) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = s(t[i]))
                } else {
                    e = {};
                    for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = s(t[i]))
                }
                return e
            }
            i.d(e, {
                deepCopy: () => s
            })
        },
        37945: (t, e, i) => {
            "use strict";

            function s(t, e) {
                const i = Object.create(Object.getPrototypeOf(t));
                for (const s of e) Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s]);
                return i
            }
            i.d(e, {
                pickFields: () => s
            })
        },
        436170: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                htmlEscape: () => n,
                removeTags: () => o,
                removeSpaces: () => a,
                capitalizeFirstLetterInWord: () => l
            });
            const s = /[<"'&>]/g,
                r = t => `&#${t.charCodeAt(0)};`;

            function n(t) {
                return t.replace(s, r)
            }

            function o(t = "") {
                return t.replace(/(<([^>]+)>)/gi, "")
            }

            function a(t = "") {
                return t.replace(/\s+/g, "")
            }

            function l(t = "") {
                return t.replace(/\b\w/g, t => t.toUpperCase())
            }
        },
        450284: (t, e, i) => {
            "use strict";

            function s(t) {
                const e = document.createElement("a");
                return e.href = t, l(e) && a(e) && o(e)
            }

            function r(t) {
                const e = document.createElement("a");
                return e.href = t, a(e) && o(e)
            }

            function n(t) {
                return !t.split(/(\s+)/).filter(t => t.trim().length > 0).some(t => {
                    try {
                        const e = new URL(t);
                        return !(!e || !e.hostname.length) && !r(t)
                    } catch (t) {
                        return !1
                    }
                })
            }
            i.d(e, {
                isInternalUrl: () => s,
                isSafeUrl: () => r,
                validateUrlsInText: () => n,
                isInternalHost: () => h
            });
            const o = t => !t.username,
                a = t => "http:" === t.protocol || "https:" === t.protocol,
                l = t => t.hostname === location.hostname || !/^\d+\.\d+\.\d+\.\d+$/.test(t.hostname) && h(t.hostname);

            function h(t, e = window.location.hostname) {
                const i = "." === e.slice(-1) ? 3 : 2,
                    s = e.toLowerCase().split(".").slice(-i),
                    r = t.toLowerCase().split(".").slice(-s.length);
                return s.join(".") === r.join(".")
            }
        },
        744990: (t, e, i) => {
            "use strict";
            i.d(e, {
                addUtmToUrl: () => r
            });
            var s = i(661424);

            function r(t, e) {
                if (!/([a-zA-Z0-9.-]*tradingview.com)|localhost/.test(t)) return t;
                const i = (0, s.buildUtmQueryString)(e);
                if ("" === i) return t;
                const r = t.indexOf("?"),
                    n = t.indexOf("#"),
                    o = -1 !== n;
                if (-1 !== r && (!o || r < n)) {
                    return `${t.slice(0,r)}?${o?t.slice(r+1,n):t.slice(r+1)}&${i}${o?t.slice(n):""}`
                }
                if (o) {
                    return `${t.slice(0,n)}?${i}${t.slice(n)}`
                }
                return `${t}?${i}`
            }
        },
        473018: (t, e, i) => {
            "use strict";

            function s(t) {
                return "?exchange=" + t
            }
            i.d(e, {
                getExchangeSearchString: () => s
            })
        },
        661424: (t, e, i) => {
            "use strict";
            i.d(e, {
                filterUtmInfo: () => o,
                buildUtmQueryString: () => a,
                buildUtmQueryStringFromUrlParams: () => l
            });
            var s = i(417238),
                r = i(436170);
            const n = ["utm_source", "utm_medium", "utm_campaign"];

            function o(t) {
                const e = {};
                return n.forEach(i => {
                    const s = t[i];
                    "string" == typeof s && "" !== s && (e[i] = (0, r.htmlEscape)(s))
                }), e
            }

            function a(t, e = !1) {
                const i = (0, s.createUrlParams)(t);
                return i && e ? "?" + i : i
            }

            function l(t) {
                return a(o((0, s.getUrlParams)()), t)
            }
        },
        851943: (t, e, i) => {
            "use strict";

            function s(t) {
                if (t.includes("|")) {
                    const [e, i] = t.split("|"), {
                        proName: s,
                        shortName: n
                    } = r(e);
                    return {
                        proName: s,
                        shortName: n,
                        interval: i
                    }
                } {
                    const {
                        proName: e,
                        shortName: i
                    } = r(t);
                    return {
                        proName: e,
                        shortName: i,
                        interval: void 0
                    }
                }
            }

            function r(t) {
                let e, i;
                return t.includes(":") ? (i = t.split(":")[1], e = t) : i = t, {
                    proName: e,
                    shortName: i
                }
            }
            i.d(e, {
                getSymbolDataFromSymbolString: () => s,
                getShortNameAndProName: () => r
            })
        },
        202441: (t, e, i) => {
            "use strict";
            i.d(e, {
                isCountryCode: () => a,
                toCountryCode: () => l,
                getIsoCountryCodeFromLocale: () => h
            });
            var s = i(987380),
                r = i(110334);
            const n = (0, s.getLogger)("Lib.CountryCode"),
                o = /^[A-Z]{2}$/;

            function a(t) {
                return o.test(t)
            }

            function l(t) {
                if (a(t)) return t;
                throw new Error("Invalid country code")
            }

            function h(t) {
                var e, i;
                try {
                    return l(null === (i = null === (e = r[t]) || void 0 === e ? void 0 : e.geoip_code) || void 0 === i ? void 0 : i.toUpperCase())
                } catch (e) {
                    return n.logError(`Get ISO country code from locale "${t}" failed: ${e.message}`), l(r.en.geoip_code.toUpperCase())
                }
            }
        },
        337891: (t, e, i) => {
            "use strict";
            i.d(e, {
                getEmbedDeprecatedExchanges: () => r
            });
            const s = JSON.parse('["BAHRAIN","BCBA","BYMA","BCS","BELEX","BME","BMFBOVESPA","BMV","BVC","BVL","DFM","EURONEXT_AMS","EURONEXT_BRU","EURONEXT_LIS","EURONEXT_PAR","EURONEXTAMS","EURONEXTBRU","EURONEXTLIS","EURONEXTPAR","OSE","OSL","FSE","GPW","HKEX","HOSE","IDX","ICESG","JSE","MOEX","MYX","NAG","NSENG","NZX","OMXCOP","OMXHEX","OMXICE","OMXRSE","OMXSTO","OMXTSE","OMXVSE","QSE","SAPSE","SET","SGX","SIX","SSE","SZSE","TADAWUL","TSE","TWSE"]');

            function r(t) {
                const e = s.slice();
                return t && ["abrilcombr", "forbescombr", "moneytimescombr", "marcopolocombr", "novafutura", "bovespa", "seudinheiro", "spacemoneycombr", "theo3combr", "vocesaabrilcombr", "xpicombr", "genialinvestimentos"].includes(t) && e.splice(e.indexOf("BMFBOVESPA"), 1), "ambito" === t && e.splice(e.indexOf("BCBA"), 1), "hegnarno" === t && e.splice(e.indexOf("OSL"), 1), t && ["cincodias", "elespanolcom", "elpaisfinanciero", "lainformacioncom", "copees"].includes(t) && e.splice(e.indexOf("BME"), 1), t && ["riyadhcapitalD", "riyadhcapitalRT"].includes(t) && e.splice(e.indexOf("TADAWUL"), 1), e
            }
        },
        250401: (t, e, i) => {
            "use strict";
            i.d(e, {
                initImageLoad: () => l
            });
            var s, r = i(968724);
            let n;
            if (function(t) {
                    t[t.RootMargin = screen.height] = "RootMargin", t[t.RootMarginMobile = Math.ceil(screen.height / 2)] = "RootMarginMobile"
                }(s || (s = {})), "IntersectionObserver" in window) {
                const t = {
                        root: null,
                        rootMargin: (r.CheckMobile.any() ? s.RootMarginMobile : s.RootMargin) + "px",
                        threshold: 0
                    },
                    e = new IntersectionObserver(t => {
                        for (const i of t) i.isIntersecting && (o(i.target), e.unobserve(i.target))
                    }, t);
                n = t => {
                    e.observe(t)
                }
            } else n = t => {
                o(t)
            };

            function o(t) {
                if (t.dataset.src) a(t);
                else {
                    const e = t.querySelectorAll("img[data-src], source[data-src]");
                    for (let t = 0; t < e.length; t++) a(e[t])
                }
            }

            function a(t) {
                const e = t.dataset.src;
                if (void 0 === e) return;
                const i = e.split(",");
                1 === i.length ? "IMG" === t.nodeName ? t.src = e : t.srcset = e : (t.srcset = e, t.src = i[i.length - 1].trim().split(" ")[0])
            }
            const l = n
        },
        432166: (t, e, i) => {
            "use strict";

            function s(t) {
                return "typespecs" in t ? t.typespecs.includes("covid19") : t.proName.startsWith("COVID19:")
            }
            i.d(e, {
                isCovid19Symbol: () => s
            })
        },
        159091: (t, e, i) => {
            "use strict";
            i.d(e, {
                setFixedBodyState: () => a
            });
            var s = i(751193),
                r = i(801369);
            let n = 0,
                o = !1;

            function a(t) {
                const {
                    body: e
                } = document, i = e.querySelector(".widgetbar-wrap");
                if (t && 1 == ++n) {
                    const t = (0,
                            s.getCSSProperty)(e, "overflow"),
                        r = (0, s.getCSSPropertyNumericValue)(e, "padding-right");
                    "hidden" !== t.toLowerCase() && e.scrollHeight > e.offsetHeight && ((0, s.setStyle)(i, "right", (0, s.getScrollbarWidth)() + "px"), e.style.paddingRight = r + (0, s.getScrollbarWidth)() + "px", o = !0), e.classList.add("i-no-scroll")
                } else if (!t && n > 0 && 0 == --n && (e.classList.remove("i-no-scroll"), o)) {
                    (0, s.setStyle)(i, "right", "0px");
                    let t = 0;
                    t = (0, r.getWidgetBarPadding)((0, s.getContentWidth)(i) || 0), e.scrollHeight <= e.clientHeight && (t -= (0, s.getScrollbarWidth)()), e.style.paddingRight = (t < 0 ? 0 : t) + "px", o = !1
                }
            }
        },
        168403: (t, e, i) => {
            "use strict";
            i.d(e, {
                getTradingViewNewsItems: () => c,
                getTradingViewLatestNewsItem: () => u
            });
            var s = i(110164),
                r = i(685864),
                n = i(48370),
                o = i(417238),
                a = i(17125),
                l = i(312232),
                h = i(202441);
            async function c(t) {
                const e = window.NEWS_SERVICE_URL + "/headlines/?",
                    i = Date.now(),
                    n = await (0, r.fetch)(e + (0, o.createUrlParams)(t)),
                    a = Date.now() - i;
                if (s.telemetry.sendReport("news", "api_time_frame", {
                        value: a
                    }), s.telemetry.sendReport("news", "api_http_status", {
                        value: n.status
                    }), !n.ok) {
                    const t = await n.text();
                    throw Error(`Error while fetch ${n.url}. Response status ${n.status} ${n.statusText}. Response text: '${t}'`)
                }
                return (await n.json()).map(e => ({ ...(0, l.newsItemTransform)(e),
                    ...t
                }))
            }

            function u(t) {
                const e = window.NEWS_SERVICE_URL + "/headlines/latest/?",
                    i = (0, o.createUrlParams)({
                        lang: t.lang || (0, n.getIsoLanguageCodeFromLanguage)(window.language),
                        symbol: (0, a.handleNewsProName)(t.symbol, t.type),
                        client: "web",
                        country: t.country || (0, h.getIsoCountryCodeFromLocale)(window.locale)
                    });
                return (0, r.fetch)(`${e}${i}`, {
                    signal: t.signal
                }).then(t => t.json())
            }
        },
        132223: (t, e, i) => {
            "use strict";
            i.d(e, {
                manageNewsItemClick: () => l
            });
            var s = i(650182),
                r = i(17125);

            function n(t) {
                if (! function(t) {
                        return Boolean(t.permission && "headline" === t.permission)
                    }(t) || window.is_authenticated) return t.astDescription
            }

            function o(t) {
                return Boolean(t.permission && "preview" === t.permission)
            }

            function a(t) {
                return Promise.all([i.e(99459), i.e(51219), i.e(26822), i.e(74814), i.e(18436), i.e(96271), i.e(78895), i.e(53471), i.e(25834), i.e(99316), i.e(11216), i.e(33660), i.e(94664)]).then(i.bind(i, 517573)).then(e => e.openTradingViewNewsDescriptionDialogImpl(t))
            }

            function l(t, e = null, i = null) {
                (0, s.trackNewsClick)({
                    category: t.category,
                    country: t.country,
                    language: t.locale,
                    link: null,
                    news_id: e,
                    provider: i || t.source,
                    symbol: t.proSymbol
                }), t.astDescription && function(t) {
                    const e = (0, r.getStoryPageUrl)(t.id, t.title),
                        i = () => a({ ...t,
                            storyPage: e
                        });
                    if (window.is_authenticated || !("permission" in t)) i();
                    else {
                        const s = n(t);
                        a({ ...t,
                            isPreview: o(t),
                            astDescription: s,
                            storyPage: s && e,
                            onShowDescriptionClick: i
                        })
                    }
                }(t)
            }
        },
        312232: (t, e, i) => {
            "use strict";
            i.d(e, {
                prepareAstDescription: () => o,
                newsItemTransform: () => a
            });
            var s = i(526945),
                r = i(851943),
                n = i(331565);

            function o(t) {
                if (void 0 !== t.children) return function t(e) {
                    for (const i of e)
                        if ("string" != typeof i)
                            if ("table" !== i.type) {
                                if (i.children && t(i.children), "symbol" === i.type) {
                                    const t = (0, r.getShortNameAndProName)(i.params.symbol);
                                    i.params.pageUrl = (0, s.makeSymbolPageUrl)(t), i.params.text = t.shortName
                                }
                            } else {
                                const e = (0, n.clone)(i);
                                e.children && t(e.children), i.type = "div",
                                    i.children = [e]
                            }
                    return e
                }(t.children), t
            }

            function a(t) {
                return { ...t,
                    published: t.published ? 1e3 * t.published : Date.now()
                }
            }
        },
        115537: (t, e, i) => {
            "use strict";
            i.d(e, {
                getNewsItemLink: () => l,
                showExternalLink: () => h,
                renderNewsItem: () => c,
                renderLogosNewsItem: () => u
            });
            var s = i(667294),
                r = i(973935),
                n = i(353454),
                o = i(408238),
                a = i(17125);

            function l(t) {
                return t.link || (0, a.getStoryPageUrl)(t.id, t.title)
            }

            function h(t) {
                return Boolean(t.link && !t.astDescription)
            }

            function c(t) {
                const e = (0, a.getStoryPageUrl)(t.id, t.title),
                    i = { ...t,
                        link: t.link || e
                    };
                return (0, o.renderNewsItem)(i, function(t) {
                    return {
                        isLinkBlock: Boolean(t.link),
                        withHover: Boolean(t.astDescription || t.link),
                        showExternalLink: h(t)
                    }
                }(i))
            }

            function u(t, e) {
                const i = e.querySelector("[init_logo_container]");
                return r.render(s.createElement(n.CircleLogoStack, {
                    logoUrlsOrSymbols: t
                }), i), () => {
                    r.unmountComponentAtNode(i)
                }
            }
        },
        650182: (t, e, i) => {
            "use strict";
            i.d(e, {
                trackNewsClick: () => n
            });
            var s = i(929098),
                r = i(771073);
            async function n(t) {
                null !== t.provider && (0, s.trackEvent)("News", "click", t.provider);
                const e = function() {
                        if (window.TradingView.onChartPage) return "chart";
                        const t = window.location.pathname;
                        if ("/" === t) return "main";
                        const e = t.split("/")[1];
                        if ("chart" === e) return "idea";
                        return e
                    }(),
                    i = await (0, r.getTracker)();
                i && i.trackNewsClick({ ...t,
                    page: e,
                    user_id: window.user.id || null
                })
            }
        },
        686485: (t, e, i) => {
            "use strict";
            i.d(e, {
                TradingViewNewsProvider: () => f
            });
            var s = i(120220),
                r = i(987380),
                n = i(408238);
            const o = (0, s.t)("{title} for {symbol}");
            var a = i(115537),
                l = i(237196),
                h = i(168403),
                c = i(17125),
                u = i(132223);
            const d = (0, r.getLogger)("NewsProvider"),
                p = (0, s.t)("Headlines");
            class f extends class {
                timeout() {
                    return 3e5
                }
                getNews(t) {
                    return this._fetch(t)
                }
                renderItem(t) {
                    return (0, n.renderNewsItem)(t, (0, n.getNewsItemBlockOptions)(t))
                }
                unmountItems() {}
                _title(t) {
                    return o.format({
                        title: this._providerTitle,
                        symbol: t
                    })
                }
            } {
                constructor() {
                    super(...arguments), this._providerTitle = p, this._unmountAllRenderedItems = []
                }
                getNews(t) {
                    return this._fetch({ ...t,
                        pro_name: (0, c.handleNewsProName)(t.pro_name, t.type)
                    })
                }
                async getLatestNews(t) {
                    return (0, h.getTradingViewLatestNewsItem)(t)
                }
                renderItem(t) {
                    const e = (0, a.renderNewsItem)(t);
                    if (t.relatedSymbols && t.relatedSymbols.length) {
                        const i = (0, l.prepareLogoUrls)(t.relatedSymbols, null),
                            s = (0, a.renderLogosNewsItem)(i, e);
                        this._unmountAllRenderedItems.push(s)
                    }
                    return e
                }
                unmountItems() {
                    this._unmountAllRenderedItems.forEach(t => t()), this._unmountAllRenderedItems = []
                }
                addClickHandlers(t, e) {
                    (0, c.isInteractiveNewsItem)(t) && e.addEventListener("click", e => {
                        if (t.astDescription) e.preventDefault(), (0, u.manageNewsItemClick)(t);
                        else if (t.link) {
                            const i = e.target;
                            (0, u.manageNewsItemClick)(t, i.pathname, i.hostname)
                        }
                    })
                }
                _title(t) {
                    return "ja" !== window.locale ? super._title(t) : this._providerTitle
                }
                async _fetch(t) {
                    try {
                        const e = (0, c.getUpdatedRequestProps)(t),
                            i = await (0, h.getTradingViewNewsItems)(e);
                        return {
                            title: this._title(t.short_name),
                            newsItems: i
                        }
                    } catch (t) {
                        throw d.logError(t.message), t
                    }
                }
            }
        },
        17125: (t, e, i) => {
            "use strict";
            i.d(e, {
                getStoryPageUrl: () => p,
                getUpdatedRequestProps: () => c,
                handleNewsProName: () => g,
                isInteractiveNewsItem: () => f
            });
            const s = {
                bond: "bond",
                cfd: "cfd",
                crypto: "crypto",
                dr: "stock",
                forex: "forex",
                fund: "stock",
                futures: "futures",
                index: "index",
                right: "stock",
                stock: "stock",
                structured: "stock",
                warrant: "stock"
            };

            function r(t, e) {
                if (e && 0 !== e.length) {
                    if (e.includes("crypto")) return "crypto";
                    if (e.includes("bond")) return "bond"
                }
                return function(t) {
                    return Boolean(t && t in s)
                }(t) ? s[t] : "base"
            }
            var n = i(202441),
                o = i(48370),
                a = i(427496);
            const l = "urn:newsml:".length,
                h = "tag:".length;

            function c(t) {
                return {
                    symbol: t.pro_name || null,
                    category: r(t.type, t.typespecs),
                    country: t.country || (0, n.getIsoCountryCodeFromLocale)(window.locale),
                    lang: t.lang || (0, o.getIsoLanguageCodeFromLanguage)(window.language),
                    client: "web"
                }
            }

            function u(t) {
                return t.toLowerCase().trim().replace(/[\W_]+/g, "-").replace(/-+/, "-").replace(/^-/, "").replace(/-$/, "")
            }

            function d(t) {
                return t.startsWith("tag:reuters.com")
            }

            function p(t, e) {
                return function(t) {
                    return d(t) || function(t) {
                        return t.startsWith("urn:newsml:mtnewswires.com")
                    }(t)
                }(t) ? function(t, e) {
                    return d(t) ? `/news/${t.slice(h)}-${u(e)}/` : `/news/${t.slice(l)}-${u(e)}/`
                }(t, e) : void 0
            }

            function f(t) {
                return Boolean(t.astDescription || t.link)
            }

            function g(t, e) {
                if ("spread" !== e) return t;
                try {
                    return (0, a.tokenize)(t).filter(t => "symbol" === t.type).map(t => t.value)[0]
                } catch (e) {
                    return t
                }
            }
        },
        408238: (t, e, i) => {
            "use strict";
            i.d(e, {
                getNewsItemBlockOptions: () => n,
                renderNewsItem: () => o
            });
            var s = i(24084),
                r = i(283660);

            function n(t) {
                return {
                    isLinkBlock: Boolean(t.link),
                    withHover: Boolean(t.link),
                    showExternalLink: Boolean(t.link)
                }
            }

            function o(t, e) {
                const {
                    title: i,
                    shortDescription: n,
                    link: o,
                    source: a,
                    published: l
                } = t, {
                    isLinkBlock: h,
                    withHover: c,
                    showExternalLink: u
                } = e, d = document.createElement("div");
                d.classList.add(r["news-item__title"]), d.textContent = i, d.classList.toggle(r["news-item__title--external-link"], u);
                const p = document.createElement("div");
                p.classList.add(r["news-item__header"]);
                const f = document.createElement("div");
                f.classList.add(r["news-item__logos"]), f.setAttribute("init_logo_container", ""), p.appendChild(f);
                const g = document.createElement("div");
                g.classList.add(r["news-item__breadcrumbs"]), [...(0, s.getFormattedDateTimeForNews)(l), a].forEach(t => {
                    const e = document.createElement("span");
                    e.textContent = t, g.appendChild(e)
                }), p.appendChild(g);
                const m = document.createElement(h ? "a" : "div");
                if (m.classList.add(r["news-item"]), m.classList.toggle(r["news-item--no-hover"], !c), h && o && (m.href = o, m.target = "_blank", m.rel = u ? "noopener nofollow" : "noopener"), m.appendChild(p), m.appendChild(d), n) {
                    const t = document.createElement("div");
                    t.classList.add(r["news-item__description"]), t.textContent = n || "", m.appendChild(t)
                }
                return m
            }
        },
        222495: (t, e, i) => {
            "use strict";
            i.d(e, {
                NativeScrollDecorator: () => n
            });
            var s = i(858848),
                r = i(83857);
            class n {
                constructor(t) {
                    this._frame = null, this._showTopShadow = !1, this._showBottomShadow = !1, this._boundScrollThrottle = null, this._render = () => {
                            this._container.classList.toggle(r.top, this._showTopShadow), this._container.classList.toggle(r.bottom, this._showBottomShadow), this._frame = null
                        }, this._container = t, this._container.classList.add(r.scrollContainer), this.update(), this._render(), this._boundScrollThrottle = (0, s.default)(() => this.update(), 100),
                        this._container.addEventListener("scroll", this._boundScrollThrottle)
                }
                destroy() {
                    null !== this._boundScrollThrottle && (this._container.removeEventListener("scroll", this._boundScrollThrottle), this._boundScrollThrottle = null), null !== this._frame && cancelAnimationFrame(this._frame)
                }
                update() {
                    const t = Math.round(this._container.scrollTop),
                        e = t > 0,
                        i = t + Math.round(this._container.clientHeight) < Math.round(this._container.scrollHeight),
                        s = null !== this._frame;
                    e === this._showTopShadow && i === this._showBottomShadow && s || (this._showTopShadow = e, this._showBottomShadow = i, this._frame = requestAnimationFrame(() => {
                        this._render()
                    }))
                }
            }
        },
        504898: (t, e, i) => {
            "use strict";
            i.d(e, {
                ScrollType: () => s,
                wrapWithScroll: () => n
            });
            var s, r = i(416282);
            i(961502), i(885210);

            function n(t, e, i = s.Horizontal) {
                const n = document.createElement("div");
                switch (n.classList.add("tv-scroll-wrap"), i) {
                    case s.Horizontal:
                        n.classList.add("tv-scroll-wrap--horizontal");
                        break;
                    case s.Vertical:
                        n.classList.add("tv-scroll-wrap--vertical")
                }
                return t.appendChild(n), (0, r.ensureNotNull)(e.parentNode).replaceChild(n, e), n.appendChild(e), n
            }! function(t) {
                t[t.Horizontal = 0] = "Horizontal", t[t.Vertical = 1] = "Vertical"
            }(s || (s = {}))
        },
        882214: (t, e, i) => {
            "use strict";
            i.d(e, {
                addIDCCodes: () => l
            });
            var s = i(685864),
                r = i(120220),
                n = (i(568421), i(929098)),
                o = i(205966),
                a = i(388674);

            function l(t) {
                return (0, n.trackEvent)("IDC Add Delay Service", "Agreed", t), (0, s.fetch)(`/idc-add-delay-service/${t}/`, {
                    credentials: "include"
                }).then(t => t.json()).then(t => t.res === o.OK ? 0 : 1).catch(() => (function(t) {
                    (0, a.showNoticeDialog)({
                        title: (0, r.t)("Failed to sign the Exchange Agreement"),
                        content: (0, r.t)("Unable to add exchange {exchange} to the agreement").format({
                            exchange: t.toUpperCase()
                        })
                    })
                }(t), Promise.resolve(1)))
            }
        },
        974291: (t, e, i) => {
            "use strict";
            i.d(e, {
                isUserNeedSignAgreement: () => r,
                checkIfExchangeAvailable: () => n
            });
            i(568421);
            var s = i(172162);

            function r(t) {
                if (!(0, s.isIDCExchange)(t)) return !1;
                t = o(t);
                const e = window.pro,
                    i = e.getProduct(t);
                return void 0 !== i.idc_service_codes_delay && ((!Array.isArray(i.included_exchanges) || !i.included_exchanges.some(t => e.hasPackage(o(t)))) && ! function(t) {
                    const e = window.pro;
                    return e.hasPackage(t) || e.hasPackage(t + "_dly")
                }(t))
            }

            function n(t) {
                const e = window.pro;
                return new Promise(i => {
                    window.is_authenticated ? !e.getIDCExchanges(!0).length || e.isInvalidShopConf() ? e.updateShopConf().then(() => {
                        i(!r(t))
                    }).catch(() => {
                        i(!0)
                    }) : i(!r(t)) : i(!0)
                })
            }

            function o(t) {
                return t.startsWith("exchange-") ? t : "exchange-{0}".format(t.toLowerCase())
            }
        },
        710031: (t, e, i) => {
            "use strict";
            i.d(e, {
                getSFWarningTextForFreeUsers: () => r
            });
            var s = i(120220);

            function r() {
                return window.is_authenticated ? (0, s.t)("Data is not available for basic account holders") : (0, s.t)("Login or register to get data")
            }
        },
        172162: (t, e, i) => {
            "use strict";

            function s(t, e = !1) {
                if (t && t.startsWith("exchange-")) return function(t, e = !1) {
                    const i = window.pro,
                        s = i.getProduct(t);
                    return !!i.isProductDefined(s) && (e ? !!s.idc_service_codes_delay : !!s.idc_service_codes)
                }(t, e);
                const i = (t || "").toLowerCase();
                return window.pro.getIDCExchanges(e).includes(i)
            }
            i.d(e, {
                isIDCExchange: () => s
            })
        },
        969817: (t, e, i) => {
            "use strict";
            i.d(e, {
                checkSymbol: () => v,
                isSymbolAvailable: () => y,
                requestFallbackSymbol: () => b
            });
            var s = i(120220),
                r = i(40899),
                n = i(317617),
                o = i(929098);
            var a = i(882214);
            const l = window.pro;
            var h = i(172162),
                c = i(76033),
                u = i(205966),
                d = i(198006);
            var p = i(673715),
                f = i(423946),
                g = i(152946),
                m = i(884670);
            var _ = i(655119);

            function v(t) {
                if ((0, d.isFeatureEnabled)("nse_attention_popup") && t && t.startsWith("NSE") && window.pro && window.pro.isPro()) {
                    if (null !== _.TVLocalStorage.getItem("nse_dialog_key")) return void _.TVLocalStorage.removeItem("nse_dialog_key");
                    (0, f.createGoProDialog)({
                        feature: "checkingNSE",
                        closeOnOutsideClick: !1,
                        closeOnEsc: !1,
                        closeButton: !1,
                        actions: [{
                            text: s.t("Continue"),
                            onClick: () => {
                                _.TVLocalStorage.setItem("nse_dialog_key", "viewed"), window.open("/chart/?symbol=" + t, "_blank")
                            }
                        }]
                    })
                }
            }

            function y(t) {
                return (0, r.check)(t).then(() => (v(t), !0)).catch(t => {
                    if (t.errCode === u.DELAY_NOT_AVAILABLE)(0, f.createGoProDialog)({
                        feature: "idcFreeUser",
                        closeOnOutsideClick: !1,
                        goOnMarkets: !0
                    });
                    else if ((0, h.isIDCExchange)(t.exchange)) {
                        if (t.errCode === u.NEED_SIGN_AGREEMENT) return e = t.exchange, new Promise(t => {
                            if (!(e = e && e.toLowerCase())) return void t(!1);
                            const s = i.c[158530];
                            s && s.exports.isOpenedModals() ? t(!1) : (0, n.createIdcDelayAgreementDialog)({
                                exchange: e
                            }).then(i => {
                                i.on("afterOpen", () => {
                                    (0, o.trackEvent)("IDC Delay", "Dialog Shown", e)
                                }), i.on("afterClose", () => {
                                    t(!1)
                                }), i.on("action:sign-agreement", () => {
                                    window.saver.saveChartSilently(), (0, o.trackEvent)("IDC Delay", "Go on Agreement", e)
                                }), i.open()
                            })
                        });
                        if (t.errCode === u.NEED_ADD_SERVICE) return function(t) {
                            return new Promise(e => {
                                if (!(t = t && t.toLowerCase())) return void e(!1);
                                const s = i.c[158530];
                                if (s && s.exports.isOpenedModals()) return void e(!1);
                                let r = !1;
                                (0, n.createIdcDelayAddServiceDialog)().then(i => {
                                    i.open(), i.on("afterOpen", () => {
                                        (0, o.trackEvent)("IDC Add Delay Service", "Dialog Shown", t)
                                    }), i.on("afterClose", () => {
                                        r || e(!1)
                                    }), i.on("action:add-service", i => {
                                        r = !0, i.destroy(), (0, a.addIDCCodes)(t).then(t => {
                                            0 === t ? (l.invalidateShopConf(), l.updateShopConf(), e(!0)) : e(!1)
                                        })
                                    })
                                })
                            })
                        }(t.exchange)
                    }
                    var e;
                    return Promise.resolve(!1)
                })
            }

            function b(t, e) {
                return new Promise(s => {
                    if ("group_not_permitted" !== e.type) return void s(t);
                    if (!e.symbolGroup) return void s(window.DEFAULT_SYMBOL);
                    const r = e.symbolGroup;
                    if ((0, c.isSfFlag)(r) || r === m.SymbolGroup.McxFlag) {
                        const e = i.c[158530];
                        if (e && e.exports.isOpenedModals()) return void s(window.DEFAULT_SYMBOL);
                        n = {
                            exchange: (0, p.getExchange)(g.linking.symbol.value()),
                            onSigninSuccess: () => {
                                s(t)
                            },
                            isRealtime: ["sf_rt", m.SymbolGroup.McxFlag].includes(r)
                        }, Promise.all([i.e(23876), i.e(26822), i.e(69756), i.e(88278), i.e(74814), i.e(36778), i.e(18436), i.e(96892), i.e(11216), i.e(43424), i.e(27901)]).then(i.bind(i, 309838)).then(t => t.createGoRegisterDialog(n))
                    }
                    var n;
                    const o = (0, m.getSymbolGroupData)(r);
                    o ? function(t) {
                        Promise.all([i.e(99459), i.e(23876), i.e(26822), i.e(69756), i.e(88278), i.e(74814), i.e(18436), i.e(9803), i.e(11216), i.e(43424), i.e(87279)]).then(i.bind(i, 493001)).then(e => e.createAvailableExchangeDialog(t))
                    }({
                        width: 600,
                        title: o.title,
                        content: o.description,
                        destroy: () => s(window.DEFAULT_SYMBOL)
                    }) : s(window.DEFAULT_SYMBOL)
                })
            }
        },
        40899: (t, e, i) => {
            "use strict";
            i.d(e, {
                check: () => h
            });
            var s = i(673715),
                r = i(685864),
                n = i(903851),
                o = i(305803),
                a = i(974291),
                l = i(205966);

            function h(t, e = !0) {
                return new Promise((i, h) => {
                    const c = (0, s.getExchange)(t);
                    c ? (0, a.checkIfExchangeAvailable)(c).then(s => s ? i(t) : (0, n.enabled)(o.ProductFeatures.IDC_AVAILABLE_DELAY) ? e ? void(0, r.fetch)(`/idc-sign-agreement-check/${c}/`, {
                        credentials: "include"
                    }).then(e => e.json().then(e => e.res === l.DELAY_NOT_AVAILABLE ? h({
                        exchange: c,
                        errCode: e.res,
                        reason: "delay not available",
                        symbol: t
                    }) : e.res === l.NEED_SIGN_AGREEMENT ? h({
                        exchange: c,
                        errCode: e.res,
                        reason: "need sign agreement",
                        symbol: t
                    }) : e.res === l.NEED_ADD_SERVICE ? h({
                        exchange: c,
                        errCode: e.res,
                        reason: "need add service",
                        symbol: t
                    }) : i(t))).catch(() => {
                        i(t)
                    }) : i(t) : h({
                        exchange: c,
                        errCode: l.DELAY_NOT_AVAILABLE,
                        reason: "delay not available",
                        symbol: t
                    })) : i(t)
                })
            }
        },
        540062: (t, e, i) => {
            "use strict";
            i.d(e, {
                getComponentInitData: () => n
            });
            var s = i(416282),
                r = i(604346);

            function n(t) {
                return (0, r.getFreshInitData)()[(0, s.ensureDefined)(t.dataset.propsId)]
            }
        },
        884670: (t, e, i) => {
            "use strict";
            i.d(e, {
                SymbolGroup: () => s,
                getSymbolGroupData: () => o
            });
            i(568421);
            var s, r = i(120220);
            ! function(t) {
                t.NseFlag = "nse_free", t.McxFlag = "mcx_free"
            }(s || (s = {}));
            const n = {
                [s.NseFlag]: {
                    title: r.t("Data is not available"),
                    description: r.t("NSE data is not available on the mobile app at this time. It may become available in the future.")
                }
            };

            function o(t) {
                return n[t] ? n[t] : null
            }
        },
        859943: (t, e, i) => {
            "use strict";

            function s(t, e = window) {
                const i = "theme-" + t,
                    s = e.document.documentElement.classList;
                for (const t of Array.from(s)) t.startsWith("theme-") && t !== i && s.remove(t);
                s.add(i)
            }
            i.r(e), i.d(e, {
                applyTheme: () => s
            })
        },
        336520: (t, e, i) => {
            "use strict";
            i.d(e, {
                initFromInitData: () => n
            });
            var s = i(604346),
                r = i(787479);

            function n() {
                (0, s.updateInitData)();
                const t = (0, s.getInitData)();
                "theme" in t && (0, r.setTheme)(t.theme)
            }
        },
        953321: (t, e, i) => {
            "use strict";
            var s;
            i.d(e, {
                    StdTheme: () => s
                }),
                function(t) {
                    t.Light = "light", t.Dark = "dark"
                }(s || (s = {}))
        },
        787479: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                watchedTheme: () => o,
                setTheme: () => a
            });
            var s = i(765066),
                r = i.n(s),
                n = i(859943);
            const o = new(r());

            function a(t) {
                o.setValue(t)
            }
            o.subscribe(t => {
                (0, n.applyTheme)(t, window)
            })
        },
        427496: (t, e, i) => {
            "use strict";
            i.d(e, {
                symbolTokenEscapeRe: () => o,
                tokenize: () => h
            });
            var s = i(307833),
                r = i(853875);
            const n = s.enabled("charting_library_base") ? /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&])*|'.+?'/ : /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&])*|'.+?'/,
                o = /[+\-/*]/,
                a = {
                    number: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                    incompleteNumber: /\./,
                    symbol: n,
                    incompleteSymbol: /'[^']*/,
                    separatorPrefix: r.SEPARATOR_PREFIX,
                    openBrace: "(",
                    closeBrace: ")",
                    plus: "+",
                    minus: "-",
                    multiply: "*",
                    divide: "/",
                    power: "^",
                    whitespace: /[\0-\x20\s]+/,
                    unparsed: null
                },
                l = new RegExp(Object.values(a).map(t => {
                    return null === t ? "" : `(${"string"==typeof t?(e=t,e.replace(/[\^$()[\]{}*+?|\\]/g,"\\$&")):t.source})`;
                    var e
                }).filter(t => "" !== t).concat(".").join("|"), "g");

            function h(t) {
                if (!t) return [];
                const e = [],
                    i = Object.keys(a);
                let s;
                for (; s = l.exec(t);) {
                    let t = !1;
                    for (let r = i.length; r--;)
                        if (s[r + 1]) {
                            i[r] && e.push({
                                value: s[r + 1],
                                type: i[r],
                                precedence: 0,
                                offset: s.index
                            }), t = !0;
                            break
                        }
                    t || e.push({
                        value: s[0],
                        type: "unparsed",
                        precedence: 0,
                        offset: s.index
                    })
                }
                return e
            }
        },
        170405: (t, e, i) => {
            "use strict";
            i.d(e, {
                anchors: () => r,
                makeAnchorable: () => n
            });
            var s = i(667294);
            const r = {
                bottom: {
                    attachment: {
                        horizontal: "left",
                        vertical: "top"
                    },
                    targetAttachment: {
                        horizontal: "left",
                        vertical: "bottom"
                    }
                },
                top: {
                    attachment: {
                        horizontal: "left",
                        vertical: "bottom"
                    },
                    targetAttachment: {
                        horizontal: "left",
                        vertical: "top"
                    }
                },
                topRight: {
                    attachment: {
                        horizontal: "right",
                        vertical: "bottom"
                    },
                    targetAttachment: {
                        horizontal: "right",
                        vertical: "top"
                    }
                },
                bottomRight: {
                    attachment: {
                        horizontal: "right",
                        vertical: "top"
                    },
                    targetAttachment: {
                        horizontal: "right",
                        vertical: "bottom"
                    }
                }
            };

            function n(t) {
                var e;
                return (e = class extends s.PureComponent {
                    render() {
                        const {
                            anchor: e = "bottom"
                        } = this.props;
                        return s.createElement(t, { ...this.props,
                            attachment: r[e].attachment,
                            targetAttachment: r[e].targetAttachment
                        })
                    }
                }).displayName = "Anchorable Component", e
            }
        },
        111019: (t, e, i) => {
            "use strict";
            i.d(e, {
                makeAttachable: () => n
            });
            var s = i(667294),
                r = i(973935);

            function n(t) {
                var e;
                return (e = class extends s.PureComponent {
                    constructor(t) {
                        super(t), this._getComponentInstance = t => {
                            this._instance = t
                        }, this._throttleCalcProps = () => {
                            requestAnimationFrame(() => this.setState(this._calcProps(this.props)))
                        }, this.state = this._getStateFromProps()
                    }
                    componentDidMount() {
                        this._instanceElem = r.findDOMNode(this._instance), this.props.attachOnce || this._subscribe(), this.setState(this._calcProps(this.props))
                    }
                    componentDidUpdate(t) {
                        t.children === this.props.children && t.top === this.props.top && t.left === this.props.left && t.width === this.props.width || this.setState(this._getStateFromProps(), () => this.setState(this._calcProps(this.props)))
                    }
                    render() {
                        return s.createElement("div", {
                            style: {
                                position: "absolute",
                                width: "100%",
                                top: 0,
                                left: 0
                            }
                        }, s.createElement(t, { ...this.props,
                            ref: this._getComponentInstance,
                            top: this.state.top,
                            bottom: void 0 !== this.state.bottom ? this.state.bottom : "auto",
                            right: void 0 !== this.state.right ? this.state.right : "auto",
                            left: this.state.left,
                            width: this.state.width,
                            maxWidth: this.state.maxWidth
                        }, this.props.children))
                    }
                    componentWillUnmount() {
                        this._unsubsribe()
                    }
                    _getStateFromProps() {
                        return {
                            bottom: this.props.bottom,
                            left: this.props.left,
                            right: this.props.right,
                            top: void 0 !== this.props.top ? this.props.top : -1e4,
                            width: this.props.inheritWidthFromTarget ? this.props.target && this.props.target.getBoundingClientRect().width : this.props.width,
                            maxWidth: this.props.inheritMaxWidthFromTarget && this.props.target && this.props.target.getBoundingClientRect().width
                        }
                    }
                    _calcProps(t) {
                        if (t.target && t.attachment && t.targetAttachment) {
                            const e = this._calcTargetProps(t.target, t.attachment, t.targetAttachment);
                            if (null === e) return {};
                            const {
                                width: i,
                                inheritWidthFromTarget: s = !0,
                                inheritMaxWidthFromTarget: r = !1
                            } = this.props, n = {
                                width: s ? e.width : i,
                                maxWidth: r ? e.width : void 0
                            };
                            switch (t.attachment.vertical) {
                                case "bottom":
                                case "middle":
                                    n.top = e.y;
                                    break;
                                default:
                                    n[t.attachment.vertical] = e.y
                            }
                            switch (t.attachment.horizontal) {
                                case "right":
                                case "center":
                                    n.left = e.x;
                                    break;
                                default:
                                    n[t.attachment.horizontal] = e.x
                            }
                            return n
                        }
                        return {}
                    }
                    _calcTargetProps(t, e, i) {
                        const s = t.getBoundingClientRect(),
                            r = this._instanceElem.getBoundingClientRect(),
                            n = "parent" === this.props.root ? this._getCoordsRelToParentEl(t, s) : this._getCoordsRelToDocument(s);
                        if (null === n) return null;
                        const o = this._getDimensions(r),
                            a = this._getDimensions(s).width;
                        let l = 0,
                            h = 0;
                        switch (e.vertical) {
                            case "top":
                                h = n[i.vertical];
                                break;
                            case "bottom":
                                h = n[i.vertical] - o.height;
                                break;
                            case "middle":
                                h = n[i.vertical] - o.height / 2
                        }
                        switch (e.horizontal) {
                            case "left":
                                l = n[i.horizontal];
                                break;
                            case "right":
                                l = n[i.horizontal] - o.width;
                                break;
                            case "center":
                                l = n[i.horizontal] - o.width / 2
                        }
                        return "number" == typeof this.props.attachmentOffsetY && (h += this.props.attachmentOffsetY), "number" == typeof this.props.attachmentOffsetX && (l += this.props.attachmentOffsetX), {
                            x: l,
                            y: h,
                            width: a
                        }
                    }
                    _getCoordsRelToDocument(t) {
                        const e = pageYOffset,
                            i = pageXOffset,
                            s = t.top + e,
                            r = t.bottom + e,
                            n = t.left + i;
                        return {
                            top: s,
                            bottom: r,
                            left: n,
                            right: t.right + i,
                            middle: (s + t.height) / 2,
                            center: n + t.width / 2
                        }
                    }
                    _getCoordsRelToParentEl(t, e) {
                        const i = t.offsetParent;
                        if (null === i) return null;
                        const s = i.scrollTop,
                            r = i.scrollLeft,
                            n = t.offsetTop + s,
                            o = t.offsetLeft + r,
                            a = e.width + o;
                        return {
                            top: n,
                            bottom: e.height + n,
                            left: o,
                            right: a,
                            middle: (n + e.height) / 2,
                            center: (o + e.width) / 2
                        }
                    }
                    _getDimensions(t) {
                        return {
                            height: t.height,
                            width: t.width
                        }
                    }
                    _subscribe() {
                        "document" === this.props.root && (window.addEventListener("scroll", this._throttleCalcProps, !0), window.addEventListener("resize", this._throttleCalcProps))
                    }
                    _unsubsribe() {
                        window.removeEventListener("scroll", this._throttleCalcProps, !0), window.removeEventListener("resize", this._throttleCalcProps)
                    }
                }).displayName = "Attachable Component", e
            }
        },
        772881: (t, e, i) => {
            "use strict";
            i.d(e, {
                getCircleLogoAnyHtml: () => n
            });
            var s = i(695496),
                r = i(295417);

            function n(t) {
                const {
                    logoUrls: e,
                    ...i
                } = t;
                return 1 === e.length ? (0, s.getCircleLogoHtml)({
                    logoUrl: e[0],
                    ...i
                }) : 2 === e.length ? (0, r.getCircleLogoPairHtml)({
                    primaryLogoUrl: e[0],
                    secondaryLogoUrl: e[1],
                    ...i
                }) : (0, s.getCircleLogoHtml)({
                    logoUrl: void 0,
                    ...i
                })
            }
        },
        54917: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                resolveLogoUrls: () => n,
                getLogoUrlsHook: () => o,
                removeUsdFromCryptoPairLogos: () => a
            });
            var s = i(372777);
            const r = (0, s.getLogoUrlResolver)();

            function n(t, e = s.LogoSize.Medium) {
                const i = t.logoid,
                    n = t["base-currency-logoid"],
                    o = t["currency-logoid"],
                    a = i && r.getSymbolLogoUrl(i, e);
                if (a) return [a];
                const l = n && r.getSymbolLogoUrl(n, e),
                    h = o && r.getSymbolLogoUrl(o, e);
                return l && h ? [l, h] : l ? [l] : h ? [h] : []
            }

            function o(t, e) {
                let i = !1;
                return (s, r, o) => {
                    const l = s["currency-logoid"] && s["base-currency-logoid"];
                    if (!i && (s.logoid || l || o)) {
                        i = !0;
                        const r = {
                                logoid: s.logoid,
                                "base-currency-logoid": s["base-currency-logoid"],
                                "currency-logoid": s["currency-logoid"]
                            },
                            o = a({
                                type: s.type,
                                currency_code: s.currency_code
                            }, n(r, e));
                        t(o)
                    }
                }
            }

            function a(t, e) {
                return "crypto" === t.type && "USD" === t.currency_code && 2 === e.length ? [e[0]] : e
            }
        },
        295417: (t, e, i) => {
            "use strict";
            i.d(e, {
                getCircleLogoPairHtml: () => r
            });
            var s = i(141942);
            i(150879);

            function r(t) {
                const {
                    primaryLogoUrl: e,
                    secondaryLogoUrl: i,
                    size: r,
                    className: o
                } = t;
                return `<span class="${(0,s.getBlockStyleClasses)(r,o)}">\n\t\t\t${n({logoUrl:i,size:r})}\n\t\t\t${n({logoUrl:e,size:r})}\n\t\t</span>`
            }

            function n(t) {
                const {
                    logoUrl: e,
                    size: i
                } = t, r = (0, s.getLogoStyleClasses)(i, Boolean(e));
                return void 0 === e ? `<span class="${r}"></span>` : `<img class="${r}" src="${e}" alt="" />`
            }
        },
        353454: (t, e, i) => {
            "use strict";
            i.d(e, {
                CircleLogoStack: () => h
            });
            var s = i(667294),
                r = i(294184),
                n = i(826150);

            function o(t) {
                return "logoUrl" in t
            }
            var a = i(377672),
                l = i(474588);

            function h(t) {
                const [e, i] = function(t) {
                    const e = [],
                        i = new Set,
                        s = t.slice();
                    for (; 0 !== s.length;) {
                        const t = s.shift();
                        if (!t) break;
                        const r = o(t),
                            a = r ? t.logoUrl : t.symbol;
                        if (!i.has(a) && (i.add(a), r ? e.push(t) : e.push({
                                placeholderLetter: (0, n.splitSymbolName)(t.symbol)[1][0]
                            }), 3 === e.length)) break
                    }
                    return [e, t.length > 3 || t.length !== e.length]
                }(t.logoUrlsOrSymbols);
                return s.createElement("ul", {
                    className: r(l.stack, t.className)
                }, i && s.createElement("li", {
                    className: l.counter
                }, "+"), e.map((t, e) => s.createElement("li", {
                    key: e
                }, s.createElement(a.CircleLogo, { ...t,
                    size: "xxsmall",
                    loading: "lazy"
                }))).reverse())
            }
        },
        695496: (t, e, i) => {
            "use strict";
            i.d(e, {
                getCircleLogoHtml: () => r
            });
            var s = i(43096);
            i(775074);

            function r(t) {
                const e = (0, s.getStyleClasses)(t.size, t.className);
                return (0, s.isCircleLogoWithUrlProps)(t) ? `<img class="${e}" src="${t.logoUrl}" alt="">` : `<span class="${e}">${t.placeholderLetter||""}</span>`
            }
        },
        110485: (t, e, i) => {
            "use strict";
            i.d(e, {
                DropdownContainer: () => a
            });
            var s = i(667294),
                r = i(896741),
                n = i(294184),
                o = i(416282);
            class a extends s.PureComponent {
                constructor() {
                    super(...arguments), this._container = null, this._setContainerRef = t => {
                        "function" == typeof this.props.reference && this.props.reference(t), "object" == typeof this.props.reference && (this.props.reference.current = t), this._container = t
                    }
                }
                componentDidMount() {
                    this.props.onDropdownWheelNoPassive && this._addPassiveListenerOnWheel(this.props.onDropdownWheelNoPassive)
                }
                componentDidUpdate(t) {
                    this.props.onDropdownWheelNoPassive !== t.onDropdownWheelNoPassive && this._updatePassiveListenerOnWheel(t.onDropdownWheelNoPassive)
                }
                componentWillUnmount() {
                    this.props.onDropdownWheelNoPassive && this._removePassiveListenerOnWheel(this.props.onDropdownWheelNoPassive)
                }
                render() {
                    const {
                        shadow: t = "bottom",
                        children: e,
                        className: i
                    } = this.props, o = n(r.container, r[t], i), a = {
                        maxHeight: this.props.maxHeight
                    };
                    return s.createElement("div", {
                        ref: this._setContainerRef,
                        style: a,
                        className: o,
                        onTouchStart: this.props.onDropdownTouchStart,
                        onTouchMove: this.props.onDropdownTouchMove,
                        onTouchEnd: this.props.onDropdownTouchEnd,
                        onWheel: this.props.onDropdownWheel
                    }, e)
                }
                _updatePassiveListenerOnWheel(t) {
                    t && this._removePassiveListenerOnWheel(t), this.props.onDropdownWheelNoPassive && this._addPassiveListenerOnWheel(this.props.onDropdownWheelNoPassive)
                }
                _addPassiveListenerOnWheel(t) {
                    (0, o.ensureNotNull)(this._container).addEventListener("wheel", t, {
                        passive: !1
                    })
                }
                _removePassiveListenerOnWheel(t) {
                    (0, o.ensureNotNull)(this._container).removeEventListener("wheel", t)
                }
            }
        },
        638405: (t, e, i) => {
            "use strict";
            i.d(e, {
                DropdownList: () => f
            });
            var s = i(667294),
                r = i(887552),
                n = i(294184),
                o = i(544086),
                a = i(418088),
                l = i(491660),
                h = i(110485),
                c = i(170405);
            const u = (0, a.makeNavigateable)(o.List),
                d = (0, c.makeAnchorable)(l.Dropdown),
                p = {
                    top: "top",
                    bottom: "bottom",
                    topRight: "top"
                };
            class f extends s.PureComponent {
                render() {
                    const {
                        anchor: t = "bottom",
                        fontSize: e = 14,
                        root: i = "parent"
                    } = this.props, o = n(r.list, r[t]), {
                        dropdownClassName: a,
                        height: l,
                        ...c
                    } = this.props;
                    return s.createElement(d, { ...c,
                        className: a,
                        root: i
                    }, s.createElement(h.DropdownContainer, {
                        className: this.props.dropdownContainerClassName,
                        shadow: p[t],
                        maxHeight: this.props.maxHeight,
                        onDropdownTouchStart: this.props.onDropdownTouchStart ? this.props.onDropdownTouchStart : void 0,
                        onDropdownTouchMove: this.props.onDropdownTouchMove ? this.props.onDropdownTouchMove : void 0,
                        onDropdownTouchEnd: this.props.onDropdownTouchEnd ? this.props.onDropdownTouchEnd : void 0,
                        onDropdownWheelNoPassive: this.props.onDropdownWheelNoPassive ? this.props.onDropdownWheelNoPassive : void 0
                    }, s.createElement(u, { ...c,
                        width: this.props.width,
                        height: l,
                        className: this.props.className || o,
                        itemsClassName: this.props.itemsClassName || r.item,
                        selectedClassName: this.props.selectedClassName || r.selected,
                        fontSize: e,
                        reference: this.props.reference
                    })))
                }
            }
        },
        100855: (t, e, i) => {
            "use strict";
            i.d(e, {
                DropdownWithFlag: () => f
            });
            var s = i(667294),
                r = i(973935),
                n = i(294184),
                o = i(313995),
                a = i(638405),
                l = i(331196),
                h = i(198618),
                c = i(726004),
                u = i(578433),
                d = i(715934);
            const p = { ...u,
                ...d
            };
            class f extends s.PureComponent {
                constructor(t) {
                    super(t), this._horizontalItemPadding = 15, this._verticalItemPadding = 10, this._verticalListPadding = 1, this._onWindowResize = () => {
                        this.state.isOpened && this._onMeasure()
                    }, this._onMeasure = () => {
                        const t = this.props.itemHeight * this.props.options.length,
                            e = this._btnEl.getBoundingClientRect(),
                            i = this._getScrollWidth(),
                            s = document.documentElement.clientWidth - e.left - i - 10,
                            r = s > this.props.itemWidth,
                            n = this.props.maxHeight ? Math.min(Math.ceil(t / this.props.maxHeight), this.props.maxColumns || 1, Math.floor(s / this.props.itemWidth) || 1) : 1;
                        let o, a = this.props.itemWidth * n;
                        const l = Math.ceil(this.props.options.length / n) * this.props.itemHeight;
                        r ? o = 0 : (a = document.documentElement.clientWidth - 20, this.props.maxHeight && l > this.props.maxHeight && (a -= i), o = 10 - e.left), this.setState({
                            width: a,
                            height: l + 2 * this._verticalListPadding,
                            left: o,
                            top: "top" === this.props.horizontalAttachment ? 0 : e.height
                        })
                    }, this._onOutsideClick = t => {
                        this.state.isOpened && (t.preventDefault(), t.stopPropagation()), this.setState({
                            isOpened: !1
                        })
                    }, this._getScrollWidth = () => {
                        const t = document.createElement("div");
                        t.style.overflowY = "scroll", t.style.width = "50px", t.style.height = "50px", t.style.visibility = "hidden", document.body.appendChild(t);
                        const e = t.offsetWidth - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, this._toggle = t => ({
                        isOpened: !this.props.disabled && !t.isOpened,
                        selected: t.selected
                    }), this._onSelect = t => {
                        t !== this.state.selected ? (this.props.onSelect && this.props.onSelect(this.props.options[t]), this.setState(() => ({
                            isOpened: !1,
                            selected: t
                        }))) : this.setState(() => ({
                            isOpened: !1
                        }))
                    }, this.state = {
                        isOpened: !1,
                        selected: t.initialSelected || 0,
                        left: 0,
                        top: 0
                    }
                }
                componentDidMount() {
                    this._btnEl = r.findDOMNode(this._btn), window.addEventListener("resize", () => this._onWindowResize())
                }
                render() {
                    const t = n(o.title),
                        e = n(o.button),
                        i = n(o.wrap, {
                            [o.disabled]: !!this.props.disabled
                        }),
                        r = this.props.options[this.state.selected],
                        u = this.props.options.map(e => ({
                            elem: s.createElement("span", {
                                style: {
                                    width: this.props.itemWidth - 2 * this._horizontalItemPadding,
                                    height: this.props.itemHeight - 2 * this._verticalItemPadding
                                }
                            }, s.createElement(l.Flag, {
                                title: e.flagTitle || e.title,
                                name: e.flagId
                            }), s.createElement("span", {
                                className: t
                            }, e.title))
                        })),
                        d = Math.min(this.props.maxHeight || 1 / 0, 3 * document.documentElement.clientHeight / 4),
                        f = this.state.height && this.state.height > d ? d : void 0;
                    return s.createElement(h.OutsideEvent, {
                        handler: this.props.outsideClick || this._onOutsideClick,
                        click: !0
                    }, t => s.createElement("div", {
                        ref: t,
                        className: i
                    }, s.createElement("span", {
                        ref: t => {
                            this._btn = t
                        },
                        onClick: () => this.setState(this._toggle),
                        className: e
                    }, s.createElement(l.Flag, {
                        title: r.flagTitle || r.title,
                        name: r.flagId,
                        size: this.props.flagSize
                    }), s.createElement(c.ToolWidgetCaret, {
                        dropped: this.state.isOpened,
                        className: o.caret
                    })), s.createElement(a.DropdownList, {
                        isOpened: this.state.isOpened,
                        selected: this.state.selected,
                        items: u,
                        onSelect: this._onSelect,
                        onMeasure: this._onMeasure,
                        width: this.state.width,
                        height: this.state.height,
                        maxHeight: f,
                        left: this.state.left,
                        top: this.state.top,
                        theme: p,
                        className: o.dropdownWithFlagList,
                        itemsClassName: o.item
                    })))
                }
            }
        },
        491660: (t, e, i) => {
            "use strict";
            i.d(e, {
                Dropdown: () => l
            });
            var s = i(667294),
                r = i(836982),
                n = i(111019),
                o = i(558871);
            class a extends s.PureComponent {
                render() {
                    const t = {
                        position: "absolute",
                        top: this.props.top,
                        width: this.props.width,
                        height: this.props.height,
                        bottom: this.props.bottom,
                        right: this.props.right,
                        left: this.props.left,
                        zIndex: this.props.zIndex
                    };
                    return s.createElement(r, {
                        onMeasure: this.props.onResize
                    }, s.createElement("div", {
                        className: this.props.className,
                        style: t,
                        ref: this.props.reference
                    }, this.props.children))
                }
            }
            a.displayName = "Dropdown Container";
            const l = (0, o.makeOverlapable)((0, n.makeAttachable)(a))
        },
        331196: (t, e, i) => {
            "use strict";
            i.d(e, {
                Flag: () => h,
                FlagByCountryName: () => u
            });
            var s = i(667294),
                r = i(294184),
                n = i(120220),
                o = i(759288),
                a = i(640539),
                l = i(944050);

            function h(t) {
                const {
                    name: e,
                    className: i,
                    size: n,
                    title: h,
                    alt: c,
                    role: u
                } = t, d = r("tv-flag-country tv-flag-country--" + e, n && "tv-flag-country--size_" + n, i);
                if ("forex" === e) return s.createElement(a.Icon, {
                    icon: l,
                    className: d
                });
                const p = (0, o.flagUrl)(e);
                return s.createElement("img", {
                    title: h,
                    alt: c,
                    className: d,
                    src: p,
                    role: u
                })
            }
            const c = {
                argentina: "ar",
                canada: "ca",
                bitcoin: "btc",
                uk: "uk",
                usa: "us",
                egypt: "eg",
                europe: "eu",
                russia: "ru",
                japan: "jp",
                india: "in",
                forex: "forex",
                brasil: "br",
                mexico: "mx",
                germany: "de",
                switzerland: "ch",
                turkey: "tr",
                italy: "it",
                spain: "es",
                ireland: "ie",
                saudi_arabia: "sa",
                serbia: "rs",
                south_africa: "za",
                south_korea: "kr",
                sweden: "se",
                norway: "no",
                austria: "at",
                australia: "au",
                new_zealand: "nz",
                hong_kong: "hk",
                taiwan: "tw",
                thailand: "th",
                singapore: "sg",
                poland: "pl",
                indonesia: "id",
                israel: "il",
                chile: "cl",
                china: "cn",
                malaysia: "my",
                bahrain: "bh",
                nigeria: "ng",
                peru: "pe",
                colombia: "co",
                qatar: "qa",
                finland: "fi",
                iceland: "is",
                denmark: "dk",
                lithuania: "lt",
                estonia: "ee",
                latvia: "lv",
                luxembourg: "lu",
                vietnam: "vn",
                netherlands: "nl",
                belgium: "be",
                portugal: "pt",
                france: "fr",
                philippines: "ph",
                worldwide: "ww"
            };

            function u(t) {
                const e = {
                        argentina: n.t("Argentina"),
                        canada: n.t("Canada"),
                        bitcoin: n.t("Bitcoin"),
                        uk: n.t("UK"),
                        usa: n.t("USA"),
                        egypt: n.t("Egypt"),
                        europe: n.t("Europe"),
                        russia: n.t("Russia"),
                        japan: n.t("Japan"),
                        india: n.t("India"),
                        forex: n.t("Forex"),
                        brasil: n.t("Brazil"),
                        mexico: n.t("Mexico"),
                        germany: n.t("Germany"),
                        switzerland: n.t("Switzerland"),
                        turkey: n.t("Turkey"),
                        italy: n.t("Italy"),
                        spain: n.t("Spain"),
                        ireland: n.t("Ireland"),
                        saudi_arabia: n.t("Saudi Arabia"),
                        serbia: n.t("Serbia"),
                        south_africa: n.t("South Africa"),
                        south_korea: n.t("South Korea"),
                        sweden: n.t("Sweden"),
                        norway: n.t("Norway"),
                        austria: n.t("Austria"),
                        australia: n.t("Australia"),
                        new_zealand: n.t("New Zealand"),
                        hong_kong: n.t("Hong Kong"),
                        taiwan: n.t("Taiwan"),
                        thailand: n.t("Thailand"),
                        singapore: n.t("Singapore"),
                        poland: n.t("Poland"),
                        indonesia: n.t("Indonesia"),
                        israel: n.t("Israel"),
                        chile: n.t("Chile"),
                        china: n.t("China"),
                        malaysia: n.t("Malaysia"),
                        bahrain: n.t("Bahrain"),
                        nigeria: n.t("Nigeria"),
                        peru: n.t("Peru"),
                        colombia: n.t("Colombia"),
                        qatar: n.t("Qatar"),
                        finland: n.t("Finland"),
                        iceland: n.t("Iceland"),
                        denmark: n.t("Denmark"),
                        lithuania: n.t("Lithuania"),
                        estonia: n.t("Estonia"),
                        latvia: n.t("Latvia"),
                        luxembourg: n.t("Luxembourg"),
                        vietnam: n.t("Vietnam"),
                        netherlands: n.t("Netherlands"),
                        belgium: n.t("Belgium"),
                        portugal: n.t("Portugal"),
                        france: n.t("France"),
                        philippines: n.t("Philippines"),
                        worldwide: n.t("Worldwide")
                    },
                    i = c[t.name] || t.name,
                    r = t.alt || e[t.name] || t.name;
                return s.createElement(h, {
                    name: i,
                    className: t.className,
                    title: t.title,
                    alt: r,
                    role: t.role
                })
            }
        },
        589424: (t, e, i) => {
            "use strict";
            i.d(e, {
                useFixedBody: () => n
            });
            var s = i(667294),
                r = i(159091);

            function n() {
                (0, s.useEffect)(() => ((0, r.setFixedBodyState)(!0), () => {
                    (0, r.setFixedBodyState)(!1)
                }), [])
            }
        },
        544086: (t, e, i) => {
            "use strict";
            i.d(e, {
                List: () => h
            });
            var s = i(667294),
                r = i(973935),
                n = i(836982),
                o = i(578433),
                a = i(294184);
            class l extends s.PureComponent {
                constructor(t) {
                    super(t)
                }
                render() {
                    return s.createElement("div", {
                        className: this.props.className,
                        onClick: this.props.onClick,
                        ref: this.props.reference
                    }, this.props.children)
                }
            }
            class h extends s.PureComponent {
                constructor(t) {
                    super(t)
                }
                render() {
                    const {
                        theme: t = o
                    } = this.props, e = a(t.list, {
                        [this.props.className]: Boolean(this.props.className)
                    }), {
                        fontSize: i = 13
                    } = this.props, r = {
                        bottom: this.props.bottom,
                        fontSize: i,
                        left: this.props.left,
                        height: this.props.height || "auto",
                        right: this.props.right,
                        top: this.props.top,
                        width: this.props.width,
                        zIndex: this.props.zIndex
                    };
                    return s.createElement(n, {
                        whitelist: ["height", "width"],
                        shouldMeasure: !!this.props.onMeasure,
                        onMeasure: this.props.onMeasure
                    }, s.createElement("div", {
                        className: e,
                        style: r,
                        ref: this.props.reference
                    }, this._wrapItems(this.props.items, this.props.selected)))
                }
                componentDidMount() {
                    if (this._el = r.findDOMNode(this), void 0 !== this.props.selected && this.props.shouldScrollIfNotVisible) {
                        const t = this._items[this.props.selected];
                        t && this._scrollIfNotVisible(t)
                    }
                }
                componentDidUpdate() {
                    if (void 0 !== this.props.selected && this.props.shouldScrollIfNotVisible) {
                        const t = this._items[this.props.selected];
                        t && this._scrollIfNotVisible(t)
                    }
                }
                _wrapItems(t = [], e) {
                    this._items = [];
                    const {
                        itemWrap: i = l,
                        theme: r = o
                    } = this.props, n = i;
                    return t.map((t, i) => {
                        const o = a(r.item, {
                            [this.props.itemsClassName]: Boolean(this.props.itemsClassName),
                            [this.props.selectedClassName]: e === i
                        });
                        return s.createElement(n, {
                            reference: e => {
                                e && this._items.push({
                                    elem: e,
                                    index: i,
                                    value: t
                                })
                            },
                            key: i,
                            onClick: () => this._onSelect(i),
                            className: o
                        }, t.elem)
                    })
                }
                _onSelect(t) {
                    this.props.onSelect && this.props.onSelect(t, this._items[t].value)
                }
                _scrollIfNotVisible(t) {
                    const e = this._el.scrollTop,
                        i = this._el.scrollTop + this._el.clientHeight,
                        s = t.elem.offsetTop,
                        r = s + t.elem.clientHeight;
                    s <= e ? t.elem.scrollIntoView(!0) : r >= i && t.elem.scrollIntoView(!1)
                }
            }
            h.defaultProps = {
                shouldScrollIfNotVisible: !0
            }
        },
        630587: (t, e, i) => {
            "use strict";
            i.d(e, {
                MobileDropdownMenu: () => y,
                useMobileDropdownMenu: () => v
            });
            var s = i(667294),
                r = i(416282),
                n = i(971928);

            function o(t, e, i) {
                const [r, n] = (0, s.useState)({});
                return (0, s.useEffect)(() => {
                    function s() {
                        n(function(t, e, i) {
                            if (t) return {
                                transform: "translateY(0)"
                            };
                            if (!i) return {};
                            let s = "";
                            switch (e) {
                                case "Bottomed":
                                    {
                                        const t = window.innerHeight;s = i.scrollHeight >= .65 * t ? "-65vh" : -i.scrollHeight + "px";
                                        break
                                    }
                                case "FullScreened":
                                    s = "-100vh";
                                    break;
                                case "Off":
                                    s = "0"
                            }
                            return {
                                transform: `translateY(${s})`
                            }
                        }(e, t, i))
                    }
                    return s(), window.removeEventListener("resize", s), window.addEventListener("resize", s), () => window.removeEventListener("resize", s)
                }, [t, e, i]), r
            }
            var a = i(858848);

            function l(t) {
                const e = (0, s.useRef)({
                    direction: null,
                    y: null
                });
                return (0, s.useRef)(function(t, e) {
                    return {
                        onTouchStart: function(t) {
                            e.current.y = t.touches[0].clientY
                        },
                        onTouchMove: (0, a.default)((function(i) {
                            if (i.changedTouches && i.changedTouches.length && null !== e.current.y) {
                                const s = i.changedTouches[0].clientY - e.current.y;
                                if (Math.abs(s) < 2) return;
                                e.current.direction = s > 0 ? "down" : "up", t(e.current.direction)
                            }
                        }), n.dur, {
                            trailing: !1
                        }),
                        onTouchEnd: function() {
                            e.current.direction = null, e.current.y = null
                        }
                    }
                }(t, e)).current
            }
            var h = i(589424),
                c = i(997838);

            function u(t, e) {
                switch (e.type) {
                    case "down":
                        return "FullScreened" === t ? "Bottomed" : "Bottomed" === t ? "Off" : t;
                    case "up":
                        return "Bottomed" === t && e.canReachFullScreen ? "FullScreened" : t;
                    default:
                        return t
                }
            }

            function d(t) {
                const {
                    children: e,
                    shouldClose: i,
                    setShouldClose: a,
                    onClose: d
                } = t, [p, f] = (0, s.useReducer)(u, "Bottomed"), g = (0, s.useRef)(null), m = o(p, i, g.current);
                ! function(t, e, i, r) {
                    (0, s.useEffect)(() => {
                        let s;
                        return "Off" === t && i(!0), e && (s = setTimeout(() => {
                            r()
                        }, n.dur)), () => {
                            clearTimeout(s)
                        }
                    }, [t, e, i, r])
                }(p, i, a, d);
                const _ = l((function(t) {
                        if ((0, r.ensureNotNull)(v.current).scrollTop > 0) return;
                        switch (t) {
                            case "down":
                                f({
                                    type: "down"
                                });
                                break;
                            case "up":
                                f({
                                    type: "up",
                                    canReachFullScreen: (0, r.ensureNotNull)(g.current).scrollHeight >= window.innerHeight / 2
                                })
                        }
                    })),
                    v = (0, s.useRef)(null);
                return (0, h.useFixedBody)(), s.createElement("div", {
                    className: c.menuWrapperOuter,
                    ref: t.reference
                }, s.createElement("div", {
                    className: c.menuWrapper,
                    style: m,
                    ref: v,
                    ..._
                }, s.createElement("div", {
                    className: c.menu,
                    ref: g
                }, e)))
            }
            var p = i(294184),
                f = i(445202);

            function g(t) {
                const e = function(t) {
                    const [e, i] = (0, s.useState)(!1);
                    return (0, s.useEffect)(() => {
                        i(t)
                    }, [t]), e
                }(t.isVisible);
                return s.createElement("div", {
                    className: p(f.menuOuter, e && f.isVisibleBackground)
                }, t.children)
            }
            var m = i(472625),
                _ = i(36493);

            function v() {
                const [t, e] = s.useState(!1), i = (0, _.useOutsideEvent)({
                    mouseDown: !0,
                    touchStart: !0,
                    handler: () => e(!0)
                });
                return {
                    shouldClose: t,
                    setShouldClose: e,
                    outsideEventContainerRef: i
                }
            }

            function y(t) {
                const {
                    setShouldClose: e,
                    reference: i,
                    shouldClose: r,
                    children: n,
                    onClose: o
                } = t;
                return s.createElement(m.Portal, null, s.createElement(g, {
                    isVisible: !r
                }, s.createElement(d, {
                    shouldClose: r,
                    setShouldClose: e,
                    onClose: o,
                    reference: i
                }, n)))
            }
        },
        373113: (t, e, i) => {
            "use strict";
            i.d(e, {
                Separator: () => o
            });
            var s = i(667294),
                r = i(294184),
                n = i(568552);

            function o(t) {
                return s.createElement("div", {
                    className: r(n.separator, t.className)
                })
            }
        },
        418088: (t, e, i) => {
            "use strict";
            i.d(e, {
                makeNavigateable: () => r
            });
            var s = i(667294);

            function r(t) {
                var e;
                return (e = class extends s.PureComponent {
                    constructor(t) {
                        super(t), this._items = this.props.items
                    }
                    componentDidUpdate(t) {
                        if (t.command !== this.props.command && this.props.command) switch (this.props.command.name) {
                            case "next":
                                this._next();
                                break;
                            case "prev":
                                this._prev()
                        }
                        t.items !== this.props.items && (this._items = this.props.items)
                    }
                    render() {
                        return s.createElement(t, { ...this.props
                        }, this.props.children)
                    }
                    _next() {
                        const {
                            selected: t = -1
                        } = this.props, e = t + 1;
                        this._items.length - 1 >= e ? this._navigateTo(e) : this._navigateTo(0)
                    }
                    _prev() {
                        const {
                            selected: t = -1
                        } = this.props, e = t - 1, i = this._items.length - 1;
                        0 <= e ? this._navigateTo(e) : this._navigateTo(i)
                    }
                    _navigateTo(t) {
                        this.props.onNavigate && this.props.onNavigate(t, this._items[t])
                    }
                }).displayName = "Navigateable Component", e
            }
        },
        198618: (t, e, i) => {
            "use strict";
            i.d(e, {
                OutsideEvent: () => r
            });
            var s = i(36493);

            function r(t) {
                const {
                    children: e,
                    ...i
                } = t;
                return e((0, s.useOutsideEvent)(i))
            }
        },
        558871: (t, e, i) => {
            "use strict";
            i.d(e, {
                makeOverlapable: () => n
            });
            var s = i(667294),
                r = i(472625);

            function n(t) {
                return class extends s.PureComponent {
                    render() {
                        const {
                            isOpened: e,
                            root: i
                        } = this.props;
                        if (!e) return null;
                        const n = s.createElement(t, { ...this.props,
                            zIndex: 150
                        });
                        return "parent" === i ? n : s.createElement(r.Portal, null, n)
                    }
                }
            }
        },
        726004: (t, e, i) => {
            "use strict";
            i.d(e, {
                ToolWidgetCaret: () => l
            });
            var s = i(667294),
                r = i(294184),
                n = i(640539),
                o = i(702632),
                a = i(385946);

            function l(t) {
                const {
                    dropped: e,
                    className: i
                } = t;
                return s.createElement(n.Icon, {
                    className: r(i, o.icon, {
                        [o.dropped]: e
                    }),
                    icon: a
                })
            }
        },
        71487: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M24.72 9.3a1 1 0 0 1-.03 1.42l-7.3 7a1 1 0 0 1-1.43-.05l-4.71-5.23-6.56 6.28a1 1 0 1 1-1.38-1.44l7.3-7a1 1 0 0 1 1.43.05l4.71 5.23 6.56-6.28a1 1 0 0 1 1.41.03z"/></svg>'
        },
        323391: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M24.72 9.3a1 1 0 0 1-.03 1.42l-7.3 7a1 1 0 0 1-1.43-.05l-4.71-5.23-6.56 6.28a1 1 0 1 1-1.38-1.44l7.3-7a1 1 0 0 1 1.43.05l4.71 5.23 6.56-6.28a1 1 0 0 1 1.41.03z"/></svg>'
        },
        385946: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
        },
        28843: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M23 18c0 2.75-2.25 5-5 5a5.02 5.02 0 0 1-3.23-8.83c.49-.46 1.03-.87 1.6-1.31l.15-.1c.46-.37.94-.74 1.4-1.15l.19.34c.26.48.49 1.08.49 1.65a10.9 10.9 0 0 1-.45 2.85l-.06.23-.01.06-.01.02-.18.64h.66c1.1 0 1.93-.4 2.5-1.06.38-.43.64-.95.8-1.5A4.84 4.84 0 0 1 23 18zm-1.79-5l-.13.8a3.8 3.8 0 0 1-.78 1.88c-.26.3-.62.54-1.09.65l.1-.46c.14-.66.29-1.53.29-2.27 0-.8-.32-1.58-.6-2.13a7.11 7.11 0 0 0-.6-.92l-.36-.45-.4.4c-.52.52-1.11.98-1.73 1.46l-.15.1c-.56.44-1.15.89-1.68 1.38A6.02 6.02 0 0 0 18 24c3.3 0 6-2.7 6-6a5.82 5.82 0 0 0-2.12-4.52zM10 4H9v2H6.5A2.5 2.5 0 0 0 4 8.5v11A2.5 2.5 0 0 0 6.5 22H10v-1H6.5A1.5 1.5 0 0 1 5 19.5v-11A1.5 1.5 0 0 1 6.5 7h13A1.5 1.5 0 0 1 21 8.5V10h1V8.5A2.5 2.5 0 0 0 19.5 6H17V4h-1v2h-6zm4 5h-2v2h2zM9 9H7v2h2zm-2 4h2v2H7zm0 4h2v2H7z"/></svg>'
        },
        678486: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M21 14.5a7.5 7.5 0 0 0-15 0v.5H5v-.5a8.5 8.5 0 1 1 8.5 8.5H13v-1h.5a7.5 7.5 0 0 0 7.5-7.5zm-8-.5V9h1v6h-4v-1h3zm-5.646 2.646l3.5 3.5.353.354-.353.354-3.5 3.5-.708-.708L9.293 21H3v-1h6.293l-2.647-2.646.708-.708z"/></svg>'
        },
        753985: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><g fill="none" fill-rule="evenodd"><path d="M9.5 8.5c1.105 0 2-.395 2-1.5s-.895-1.5-2-1.5h-3v3h3zm.5 4c1.38 0 2.5-.62 2.5-2s-1.12-2-2.5-2H6.5v4H10z"/><path stroke-linecap="square" d="M9.5 3.5V5m0 8v1.5m-2-1.5v1.5m-2-2H6m-.5-7H6m1.5-2V5"/><circle cx="9" cy="9" r="8.5"/></g></svg>'
        },
        944050: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%"><g fill="none" fill-rule="evenodd" stroke="currentColor"><circle cx="9" cy="9" r="8.5"/><path stroke-linecap="square" d="M5.5 13.5v-9h4m-2 4H6m3.5 1l3 4m0-4l-3 4"/></g></svg>'
        },
        195777: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M2.5 14.5c1.68-1.26 3.7-2 6.5-2s4.91.74 6.5 2m-13-11c1.68 1.26 3.7 2 6.5 2s4.91-.74 6.5-2"/><circle stroke="currentColor" cx="9" cy="9" r="8.5"/><path stroke="currentColor" d="M13.5 9c0 2.42-.55 4.58-1.4 6.12-.87 1.56-1.98 2.38-3.1 2.38s-2.23-.82-3.1-2.38c-.85-1.54-1.4-3.7-1.4-6.12s.55-4.58 1.4-6.12C6.77 1.32 7.88.5 9 .5s2.23.82 3.1 2.38c.85 1.54 1.4 3.7 1.4 6.12z"/></svg>'
        },
        4980: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15" width="18" height="15"><g fill="none" stroke="currentColor"><path d="M12.5 2.5l5 5-5 5M10.5.5l-3 14M5.5 2.5l-5 5 5 5"/></g></svg>'
        },
        636520: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 9" width="24" height="9" fill="none"><path fill="currentcolor" d="M23.66 1.75l-6.6 5.77a3 3 0 0 1-4.1-.14L8.72 3.12a1 1 0 0 0-1.42 0L1.71 8.71.29 7.29l5.59-5.58a3 3 0 0 1 4.24 0l4.26 4.26a1 1 0 0 0 1.37.05l6.6-5.77 1.3 1.5z"/></svg>'
        },
        354951: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" width="24" height="16" fill="none"><path fill="currentcolor" d="M23.66 1.75l-6.6 5.77a3 3 0 0 1-4.1-.14L8.72 3.12a1 1 0 0 0-1.42 0L1.71 8.71.29 7.29l5.59-5.58a3 3 0 0 1 4.24 0l4.26 4.26a1 1 0 0 0 1.37.05l6.6-5.77 1.3 1.5z"/><path fill="currentcolor" d="M23 8a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0V8zm-12 3a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4zm4 2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm3-3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1zM6 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zm-3 5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2z"/></svg>'
        },
        703181: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 1.5L3.5 7l5 5.5"/></svg>'
        },
        856454: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 24" width="20" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.06.07a6 6 0 0 1 5.18 1.69 6 6 0 0 1 1.1 1.52l-1.78.9a4 4 0 0 0-2.78-2.1A4 4 0 0 0 6 6v2h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4V6A6 6 0 0 1 9.06.07zM16 10H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-7 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>'
        },
        333391: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="10"/><path stroke-linecap="round" d="M14 18h4v-6"/></g></svg>'
        },
        548984: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><path fill="none" stroke="currentColor" stroke-width="2" d="M18 28c5.5 0 10-4.5 10-10 0-5-3.5-7.5-3.5-7.5-.5 3-2 5.5-5.5 5.5 0 0 1-3.5 1-6s-2-5-2-5C14 9 8 11 8 18c0 5.5 4.5 10 10 10z"/></svg>'
        },
        386111: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"><g fill="none" fill-rule="evenodd"><circle stroke="currentColor" stroke-width="2" cx="18" cy="18" r="10"/><path fill="currentColor" d="M16 13.508v8.984a.5.5 0 0 0 .834.372l5.003-4.492a.5.5 0 0 0 0-.744l-5.003-4.492a.5.5 0 0 0-.834.372z"/></g></svg>'
        },
        811797: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" width="8" height="14"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M2 2l4 5-4 5"/></svg>'
        },
        194803: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.5 1.5l5 5.5-5 5.5"/></svg>'
        },
        739123: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 10" width="22" height="10" fill="none"><path fill="currentcolor" d="M10 1a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0V1zm4 3a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V4zm3 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm5-4a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0V2zM5 3a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zM2 7a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0V7z"/></svg>'
        },
        104879: (t, e, i) => {
            var s = {
                "./flag-square-ad.svg": 277431,
                "./flag-square-ae.svg": 487855,
                "./flag-square-af.svg": 846838,
                "./flag-square-ag.svg": 219112,
                "./flag-square-ai.svg": 830864,
                "./flag-square-al.svg": 349775,
                "./flag-square-am.svg": 869031,
                "./flag-square-ao.svg": 399296,
                "./flag-square-ar.svg": 463010,
                "./flag-square-as.svg": 611712,
                "./flag-square-at.svg": 244161,
                "./flag-square-au.svg": 559686,
                "./flag-square-aw.svg": 567851,
                "./flag-square-ax.svg": 263471,
                "./flag-square-az.svg": 945185,
                "./flag-square-ba.svg": 966755,
                "./flag-square-bb.svg": 273472,
                "./flag-square-bd.svg": 913060,
                "./flag-square-be.svg": 756199,
                "./flag-square-bf.svg": 909687,
                "./flag-square-bg.svg": 91995,
                "./flag-square-bh.svg": 101440,
                "./flag-square-bi.svg": 785239,
                "./flag-square-bj.svg": 524226,
                "./flag-square-bl.svg": 667596,
                "./flag-square-bm.svg": 21340,
                "./flag-square-bn.svg": 851258,
                "./flag-square-bo.svg": 783397,
                "./flag-square-bq.svg": 651253,
                "./flag-square-br.svg": 364253,
                "./flag-square-bs.svg": 824059,
                "./flag-square-bt.svg": 829951,
                "./flag-square-btc.svg": 482317,
                "./flag-square-bw.svg": 312762,
                "./flag-square-by.svg": 545475,
                "./flag-square-bz.svg": 48871,
                "./flag-square-ca.svg": 849665,
                "./flag-square-cc.svg": 147939,
                "./flag-square-cd.svg": 501534,
                "./flag-square-cf.svg": 91592,
                "./flag-square-cg.svg": 293941,
                "./flag-square-ch.svg": 640514,
                "./flag-square-ci.svg": 295761,
                "./flag-square-ck.svg": 7e5,
                "./flag-square-cl.svg": 807371,
                "./flag-square-cm.svg": 777158,
                "./flag-square-cn.svg": 57906,
                "./flag-square-co.svg": 963836,
                "./flag-square-cr.svg": 910513,
                "./flag-square-cu.svg": 666158,
                "./flag-square-cv.svg": 34440,
                "./flag-square-cw.svg": 101683,
                "./flag-square-cx.svg": 627453,
                "./flag-square-cy.svg": 492378,
                "./flag-square-cz.svg": 987683,
                "./flag-square-de.svg": 599769,
                "./flag-square-dj.svg": 272564,
                "./flag-square-dk.svg": 716808,
                "./flag-square-dm.svg": 331572,
                "./flag-square-do.svg": 60388,
                "./flag-square-dz.svg": 529016,
                "./flag-square-ec.svg": 472792,
                "./flag-square-ee.svg": 405862,
                "./flag-square-eg.svg": 971321,
                "./flag-square-eh.svg": 402459,
                "./flag-square-er.svg": 629760,
                "./flag-square-es.svg": 509278,
                "./flag-square-et.svg": 392599,
                "./flag-square-eu.svg": 967132,
                "./flag-square-fi.svg": 12099,
                "./flag-square-fj.svg": 832423,
                "./flag-square-fk.svg": 75511,
                "./flag-square-fm.svg": 625515,
                "./flag-square-fo.svg": 391112,
                "./flag-square-forex.svg": 447094,
                "./flag-square-fr.svg": 59315,
                "./flag-square-ga.svg": 382821,
                "./flag-square-gb.svg": 573306,
                "./flag-square-gd.svg": 189539,
                "./flag-square-ge.svg": 855061,
                "./flag-square-gf.svg": 939483,
                "./flag-square-gg.svg": 865614,
                "./flag-square-gh.svg": 256932,
                "./flag-square-gi.svg": 364749,
                "./flag-square-gl.svg": 160257,
                "./flag-square-gm.svg": 125797,
                "./flag-square-gn.svg": 139174,
                "./flag-square-gp.svg": 43438,
                "./flag-square-gq.svg": 848104,
                "./flag-square-gr.svg": 623748,
                "./flag-square-gs.svg": 944571,
                "./flag-square-gt.svg": 549078,
                "./flag-square-gu.svg": 33037,
                "./flag-square-gw.svg": 202074,
                "./flag-square-gy.svg": 134221,
                "./flag-square-hk.svg": 364833,
                "./flag-square-hn.svg": 463365,
                "./flag-square-hr.svg": 96318,
                "./flag-square-ht.svg": 367530,
                "./flag-square-hu.svg": 805549,
                "./flag-square-id.svg": 158438,
                "./flag-square-ie.svg": 788307,
                "./flag-square-ik.svg": 795984,
                "./flag-square-il.svg": 534244,
                "./flag-square-im.svg": 63716,
                "./flag-square-in.svg": 348726,
                "./flag-square-io.svg": 911145,
                "./flag-square-iq.svg": 576285,
                "./flag-square-ir.svg": 959322,
                "./flag-square-is.svg": 800284,
                "./flag-square-it.svg": 310794,
                "./flag-square-je.svg": 236276,
                "./flag-square-jm.svg": 173869,
                "./flag-square-jo.svg": 406122,
                "./flag-square-jp.svg": 806922,
                "./flag-square-ke.svg": 462814,
                "./flag-square-kg.svg": 665618,
                "./flag-square-kh.svg": 544130,
                "./flag-square-ki.svg": 650852,
                "./flag-square-km.svg": 279101,
                "./flag-square-kn.svg": 281055,
                "./flag-square-kp.svg": 51177,
                "./flag-square-kr.svg": 447504,
                "./flag-square-kw.svg": 846265,
                "./flag-square-ky.svg": 313306,
                "./flag-square-kz.svg": 787442,
                "./flag-square-la.svg": 640787,
                "./flag-square-lb.svg": 663019,
                "./flag-square-lc.svg": 825679,
                "./flag-square-li.svg": 362037,
                "./flag-square-lk.svg": 346603,
                "./flag-square-lr.svg": 644991,
                "./flag-square-ls.svg": 562255,
                "./flag-square-lt.svg": 832295,
                "./flag-square-lu.svg": 42882,
                "./flag-square-lv.svg": 977143,
                "./flag-square-ly.svg": 308083,
                "./flag-square-ma.svg": 567420,
                "./flag-square-mc.svg": 822090,
                "./flag-square-md.svg": 78486,
                "./flag-square-me.svg": 163075,
                "./flag-square-mf.svg": 872413,
                "./flag-square-mg.svg": 798225,
                "./flag-square-mh.svg": 241026,
                "./flag-square-mk.svg": 892157,
                "./flag-square-ml.svg": 977024,
                "./flag-square-mm.svg": 429481,
                "./flag-square-mn.svg": 558174,
                "./flag-square-mo.svg": 918366,
                "./flag-square-mock-dark.svg": 390291,
                "./flag-square-mock.svg": 532559,
                "./flag-square-mp.svg": 452096,
                "./flag-square-mq.svg": 653648,
                "./flag-square-mr.svg": 231564,
                "./flag-square-ms.svg": 137654,
                "./flag-square-mt.svg": 436983,
                "./flag-square-mu.svg": 259725,
                "./flag-square-mv.svg": 555798,
                "./flag-square-mw.svg": 181634,
                "./flag-square-mx.svg": 787276,
                "./flag-square-my.svg": 539857,
                "./flag-square-mz.svg": 733093,
                "./flag-square-na.svg": 232341,
                "./flag-square-nc.svg": 804874,
                "./flag-square-ne.svg": 770015,
                "./flag-square-nf.svg": 593575,
                "./flag-square-ng.svg": 700177,
                "./flag-square-ni.svg": 391252,
                "./flag-square-nl.svg": 376341,
                "./flag-square-no.svg": 80209,
                "./flag-square-np.svg": 938688,
                "./flag-square-nr.svg": 23162,
                "./flag-square-nu.svg": 953323,
                "./flag-square-nz.svg": 619879,
                "./flag-square-om.svg": 20769,
                "./flag-square-pa.svg": 43938,
                "./flag-square-pe.svg": 661591,
                "./flag-square-pf.svg": 715319,
                "./flag-square-pg.svg": 538418,
                "./flag-square-ph.svg": 552185,
                "./flag-square-pk.svg": 511063,
                "./flag-square-pl.svg": 734979,
                "./flag-square-pm.svg": 830302,
                "./flag-square-pr.svg": 783764,
                "./flag-square-ps.svg": 644359,
                "./flag-square-pt.svg": 837269,
                "./flag-square-pw.svg": 84452,
                "./flag-square-py.svg": 325903,
                "./flag-square-qa.svg": 312442,
                "./flag-square-re.svg": 335248,
                "./flag-square-ro.svg": 801195,
                "./flag-square-rs.svg": 954617,
                "./flag-square-ru.svg": 106702,
                "./flag-square-rw.svg": 665030,
                "./flag-square-sa.svg": 958541,
                "./flag-square-sb.svg": 918277,
                "./flag-square-sc.svg": 768713,
                "./flag-square-sd.svg": 58480,
                "./flag-square-se.svg": 846803,
                "./flag-square-sg.svg": 286390,
                "./flag-square-sh.svg": 523,
                "./flag-square-si.svg": 245767,
                "./flag-square-sj.svg": 72946,
                "./flag-square-sk.svg": 905344,
                "./flag-square-sl.svg": 579035,
                "./flag-square-sm.svg": 637536,
                "./flag-square-sn.svg": 129053,
                "./flag-square-so.svg": 86055,
                "./flag-square-sr.svg": 541654,
                "./flag-square-ss.svg": 242251,
                "./flag-square-st.svg": 633627,
                "./flag-square-sv.svg": 211983,
                "./flag-square-sx.svg": 243149,
                "./flag-square-sy.svg": 522995,
                "./flag-square-sz.svg": 541030,
                "./flag-square-tc.svg": 940754,
                "./flag-square-td.svg": 458310,
                "./flag-square-tg.svg": 99720,
                "./flag-square-th.svg": 891382,
                "./flag-square-tj.svg": 635975,
                "./flag-square-tk.svg": 471326,
                "./flag-square-tl.svg": 528217,
                "./flag-square-tm.svg": 162469,
                "./flag-square-tn.svg": 875514,
                "./flag-square-to.svg": 652593,
                "./flag-square-tr.svg": 331729,
                "./flag-square-tt.svg": 591948,
                "./flag-square-tv.svg": 375974,
                "./flag-square-tw.svg": 447338,
                "./flag-square-tz.svg": 349021,
                "./flag-square-ua.svg": 82026,
                "./flag-square-ug.svg": 389760,
                "./flag-square-uk.svg": 288398,
                "./flag-square-us.svg": 385612,
                "./flag-square-uy.svg": 378455,
                "./flag-square-uz.svg": 44390,
                "./flag-square-va.svg": 290978,
                "./flag-square-vc.svg": 14550,
                "./flag-square-ve.svg": 580865,
                "./flag-square-vg.svg": 552902,
                "./flag-square-vi.svg": 981312,
                "./flag-square-vn.svg": 877568,
                "./flag-square-vu.svg": 156447,
                "./flag-square-wf.svg": 753010,
                "./flag-square-ws.svg": 521376,
                "./flag-square-ww.svg": 707721,
                "./flag-square-xk.svg": 552616,
                "./flag-square-ye.svg": 30819,
                "./flag-square-yt.svg": 955065,
                "./flag-square-za.svg": 769721,
                "./flag-square-zm.svg": 885950,
                "./flag-square-zw.svg": 182909
            };

            function r(t) {
                var e = n(t);
                return i(e)
            }

            function n(t) {
                if (!i.o(s, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return s[t]
            }
            r.keys = function() {
                return Object.keys(s)
            }, r.resolve = n, t.exports = r, r.id = 104879
        },
        954122: t => {
            "use strict";
            t.exports = JSON.parse('{"us":{"title":"USA","screenerName":"america","screenerTimezone":"America/New_York","exchangeDefault":"US","exchangesForHotlist":["AMEX","NASDAQ","NYSE","OTC","US"],"exchangesStocks":["NASDAQ","NYSE","NYSE ARCA","OTC"],"group":"North America"},"ae":{"title":"United Arab Emirates","screenerName":"uae","screenerTimezone":"Asia/Dubai","exchangesStocks":["DFM"],"group":"Middle East / Africa"},"ar":{"title":"Argentina","screenerName":"argentina","screenerTimezone":"America/Argentina/Buenos_Aires","exchangesForHotlist":["BCBA"],"exchangesStocks":["BYMA"],"defaultExchange":"BCBA","group":"Mexico and South America"},"at":{"title":"Austria"},"au":{"title":"Australia","screenerName":"australia","screenerTimezone":"Australia/Sydney","exchangesStocks":["ASX"],"group":"Asia / Pacific"},"be":{"title":"Belgium","screenerName":"belgium","screenerTimezone":"Europe/Brussels","exchangesForHotlist":["EURONEXT_BRU"],"exchangesStocks":["EURONEXTBRU"],"exchangeDefault":"EURONEXT_BRU","group":"Europe"},"bh":{"title":"Bahrain","screenerName":"bahrain","screenerTimezone":"Asia/Bahrain","exchangesStocks":["BAHRAIN"],"group":"Middle East / Africa"},"br":{"title":"Brazil","screenerName":"brazil","screenerTimezone":"America/Sao_Paulo","exchangesStocks":["BMFBOVESPA"],"group":"Mexico and South America"},"ca":{"title":"Canada","screenerName":"canada","screenerTimezone":"America/Toronto","exchangesStocks":["TSX","TSXV","CSE","NEO"],"group":"North America"},"ch":{"title":"Switzerland","screenerName":"switzerland","screenerTimezone":"Europe/Zurich","exchangesStocks":["SIX"],"group":"Europe"},"cl":{"title":"Chile","screenerName":"chile","screenerTimezone":"America/Santiago","exchangesStocks":["BCS"],"group":"Mexico and South America"},"cn":{"title":"China","tvLocale":"zh_CN","screenerName":"china","screenerTimezone":"Asia/Hong_Kong","exchangesStocks":["SSE","SZSE"],"group":"Asia / Pacific"},"co":{"title":"Colombia","screenerName":"colombia","screenerTimezone":"America/Bogota","exchangesStocks":["BVC"],"group":"Mexico and South America"},"cz":{"title":"Czech Republic"},"de":{"title":"Germany","tvLocale":"de_DE","screenerName":"germany","screenerTimezone":"Europe/Berlin","exchangeDefault":"XETR","exchangesStocks":["FWB","SWB","XETR","BER","DUS","HAM","HAN","MUN"],"group":"Europe"},"dk":{"title":"Denmark","screenerName":"denmark","screenerTimezone":"Europe/Copenhagen","exchangesStocks":["OMXCOP"],"group":"Europe"},"ee":{"title":"Estonia","screenerName":"estonia","screenerTimezone":"Europe/Tallinn","exchangesStocks":["OMXTSE"],"group":"Europe"},"eg":{"title":"Egypt","screenerName":"egypt","screenerTimezone":"Africa/Cairo","exchangesStocks":["EGX"],"group":"Middle East / Africa"},"es":{"title":"Spain","screenerName":"spain","screenerTimezone":"Europe/Madrid","exchangesStocks":["BME"],"group":"Europe"},"eu":{"title":"European Union","screenerName":"euronext","screenerTimezone":"Europe/Paris","exchangesForHotlist":[],"exchangesStocks":["EURONEXT"]},"fi":{"title":"Finland","screenerName":"finland","screenerTimezone":"Europe/Helsinki","exchangesStocks":["OMXHEX"],"group":"Europe"},"fr":{"title":"France","screenerName":"france","screenerTimezone":"Europe/Paris","exchangesForHotlist":["EURONEXT_PAR"],"exchangesStocks":["EURONEXTPAR"],"defaultExchange":"EURONEXT_PAR","group":"Europe"},"gr":{"title":"Greece","screenerName":"greece","screenerTimezone":"Europe/Athens","exchangesStocks":["ATHEX"],"group":"Europe"},"hk":{"title":"Hong Kong","screenerName":"hongkong","screenerTimezone":"Asia/Hong_Kong","exchangesStocks":["HKEX"],"group":"Asia / Pacific"},"hu":{"title":"Hungary"},"id":{"title":"Indonesia","screenerName":"indonesia","screenerTimezone":"Asia/Jakarta","exchangesStocks":["IDX"],"group":"Asia / Pacific"},"ie":{"title":"Ireland"},"il":{"title":"Israel","screenerName":"israel","screenerTimezone":"Asia/Jerusalem","exchangesStocks":["TASE"],"group":"Middle East / Africa"},"in":{"title":"India","screenerName":"india","screenerTimezone":"Asia/Kolkata","exchangesStocks":["BSE","NSE"],"group":"Asia / Pacific"},"ir":{"title":"Iran"},"is":{"title":"Iceland","screenerName":"iceland","screenerTimezone":"Atlantic/Reykjavik","exchangesStocks":["OMXICE"],"group":"Europe"},"it":{"title":"Italy","screenerName":"italy","screenerTimezone":"Europe/Rome","exchangesForHotlist":["MIL"],"exchangesStocks":["MIL"],"group":"Europe"},"jp":{"title":"Japan","tvLocale":"ja","screenerName":"japan","screenerTimezone":"Asia/Tokyo","exchangeDefault":"TSE","exchangesForHotlist":["NAG","TSE"],"exchangesStocks":["TSE","NAG","FSE","SAPSE"],"group":"Asia / Pacific"},"kp":{"title":"Noth Korea"},"kr":{"title":"South Korea","tvLocale":"kr","screenerName":"korea","screenerTimezone":"Asia/Seoul","exchangesStocks":["KRX"],"group":"Asia / Pacific"},"lt":{"title":"Lithuania","screenerName":"lithuania","screenerTimezone":"Europe/Vilnius","exchangesStocks":["OMXVSE"],"group":"Europe"},"lv":{"title":"Latvia","screenerName":"latvia","screenerTimezone":"Europe/Riga","exchangesStocks":["OMXRSE"],"group":"Europe"},"lu":{"title":"Luxembourg","screenerName":"luxembourg","screenerTimezone":"Europe/Luxembourg","exchangesStocks":["LUXSE"],"exchangesForHotlist":["LUXSE"],"defaultExchange":"LUXSE","exchangeDefault":"LUXSE","group":"Europe"},"mx":{"title":"Mexico","screenerName":"mexico","screenerTimezone":"America/Mexico_City","exchangesStocks":["BMV"],"group":"Mexico and South America"},"my":{"title":"Malaysia","tvLocale":"ms_MY","screenerName":"malaysia","screenerTimezone":"Asia/Singapore","exchangesStocks":["MYX"],"group":"Asia / Pacific"},"ng":{"title":"Nigeria","screenerName":"nigeria","screenerTimezone":"Africa/Lagos","exchangesStocks":["NSENG"],"group":"Middle East / Africa"},"nl":{"title":"Netherlands","screenerName":"netherlands","screenerTimezone":"Europe/Amsterdam","exchangesForHotlist":["EURONEXT_AMS"],"exchangesStocks":["EURONEXTAMS"],"defaultExchange":"EURONEXT_AMS","group":"Europe"},"no":{"title":"Norway","screenerName":"norway","screenerTimezone":"Europe/Oslo","exchangesForHotlist":["OSL"],"exchangesStocks":["EURONEXTOSE"],"defaultExchange":"OSL","group":"Europe"},"nz":{"title":"New Zealand","screenerName":"newzealand","screenerTimezone":"Pacific/Auckland","exchangesStocks":["NZX"],"group":"Asia / Pacific"},"pe":{"title":"Peru","screenerName":"peru","screenerTimezone":"America/Lima","exchangesStocks":["BVL"],"group":"Mexico and South America"},"ph":{"title":"Philippines","screenerName":"philippines","screenerTimezone":"Philippines/Manila","exchangesStocks":["PSE"],"group":"Asia / Pacific"},"pl":{"title":"Poland","screenerName":"poland","screenerTimezone":"Europe/Warsaw","exchangesStocks":["GPW","NEWCONNECT"],"group":"Europe"},"pt":{"title":"Portugal","screenerName":"portugal","screenerTimezone":"Europe/Lisbon","exchangesForHotlist":["EURONEXT_LIS"],"exchangesStocks":["EURONEXTLIS"],"defaultExchange":"EURONEXT_LIS","group":"Europe"},"qa":{"title":"Qatar","screenerName":"qatar","screenerTimezone":"Asia/Qatar","exchangesStocks":["QSE"],"group":"Middle East / Africa"},"ro":{"title":"Romania"},"rs":{"title":"Serbia","screenerName":"serbia","screenerTimezone":"Europe/Belgrade","exchangesStocks":["BELEX"],"group":"Europe"},"ru":{"title":"Russia","screenerName":"russia","screenerTimezone":"Europe/Moscow","exchangesStocks":["MOEX"],"group":"Europe"},"sa":{"title":"Saudi Arabia","tvLocale":"ar_AE","screenerName":"ksa","screenerTimezone":"Asia/Riyadh","exchangesStocks":["TADAWUL"],"group":"Middle East / Africa"},"se":{"title":"Sweden","tvLocale":"sv_SE","screenerName":"sweden","screenerTimezone":"Europe/Stockholm","exchangesStocks":["NGM","OMXSTO"],"exchangesForHotlist":["NGM","OMXSTO"],"group":"Europe"},"sg":{"title":"Singapore","screenerName":"singapore","screenerTimezone":"Asia/Singapore","exchangesStocks":["SGX"],"group":"Asia / Pacific"},"sk":{"title":"Slovakia","screenerName":"slovakia","screenerTimezone":"Europe/Bratislava","exchangesStocks":["BSSE"],"group":"Europe"},"th":{"title":"Thailand","tvLocale":"th_TH","screenerName":"thailand","screenerTimezone":"Asia/Bangkok","exchangesStocks":["SET"],"group":"Asia / Pacific"},"tr":{"title":"Turkey","screenerName":"turkey","screenerTimezone":"Europe/Istanbul","exchangesStocks":["BIST"],"group":"Europe"},"tw":{"title":"Taiwan","tvLocale":"zh_TW","screenerName":"taiwan","screenerTimezone":"Asia/Taipei","exchangesStocks":["TWSE","TPEX"],"group":"Asia / Pacific"},"uk":{"title":"United Kingdom","screenerName":"uk","screenerTimezone":"Europe/London","exchangeDefault":"US","exchangesStocks":["LSE","LSIN"],"group":"Europe"},"vn":{"title":"Vietnam","tvLocale":"vi_VN","screenerName":"vietnam","screenerTimezone":"Asia/Ho_Chi_Minh","exchangesStocks":["HOSE","HNX","UPCOM"],"group":"Asia / Pacific"},"za":{"title":"South Africa","screenerName":"rsa","screenerTimezone":"Africa/Johannesburg","exchangesStocks":["JSE"],"group":"Middle East / Africa"},"ww":{"title":"Worldwide"}}')
        },
        533333: t => {
            "use strict";
            t.exports = JSON.parse('{"US":"stocks-usa","AMEX":"stocks-usa","ASX":"stocks-australia","BAHRAIN":"stocks-bahrain","BCBA":"stocks-argentina","BCS":"stocks-chile","BELEX":"stocks-serbia","BIST":"stocks-turkey","BME":"stocks-spain","BMFBOVESPA":"stocks-brazilia","BMV":"stocks-mexico","BSE":"stocks-india","BVC":"stocks-colombia","BVL":"stocks-peru","DFM":"stocks-uae","EGX":"stocks-egypt","EURONEXT":"stocks-europe","FWB":"stocks-germany","GPW":"stocks-poland","HKEX":"stocks-hong-kong","IDX":"stocks-indonesia","LSE":"stocks-united-kingdom","LSIN":"stocks-united-kingdom","MIL":"stocks-italy","MOEX":"stocks-russia","MYX":"stocks-malaysia","NAG":"stocks-japan","NASDAQ":"stocks-usa","NSE":"stocks-india","NSENG":"stocks-nigeria","NYSE":"stocks-usa","NZX":"stocks-new-zealand","OTC":"stocks-usa","QSE":"stocks-qatar","SGX":"stocks-singapore","SIX":"stocks-switzerland","SWB":"stocks-germany","SZSE":"stocks-china","SSE":"stocks-china","TADAWUL":"stocks-ksa","TASE":"stocks-israel","TSE":"stocks-japan","TSX":"stocks-canada","TSXV":"stocks-canada","TWSE":"stocks-taiwan","XETR":"stocks-germany"}')
        },
        110334: t => {
            "use strict";
            t.exports = JSON.parse('{"ar_AE":{"language":"ar","language_name":"العربية","flag":"ae","geoip_code":"ae","countries_with_this_language":["ae","bh","dj","dz","eg","er","iq","jo","km","kw","lb","ly","ma","mr","om","qa","sa","sd","so","sy","td","tn","ye"],"priority":500,"is_site_locale":true,"dir":"rtl","iso":"ar","iso_639_3":"arb","show_on_widgets":true,"name_on_widgets":"العَرَبِيَّة‎‎","global_name":"Arabic"},"br":{"language":"pt","language_name":"Português","flag":"br","geoip_code":"br","priority":650,"is_site_locale":true,"iso":"pt","iso_639_3":"por","show_on_widgets":true,"name_on_widgets":"Português","global_name":"Portuguese"},"cs":{"language":"cs","language_name":"Czech","flag":"cz","geoip_code":"cz","priority":718,"is_site_locale":true,"iso":"cs","iso_639_3":"ces","show_on_widgets":true,"name_on_widgets":"Česky","global_name":"Czech","is_in_european_union":true,"isBattle":true},"de_DE":{"language":"de","language_name":"Deutsch","flag":"de","geoip_code":"de","countries_with_this_language":["at","ch"],"priority":756,"is_site_locale":true,"iso":"de","iso_639_3":"de","show_on_widgets":true,"name_on_widgets":"Deutsch","global_name":"German","is_in_european_union":true},"en":{"language":"en","language_name":"English","flag":"us","geoip_code":"us","priority":1000,"is_site_locale":true,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"name_on_widgets":"English","global_name":"English","is_only_recommended_tw_autorepost":true},"es":{"language":"es","language_name":"Español","flag":"es","geoip_code":"es","countries_with_this_language":["mx","ar","ve","cl","co","pe","uy","py","cr","gt","c","bo","pa","pr"],"priority":744,"is_site_locale":true,"iso":"es","iso_639_3":"spa","show_on_widgets":true,"name_on_widgets":"Español","global_name":"Spanish","is_in_european_union":true},"fa_IR":{"language":"fa","language_name":"فارسى","flag":"ir","geoip_code":"ir","priority":480,"is_site_locale":true,"dir":"rtl","iso":"fa","iso_639_3":"fas","show_on_widgets":true,"name_on_widgets":"فارسی","global_name":"Iranian"},"fr":{"language":"fr","language_name":"Français","flag":"fr","geoip_code":"fr","priority":750,"is_site_locale":true,"iso":"fr","iso_639_3":"fra","show_on_widgets":true,"name_on_widgets":"French","global_name":"French","is_in_european_union":true},"he_IL":{"language":"he_IL","language_name":"עברית","flag":"il","geoip_code":"il","priority":490,"is_site_locale":true,"dir":"rtl","iso":"he","iso_639_3":"heb","show_on_widgets":true,"name_on_widgets":"‏עברית‏","global_name":"Israeli"},"hu_HU":{"language":"hu_HU","language_name":"Magyar","flag":"hu","geoip_code":"hu","priority":724,"is_site_locale":true,"iso":"hu","iso_639_3":"hun","show_on_widgets":true,"name_on_widgets":"Magyar","global_name":"Hungarian","is_in_european_union":true},"id":{"language":"id_ID","language_name":"Bahasa Indonesia","flag":"id","geoip_code":"id","priority":648,"is_site_locale":true,"iso":"id","iso_639_3":"ind","show_on_widgets":true,"name_on_widgets":"Indonesia","global_name":"Indonesian"},"in":{"language":"en","language_name":"English (India)","flag":"in","geoip_code":"in","priority":800,"is_site_locale":true,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"name_on_widgets":"India","global_name":"Indian"},"it":{"language":"it","language_name":"Italiano","flag":"it","geoip_code":"it","priority":737,"is_site_locale":true,"iso":"it","iso_639_3":"ita","show_on_widgets":true,"name_on_widgets":"Italiano","global_name":"Italian","is_in_european_union":true},"ja":{"language":"ja","language_name":"日本語","flag":"jp","geoip_code":"jp","priority":600,"is_site_locale":true,"iso":"ja","iso_639_3":"jpn","show_on_widgets":true,"name_on_widgets":"日本語","global_name":"Japanese"},"kr":{"language":"ko","language_name":"한국어","flag":"kr","geoip_code":"kr","priority":550,"is_site_locale":true,"iso":"ko","iso_639_3":"kor","show_on_widgets":true,"name_on_widgets":"한국어","global_name":"Korean"},"ms_MY":{"language":"ms_MY","language_name":"Bahasa Melayu","flag":"my","geoip_code":"my","priority":647,"is_site_locale":true,"iso":"ms","iso_639_3":"zlm","show_on_widgets":true,"name_on_widgets":"Malay [Malaysia]","global_name":"Malaysian"},"pl":{"language":"pl","language_name":"Polski","flag":"pl","geoip_code":"pl","priority":725,"is_site_locale":true,"iso":"pl","iso_639_3":"pol","show_on_widgets":true,"name_on_widgets":"Polski","global_name":"Polish","is_in_european_union":true},"ru":{"language":"ru","language_name":"Русский","flag":"ru","geoip_code":"ru","countries_with_this_language":["am","by","kg","kz","md","tj","tm","uz"],"priority":700,"is_site_locale":true,"iso":"ru","iso_639_3":"rus","show_on_widgets":true,"name_on_widgets":"Русский","global_name":"Russian","is_only_recommended_tw_autorepost":true},"sv_SE":{"language":"sv","language_name":"Svenska","flag":"se","geoip_code":"se","priority":723,"is_site_locale":true,"iso":"sv","iso_639_3":"swe","show_on_widgets":true,"name_on_widgets":"Swedish","global_name":"Swedish","is_in_european_union":true},"th_TH":{"language":"th","language_name":"ภาษาไทย","flag":"th","geoip_code":"th","priority":646,"is_site_locale":true,"iso":"th","iso_639_3":"tha","show_on_widgets":true,"name_on_widgets":"ภาษาไทย","global_name":"Thai"},"tr":{"language":"tr","language_name":"Türkçe","flag":"tr","geoip_code":"tr","priority":713,"is_site_locale":true,"iso":"tr","iso_639_3":"tur","show_on_widgets":true,"name_on_widgets":"Türkçe","global_name":"Turkish","is_only_recommended_tw_autorepost":true},"vi_VN":{"language":"vi","language_name":"Tiếng Việt","flag":"vn","geoip_code":"vn","priority":645,"is_site_locale":true,"iso":"vi","iso_639_3":"vie","show_on_widgets":true,"name_on_widgets":"Tiếng Việt","global_name":"Vietnamese"},"zh_CN":{"language":"zh","language_name":"简体中文","flag":"cn","geoip_code":"cn","countries_with_this_language":["zh"],"priority":537,"is_site_locale":true,"iso":"zh-Hans","iso_639_3":"cmn","show_on_widgets":true,"name_on_widgets":"简体中文","global_name":"Chinese"},"zh_TW":{"language":"zh_TW","language_name":"繁體中文","flag":"tw","geoip_code":"tw","countries_with_this_language":["hk"],"priority":536,"is_site_locale":true,"iso":"zh-Hant","iso_639_3":"cmn","show_on_widgets":true,"name_on_widgets":"繁體中文","global_name":"Taiwanese"},"el":{"language":"el","language_name":"Greek","flag":"gr","geoip_code":"gr","priority":625,"is_site_locale":true,"iso":"el","iso_639_3":"ell","global_name":"Greek","is_in_european_union":true,"isBattle":true},"nl_NL":{"language":"nl_NL","language_name":"Dutch","flag":"nl","geoip_code":"nl","priority":731,"is_site_locale":true,"iso":"nl","iso_639_3":"nld","global_name":"Dutch","is_in_european_union":true,"isBattle":true},"ro":{"language":"ro","language_name":"Romanian","flag":"ro","geoip_code":"ro","priority":707,"is_site_locale":true,"iso":"ro","iso_639_3":"nld","global_name":"Romanian","is_in_european_union":true,"isBattle":true}}')
        },
        513141: t => {
            "use strict";
            t.exports = JSON.parse('["us","ae","ar","au","be","bh","br","ca","ch","cl","cn","co","de","dk","ee","eg","es","fi","fr","gr","hk","id","il","in","is","it","jp","kr","lt","lv","lu","mx","my","ng","nl","no","nz","pe","ph","pl","pt","qa","rs","ru","sa","se","sg","sk","th","tr","tw","uk","vn","za"]')
        },
        205966: t => {
            "use strict";
            t.exports = JSON.parse('{"OK":"OK","SYMBOL_NOT_AVAILABLE_FOR_ANON":"SYMBOL_NOT_AVAILABLE_FOR_ANON","DELAY_NOT_AVAILABLE":"DELAY_NOT_AVAILABLE","NEED_SIGN_AGREEMENT":"NEED_SIGN_AGREEMENT","NEED_ADD_SERVICE":"NEED_ADD_SERVICE"}')
        }
    },
    t => {
        "use strict";
        t.O(0, [99459, 91877, 59456, 33996, 94595, 40587, 78708, 59678, 13738, 12141, 42732, 14457, 75173, 687, 38325, 45078, 33926, 16788, 64350, 50827, 71576, 23840, 25657, 7416, 62847, 43911, 5585, 69130, 79649, 86271, 28225, 59734, 42229, 11216, 37610, 70964, 38817, 87127, 53684, 51219, 76520, 67470, 40788, 53617, 95121, 24035, 40114, 29890, 4803, 92309, 74374, 95051, 28322, 3762, 22853, 21340, 54570, 42023, 56822, 62142], () => {
            return e = 429987, t(t.s = e);
            var e
        });
        t.O()
    }
]);