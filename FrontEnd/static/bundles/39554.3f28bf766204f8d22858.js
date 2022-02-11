(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [39554, 4304], {
        108679: (e, t, r) => {
            "use strict";
            var o = r(121296),
                n = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                s = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                i = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {};

            function c(e) {
                return o.isMemo(e) ? i : a[e.$$typeof] || n
            }
            a[o.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, a[o.Memo] = i;
            var l = Object.defineProperty,
                u = Object.getOwnPropertyNames,
                f = Object.getOwnPropertySymbols,
                d = Object.getOwnPropertyDescriptor,
                _ = Object.getPrototypeOf,
                m = Object.prototype;
            e.exports = function e(t, r, o) {
                if ("string" != typeof r) {
                    if (m) {
                        var n = _(r);
                        n && n !== m && e(t, n, o)
                    }
                    var i = u(r);
                    f && (i = i.concat(f(r)));
                    for (var a = c(t), E = c(r), p = 0; p < i.length; ++p) {
                        var S = i[p];
                        if (!(s[S] || o && o[S] || E && E[S] || a && a[S])) {
                            var h = d(r, S);
                            try {
                                l(t, S, h)
                            } catch (e) {}
                        }
                    }
                }
                return t
            }
        },
        396103: (e, t) => {
            "use strict";
            var r = "function" == typeof Symbol && Symbol.for,
                o = r ? Symbol.for("react.element") : 60103,
                n = r ? Symbol.for("react.portal") : 60106,
                s = r ? Symbol.for("react.fragment") : 60107,
                i = r ? Symbol.for("react.strict_mode") : 60108,
                a = r ? Symbol.for("react.profiler") : 60114,
                c = r ? Symbol.for("react.provider") : 60109,
                l = r ? Symbol.for("react.context") : 60110,
                u = r ? Symbol.for("react.async_mode") : 60111,
                f = r ? Symbol.for("react.concurrent_mode") : 60111,
                d = r ? Symbol.for("react.forward_ref") : 60112,
                _ = r ? Symbol.for("react.suspense") : 60113,
                m = r ? Symbol.for("react.suspense_list") : 60120,
                E = r ? Symbol.for("react.memo") : 60115,
                p = r ? Symbol.for("react.lazy") : 60116,
                S = r ? Symbol.for("react.block") : 60121,
                h = r ? Symbol.for("react.fundamental") : 60117,
                R = r ? Symbol.for("react.responder") : 60118,
                T = r ? Symbol.for("react.scope") : 60119;

            function O(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case o:
                            switch (e = e.type) {
                                case u:
                                case f:
                                case s:
                                case a:
                                case i:
                                case _:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case l:
                                        case d:
                                        case p:
                                        case E:
                                        case c:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case n:
                            return t
                    }
                }
            }

            function y(e) {
                return O(e) === f
            }
            t.AsyncMode = u, t.ConcurrentMode = f, t.ContextConsumer = l, t.ContextProvider = c, t.Element = o, t.ForwardRef = d, t.Fragment = s, t.Lazy = p, t.Memo = E, t.Portal = n, t.Profiler = a, t.StrictMode = i, t.Suspense = _, t.isAsyncMode = function(e) {
                return y(e) || O(e) === u
            }, t.isConcurrentMode = y, t.isContextConsumer = function(e) {
                return O(e) === l
            }, t.isContextProvider = function(e) {
                return O(e) === c
            }, t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === o
            }, t.isForwardRef = function(e) {
                return O(e) === d
            }, t.isFragment = function(e) {
                return O(e) === s
            }, t.isLazy = function(e) {
                return O(e) === p
            }, t.isMemo = function(e) {
                return O(e) === E
            }, t.isPortal = function(e) {
                return O(e) === n
            }, t.isProfiler = function(e) {
                return O(e) === a
            }, t.isStrictMode = function(e) {
                return O(e) === i
            }, t.isSuspense = function(e) {
                return O(e) === _
            }, t.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === s || e === f || e === a || e === i || e === _ || e === m || "object" == typeof e && null !== e && (e.$$typeof === p || e.$$typeof === E || e.$$typeof === c || e.$$typeof === l || e.$$typeof === d || e.$$typeof === h || e.$$typeof === R || e.$$typeof === T || e.$$typeof === S)
            }, t.typeOf = O
        },
        121296: (e, t, r) => {
            "use strict";
            e.exports = r(396103)
        },
        583665: e => {
            e.exports = {
                breadcrumbs: "breadcrumbs-2MEXA79K",
                "left-fade": "left-fade-2MEXA79K",
                "right-fade": "right-fade-2MEXA79K",
                "breadcrumbs-inner": "breadcrumbs-inner-2MEXA79K",
                breadcrumb: "breadcrumb-2MEXA79K",
                divider: "divider-2MEXA79K"
            }
        },
        911925: (e, t, r) => {
            "use strict";
            r.d(t, {
                useIsMounted: () => n
            });
            var o = r(667294);
            const n = () => {
                const e = (0, o.useRef)(!1);
                return (0, o.useEffect)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
        },
        697105: (e, t, r) => {
            "use strict";
            r.d(t, {
                solutionIds: () => o
            });
            const o = JSON.parse('{"EXTENDED_HOURS":43000502023,"PRE_MARKET":43000502023,"POST_MARKET":43000502023,"SPREAD_CHARTS":43000502298,"ALERTS":43000520149,"ALERT_ON_STRATEGY":43000481368,"ALERT_WEBHOOK":43000529348,"ALERT_DESCRIPTION_PLACEHOLDER":43000531021,"VOLUME_PROFILE":43000502040,"VOLUME_PROFILE_INDICATOR":43000557450,"RENKO":43000502284,"KAGI":43000502272,"LINE_BREAK":43000502273,"PNF":43000502276,"FINANCIAL_DATA":43000543506,"BROKER_RATING":43000542490,"CRYPTO_MARKET_CAP":43000540941,"CRYPTO_PAYMENT":43000485536,"ALERT_ON_SPREAD":43000478406,"ALERT_ON_CUSTOM_SCRIPT":43000478415,"ALERT_FUNCTION":43000597494,"SMS_VERIFICATION":43000553429,"MAGNET_MODE":43000537270,"PINE_CANNOT_DETERMINE":43000587849,"PRIVACY_SETTINGS":43000548335,"PUBLICATION_TYPE":43000609497,"SCRIPT_ACCESS":43000482573,"MEMORY_LIMITS_EXCEEDED":43000590233,"FREE_USER_FAQS":43000590947,"STRATEGY_UNREALISTIC_RESULTS":43000481029,"STRATEGY_FUTURE_DATA":43000614705,"STREAM_RULES":43000591348,"HOW_TO_USE_PAPER":43000516466,"HOW_TO_USE_CQG":43000516372,"HOW_TO_USE_OANDA":43000516375,"HOW_TO_USE_FOREXCOM":43000516374,"FAVORITE_IDEA":43000555216,"YOUTUBE_ERROR":43000612153,"AUTHORS_INSTRUCTIONS_PUBCLICATION":43000549951,"AUTHORS_INSTRUCTIONS_EDIT":43000614618,"SCRIPT_INSTRUCTIONS":43000482573,"BAR_REPLAY_UNAVAILABILITY":43000475470,"WHAT_IS_CBOE_BZX_EXCHANGE":43000473924,"GOPRO_UPGRADE_DESCRIPTION":43000473324,"GOPRO_DOWNGRADE_DESCRIPTION":43000485437,"BROKERAGE_REVIEWS":43000591351,"CHANGE_SUBSCRIPTION":43000635806,"PINE_LIBRARY_INFO":43000638371,"HOW_TO_CREATE_A_STREAM":43000560174,"HOW_DO_I_UPDATE_DESKTOP_APP":43000647779}')
        },
        297378: (e, t, r) => {
            "use strict";
            r.d(t, {
                constructBreadcrumbsPath: () => s,
                SupportWizardBreadcrumbs: () => i
            });
            var o = r(667294),
                n = r(553657);

            function s(e, t = !1) {
                const r = [];
                for (let o = 0; o < e.length; o++) {
                    const n = e[o];
                    if (void 0 !== n.isCrumbVisible && !n.isCrumbVisible) continue;
                    const s = o + 1 === e.length,
                        i = t || s,
                        a = {
                            name: n.name,
                            role: "button",
                            href: n.href,
                            onClick: e => {
                                e.preventDefault(), i || n.onClick()
                            }
                        };
                    i && (a["aria-disabled"] = !0, a.tabIndex = -1), r.push(a)
                }
                return r
            }

            function i(e) {
                const {
                    breadcrumbs: t,
                    className: r,
                    innerClassName: s
                } = e;
                return o.createElement(n.Breadcrumbs, {
                    path: t,
                    className: r,
                    innerClassName: s,
                    initialScrollPosition: "start"
                })
            }
        },
        553657: (e, t, r) => {
            "use strict";
            r.d(t, {
                Breadcrumbs: () => _
            });
            var o = r(667294),
                n = r(294184),
                s = r(846417),
                i = r(858848),
                a = r(801529),
                c = r(416282),
                l = r(582755),
                u = r(583665);

            function f(e) {
                const {
                    divider: t = "•",
                    className: r
                } = e;
                return "string" == typeof t ? o.createElement("span", {
                    className: n(u.divider, r)
                }, t) : t
            }

            function d(e) {
                const {
                    name: t,
                    href: r = "",
                    ...n
                } = e;
                return o.createElement("a", {
                    href: r,
                    ...n
                }, t)
            }
            class _ extends o.PureComponent {
                constructor(e) {
                    super(e), this._ref = o.createRef(), this._handleContainerScroll = () => {
                        const {
                            showLeftFade: e,
                            showRightFade: t
                        } = this.state, r = this._shouldShowLeftFade(), o = this._shouldShowRightFade();
                        r === e && o === t || this.setState({
                            showLeftFade: r,
                            showRightFade: o
                        })
                    }, this._shouldShowLeftFade = () => {
                        const e = this._ref.current;
                        if (null === e) return !1;
                        const t = e.clientWidth;
                        if (e.scrollWidth > t) {
                            return (0, s.getNormalizedScrollLeft)(e, (0, l.isRtl)() ? "rtl" : "ltr") > 0
                        }
                        return !1
                    }, this._shouldShowRightFade = () => {
                        const e = this._ref.current;
                        if (null === e) return !1;
                        const t = e.clientWidth,
                            r = e.scrollWidth;
                        if (r > t) {
                            return (0, s.getNormalizedScrollLeft)(e, (0, l.isRtl)() ? "rtl" : "ltr") + t < r
                        }
                        return !1
                    }, this.state = {
                        showLeftFade: !1,
                        showRightFade: !1
                    }, this._handleContainerScroll = (0, i.default)(this._handleContainerScroll, 200), this._resizeObserver = new a.default(this._handleContainerScroll)
                }
                componentDidMount() {
                    const e = (0, c.ensureNotNull)(this._ref.current);
                    "end" === this.props.initialScrollPosition && e.scrollWidth > e.clientWidth && (0, s.setNormalizedScrollLeft)(e, (0, l.isRtl)() ? 0 : e.scrollWidth - e.clientWidth, (0, l.isRtl)() ? "rtl" : "ltr"), this._resizeObserver.observe(e), this._handleContainerScroll()
                }
                componentWillUnmount() {
                    const e = (0, c.ensureNotNull)(this._ref.current);
                    this._resizeObserver.unobserve(e)
                }
                render() {
                    const {
                        path: e,
                        divider: t,
                        className: r,
                        innerClassName: s,
                        dividerClassName: i
                    } = this.props, {
                        showLeftFade: a,
                        showRightFade: c
                    } = this.state;
                    if (0 === e.length) return null;
                    const [l, ...d] = e, _ = [this._getBreadcrumbComponent(l)];
                    for (const e of d) _.push(o.createElement(f, {
                        key: e.name + "_divider",
                        divider: t,
                        className: i
                    })), _.push(this._getBreadcrumbComponent(e));
                    return o.createElement("div", {
                        className: n(u.breadcrumbs, a && u["left-fade"], c && u["right-fade"], r),
                        onScrollCapture: this._handleContainerScroll
                    }, o.createElement("nav", {
                        ref: this._ref,
                        className: n(u["breadcrumbs-inner"], s)
                    }, _))
                }
                _getBreadcrumbComponent(e) {
                    const {
                        itemClassName: t
                    } = this.props, {
                        component: r = d,
                        className: s,
                        ...i
                    } = e;
                    return o.createElement(r, {
                        key: e.name,
                        className: n(u.breadcrumb, t, s),
                        ...i
                    })
                }
            }
            _.defaultProps = {
                initialScrollPosition: "end"
            }
        }
    }
]);