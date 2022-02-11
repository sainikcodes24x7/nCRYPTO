(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [35683], {
        468439: (t, e, n) => {
            "use strict";
            n.d(e, {
                AlertConditionTokenMapType: () => r,
                getAlertConditionTokenMap: () => l
            });
            n(568421);
            var r, i = n(120220),
                o = n(416282);
            ! function(t) {
                t[t.MainSeries = 0] = "MainSeries", t[t.Study = 1] = "Study", t[t.PineScript = 2] = "PineScript", t[t.Strategy = 3] = "Strategy", t[t.PineScriptAlertFunction = 4] = "PineScriptAlertFunction"
            }(r || (r = {}));
            const a = (0, i.t)("Upper Bound: {alertChannelUpperBoundaryTitle}, Lower Bound: {alertChannelLowerBoundaryTitle}"),
                s = t => (0, i.t)("in {count} bar", {
                    plural: "in {count} bars",
                    count: t
                }).format({
                    count: t.toString()
                });

            function l(t) {
                const e = (0, o.ensureDefined)(t.get("extra")),
                    n = e.getAlertSeries(),
                    i = e.conditionData();
                if ("alerts" === i.type) return {
                    type: r.PineScriptAlertFunction,
                    scriptTitle: n.title({
                        short: !0
                    }),
                    isStrategy: "StudyStrategy" === n.type()
                };
                if ("StudyStrategy" === n.type()) return {
                    type: r.Strategy,
                    strategyTitle: n.title()
                };
                if (["pine_script", "pine_alertcondition_plot"].includes(i.type)) return {
                    type: r.PineScript,
                    conditionTitle: i.title,
                    conditionMessage: i.message
                };
                const l = t.getFormatter();

                function c(t) {
                    const e = t.getPlots();
                    return t.title({
                        formatter: l,
                        withPlotTitle: e && e.length > 1
                    })
                }
                let u = "";
                switch (i.type) {
                    case "moving":
                        const t = e.movingValue(),
                            n = e.movingPeriod();
                        u = i.percents ? `${t}% ${s(n)}` : `${l?l.format(t):t} ${s(n)}`;
                        break;
                    case "comparison":
                        if (i.isChannel) {
                            const t = c(e.getUpperBand()),
                                n = c(e.getLowerBand());
                            u = `(${a.format({alertChannelUpperBoundaryTitle:t,alertChannelLowerBoundaryTitle:n})})`
                        } else u = c(e.getBand())
                }
                const d = e.getMainSeries(),
                    p = d ? d.title({
                        withInterval: !t.get("crossInterval")
                    }) : t.shortSymbol();
                return {
                    conditionTitle: i.descriptionTitle || i.title,
                    conditionOptions: u,
                    ..."MainSeries" === n.type() ? {
                        type: r.MainSeries,
                        alertSeries: p
                    } : {
                        type: r.Study,
                        alertSeries: n.title(),
                        mainSeries: p
                    }
                }
            }
        },
        88425: (t, e, n) => {
            "use strict";

            function r(t = 0) {
                return t < 1e3 ? t : t / 1e3
            }

            function i(t, e) {
                if (t.length > e) {
                    const n = /[\W]+$/g,
                        r = t.substring(0, e),
                        i = r.replace(n, "");
                    return (i.length ? i : r.substring(0, e - 1)) + "…"
                }
                return t
            }
            n.d(e, {
                ensureDurationInSeconds: () => r,
                cutString: () => i
            })
        },
        619363: (t, e, n) => {
            "use strict";
            n.d(e, {
                getAlertType: () => o
            });
            const r = new Set(["study_Overlay", "study_Compare", "StudyStrategy"]);

            function i({
                type: t
            }) {
                return !r.has(t) && t.toLowerCase().startsWith("study")
            }

            function o(t) {
                if (t.isDrawing()) return "drawing";
                const e = t.get("extra"),
                    n = null == e ? void 0 : e.alertSeries();
                return n && e ? n.isTVScriptStrategy ? "strategy" : e.bandsArray("object").some(i) ? "indicator" : "price" : "price"
            }
        },
        140188: (t, e, n) => {
            "use strict";
            var r;
            n.d(e, {
                    AlertCategory: () => r
                }),
                function(t) {
                    t.Price = "price", t.Screener = "screener"
                }(r || (r = {}))
        },
        866358: (t, e, n) => {
            "use strict";
            var r = n(272316),
                i = n(24194),
                o = n(987380).getLogger("Alerts.Price.Abstract"),
                a = n(819453).getTranslatedResolution,
                s = n(673715),
                l = n(582755),
                c = r.Model.extend({
                    constructor: function(t, e) {
                        t = this._prepareToSet(t, !0), r.Model.call(this, t, e)
                    },
                    _prepareToSet: function(t, e) {
                        var n, r, i;
                        if (t)
                            for (n in t) t.hasOwnProperty(n) && (r = t[n], "function" == typeof this[i = "_prepareToSet_" + n] && (t[n] = this[i](r, t, e)));
                        return t
                    },
                    destroy: function() {
                        this.stopListening(),
                            this.trigger("destroy", this)
                    },
                    save: function() {
                        o.logError("[Alerts] Use disaptcher to save")
                    },
                    shortSymbol: function(t) {
                        return s ? s.shortName(t || this.get("symbol") || "") : (o.logWarn("[Alerts] can't get short symbol"), t)
                    },
                    resolutionReadable: function(t) {
                        return (t = t || this.get("resolution")) ? a(t) : ""
                    },
                    title: function(t) {
                        var e;
                        return e = t ? this.get("symbol") : this.shortSymbol(), this.get("crossInterval") || (e = l.isRtl() ? e + " " + l.forceRTLStr(" ," + this.resolutionReadable()) : e + ", " + this.resolutionReadable()), e
                    },
                    _formatDate: function(t) {
                        return i(t || new Date).format("MMM D LTS")
                    }
                });
            t.exports = c
        },
        331377: (t, e, n) => {
            "use strict";
            var r = n(918184),
                i = function() {
                    function t(t, e) {
                        return e.id || (e.id = t), e
                    }
                    for (var e, n = {
                            cross: {
                                title: r.t("Crossing"),
                                type: "comparison"
                            },
                            crosses_from_below: {
                                title: r.t("Crossing Up"),
                                type: "comparison"
                            },
                            crosses_from_above: {
                                title: r.t("Crossing Down"),
                                type: "comparison"
                            },
                            above: {
                                title: r.t("Greater Than"),
                                type: "comparison"
                            },
                            below: {
                                title: r.t("Less Than"),
                                type: "comparison"
                            },
                            enters_channel: {
                                title: r.t("Entering Channel"),
                                isChannel: !0,
                                type: "comparison"
                            },
                            leaves_channel: {
                                title: r.t("Exiting Channel"),
                                isChannel: !0,
                                type: "comparison"
                            },
                            inside_channel: {
                                title: r.t("Inside Channel"),
                                isChannel: !0,
                                type: "comparison"
                            },
                            outside_channel: {
                                title: r.t("Outside Channel"),
                                isChannel: !0,
                                type: "comparison"
                            },
                            moving_up: {
                                title: r.t("Moving Up"),
                                type: "moving"
                            },
                            moving_down: {
                                title: r.t("Moving Down"),
                                type: "moving"
                            },
                            moving_up_percents: {
                                title: r.t("Moving Up %"),
                                descriptionTitle: r.t("Moving Up"),
                                type: "moving",
                                percents: !0
                            },
                            moving_down_percents: {
                                title: r.t("Moving Down %"),
                                descriptionTitle: r.t("Moving Down"),
                                type: "moving",
                                percents: !0
                            }
                        }, i = Object.keys(n), o = i.length - 1; o >= 0; o--) t(e = i[o], n[e]);

                    function a(e) {
                        var i, o, a, s, l, c, u = {};
                        e && e.getStrategy() ? o = e.prepareAlertConditions() : (a = e && e.drawing(), o = !e || e.getAlertSeries().hasUsualPlots() ? n : {}, a ? c = "LineToolVertLine" === a.type ? function(t) {
                            return "cross" === t.id
                        } : 1 === a.plots.length ? function(t) {
                            return !t.isChannel
                        } : 2 === a.plots.length ? function(t) {
                            return !!t.isChannel
                        } : function(t) {
                            return "comparsion" === t.type
                        } : e && (e.hasAlertCondition() || e.hasAlertFunction()) && (o = r.extend(!0, {}, o, e.prepareAlertConditions()))), i = Object.keys(o);
                        for (var d = 0; d < i.length; d++) t(l = i[d], s = o[l]), c && !c(s) || (u[l] = s);
                        return u
                    }
                    return e = null, {
                        get: a,
                        getData: function(t, e) {
                            var r;
                            return (r = e ? a(e)[t] : n[t]) && !r.id && (r.id = t), r
                        },
                        defaults: function(t) {
                            return void 0 !== t ? n[t] : n
                        },
                        ordered: function(t, e) {
                            var n, r = a(t),
                                i = ["cross", "crosses_from_below", "crosses_from_above", "above", "below", "enters_channel", "leaves_channel", "inside_channel", "outside_channel", "moving_up", "moving_down", "moving_up_percents", "moving_down_percents"],
                                o = ["strategy_and_alerts", "strategy", "alerts"],
                                s = [],
                                l = Object.keys(r);
                            e = e || {};
                            for (var c = [], u = l.length - 1; u >= 0; u--) {
                                var d = r[l[u]];
                                o.includes(d.type) && c.push(d)
                            }
                            c.sort((function(t, e) {
                                return o.indexOf(t.id) - o.indexOf(e.id)
                            })), c.length > 0 && s.push(c);
                            var p = [];
                            for (u = l.length - 1; u >= 0; u--) {
                                d = r[l[u]];
                                ["pine_script", "pine_alertcondition_plot"].includes(d.type) && p.push(d)
                            }
                            p.sort((function(t, e) {
                                return t.title.localeCompare(e.title)
                            })), p.length > 0 && s.push(p);
                            var f = t && t.alertSeries && t.alertSeries();
                            if (!(f && f.plots && 0 === f.plots.length)) {
                                var h = [];
                                for (u = 0; u < i.length; u++) n = i[u], r.hasOwnProperty(n) && h.push(r[n]);
                                h.length > 0 && s.push(h)
                            }
                            return e.isGrouped ? s : s.flat()
                        }
                    }
                }();
            TradingView.AlertConditions = i, t.exports = i
        },
        683789: (t, e, n) => {
            "use strict";
            n.d(e, {
                AlertExtra: () => y
            });
            var r = n(120220).t,
                i = n(987380).getLogger("Alerts.Extra"),
                o = n(901694).deepCopy,
                a = n(555782).isAlertConditionPlot,
                s = n(644197).cleanButAmpersand,
                l = n(729412).regExpEscape,
                c = n(512012),
                u = c.isStudyStateForAlertType,
                d = c.StateForAlertType;
            TradingView = "object" == typeof n.g ? n.g.TradingView : TradingView || {}, "function" != typeof TradingView.merge && (TradingView.merge = function(t, e) {
                for (var n in e) "object" == typeof e[n] && t.hasOwnProperty(n) ? TradingView.merge(t[n], e[n]) : t[n] = e[n];
                return t
            });
            var p = n(331377),
                f = n(177018).alertBandFactory,
                h = n(765066);

            function y(t) {
                this._data = {}, this.crossInterval = new h, this.update(t)
            }
            y.VERSION = 22, y.prototype.update = function(t) {
                return t = this._prepareExtraObject(t), y._isValidExtra(t) ? (this._data = t || {}, this._updateCrossInterval()) : i.logError("Wrong alert extra"), this
            }, y.prototype.addDatasourse = function(t, e) {
                this._addDatasourseToJson(this._data, t, e)
            }, y.prototype._addDatasourseToJson = function(t, e, n) {
                (n || t.condition[e]) && (t.condition[e] = {
                    id: n.id,
                    plotIndex: n.plotIndex
                }, t.statesForAlert[n.id] = n, n.plotIndex && delete t.statesForAlert[n.id].plotIndex)
            }, y.prototype.getDependencies = function() {
                var t = {};
                for (var e in this._data.statesForAlert)
                    if (this._data.statesForAlert.hasOwnProperty(e)) {
                        var n = this._data.statesForAlert[e];
                        u(n.type, !0) && null != n.studyDependencies && n.studyDependencies.forEach((function(e) {
                            t[e.id] = e
                        }))
                    }
                return Object.keys(t).map((function(e) {
                    return t[e]
                })).map((function(t) {
                    return t.study = t.study.replace(/(\d)$/, "$1!"), t
                }))
            }, y.prototype.updateDataSourseStates = function() {
                var t = this,
                    e = this.getAvailableBands().map((function(e) {
                        return t._data.condition[e]
                    })).filter((function(t) {
                        return !!t
                    })).map((function(t) {
                        return t.id
                    }));
                Object.keys(t._data.statesForAlert).filter((function(t) {
                    return e.indexOf(t) < 0
                })).forEach((function(e) {
                    delete t._data.statesForAlert[e]
                }))
            }, y.prototype._prepareExtraObject = function(t) {
                if ("string" == typeof t ? t = JSON.parse(t) : t instanceof y && (t = t.toJSON()), y._isValidExtra(t)) return t;
                var e = function(e) {
                        var n = p.defaults(t.conditionId || "cross");
                        this._addDatasourseToJson(e, "mainSeries", t.mainSeries), this._addDatasourseToJson(e, "alertSeries", t.alertSeries), "moving" === n.type ? (e.condition.movValue = Number(t.value), e.condition.movPeriod = Number(t.period)) : "comparison" === n.type && n.isChannel ? (this._addDatasourseToJson(e, "upperBand", t.upperBand), this._addDatasourseToJson(e, "lowerBand", t.lowerBand)) : "comparison" !== n.type || n.isChannel ? ["pine_script", "pine_alertcondition_plot", "strategy"].includes(n.type) || i.logError("[Alerts] Unknown condition type: " + n.type) : this._addDatasourseToJson(e, "band", t.band)
                    }.bind(this),
                    n = {
                        version: y.VERSION,
                        condition: {
                            id: t.conditionId,
                            fireInfo: t.fireInfo
                        },
                        statesForAlert: {}
                    };
                return e(n), n
            }, y.prototype.isValid = function() {
                return y._isValidExtra(this._data)
            }, y._isValidExtra = function(t) {
                var e = !!("object" == typeof t && null !== t && t.version >= y.VERSION && t.statesForAlert && t.condition && t.condition.id && t.condition.alertSeries && t.condition.fireInfo && (t.condition.fireInfo.type || t.condition.fireInfo.frequency));
                if (!e) return e;
                var n = Object.keys(t.statesForAlert);
                e = (e = e && n.indexOf(t.condition.alertSeries.id) >= 0) && (!t.condition.mainSeries || n.indexOf(t.condition.mainSeries.id) >= 0);
                var r = p.defaults(t.condition.id);
                r && "comparison" === r.type && !r.isChannel ? e = (e = e && !!t.condition.band) && n.indexOf(t.condition.band.id) >= 0 : r && "comparison" === r.type && r.isChannel ? e = (e = (e = (e = e && !!t.condition.upperBand) && !!t.condition.lowerBand) && n.indexOf(t.condition.upperBand.id) >= 0) && n.indexOf(t.condition.lowerBand.id) >= 0 : r && "moving" === r.type && (e = (e = e && !!t.condition.movPeriod) && !!t.condition.movValue);
                const i = v(Object.values(t.statesForAlert));
                return i && i.type !== d.StudyLineTool && (e = e && function(t) {
                    if (!Array.isArray(t)) return !1;
                    return t.every(t => "number" == typeof t || "object" == typeof t && g.every(([e, n]) => typeof t[e] === n))
                }(i.plots)), e
            }, y.prototype._prepareToJSON = function() {
                for (var t = this.bandsObject(), e = Object.keys(t), n = 0; n < e.length; n++) {
                    var r = t[e[n]];
                    TradingView.isExistent(r.value) && (r.value = String(r.value))
                }
            }, y.prototype.toJSON = function() {
                return this._prepareToJSON(), o(this._data)
            }, y.prototype.toGenAlertJSON = function(t) {
                const e = this._patchDescription(t),
                    n = this.toJSON();
                return n.message = e, n
            }, y.prototype.state = y.prototype.toJSON, y.prototype.conditionData = function() {
                var t = this._data && this._data.condition && this._data.condition.id;
                if (t) return p.getData(t, this)
            }, y.prototype.bandsObject = function(t) {
                return this._data.statesForAlert
            }, y.prototype.bandsArray = function(t) {
                var e = this;
                t = t || "object";
                return this.getAvailableBands().map((function(n) {
                    return e._getSomeBand(n, t)
                })).filter((function(t) {
                    return !!t
                }))
            }, y.prototype.price = function(t) {
                var e = this,
                    n = e.conditionData();
                if (!n || "comparison" !== n.type) return null;

                function r(t, n) {
                    var r = e._getSomeBand(t, "object");
                    r && "Value" === r.type && void 0 !== n && (r.value = parseFloat(n), e[t](r))
                }

                function i(t) {
                    var n = e._getSomeBand(t, "object");
                    return n && !isNaN(n.value) && void 0 !== n.value && null !== n.value ? parseFloat(n.value) : null
                }
                if (void 0 !== t && (e.conditionData().isChannel ? (r("upperBand", t.upperBand || t.upper), r("lowerBand", t.lowerBand || t.lower)) : r("band", t.band || t), this._updateCrossInterval()), e.conditionData().isChannel) {
                    var o = i("upperBand"),
                        a = i("lowerBand");
                    return null === o || null === a ? null : {
                        upper: o,
                        lower: a
                    }
                }
                return i("band")
            }, y.prototype.conditionId = function(t, e) {
                if (void 0 !== t) {
                    this._data.condition.id = t;
                    var n = p.get(this)[t];
                    if (n && "pine_alertcondition_plot" === n.type) {
                        var r = this.alertSeries();
                        r.plotIndex = n.plotIndex, this.alertSeries(r)
                    }
                    e || this._updateCrossInterval()
                }
                return this._data.condition.id
            };
            y.prototype._patchDescription = function(t) {
                try {
                    const e = ["ohlc_open", "ohlc_high", "ohlc_low", "ohlc_close", "ohlc_colorer"],
                        n = this.getAlertSeries().getPlots();
                    if (n && n.length > 0) {
                        n.filter(t => "alertcondition" !== t.type).forEach((n, r) => {
                            if (!e.includes(n.type)) {
                                const e = new RegExp(`{{plot\\("${l(s(n.title,!0))}"\\)}}`, "gm");
                                t = t.replace(e, `{{plot_${r}}}`)
                            }
                        });
                        for (let e = n.length; e <= 20; e++) t = t.replace(`{{plot_${e}}}`, "null")
                    }
                } catch (t) {
                    i.logError("AlertExtra._patchDescription error: " + t)
                }
                return t
            }, y.prototype.getAvailableConditionParams = function(t) {
                return ["movPeriod", "movValue"]
            }, y.prototype.getAvailableOptionalBands = function(t) {
                return ["band", "lowerBand", "upperBand"]
            }, y.prototype.getAvailableBands = function(t) {
                return ["band", "lowerBand", "upperBand", "alertSeries", "mainSeries"]
            }, y.prototype.getAvailableOptionalConditions = function(t) {
                return this.getAvailableOptionalBands().concat(this.getAvailableOptionalBands())
            }, y.prototype.clearOptionalConditions = function(t) {
                var e = this;
                this.getAvailableOptionalConditions().forEach((function(t) {
                    delete e._data.condition[t]
                })), this.updateDataSourseStates(), t || this._updateCrossInterval()
            }, y.prototype.alertSeries = function(t, e) {
                return void 0 !== t && (this.addDatasourse("alertSeries", t), this.updateDataSourseStates(), e || this._updateCrossInterval(), this.setValidConditionId()), this._getSomeBand("alertSeries", "object")
            }, y.prototype.getAlertSeries = function(t) {
                return this._getSomeBand("alertSeries", t)
            }, y.prototype.mainSeries = function(t, e) {
                return void 0 !== t && (this.addDatasourse("mainSeries", t), this.updateDataSourseStates(), e || this._updateCrossInterval()), this._getSomeBand("mainSeries", "object")
            }, y.prototype.getMainSeries = function(t) {
                return this._getSomeBand("mainSeries", t)
            }, y.prototype._getSomeBand = function(t, e) {
                var n, r = e || "model",
                    i = this._data.condition[t];
                if (i) return n = TradingView.merge(this._data.statesForAlert[i.id], i), "object" === r ? TradingView.merge({}, n) : f.create(n)
            }, y.prototype.upperBand = function(t, e) {
                return void 0 !== t && (this.addDatasourse("upperBand", t), delete this._data.condition.band, this.updateDataSourseStates(), e || this._updateCrossInterval()), this._getSomeBand("upperBand", "object")
            }, y.prototype.getUpperBand = function(t) {
                return this._getSomeBand("upperBand", t)
            }, y.prototype.lowerBand = function(t, e) {
                return void 0 !== t && (this.addDatasourse("lowerBand", t), delete this._data.condition.band, this.updateDataSourseStates(), e || this._updateCrossInterval()), this._getSomeBand("lowerBand", "object")
            }, y.prototype.getLowerBand = function(t) {
                return this._getSomeBand("lowerBand", t)
            }, y.prototype.band = function(t, e) {
                return void 0 !== t && (this.addDatasourse("band", t), delete this._data.condition.upperBand, delete this._data.condition.lowerBand, this.updateDataSourseStates(), e || this._updateCrossInterval()), this._getSomeBand("band", "object")
            }, y.prototype.getBand = function(t) {
                return this._getSomeBand("band", t)
            }, y.prototype.value = function(t, e) {
                return void 0 !== t && (this._data.condition.movValue = Number(t), e || this._updateCrossInterval()), this._data.condition.movValue
            }, y.prototype.movingValue = y.prototype.value, y.prototype.period = function(t, e) {
                return void 0 !== t && (this._data.condition.movPeriod = Number(t), e || this._updateCrossInterval()), this._data.condition.movPeriod
            }, y.prototype.movingPeriod = y.prototype.period, y.prototype._updateCrossInterval = function() {
                var t = this.getAlertSeries(),
                    e = null !== this.price() && t && "MainSeries" === t.type() && !t.isRangeBasedStyle() && !t.isSpread();
                this.crossInterval.setValue(e)
            }, y.prototype.frequency = function(t) {
                return -1 !== ["once", "on_first_fire", "on_bar_close", "60"].indexOf(t) && (this._data.condition.fireInfo.frequency = t), this._data.condition.fireInfo.frequency
            }, y.prototype.hasAlertCondition = function() {
                var t = this.alertSeries();
                return Boolean(t.plots && t.plots.some(a) || t.alerts && t.alerts.conditions)
            }, y.prototype.hasAlertFunction = function() {
                return Boolean(this.alertSeries().hasAlertFunction)
            }, y.prototype.prepareAlertConditions = function() {
                var t = this.alertSeries(),
                    e = {};
                if (!t) return e;
                const n = Boolean(t.isTVScriptStrategy),
                    i = Boolean(t.hasAlertFunction);
                if (n && i) return {
                    strategy_and_alerts: {
                        type: "strategy_and_alerts",
                        title: r("Order fills and alert() function calls")
                    },
                    strategy: {
                        type: "strategy",
                        title: r("Order fills only")
                    },
                    alerts: {
                        type: "alerts",
                        title: r("alert() function calls only")
                    }
                };
                if (n) return {
                    strategy: {
                        title: null,
                        type: "strategy"
                    }
                };
                if (i && Object.assign(e, {
                        alerts: {
                            type: "alerts",
                            title: r("Any alert() function call")
                        }
                    }), t.plots)
                    for (var o = 0; o < t.plots.length; o++) {
                        var s = t.plots[o];
                        if (a(s)) e["alertplot_" + o] = {
                            title: s.title,
                            message: s.text,
                            type: "pine_alertcondition_plot",
                            plotIndex: o
                        }
                    }
                if (t.alerts && t.alerts.conditions)
                    for (var l in t.alerts.conditions) e[l] = t.alerts.conditions[l], e[l].type = "pine_script";
                return e
            }, y.prototype.drawing = function(t) {
                if (t && t.canHasAlert()) {
                    var e = t.stateForAlert(),
                        n = e.plots,
                        r = !!this.conditionData().isChannel;
                    if ((1 === n.length ? !r : r) && "comparison" === this.conditionData().type)
                        if (1 === n.length) {
                            var o = {};
                            (o = TradingView.merge(o, e)).plotIndex = 0, this.band(o)
                        } else {
                            var a = {},
                                s = {};
                            (a = TradingView.merge(a, e)).plotIndex = 0, this.upperBand(a), (s = TradingView.merge(s, e)).plotIndex = 1, this.lowerBand(s)
                        }
                    else i.logError("[Alerts] Can't set drawing to alert with current condition")
                }
                return v(this.bandsArray())
            }, y.prototype.getStrategy = function() {
                for (var t = this.bandsArray(), e = 0; e < t.length; e++) {
                    if (t[e].isTVScriptStrategy) return t[e]
                }
                return null
            }, y.prototype.setValidConditionId = function() {
                var t = this.conditionId(),
                    e = p.get(this);
                e[t] || this.conditionId(Object.keys(e)[0])
            }, y.prototype.verticalLine = function() {
                var t = this.drawing();
                return t && 1 === t.plots.length && t.plots[0].offset1 && t.plots[0].offset1 === t.plots[0].offset2 ? t : null
            };
            const g = Object.entries({
                timestamp: "number",
                offset1: "number",
                offset2: "number",
                price1: "number",
                price2: "number",
                extendBackward: "boolean",
                extendForward: "boolean"
            });

            function v(t) {
                return t.find(t => t.type === d.StudyLineTool || /^LineTool.*/i.test(t.type)) || null
            }
            TradingView.AlertExtra = y
        },
        979486: (t, e, n) => {
            "use strict";
            var r = n(513469),
                i = n(918184),
                o = n(866358),
                a = n(683789).AlertExtra,
                s = n(855055).FormattersSerializer,
                l = n(984550).AlertFrequencyController,
                c = n(819453).getServerInterval,
                u = n(88425).ensureDurationInSeconds,
                d = n(468439).getAlertConditionTokenMap,
                p = n(57926).getAlertDefaultDescription,
                f = n(448588).getAlertDefaultName,
                h = n(619363).getAlertType,
                y = ["crossInterval", "autoDeactivation", "description", "sendEmail", "expired", "extra", "showPopup", "resolution", "script", "scriptDeps", "sendSms", "sendTrueSms", "sendPush", "playSound", "soundDuration", "soundFile", "symbol", "noExpiration", "symbolInternal", "webhookUrl", "name", "alertType"],
                g = y.concat(["id"]),
                v = o.extend({
                    constructor: function(t, e) {
                        var n = {};
                        ["autoDeactivation", "frequency", "extra", "crossInterval", "alertType"].forEach((function(e) {
                            t.hasOwnProperty(e) && (n[e] = t[e], delete t[e])
                        })), r.isEmpty(n) || (this.__delayedInitAttrs = n), t.version = t.version || a.VERSION, o.call(this, t, e), this.frequencyController = new l(this)
                    },
                    initialize: function() {
                        var t = this;

                        function e(e) {
                            t.set("crossInterval", !!e)
                        }
                        this.on("change:extra", (function(t, n, r) {
                            n && (n.crossInterval.unsubscribe(e), n.crossInterval.subscribe(e), t.set("crossInterval", n.crossInterval.value()), t.syncAlertType())
                        })).on("change:crossInterval", (function(t, e, n) {
                            var r = t.get("extra");
                            e ? t.set("resolution", "1") : r && r.mainSeries() && t.set("resolution", r.mainSeries().interval)
                        })).on("destroy", (function() {
                            TVSettings.remove(t.TVSettingsPropertiesKey(t.id))
                        })), this.__delayedInitAttrs && (this.set(this.__delayedInitAttrs), delete this.__delayedInitAttrs)
                    },
                    set: function(t, e, n) {
                        var r;
                        return null == t ? this : (n = n || {}).noPrepare ? o.prototype.set.call(this, t, e, n) : ("object" == typeof t ? (r = t, n = e) : (r = {})[t] = e, r = this._prepareToSet(r), o.prototype.set.call(this, r, n))
                    },
                    _prepareToSet_soundDuration: function(t) {
                        t = parseInt(t);
                        return isNaN(t) && (t = 0), u(t)
                    },
                    _prepareToSet_expired: function(t) {
                        return t instanceof Date ? t : new Date(1e3 * t)
                    },
                    _prepareToSet_extra: function(t) {
                        var e = this.get("extra"),
                            n = t && !(t instanceof a);
                        return e && t ? t = e.update(t) : n ? (t = new a(t), this.set("scriptDeps", t.getDependencies())) : t || (t = null), t
                    },
                    _prepareToSet_symbolInternal: function(t) {
                        if (t) return t
                    },
                    _prepareToSet_alertType: function(t) {
                        return "undefined" === t ? h(this) : t
                    },
                    isPrice: function() {
                        return null !== (this.get("extra") ? this.get("extra").price() : null)
                    },
                    isDrawing: function() {
                        return !(!this.get("extra") || !this.get("extra").drawing())
                    },
                    isMoving: function() {
                        return this.get("extra") && "moving" === (this.get("extra").conditionData() || {}).type
                    },
                    isOHLC: function() {
                        var t = this.get("extra");
                        if (t && t.alertSeries()) return "MainSeries" === t.alertSeries().type
                    },
                    isRangeBasedStyle: function() {
                        var t = this.get("extra"),
                            e = t && t.getMainSeries();
                        return !(!e || "MainSeries" !== e.type() || !e.isRangeBasedStyle())
                    },
                    isComplexSymbol: function() {
                        var t = this.get("symbolInternal");
                        return t !== this.get("symbol") && t
                    },
                    isPine: function() {
                        var t = this.get("extra"),
                            e = t && t.alertSeries();
                        return e && e.alerts
                    },
                    expiredUnix: function() {
                        return Math.round(this.get("expired").getTime() / 1e3)
                    },
                    defaultDescription: function() {
                        return p(d(this))
                    },
                    defaultName: function() {
                        return f(d(this))
                    },
                    setDefaultDescription: function() {
                        this.set("description", this.defaultDescription())
                    },
                    state: function() {
                        return this.toJSON()
                    },
                    toJSON: function() {
                        var t, e, n = {};
                        for (t in this.attributes) this.attributes.hasOwnProperty(t) && (e = this.attributes[t], n[t] = e && "function" == typeof e.toJSON ? e.toJSON() : e);
                        return n.expired && (n.expired = this.expiredUnix()), n
                    },
                    prepareToSend: function() {
                        this.syncAlertType(), this.syncScriptDeps();
                        for (var t, e, n = this.toJSON(), r = {}, i = g.length - 1; i >= 0; i--) void 0 !== (e = n[t = g[i]]) && (r[t] = e), "resolution" === t && (r[t] = c(e));
                        return r.playSound || (delete r.soundDuration, delete r.soundFile), r.name || delete r.name, r.extra && (r.extra = JSON.stringify(r.extra)), r
                    },
                    getLocalClone: function() {
                        var t = this.toJSON(),
                            e = y.reduce((function(e, n) {
                                return t.hasOwnProperty(n) && (e[n] = t[n]), e
                            }), {});
                        return new v(e)
                    },
                    saveState: function() {
                        this._oldState = this.state()
                    },
                    restoreState: function(t, e) {
                        !(t = t || this._oldState || {}).extra || t.extra instanceof a || (t.extra = new a(t.extra), t.scriptDeps = t.extra.getDependencies()), this.set(t), e || delete this._oldState
                    },
                    getSavedState: function() {
                        var t;
                        return this._oldState && (t = i.extend({}, this._oldState)).extra && (t.extra = new a(t.extra), t.scriptDeps = t.extra.getDependencies()), t
                    },
                    createTimeFormatted: function() {
                        var t = this.get("createTime");
                        return t ? this._formatDate(1e3 * t) : null
                    },
                    fireTimeFormatted: function() {
                        var t = this.get("fireTime");
                        return t ? this._formatDate(1e3 * t) : null
                    },
                    TVSettingsPropertiesKey: function() {
                        return t = this.id, "chartproperties.alertsProperties." + (t = parseInt(t));
                        var t
                    },
                    getFormatter: function() {
                        var t = this.get("extra");
                        if (t) {
                            var e = t.alertSeries();
                            if (e.formatter) return s.deserialize(e.formatter)
                        }
                        return null
                    },
                    syncAlertType: function() {
                        this.set("alertType", h(this))
                    },
                    syncScriptDeps: function() {
                        var t = this.get("extra").getDependencies();
                        this.set("scriptDeps", t)
                    }
                });
            t.exports.Alert = v
        },
        984550: (t, e, n) => {
            "use strict";
            n.d(e, {
                AlertFrequencyController: () => s
            });
            var r = n(620554),
                i = n(987380),
                o = n(331565);
            const a = (0, i.getLogger)("Alerts.Price.FrequencyController");
            class s {
                constructor(t) {
                    this._alert = t, t.on("change:autoDeactivation", (t, e) => {
                        const n = t.get("frequency");
                        if (this._isFireRateValid({
                                frequency: n,
                                autoDeactivation: e
                            })) return;
                        const r = this._getValidFireRate({
                            autoDeactivation: e
                        });
                        r ? t.set("frequency", r.frequency) : (a.logError(`Set invalid autoDeactivation: ${e}. Available: ${JSON.stringify(this.getAvailable())}`), this._setAnyValidFireRate())
                    }), t.on("change:frequency", (t, e) => {
                        this._putFrequencyToExtra();
                        const n = t.get("autoDeactivation");
                        if (this._isFireRateValid({
                                frequency: e,
                                autoDeactivation: n
                            })) return;
                        const r = this._getValidFireRate({
                            frequency: e
                        });
                        r ? t.set("autoDeactivation", r.autoDeactivation) : (a.logError(`Set invalid frequency: ${e}. Available: ${JSON.stringify(this.getAvailable())}`), this._setAnyValidFireRate())
                    })
                }
                getAvailable() {
                    const t = this._alert.get("extra");
                    return (null === (e = null == t ? void 0 : t.alertSeries()) || void 0 === e ? void 0 : e.isTVScriptStrategy) || "alerts" === (null == t ? void 0 : t.conditionId()) ? [{
                        autoDeactivation: !1,
                        frequency: "60"
                    }] : (() => {
                        var e;
                        return Boolean(this._alert.isDrawing() && "LineToolVertLine" === (null === (e = null == t ? void 0 : t.drawing()) || void 0 === e ? void 0 : e.type))
                    })() ? [{
                        autoDeactivation: !0,
                        frequency: "on_first_fire"
                    }] : (() => this._alert.get("crossInterval"))() ? [{
                        autoDeactivation: !0,
                        frequency: "on_first_fire"
                    }, {
                        autoDeactivation: !1,
                        frequency: "on_first_fire"
                    }] : (() => {
                        var e, n;
                        return [null === (e = null == t ? void 0 : t.alertSeries()) || void 0 === e ? void 0 : e.style, null === (n = null == t ? void 0 : t.mainSeries()) || void 0 === n ? void 0 : n.style].filter(o.isInteger).some(r.hasProjection)
                    })() ? [{
                        autoDeactivation: !0,
                        frequency: "on_bar_close"
                    }, {
                        autoDeactivation: !1,
                        frequency: "on_bar_close"
                    }] : [{
                        autoDeactivation: !0,
                        frequency: "once"
                    }, {
                        autoDeactivation: !1,
                        frequency: "on_first_fire"
                    }, {
                        autoDeactivation: !1,
                        frequency: "on_bar_close"
                    }, {
                        autoDeactivation: !1,
                        frequency: "60"
                    }];
                    var e
                }
                switchFrequencies() {
                    const t = this._alert,
                        e = t.get("frequency"),
                        n = t.get("autoDeactivation");
                    if (!0 === n) {
                        const e = this._getValidFireRate({
                            autoDeactivation: !0
                        });
                        if (e) return void t.set({
                            autoDeactivation: e.autoDeactivation,
                            frequency: e.frequency
                        })
                    }
                    if (!1 === n && "on_first_fire" === e) {
                        const e = "60",
                            n = this._getValidFireRate({
                                frequency: e
                            });
                        if (n) return void t.set({
                            autoDeactivation: n.autoDeactivation,
                            frequency: e
                        })
                    }
                    if (!1 === n) {
                        const e = this._getValidFireRate({
                            autoDeactivation: !1
                        });
                        if (e) return void t.set({
                            autoDeactivation: e.autoDeactivation,
                            frequency: e.frequency
                        })
                    }
                    this._isFireRateValid({
                        frequency: e,
                        autoDeactivation: n
                    }) || this._setAnyValidFireRate()
                }
                _putFrequencyToExtra() {
                    const t = this._alert.get("extra");
                    t && t.frequency(this._alert.get("frequency"))
                }
                _isFireRateValid(t) {
                    return this.getAvailable().some(e => e.frequency === t.frequency && e.autoDeactivation === t.autoDeactivation)
                }
                _getValidFireRate(t) {
                    const [e, n] = Object.entries(t)[0], r = this.getAvailable().find(t => t[e] === n);
                    return void 0 === r ? null : r
                }
                _setAnyValidFireRate() {
                    const t = this.getAvailable()[0];
                    this._alert.set({
                        frequency: t.frequency,
                        autoDeactivation: t.autoDeactivation
                    }), this._putFrequencyToExtra()
                }
            }
        },
        57926: (t, e, n) => {
            "use strict";
            n.d(e, {
                getAlertDefaultDescription: () => s
            });
            n(568421);
            var r = n(120220),
                i = n(468439);
            const o = (0, r.t)("{alertSeries} {alertCondition} {alertConditionOptions} on {chartSeries}"),
                a = (0, r.t)("{strategyName}: order {{strategy.order.action}} @ {{strategy.order.contracts}} filled on {{ticker}}. New strategy position is {{strategy.position_size}}");

            function s(t) {
                switch (t.type) {
                    case i.AlertConditionTokenMapType.MainSeries:
                        return `${t.alertSeries} ${t.conditionTitle} ${t.conditionOptions}`;
                    case i.AlertConditionTokenMapType.Study:
                        return o.format({
                            alertSeries: t.alertSeries,
                            chartSeries: t.mainSeries,
                            alertCondition: t.conditionTitle,
                            alertConditionOptions: t.conditionOptions
                        });
                    case i.AlertConditionTokenMapType.PineScript:
                        return t.conditionMessage;
                    case i.AlertConditionTokenMapType.PineScriptAlertFunction:
                        return "";
                    case i.AlertConditionTokenMapType.Strategy:
                        return a.format({
                            strategyName: t.strategyTitle
                        })
                }
            }
        },
        448588: (t, e, n) => {
            "use strict";
            n.d(e, {
                getAlertDefaultName: () => u
            });
            n(568421);
            var r = n(120220),
                i = n(468439),
                o = n(621234);
            const a = (0, r.t)("{title}: Any alert() function call"),
                s = (0, r.t)("{title}: alert() function calls only"),
                l = o.Constants.NameLengthLimit - d(a),
                c = o.Constants.NameLengthLimit - d(s);

            function u(t) {
                switch (t.type) {
                    case i.AlertConditionTokenMapType.MainSeries:
                    case i.AlertConditionTokenMapType.Study:
                    case i.AlertConditionTokenMapType.PineScript:
                    case i.AlertConditionTokenMapType.Strategy:
                        return "";
                    case i.AlertConditionTokenMapType.PineScriptAlertFunction:
                        const e = t.scriptTitle;
                        let n, r;
                        return t.isStrategy ? (n = s, r = e.length > c ? p(e, c) : e) : (n = a, r = e.length > l ? p(e, l) : e), n.format({
                            title: r
                        })
                }
            }

            function d(t) {
                return t.replace("{title}", "").length
            }

            function p(t, e) {
                return t.substring(0, e - "…".length) + "…"
            }
        },
        901694: (t, e, n) => {
            "use strict";

            function r(t) {
                let e;
                if ("object" != typeof t || null == t || "number" == typeof t.nodeType) e = t;
                else if (t instanceof Date) e = new Date(t.valueOf());
                else if (Array.isArray(t)) {
                    e = [];
                    let n = 0;
                    const i = t.length;
                    for (; n < i; n++) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = r(t[n]))
                } else {
                    e = {};
                    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = r(t[n]))
                }
                return e
            }
            n.d(e, {
                deepCopy: () => r
            })
        }
    }
]);