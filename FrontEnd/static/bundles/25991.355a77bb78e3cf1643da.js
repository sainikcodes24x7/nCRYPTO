(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [25991], {
        338992: e => {
            e.exports = {
                "title-button": "title-button-2tJqAP3E"
            }
        },
        222053: e => {
            e.exports = {
                mainContainer: "mainContainer-1pfI_aFk",
                popup: "popup-1pfI_aFk",
                cardContainer: "cardContainer-1pfI_aFk",
                cardContainerWrapper: "cardContainerWrapper-1pfI_aFk",
                streamViewContainer: "streamViewContainer-1pfI_aFk",
                embed: "embed-1pfI_aFk",
                page: "page-1pfI_aFk",
                infoContainer: "infoContainer-1pfI_aFk",
                collapsedContainer: "collapsedContainer-1pfI_aFk"
            }
        },
        572234: e => {
            e.exports = {
                container: "container-3b3oNctN",
                allowCreate: "allowCreate-3b3oNctN",
                text: "text-3b3oNctN",
                icon: "icon-3b3oNctN"
            }
        },
        681546: (e, t, r) => {
            "use strict";
            r.d(t, {
                CreateStreamContainer: () => u,
                CreateStreamButton: () => d,
                TitleCreateStreamButton: () => m
            });
            var a = r(667294),
                n = r(120220),
                o = r(597086),
                s = r(99256),
                l = r(622148),
                i = r(337774),
                c = r(338992);

            function u(e) {
                const {
                    disabled: t = !1,
                    children: r,
                    className: n
                } = e, [s, l, c] = (0, o.useOpenState)(!1);
                return a.createElement(a.Fragment, null, a.createElement("div", {
                    className: n,
                    onClick: t ? void 0 : c
                }, r), a.createElement(i.CreateStreamDialog, {
                    isOpened: s,
                    onClose: l
                }))
            }

            function d(e) {
                const {
                    disabled: t,
                    size: r
                } = e, [l, c, u] = (0, o.useOpenState)(!1);
                return a.createElement(a.Fragment, null, a.createElement(s.SquareButton, {
                    disabled: l || Boolean(t),
                    onClick: u,
                    size: r
                }, n.t("Create stream")), a.createElement(i.CreateStreamDialog, {
                    isOpened: l,
                    onClose: c
                }))
            }

            function m(e) {
                const {
                    disabled: t
                } = e, [r, s, u] = (0, o.useOpenState)(!1);
                return a.createElement(a.Fragment, null, a.createElement(l.RoundButton, {
                    className: c["title-button"],
                    variant: "quiet-primary",
                    disableThemes: !0,
                    disabled: r || Boolean(t),
                    onClick: u
                }, n.t("Create stream")), a.createElement(i.CreateStreamDialog, {
                    isOpened: r,
                    onClose: s
                }))
            }
        },
        471017: (e, t, r) => {
            "use strict";
            r.d(t, {
                MainContainer: () => s,
                StreamViewContainer: () => l,
                CardContainer: () => i
            });
            var a = r(667294),
                n = r(294184),
                o = r(222053);

            function s(e) {
                return a.createElement("div", {
                    className: n(o.mainContainer, e.className)
                }, e.children)
            }
            const l = a.memo(e => {
                    const t = n(o.streamViewContainer, {
                        [o.page]: !e.isPopup,
                        [o.popup]: e.isPopup,
                        [o.collapsedContainer]: e.collapsed,
                        [o.embed]: e.isEmbed
                    });
                    return a.createElement(s, {
                        className: t
                    }, e.children)
                }),
                i = a.memo(e => a.createElement("div", {
                    className: n(o.cardContainerWrapper, e.className),
                    onClick: e.onClick
                }, a.createElement("div", {
                    className: o.cardContainer
                }, e.children)))
        },
        325991: (e, t, r) => {
            "use strict";
            r.d(t, {
                ImageTypes: () => a,
                EmptyCard: () => C
            });
            var a, n = r(667294),
                o = r(294184),
                s = r(120220),
                l = r(795621),
                i = r(471017),
                c = r(681546),
                u = r(640539),
                d = r(514922),
                m = r(297022),
                p = r(572234);
            ! function(e) {
                e.Smile = "smile", e.Frown = "frown"
            }(a || (a = {}));
            class C extends n.PureComponent {
                constructor(e) {
                    super(e), this._onMouseEnter = () => {
                        this.setState({
                            hover: !0
                        })
                    }, this._onMouseLeave = () => {
                        this.setState({
                            hover: !1
                        })
                    }, this.state = {
                        hover: !1
                    }
                }
                render() {
                    const {
                        text: e,
                        type: t,
                        isAllowCreate: r,
                        isBanned: C
                    } = this.props, {
                        hover: h
                    } = this.state;
                    return n.createElement(i.CardContainer, null, n.createElement("div", {
                        onMouseEnter: this._onMouseEnter,
                        onMouseLeave: this._onMouseLeave
                    }, n.createElement(c.CreateStreamContainer, {
                        className: o(p.container, r && p.allowCreate),
                        disabled: !h || !r || C
                    }, n.createElement(u.Icon, {
                        className: p.icon,
                        icon: t === a.Smile ? d : m
                    }), n.createElement("h3", {
                        className: p.text
                    }, e), r && n.createElement(l.Button, {
                        appearance: h ? "default" : "stroke",
                        disabled: C
                    }, s.t("Create stream")))))
                }
            }
        },
        709027: (e, t, r) => {
            "use strict";
            r.d(t, {
                StreamCreator: () => s
            });
            var a = r(710247),
                n = r(90506),
                o = r(929098);
            class s {
                constructor() {
                    this._gql = new a.GqlRequest, this.createStream = e => ((0, o.trackEvent)("Streams", "create stream", `${e.visibility} ${e.encoder}`), this._gql.createStream(e)), this.getLiveStreamUrl = async () => window.user.id ? this._gql.getLiveStreamUrl(window.user.id) : null, this.onPreviewUpload = (e, t) => this._gql.previewUpload({
                        url: e,
                        file: t
                    }), this.onCreateDefaultCallback = (e, t) => {
                        if (!e) return;
                        let r = "";
                        e.createStream.encoder === n.Encoder.External && (r = "?encoder=" + n.Encoder.External);
                        const a = `${n.ROOT_URL}/${e.createStream.url}/${r}`;
                        t ? window.open(a, "_blank") : window.location.href = `${n.ROOT_URL}/${e.createStream.url}/${r}`
                    }
                }
                stopStream(e, t, r, a) {
                    return this._gql.stopStream({
                        url: e,
                        youtubeToken: t,
                        twitchToken: r
                    }, a)
                }
            }
        },
        337774: (e, t, r) => {
            "use strict";
            r.d(t, {
                CreateStreamDialog: () => i,
                useStreamCreator: () => s.useStreamCreator
            });
            var a = r(667294),
                n = r(911925),
                o = r(497314),
                s = r(431425);
            const l = a.lazy(async () => {
                    const {
                        CreateStreamDialogHandled: e
                    } = await Promise.all([r.e(23876), r.e(26822), r.e(29448), r.e(61212), r.e(85597), r.e(60700), r.e(32795), r.e(88278), r.e(63193), r.e(74814), r.e(45266), r.e(99305), r.e(90901), r.e(36778), r.e(18436), r.e(38968), r.e(84479), r.e(70650), r.e(78708), r.e(81542), r.e(52951), r.e(39703), r.e(66326), r.e(28647), r.e(7236), r.e(46641), r.e(90530), r.e(26834), r.e(11434), r.e(40063), r.e(94195), r.e(43424), r.e(19894), r.e(14563), r.e(80498), r.e(52616), r.e(62348), r.e(87774), r.e(52668), r.e(97708), r.e(10471), r.e(90914), r.e(73495), r.e(15185)]).then(r.bind(r, 340583));
                    return {
                        default: e
                    }
                }),
                i = a.memo(e => {
                    const t = (0, n.useIsMounted)();
                    return ((0, o.useIsOpenedOnes)(e.isOpened) || e.isOpened) && t ? a.createElement(a.Suspense, {
                        fallback: null
                    }, a.createElement(l, { ...e
                    })) : null
                })
        },
        431425: (e, t, r) => {
            "use strict";
            r.d(t, {
                useStreamCreator: () => o
            });
            var a = r(667294),
                n = r(709027);
            const o = () => {
                const [e, t] = (0, a.useState)(null);
                return (0, a.useEffect)(() => {
                    t(new n.StreamCreator)
                }, []), e
            }
        },
        497314: (e, t, r) => {
            "use strict";
            r.d(t, {
                useIsOpenedOnes: () => n
            });
            var a = r(667294);
            const n = e => {
                const [t, r] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    !t && e && r(!0)
                }, [e]), t
            }
        },
        597086: (e, t, r) => {
            "use strict";
            r.d(t, {
                useOpenState: () => n
            });
            var a = r(667294);
            const n = e => {
                const [t, r] = (0, a.useState)(e);
                return [t, (0, a.useCallback)(() => r(!1), []), (0, a.useCallback)(() => r(!0), [])]
            }
        },
        297022: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 55" width="90" height="55"><g fill="none" transform="translate(1 1)"><path stroke="currentColor" stroke-width="2" d="M58.743 14.659a15.71 15.71 0 0 1 6.08-1.217c8.75 0 15.863 7.152 16.014 16.034C85.057 31.389 88 35.699 88 40.71 88 47.498 82.6 53 75.94 53H16.017C7.171 53 0 45.692 0 36.678c0-9.015 7.171-16.323 16.017-16.323h.096C17.158 8.937 26.587 0 38.064 0c9.482 0 17.566 6.1 20.68 14.659z"/><circle fill="currentColor" cx="31" cy="23" r="3"/><circle fill="currentColor" cx="45" cy="23" r="3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M25.5 38c4.167-2.667 8.333-4 12.5-4s8.333 1.333 12.5 4"/></g></svg>'
        },
        514922: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 55" width="90" height="55"><g fill="none" transform="translate(1 1)"><path stroke="currentColor" stroke-width="2" d="M58.743 14.659a15.71 15.71 0 0 1 6.08-1.217c8.75 0 15.863 7.152 16.014 16.034C85.057 31.389 88 35.699 88 40.71 88 47.498 82.6 53 75.94 53H16.017C7.171 53 0 45.692 0 36.678c0-9.015 7.171-16.323 16.017-16.323h.096C17.158 8.937 26.587 0 38.064 0c9.482 0 17.566 6.1 20.68 14.659z"/><circle fill="currentColor" cx="31" cy="23" r="3"/><circle fill="currentColor" cx="45" cy="23" r="3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M25.5 34c4.167 2.667 8.333 4 12.5 4s8.333-1.333 12.5-4"/></g></svg>'
        }
    }
]);