(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [41153], {
        459731: (t, n, e) => {
            "use strict";
            e.d(n, {
                createBrowserHistory: () => m,
                createHashHistory: () => b,
                createMemoryHistory: () => E,
                createLocation: () => l,
                createPath: () => f
            });
            var r = e(722122),
                o = e(78273),
                i = e(702177);

            function a(t) {
                return "/" === t.charAt(0) ? t : "/" + t
            }

            function c(t) {
                return "/" === t.charAt(0) ? t.substr(1) : t
            }

            function u(t, n) {
                return function(t, n) {
                    return 0 === t.toLowerCase().indexOf(n.toLowerCase()) && -1 !== "/?#".indexOf(t.charAt(n.length))
                }(t, n) ? t.substr(n.length) : t
            }

            function s(t) {
                return "/" === t.charAt(t.length - 1) ? t.slice(0, -1) : t
            }

            function f(t) {
                var n = t.pathname,
                    e = t.search,
                    r = t.hash,
                    o = n || "/";
                return e && "?" !== e && (o += "?" === e.charAt(0) ? e : "?" + e), r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r), o
            }

            function l(t, n, e, i) {
                var a;
                "string" == typeof t ? (a = function(t) {
                    var n = t || "/",
                        e = "",
                        r = "",
                        o = n.indexOf("#"); - 1 !== o && (r = n.substr(o), n = n.substr(0, o));
                    var i = n.indexOf("?");
                    return -1 !== i && (e = n.substr(i), n = n.substr(0, i)), {
                        pathname: n,
                        search: "?" === e ? "" : e,
                        hash: "#" === r ? "" : r
                    }
                }(t)).state = n : (void 0 === (a = (0, r.default)({}, t)).pathname && (a.pathname = ""), a.search ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search) : a.search = "", a.hash ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash) : a.hash = "", void 0 !== n && void 0 === a.state && (a.state = n));
                try {
                    a.pathname = decodeURI(a.pathname)
                } catch (t) {
                    throw t instanceof URIError ? new URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : t
                }
                return e && (a.key = e), i ? a.pathname ? "/" !== a.pathname.charAt(0) && (a.pathname = (0, o.default)(a.pathname, i.pathname)) : a.pathname = i.pathname : a.pathname || (a.pathname = "/"), a
            }

            function p() {
                var t = null;
                var n = [];
                return {
                    setPrompt: function(n) {
                        return t = n,
                            function() {
                                t === n && (t = null)
                            }
                    },
                    confirmTransitionTo: function(n, e, r, o) {
                        if (null != t) {
                            var i = "function" == typeof t ? t(n, e) : t;
                            "string" == typeof i ? "function" == typeof r ? r(i, o) : o(!0) : o(!1 !== i)
                        } else o(!0)
                    },
                    appendListener: function(t) {
                        var e = !0;

                        function r() {
                            e && t.apply(void 0, arguments)
                        }
                        return n.push(r),
                            function() {
                                e = !1, n = n.filter((function(t) {
                                    return t !== r
                                }))
                            }
                    },
                    notifyListeners: function() {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        n.forEach((function(t) {
                            return t.apply(void 0, e)
                        }))
                    }
                }
            }
            var h = !("undefined" == typeof window || !window.document || !window.document.createElement);

            function d(t, n) {
                n(window.confirm(t))
            }

            function v() {
                try {
                    return window.history.state || {}
                } catch (t) {
                    return {}
                }
            }

            function m(t) {
                void 0 === t && (t = {}), h || (0, i.default)(!1);
                var n, e = window.history,
                    o = (-1 === (n = window.navigator.userAgent).indexOf("Android 2.") && -1 === n.indexOf("Android 4.0") || -1 === n.indexOf("Mobile Safari") || -1 !== n.indexOf("Chrome") || -1 !== n.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
                    c = !(-1 === window.navigator.userAgent.indexOf("Trident")),
                    m = t,
                    y = m.forceRefresh,
                    g = void 0 !== y && y,
                    w = m.getUserConfirmation,
                    x = void 0 === w ? d : w,
                    b = m.keyLength,
                    P = void 0 === b ? 6 : b,
                    E = t.basename ? s(a(t.basename)) : "";

                function C(t) {
                    var n = t || {},
                        e = n.key,
                        r = n.state,
                        o = window.location,
                        i = o.pathname + o.search + o.hash;
                    return E && (i = u(i, E)), l(i, r, e)
                }

                function S() {
                    return Math.random().toString(36).substr(2, P)
                }
                var A = p();

                function k(t) {
                    (0, r.default)(I, t), I.length = e.length, A.notifyListeners(I.location, I.action)
                }

                function O(t) {
                    (function(t) {
                        return void 0 === t.state && -1 === navigator.userAgent.indexOf("CriOS")
                    })(t) || L(C(t.state))
                }

                function R() {
                    L(C(v()))
                }
                var T = !1;

                function L(t) {
                    if (T) T = !1, k();
                    else {
                        A.confirmTransitionTo(t, "POP", x, (function(n) {
                            n ? k({
                                action: "POP",
                                location: t
                            }) : function(t) {
                                var n = I.location,
                                    e = U.indexOf(n.key); - 1 === e && (e = 0);
                                var r = U.indexOf(t.key); - 1 === r && (r = 0);
                                var o = e - r;
                                o && (T = !0, M(o))
                            }(t)
                        }))
                    }
                }
                var _ = C(v()),
                    U = [_.key];

                function H(t) {
                    return E + f(t)
                }

                function M(t) {
                    e.go(t)
                }
                var B = 0;

                function $(t) {
                    1 === (B += t) && 1 === t ? (window.addEventListener("popstate", O), c && window.addEventListener("hashchange", R)) : 0 === B && (window.removeEventListener("popstate", O), c && window.removeEventListener("hashchange", R))
                }
                var j = !1;
                var I = {
                    length: e.length,
                    action: "POP",
                    location: _,
                    createHref: H,
                    push: function(t, n) {
                        var r = l(t, n, S(), I.location);
                        A.confirmTransitionTo(r, "PUSH", x, (function(t) {
                            if (t) {
                                var n = H(r),
                                    i = r.key,
                                    a = r.state;
                                if (o)
                                    if (e.pushState({
                                            key: i,
                                            state: a
                                        }, null, n), g) window.location.href = n;
                                    else {
                                        var c = U.indexOf(I.location.key),
                                            u = U.slice(0, c + 1);
                                        u.push(r.key), U = u, k({
                                            action: "PUSH",
                                            location: r
                                        })
                                    }
                                else window.location.href = n
                            }
                        }))
                    },
                    replace: function(t, n) {
                        var r = l(t, n, S(), I.location);
                        A.confirmTransitionTo(r, "REPLACE", x, (function(t) {
                            if (t) {
                                var n = H(r),
                                    i = r.key,
                                    a = r.state;
                                if (o)
                                    if (e.replaceState({
                                            key: i,
                                            state: a
                                        }, null, n), g) window.location.replace(n);
                                    else {
                                        var c = U.indexOf(I.location.key); - 1 !== c && (U[c] = r.key), k({
                                            action: "REPLACE",
                                            location: r
                                        })
                                    }
                                else window.location.replace(n)
                            }
                        }))
                    },
                    go: M,
                    goBack: function() {
                        M(-1)
                    },
                    goForward: function() {
                        M(1)
                    },
                    block: function(t) {
                        void 0 === t && (t = !1);
                        var n = A.setPrompt(t);
                        return j || ($(1), j = !0),
                            function() {
                                return j && (j = !1, $(-1)), n()
                            }
                    },
                    listen: function(t) {
                        var n = A.appendListener(t);
                        return $(1),
                            function() {
                                $(-1), n()
                            }
                    }
                };
                return I
            }
            var y = {
                hashbang: {
                    encodePath: function(t) {
                        return "!" === t.charAt(0) ? t : "!/" + c(t)
                    },
                    decodePath: function(t) {
                        return "!" === t.charAt(0) ? t.substr(1) : t
                    }
                },
                noslash: {
                    encodePath: c,
                    decodePath: a
                },
                slash: {
                    encodePath: a,
                    decodePath: a
                }
            };

            function g(t) {
                var n = t.indexOf("#");
                return -1 === n ? t : t.slice(0, n)
            }

            function w() {
                var t = window.location.href,
                    n = t.indexOf("#");
                return -1 === n ? "" : t.substring(n + 1)
            }

            function x(t) {
                window.location.replace(g(window.location.href) + "#" + t)
            }

            function b(t) {
                void 0 === t && (t = {}), h || (0, i.default)(!1);
                var n = window.history,
                    e = (window.navigator.userAgent.indexOf("Firefox"), t),
                    o = e.getUserConfirmation,
                    c = void 0 === o ? d : o,
                    v = e.hashType,
                    m = void 0 === v ? "slash" : v,
                    b = t.basename ? s(a(t.basename)) : "",
                    P = y[m],
                    E = P.encodePath,
                    C = P.decodePath;

                function S() {
                    var t = C(w());
                    return b && (t = u(t, b)), l(t)
                }
                var A = p();

                function k(t) {
                    (0, r.default)(I, t), I.length = n.length, A.notifyListeners(I.location, I.action)
                }
                var O = !1,
                    R = null;

                function T() {
                    var t, n, e = w(),
                        r = E(e);
                    if (e !== r) x(r);
                    else {
                        var o = S(),
                            i = I.location;
                        if (!O && (n = o, (t = i).pathname === n.pathname && t.search === n.search && t.hash === n.hash)) return;
                        if (R === f(o)) return;
                        R = null,
                            function(t) {
                                if (O) O = !1, k();
                                else {
                                    A.confirmTransitionTo(t, "POP", c, (function(n) {
                                        n ? k({
                                            action: "POP",
                                            location: t
                                        }) : function(t) {
                                            var n = I.location,
                                                e = H.lastIndexOf(f(n)); - 1 === e && (e = 0);
                                            var r = H.lastIndexOf(f(t)); - 1 === r && (r = 0);
                                            var o = e - r;
                                            o && (O = !0,
                                                M(o))
                                        }(t)
                                    }))
                                }
                            }(o)
                    }
                }
                var L = w(),
                    _ = E(L);
                L !== _ && x(_);
                var U = S(),
                    H = [f(U)];

                function M(t) {
                    n.go(t)
                }
                var B = 0;

                function $(t) {
                    1 === (B += t) && 1 === t ? window.addEventListener("hashchange", T) : 0 === B && window.removeEventListener("hashchange", T)
                }
                var j = !1;
                var I = {
                    length: n.length,
                    action: "POP",
                    location: U,
                    createHref: function(t) {
                        var n = document.querySelector("base"),
                            e = "";
                        return n && n.getAttribute("href") && (e = g(window.location.href)), e + "#" + E(b + f(t))
                    },
                    push: function(t, n) {
                        var e = l(t, void 0, void 0, I.location);
                        A.confirmTransitionTo(e, "PUSH", c, (function(t) {
                            if (t) {
                                var n = f(e),
                                    r = E(b + n);
                                if (w() !== r) {
                                    R = n,
                                        function(t) {
                                            window.location.hash = t
                                        }(r);
                                    var o = H.lastIndexOf(f(I.location)),
                                        i = H.slice(0, o + 1);
                                    i.push(n), H = i, k({
                                        action: "PUSH",
                                        location: e
                                    })
                                } else k()
                            }
                        }))
                    },
                    replace: function(t, n) {
                        var e = l(t, void 0, void 0, I.location);
                        A.confirmTransitionTo(e, "REPLACE", c, (function(t) {
                            if (t) {
                                var n = f(e),
                                    r = E(b + n);
                                w() !== r && (R = n, x(r));
                                var o = H.indexOf(f(I.location)); - 1 !== o && (H[o] = n), k({
                                    action: "REPLACE",
                                    location: e
                                })
                            }
                        }))
                    },
                    go: M,
                    goBack: function() {
                        M(-1)
                    },
                    goForward: function() {
                        M(1)
                    },
                    block: function(t) {
                        void 0 === t && (t = !1);
                        var n = A.setPrompt(t);
                        return j || ($(1), j = !0),
                            function() {
                                return j && (j = !1, $(-1)), n()
                            }
                    },
                    listen: function(t) {
                        var n = A.appendListener(t);
                        return $(1),
                            function() {
                                $(-1), n()
                            }
                    }
                };
                return I
            }

            function P(t, n, e) {
                return Math.min(Math.max(t, n), e)
            }

            function E(t) {
                void 0 === t && (t = {});
                var n = t,
                    e = n.getUserConfirmation,
                    o = n.initialEntries,
                    i = void 0 === o ? ["/"] : o,
                    a = n.initialIndex,
                    c = void 0 === a ? 0 : a,
                    u = n.keyLength,
                    s = void 0 === u ? 6 : u,
                    h = p();

                function d(t) {
                    (0, r.default)(x, t), x.length = x.entries.length, h.notifyListeners(x.location, x.action)
                }

                function v() {
                    return Math.random().toString(36).substr(2, s)
                }
                var m = P(c, 0, i.length - 1),
                    y = i.map((function(t) {
                        return l(t, void 0, "string" == typeof t ? v() : t.key || v())
                    })),
                    g = f;

                function w(t) {
                    var n = P(x.index + t, 0, x.entries.length - 1),
                        r = x.entries[n];
                    h.confirmTransitionTo(r, "POP", e, (function(t) {
                        t ? d({
                            action: "POP",
                            location: r,
                            index: n
                        }) : d()
                    }))
                }
                var x = {
                    length: y.length,
                    action: "POP",
                    location: y[m],
                    index: m,
                    entries: y,
                    createHref: g,
                    push: function(t, n) {
                        var r = l(t, n, v(), x.location);
                        h.confirmTransitionTo(r, "PUSH", e, (function(t) {
                            if (t) {
                                var n = x.index + 1,
                                    e = x.entries.slice(0);
                                e.length > n ? e.splice(n, e.length - n, r) : e.push(r), d({
                                    action: "PUSH",
                                    location: r,
                                    index: n,
                                    entries: e
                                })
                            }
                        }))
                    },
                    replace: function(t, n) {
                        var r = l(t, n, v(), x.location);
                        h.confirmTransitionTo(r, "REPLACE", e, (function(t) {
                            t && (x.entries[x.index] = r, d({
                                action: "REPLACE",
                                location: r
                            }))
                        }))
                    },
                    go: w,
                    goBack: function() {
                        w(-1)
                    },
                    goForward: function() {
                        w(1)
                    },
                    canGo: function(t) {
                        var n = x.index + t;
                        return n >= 0 && n < x.entries.length
                    },
                    block: function(t) {
                        return void 0 === t && (t = !1), h.setPrompt(t)
                    },
                    listen: function(t) {
                        return h.appendListener(t)
                    }
                };
                return x
            }
        },
        541153: (t, n, e) => {
            "use strict";
            e.d(n, {
                MemoryRouter: () => E,
                Route: () => T,
                Router: () => P,
                StaticRouter: () => B,
                Switch: () => $,
                __RouterContext: () => b,
                generatePath: () => A,
                matchPath: () => R,
                useHistory: () => F,
                useLocation: () => N,
                useParams: () => W,
                withRouter: () => j
            });
            var r = e(841788),
                o = e(667294),
                i = e(45697),
                a = e.n(i),
                c = e(459731);

            function u(t, n) {
                return (u = Object.setPrototypeOf || function(t, n) {
                    return t.__proto__ = n, t
                })(t, n)
            }

            function s(t, n) {
                t.prototype = Object.create(n.prototype), t.prototype.constructor = t, u(t, n)
            }
            var f = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e.g ? e.g : {};

            function l(t) {
                var n = [];
                return {
                    on: function(t) {
                        n.push(t)
                    },
                    off: function(t) {
                        n = n.filter((function(n) {
                            return n !== t
                        }))
                    },
                    get: function() {
                        return t
                    },
                    set: function(e, r) {
                        t = e, n.forEach((function(n) {
                            return n(t, r)
                        }))
                    }
                }
            }
            const p = o.createContext || function(t, n) {
                var e, r, i = "__create-react-context-" + function() {
                        var t = "__global_unique_id__";
                        return f[t] = (f[t] || 0) + 1
                    }() + "__",
                    c = function(t) {
                        function e() {
                            var n;
                            return (n = t.apply(this, arguments) || this).emitter = l(n.props.value), n
                        }
                        s(e, t);
                        var r = e.prototype;
                        return r.getChildContext = function() {
                            var t;
                            return (t = {})[i] = this.emitter, t
                        }, r.componentWillReceiveProps = function(t) {
                            if (this.props.value !== t.value) {
                                var e, r = this.props.value,
                                    o = t.value;
                                ((i = r) === (a = o) ? 0 !== i || 1 / i == 1 / a : i != i && a != a) ? e = 0: (e = "function" == typeof n ? n(r, o) : 1073741823, 0 !== (e |= 0) && this.emitter.set(t.value, e))
                            }
                            var i, a
                        }, r.render = function() {
                            return this.props.children
                        }, e
                    }(o.Component);
                c.childContextTypes = ((e = {})[i] = a().object.isRequired, e);
                var u = function(n) {
                    function e() {
                        var t;
                        return (t = n.apply(this, arguments) || this).state = {
                            value: t.getValue()
                        }, t.onUpdate = function(n, e) {
                            0 != ((0 | t.observedBits) & e) && t.setState({
                                value: t.getValue()
                            })
                        }, t
                    }
                    s(e, n);
                    var r = e.prototype;
                    return r.componentWillReceiveProps = function(t) {
                        var n = t.observedBits;
                        this.observedBits = null == n ? 1073741823 : n
                    }, r.componentDidMount = function() {
                        this.context[i] && this.context[i].on(this.onUpdate);
                        var t = this.props.observedBits;
                        this.observedBits = null == t ? 1073741823 : t
                    }, r.componentWillUnmount = function() {
                        this.context[i] && this.context[i].off(this.onUpdate)
                    }, r.getValue = function() {
                        return this.context[i] ? this.context[i].get() : t
                    }, r.render = function() {
                        return (t = this.props.children, Array.isArray(t) ? t[0] : t)(this.state.value);
                        var t
                    }, e
                }(o.Component);
                return u.contextTypes = ((r = {})[i] = a().object, r), {
                    Provider: c,
                    Consumer: u
                }
            };
            var h = e(702177),
                d = e(722122),
                v = e(539658),
                m = e.n(v),
                y = (e(550663), e(419756)),
                g = e(108679),
                w = e.n(g),
                x = function(t) {
                    var n = p();
                    return n.displayName = t, n
                }("Router-History"),
                b = function(t) {
                    var n = p();
                    return n.displayName = t, n
                }("Router"),
                P = function(t) {
                    function n(n) {
                        var e;
                        return (e = t.call(this, n) || this).state = {
                            location: n.history.location
                        }, e._isMounted = !1, e._pendingLocation = null, n.staticContext || (e.unlisten = n.history.listen((function(t) {
                            e._isMounted ? e.setState({
                                location: t
                            }) : e._pendingLocation = t
                        }))), e
                    }(0, r.default)(n, t), n.computeRootMatch = function(t) {
                        return {
                            path: "/",
                            url: "/",
                            params: {},
                            isExact: "/" === t
                        }
                    };
                    var e = n.prototype;
                    return e.componentDidMount = function() {
                        this._isMounted = !0, this._pendingLocation && this.setState({
                            location: this._pendingLocation
                        })
                    }, e.componentWillUnmount = function() {
                        this.unlisten && this.unlisten()
                    }, e.render = function() {
                        return o.createElement(b.Provider, {
                            value: {
                                history: this.props.history,
                                location: this.state.location,
                                match: n.computeRootMatch(this.state.location.pathname),
                                staticContext: this.props.staticContext
                            }
                        }, o.createElement(x.Provider, {
                            children: this.props.children || null,
                            value: this.props.history
                        }))
                    }, n
                }(o.Component);
            var E = function(t) {
                function n() {
                    for (var n, e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                    return (n = t.call.apply(t, [this].concat(r)) || this).history = (0, c.createMemoryHistory)(n.props), n
                }
                return (0, r.default)(n, t), n.prototype.render = function() {
                    return o.createElement(P, {
                        history: this.history,
                        children: this.props.children
                    })
                }, n
            }(o.Component);
            o.Component;
            var C = {},
                S = 0;

            function A(t, n) {
                return void 0 === t && (t = "/"), void 0 === n && (n = {}), "/" === t ? t : function(t) {
                    if (C[t]) return C[t];
                    var n = m().compile(t);
                    return S < 1e4 && (C[t] = n, S++), n
                }(t)(n, {
                    pretty: !0
                })
            }
            var k = {},
                O = 0;

            function R(t, n) {
                void 0 === n && (n = {}), ("string" == typeof n || Array.isArray(n)) && (n = {
                    path: n
                });
                var e = n,
                    r = e.path,
                    o = e.exact,
                    i = void 0 !== o && o,
                    a = e.strict,
                    c = void 0 !== a && a,
                    u = e.sensitive,
                    s = void 0 !== u && u;
                return [].concat(r).reduce((function(n, e) {
                    if (!e && "" !== e) return null;
                    if (n) return n;
                    var r = function(t, n) {
                            var e = "" + n.end + n.strict + n.sensitive,
                                r = k[e] || (k[e] = {});
                            if (r[t]) return r[t];
                            var o = [],
                                i = {
                                    regexp: m()(t, o, n),
                                    keys: o
                                };
                            return O < 1e4 && (r[t] = i, O++), i
                        }(e, {
                            end: i,
                            strict: c,
                            sensitive: s
                        }),
                        o = r.regexp,
                        a = r.keys,
                        u = o.exec(t);
                    if (!u) return null;
                    var f = u[0],
                        l = u.slice(1),
                        p = t === f;
                    return i && !p ? null : {
                        path: e,
                        url: "/" === e && "" === f ? "/" : f,
                        isExact: p,
                        params: a.reduce((function(t, n, e) {
                            return t[n.name] = l[e], t
                        }), {})
                    }
                }), null)
            }
            var T = function(t) {
                function n() {
                    return t.apply(this, arguments) || this
                }
                return (0, r.default)(n, t), n.prototype.render = function() {
                    var t = this;
                    return o.createElement(b.Consumer, null, (function(n) {
                        n || (0, h.default)(!1);
                        var e = t.props.location || n.location,
                            r = t.props.computedMatch ? t.props.computedMatch : t.props.path ? R(e.pathname, t.props) : n.match,
                            i = (0, d.default)({}, n, {
                                location: e,
                                match: r
                            }),
                            a = t.props,
                            c = a.children,
                            u = a.component,
                            s = a.render;
                        return Array.isArray(c) && 0 === c.length && (c = null), o.createElement(b.Provider, {
                            value: i
                        }, i.match ? c ? "function" == typeof c ? c(i) : c : u ? o.createElement(u, i) : s ? s(i) : null : "function" == typeof c ? c(i) : null)
                    }))
                }, n
            }(o.Component);

            function L(t) {
                return "/" === t.charAt(0) ? t : "/" + t
            }

            function _(t, n) {
                if (!t) return n;
                var e = L(t);
                return 0 !== n.pathname.indexOf(e) ? n : (0, d.default)({}, n, {
                    pathname: n.pathname.substr(e.length)
                })
            }

            function U(t) {
                return "string" == typeof t ? t : (0, c.createPath)(t)
            }

            function H(t) {
                return function() {
                    (0, h.default)(!1)
                }
            }

            function M() {}
            var B = function(t) {
                function n() {
                    for (var n, e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                    return (n = t.call.apply(t, [this].concat(r)) || this).handlePush = function(t) {
                        return n.navigateTo(t, "PUSH")
                    }, n.handleReplace = function(t) {
                        return n.navigateTo(t, "REPLACE")
                    }, n.handleListen = function() {
                        return M
                    }, n.handleBlock = function() {
                        return M
                    }, n
                }(0, r.default)(n, t);
                var e = n.prototype;
                return e.navigateTo = function(t, n) {
                    var e = this.props,
                        r = e.basename,
                        o = void 0 === r ? "" : r,
                        i = e.context,
                        a = void 0 === i ? {} : i;
                    a.action = n, a.location = function(t, n) {
                        return t ? (0, d.default)({}, n, {
                            pathname: L(t) + n.pathname
                        }) : n
                    }(o, (0, c.createLocation)(t)), a.url = U(a.location)
                }, e.render = function() {
                    var t = this.props,
                        n = t.basename,
                        e = void 0 === n ? "" : n,
                        r = t.context,
                        i = void 0 === r ? {} : r,
                        a = t.location,
                        u = void 0 === a ? "/" : a,
                        s = (0, y.default)(t, ["basename", "context", "location"]),
                        f = {
                            createHref: function(t) {
                                return L(e + U(t))
                            },
                            action: "POP",
                            location: _(e, (0, c.createLocation)(u)),
                            push: this.handlePush,
                            replace: this.handleReplace,
                            go: H(),
                            goBack: H(),
                            goForward: H(),
                            listen: this.handleListen,
                            block: this.handleBlock
                        };
                    return o.createElement(P, (0, d.default)({}, s, {
                        history: f,
                        staticContext: i
                    }))
                }, n
            }(o.Component);
            var $ = function(t) {
                function n() {
                    return t.apply(this, arguments) || this
                }
                return (0, r.default)(n, t), n.prototype.render = function() {
                    var t = this;
                    return o.createElement(b.Consumer, null, (function(n) {
                        n || (0, h.default)(!1);
                        var e, r, i = t.props.location || n.location;
                        return o.Children.forEach(t.props.children, (function(t) {
                            if (null == r && o.isValidElement(t)) {
                                e = t;
                                var a = t.props.path || t.props.from;
                                r = a ? R(i.pathname, (0, d.default)({}, t.props, {
                                    path: a
                                })) : n.match
                            }
                        })), r ? o.cloneElement(e, {
                            location: i,
                            computedMatch: r
                        }) : null
                    }))
                }, n
            }(o.Component);

            function j(t) {
                var n = "withRouter(" + (t.displayName || t.name) + ")",
                    e = function(n) {
                        var e = n.wrappedComponentRef,
                            r = (0, y.default)(n, ["wrappedComponentRef"]);
                        return o.createElement(b.Consumer, null, (function(n) {
                            return n || (0, h.default)(!1), o.createElement(t, (0, d.default)({}, r, n, {
                                ref: e
                            }))
                        }))
                    };
                return e.displayName = n, e.WrappedComponent = t, w()(e, t)
            }
            var I = o.useContext;

            function F() {
                return I(x)
            }

            function N() {
                return I(b).location
            }

            function W() {
                var t = I(b).match;
                return t ? t.params : {}
            }
        },
        776585: t => {
            t.exports = Array.isArray || function(t) {
                return "[object Array]" == Object.prototype.toString.call(t)
            }
        },
        539658: (t, n, e) => {
            var r = e(776585);
            t.exports = h, t.exports.parse = i, t.exports.compile = function(t, n) {
                return c(i(t, n), n)
            }, t.exports.tokensToFunction = c, t.exports.tokensToRegExp = p;
            var o = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function i(t, n) {
                for (var e, r = [], i = 0, a = 0, c = "", f = n && n.delimiter || "/"; null != (e = o.exec(t));) {
                    var l = e[0],
                        p = e[1],
                        h = e.index;
                    if (c += t.slice(a, h), a = h + l.length, p) c += p[1];
                    else {
                        var d = t[a],
                            v = e[2],
                            m = e[3],
                            y = e[4],
                            g = e[5],
                            w = e[6],
                            x = e[7];
                        c && (r.push(c), c = "");
                        var b = null != v && null != d && d !== v,
                            P = "+" === w || "*" === w,
                            E = "?" === w || "*" === w,
                            C = e[2] || f,
                            S = y || g;
                        r.push({
                            name: m || i++,
                            prefix: v || "",
                            delimiter: C,
                            optional: E,
                            repeat: P,
                            partial: b,
                            asterisk: !!x,
                            pattern: S ? s(S) : x ? ".*" : "[^" + u(C) + "]+?"
                        })
                    }
                }
                return a < t.length && (c += t.substr(a)), c && r.push(c), r
            }

            function a(t) {
                return encodeURI(t).replace(/[\/?#]/g, (function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function c(t, n) {
                for (var e = new Array(t.length), o = 0; o < t.length; o++) "object" == typeof t[o] && (e[o] = new RegExp("^(?:" + t[o].pattern + ")$", l(n)));
                return function(n, o) {
                    for (var i = "", c = n || {}, u = (o || {}).pretty ? a : encodeURIComponent, s = 0; s < t.length; s++) {
                        var f = t[s];
                        if ("string" != typeof f) {
                            var l, p = c[f.name];
                            if (null == p) {
                                if (f.optional) {
                                    f.partial && (i += f.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + f.name + '" to be defined')
                            }
                            if (r(p)) {
                                if (!f.repeat) throw new TypeError('Expected "' + f.name + '" to not repeat, but received `' + JSON.stringify(p) + "`");
                                if (0 === p.length) {
                                    if (f.optional) continue;
                                    throw new TypeError('Expected "' + f.name + '" to not be empty')
                                }
                                for (var h = 0; h < p.length; h++) {
                                    if (l = u(p[h]), !e[s].test(l)) throw new TypeError('Expected all "' + f.name + '" to match "' + f.pattern + '", but received `' + JSON.stringify(l) + "`");
                                    i += (0 === h ? f.prefix : f.delimiter) + l
                                }
                            } else {
                                if (l = f.asterisk ? encodeURI(p).replace(/[?#]/g, (function(t) {
                                        return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                                    })) : u(p), !e[s].test(l)) throw new TypeError('Expected "' + f.name + '" to match "' + f.pattern + '", but received "' + l + '"');
                                i += f.prefix + l
                            }
                        } else i += f
                    }
                    return i
                }
            }

            function u(t) {
                return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
            }

            function s(t) {
                return t.replace(/([=!:$\/()])/g, "\\$1")
            }

            function f(t, n) {
                return t.keys = n, t
            }

            function l(t) {
                return t && t.sensitive ? "" : "i"
            }

            function p(t, n, e) {
                r(n) || (e = n || e, n = []);
                for (var o = (e = e || {}).strict, i = !1 !== e.end, a = "", c = 0; c < t.length; c++) {
                    var s = t[c];
                    if ("string" == typeof s) a += u(s);
                    else {
                        var p = u(s.prefix),
                            h = "(?:" + s.pattern + ")";
                        n.push(s), s.repeat && (h += "(?:" + p + h + ")*"), a += h = s.optional ? s.partial ? p + "(" + h + ")?" : "(?:" + p + "(" + h + "))?" : p + "(" + h + ")"
                    }
                }
                var d = u(e.delimiter || "/"),
                    v = a.slice(-d.length) === d;
                return o || (a = (v ? a.slice(0, -d.length) : a) + "(?:" + d + "(?=$))?"), a += i ? "$" : o && v ? "" : "(?=" + d + "|$)", f(new RegExp("^" + a, l(e)), n)
            }

            function h(t, n, e) {
                return r(n) || (e = n || e, n = []), e = e || {}, t instanceof RegExp ? function(t, n) {
                    var e = t.source.match(/\((?!\?)/g);
                    if (e)
                        for (var r = 0; r < e.length; r++) n.push({
                            name: r,
                            prefix: null,
                            delimiter: null,
                            optional: !1,
                            repeat: !1,
                            partial: !1,
                            asterisk: !1,
                            pattern: null
                        });
                    return f(t, n)
                }(t, n) : r(t) ? function(t, n, e) {
                    for (var r = [], o = 0; o < t.length; o++) r.push(h(t[o], n, e).source);
                    return f(new RegExp("(?:" + r.join("|") + ")", l(e)), n)
                }(t, n, e) : function(t, n, e) {
                    return p(i(t, e), n, e)
                }(t, n, e)
            }
        },
        630086: (t, n) => {
            "use strict";
            var e = "function" == typeof Symbol && Symbol.for,
                r = e ? Symbol.for("react.element") : 60103,
                o = e ? Symbol.for("react.portal") : 60106,
                i = e ? Symbol.for("react.fragment") : 60107,
                a = e ? Symbol.for("react.strict_mode") : 60108,
                c = e ? Symbol.for("react.profiler") : 60114,
                u = e ? Symbol.for("react.provider") : 60109,
                s = e ? Symbol.for("react.context") : 60110,
                f = e ? Symbol.for("react.async_mode") : 60111,
                l = e ? Symbol.for("react.concurrent_mode") : 60111,
                p = e ? Symbol.for("react.forward_ref") : 60112,
                h = e ? Symbol.for("react.suspense") : 60113,
                d = e ? Symbol.for("react.suspense_list") : 60120,
                v = e ? Symbol.for("react.memo") : 60115,
                m = e ? Symbol.for("react.lazy") : 60116,
                y = e ? Symbol.for("react.block") : 60121,
                g = e ? Symbol.for("react.fundamental") : 60117,
                w = e ? Symbol.for("react.responder") : 60118,
                x = e ? Symbol.for("react.scope") : 60119;

            function b(t) {
                if ("object" == typeof t && null !== t) {
                    var n = t.$$typeof;
                    switch (n) {
                        case r:
                            switch (t = t.type) {
                                case f:
                                case l:
                                case i:
                                case c:
                                case a:
                                case h:
                                    return t;
                                default:
                                    switch (t = t && t.$$typeof) {
                                        case s:
                                        case p:
                                        case m:
                                        case v:
                                        case u:
                                            return t;
                                        default:
                                            return n
                                    }
                            }
                        case o:
                            return n
                    }
                }
            }

            function P(t) {
                return b(t) === l
            }
        },
        550663: (t, n, e) => {
            "use strict";
            e(630086)
        }
    }
]);