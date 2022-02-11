(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [84234], {
        993962: (t, e, r) => {
            "use strict";
            r.d(e, {
                applyOverridesToStudy: () => a,
                applyOverridesToStudyDefaults: () => d
            });
            var n = r(416282),
                i = r(555782);
            const o = (0, r(987380).getLogger)("Chart.Model.StudyPropertiesOverrider");
            var s, u;

            function l(t, e, r, n) {
                const i = r.split(".");
                if (0 === i.length || 0 === i[0].length) return;
                const l = function(t) {
                        const e = t.split(":");
                        return {
                            name: e[0],
                            type: 2 === e.length ? e[1] : null
                        }
                    }(i[0]),
                    a = l.name,
                    d = l.type,
                    p = null !== d,
                    f = !p || "band" === d,
                    c = !p || "area" === d,
                    y = !p || "input" === d,
                    g = !p || "plot" === d ? u.getPlotIdByTitle(t, a) : null,
                    S = f ? u.getBandIndexByName(t, a) : null,
                    v = c ? u.getFilledAreaIdByTitle(t, a) : null,
                    h = y ? u.getInputByName(t, a) : null,
                    I = e.hasOwnProperty(a);
                if ((null !== g ? 1 : 0) + (null !== S ? 1 : 0) + (null !== v ? 1 : 0) + (null !== h ? 1 : 0) + (I ? 1 : 0) > 1) return void o.logWarn(`Study '${t.description}' has ambiguous identifier '${a}'`);
                const P = i[1];
                if (null !== g) {
                    if (1 === i.length) return void o.logWarn(`Path of sub-property of '${a}' plot for study '${t.description}' must be not empty`);
                    const r = i.slice(1);
                    s.applyPlotProperty(t, e, g, r, n)
                } else if (null !== h) s.applyInputValue(e, h, n);
                else if (null !== S) {
                    if (void 0 === P) return void o.logWarn(`Property name of '${a}' band for study '${t.description}' must be set`);
                    s.applyBandProperty(e, S, P, n)
                } else if (null !== v) {
                    if (void 0 === P) return void o.logWarn(`Property name of '${a}' area for study '${t.description}' must be set`);
                    s.applyFilledAreaProperty(e, v, P, n)
                } else I ? s.setRootProperty(e, i, n) : o.logWarn(`Study '${t.description}' has no plot or input '${a}'`)
            }

            function a(t, e) {
                const r = t.properties(),
                    n = r.state();
                for (const r in e) e.hasOwnProperty(r) && l(t.metaInfo(), n, r, e[r]);
                r.mergeAndFire(n)
            }

            function d(t, e, r) {
                for (const n in t) {
                    if (!t.hasOwnProperty(n)) continue;
                    const i = n.indexOf(".");
                    if (-1 === i) continue;
                    const s = n.substring(0, i),
                        a = u.getMetaInfoByDescription(e, s);
                    if (null === a) {
                        o.logWarn("There is no such study " + s);
                        continue
                    }
                    const d = r(a);
                    null !== d ? l(a, d, n.substring(i + 1), t[n]) : o.logWarn("Cannot apply overrides for study " + s)
                }
            }! function(t) {
                const e = {
                    line: i.LineStudyPlotStyle.Line,
                    histogram: i.LineStudyPlotStyle.Histogram,
                    cross: i.LineStudyPlotStyle.Cross,
                    area: i.LineStudyPlotStyle.Area,
                    columns: i.LineStudyPlotStyle.Columns,
                    circles: i.LineStudyPlotStyle.Circles,
                    line_with_breaks: i.LineStudyPlotStyle.LineWithBreaks,
                    area_with_breaks: i.LineStudyPlotStyle.AreaWithBreaks
                };
                t.applyPlotProperty = function(t, r, s, u, l) {
                    if (void 0 === r.styles) return void o.logWarn("Study does not have styles");
                    const a = u[0];
                    if ("color" === a) {
                        return void
                        function(t, e, r, i, s) {
                            if (void 0 !== t.styles)
                                if (null === e && !isNaN(i) && i > 0) o.logWarn("Study plot does not have color #" + i);
                                else {
                                    if (0 === i || isNaN(i)) {
                                        (0, n.ensureDefined)(t.styles[r]).color = String(s), i = 0
                                    }
                                    null !== e && ((0, n.ensureDefined)(e.colors[i]).color = String(s))
                                }
                            else o.logWarn("Study does not have styles")
                        }(r, function(t, e, r) {
                            if (void 0 === t.plots) return null;
                            for (const n of t.plots) {
                                if (!(0, i.isColorerPlot)(n) || void 0 === e.palettes) continue;
                                const t = e.palettes[n.palette];
                                if (n.target === r && void 0 !== t) return t
                            }
                            return null
                        }(t, r, s), s, u.length > 1 ? parseInt(u[1]) : NaN, l)
                    }
                    const d = r.styles[s];
                    if (void 0 !== d && d.hasOwnProperty(a)) {
                        if ("plottype" === a) {
                            const t = e[String(l)];
                            if (void 0 === t) return void o.logWarn("Unsupported plot type for plot: " + l);
                            l = t
                        }
                        d[a] = l
                    } else o.logWarn(`Study plot does not have property '${a}'`)
                }, t.applyBandProperty = function(t, r, n, i) {
                    if (void 0 === t.bands) return void o.logWarn("Study does not have bands");
                    const s = t.bands[r];
                    if (void 0 !== s && s.hasOwnProperty(n)) {
                        if ("plottype" === n) {
                            const t = e[String(i)];
                            if (void 0 === t) return void o.logWarn("Unsupported plot type for band: " + i);
                            i = t
                        }
                        s[n] = i
                    } else o.logWarn(`Study band does not have property '${n}'`)
                }, t.applyFilledAreaProperty = function(t, e, r, n) {
                    if (void 0 === t.filledAreasStyle) return void o.logWarn("Study does not have areas");
                    const i = t.filledAreasStyle[e];
                    void 0 !== i && i.hasOwnProperty(r) ? i[r] = n : o.logWarn(`Study area does not have property '${r}'`)
                }, t.applyInputValue = function(t, e, r) {
                    void 0 !== t.inputs && t.inputs.hasOwnProperty(e) ? t.inputs[e] = r : o.logWarn(`Study does not have input '${e}'`)
                }, t.setRootProperty = function(t, e, r) {
                    if (0 === e.length) return;
                    let n = t;
                    for (const t of e.slice(0, -1)) {
                        if (null == n || !n.hasOwnProperty(t)) break;
                        n = n[t]
                    }
                    const i = e[e.length - 1];
                    null != n && n.hasOwnProperty(i) ? n[i] = r : o.logWarn("Study does not have property " + e.join("."))
                }
            }(s || (s = {})),
            function(t) {
                t.getInputByName = function(t, e) {
                    if (void 0 === t.inputs) return null;
                    e = e.toLowerCase();
                    for (const r of t.inputs)
                        if (r.name.toLowerCase() === e) return r.id;
                    return null
                }, t.getPlotIdByTitle = function(t, e) {
                    if (void 0 === t.styles) return null;
                    e = e.toLowerCase();
                    for (const r in t.styles) {
                        const n = t.styles[r];
                        if ((void 0 !== n && void 0 !== n.title ? n.title : r).toLowerCase() === e) return r
                    }
                    return null
                }, t.getFilledAreaIdByTitle = function(t, e) {
                    if (void 0 === t.filledAreas) return null;
                    e = e.toLowerCase();
                    for (const r of t.filledAreas)
                        if (r.title.toLowerCase() === e) return r.id;
                    return null
                }, t.getBandIndexByName = function(t, e) {
                    if (void 0 === t.bands) return null;
                    e = e.toLowerCase();
                    for (let r = 0; r < t.bands.length; ++r)
                        if (t.bands[r].name.toLowerCase() === e) return r;
                    return null
                }, t.getMetaInfoByDescription = function(t, e) {
                    e = e.toLowerCase();
                    for (const r of t)
                        if (r.description.toLowerCase() === e || r.shortDescription.toLowerCase() === e) return r;
                    return null
                }
            }(u || (u = {}))
        },
        284234: (t, e, r) => {
            "use strict";
            t = r.nmd(t);
            var n = r(227937),
                i = r(987380).getLogger("Chart.Study.MetaInfo"),
                o = r(993962).applyOverridesToStudyDefaults,
                s = r(226265).PineKind,
                u = {};

            function l(t) {
                TradingView.merge(this, {
                    palettes: {},
                    inputs: [],
                    plots: [],
                    graphics: {},
                    defaults: {}
                }), TradingView.merge(this, t);
                var e = t.fullId || t.id;
                TradingView.merge(this, l.parseIdString(e))
            }
            l.VERSION_STUDY_ARG_SOURCE = 41, l.METAINFO_FORMAT_VERSION_SOS_V2 = 42, l.VERSION_PINE_PROTECT_TV_4164 = 43, l.CURRENT_METAINFO_FORMAT_VERSION = 52, l.VERSION_NEW_STUDY_PRECISION_FORMAT = 46, l.CHILD_STUDY_ALLOWED_PLOT_TYPES = ["line"], l.canPlotBeSourceOfChildStudy = function(t) {
                    return l.CHILD_STUDY_ALLOWED_PLOT_TYPES.includes(t)
                }, l.CHILD_STUDY_EXCLUDE_IDS = ["CorrelationCoefficient@tv-basicstudies", "Correlation - Log@tv-basicstudies-1"], l.CHILD_STUDY_PARENT_EXCLUDE_IDS = [], l.FilledArea = {}, l.FilledArea.TYPE_PLOTS = "plot_plot", l.FilledArea.TYPE_HLINES = "hline_hline",
                l.versionOf = function(t) {
                    var e = "_metainfoVersion" in t && isNumber(t._metainfoVersion) ? t._metainfoVersion : 0;
                    return e < 0 && i.logError("Metainfo format version cannot be negative: " + e), e
                }, l.parseIdString = function(t) {
                    var e = {};
                    if (-1 === t.indexOf("@")) e.shortId = t, e.packageId = "tv-basicstudies", e.id = t + "@" + e.packageId, e.version = 1;
                    else {
                        var r = t.split("@");
                        e.shortId = r[0];
                        var n = r[1].split("-");
                        if (3 === n.length) e.packageId = n.slice(0, 2).join("-"), e.id = e.shortId + "@" + e.packageId, e.version = n[2];
                        else if (1 === n.length && "decisionbar" === n[0]) e.packageId = "les-" + n[0], e.id = e.shortId + "@" + e.packageId, e.version = 1;
                        else {
                            if (1 !== n.length) throw new Error("unexpected study id:" + t);
                            e.packageId = "tv-" + n[0], e.id = e.shortId + "@" + e.packageId, e.version = 1
                        }
                    }
                    if (e.fullId = e.id + "-" + e.version, "tv-scripting" === e.packageId) {
                        var i = e.shortId;
                        if (0 === i.indexOf("Script$") || 0 === i.indexOf("StrategyScript$")) {
                            var o = i.indexOf("_");
                            e.productId = o >= 0 ? i.substring(0, o) : e.packageId
                        } else e.productId = e.packageId
                    } else e.productId = e.packageId;
                    return e
                }, l.getPackageName = function(t) {
                    return (/^[^@]+@([^-]+-[^-]+)/.exec(t || "") || [0, "tv-basicstudies"])[1]
                }, l.cutDollarHash = function(t) {
                    var e = t.indexOf("$"),
                        r = t.indexOf("@");
                    return -1 === e ? t : t.substring(0, e) + (r >= 0 ? t.substring(r) : "")
                }, l.hasUserIdSuffix = function(t) {
                    return /^USER;[\d\w]+;\d+$/.test(t)
                }, l.isStandardPine = function(t) {
                    return /^(Strategy)?Script\$STD;.*@tv-scripting$/.test(t)
                }, l.getSourceIdByInputs = function(t, e) {
                    if (!Array.isArray(t) || !e) return null;
                    for (var r = 0; r < t.length; ++r) {
                        var n = t[r];
                        if (l.isSourceInput(n) && "string" == typeof e[n.id]) {
                            var i = e[n.id];
                            return ~i.indexOf("$") && (i = i.split("$")[0]), i
                        }
                    }
                    return null
                }, l.getSourceInputIds = function(t) {
                    for (var e = [], r = t.inputs, n = 0; n < r.length; ++n) {
                        var i = r[n];
                        l.isSourceInput(i) && e.push(i.id)
                    }
                    return e
                }, l.setChildStudyMetaInfoPropertiesSourceId = function(t, e, r) {
                    for (var i = 0; i < t.inputs.length; ++i) {
                        var o = t.inputs[i];
                        if (l.isSourceInput(o) && (r instanceof n && r.inputs && r.inputs[o.id])) {
                            var s = r.inputs[o.id].value();
                            if (s.indexOf("$") > 0) {
                                var u = s.replace(/^[^\$]+/, e);
                                r.inputs[o.id].setValue(u)
                            }
                        }
                    }
                }, l.patchChildStudyMetaInfoState = function(t) {
                    t.state && function t(e) {
                        if ("object" == typeof e)
                            for (var r in e) "string" == typeof e[r] && /^[^\$]+\$\d+$/.test(e[r]) ? e[r] = e[r].replace(/^[^\$]+/, "{pid}") : t(e[r])
                    }(t.state.inputs), t.state.isChildStudy = !0
                }, l.getStudyIdWithLatestVersion = function(t) {
                    const e = l.cutDollarHash(t.id);
                    let r = e;
                    return e.indexOf("@tv-scripting") >= 0 ? r += "-101!" : r += "-" + t.version, r
                }, l.prototype.parseValue = function(t, e) {
                    return "bool" === t ? TradingView.parseBool(e) : e
                }, l.prototype.defaultInputs = function() {
                    for (var t = [], e = 0; e < this.inputs.length; e++) t.push(this.inputs[e].defval);
                    return t
                }, l.prototype.state = function(t) {
                    var e = {};
                    for (var r in this) this.hasOwnProperty(r) && (e[r] = this[r], !0 !== t && "id" === r && (e[r] += "-" + this.version));
                    return e
                }, l.prototype.symbolInputId = function() {
                    var t = this.inputs.filter((function(t) {
                        return "symbol" === t.type
                    }));
                    return t.length > 0 ? t[0].id : null
                }, l.prototype.createDefaults = function() {
                    if (this.defaults) {
                        var t = TradingView.clone(this.defaults);
                        t.precision = "default";
                        var e = l.getStudyPropertyRootName(this);
                        defaults.create(e, t)
                    }
                },
                l.prototype.removeDefaults = function() {
                    defaults.remove(l.getStudyPropertyRootName(this))
                }, l.findStudyMetaInfoByDescription = function(t, e) {
                    if (t) {
                        for (var r = 0; r < t.length; ++r)
                            if (t[r].description.toLowerCase() === e.toLowerCase()) return t[r];
                        throw new Error("unexpected study id:" + e)
                    }
                    throw new Error("There is no studies metainfo")
                }, l.isParentSourceId = function(t) {
                    return "string" == typeof t && /^[^\$]+\$\d+$/.test(t)
                }, l.isSourceInput = function(t) {
                    return t.id && (("source" === t.id || "src" === t.id) && ("text" === t.type || "source" === t.type) || "source" === t.type)
                }, l.getChildSourceInputTitles = function(t, e, r) {
                    var n = {};
                    if (e.plots && e.plots.length && t.options && t.options.length)
                        for (var i, o, s, u = 0; u < t.options.length; ++u) o = (i = t.options[u]) && +i.split("$")[1], (s = isFinite(o) && e.plots[o]) && ~l.CHILD_STUDY_ALLOWED_PLOT_TYPES.indexOf(s.type) && (n[i] = e.styles && e.styles[s.id] && e.styles[s.id].title || s.id, r && (n[i] = r + ": " + n[i]));
                    return n
                };
            var a = new Map([
                ["AnchoredVWAP@tv-basicstudies", "linetoolanchoredvwap"],
                ["RegressionTrend@tv-basicstudies", "linetoolregressiontrend"]
            ]);
            l.getStudyPropertyRootName = function(t) {
                var e = a.get(t.id);
                if (void 0 !== e) return e;
                var r = "study_" + t.id;
                return t.pine && t.pine.version && (r += "_" + t.pine.version.replace(".", "_")), r
            }, l.getStudyPropertyRootNameById = function(t) {
                var e = a.get(t);
                return void 0 !== e ? e : "study_" + t
            }, l.overrideDefaults = function(t) {
                0 !== t.length && o(u, t, (function(t) {
                    return TradingView.defaultProperties[l.getStudyPropertyRootName(t)] || null
                }))
            }, l.mergeDefaultsOverrides = function(t) {
                TradingView.merge(u, t)
            }, l.isScriptStrategy = function(t) {
                if (t.extra && t.extra.kind) return t.extra.kind === s.Strategy;
                if (!0 === t.isTVScriptStrategy) return !0;
                var e = t.TVScriptSourceCode || t.scriptSource;
                return !!e && TVScript.isStrategy(e)
            }, l.getOrderedInputIds = function(t) {
                for (var e = [], r = t.inputs, n = 0; n < r.length; ++n) {
                    var i = r[n];
                    e.push(i.id)
                }
                return e
            }, l.canBeChild = function(t) {
                if (t && "string" == typeof t) return !0;
                if (!t || t.extra && !l.isAllowedSourceInputsCount(t.extra.sourceInputsCount) || !0 === t.canNotBeChild || !1 === t.canBeChild || ~l.CHILD_STUDY_EXCLUDE_IDS.indexOf(t.id)) return !1;
                for (var e = t.inputs, r = 0, n = 0; n < e.length; ++n) l.isSourceInput(e[n]) && ++r;
                return l.isAllowedSourceInputsCount(r)
            }, l.isAllowedSourceInputsCount = function(t) {
                return 1 === t
            }, l.canHaveChildren = function(t) {
                if (t) {
                    if (t.isTVScriptStrategy || t.TVScriptSourceCode && TVScript.isStrategy(t.TVScriptSourceCode)) return !1;
                    if (t.id && !~l.CHILD_STUDY_PARENT_EXCLUDE_IDS.indexOf(t.id) && Array.isArray(t.plots))
                        for (var e = 0; e < t.plots.length; ++e)
                            if (~l.CHILD_STUDY_ALLOWED_PLOT_TYPES.indexOf(t.plots[e].type)) return !0
                }
                return !1
            }, TradingView.StudyMetaInfo = l, t && t.exports && (t.exports = l)
        }
    }
]);