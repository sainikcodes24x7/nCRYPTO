(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [4516], {
        805958: (t, e, n) => {
            "use strict";
            var s;
            n.d(e, {
                    ConnectionStatus: () => s
                }),
                function(t) {
                    t[t.Closed = 0] = "Closed", t[t.Connecting = 1] = "Connecting", t[t.Open = 2] = "Open"
                }(s || (s = {}))
        },
        804950: (t, e, n) => {
            "use strict";
            n.d(e, {
                PersistentTransport: () => l
            });
            var s = n(805958),
                o = n(382713),
                i = n(765066),
                r = n.n(i),
                a = n(896276),
                c = n.n(a),
                h = n(898388);
            class l {
                constructor(t, e) {
                    this._url = "", this._socket = null, this._reconnectCount = 0, this._onlineCancellationToken = null, this._connectionStatus = new(r())(s.ConnectionStatus.Closed), this._socketCloseHandler = this._onCloseCallback.bind(this), this._socketErrorHandler = this._onErrorCallback.bind(this), this._socketOpenHandler = this._onOpenCallback.bind(this), this._socketMessageHandler = this._onMessageCallback.bind(this), this._maxReconnectReachedEventDelegate = new(c()), this._shouldReconnect = !0, this._maxReconnectCount = null, this._reconnectTimeoutId = 0, this._connectAbortController = null, this._tryReconnect = () => {
                        if (this._disconnect(), this._shouldReconnect) {
                            const t = this._getReconnectTimeout();
                            this._logger.logNormal(`Sleeping some time before reconnect ${t}ms`), this._reconnectTimeoutId = setTimeout(this._tryReconnectImpl.bind(this), t)
                        } else this._logger.logNormal("Skip reconnecting because of shouldReconnect state")
                    }, this._onOfflineHandler = () => {
                        this._removeOnOfflineListener(), this._logger.logInfo("Network status changed to offline - trying to reconnect"), this._tryReconnect()
                    }, this._logger = e, this._messageHandler = t, window.addEventListener("unload", () => {
                        e.logNormal("Unload event comes - disconnecting without reconnect after that..."), this._shouldReconnect = !1, this._disconnect()
                    }, !1)
                }
                setUrl(t) {
                    if (this._url === t) return;
                    const e = this._connectionStatus.value() !== s.ConnectionStatus.Closed;
                    e && this._disconnect(), this._url = t, e && this.connect()
                }
                url() {
                    return this._url
                }
                connect() {
                    this._connectImpl()
                }
                setMaxReconnectCount(t) {
                    this._maxReconnectCount = t
                }
                connectionStatus() {
                    return this._connectionStatus.readonly()
                }
                disconnect() {
                    this._shouldReconnect = !1, this._disconnect()
                }
                maxReconnectReachedEvent() {
                    return this._maxReconnectReachedEventDelegate
                }
                async _prepareParamsForConnection(t) {}
                _disconnect() {
                    var t;
                    null === (t = this._connectAbortController) || void 0 === t || t.abort(), this._connectAbortController = null, clearTimeout(this._reconnectTimeoutId), this._reconnectTimeoutId = 0, this._connectionStatus.value() !== s.ConnectionStatus.Closed ? this._socket ? (this._logger.logNormal(`Closing connection to: ${this._socket.url}, currentStatus: ${s.ConnectionStatus[this._connectionStatus.value()]}`), this._disconnectTransport()) : this._logger.logNormal("Disconnecting without socket - probably within preparing, it should be already scheduled for aborting") : this._logger.logNormal("Attempt to close connection but it is closed already")
                }
                _onErrorCallback() {
                    this._logger.logInfo("Connection is closed by error"), this._tryReconnect()
                }
                _onCloseCallback(t) {
                    this._logger.logInfo(`Connection is closed - code=${t.code} msg=${t.reason}`), this._tryReconnect()
                }
                _tryReconnectImpl() {
                    return null !== this._maxReconnectCount && this._reconnectCount === this._maxReconnectCount ? (this._logger.logWarn("Maximum attempts to reconnect to websocket reached"), void this._maxReconnectReachedEventDelegate.fire()) : (this._reconnectCount += 1, this._logger.logInfo("Reconnecting count: " + this._reconnectCount), navigator.onLine ? (this._logger.logInfo("Network status: online - trying to connect"), void this.connect()) : (this._logger.logInfo("Network status: offline - wait until online"), void(this._onlineCancellationToken = (0, o.callWhenOnline)(() => {
                        this._logger.logInfo("Network status changed to online - trying to connect"), this.connect()
                    }))))
                }
                _onOpenCallback() {
                    this._logger.logNormal("Connection opened"), this._reconnectCount = 0, this._connectionStatus.setValue(s.ConnectionStatus.Open)
                }
                _onMessageCallback(t) {
                    this._messageHandler(t.data)
                }
                _getReconnectTimeout() {
                    return this._reconnectCount < 5 ? 300 : 5e3
                }
                _setOnOfflineListener() {
                    window.addEventListener("offline", this._onOfflineHandler)
                }
                _removeOnOfflineListener() {
                    window.removeEventListener("offline", this._onOfflineHandler)
                }
                async _connectImpl() {
                    if (this._connectionStatus.value() !== s.ConnectionStatus.Closed) return void this._logger.logNormal("Attempt to open connection but it is not closed");
                    this._socket && (this._logger.logError("Something went wrong - code 0x2"), this.disconnect()), this._onlineCancellationToken && (this._onlineCancellationToken(), this._onlineCancellationToken = null), this._logger.logNormal("Connecting to " + this._url), this._shouldReconnect = !0, this._connectAbortController = new AbortController;
                    const t = this._connectAbortController.signal;
                    try {
                        if (this._connectionStatus.setValue(s.ConnectionStatus.Connecting), await this._prepareParamsForConnection(t), t.aborted) throw (0, h.createAbortError)();
                        this._socket = this._createNativeTransport(this._url), this._setOnOfflineListener()
                    } catch (t) {
                        this._connectionStatus.setValue(s.ConnectionStatus.Closed), (0, h.skipAbortError)(t)
                    } finally {
                        this._connectAbortController = null
                    }
                }
            }
        },
        99020: (t, e, n) => {
            "use strict";
            n.d(e, {
                PersistentWebsocketTransport: () => a
            });
            var s = n(987380),
                o = n(805958),
                i = n(804950);
            const r = (0, s.getLogger)("PersistentWebsocketTransport");
            class a extends i.PersistentTransport {
                constructor(t) {
                    super(t, r)
                }
                sendMessage(t) {
                    this._connectionStatus.value() === o.ConnectionStatus.Open ? this._socket ? this._socket.send(t) : r.logError("Something went wrong - code 0x3") : r.logWarn("Attempt to send message but connection is not opened")
                }
                _createNativeTransport(t) {
                    const e = new WebSocket(t);
                    return e.binaryType = "arraybuffer", e.addEventListener("error", this._socketErrorHandler), e.addEventListener("close", this._socketCloseHandler), e.addEventListener("open", this._socketOpenHandler), e.addEventListener("message", this._socketMessageHandler), e
                }
                _disconnectTransport() {
                    if (null === this._socket) return;
                    this._socket.removeEventListener("error", this._socketErrorHandler), this._socket.removeEventListener("close", this._socketCloseHandler), this._socket.removeEventListener("open", this._socketOpenHandler), this._socket.removeEventListener("message", this._socketMessageHandler), this._removeOnOfflineListener();
                    const t = this._socket;
                    this._socket = null, this._connectionStatus.setValue(o.ConnectionStatus.Closed), t.readyState !== WebSocket.CLOSED && t.close()
                }
            }
        },
        898388: (t, e, n) => {
            "use strict";

            function s(t) {
                let e = null;
                return (n, ...s) => (null == e || e.abort(), e = new AbortController, null == n || n.addEventListener("error", () => null == e ? void 0 : e.abort(), {
                    once: !0
                }), t(e.signal, ...s))
            }

            function o(t) {
                if (!c(t)) throw t
            }

            function i(t) {
                if (c(t)) throw t
            }

            function r(t) {
                return (null == t ? void 0 : t.aborted) ? Promise.reject(a()) : new Promise((e, n) => {
                    null == t || t.addEventListener("abort", () => n(a()), {
                        once: !0
                    })
                })
            }

            function a() {
                return new DOMException("Aborted", "AbortError")
            }

            function c(t) {
                return t instanceof Error && "AbortError" === t.name
            }

            function h(t, e) {
                return Promise.race([r(t), e])
            }
            async function l(t, e) {
                let n;
                try {
                    await h(t, new Promise(t => {
                        n = setTimeout(t, e)
                    }))
                } finally {
                    clearTimeout(n)
                }
            }
            n.d(e, {
                respectLatest: () => s,
                skipAbortError: () => o,
                rethrowAbortError: () => i,
                createAbortError: () => a,
                isAbortError: () => c,
                respectAbort: () => h,
                delay: () => l
            })
        },
        382713: (t, e, n) => {
            "use strict";
            n.d(e, {
                callWhenOnline: () => o,
                waitForOnline: () => i
            });
            var s = n(898388);

            function o(t) {
                let e = t;
                const n = () => {
                    window.removeEventListener("online", n), e && e()
                };
                return window.addEventListener("online", n), () => {
                    e = null
                }
            }
            async function i(t = null) {
                return !0 === navigator.onLine || void 0 === navigator.onLine ? Promise.resolve() : (0, s.respectAbort)(t, new Promise(t => {
                    const e = () => {
                        window.removeEventListener("online", e), t()
                    };
                    window.addEventListener("online", e)
                }))
            }
        },
        4516: (t, e, n) => {
            "use strict";
            var s = n(75443),
                o = n(541962).TVXWindowEvents,
                i = n(929098).trackEvent,
                r = n(655119).TVLocalStorage,
                a = n(504021).PushStream,
                c = n(805958).ConnectionStatus,
                h = n(110164).telemetry,
                l = n(987380),
                u = l.getLogger,
                _ = l.getRawLogHistory,
                d = u("PushStreamMultiplexer"),
                m = function() {
                    var t, e = null,
                        n = null,
                        l = {},
                        u = {},
                        m = [],
                        g = null,
                        f = "multiplexer-bc-",
                        p = "pushStreamMultiplexerState.",
                        C = c.Closed,
                        v = c.Closed,
                        S = !1,
                        w = {
                            _codeParams: function(t) {
                                return (t = Array.prototype.slice.call(t)).push((new Date).getTime()), JSON.stringify(t)
                            },
                            _decodeParams: function(t) {
                                var e = JSON.parse(t);
                                return e.pop(), e
                            },
                            guid: s.guid(),
                            _init: function() {
                                if (this._needInstantiating()) this._instantiatePushStream();
                                else {
                                    var t = this._decodeConnectionStatus(r.getItem(this._connectionStatusKey));
                                    C = t[0], v = t[1]
                                }
                                setTimeout((function() {
                                    w.isConnected() || (d.logNormal("Not connected for a while after init..."), i("pushstream", "not connected after init", navigator.userAgent))
                                }), w._activityTimeout)
                            },
                            _instantiatePushStream: function(t) {
                                this._setMark(), e && (i("PushstreamDoublePublic", window.user && window.user.username || "Guest", navigator.userAgent), e.disconnect()), (e = new a(this._dispatchMessage.bind(this), {
                                        url: window.PUSHSTREAM_URL,
                                        urlPath: "message-pipe-ws"
                                    })).connectionStatus().subscribe(function(t) {
                                        this._dispatchStatusChange(t, v)
                                    }.bind(this)), n && (i("PushstreamDoublePrivate", window.user && window.user.username || "Guest", navigator.userAgent), n.disconnect()), (n = new a(this._dispatchMessage.bind(this), {
                                        url: window.PUSHSTREAM_URL,
                                        urlPath: "message-pipe-ws"
                                    })).connectionStatus().subscribe(function(t) {
                                        this._dispatchStatusChange(C, t)
                                    }.bind(this)),
                                    this.on("pushstream_set_user_channel", function(t) {
                                        this._setUserChannel(t)
                                    }.bind(this)), this._connectChannels(t)
                            },
                            _destructPushStream: function() {
                                var t = e;
                                e = null, t.disconnect(), t = n, n = null, t.disconnect(), this._dispatchStatusChangeFromOther(r.getItem(this._connectionStatusKey))
                            },
                            _activityTimeout: 5e3,
                            _delayTimeout: 2e4,
                            _pulseActivity: function() {
                                this.ownPushStream() ? this._lostOwn() ? (d.logNormal("Lost own pushstream connection"), h.sendReport("site", "pushstream_lost_own"), this._destructPushStream()) : this._setMark() : this._needInstantiating() && !S && (d.logNormal("Creating pushstream connection, because other tab lost it"), h.sendReport("site", "pushstream_pick_up"), this._instantiatePushStream(this.getChannels()))
                            },
                            _markName: p + "mark",
                            _lostOwn: function() {
                                var t = r.getItem(this._markName);
                                return !!t && (t = this._decodeParams(t))[0] !== this.guid
                            },
                            _getMark: function() {
                                return this._decodeParams(r.getItem(this._markName))
                            },
                            _setMark: function() {
                                r.setItem(this._markName, this._codeParams([this.guid, (new Date).getTime()]))
                            },
                            _unsetMark: function() {
                                r.setItem(this._markName, "")
                            },
                            _needInstantiating: function() {
                                var t = r.getItem(this._markName);
                                if (t) {
                                    var e = (t = this._decodeParams(t))[1];
                                    return (new Date).getTime() - e > this._delayTimeout
                                }
                                return !0
                            },
                            _onRequestRecreate: function(t) {
                                if (!this.ownPushStream() && this._needInstantiating()) {
                                    var e = this._decodeParams(t)[0];
                                    d.logNormal("Creating pushstream connection after recreate request"), this._instantiatePushStream(e)
                                }
                            },
                            _onUnload: function() {
                                this.ownPushStream() && (this._unsetMark(), this._sendRecreateRequest())
                            },
                            _getChannels: function() {
                                return e.getChannels().concat(n.getChannels())
                            },
                            _channelsName: p + "channels",
                            _getChannelsFromStorage: function() {
                                var t = r.getItem(this._channelsName);
                                return t ? JSON.parse(t) : []
                            },
                            getChannels: function() {
                                return this.ownPushStream() ? this._getChannels() : this._getChannelsFromStorage()
                            },
                            _storeChannels: function() {
                                r.setItem(this._channelsName, JSON.stringify(this._getChannels()))
                            },
                            _sendRecreateRequest: function() {
                                var t = this._getChannels();
                                o.emit(this._xEventRecreate, this._codeParams([t]))
                            },
                            ownPushStream: function() {
                                return !!e || !!n
                            },
                            pushStream: function() {
                                if (!this.ownPushStream()) throw new Error("Not own PushStream");
                                return e
                            },
                            isConnected: function() {
                                return C > 0
                            },
                            status: function() {
                                return C || c.Closed
                            },
                            statusPrivate: function() {
                                return v || c.Closed
                            },
                            _userChannel: function(t) {
                                return "private_" + t
                            },
                            userChannel: function() {
                                if (!g) throw new Error("No user channel");
                                return this._userChannel(g)
                            },
                            _xEventRecreate: f + "recreate",
                            _xEventSend: f + "send",
                            _xEventChannelAdd: f + "channelAdd",
                            _xEventChannelRemove: f + "channelRemove",
                            _xEventRequiredChannels: f + "requirech",
                            _xEventConnectionStatus: f + "connectionStatus",
                            _xEventReconnectCommand: f + "reconnectCommand",
                            _xEventRequestLogs: f + "requestLogs",
                            _xEventShareLogs: f + "shareLogs",
                            _shareLogsKey: p + "shareLogs",
                            _connectionStatusKey: p + "connectionStatus",
                            _addChannel: function(t) {
                                var s = t.startsWith("private_") ? n : e;
                                s.hasChannel(t) || (s.addChannel(t), this._storeChannels())
                            },
                            addChannel: function(t) {
                                this.ownPushStream() ? this._addChannel(t) : o.emit(this._xEventChannelAdd, this._codeParams([t]))
                            },
                            _addChannelFromOther: function(t) {
                                var e = this._decodeParams(t)[0];
                                this.ownPushStream() && this._addChannel(e)
                            },
                            _removeChannel: function(t) {
                                var s = t.startsWith("private_") ? n : e;
                                s.hasChannel(t) && (s.removeChannel(t), this._storeChannels())
                            },
                            removeChannel: function(t) {
                                this.ownPushStream() ? this._removeChannel(t) : o.emit(this._xEventChannelRemove, this._codeParams([t]))
                            },
                            _removeChannelFromOther: function(t) {
                                var e = this._decodeParams(t)[0];
                                this.ownPushStream() && this._removeChannel(e)
                            },
                            _connectChannels: function(t) {
                                e.addChannel("public"), void 0 !== t && t.length > 0 && t.forEach((function(t) {
                                    t.startsWith("private_") || e.hasChannel(t) || e.addChannel(t)
                                })), "is_authenticated" in window ? this._connectUserChannelInitial(!0) : window.loginStateChange && loginStateChange.subscribe(this, this._connectUserChannelInitial), e.connect()
                            },
                            _connectUserChannelInitial: function(t) {
                                t && (is_authenticated ? (g = user.private_channel, n.addChannel(this.userChannel()), n.connect()) : g = null)
                            },
                            _changeLoginState: function(t) {
                                t || (is_authenticated ? (g = user.private_channel, this.ownPushStream() && (this._addChannel(this.userChannel()), n.connect())) : (this.ownPushStream() && (this._removeChannel(this.userChannel()), n.disconnect()), g = null))
                            },
                            _setUserChannel: function(t) {
                                d.logNormal("Set user channel " + t), t !== g && (this.ownPushStream() && g && this._removeChannel(this.userChannel()), g = t, this.ownPushStream() && g && this._addChannel(this.userChannel()))
                            },
                            _dispatchStatusChange: function(t, e) {
                                this._dispatchStatusChangeToOthers(t, e), this._dispatchStatusChangeToSelf(t, e)
                            },
                            _dispatchStatusChangeToSelf: function(t, e) {
                                t !== C && (C = t, this._callStatusHandlers(t, !1)), e !== v && (v = e, this._callStatusHandlers(e, !0))
                            },
                            _callStatusHandlers: function(t, e) {
                                d.logNormal("Connection status change: " + t + ", private " + e), h.sendReport("site", "pushstream_status_change"), m.forEach((function(n) {
                                    n.isPrivate === e && n.handler(t)
                                }))
                            },
                            _decodeConnectionStatus: function(t) {
                                var e = parseInt(t, 10);
                                return isNaN(e) ? this._decodeParams(t) : [e, e]
                            },
                            _dispatchStatusChangeFromOther: function(t) {
                                var e = this._decodeConnectionStatus(t),
                                    n = e[0],
                                    s = e[1];
                                this.ownPushStream() || this._dispatchStatusChangeToSelf(n, s)
                            },
                            _dispatchStatusChangeToOthers: function(t, e) {
                                if (this.ownPushStream()) {
                                    var n = this._codeParams([t, e]);
                                    r.setItem(this._connectionStatusKey, n), o.emit(this._xEventConnectionStatus, n)
                                }
                            },
                            _dispatchMessage: function(t, e, n) {
                                this._dispatchMessageToOthers(t, e, n), this._dispatchMessageToSelf(t, e, n, !1)
                            },
                            _dispatchMessageToSelf: function(t, e, n, s) {
                                n = t.channel, t = t.content, this._emit(t, e, n, s)
                            },
                            _dispatchMessageToOthers: function(t, e, n) {
                                var s = [t, e, n, (new Date).getTime()];
                                o.emit(this._xEventSend, this._codeParams(s))
                            },
                            _dispatchMessageFromOther: function(t) {
                                if (!this.ownPushStream()) {
                                    var e = this._decodeParams(t),
                                        n = e[0],
                                        s = e[1],
                                        o = e[2];
                                    this._dispatchMessageToSelf(n, s, o, !0)
                                }
                            },
                            _isSpecialChannel: function(t) {
                                return /\*/.test(t)
                            },
                            _emit: function(t, e, n, s) {
                                function o(o) {
                                    o.call(this, t, e, n, s)
                                }
                                for (var i in l[n] && l[n].forEach(o, this), u) {
                                    var r = "^" + i.replace(/\*/g, ".*?") + "$";
                                    new RegExp(r).test(n) && u[i].forEach(o, this)
                                }
                            },
                            on: function(t, e) {
                                var n = this._isSpecialChannel(t) ? u : l;
                                n[t] || (n[t] = []), n[t].push(e)
                            },
                            off: function(t, e) {
                                var n = this._isSpecialChannel(t) ? u : l;
                                switch (arguments.length) {
                                    case 0:
                                        l = {}, u = {};
                                        break;
                                    case 1:
                                        n[t] && delete n[t];
                                        break;
                                    default:
                                        if (n[t]) {
                                            var s = n[t].indexOf(e);
                                            ~s && n[t].splice(s, 1)
                                        }
                                }
                            },
                            onStatus: function(t) {
                                m.push({
                                    handler: t,
                                    isPrivate: !1
                                }), setTimeout((function() {
                                    t(C)
                                }), 0)
                            },
                            onPrivateStatus: function(t) {
                                m.push({
                                    handler: t,
                                    isPrivate: !0
                                }), setTimeout((function() {
                                    t(v)
                                }), 0)
                            },
                            offStatus: function(t) {
                                m = m.filter((function(e) {
                                    return e.handler !== t
                                }))
                            },
                            forceConnect: function() {
                                S = !1, d.logNormal("Creating pushstream connection after force connect"), this.ownPushStream() ? (e.disconnect(), n.disconnect(), this._instantiatePushStream(this.getChannels())) : this._needInstantiating() ? this._instantiatePushStream() : o.emit(this._xEventReconnectCommand, {})
                            },
                            disconnect: function() {
                                this.ownPushStream() && (this._destructPushStream(), this._unsetMark(), S = !0)
                            },
                            _dispatchReconnectCommandFromOther: function() {
                                this.ownPushStream() && this.forceConnect()
                            },
                            _getOwnLogs: function(t) {
                                if (this.ownPushStream()) {
                                    var e = _(t, "PushStreamMultiplexer"),
                                        n = this.pushStream().getLogs();
                                    return [].concat(e, n)
                                }
                                return []
                            },
                            _onRequestLogs: function(t) {
                                if (this.ownPushStream()) {
                                    var e = this._getOwnLogs(t),
                                        n = "";
                                    try {
                                        n = JSON.stringify(e)
                                    } catch (t) {
                                        d.logError("Failed to stringify own pushstream logs")
                                    }
                                    r.setItem(this._shareLogsKey, n), o.emit(this._xEventShareLogs, n)
                                }
                            },
                            getLogs: function(t) {
                                return new Promise(function(e) {
                                    var n = setTimeout(function() {
                                            var t = r.getItem(this._shareLogsKey);
                                            e(null !== t ? JSON.parse(t) : [])
                                        }.bind(this), 1e3),
                                        s = function(t) {
                                            var i;
                                            o.off(this._xEventShareLogs, s), o.emit(this._xEventShareLogs, ""), clearTimeout(n);
                                            try {
                                                i = JSON.parse(t)
                                            } catch (t) {
                                                i = [], d.logError("Failed to parse logs received from master tab")
                                            }
                                            e(i)
                                        }.bind(this);
                                    this.ownPushStream() ? e(this._getOwnLogs(t)) : (o.on(this._xEventShareLogs, s), o.emit(this._xEventRequestLogs))
                                }.bind(this))
                            }
                        };
                    return w._init(), window.addEventListener("unload", w._onUnload.bind(w)), o.on(w._xEventRecreate, w._onRequestRecreate.bind(w)), o.on(w._xEventSend, w._dispatchMessageFromOther.bind(w)), o.on(w._xEventChannelAdd, w._addChannelFromOther.bind(w)), o.on(w._xEventChannelRemove, w._removeChannelFromOther.bind(w)), o.on(w._xEventConnectionStatus, w._dispatchStatusChangeFromOther.bind(w)), o.on(w._xEventReconnectCommand, w._dispatchReconnectCommandFromOther.bind(w)), o.on(w._xEventRequestLogs, w._onRequestLogs.bind(w)), t = function() {
                        window.loginStateChange && loginStateChange.subscribe(w, w._changeLoginState)
                    }, "loading" !== document.readyState ? t() : document.addEventListener("DOMContentLoaded", t), setInterval(w._pulseActivity.bind(w), w._activityTimeout), w._pulseActivity(), w
                }();
            t.exports = m
        },
        504021: (t, e, n) => {
            "use strict";
            n.d(e, {
                PushStream: () => a
            });
            var s = n(416282),
                o = n(99020),
                i = n(987380);
            const r = (0, i.getLogger)("PushStream");
            class a {
                constructor(t, e) {
                    this._channels = [], this._transport = new o.PersistentWebsocketTransport(this._onPushStreamMessage.bind(this)), this._settings = e, this._messageHandler = t
                }
                addChannel(t) {
                    (0, s.assert)(!this.hasChannel(t), "Channel already subscribed"), r.logNormal("Adding channel " + t), this._channels.push(t), this._transport.setUrl(this._generateUrl())
                }
                removeChannel(t) {
                    const e = this._channels.indexOf(t);
                    (0, s.assert)(-1 !== e, "There is no that channel"), r.logNormal("Removing channel " + t), this._channels.splice(e, 1), this._transport.setUrl(this._generateUrl())
                }
                getChannels() {
                    return this._channels
                }
                hasChannel(t) {
                    return -1 !== this._channels.indexOf(t)
                }
                connectionStatus() {
                    return this._transport.connectionStatus()
                }
                connect() {
                    (0, s.assert)(0 !== this._channels.length, "There is no channels"), this._transport.connect()
                }
                disconnect() {
                    this._transport.disconnect()
                }
                sendMessage(t) {
                    this._transport.sendMessage(t)
                }
                getLogs(t) {
                    return (0, i.getRawLogHistory)(t, "PushStream")
                }
                _onPushStreamMessage(t) {
                    if ("string" != typeof t) throw new Error("Wrong message type, expected string");
                    const e = JSON.parse(t),
                        n = e.id,
                        s = e.channel; - 2 === n ? r.logWarn("Received unexpected message: about removed the channel") : n > 0 && (r.logDebug(`Received message: id="${n}" channel="${s}"`), this._messageHandler(e.text, n, s))
                }
                _generateUrl() {
                    const t = this._channels.join("/");
                    return `${this._settings.url}/${this._settings.urlPath}/${t}`
                }
            }
        },
        110164: (t, e, n) => {
            "use strict";
            n.d(e, {
                telemetry: () => u
            });
            var s = n(896276),
                o = n.n(s),
                i = n(685864),
                r = n(968724),
                a = n(640142);
            n(265194);
            const c = (0, n(987380).getLogger)("Common.Telemetry"),
                h = {
                    default: 15e3,
                    site: 3e5
                },
                l = ["before_websocket_connection_time_frame", "websocket_connection_time_frame", "first_series_full_time_frame", "page_full_load_time_frame", "page_load_time_frame"];
            const u = new class {
                constructor() {
                    this.reportSent = new(o()), this.timeCounters = {
                        series: {
                            marks: []
                        },
                        study: {},
                        pine: {}
                    }, this._timeoutIds = {}, this._commonAdditionalData = {
                        cluster: null,
                        userId: "0"
                    }, this._reportStash = {}
                }
                setSessionInfo(t) {
                    const e = this._parseCluster(t);
                    null !== e && (this._commonAdditionalData.cluster = e)
                }
                sendReport(t, e, n) {
                    var s;
                    if (!this._isAbleToSendReport(e)) return;
                    const o = this._getSubserviceType(t),
                        i = this._getHost(t, o);
                    if (null !== i) {
                        if (n = void 0 === n ? {
                                count: 1
                            } : n, this._addReportToStash(n, e, i), !this._timeoutIds[t]) {
                            const e = null !== (s = h[t]) && void 0 !== s ? s : h.default;
                            this._timeoutIds[t] = setTimeout(this._sendTelemetryToService.bind(this, t, i), e)
                        }
                    } else c.logError(`Unable to get host for counter: ${e}, metric type: ${t}, serivce type: ${o}`)
                }
                sendChartReport(t, e, n = !0) {
                    this._updateUserInfo(), e = void 0 === e ? {
                        count: 1
                    } : e, n && (e = this._appendCommonAdditionalInfo(e, ["cluster", "userId"])), this.sendReport("charts", t, e)
                }
                _updateUserInfo() {
                    const t = "user" in window && "id" in window.user ? window.user.id : "0";
                    this._commonAdditionalData.userId = String(t)
                }
                _isAbleToSendReport(t) {
                    const e = window.TELEMETRY_HOSTS,
                        n = l.includes(t),
                        s = Boolean(window.TradingView.onChartPage || (0, r.onWidget)());
                    return e && (!n || s)
                }
                _sendTelemetryToService(t, e) {
                    if (this._reportStash.hasOwnProperty(e)) {
                        const t = this._cropParams(this._reportStash[e]),
                            n = this._renameAllParams(t),
                            s = {
                                event: "report_stash",
                                params: this._cleanAllParams(n)
                            };
                        c.logDebug(`Report to host: ${e}; stash: ${JSON.stringify(this._reportStash[e])}`), this.reportSent.fire(this._reportStash[e]), delete this._reportStash[e], (0, i.fetch)(e + "/report", {
                            method: "POST",
                            body: JSON.stringify(s)
                        })
                    }
                    this._timeoutIds[t] = null
                }
                _getHost(t, e) {
                    const n = window.TELEMETRY_HOSTS,
                        s = n[t] && n[t][e];
                    return Boolean(s) ? s : null
                }
                _getSubserviceType(t) {
                    if (!["charts", "site"].includes(t)) return "all";
                    let e = "free";
                    const n = window.user.is_pro;
                    return "charts" === t && (0, a.isOnMobileAppPage)("old") ? e = n ? "ios_pro" : "ios_free" : "charts" === t && (0, a.isOnMobileAppPage)("new") ? e = n ? "android_pro" : "android_free" : (0, r.onWidget)() ? e = "widget" : n && (e = "pro"), e
                }
                _parseCluster(t) {
                    let e;
                    try {
                        e = JSON.parse(t).session_id
                    } catch (t) {
                        return c.logError("Could not parse cluster id (session id)"), null
                    }
                    const n = /(.*@)(.*)/gi.exec(e);
                    return null !== n && n.length >= 3 ? n[2] : null
                }
                _appendCommonAdditionalInfo(t, e) {
                    return e.forEach(e => {
                        e in this._commonAdditionalData && (t.additional = t.additional || {}, t.additional[e] = this._commonAdditionalData[e])
                    }), t
                }
                _cropParams(t) {
                    var e;
                    for (const n in t) t.hasOwnProperty(n) && t[n].length > 1e3 && (t.too_much_metrics_frame = null !== (e = t.too_much_metrics_frame) && void 0 !== e ? e : [], t.too_much_metrics_frame.push({
                        value: t[n].length,
                        additional: {
                            event: n
                        }
                    }), delete t[n]);
                    return t
                }
                _renameAllParams(t) {
                    const e = {};
                    for (const n in t) t.hasOwnProperty(n) && (e[n] = [], t[n].forEach(t => {
                        e[n].push(this._renameEntryParams(t))
                    }));
                    return e
                }
                _renameEntryParams(t) {
                    const e = {
                        count: "c",
                        value: "v",
                        text: "t",
                        additional: "a"
                    };
                    return Object.keys(t).reduce((n, s) => (n[e[s]] = t[s], n), {})
                }
                _cleanAllParams(t) {
                    const e = {};
                    for (const n in t)
                        if (t.hasOwnProperty(n)) {
                            e[n] = [];
                            const s = {
                                c: 0
                            };
                            t[n].forEach(t => {
                                const o = this._cleanEntryParams(t),
                                    i = Object.keys(o).length;
                                1 === i && void 0 !== o.c ? s.c += o.c : i > 0 && e[n].push(o)
                            }), s.c > 0 && e[n].push(s), 0 === e[n].length && delete e[n]
                        }
                    return e
                }
                _cleanEntryParams(t) {
                    const e = Object.keys(t).reduce((e, n) => "c" !== n && "t" !== n || t[n] ? (e[n] = t[n], e) : e, {});
                    return "c" in e || "v" in e || "t" in e ? e : {}
                }
                _addReportToStash(t, e, n) {
                    n in this._reportStash || (this._reportStash[n] = {}), e in this._reportStash[n] || (this._reportStash[n][e] = []), Object.keys(t).length > 0 && this._reportStash[n][e].push(t)
                }
            }
        }
    }
]);