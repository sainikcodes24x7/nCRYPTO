(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [89590, 64853, 79836], {
        357086: (o, r, e) => {
            "use strict";
            var n;
            e.d(r, {
                    PriceAxisLastValueMode: () => n
                }),
                function(o) {
                    o[o.LastPriceAndPercentageValue = 0] = "LastPriceAndPercentageValue", o[o.LastValueAccordingToScale = 1] = "LastValueAccordingToScale"
                }(n || (n = {}))
        },
        350946: (o, r, e) => {
            "use strict";
            e.r(r), e.d(r, {
                generateColor: () => t,
                alphaToTransparency: () => a,
                transparencyToAlpha: () => l,
                applyTransparency: () => c,
                resetTransparency: () => i,
                getLuminance: () => s,
                isHexColor: () => f,
                colorFromBackground: () => d,
                gradientColorAtPercent: () => C,
                isColorDark: () => p,
                rgbaFromInteger: () => u,
                rgbaToInteger: () => b,
                colorToInteger: () => g
            });
            var n = e(814563);

            function t(o, r, e) {
                if (r = r || 0, !f(o)) return e ? (0, n.rgbaToString)((0, n.rgba)((0, n.parseRgb)(o), (0, n.normalizeAlphaComponent)(l(r)))) : o;
                const [t, a, c] = (0, n.parseRgb)(o), i = (0, n.normalizeAlphaComponent)(l(r));
                return (0, n.rgbaToString)([t, a, c, i])
            }

            function a(o) {
                return 100 * (1 - o)
            }

            function l(o) {
                if (o < 0 || o > 100) throw new Error("invalid transparency");
                return 1 - o / 100
            }

            function c(o, r) {
                if ("transparent" === o) return o;
                const e = (0, n.parseRgba)(o),
                    t = e[3];
                return (0, n.rgbaToString)((0, n.rgba)(e[0], e[1], e[2], l(r) * t))
            }

            function i(o) {
                return "transparent" === o || f(o) ? o : (0, n.rgbaToString)((0, n.rgba)((0, n.parseRgb)(o), (0, n.normalizeAlphaComponent)(1)))
            }

            function s(o) {
                const r = (0, n.parseRgb)(o).map(o => (o /= 255) <= .03928 ? o / 12.92 : Math.pow((o + .055) / 1.055, 2.4));
                return Number((.2126 * r[0] + .7152 * r[1] + .0722 * r[2]).toFixed(3))
            }

            function f(o) {
                return 0 === o.indexOf("#")
            }

            function d(o) {
                return "black" === (0, n.rgbToBlackWhiteString)((0, n.parseRgb)(o), 150) ? "#ffffff" : "#000000"
            }

            function C(o, r, e) {
                const [t, a, l, c] = (0, n.parseRgba)(o), [i, s, f, d] = (0, n.parseRgba)(r), C = (0, n.rgba)(Math.round(t + e * (i - t)), Math.round(a + e * (s - a)), Math.round(l + e * (f - l)), c + e * (d - c));
                return (0, n.rgbaToString)(C)
            }

            function p(o) {
                return s(i(o)) < .5
            }

            function u(o) {
                const r = (o = Math.round(o)) % 256;
                o -= r;
                const e = (o /= 256) % 256;
                o -= e;
                const n = (o /= 256) % 256;
                o -= n;
                return `rgba(${r},${e},${n},${(o/=256)/255})`
            }

            function b(o) {
                const r = Math.round(255 * o[3]);
                return o[0] + 256 * o[1] + 65536 * o[2] + 16777216 * r
            }

            function g(o) {
                const r = (0, n.tryParseRgba)(o);
                return null === r ? 0 : b(r)
            }
        },
        859943: (o, r, e) => {
            "use strict";

            function n(o, r = window) {
                const e = "theme-" + o,
                    n = r.document.documentElement.classList;
                for (const o of Array.from(n)) o.startsWith("theme-") && o !== e && n.remove(o);
                n.add(e)
            }
            e.r(r), e.d(r, {
                applyTheme: () => n
            })
        },
        364853: (o, r, e) => {
            "use strict";
            e.r(r), e.d(r, {
                StdTheme: () => c.StdTheme,
                getStdChartTheme: () => f,
                getStdThemeNames: () => s,
                getThemeNameIfStdTheme: () => p,
                isStdTheme: () => C,
                translateThemeName: () => d
            });
            var n = e(120220),
                t = e(814563);
            const a = JSON.parse('{"content":{"chartProperties":{"scalesProperties":{"textColor":"#131722","lineColor":"rgba(42, 46, 57, 0.14)","backgroundColor":"#ffffff"},"paneProperties":{"vertGridProperties":{"color":"rgba(42, 46, 57, 0.06)"},"horzGridProperties":{"color":"rgba(42, 46, 57, 0.06)"},"crossHairProperties":{"color":"#9598A1"},"background":"#ffffff","backgroundGradientStartColor":"#ffffff","backgroundGradientEndColor":"#ffffff"}},"sessions":{"graphics":{"backgrounds":{"outOfSession":{"color":"#2962FF","transparency":92},"preMarket":{"color":"#FF9800","transparency":92},"postMarket":{"color":"#2962FF","transparency":92}},"vertlines":{"sessBreaks":{"color":"#4985e7","style":2,"width":1}}}},"mainSourceProperties":{"baseLineColor":"#B2B5BE","candleStyle":{"borderColor":"#378658","upColor":"#26a69a","wickColor":"#737375","wickUpColor":"#26a69a","wickDownColor":"#ef5350","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350"},"haStyle":{"borderColor":"#378658","upColor":"#26a69a","wickColor":"#737375","wickUpColor":"#26a69a","wickDownColor":"#ef5350","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350"},"barStyle":{"downColor":"#ef5350","upColor":"#26a69a"},"pnfStyle":{"downColor":"#ef5350","upColor":"#26a69a","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"},"baselineStyle":{"baselineColor":"rgba( 117, 134, 150, 1)","topFillColor1":"rgba( 38, 166, 154, 0.28)","topFillColor2":"rgba( 38, 166, 154, 0.05)","bottomFillColor1":"rgba( 239, 83, 80, 0.05)","bottomFillColor2":"rgba( 239, 83, 80, 0.28)","topLineColor":"rgba( 38, 166, 154, 1)","bottomLineColor":"rgba( 239, 83, 80, 1)"},"areaStyle":{"transparency":100,"color1":"rgba(41, 98, 255, 0.28)","color2":"#2962FF","linecolor":"#2962FF","linewidth":2,"linestyle":0},"renkoStyle":{"upColor":"#26a69a","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae","borderUpColorProjection":"#a9dcc3","borderDownColorProjection":"#f5a6ae","wickUpColor":"#26a69a","wickDownColor":"#ef5350"},"lineStyle":{"color":"#2962FF","linewidth":2,"linestyle":0},"kagiStyle":{"downColor":"#ef5350","upColor":"#26a69a","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"},"pbStyle":{"upColor":"#26a69a","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae","borderUpColorProjection":"#a9dcc3","borderDownColorProjection":"#f5a6ae"},"rangeStyle":{"upColor":"#26a69a","downColor":"#ef5350","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"}}}}'),
                l = JSON.parse('{"content":{"chartProperties":{"scalesProperties":{"textColor":"#B2B5BE","lineColor":"rgba(240, 243, 250, 0.12)","backgroundColor":"#ffffff"},"paneProperties":{"vertGridProperties":{"color":"rgba(240, 243, 250, 0.06)"},"horzGridProperties":{"color":"rgba(240, 243, 250, 0.06)"},"crossHairProperties":{"color":"#9598A1"},"background":"#131722","backgroundGradientStartColor":"#181C27","backgroundGradientEndColor":"#131722","backgroundType":"gradient"}},"sessions":{"graphics":{"backgrounds":{"outOfSession":{"color":"#2962FF","transparency":92},"preMarket":{"color":"#FF9800","transparency":92},"postMarket":{"color":"#2962FF","transparency":92}},"vertlines":{"sessBreaks":{"color":"#4985e7","style":2,"width":1}}}},"mainSourceProperties":{"baseLineColor":"#5d606b","candleStyle":{"borderColor":"#378658","upColor":"#26a69a","wickColor":"#B5B5B8","wickUpColor":"#26a69a","wickDownColor":"#ef5350","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350"},"haStyle":{"borderColor":"#378658","upColor":"#26a69a","wickColor":"#B5B5B8","wickUpColor":"#26a69a","wickDownColor":"#ef5350","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350"},"barStyle":{"downColor":"#ef5350","upColor":"#26a69a"},"pnfStyle":{"downColor":"#ef5350","upColor":"#26a69a","upColorProjection":"#336854","downColorProjection":"#7f323f"},"baselineStyle":{"baselineColor":"rgba( 117, 134, 150, 1)","topFillColor1":"rgba( 38, 166, 154, 0.28)","topFillColor2":"rgba( 38, 166, 154, 0.05)","bottomFillColor1":"rgba( 239, 83, 80, 0.05)","bottomFillColor2":"rgba( 239, 83, 80, 0.28)","topLineColor":"rgba( 38, 166, 154, 1)","bottomLineColor":"rgba( 239, 83, 80, 1)"},"areaStyle":{"transparency":100,"color1":"rgba(41, 98, 255, 0.28)","color2":"#2962FF","linecolor":"#2962FF","linewidth":2,"linestyle":0},"renkoStyle":{"upColor":"#26a69a","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350","upColorProjection":"#336854","downColorProjection":"#7f323f","borderUpColorProjection":"#336854","borderDownColorProjection":"#7f323f","wickUpColor":"#26a69a","wickDownColor":"#ef5350"},"lineStyle":{"color":"#2962FF","linewidth":2,"linestyle":0},"kagiStyle":{"downColor":"#ef5350","upColor":"#26a69a","upColorProjection":"#336854","downColorProjection":"#7f323f"},"pbStyle":{"upColor":"#26a69a","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350","upColorProjection":"#336854","downColorProjection":"#7f323f","borderUpColorProjection":"#336854","borderDownColorProjection":"#7f323f"},"rangeStyle":{"upColor":"#26a69a","downColor":"#ef5350","upColorProjection":"#336854","downColorProjection":"#7f323f"}}}}');
            var c = e(953321);

            function i() {
                return {
                    [c.StdTheme.Light]: JSON.parse(JSON.stringify(a)),
                    [c.StdTheme.Dark]: JSON.parse(JSON.stringify(l))
                }
            }

            function s() {
                return [c.StdTheme.Light, c.StdTheme.Dark]
            }

            function f(o) {
                return i()[o]
            }

            function d(o) {
                return {
                    [c.StdTheme.Light]: n.t("Light", {
                        context: "colorThemeName"
                    }),
                    [c.StdTheme.Dark]: n.t("Dark", {
                        context: "colorThemeName"
                    })
                }[o] || o
            }

            function C(o) {
                const r = i();
                return s().some(e => u(r[e], o))
            }

            function p(o) {
                const r = i(),
                    e = s();
                for (const n of e)
                    if (u(r[n], o)) return n;
                return null
            }

            function u(o, r) {
                let e = o.content === r.content;
                return function(o = {}, r) {
                    try {
                        ! function o(r, e, n) {
                            for (const t in r)
                                if (r.hasOwnProperty(t)) {
                                    const a = e.concat(t);
                                    if ("object" == typeof r[t]) o(r[t], a, n);
                                    else if (n(a, r[t])) throw new Error("exit")
                                }
                        }(o, [], r)
                    } catch (o) {
                        return
                    }
                }(o.content, (o, n) => {
                    const a = function(o, r = {}) {
                        let e = r;
                        for (let r = 0; r < o.length; r++) {
                            if (!e || "object" != typeof e) return;
                            e = e[o[r]]
                        }
                        if ("string" == typeof e || "number" == typeof e) return e;
                        return
                    }(o, r.content);
                    return e = function(o, r) {
                        if ("string" == typeof o && "string" == typeof r) try {
                            return (0, t.areEqualRgb)((0, t.parseRgb)(o), (0, t.parseRgb)(r))
                        } catch (e) {
                            return o === r
                        }
                        return o === r
                    }(n, a), !e
                }), e
            }
        },
        953321: (o, r, e) => {
            "use strict";
            var n;
            e.d(r, {
                    StdTheme: () => n
                }),
                function(o) {
                    o.Light = "light", o.Dark = "dark"
                }(n || (n = {}))
        },
        787479: (o, r, e) => {
            "use strict";
            e.r(r), e.d(r, {
                watchedTheme: () => l,
                setTheme: () => c
            });
            var n = e(765066),
                t = e.n(n),
                a = e(859943);
            const l = new(t());

            function c(o) {
                l.setValue(o)
            }
            l.subscribe(o => {
                (0, a.applyTheme)(o, window)
            })
        }
    }
]);