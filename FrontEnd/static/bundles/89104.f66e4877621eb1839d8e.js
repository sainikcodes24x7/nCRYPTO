(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [89104], {
        466046: (t, i, e) => {
            "use strict";
            var r;

            function s(t, i) {
                const {
                    getVisibleSize: e,
                    shrinkVisibilityStart: r,
                    shrinkVisibilityEnd: s
                } = i, n = r + s;
                return t + (e() - n)
            }

            function n(t, i) {
                const {
                    getVisibleSize: e,
                    shrinkVisibilityStart: r,
                    shrinkVisibilityEnd: s
                } = i, n = r + s;
                return t - (e() - n)
            }

            function o(t) {
                const {
                    visibleSize: i,
                    elementSize: e,
                    elementOffset: r,
                    visibilityShrinkSize: s = 0
                } = t;
                return r + e - i + s
            }

            function l(t) {
                const {
                    elementOffset: i,
                    visibilityShrinkSize: e = 0
                } = t;
                return i - e
            }

            function a(t) {
                const {
                    visibleSize: i,
                    scrollOffset: e,
                    elementSize: r,
                    elementOffset: s,
                    visibilityFactor: n = 1,
                    visibilityShrinkSize: o = 0
                } = t;
                return s + r * n <= e + i - o
            }

            function c(t) {
                const {
                    scrollOffset: i,
                    elementSize: e,
                    elementOffset: r,
                    visibilityFactor: s = 1,
                    visibilityShrinkSize: n = 0
                } = t;
                return r + e * (1 - s) >= i + n
            }
            e.d(i, {
                    getNextScrollPositionForwardSimple: () => s,
                    getNextScrollPositionBackwardSimple: () => n,
                    getScrollOffsetForElementToFitAtEnd: () => o,
                    getScrollOffsetForElementToFitAtStart: () => l,
                    elementIsBeforeVisibilityFrameEnd: () => a,
                    elementIsAfterVisibilityFrameStart: () => c
                }),
                function(t) {
                    t[t.Forward = 0] = "Forward", t[t.Backward = 1] = "Backward"
                }(r || (r = {}))
        },
        89104: (t, i, e) => {
            "use strict";
            e.r(i), e.d(i, {
                initScrollButtons: () => d
            });
            var r = e(801529),
                s = e(316152),
                n = e(582755),
                o = e(468450),
                l = e(971928),
                a = e(466046),
                c = e(504898);

            function d(t) {
                const {
                    buttonsWrapper: i,
                    scrollWrapper: e,
                    addScrollButtonsFunction: d,
                    scrollData: u,
                    scrollType: f,
                    scrollBehaviour: S,
                    onScroll: b,
                    buttonModifier: v
                } = t;
                let m, p;
                var w;
                i.classList.add("tv-scroll-button-wrap"), i.classList.add("tv-scroll-button-wrap--is-at-start"), i.classList.add("tv-scroll-button-wrap--is-at-end"), f === c.ScrollType.Horizontal ? (w = e, p = () => (0, n.isRtl)() ? (0, n.getLTRScrollLeft)(w) : w.scrollLeft, m = (t, i) => {
                    e.scrollLeft = Math.round(i)
                }) : (p = function(t) {
                    return () => t.scrollTop
                }(e), m = (t, i) => {
                    e.scrollTop = Math.round(i)
                });
                let g = !1;
                const k = t => {
                        if (!g) return new Promise(i => {
                            g = !0, e.classList.add("tv-scroll-wrap--animated"), (0, o.doAnimate)({
                                onStep: m,
                                from: p(),
                                to: Math.round(t),
                                easing: l.easingFunc.easeInOutCubic,
                                duration: l.dur,
                                onComplete: i
                            })
                        }).then(() => {
                            g = !1, e.classList.remove("tv-scroll-wrap--animated")
                        })
                    },
                    h = S ? S.getNextPositionForward : a.getNextScrollPositionForwardSimple,
                    F = S ? S.getNextPositionBackward : a.getNextScrollPositionBackwardSimple;
                d(i, () => k(h(p(), u)), () => k(F(p(), u)), v);
                const y = function(t, i, e, n) {
                    const o = (0, s.default)(i => {
                        const r = e.getContentSize(),
                            s = e.getVisibleSize(),
                            n = r - s > 1;
                        !n || i <= 1 ? t.classList.add("tv-scroll-button-wrap--is-at-start") : t.classList.remove("tv-scroll-button-wrap--is-at-start"), !n || r - (i + s) <= 1 ? t.classList.add("tv-scroll-button-wrap--is-at-end") : t.classList.remove("tv-scroll-button-wrap--is-at-end")
                    }, 100);
                    o(n());
                    return new r.default(() => {
                        o(n())
                    }).observe(i), o
                }(i, e, u, p);
                return e.addEventListener("scroll", () => {
                    const t = p();
                    y(t), b && b(t)
                }), () => {
                    const t = p();
                    y(t)
                }
            }
        }
    }
]);