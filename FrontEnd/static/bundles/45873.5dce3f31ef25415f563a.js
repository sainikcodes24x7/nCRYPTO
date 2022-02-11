(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [45873], {
        864505: t => {
            t.exports = {
                tooltip: "tooltip-2fK7cngI",
                "tooltip--popup": "tooltip--popup-2fK7cngI",
                "tooltip--button": "tooltip--button-2fK7cngI",
                content: "content-2fK7cngI",
                arrowHolder: "arrowHolder-2fK7cngI",
                "arrowHolder--below": "arrowHolder--below-2fK7cngI",
                "arrowHolder--above": "arrowHolder--above-2fK7cngI",
                "arrowHolder--before": "arrowHolder--before-2fK7cngI",
                "arrowHolder--after": "arrowHolder--after-2fK7cngI",
                button: "button-2fK7cngI"
            }
        },
        583098: t => {
            t.exports = {
                preview: "preview-nDZt1Qu-",
                userContainer: "userContainer-nDZt1Qu-",
                line: "line-nDZt1Qu-",
                avatarContainer: "avatarContainer-nDZt1Qu-",
                avatar: "avatar-nDZt1Qu-",
                infoContainer: "infoContainer-nDZt1Qu-",
                username: "username-nDZt1Qu-",
                info: "info-nDZt1Qu-",
                "notify-block": "notify-block-nDZt1Qu-"
            }
        },
        114908: t => {
            t.exports = {
                showPoster: "showPoster-3QmXsNqE",
                tech: "tech-3QmXsNqE",
                customPoster: "customPoster-3QmXsNqE",
                customBigPlayButton: "customBigPlayButton-3QmXsNqE",
                miniPlayerBigPlayButton: "miniPlayerBigPlayButton-3QmXsNqE",
                showBigPlayButton: "showBigPlayButton-3QmXsNqE",
                hideControlBar: "hideControlBar-3QmXsNqE"
            }
        },
        149371: (t, e, s) => {
            "use strict";
            s.d(e, {
                MiniModeTooltipType: () => i,
                STREAMS_TOOLTIP_MINIMODE_POPUP: () => u,
                STREAMS_TOOLTIP_MINIMODE_BUTTON: () => c,
                CONFIRMED: () => _,
                MiniModeTooltip: () => d
            });
            var i, o = s(667294),
                r = s(294184),
                a = s(120220),
                n = s(655119),
                l = s(99256),
                h = s(793304),
                p = s(864505);
            ! function(t) {
                t.Button = "info-button", t.Popup = "info-popup"
            }(i || (i = {}));
            const u = "streams_tooltip_minimode_popup",
                c = "streams_tooltip_minimode_button",
                _ = "confirmed";

            function d(t) {
                const {
                    type: e
                } = t, [s, d] = (0, o.useState)(!0), [m, y] = (0, o.useState)(!1);
                let g, P;
                switch (e) {
                    case i.Button:
                        g = a.t("Our mini-player follows you around the site until it's closed"), P = c;
                        break;
                    case i.Popup:
                        g = a.t("Meet mini-player mode, where you can watch streams around the site"), P = u
                }
                const w = r(p.tooltip, {
                        [p["tooltip--button"]]: e === i.Button,
                        [p["tooltip--popup"]]: e === i.Popup
                    }),
                    v = r(p.arrowHolder, {
                        [p["arrowHolder--above"]]: e === i.Button,
                        [p["arrowHolder--after"]]: e === i.Popup
                    });
                return o.useEffect(() => {
                    y(n.TVLocalStorage.getItem(P) !== _)
                }, [e]), s && m ? o.createElement(h.TooltipWidget, {
                    className: w,
                    arrowClassName: v,
                    contentClassName: p.content
                }, o.createElement("span", null, g), o.createElement(l.SquareButton, {
                    className: p.button,
                    size: "xsmall",
                    onClick: () => function(t) {
                        const e = t === i.Popup ? u : c;
                        n.TVLocalStorage.setItem(e, _), d(!1)
                    }(e)
                }, a.t("OK"))) : null
            }
        },
        138059: (t, e, s) => {
            "use strict";
            s.d(e, {
                ReconnectManager: () => o
            });
            const i = [{
                timeout: 1e3,
                attempts: 3
            }, {
                timeout: 3e4,
                attempts: 1 / 0
            }];
            class o {
                constructor(t, e = i) {
                    this._reconnectTimeout = 0, this._currentAttemptsCounter = 0, this._currentOption = 0, this._finished = !1, this.reconnect = () => {
                        this._reconnectTimeout || this._finished || (this._reconnectTimeout = setTimeout(() => {
                            this._reconnectTimeout = 0, this._cb(), this._afterReconnect()
                        }, this._getTimeout()))
                    }, this._cb = t, this._options = e
                }
                stop() {
                    this._currentOption = 0, this._currentAttemptsCounter = 0, clearTimeout(this._reconnectTimeout), this._reconnectTimeout = 0
                }
                _afterReconnect() {
                    const t = this._getReconnectOption();
                    t && (this._currentAttemptsCounter >= t.attempts ? (this._currentOption < this._options.length - 1 ? this._currentOption++ : this._finished = !0, this._currentAttemptsCounter = 0) : this._currentAttemptsCounter++)
                }
                _getTimeout() {
                    var t;
                    return (null === (t = this._getReconnectOption()) || void 0 === t ? void 0 : t.timeout) || 6e4
                }
                _getReconnectOption() {
                    return this._options[this._currentOption]
                }
            }
        },
        136442: (t, e, s) => {
            "use strict";
            s.d(e, {
                VideoJsLoader: () => i,
                playerDataPreload: () => o
            });
            class i {
                constructor(t, e, s) {
                    this._player = null, this._customizer = null, this._onReadyCb = () => {
                        this._player && this._customizer && (this._onReady(this._player, this._customizer), this._player = null, this._customizer = null)
                    }, this._id = t, this._opts = e, this._onReady = s
                }
                async load() {
                    const [t, e] = await Promise.all([Promise.all([s.e(11216), s.e(53357)]).then(s.bind(s, 544529)), Promise.resolve().then(s.bind(s, 443354)), Promise.all([s.e(15009), s.e(11765)]).then(s.bind(s, 398689)), Promise.all([s.e(11216), s.e(53357), s.e(42787)]).then(s.t.bind(s, 258028, 23)), Promise.all([s.e(11216), s.e(53357), s.e(44311)]).then(s.bind(s, 183514)), Promise.all([s.e(11216), s.e(53357), s.e(32760)]).then(s.bind(s, 80429)), Promise.all([s.e(9346), s.e(11216), s.e(53357), s.e(92705)]).then(s.bind(s, 681427)), Promise.all([s.e(39252), s.e(11216), s.e(53357), s.e(70900)]).then(s.bind(s, 409316))]);
                    this._id && (this._player = t.default(this._id, this._opts), this._customizer = new e.PlayerCustomizer(this._player), this._player.on("ready", this._onReadyCb))
                }
                dispose() {
                    this._player && (this._player.off("ready", this._onReadyCb), this._player.pause(), setTimeout(() => {
                        var t;
                        null === (t = this._player) || void 0 === t || t.dispose(), this._player = null
                    }, 0)), this._customizer = null, this._id = null
                }
            }

            function o() {
                Promise.all([Promise.all([s.e(15009), s.e(11765)]).then(s.bind(s, 398689)), Promise.all([s.e(11216), s.e(53357)]).then(s.bind(s, 544529)), Promise.resolve().then(s.bind(s, 443354)), Promise.all([s.e(11216), s.e(53357), s.e(42787)]).then(s.t.bind(s, 258028, 23))])
            }
        },
        443354: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                PlayerCustomizer: () => o,
                getPlayerPoster: () => r
            });
            var i = s(114908);
            class o {
                constructor(t) {
                    this._isStopped = !1, this.customize = () => {
                        this._player.bigPlayButton.addClass(i.customBigPlayButton), this._player.posterImage.addClass(i.customPoster)
                    }, this.setPoster = t => {
                        const e = this._player.poster();
                        t && !e && this._player.poster("/static/images/stream-poster.png")
                    }, this._player = t, this.customize()
                }
                setIsStopped(t) {
                    this._isStopped = t
                }
                getIsStopped() {
                    return this._isStopped
                }
                showInterface() {
                    this._allowHideBigPlayButton(), this._player.controls(!0), this._player.controlBar.show(), this._player.bigPlayButton.show()
                }
                showQualitySelect() {
                    this._player.hlsQualitySelector({
                        displayCurrentQuality: !0
                    })
                }
                showTheaterButton() {
                    this._player.theaterMode()
                }
                showMiniPlayerButton() {
                    this._player.miniPlayerMode()
                }
                hideInterface() {
                    this._allowHideBigPlayButton(), this._player.controls(!1), this._player.controlBar.hide(), this._player.bigPlayButton.hide()
                }
                setControlBar(t, e, s) {
                    this._player.currentTime(t), this._player.playbackRate(e), this._player.volume(s)
                }
                showMinimizeInterface() {
                    this._player.addClass("miniModeEnable"),
                        this._player.bigPlayButton.removeClass(i.customBigPlayButton), this._player.bigPlayButton.addClass(i.miniPlayerBigPlayButton)
                }
                allowHidePoster() {
                    this._player.posterImage.removeClass(i.showPoster)
                }
                showPoster() {
                    this._player.posterImage.show(), this._player.posterImage.addClass(i.showPoster)
                }
                showBigPlayButton() {
                    this._isStopped || this._player.bigPlayButton.addClass(i.showBigPlayButton)
                }
                _allowHideBigPlayButton() {
                    this._player.bigPlayButton.removeClass(i.showBigPlayButton)
                }
            }

            function r() {
                return "/static/images/stream-poster.png"
            }
        },
        745873: (t, e, s) => {
            "use strict";
            s.d(e, {
                VideoPlayer: () => M
            });
            var i = s(667294),
                o = s(973935),
                r = s(294184),
                a = s(120220),
                n = s(90506),
                l = s(149371),
                h = s(987380),
                p = s(771073),
                u = s(655119),
                c = s(876727),
                _ = s(955054),
                d = s(443354),
                m = s(524926),
                y = s(127514),
                g = s(583098);
            const P = i.memo(t => {
                const {
                    stream: e,
                    author: {
                        username: s,
                        avatars: {
                            big: o,
                            small: r
                        }
                    },
                    text: l,
                    isOwner: h
                } = t, p = new Date(e.plannedTime).getTime(), u = (0, y.useStreamState)(e.state), [c, _] = (0, i.useState)(""), d = e.visibility === n.Visible.Private ? a.t("Private stream starts at") : a.t("Start at");
                return (0, i.useEffect)(() => {
                    _((0, m.getFormattedDataByDate)({
                        date: p
                    }).formattedDate)
                }, []), i.createElement("div", {
                    className: g.preview
                }, i.createElement("div", {
                    className: g.userContainer
                }, i.createElement("div", {
                    className: g.line
                }, i.createElement("div", {
                    className: g.avatarContainer
                }, i.createElement("img", {
                    src: o || r,
                    alt: s,
                    className: g.avatar
                })), i.createElement("div", {
                    className: g.infoContainer
                }, i.createElement("h3", {
                    className: g.username
                }, s), i.createElement("p", {
                    className: g.info
                }, l))), u.isUpcoming && "" !== c && !h && i.createElement("div", {
                    className: g["notify-block"]
                }, i.createElement("p", null, `${d} ${c}`))))
            });
            class w {
                constructor(t, e, i) {
                    this._modal = null, this._saveSettings = null, this.pause = () => {
                        this._player.pause()
                    }, this.seekToLive = () => {
                        this._player.liveTracker.seekToLiveEdge()
                    }, this.initSettings = async () => {
                        const t = await Promise.resolve().then(s.t.bind(s, 342098, 23)),
                            e = t.getJSON("video-player-settings", 0);
                        this._player.volume(e), e > 0 && this._playPromise && this._playPromise.then(() => this._player.muted(!1)), this._saveSettings = e => {
                            t.setJSON("video-player-settings", e)
                        }
                    }, this._onLoad = t => {
                        this._setListenerOnTech(), this._player.on("volumechange", this._onChangeVolume), this._player.on("waiting", () => {
                            const e = setTimeout(() => t(), 2e4);
                            this._player.one("playing", () => clearTimeout(e))
                        })
                    }, this._onChangeVolume = () => {
                        this._saveSettings && !this._player.paused() && this._saveSettings(this._player.volume())
                    }, this._setListenerOnTech = () => {
                        const t = this._player.tech(!0);
                        t && t.on("retryplaylist", this.seekToLive)
                    }, this._player = t, this._customizer = e, this._player.ready(() => this._onLoad(i))
                }
                play() {
                    var t;
                    this._playPromise = null === (t = this._player.play()) || void 0 === t ? void 0 : t.catch(() => Promise.resolve()), this._customizer.setIsStopped(!1)
                }
                stop(t) {
                    this._customizer.showPoster(), this._customizer.hideInterface(), this._customizer.setIsStopped(!0), this._player.paused() || (this._playPromise && this._playPromise.then(this.pause), t || this._player.loadingSpinner.hide())
                }
                autoplay(t) {
                    this._player.src(t)
                }
                reset() {
                    this._player.reset(), this._closeModal()
                }
                dispose() {
                    this._player.pause(),
                        this._closeModal(), setTimeout(() => {
                            this._player.dispose()
                        }, 0)
                }
                createErrorModal(t) {
                    this._modal = this._player.createModal(t, {
                        uncloseable: !0
                    })
                }
                _closeModal() {
                    null !== this._modal && (this._modal.close(), this._modal = null)
                }
            }
            var v = s(392935),
                S = s(416282),
                b = s(136442),
                f = s(138059),
                C = s(929098);
            class N {
                constructor(t) {
                    this._ws = null, this._wsTimeout = 0, this._pingTimeout = 0, this._watchStatInterval = 0, this.close = () => {
                        null !== this._ws && (this._removeListeners(), this._stopPing(), this._ws.close(), this._ws = null), this._wsTimeout && (clearTimeout(this._wsTimeout), this._wsTimeout = 0), this._watchStatInterval && (clearTimeout(this._watchStatInterval), this._watchStatInterval = 0), this._reconnectManager.stop()
                    }, this.open = () => {
                        if (!this._stream || this._stream.state === n.StreamState.Scheduled) return;
                        const {
                            url: t,
                            title: e,
                            visibility: s
                        } = this._stream;
                        this._wsTimeout = setTimeout(() => {
                            this._createWs(), this._ws && (0, C.trackEvent)("Streams", "watch stream", `${s} title: ${e}; url: ${t}`)
                        }, 5e3), this._watchStatInterval = setInterval(() => {
                            (0, C.trackEvent)("Streams", "watch duration", `${s} title: ${e}; url: ${t}`)
                        }, 6e4)
                    }, this._onOpenHandler = () => {
                        this._startPing(), this._reconnectManager.stop()
                    }, this._tryReconnect = () => {
                        if (this._stopPing(), !this._ws) return this._reconnectManager.reconnect();
                        this._removeListeners(), this._ws.close(), this._ws = null, this._reconnectManager.reconnect()
                    }, this._startPing = () => {
                        this._pingTimeout = setInterval(this._ping, 3e4)
                    }, this._ping = () => {
                        this._ws && 1 === this._ws.readyState && this._ws.send("1")
                    }, this._stopPing = () => {
                        clearInterval(this._pingTimeout), this._pingTimeout = 0
                    }, this._stream = t, this._reconnectManager = new f.ReconnectManager(this._createWs)
                }
                _createWs() {
                    this._stream ? (this._ws = new WebSocket(`wss://${n.TV_LIVE_DIRECTOR_DOMAIN}/websocket?streamUrl=${this._stream.url}`), this._setListeners()) : this._ws = null
                }
                _removeListeners() {
                    this._ws && (this._ws.removeEventListener("open", this._onOpenHandler), this._ws.removeEventListener("error", this._tryReconnect), this._ws.removeEventListener("close", this._tryReconnect))
                }
                _setListeners() {
                    this._ws && (this._ws.addEventListener("open", this._onOpenHandler), this._ws.addEventListener("error", this._tryReconnect), this._ws.addEventListener("close", this._tryReconnect))
                }
            }
            var T = s(984676);
            const E = (0, h.getLogger)("Stream.VideoPlayer.ErrorHandler");
            class M extends i.Component {
                constructor() {
                    super(...arguments), this._videoNode = null, this._stateCollapsed = !1, this._player = null, this._notifier = null, this._options = null, this._streams = null, this._customizer = null, this._actions = null, this._vjsLoader = null, this._containerCustomPoster = null, this._sendAnalyticsStreamsViewingDuration = () => {
                            if (!this._player || !this.props.stream) return;
                            const t = this._player.currentTime(),
                                e = Math.round(t / 60),
                                s = 0 === e ? 1 : e,
                                i = !1 === this.props.isPopup ? "streamPage" : this.props.isMiniPlayer ? "minimode" : "fullpopup";
                            (0, p.getTracker)().then(t => {
                                var e;
                                null !== t && t.trackStreamsViewingDuration(window.locale, s, i, (null === (e = this.props.stream) || void 0 === e ? void 0 : e.url) || "")
                            })
                        }, this._sendAnalyticsStreamsAction = t => {
                            if (!this.props.stream) return;
                            const e = this.props.stream.url;
                            (0, p.getTracker)().then(s => {
                                null !== s && s.trackStreamsActions(window.locale, t, e)
                            })
                        }, this._onTheaterModeToggle = async () => {
                            const {
                                stream: t,
                                isOwner: e,
                                setPoster: i,
                                showRecord: o,
                                collapsed: r
                            } = this.props, {
                                TheaterModeToggle: a
                            } = await Promise.all([s.e(9346), s.e(11216), s.e(53357), s.e(92705)]).then(s.bind(s, 681427));
                            if (!this._canPlay()) return;
                            if (!this._player) return;
                            if (void 0 === r) return;
                            this._stateCollapsed = r, this._options = L(t, e, Boolean(i), o);
                            new a(this._player, this._options).collapsedChat(r)
                        }, this._onUpdate = () => {
                            const {
                                stream: t,
                                isOwner: e,
                                setPoster: s,
                                showRecord: i,
                                collapsed: o,
                                withoutControls: r
                            } = this.props;
                            this._stateCollapsed === o && this._player && !1 !== i && (this._ws && this._ws.close(), this._options = L(t, e, Boolean(s), r, i), (0, S.ensureNotNull)(this._actions).reset(), this._player.src(this._options.src || ""), this._setPoster(), this._handleLoad(), this._updatePushStreamSubsctibe(), this._ws = new N(t))
                        }, this._onLoadHandler = (t, e) => {
                            var s;
                            const {
                                setIsPlayerReady: i,
                                isEmbed: o,
                                currentTime: r,
                                currentSpeed: a,
                                currentVolume: l
                            } = this.props;
                            this._player = t, this._customizer = e, this._actions = new w(t, e, this._onUpdate), this.props.setVideoPlayer && this.props.setVideoPlayer(this._player);
                            const h = this._canPlay();
                            r && a && l && (0, S.ensureNotNull)(this._customizer).setControlBar(r, a, l), this.props.isTheaterMode && this.props.onCollapse && this.props.onCollapse(), this.props.isMiniPlayer && (0, S.ensureNotNull)(this._customizer).showMinimizeInterface(), this._options && this._options.src && h ? (this.props.withoutControls || this._player.controls(!0), o || (0, S.ensureNotNull)(this._customizer).showTheaterButton(), o || (0, S.ensureNotNull)(this._customizer).showMiniPlayerButton(), (null === (s = this.props.stream) || void 0 === s ? void 0 : s.state) !== n.StreamState.Ended && (this._player.tech_.hls = !0, (0, S.ensureNotNull)(this._customizer).showQualitySelect())) : ((0, S.ensureNotNull)(this._customizer).hideInterface(), this._setPoster()), i && i(!0), this._player.on("play", this._onPlayHandler), this._player.on("ended", this._onEndHandler), this._player.on("pause", this._onPauseHandler), this._player.on("error", this._onErrorHandler), this._player.on("durationchange", this._onDurationChangeHandler), this._player.on("posterchange", this._onPosterChangeHandler), this._player.on("ended", this._setPoster), this._player.on("theaterChange", this._onTheaterChange), this._player.on("miniPlayerChange", this._onMiniPlayerChange), this._player.on("fullscreenchange", this._onFullscreenChange), this._player.on("ratechange", this._setPlaybackRates), this._updatePushStreamSubsctibe(), h && this._handleLoad()
                        }, this._setPlaybackRates = () => {
                            this._sendAnalyticsStreamsAction("setPlaybackRate")
                        }, this._onFullscreenChange = () => {
                            this.props.isMiniPlayer && this.props.changePositionDialog && this.props.changePositionDialog(), (0, S.ensureNotNull)(this._player).isFullscreen() ? this._sendAnalyticsStreamsAction("enableFullscreen") : this._sendAnalyticsStreamsAction("disableFullscreen")
                        }, this._onTheaterChange = () => {
                            const {
                                collapsed: t,
                                onCollapse: e,
                                offCollapse: s
                            } = this.props;
                            this._stateCollapsed = t, t ? s && (s(), this._sendAnalyticsStreamsAction("disableTheaterMode")) : e && (e(), this._sendAnalyticsStreamsAction("enableTheaterMode"))
                        },
                        this._onPlayingHandler = () => {
                            const {
                                onLoad: t,
                                withoutControls: e
                            } = this.props;
                            t && t(), e || (0, S.ensureNotNull)(this._actions).initSettings()
                        }, this._onEndHandler = () => {
                            const {
                                onStreamEnd: t,
                                stream: e
                            } = this.props;
                            t && t(), e && e.state !== n.StreamState.Ended && this._stop(!0)
                        }, this._onErrorHandler = () => {
                            if (!this._player) return;
                            const t = this._player.error();
                            t && E.logError(t.message), t && ![2, 4].includes(t.code) ? (0, S.ensureNotNull)(this._actions).createErrorModal(t.message) : this._stop()
                        }, this._onPlayHandler = () => {
                            this.props.withoutControls || (this._containerCustomPoster && this._removeCustomPoster(), (0, S.ensureNotNull)(this._customizer).showInterface(), (0, S.ensureNotNull)(this._customizer).allowHidePoster(), this._setHlsQualityLevels(), this._ws.open())
                        }, this._onPauseHandler = () => {
                            (0, S.ensureNotNull)(this._customizer).showBigPlayButton(), this._ws.close()
                        }, this._onDurationChangeHandler = () => {
                            const {
                                stream: t
                            } = this.props;
                            this._player && (t && t.state === n.StreamState.Ended || this._player.duration() !== 1 / 0 && this._player.duration(1 / 0))
                        }, this._onPosterChangeHandler = () => {
                            if (!this._player) return;
                            this._player.poster() || this._setPoster()
                        }, this._onMiniPlayerChange = () => {
                            const {
                                stream: t,
                                setMiniModeOnPageStream: e,
                                isPopup: s
                            } = this.props, i = (0, S.ensureNotNull)(this._player).currentTime(), o = (0, S.ensureNotNull)(this._player).playbackRate(), r = (0, S.ensureNotNull)(this._player).volume();
                            this.props.isPopup && this.props.unmountStreamView && this.props.unmountStreamView(), this.props.isMiniPlayer && this._sendAnalyticsStreamsAction("enableMiniMode"), t && (0, T.openStreamMiniPlayer)({
                                stream: t,
                                currentTime: i,
                                currentSpeed: o,
                                currentVolume: r,
                                isTheaterMode: this.props.collapsed,
                                setMiniModeOnPageStream: e && !s ? () => {
                                    e(!1, i, o, r)
                                } : void 0
                            }), this.props.setMiniModeOnPageStream && !this.props.isPopup && this.props.setMiniModeOnPageStream(!0), u.TVLocalStorage.getItem(l.STREAMS_TOOLTIP_MINIMODE_BUTTON) !== l.CONFIRMED && u.TVLocalStorage.setItem(l.STREAMS_TOOLTIP_MINIMODE_BUTTON, l.CONFIRMED)
                        }, this._savePlayer = () => {
                            if (!1 === this.props.isSave) return;
                            if (this.props.isDeletingStream || (0, S.ensureNotNull)(this._player).paused()) return;
                            const {
                                stream: t
                            } = this.props, e = (null == t ? void 0 : t.state) === n.StreamState.Ended ? (0, S.ensureNotNull)(this._player).currentTime() : null, s = (null == t ? void 0 : t.state) === n.StreamState.Ended ? (0, S.ensureNotNull)(this._player).playbackRate() : null, i = (0, S.ensureNotNull)(this._player).volume();
                            (this.props.isMiniPlayer && void 0 !== t || this.props.isPopup && !this.props.isMiniPlayer && !(0, S.ensureNotNull)(this._player).paused() || void 0 !== t && !this.props.isPopup) && c.MiniPlayerSessionStorage.setItem(t, e, s, i)
                        }, this._setHlsQualityLevels = () => {
                            const t = this._player,
                                e = t.tech_.sourceHandler_.hls,
                                s = t.qualityLevels();
                            void 0 !== e && void 0 !== e.levels && e.levels.forEach((t, i) => {
                                s.addQualityLevel({
                                    id: i.toString(),
                                    width: t.width,
                                    height: t.height,
                                    bandwidth: t.bitrate,
                                    enabled: s => {
                                        s && (e.nextLevel = t.level || 0, this._sendAnalyticsStreamsAction("setQualityLevel"))
                                    }
                                })
                            })
                        }, this._setPoster = () => {
                            const {
                                stream: t,
                                setPoster: e
                            } = this.props;
                            e && t && (t && t.state === n.StreamState.Ended ? this._createCustomPoster(a.t("Stream has ended")) : this._createCustomPoster(a.t("Stream offline")), (0, S.ensureNotNull)(this._customizer).setPoster(t))
                        }, this._onStreamEncoderConnect = t => {
                            const {
                                stream: e
                            } = this.props;
                            "connect" === t.operation && e && t.stream.url === e.url && setTimeout(() => {
                                (0, S.ensureNotNull)(this._actions).reset(), this._setPoster(), this._handleLoad(!0), this._setStreamIsBroadcasting(!0)
                            }, 1e4)
                        }, this._setVideoElem = t => {
                            this._videoNode = t
                        }
                }
                shouldComponentUpdate(t) {
                    const {
                        stream: e,
                        collapsed: s
                    } = this.props, {
                        stream: i,
                        showRecord: o,
                        collapsed: r
                    } = t;
                    return !1 === o || !!(!e && i || e && !i || e && i && (e.url !== i.url || e.previewName !== i.previewName || e.state !== i.state || r !== s))
                }
                componentDidMount() {
                    const {
                        stream: t,
                        isOwner: e,
                        setPoster: s,
                        showRecord: i,
                        withoutControls: o
                    } = this.props;
                    this._options = L(t, e, Boolean(s), o, i), this._streams = v.StreamStorage.getInstance(), this._videoNode && (this._vjsLoader = new b.VideoJsLoader(this._videoNode, this._options, this._onLoadHandler), this._vjsLoader.load()), this._ws = new N(t), window.addEventListener("beforeunload", this._savePlayer)
                }
                componentWillUnmount() {
                    this._sendAnalyticsStreamsViewingDuration(), this._ws.close(), this._pushStreamUnsubscribe(), this._vjsLoader && this._vjsLoader.dispose(), this.props.setIsPlayerReady && this.props.setIsPlayerReady(!1), this.props.setVideoPlayer && this.props.setVideoPlayer(null), this._actions && this._actions.dispose(), window.removeEventListener("beforeunload", this._savePlayer)
                }
                componentDidUpdate() {
                    this._onUpdate(), this._onTheaterModeToggle()
                }
                render() {
                    const {
                        className: t
                    } = this.props;
                    return i.createElement("div", {
                        "data-vjs-player": !0
                    }, i.createElement("video", {
                        ref: this._setVideoElem,
                        className: r("video-js", t)
                    }), this.props.children)
                }
                _stop(t) {
                    (0, S.ensureNotNull)(this._actions).stop(t), this._setPoster(), this._ws.close()
                }
                _createCustomPoster(t) {
                    const {
                        author: e,
                        stream: s,
                        isOwner: r
                    } = this.props;
                    if (!e || !s) return;
                    const a = this._player.posterImage.el();
                    this._containerCustomPoster = document.createElement("div"), a.appendChild(this._containerCustomPoster), o.render(i.createElement(P, {
                        author: e,
                        text: t,
                        stream: s,
                        isOwner: r
                    }), a)
                }
                _removeCustomPoster() {
                    this._containerCustomPoster && (o.unmountComponentAtNode(this._containerCustomPoster), this._containerCustomPoster = null)
                }
                _handleLoad(t) {
                    const {
                        stream: e,
                        isOwner: s,
                        showRecord: i,
                        withoutControls: o
                    } = this.props;
                    if (!e) return;
                    const r = I(e, s, o);
                    (this._canPlay() || t) && !1 !== i && r ? (this._player && this._player.one("playing", this._onPlayingHandler), (0, S.ensureNotNull)(this._actions).autoplay(r)) : this._stop()
                }
                _canPlay() {
                    const {
                        stream: t,
                        isOwner: e
                    } = this.props;
                    if (!t) return !1;
                    return !!(I(t, e) && t && B(t) || e && t.state === n.StreamState.Scheduled && t.isBroadcasting)
                }
                _pushStreamUnsubscribe() {
                    this._notifier && (this._notifier.streamChange().subscribe(null, this._onStreamEncoderConnect), this._notifier.globalStreamsChange().unsubscribe(null, this._onStreamEncoderConnect))
                }
                _pushStreamSubscribe() {
                    const {
                        stream: t
                    } = this.props;
                    t && (0, _.getNotifier)(t.url).then(e => {
                        this._notifier = e, this._notifier.streamChange().subscribe(null, this._onStreamEncoderConnect),
                            this._notifier.globalStreamsChange().subscribe(null, this._onStreamEncoderConnect), this._notifier.connect(t.url)
                    })
                }
                _updatePushStreamSubsctibe() {
                    const {
                        stream: t,
                        isOwner: e
                    } = this.props;
                    if (!t || !e && t.state !== n.StreamState.Live) return this._pushStreamUnsubscribe();
                    this._pushStreamSubscribe()
                }
                _setStreamIsBroadcasting(t) {
                    const {
                        stream: e
                    } = this.props;
                    if (!this._streams || !e || e.isBroadcasting) return;
                    const s = Object.assign({}, e, {
                        isBroadcasting: t
                    });
                    this._streams.changeStream(e.url, s)
                }
            }

            function B(t) {
                return t.state === n.StreamState.Live && Boolean(t.isBroadcasting) || t.state === n.StreamState.Ended && t.record && (t.permanent || (0, n.isRecordAvailable)(t.endTime))
            }

            function I(t, e, s) {
                if (t.encoderId && (t.state === n.StreamState.Live || t.state === n.StreamState.Scheduled && e)) {
                    const e = s ? "480p/playlist" : "adaptive",
                        i = (0, n.getMediaUrl)(t.region);
                    return new URL(`/${t.encoderId}/streams/${t.url}/${e}.m3u8`, "https://" + i).href
                }
                if (t.state === n.StreamState.Ended) return `${n.TV_LIVE_MEDIA_URL}/${t.url}/playlist.m3u8`
            }

            function L(t, e, s, i, o) {
                const r = t ? (0, y.useStreamState)(t.state) : void 0,
                    a = !!t && B(t),
                    n = t ? I(t, e, i) : "",
                    l = s ? t && (0, d.getPlayerPoster)() : "";
                return t && a && n ? {
                    autoplay: i,
                    controls: !1,
                    poster: void 0,
                    errorDisplay: !1,
                    preload: "none",
                    userActions: {
                        hotkeys: !0
                    },
                    techOrder: ["html5"],
                    playbackRates: t.record && !1 === (null == r ? void 0 : r.isRecent) ? void 0 : [.5, 1, 1.5, 2],
                    muted: i,
                    playsinline: !0,
                    sources: [{
                        src: n,
                        type: "application/x-mpegURL"
                    }],
                    src: n,
                    controlBar: {
                        pictureInPictureToggle: !1
                    }
                } : {
                    autoplay: !1,
                    poster: l,
                    errorDisplay: !1,
                    muted: !0,
                    userActions: {
                        hotkeys: !0
                    }
                }
            }
        }
    }
]);