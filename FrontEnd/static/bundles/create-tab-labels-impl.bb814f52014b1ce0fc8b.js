(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [11233], {
        943199: e => {
            e.exports = {
                "css-value-button-tabs-button-small-size": "28px",
                "css-value-button-tabs-button-medium-size": "34px",
                tabs: "tabs-3-f9q69b",
                small: "small-3-f9q69b",
                leftFade: "leftFade-3-f9q69b",
                rightFade: "rightFade-3-f9q69b",
                medium: "medium-3-f9q69b",
                scrollWrapper: "scrollWrapper-3-f9q69b"
            }
        },
        132033: e => {
            e.exports = {
                "css-value-button-tabs-button-small-size": "28px",
                "css-value-button-tabs-button-medium-size": "34px",
                button: "button-1cy7XKgV",
                isSelected: "isSelected-1cy7XKgV",
                medium: "medium-1cy7XKgV",
                small: "small-1cy7XKgV"
            }
        },
        768570: e => {
            e.exports = {
                scrollButton: "scrollButton-1AF3OfzY button-1cy7XKgV",
                isVisible: "isVisible-1AF3OfzY",
                small: "small-1AF3OfzY small-1cy7XKgV",
                medium: "medium-1AF3OfzY medium-1cy7XKgV",
                left: "left-1AF3OfzY",
                right: "right-1AF3OfzY"
            }
        },
        363230: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                createTabLabelsImp: () => o
            });
            var l = s(667294),
                i = s(973935),
                a = s(502077);

            function n(e) {
                const t = e.tabs[0].id,
                    [s, i] = l.useState(t);
                return l.createElement(a.ButtonTabs, { ...e,
                    selectedTabId: s,
                    onTabClick: t => {
                        i(t), e.onTabClick(t)
                    }
                })
            }
            async function o(e, t, s, a, o) {
                const r = e.map((e, t) => ({
                        id: t.toString(),
                        label: e,
                        isDisabled: !1
                    })),
                    c = o && await o();
                return i.render(l.createElement(n, {
                        tabs: r,
                        onTabClick: function(e) {
                            const t = Number(e);
                            var l;
                            l = t, s.forEach((e, t) => {
                                e.classList.toggle("i-hidden", t !== l)
                            }), a(t, s)
                        },
                        theme: c,
                        size: 0
                    }), t),
                    function() {
                        i.unmountComponentAtNode(t)
                    }
            }
        },
        502077: (e, t, s) => {
            "use strict";
            s.d(t, {
                ButtonTabs: () => h
            });
            var l = s(667294),
                i = s(294184),
                a = s(195355),
                n = s(991050);
            const o = l.createContext(1);
            var r = s(132033);

            function c(e) {
                const {
                    label: t,
                    isSelected: s,
                    isDisabled: a,
                    onClick: n,
                    id: c,
                    theme: u = r
                } = e, m = l.useContext(o);
                return l.createElement("button", {
                    role: "tab",
                    id: c,
                    "aria-selected": s,
                    "aria-controls": e["aria-controls"],
                    className: i(u.button, {
                        [u.isSelected]: s,
                        [u.medium]: 1 === m,
                        [u.small]: 0 === m
                    }),
                    disabled: a,
                    onClick: n
                }, t)
            }
            var u = s(768570),
                m = s(191075);

            function b(e) {
                const {
                    className: t,
                    onClick: s,
                    isVisible: a
                } = e, n = l.useContext(o);
                return l.createElement("button", {
                    tabIndex: -1,
                    "aria-hidden": !0,
                    className: i(t, u.scrollButton, {
                        [u.isVisible]: a,
                        [u.small]: 0 === n,
                        [u.medium]: 1 === n
                    }),
                    onClick: s,
                    dangerouslySetInnerHTML: {
                        __html: m
                    }
                })
            }
            var d = s(943199);
            const f = (0, n.horizontalScrollFactory)((function(e) {
                return l.createElement(b, { ...e,
                    className: u.left
                })
            }), (function(e) {
                return l.createElement(b, { ...e,
                    className: u.right
                })
            }));

            function h(e) {
                const {
                    tabs: t,
                    selectedTabId: s,
                    onTabClick: n,
                    size: r,
                    theme: u
                } = e, m = l.useRef(null), [{
                    isAtLeft: b,
                    isAtRight: h
                }, g] = function(e) {
                    const [t, s] = l.useState({
                        isAtLeft: !0,
                        isAtRight: !0
                    });

                    function i(e, l) {
                        t.isAtLeft === e && t.isAtRight === l || s({
                            isAtLeft: e,
                            isAtRight: l
                        })
                    }
                    return l.useEffect(() => {
                        const t = e.current;
                        t && i(t.isAtLeft(), t.isAtRight())
                    }, []), [t, i]
                }(m);
                return l.createElement(o.Provider, {
                    value: r
                }, l.createElement(f, {
                    isVisibleScrollbar: !1,
                    isVisibleButtons: !a.mobiletouch,
                    onScroll: (e, t, s) => {
                        g(t, s)
                    },
                    scrollWrapClassName: i(d.scrollWrapper, {
                        [d.small]: 0 === r,
                        [d.medium]: 1 === r,
                        [d.leftFade]: !a.mobiletouch && !b,
                        [d.rightFade]: !a.mobiletouch && !h
                    })
                }, l.createElement("div", {
                    role: "tablist",
                    className: d.tabs
                }, t.map(e => l.createElement(c, {
                    key: e.id,
                    id: e.id,
                    "aria-controls": e["aria-controls"],
                    label: e.label,
                    isSelected: s === e.id,
                    isDisabled: e.isDisabled,
                    onClick: () => n(e.id),
                    theme: u
                })))))
            }
        },
        191075: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 12L1 6.5 6.5 1"/></svg>'
        }
    }
]);