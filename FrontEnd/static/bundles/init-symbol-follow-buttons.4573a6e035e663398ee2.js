(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [40835, 89198], {
        655449: e => {
            e.exports = {
                widget: "widget-3pqcvbpA",
                container: "container-3pqcvbpA",
                tradableInstruments: "tradableInstruments-3pqcvbpA",
                rating: "rating-3pqcvbpA",
                badge: "badge-3pqcvbpA",
                buttons: "buttons-3pqcvbpA",
                buttonsAccount: "buttonsAccount-3pqcvbpA",
                image: "image-3pqcvbpA"
            }
        },
        183597: e => {
            e.exports = {
                wrapper: "wrapper-2Xvbj1e6",
                badge: "badge-2Xvbj1e6",
                name: "name-2Xvbj1e6"
            }
        },
        422335: e => {
            e.exports = {
                container: "container-38z_OddB",
                ratingBlock: "ratingBlock-38z_OddB"
            }
        },
        925186: e => {
            e.exports = {
                container: "container-3aH0WGGc",
                title: "title-3aH0WGGc",
                description: "description-3aH0WGGc"
            }
        },
        460665: e => {
            e.exports = {
                container: "container-H-gGKnzf"
            }
        },
        394647: e => {
            e.exports = {
                container: "container-2Wq7848F",
                header: "header-2Wq7848F",
                brokers: "brokers-2Wq7848F",
                link: "link-2Wq7848F"
            }
        },
        765688: () => {},
        795621: (e, r, t) => {
            "use strict";
            t.d(r, {
                AnchorButton: () => d,
                Button: () => l
            });
            var a = t(667294),
                n = t(99256);

            function o(e = "default") {
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
                    intent: r,
                    size: t,
                    appearance: a,
                    useFullWidth: n,
                    icon: c,
                    ...l
                } = e;
                return { ...l,
                    color: s(r),
                    size: i(t),
                    variant: o(a),
                    stretch: n,
                    startIcon: c
                }
            }

            function l(e) {
                return a.createElement(n.SquareButton, { ...c(e)
                })
            }

            function u(e) {
                const {
                    intent: r,
                    size: t,
                    appearance: a,
                    useFullWidth: n,
                    icon: c,
                    ...l
                } = e;
                return { ...l,
                    color: s(r),
                    size: i(t),
                    variant: o(a),
                    stretch: n,
                    startIcon: c
                }
            }

            function d(e) {
                return a.createElement(n.SquareAnchorButton, { ...u(e)
                })
            }
        },
        622148: (e, r, t) => {
            "use strict";
            t.d(r, {
                RoundAnchorButton: () => d,
                RoundButton: () => l
            });
            var a = t(294184);

            function n(e, r) {
                const {
                    className: t,
                    color: n = "brand",
                    variant: o = "primary",
                    size: s = "xlarge",
                    stretch: i,
                    animated: c = !1,
                    disableThemes: l = !1,
                    iconOnly: u = !1
                } = r;
                return a(t, e["round-button"], e["color-" + n], e["variant-" + o], e["size-" + s], c && e.animated, i && e.stretch, l && e["disable-themes"], u && e["icon-only"])
            }
            var o = t(667294),
                s = t(13279);
            const i = JSON.parse('{"round-button":"round-button-3QrIemvJ","content":"content-3frzYxtW","color-brand":"color-brand-3bfDQn7d","variant-primary":"variant-primary-2lws2veg","disable-themes":"disable-themes-16Efli1J","variant-quiet-primary":"variant-quiet-primary-1sEgXyIO","variant-secondary":"variant-secondary-1tBEieJ0","variant-ghost":"variant-ghost-F1LDK3Xz","color-gray":"color-gray-1FA_6LHk","color-red":"color-red-2WPf7Vql","size-xsmall":"size-xsmall-10lBTIjQ","icon-only":"icon-only-2EctEDRx","size-small":"size-small-9LFD5L7m","size-medium":"size-medium-23vRmVDi","size-large":"size-large-pJ5rVvHW","size-xlarge":"size-xlarge-3_YFVVjv","size-xxlarge":"size-xxlarge-36hAnd9I","animated":"animated-1SV5rpB3","stretch":"stretch-285OroeR"}');

            function c(e) {
                const {
                    className: r,
                    color: t,
                    variant: a,
                    size: n,
                    stretch: o,
                    animated: i,
                    disableThemes: c,
                    ...l
                } = e;
                return { ...l,
                    ...(0, s.filterDataProps)(e),
                    ...(0, s.filterAriaProps)(e)
                }
            }

            function l(e) {
                const {
                    reference: r,
                    children: t
                } = e, a = n(i, e);
                return o.createElement("button", { ...c(e),
                    className: a,
                    ref: r
                }, o.createElement("span", {
                    className: i.content
                }, t))
            }

            function u(e) {
                const {
                    className: r,
                    color: t,
                    variant: a,
                    size: n,
                    stretch: o,
                    animated: i,
                    disableThemes: c,
                    ...l
                } = e;
                return { ...l,
                    ...(0, s.filterDataProps)(e),
                    ...(0, s.filterAriaProps)(e)
                }
            }

            function d(e) {
                const {
                    reference: r,
                    children: t
                } = e, a = n(i, e);
                return o.createElement("a", { ...u(e),
                    className: a,
                    ref: r
                }, o.createElement("span", {
                    className: i.content
                }, t))
            }
        },
        447711: (e, r, t) => {
            "use strict";
            t.d(r, {
                getOpenAccountType: () => n
            });
            const a = new Set(["open_account", "open_account_ref", "open_account_api"]);

            function n(e) {
                var r, t;
                return (null === (t = null === (r = e.country_info) || void 0 === r ? void 0 : r.flags) || void 0 === t ? void 0 : t.includes("open_account")) && e.flags.find(e => a.has(e)) || null
            }
        },
        737969: (e, r, t) => {
            "use strict";
            t.r(r), t.d(r, {
                tryInvokeOpenAccountHandler: () => n,
                getOpenAccountHandler: () => o
            });
            let a = !1;
            async function n(e) {
                if (!a) {
                    a = !0;
                    try {
                        await async function(e) {
                            const {
                                openAccountType: r,
                                referralLink: a,
                                ...n
                            } = e;
                            if ("open_account_ref" === r && a) window.open(a, "_blank", "noopener");
                            else if ("open_account" === r) {
                                const {
                                    handleOpenAccountPlain: e
                                } = await Promise.all([t.e(26822), t.e(61212), t.e(85597), t.e(60700), t.e(63193), t.e(74814), t.e(99305), t.e(90901), t.e(18436), t.e(52802), t.e(85833), t.e(53471), t.e(54996), t.e(13671), t.e(11216), t.e(19894), t.e(80498), t.e(87380), t.e(44214), t.e(58745)]).then(t.bind(t, 340538));
                                e(n)
                            } else if ("open_account_api" === r) {
                                const {
                                    handleOpenAccountApi: e
                                } = await Promise.all([t.e(26822), t.e(61212), t.e(85597), t.e(60700), t.e(63193), t.e(74814), t.e(99305), t.e(90901), t.e(18436), t.e(52802), t.e(85833), t.e(53471), t.e(54996), t.e(13671), t.e(11216), t.e(19894), t.e(80498), t.e(87380), t.e(44214), t.e(46955)]).then(t.bind(t, 957101));
                                e(n)
                            }
                        }(e)
                    } finally {
                        a = !1
                    }
                }
            }

            function o(e) {
                const {
                    source: r,
                    brokerData: a,
                    referralLink: o,
                    openAccountType: s,
                    onOpenAccountDialogShown: i,
                    onOpenAccountDialogBackButtonClick: c
                } = e;
                return async e => {
                    if (null === s) return;
                    e.preventDefault();
                    const {
                        trackOpenAccountButtonPress: l
                    } = await t.e(71708).then(t.bind(t, 777606));
                    l(a.brokerSlugName, r, s), n({
                        brokerData: a,
                        openAccountType: s,
                        source: r,
                        referralLink: o,
                        onOpenAccountDialogShown: i,
                        onOpenAccountDialogBackButtonClick: c
                    })
                }
            }
        },
        162112: (e, r, t) => {
            "use strict";
            t.d(r, {
                Header: () => s
            });
            var a = t(667294),
                n = t(294184),
                o = t(925186);

            function s(e) {
                const {
                    title: r,
                    description: t,
                    level: s,
                    className: i
                } = e, c = s || "h1";
                return a.createElement("div", {
                    className: n(o.container, i)
                }, a.createElement(c, {
                    className: o.title
                }, r), t && a.createElement("p", {
                    className: o.description
                }, t))
            }
        },
        731354: (e, r, t) => {
            "use strict";
            t.r(r), t.d(r, {
                mainPageBrokersWidgetSsrInit: () => i
            });
            var a = t(667294),
                n = t(973935),
                o = t(540062),
                s = t(224691);

            function i(e) {
                return n.hydrate(a.createElement(s.MainPageBrokersWidget, { ...(0, o.getComponentInitData)(e)
                }), e), () => {
                    n.unmountComponentAtNode(e)
                }
            }
        },
        224691: (e, r, t) => {
            "use strict";
            t.d(r, {
                MainPageBrokersWidget: () => s
            });
            var a = t(667294),
                n = t(723982),
                o = t(460665);

            function s(e) {
                return a.createElement(n.Brokers, {
                    className: o.container,
                    brokers: e.brokers
                })
            }
        },
        723982: (e, r, t) => {
            "use strict";
            t.d(r, {
                Brokers: () => A
            });
            var a = t(667294),
                n = t(120220),
                o = t(294184),
                s = t(622148),
                i = t(162112),
                c = t(416282),
                l = t(795621),
                u = t(99256),
                d = t(396107),
                m = t(999795),
                b = t(457989),
                g = t(820664),
                p = t(437288),
                k = t(183597);

            function f(e) {
                const {
                    name: r,
                    href: t,
                    isFeatured: n
                } = e;
                return a.createElement("div", {
                    className: k.wrapper
                }, a.createElement("a", {
                    className: k.name,
                    href: t
                }, r), n && a.createElement(b.BadgeBroker, {
                    className: k.badge,
                    name: g.BadgeBrokerNames.BrokerExtraFeatured,
                    size: p.BadgeSize.Large
                }))
            }
            var v = t(288679),
                h = t(542378),
                B = t(366278),
                _ = t(422335);

            function y(e) {
                const {
                    rating: r,
                    id: t
                } = e, n = Boolean(r);
                return a.createElement("span", {
                    className: _.container
                }, n && a.createElement("span", {
                    className: _.ratingBlock
                }, r.toFixed(2)), n ? a.createElement(v.StarsRating, {
                    rating: r,
                    id: t,
                    size: B.Size.Small,
                    isInteractive: !1,
                    color: B.StarColor.White
                }) : a.createElement(h.EmptyStarsRating, {
                    id: t,
                    size: B.Size.Small,
                    isInteractive: !1,
                    color: B.StarColor.White
                }))
            }
            var w = t(447711),
                N = t(737969),
                E = t(655449);

            function z(e) {
                const {
                    id: r,
                    name: t,
                    user: s,
                    slug_name: i,
                    rating: b,
                    flags: g,
                    country_info: p,
                    flags_verbose: k,
                    widget_image: v
                } = e.broker, h = {
                    brokerId: r,
                    brokerSlugName: i,
                    brokerName: t
                }, {
                    referral_link: B,
                    tradable_instruments: _
                } = p || {}, z = g.includes("featured") && null !== p, S = g.indexOf("ba_of_the_year_2021"), A = -1 !== S, x = (0, w.getOpenAccountType)(e.broker), F = (0, d.getUserProfilePath)({
                    username: s.username,
                    is_broker: !0
                }), O = (0, N.getOpenAccountHandler)({
                    brokerData: h,
                    openAccountType: x,
                    source: "index-page-widget",
                    referralLink: B
                });
                return a.createElement("div", {
                    className: o(E.widget, e.className)
                }, a.createElement("img", {
                    src: v,
                    className: E.image,
                    alt: t,
                    loading: "lazy"
                }), a.createElement("div", {
                    className: E.container
                }, a.createElement(f, {
                    name: t,
                    href: F,
                    isFeatured: z
                }), _ && _.length > 0 && a.createElement("span", {
                    className: E.tradableInstruments
                }, n.t("Tradable assets") + ": " + (0, c.ensureDefined)(_).join(", ")), a.createElement("div", {
                    className: E.rating
                }, a.createElement(y, {
                    rating: b,
                    id: i
                }), A && k && a.createElement(m.BadgeBrokerWinner, {
                    badge: "ba_of_the_year_2021",
                    href: "/broker-awards/",
                    tooltip: k[S],
                    className: E.badge
                })), a.createElement("div", {
                    className: E.buttons
                }, x && a.createElement(l.Button, {
                    className: E.buttonsAccount,
                    size: "l",
                    onClick: O
                }, n.t("Open account")), a.createElement(u.SquareAnchorButton, {
                    href: F,
                    variant: "secondary",
                    size: "large"
                }, n.t("Learn more")))))
            }
            var S = t(394647);

            function A(e) {
                return a.createElement("div", {
                    id: "TopBrokers",
                    className: o(S.container, e.className)
                }, a.createElement(i.Header, {
                    className: S.header,
                    title: (0, n.t)("Make the leap to trading"),
                    description: (0, n.t)("Plug into brokers around the world and start trading directly from our charts. Plus, read reviews from thousands of real customers to discover the best ones for you."),
                    level: "h2"
                }), a.createElement("div", {
                    className: S.brokers
                }, e.brokers.map(e => a.createElement(z, {
                    key: e.id,
                    broker: e
                }))), a.createElement(s.RoundAnchorButton, {
                    className: S.link,
                    href: "/brokers/",
                    variant: "secondary",
                    size: "xxlarge",
                    color: "gray"
                }, (0, n.t)("All brokers")))
            }
        },
        542378: (e, r, t) => {
            "use strict";
            t.d(r, {
                EmptyStarsRating: () => c
            });
            var a = t(667294),
                n = t(294184),
                o = t.n(n),
                s = t(101384),
                i = t(366278);

            function c(e) {
                const {
                    size: r,
                    isInteractive: t,
                    id: n,
                    color: c = i.StarColor.Blue
                } = e, l = [];
                for (let e = 5; e > 0; e--) {
                    const t = (0, s.getGradientId)(n, e);
                    l.push(a.createElement(s.Star, {
                        key: e,
                        id: t,
                        onClick: () => u(e),
                        starFill: i.StarFill.Empty,
                        size: r,
                        color: c
                    }))
                }
                return a.createElement("span", {
                    className: o()("tv-stars-rating-block", "tv-stars-rating-block--empty", t && "tv-stars-rating-block--interactive")
                }, l);

                function u(r) {
                    e.onClick && e.onClick(r)
                }
            }
            c.defaultProps = {
                size: i.Size.Large
            }
        },
        940608: (e, r, t) => {
            "use strict";
            t.r(r), t.d(r, {
                initSymbolFollowButtons: () => k
            });
            var a = t(667294),
                n = t(973935),
                o = t(540062),
                s = t(965009),
                i = t(478264),
                c = t(120220),
                l = t(99256),
                u = t(658885),
                d = t(386759),
                m = t(917806);

            function b(e) {
                const {
                    isFollowing: r,
                    symbolShortName: t,
                    iconOnly: n,
                    onClick: o
                } = e, s = {
                    symbolShortName: `<span class="${m.symbolShortName}">${t}</span>`
                };
                return a.createElement(l.SquareButton, {
                    size: "large",
                    color: r ? "gray" : "brand",
                    variant: "secondary",
                    icon: r ? u : d,
                    iconOnly: n,
                    onClick: o
                }, a.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: r ? (0, c.t)("Following {symbolShortName} ideas", {
                            replace: s
                        }) : (0, c.t)("Follow {symbolShortName} ideas", {
                            replace: s
                        })
                    }
                }))
            }
            var g = t(475781);

            function p(e) {
                return a.createElement(a.Fragment, null, a.createElement("div", {
                    className: g.desktopVersion
                }, a.createElement(b, { ...e
                })), a.createElement("div", {
                    className: g.tabletVersion
                }, a.createElement(b, { ...e,
                    iconOnly: !0
                })))
            }

            function k(e) {
                let r = (0, o.getComponentInitData)(e);
                return c(n.hydrate), () => {
                    n.unmountComponentAtNode(e)
                };
                async function t() {
                    const {
                        followTheSymbol: e
                    } = await (0, i.followSymbol)({
                        symbol: r.symbolProName,
                        follow: !r.isFollowing
                    });
                    r = { ...r,
                        isFollowing: e
                    }, c(n.render), (0, s.trackActionFollow)("Symbol", e ? "Follow" : "Unfollow", {
                        symbol: r.symbolProName,
                        symbolType: r.symbolType
                    })
                }

                function c(n) {
                    n(a.createElement(p, { ...r,
                        onClick: () => window.runOrSignIn(t, {
                            source: "Follow symbol"
                        })
                    }), e)
                }
            }
        },
        999795: (e, r, t) => {
            "use strict";
            t.d(r, {
                BadgeBrokerWinner: () => s
            });
            var a = t(667294),
                n = t(294184);
            t(765688);
            const o = {
                ba_of_the_year: "tv-badge-broker-winner__ba-of-the-year",
                ba_popular: "tv-badge-broker-winner__ba-popular",
                ba_social_champion: "tv-badge-broker-winner__ba-social-champion",
                ba_innovative_tech: "tv-badge-broker-winner__ba-innovative-tech",
                ba_multi_asset: "tv-badge-broker-winner__ba-multi-asset",
                ba_futures: "tv-badge-broker-winner__ba-futures",
                ba_forex_and_cfd: "tv-badge-broker-winner__ba-forex-and-cfd",
                ba_crypto: "tv-badge-broker-winner__ba-crypto",
                ba_of_the_year_2021: "tv-badge-broker-winner__ba-of-the-year-2021",
                ba_popular_2021: "tv-badge-broker-winner__ba-popular-2021",
                ba_social_champ_2021: "tv-badge-broker-winner__ba-social-champion-2021",
                ba_innov_tech_2021: "tv-badge-broker-winner__ba-innovative-tech-2021",
                ba_multi_asset_2021: "tv-badge-broker-winner__ba-multi-asset-2021",
                ba_futures_2021: "tv-badge-broker-winner__ba-futures-2021",
                ba_forex_cfd_2021: "tv-badge-broker-winner__ba-forex-and-cfd-2021",
                ba_crypto_2021: "tv-badge-broker-winner__ba-crypto-2021"
            };

            function s({
                badge: e,
                tooltip: r,
                href: t,
                className: s
            }) {
                const i = function(e, r) {
                    return n("tv-badge-broker-winner", e && o[e], "apply-common-tooltip", r)
                }(e, s);
                return t ? a.createElement("a", {
                    href: t,
                    target: "_blank",
                    title: r,
                    className: i
                }) : a.createElement("span", {
                    title: r,
                    className: i
                })
            }
        },
        820664: (e, r, t) => {
            "use strict";
            var a;
            t.d(r, {
                    BadgeBrokerNames: () => a
                }),
                function(e) {
                    e.BrokerExtraFeatured = "broker_extra:featured", e.BrokerPlatinum = "broker:platinum", e.BrokerGold = "broker:gold", e.BrokerSilver = "broker:silver"
                }(a || (a = {}))
        },
        457989: (e, r, t) => {
            "use strict";
            t.d(r, {
                BadgeBroker: () => l
            });
            var a = t(667294),
                n = t(294184),
                o = t(820664),
                s = t(138537),
                i = t(814874),
                c = t(249956);

            function l(e) {
                const {
                    name: r,
                    size: t = s.BadgeSize.Small,
                    className: n,
                    title: o,
                    href: c,
                    ...l
                } = e;
                return c ? a.createElement(s.AnchorBadge, { ...l,
                    className: u(r, c, o, n),
                    title: (0, i.isBadgeBrokerWithTitle)(r) ? o : void 0,
                    size: t,
                    href: c,
                    target: "_blank"
                }, d(r)) : a.createElement(s.Badge, { ...l,
                    className: u(r, c, o, n),
                    title: (0, i.isBadgeBrokerWithTitle)(r) ? o : void 0,
                    size: t
                }, d(r))
            }

            function u(e, r, t, a) {
                return n(c["badge-broker"], e === o.BadgeBrokerNames.BrokerExtraFeatured && c.featured, e === o.BadgeBrokerNames.BrokerPlatinum && c.platinum, e === o.BadgeBrokerNames.BrokerGold && c.gold, e === o.BadgeBrokerNames.BrokerSilver && c.silver, r && c.link, t && "apply-common-tooltip", a)
            }

            function d(e) {
                return e === o.BadgeBrokerNames.BrokerExtraFeatured ? "Featured" : "Broker"
            }
        },
        814874: (e, r, t) => {
            "use strict";
            t.d(r, {
                isBadgeBroker: () => o,
                isFeaturedBroker: () => s,
                isBadgeBrokerWithLink: () => c,
                isBadgeBrokerWithTitle: () => u
            });
            var a = t(820664);
            const n = new Set(Object.values(a.BadgeBrokerNames));

            function o(e) {
                return n.has(e)
            }

            function s(e) {
                return e === a.BadgeBrokerNames.BrokerExtraFeatured
            }
            const i = new Set([a.BadgeBrokerNames.BrokerPlatinum, a.BadgeBrokerNames.BrokerGold, a.BadgeBrokerNames.BrokerSilver]);

            function c(e) {
                return i.has(e)
            }
            const l = new Set([a.BadgeBrokerNames.BrokerPlatinum, a.BadgeBrokerNames.BrokerGold, a.BadgeBrokerNames.BrokerSilver]);

            function u(e) {
                return l.has(e)
            }
        },
        138537: (e, r, t) => {
            "use strict";
            t.d(r, {
                AnchorBadge: () => u,
                Badge: () => l,
                BadgeSize: () => o.BadgeSize
            });
            var a = t(667294),
                n = t(294184),
                o = t(437288),
                s = t(734036);

            function i(e) {
                const {
                    size: r = o.BadgeSize.Medium,
                    className: t
                } = e;
                return n(s.badge, r && s["size-" + r], t)
            }

            function c(e) {
                return n(i(e), s.anchor)
            }

            function l(e) {
                const {
                    size: r,
                    children: t,
                    className: n,
                    ...o
                } = e;
                return a.createElement("span", { ...o,
                    className: i({
                        size: r,
                        className: n
                    })
                }, t)
            }

            function u(e) {
                const {
                    size: r,
                    children: t,
                    className: n,
                    ...o
                } = e;
                return a.createElement("a", { ...o,
                    className: c({
                        size: r,
                        className: n
                    })
                }, t)
            }
        },
        437288: (e, r, t) => {
            "use strict";
            var a;
            t.d(r, {
                    BadgeSize: () => a
                }),
                function(e) {
                    e.XSmall = "xsmall", e.Small = "small", e.Medium = "medium", e.Large = "large", e.XLarge = "xlarge"
                }(a || (a = {}))
        },
        658885: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M23.7 9.7a1 1 0 0 0-1.4-1.4L12 18.58l-4.3-4.3a1 1 0 0 0-1.4 1.42l5 5 .7.7.7-.7 11-11z"/></svg>'
        },
        386759: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M15 6a1 1 0 1 0-2 0v7H6a1 1 0 1 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V6z"/></svg>'
        }
    }
]);