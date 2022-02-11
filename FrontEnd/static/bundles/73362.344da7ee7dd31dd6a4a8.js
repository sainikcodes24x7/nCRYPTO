(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [73362], {
        310469: (e, r, a) => {
            e.exports = a.p + "c11660ffa491b6ffed0dc5a5a3876e51.svg"
        },
        688183: e => {
            e.exports = {
                container: "container-1Lm2eyT1",
                userProfileLink: "userProfileLink-1Lm2eyT1",
                username: "username-1Lm2eyT1",
                usernameBig: "usernameBig-1Lm2eyT1 username-1Lm2eyT1",
                badge: "badge-1Lm2eyT1"
            }
        },
        913080: (e, r, a) => {
            "use strict";
            a.d(r, {
                getBadgeAccountLink: () => s
            });
            var i = a(822635);
            var t = a(814874);

            function s(e) {
                return (0, i.isBadgeUser)(e) ? function(e) {
                    if ((0, i.isPineWizard)(e)) return "/pine-wizards/";
                    if ((0, i.isModerator)(e)) return "/moderators/";
                    if ((0, i.isProPremium)(e) || (0, i.isProRealtime)(e) || (0, i.isPro)(e) || (0, i.isTrial)(e)) {
                        return "/gopro/?source=badge&feature=" + e.split(":")[1]
                    }
                }(e) : (0, t.isBadgeBroker)(e) ? function(e) {
                    return (0, t.isBadgeBrokerWithLink)(e) ? "/brokers/" : void 0
                }(e) : void 0
            }
        },
        384658: (e, r, a) => {
            "use strict";
            a.d(r, {
                BadgeAccount: () => l,
                renderBadgeAccount: () => d
            });
            var i = a(667294),
                t = a(973935),
                s = a(704763),
                o = a(457989),
                n = a(822635),
                m = a(814874);

            function l(e) {
                const {
                    name: r,
                    href: a,
                    ...t
                } = e;
                return (0, n.isBadgeUser)(r) ? i.createElement(s.BadgeUser, {
                    name: r,
                    href: a,
                    ...t
                }) : (0, m.isBadgeBroker)(r) ? i.createElement(o.BadgeBroker, {
                    name: r,
                    href: a,
                    ...t
                }) : null
            }

            function d(e, r) {
                t.render(i.createElement(l, { ...r
                }), e)
            }
        },
        230873: (e, r, a) => {
            "use strict";
            a.d(r, {
                getBadgeAccountName: () => s,
                getBadgeAccountTitle: () => o
            });
            var i = a(820664),
                t = a(683575);

            function s(e) {
                var r;
                if (0 !== e.length) return null === (r = e.find(e => {
                    return r = e.name, n.has(r);
                    var r
                })) || void 0 === r ? void 0 : r.name
            }

            function o(e) {
                return e.map(e => e.verbose_name).join(" | ")
            }
            const n = new Set(Object.values({ ...i.BadgeBrokerNames,
                ...t.BadgeUserNames
            }))
        },
        820664: (e, r, a) => {
            "use strict";
            var i;
            a.d(r, {
                    BadgeBrokerNames: () => i
                }),
                function(e) {
                    e.BrokerExtraFeatured = "broker_extra:featured", e.BrokerPlatinum = "broker:platinum", e.BrokerGold = "broker:gold", e.BrokerSilver = "broker:silver"
                }(i || (i = {}))
        },
        457989: (e, r, a) => {
            "use strict";
            a.d(r, {
                BadgeBroker: () => l
            });
            var i = a(667294),
                t = a(294184),
                s = a(820664),
                o = a(138537),
                n = a(814874),
                m = a(249956);

            function l(e) {
                const {
                    name: r,
                    size: a = o.BadgeSize.Small,
                    className: t,
                    title: s,
                    href: m,
                    ...l
                } = e;
                return m ? i.createElement(o.AnchorBadge, { ...l,
                    className: d(r, m, s, t),
                    title: (0, n.isBadgeBrokerWithTitle)(r) ? s : void 0,
                    size: a,
                    href: m,
                    target: "_blank"
                }, u(r)) : i.createElement(o.Badge, { ...l,
                    className: d(r, m, s, t),
                    title: (0, n.isBadgeBrokerWithTitle)(r) ? s : void 0,
                    size: a
                }, u(r))
            }

            function d(e, r, a, i) {
                return t(m["badge-broker"], e === s.BadgeBrokerNames.BrokerExtraFeatured && m.featured, e === s.BadgeBrokerNames.BrokerPlatinum && m.platinum, e === s.BadgeBrokerNames.BrokerGold && m.gold, e === s.BadgeBrokerNames.BrokerSilver && m.silver, r && m.link, a && "apply-common-tooltip", i)
            }

            function u(e) {
                return e === s.BadgeBrokerNames.BrokerExtraFeatured ? "Featured" : "Broker"
            }
        },
        814874: (e, r, a) => {
            "use strict";
            a.d(r, {
                isBadgeBroker: () => s,
                isFeaturedBroker: () => o,
                isBadgeBrokerWithLink: () => m,
                isBadgeBrokerWithTitle: () => d
            });
            var i = a(820664);
            const t = new Set(Object.values(i.BadgeBrokerNames));

            function s(e) {
                return t.has(e)
            }

            function o(e) {
                return e === i.BadgeBrokerNames.BrokerExtraFeatured
            }
            const n = new Set([i.BadgeBrokerNames.BrokerPlatinum, i.BadgeBrokerNames.BrokerGold, i.BadgeBrokerNames.BrokerSilver]);

            function m(e) {
                return n.has(e)
            }
            const l = new Set([i.BadgeBrokerNames.BrokerPlatinum, i.BadgeBrokerNames.BrokerGold, i.BadgeBrokerNames.BrokerSilver]);

            function d(e) {
                return l.has(e)
            }
        },
        683575: (e, r, a) => {
            "use strict";
            var i;
            a.d(r, {
                    BadgeUserNames: () => i
                }),
                function(e) {
                    e.Moderator = "moderator", e.Employee = "employee", e.PineWizard = "pine_wizard", e.ProPremium = "pro:pro_premium", e.ProPremiumTrial = "pro:pro_premium_trial", e.ProRealTime = "pro:pro_realtime", e.ProRealTimeTrial = "pro:pro_realtime_trial", e.Pro = "pro:pro", e.ProTrial = "pro:pro_trial"
                }(i || (i = {}))
        },
        704763: (e, r, a) => {
            "use strict";
            a.d(r, {
                BadgeUser: () => l
            });
            var i = a(667294),
                t = a(294184),
                s = a(822635),
                o = a(138537),
                n = a(310469),
                m = a(94691);

            function l(e) {
                const {
                    name: r,
                    size: a = o.BadgeSize.Small,
                    href: t,
                    title: l,
                    className: c,
                    ...B
                } = e;
                return t ? i.createElement(o.AnchorBadge, { ...B,
                    className: d(r, a, l, c),
                    title: (0, s.isBadgeUserWithTitle)(r) ? l : void 0,
                    "aria-label": (0, s.isEmployee)(r) && (0, s.isBadgeUserWithTitle)(r) ? l : void 0,
                    size: a,
                    href: t,
                    target: "_blank"
                }, u(r), (0, s.isEmployee)(r) && i.createElement("img", {
                    src: n,
                    className: m["employee-logo-icon"],
                    role: "presentation",
                    loading: "lazy"
                })) : i.createElement(o.Badge, {
                    className: d(r, a, l, c),
                    title: (0, s.isBadgeUserWithTitle)(r) ? l : void 0,
                    "aria-label": (0, s.isEmployee)(r) && (0, s.isBadgeUserWithTitle)(r) ? l : void 0,
                    size: a,
                    ...B
                }, u(r), (0, s.isEmployee)(r) && i.createElement("img", {
                    src: n,
                    className: m["employee-logo-icon"],
                    role: "presentation",
                    loading: "lazy"
                }))
            }

            function d(e, r = o.BadgeSize.Small, a, i) {
                return t(m["badge-user"], m["size-" + r], (0, s.isProPremium)(e) && m["pro-premium"], (0, s.isProRealtime)(e) && m["pro-realtime"], (0, s.isPro)(e) && m.pro, (0, s.isModerator)(e) && m.moderator, (0, s.isEmployee)(e) && m.employee, (0, s.isPineWizard)(e) && m["pine-wizard"], (0, s.isTrial)(e) && m.trial, a && "apply-common-tooltip", i)
            }

            function u(e) {
                return (0, s.isProPremium)(e) ? "Premium" : (0, s.isProRealtime)(e) ? "Pro+" : (0, s.isPro)(e) ? "Pro" : (0, s.isModerator)(e) ? "Mod" : (0, s.isPineWizard)(e) ? "Wizard" : ""
            }
        },
        822635: (e, r, a) => {
            "use strict";
            a.d(r, {
                isBadgeUserWithTitle: () => s,
                isBadgeUser: () => n,
                isModerator: () => m,
                isProPremium: () => l,
                isProRealtime: () => d,
                isPro: () => u,
                isEmployee: () => c,
                isPineWizard: () => B,
                isTrial: () => g
            });
            var i = a(683575);
            const t = new Set([i.BadgeUserNames.Employee, i.BadgeUserNames.PineWizard, i.BadgeUserNames.Moderator, i.BadgeUserNames.ProPremiumTrial, i.BadgeUserNames.ProRealTimeTrial, i.BadgeUserNames.ProTrial]);

            function s(e) {
                return t.has(e)
            }
            const o = new Set(Object.values(i.BadgeUserNames));

            function n(e) {
                return o.has(e)
            }

            function m(e) {
                return i.BadgeUserNames.Moderator === e
            }

            function l(e) {
                return i.BadgeUserNames.ProPremium === e || i.BadgeUserNames.ProPremiumTrial === e
            }

            function d(e) {
                return i.BadgeUserNames.ProRealTime === e || i.BadgeUserNames.ProRealTimeTrial === e
            }

            function u(e) {
                return i.BadgeUserNames.Pro === e || i.BadgeUserNames.ProTrial === e
            }

            function c(e) {
                return i.BadgeUserNames.Employee === e
            }

            function B(e) {
                return i.BadgeUserNames.PineWizard === e
            }

            function g(e) {
                return i.BadgeUserNames.ProPremiumTrial === e || i.BadgeUserNames.ProRealTimeTrial === e || i.BadgeUserNames.ProTrial === e
            }
        },
        373362: (e, r, a) => {
            "use strict";
            a.d(r, {
                DEFAULT_USER_ROW_THEME: () => u,
                UserRow: () => c
            });
            var i = a(667294),
                t = a(294184),
                s = a(384658),
                o = a(396107),
                n = a(43505),
                m = a(230873),
                l = a(913080),
                d = a(688183);
            const u = d;

            function c(e) {
                const {
                    username: r,
                    isBroker: a,
                    userpic: d,
                    isOnline: c,
                    isBig: B,
                    badges: g,
                    badgeSize: k,
                    isHiddenPopup: P,
                    theme: p = u
                } = e, f = g && (0, m.getBadgeAccountName)(g), N = P ? "js-userlink-popup" : "";
                return i.createElement("div", {
                    className: p.container
                }, i.createElement("a", {
                    href: (0, o.getUserProfilePath)({
                        username: r,
                        is_broker: a
                    }),
                    "data-username": r,
                    className: t(p.userProfileLink, N)
                }, d && i.createElement(n.UserPic, {
                    src: d,
                    isOnline: c,
                    size: e.isBig ? 1 : 0
                }), i.createElement("span", {
                    className: B ? p.usernameBig : p.username
                }, e.username)), g && f && i.createElement(s.BadgeAccount, {
                    name: f,
                    title: (0, m.getBadgeAccountTitle)(g),
                    href: (0, l.getBadgeAccountLink)(f),
                    size: k,
                    className: p.badge
                }))
            }
        },
        43505: (e, r, a) => {
            "use strict";
            a.d(r, {
                UserPic: () => s
            });
            var i = a(667294),
                t = a(294184);
            a(679712);

            function s(e) {
                return i.createElement("span", {
                    className: t("tv-user-avatar", {
                        "tv-user-avatar--small": 0 === e.size
                    }, {
                        "tv-user-avatar--medium": 1 === e.size
                    }, {
                        "tv-user-avatar--online": e.isOnline
                    }, {
                        "tv-user-avatar--rounded": e.isRounded
                    })
                }, i.createElement("img", {
                    src: e.src,
                    className: "tv-user-avatar__image",
                    alt: ""
                }))
            }
            s.defaultProps = {
                size: 0
            }
        }
    }
]);