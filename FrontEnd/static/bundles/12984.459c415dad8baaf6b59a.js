(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [12984], {
        541432: e => {
            e.exports = function(e) {
                var t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var o = t[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }
                return n.m = e, n.c = t, n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var o in e) n.d(r, o, function(t) {
                            return e[t]
                        }.bind(null, o));
                    return r
                }, n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 31)
            }([function(e, t, n) {
                var r, o, a, i, c, s;
                r = n(15), o = n(26), a = n(7), i = n(14), c = n(3), (s = t).fixupTitle = function(e) {
                    if (!o(e)) {
                        e = e.text || "";
                        var t = document.getElementsByTagName("title");
                        t && !a(t[0]) && (e = t[0].text)
                    }
                    return e
                }, s.getHostName = function(e) {
                    var t = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)").exec(e);
                    return t ? t[1] : e
                }, s.fixupDomain = function(e) {
                    var t = e.length;
                    return "." === e.charAt(--t) && (e = e.slice(0, t)), "*." === e.slice(0, 2) && (e = e.slice(1)), e
                }, s.getReferrer = function(e) {
                    var t = "",
                        n = s.fromQuerystring("referrer", window.location.href) || s.fromQuerystring("referer", window.location.href);
                    if (n) return n;
                    if (e) return e;
                    try {
                        t = window.top.document.referrer
                    } catch (e) {
                        if (window.parent) try {
                            t = window.parent.document.referrer
                        } catch (e) {
                            t = ""
                        }
                    }
                    return "" === t && (t = document.referrer), t
                }, s.addEventListener = function(e, t, n, r) {
                    return e.addEventListener ? (e.addEventListener(t, n, r), !0) : e.attachEvent ? e.attachEvent("on" + t, n) : void(e["on" + t] = n)
                }, s.fromQuerystring = function(e, t) {
                    var n = new RegExp("^[^#]*[?&]" + e + "=([^&#]*)").exec(t);
                    return n ? decodeURIComponent(n[1].replace(/\+/g, " ")) : null
                }, s.resolveDynamicContexts = function(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return r(c(e, (function(e) {
                        if ("function" != typeof e) return e;
                        try {
                            return e.apply(null, t)
                        } catch (e) {}
                    })))
                }, s.warn = function(e) {
                    "undefined" != typeof console && console.warn("Snowplow: " + e)
                }, s.getCssClasses = function(e) {
                    return e.className.match(/\S+/g) || []
                }, s.getFilter = function(e, t) {
                    if (Array.isArray(e) || !i(e)) return function() {
                        return !0
                    };
                    if (e.hasOwnProperty("filter")) return e.filter;
                    var n = e.hasOwnProperty("whitelist"),
                        r = e.whitelist || e.blacklist;
                    Array.isArray(r) || (r = [r]);
                    for (var o = {}, a = 0; a < r.length; a++) o[r[a]] = !0;
                    return t ? function(e) {
                        return function(e, t) {
                            var n, r = s.getCssClasses(e);
                            for (n = 0; n < r.length; n++)
                                if (t[r[n]]) return !0;
                            return !1
                        }(e, o) === n
                    } : function(e) {
                        return e.name in o === n
                    }
                }, s.getTransform = function(e) {
                    return i(e) && e.hasOwnProperty("transform") ? e.transform : function(e) {
                        return e
                    }
                }, s.decorateQuerystring = function(e, t, n) {
                    var r = t + "=" + n,
                        o = e.split("#"),
                        a = o[0].split("?"),
                        i = a.shift(),
                        c = a.join("?");
                    if (c) {
                        for (var s = !0, u = c.split("&"), l = 0; l < u.length; l++)
                            if (u[l].substr(0, t.length + 1) === t + "=") {
                                s = !1, u[l] = r, c = u.join("&");
                                break
                            }
                        s && (c = r + "&" + c)
                    } else c = r;
                    return o[0] = i + "?" + c, o.join("#")
                }, s.attemptGetLocalStorage = function(e) {
                    try {
                        var t = localStorage.getItem(e + ".expires");
                        return null === t || +t > Date.now() ? localStorage.getItem(e) : (localStorage.removeItem(e), void localStorage.removeItem(e + ".expires"))
                    } catch (e) {}
                }, s.attemptWriteLocalStorage = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 63072e3;
                    try {
                        var r = Date.now() + 1e3 * n;
                        return localStorage.setItem("".concat(e, ".expires"), r), localStorage.setItem(e, t), !0
                    } catch (e) {
                        return !1
                    }
                }, s.attemptGetSessionStorage = function(e) {
                    try {
                        return sessionStorage.getItem(e)
                    } catch (e) {
                        return
                    }
                }, s.attemptWriteSessionStorage = function(e, t) {
                    try {
                        return sessionStorage.setItem(e, t), !0
                    } catch (e) {
                        return !1
                    }
                }, s.findRootDomain = function() {
                    for (var e = "_sp_root_domain_test_" + (new Date).getTime(), t = "_test_value_" + (new Date).getTime(), n = window.location.hostname.split("."), r = n.length - 1; r >= 0;) {
                        var o = n.slice(r, n.length).join(".");
                        if (s.cookie(e, t, 0, "/", o), s.cookie(e) === t) {
                            s.deleteCookie(e, o);
                            for (var a = s.getCookiesWithPrefix("_sp_root_domain_test_"), i = 0; i < a.length; i++) s.deleteCookie(a[i], o);
                            return o
                        }
                        r -= 1
                    }
                    return window.location.hostname
                }, s.isValueInArray = function(e, t) {
                    for (var n = 0; n < t.length; n++)
                        if (t[n] === e) return !0;
                    return !1
                }, s.deleteCookie = function(e, t) {
                    s.cookie(e, "", -1, "/", t)
                }, s.getCookiesWithPrefix = function(e) {
                    for (var t = document.cookie.split("; "), n = [], r = 0; r < t.length; r++) t[r].substring(0, e.length) === e && n.push(t[r]);
                    return n
                }, s.cookie = function(e, t, n, r, o, a, i) {
                    return arguments.length > 1 ? document.cookie = e + "=" + encodeURIComponent(t) + (n ? "; Expires=" + new Date(+new Date + 1e3 * n).toUTCString() : "") + (r ? "; Path=" + r : "") + (o ? "; Domain=" + o : "") + (a ? "; SameSite=" + a : "") + (i ? "; Secure" : "") : decodeURIComponent((("; " + document.cookie).split("; " + e + "=")[1] || "").split(";")[0])
                }, s.parseInt = function(e) {
                    var t = parseInt(e);
                    return isNaN(t) ? void 0 : t
                }, s.parseFloat = function(e) {
                    var t = parseFloat(e);
                    return isNaN(t) ? void 0 : t
                }
            }, function(e, t) {
                var n = Array.isArray;
                e.exports = n
            }, function(e, t, n) {
                var r = n(43),
                    o = n(64),
                    a = n(69),
                    i = n(1),
                    c = n(70);
                e.exports = function(e) {
                    return "function" == typeof e ? e : null == e ? a : "object" == typeof e ? i(e) ? o(e[0], e[1]) : r(e) : c(e)
                }
            }, function(e, t, n) {
                var r = n(71),
                    o = n(2),
                    a = n(72),
                    i = n(1);
                e.exports = function(e, t) {
                    return (i(e) ? r : a)(e, o(t, 3))
                }
            }, function(e, t, n) {
                var r = n(21),
                    o = n(38)(r);
                e.exports = o
            }, function(e, t, n) {
                var r = n(13),
                    o = n(14);
                e.exports = function(e) {
                    if (!o(e)) return !1;
                    var t = r(e);
                    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
                }
            }, function(e, t, n) {
                var r = n(47);
                e.exports = function(e, t) {
                    for (var n = e.length; n--;)
                        if (r(e[n][0], t)) return n;
                    return -1
                }
            }, function(e, t) {
                e.exports = function(e) {
                    return void 0 === e
                }
            }, function(e, t, n) {
                ! function() {
                    n(18);
                    var e = n(9),
                        r = n(15),
                        o = n(0),
                        a = n(73),
                        i = n(74);
                    t.Snowplow = function(t, n) {
                        var c, s = document,
                            u = window,
                            l = {
                                outQueues: [],
                                bufferFlushers: [],
                                expireDateTime: null,
                                hasLoaded: !1,
                                registeredOnLoadHandlers: [],
                                pageViewId: null
                            };

                        function f() {
                            var e;
                            if (!l.hasLoaded)
                                for (l.hasLoaded = !0,
                                    e = 0; e < l.registeredOnLoadHandlers.length; e++) l.registeredOnLoadHandlers[e]();
                            return !0
                        }
                        return u.Snowplow = {
                            getTrackerCf: function(e) {
                                var t = new i.Tracker(n, "", "js-2.14.0", l, {});
                                return t.setCollectorCf(e), t
                            },
                            getTrackerUrl: function(e) {
                                var t = new i.Tracker(n, "", "js-2.14.0", l, {});
                                return t.setCollectorUrl(e), t
                            },
                            getAsyncTracker: function() {
                                return new i.Tracker(n, "", "js-2.14.0", l, {})
                            }
                        }, o.addEventListener(u, "beforeunload", (function() {
                            var t;
                            if (e(l.bufferFlushers, (function(e) {
                                    e()
                                })), l.expireDateTime)
                                do {
                                    if (t = new Date, 0 === r(l.outQueues, (function(e) {
                                            return e.length > 0
                                        })).length) break
                                } while (t.getTime() < l.expireDateTime)
                        }), !1), s.addEventListener ? o.addEventListener(s, "DOMContentLoaded", (function e() {
                            s.removeEventListener("DOMContentLoaded", e, !1), f()
                        })) : s.attachEvent && (s.attachEvent("onreadystatechange", (function e() {
                            "complete" === s.readyState && (s.detachEvent("onreadystatechange", e), f())
                        })), s.documentElement.doScroll && u === u.top && function e() {
                            if (!l.hasLoaded) {
                                try {
                                    s.documentElement.doScroll("left")
                                } catch (t) {
                                    return void setTimeout(e, 0)
                                }
                                f()
                            }
                        }()), new RegExp("WebKit").test(navigator.userAgent) && (c = setInterval((function() {
                            (l.hasLoaded || /loaded|complete/.test(s.readyState)) && (clearInterval(c), f())
                        }), 10)), o.addEventListener(u, "load", f, !1), new a.InQueueManager(i.Tracker, "js-2.14.0", l, t, n)
                    }
                }()
            }, function(e, t, n) {
                var r = n(35),
                    o = n(4),
                    a = n(40),
                    i = n(1);
                e.exports = function(e, t) {
                    return (i(e) ? r : o)(e, a(t))
                }
            }, function(e, t, n) {
                var r = n(11)(Object.keys, Object);
                e.exports = r
            }, function(e, t) {
                e.exports = function(e, t) {
                    return function(n) {
                        return e(t(n))
                    }
                }
            }, function(e, t, n) {
                var r = n(5),
                    o = n(39);
                e.exports = function(e) {
                    return null != e && o(e.length) && !r(e)
                }
            }, function(e, t) {
                var n = Object.prototype.toString;
                e.exports = function(e) {
                    return n.call(e)
                }
            }, function(e, t) {
                e.exports = function(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t)
                }
            }, function(e, t, n) {
                var r = n(41),
                    o = n(42),
                    a = n(2),
                    i = n(1);
                e.exports = function(e, t) {
                    return (i(e) ? r : o)(e, a(t, 3))
                }
            }, function(e, t, n) {
                var r = n(51),
                    o = n(17);
                e.exports = function e(t, n, a, i, c) {
                    return t === n || (null == t || null == n || !o(t) && !o(n) ? t != t && n != n : r(t, n, a, i, e, c))
                }
            }, function(e, t) {
                e.exports = function(e) {
                    return null != e && "object" == typeof e
                }
            }, function(e, t, n) {
                var r = n(33),
                    o = n(34),
                    a = o;
                a.v1 = r, a.v4 = o, e.exports = a
            }, function(e, t) {
                var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
                if (n) {
                    var r = new Uint8Array(16);
                    e.exports = function() {
                        return n(r), r
                    }
                } else {
                    var o = new Array(16);
                    e.exports = function() {
                        for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
                        return o
                    }
                }
            }, function(e, t) {
                for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
                e.exports = function(e, t) {
                    var r = t || 0,
                        o = n;
                    return [o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]]].join("")
                }
            }, function(e, t, n) {
                var r = n(36),
                    o = n(10);
                e.exports = function(e, t) {
                    return e && r(e, t, o)
                }
            }, function(e, t, n) {
                var r = n(45),
                    o = n(46),
                    a = n(48),
                    i = n(49),
                    c = n(50);

                function s(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }
                s.prototype.clear = r, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = i, s.prototype.set = c, e.exports = s
            }, function(e, t, n) {
                var r = n(14);
                e.exports = function(e) {
                    return e == e && !r(e)
                }
            }, function(e, t) {
                e.exports = function(e, t) {
                    return function(n) {
                        return null != n && (n[e] === t && (void 0 !== t || e in Object(n)))
                    }
                }
            }, function(e, t, n) {
                var r = n(65);
                e.exports = function(e, t, n) {
                    var o = null == e ? void 0 : r(e, t);
                    return void 0 === o ? n : o
                }
            }, function(e, t, n) {
                var r = n(13),
                    o = n(1),
                    a = n(17);
                e.exports = function(e) {
                    return "string" == typeof e || !o(e) && a(e) && "[object String]" == r(e)
                }
            }, function(e, t, n) {
                var r, o, a, i, c, s, u, l, f;
                r = n(5), o = n(7), a = n(76).jstz.determine(), i = n(0), c = t, s = window, u = navigator, l = screen, f = document, c.hasSessionStorage = function() {
                    try {
                        return !!s.sessionStorage
                    } catch (e) {
                        return !0
                    }
                }, c.hasLocalStorage = function() {
                    try {
                        return !!s.localStorage
                    } catch (e) {
                        return !0
                    }
                }, c.localStorageAccessible = function() {
                    var e = "modernizr";
                    if (!c.hasLocalStorage()) return !1;
                    try {
                        return s.localStorage.setItem(e, e), s.localStorage.removeItem(e), !0
                    } catch (e) {
                        return !1
                    }
                }, c.hasCookies = function(e) {
                    var t = e || "testcookie";
                    return o(u.cookieEnabled) ? (i.cookie(t, "1"), "1" === i.cookie(t) ? "1" : "0") : u.cookieEnabled ? "1" : "0"
                }, c.detectTimezone = function() {
                    return void 0 === a ? "" : a.name()
                }, c.detectViewport = function() {
                    var e = s,
                        t = "inner";
                    "innerWidth" in s || (t = "client", e = f.documentElement || f.body);
                    var n = e[t + "Width"],
                        r = e[t + "Height"];
                    return n >= 0 && r >= 0 ? n + "x" + r : null
                }, c.detectDocumentSize = function() {
                    var e = f.documentElement,
                        t = f.body,
                        n = t ? Math.max(t.offsetHeight, t.scrollHeight) : 0,
                        r = Math.max(e.clientWidth, e.offsetWidth, e.scrollWidth),
                        o = Math.max(e.clientHeight, e.offsetHeight, e.scrollHeight, n);
                    return isNaN(r) || isNaN(o) ? "" : r + "x" + o
                }, c.detectBrowserFeatures = function(e, t) {
                    var n, a, i = {
                            pdf: "application/pdf",
                            qt: "video/quicktime",
                            realp: "audio/x-pn-realaudio-plugin",
                            wma: "application/x-mplayer2",
                            dir: "application/x-director",
                            fla: "application/x-shockwave-flash",
                            java: "application/x-java-vm",
                            gears: "application/x-googlegears",
                            ag: "application/x-silverlight"
                        },
                        f = {};
                    if (u.mimeTypes && u.mimeTypes.length)
                        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (a = u.mimeTypes[i[n]], f[n] = a && a.enabledPlugin ? "1" : "0");
                    return u.constructor === window.Navigator && "unknown" != typeof u.javaEnabled && !o(u.javaEnabled) && u.javaEnabled() && (f.java = "1"), r(s.GearsFactory) && (f.gears = "1"), f.res = l.width + "x" + l.height, f.cd = l.colorDepth, e && (f.cookie = c.hasCookies(t)), f
                }
            }, function(e, t) {
                var n = {
                    utf8: {
                        stringToBytes: function(e) {
                            return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
                        },
                        bytesToString: function(e) {
                            return decodeURIComponent(escape(n.bin.bytesToString(e)))
                        }
                    },
                    bin: {
                        stringToBytes: function(e) {
                            for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                            return t
                        },
                        bytesToString: function(e) {
                            for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                            return t.join("")
                        }
                    }
                };
                e.exports = n
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(30);

                function o(e) {
                    if (!a(e)) return !1;
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !0;
                    return !1
                }

                function a(e) {
                    return null != e && (e.constructor === {}.constructor || e.constructor === [].constructor)
                }
                t.isNonEmptyJson = o, t.isJson = a, t.payloadBuilder = function(e) {
                    var t = {},
                        n = function(e, n) {
                            null != n && "" !== n && (t[e] = n)
                        };
                    return {
                        add: n,
                        addDict: function(e) {
                            for (var t in e) e.hasOwnProperty(t) && n(t, e[t])
                        },
                        addJson: function(t, a, i) {
                            if (o(i)) {
                                var c = JSON.stringify(i);
                                e ? n(t, (s = c) ? r.base64encode(s).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_") : s) : n(a, c)
                            }
                            var s
                        },
                        build: function() {
                            return t
                        }
                    }
                }
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    var t, n, r, o, a, i, c, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        u = 0,
                        l = 0,
                        f = "",
                        d = [];
                    if (!e) return e;
                    e += "";
                    do {
                        t = (i = s.indexOf(e.charAt(u++)) << 18 | s.indexOf(e.charAt(u++)) << 12 | (o = s.indexOf(e.charAt(u++))) << 6 | (a = s.indexOf(e.charAt(u++)))) >> 16 & 255, n = i >> 8 & 255, r = 255 & i, d[l++] = 64 === o ? String.fromCharCode(t) : 64 === a ? String.fromCharCode(t, n) : String.fromCharCode(t, n, r)
                    } while (u < e.length);
                    return f = d.join(""), c = f.replace(/\0+$/, ""), decodeURIComponent(c.split("").map((function(e) {
                        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                    })).join(""))
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.base64urldecode = function(e) {
                    if (!e) return e;
                    switch (4 - e.length % 4) {
                        case 2:
                            e += "==";
                            break;
                        case 3:
                            e += "="
                    }
                    return r(e.replace(/-/g, "+").replace(/_/g, "/"))
                }, t.base64encode = function(e) {
                    var t, n, r, o, a, i, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        s = 0,
                        u = 0,
                        l = [];
                    if (!e) return e;
                    e = unescape(encodeURIComponent(e));
                    do {
                        t = (a = e.charCodeAt(s++) << 16 | e.charCodeAt(s++) << 8 | e.charCodeAt(s++)) >> 18 & 63, n = a >> 12 & 63, r = a >> 6 & 63, o = 63 & a, l[u++] = c.charAt(t) + c.charAt(n) + c.charAt(r) + c.charAt(o)
                    } while (s < e.length);
                    i = l.join("");
                    var f = e.length % 3;
                    return (f ? i.slice(0, f - 3) : i) + "===".slice(f || 3)
                }, t.base64decode = r
            }, function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, "snowplowTracker", (function() {
                    return i
                }));
                n(32);
                var r = n(8);
                for (var o in r)["default", "snowplowTracker"].indexOf(o) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return r[e]
                    }))
                }(o);
                var a = new r.Snowplow([], "snowplowTracker"),
                    i = function() {
                        a.push(arguments)
                    }
            }, function(e, t, n) {}, function(e, t, n) {
                var r, o, a = n(19),
                    i = n(20),
                    c = 0,
                    s = 0;
                e.exports = function(e, t, n) {
                    var u = t && n || 0,
                        l = t || [],
                        f = (e = e || {}).node || r,
                        d = void 0 !== e.clockseq ? e.clockseq : o;
                    if (null == f || null == d) {
                        var m = a();
                        null == f && (f = r = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == d && (d = o = 16383 & (m[6] << 8 | m[7]))
                    }
                    var p = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                        g = void 0 !== e.nsecs ? e.nsecs : s + 1,
                        v = p - c + (g - s) / 1e4;
                    if (v < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (v < 0 || p > c) && void 0 === e.nsecs && (g = 0), g >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    c = p, s = g, o = d;
                    var h = (1e4 * (268435455 & (p += 122192928e5)) + g) % 4294967296;
                    l[u++] = h >>> 24 & 255, l[u++] = h >>> 16 & 255, l[u++] = h >>> 8 & 255, l[u++] = 255 & h;
                    var w = p / 4294967296 * 1e4 & 268435455;
                    l[u++] = w >>> 8 & 255, l[u++] = 255 & w, l[u++] = w >>> 24 & 15 | 16, l[u++] = w >>> 16 & 255, l[u++] = d >>> 8 | 128, l[u++] = 255 & d;
                    for (var y = 0; y < 6; ++y) l[u + y] = f[y];
                    return t || i(l)
                }
            }, function(e, t, n) {
                var r = n(19),
                    o = n(20);
                e.exports = function(e, t, n) {
                    var a = t && n || 0;
                    "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
                    var i = (e = e || {}).random || (e.rng || r)();
                    if (i[6] = 15 & i[6] | 64,
                        i[8] = 63 & i[8] | 128, t)
                        for (var c = 0; c < 16; ++c) t[a + c] = i[c];
                    return t || o(i)
                }
            }, function(e, t) {
                e.exports = function(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
                    return e
                }
            }, function(e, t, n) {
                var r = n(37)();
                e.exports = r
            }, function(e, t) {
                e.exports = function(e) {
                    return function(t, n, r) {
                        for (var o = -1, a = Object(t), i = r(t), c = i.length; c--;) {
                            var s = i[e ? c : ++o];
                            if (!1 === n(a[s], s, a)) break
                        }
                        return t
                    }
                }
            }, function(e, t, n) {
                var r = n(12);
                e.exports = function(e, t) {
                    return function(n, o) {
                        if (null == n) return n;
                        if (!r(n)) return e(n, o);
                        for (var a = n.length, i = t ? a : -1, c = Object(n);
                            (t ? i-- : ++i < a) && !1 !== o(c[i], i, c););
                        return n
                    }
                }
            }, function(e, t) {
                e.exports = function(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                }
            }, function(e, t) {
                e.exports = function(e) {
                    return e
                }
            }, function(e, t) {
                e.exports = function(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, o = 0, a = []; ++n < r;) {
                        var i = e[n];
                        t(i, n, e) && (a[o++] = i)
                    }
                    return a
                }
            }, function(e, t, n) {
                var r = n(4);
                e.exports = function(e, t) {
                    var n = [];
                    return r(e, (function(e, r, o) {
                        t(e, r, o) && n.push(e)
                    })), n
                }
            }, function(e, t, n) {
                var r = n(44),
                    o = n(63),
                    a = n(24);
                e.exports = function(e) {
                    var t = o(e);
                    return 1 == t.length && t[0][2] ? a(t[0][0], t[0][1]) : function(n) {
                        return n === e || r(n, e, t)
                    }
                }
            }, function(e, t, n) {
                var r = n(22),
                    o = n(16);
                e.exports = function(e, t, n, a) {
                    var i = n.length,
                        c = i,
                        s = !a;
                    if (null == e) return !c;
                    for (e = Object(e); i--;) {
                        var u = n[i];
                        if (s && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
                    }
                    for (; ++i < c;) {
                        var l = (u = n[i])[0],
                            f = e[l],
                            d = u[1];
                        if (s && u[2]) {
                            if (void 0 === f && !(l in e)) return !1
                        } else {
                            var m = new r;
                            if (a) var p = a(f, d, l, e, t, m);
                            if (!(void 0 === p ? o(d, f, 3, a, m) : p)) return !1
                        }
                    }
                    return !0
                }
            }, function(e, t) {
                e.exports = function() {
                    this.__data__ = [], this.size = 0
                }
            }, function(e, t, n) {
                var r = n(6),
                    o = Array.prototype.splice;
                e.exports = function(e) {
                    var t = this.__data__,
                        n = r(t, e);
                    return !(n < 0) && (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
                }
            }, function(e, t) {
                e.exports = function(e, t) {
                    return e === t || e != e && t != t
                }
            }, function(e, t, n) {
                var r = n(6);
                e.exports = function(e) {
                    var t = this.__data__,
                        n = r(t, e);
                    return n < 0 ? void 0 : t[n][1]
                }
            }, function(e, t, n) {
                var r = n(6);
                e.exports = function(e) {
                    return r(this.__data__, e) > -1
                }
            }, function(e, t, n) {
                var r = n(6);
                e.exports = function(e, t) {
                    var n = this.__data__,
                        o = r(n, e);
                    return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this
                }
            }, function(e, t, n) {
                var r = n(22),
                    o = n(52),
                    a = n(57),
                    i = n(58),
                    c = n(60),
                    s = n(1),
                    u = n(61),
                    l = n(62),
                    f = "[object Object]",
                    d = Object.prototype.hasOwnProperty;
                e.exports = function(e, t, n, m, p, g) {
                    var v = s(e),
                        h = s(t),
                        w = v ? "[object Array]" : c(e),
                        y = h ? "[object Array]" : c(t),
                        _ = (w = "[object Arguments]" == w ? f : w) == f,
                        k = (y = "[object Arguments]" == y ? f : y) == f,
                        b = w == y;
                    if (b && u(e)) {
                        if (!u(t)) return !1;
                        v = !0, _ = !1
                    }
                    if (b && !_) return g || (g = new r), v || l(e) ? o(e, t, n, m, p, g) : a(e, t, w, n, m, p, g);
                    if (!(1 & n)) {
                        var A = _ && d.call(e, "__wrapped__"),
                            x = k && d.call(t, "__wrapped__");
                        if (A || x) {
                            var S = A ? e.value() : e,
                                j = x ? t.value() : t;
                            return g || (g = new r), p(S, j, n, m, g)
                        }
                    }
                    return !!b && (g || (g = new r), i(e, t, n, m, p, g))
                }
            }, function(e, t, n) {
                var r = n(53),
                    o = n(54),
                    a = n(55);
                e.exports = function(e, t, n, i, c, s) {
                    var u = 1 & n,
                        l = e.length,
                        f = t.length;
                    if (l != f && !(u && f > l)) return !1;
                    var d = s.get(e);
                    if (d && s.get(t)) return d == t;
                    var m = -1,
                        p = !0,
                        g = 2 & n ? new r : void 0;
                    for (s.set(e, t), s.set(t, e); ++m < l;) {
                        var v = e[m],
                            h = t[m];
                        if (i) var w = u ? i(h, v, m, t, e, s) : i(v, h, m, e, t, s);
                        if (void 0 !== w) {
                            if (w) continue;
                            p = !1;
                            break
                        }
                        if (g) {
                            if (!o(t, (function(e, t) {
                                    if (!a(g, t) && (v === e || c(v, e, n, i, s))) return g.push(t)
                                }))) {
                                p = !1;
                                break
                            }
                        } else if (v !== h && !c(v, h, n, i, s)) {
                            p = !1;
                            break
                        }
                    }
                    return s.delete(e), s.delete(t), p
                }
            }, function(e, t, n) {
                var r = n(1);
                e.exports = function() {
                    if (!arguments.length) return [];
                    var e = arguments[0];
                    return r(e) ? e : [e]
                }
            }, function(e, t) {
                e.exports = function(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                        if (t(e[n], n, e)) return !0;
                    return !1
                }
            }, function(e, t, n) {
                var r = n(56);
                e.exports = function(e, t) {
                    return !!(null == e ? 0 : e.length) && r(e, t, 0) > -1
                }
            }, function(e, t) {
                e.exports = function(e, t, n) {
                    for (var r = n - 1, o = e.length; ++r < o;)
                        if (e[r] === t) return r;
                    return -1
                }
            }, function(e, t) {
                e.exports = function(e, t) {
                    return e === t || e != e && t != t
                }
            }, function(e, t, n) {
                var r = n(59),
                    o = Object.prototype.hasOwnProperty;
                e.exports = function(e, t, n, a, i, c) {
                    var s = 1 & n,
                        u = r(e),
                        l = u.length;
                    if (l != r(t).length && !s) return !1;
                    for (var f = l; f--;) {
                        var d = u[f];
                        if (!(s ? d in t : o.call(t, d))) return !1
                    }
                    var m = c.get(e);
                    if (m && c.get(t)) return m == t;
                    var p = !0;
                    c.set(e, t), c.set(t, e);
                    for (var g = s; ++f < l;) {
                        var v = e[d = u[f]],
                            h = t[d];
                        if (a) var w = s ? a(h, v, d, t, e, c) : a(v, h, d, e, t, c);
                        if (!(void 0 === w ? v === h || i(v, h, n, a, c) : w)) {
                            p = !1;
                            break
                        }
                        g || (g = "constructor" == d)
                    }
                    if (p && !g) {
                        var y = e.constructor,
                            _ = t.constructor;
                        y == _ || !("constructor" in e) || !("constructor" in t) || "function" == typeof y && y instanceof y && "function" == typeof _ && _ instanceof _ || (p = !1)
                    }
                    return c.delete(e), c.delete(t), p
                }
            }, function(e, t, n) {
                var r = n(11)(Object.keys, Object);
                e.exports = r
            }, function(e, t) {
                var n = Object.prototype.toString;
                e.exports = function(e) {
                    return n.call(e)
                }
            }, function(e, t) {
                e.exports = function() {
                    return !1
                }
            }, function(e, t) {
                e.exports = function() {
                    return !1
                }
            }, function(e, t, n) {
                var r = n(23),
                    o = n(10);
                e.exports = function(e) {
                    for (var t = o(e), n = t.length; n--;) {
                        var a = t[n],
                            i = e[a];
                        t[n] = [a, i, r(i)]
                    }
                    return t
                }
            }, function(e, t, n) {
                var r = n(16),
                    o = n(25),
                    a = n(66),
                    i = n(67),
                    c = n(23),
                    s = n(24),
                    u = n(68);
                e.exports = function(e, t) {
                    return i(e) && c(t) ? s(u(e), t) : function(n) {
                        var i = o(n, e);
                        return void 0 === i && i === t ? a(n, e) : r(t, i, 3)
                    }
                }
            }, function(e, t) {
                e.exports = function(e, t) {
                    return null == e ? void 0 : e[t]
                }
            }, function(e, t) {
                e.exports = function(e, t) {
                    return null != e && t in Object(e)
                }
            }, function(e, t) {
                e.exports = function(e) {
                    return e
                }
            }, function(e, t) {
                e.exports = function(e) {
                    return e
                }
            }, function(e, t) {
                e.exports = function(e) {
                    return e
                }
            }, function(e, t) {
                e.exports = function(e) {
                    return function(t) {
                        return null == t ? void 0 : t[e]
                    }
                }
            }, function(e, t) {
                e.exports = function(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
                    return o
                }
            }, function(e, t, n) {
                var r = n(4),
                    o = n(12);
                e.exports = function(e, t) {
                    var n = -1,
                        a = o(e) ? Array(e.length) : [];
                    return r(e, (function(e, r, o) {
                        a[++n] = t(e, r, o)
                    })), a
                }
            }, function(e, t, n) {
                var r, o, a, i;
                r = n(3), o = n(7), a = n(5), i = n(0), t.InQueueManager = function(e, t, n, c, s) {
                    var u = {};

                    function l(e) {
                        var t = [];
                        if (e && 0 !== e.length)
                            for (var n = 0; n < e.length; n++) u.hasOwnProperty(e[n]) ? t.push(u[e[n]]) : i.warn('Warning: Tracker namespace "' + e[n] + '" not configured');
                        else t = r(u);
                        return 0 === t.length && i.warn("Warning: No tracker configured"), t
                    }

                    function f(e, t, n) {
                        var r;
                        i.warn(e + " is deprecated. Set the collector when a new tracker instance using newTracker."), d(r = o(n) ? "sp" : n), u[r][e](t)
                    }

                    function d(r, o, a) {
                        a = a || {}, u.hasOwnProperty(r) ? i.warn("Tracker namespace " + r + " already exists.") : (u[r] = new e(s, r, t, n, a), u[r].setCollectorUrl(o))
                    }

                    function m(e) {
                        var t = e.split(":");
                        return [t[0], t.length > 1 ? t[1].split(";") : []]
                    }

                    function p() {
                        var e, t, n, r, o, c, s, p;
                        for (e = 0; e < arguments.length; e += 1) {
                            if (r = arguments[e], o = Array.prototype.shift.call(r), a(o)) try {
                                o.apply(u, r)
                            } catch (e) {
                                i.warn("Custom callback error - ".concat(e))
                            } finally {
                                continue
                            }
                            if (n = (c = m(o))[0], s = c[1], "newTracker" !== n)
                                if ("setCollectorCf" !== n && "setCollectorUrl" !== n || s && 0 !== s.length)
                                    for (p = l(s), t = 0; t < p.length; t++) p[t][n].apply(p[t], r);
                                else f(n, r[0], r[1]);
                            else d(r[0], r[1], r[2])
                        }
                    }
                    for (var g = 0; g < c.length; g++) p(c[g]);
                    return {
                        push: p
                    }
                }
            }, function(e, t, n) {
                function r(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function o(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? r(Object(n), !0).forEach((function(t) {
                            a(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function a(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                var i, c, s, u, l, f, d, m, p, g, v, h, w;
                i = n(9), c = n(3), s = n(0), u = n(75), l = n(27), f = n(77), d = n(79), m = n(80), p = n(86), g = n(87), v = n(92).trackerCore, h = n(107).productionize, w = n(18), t.Tracker = function(e, t, n, r, a) {
                    (a = a || {}).hasOwnProperty("post") ? a.eventMethod = !0 === a.post ? "post" : "get" : a.eventMethod = a.eventMethod || "post", a.hasOwnProperty("useStm") || (a.useStm = !0);
                    var y, _, k, b, A, x, S, j, C, P, T, O, E, D, I, L, M, N, B, z, F = Object.freeze({
                            consent: "consent",
                            contract: "contract",
                            legalObligation: "legal_obligation",
                            vitalInterests: "vital_interests",
                            publicTask: "public_task",
                            legitimateInterests: "legitimate_interests"
                        }),
                        R = v(!0, (function(e) {
                            var t, n, o, a, i, c, u, f, d, m, p, g, v, h;
                            t = e, o = Math.round((new Date).getTime() / 1e3), a = He("id"), i = He("ses"), c = qe("ses"), u = tt(), f = u[0], d = u[1], m = u[2], p = u[3], g = u[4], v = u[5], h = u[6], n = !!S && !!s.cookie(S), !le && !n || "none" == we ? ("0" === f ? (L = h, c || "none" == we || (p++, v = g, L = w.v4()), xe = p) : (new Date).getTime() - be > 1e3 * de && (L = w.v4(), xe++), t.add("vp", l.detectViewport()), t.add("ds", l.detectDocumentSize()), t.add("vid", xe), t.add("sid", L), t.add("duid", d), t.add("uid", M), Fe(), t.add("refr", Ve(y || X)), t.add("url", Ve(k || K)), "none" != we && ($e(d, m, xe, o, v, L), Ze()), be = (new Date).getTime()) : "localStorage" == we ? (s.attemptWriteLocalStorage(a, ""), s.attemptWriteLocalStorage(i, "")) : "cookie" != we && "cookieAndLocalStorage" != we || (s.cookie(a, "", -1, ie, ae, ce, se), s.cookie(i, "", -1, ie, ae, ce, se)),
                                function(e, t) {
                                    var n, o = new Date;
                                    n = !!S && !!s.cookie(S), le || n || (Te.enqueueRequest(e.build(), _), r.expireDateTime = o.getTime() + t)
                                }(e, ne)
                        })),
                        U = !1,
                        V = {},
                        G = {},
                        H = {},
                        q = document,
                        J = window,
                        W = navigator,
                        Y = u.fixupUrl(q.domain, J.location.href, s.getReferrer()),
                        Q = s.fixupDomain(Y[0]),
                        K = Y[1],
                        X = Y[2],
                        Z = a.hasOwnProperty("platform") ? a.platform : "web",
                        $ = a.hasOwnProperty("postPath") ? a.postPath : "/com.snowplowanalytics.snowplow/tp2",
                        ee = a.hasOwnProperty("appId") ? a.appId : "",
                        te = q.title,
                        ne = a.hasOwnProperty("pageUnloadTimer") ? a.pageUnloadTimer : 500,
                        re = !a.hasOwnProperty("resetActivityTrackingOnPageView") || a.resetActivityTrackingOnPageView,
                        oe = a.hasOwnProperty("cookieName") ? a.cookieName : "_sp_",
                        ae = a.hasOwnProperty("cookieDomain") ? a.cookieDomain : null,
                        ie = "/",
                        ce = a.hasOwnProperty("cookieSameSite") ? a.cookieSameSite : "None",
                        se = !a.hasOwnProperty("cookieSecure") || a.cookieSecure,
                        ue = W.doNotTrack || W.msDoNotTrack || J.doNotTrack,
                        le = !!a.hasOwnProperty("respectDoNotTrack") && a.respectDoNotTrack && ("yes" === ue || "1" === ue),
                        fe = a.hasOwnProperty("cookieLifetime") ? a.cookieLifetime : 63072e3,
                        de = a.hasOwnProperty("sessionCookieTimeout") ? a.sessionCookieTimeout : 1800,
                        me = q.characterSet || q.charset,
                        pe = !!a.hasOwnProperty("forceSecureTracker") && !0 === a.forceSecureTracker,
                        ge = !(pe || !a.hasOwnProperty("forceUnsecureTracker")) && !0 === a.forceUnsecureTracker,
                        ve = !a.hasOwnProperty("useLocalStorage") || (s.warn("argmap.useLocalStorage is deprecated. Use argmap.stateStorageStrategy instead."), a.useLocalStorage),
                        he = !a.hasOwnProperty("useCookies") || (s.warn("argmap.useCookies is deprecated. Use argmap.stateStorageStrategy instead."), a.useCookies),
                        we = a.hasOwnProperty("stateStorageStrategy") ? a.stateStorageStrategy : he || ve ? he && ve ? "cookieAndLocalStorage" : he ? "cookie" : "localStorage" : "none",
                        ye = W.userLanguage || W.language,
                        _e = l.detectBrowserFeatures("cookie" == we || "cookieAndLocalStorage" == we, He("testcookie")),
                        ke = e + "_" + t,
                        be = (new Date).getTime(),
                        Ae = f,
                        xe = 1,
                        Se = {
                            transaction: {},
                            items: []
                        },
                        je = d.getLinkTrackingManager(R, ke, rt),
                        Ce = m.getFormTrackingManager(R, ke, rt),
                        Pe = p.errorManager(R),
                        Te = new g.OutQueueManager(e, t, r, "localStorage" == we || "cookieAndLocalStorage" == we, a.eventMethod, $, a.bufferSize, a.maxPostBytes || 4e4, a.useStm, a.maxLocalStorageQueueSize || 1e3),
                        Oe = !1,
                        Ee = a.contexts || {},
                        De = [],
                        Ie = [],
                        Le = !1,
                        Me = !1,
                        Ne = {
                            enabled: !1,
                            installed: !1,
                            configurations: {}
                        },
                        Be = {};
                    for (var ze in a.hasOwnProperty("discoverRootDomain") && a.discoverRootDomain && (ae = s.findRootDomain()), Ee.gaCookies && De.push((N = {}, i(["__utma", "__utmb", "__utmc", "__utmv", "__utmz", "_ga"], (function(e) {
                            var t = s.cookie(e);
                            t && (N[e] = t)
                        })), {
                            schema: "iglu:com.google.analytics/cookies/jsonschema/1-0-0",
                            data: N
                        })), Ee.geolocation && ct(), R.setBase64Encoding(!a.hasOwnProperty("encodeBase64") || a.encodeBase64), R.setTrackerVersion(n), R.setTrackerNamespace(t), R.setAppId(ee), R.setPlatform(Z), R.setTimezone(l.detectTimezone()), R.addPayloadPair("lang", ye), R.addPayloadPair("cs", me), _e) Object.prototype.hasOwnProperty.call(_e, ze) && ("res" === ze || "cd" === ze || "cookie" === ze ? R.addPayloadPair(ze, _e[ze]) : R.addPayloadPair("f_" + ze, _e[ze]));

                    function Fe() {
                        (Y = u.fixupUrl(q.domain, J.location.href, s.getReferrer()))[1] !== K && (X = s.getReferrer(K)), Q = s.fixupDomain(Y[0]), K = Y[1]
                    }

                    function Re() {
                        var e = (new Date).getTime();
                        this.href && (this.href = s.decorateQuerystring(this.href, "_sp", I + "." + e))
                    }

                    function Ue(e) {
                        for (var t = 0; t < q.links.length; t++) {
                            var n = q.links[t];
                            !n.spDecorationEnabled && e(n) && (s.addEventListener(n, "click", Re, !0), s.addEventListener(n, "mousedown", Re, !0), n.spDecorationEnabled = !0)
                        }
                    }

                    function Ve(e) {
                        var t;
                        return A && (t = new RegExp("#.*"), e = e.replace(t, "")), x && (t = new RegExp("[{}]", "g"), e = e.replace(t, "")), e
                    }

                    function Ge(e) {
                        var t = new RegExp("^([a-z]+):").exec(e);
                        return t ? t[1] : null
                    }

                    function He(e) {
                        return oe + e + "." + D
                    }

                    function qe(e) {
                        var t = He(e);
                        return "localStorage" == we ? s.attemptGetLocalStorage(t) : "cookie" == we || "cookieAndLocalStorage" == we ? s.cookie(t) : void 0
                    }

                    function Je() {
                        Fe(), D = Ae((ae || Q) + (ie || "/")).slice(0, 4)
                    }

                    function We() {
                        var e = new Date;
                        C = e.getTime()
                    }

                    function Ye() {
                        ! function() {
                            var e = Qe(),
                                t = e[0];
                            t < P ? P = t : t > T && (T = t);
                            var n = e[1];
                            n < O ? O = n : n > E && (E = n)
                        }(), We()
                    }

                    function Qe() {
                        var e = q.compatMode && "BackCompat" !== q.compatMode ? q.documentElement : q.body;
                        return [e.scrollLeft || J.pageXOffset, e.scrollTop || J.pageYOffset]
                    }

                    function Ke() {
                        var e = Qe(),
                            t = e[0];
                        P = t, T = t;
                        var n = e[1];
                        O = n, E = n
                    }

                    function Xe(e) {
                        var t = Math.round(e);
                        if (!isNaN(t)) return t
                    }

                    function Ze() {
                        et(He("ses"), "*", de)
                    }

                    function $e(e, t, n, r, o, a) {
                        et(He("id"), e + "." + t + "." + n + "." + r + "." + o + "." + a, fe)
                    }

                    function et(e, t, n) {
                        "localStorage" == we ? s.attemptWriteLocalStorage(e, t, n) : "cookie" != we && "cookieAndLocalStorage" != we || s.cookie(e, t, n, ie, ae, ce, se)
                    }

                    function tt() {
                        if ("none" == we) return [];
                        var e, t = new Date,
                            n = Math.round(t.getTime() / 1e3),
                            r = qe("id");
                        return r ? (e = r.split(".")).unshift("0") : e = ["1", I, n, 0, n, ""], e[6] || (e[6] = w.v4()), e
                    }

                    function nt(e) {
                        return pe ? "https://" + e : ge ? "http://" + e : ("https:" === q.location.protocol ? "https" : "http") + "://" + e
                    }

                    function rt(e) {
                        var t, n, r = De.concat(e || []);
                        if (Ee.webPage && r.push({
                                schema: "iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0",
                                data: {
                                    id: ot()
                                }
                            }), Ee.performanceTiming) {
                            var o = function() {
                                var e = ["navigationStart", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "secureConnectionStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "unloadEventStart", "unloadEventEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "msFirstPaint", "chromeFirstPaint", "requestEnd", "proxyStart", "proxyEnd"],
                                    t = J.performance || J.mozPerformance || J.msPerformance || J.webkitPerformance;
                                if (t) {
                                    var n = {};
                                    for (var r in t.timing) s.isValueInArray(r, e) && null !== t.timing[r] && (n[r] = t.timing[r]);
                                    return delete n.requestEnd, {
                                        schema: "iglu:org.w3/PerformanceTiming/jsonschema/1-0-0",
                                        data: n
                                    }
                                }
                            }();
                            o && r.push(o)
                        }
                        if (J.optimizely) {
                            if (Ee.optimizelySummary) {
                                var a = c((t = at("state"), n = at("experiments"), c(t && n && t.activeExperiments, (function(e) {
                                    var r = n[e];
                                    return {
                                        activeExperimentId: e.toString(),
                                        variation: t.variationIdsMap[e][0].toString(),
                                        conditional: r && r.conditional,
                                        manual: r && r.manual,
                                        name: r && r.name
                                    }
                                }))), (function(e) {
                                    return {
                                        schema: "iglu:com.optimizely.snowplow/optimizely_summary/jsonschema/1-0-0",
                                        data: e
                                    }
                                }));
                                i(a, (function(e) {
                                    r.push(e)
                                }))
                            }
                            if (Ee.optimizelyXSummary && (a = function() {
                                    return c((e = it("state"), t = e.getActiveExperimentIds(),
                                        n = e.getVariationMap(), r = it("visitor"), c(t, (function(e) {
                                            var t = n[e],
                                                o = t && t.name && t.name.toString() || null,
                                                a = t && t.id,
                                                i = r && r.visitorId && r.visitorId.toString() || null;
                                            return {
                                                experimentId: parseInt(e) || null,
                                                variationName: o,
                                                variation: parseInt(a) || null,
                                                visitorId: i
                                            }
                                        }))), (function(e) {
                                        return {
                                            schema: "iglu:com.optimizely.optimizelyx/summary/jsonschema/1-0-0",
                                            data: e
                                        }
                                    }));
                                    var e, t, n, r
                                }(), i(a, (function(e) {
                                    r.push(e)
                                }))), Ee.optimizelyExperiments)
                                for (var u = function() {
                                        var e = at("experiments");
                                        if (e) {
                                            var t = [];
                                            for (var n in e)
                                                if (e.hasOwnProperty(n)) {
                                                    var r = {};
                                                    r.id = n;
                                                    var o = e[n];
                                                    r.code = o.code, r.manual = o.manual, r.conditional = o.conditional, r.name = o.name, r.variationIds = o.variation_ids, t.push({
                                                        schema: "iglu:com.optimizely/experiment/jsonschema/1-0-0",
                                                        data: r
                                                    })
                                                }
                                            return t
                                        }
                                        return []
                                    }(), l = 0; l < u.length; l++) r.push(u[l]);
                            if (Ee.optimizelyStates) {
                                var f = function() {
                                    var e = [],
                                        t = at("experiments");
                                    if (t)
                                        for (var n in t) t.hasOwnProperty(n) && e.push(n);
                                    var r = at("state");
                                    if (r) {
                                        for (var o = [], a = r.activeExperiments || [], i = 0; i < e.length; i++) {
                                            var c = e[i],
                                                u = {};
                                            u.experimentId = c, u.isActive = s.isValueInArray(e[i], a);
                                            var l = r.variationMap || {};
                                            u.variationIndex = l[c];
                                            var f = r.variationNamesMap || {};
                                            u.variationName = f[c];
                                            var d = r.variationIdsMap || {};
                                            d[c] && 1 === d[c].length && (u.variationId = d[c][0]), o.push({
                                                schema: "iglu:com.optimizely/state/jsonschema/1-0-0",
                                                data: u
                                            })
                                        }
                                        return o
                                    }
                                    return []
                                }();
                                for (l = 0; l < f.length; l++) r.push(f[l])
                            }
                            if (Ee.optimizelyVariations) {
                                var d = function() {
                                    var e = at("variations");
                                    if (e) {
                                        var t = [];
                                        for (var n in e)
                                            if (e.hasOwnProperty(n)) {
                                                var r = {};
                                                r.id = n;
                                                var o = e[n];
                                                r.name = o.name, r.code = o.code, t.push({
                                                    schema: "iglu:com.optimizely/variation/jsonschema/1-0-0",
                                                    data: r
                                                })
                                            }
                                        return t
                                    }
                                    return []
                                }();
                                for (l = 0; l < d.length; l++) r.push(d[l])
                            }
                            if (Ee.optimizelyVisitor) {
                                var m = function() {
                                    var e = at("visitor");
                                    if (e) {
                                        var t = {};
                                        t.browser = e.browser, t.browserVersion = e.browserVersion, t.device = e.device, t.deviceType = e.deviceType, t.ip = e.ip;
                                        var n = e.platform || {};
                                        t.platformId = n.id, t.platformVersion = n.version;
                                        var r = e.location || {};
                                        return t.locationCity = r.city, t.locationRegion = r.region, t.locationCountry = r.country, t.mobile = e.mobile, t.mobileId = e.mobileId, t.referrer = e.referrer, t.os = e.os, {
                                            schema: "iglu:com.optimizely/visitor/jsonschema/1-0-0",
                                            data: t
                                        }
                                    }
                                }();
                                m && r.push(m)
                            }
                            if (Ee.optimizelyAudiences) {
                                var p = function() {
                                    var e = at("visitor", "audiences");
                                    if (e) {
                                        var t = [];
                                        for (var n in e)
                                            if (e.hasOwnProperty(n)) {
                                                var r = {
                                                    id: n,
                                                    isMember: e[n]
                                                };
                                                t.push({
                                                    schema: "iglu:com.optimizely/visitor_audience/jsonschema/1-0-0",
                                                    data: r
                                                })
                                            }
                                        return t
                                    }
                                    return []
                                }();
                                for (l = 0; l < p.length; l++) r.push(p[l])
                            }
                            if (Ee.optimizelyDimensions) {
                                var g = function() {
                                    var e = at("visitor", "dimensions");
                                    if (e) {
                                        var t = [];
                                        for (var n in e)
                                            if (e.hasOwnProperty(n)) {
                                                var r = {
                                                    id: n,
                                                    value: e[n]
                                                };
                                                t.push({
                                                    schema: "iglu:com.optimizely/visitor_dimension/jsonschema/1-0-0",
                                                    data: r
                                                })
                                            }
                                        return t
                                    }
                                    return []
                                }();
                                for (l = 0; l < g.length; l++) r.push(g[l])
                            }
                        }
                        if (Ee.parrable) {
                            var v = function() {
                                var e = window._hawk;
                                if (e) {
                                    var t = {
                                        encryptedId: null,
                                        optout: null
                                    };
                                    t.encryptedId = e.browserid;
                                    var n = new RegExp("(?:^|;)\\s?" + "_parrable_hawk_optout".replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") + "=(.*?)(?:;|$)", "i"),
                                        r = document.cookie.match(n);
                                    return t.optout = r && decodeURIComponent(r[1]) ? r && decodeURIComponent(r[1]) : "false", {
                                        schema: "iglu:com.parrable/encrypted_payload/jsonschema/1-0-0",
                                        data: t
                                    }
                                }
                            }();
                            v && r.push(v)
                        }
                        if (Ee.gdprBasis && Be.gdprBasis) {
                            var h = function() {
                                if (Be.gdprBasis) return {
                                    schema: "iglu:com.snowplowanalytics.snowplow/gdpr/jsonschema/1-0-0",
                                    data: {
                                        basisForProcessing: Be.gdprBasis,
                                        documentId: Be.gdprDocId || null,
                                        documentVersion: Be.gdprDocVer || null,
                                        documentDescription: Be.gdprDocDesc || null
                                    }
                                }
                            }();
                            h && r.push(h)
                        }
                        return r
                    }

                    function ot() {
                        return null == r.pageViewId && (r.pageViewId = w.v4()), r.pageViewId
                    }

                    function at(e, t) {
                        var n;
                        return J.optimizely && J.optimizely.data && (n = J.optimizely.data[e], void 0 !== t && void 0 !== n && (n = n[t])), n
                    }

                    function it(e, t) {
                        var n;
                        return J.optimizely && "function" == typeof J.optimizely.get && (n = J.optimizely.get(e), void 0 !== t && void 0 !== n && (n = n[t])), n
                    }

                    function ct() {
                        !Oe && W.geolocation && W.geolocation.getCurrentPosition && (Oe = !0, W.geolocation.getCurrentPosition((function(e) {
                            var t = e.coords,
                                n = {
                                    schema: "iglu:com.snowplowanalytics.snowplow/geolocation_context/jsonschema/1-1-0",
                                    data: {
                                        latitude: t.latitude,
                                        longitude: t.longitude,
                                        latitudeLongitudeAccuracy: t.accuracy,
                                        altitude: t.altitude,
                                        altitudeAccuracy: t.altitudeAccuracy,
                                        bearing: t.heading,
                                        speed: t.speed,
                                        timestamp: Math.round(e.timestamp)
                                    }
                                };
                            De.push(n)
                        })))
                    }

                    function st(e, t) {
                        return (e || []).concat(t ? t() : [])
                    }

                    function ut(e, t, n, a) {
                        Fe(), Me && (Le && null != r.pageViewId || (r.pageViewId = w.v4())), Me = !0, te = q.title, b = e;
                        var i = s.fixupTitle(b || te);
                        R.trackPageView(Ve(k || K), i, Ve(y || X), rt(st(t, n)), a);
                        var c = new Date,
                            u = !1;
                        if (Ne.enabled && !Ne.installed) {
                            Ne.installed = !0, u = !0;
                            var l = {
                                update: function() {
                                    if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
                                        var e = !1,
                                            t = Object.defineProperty({}, "passive", {
                                                get: function() {
                                                    e = !0
                                                }
                                            }),
                                            n = function() {};
                                        window.addEventListener("testPassiveEventSupport", n, t), window.removeEventListener("testPassiveEventSupport", n, t), l.hasSupport = e
                                    }
                                }
                            };
                            l.update();
                            var f = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                            Object.prototype.hasOwnProperty.call(l, "hasSupport") ? s.addEventListener(q, f, We, {
                                passive: !0
                            }) : s.addEventListener(q, f, We), Ke(), s.addEventListener(q, "click", We), s.addEventListener(q, "mouseup", We), s.addEventListener(q, "mousedown", We), s.addEventListener(q, "mousemove", We), s.addEventListener(J, "scroll", Ye), s.addEventListener(q, "keypress", We), s.addEventListener(q, "keydown", We), s.addEventListener(q, "keyup", We), s.addEventListener(J, "resize", We), s.addEventListener(J, "focus", We), s.addEventListener(J, "blur", We)
                        }
                        if (Ne.enabled && (re || u))
                            for (var d in C = c.getTime(), Ne.configurations)
                                if (Ne.configurations.hasOwnProperty(d)) {
                                    var m = Ne.configurations[d];
                                    clearInterval(m.activityInterval), m.activityInterval = lt(o(o({}, m), {}, {
                                        configLastActivityTime: C,
                                        context: st(t, n)
                                    }))
                                }
                    }

                    function lt(e) {
                        var t = e.configHeartBeatTimer,
                            n = e.configMinimumVisitLength,
                            r = e.configLastActivityTime,
                            o = e.callback,
                            a = e.context;
                        return setInterval((function() {
                            var e = new Date;
                            C + t > e.getTime() && r + 1e3 * n < e.getTime() && (Fe(), o({
                                context: a,
                                pageViewId: ot(),
                                minXOffset: P,
                                minYOffset: O,
                                maxXOffset: T,
                                maxYOffset: E
                            }), Ke())
                        }), t)
                    }

                    function ft(e, t, n) {
                        return e === parseInt(e, 10) && t === parseInt(t, 10) ? {
                            configMinimumVisitLength: e,
                            configHeartBeatTimer: 1e3 * t,
                            activityInterval: null,
                            callback: n
                        } : (s.warn("Activity tracking not enabled, please provide integer values for minimumVisitLength and heartBeatDelay."), {})
                    }

                    function dt(e) {
                        var t = e.context,
                            n = e.minXOffset,
                            r = e.minYOffset,
                            o = e.maxXOffset,
                            a = e.maxYOffset,
                            i = q.title;
                        i !== te && (te = i, b = null), R.trackPagePing(Ve(k || K), s.fixupTitle(b || te), Ve(y || X), Xe(n), Xe(o), Xe(r), Xe(a), rt(t))
                    }

                    function mt(e, t, n, r, o, a, i, c, s) {
                        R.trackEcommerceTransactionItem(e, t, n, r, o, a, i, rt(c), s)
                    }

                    function pt(e, t) {
                        return "" !== e ? e + t.charAt(0).toUpperCase() + t.slice(1) : t
                    }

                    function gt(e) {
                        var t, n, r, o = ["", "webkit", "ms", "moz"];
                        if (!j)
                            for (n = 0; n < o.length; n++) {
                                if (q[pt(r = o[n], "hidden")]) {
                                    "prerender" === q[pt(r, "visibilityState")] && (t = !0);
                                    break
                                }
                                if (!1 === q[pt(r, "hidden")]) break
                            }
                        t ? s.addEventListener(q, r + "visibilitychange", (function t() {
                            q.removeEventListener(r + "visibilitychange", t, !1), e()
                        })) : e()
                    }

                    function vt() {
                        H = U ? V : G
                    }
                    Je(), B = "none" != we && !!qe("ses"), (z = tt())[1] ? I = z[1] : (I = w.v4(), z[1] = I), L = z[6], B || (z[3]++, L = w.v4(), z[6] = L, z[5] = z[4]), "none" != we && (Ze(), z[4] = Math.round((new Date).getTime() / 1e3), z.shift(), $e.apply(null, z)), a.crossDomainLinker && Ue(a.crossDomainLinker);
                    var ht = "User Fingerprinting is no longer supported. This function will be removed in a future release.",
                        wt = " is deprecated. Instead use the argmap argument on tracker initialisation: ";
                    return V.getDomainSessionIndex = function() {
                            return xe
                        }, V.getPageViewId = function() {
                            return ot()
                        }, V.newSession = function() {
                            var e = Math.round((new Date).getTime() / 1e3),
                                t = (qe("ses"), tt()),
                                n = t[0],
                                r = t[1],
                                o = t[2],
                                a = t[3],
                                i = t[4],
                                c = t[5],
                                s = t[6];
                            "0" === n ? (L = s, "none" != we && (a++, c = i, L = w.v4()), xe = a, Ze()) : (L = w.v4(), xe++), "none" != we && ($e(r, o, xe, e, c, L), Ze()), be = (new Date).getTime()
                        }, V.getCookieName = function(e) {
                            return He(e)
                        }, V.getUserId = function() {
                            return M
                        }, V.getDomainUserId = function() {
                            return tt()[1]
                        }, V.getDomainUserInfo = function() {
                            return tt()
                        }, V.getUserFingerprint = function() {
                            return s.warn(ht), 0
                        }, V.setAppId = function(e) {
                            s.warn("setAppId" + wt + "appId"), R.setAppId(e)
                        }, V.setReferrerUrl = function(e) {
                            y = e
                        }, V.setCustomUrl = function(e) {
                            Fe(), k = function(e, t) {
                                var n;
                                return Ge(t) ? t : "/" === t.slice(0, 1) ? Ge(e) + "://" + s.getHostName(e) + t : ((n = (e = Ve(e)).indexOf("?")) >= 0 && (e = e.slice(0, n)), (n = e.lastIndexOf("/")) !== e.length - 1 && (e = e.slice(0, n + 1)), e + t)
                            }(K, e)
                        }, V.setDocumentTitle = function(e) {
                            te = q.title, b = e
                        }, V.discardHashTag = function(e) {
                            A = e
                        }, V.discardBrace = function(e) {
                            x = e
                        }, V.setCookieNamePrefix = function(e) {
                            s.warn("setCookieNamePrefix" + wt + "cookieName"), oe = e
                        }, V.setCookieDomain = function(e) {
                            s.warn("setCookieDomain" + wt + "cookieDomain"), ae = s.fixupDomain(e), Je()
                        }, V.setCookiePath = function(e) {
                            ie = e, Je()
                        }, V.setVisitorCookieTimeout = function(e) {
                            fe = e
                        }, V.setSessionCookieTimeout = function(e) {
                            s.warn("setSessionCookieTimeout" + wt + "sessionCookieTimeout"), de = e
                        }, V.setUserFingerprintSeed = function() {
                            s.warn(ht)
                        }, V.enableUserFingerprint = function() {
                            s.warn(ht)
                        }, V.respectDoNotTrack = function(e) {
                            s.warn("respectDoNotTrack" + wt + "respectDoNotTrack");
                            var t = W.doNotTrack || W.msDoNotTrack;
                            le = e && ("yes" === t || "1" === t)
                        },
                        V.crossDomainLinker = function(e) {
                            Ue(e)
                        }, V.enableLinkClickTracking = function(e, t, n, o) {
                            r.hasLoaded ? (je.configureLinkClickTracking(e, t, n, o), je.addClickListeners()) : r.registeredOnLoadHandlers.push((function() {
                                je.configureLinkClickTracking(e, t, n, o), je.addClickListeners()
                            }))
                        }, V.refreshLinkClickTracking = function() {
                            r.hasLoaded ? je.addClickListeners() : r.registeredOnLoadHandlers.push((function() {
                                je.addClickListeners()
                            }))
                        }, V.enableActivityTracking = function(e, t) {
                            Ne.enabled = !0, Ne.configurations.pagePing = ft(e, t, dt)
                        }, V.enableActivityTrackingCallback = function(e, t, n) {
                            Ne.enabled = !0, Ne.configurations.callback = ft(e, t, n)
                        }, V.updatePageActivity = function() {
                            We()
                        }, V.enableFormTracking = function(e, t) {
                            r.hasLoaded ? (Ce.configureFormTracking(e), Ce.addFormListeners(t)) : r.registeredOnLoadHandlers.push((function() {
                                Ce.configureFormTracking(e), Ce.addFormListeners(t)
                            }))
                        }, V.killFrame = function() {
                            J.location !== J.top.location && (J.top.location = J.location)
                        }, V.redirectFile = function(e) {
                            "file:" === J.location.protocol && (J.location = e)
                        }, V.setOptOutCookie = function(e) {
                            S = e
                        }, V.setCountPreRendered = function(e) {
                            j = e
                        }, V.setUserId = function(e) {
                            M = e
                        }, V.identifyUser = function(e) {
                            setUserId(e)
                        }, V.setUserIdFromLocation = function(e) {
                            Fe(), M = s.fromQuerystring(e, K)
                        }, V.setUserIdFromReferrer = function(e) {
                            Fe(), M = s.fromQuerystring(e, X)
                        }, V.setUserIdFromCookie = function(e) {
                            M = s.cookie(e)
                        }, V.setCollectorCf = function(e) {
                            _ = function(e) {
                                return nt(e + ".cloudfront.net")
                            }(e)
                        }, V.setCollectorUrl = function(e) {
                            _ = nt(e)
                        }, V.setPlatform = function(e) {
                            s.warn("setPlatform" + wt + "platform"), R.setPlatform(e)
                        }, V.encodeBase64 = function(e) {
                            s.warn("encodeBase64" + wt + "encodeBase64"), R.setBase64Encoding(e)
                        }, V.flushBuffer = function() {
                            Te.executeQueue()
                        }, V.enableGeolocationContext = ct, V.trackPageView = function(e, t, n, r) {
                            gt((function() {
                                ut(e, t, n, r)
                            }))
                        }, V.trackStructEvent = function(e, t, n, r, o, a, i) {
                            gt((function() {
                                R.trackStructEvent(e, t, n, r, o, rt(a), i)
                            }))
                        }, V.trackSelfDescribingEvent = function(e, t, n) {
                            gt((function() {
                                R.trackSelfDescribingEvent(e, rt(t), n)
                            }))
                        }, V.trackUnstructEvent = function(e, t, n) {
                            gt((function() {
                                R.trackSelfDescribingEvent(e, rt(t), n)
                            }))
                        }, V.addTrans = function(e, t, n, r, o, a, i, c, s, u, l) {
                            Se.transaction = {
                                orderId: e,
                                affiliation: t,
                                total: n,
                                tax: r,
                                shipping: o,
                                city: a,
                                state: i,
                                country: c,
                                currency: s,
                                context: u,
                                tstamp: l
                            }
                        }, V.addItem = function(e, t, n, r, o, a, i, c, s) {
                            Se.items.push({
                                orderId: e,
                                sku: t,
                                name: n,
                                category: r,
                                price: o,
                                quantity: a,
                                currency: i,
                                context: c,
                                tstamp: s
                            })
                        }, V.trackTrans = function() {
                            gt((function() {
                                var e, t, n, r, o, a, i, c, s, u, l;
                                e = Se.transaction.orderId, t = Se.transaction.affiliation, n = Se.transaction.total, r = Se.transaction.tax, o = Se.transaction.shipping, a = Se.transaction.city, i = Se.transaction.state, c = Se.transaction.country, s = Se.transaction.currency, u = Se.transaction.context, l = Se.transaction.tstamp, R.trackEcommerceTransaction(e, t, n, r, o, a, i, c, s, rt(u), l);
                                for (var f = 0; f < Se.items.length; f++) {
                                    var d = Se.items[f];
                                    mt(d.orderId, d.sku, d.name, d.category, d.price, d.quantity, d.currency, d.context, d.tstamp)
                                }
                                Se = {
                                    transaction: {},
                                    items: []
                                }
                            }))
                        }, V.trackLinkClick = function(e, t, n, r, o, a, i) {
                            gt((function() {
                                R.trackLinkClick(e, t, n, r, o, rt(a), i)
                            }))
                        }, V.trackAdImpression = function(e, t, n, r, o, a, i, c, s, u) {
                            gt((function() {
                                R.trackAdImpression(e, t, n, r, o, a, i, c, rt(s), u)
                            }))
                        }, V.trackAdClick = function(e, t, n, r, o, a, i, c, s, u, l) {
                            gt((function() {
                                R.trackAdClick(e, t, n, r, o, a, i, c, s, rt(u), l)
                            }))
                        }, V.trackAdConversion = function(e, t, n, r, o, a, i, c, s, u, l) {
                            gt((function() {
                                R.trackAdConversion(e, t, n, r, o, a, i, c, s, rt(u), l)
                            }))
                        }, V.trackSocialInteraction = function(e, t, n, r, o) {
                            gt((function() {
                                R.trackSocialInteraction(e, t, n, rt(r), o)
                            }))
                        }, V.trackAddToCart = function(e, t, n, r, o, a, i, c) {
                            gt((function() {
                                R.trackAddToCart(e, t, n, r, o, a, rt(i), c)
                            }))
                        }, V.trackRemoveFromCart = function(e, t, n, r, o, a, i, c) {
                            gt((function() {
                                R.trackRemoveFromCart(e, t, n, r, o, a, rt(i), c)
                            }))
                        }, V.trackSiteSearch = function(e, t, n, r, o, a) {
                            gt((function() {
                                R.trackSiteSearch(e, t, n, r, rt(o), a)
                            }))
                        }, V.trackTiming = function(e, t, n, r, o, a) {
                            gt((function() {
                                R.trackSelfDescribingEvent({
                                    schema: "iglu:com.snowplowanalytics.snowplow/timing/jsonschema/1-0-0",
                                    data: {
                                        category: e,
                                        variable: t,
                                        timing: n,
                                        label: r
                                    }
                                }, rt(o), a)
                            }))
                        }, V.trackConsentWithdrawn = function(e, t, n, r, o, a, i) {
                            gt((function() {
                                R.trackConsentWithdrawn(e, t, n, r, o, rt(a), i)
                            }))
                        }, V.trackConsentGranted = function(e, t, n, r, o, a, i) {
                            gt((function() {
                                R.trackConsentGranted(e, t, n, r, o, rt(a), i)
                            }))
                        }, V.trackEnhancedEcommerceAction = function(e, t, n) {
                            var r = Ie.concat(t || []);
                            Ie.length = 0, gt((function() {
                                R.trackSelfDescribingEvent({
                                    schema: "iglu:com.google.analytics.enhanced-ecommerce/action/jsonschema/1-0-0",
                                    data: {
                                        action: e
                                    }
                                }, rt(r), n)
                            }))
                        }, V.addEnhancedEcommerceActionContext = function(e, t, n, r, o, a, i, c, u, l) {
                            Ie.push({
                                schema: "iglu:com.google.analytics.enhanced-ecommerce/actionFieldObject/jsonschema/1-0-0",
                                data: {
                                    id: e,
                                    affiliation: t,
                                    revenue: s.parseFloat(n),
                                    tax: s.parseFloat(r),
                                    shipping: s.parseFloat(o),
                                    coupon: a,
                                    list: i,
                                    step: s.parseInt(c),
                                    option: u,
                                    currency: l
                                }
                            })
                        }, V.addEnhancedEcommerceImpressionContext = function(e, t, n, r, o, a, i, c, u) {
                            Ie.push({
                                schema: "iglu:com.google.analytics.enhanced-ecommerce/impressionFieldObject/jsonschema/1-0-0",
                                data: {
                                    id: e,
                                    name: t,
                                    list: n,
                                    brand: r,
                                    category: o,
                                    variant: a,
                                    position: s.parseInt(i),
                                    price: s.parseFloat(c),
                                    currency: u
                                }
                            })
                        }, V.addEnhancedEcommerceProductContext = function(e, t, n, r, o, a, i, c, u, l, f) {
                            Ie.push({
                                schema: "iglu:com.google.analytics.enhanced-ecommerce/productFieldObject/jsonschema/1-0-0",
                                data: {
                                    id: e,
                                    name: t,
                                    list: n,
                                    brand: r,
                                    category: o,
                                    variant: a,
                                    price: s.parseFloat(i),
                                    quantity: s.parseInt(c),
                                    coupon: u,
                                    position: s.parseInt(l),
                                    currency: f
                                }
                            })
                        }, V.addEnhancedEcommercePromoContext = function(e, t, n, r, o) {
                            Ie.push({
                                schema: "iglu:com.google.analytics.enhanced-ecommerce/promoFieldObject/jsonschema/1-0-0",
                                data: {
                                    id: e,
                                    name: t,
                                    creative: n,
                                    position: r,
                                    currency: o
                                }
                            })
                        }, V.enableGdprContext = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                                o = F[e];
                            o ? (Ee.gdprBasis = !0, Be = {
                                gdprBasis: o,
                                gdprDocId: t,
                                gdprDocVer: n,
                                gdprDocDesc: r
                            }) : s.warn("enableGdprContext failed. basisForProcessing must be set to one of: consent, legalObligation, vitalInterests publicTask, legitimateInterests")
                        }, V.addGlobalContexts = function(e) {
                            R.addGlobalContexts(e)
                        }, V.removeGlobalContexts = function(e) {
                            R.removeGlobalContexts(e)
                        },
                        V.clearGlobalContexts = function() {
                            R.clearGlobalContexts()
                        }, V.enableErrorTracking = function(e, t) {
                            Pe.enableErrorTracking(e, t, rt())
                        }, V.trackError = function(e, t, n, r, o, a) {
                            var i = rt(a);
                            Pe.trackError(e, t, n, r, o, i)
                        }, V.preservePageViewId = function() {
                            Le = !0
                        }, V.setDebug = function(e) {
                            U = Boolean(e).valueOf(), vt()
                        }, G = h(V), vt(), H
                }
            }, function(e, t, n) {
                ! function() {
                    var e = n(0);

                    function r(e) {
                        var t, n;
                        if (n = e, new RegExp("^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$").test(n)) try {
                            return t = document.body.children[0].children[0].children[0].children[0].children[0].children[0].innerHTML, "You have reached the cached page for", "You have reached the cached page for" === t.slice(0, "You have reached the cached page for".length)
                        } catch (e) {
                            return !1
                        }
                    }
                    t.fixupUrl = function(t, n, o) {
                        var a, i, c;
                        return "translate.googleusercontent.com" === t ? ("" === o && (o = n), a = n, i = "u", c = new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+))([?][^#]+)").exec(a), n = e.fromQuerystring(i, c[1]), t = e.getHostName(n)) : ("cc.bingj.com" === t || "webcache.googleusercontent.com" === t || r(t)) && (n = document.links[0].href, t = e.getHostName(n)), [t, n, o]
                    }
                }()
            }, function(e, t, n) {
                var r;
                (r = function() {
                    "use strict";
                    var e = function(e) {
                            var t = -e.getTimezoneOffset();
                            return null !== t ? t : 0
                        },
                        t = function(e, t, n) {
                            var r = new Date;
                            return void 0 !== e && r.setFullYear(e), r.setMonth(t), r.setDate(n), r
                        },
                        n = function(n) {
                            return e(t(n, 0, 2))
                        },
                        o = function(n) {
                            return e(t(n, 5, 2))
                        };
                    return {
                        determine: function() {
                            var e, t, a, i = (e = n(), t = o(), (a = e - t) < 0 ? e + ",1" : a > 0 ? t + ",1,s" : e + ",0");
                            return new r.TimeZone(r.olson.timezones[i])
                        },
                        date_is_dst: function(t) {
                            var r = t.getMonth() > 7,
                                a = r ? o(t.getFullYear()) : n(t.getFullYear()),
                                i = a - e(t);
                            return a < 0 || r ? 0 !== i : i < 0
                        },
                        dst_start_for: function(e) {
                            var t = new Date(2010, 6, 15, 1, 0, 0, 0);
                            return {
                                "America/Denver": new Date(2011, 2, 13, 3, 0, 0, 0),
                                "America/Mazatlan": new Date(2011, 3, 3, 3, 0, 0, 0),
                                "America/Chicago": new Date(2011, 2, 13, 3, 0, 0, 0),
                                "America/Mexico_City": new Date(2011, 3, 3, 3, 0, 0, 0),
                                "America/Asuncion": new Date(2012, 9, 7, 3, 0, 0, 0),
                                "America/Santiago": new Date(2012, 9, 3, 3, 0, 0, 0),
                                "America/Campo_Grande": new Date(2012, 9, 21, 5, 0, 0, 0),
                                "America/Montevideo": new Date(2011, 9, 2, 3, 0, 0, 0),
                                "America/Sao_Paulo": new Date(2011, 9, 16, 5, 0, 0, 0),
                                "America/Los_Angeles": new Date(2011, 2, 13, 8, 0, 0, 0),
                                "America/Santa_Isabel": new Date(2011, 3, 5, 8, 0, 0, 0),
                                "America/Havana": new Date(2012, 2, 10, 2, 0, 0, 0),
                                "America/New_York": new Date(2012, 2, 10, 7, 0, 0, 0),
                                "Europe/Helsinki": new Date(2013, 2, 31, 5, 0, 0, 0),
                                "Pacific/Auckland": new Date(2011, 8, 26, 7, 0, 0, 0),
                                "America/Halifax": new Date(2011, 2, 13, 6, 0, 0, 0),
                                "America/Goose_Bay": new Date(2011, 2, 13, 2, 1, 0, 0),
                                "America/Miquelon": new Date(2011, 2, 13, 5, 0, 0, 0),
                                "America/Godthab": new Date(2011, 2, 27, 1, 0, 0, 0),
                                "Europe/Moscow": t,
                                "Asia/Amman": new Date(2013, 2, 29, 1, 0, 0, 0),
                                "Asia/Beirut": new Date(2013, 2, 31, 2, 0, 0, 0),
                                "Asia/Damascus": new Date(2013, 3, 6, 2, 0, 0, 0),
                                "Asia/Jerusalem": new Date(2013, 2, 29, 5, 0, 0, 0),
                                "Asia/Yekaterinburg": t,
                                "Asia/Omsk": t,
                                "Asia/Krasnoyarsk": t,
                                "Asia/Irkutsk": t,
                                "Asia/Yakutsk": t,
                                "Asia/Vladivostok": t,
                                "Asia/Baku": new Date(2013, 2, 31, 4, 0, 0),
                                "Asia/Yerevan": new Date(2013, 2, 31, 3, 0, 0),
                                "Asia/Kamchatka": t,
                                "Asia/Gaza": new Date(2010, 2, 27, 4, 0, 0),
                                "Africa/Cairo": new Date(2010, 4, 1, 3, 0, 0),
                                "Europe/Minsk": t,
                                "Pacific/Apia": new Date(2010, 10, 1, 1, 0, 0, 0),
                                "Pacific/Fiji": new Date(2010, 11, 1, 0, 0, 0),
                                "Australia/Perth": new Date(2008, 10, 1, 1, 0, 0, 0)
                            }[e]
                        }
                    }
                }()).TimeZone = function(e) {
                    "use strict";
                    var t = {
                            "America/Denver": ["America/Denver", "America/Mazatlan"],
                            "America/Chicago": ["America/Chicago", "America/Mexico_City"],
                            "America/Santiago": ["America/Santiago", "America/Asuncion", "America/Campo_Grande"],
                            "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"],
                            "Asia/Beirut": ["Asia/Amman", "Asia/Jerusalem", "Asia/Beirut", "Europe/Helsinki", "Asia/Damascus"],
                            "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"],
                            "America/Los_Angeles": ["America/Los_Angeles", "America/Santa_Isabel"],
                            "America/New_York": ["America/Havana", "America/New_York"],
                            "America/Halifax": ["America/Goose_Bay", "America/Halifax"],
                            "America/Godthab": ["America/Miquelon", "America/Godthab"],
                            "Asia/Dubai": ["Europe/Moscow"],
                            "Asia/Dhaka": ["Asia/Yekaterinburg"],
                            "Asia/Jakarta": ["Asia/Omsk"],
                            "Asia/Shanghai": ["Asia/Krasnoyarsk", "Australia/Perth"],
                            "Asia/Tokyo": ["Asia/Irkutsk"],
                            "Australia/Brisbane": ["Asia/Yakutsk"],
                            "Pacific/Noumea": ["Asia/Vladivostok"],
                            "Pacific/Tarawa": ["Asia/Kamchatka", "Pacific/Fiji"],
                            "Pacific/Tongatapu": ["Pacific/Apia"],
                            "Asia/Baghdad": ["Europe/Minsk"],
                            "Asia/Baku": ["Asia/Yerevan", "Asia/Baku"],
                            "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"]
                        },
                        n = e;
                    return void 0 !== t[n] && function() {
                        for (var e = t[n], o = e.length, a = 0, i = e[0]; a < o; a += 1)
                            if (i = e[a], r.date_is_dst(r.dst_start_for(i))) return void(n = i)
                    }(), {
                        name: function() {
                            return n
                        }
                    }
                }, r.olson = {}, r.olson.timezones = {
                    "-720,0": "Pacific/Majuro",
                    "-660,0": "Pacific/Pago_Pago",
                    "-600,1": "America/Adak",
                    "-600,0": "Pacific/Honolulu",
                    "-570,0": "Pacific/Marquesas",
                    "-540,0": "Pacific/Gambier",
                    "-540,1": "America/Anchorage",
                    "-480,1": "America/Los_Angeles",
                    "-480,0": "Pacific/Pitcairn",
                    "-420,0": "America/Phoenix",
                    "-420,1": "America/Denver",
                    "-360,0": "America/Guatemala",
                    "-360,1": "America/Chicago",
                    "-360,1,s": "Pacific/Easter",
                    "-300,0": "America/Bogota",
                    "-300,1": "America/New_York",
                    "-270,0": "America/Caracas",
                    "-240,1": "America/Halifax",
                    "-240,0": "America/Santo_Domingo",
                    "-240,1,s": "America/Santiago",
                    "-210,1": "America/St_Johns",
                    "-180,1": "America/Godthab",
                    "-180,0": "America/Argentina/Buenos_Aires",
                    "-180,1,s": "America/Montevideo",
                    "-120,0": "America/Noronha",
                    "-120,1": "America/Noronha",
                    "-60,1": "Atlantic/Azores",
                    "-60,0": "Atlantic/Cape_Verde",
                    "0,0": "UTC",
                    "0,1": "Europe/London",
                    "60,1": "Europe/Berlin",
                    "60,0": "Africa/Lagos",
                    "60,1,s": "Africa/Windhoek",
                    "120,1": "Asia/Beirut",
                    "120,0": "Africa/Johannesburg",
                    "180,0": "Asia/Baghdad",
                    "180,1": "Europe/Moscow",
                    "210,1": "Asia/Tehran",
                    "240,0": "Asia/Dubai",
                    "240,1": "Asia/Baku",
                    "270,0": "Asia/Kabul",
                    "300,1": "Asia/Yekaterinburg",
                    "300,0": "Asia/Karachi",
                    "330,0": "Asia/Kolkata",
                    "345,0": "Asia/Kathmandu",
                    "360,0": "Asia/Dhaka",
                    "360,1": "Asia/Omsk",
                    "390,0": "Asia/Rangoon",
                    "420,1": "Asia/Krasnoyarsk",
                    "420,0": "Asia/Jakarta",
                    "480,0": "Asia/Shanghai",
                    "480,1": "Asia/Irkutsk",
                    "525,0": "Australia/Eucla",
                    "525,1,s": "Australia/Eucla",
                    "540,1": "Asia/Yakutsk",
                    "540,0": "Asia/Tokyo",
                    "570,0": "Australia/Darwin",
                    "570,1,s": "Australia/Adelaide",
                    "600,0": "Australia/Brisbane",
                    "600,1": "Asia/Vladivostok",
                    "600,1,s": "Australia/Sydney",
                    "630,1,s": "Australia/Lord_Howe",
                    "660,1": "Asia/Kamchatka",
                    "660,0": "Pacific/Noumea",
                    "690,0": "Pacific/Norfolk",
                    "720,1,s": "Pacific/Auckland",
                    "720,0": "Pacific/Tarawa",
                    "765,1,s": "Pacific/Chatham",
                    "780,0": "Pacific/Tongatapu",
                    "780,1,s": "Pacific/Apia",
                    "840,0": "Pacific/Kiritimati"
                }, t.jstz = r
            }, function(e, t, n) {
                var r, o, a, i;
                r = n(78), o = n(28).utf8, a = n(28).bin, (i = function(e, t) {
                    var n = r.wordsToBytes(function(e) {
                        e.constructor == String && (e = o.stringToBytes(e));
                        var t = r.bytesToWords(e),
                            n = 8 * e.length,
                            a = [],
                            i = 1732584193,
                            c = -271733879,
                            s = -1732584194,
                            u = 271733878,
                            l = -1009589776;
                        t[n >> 5] |= 128 << 24 - n % 32, t[15 + (n + 64 >>> 9 << 4)] = n;
                        for (var f = 0; f < t.length; f += 16) {
                            for (var d = i, m = c, p = s, g = u, v = l, h = 0; h < 80; h++) {
                                if (h < 16) a[h] = t[f + h];
                                else {
                                    var w = a[h - 3] ^ a[h - 8] ^ a[h - 14] ^ a[h - 16];
                                    a[h] = w << 1 | w >>> 31
                                }
                                var y = (i << 5 | i >>> 27) + l + (a[h] >>> 0) + (h < 20 ? 1518500249 + (c & s | ~c & u) : h < 40 ? 1859775393 + (c ^ s ^ u) : h < 60 ? (c & s | c & u | s & u) - 1894007588 : (c ^ s ^ u) - 899497514);
                                l = u, u = s, s = c << 30 | c >>> 2, c = i, i = y
                            }
                            i += d, c += m, s += p, u += g, l += v
                        }
                        return [i, c, s, u, l]
                    }(e));
                    return t && t.asBytes ? n : t && t.asString ? a.bytesToString(n) : r.bytesToHex(n)
                })._blocksize = 16, i._digestsize = 20, e.exports = i
            }, function(e, t) {
                var n, r;
                n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {
                    rotl: function(e, t) {
                        return e << t | e >>> 32 - t
                    },
                    rotr: function(e, t) {
                        return e << 32 - t | e >>> t
                    },
                    endian: function(e) {
                        if (e.constructor == Number) return 16711935 & r.rotl(e, 8) | 4278255360 & r.rotl(e, 24);
                        for (var t = 0; t < e.length; t++) e[t] = r.endian(e[t]);
                        return e
                    },
                    randomBytes: function(e) {
                        for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                        return t
                    },
                    bytesToWords: function(e) {
                        for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                        return t
                    },
                    wordsToBytes: function(e) {
                        for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                        return t
                    },
                    bytesToHex: function(e) {
                        for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                        return t.join("")
                    },
                    hexToBytes: function(e) {
                        for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                        return t
                    },
                    bytesToBase64: function(e) {
                        for (var t = [], r = 0; r < e.length; r += 3)
                            for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], a = 0; a < 4; a++) 8 * r + 6 * a <= 8 * e.length ? t.push(n.charAt(o >>> 6 * (3 - a) & 63)) : t.push("=");
                        return t.join("")
                    },
                    base64ToBytes: function(e) {
                        e = e.replace(/[^A-Z0-9+\/]/gi, "");
                        for (var t = [], r = 0, o = 0; r < e.length; o = ++r % 4) 0 != o && t.push((n.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | n.indexOf(e.charAt(r)) >>> 6 - 2 * o);
                        return t
                    }
                }, e.exports = r
            }, function(e, t, n) {
                var r = n(7),
                    o = n(0);
                t.getLinkTrackingManager = function(e, t, n) {
                    var a, i, c, s, u, l;

                    function f(t, a) {
                        for (var i, s, u, l, f, d; null !== (i = t.parentNode) && !r(i) && "A" !== (s = t.tagName.toUpperCase()) && "AREA" !== s;) t = i;
                        if (!r(t.href)) {
                            var m = t.hostname || o.getHostName(t.href),
                                p = m.toLowerCase(),
                                g = t.href.replace(m, p);
                            new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):", "i").test(g) || (u = t.id, l = o.getCssClasses(t), f = t.target, d = c ? t.innerHTML : null, g = unescape(g), e.trackLinkClick(g, u, l, f, d, n(o.resolveDynamicContexts(a, t))))
                        }
                    }

                    function d(e) {
                        return function(t) {
                            var n, r;
                            n = (t = t || window.event).which || t.button, r = t.target || t.srcElement, "click" === t.type ? r && f(r, e) : "mousedown" === t.type ? 1 !== n && 2 !== n || !r ? u = l = null : (u = n, l = r) : "mouseup" === t.type && (n === u && r === l && f(r, e), u = l = null)
                        }
                    }
                    return {
                        configureLinkClickTracking: function(e, t, n, r) {
                            c = n, s = r, i = t, a = o.getFilter(e, !0)
                        },
                        addClickListeners: function() {
                            var e, n, r = document.links;
                            for (e = 0; e < r.length; e++) a(r[e]) && !r[e][t] && (n = r[e], i ? (o.addEventListener(n, "mouseup", d(s), !1), o.addEventListener(n, "mousedown", d(s), !1)) : o.addEventListener(n, "click", d(s), !1), r[e][t] = !0)
                        }
                    }
                }
            }, function(e, t, n) {
                var r = n(9),
                    o = n(15),
                    a = n(81),
                    i = n(0);
                t.getFormTrackingManager = function(e, t, n) {
                    var c = ["textarea", "input", "select"],
                        s = t + "form",
                        u = function() {
                            return !0
                        },
                        l = function() {
                            return !0
                        },
                        f = function(e) {
                            return e
                        };

                    function d(e) {
                        return e[a(["name", "id", "type", "nodeName"], (function(t) {
                            return e[t] && "string" == typeof e[t]
                        }))]
                    }

                    function m(t, r) {
                        return function(o) {
                            var a = o.target,
                                c = a.nodeName && "INPUT" === a.nodeName.toUpperCase() ? a.type : null,
                                s = "checkbox" !== a.type || a.checked ? f(a.value) : null;
                            ("change_form" === t || "checkbox" !== c && "radio" !== c) && e.trackFormFocusOrChange(t, function(e) {
                                for (; e && e.nodeName && "HTML" !== e.nodeName.toUpperCase() && "FORM" !== e.nodeName.toUpperCase();) e = e.parentNode;
                                if (e && e.nodeName && "FORM" === e.nodeName.toUpperCase()) return d(e)
                            }(a), d(a), a.nodeName, c, i.getCssClasses(a), s, n(i.resolveDynamicContexts(r, a, c, s)))
                        }
                    }

                    function p(t) {
                        return function(a) {
                            var u = a.target,
                                l = function(e) {
                                    var t = [];
                                    return r(c, (function(n) {
                                        var a = o(e.getElementsByTagName(n), (function(e) {
                                            return e.hasOwnProperty(s)
                                        }));
                                        r(a, (function(e) {
                                            if ("submit" !== e.type) {
                                                var n = {
                                                    name: d(e),
                                                    value: e.value,
                                                    nodeName: e.nodeName
                                                };
                                                e.type && "INPUT" === e.nodeName.toUpperCase() && (n.type = e.type), "checkbox" !== e.type && "radio" !== e.type || e.checked || (n.value = null), t.push(n)
                                            }
                                        }))
                                    })), t
                                }(u);
                            r(l, (function(e) {
                                e.value = f(e.value)
                            })), e.trackFormSubmission(d(u), i.getCssClasses(u), l, n(i.resolveDynamicContexts(t, u, l)))
                        }
                    }
                    return {
                        configureFormTracking: function(e) {
                            e && (u = i.getFilter(e.forms, !0), l = i.getFilter(e.fields, !1), f = i.getTransform(e.fields))
                        },
                        addFormListeners: function(e) {
                            r(document.getElementsByTagName("form"), (function(t) {
                                u(t) && !t[s] && (r(c, (function(n) {
                                    r(t.getElementsByTagName(n), (function(t) {
                                        l(t) && !t[s] && "password" !== t.type.toLowerCase() && (i.addEventListener(t, "focus", m("focus_form", e), !1), i.addEventListener(t, "change", m("change_form", e), !1), t[s] = !0)
                                    }))
                                })), i.addEventListener(t, "submit", p(e)), t[s] = !0)
                            }))
                        }
                    }
                }
            }, function(e, t, n) {
                var r = n(82)(n(83));
                e.exports = r
            }, function(e, t, n) {
                var r = n(2),
                    o = n(12),
                    a = n(10);
                e.exports = function(e) {
                    return function(t, n, i) {
                        var c = Object(t);
                        if (!o(t)) {
                            var s = r(n, 3);
                            t = a(t), n = function(e) {
                                return s(c[e], e, c)
                            }
                        }
                        var u = e(t, n, i);
                        return u > -1 ? c[s ? t[u] : u] : void 0
                    }
                }
            }, function(e, t, n) {
                var r = n(84),
                    o = n(2),
                    a = n(85),
                    i = Math.max;
                e.exports = function(e, t, n) {
                    var c = null == e ? 0 : e.length;
                    if (!c) return -1;
                    var s = null == n ? 0 : a(n);
                    return s < 0 && (s = i(c + s, 0)), r(e, o(t, 3), s)
                }
            }, function(e, t) {
                e.exports = function(e, t, n, r) {
                    for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o;)
                        if (t(e[a], a, e)) return a;
                    return -1
                }
            }, function(e, t) {
                e.exports = function(e) {
                    return e
                }
            }, function(e, t, n) {
                var r = n(5),
                    o = n(0),
                    a = window;
                t.errorManager = function(e) {
                    function t(t, n, r, o, a, i) {
                        var c = a && a.stack ? a.stack : null;
                        e.trackSelfDescribingEvent({
                            schema: "iglu:com.snowplowanalytics.snowplow/application_error/jsonschema/1-0-1",
                            data: {
                                programmingLanguage: "JAVASCRIPT",
                                message: t || "JS Exception. Browser doesn't support ErrorEvent API",
                                stackTrace: c,
                                lineNumber: r,
                                lineColumn: o,
                                fileName: n
                            }
                        }, i)
                    }
                    return {
                        trackError: t,
                        enableErrorTracking: function(e, n, i) {
                            o.addEventListener(a, "error", (function(o) {
                                (r(e) && e(o) || null == e) && function(e, n, o) {
                                    var a;
                                    a = r(o) ? n.concat(o(e)) : n, t(e.message, e.filename, e.lineno, e.colno, e.error, a)
                                }(o, i, n)
                            }), !0)
                        }
                    }
                }
            }, function(e, t, n) {
                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                var o, a, i, c, s;
                o = n(88), a = n(26), i = n(3), c = n(27).localStorageAccessible, s = n(0), t.OutQueueManager = function(e, t, n, u, l, f, d, m, p, g) {
                    var v, h, w, y, _, k = !1,
                        b = null === (l = l.toLowerCase ? l.toLowerCase() : l) || !0 === l || "beacon" === l || "true" === l,
                        A = Boolean(b && navigator && navigator.sendBeacon) && b,
                        x = ("post" === l || A) && !("get" === l),
                        S = (x = x && Boolean(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest)) ? f : "/i";
                    if (d = c() && u && x && d || 1, v = "snowplowOutQueue_".concat(e, "_").concat(t, "_").concat(x ? "post2" : "get"), y = "spBeaconPreflight_".concat(e, "_").concat(t), u) try {
                        w = JSON.parse(localStorage.getItem(v))
                    } catch (e) {}

                    function j(e) {
                        for (var t = 0, n = 0; n < e.length; n++) {
                            var r = e.charCodeAt(n);
                            r <= 127 ? t += 1 : r <= 2047 ? t += 2 : r >= 55296 && r <= 57343 ? (t += 4, n++) : t += r < 65535 ? 3 : 4
                        }
                        return t
                    }

                    function C() {
                        for (; w.length && "string" != typeof w[0] && "object" !== r(w[0]);) w.shift();
                        if (w.length < 1) k = !1;
                        else {
                            if (!a(h)) throw "No Snowplow collector configured, cannot track";
                            k = !0;
                            var e = w[0];
                            if (x) {
                                var t = P(h),
                                    n = setTimeout((function() {
                                        t.abort(), k = !1
                                    }), 5e3),
                                    o = function(e) {
                                        for (var t = 0, n = 0; t < e.length && !((n += e[t].bytes) >= m);) t += 1;
                                        return t
                                    }(w);

                                function c(e) {
                                    for (var t = 0; t < e; t++) w.shift();
                                    u && s.attemptWriteLocalStorage(v, JSON.stringify(w.slice(0, g))), C()
                                }
                                t.onreadystatechange = function() {
                                    4 === t.readyState && t.status >= 200 && t.status < 400 ? (clearTimeout(n), A && !_ && s.attemptWriteSessionStorage(y, !0), c(o)) : 4 === t.readyState && t.status >= 400 && (clearTimeout(n), k = !1)
                                };
                                var l = i(w.slice(0, o), (function(e) {
                                    return e.evt
                                }));
                                if (l.length > 0) {
                                    var f;
                                    if (_ = _ || A && s.attemptGetSessionStorage(y)) {
                                        var d = new Blob([T(O(l))], {
                                            type: "application/json"
                                        });
                                        try {
                                            f = navigator.sendBeacon(h, d)
                                        } catch (e) {
                                            f = !1
                                        }
                                    }!0 === f && c(o), A && f || t.send(T(O(l)))
                                }
                            } else {
                                var b = new Image(1, 1);
                                b.onload = function() {
                                    w.shift(), u && s.attemptWriteLocalStorage(v, JSON.stringify(w.slice(0, g))), C()
                                }, b.onerror = function() {
                                    k = !1
                                }, b.src = p ? h + e.replace("?", "?stm=" + (new Date).getTime() + "&") : h + e
                            }
                        }
                    }

                    function P(e) {
                        var t = new XMLHttpRequest;
                        return t.open("POST", e, !0), t.withCredentials = !0, t.setRequestHeader("Content-Type", "application/json; charset=UTF-8"), t
                    }

                    function T(e) {
                        return JSON.stringify({
                            schema: "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4",
                            data: e
                        })
                    }

                    function O(e) {
                        for (var t = (new Date).getTime().toString(), n = 0; n < e.length; n++) e[n].stm = t;
                        return e
                    }
                    return Array.isArray(w) || (w = []), n.outQueues.push(w),
                        x && d > 1 && n.bufferFlushers.push((function() {
                            k || C()
                        })), {
                            enqueueRequest: function(e, t) {
                                if (h = t + S, x) {
                                    var n = function(e) {
                                        var t = o(e, (function(e) {
                                            return e.toString()
                                        }));
                                        return {
                                            evt: t,
                                            bytes: j(JSON.stringify(t))
                                        }
                                    }(e);
                                    if (n.bytes >= m) return s.warn("Event of size " + n.bytes + " is too long - the maximum size is " + m), void P(h).send(T(O([n.evt])));
                                    w.push(n)
                                } else w.push(function(e) {
                                    var t = "?",
                                        n = {
                                            co: !0,
                                            cx: !0
                                        },
                                        r = !0;
                                    for (var o in e) e.hasOwnProperty(o) && !n.hasOwnProperty(o) && (r ? r = !1 : t += "&", t += encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
                                    for (var a in n) e.hasOwnProperty(a) && n.hasOwnProperty(a) && (t += "&" + a + "=" + encodeURIComponent(e[a]));
                                    return t
                                }(e));
                                var r = !1;
                                u && (r = s.attemptWriteLocalStorage(v, JSON.stringify(w.slice(0, g)))), k || r && !(w.length >= d) || C()
                            },
                            executeQueue: C
                        }
                }
            }, function(e, t, n) {
                var r = n(89),
                    o = n(21),
                    a = n(2);
                e.exports = function(e, t) {
                    var n = {};
                    return t = a(t, 3), o(e, (function(e, o, a) {
                        r(n, o, t(e, o, a))
                    })), n
                }
            }, function(e, t, n) {
                var r = n(90);
                e.exports = function(e, t, n) {
                    "__proto__" == t && r ? r(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0
                    }) : e[t] = n
                }
            }, function(e, t, n) {
                var r = n(91),
                    o = function() {
                        try {
                            var e = r(Object, "defineProperty");
                            return e({}, "", {}), e
                        } catch (e) {}
                    }();
                e.exports = o
            }, function(e, t) {
                e.exports = function(e, t) {
                    return null == e ? void 0 : e[t]
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(93);
                t.trackerCore = r.trackerCore
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(94),
                    o = n(29),
                    a = n(97);
                t.trackerCore = function(e, t) {
                    void 0 === e && (e = !0);
                    var n = {},
                        i = a.contextModule();

                    function c(e, t) {
                        n[e] = t
                    }

                    function s(e, t) {
                        var n = {};
                        for (var r in t = t || {}, e)(t[r] || null !== e[r] && void 0 !== e[r]) && (n[r] = e[r]);
                        return n
                    }

                    function u(e, t) {
                        var n, r = (n = e, i.getApplicableContexts(n)),
                            o = [];
                        return t && t.length && o.push.apply(o, t), r && r.length && o.push.apply(o, r), o
                    }

                    function l(e, o, a) {
                        e.addDict(n), e.add("eid", r.v4());
                        var i = function(e) {
                            return null == e ? {
                                type: "dtm",
                                value: (new Date).getTime()
                            } : "number" == typeof e ? {
                                type: "dtm",
                                value: e
                            } : "ttm" === e.type ? {
                                type: "ttm",
                                value: e.value
                            } : {
                                type: "dtm",
                                value: e.value || (new Date).getTime()
                            }
                        }(a);
                        e.add(i.type, i.value.toString());
                        var c = function(e) {
                            if (e && e.length) return {
                                schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                                data: e
                            }
                        }(u(e, o));
                        return void 0 !== c && e.addJson("cx", "co", c), "function" == typeof t && t(e), e
                    }

                    function f(t, n, r) {
                        var a = o.payloadBuilder(e),
                            i = {
                                schema: "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",
                                data: t
                            };
                        return a.add("e", "ue"), a.addJson("ue_px", "ue_pr", i), l(a, n, r)
                    }
                    return {
                        setBase64Encoding: function(t) {
                            e = t
                        },
                        addPayloadPair: c,
                        addPayloadDict: function(e) {
                            for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t])
                        },
                        resetPayloadPairs: function(e) {
                            n = o.isJson(e) ? e : {}
                        },
                        setTrackerVersion: function(e) {
                            c("tv", e)
                        },
                        setTrackerNamespace: function(e) {
                            c("tna", e)
                        },
                        setAppId: function(e) {
                            c("aid", e)
                        },
                        setPlatform: function(e) {
                            c("p", e)
                        },
                        setUserId: function(e) {
                            c("uid", e)
                        },
                        setScreenResolution: function(e, t) {
                            c("res", e + "x" + t)
                        },
                        setViewport: function(e, t) {
                            c("vp", e + "x" + t)
                        },
                        setColorDepth: function(e) {
                            c("cd", e)
                        },
                        setTimezone: function(e) {
                            c("tz", e)
                        },
                        setLang: function(e) {
                            c("lang", e)
                        },
                        setIpAddress: function(e) {
                            c("ip", e)
                        },
                        setUseragent: function(e) {
                            c("ua", e)
                        },
                        trackUnstructEvent: f,
                        trackSelfDescribingEvent: f,
                        trackPageView: function(t, n, r, a, i) {
                            var c = o.payloadBuilder(e);
                            return c.add("e", "pv"), c.add("url", t), c.add("page", n), c.add("refr", r), l(c, a, i)
                        },
                        trackPagePing: function(t, n, r, a, i, c, s, u, f) {
                            var d = o.payloadBuilder(e);
                            return d.add("e", "pp"), d.add("url", t), d.add("page", n), d.add("refr", r), d.add("pp_mix", a.toString()), d.add("pp_max", i.toString()), d.add("pp_miy", c.toString()), d.add("pp_may", s.toString()), l(d, u, f)
                        },
                        trackStructEvent: function(t, n, r, a, i, c, s) {
                            var u = o.payloadBuilder(e);
                            return u.add("e", "se"), u.add("se_ca", t), u.add("se_ac", n), u.add("se_la", r), u.add("se_pr", a), u.add("se_va", null == i ? void 0 : i.toString()), l(u, c, s)
                        },
                        trackEcommerceTransaction: function(t, n, r, a, i, c, s, u, f, d, m) {
                            var p = o.payloadBuilder(e);
                            return p.add("e", "tr"), p.add("tr_id", t), p.add("tr_af", n), p.add("tr_tt", r), p.add("tr_tx", a), p.add("tr_sh", i), p.add("tr_ci", c), p.add("tr_st", s), p.add("tr_co", u), p.add("tr_cu", f), l(p, d, m)
                        },
                        trackEcommerceTransactionItem: function(t, n, r, a, i, c, s, u, f) {
                            var d = o.payloadBuilder(e);
                            return d.add("e", "ti"), d.add("ti_id", t), d.add("ti_sk", n), d.add("ti_nm", r), d.add("ti_ca", a), d.add("ti_pr", i), d.add("ti_qu", c), d.add("ti_cu", s), l(d, u, f)
                        },
                        trackScreenView: function(e, t, n, r) {
                            return f({
                                schema: "iglu:com.snowplowanalytics.snowplow/screen_view/jsonschema/1-0-0",
                                data: s({
                                    name: e,
                                    id: t
                                })
                            }, n, r)
                        },
                        trackLinkClick: function(e, t, n, r, o, a, i) {
                            return f({
                                schema: "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1",
                                data: s({
                                    targetUrl: e,
                                    elementId: t,
                                    elementClasses: n,
                                    elementTarget: r,
                                    elementContent: o
                                })
                            }, a, i)
                        },
                        trackAdImpression: function(e, t, n, r, o, a, i, c, u, l) {
                            return f({
                                schema: "iglu:com.snowplowanalytics.snowplow/ad_impression/jsonschema/1-0-0",
                                data: s({
                                    impressionId: e,
                                    costModel: t,
                                    cost: n,
                                    targetUrl: r,
                                    bannerId: o,
                                    zoneId: a,
                                    advertiserId: i,
                                    campaignId: c
                                })
                            }, u, l)
                        },
                        trackAdClick: function(e, t, n, r, o, a, i, c, u, l, d) {
                            return f({
                                schema: "iglu:com.snowplowanalytics.snowplow/ad_click/jsonschema/1-0-0",
                                data: s({
                                    targetUrl: e,
                                    clickId: t,
                                    costModel: n,
                                    cost: r,
                                    bannerId: o,
                                    zoneId: a,
                                    impressionId: i,
                                    advertiserId: c,
                                    campaignId: u
                                })
                            }, l, d)
                        },
                        trackAdConversion: function(e, t, n, r, o, a, i, c, u, l, d) {
                            return f({
                                schema: "iglu:com.snowplowanalytics.snowplow/ad_conversion/jsonschema/1-0-0",
                                data: s({
                                    conversionId: e,
                                    costModel: t,
                                    cost: n,
                                    category: r,
                                    action: o,
                                    property: a,
                                    initialValue: i,
                                    advertiserId: c,
                                    campaignId: u
                                })
                            }, l, d)
                        },
                        trackSocialInteraction: function(e, t, n, r, o) {
                            return f({
                                schema: "iglu:com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0",
                                data: s({
                                    action: e,
                                    network: t,
                                    target: n
                                })
                            }, r, o)
                        },
                        trackAddToCart: function(e, t, n, r, o, a, i, c) {
                            return f({
                                schema: "iglu:com.snowplowanalytics.snowplow/add_to_cart/jsonschema/1-0-0",
                                data: s({
                                    sku: e,
                                    name: t,
                                    category: n,
                                    unitPrice: r,
                                    quantity: o,
                                    currency: a
                                })
                            }, i, c)
                        },
                        trackRemoveFromCart: function(e, t, n, r, o, a, i, c) {
                            return f({
                                schema: "iglu:com.snowplowanalytics.snowplow/remove_from_cart/jsonschema/1-0-0",
                                data: s({
                                    sku: e,
                                    name: t,
                                    category: n,
                                    unitPrice: r,
                                    quantity: o,
                                    currency: a
                                })
                            }, i, c)
                        },
                        trackFormFocusOrChange: function(e, t, n, r, o, a, i, c, u) {
                            var l = "",
                                d = {
                                    formId: t,
                                    elementId: n,
                                    nodeName: r,
                                    elementClasses: a,
                                    value: i
                                };
                            return "change_form" === e ? (l = "iglu:com.snowplowanalytics.snowplow/change_form/jsonschema/1-0-0", d.type = o) : "focus_form" === e && (l = "iglu:com.snowplowanalytics.snowplow/focus_form/jsonschema/1-0-0", d.elementType = o), f({
                                schema: l,
                                data: s(d, {
                                    value: !0
                                })
                            }, c, u)
                        },
                        trackFormSubmission: function(e, t, n, r, o) {
                            return f({
                                schema: "iglu:com.snowplowanalytics.snowplow/submit_form/jsonschema/1-0-0",
                                data: s({
                                    formId: e,
                                    formClasses: t,
                                    elements: n
                                })
                            }, r, o)
                        },
                        trackSiteSearch: function(e, t, n, r, o, a) {
                            return f({
                                schema: "iglu:com.snowplowanalytics.snowplow/site_search/jsonschema/1-0-0",
                                data: s({
                                    terms: e,
                                    filters: t,
                                    totalResults: n,
                                    pageResults: r
                                })
                            }, o, a)
                        },
                        trackConsentWithdrawn: function(e, t, n, r, o, a, i) {
                            var c = {
                                schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
                                data: s({
                                    id: t,
                                    version: n,
                                    name: r,
                                    description: o
                                })
                            };
                            return f({
                                schema: "iglu:com.snowplowanalytics.snowplow/consent_withdrawn/jsonschema/1-0-0",
                                data: s({
                                    all: e
                                })
                            }, c.data && a ? a.concat([c]) : a, i)
                        },
                        trackConsentGranted: function(e, t, n, r, o, a, i) {
                            var c = {
                                schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
                                data: s({
                                    id: e,
                                    version: t,
                                    name: n,
                                    description: r
                                })
                            };
                            return f({
                                schema: "iglu:com.snowplowanalytics.snowplow/consent_granted/jsonschema/1-0-0",
                                data: s({
                                    expiry: o
                                })
                            }, a ? a.concat([c]) : [c], i)
                        },
                        addGlobalContexts: function(e) {
                            i.addGlobalContexts(e)
                        },
                        clearGlobalContexts: function() {
                            i.clearGlobalContexts()
                        },
                        removeGlobalContexts: function(e) {
                            i.removeGlobalContexts(e)
                        }
                    }
                }
            }, function(e, t, n) {
                for (var r = n(95), o = [], a = {}, i = 0; i < 256; i++) o[i] = (i + 256).toString(16).substr(1), a[o[i]] = i;

                function c(e, t) {
                    var n = t || 0,
                        r = o;
                    return r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]]
                }
                var s = r(),
                    u = [1 | s[0], s[1], s[2], s[3], s[4], s[5]],
                    l = 16383 & (s[6] << 8 | s[7]),
                    f = 0,
                    d = 0;

                function m(e, t, n) {
                    var o = t && n || 0;
                    "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
                    var a = (e = e || {}).random || (e.rng || r)();
                    if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
                        for (var i = 0; i < 16; i++) t[o + i] = a[i];
                    return t || c(a)
                }
                var p = m;
                p.v1 = function(e, t, n) {
                    var r = t && n || 0,
                        o = t || [],
                        a = void 0 !== (e = e || {}).clockseq ? e.clockseq : l,
                        i = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                        s = void 0 !== e.nsecs ? e.nsecs : d + 1,
                        m = i - f + (s - d) / 1e4;
                    if (m < 0 && void 0 === e.clockseq && (a = a + 1 & 16383), (m < 0 || i > f) && void 0 === e.nsecs && (s = 0), s >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    f = i, d = s, l = a;
                    var p = (1e4 * (268435455 & (i += 122192928e5)) + s) % 4294967296;
                    o[r++] = p >>> 24 & 255, o[r++] = p >>> 16 & 255, o[r++] = p >>> 8 & 255, o[r++] = 255 & p;
                    var g = i / 4294967296 * 1e4 & 268435455;
                    o[r++] = g >>> 8 & 255, o[r++] = 255 & g, o[r++] = g >>> 24 & 15 | 16, o[r++] = g >>> 16 & 255, o[r++] = a >>> 8 | 128, o[r++] = 255 & a;
                    for (var v = e.node || u, h = 0; h < 6; h++) o[r + h] = v[h];
                    return t || c(o)
                }, p.v4 = m, p.parse = function(e, t, n) {
                    var r = t && n || 0,
                        o = 0;
                    for (t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, (function(e) {
                            o < 16 && (t[r + o++] = a[e])
                        })); o < 16;) t[r + o++] = 0;
                    return t
                }, p.unparse = c, e.exports = p
            }, function(e, t, n) {
                (function(t) {
                    var n, r = t.crypto || t.msCrypto;
                    if (r && r.getRandomValues) {
                        var o = new Uint8Array(16);
                        n = function() {
                            return r.getRandomValues(o), o
                        }
                    }
                    if (!n) {
                        var a = new Array(16);
                        n = function() {
                            for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), a[t] = e >>> ((3 & t) << 3) & 255;
                            return a
                        }
                    }
                    e.exports = n
                }).call(this, n(96))
            }, function(e, t) {
                var n;
                n = function() {
                    return this
                }();
                try {
                    n = n || new Function("return this")()
                } catch (e) {
                    "object" == typeof window && (n = window)
                }
                e.exports = n
            }, function(e, t, n) {
                "use strict";
                var r = this && this.__assign || Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = n(29),
                    a = n(30),
                    i = n(98),
                    c = n(99),
                    s = n(25),
                    u = n(100),
                    l = n(102),
                    f = n(106),
                    d = n(3);

                function m(e) {
                    var t = new RegExp("^iglu:([a-zA-Z0-9-_.]+)/([a-zA-Z0-9-_]+)/jsonschema/([1-9][0-9]*)-(0|[1-9][0-9]*)-(0|[1-9][0-9]*)$").exec(e);
                    if (null !== t) return t.slice(1, 6)
                }

                function p(e) {
                    if ("*" === e[0] || "*" === e[1]) return !1;
                    if (e.slice(2).length > 0) {
                        for (var t = !1, n = 0, r = e.slice(2); n < r.length; n++) {
                            if ("*" === r[n]) t = !0;
                            else if (t) return !1
                        }
                        return !0
                    }
                    return 2 == e.length
                }

                function g(e) {
                    var t = e.split(".");
                    return !!(t && t.length > 1) && p(t)
                }

                function v(e) {
                    var t = new RegExp("^iglu:((?:(?:[a-zA-Z0-9-_]+|\\*).)+(?:[a-zA-Z0-9-_]+|\\*))/([a-zA-Z0-9-_.]+|\\*)/jsonschema/([1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)$").exec(e);
                    if (null !== t && g(t[1])) return t.slice(1, 6)
                }

                function h(e) {
                    var t = v(e);
                    if (t) {
                        var n = t[0];
                        return 5 === t.length && g(n)
                    }
                    return !1
                }

                function w(e) {
                    return Array.isArray(e) && e.every((function(e) {
                        return "string" == typeof e
                    }))
                }

                function y(e) {
                    return w(e) ? e.every((function(e) {
                        return h(e)
                    })) : "string" == typeof e && h(e)
                }

                function _(e) {
                    return !!(o.isNonEmptyJson(e) && "schema" in e && "data" in e) && ("string" == typeof e.schema && "object" == typeof e.data)
                }

                function k(e) {
                    return !(!o.isNonEmptyJson(e) || !("e" in e)) && "string" == typeof e.e
                }

                function b(e) {
                    var t = 0;
                    if (u(e)) {
                        if (c(e, "accept")) {
                            if (!y(e.accept)) return !1;
                            t += 1
                        }
                        if (c(e, "reject")) {
                            if (!y(e.reject)) return !1;
                            t += 1
                        }
                        return t > 0 && t <= 2
                    }
                    return !1
                }

                function A(e) {
                    return "function" == typeof e && e.length <= 1
                }

                function x(e) {
                    return "function" == typeof e && e.length <= 1
                }

                function S(e) {
                    return A(e) || _(e)
                }

                function j(e) {
                    return !(!Array.isArray(e) || 2 !== e.length) && (Array.isArray(e[1]) ? x(e[0]) && l(e[1], S) : x(e[0]) && S(e[1]))
                }

                function C(e) {
                    return !(!Array.isArray(e) || 2 !== e.length) && (!!b(e[0]) && (Array.isArray(e[1]) ? l(e[1], S) : S(e[1])))
                }

                function P(e) {
                    return j(e) || C(e)
                }

                function T(e, t) {
                    if (!h(e)) return !1;
                    var n = v(e),
                        r = m(t);
                    if (n && r) {
                        if (!O(n[0], r[0])) return !1;
                        for (var o = 1; o < 5; o++)
                            if (!E(n[o], r[o])) return !1;
                        return !0
                    }
                    return !1
                }

                function O(e, t) {
                    var n = t.split("."),
                        r = e.split(".");
                    if (n && r) {
                        if (n.length !== r.length) return !1;
                        for (var o = 0; o < r.length; o++)
                            if (!E(n[o], r[o])) return !1;
                        return !0
                    }
                    return !1
                }

                function E(e, t) {
                    return e && t && "*" === e || e === t
                }

                function D(e, t) {
                    var n = 0,
                        r = 0,
                        o = s(e, "accept");
                    Array.isArray(o) ? e.accept.some((function(e) {
                        return T(e, t)
                    })) && r++ : "string" == typeof o && T(o, t) && r++;
                    var a = s(e, "reject");
                    return Array.isArray(a) ? e.reject.some((function(e) {
                        return T(e, t)
                    })) && n++ : "string" == typeof a && T(a, t) && n++, r > 0 && 0 === n
                }

                function I(e) {
                    return "string" == typeof s(e, "ue_px.data.schema") ? s(e, "ue_px.data.schema") : "string" == typeof s(e, "ue_pr.data.schema") ? s(e, "ue_pr.data.schema") : "string" == typeof s(e, "schema") ? s(e, "schema") : ""
                }

                function L(e) {
                    var t = r({}, e);
                    try {
                        c(t, "ue_px") && (t.ue_px = JSON.parse(a.base64urldecode(s(t, ["ue_px"]))))
                    } catch (e) {}
                    return t
                }

                function M(e) {
                    return s(e, "e", "")
                }

                function N(e, t, n, r) {
                    var o = void 0;
                    try {
                        return _(o = e({
                            event: t,
                            eventType: n,
                            eventSchema: r
                        })) || Array.isArray(o) && l(o, _) ? o : void 0
                    } catch (e) {
                        o = void 0
                    }
                    return o
                }

                function B(e) {
                    return Array.isArray(e) ? e : Array.of(e)
                }

                function z(e, t, n, r) {
                    var o = B(e),
                        a = d(o, (function(e) {
                            var o = F(e, t, n, r);
                            if (o && 0 !== o.length) return o
                        }));
                    return [].concat.apply([], f(a))
                }

                function F(e, t, n, r) {
                    if (_(e)) return [e];
                    if (A(e)) {
                        var o = N(e, t, n, r);
                        if (_(o)) return [o];
                        if (Array.isArray(o)) return o
                    }
                }

                function R(e, t, n, r) {
                    if (j(e)) {
                        var o = e[0],
                            a = !1;
                        try {
                            a = o({
                                event: t,
                                eventType: n,
                                eventSchema: r
                            })
                        } catch (e) {
                            a = !1
                        }
                        if (!0 === a) return z(e[1], t, n, r)
                    } else if (C(e) && D(e[0], r)) return z(e[1], t, n, r);
                    return []
                }

                function U(e, t, n, r) {
                    var o = B(e),
                        a = d(o, (function(e) {
                            var o = R(e, t, n, r);
                            if (o && 0 !== o.length) return o
                        }));
                    return [].concat.apply([], f(a))
                }
                t.getSchemaParts = m, t.validateVendorParts = p, t.validateVendor = g, t.getRuleParts = v, t.isValidRule = h, t.isStringArray = w, t.isValidRuleSetArg = y, t.isSelfDescribingJson = _, t.isEventJson = k, t.isRuleSet = b, t.isContextGenerator = A, t.isContextFilter = x, t.isContextPrimitive = S, t.isFilterProvider = j, t.isRuleSetProvider = C, t.isConditionalContextProvider = P, t.matchSchemaAgainstRule = T, t.matchVendor = O, t.matchPart = E, t.matchSchemaAgainstRuleSet = D, t.getUsefulSchema = I, t.getDecodedEvent = L, t.getEventType = M, t.buildGenerator = N, t.normalizeToArray = B, t.generatePrimitives = z, t.evaluatePrimitive = F, t.evaluateProvider = R, t.generateConditionals = U, t.contextModule = function() {
                    var e = [],
                        t = [];
                    return {
                        getGlobalPrimitives: function() {
                            return e
                        },
                        getConditionalProviders: function() {
                            return t
                        },
                        addGlobalContexts: function(n) {
                            for (var r = [], o = [], a = 0, i = n; a < i.length; a++) {
                                var c = i[a];
                                P(c) ? r.push(c) : S(c) && o.push(c)
                            }
                            e = e.concat(o), t = t.concat(r)
                        },
                        clearGlobalContexts: function() {
                            t = [], e = []
                        },
                        removeGlobalContexts: function(n) {
                            for (var r = function(n) {
                                    P(n) ? t = t.filter((function(e) {
                                        return !i(e, n)
                                    })) : S(n) && (e = e.filter((function(e) {
                                        return !i(e, n)
                                    })))
                                }, o = 0, a = n; o < a.length; o++) {
                                r(a[o])
                            }
                        },
                        getApplicableContexts: function(n) {
                            var r = n.build();
                            return k(r) ? function(n) {
                                var r = I(n),
                                    o = M(n),
                                    a = [],
                                    i = z(e, n, o, r);
                                a.push.apply(a, i);
                                var c = U(t, n, o, r);
                                return a.push.apply(a, c), a
                            }(L(r)) : []
                        }
                    }
                }
            }, function(e, t, n) {
                var r = n(16);
                e.exports = function(e, t) {
                    return r(e, t)
                }
            }, function(e, t) {
                var n = Object.prototype.hasOwnProperty;
                e.exports = function(e, t) {
                    return null != e && n.call(e, t)
                }
            }, function(e, t, n) {
                var r = n(13),
                    o = n(101),
                    a = n(17),
                    i = Function.prototype,
                    c = Object.prototype,
                    s = i.toString,
                    u = c.hasOwnProperty,
                    l = s.call(Object);
                e.exports = function(e) {
                    if (!a(e) || "[object Object]" != r(e)) return !1;
                    var t = o(e);
                    if (null === t) return !0;
                    var n = u.call(t, "constructor") && t.constructor;
                    return "function" == typeof n && n instanceof n && s.call(n) == l
                }
            }, function(e, t, n) {
                var r = n(11)(Object.getPrototypeOf, Object);
                e.exports = r
            }, function(e, t, n) {
                var r = n(103),
                    o = n(104),
                    a = n(2),
                    i = n(1),
                    c = n(105);
                e.exports = function(e, t, n) {
                    var s = i(e) ? r : o;
                    return n && c(e, t, n) && (t = void 0), s(e, a(t, 3))
                }
            }, function(e, t) {
                e.exports = function(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                        if (!t(e[n], n, e)) return !1;
                    return !0
                }
            }, function(e, t, n) {
                var r = n(4);
                e.exports = function(e, t) {
                    var n = !0;
                    return r(e, (function(e, r, o) {
                        return n = !!t(e, r, o)
                    })), n
                }
            }, function(e, t) {
                e.exports = function() {
                    return !1
                }
            }, function(e, t) {
                e.exports = function(e) {
                    for (var t = -1, n = null == e ? 0 : e.length, r = 0, o = []; ++t < n;) {
                        var a = e[t];
                        a && (o[r++] = a)
                    }
                    return o
                }
            }, function(e, t, n) {
                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                t.productionize = function(e) {
                    var t = {};
                    return "object" === r(e) && null !== e && Object.getOwnPropertyNames(e).forEach((function(n, r, o) {
                        var a;
                        "function" == typeof e[n] && (t[n] = (a = e[n], function() {
                            try {
                                return a.apply(this, arguments)
                            } catch (e) {}
                        }))
                    })), t
                }
            }])
        },
        867339: (e, t, n) => {
            "use strict";
            n.d(t, {
                getSettings: () => u
            });
            var r = n(968724),
                o = n(640142);
            const a = window.initData.snowplowSettings;
            let i, c = "web",
                s = "";

            function u() {
                if (i) return i
            }(0, r.isDesktopApp)() && (c = "pc", s = "_desktop"), (0, o.isOnMobileAppPage)("old") ? (c = "mob", s = "_ios") : (0, o.isOnMobileAppPage)("new") && (c = "mob", s = "_android"), a && a.params && a.enabled && (i = {
                collectorId: a.collectorId,
                url: a.url,
                params: {
                    appId: a.params.appId + s,
                    platform: c,
                    discoverRootDomain: !0,
                    contexts: {
                        webPage: !0,
                        performanceTiming: !0
                    },
                    eventMethod: "get",
                    maxLocalStorageQueueSize: 30
                }
            })
        },
        907249: (e, t, n) => {
            "use strict";
            n.d(t, {
                SnowplowTrackerBase: () => s
            });
            var r = n(541432),
                o = n(198006);
            const a = {
                "-": "+",
                _: "/",
                ".": "="
            };

            function i(e) {
                return function(e) {
                    const t = new Uint8Array(e.length);
                    for (let n = 0; n < e.length; n++) {
                        const r = e.charCodeAt(n);
                        t[n] = r
                    }
                    return t
                }(atob(e.replace(/[-_.]/g, e => a[e])))
            }

            function c(e) {
                const t = i(e);
                return new TextDecoder("utf-8").decode(t)
            }
            class s {
                constructor(e, t) {
                    (0, r.snowplowTracker)("newTracker", e.collectorId, e.url, e.params), this._schemes = t, this._setDiscardBrace(!0)
                }
                trackPageView() {
                    var e;
                    if ((0, o.isFeatureEnabled)("aggregating_page_pings")) {
                        const e = document.cookie.split("; ").find(e => e.startsWith("_sp_id"));
                        if (void 0 !== e) {
                            if ("1" === e.split(".")[3]) {
                                let e = {
                                    numEvents: 0
                                };
                                (0, r.snowplowTracker)("enableActivityTrackingCallback", 10, 10, () => {
                                    e = {
                                        numEvents: e.numEvents + 1
                                    }
                                }), window.addEventListener("unload", () => {
                                    const t = {
                                        active_seconds: 10 * e.numEvents
                                    };
                                    this._trackSelfDescribingEvent("page_unload", t)
                                })
                            }
                        }
                    }
                    const t = [],
                        n = null === (e = this._schemes.amp_pageview) || void 0 === e ? void 0 : e.schema,
                        a = new URLSearchParams(window.location.search).get("sp_amp_linker");
                    if (a && void 0 !== n) {
                        const [, , , e] = a.split("*");
                        t.push({
                            schema: n,
                            data: {
                                ampClientId: c(e),
                                domainUserid: "",
                                userId: ""
                            }
                        })
                    }(0, r.snowplowTracker)("trackPageView", null, t)
                }
                _setDiscardBrace(e) {
                    (0, r.snowplowTracker)("discardBrace", e)
                }
                _trackSelfDescribingEvent(e, t) {
                    const n = this._wrapSelfDescribingData(e, t);
                    (0, r.snowplowTracker)("trackSelfDescribingEvent", n)
                }
                _wrapSelfDescribingData(e, t) {
                    const n = this._schemes[e];
                    if (void 0 === n) throw new Error("SelfDescribingEvent must have a schema");
                    return {
                        schema: n.schema,
                        data: t
                    }
                }
            }
        },
        787570: e => {
            "use strict";
            e.exports = JSON.parse('{"permission_dialogs":{"schema":"iglu:com.tradingview/permission_dialogs/jsonschema/1-0-0"},"studies_analytics":{"schema":"iglu:com.tradingview/studies_analytics_v2/jsonschema/1-0-0"},"drawings_analytics":{"schema":"iglu:com.tradingview/drawings_analytics/jsonschema/1-0-0"},"chart_api_drawing_creation":{"schema":"iglu:com.tradingview/chart_api_drawing_creation/jsonschema/1-0-0"},"chart_symbols":{"schema":"iglu:com.tradingview/chart_symbols/jsonschema/1-0-0"},"chart_styles":{"schema":"iglu:com.tradingview/chart_styles/jsonschema/1-0-0"},"solutions_watch":{"schema":"iglu:com.tradingview/solutions_watch/jsonschema/1-0-0"},"solutions_send_ticket":{"schema":"iglu:com.tradingview/solutions_send_ticket/jsonschema/1-0-0"},"solutions_nodes_watch":{"schema":"iglu:com.tradingview/solutions_nodes_watch/jsonschema/1-0-0"},"solutions_skip":{"schema":"iglu:com.tradingview/solutions_skip/jsonschema/1-0-0"},"user_signup":{"schema":"iglu:com.tradingview/user_signup/jsonschema/1-0-0"},"trials":{"schema":"iglu:com.tradingview/trials/jsonschema/1-0-0"},"refund_transactions":{"schema":"iglu:com.tradingview/refund_transactions/jsonschema/1-0-0"},"billing":{"schema":"iglu:com.tradingview/billing/jsonschema/1-0-0"},"subscription_renewal":{"schema":"iglu:com.tradingview/subscription_renewal/jsonschema/1-0-0"},"subscription_removal":{"schema":"iglu:com.tradingview/subscription_removal/jsonschema/1-0-0"},"chargeback":{"schema":"iglu:com.tradingview/chargeback/jsonschema/1-0-0"},"news_clicks":{"schema":"iglu:com.tradingview/news_clicks/jsonschema/1-0-0"},"gopro_visits":{"schema":"iglu:com.tradingview/gopro_visits/jsonschema/1-0-0"},"logins":{"schema":"iglu:com.tradingview/logins/jsonschema/1-0-0"},"referral_signup":{"schema":"iglu:com.tradingview/referral_signup/jsonschema/1-0-0"},"referral_income":{"schema":"iglu:com.tradingview/referral_income/jsonschema/1-0-0"},"referral_spending":{"schema":"iglu:com.tradingview/referral_spending/jsonschema/1-0-0"},"referral_ref_link":{"schema":"iglu:com.tradingview/referral_ref_link/jsonschema/1-0-0"},"referral_visits":{"schema":"iglu:com.tradingview/referral_visits/jsonschema/1-0-0"},"follow":{"schema":"iglu:com.tradingview/follow/jsonschema/1-0-0"},"full_featured_chart_button":{"schema":"iglu:com.tradingview/full_featured_chart_button/jsonschema/1-0-0"},"publish_ideas":{"schema":"iglu:com.tradingview/publish_ideas/jsonschema/1-0-0"},"idea_update_created":{"schema":"iglu:com.tradingview/idea_update_created/jsonschema/1-0-0"},"idea_posting_comments":{"schema":"iglu:com.tradingview/idea_posting_comments/jsonschema/1-0-0"},"publish_scripts":{"schema":"iglu:com.tradingview/publish_scripts/jsonschema/1-0-0"},"idea_likes":{"schema":"iglu:com.tradingview/idea_likes/jsonschema/1-0-0"},"trading_broker_connection_status":{"schema":"iglu:com.tradingview/trading_broker_connection_status/jsonschema/1-0-0"},"trading_order_status":{"schema":"iglu:com.tradingview/trading_order_status/jsonschema/1-0-0"},"trading_order_widget":{"schema":"iglu:com.tradingview/trading_order_widget/jsonschema/1-0-0"},"switch_year_to_month_after_fail":{"schema":"iglu:com.tradingview/switch_year_to_month_after_fail/jsonschema/1-0-0"},"switching_yearly_to_monthly":{"schema":"iglu:com.tradingview/switching_yearly_to_monthly/jsonschema/1-0-0"},"phone_verification_dialog":{"schema":"iglu:com.tradingview/phone_verification_dialog/jsonschema/1-0-0"},"copy_reserve_codes":{"schema":"iglu:com.tradingview/copy_reserve_codes/jsonschema/1-0-0"},"tv_coins_dialog_watch":{"schema":"iglu:com.tradingview/tv_coins_dialog_watch/jsonschema/1-0-0"},"set_script_permission":{"schema":"iglu:com.tradingview/set_script_permission/jsonschema/1-0-0"},"remove_script_permission":{"schema":"iglu:com.tradingview/remove_script_permission/jsonschema/1-0-0"},"change_pro_plan":{"schema":"iglu:com.tradingview/change_pro_plan/jsonschema/1-0-0"},"unsubscribe_feedback":{"schema":"iglu:com.tradingview/unsubscribe_feedback/jsonschema/1-0-0"},"unsubscribe_dialog":{"schema":"iglu:com.tradingview/unsubscribe_dialog/jsonschema/1-0-0"},"fail_on_duplicate_bt_payment_method":{"schema":"iglu:com.tradingview/fail_on_duplicate_bt_payment_method/jsonschema/1-0-0"},"chat":{"schema":"iglu:com.tradingview/chat/jsonschema/1-0-0"},"broker_brandig_banner":{"schema":"iglu:com.tradingview/broker_brandig_banner/jsonschema/1-0-0"},"broker_profile_links_click":{"schema":"iglu:com.tradingview/broker_profile_links_click/jsonschema/1-0-0"},"streams_actions":{"schema":"iglu:com.tradingview/streams_actions/jsonschema/1-0-0"},"streams_settings_created":{"schema":"iglu:com.tradingview/streams_settings_created/jsonschema/1-0-0"},"streams_viewing_duration":{"schema":"iglu:com.tradingview/streams_viewing_duration/jsonschema/1-0-0"},"broker_open_account":{"schema":"iglu:com.tradingview/broker_open_account/jsonschema/1-0-0"},"financials_dialog":{"schema":"iglu:com.tradingview/financials_dialog/jsonschema/1-0-0"},"payment_order_dialog_initial":{"schema":"iglu:com.tradingview/payment_order_dialog_initial/jsonschema/1-0-0"},"payment_order_dialog_changes":{"schema":"iglu:com.tradingview/payment_order_dialog_changes/jsonschema/1-0-0"},"gopro_cards_clicks":{"schema":"iglu:com.tradingview/gopro_cards_clicks/jsonschema/1-0-0"},"search_toolbar":{"schema":"iglu:com.tradingview/search_toolbar/jsonschema/1-0-0"},"change_symbol":{"schema":"iglu:com.tradingview/change_symbol/jsonschema/1-0-0"},"burger_menu_click":{"schema":"iglu:com.tradingview/burger_menu_click/jsonschema/1-0-0"},"app_banner":{"schema":"iglu:com.tradingview/app_banner/jsonschema/1-0-0"},"app_link":{"schema":"iglu:com.tradingview/app_link/jsonschema/1-0-0"},"screener_high_level":{"schema":"iglu:com.tradingview/screener_high_level/jsonschema/1-0-0"},"widget_tv_link_click":{"schema":"iglu:com.tradingview/widget_tv_link_click/jsonschema/1-0-0"},"page_unload":{"schema":"iglu:com.tradingview/page_unload/jsonschema/1-0-0"},"idea_events":{"schema":"iglu:com.tradingview/idea_events/jsonschema/1-0-0"},"market_heatmap_events":{"schema":"iglu:com.tradingview/market_heatmap_events/jsonschema/1-0-0"},"toast_dialog":{"schema":"iglu:com.tradingview/toast_dialog/jsonschema/1-0-0"},"ad_dialog":{"schema":"iglu:com.tradingview/ad_dialog/jsonschema/1-0-0"},"toolbar_button_click":{"schema":"iglu:com.tradingview/toolbar_button_click/jsonschema/1-0-0"},"amp_pageview":{"schema":"iglu:dev.amp.snowplow/amp_id/jsonschema/1-0-0"},"sparks":{"schema":"iglu:com.tradingview/sparks/jsonschema/1-0-0"}}')
        }
    }
]);