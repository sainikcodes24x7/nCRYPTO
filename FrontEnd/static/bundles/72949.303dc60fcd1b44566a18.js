(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [72949], {
        204945: e => {
            e.exports = {
                "notify-wrapper": "notify-wrapper-2Uj8rntZ",
                "notify-block": "notify-block-2Uj8rntZ",
                formBlock: "formBlock-2Uj8rntZ",
                sectionWrapper: "sectionWrapper-2Uj8rntZ",
                section: "section-2Uj8rntZ",
                sectionTitle: "sectionTitle-2Uj8rntZ",
                streamBadge: "streamBadge-2Uj8rntZ",
                badgeBlock: "badgeBlock-2Uj8rntZ",
                liveStreamIcon: "liveStreamIcon-2Uj8rntZ",
                tabTitle: "tabTitle-2Uj8rntZ",
                streamTitle: "streamTitle-2Uj8rntZ",
                descriptionContainer: "descriptionContainer-2Uj8rntZ",
                descriptionRow: "descriptionRow-2Uj8rntZ",
                descriptionMarker: "descriptionMarker-2Uj8rntZ",
                descriptionLoadMore: "descriptionLoadMore-2Uj8rntZ",
                description: "description-2Uj8rntZ",
                titleContainer: "titleContainer-2Uj8rntZ",
                privateOnly: "privateOnly-2Uj8rntZ",
                privateActive: "privateActive-2Uj8rntZ",
                privateButtonIcon: "privateButtonIcon-2Uj8rntZ",
                streamsTab: "streamsTab-2Uj8rntZ",
                activeTab: "activeTab-2Uj8rntZ",
                divider: "divider-2Uj8rntZ",
                logoIcon: "logoIcon-2Uj8rntZ",
                liveBadge: "liveBadge-2Uj8rntZ",
                xsmall: "xsmall-2Uj8rntZ",
                small: "small-2Uj8rntZ",
                medium: "medium-2Uj8rntZ",
                large: "large-2Uj8rntZ",
                xlarge: "xlarge-2Uj8rntZ",
                playButton: "playButton-2Uj8rntZ",
                playButtonTriangle: "playButtonTriangle-2Uj8rntZ",
                stats: "stats-2Uj8rntZ"
            }
        },
        275548: e => {
            e.exports = {
                breadcrumbs: "breadcrumbs-yH3mFDw1"
            }
        },
        19204: e => {
            e.exports = {
                category: "category-1LKbo4Ty"
            }
        },
        768737: e => {
            e.exports = {
                categoryContainer: "categoryContainer-Bl6Mfsv2",
                category: "category-Bl6Mfsv2",
                categoryTitle: "categoryTitle-Bl6Mfsv2",
                clickableTitle: "clickableTitle-Bl6Mfsv2",
                icon: "icon-Bl6Mfsv2",
                moreIcon: "moreIcon-Bl6Mfsv2",
                listContainer: "listContainer-Bl6Mfsv2",
                breadcrumbs: "breadcrumbs-Bl6Mfsv2",
                more: "more-Bl6Mfsv2"
            }
        },
        773509: e => {
            e.exports = {
                label: "label-2vz0U6kF"
            }
        },
        220348: e => {
            e.exports = {
                container: "container-113jHcZc",
                content: "content-113jHcZc",
                arrowHolder: "arrowHolder-113jHcZc",
                "arrowHolder--below": "arrowHolder--below-113jHcZc",
                "arrowHolder--above": "arrowHolder--above-113jHcZc",
                "arrowHolder--before": "arrowHolder--before-113jHcZc",
                "arrowHolder--after": "arrowHolder--after-113jHcZc",
                "arrowHolder--above-fix": "arrowHolder--above-fix-113jHcZc",
                "arrowHolder--before-rtl-fix": "arrowHolder--before-rtl-fix-113jHcZc",
                "arrowHolder--after-ltr-fix": "arrowHolder--after-ltr-fix-113jHcZc",
                label: "label-113jHcZc",
                closeButton: "closeButton-113jHcZc"
            }
        },
        795621: (e, t, r) => {
            "use strict";
            r.d(t, {
                AnchorButton: () => u,
                Button: () => l
            });
            var a = r(667294),
                n = r(99256);

            function s(e = "default") {
                switch (e) {
                    case "default":
                        return "primary";
                    case "stroke":
                        return "secondary"
                }
            }

            function c(e = "primary") {
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

            function o(e) {
                const {
                    intent: t,
                    size: r,
                    appearance: a,
                    useFullWidth: n,
                    icon: o,
                    ...l
                } = e;
                return { ...l,
                    color: c(t),
                    size: i(r),
                    variant: s(a),
                    stretch: n,
                    startIcon: o
                }
            }

            function l(e) {
                return a.createElement(n.SquareButton, { ...o(e)
                })
            }

            function m(e) {
                const {
                    intent: t,
                    size: r,
                    appearance: a,
                    useFullWidth: n,
                    icon: o,
                    ...l
                } = e;
                return { ...l,
                    color: c(t),
                    size: i(r),
                    variant: s(a),
                    stretch: n,
                    startIcon: o
                }
            }

            function u(e) {
                return a.createElement(n.SquareAnchorButton, { ...m(e)
                })
            }
        },
        622148: (e, t, r) => {
            "use strict";
            r.d(t, {
                RoundAnchorButton: () => u,
                RoundButton: () => l
            });
            var a = r(294184);

            function n(e, t) {
                const {
                    className: r,
                    color: n = "brand",
                    variant: s = "primary",
                    size: c = "xlarge",
                    stretch: i,
                    animated: o = !1,
                    disableThemes: l = !1,
                    iconOnly: m = !1
                } = t;
                return a(r, e["round-button"], e["color-" + n], e["variant-" + s], e["size-" + c], o && e.animated, i && e.stretch, l && e["disable-themes"], m && e["icon-only"])
            }
            var s = r(667294),
                c = r(13279);
            const i = JSON.parse('{"round-button":"round-button-3QrIemvJ","content":"content-3frzYxtW","color-brand":"color-brand-3bfDQn7d","variant-primary":"variant-primary-2lws2veg","disable-themes":"disable-themes-16Efli1J","variant-quiet-primary":"variant-quiet-primary-1sEgXyIO","variant-secondary":"variant-secondary-1tBEieJ0","variant-ghost":"variant-ghost-F1LDK3Xz","color-gray":"color-gray-1FA_6LHk","color-red":"color-red-2WPf7Vql","size-xsmall":"size-xsmall-10lBTIjQ","icon-only":"icon-only-2EctEDRx","size-small":"size-small-9LFD5L7m","size-medium":"size-medium-23vRmVDi","size-large":"size-large-pJ5rVvHW","size-xlarge":"size-xlarge-3_YFVVjv","size-xxlarge":"size-xxlarge-36hAnd9I","animated":"animated-1SV5rpB3","stretch":"stretch-285OroeR"}');

            function o(e) {
                const {
                    className: t,
                    color: r,
                    variant: a,
                    size: n,
                    stretch: s,
                    animated: i,
                    disableThemes: o,
                    ...l
                } = e;
                return { ...l,
                    ...(0, c.filterDataProps)(e),
                    ...(0, c.filterAriaProps)(e)
                }
            }

            function l(e) {
                const {
                    reference: t,
                    children: r
                } = e, a = n(i, e);
                return s.createElement("button", { ...o(e),
                    className: a,
                    ref: t
                }, s.createElement("span", {
                    className: i.content
                }, r))
            }

            function m(e) {
                const {
                    className: t,
                    color: r,
                    variant: a,
                    size: n,
                    stretch: s,
                    animated: i,
                    disableThemes: o,
                    ...l
                } = e;
                return { ...l,
                    ...(0, c.filterDataProps)(e),
                    ...(0, c.filterAriaProps)(e)
                }
            }

            function u(e) {
                const {
                    reference: t,
                    children: r
                } = e, a = n(i, e);
                return s.createElement("a", { ...m(e),
                    className: a,
                    ref: t
                }, s.createElement("span", {
                    className: i.content
                }, r))
            }
        },
        435620: (e, t, r) => {
            "use strict";
            r.d(t, {
                AfterSlot: () => m,
                BeforeSlot: () => c,
                EndSlot: () => l,
                MiddleSlot: () => o,
                StartSlot: () => i
            });
            var a = r(667294),
                n = r(294184);
            const s = JSON.parse('{"inner-slot":"inner-slot-2OKMGqSc","interactive":"interactive-3SE8kqul","icon":"icon-2tguASdP","inner-middle-slot":"inner-middle-slot-FxLdcHA0","before-slot":"before-slot-3KAG-INy","after-slot":"after-slot-34RFQaLb"}');

            function c(e) {
                const {
                    className: t,
                    children: r
                } = e;
                return a.createElement("span", {
                    className: n(s["before-slot"], t)
                }, r)
            }

            function i(e) {
                const {
                    className: t,
                    interactive: r = !0,
                    icon: c = !1,
                    children: i
                } = e;
                return a.createElement("span", {
                    className: n(s["inner-slot"], r && s.interactive, c && s.icon, t)
                }, i)
            }

            function o(e) {
                const {
                    className: t,
                    children: r
                } = e;
                return a.createElement("span", {
                    className: n(s["inner-slot"], s["inner-middle-slot"], t)
                }, r)
            }

            function l(e) {
                const {
                    className: t,
                    interactive: r = !0,
                    icon: c = !1,
                    children: i
                } = e;
                return a.createElement("span", {
                    className: n(s["inner-slot"], r && s.interactive, c && s.icon, t)
                }, i)
            }

            function m(e) {
                const {
                    className: t,
                    children: r
                } = e;
                return a.createElement("span", {
                    className: n(s["after-slot"], t)
                }, r)
            }
        },
        715956: (e, t, r) => {
            "use strict";
            r.d(t, {
                FormBlock: () => p,
                LiveBadge: () => f,
                PrivateStreamBadge: () => g,
                UpcomingStreamBadge: () => E,
                NotifyBlock: () => b,
                StreamTitle: () => N,
                StreamDescription: () => S,
                Divider: () => h,
                PlayButton: () => w,
                BadgeBlock: () => T,
                StreamStats: () => L
            });
            var a = r(667294),
                n = r(120220),
                s = r(294184),
                c = r(138537),
                i = r(640539),
                o = r(90506),
                l = r(127514),
                m = r(524926),
                u = r(978915),
                d = r(204945),
                v = r(754062);
            const p = a.memo(e => a.createElement("div", {
                    className: s(d.formBlock, e.className)
                }, a.createElement(u.Label, {
                    htmlFor: e.labelHtmlFor
                }, e.labelText), e.children)),
                f = (a.memo(e => a.createElement("div", {
                    className: d.sectionWrapper
                }, a.createElement("div", {
                    className: d.section
                }, a.createElement("h3", {
                    className: d.sectionTitle
                }, e.title), e.children))), a.memo(e => {
                    const {
                        className: t,
                        iconClassName: r,
                        size: o = c.BadgeSize.Large
                    } = e;
                    return a.createElement(c.Badge, {
                        size: o,
                        className: s(d.liveBadge, d[o], t)
                    }, a.createElement(i.Icon, {
                        icon: v,
                        className: s(d.logoIcon, r)
                    }), n.t("LIVE"))
                }));
            f.displayName = "LiveBadge";
            const g = a.memo(e => {
                const {
                    className: t,
                    size: r = c.BadgeSize.Large
                } = e;
                return a.createElement(c.Badge, {
                    size: r,
                    className: s(d.streamBadge, t)
                }, n.t("Private"))
            });
            g.displayName = "PrivateStreamBadge";
            const E = a.memo(e => {
                const {
                    className: t,
                    size: r = c.BadgeSize.Large
                } = e;
                return a.createElement(c.Badge, {
                    size: r,
                    className: s(d.streamBadge, t)
                }, n.t("Upcoming"))
            });
            E.displayName = "UpcomingStreamBadge";
            const b = a.memo(e => {
                    const t = new Date(e.stream.plannedTime).getTime(),
                        [r, s] = (0, a.useState)(""),
                        c = e.stream.visibility === o.Visible.Private ? n.t("Private stream starts at") : n.t("Start at");
                    return (0, a.useEffect)(() => {
                        s((0, m.getFormattedDataByDate)({
                            date: t
                        }).formattedDate)
                    }, []), a.createElement(a.Fragment, null, "" !== r && a.createElement("div", {
                        className: d["notify-wrapper"]
                    }, a.createElement("div", {
                        className: d["notify-block"]
                    }, a.createElement("p", null, `${c} ${r}`))))
                }),
                N = a.memo(e => {
                    const t = e.title.slice(0, 128);
                    return a.createElement("h3", {
                        className: s(d.streamTitle, e.className)
                    }, t)
                }),
                S = a.memo(e => {
                    const {
                        text: t,
                        className: r
                    } = e;
                    return t ? a.createElement("div", {
                        className: d.descriptionContainer
                    }, a.createElement("span", {
                        className: d.descriptionRow
                    }, a.createElement("p", {
                        className: s(d.description, r)
                    }, e.text), e.text && a.createElement("span", {
                        className: d.descriptionMarker
                    }, a.createElement("span", {
                        className: d.descriptionLoadMore
                    })))) : null
                }),
                h = a.memo(() => a.createElement("span", {
                    className: d.divider
                }, "•")),
                w = a.memo(e => a.createElement("button", {
                    className: s(d.playButton, e.className)
                }, a.createElement("span", {
                    className: d.playButtonTriangle
                }))),
                T = a.memo(e => {
                    const t = (0, l.useStreamState)(e.stream.state),
                        r = (0, l.useIsPrivate)(e.stream.visibility);
                    return a.createElement("div", {
                        className: s(d.badgeBlock, e.className)
                    }, t.isLive && a.createElement(f, null), t.isUpcoming && a.createElement(E, null), r && a.createElement(g, null))
                });

            function L({
                views: e,
                viewers: t,
                state: r,
                beforeDivider: s,
                afterDivider: c
            }) {
                const i = (0, l.useStreamState)(r),
                    o = i.isRecent || i.isLive;
                return a.createElement("span", {
                    className: d.stats
                }, s && o && a.createElement(h, null), o && a.createElement(a.Fragment, null, a.createElement("span", null, function(e) {
                    return n.t("{count} view", {
                        plural: "{count} views",
                        count: e
                    }).format({
                        count: e.toString()
                    })
                }(e)), i.isRecent && c && a.createElement(h, null)), i.isLive && a.createElement(a.Fragment, null, a.createElement(h, null), a.createElement("span", null, `${t} ${n.t("online")}`), c && a.createElement(h, null)))
            }
        },
        117709: (e, t, r) => {
            "use strict";
            r.d(t, {
                StreamBreadcrumbs: () => p
            });
            var a = r(294184),
                n = r.n(a),
                s = r(667294),
                c = r(120220),
                i = r(541153),
                o = r(471017),
                l = r(553657),
                m = r(297378),
                u = r(90506),
                d = r(275548);

            function v(e, t, r) {
                const a = function(e, t) {
                        return (r, a) => () => {
                            t || !e ? window.open(r, "_self") : e.push(r, {
                                activeTab: a
                            })
                        }
                    }(e, Boolean(r)),
                    n = [{
                        name: c.t("Streams"),
                        onClick: a(u.ROOT_URL, void 0)
                    }];
                if (t) {
                    const e = null == t ? void 0 : t.toLowerCase();
                    n.push({
                        name: t,
                        onClick: a(`${u.ROOT_URL}/${e}`, e)
                    })
                }
                r && n.push({
                    name: r.title,
                    onClick: a(`${u.ROOT_URL}/${r.title}`)
                });
                const i = (0, m.constructBreadcrumbsPath)(n);
                return s.createElement(l.Breadcrumbs, {
                    path: i
                })
            }

            function p(e) {
                const {
                    stream: t,
                    tabName: r,
                    className: a
                } = e;
                let c;
                try {
                    c = (0, i.useHistory)()
                } catch (e) {
                    c = null
                }
                const l = function(e, t, r) {
                    const [a, n] = (0, s.useState)(null);
                    return (0, s.useEffect)(() => {
                        n(v(e, t, r))
                    }, [t, r]), a
                }(c, r || t && u.streamTabsMap[t.state], t) || null;
                return s.createElement(o.MainContainer, null, s.createElement("div", {
                    className: n()(d.breadcrumbs, a)
                }, l))
            }
        },
        955054: (e, t, r) => {
            "use strict";

            function a(e) {
                return Promise.all([r.e(4516), r.e(9968)]).then(r.bind(r, 281949)).then(t => new t.StreamNotificationTools(e))
            }
            r.d(t, {
                getNotifier: () => a
            })
        },
        127514: (e, t, r) => {
            "use strict";
            r.d(t, {
                useStreamState: () => c,
                useIsPrivate: () => i,
                useStreamChangeNotifier: () => o,
                useAgoDateFormatterCb: () => l
            });
            var a = r(667294),
                n = r(90506),
                s = r(955054);

            function c(e) {
                return {
                    isLive: e === n.StreamState.Live,
                    isUpcoming: e === n.StreamState.Scheduled,
                    isRecent: e === n.StreamState.Ended
                }
            }

            function i(e) {
                return e === n.Visible.Private
            }

            function o(e, t, r = !0) {
                let n = null;
                (0, a.useEffect)(() => {
                    if (r) return (0, s.getNotifier)(e).then(r => {
                        n = r, n.streamChange().subscribe(null, t), n.connect(e)
                    }), () => {
                        null !== n && n.streamChange().unsubscribe(null, t)
                    };
                    null !== n && n.streamChange().unsubscribe(null, t)
                }, [r])
            }

            function l(e, t, n, s) {
                (0, a.useEffect)(() => {
                    !async function() {
                        if (!t.current) return;
                        (await Promise.resolve().then(r.bind(r, 524926))).agoDateFormatter(t.current, new Date(e)), n()
                    }()
                }, void 0 !== s ? [...s] : [])
            }
        },
        90506: (e, t, r) => {
            "use strict";
            var a;
            r.d(t, {
                    ROOT_URL: () => n,
                    API_ROOT_URL: () => s,
                    TV_LIVE_DIRECTOR_DOMAIN: () => c,
                    TV_LIVE_MEDIA_SERVER_DOMAIN: () => i,
                    TV_LIVE_MEDIA_URL: () => m,
                    setStreamsConfig: () => v,
                    getGraphqlUrl: () => p,
                    getPreviewUrl: () => f,
                    getMediaUrl: () => g,
                    getStreamingUrl: () => E,
                    isRecordAvailable: () => b,
                    TOOLTIP_CLASS: () => N,
                    TabNames: () => S,
                    SettingsTabs: () => h,
                    streamSettingsTabs: () => w,
                    StreamState: () => T,
                    Encoder: () => L,
                    Visible: () => R,
                    StreamDate: () => y,
                    Category: () => _,
                    RestreamService: () => U,
                    typeItems: () => C,
                    streamTypesMap: () => I,
                    streamTabsMap: () => A,
                    TvLiveErrorCode: () => x
                }),
                function(e) {
                    e.America = "NA", e.Europe = "EU", e.Asia = "AS"
                }(a || (a = {}));
            const n = "/streams",
                s = "/api/v1/streams";
            let c = "",
                i = "",
                o = "",
                l = {
                    [a.America]: "",
                    [a.Europe]: "",
                    [a.Asia]: ""
                },
                m = "",
                u = "",
                d = "";

            function v(e) {
                c = e.tvLiveUrl, i = e.mediaServerUrl, o = e.mediaServerRtmpUrl, l = e.liveMediaUrls, m = e.recordMediaUrl, u = m + "/previews/", d = `https://${c}/graphql`
            }

            function p() {
                return d
            }

            function f() {
                return u
            }

            function g(e = a.America) {
                return l[e]
            }

            function E(e) {
                return `rtmps://${o}/live`
            }

            function b(e) {
                return !!e && Date.now() < new Date(e).getTime() + 5184e6
            }
            const N = "apply-common-tooltip";
            var S, h;
            ! function(e) {
                e.Live = "Live", e.Recent = "Recent", e.Upcoming = "Upcoming"
            }(S || (S = {})),
            function(e) {
                e.General = "General", e.Stream = "Stream", e.Source = "Source", e.Advanced = "Advanced"
            }(h || (h = {}));
            const w = [h.General, h.Stream];
            var T, L, R, y, _, B, U;
            ! function(e) {
                e.Live = "live", e.Ended = "ended", e.Scheduled = "scheduled"
            }(T || (T = {})),
            function(e) {
                e.Browser = "browser", e.External = "external"
            }(L || (L = {})),
            function(e) {
                e.Public = "public", e.Private = "private"
            }(R || (R = {})),
            function(e) {
                e.Now = "now", e.Scheduled = "scheduled"
            }(y || (y = {})),
            function(e) {
                e.LiveTrading = "Live trading", e.Education = "Education", e.Analysis = "Analysis", e.OffTopic = "Off-topic"
            }(_ || (_ = {})),
            function(e) {
                e.Stream = "stream", e.List = "list", e.Settings = "settings"
            }(B || (B = {})),
            function(e) {
                e.YouTube = "youtube", e.Twitch = "twitch"
            }(U || (U = {}));
            const C = [{
                    content: _.LiveTrading,
                    value: _.LiveTrading
                }, {
                    content: _.Education,
                    value: _.Education
                }, {
                    content: _.Analysis,
                    value: _.Analysis
                }, {
                    content: _.OffTopic,
                    value: _.OffTopic
                }],
                I = {
                    [S.Live]: T.Live,
                    [S.Recent]: T.Ended,
                    [S.Upcoming]: T.Scheduled
                },
                A = {
                    [T.Live]: S.Live,
                    [T.Scheduled]: S.Upcoming,
                    [T.Ended]: S.Recent
                };
            var x;
            ! function(e) {
                e.InternalServerError = "INTERNAL_SERVER_ERROR", e.MediaServerError = "MEDIA_SERVER_ERROR", e.RecorderError = "RECORDER_ERROR", e.ForbiddenError = "FORBIDDEN", e.UserInputError = "BAD_USER_INPUT", e.ValidationError = "GRAPHQL_VALIDATION_FAILED", e.AuthenticationError = "UNAUTHENTICATED", e.SyntaxError = "GRAPHQL_PARSE_FAILED", e.HostsMappingError = "HOSTS_MAPPING_ERROR", e.YoutubeError = "YOUTUBE_ERROR"
            }(x || (x = {}))
        },
        557668: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                render: () => m
            });
            var a = r(667294),
                n = r(973935),
                s = r(90506),
                c = r(929098),
                i = r(901662),
                o = r(344513),
                l = r(19204);

            function m(e) {
                const t = document.querySelector(".tv-card-container__ideas"),
                    r = document.querySelector(".tv-card-container__ideas :nth-child(1)");
                if (null === t || null === r) return;
                (0, s.setStreamsConfig)({
                    mediaServerUrl: window.TV_LIVE_MEDIA_SERVER_DOMAIN,
                    mediaServerRtmpUrl: window.TV_LIVE_MEDIA_SERVER_RTMP_URL,
                    tvLiveUrl: window.TV_LIVE_DIRECTOR_DOMAIN,
                    liveMediaUrls: window.TV_LIVE_MEDIA_SERVER_LIVE_URLS,
                    recordMediaUrl: window.TV_LIVE_MEDIA_URL
                });
                const c = document.createElement("div");
                c.classList.add("tv-feed-block"), t.insertBefore(c, r.nextSibling), n.render(a.createElement(u, {
                    streams: e
                }), c)
            }

            function u(e) {
                return a.createElement(i.LandingCategory, {
                    streams: e.streams,
                    tabName: s.TabNames.Live,
                    maxStreams: 2,
                    onStreamClick: e => {
                        (0, c.trackEvent)("Streams", "open stream", "index page"), (0, o.openStreamView)({
                            stream: e
                        })
                    },
                    onClick: () => document.location.href = "/streams/",
                    className: l.category,
                    linkToLanding: !0,
                    showMoreButton: !0
                })
            }
        },
        901662: (e, t, r) => {
            "use strict";
            r.d(t, {
                LandingMainPage: () => v,
                LandingCategory: () => p,
                LandingMainCategory: () => f
            });
            var a = r(667294),
                n = r(120220),
                s = r(294184),
                c = (r(568421), r(90506)),
                i = r(376362),
                o = r(117709),
                l = r(640539),
                m = r(392935),
                u = r(811797),
                d = r(768737);

            function v(e) {
                const {
                    live: t,
                    upcoming: r,
                    recent: n,
                    onStreamClick: s,
                    onCategoryClick: i
                } = e, l = (0, a.useCallback)(e => {
                    i(e),
                        window.scrollTo(0, 0)
                }, [i]);
                return a.createElement("div", {
                    className: d.categoryContainer
                }, a.createElement(o.StreamBreadcrumbs, {
                    className: d.breadcrumbs
                }), t.length > 0 && a.createElement(p, {
                    tabName: c.TabNames.Live,
                    streams: t,
                    onClick: () => l(c.TabNames.Live),
                    onStreamClick: s,
                    maxStreams: 6
                }), r.length > 0 && a.createElement(p, {
                    tabName: c.TabNames.Upcoming,
                    streams: r,
                    onClick: () => l(c.TabNames.Upcoming),
                    onStreamClick: s,
                    maxStreams: 6
                }), n.length > 0 && a.createElement(p, {
                    tabName: c.TabNames.Recent,
                    streams: n,
                    onClick: () => l(c.TabNames.Recent),
                    onStreamClick: s,
                    maxStreams: 6
                }))
            }

            function p(e) {
                const {
                    streams: t,
                    tabName: r,
                    onClick: m,
                    onStreamClick: v,
                    hideIcon: p,
                    activeTab: f,
                    className: g,
                    maxStreams: E,
                    linkToLanding: b,
                    showMoreButton: N
                } = e, S = (0, a.useCallback)(e => {
                    e.preventDefault(), m && m()
                }, [m]), h = {
                    [c.TabNames.Live]: n.t("Live streams"),
                    [c.TabNames.Recent]: n.t("Recent streams"),
                    [c.TabNames.Upcoming]: n.t("Upcoming streams")
                }, w = {
                    [c.TabNames.Live]: n.t("More live streams"),
                    [c.TabNames.Recent]: n.t("More recent streams"),
                    [c.TabNames.Upcoming]: n.t("More upcoming streams")
                };
                return a.createElement("div", {
                    className: s(d.category, g)
                }, f && a.createElement(o.StreamBreadcrumbs, {
                    tabName: f,
                    className: d.breadcrumbs
                }), a.createElement("span", {
                    className: s(d.categoryTitle, d.clickableTitle),
                    onClick: S
                }, a.createElement("span", null, h[r]), !p && a.createElement(l.Icon, {
                    className: d.icon,
                    icon: u
                })), a.createElement(i.StreamList, {
                    streams: E ? t.slice(0, E) : t,
                    onClick: v,
                    hideOverdue: !0,
                    containerClassName: d.listContainer
                }), N || E && t.length > E && a.createElement("div", {
                    className: d.more
                }, a.createElement("a", {
                    href: b ? c.ROOT_URL + "/" : `${c.ROOT_URL}/${r.toLowerCase()}/`,
                    onClick: S
                }, a.createElement("span", null, w[r]), a.createElement(l.Icon, {
                    className: d.moreIcon,
                    icon: u
                }))))
            }

            function f(e) {
                const {
                    onPagination: t,
                    tabName: r,
                    streams: n
                } = e, [s, i] = (0, a.useState)(null), o = (0, a.useRef)(null), l = (0, a.useRef)(null), u = (0, a.useRef)(!1), v = m.StreamStorage.getInstance(), f = c.streamTypesMap[r];
                return (0, a.useEffect)(() => {
                    l.current = async () => {
                        if (!o.current || u.current || !s || n.length < v.pageSize * v.getPage(f)) return;
                        const e = o.current.getBoundingClientRect(),
                            r = document.body.clientHeight + 900;
                        if (e.bottom > r) return;
                        u.current = !0;
                        const a = await fetch(`${c.API_ROOT_URL}/streams-pagination/${s}`).then(e => e.json()).then(e => {
                            let t = [];
                            return i(e.next), v.setPage(f, e.page), Object.keys(e.result).map(r => {
                                t = e.result[r]
                            }), t
                        }).catch(() => (u.current = !1, i(null), []));
                        a.length > 0 && (v.addStreamsBatch(a, f), t()), u.current = !1
                    }
                }, [s, o.current, n]), (0, a.useEffect)(() => {
                    function e() {
                        l.current && l.current()
                    }
                    const t = v.getPage(f);
                    if (!(n.length < v.pageSize * t)) return i(`?state=${f}&page=${t+1}`), window.addEventListener("scroll", e), window.addEventListener("resize", e), e(), () => {
                        window.removeEventListener("scroll", e), window.removeEventListener("resize", e)
                    }
                }, []), a.createElement("div", {
                    className: d.categoryContainer,
                    ref: o
                }, a.createElement(p, {
                    hideIcon: !0,
                    ...e
                }))
            }
        },
        138537: (e, t, r) => {
            "use strict";
            r.d(t, {
                AnchorBadge: () => m,
                Badge: () => l,
                BadgeSize: () => s.BadgeSize
            });
            var a = r(667294),
                n = r(294184),
                s = r(437288),
                c = r(734036);

            function i(e) {
                const {
                    size: t = s.BadgeSize.Medium,
                    className: r
                } = e;
                return n(c.badge, t && c["size-" + t], r)
            }

            function o(e) {
                return n(i(e), c.anchor)
            }

            function l(e) {
                const {
                    size: t,
                    children: r,
                    className: n,
                    ...s
                } = e;
                return a.createElement("span", { ...s,
                    className: i({
                        size: t,
                        className: n
                    })
                }, r)
            }

            function m(e) {
                const {
                    size: t,
                    children: r,
                    className: n,
                    ...s
                } = e;
                return a.createElement("a", { ...s,
                    className: o({
                        size: t,
                        className: n
                    })
                }, r)
            }
        },
        437288: (e, t, r) => {
            "use strict";
            var a;
            r.d(t, {
                    BadgeSize: () => a
                }),
                function(e) {
                    e.XSmall = "xsmall", e.Small = "small", e.Medium = "medium", e.Large = "large", e.XLarge = "xlarge"
                }(a || (a = {}))
        },
        978915: (e, t, r) => {
            "use strict";
            r.d(t, {
                Label: () => o
            });
            var a = r(667294),
                n = r(294184),
                s = r.n(n),
                c = r(435620),
                i = r(773509);

            function o(e) {
                const {
                    htmlFor: t,
                    children: r,
                    className: n,
                    id: o,
                    ...l
                } = e;
                return a.createElement(c.BeforeSlot, { ...l,
                    className: s()(i.label, n)
                }, a.createElement("label", {
                    id: o,
                    htmlFor: t
                }, r))
            }
        },
        564583: (e, t, r) => {
            "use strict";
            r.d(t, {
                Spinner: () => c
            });
            var a = r(667294),
                n = r(294184),
                s = r(129786);
            r(918266);

            function c(e) {
                const t = n("tv-spinner", "tv-spinner--shown", "tv-spinner--size_" + (e.size || s.DEFAULT_SIZE));
                return a.createElement("div", {
                    className: t,
                    style: e.style,
                    role: "progressbar"
                }, a.createElement("div", {
                    className: "tv-spinner__spinner-layer"
                }, a.createElement("div", {
                    className: "tv-spinner__background tv-spinner__width_element"
                }), a.createElement("div", {
                    className: "tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left"
                }), a.createElement("div", {
                    className: "tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right"
                })))
            }
        },
        793304: (e, t, r) => {
            "use strict";
            r.d(t, {
                TooltipWizard: () => l,
                TooltipWidget: () => m
            });
            var a = r(667294),
                n = r(294184),
                s = r(640539),
                c = r(472625),
                i = r(995928),
                o = r(220348);
            class l extends a.PureComponent {
                render() {
                    const {
                        children: e,
                        popperChildrenProps: t,
                        onClose: r,
                        reference: s,
                        containerClassName: i,
                        arrowClassName: l
                    } = this.props;
                    return a.createElement(c.Portal, null, a.createElement("div", {
                        ref: s
                    }, a.createElement(m, {
                        reference: t.ref,
                        style: t.style,
                        arrowClassName: n(o.arrowHolder, this._getArrowDirectionClass(), l),
                        arrowReference: t.arrowProps.ref,
                        arrowStyle: t.arrowProps.style,
                        "data-placement": t.placement,
                        onClose: r,
                        containerClassName: i
                    }, e)))
                }
                _getArrowDirectionClass() {
                    const {
                        popperChildrenProps: e
                    } = this.props;
                    switch (e.placement) {
                        case "left":
                        case "left-start":
                            return n(o["arrowHolder--after"], o["arrowHolder--after-ltr-fix"]);
                        case "top":
                            return n(o["arrowHolder--above"], o["arrowHolder--above-fix"]);
                        case "bottom":
                        case "bottom-start":
                        case "bottom-end":
                            return o["arrowHolder--below"];
                        default:
                            return n(o["arrowHolder--before"], o["arrowHolder--before-rtl-fix"])
                    }
                }
            }

            function m(e) {
                const {
                    className: t,
                    containerClassName: r,
                    contentClassName: c,
                    reference: l,
                    style: m,
                    arrow: u = !0,
                    arrowClassName: d,
                    arrowReference: v,
                    onClose: p,
                    arrowStyle: f,
                    children: g,
                    ...E
                } = e;
                return a.createElement("div", { ...E,
                    className: t,
                    ref: l,
                    style: m
                }, u && a.createElement("div", {
                    className: d,
                    ref: v,
                    style: f
                }), a.createElement("div", {
                    className: n(o.container, r)
                }, a.createElement("div", {
                    className: n(o.content, c)
                }, g), p && a.createElement(s.Icon, {
                    className: o.closeButton,
                    icon: i,
                    onClick: p
                })))
            }
        },
        995928: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
        },
        754062: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 17" width="33" height="17"><path fill="currentColor" d="M21.92 4.24a3.46 3.46 0 0 0-3.5-3.42 3.46 3.46 0 0 0-3.49 3.42 3.46 3.46 0 0 0 3.5 3.42 3.43 3.43 0 0 0 3.49-3.42zM0 1v6.5h6.5V17H13V1H0zm26.1 16h-7.66l6.9-16H33l-6.9 16z"/></svg>'
        }
    }
]);