(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [64853], {
        364853: (o, r, e) => {
            "use strict";
            e.r(r), e.d(r, {
                StdTheme: () => i.StdTheme,
                getStdChartTheme: () => f,
                getStdThemeNames: () => C,
                getThemeNameIfStdTheme: () => s,
                isStdTheme: () => p,
                translateThemeName: () => d
            });
            var t = e(120220),
                l = e(814563);
            const n = JSON.parse('{"content":{"chartProperties":{"scalesProperties":{"textColor":"#131722","lineColor":"rgba(42, 46, 57, 0.14)","backgroundColor":"#ffffff"},"paneProperties":{"vertGridProperties":{"color":"rgba(42, 46, 57, 0.06)"},"horzGridProperties":{"color":"rgba(42, 46, 57, 0.06)"},"crossHairProperties":{"color":"#9598A1"},"background":"#ffffff","backgroundGradientStartColor":"#ffffff","backgroundGradientEndColor":"#ffffff"}},"sessions":{"graphics":{"backgrounds":{"outOfSession":{"color":"#2962FF","transparency":92},"preMarket":{"color":"#FF9800","transparency":92},"postMarket":{"color":"#2962FF","transparency":92}},"vertlines":{"sessBreaks":{"color":"#4985e7","style":2,"width":1}}}},"mainSourceProperties":{"baseLineColor":"#B2B5BE","candleStyle":{"borderColor":"#378658","upColor":"#26a69a","wickColor":"#737375","wickUpColor":"#26a69a","wickDownColor":"#ef5350","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350"},"haStyle":{"borderColor":"#378658","upColor":"#26a69a","wickColor":"#737375","wickUpColor":"#26a69a","wickDownColor":"#ef5350","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350"},"barStyle":{"downColor":"#ef5350","upColor":"#26a69a"},"pnfStyle":{"downColor":"#ef5350","upColor":"#26a69a","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"},"baselineStyle":{"baselineColor":"rgba( 117, 134, 150, 1)","topFillColor1":"rgba( 38, 166, 154, 0.28)","topFillColor2":"rgba( 38, 166, 154, 0.05)","bottomFillColor1":"rgba( 239, 83, 80, 0.05)","bottomFillColor2":"rgba( 239, 83, 80, 0.28)","topLineColor":"rgba( 38, 166, 154, 1)","bottomLineColor":"rgba( 239, 83, 80, 1)"},"areaStyle":{"transparency":100,"color1":"rgba(41, 98, 255, 0.28)","color2":"#2962FF","linecolor":"#2962FF","linewidth":2,"linestyle":0},"renkoStyle":{"upColor":"#26a69a","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae","borderUpColorProjection":"#a9dcc3","borderDownColorProjection":"#f5a6ae","wickUpColor":"#26a69a","wickDownColor":"#ef5350"},"lineStyle":{"color":"#2962FF","linewidth":2,"linestyle":0},"kagiStyle":{"downColor":"#ef5350","upColor":"#26a69a","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"},"pbStyle":{"upColor":"#26a69a","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae","borderUpColorProjection":"#a9dcc3","borderDownColorProjection":"#f5a6ae"},"rangeStyle":{"upColor":"#26a69a","downColor":"#ef5350","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"}}}}'),
                a = JSON.parse('{"content":{"chartProperties":{"scalesProperties":{"textColor":"#B2B5BE","lineColor":"rgba(240, 243, 250, 0.12)","backgroundColor":"#ffffff"},"paneProperties":{"vertGridProperties":{"color":"rgba(240, 243, 250, 0.06)"},"horzGridProperties":{"color":"rgba(240, 243, 250, 0.06)"},"crossHairProperties":{"color":"#9598A1"},"background":"#131722","backgroundGradientStartColor":"#181C27","backgroundGradientEndColor":"#131722","backgroundType":"gradient"}},"sessions":{"graphics":{"backgrounds":{"outOfSession":{"color":"#2962FF","transparency":92},"preMarket":{"color":"#FF9800","transparency":92},"postMarket":{"color":"#2962FF","transparency":92}},"vertlines":{"sessBreaks":{"color":"#4985e7","style":2,"width":1}}}},"mainSourceProperties":{"baseLineColor":"#5d606b","candleStyle":{"borderColor":"#378658","upColor":"#26a69a","wickColor":"#B5B5B8","wickUpColor":"#26a69a","wickDownColor":"#ef5350","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350"},"haStyle":{"borderColor":"#378658","upColor":"#26a69a","wickColor":"#B5B5B8","wickUpColor":"#26a69a","wickDownColor":"#ef5350","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350"},"barStyle":{"downColor":"#ef5350","upColor":"#26a69a"},"pnfStyle":{"downColor":"#ef5350","upColor":"#26a69a","upColorProjection":"#336854","downColorProjection":"#7f323f"},"baselineStyle":{"baselineColor":"rgba( 117, 134, 150, 1)","topFillColor1":"rgba( 38, 166, 154, 0.28)","topFillColor2":"rgba( 38, 166, 154, 0.05)","bottomFillColor1":"rgba( 239, 83, 80, 0.05)","bottomFillColor2":"rgba( 239, 83, 80, 0.28)","topLineColor":"rgba( 38, 166, 154, 1)","bottomLineColor":"rgba( 239, 83, 80, 1)"},"areaStyle":{"transparency":100,"color1":"rgba(41, 98, 255, 0.28)","color2":"#2962FF","linecolor":"#2962FF","linewidth":2,"linestyle":0},"renkoStyle":{"upColor":"#26a69a","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350","upColorProjection":"#336854","downColorProjection":"#7f323f","borderUpColorProjection":"#336854","borderDownColorProjection":"#7f323f","wickUpColor":"#26a69a","wickDownColor":"#ef5350"},"lineStyle":{"color":"#2962FF","linewidth":2,"linestyle":0},"kagiStyle":{"downColor":"#ef5350","upColor":"#26a69a","upColorProjection":"#336854","downColorProjection":"#7f323f"},"pbStyle":{"upColor":"#26a69a","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350","upColorProjection":"#336854","downColorProjection":"#7f323f","borderUpColorProjection":"#336854","borderDownColorProjection":"#7f323f"},"rangeStyle":{"upColor":"#26a69a","downColor":"#ef5350","upColorProjection":"#336854","downColorProjection":"#7f323f"}}}}');
            var i = e(953321);

            function c() {
                return {
                    [i.StdTheme.Light]: JSON.parse(JSON.stringify(n)),
                    [i.StdTheme.Dark]: JSON.parse(JSON.stringify(a))
                }
            }

            function C() {
                return [i.StdTheme.Light, i.StdTheme.Dark]
            }

            function f(o) {
                return c()[o]
            }

            function d(o) {
                return {
                    [i.StdTheme.Light]: t.t("Light", {
                        context: "colorThemeName"
                    }),
                    [i.StdTheme.Dark]: t.t("Dark", {
                        context: "colorThemeName"
                    })
                }[o] || o
            }

            function p(o) {
                const r = c();
                return C().some(e => b(r[e], o))
            }

            function s(o) {
                const r = c(),
                    e = C();
                for (const t of e)
                    if (b(r[t], o)) return t;
                return null
            }

            function b(o, r) {
                let e = o.content === r.content;
                return function(o = {}, r) {
                    try {
                        ! function o(r, e, t) {
                            for (const l in r)
                                if (r.hasOwnProperty(l)) {
                                    const n = e.concat(l);
                                    if ("object" == typeof r[l]) o(r[l], n, t);
                                    else if (t(n, r[l])) throw new Error("exit")
                                }
                        }(o, [], r)
                    } catch (o) {
                        return
                    }
                }(o.content, (o, t) => {
                    const n = function(o, r = {}) {
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
                            return (0, l.areEqualRgb)((0, l.parseRgb)(o), (0, l.parseRgb)(r))
                        } catch (e) {
                            return o === r
                        }
                        return o === r
                    }(t, n), !e
                }), e
            }
        },
        953321: (o, r, e) => {
            "use strict";
            var t;
            e.d(r, {
                    StdTheme: () => t
                }),
                function(o) {
                    o.Light = "light", o.Dark = "dark"
                }(t || (t = {}))
        }
    }
]);