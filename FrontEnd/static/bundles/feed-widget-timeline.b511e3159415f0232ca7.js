(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [31936], {
        370643: e => {
            e.exports = {
                loader: "loader-36Gx6JTY"
            }
        },
        737849: e => {
            e.exports = {
                scrollButtonCircleLeft: "scrollButtonCircleLeft-wO2GDwdp",
                scrollButtonCircleRight: "scrollButtonCircleRight-wO2GDwdp",
                isVisible: "isVisible-wO2GDwdp",
                scrollButtonCircleWrap: "scrollButtonCircleWrap-wO2GDwdp"
            }
        },
        639293: e => {
            e.exports = {
                emoji: "emoji-HW22S-ck"
            }
        },
        990316: (e, t, n) => {
            "use strict";
            n.d(t, {
                getTimelineEventDateFragments: () => r
            });
            var i = n(210934);

            function r(e) {
                const t = new Date(e.date);
                return {
                    monthAndMaybeDay: e.extra.showDayInTimeline ? i.dateFormatFunctions["MMM dd"](t, !1) : (0, i.monthFormatFunction)(t, !1),
                    year: String(t.getFullYear())
                }
            }
        },
        333498: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_TIMELINE_EVENT_PIN_THEME: () => o,
                TimelineEventPin: () => c,
                getTimelineEventPinProps: () => m
            });
            var i = n(667294),
                r = n(294184),
                l = n.n(r),
                a = n(926395),
                s = n(238103);
            const o = s;

            function c(e) {
                const t = "emoji" === e.pinType ? {
                        "--timeline-event-pin-image-light-theme-color": e.backgroundColor.light,
                        "--timeline-event-pin-image-dark-theme-color": e.backgroundColor.dark
                    } : void 0,
                    n = e.theme || s;
                return i.createElement("div", {
                    className: n.container,
                    style: t
                }, "image" === e.pinType && i.createElement("img", {
                    className: n.img,
                    src: e.coverImageUrl + "?v=2",
                    alt: "",
                    loading: "lazy",
                    crossOrigin: "anonymous"
                }), "emoji" === e.pinType && i.createElement("span", {
                    className: n.icon
                }, i.createElement(a.Twemoji, {
                    emoji: e.emoji
                })), "none" === e.pinType && i.createElement("span", {
                    className: l()(n.icon, n.iconCalendar)
                }))
            }

            function m(e) {
                return "emoji" === e.extra.pinType ? {
                    pinType: "emoji",
                    backgroundColor: e.extra.backgroundColor,
                    emoji: e.extra.emoji
                } : "image" === e.extra.pinType ? {
                    pinType: "image",
                    coverImageUrl: e.extra.coverImage.url
                } : {
                    pinType: "none"
                }
            }
        },
        599669: (e, t, n) => {
            "use strict";
            n.d(t, {
                TimelineListLoader: () => a
            });
            var i = n(667294),
                r = n(564583),
                l = n(370643);
            const a = i.forwardRef((e, t) => i.createElement("div", {
                className: l.loader,
                ref: t
            }, i.createElement(r.Spinner, {
                size: "medium"
            })))
        },
        766577: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                TimelineWidgetList: () => w
            });
            var i = n(667294),
                r = n(377672),
                l = n(372777),
                a = n(333498),
                s = n(990316),
                o = n(826150),
                c = n(923724);
            const m = (0, l.getLogoUrlResolver)();

            function p(e) {
                const {
                    showSymbol: t,
                    event: n,
                    openItemOnBlankPage: p
                } = e, {
                    monthAndMaybeDay: d,
                    year: g
                } = (0, s.getTimelineEventDateFragments)(n), v = (0, o.splitSymbolName)(n.symbol)[1];
                return i.createElement("a", {
                    className: c.item,
                    href: n.uri,
                    target: p ? "_blank" : void 0
                }, i.createElement("div", {
                    className: c.meta
                }, t && i.createElement(i.Fragment, null, i.createElement(r.CircleLogo, {
                    logoUrl: n.symbol_logo_id && m.getSymbolLogoUrl(n.symbol_logo_id, l.LogoSize.Medium),
                    placeholderLetter: v[0],
                    size: "xsmall"
                }), i.createElement("span", {
                    className: c.symbolName
                }, v)), i.createElement("span", {
                    className: c.date
                }, d + " · " + g)), i.createElement("div", null, i.createElement("div", {
                    className: c.pinImage
                }, i.createElement(a.TimelineEventPin, { ...(0, a.getTimelineEventPinProps)(n)
                })), i.createElement("div", {
                    className: c.title
                }, n.headline), i.createElement("div", {
                    className: c.description
                }, n.description_preview)))
            }
            var d = n(599669),
                g = n(991050),
                v = n(591808),
                u = n(357824),
                E = n(437431);
            const h = (0,
                g.horizontalScrollFactory)(v.CircleScrollButtonLeft, v.CircleScrollButtonRight);

            function w(e) {
                const {
                    events: t,
                    showSymbol: n,
                    openItemOnBlankPage: r,
                    loaderRef: l
                } = e, [a, s] = (0, u.useHover)();
                return i.createElement(h, {
                    scrollStepSize: 356,
                    isVisibleButtons: a,
                    isVisibleScrollbar: !1,
                    ...s
                }, i.createElement("div", {
                    className: E.innerContainer
                }, t.map(e => i.createElement(p, {
                    key: e.id,
                    event: e,
                    showSymbol: n,
                    openItemOnBlankPage: r
                })), l && i.createElement(d.TimelineListLoader, {
                    ref: l
                })))
            }
        },
        100551: (e, t, n) => {
            "use strict";
            n.d(t, {
                getTwemojiUrl: () => r
            });
            var i = n(745623);

            function r(e, t) {
                let n = "";
                return i.default.parse(e, e => (n = i.default.base + ("svg" === t ? `svg/${e}.svg` : `72x72/${e}.png`), !1)), n
            }
        },
        591808: (e, t, n) => {
            "use strict";
            n.d(t, {
                CircleScrollButtonLeft: () => o,
                CircleScrollButtonRight: () => c
            });
            var i = n(667294),
                r = n(294184),
                l = n(737849),
                a = n(488480),
                s = n(438462);

            function o(e) {
                const {
                    className: t,
                    ...n
                } = e;
                return i.createElement(m, { ...n,
                    className: r(l.scrollButtonCircleLeft, t),
                    icon: a
                })
            }

            function c(e) {
                const {
                    className: t,
                    ...n
                } = e;
                return i.createElement(m, { ...n,
                    className: r(l.scrollButtonCircleRight, t),
                    icon: s
                })
            }

            function m(e) {
                return i.createElement("div", {
                    className: r(e.className, e.isVisible && l.isVisible),
                    onClick: e.onClick,
                    dangerouslySetInnerHTML: {
                        __html: e.icon
                    }
                })
            }
        },
        564583: (e, t, n) => {
            "use strict";
            n.d(t, {
                Spinner: () => a
            });
            var i = n(667294),
                r = n(294184),
                l = n(129786);
            n(918266);

            function a(e) {
                const t = r("tv-spinner", "tv-spinner--shown", "tv-spinner--size_" + (e.size || l.DEFAULT_SIZE));
                return i.createElement("div", {
                    className: t,
                    style: e.style,
                    role: "progressbar"
                }, i.createElement("div", {
                    className: "tv-spinner__spinner-layer"
                }, i.createElement("div", {
                    className: "tv-spinner__background tv-spinner__width_element"
                }), i.createElement("div", {
                    className: "tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left"
                }), i.createElement("div", {
                    className: "tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right"
                })))
            }
        },
        926395: (e, t, n) => {
            "use strict";
            n.d(t, {
                Twemoji: () => a
            });
            var i = n(667294),
                r = n(100551),
                l = n(639293);

            function a(e) {
                const t = (0, r.getTwemojiUrl)(e.emoji, "svg");
                return i.createElement("img", {
                    alt: e.emoji,
                    className: l.emoji,
                    src: t,
                    loading: "lazy"
                })
            }
        },
        488480: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><path d="M9.4 1.4l-1.4-1.4-8 8 8 8 1.4-1.4-6.389-6.532 6.389-6.668z"/></svg>'
        },
        438462: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><path d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z"/></svg>'
        }
    }
]);