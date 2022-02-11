(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [34604], {
        416282: (e, t) => {
            "use strict";

            function n(e) {
                if (void 0 === e) throw new Error("Value is undefined");
                return e
            }

            function r(e) {
                if (null === e) throw new Error("Value is null");
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ensureNever = t.ensure = t.ensureNotNull = t.ensureDefined = t.assert = void 0, t.assert = function(e, t) {
                if (!e) throw new Error("Assertion failed" + (t ? ": " + t : ""))
            }, t.ensureDefined = n, t.ensureNotNull = r, t.ensure = function(e) {
                return r(n(e))
            }, t.ensureNever = function(e) {}
        },
        765066: (e, t, n) => {
            "use strict";
            e = n.nmd(e);
            var r = n(987380).getLogger("Common.WatchedValue");

            function o() {}

            function s(e) {
                if (!(this instanceof s)) return new s(e);
                arguments.length > 0 && (this._value = e), this._listeners = []
            }
            s.prototype.value = function() {
                return this._owner ? this._owner._value : this._value
            }, s.prototype.setValue = function(e, t) {
                var n = this._owner ? this._owner : this;
                if ("function" == typeof n.hook && (e = n.hook(e)), n.writeLock) return n._value;
                var o = n._value === e || Number.isNaN(n._value) && Number.isNaN(e);
                if (!t && o && n.hasOwnProperty("_value")) return e;
                n._value = e;
                for (var s = n._listeners.slice(), i = 0, a = 0; a < s.length; a++) {
                    s[a].once && (n._listeners.splice(a - i, 1), i++);
                    try {
                        s[a].cb(e)
                    } catch (e) {
                        r.logError(e.stack || e.message)
                    }
                }
                return e
            }, s.prototype.deleteValue = function() {
                var e = this._owner ? this._owner : this;
                if (e.hasOwnProperty("_value")) {
                    if (e.writeLock) return e._value;
                    delete e._value;
                    for (var t = e._listeners.slice(), n = 0, o = 0; o < t.length; o++) {
                        t[o].once && (e._listeners.splice(o - n, 1), n++);
                        try {
                            t[o].cb()
                        } catch (e) {
                            r.logError(e.stack || e.message)
                        }
                    }
                }
            }, s.prototype.subscribe = function(e, t) {
                if ("function" != typeof e) throw new TypeError("callback must be a function");
                var n = !!t && !!t.once,
                    o = !!t && !!t.callWithLast,
                    s = this._owner ? this._owner : this;
                if (o && s.hasOwnProperty("_value")) {
                    try {
                        e(s._value)
                    } catch (e) {
                        r.logError(e.stack || e.message)
                    }
                    if (n) return
                }
                s._listeners.push({
                    cb: e,
                    owner: this,
                    once: !!t && !!t.once
                })
            }, s.prototype.unsubscribe = function(e) {
                var t = this._owner ? this._owner : this;
                void 0 === e && (e = null);
                for (var n = t._listeners, r = n.length; r--;) n[r].owner !== this && t !== this || n[r].cb !== e && null !== e || n.splice(r, 1)
            }, s.prototype.listeners = function() {
                return (this._owner ? this._owner : this)._listeners
            }, s.prototype.readonly = function() {
                if (this._readonlyInstance) return this._readonlyInstance;
                var e = this._readonlyInstance = new o;
                return e.subscribe = this.subscribe.bind(this), e.unsubscribe = this.unsubscribe.bind(this), e.value = this.value.bind(this), e.when = this.when.bind(this), e.spawn = function() {
                    return this.spawn().readonly()
                }.bind(this), this.destroy && (e.destroy = this.destroy.bind(this)), e
            }, s.prototype.spawn = function(e) {
                var t = new s;
                return delete t._listeners, t._owner = this._owner || this, t.destroy = function() {
                    if ("function" == typeof e) try {
                        e()
                    } catch (e) {
                        r.logError(e.stack || e.message)
                    }
                    this.unsubscribe(), delete this._owner
                }, t
            }, s.prototype.when = function(e) {
                var t = this;
                if (this.value()) try {
                    e()
                } catch (e) {
                    r.logError(e.stack || e.message)
                } else {
                    var n = function(r) {
                        r && (t.unsubscribe(n), e())
                    };
                    t.subscribe(n)
                }
            }, s.prototype.opposite = function() {
                if (!this._opposite) {
                    var e = this,
                        t = new s(!this.value());
                    this.subscribe((function(e) {
                        t.setValue(!e)
                    })), t.subscribe((function(t) {
                        e.setValue(!t)
                    })), this._opposite = t
                }
                return this._opposite
            }, "undefined" != typeof window && (window.WatchedValue = s), e && e.exports && (e.exports = s)
        },
        685864: (e, t, n) => {
            "use strict";
            n.d(t, {
                fetch: () => o
            });
            const r = (0, n(987380).getLogger)("Fetch");

            function o(e, t, n = {}) {
                {
                    t = t || {},
                        function(e) {
                            {
                                const t = document.createElement("a");
                                return t.href = e, t.hostname || (t.href = t.href), t.hostname === location.hostname && !t.username
                            }
                        }(e) && (t.headers ? t.headers instanceof Headers || (t.headers = new Headers(t.headers)) : t.headers = new Headers, window.locale && t.headers.set("X-Language", window.locale), t.headers.set("X-Requested-With", "XMLHttpRequest")), void 0 === t.credentials && (t.credentials = "same-origin");
                    const o = window.fetch(e, t);
                    return o.then(o => {
                        if (!o.ok) {
                            let s = "";
                            t.method && (s += t.method.toUpperCase() + " "), s += e, s += ". Status " + o.status, o.statusText && (s += ". " + o.statusText), o.headers.via && (s += ". Via: " + o.headers.via), n.logBodyOnError && "string" == typeof t.body && (s += ". Body: " + t.body.slice(0, 1024)), r.logError(s)
                        }
                        return o
                    }, n => {
                        if (n && "AbortError" === n.name) return;
                        let o = "";
                        t.method && (o += t.method.toUpperCase() + " "), o += e, navigator.onLine ? o += ". " + n : o += ". User is offline.", r.logError(o)
                    }), o
                }
            }
        },
        932010: (e, t, n) => {
            "use strict";

            function r(e, t, n, r, o) {
                let s = "";
                if (r = r ? "; path=" + r : "", o = o ? "; domain=" + o : "", n) {
                    const e = new Date;
                    e.setTime(e.getTime() + 24 * n * 60 * 60 * 1e3), s = "; expires=" + e.toUTCString()
                } else s = "";
                document.cookie = e + "=" + t + s + o + r
            }

            function o(e) {
                const t = e + "=",
                    n = document.cookie.split(";");
                for (let e = 0; e < n.length; e++) {
                    let r = n[e];
                    for (;
                        " " === r.charAt(0);) r = r.substring(1, r.length);
                    if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
                }
                return null
            }
            n.d(t, {
                set: () => r,
                get: () => o
            })
        },
        75443: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                guid: () => o,
                randomHash: () => s,
                randomHashN: () => i
            });
            const r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

            function o() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
                    const t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            }

            function s() {
                return i(12)
            }

            function i(e) {
                let t = "";
                for (let n = 0; n < e; ++n) {
                    const e = Math.floor(Math.random() * r.length);
                    t += r[e]
                }
                return t
            }
        },
        288001: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                unsubscribe: () => c,
                on: () => l,
                subscribe: () => u,
                subscribeToAll: () => h,
                emit: () => d,
                emitOnce: () => f
            });
            var r = n(896276),
                o = n.n(r);
            const s = {},
                i = [],
                a = {};

            function c(e, t, n) {
                s[e].unsubscribe(n, t)
            }

            function l(e, t, n) {
                u(e, t, n)
            }

            function u(e, t, n, r) {
                s.hasOwnProperty(e) || (s[e] = new(o())), a[e] ? t.call(n) : s[e].subscribe(n, t, r)
            }

            function h(e) {
                i.push(e)
            }

            function d(e, ...t) {
                const n = [e].concat(t);
                i.forEach(e => {
                    e.apply(null, n)
                }), s.hasOwnProperty(e) && s[e].fire.apply(s[e], t)
            }

            function f(e) {
                a[e] && console.warn(`Something went wrong: emitOnce called multiple times with same event (${e})`), a[e] = !0, d.apply(null, arguments)
            }
        },
        640142: (e, t, n) => {
            "use strict";
            n.d(t, {
                isOnMobileAppPage: () => o,
                urlWithMobileAppParams: () => s
            });
            var r = n(932010);

            function o(e, t = !1) {
                const {
                    searchParams: n
                } = new URL(String(location)), o = r.get("tv_app") || "";
                let s = "true" === n.get("mobileapp_new"),
                    i = "true" === n.get("mobileapp");
                return t || (s || (s = ["android", "android_nps"].includes(o)), i || (i = "ios" === o)), !("new" !== e && "any" !== e || !s) || !("new" === e || !i)
            }

            function s(e) {
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
        265194: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                qaGlobals: () => r
            });
            const r = new class {
                constructor(e, t) {
                    this._test = e[t] = {}
                }
                provide(e, t) {
                    this._test[e] = t
                }
            }(window, "qaGlobals")
        },
        929098: (e, t, n) => {
            "use strict";
            n.d(t, {
                trackEvent: () => c,
                disableTrackingEvents: () => l
            });
            var r = n(288001),
                o = n(307833);
            const s = (0, n(987380).getLogger)("Common.TrackEvent"),
                i = [/Study_(Drawing)_(.*)/, /(Study)_(.*)@tv-basicstudies/, /(Study)_(.*)/, /(Chart Style) (.*)/];
            let a = !1;
            const c = (e, t, n) => {
                if (a) return;
                if (o.enabled("charting_library_base")) return void((e, t, n) => {
                    t = t || e || n || "";
                    let o = "";
                    for (let e = 0; e < i.length; e++) {
                        const n = t.match(i[e]);
                        if (n && 3 === n.length) {
                            t = n[1], o = n[2];
                            break
                        }
                    }(0, r.emit)(t.toLowerCase().replace(" ", "_"), {
                        category: e,
                        label: n,
                        value: o
                    })
                })(e, t, n);
                let c = (e ? e + ":" : "") + t;
                n && (c += " " + n), s.logNormal(c), o.enabled("widget") || !window._UNIT_TESTS && window.gtag && window.gtag("event", t, {
                    event_category: e,
                    event_label: n
                })
            };

            function l() {
                a = !0
            }
            "undefined" != typeof window && (window.TradingView = window.TradingView || {}, window.TradingView.trackEvent = c)
        },
        541962: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                TVXWindowEvents: () => i
            });
            n(568421);
            var r = n(987380),
                o = n(655119);
            const s = (0, r.getLogger)("XWindowEvents");
            var i;
            ! function(e) {
                const t = "tvxwevents.",
                    n = {};
                let r;
                window.BroadcastChannel ? (r = new BroadcastChannel("tvxwevents"), r.addEventListener("message", (function(e) {
                    const {
                        data: {
                            event: t,
                            value: r
                        }
                    } = e;
                    n[t] && n[t].forEach(e => {
                        e(r)
                    })
                })), function() {
                    const e = [],
                        n = performance.now();
                    for (let n = 0; n < o.TVLocalStorage.length; n++) {
                        const r = o.TVLocalStorage.key(n);
                        r.startsWith(t) && e.push(r)
                    }
                    const r = o.TVLocalStorage.length;
                    for (const t of e) o.TVLocalStorage.removeItem(t);
                    const i = performance.now() - n;
                    s.logNormal("Total keys amount in local storage on operation start: " + r), s.logNormal("Keys amount in local storage to be deleted: " + e.length), s.logNormal("Keys to be deleted from local storage: " + JSON.stringify(e)), s.logNormal(`Removing keys from local storage took ${i} ms`)
                }()) : window.addEventListener("storage", (function(e) {
                    const {
                        newValue: r,
                        key: s
                    } = e;
                    if (null === r || !s || !s.startsWith(t)) return;
                    const i = s.substring(t.length);
                    n[i] && n[i].forEach(t => {
                        t(e.newValue)
                    });
                    o.TVLocalStorage.removeItem(s)
                })), e.on = function(e, t) {
                    n[e] || (n[e] = []), n[e].push(t)
                }, e.off = function(e, t) {
                    if (!n[e]) return;
                    const r = n[e].indexOf(t); - 1 !== r && (1 === n[e].length ? delete n[e] : n[e].splice(r, 1))
                }, e.emit = function(e, n = Date.now()) {
                    try {
                        r ? r.postMessage({
                            event: e,
                            value: n
                        }) : o.TVLocalStorage.setItem(t + e, n.toString())
                    } catch (e) {
                        s.logError(e.message)
                    }
                }
            }(i || (i = {}))
        }
    }
]);