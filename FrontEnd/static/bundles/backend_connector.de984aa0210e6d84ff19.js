(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [47491, 10981], {
        461806: (e, t, n) => {
            "use strict";
            var s = n(228822);
            window.WSBackendConnection = new s.WSBackendConnection(window.WEBSOCKET_HOST, {
                pingRequired: window.WS_HOST_PING_REQUIRED,
                proHost: window.WEBSOCKET_PRO_HOST,
                reconnectHost: window.WEBSOCKET_HOST_FOR_RECONNECT,
                initialHost: window.WEBSOCKET_INITIAL_HOST
            }), window.WSBackendConnectionCtor = s.WSBackendConnection
        },
        898388: (e, t, n) => {
            "use strict";

            function s(e) {
                let t = null;
                return (n, ...s) => (null == t || t.abort(), t = new AbortController, null == n || n.addEventListener("error", () => null == t ? void 0 : t.abort(), {
                    once: !0
                }), e(t.signal, ...s))
            }

            function o(e) {
                if (!h(e)) throw e
            }

            function i(e) {
                if (h(e)) throw e
            }

            function r(e) {
                return (null == e ? void 0 : e.aborted) ? Promise.reject(c()) : new Promise((t, n) => {
                    null == e || e.addEventListener("abort", () => n(c()), {
                        once: !0
                    })
                })
            }

            function c() {
                return new DOMException("Aborted", "AbortError")
            }

            function h(e) {
                return e instanceof Error && "AbortError" === e.name
            }

            function a(e, t) {
                return Promise.race([r(e), t])
            }
            async function l(e, t) {
                let n;
                try {
                    await a(e, new Promise(e => {
                        n = setTimeout(e, t)
                    }))
                } finally {
                    clearTimeout(n)
                }
            }
            n.d(t, {
                respectLatest: () => s,
                skipAbortError: () => o,
                rethrowAbortError: () => i,
                createAbortError: () => c,
                isAbortError: () => h,
                respectAbort: () => a,
                delay: () => l
            })
        },
        382713: (e, t, n) => {
            "use strict";
            n.d(t, {
                callWhenOnline: () => o,
                waitForOnline: () => i
            });
            var s = n(898388);

            function o(e) {
                let t = e;
                const n = () => {
                    window.removeEventListener("online", n), t && t()
                };
                return window.addEventListener("online", n), () => {
                    t = null
                }
            }
            async function i(e = null) {
                return !0 === navigator.onLine || void 0 === navigator.onLine ? Promise.resolve() : (0, s.respectAbort)(e, new Promise(e => {
                    const t = () => {
                        window.removeEventListener("online", t), e()
                    };
                    window.addEventListener("online", t)
                }))
            }
        },
        932010: (e, t, n) => {
            "use strict";

            function s(e, t, n, s, o) {
                let i = "";
                if (s = s ? "; path=" + s : "", o = o ? "; domain=" + o : "", n) {
                    const e = new Date;
                    e.setTime(e.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + e.toUTCString()
                } else i = "";
                document.cookie = e + "=" + t + i + o + s
            }

            function o(e) {
                const t = e + "=",
                    n = document.cookie.split(";");
                for (let e = 0; e < n.length; e++) {
                    let s = n[e];
                    for (;
                        " " === s.charAt(0);) s = s.substring(1, s.length);
                    if (0 === s.indexOf(t)) return s.substring(t.length, s.length)
                }
                return null
            }
            n.d(t, {
                set: () => s,
                get: () => o
            })
        },
        640142: (e, t, n) => {
            "use strict";
            n.d(t, {
                isOnMobileAppPage: () => o,
                urlWithMobileAppParams: () => i
            });
            var s = n(932010);

            function o(e, t = !1) {
                const {
                    searchParams: n
                } = new URL(String(location)), o = s.get("tv_app") || "";
                let i = "true" === n.get("mobileapp_new"),
                    r = "true" === n.get("mobileapp");
                return t || (i || (i = ["android", "android_nps"].includes(o)), r || (r = "ios" === o)), !("new" !== e && "any" !== e || !i) || !("new" === e || !r)
            }

            function i(e) {
                if (o("new")) {
                    const t = new URL(e, location.href);
                    t.searchParams.set("mobileapp_new", "true"), e = t.toString()
                }
                if (o("old")) {
                    const t = new URL(e, location.href);
                    t.searchParams.set("mobileapp", "true"), e = t.toString()
                }
                return e
            }
        },
        228822: (e, t, n) => {
            "use strict";
            n.d(t, {
                WSBackendConnection: () => a
            });
            var s = n(640142);
            const o = () => {};
            class i {
                constructor(e, t = {}) {
                    this.sessionid = null, this.connected = !1, this._timeout = null, this._base = e, this._options = {
                        timeout: 2e4,
                        ...t
                    }
                }
                connect() {
                    this._socket = new WebSocket(this._prepareUrl()), this._socket.onmessage = e => {
                        if ("string" != typeof e.data) throw new TypeError("The WebSocket message should be a string. Recieved " + Object.prototype.toString.call(e.data));
                        this._onData(e.data)
                    }, this._socket.onclose = this._onClose.bind(this), this._socket.onerror = this._onError.bind(this)
                }
                send(e) {
                    this._socket && this._socket.send(this._encode(e))
                }
                disconnect() {
                    this._clearIdleTimeout(), this._socket && (this._socket.onmessage = o, this._socket.onclose = o, this._socket.onerror = o, this._socket.close())
                }
                _clearIdleTimeout() {
                    null !== this._timeout && (clearTimeout(this._timeout), this._timeout = null)
                }
                _encode(e) {
                    let t, n = "";
                    const s = Array.isArray(e) ? e : [e],
                        o = s.length;
                    for (let e = 0; e < o; e++) t = null === s[e] || void 0 === s[e] ? "" : i._stringify(s[e]), n += "~m~" + t.length + "~m~" + t;
                    return n
                }
                _decode(e) {
                    const t = [];
                    let n, s;
                    do {
                        if ("~m~" !== e.substring(0, 3)) return t;
                        n = "", s = "";
                        const o = (e = e.substring(3)).length;
                        for (let t = 0; t < o; t++) {
                            if (s = Number(e.substring(t, t + 1)), Number(e.substring(t, t + 1)) !== s) {
                                e = e.substring(n.length + "~m~".length), n = Number(n);
                                break
                            }
                            n += s
                        }
                        t.push(e.substring(0, n)), e = e.substring(n)
                    } while ("" !== e);
                    return t
                }
                _onData(e) {
                    this._setTimeout();
                    const t = this._decode(e),
                        n = t.length;
                    for (let e = 0; e < n; e++) this._onMessage(t[e])
                }
                _setTimeout() {
                    this._clearIdleTimeout(), this._timeout = setTimeout(this._onTimeout.bind(this), this._options.timeout)
                }
                _onTimeout() {
                    this.disconnect(), this._onDisconnect({
                        code: 4e3,
                        reason: "socket.io timeout",
                        wasClean: !1
                    })
                }
                _onMessage(e) {
                    this.sessionid ? this._checkIfHeartbeat(e) ? this._onHeartbeat(e.slice(3)) : this._checkIfJson(e) ? this._base.onMessage(JSON.parse(e.slice(3))) : this._base.onMessage(e) : (this.sessionid = e, this._onConnect())
                }
                _checkIfHeartbeat(e) {
                    return this._checkMessageType(e, "h")
                }
                _checkIfJson(e) {
                    return this._checkMessageType(e, "j")
                }
                _checkMessageType(e, t) {
                    return e.substring(0, 3) === "~" + t + "~"
                }
                _onHeartbeat(e) {
                    this.send("~h~" + e)
                }
                _onConnect() {
                    this.connected = !0, this._base.onConnect()
                }
                _onDisconnect(e) {
                    this._clear(), this._base.onDisconnect(e), this.sessionid = null
                }
                _clear() {
                    this.connected = !1
                }
                _prepareUrl() {
                    return `wss://${this._base.host}/socket.io/websocket` + (this.sessionid ? "/" + this.sessionid : "") + "?from=" + encodeURIComponent(window.location.pathname.slice(1, 50)) + "&date=" + encodeURIComponent(window.BUILD_TIME || "") + ((0, s.isOnMobileAppPage)("any") ? "&client=mobile" : "")
                }
                _onClose(e) {
                    this._clearIdleTimeout(), this._onDisconnect(e)
                }
                _onError(e) {
                    this._clearIdleTimeout(), this._clear(), this._base.emit("error", [e]), this.sessionid = null
                }
                static _stringify(e) {
                    return "[object Object]" === Object.prototype.toString.call(e) ? "~j~" + JSON.stringify(e) : String(e)
                }
            }
            class r {
                constructor(e, t) {
                    this.host = e, this.options = {
                        connectTimeout: 5e3,
                        ...t
                    }, this._connecting = !1, this._events = {}, this.transport = this._getTransport()
                }
                isConnected() {
                    return !!this.transport && this.transport.connected
                }
                isConnecting() {
                    return this._connecting
                }
                connect() {
                    this.isConnected() || (this._connecting && this.disconnect(), this._connecting = !0, this.transport.connect())
                }
                send(e) {
                    this.transport && this.transport.connected && this.transport.send(e)
                }
                disconnect() {
                    this.transport && this.transport.disconnect()
                }
                on(e, t) {
                    e in this._events || (this._events[e] = []), this._events[e].push(t)
                }
                offAll() {
                    this._events = {}
                }
                onMessage(e) {
                    this.emit("message", [e])
                }
                emit(e, t = []) {
                    if (e in this._events) {
                        const n = this._events[e].concat(),
                            s = n.length;
                        for (let e = 0; e < s; e++) n[e].apply(this, t)
                    }
                }
                onConnect() {
                    this.clear(), this.emit("connect")
                }
                onDisconnect(e) {
                    this.emit("disconnect", [e])
                }
                clear() {
                    this._connecting = !1
                }
                _getTransport() {
                    return new i(this)
                }
            }
            var c = n(382713);
            const h = Number(window.TELEMETRY_WS_ERROR_LOGS_THRESHOLD) || 0;
            class a {
                constructor(e, t = {}) {
                    this._queueStack = [], this._logsQueue = [], this._telemetryObjectsQueue = [], this._reconnectCount = 0, this._redirectCount = 0, this._errorsCount = 0, this._errorsInfoSent = !1, this._connectionStart = null, this._connectionEstablished = null, this._reconnectTimeout = null, this._onlineCancellationToken = null, this._initialHost = t.initialHost || null, this._suggestedHost = e, this._proHost = t.proHost, this._reconnectHost = t.reconnectHost, this._doConnect(), t.pingRequired && -1 === window.location.search.indexOf("noping") && this._startPing()
                }
                connect() {
                    this._tryConnect()
                }
                resetCounters() {
                    this._reconnectCount = 0, this._redirectCount = 0
                }
                setLogger(e, t) {
                    this._logger = e, this._getLogHistory = t, this._flushLogs()
                }
                setTelemetry(e) {
                    this._telemetry = e, this._telemetry.reportSent.subscribe(this, this._onTelemetrySent), this._flushTelemetry()
                }
                onReconnect(e) {
                    this._onReconnect = e
                }
                isConnected() {
                    return !!this._socket && this._socket.isConnected()
                }
                isConnecting() {
                    return !!this._socket && this._socket.isConnecting()
                }
                on(e, t) {
                    return !!this._socket && ("connect" === e && this._socket.isConnected() ? t() : "disconnect" === e ? this._disconnectCallbacks.push(t) : this._socket.on(e, t), !0)
                }
                getSessionId() {
                    return this._socket && this._socket.transport ? this._socket.transport.sessionid : null
                }
                send(e) {
                    return this.isConnected() ? (this._socket.send(e), !0) : (this._queueMessage(e), !1)
                }
                getConnectionEstablished() {
                    return this._connectionEstablished
                }
                getHost() {
                    const e = this._tryGetProHost();
                    return null !== e ? e : this._reconnectHost && this._reconnectCount > 3 ? this._reconnectHost : this._suggestedHost
                }
                getReconnectCount() {
                    return this._reconnectCount
                }
                getRedirectCount() {
                    return this._redirectCount
                }
                getConnectionStart() {
                    return this._connectionStart
                }
                disconnect() {
                    this._clearReconnectTimeout(), (this.isConnected() || this.isConnecting()) && (this._propagateDisconnect(), this._disconnectCallbacks = [], this._closeSocket())
                }
                isMaxRedirects() {
                    return this._redirectCount >= 20
                }
                isMaxReconnects() {
                    return this._reconnectCount >= 20
                }
                getPingInfo() {
                    return this._pingInfo || null
                }
                _tryGetProHost() {
                    return window.TradingView && window.TradingView.onChartPage && "battle" === window.environment && !this._redirectCount && -1 === window.location.href.indexOf("ws_host") ? this._initialHost ? this._initialHost : void 0 !== window.user && window.user.pro_plan ? this._proHost || this._suggestedHost : null : null
                }
                _queueMessage(e) {
                    0 === this._queueStack.length && this._logMessage(0, "Socket is not connected. Queued a message"), this._queueStack.push(e)
                }
                _processMessageQueue() {
                    0 !== this._queueStack.length && (this._logMessage(0, "Processing queued messages"), this._queueStack.forEach(this.send.bind(this)),
                        this._logMessage(0, "Processed " + this._queueStack.length + " messages"), this._queueStack = [])
                }
                _onDisconnect(e) {
                    null === this._reconnectTimeout && (this._reconnectTimeout = setTimeout(this._tryReconnect.bind(this), 5e3)), this._clearOnlineCancellationToken();
                    let t = "disconnect session:" + this.getSessionId();
                    e && (t += ", code:" + e.code + ", reason:" + e.reason), this._logMessage(0, t), this._propagateDisconnect(e), this._closeSocket(), this._queueStack = []
                }
                _closeSocket() {
                    null !== this._socket && (this._socket.offAll(), this._socket.disconnect(), this._socket = null)
                }
                _logMessage(e, t) {
                    const n = {
                        method: e,
                        message: t
                    };
                    this._logger ? this._flushLogMessage(n) : (n.message = `[${(new Date).toISOString()}] ${n.message}`, this._logsQueue.push(n))
                }
                _flushLogMessage(e) {
                    switch (e.method) {
                        case 2:
                            this._logger.logDebug(e.message);
                            break;
                        case 3:
                            this._logger.logError(e.message);
                            break;
                        case 0:
                            this._logger.logInfo(e.message);
                            break;
                        case 1:
                            this._logger.logNormal(e.message)
                    }
                }
                _flushLogs() {
                    this._flushLogMessage({
                        method: 1,
                        message: "messages from queue. Start."
                    }), this._logsQueue.forEach(e => {
                        this._flushLogMessage(e)
                    }), this._flushLogMessage({
                        method: 1,
                        message: "messages from queue. End."
                    }), this._logsQueue = []
                }
                _sendTelemetry(e, t) {
                    const n = {
                        event: e,
                        params: t
                    };
                    this._telemetry ? this._flushTelemetryObject(n) : this._telemetryObjectsQueue.push(n)
                }
                _flushTelemetryObject(e) {
                    this._telemetry.sendChartReport(e.event, e.params, !1)
                }
                _flushTelemetry() {
                    this._telemetryObjectsQueue.forEach(e => {
                        this._flushTelemetryObject(e)
                    }), this._telemetryObjectsQueue = []
                }
                _doConnect() {
                    this._socket && (this._socket.isConnected() || this._socket.isConnecting()) || (this._clearOnlineCancellationToken(), this._host = this.getHost(), this._socket = new r(this._host, {}), this._logMessage(0, "Connecting to " + this._host), this._bindEvents(), this._disconnectCallbacks = [], this._connectionStart = performance.now(), this._connectionEstablished = null, this._socket.connect())
                }
                _propagateDisconnect(e) {
                    const t = this._disconnectCallbacks.length;
                    for (let n = 0; n < t; n++) this._disconnectCallbacks[n](e || {})
                }
                _bindEvents() {
                    this._socket && (this._socket.on("connect", () => {
                        const e = this.getSessionId();
                        if ("string" == typeof e) {
                            const t = JSON.parse(e);
                            if (t.redirect) return this._redirectCount += 1, this._suggestedHost = t.redirect, this.isMaxRedirects() && this._sendTelemetry("redirect_bailout"), void this._redirect()
                        }
                        this._connectionEstablished = performance.now(), this._processMessageQueue(), this._logMessage(0, "connect session:" + e)
                    }), this._socket.on("disconnect", this._onDisconnect.bind(this)), this._socket.on("close", this._onDisconnect.bind(this)), this._socket.on("error", e => {
                        this._logMessage(0, new Date + " session:" + this.getSessionId() + " websocket error:" + JSON.stringify(e)), this._sendTelemetry("websocket_error"), this._errorsCount++, !this._errorsInfoSent && this._errorsCount >= h && (void 0 !== this._lastConnectCallStack && (this._sendTelemetry("websocket_error_connect_stack", {
                            text: this._lastConnectCallStack
                        }), delete this._lastConnectCallStack), void 0 !== this._getLogHistory && this._sendTelemetry("websocket_error_log", {
                            text: this._getLogHistory(50).join("\n")
                        }), this._errorsInfoSent = !0)
                    }))
                }
                _redirect() {
                    this.disconnect(),
                        this._reconnectWhenOnline()
                }
                _tryReconnect() {
                    this._tryConnect() && (this._reconnectCount += 1)
                }
                _tryConnect() {
                    return this._clearReconnectTimeout(), this._lastConnectCallStack = new Error(`WebSocket connect stack. Is connected: ${this.isConnected()}.`).stack || "", !this.isConnected() && (this.disconnect(), this._reconnectWhenOnline(), !0)
                }
                _clearOnlineCancellationToken() {
                    this._onlineCancellationToken && (this._onlineCancellationToken(), this._onlineCancellationToken = null)
                }
                _clearReconnectTimeout() {
                    null !== this._reconnectTimeout && (clearTimeout(this._reconnectTimeout), this._reconnectTimeout = null)
                }
                _reconnectWhenOnline() {
                    if (navigator.onLine) return this._logMessage(0, "Network status: online - trying to connect"), this._doConnect(), void(this._onReconnect && this._onReconnect());
                    this._logMessage(0, "Network status: offline - wait until online"), this._onlineCancellationToken = (0, c.callWhenOnline)(() => {
                        this._logMessage(0, "Network status changed to online - trying to connect"), this._doConnect(), this._onReconnect && this._onReconnect()
                    })
                }
                _onTelemetrySent(e) {
                    "websocket_error" in e && (this._errorsCount = 0, this._errorsInfoSent = !1)
                }
                _startPing() {
                    if (this._pingIntervalId) return;
                    const e = window.location.protocol + "//" + this.getHost() + "/ping";
                    let t = 0,
                        n = 0;
                    const s = e => {
                        this._pingInfo = this._pingInfo || {
                            max: 0,
                            min: 1 / 0,
                            avg: 0
                        };
                        const s = (new Date).getTime() - e;
                        s > this._pingInfo.max && (this._pingInfo.max = s), s < this._pingInfo.min && (this._pingInfo.min = s), t += s, n++, this._pingInfo.avg = t / n, n >= 10 && this._pingIntervalId && (clearInterval(this._pingIntervalId), delete this._pingIntervalId)
                    };
                    this._pingIntervalId = setInterval(() => {
                        const t = (new Date).getTime(),
                            n = new XMLHttpRequest;
                        n.open("GET", e, !0), n.send(), n.onreadystatechange = () => {
                            n.readyState === XMLHttpRequest.DONE && 200 === n.status && s(t)
                        }
                    }, 1e4)
                }
            }
        }
    },
    e => {
        "use strict";
        var t;
        t = 461806, e(e.s = t)
    }
]);