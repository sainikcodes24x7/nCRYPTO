(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [73715], {
        673715: (e, t, n) => {
            "use strict";
            var r = n(307833),
                o = [{
                    d: "E-Mini S&P 500",
                    t: "ES"
                }, {
                    d: "E-Mini Nasdaq 100",
                    t: "NQ"
                }, {
                    d: "Gold",
                    t: "GC"
                }, {
                    d: "Silver",
                    t: "SI"
                }, {
                    d: "Crude Oil WTI",
                    t: "CL"
                }, {
                    d: "Natural Gas",
                    t: "NG"
                }, {
                    d: "Australian Dollar",
                    t: "6A"
                }, {
                    d: "Australian Dollar (Floor)",
                    t: "AD"
                }, {
                    d: "Euro FX",
                    t: "6E"
                }, {
                    d: "Euro FX (Floor)",
                    t: "EC"
                }, {
                    d: "Corn",
                    t: "ZC"
                }, {
                    d: "Corn (Floor)",
                    t: "C"
                }, {
                    d: "Eurodollar",
                    t: "GE"
                }, {
                    d: "Eurodollar (Floor)",
                    t: "ED"
                }],
                i = function() {
                    var e = [{
                        pattern: "(",
                        ctor: a
                    }, {
                        pattern: ")",
                        ctor: s
                    }, {
                        pattern: "+",
                        ctor: u
                    }, {
                        pattern: "-",
                        ctor: p
                    }, {
                        pattern: "*",
                        ctor: f
                    }, {
                        pattern: "/",
                        ctor: l
                    }, {
                        pattern: "^",
                        ctor: h
                    }, {
                        pattern: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                        ctor: v
                    }, {
                        pattern: /\./,
                        ctor: k
                    }, {
                        pattern: r.enabled("charting_library_base") ? /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&]*|'.+?'/ : /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&]*|'.+?'/,
                        ctor: g
                    }, {
                        pattern: /'[^']*/,
                        ctor: m
                    }, {
                        pattern: /[\0-\x20\s]+/,
                        ctor: i
                    }];

                    function t(e, t) {
                        var n = function() {};
                        return n.prototype = t.prototype, e.prototype = new n, e
                    }

                    function n() {}

                    function i(e) {
                        this.value = e
                    }

                    function a() {}

                    function s() {}

                    function c() {}

                    function u() {}

                    function p() {}

                    function f() {}

                    function l() {}

                    function h() {}
                    n.prototype.toString = function() {
                        return this.value
                    }, t(i, n), t(a, n), a.prototype.value = "(", t(s, n), s.prototype.value = ")", t(c, n), t(u, c), u.prototype.value = "+", u.prototype.precedence = 0, u.prototype.commutative = !0, t(p, c), p.prototype.value = "-", p.prototype.precedence = 0, p.prototype.commutative = !1, t(f, c), f.prototype.value = "*", f.prototype.precedence = 1, f.prototype.commutative = !0, t(l, c), l.prototype.value = "/", l.prototype.precedence = 1, l.prototype.commutative = !1, t(h, c), h.prototype.value = "^", h.prototype.precedence = 2, h.prototype.commutative = !1;
                    var d = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i,
                        _ = /[+\-/*]/;

                    function g(e) {
                        this.value = e
                    }

                    function v(e) {
                        this.value = e
                    }

                    function y(e) {
                        this.value = e
                    }

                    function m() {
                        g.apply(this, arguments)
                    }

                    function k() {
                        v.apply(this, arguments)
                    }
                    t(g, n), g.prototype.toString = function() {
                        if (this.hasOwnProperty("_ticker")) {
                            var e = _.test(this._ticker) ? "'" : "";
                            return e + (this._exchange ? this._exchange + ":" : "") + this._ticker + e
                        }
                        return this.value
                    }, g.prototype.parse = function() {
                        var e = d.exec(this.value);
                        e[1] && (this._exchange = e[1]), this._ticker = e[2]
                    }, g.prototype.parseAsFutures = function() {
                        this.hasOwnProperty("_ticker") || this.parse();
                        for (var e = function(e) {
                                return o.some((function(t) {
                                    return t.t === e
                                }))
                            }, t = 2; t >= 1; --t) {
                            var n = this._ticker.slice(0, t);
                            if (e(n)) {
                                this._root = n, this._contract = this._ticker.slice(t);
                                break
                            }
                        }
                    }, g.prototype.exchange = function(e) {
                        if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._exchange;
                        null == e ? delete this._exchange : this._exchange = e + ""
                    }, g.prototype.ticker = function(e) {
                        if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._ticker;
                        null == e ? delete this._ticker : this._ticker = e + "", delete this._root, delete this._contract
                    }, g.prototype.root = function(e) {
                        if (this.hasOwnProperty("_root") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                        null == e ? delete this._root : (this._root = e + "", this._root && (this._ticker = this._root + (this._contract || "")))
                    }, g.prototype.contract = function(e) {
                        if (this.hasOwnProperty("_contract") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                        null == e ? delete this._contract : (this._contract = e + "", this._root && (this._ticker = this._root + this._contract))
                    }, t(v, n), v.prototype.toString = function() {
                        return this.hasOwnProperty("_normalizedValue") ? this._normalizedValue : this.value
                    }, v.prototype.parse = function() {
                        this._normalizedValue = this.value.replace(/^0+|\.0*$/g, "").replace(/(\.\d*?)0+$/, "$1").replace(/^(\.|$)/, "0$1")
                    }, y.prototype.toString = function() {
                        return this.value
                    }, t(m, g), m.prototype.isIncomplete = !0, m.prototype.incompleteSuggest = function() {
                        if ("'" !== this.value) return String("'")
                    }, t(k, v), k.prototype.isIncomplete = !0;
                    var F = new RegExp(e.map((function(e) {
                        return "(" + ("string" == typeof e.pattern ? e.pattern.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&") : e.pattern.source) + ")"
                    })).concat(".").join("|"), "g");

                    function w(t, n) {
                        var r, o = [];
                        e: for (; r = F.exec(t);) {
                            for (var a = e.length; a--;)
                                if (r[a + 1]) {
                                    if (e[a].ctor) {
                                        var s = new e[a].ctor(r[a + 1]);
                                        s._offset = r.index, o.push(s)
                                    }
                                    continue e
                                }
                            var c = new y(r[0]);
                            c._offset = r.index, o.push(c)
                        }
                        if (n && n.recover) {
                            var u;
                            for (a = o.length; a--;) {
                                var p = o[a];
                                if (p instanceof v || p instanceof g) {
                                    if (void 0 !== u) {
                                        var f = new g(""),
                                            l = o.splice(a, u - a + 1, f);
                                        f.value = l.map((function(e) {
                                            return e.value
                                        })).join("")
                                    }
                                    u = a
                                } else p instanceof i || (u = void 0)
                            }
                        }
                        return o
                    }

                    function x(e) {
                        for (var t = [], n = 0; n < e.length; n++) e[n] instanceof i || t.push(e[n]);
                        return t
                    }

                    function b(e) {
                        e = x(e);
                        for (var t, n = [], r = [], o = 0; o < e.length; o++) {
                            var i = e[o];
                            if (i instanceof c) r.length && r[r.length - 1].minPrecedence > i.precedence && (r[r.length - 1].minPrecedence = i.precedence);
                            else if (i instanceof a) r.push(t = {
                                minPrecedence: 1 / 0,
                                openBraceIndex: o
                            });
                            else if (i instanceof s) {
                                var u = e[(t = r.pop()).openBraceIndex - 1],
                                    p = e[o + 1];
                                p instanceof c && !(p.precedence <= t.minPrecedence) || !(!(u instanceof c) || u.precedence < t.minPrecedence || u.precedence === t.minPrecedence && u.commutative) || (n.unshift(t.openBraceIndex), n.push(o), r.length && r[r.length - 1].minPrecedence > t.minPrecedence && (r[r.length - 1].minPrecedence = t.minPrecedence))
                            }
                        }
                        for (o = n.length; o--;) e.splice(n[o], 1);
                        return e
                    }

                    function E(e) {
                        if ("string" != typeof e) throw new TypeError("expression must be a string");
                        return (e = w(e)).filter((function(e) {
                            return e instanceof g
                        })).map((function(e) {
                            return e.exchange()
                        })).filter((function(e) {
                            return e
                        }))
                    }

                    function P(e) {
                        return 1 !== (e = E(e)).length ? null : e[0]
                    }

                    function S(e, t) {
                        return (e = E(e)).some((function(e) {
                            return t.includes((e || "").toUpperCase())
                        }))
                    }

                    function C(e) {
                        return e.join("")
                    }
                    return {
                        tokenize: w,
                        validate: function(e) {
                            if (r.enabled("charting_library_base")) return {
                                currentState: "var"
                            };
                            for (var t = "init", n = {
                                    warnings: [],
                                    errors: [],
                                    isEmpty: !0
                                }, o = [], u = 0; u < e.length; u++) {
                                if (!((f = e[u]) instanceof i)) {
                                    if (delete n.isEmpty, f.isIncomplete) {
                                        var p = {
                                            status: "incomplete",
                                            reason: "incomplete_token",
                                            offset: f._offset,
                                            token: f
                                        };
                                        if (f.incompleteSuggest && (p.recover = {
                                                append: f.incompleteSuggest()
                                            }), n.warnings.push(p), u !== e.length - 1) {
                                            p.status = "error";
                                            continue
                                        }
                                    }
                                    if (f instanceof g || f instanceof v) {
                                        if ("var" === t) {
                                            n.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: f._offset,
                                                token: f
                                            });
                                            continue
                                        }
                                        t = "var"
                                    } else if (f instanceof c) {
                                        if ("var" !== t) {
                                            n.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: f._offset,
                                                token: f
                                            });
                                            continue
                                        }
                                        t = "operator"
                                    } else if (f instanceof a) {
                                        if ("var" === t) {
                                            n.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: f._offset,
                                                token: f
                                            });
                                            continue
                                        }
                                        o.push(f), t = "init"
                                    } else if (f instanceof s) {
                                        if ("var" !== t) {
                                            n.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: f._offset,
                                                token: f
                                            });
                                            continue
                                        }
                                        o.pop() || n.errors.push({
                                            status: "error",
                                            reason: "unbalanced_brace",
                                            offset: f._offset,
                                            token: f,
                                            recover: {
                                                prepend: new a
                                            }
                                        }), t = "var"
                                    } else f instanceof y && n.errors.push({
                                        status: "error",
                                        reason: "unparsed_entity",
                                        offset: f._offset,
                                        token: f
                                    })
                                }
                            }
                            for (n.braceBalance = o.length, "var" !== t && n.warnings.push({
                                    status: "incomplete"
                                }); o.length;) {
                                var f;
                                p = {
                                    status: "incomplete",
                                    reason: "unbalanced_brace",
                                    offset: (f = o.pop())._offset,
                                    token: f
                                };
                                "var" === t && (p.recover = {
                                    append: new s
                                }), n.warnings.push(p)
                            }
                            return n.currentState = t, 0 === n.warnings.length && delete n.warnings, 0 === n.errors.length && delete n.errors, n
                        },
                        factorOutBraces: b,
                        normalizeTokens: function(e) {
                            for (var t = 0; t < e.length; t++) e[t].parse && e[t].parse();
                            return e
                        },
                        flip: function(e) {
                            var t = function(e) {
                                for (var t, n = 0, r = 0, o = 0; o < e.length; o++) {
                                    var u = e[o];
                                    if (!(u instanceof i)) switch (n) {
                                        case 0:
                                            if (!(u instanceof v && 1 == +u.value)) return !1;
                                            n = 1;
                                            break;
                                        case 1:
                                            if (!(1 === n && u instanceof l)) return !1;
                                            n = 2, t = o + 1;
                                            break;
                                        case 2:
                                            if (u instanceof a) n = 3, r = 1;
                                            else if (u instanceof c) return !1;
                                            break;
                                        case 3:
                                            u instanceof a ? r++ : u instanceof s && --r <= 0 && (n = 2)
                                    }
                                }
                                return e.slice(t)
                            }(e);
                            return b(t || [new v("1"), new l, new a].concat(e).concat(new s))
                        },
                        hasBatsSymbols: function(e) {
                            return S(e, ["BATS"])
                        },
                        hasEodSymbols: function(e) {
                            return (e = P(e)) && -1 !== e.toUpperCase().indexOf("_EOD")
                        },
                        hasChxjpySymbols: function(e) {
                            return S(e, ["CHXJPY"])
                        },
                        hasFreeDelaySymbols: function(e) {
                            return S(e, pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(e) {
                                return e.exchange.toUpperCase() + "_DLY"
                            })))
                        },
                        getExchange: P,
                        getExchanges: E,
                        isExchange: function(e, t) {
                            return !!(e = P(e)) && e.substring(0, t.length) === t
                        },
                        SymbolToken: g,
                        IncompleteSymbolToken: m,
                        NumberToken: v,
                        BinaryOperatorToken: c,
                        OpenBraceToken: a,
                        CloseBraceToken: s,
                        ticker: function(e) {
                            return new g(e).ticker()
                        },
                        shortName: function(e) {
                            if ("string" != typeof e) throw new TypeError("expression must be a string");
                            var t = b(x(w(e)));
                            return t.forEach((function(e) {
                                e instanceof g && e.exchange(null)
                            })), C(t)
                        },
                        normalize: function(e) {
                            if ("string" != typeof e) throw new TypeError("expression must be a string");
                            return C(b(x(w(e))))
                        }
                    }
                }();
            e.exports = i
        }
    }
]);