(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [97276, 83639, 94291, 64853, 79836], {
        294993: (e, t, o) => {
            e.exports = o.p + "c822bf0a493f0cff702ea05224e30712.svg"
        },
        280938: (e, t, o) => {
            e.exports = o.p + "27443adbe6d53ff5fba172a23b2e1431.svg"
        },
        185910: e => {
            e.exports = {
                "toast-wrapper": "toast-wrapper-10sMgQBn",
                compact: "compact-10sMgQBn"
            }
        },
        401570: e => {
            e.exports = {
                toast: "toast-29c8iZZN"
            }
        },
        795621: (e, t, o) => {
            "use strict";
            o.d(t, {
                AnchorButton: () => u,
                Button: () => l
            });
            var r = o(667294),
                n = o(99256);

            function a(e = "default") {
                switch (e) {
                    case "default":
                        return "primary";
                    case "stroke":
                        return "secondary"
                }
            }

            function s(e = "primary") {
                switch (e) {
                    case "primary":
                        return "brand";
                    case "success":
                        return "green";
                    case "default":
                        return "gray";
                    case "danger":
                        return "red"
                }
            }

            function i(e = "m") {
                switch (e) {
                    case "s":
                        return "xsmall";
                    case "m":
                        return "small";
                    case "l":
                        return "large"
                }
            }

            function c(e) {
                const {
                    intent: t,
                    size: o,
                    appearance: r,
                    useFullWidth: n,
                    icon: c,
                    ...l
                } = e;
                return { ...l,
                    color: s(t),
                    size: i(o),
                    variant: a(r),
                    stretch: n,
                    startIcon: c
                }
            }

            function l(e) {
                return r.createElement(n.SquareButton, { ...c(e)
                })
            }

            function d(e) {
                const {
                    intent: t,
                    size: o,
                    appearance: r,
                    useFullWidth: n,
                    icon: c,
                    ...l
                } = e;
                return { ...l,
                    color: s(t),
                    size: i(o),
                    variant: a(r),
                    stretch: n,
                    startIcon: c
                }
            }

            function u(e) {
                return r.createElement(n.SquareAnchorButton, { ...d(e)
                })
            }
        },
        99256: (e, t, o) => {
            "use strict";
            o.d(t, {
                SquareAnchorButton: () => f,
                SquareButton: () => m
            });
            var r = o(667294),
                n = o(294184),
                a = o(469586),
                s = o(640539);
            const i = JSON.parse('{"button":"button-qM2OSl9-","content":"content-1UNGmyXO","icon-only":"icon-only-3MOZiWvj","color-brand":"color-brand-eDTq6RMz","variant-primary":"variant-primary-3m2-v4cq","variant-secondary":"variant-secondary-1Uk9Idy8","color-gray":"color-gray-3HYlDQXq","color-green":"color-green-2oUhAFCl","color-red":"color-red-1RbzZRrI","size-xsmall":"size-xsmall-1UtgdwJA","size-small":"size-small-2YFjX8Gj","size-medium":"size-medium-2nH4uA9w","size-large":"size-large-2XXsyjkq","size-xlarge":"size-xlarge-2FzvZzq6","with-start-icon":"with-start-icon-9wsLqtS_","with-end-icon":"with-end-icon-QoUMC8CG","start-icon-wrap":"start-icon-wrap-2aT5KsIF","end-icon-wrap":"end-icon-wrap-Pxzjlxw8","animated":"animated-FJhsKjPT","stretch":"stretch-1Wufk-aY","grouped":"grouped-1mJ_9XNG","adjust-position":"adjust-position-22XnoSny","first-row":"first-row-okSvkChI","first-col":"first-col-3cdfq6Yc","no-corner-top-left":"no-corner-top-left-1dhEuLwK","no-corner-top-right":"no-corner-top-right-2B-9Lz7Y","no-corner-bottom-right":"no-corner-bottom-right-2YOfeKyh","no-corner-bottom-left":"no-corner-bottom-left-3MsE9Q0B"}');

            function c(e) {
                const {
                    color: t = "brand",
                    size: o = "medium",
                    variant: r = "primary",
                    stretch: s = !1,
                    icon: c,
                    startIcon: l,
                    endIcon: d,
                    iconOnly: u = !1,
                    className: p,
                    isGrouped: m,
                    cellState: h,
                    disablePositionAdjustment: f = !1
                } = e, g = function(e) {
                    let t = "";
                    return 0 !== e && (1 & e && (t = n(t, i["no-corner-top-left"])), 2 & e && (t = n(t, i["no-corner-top-right"])), 4 & e && (t = n(t, i["no-corner-bottom-right"])), 8 & e && (t = n(t, i["no-corner-bottom-left"]))), t
                }((0, a.getGroupCellRemoveRoundBorders)(h));
                return n(p, i.button, i["size-" + o], i["color-" + t], i["variant-" + r], s && i.stretch, (c || l) && i["with-start-icon"], d && i["with-end-icon"], u && i["icon-only"], g, m && i.grouped, m && !f && i["adjust-position"], m && h.isTop && i["first-row"], m && h.isLeft && i["first-col"])
            }

            function l(e) {
                const {
                    size: t,
                    startIcon: o,
                    icon: n,
                    iconOnly: a,
                    children: c,
                    endIcon: l
                } = e, d = null != o ? o : n;
                return r.createElement(r.Fragment, null, d && "xsmall" !== t && r.createElement(s.Icon, {
                    icon: d,
                    className: i["start-icon-wrap"]
                }), c && r.createElement("span", {
                    className: i.content
                }, c), l && !a && "xsmall" !== t && r.createElement(s.Icon, {
                    icon: l,
                    className: i["end-icon-wrap"]
                }))
            }
            var d = o(62624),
                u = o(13279);

            function p(e) {
                const {
                    className: t,
                    color: o,
                    variant: r,
                    size: n,
                    stretch: a,
                    animated: s,
                    icon: i,
                    iconOnly: c,
                    startIcon: l,
                    endIcon: d,
                    ...p
                } = e;
                return { ...p,
                    ...(0, u.filterDataProps)(e),
                    ...(0, u.filterAriaProps)(e)
                }
            }

            function m(e) {
                const {
                    reference: t,
                    ...o
                } = e, {
                    isGrouped: n,
                    cellState: a,
                    disablePositionAdjustment: s
                } = (0, r.useContext)(d.ControlGroupContext), i = c({ ...o,
                    isGrouped: n,
                    cellState: a,
                    disablePositionAdjustment: s
                });
                return r.createElement("button", { ...p(o),
                    className: i,
                    ref: t
                }, r.createElement(l, { ...o
                }))
            }

            function h(e) {
                const {
                    className: t,
                    color: o,
                    variant: r,
                    size: n,
                    stretch: a,
                    animated: s,
                    icon: i,
                    iconOnly: c,
                    startIcon: l,
                    endIcon: d,
                    ...p
                } = e;
                return { ...p,
                    ...(0, u.filterDataProps)(e),
                    ...(0, u.filterAriaProps)(e)
                }
            }

            function f(e) {
                const {
                    reference: t
                } = e, {
                    isGrouped: o,
                    cellState: n,
                    disablePositionAdjustment: a
                } = (0, r.useContext)(d.ControlGroupContext), s = c({ ...e,
                    isGrouped: o,
                    cellState: n,
                    disablePositionAdjustment: a
                });
                return r.createElement("a", { ...h(e),
                    className: s,
                    ref: t
                }, r.createElement(l, { ...e
                }))
            }
        },
        62624: (e, t, o) => {
            "use strict";
            o.d(t, {
                ControlGroupContext: () => r
            });
            const r = o(667294).createContext({
                isGrouped: !1,
                cellState: {
                    isTop: !0,
                    isRight: !0,
                    isBottom: !0,
                    isLeft: !0
                }
            })
        },
        469586: (e, t, o) => {
            "use strict";

            function r(e) {
                let t = 0;
                return e.isTop && e.isLeft || (t += 1), e.isTop && e.isRight || (t += 2), e.isBottom && e.isLeft || (t += 8), e.isBottom && e.isRight || (t += 4), t
            }
            o.d(t, {
                getGroupCellRemoveRoundBorders: () => r
            })
        },
        409235: (e, t, o) => {
            "use strict";
            o.d(t, {
                Toast: () => i
            });
            var r = o(667294),
                n = o(294184),
                a = o(524923),
                s = o(79352);
            const i = r.memo(e => {
                const {
                    title: t,
                    text: o,
                    secondaryText: i,
                    image: c,
                    actions: l,
                    intent: d,
                    role: u = "status",
                    showCloseButton: p = !1,
                    onClose: m,
                    onAutoFocus: h,
                    className: f
                } = e, g = r.useRef(null), C = p && !c ? s["adjust-for-close-button"] : void 0, w = !p || c || t ? void 0 : s["adjust-for-close-button"];
                return r.useEffect(() => {
                    "alert" === u && (void 0 !== h ? h() : null !== g.current && g.current.focus())
                }, []), r.createElement(a.ToastContainer, {
                    intent: d,
                    role: u,
                    className: f
                }, p && r.createElement(a.CloseButton, {
                    ref: g,
                    onClick: m
                }), c && r.createElement(a.ToastImage, null, c), r.createElement("div", {
                    className: n(s["main-content"], p && s["with-close-button"])
                }, t && r.createElement(a.ToastTitle, {
                    className: C
                }, t), o && r.createElement(a.ToastMainText, {
                    className: w
                }, o), l && r.createElement(a.ToastActions, null, l), i && r.createElement(a.ToastSecondaryText, null, i)))
            })
        },
        497105: (e, t, o) => {
            "use strict";
            var r;
            o.d(t, {
                    ToastIntent: () => r
                }),
                function(e) {
                    e.Default = "default", e.Success = "success", e.Warning = "warning", e.Danger = "danger"
                }(r || (r = {}))
        },
        524923: (e, t, o) => {
            "use strict";
            o.d(t, {
                CloseButton: () => l,
                ToastContainer: () => d,
                ToastImage: () => u,
                ToastTitle: () => p,
                ToastMainText: () => m,
                ToastActions: () => h,
                ToastSecondaryText: () => f
            });
            var r = o(667294),
                n = o(294184),
                a = o(497105),
                s = o(640539),
                i = o(639230),
                c = o(79352);
            const l = r.forwardRef((e, t) => {
                const {
                    className: o,
                    onClick: a,
                    tabIndex: l
                } = e;
                return r.createElement("button", {
                    type: "button",
                    className: n(c["close-button"], o),
                    tabIndex: l,
                    onClick: a,
                    ref: t
                }, r.createElement(s.Icon, {
                    icon: i,
                    className: c["close-icon"]
                }))
            });

            function d(e) {
                const {
                    children: t,
                    role: o,
                    className: s,
                    intent: i = a.ToastIntent.Default
                } = e, l = n(c.toast, i !== a.ToastIntent.Default && c["intent-" + i], s);
                return r.createElement("article", {
                    className: l,
                    role: o
                }, t)
            }

            function u(e) {
                const {
                    children: t
                } = e;
                return r.createElement("div", {
                    className: c.image
                }, t)
            }

            function p(e) {
                const {
                    children: t,
                    className: o
                } = e;
                return r.createElement("h2", {
                    className: n(c.title, o)
                }, t)
            }

            function m(e) {
                const {
                    children: t,
                    className: o
                } = e;
                return r.createElement("p", {
                    className: n(c["main-text"], o)
                }, t)
            }

            function h(e) {
                const {
                    children: t
                } = e;
                return r.createElement("div", {
                    className: c.actions
                }, t)
            }

            function f(e) {
                const {
                    children: t
                } = e;
                return r.createElement("p", {
                    className: c["secondary-text"]
                }, t)
            }
        },
        13279: (e, t, o) => {
            "use strict";

            function r(e) {
                return a(e, s)
            }

            function n(e) {
                return a(e, i)
            }

            function a(e, t) {
                const o = Object.entries(e).filter(t),
                    r = {};
                for (const [e, t] of o) r[e] = t;
                return r
            }

            function s(e) {
                const [t, o] = e;
                return 0 === t.indexOf("data-") && "string" == typeof o
            }

            function i(e) {
                return 0 === e[0].indexOf("aria-")
            }
            o.d(t, {
                filterDataProps: () => r,
                filterAriaProps: () => n,
                filterProps: () => a,
                isDataAttribute: () => s,
                isAriaAttribute: () => i
            })
        },
        999037: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                globalToasts: () => d,
                showToast: () => u
            });
            var r = o(667294),
                n = o(294184),
                a = o(28139),
                s = o(912869),
                i = o(185910);
            const c = s["media-mf-phone-landscape"];

            function l(e) {
                const {
                    suggestedLayout: t,
                    children: o
                } = e;
                return r.createElement("div", {
                    className: n(i["toast-wrapper"], "compact" === t && i.compact)
                }, o)
            }
            const d = new class {
                constructor() {
                    var e;
                    this._mediaQuery = window.matchMedia(c), this._handleMediaQueryChange = () => {
                        this._toastsLayer.update({
                            suggestedLayout: this._getSuggestedLayout()
                        })
                    }, this._handleLoginStateChange = () => {
                        this._toastsLayer.update({
                            location: this._getLocation()
                        })
                    }, this._toastsLayer = new a.ToastsLayer(this._getSuggestedLayout(), void 0, void 0, this._getLocation()), this._mediaQuery.addListener(this._handleMediaQueryChange), null === (e = window.loginStateChange) || void 0 === e || e.subscribe(this, this._handleLoginStateChange)
                }
                destroy() {
                    var e;
                    this._toastsLayer.destroy(), this._mediaQuery.removeListener(this._handleMediaQueryChange), null === (e = window.loginStateChange) || void 0 === e || e.unsubscribe(this, this._handleLoginStateChange)
                }
                showCustomToast(e) {
                    const {
                        render: t,
                        ...o
                    } = e;
                    var n;
                    return this._toastsLayer.showToast({
                        render: (n = t, e => r.createElement(l, {
                            suggestedLayout: e.suggestedLayout,
                            children: n(e)
                        })),
                        ...o
                    }).remove
                }
                reset() {
                    this._toastsLayer.reset()
                }
                forceRender() {
                    this._toastsLayer.forceRender()
                }
                merge(e) {
                    this._toastsLayer.merge(e)
                }
                split(e) {
                    this._toastsLayer.split(e)
                }
                _getSuggestedLayout() {
                    return this._mediaQuery.matches ? "loose" : "compact"
                }
                _getLocation() {
                    return "bottom-left"
                }
            };

            function u(e) {
                return d.showCustomToast(e)
            }
        },
        372840: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                initNotification: () => v
            });
            var r = o(667294),
                n = o(120220),
                a = (o(568421), o(4516)),
                s = o.n(a),
                i = o(192557),
                c = o(409235),
                l = o(795621),
                d = o(999037),
                u = o(930170),
                p = o(787479),
                m = o(364853),
                h = o(282143),
                f = (o(265194), o(541962)),
                g = o(401570),
                C = o(280938),
                w = o(294993);
            let b = null;

            function y(e) {
                const {
                    onRemove: t
                } = e, {
                    coins: o,
                    fromUsername: a,
                    fromId: s,
                    text: i
                } = e.data, d = (0, u.useWatchedValueReadonly)({
                    watchedValue: p.watchedTheme
                }), b = n.t("Someone's appreciating your epic work."), y = n.t("{username} sent you {amount} coins").format({
                    amount: o.toString(),
                    username: a
                }), v = (0, r.useCallback)(() => {
                    (0, h.openPMDialog)(s, a), x()
                }, [s]), x = (0, r.useCallback)(() => {
                    f.TVXWindowEvents.emit("donateNotificationClose"), t()
                }, [t]), S = r.createElement("img", {
                    src: d === m.StdTheme.Dark ? w : C,
                    role: "presentation"
                }), T = r.createElement(l.Button, {
                    onClick: v,
                    size: "s"
                }, n.t("Say thanks to {username}").format({
                    username: a
                }));
                return r.createElement(c.Toast, {
                    className: g.toast,
                    title: y,
                    text: i || b,
                    image: S,
                    onClose: x,
                    actions: T,
                    role: "status",
                    showCloseButton: !0
                })
            }

            function v() {
                s().on("donations", e => {
                    "visible" === document.visibilityState && (b = (0, d.showToast)({
                        priority: i.ToastPriority.High,
                        render: t => r.createElement(y, {
                            data: e,
                            ...t
                        })
                    }))
                }), f.TVXWindowEvents.on("donateNotificationClose", () => {
                    null !== b && b()
                })
            }
        },
        859943: (e, t, o) => {
            "use strict";

            function r(e, t = window) {
                const o = "theme-" + e,
                    r = t.document.documentElement.classList;
                for (const e of Array.from(r)) e.startsWith("theme-") && e !== o && r.remove(e);
                r.add(o)
            }
            o.r(t), o.d(t, {
                applyTheme: () => r
            })
        },
        364853: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                StdTheme: () => i.StdTheme,
                getStdChartTheme: () => d,
                getStdThemeNames: () => l,
                getThemeNameIfStdTheme: () => m,
                isStdTheme: () => p,
                translateThemeName: () => u
            });
            var r = o(120220),
                n = o(814563);
            const a = JSON.parse('{"content":{"chartProperties":{"scalesProperties":{"textColor":"#131722","lineColor":"rgba(42, 46, 57, 0.14)","backgroundColor":"#ffffff"},"paneProperties":{"vertGridProperties":{"color":"rgba(42, 46, 57, 0.06)"},"horzGridProperties":{"color":"rgba(42, 46, 57, 0.06)"},"crossHairProperties":{"color":"#9598A1"},"background":"#ffffff","backgroundGradientStartColor":"#ffffff","backgroundGradientEndColor":"#ffffff"}},"sessions":{"graphics":{"backgrounds":{"outOfSession":{"color":"#2962FF","transparency":92},"preMarket":{"color":"#FF9800","transparency":92},"postMarket":{"color":"#2962FF","transparency":92}},"vertlines":{"sessBreaks":{"color":"#4985e7","style":2,"width":1}}}},"mainSourceProperties":{"baseLineColor":"#B2B5BE","candleStyle":{"borderColor":"#378658","upColor":"#26a69a","wickColor":"#737375","wickUpColor":"#26a69a","wickDownColor":"#ef5350","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350"},"haStyle":{"borderColor":"#378658","upColor":"#26a69a","wickColor":"#737375","wickUpColor":"#26a69a","wickDownColor":"#ef5350","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350"},"barStyle":{"downColor":"#ef5350","upColor":"#26a69a"},"pnfStyle":{"downColor":"#ef5350","upColor":"#26a69a","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"},"baselineStyle":{"baselineColor":"rgba( 117, 134, 150, 1)","topFillColor1":"rgba( 38, 166, 154, 0.28)","topFillColor2":"rgba( 38, 166, 154, 0.05)","bottomFillColor1":"rgba( 239, 83, 80, 0.05)","bottomFillColor2":"rgba( 239, 83, 80, 0.28)","topLineColor":"rgba( 38, 166, 154, 1)","bottomLineColor":"rgba( 239, 83, 80, 1)"},"areaStyle":{"transparency":100,"color1":"rgba(41, 98, 255, 0.28)","color2":"#2962FF","linecolor":"#2962FF","linewidth":2,"linestyle":0},"renkoStyle":{"upColor":"#26a69a","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae","borderUpColorProjection":"#a9dcc3","borderDownColorProjection":"#f5a6ae","wickUpColor":"#26a69a","wickDownColor":"#ef5350"},"lineStyle":{"color":"#2962FF","linewidth":2,"linestyle":0},"kagiStyle":{"downColor":"#ef5350","upColor":"#26a69a","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"},"pbStyle":{"upColor":"#26a69a","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae","borderUpColorProjection":"#a9dcc3","borderDownColorProjection":"#f5a6ae"},"rangeStyle":{"upColor":"#26a69a","downColor":"#ef5350","upColorProjection":"#a9dcc3","downColorProjection":"#f5a6ae"}}}}'),
                s = JSON.parse('{"content":{"chartProperties":{"scalesProperties":{"textColor":"#B2B5BE","lineColor":"rgba(240, 243, 250, 0.12)","backgroundColor":"#ffffff"},"paneProperties":{"vertGridProperties":{"color":"rgba(240, 243, 250, 0.06)"},"horzGridProperties":{"color":"rgba(240, 243, 250, 0.06)"},"crossHairProperties":{"color":"#9598A1"},"background":"#131722","backgroundGradientStartColor":"#181C27","backgroundGradientEndColor":"#131722","backgroundType":"gradient"}},"sessions":{"graphics":{"backgrounds":{"outOfSession":{"color":"#2962FF","transparency":92},"preMarket":{"color":"#FF9800","transparency":92},"postMarket":{"color":"#2962FF","transparency":92}},"vertlines":{"sessBreaks":{"color":"#4985e7","style":2,"width":1}}}},"mainSourceProperties":{"baseLineColor":"#5d606b","candleStyle":{"borderColor":"#378658","upColor":"#26a69a","wickColor":"#B5B5B8","wickUpColor":"#26a69a","wickDownColor":"#ef5350","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350"},"haStyle":{"borderColor":"#378658","upColor":"#26a69a","wickColor":"#B5B5B8","wickUpColor":"#26a69a","wickDownColor":"#ef5350","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350"},"barStyle":{"downColor":"#ef5350","upColor":"#26a69a"},"pnfStyle":{"downColor":"#ef5350","upColor":"#26a69a","upColorProjection":"#336854","downColorProjection":"#7f323f"},"baselineStyle":{"baselineColor":"rgba( 117, 134, 150, 1)","topFillColor1":"rgba( 38, 166, 154, 0.28)","topFillColor2":"rgba( 38, 166, 154, 0.05)","bottomFillColor1":"rgba( 239, 83, 80, 0.05)","bottomFillColor2":"rgba( 239, 83, 80, 0.28)","topLineColor":"rgba( 38, 166, 154, 1)","bottomLineColor":"rgba( 239, 83, 80, 1)"},"areaStyle":{"transparency":100,"color1":"rgba(41, 98, 255, 0.28)","color2":"#2962FF","linecolor":"#2962FF","linewidth":2,"linestyle":0},"renkoStyle":{"upColor":"#26a69a","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350","upColorProjection":"#336854","downColorProjection":"#7f323f","borderUpColorProjection":"#336854","borderDownColorProjection":"#7f323f","wickUpColor":"#26a69a","wickDownColor":"#ef5350"},"lineStyle":{"color":"#2962FF","linewidth":2,"linestyle":0},"kagiStyle":{"downColor":"#ef5350","upColor":"#26a69a","upColorProjection":"#336854","downColorProjection":"#7f323f"},"pbStyle":{"upColor":"#26a69a","downColor":"#ef5350","borderUpColor":"#26a69a","borderDownColor":"#ef5350","upColorProjection":"#336854","downColorProjection":"#7f323f","borderUpColorProjection":"#336854","borderDownColorProjection":"#7f323f"},"rangeStyle":{"upColor":"#26a69a","downColor":"#ef5350","upColorProjection":"#336854","downColorProjection":"#7f323f"}}}}');
            var i = o(953321);

            function c() {
                return {
                    [i.StdTheme.Light]: JSON.parse(JSON.stringify(a)),
                    [i.StdTheme.Dark]: JSON.parse(JSON.stringify(s))
                }
            }

            function l() {
                return [i.StdTheme.Light, i.StdTheme.Dark]
            }

            function d(e) {
                return c()[e]
            }

            function u(e) {
                return {
                    [i.StdTheme.Light]: r.t("Light", {
                        context: "colorThemeName"
                    }),
                    [i.StdTheme.Dark]: r.t("Dark", {
                        context: "colorThemeName"
                    })
                }[e] || e
            }

            function p(e) {
                const t = c();
                return l().some(o => h(t[o], e))
            }

            function m(e) {
                const t = c(),
                    o = l();
                for (const r of o)
                    if (h(t[r], e)) return r;
                return null
            }

            function h(e, t) {
                let o = e.content === t.content;
                return function(e = {}, t) {
                    try {
                        ! function e(t, o, r) {
                            for (const n in t)
                                if (t.hasOwnProperty(n)) {
                                    const a = o.concat(n);
                                    if ("object" == typeof t[n]) e(t[n], a, r);
                                    else if (r(a, t[n])) throw new Error("exit")
                                }
                        }(e, [], t)
                    } catch (e) {
                        return
                    }
                }(e.content, (e, r) => {
                    const a = function(e, t = {}) {
                        let o = t;
                        for (let t = 0; t < e.length; t++) {
                            if (!o || "object" != typeof o) return;
                            o = o[e[t]]
                        }
                        if ("string" == typeof o || "number" == typeof o) return o;
                        return
                    }(e, t.content);
                    return o = function(e, t) {
                        if ("string" == typeof e && "string" == typeof t) try {
                            return (0, n.areEqualRgb)((0, n.parseRgb)(e), (0, n.parseRgb)(t))
                        } catch (o) {
                            return e === t
                        }
                        return e === t
                    }(r, a), !o
                }), o
            }
        },
        953321: (e, t, o) => {
            "use strict";
            var r;
            o.d(t, {
                    StdTheme: () => r
                }),
                function(e) {
                    e.Light = "light", e.Dark = "dark"
                }(r || (r = {}))
        },
        787479: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                watchedTheme: () => s,
                setTheme: () => i
            });
            var r = o(765066),
                n = o.n(r),
                a = o(859943);
            const s = new(n());

            function i(e) {
                s.setValue(e)
            }
            s.subscribe(e => {
                (0, a.applyTheme)(e, window)
            })
        },
        531484: (e, t, o) => {
            "use strict";
            o.d(t, {
                useForceUpdate: () => n
            });
            var r = o(667294);
            const n = () => {
                const [, e] = (0, r.useReducer)((e, t) => e + 1, 0);
                return e
            }
        },
        930170: (e, t, o) => {
            "use strict";
            o.d(t, {
                useWatchedValueReadonly: () => n
            });
            var r = o(667294);
            const n = e => {
                const t = "watchedValue" in e ? e.watchedValue : void 0,
                    o = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
                    [n, a] = (0, r.useState)(t ? t.value() : o);
                return (0, r.useEffect)(() => {
                    if (t) {
                        a(t.value());
                        const e = e => a(e);
                        return t.subscribe(e), () => t.unsubscribe(e)
                    }
                    return () => {}
                }, [t]), n
            }
        },
        630976: (e, t, o) => {
            "use strict";
            o.d(t, {
                OverlapManager: () => a,
                getRootOverlapManager: () => i
            });
            var r = o(416282);
            class n {
                constructor() {
                    this._storage = []
                }
                add(e) {
                    this._storage.push(e)
                }
                remove(e) {
                    this._storage = this._storage.filter(t => e !== t)
                }
                has(e) {
                    return this._storage.includes(e)
                }
                getItems() {
                    return this._storage
                }
            }
            class a {
                constructor(e = document) {
                    this._storage = new n, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
                }
                setContainer(e) {
                    const t = this._container,
                        o = null === e ? this._document.createDocumentFragment() : e;
                    ! function(e, t) {
                        Array.from(e.childNodes).forEach(e => {
                            e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
                        })
                    }(t, o), this._container = o
                }
                registerWindow(e) {
                    this._storage.has(e) || this._storage.add(e)
                }
                ensureWindow(e, t = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const o = this._windows.get(e);
                    if (void 0 !== o) return o;
                    this.registerWindow(e);
                    const r = this._document.createElement("div");
                    if (r.style.position = t.position, r.style.zIndex = this._index.toString(), r.dataset.id = e, void 0 !== t.index) {
                        const e = this._container.childNodes.length;
                        if (t.index >= e) this._container.appendChild(r);
                        else if (t.index <= 0) this._container.insertBefore(r, this._container.firstChild);
                        else {
                            const e = this._container.childNodes[t.index];
                            this._container.insertBefore(r, e)
                        }
                    } else "reverse" === t.direction ? this._container.insertBefore(r, this._container.firstChild) : this._container.appendChild(r);
                    return this._windows.set(e, r), ++this._index, r
                }
                unregisterWindow(e) {
                    this._storage.remove(e);
                    const t = this._windows.get(e);
                    void 0 !== t && (null !== t.parentElement && t.parentElement.removeChild(t), this._windows.delete(e))
                }
                getZindex(e) {
                    const t = this.ensureWindow(e);
                    return parseInt(t.style.zIndex || "0")
                }
                moveToTop(e) {
                    if (this.getZindex(e) !== this._index) {
                        this.ensureWindow(e).style.zIndex = (++this._index).toString()
                    }
                }
                removeWindow(e) {
                    this.unregisterWindow(e)
                }
            }
            const s = new WeakMap;

            function i(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, r.ensureDefined)(s.get(t)); {
                    const t = new a(e),
                        o = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return s.set(o, t), t.setContainer(o), e.body.appendChild(o), t
                }
            }
        },
        472625: (e, t, o) => {
            "use strict";
            o.d(t, {
                Portal: () => c,
                PortalContext: () => l
            });
            var r = o(667294),
                n = o(973935),
                a = o(75443),
                s = o(630976),
                i = o(629791);
            class c extends r.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, a.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", n.createPortal(r.createElement(l.Provider, {
                        value: this
                    }, this.props.children), e)
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid)
                }
                _manager() {
                    return null === this.context ? (0, s.getRootOverlapManager)() : this.context
                }
            }
            c.contextType = i.SlotContext;
            const l = r.createContext(null)
        },
        629791: (e, t, o) => {
            "use strict";
            o.d(t, {
                Slot: () => n,
                SlotContext: () => a
            });
            var r = o(667294);
            class n extends r.Component {
                shouldComponentUpdate() {
                    return !1
                }
                render() {
                    return r.createElement("div", {
                        style: {
                            position: "fixed",
                            zIndex: 150,
                            left: 0,
                            top: 0
                        },
                        ref: this.props.reference
                    })
                }
            }
            const a = r.createContext(null)
        },
        639230: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path stroke="currentColor" stroke-width="1.2" d="M1 1l11 11m0-11L1 12"/></svg>'
        },
        912869: e => {
            "use strict";
            e.exports = JSON.parse('{"size-header-height":"64px","size-sticky-symbol-header-height":"64px","media-tablet":"screen and (max-width: 1019px)","media-phone":"screen and (max-width: 767px)","media-phone-vertical":"screen and (max-width: 479px)","media-extreme-thin":"screen and (max-width: 329px)","media-mf-legacy-phone":"screen and (min-width: 480px)","media-mf-legacy-notebook":"screen and (min-width: 1020px)","media-mf-phone-landscape":"screen and (min-width: 568px)","media-mf-tablet-vertical":"screen and (min-width: 768px)","media-mf-tablet-landscape":"screen and (min-width: 1024px)","media-mf-laptop":"screen and (min-width: 1280px)","z-index-sticky-search-bar":101}')
        },
        79352: e => {
            "use strict";
            e.exports = JSON.parse('{"toast":"toast-305jedKL","intent-success":"intent-success-2RtY-FeK","intent-warning":"intent-warning-1jgs0IG1","intent-danger":"intent-danger-1Cx2mC3K","image":"image-Fj3MLdJP","main-content":"main-content-mxEBwIhg","title":"title-Nac7V1d4","main-text":"main-text-3vlLbpra","secondary-text":"secondary-text-2cVoFq4w","actions":"actions-1hKauwXn","close-icon":"close-icon-3l9twKS_","close-button":"close-button-7uy97o5_","adjust-for-close-button":"adjust-for-close-button-3tsc21G3"}')
        }
    }
]);