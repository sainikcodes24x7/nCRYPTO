(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [65481, 79836], {
        493958: (e, t, n) => {
            "use strict";
            n.d(t, {
                OfferButtonMenuItem: () => s
            });
            var r = n(667294),
                a = n(294184),
                o = (n(568421), n(261098)),
                i = n(371141);

            function s(e) {
                const {
                    title: t,
                    href: n,
                    class_name: a,
                    subtitle: i,
                    expiration: s
                } = e;
                return r.createElement(r.Fragment, null, Object.keys(e).length > 1 && r.createElement(u, {
                    href: n,
                    className: a
                }, r.createElement("span", {
                    className: "tv-header__offer-button-title"
                }, t), r.createElement("small", null, i || (0, o.getTextDurationCurrentOffer)(s))))
            }

            function u(e) {
                return r.createElement("span", {
                    className: a("tv-header__offer-button-container", e.className)
                }, r.createElement("a", {
                    className: "tv-header__offer-button",
                    href: e.href || "",
                    onClick: t => {
                        e.href || (t.preventDefault(), (0, i.showSignModal)({
                            mode: "signup",
                            source: "Go pro page header button"
                        }))
                    },
                    children: e.children
                }))
            }
        },
        220198: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                offerButtonInit: () => u
            });
            var r = n(667294),
                a = n(973935),
                o = n(493958),
                i = n(604346),
                s = n(336520);

            function u() {
                (0, s.initFromInitData)();
                const e = document.querySelector(".js-offer-button"),
                    t = (0, i.getInitData)().offerButtonInfo;
                !e || window.is_authenticated && "/gopro/" === location.pathname || "/black-friday/" === location.pathname || !t || a.hydrate(r.createElement(o.OfferButtonMenuItem, { ...t
                }), e)
            }
        },
        261098: (e, t, n) => {
            "use strict";
            n.d(t, {
                getTextDurationCurrentOffer: () => o,
                getTrialOfferText: () => i
            });
            var r = n(120220),
                a = n(15642);

            function o(e) {
                if (e) {
                    const t = new Date(1e3 * Number(e)),
                        n = new Date,
                        a = Math.ceil((t.getTime() - n.getTime()) / 864e5);
                    return a <= 1 ? r.t("Offer ends today") : r.t("Offer ends in {offerDuration} day", {
                        plural: "Offer ends in {offerDuration} days",
                        count: a
                    }).format({
                        offerDuration: a.toString()
                    })
                }
                return null
            }

            function i() {
                var e, t;
                const n = null === (t = null === (e = window.user.available_offers) || void 0 === e ? void 0 : e[a.OFFERS.trial]) || void 0 === t ? void 0 : t.length;
                return void 0 !== n ? r.t("{days}-day free trial", {
                    plural: "{days}-day free trial",
                    count: n
                }).format({
                    days: n.toString()
                }) : null
            }
        },
        859943: (e, t, n) => {
            "use strict";

            function r(e, t = window) {
                const n = "theme-" + e,
                    r = t.document.documentElement.classList;
                for (const e of Array.from(r)) e.startsWith("theme-") && e !== n && r.remove(e);
                r.add(n)
            }
            n.r(t), n.d(t, {
                applyTheme: () => r
            })
        },
        336520: (e, t, n) => {
            "use strict";
            n.d(t, {
                initFromInitData: () => o
            });
            var r = n(604346),
                a = n(787479);

            function o() {
                (0, r.updateInitData)();
                const e = (0, r.getInitData)();
                "theme" in e && (0, a.setTheme)(e.theme)
            }
        },
        787479: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                watchedTheme: () => i,
                setTheme: () => s
            });
            var r = n(765066),
                a = n.n(r),
                o = n(859943);
            const i = new(a());

            function s(e) {
                i.setValue(e)
            }
            i.subscribe(e => {
                (0, o.applyTheme)(e, window)
            })
        }
    }
]);