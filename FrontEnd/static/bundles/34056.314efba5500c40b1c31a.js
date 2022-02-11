(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [34056, 523], {
        682707: (e, t, a) => {
            e.exports = a.p + "22ad5410b4baff54c43b63ad7f6d3432.svg"
        },
        981865: e => {
            e.exports = {
                title: "title-qlScWKRo",
                clickable: "clickable-qlScWKRo",
                stream: "stream-qlScWKRo",
                wrapperImage: "wrapperImage-qlScWKRo",
                badgeBlock: "badgeBlock-qlScWKRo",
                preview: "preview-qlScWKRo",
                button: "button-qlScWKRo",
                playerWrapper: "playerWrapper-qlScWKRo",
                player: "player-qlScWKRo",
                hide: "hide-qlScWKRo",
                durationBadge: "durationBadge-qlScWKRo"
            }
        },
        500846: e => {
            e.exports = {
                info: "info-1hg6FEA6",
                infoBlock: "infoBlock-1hg6FEA6",
                "tv-user-avatar": "tv-user-avatar-1hg6FEA6",
                infoUser: "infoUser-1hg6FEA6"
            }
        },
        496164: e => {
            e.exports = {
                overdue: "overdue-2o-uHwp2",
                description: "description-2o-uHwp2"
            }
        },
        382470: e => {
            e.exports = {
                streamsContainer: "streamsContainer-3KjM7nJK",
                title: "title-3KjM7nJK",
                titleContainer: "titleContainer-3KjM7nJK",
                profile: "profile-3KjM7nJK"
            }
        },
        118395: (e, t, a) => {
            "use strict";
            a.d(t, {
                isStreamOverdue: () => s
            });
            var r = a(90506);

            function s(e) {
                return e.state === r.StreamState.Scheduled && new Date(e.plannedTime).getTime() < Date.now()
            }
        },
        698700: (e, t, a) => {
            "use strict";
            a.d(t, {
                getStreamPreview: () => n
            });
            var r = a(90506),
                s = a(682707);

            function n(e, t = !1) {
                const {
                    previewName: a,
                    state: n,
                    url: i
                } = e, m = (0, r.getPreviewUrl)();
                return !t && n === r.StreamState.Live && !a || n === r.StreamState.Ended && !a ? `${m}${i}.jpg` : a ? `${m}${a}` : s
            }
        },
        557189: (e, t, a) => {
            "use strict";
            a.d(t, {
                openPageStream: () => s
            });
            var r = a(90506);

            function s(e, t) {
                !(e.author.id === window.user.id) || e.state === r.StreamState.Ended || e.isBroadcasting ? t(e) : window.open(`${r.ROOT_URL}/${e.url}/`, "_blank")
            }
        },
        376362: (e, t, a) => {
            "use strict";
            a.d(t, {
                StreamList: () => R
            });
            var r = a(667294),
                s = a(294184),
                n = a(120220),
                i = a(90506),
                m = a(325991),
                o = a(118395),
                l = a(557189),
                S = a(715956),
                c = a(471017),
                d = a(391261),
                u = a(127514),
                h = a(500846);
            const p = r.memo(e => {
                const {
                    author: t,
                    stream: a
                } = e, s = (0, u.useStreamState)(a.state), n = (0, r.useCallback)(e => {
                    e.stopPropagation()
                }, []);
                return r.createElement("div", {
                    className: h.infoBlock
                }, r.createElement("div", {
                    onClick: n
                }, s.isLive ? r.createElement(d.UserInfo, {
                    className: h.infoUser,
                    user: t
                }) : r.createElement(d.UserInfo, {
                    user: t
                })), r.createElement(v, {
                    stream: a
                }))
            });

            function v(e) {
                const {
                    stream: {
                        viewsCount: t,
                        viewersCount: a,
                        startTime: s,
                        plannedTime: n,
                        state: i
                    }
                } = e, [m, o] = (0, r.useState)(!1), l = (0, r.useRef)(null);
                return (0, u.useAgoDateFormatterCb)(s || n, l, () => o(!0)), r.createElement("div", {
                    className: h.info
                }, r.createElement(S.StreamStats, {
                    views: t,
                    viewers: a,
                    state: i,
                    afterDivider: m
                }), r.createElement("span", {
                    ref: l
                }))
            }
            var g = a(745873),
                w = a(564583),
                E = a(698700),
                f = a(531484),
                _ = a(682707),
                C = a(981865);
            const y = r.memo(e => {
                    const {
                        isShowPlayer: t,
                        stream: a,
                        onHover: s
                    } = e, [n, m] = (0, r.useState)(!1), [o, l] = (0, r.useState)(Boolean(t)), c = (0, f.useForceUpdate)(), d = (0, r.useRef)(o), h = (0, u.useStreamState)(a.state), p = `${i.ROOT_URL}/${a.url}/`, v = (0, r.useCallback)(() => {
                        d.current ? (m(!0), l(!0)) : (l(!1), m(!1))
                    }, []), g = (0, r.useCallback)(() => {
                        d.current || (d.current = !0, c()), s && s(a)
                    }, [o]), w = (0, r.useCallback)(() => {
                        d.current && (l(!n), m(!1)), d.current = !1, c()
                    }, [o, n]), E = (0, r.useCallback)(e => {
                        e.preventDefault()
                    }, []);
                    return r.createElement("a", {
                        href: p,
                        className: C.clickable,
                        onClick: E,
                        onMouseEnter: h.isLive ? g : void 0,
                        onMouseLeave: h.isLive ? w : void 0
                    }, r.createElement(S.StreamTitle, {
                        title: a.title,
                        className: C.title
                    }), r.createElement("div", {
                        className: C.stream
                    }, r.createElement(T, {
                        stream: a,
                        onLoad: v,
                        hover: d.current,
                        showPlayer: o,
                        playerLoaded: n
                    }), !h.isRecent && r.createElement(S.BadgeBlock, {
                        stream: a,
                        className: C.badgeBlock
                    }), h.isRecent && r.createElement(L, {
                        stream: a
                    })))
                }),
                T = r.memo(e => {
                    const {
                        onLoad: t,
                        playerLoaded: a,
                        showPlayer: s,
                        hover: n,
                        stream: i
                    } = e;
                    return r.createElement(r.Fragment, null, r.createElement(k, {
                        stream: i,
                        hide: n && a,
                        showSpinner: n && !a
                    }), (n || s) && r.createElement("div", {
                        className: C.playerWrapper
                    }, r.createElement(g.VideoPlayer, {
                        author: i.author,
                        stream: i,
                        isOwner: !1,
                        withoutControls: !0,
                        className: C.player,
                        onLoad: t,
                        isPopup: !1,
                        isSave: !1
                    })))
                });

            function k(e) {
                const {
                    stream: t,
                    hide: a,
                    showSpinner: n
                } = e, [i, m] = (0, r.useState)((0, E.getStreamPreview)(t)), o = (0, u.useStreamState)(t.state);
                return r.createElement("div", {
                    className: s(C.wrapperImage, a && C.hide)
                }, o.isLive && n && r.createElement(w.Spinner, {
                    style: {
                        zIndex: "1"
                    }
                }), o.isRecent && r.createElement(S.PlayButton, {
                    className: C.button
                }), r.createElement("img", {
                    src: i,
                    className: C.preview,
                    onError: () => m(_)
                }))
            }

            function L(e) {
                const {
                    stream: t
                } = e;
                if (!t.startTime || !t.endTime) return r.createElement(r.Fragment, null);
                let a = Math.floor((Date.parse(t.endTime) - Date.parse(t.startTime)) / 1e3);
                const s = String(Math.floor(a / 3600)).padStart(2, "0");
                a %= 3600;
                const n = String(Math.floor(a / 60)).padStart(2, "0"),
                    i = String(a % 60).padStart(2, "0");
                return r.createElement("div", {
                    className: C.durationBadge
                }, "00" !== s && s + ":", n, ":", i)
            }
            var b = a(496164);

            function B(e) {
                const {
                    stream: t,
                    author: a,
                    hideOverdue: s,
                    onHover: n,
                    onClick: i,
                    showPlayer: m
                } = e, d = (0, o.isStreamOverdue)(t), u = (0, r.useCallback)(() => {
                    (0, l.openPageStream)(t, () => i(t))
                }, [t, i]);
                return r.createElement(r.Fragment, null, d && s ? null : r.createElement(c.CardContainer, {
                    className: d && b.overdue,
                    onClick: u
                }, r.createElement(y, {
                    stream: t,
                    isShowPlayer: m,
                    onHover: n
                }), r.createElement(p, {
                    stream: t,
                    author: a
                }), t.description && r.createElement(S.StreamDescription, {
                    text: t.description,
                    className: b.description
                })))
            }
            var P = a(382470);

            function R(e) {
                const {
                    streams: t,
                    isOwner: a,
                    onClick: o,
                    hideOverdue: l,
                    showPlayer: S,
                    isAllowCreate: c,
                    containerClassName: d,
                    isBanned: u
                } = e, h = t.length > 0, [p, v] = (0, r.useState)(!0);
                return r.createElement("div", {
                    className: s(P.streamsContainer, d)
                }, h && t.map(e => r.createElement(B, {
                    key: e.url,
                    stream: e,
                    author: e.author,
                    onClick: g,
                    hideOverdue: l,
                    showPlayer: p && S && e.state === i.StreamState.Live
                })), !h && r.createElement(r.Fragment, null, r.createElement(m.EmptyCard, {
                    type: m.ImageTypes.Frown,
                    text: n.t("No streams here yet"),
                    isAllowCreate: c,
                    isBanned: u
                }), c && r.createElement(m.EmptyCard, {
                    type: m.ImageTypes.Smile,
                    text: a ? n.t("Be the first!") : n.t("Create your own stream!"),
                    isAllowCreate: c,
                    isBanned: u
                })));

                function g(e) {
                    o(e, () => v(!0)), v(!1)
                }
            }
        },
        392935: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                StreamStorage: () => n
            });
            var r = a(90506);
            const s = {
                default: null,
                widget: null
            };
            class n {
                constructor(e) {
                    this.isFilled = !1, this.pageSize = 10, this._paginationPages = {
                            [r.StreamState.Live]: 1,
                            [r.StreamState.Scheduled]: 1,
                            [r.StreamState.Ended]: 1
                        },
                        this.getStreamsByTab = e => {
                            const t = r.streamTypesMap[e];
                            return [...this._getStreams(t)]
                        }, this.findStream = e => this._streamsArray.find(t => t.url === e), this.getAuthor = e => {
                            const t = this._streamsArray.find(t => t.author.id === e);
                            return null == t ? void 0 : t.author
                        }, this.addStream = e => {
                            const {
                                state: t
                            } = e;
                            return this._setStreams(t, [e, ...this._getStreams(t)]), this._getStreams(t)
                        }, this.addStreamsBatch = (e, t) => (this._setStreams(t, [...e, ...this._getStreams(t)]), this._getStreams(t)), this.deleteStream = e => {
                            const t = this.findStream(e);
                            if (!t) return;
                            const a = this._getStreams(t.state),
                                r = a.findIndex(t => t.url === e); - 1 !== r && (a.splice(r, 1), this._setStreams(t.state, a))
                        }, e ? (this[r.StreamState.Live] = e[r.StreamState.Live] || [], this[r.StreamState.Scheduled] = e[r.StreamState.Scheduled] || [], this[r.StreamState.Ended] = e[r.StreamState.Ended] || []) : (this[r.StreamState.Live] = [], this[r.StreamState.Scheduled] = [], this[r.StreamState.Ended] = [])
                }
                get _streamsArray() {
                    return [...this._getStreams(r.StreamState.Live), ...this._getStreams(r.StreamState.Scheduled), ...this._getStreams(r.StreamState.Ended)]
                }
                setGqlStreamsTree(e, t) {
                    const a = e => ({ ...e,
                        author: t
                    });
                    this._setStreams(r.StreamState.Live, (e[r.StreamState.Live] || []).map(a)), this._setStreams(r.StreamState.Scheduled, (e[r.StreamState.Scheduled] || []).map(a)), this._setStreams(r.StreamState.Ended, (e[r.StreamState.Ended] || []).map(a)), this.isFilled = !0
                }
                setStreamsTree(e) {
                    this._setStreams(r.StreamState.Live, e[r.StreamState.Live] || []), this._setStreams(r.StreamState.Scheduled, e[r.StreamState.Scheduled] || []), this._setStreams(r.StreamState.Ended, e[r.StreamState.Ended] || []), this.isFilled = !0
                }
                find(e) {
                    return this._streamsArray.find(e)
                }
                changeStream(e, t) {
                    this.deleteStream(e), this.addStream(t)
                }
                createStream(e, t) {
                    const a = { ...e,
                        author: t
                    };
                    return this.addStream(a), a
                }
                getProfileStreams() {
                    return [...this[r.StreamState.Live], ...this[r.StreamState.Scheduled]]
                }
                getWidgetStreams() {
                    return {
                        [r.StreamState.Live]: this[r.StreamState.Live],
                        [r.StreamState.Ended]: this[r.StreamState.Ended]
                    }
                }
                getPage(e) {
                    return this._paginationPages[e]
                }
                setPage(e, t) {
                    this._paginationPages[e] = t
                }
                static getInstance(e = "default") {
                    return null === s[e] && (s[e] = new n), s[e]
                }
                _getStreams(e) {
                    return this[e]
                }
                _setStreams(e, t) {
                    this[e] = this._sortStreams(e, t)
                }
                _sortStreams(e, t) {
                    return t.sort(this._getSortedFunc(e))
                }
                _getSortedFunc(e) {
                    switch (e) {
                        case r.StreamState.Live:
                            return (e, t) => e.viewersCount - t.viewersCount;
                        case r.StreamState.Scheduled:
                            return (e, t) => new Date(e.plannedTime).getTime() - new Date(t.plannedTime).getTime();
                        case r.StreamState.Ended:
                            return (e, t) => t.startTime && e.startTime ? new Date(t.startTime).getTime() - new Date(e.startTime).getTime() : 1
                    }
                }
            }
            r.StreamState.Live, r.StreamState.Scheduled, r.StreamState.Ended
        },
        344513: (e, t, a) => {
            "use strict";

            function r(e) {
                Promise.all([a.e(37610), a.e(23876), a.e(26822), a.e(29448), a.e(61212), a.e(85597), a.e(60700), a.e(69756), a.e(32795), a.e(74814), a.e(45266), a.e(36778), a.e(18436), a.e(84479), a.e(76473), a.e(70650), a.e(78708), a.e(81542), a.e(59678), a.e(13738), a.e(4351), a.e(55313), a.e(14457), a.e(52951), a.e(83651), a.e(62001), a.e(84044), a.e(18277), a.e(28647), a.e(60796), a.e(7236), a.e(46641), a.e(789), a.e(73263), a.e(88163), a.e(93475), a.e(89897), a.e(17997), a.e(40063), a.e(47415), a.e(79565), a.e(82990), a.e(11216), a.e(45867), a.e(19894), a.e(14563), a.e(41153), a.e(10247), a.e(73362), a.e(45873), a.e(52668), a.e(39554), a.e(90914), a.e(7592), a.e(38117), a.e(46687), a.e(45522)]).then(a.bind(a, 406395)).then(t => {
                    var a;
                    t.renderStreamView({
                        stream: e.stream,
                        currentTime: e.currentTime,
                        currentSpeed: e.currentSpeed,
                        currentVolume: e.currentVolume,
                        isOwner: e.stream.author.id === window.user.id,
                        isTheaterMode: e.isTheaterMode,
                        isAdmin: e.isAdmin || (null === (a = window.user.permissions) || void 0 === a ? void 0 : a.is_streams_admin),
                        onClose: e.onClose
                    })
                })
            }
            a.d(t, {
                openStreamView: () => r
            })
        },
        391261: (e, t, a) => {
            "use strict";
            a.d(t, {
                UserInfo: () => n
            });
            var r = a(667294),
                s = a(373362);
            const n = r.memo(e => {
                const {
                    user: t,
                    isBig: a,
                    className: n
                } = e;
                return r.createElement("div", {
                    className: n
                }, r.createElement(s.UserRow, {
                    username: t.username,
                    userpic: t.avatars.small,
                    isBig: a,
                    isBroker: t.is_broker,
                    badges: t.badges
                }))
            })
        },
        531484: (e, t, a) => {
            "use strict";
            a.d(t, {
                useForceUpdate: () => s
            });
            var r = a(667294);
            const s = () => {
                const [, e] = (0, r.useReducer)((e, t) => e + 1, 0);
                return e
            }
        }
    }
]);