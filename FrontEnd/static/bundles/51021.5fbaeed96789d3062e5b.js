(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [51021], {
        44560: (t, e, i) => {
            "use strict";
            i.d(e, {
                Version: () => n
            });
            var r = i(416282);
            class n {
                constructor(t, e) {
                    this._major = t, this._minor = e
                }
                major() {
                    return this._major
                }
                minor() {
                    return this._minor
                }
                isZero() {
                    return 0 === this._major && 0 === this._minor
                }
                toString() {
                    return this._major + "." + this._minor
                }
                compareTo(t) {
                    return this._major < t._major ? -1 : this._major > t._major ? 1 : this._minor < t._minor ? -1 : this._minor > t._minor ? 1 : 0
                }
                isLess(t) {
                    return this.compareTo(t) < 0
                }
                isLessOrEqual(t) {
                    return this.compareTo(t) <= 0
                }
                isEqual(t) {
                    return 0 === this.compareTo(t)
                }
                isGreater(t) {
                    return this.compareTo(t) > 0
                }
                isGreaterOrEqual(t) {
                    return this.compareTo(t) >= 0
                }
                static parse(t) {
                    if (t instanceof n) return new n(t.major(), t.minor());
                    if ("number" == typeof t) return (0, r.assert)(Math.floor(t) === t, "Version should not be a float number"), new n(t, 0);
                    if ("string" == typeof t) {
                        const e = t.split(".");
                        if (1 === e.length) {
                            const i = parseInt(e[0], 10);
                            return (0, r.assert)(!isNaN(i), "Bad version string: " + t), new n(i, 0)
                        }
                        if (2 === e.length) {
                            const i = parseInt(e[0], 10);
                            (0, r.assert)(!isNaN(i), "Bad version string: " + t);
                            const s = parseInt(e[1], 10);
                            return (0, r.assert)(!isNaN(s), "Bad version string: " + t), new n(i, s)
                        }
                        throw new Error("Bad version string (one dot expected): " + t)
                    }
                    throw new Error("Bad version: " + t)
                }
            }
            n.ZERO = new n(0, 0)
        },
        855055: (t, e, i) => {
            "use strict";
            i.d(e, {
                FormattersSerializer: () => l
            });
            var r = i(511228),
                n = i(681293),
                s = i(414704),
                o = i(753371),
                a = i(416282);
            const u = {
                price: r.PriceFormatter,
                volume: n.VolumeFormatter,
                percentage: s.PercentageFormatter,
                quoteSessionPrice: o.QuoteSessionPriceFormatter
            };
            var l;
            ! function(t) {
                t.serialize = function(t) {
                    const e = (0, a.ensureDefined)(u[t.type]);
                    return {
                        type: t.type,
                        state: e.serialize(t)
                    }
                }, t.deserialize = function(t) {
                    return (0, a.ensureDefined)(u[t.type]).deserialize(t.state)
                }
            }(l || (l = {}))
        },
        753371: (t, e, i) => {
            "use strict";
            i.d(e, {
                QuoteSessionPriceFormatter: () => n
            });
            var r = i(511228);
            class n {
                constructor(t) {
                    this.type = "quoteSessionPrice", this.reset(t)
                }
                state() {
                    return this._priceFormatter.state()
                }
                reset(t) {
                    this._priceFormatter = t || new r.PriceFormatter(100, 1, !1)
                }
                update(t, e) {
                    const i = null != e.pricescale || null != e.minmov || null != e.fractional || null != e.minmove2,
                        n = null != t.pricescale && null != t.minmov && null != t.fractional && null != t.minmove2;
                    i && n && (this._priceFormatter = new r.PriceFormatter(t.pricescale, t.minmov, t.fractional || !1, t.minmove2))
                }
                format(t, e, i) {
                    return this._priceFormatter.format(t, e, i)
                }
                hasForexAdditionalPrecision() {
                    return this._priceFormatter.hasForexAdditionalPrecision()
                }
                static serialize(t) {
                    return t.state()
                }
                static deserialize(t) {
                    const e = new r.PriceFormatter(t.priceScale, t.minMove, t.fractional, t.minMove2);
                    return new n(e)
                }
            }
        },
        590211: (t, e, i) => {
            "use strict";
            i.d(e, {
                patchSourceState: () => n
            });
            var r = i(120220);

            function n(t) {
                const e = {
                    palettes: {},
                    inputs: [{
                        defval: 2,
                        id: "upper diviation",
                        max: 500,
                        min: -500,
                        name: (0, r.t)("Upper Deviation"),
                        type: "integer"
                    }, {
                        defval: -2,
                        id: "lower diviation",
                        max: 500,
                        min: -500,
                        name: (0, r.t)("Lower Deviation"),
                        type: "integer"
                    }, {
                        defval: !0,
                        id: "use upper diviation",
                        name: (0, r.t)("Use Upper Deviation"),
                        type: "bool"
                    }, {
                        defval: !0,
                        id: "use lower diviation",
                        name: (0,
                            r.t)("Use Lower Deviation"),
                        type: "bool"
                    }, {
                        defval: 0,
                        id: "first bar time",
                        max: 253370764800,
                        min: 0,
                        name: (0, r.t)("First bar time"),
                        type: "time"
                    }, {
                        defval: 0,
                        id: "last bar time",
                        max: 253370764800,
                        min: 0,
                        name: (0, r.t)("Last bar time"),
                        type: "time"
                    }, {
                        defval: "close",
                        id: "source",
                        name: (0, r.t)("Source"),
                        options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"],
                        type: "text"
                    }],
                    plots: [],
                    graphics: {},
                    defaults: {
                        inputs: {
                            "first bar time": 0,
                            "last bar time": 0,
                            "lower diviation": -2,
                            source: "close",
                            "upper diviation": 2,
                            "use lower diviation": !0,
                            "use upper diviation": !0
                        }
                    },
                    _metainfoVersion: 6,
                    description: "Regression Trend",
                    id: "RegressionTrend@tv-basicstudies",
                    is_price_study: !0,
                    shortDescription: "Reg Trend",
                    shortId: "RegressionTrend",
                    version: "2",
                    fullId: "RegressionTrend@tv-basicstudies-2",
                    name: "RegressionTrend@tv-basicstudies"
                };
                return t.metaInfo || (t.metaInfo = e), t
            }
        },
        908155: (t, e, i) => {
            "use strict";
            var r = i(357233);

            function n(t) {
                var e = JSON.stringify(t);
                return e = e.replace(/'/g, "\\'")
            }
            t.exports = {
                formatCallstudyArg: n,
                prepareCallStudyArgs: function(t, e) {
                    var i = {};
                    if (e.isTVScript) {
                        var s = e.defaults.inputs.text;
                        i.text = r.patchILTemplate(s, e, t)
                    } else
                        for (var o = Object.keys(t), a = o.length - 1; a >= 0; a--) {
                            var u = o[a],
                                l = t[u] ? t[u].id : null;
                            l && t[l] && (i[l] = t[l])
                        }
                    return n(i)
                }
            }
        },
        286837: (t, e, i) => {
            "use strict";
            i.d(e, {
                generateSplitTitleForGui: () => a,
                generateTitleForGui: () => u
            });
            var r = i(416282),
                n = i(120220),
                s = i(857976);

            function o(t, e) {
                return (Math.round(t * Math.pow(10, e)) / Math.pow(10, e)).toString() || ""
            }

            function a(t) {
                const e = "QUANDL" === (t = t || {}).exchange,
                    i = {
                        title: "",
                        description: "",
                        interval: "",
                        exchange: "",
                        provider: "",
                        chartStyle: "",
                        sessionDescription: ""
                    };
                let a = "";
                if (t.description && e)
                    if (2 === t.description.split("/").length) a = t.description.split("/")[1];
                    else {
                        t.description.split("'").filter(t => t.length).forEach(t => {
                            let e = [];
                            e = t && ("/" === t[0] || /\d+\/\(?/.test(t)) ? [t] : t.split("/").filter(t => t.length), a += e[2 === e.length ? 1 : 0]
                        })
                    }
                else a = t.description ? t.description : t.symbol;
                if (t.ticker ? (i.title = t.ticker, i.description = l(a)) : i.title = l(a), t.interval && (i.interval = (0, s.translatedIntervalString)(t.interval)), e && t.description) {
                    const e = /[\w_]+\/[\w_]+/.exec(t.description);
                    e && e[0] ? i.provider = l(e[0].split("/")[0]) : i.provider = l(t.description.split("/")[0])
                }
                return t.exchange && (i.exchange = l(t.exchange)), i.chartStyle = l(function(t) {
                        const e = t.inputs;
                        switch (t.style) {
                            case 4:
                                const i = e.style + ("ATR" === e.style ? `(${e.atrLength})` : ""),
                                    s = (0, r.ensureDefined)(t.boxSize || e.boxSize);
                                return `${(0,n.t)("Renko")} [${i}, ${o(s,4)}]`;
                            case 7:
                                return `${(0,n.t)("Line Break")} [${e.lb}]`;
                            case 5:
                                const a = e.style + ("ATR" === e.style ? `(${e.atrLength})` : ""),
                                    u = t.reversalAmount || e.reversalAmount,
                                    l = void 0 !== u ? ", " + o(u, 8) : "";
                                return `${(0,n.t)("Kagi")} [${a}${l}]`;
                            case 6:
                                const d = `${e.style}${"ATR"===e.style?"("+e.atrLength+")":""}`,
                                    p = t.boxSize || e.boxSize;
                                return `${(0,n.t)("PnF")} [${d}, ${o((0,r.ensureDefined)(p),8)}, ${e.reversalAmount}]`
                        }
                        return 11 === t.style ? (0, n.t)("Range") : 8 === t.style ? (0, n.t)("Heikin Ashi") : ""
                    }(t)), t.branding && !a.toUpperCase().includes("TradingView".toUpperCase()) && (i.branding = "TradingView"),
                    t.sessionDescription && (i.sessionDescription = l(t.sessionDescription)), i
            }

            function u(t) {
                const e = a(t);
                return (t.ticker ? e.description : e.title) + (e.interval ? ", " + e.interval : "") + function(t, e = ", ") {
                    return (t.provider ? `${e}${t.provider}` : "") + (t.exchange ? `${e}${t.exchange}` : "") + (t.chartStyle ? `${e}${t.chartStyle}` : "") + (t.branding ? `${e}${t.branding}` : "") + (t.sessionDescription ? `${e}${t.sessionDescription}` : "")
                }(e)
            }

            function l(t) {
                return t.replace(/'/g, "")
            }
        },
        74845: (t, e, i) => {
            "use strict";
            i.d(e, {
                migrateMetaInfoAndPropState: () => u
            });
            var r = i(416282),
                n = i(284234),
                s = i.n(n),
                o = i(331565);
            const a = [new class {
                targetMetaInfoVersion() {
                    return 47
                }
                migrateMetaInfo(t) {
                    const e = t,
                        i = t;
                    if (i._metainfoVersion = 47, !e.defaults || void 0 === e.defaults.precision) return void(i.format = {
                        type: "inherit"
                    });
                    const r = e.defaults && e.defaults.precision,
                        n = (0, o.isNumber)(r) ? r : parseInt(r);
                    0 === n ? i.format = {
                        type: "volume"
                    } : isFinite(n) ? i.format = {
                        type: "price",
                        precision: n
                    } : i.format = {
                        type: "inherit"
                    }, delete e.defaults.precision
                }
                migratePropState(t) {}
            }, new class {
                targetMetaInfoVersion() {
                    return 50
                }
                migrateMetaInfo(t) {
                    const e = t,
                        i = t;
                    if (i._metainfoVersion = 50, void 0 === e.defaults || void 0 === e.defaults.ohlcPlots || void 0 === e.ohlcPlots) return;
                    const n = e.ohlcPlots,
                        s = e.defaults.ohlcPlots,
                        o = (0, r.ensureDefined)((0, r.ensureDefined)(i.defaults).ohlcPlots);
                    for (const t of Object.keys(s)) {
                        const e = s[t];
                        if ("ohlc_candles" === e.plottype) {
                            let i = !1;
                            const r = n[t];
                            void 0 !== r && (i = !!r.drawBorder, delete r.drawBorder), o[t] = {
                                borderColor: "#000000",
                                drawBorder: i,
                                ...e
                            }
                        }
                    }
                }
                migratePropState(t) {}
            }];

            function u(t, e) {
                const i = s().versionOf(t),
                    n = t;
                void 0 === n._serverMetaInfoVersion && (n._serverMetaInfoVersion = i), a.forEach(n => {
                    i < 0 || i >= n.targetMetaInfoVersion() || (n.migrateMetaInfo(t), void 0 !== e && n.migratePropState(e), (0, r.assert)(t._metainfoVersion === n.targetMetaInfoVersion()))
                })
            }
            a.sort((function(t, e) {
                return t.targetMetaInfoVersion() - e.targetMetaInfoVersion()
            }))
        },
        584819: (t, e, i) => {
            "use strict";

            function r(t, e) {
                return `${t}@${e}`
            }

            function n(t) {
                return t.replace(/(@[^-]+-[^-]+).*$/, "$1")
            }
            i.d(e, {
                studyIdString: () => r,
                extractStudyId: () => n
            })
        },
        700999: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                collectDepsForAlert: () => y,
                dependenciesForAlerts: () => m,
                idForAlert: () => v,
                patchChildIdInInputs: () => h,
                plotsForAlert: () => g
            });
            var r = i(416282),
                n = i(987380),
                s = i(724985);
            var o = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                },
                a = Object.keys || function(t) {
                    var e = Object.prototype.hasOwnProperty || function() {
                            return !0
                        },
                        i = [];
                    for (var r in t) e.call(t, r) && i.push(r);
                    return i
                },
                u = i(584819),
                l = i(284234),
                d = i.n(l),
                p = i(555782),
                c = i(331565);
            const f = (0, n.getLogger)("Chart.Study");

            function h(t, e, i) {
                void 0 !== e && void 0 !== i && i.forEach(i => {
                    const r = t[i];
                    if ("string" == typeof r) {
                        const n = r.split("$")[1];
                        t[i] = e + (void 0 === n ? "" : "$" + n)
                    } else if ((0, c.isObject)(r) && "source" === r.t) {
                        const t = r.v.split("$")[1];
                        r.v = e + (void 0 === t ? "" : "$" + t)
                    } else f.logError("Cannot patch source input, its type is not source: " + JSON.stringify(r))
                })
            }

            function v(t, e, i) {
                return (0, s.hash)(t + function(t, e) {
                    e || (e = {}), "function" == typeof e && (e = {
                        cmp: e
                    });
                    var i = e.space || "";
                    "number" == typeof i && (i = Array(i + 1).join(" "));
                    var r, n = "boolean" == typeof e.cycles && e.cycles,
                        s = e.replacer || function(t, e) {
                            return e
                        },
                        u = e.cmp && (r = e.cmp, function(t) {
                            return function(e, i) {
                                var n = {
                                        key: e,
                                        value: t[e]
                                    },
                                    s = {
                                        key: i,
                                        value: t[i]
                                    };
                                return r(n, s)
                            }
                        }),
                        l = [];
                    return function t(e, r, d, p) {
                        var c = i ? "\n" + new Array(p + 1).join(i) : "",
                            f = i ? ": " : ":";
                        if (d && d.toJSON && "function" == typeof d.toJSON && (d = d.toJSON()), void 0 !== (d = s.call(e, r, d))) {
                            if ("object" != typeof d || null === d) return JSON.stringify(d);
                            if (o(d)) {
                                for (var h = [], v = 0; v < d.length; v++) {
                                    var g = t(d, v, d[v], p + 1) || JSON.stringify(null);
                                    h.push(c + i + g)
                                }
                                return "[" + h.join(",") + c + "]"
                            }
                            if (-1 !== l.indexOf(d)) {
                                if (n) return JSON.stringify("__cycle__");
                                throw new TypeError("Converting circular structure to JSON")
                            }
                            l.push(d);
                            var y = a(d).sort(u && u(d));
                            for (h = [], v = 0; v < y.length; v++) {
                                var m = t(d, r = y[v], d[r], p + 1);
                                if (m) {
                                    var I = JSON.stringify(r) + f + m;
                                    h.push(c + i + I)
                                }
                            }
                            return l.splice(l.indexOf(d), 1), "{" + h.join(",") + c + "}"
                        }
                    }({
                        "": t
                    }, "", t, 0)
                }(e) + (null != i ? i : "")).toString()
            }

            function g(t, e, i) {
                const n = [p.isLinePlot, p.isShapesPlot, p.isCharsPlot, p.isArrowsPlot, p.isOhlcPlot, p.isAlertConditionPlot];
                return t.plots.map((t, e) => ({ ...t,
                    pinePlotIndex: e
                })).filter(t => !(void 0 !== i && !i.includes(t.id)) && n.some(e => e(t))).map(i => {
                    const n = {
                        id: i.id,
                        type: i.type,
                        pinePlotIndex: i.pinePlotIndex,
                        offset: e(i.id)
                    };
                    if (t.styles && void 0 !== t.styles[i.id]) {
                        const e = (0, r.ensureDefined)((0, r.ensureDefined)(t.styles)[i.id]);
                        n.title = e.title || "", n.text = e.text || ""
                    }
                    return (0, p.isOhlcPlot)(i) && i.target && t.ohlcPlots && t.ohlcPlots[i.target] && (n.ohlcTitle = (0, r.ensureDefined)((0, r.ensureDefined)(t.ohlcPlots)[i.target]).title), n
                })
            }

            function y(t, e) {
                const i = [];
                let n, s;
                for (let r = t.length - 1; r >= 0; r--) {
                    const o = t[r],
                        a = (0, u.extractStudyId)(o.metaInfo().id),
                        l = d().getStudyIdWithLatestVersion(o.metaInfo());
                    s = o.inputsForAlertState();
                    h(s, n, o.metaInfo().inputs.filter(t => "source" === t.type).map(t => t.id));
                    const p = Object.assign({}, s);
                    o.metaInfo().isTVScript && delete p.text;
                    const c = v(a, p, e);
                    i.push({
                        id: c,
                        study: l,
                        inputs: s
                    }), n = c
                }
                return {
                    idForAlert: (0, r.ensureDefined)(n),
                    inputsForAlert: (0, r.ensureDefined)(s),
                    studyDependencies: i.reverse()
                }
            }

            function m(t, e) {
                return t.map(t => {
                    const i = t.inputs(),
                        r = t.metaInfo();
                    let n = d().cutDollarHash(r.fullId);
                    if ("tv-scripting" === r.productId) {
                        const t = e.findByIdSync({
                            type: "java",
                            studyId: "Script@tv-scripting"
                        });
                        null !== t && (n = t.fullId)
                    }
                    const s = {
                        id: t.sourceId(),
                        study: n,
                        inputs: i,
                        scriptIdPart: void 0,
                        scriptVersion: void 0
                    };
                    return r.pine ? { ...s,
                        scriptIdPart: r.scriptIdPart,
                        scriptVersion: r.pine.version
                    } : s
                })
            }
        },
        685763: (t, e, i) => {
            "use strict";
            var r = i(44560).Version,
                n = i(987380).getLogger("Chart.StudyMigration");

            function s(t) {
                this._studyId = t, this._maxToVers = r.ZERO, this._maxFromVers = r.ZERO, this._migrs = []
            }
            s.prototype.addMigration = function(t, e, i) {
                var n = r.parse(t),
                    s = r.parse(e);
                n.isGreater(this._maxFromVers) && (this._maxFromVers = n), s.isGreater(this._maxToVers) && (this._maxToVers = s), this._migrs.push({
                    fromVers: n,
                    toVers: s,
                    rules: i
                })
            }, s.prototype.updateInputs = function(t, e, i) {
                if (!i) return i;
                for (var r = TradingView.clone(i), s = t; s.isLess(e);) {
                    var o = this._findMigration(s);
                    if (null == o) break;
                    if (n.logNormal("Migrating study inputs from " + o.fromVers + " to " + o.toVers + " version, studyId: " + this._studyId + ", migration: " + JSON.stringify(o) + ", inputs: " + JSON.stringify(i)), r = this._applyMigration(r, o), !s.isLess(o.toVers)) throw new Error("Problems in study migration process... Possible infinite cycle has been detected and stopped.");
                    s = o.toVers
                }
                return s > t && n.logNormal("Study inputs migration is done, studyId: " + this._studyId + ", inputs: " + JSON.stringify(r)), r
            }, s.prototype._findMigration = function(t) {
                for (var e = -1, i = this._maxFromVers, r = 0; r < this._migrs.length; r++) {
                    var n = this._migrs[r];
                    n.fromVers.isLess(t) || n.fromVers.isLessOrEqual(i) && (i = n.fromVers, e = r)
                }
                return e < 0 ? null : this._migrs[e]
            }, s.prototype._applyMigration = function(t, e) {
                for (var i = t, r = 0; r < e.rules.length; r++) {
                    var n = e.rules[r];
                    i = this._getApplyRuleFun(n.type)(i, n)
                }
                return i
            }, s.prototype._getApplyRuleFun = function(t) {
                if ("inputRemoved" === t) return s._applyInputRemovedRule;
                if ("inputChangedType" === t) return s._applyInputChangedTypeRule;
                if ("inputChangedMinMax" === t) return s._applyInputChangedMinMaxRule;
                if ("inputChangedOptions" === t) return s._applyInputChangedOptionsRule;
                throw new Error("Unknown migration rule type: " + t)
            }, s._applyInputRemovedRule = function(t, e) {
                if (!(e.inputId in t)) return t;
                if ("removeVal" !== e.action) throw new Error("Unexpected rule.action=" + e.action + " in rule.type=" + e.type);
                var i = t[e.inputId];
                return delete t[e.inputId], n.logNormal("Input " + e.inputId + "=" + i + " removed"), t
            }, s._applyInputChangedTypeRule = function(t, e) {
                var i = t[e.inputId];
                if ("resetToDefVal" === e.action) return t[e.inputId] = e.defVal, n.logNormal("Input " + e.inputId + "=" + i + " reset to default value " + e.defVal), t;
                if ("convertVal" === e.action) {
                    if (null == i) return t;
                    if ("float" === e.inputTypeFrom && "integer" === e.inputType) return t[e.inputId] = Math.round(t[e.inputId]), n.logNormal("Input " + e.inputId + "=" + i + " converted to value " + t[e.inputId]), t;
                    if ("integer" === e.inputTypeFrom && "float" === e.inputType) return t;
                    if ("text" === e.inputTypeFrom && "source" === e.inputType) return s._isValidSource(i, e.options) || (t[e.inputId] = e.defVal), t;
                    throw new Error("Cannot convertVal from " + e.inputTypeFrom + " to " + e.inputType)
                }
                throw new Error("Unknown action " + e.action + " for rule with type " + e.type)
            }, s._isValidSource = function(t, e) {
                return t.indexOf("$") >= 0 || e.indexOf(t) >= 0
            }, s._applyInputChangedMinMaxRule = function(t, e) {
                if ("adjustValIfNeeded" !== e.action) throw new Error("Unknown action " + e.action + " for rule with type " + e.type);
                var i = t[e.inputId];
                return i < e.minVal ? t[e.inputId] = e.minVal : i > e.maxVal && (t[e.inputId] = e.maxVal), n.logNormal("Input " + e.inputId + "=" + i + " adjusted to value " + t[e.inputId]), t
            }, s._applyInputChangedOptionsRule = function(t, e) {
                if (!(["text"].indexOf(e.inputType) >= 0 && "resetToDefValIfNeeded" === e.action)) throw new Error("Unexpected rule.inputType=" + e.inputType + " in rule.action=" + e.action);
                var i = t[e.inputId];
                return e.options.indexOf(i) < 0 && (t[e.inputId] = e.defVal, n.logNormal("Input " + e.inputId + "=" + i + " reset to default value " + e.defVal)), t
            }, t.exports = s
        },
        795294: (t, e, i) => {
            "use strict";
            var r = i(416282).assert,
                n = i(590211).patchSourceState,
                s = i(457746),
                o = i(44560).Version,
                a = i(987380).getLogger("Chart.Study.Versioning"),
                u = i(11767),
                l = i(284234),
                d = i(211490).extractPineId,
                p = i(74845).migrateMetaInfoAndPropState;

            function c(t, e) {
                if (!t) throw new Error("No studies metainfo");
                var r = i(685763);
                if (this._studiesMetainfo = t, !e) throw new Error("No studies migrations");
                this._studiesMigrations = e, this._migrations = {};
                for (var n = 0; n < this._studiesMigrations.length; n++)
                    for (var s = this._studiesMigrations[n], o = s.versFrom, u = s.versTo, l = 0; l < s.studyMigrations.length; l++) {
                        var d = s.studyMigrations[l],
                            p = d.studyId;
                        if (0 !== d.rules.length) {
                            var c = p in this._migrations ? this._migrations[p] : new r(p);
                            c.addMigration(o, u, d.rules), this._migrations[p] = c
                        } else a.logError("Study Migration should have at least one convertion rule")
                    }
                this._clientMigrations = [function(t, e) {
                    if (0 === this._studiesMetainfo.length || !t.isTVScript || t.version >= 22) return e;
                    for (var i = {}, r = 0, n = 0;;) {
                        var s = e[n];
                        if (void 0 === s) break;
                        var o = e[s.id];
                        s.isFake && (s.id = "in_" + r++), i[n] = s, i[s.id] = o, n++
                    }
                    return i
                }]
            }
            c.prototype.updateMetaInfo = function(t) {
                if (!t) return t;
                r(!t.isTVScript, "This method should update only built-in java indicators metaInfo. For Pine indicators use updateMetaInfoAsync");
                for (var e = null, i = this._studiesMetainfo, n = 0; n < i.length; n++)
                    if (i[n].id === t.id) {
                        e = i[n];
                        break
                    }
                return TradingView.clone(e)
            }, c.prototype.updateMetaInfoAsync = function(t) {
                if (!t) return {
                    sync: !1,
                    result: Promise.reject("No old metaInfo was given")
                };
                var e = new l(t),
                    i = l.versionOf(t);
                if (t.isTVScript && !t.pine && i < l.VERSION_PINE_PROTECT_TV_4164) {
                    r(TradingView.isExistent(t.scriptIdPart), "scriptIdPart is missing, study " + JSON.stringify(t));
                    var n = t.scriptIdPart;
                    return {
                        sync: !1,
                        result: new Promise((function(i, r) {
                            s.processLegacy(n, t.TVScriptSourceCode).done((function(t) {
                                e.removeDefaults();
                                var r = new l(t);
                                r.createDefaults(), p(r), i(r)
                            })).fail((function(t, e) {
                                r(t)
                            }))
                        }))
                    }
                }
                if (t.isTVScript && t.pine) return (t._serverMetaInfoVersion || i) < l.CURRENT_METAINFO_FORMAT_VERSION ? {
                    sync: !1,
                    result: new Promise((function(i, r) {
                        s.translateScriptAsync2(t.scriptIdPart, t.pine.version).done((function(t) {
                            e.removeDefaults();
                            var r = new l(t);
                            r.createDefaults(), p(r), i(r)
                        })).fail((function(t, e) {
                            r(t)
                        }))
                    }))
                } : (e.createDefaults(), {
                    sync: !0,
                    result: e
                });
                for (var o = null, a = this._studiesMetainfo, u = 0; u < a.length; u++)
                    if (a[u].id === t.id) {
                        o = a[u];
                        break
                    }
                return {
                    sync: !0,
                    result: o ? TradingView.clone(o) : null
                }
            }, c.prototype.lastVersionOfStudy = function(t) {
                return this._studiesMetainfo.find((function(e) {
                    return e.id === t
                })).version
            }, c.prototype.updateStudyInputs = function(t, e, i, r, n) {
                var s = TradingView.clone(r);
                if (t in this._migrations) {
                    var u, l = o.parse(e);
                    if ("last" === i) {
                        var d = this.lastVersionOfStudy(t);
                        u = o.parse(d)
                    } else u = o.parse(i);
                    s = this._migrations[t].updateInputs(l, u, s)
                }
                if (null == n) return s;
                for (var p in n) p in s || (s[p] = n[p]);
                for (var p in s)
                    if (!(p in n)) {
                        var c = s[p];
                        a.logWarn("Extra input detected, studyId=" + t + ", versionFrom=" + e + ", inputId=" + p + ", inputValue=" + c + ", removing it and continue..."), delete s[p]
                    }
                return s
            }, c.prototype.updateStudyState = function(t, e, i) {
                if (null == t || null == e || null == i) return t;
                if (t = TradingView.clone(t), !(e.isTVScript || !!e.pine) && e.version !== i.version) {
                    var r = i && i.defaults.inputs,
                        n = this.updateStudyInputs(e.id, e.version, i.version, t.inputs, r);
                    t.inputs = n
                }
                for (var s = 0; s < this._clientMigrations.length; ++s) {
                    n = this._clientMigrations[s].call(this, e, t.inputs);
                    Object.keys(n).length === Object.keys(t.inputs).length ? t.inputs = n : a.logWarn("StudyVersioning._clientMigrations application returned bad result. Skipping it...")
                }
                var o = l.versionOf(e);
                if (e.isTVScript && e.TVScriptSourceCode && o >= 12 && o <= 26) {
                    var u = {};
                    for (s = 0; s < e.plots.length; ++s) {
                        var d = e.plots[s],
                            p = i.plots[s];
                        u[d.id] = p.id
                    }
                    var c = Object.keys(t.styles);
                    for (s = 0; s < c.length; ++s) {
                        var f = c[s],
                            h = t.styles[f];
                        delete t.styles[f];
                        var v = u[f];
                        t.styles[v] = h
                    }
                    var g = Object.keys(t.plots);
                    for (s = 0; s < g.length; ++s) {
                        var y = g[s];
                        f = t.plots[y].id;
                        t.plots[y].id = u[f]
                    }
                }
                return t
            }, c.prototype.patchPointsBasedStudyState = function(t) {
                return c._fixInputsMaxValue(t.state, t.metaInfo), "LineToolRegressionTrend" === t.type && (t = n(t)), t
            }, c.prototype.patchPointsBasedStudyData = function(t, e) {
                if (!u.isProd()) return e;
                if (!t || !e) return e;
                var i = TradingView.clone(e);
                return "VbPFixed@tv-volumebyprice" === t.id && t.version && t.version <= 4 && c._patchOldVolumeProfiles(0, i), i
            }, c.prototype.patchStudyData = function(t, e, i, r) {
                if (!u.isProd()) return {
                    data: e,
                    nsData: i,
                    indexes: r
                };
                var n = TradingView.clone(e),
                    s = TradingView.clone(i),
                    o = TradingView.clone(r);
                "VbPVisible@tv-volumebyprice" === t.id && t.version && t.version <= 4 && c._patchOldVolumeProfiles(0, n.graphics), "VbPSessions@tv-volumebyprice" === t.id && t.version && t.version <= 4 && c._patchOldVolumeProfiles(0, n.graphics);
                var a = l.versionOf(t);
                if (t.isTVScript && t.TVScriptSourceCode && a >= 12 && a <= 26) {
                    var d = n.columns;
                    n.columns = [];
                    for (var p = 0; p < d.length; ++p) {
                        var f = "plot_" + p;
                        n.columns.push(f)
                    }
                }
                return {
                    data: n,
                    nsData: s,
                    indexes: o
                }
            }, c._patchOldVolumeProfiles = function(t, e) {
                var i = e.hhists[t].data,
                    r = [];
                for (var n in i) r = r.concat(i[n]);
                e.hhists[0].data = r
            }, c._fixInputsOrder = function(t, e) {
                for (var i = l.getOrderedInputIds(e), r = c.splitInputs(t.inputs), n = r.arr, s = r.obj, o = TradingView.merge({}, s), a = 0; a < i.length; ++a) {
                    var u = i[a],
                        d = c.findInputKeyById(n, u);
                    if (null !== d) {
                        var p = n[d];
                        o[a] = p
                    }
                }
                t.inputs = o
            }, c.INPUT_MAX_VALUE = 1e12, c._verifyInputsMaxValue = function(t) {
                var e = c.INPUT_MAX_VALUE;
                if (t.inputs)
                    for (var i = 0; i < t.inputs.length; i++) {
                        var r = t.inputs[i];
                        "integer" === r.type && (r.max && r.max > e && a.logWarn("Bad integer input max value in metaInfo id=" + t.id + " title=" + t.description))
                    }
            }, c._fixInputsMaxValue = function(t, e) {
                if (!TradingView.isAbsent(e)) {
                    var i = c.INPUT_MAX_VALUE;
                    if (e.inputs)
                        for (var r = 0; r < e.inputs.length; r++) {
                            "integer" === (a = e.inputs[r]).type && (a.max && a.max > i && (a.max = i))
                        }
                    if (t && t.inputs) {
                        var n = c.splitInputs(t.inputs),
                            s = n.arr;
                        for (var o in s) {
                            var a;
                            "integer" === (a = s[o]).type && (a.max && a.max > i && (a.max = i))
                        }
                        t.inputs = TradingView.merge(n.obj, n.arr)
                    }
                }
            }, c.prototype.patchPropsStateAndMetaInfo = function(t, e, i) {
                "Script$BOOKER" !== e.productId || e.alerts || delete t.alerts, c._fixInputsOrder(t, e), c._fixInputsMaxValue(t, e);
                var r = c.splitInputs(t.inputs);
                t.inputs = r.obj;
                var n = l.versionOf(e);
                n < l.METAINFO_FORMAT_VERSION_SOS_V2 && e.isChildStudy && (t.isChildStudy = e.isChildStudy);
                if (e.isTVScript && e.version < 60 && ("Script$TV_EARNINGS@tv-scripting" !== e.id && "Script$TV_DIVIDENDS@tv-scripting" !== e.id && "Script$TV_SPLITS@tv-scripting" !== e.id || delete e.TVScriptSourceCode), "Volume" !== e.id && "Volume@tv-basicstudies" !== e.id || 0 !== e.inputs.length || (e.inputs = [{
                        id: "length",
                        type: "integer",
                        defval: 20,
                        min: 1,
                        max: 1e3
                    }], e.plots.push({
                        id: "vol_ma",
                        type: "line"
                    })), "Volume@tv-basicstudies" === e.id && e.version && e.version <= 46 && void 0 === t.styles.vol.transparency && (t.styles.vol.transparency = t.transparency || 87), "PivotPointsStandard@tv-basicstudies" === e.id && (0 === e.inputs.length ? (t.inputs = {
                        kind: "Traditional",
                        showHistoricalPivots: !0
                    }, e.inputs = [{
                        defval: "Traditional",
                        id: "kind",
                        type: "text",
                        options: ["Traditional", "Fibonacci", "Woodie", "Classic", "DeMark", "Camarilla"]
                    }, {
                        id: "showHistoricalPivots",
                        type: "bool",
                        defval: !0
                    }]) : 1 === e.inputs.length && (t.inputs = {
                        kind: "Traditional"
                    }, e.inputs = [{
                        defval: "Traditional",
                        id: "kind",
                        type: "text",
                        options: ["Traditional", "Fibonacci", "Woodie", "Classic", "DeMark", "Camarilla"]
                    }, {
                        id: "showHistoricalPivots",
                        type: "bool",
                        defval: !0
                    }]), void 0 === t._hardCodedDefaultsVersion)) {
                    t._hardCodedDefaultsVersion = 1;
                    var s = t.color;
                    delete t.color, t.levelsStyle = {
                        colors: {
                            P: s,
                            "S1/R1": s,
                            "S2/R2": s,
                            "S3/R3": s,
                            "S4/R4": s,
                            "S5/R5": s
                        }
                    }
                }
                "CMF" === e.shortId && 2 === e.inputs.length && (t.inputs = {
                    length: t.inputs["length fast"]
                }, e.inputs = e.inputs.splice(0, 1), e.inputs[0].id = "length"), e.defaults && void 0 === e.defaults.precision && n < l.VERSION_NEW_STUDY_PRECISION_FORMAT && (-1 !== ["Volume@tv-basicstudies", "VbPVisible@tv-volumebyprice", "VbPSessions@tv-volumebyprice"].indexOf(e.id) ? e.defaults.precision = 0 : e.defaults.precision = 4);
                if (e.version < 60)
                    for (var o = ["TV_DIVIDENDS", "TV_SPLITS", "TV_EARNINGS"], a = "Script".length, u = 0; u < o.length; u++) e.id.startsWith("Script$" + o[u] + "@tv-scripting") && (e.fullId = "ESD" + e.fullId.substring(a), e.id = "ESD" + e.id.substring(a), e.name = "ESD" + e.name.substring(a), e.shortId = "ESD" + e.shortId.substring(a), e.productId = "ESD" + e.productId.substring(a));
                var f = {
                    "ESD$TV_EARNINGS@tv-scripting": {
                        fullId: "Earnings@tv-basicstudies-129!",
                        id: "Earnings@tv-basicstudies",
                        name: "Earnings@tv-basicstudies",
                        shortId: "Earnings",
                        productId: "tv-basicstudies"
                    },
                    "ESD$TV_SPLITS@tv-scripting": {
                        fullId: "Splits@tv-basicstudies-129!",
                        id: "Splits@tv-basicstudies",
                        name: "Splits@tv-basicstudies",
                        shortId: "Splits",
                        productId: "tv-basicstudies"
                    },
                    "ESD$TV_DIVIDENDS@tv-scripting": {
                        fullId: "Dividends@tv-basicstudies-129!",
                        id: "Dividends@tv-basicstudies",
                        name: "Dividends@tv-basicstudies",
                        shortId: "Dividends",
                        productId: "tv-basicstudies"
                    }
                };
                if (e.id in f && Object.assign(e, f[e.id]), n < l.VERSION_PINE_PROTECT_TV_4164) {
                    var h = {
                        "StrategyScript$STD;Consecutive%1Ups/Downs%1Strategy": {
                            pineId: "STD;Consecutive%1Ups%1Downs%1Strategy",
                            className: "StrategyScript"
                        },
                        Script$EDGR_NET_INCOME_FROM_CONTINUING_OPERATIONS_APPLICABLE_TO_COMMON_V2: {
                            pineId: "Script$EDGR_NET_INCOME_FROM_CONTINUING_OPS_APPLICABLE_TO_COMMON_V2",
                            className: "Script"
                        }
                    };
                    if (e.shortId in h) {
                        var v = h[e.shortId].className + "$" + h[e.shortId].pineId,
                            g = {
                                scriptIdPart: h[e.shortId].pineId,
                                fullId: e.fullId.replace(e.shortId, v),
                                id: e.id.replace(e.shortId, v),
                                name: e.name.replace(e.shortId, v),
                                shortId: v
                            };
                        TradingView.merge(e, g), TradingView.merge(t, g)
                    }
                    var y = d(e.fullId),
                        m = y && y.match(/^(USER)(_\d+)(;)(.*)$/);
                    if (m) {
                        var I = m[0],
                            S = m[1] + m[3] + m[2] + m[4];
                        g = {
                            scriptIdPart: S,
                            fullId: e.fullId.replace(I, S),
                            id: e.id.replace(I, S),
                            name: e.name.replace(I, S),
                            shortId: e.shortId.replace(I, S)
                        };
                        TradingView.merge(e, g), TradingView.merge(t, g)
                    }
                }
                if ("MA" === e.id) {
                    var _ = new l({
                            id: "MAExp",
                            properties: [{
                                id: "is_price_study",
                                type: "bool",
                                value: "true"
                            }],
                            inputs: [{
                                id: "length",
                                type: "integer",
                                defval: 20,
                                min: 1,
                                max: 500
                            }, {
                                id: "source",
                                type: "text",
                                defval: "close",
                                options: ["open", "high", "low", "close"]
                            }],
                            plots: [{
                                id: "MovAvgExp",
                                type: "line"
                            }],
                            palettes: {}
                        }),
                        b = new l({
                            id: "MASimple",
                            properties: [{
                                id: "is_price_study",
                                type: "bool",
                                value: "true"
                            }],
                            inputs: [{
                                id: "length",
                                type: "integer",
                                defval: 20,
                                min: 1,
                                max: 500
                            }, {
                                id: "source",
                                type: "text",
                                defval: "close",
                                options: ["open", "high", "low", "close"]
                            }],
                            plots: [{
                                id: "MovAvgSimple",
                                type: "line"
                            }],
                            palettes: {}
                        }),
                        V = new l({
                            id: "MAVolumeWeighted",
                            properties: [{
                                id: "is_price_study",
                                type: "bool",
                                value: "true"
                            }],
                            inputs: [{
                                id: "length",
                                type: "integer",
                                defval: 20,
                                min: 1,
                                max: 500
                            }, {
                                id: "source",
                                type: "text",
                                defval: "close",
                                options: ["open", "high", "low", "close"]
                            }],
                            plots: [{
                                id: "MovAvgVolumeWeighted",
                                type: "line"
                            }],
                            palettes: {}
                        }),
                        T = new l({
                            id: "MAWeighted",
                            properties: [{
                                id: "is_price_study",
                                type: "bool",
                                value: "true"
                            }],
                            inputs: [{
                                id: "length",
                                type: "integer",
                                defval: 20,
                                min: 1,
                                max: 500
                            }, {
                                id: "source",
                                type: "text",
                                defval: "close",
                                options: ["open", "high", "low", "close"]
                            }],
                            plots: [{
                                id: "MovAvgWeighted",
                                type: "line"
                            }],
                            palettes: {}
                        });
                    switch (t.inputs.type) {
                        case "exp":
                            e = _;
                            break;
                        case "simple":
                            e = b;
                            break;
                        case "weighted":
                            e = T;
                            break;
                        case "volume weighted":
                            e = V
                    }
                    t.styles[e.plots[0].id] = t.styles.MovAvg, delete t.styles.MovAvg, delete t.inputs.type
                }
                return i.oldShowStudyLastValueProperty && (t.oldShowLastValue = t.showLastValue), delete t.showLastValue, delete t.showStudyArguments, p(e, t), {
                    propsState: t,
                    metaInfo: e
                }
            }, c.mergeInputs = function(t, e) {
                c.mergeInputsArrPart(t, e), c.mergeInputsObjPart(t, e)
            }, c.mergeInputsArrPart = function(t, e) {
                var i = c.splitInputs(e);
                for (var r in i.arr) {
                    var n = c.findInputKeyById(t, i.arr[r].id);
                    n ? TradingView.merge(t[n], i.arr[r]) : c.appendInputInfoToArr(t, i.arr[r])
                }
            }, c.mergeInputsObjPart = function(t, e) {
                var i = c.splitInputs(e);
                TradingView.merge(t, i.obj)
            }, c.appendInputInfoToArr = function(t, e) {
                var i = -1;
                for (var r in t) {
                    var n = parseInt(r, 10);
                    isNumber(n) && (n > i && (i = n))
                }
                t[i + 1] = e
            }, c.splitInputs = function(t) {
                var e = {},
                    i = {};
                for (var r in t) isNumber(parseInt(r, 10)) ? e[r] = t[r] : i[r] = t[r];
                return {
                    arr: e,
                    obj: i
                }
            }, c.findInputKeyById = function(t, e) {
                var i = null;
                for (var r in t)
                    if (isNumber(parseInt(r, 10)) && t[r].id === e) {
                        i = r;
                        break
                    }
                return i
            }, c.getInputKeyById = function(t, e) {
                var i = c.findInputKeyById(t, e);
                if (!i) throw new Error("Cannot find input with id: " + e);
                return i
            }, t.exports = c
        },
        857976: (t, e, i) => {
            "use strict";
            i.d(e, {
                translatedIntervalString: () => n
            });
            i(120220);
            var r = i(819453);

            function n(t) {
                const e = (0, r.getTranslatedResolutionModel)(t, !0);
                return null === e ? t : e.multiplier + (e.mayOmitShortKind ? "" : e.shortKind)
            }
        },
        621234: (t, e, i) => {
            "use strict";
            var r;
            i.d(e, {
                    Constants: () => r
                }),
                function(t) {
                    t.DrawingIconColor = "rgba( 170, 170, 170, 1)", t[t.NameLengthLimit = 300] = "NameLengthLimit"
                }(r || (r = {}))
        },
        82379: (t, e, i) => {
            "use strict";
            var r;
            i.d(e, {
                    DataSourceDangerReason: () => r
                }),
                function(t) {
                    t.Spread = "spread", t.PineRepainting = "pine-repainting", t.CryptoCap = "cryptocap"
                }(r || (r = {}))
        },
        177018: (t, e, i) => {
            "use strict";
            var r = i(918184),
                n = i(512012).isStudyStateForAlertType,
                s = i(555782),
                o = i(286837).generateTitleForGui,
                a = i(987380).getLogger("Alerts.Band"),
                u = i(620554),
                l = i(582755);
            TradingView = "object" == typeof i.g ? i.g.TradingView : TradingView || {};
            var d = {
                create: function(t) {
                    var e, i = t || {},
                        r = i.type;
                    if ("MainSeries" === r) e = c;
                    else if (n(r, !0)) e = f;
                    else if ("Value" === r) e = h;
                    else {
                        if (!/^LineTool.*/i.test(r)) return a.logError("Unknown alert band type " + r), null;
                        e = v
                    }
                    return new e(i)
                }
            };

            function p(t) {
                this._band = t || {}
            }

            function c() {
                p.apply(this, arguments)
            }

            function f() {
                p.apply(this, arguments)
            }

            function h() {
                p.apply(this, arguments)
            }

            function v() {
                p.apply(this, arguments)
            }
            p.prototype.id = function() {
                    return this._band.id
                }, p.prototype.type = function() {
                    return this._band.type
                }, p.prototype.title = function() {
                    return this._band.title
                }, p.prototype.hasPlots = function() {
                    return this._band.plots && this._band.plots.length
                }, p.prototype.getActualSymbol = function() {
                    return this._band.actualSymbol
                }, p.prototype.getSymbolString = function() {
                    return this._band.symbolString
                }, p.prototype.getPlotTitle = function(t) {
                    return t.title ? t.title : s.isOhlcOpenPlot(t) ? t.ohlcTitle + " " + r.t("Open") : s.isOhlcHighPlot(t) ? t.ohlcTitle + " " + r.t("High") : s.isOhlcLowPlot(t) ? t.ohlcTitle + " " + r.t("Low") : s.isOhlcClosePlot(t) ? t.ohlcTitle + " " + r.t("Close") : "vol" === t.id ? r.t("Volume") : "vol_ma" === t.id ? r.t("Volume MA") : "open" === t.id ? r.t("Open") : "high" === t.id ? r.t("High") : "low" === t.id ? r.t("Low") : "close" === t.id ? r.t("Close") : t.id
                }, p.prototype.getPlots = function(t) {
                    var e = t || {};
                    if (!this._band.plots || !this._band.plots.length) return this._band.plots;
                    if ("inputSelect" === e.format) {
                        var i = -1;
                        return this._band.plots.map((function(t) {
                            return {
                                value: ++i,
                                title: this.getPlotTitle(t)
                            }
                        }), this)
                    }
                    return this._band.plots
                }, p.prototype.hasUsualPlots = function() {
                    var t = this._band.plots;
                    return !t || t.filter(s.isAlertConditionPlot).length < t.length
                }, p.prototype.getInputs = function() {
                    return {}
                }, inherit(c, p), c.prototype.title = function(t) {
                    var e = i(673715),
                        r = t || {},
                        n = !!r.withInterval,
                        s = this._band.actualSymbol;
                    return e && (s = e.shortName(s)), o({
                        symbol: s,
                        interval: n ? this._band.interval : null,
                        style: this._band.style,
                        inputs: this._band.styleInputs || {},
                        boxSize: this._band.boxSize,
                        reversalAmount: this._band.reversalAmount,
                        sessionDescription: r.sessionDescription
                    })
                }, c.prototype.getInterval = function() {
                    return this._band.interval
                }, c.prototype.getStyle = function() {
                    return this._band.style
                }, c.prototype.getStyleInputs = function() {
                    return this._band.styleInputs
                }, c.prototype.isRangeBasedStyle = function() {
                    return u.isRangeBasedStyle(this._band.style)
                }, c.prototype.isSpread = function() {
                    return this._band.isSpread
                }, c.prototype.sessionId = function() {
                    return this._band.sessionId
                }, c.prototype.sessionDescription = function() {
                    return this._band.sessionDescription
                },
                c.prototype.getDividendsAdjustment = function() {
                    return this._band.dividendsAdjustment
                }, c.prototype.getBackAdjustment = function() {
                    return this._band.backAdjustment
                }, c.prototype.getSettlementAsClose = function() {
                    return this._band.settlementAsClose
                }, inherit(f, p), f.prototype.title = function(t) {
                    var e, i, n, s = t || {},
                        o = s.withPlotTitle,
                        a = this._band;
                    return s.short && a.shortTitle ? e = a.shortTitle : a.title ? e = a.title : (e = a.shortDescription || "Study", i = [], Object.keys(a.inputs).forEach((function(t) {
                        var e = a.inputs[t] && a.inputs[t].id;
                        e && !a.inputs[t].isHidden && void 0 !== a.inputs[e] && i.push(a.inputs[e])
                    })), i.length && (e += " (" + i.join(", ") + ")")), o && (n = this.selectedPlot()) && (e += " " + (n.title || r.t("Untitled Plot"))), l.isRtl() && (e = l.forceLTRStr(e)), e
                }, f.prototype.selectedPlot = function() {
                    var t = this._band;
                    return void 0 === t.plotIndex ? null : this.getPlots().filter((function(e) {
                        return e.value === t.plotIndex
                    }))[0] || null
                }, f.prototype.getInputs = function() {
                    return this._band.inputs || {}
                }, f.prototype.isTVLibrary = function() {
                    return this._band.isTVLibrary || !1
                }, inherit(h, p), h.prototype.title = function(t) {
                    var e = this._band.value || 0;
                    return t.formatter ? t.formatter.format(parseFloat(e)) : parseFloat(e).toString()
                }, inherit(v, p), t.exports.AlertBandAbstract = p, t.exports.AlertBandValue = h, t.exports.AlertBandStudy = f, t.exports.alertBandFactory = d
        },
        512012: (t, e, i) => {
            "use strict";
            var r;

            function n(t, e) {
                let i = "Study" === t || t === r.StudyLineTool || /^study_\w+/.test(t);
                return e && (i = i || "StudyStrategy" === t), i
            }
            i.r(e), i.d(e, {
                    StateForAlertType: () => r,
                    isStudyStateForAlertType: () => n
                }),
                function(t) {
                    t.StudyLineTool = "StudyLineTool"
                }(r || (r = {}))
        },
        724985: (t, e, i) => {
            "use strict";

            function r(t) {
                let e, i = 0;
                if (0 === t.length) return i;
                for (var r = 0; r < t.length; r++) e = t.charCodeAt(r), i = (i << 5) - i + e, i &= i;
                return i
            }
            i.r(e), i.d(e, {
                hash: () => r
            })
        },
        211490: (t, e, i) => {
            "use strict";

            function r(t) {
                return t === n(t)
            }

            function n(t) {
                const e = t.indexOf("$"),
                    i = t.indexOf("@");
                return e < 0 && i >= 0 ? null : t.substring(Math.max(e + 1, 0), i >= 0 ? i : t.length)
            }

            function s(t) {
                return t.startsWith("PUB;")
            }

            function o(t) {
                return t.startsWith("USER;")
            }

            function a(t) {
                return t.startsWith("STD;")
            }

            function u(t) {
                return t.includes("Candlestick%1Pattern%1")
            }

            function l(t) {
                return t.startsWith("EDGR_")
            }
            i.d(e, {
                isPineIdString: () => r,
                extractPineId: () => n,
                isPublishedPineId: () => s,
                isCustomPineId: () => o,
                isStandardPineId: () => a,
                isCandleStickId: () => u,
                isEdgrPineId: () => l
            })
        }
    }
]);