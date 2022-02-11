(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [48158], {
        555782: (e, t, r) => {
            "use strict";
            var n, o;

            function i(e) {
                return "line" === e.type
            }

            function s(e) {
                return "shapes" === e.type
            }

            function a(e) {
                return "chars" === e.type
            }

            function l(e) {
                return "arrows" === e.type
            }

            function c(e) {
                return "dataoffset" === e.type
            }

            function u(e) {
                return "ohlc_open" === e.type
            }

            function d(e) {
                return "ohlc_high" === e.type
            }

            function p(e) {
                return "ohlc_low" === e.type
            }

            function f(e) {
                return "ohlc_close" === e.type
            }

            function _(e) {
                return u(e) || d(e) || p(e) || f(e)
            }

            function h(e) {
                return "colorer" === e.type
            }

            function m(e) {
                return "bar_colorer" === e.type
            }

            function v(e) {
                return "bg_colorer" === e.type
            }

            function y(e) {
                return "text_colorer" === e.type
            }

            function g(e) {
                return "ohlc_colorer" === e.type
            }

            function S(e) {
                return "wick_colorer" === e.type
            }

            function A(e) {
                return "border_colorer" === e.type
            }

            function b(e) {
                return "up_colorer" === e.type
            }

            function x(e) {
                return "down_colorer" === e.type
            }

            function w(e) {
                return "alertcondition" === e.type
            }

            function P(e) {
                return "Plot" !== e
            }

            function E(e) {
                return "ohlc_bars" === e.plottype
            }

            function I(e) {
                return "ohlc_candles" === e.plottype
            }

            function D(e) {
                return h(e) || m(e) || v(e) || c(e) || g(e) || w(e) || b(e) || x(e) || A(e) || S(e) || y(e)
            }

            function T(e) {
                return h(e) || y(e) || m(e) || c(e) || g(e) || S(e) || A(e) || b(e) || x(e) || w(e)
            }
            r.r(t), r.d(t, {
                    LineStudyPlotStyle: () => n,
                    isLinePlot: () => i,
                    isShapesPlot: () => s,
                    isCharsPlot: () => a,
                    isArrowsPlot: () => l,
                    isDataOffsetPlot: () => c,
                    isOhlcOpenPlot: () => u,
                    isOhlcHighPlot: () => d,
                    isOhlcLowPlot: () => p,
                    isOhlcClosePlot: () => f,
                    isOhlcPlot: () => _,
                    isColorerPlot: () => h,
                    isBarColorerPlot: () => m,
                    isBgColorerPlot: () => v,
                    isTextColorerPlot: () => y,
                    isOhlcColorerPlot: () => g,
                    isCandleWickColorerPlot: () => S,
                    isCandleBorderColorerPlot: () => A,
                    isUpColorerPlot: () => b,
                    isDownColorerPlot: () => x,
                    isAlertConditionPlot: () => w,
                    isPlotTitleDefined: () => P,
                    isOhlcPlotStyleBars: () => E,
                    isOhlcPlotStyleCandles: () => I,
                    PlotSymbolSize: () => o,
                    isPlotWithTechnicalValues: () => D,
                    isNonVisualPlot: () => T
                }),
                function(e) {
                    e[e.Line = 0] = "Line", e[e.Histogram = 1] = "Histogram", e[e.Cross = 3] = "Cross", e[e.Area = 4] = "Area", e[e.Columns = 5] = "Columns", e[e.Circles = 6] = "Circles", e[e.LineWithBreaks = 7] = "LineWithBreaks", e[e.AreaWithBreaks = 8] = "AreaWithBreaks", e[e.StepLine = 9] = "StepLine", e[e.StepLineWithDiamonds = 10] = "StepLineWithDiamonds"
                }(n || (n = {})),
                function(e) {
                    e.Auto = "auto", e.Tiny = "tiny", e.Small = "small", e.Normal = "normal", e.Large = "large", e.Huge = "huge"
                }(o || (o = {}))
        },
        469728: (e, t, r) => {
            "use strict";
            r.d(t, {
                AlertExtraUpdateScheduler: () => a
            });
            var n = r(93962),
                o = r(904330);
            const i = (0, r(987380).getLogger)("Alerts.ExtraUpdateScheduler"),
                s = clearTimeout;
            class a {
                constructor() {
                    this._queue = new Map, this._taskHandle = null
                }
                scheduleUpdate(e) {
                    this._queue.set(e.id, e), this._maybeScheduleTask()
                }
                cancelUpdate(e) {
                    this._queue.delete(e), null !== this._taskHandle && 0 === this._queue.size && (s(this._taskHandle), this._taskHandle = null)
                }
                cancelAllUpdates() {
                    this._queue.clear(), null !== this._taskHandle && (s(this._taskHandle), this._taskHandle = null)
                }
                _maybeScheduleTask() {
                    null === this._taskHandle && 0 !== this._queue.size && (this._taskHandle = setTimeout(async () => {
                        const e = this._queue.values().next().value;
                        e && (this._queue.delete(e.id), await
                            function(e) {
                                return i.logDebug("Sending extra update request for alert " + e.id), (0, n.sendRequest)({
                                    method: "update_extra",
                                    params: (0, o.client2serverParams)(e)
                                }).then(() => i.logDebug("Extra has been updated successfully for alert " + e.id), t => i.logWarn(`Could not update extra for alert ${e.id}: ${t}`))
                            }(e)), this._taskHandle = null, this._maybeScheduleTask()
                    }, 1e3))
                }
            }
        },
        756186: (e, t, r) => {
            "use strict";

            function n() {
                return Promise.all([r.e(70964), r.e(38817), r.e(23876), r.e(26822), r.e(69756), r.e(88278), r.e(59456), r.e(25535), r.e(5058), r.e(52802), r.e(94595), r.e(94269), r.e(13940), r.e(49638), r.e(60796), r.e(68491), r.e(73840), r.e(74856), r.e(50248), r.e(11216), r.e(99752), r.e(43424), r.e(20396), r.e(64011), r.e(7562), r.e(8443), r.e(73715), r.e(24002), r.e(71062), r.e(5583)]).then(r.bind(r, 869506)).then(e => e.createAlertNotifier())
            }
            r.d(t, {
                createAlertNotifier: () => n
            })
        },
        818771: (e, t, r) => {
            "use strict";
            r.d(t, {
                alertsMaintenanceTracker: () => s
            });
            var n = r(765066),
                o = r.n(n),
                i = r(198006);
            const s = new class {
                constructor() {
                    this._state = new(o())((0, i.isFeatureEnabled)("alerts-maintenance"))
                }
                value() {
                    return this._state.value()
                }
                subscribe(e) {
                    this._state.subscribe(e)
                }
                unsubscribe(e) {
                    this._state.unsubscribe(e)
                }
                sync() {
                    this._state.setValue((0, i.isFeatureEnabled)("alerts-maintenance"))
                }
            }
        },
        518514: (e, t, r) => {
            "use strict";

            function n(e) {
                return !e.isDrawing()
            }
            r.d(t, {
                isAlertCloneable: () => n
            })
        },
        274305: (e, t, r) => {
            "use strict";
            var n;
            r.d(t, {
                    AlertNotificationType: () => n
                }),
                function(e) {
                    e.Fired = "fired", e.FireControl = "fire_control"
                }(n || (n = {}))
        },
        804803: (e, t, r) => {
            "use strict";
            var n = r(866358).extend({
                _prepareToSet_fireTime: function(e) {
                    return new Date(1e3 * e)
                },
                _prepareToSet_barTime: function(e) {
                    return new Date(1e3 * e)
                },
                _prepareToSet_alertId: function(e) {
                    return parseInt(e)
                },
                fireTimeReadable: function() {
                    return this._formatDate(this.get("fireTime"))
                },
                fireTimeUnix: function() {
                    return Math.round(this.get("fireTime").getTime() / 1e3)
                }
            });
            e.exports = n
        },
        23492: (e, t, r) => {
            "use strict";
            var n = r(683789).AlertExtra,
                o = r(512012).isStudyStateForAlertType,
                i = r(284234),
                s = r(795294),
                a = r(584819).extractStudyId,
                l = r(211490).extractPineId,
                c = r(908155).prepareCallStudyArgs,
                u = r(75443),
                d = r(987380).getLogger("Alerts.Versioning"),
                p = r(457746),
                f = r(700999);
            const {
                hash: _
            } = r(724985);
            var h = r(331377),
                m = r(620554),
                v = r(82379).DataSourceDangerReason,
                y = r(469728).AlertExtraUpdateScheduler,
                g = r(198006).isFeatureEnabled;

            function S() {
                this._extraUpdateScheduler = new y
            }
            S.version_10_tv_6611_1a_refactoring = 10, S.version_11_tv_6611_1b_refactoring = 11, S.version_12_tv_6888_fix_plot_index = 12, S.version_13_tv_4164_source_code_protection = 13, S.version_14_tv_4164_source_code_protection_fix = 14, S.version_15_tv_8068_fix_main_series_resolution = 15, S.version_16_jv_298_remove_callstudy = 16, S.version_17_jv_646_fix_mixed_inputs = 17, S.version_18_tv_10636_price_format = 18, S.version_19_tv_11267_fix_frequency_options = 19, S.version_20_tv_14463_extract_dividends_adjustment_from_symbol_string = 20, S.version_21_tv_14886_add_alert_dangerous_source_check = 21, S.version_22_tv_23957_remove_text_input_from_pine_studies = 22, S.prototype.migrate = function(e, t) {
                    var r;
                    if (t = Object.assign({
                            sendExtraUpdate: g("alerts-send-extra-update")
                        }, t), !e || !e.extra) return Promise.resolve(e);
                    if ((r = JSON.parse(e.extra)) && !Object.keys(r).length && r.constructor === Object) return delete e.extra, Promise.resolve(e);
                    var o = Promise.resolve(e),
                        i = null == r.version || r.version < n.VERSION;
                    return i && (o = this._patchAlert(r, e)), o = o.then(function(e) {
                        var r = JSON.parse(e.extra);
                        return r.version < n.VERSION ? d.logError("Alert version is less than current") : r.version > n.VERSION ? d.logNormal("Alert version is greater than current") : i && t.sendExtraUpdate && this._extraUpdateScheduler.scheduleUpdate({
                            id: e.id,
                            instanceId: e.instanceId,
                            extra: e.extra
                        }), e
                    }.bind(this))
                }, S.prototype._patchAlert = function(e, t) {
                    var r = this;
                    e.version || (e.version = 1);
                    var n = e.version;
                    n < S.version_10_tv_6611_1a_refactoring && (e.condition.mainSeries = this._patchBand_to10(e.condition.mainSeries, t.symbol), e.condition.options.band && (e.condition.options.band = this._patchBand_to10(e.condition.options.band, t.symbol)), e.condition.options.upperBand && (e.condition.options.upperBand = this._patchBand_to10(e.condition.options.upperBand, t.symbol)), e.condition.options.lowerBand && (e.condition.options.lowerBand = this._patchBand_to10(e.condition.options.lowerBand, t.symbol)), e.version = S.version_10_tv_6611_1a_refactoring), n < S.version_11_tv_6611_1b_refactoring && (e = this._patchExtra_to11(e)), n < S.version_12_tv_6888_fix_plot_index && (e = this._patchExtra_to12(e)), n < S.version_13_tv_4164_source_code_protection && (e = this._patchExtra_to13(e, t)), n < S.version_14_tv_4164_source_code_protection_fix && (e = this._patchExtra_to14(e, t)), n < S.version_15_tv_8068_fix_main_series_resolution && (e = this._patchExtra_to15(e, t)), t.extra = JSON.stringify(e);
                    var o = Promise.resolve(t);
                    return n < S.version_16_jv_298_remove_callstudy && (o = o.then((function(e) {
                        return r._patchAlert_to16(e)
                    }))), n < S.version_17_jv_646_fix_mixed_inputs && (o = o.then((function(e) {
                        var t = JSON.parse(e.extra),
                            n = r._patchExtra_to17(t);
                        return e.extra = JSON.stringify(n), e
                    }))), n < S.version_18_tv_10636_price_format && (o = o.then((function(e) {
                        var t = JSON.parse(e.extra),
                            n = r._patchExtra_to18(t);
                        return e.extra = JSON.stringify(n), e
                    }))), n < S.version_19_tv_11267_fix_frequency_options && (o = o.then((function(e) {
                        return r._patchAlert_to19(e)
                    }))), n < S.version_20_tv_14463_extract_dividends_adjustment_from_symbol_string && (o = o.then((function(e) {
                        var t = JSON.parse(e.extra),
                            n = r._patchExtra_to20(t);
                        return e.extra = JSON.stringify(n), e
                    }))), n < S.version_21_tv_14886_add_alert_dangerous_source_check && (o = o.then((function(e) {
                        var t = JSON.parse(e.extra),
                            n = r._patchExtra_to21(t);
                        return e.extra = JSON.stringify(n), e
                    }))), n < S.version_22_tv_23957_remove_text_input_from_pine_studies && (o = o.then((function(e) {
                        var t = JSON.parse(e.extra),
                            n = r._patchExtra_to22(t);
                        return e.extra = JSON.stringify(n), e
                    }))), o
                }, S.prototype.cancelPossibleExtraUpdate = function(e) {
                    this._extraUpdateScheduler.cancelUpdate(e)
                }, S.prototype.cancelAllPossibleExtraUpdates = function() {
                    this._extraUpdateScheduler.cancelAllUpdates()
                }, S.prototype._patchBand_to10 = function(e, t) {
                    return e = this._patchBand_to10_callStudyArgs(e), e = this._patchBand_to10_stateForAlert(e, t)
                }, S.prototype._patchBand_to10_callStudyArgs = function(e) {
                    var t = e && "Study" === e.type,
                        r = t && (e.alertsData || {}).callStudyArgs,
                        n = t && e.metaInfo && e.state && e.state.inputs;
                    return t && !r && n ? (e.alertsData || (e.alertsData = {}), e.alertsData.callStudyArgs = c(e.state.inputs, e.metaInfo), e) : e
                }, S.prototype._patchBand_to10_stateForAlert = function(e, t) {
                    var r, n;
                    if (!e) return e;
                    if (n = !e.state, "MainSeries" !== (r = e.type) || n) {
                        if (o(r, !1) && !n) {
                            var i = e.metaInfo.plots.map((function(t) {
                                var r = {
                                    id: t.id,
                                    type: t.type,
                                    offset: e.data.completePlotOffsets[t.id]
                                };
                                return e.metaInfo.styles && void 0 !== e.metaInfo.styles[t.id] && (r.title = e.metaInfo.styles[t.id].title || ""), t.target && e.metaInfo.ohlcPlots && e.metaInfo.ohlcPlots[t.target] && (r.ohlcTitle = e.metaInfo.ohlcPlots[t.target].title), r
                            }));
                            return {
                                id: e.id,
                                uniqueId: e.uniqueId,
                                type: e.type,
                                title: "",
                                shortDescription: e.state.shortDescription || "Study",
                                fullId: e.metaInfo.fullId,
                                isTVScript: !!e.metaInfo.isTVScript,
                                plots: i,
                                inputs: e.state.inputs,
                                alerts: e.metaInfo.alerts,
                                callStudyArgs: e.alertsData.callStudyArgs,
                                plotIndex: e.plotIndex,
                                plotOffset: e.plotOffset
                            }
                        }
                        return e
                    }
                    return {
                        id: e.id,
                        uniqueId: e.uniqueId,
                        type: e.type,
                        proSymbol: e.state.symbol || t,
                        actualSymbol: t,
                        interval: e.state.interval,
                        style: e.state.style,
                        styleInputs: function() {
                            var t = {
                                0: "bar",
                                1: "candle",
                                2: "line",
                                3: "area",
                                4: "renko",
                                5: "kagi",
                                6: "pnf",
                                7: "pb",
                                8: "ha",
                                9: "hollowCandle"
                            }[e.state.style];
                            if (t) {
                                var r = e.state[t + "Style"];
                                if (r) return r.inputs
                            }
                        }(),
                        sessionId: e.state.sessionId,
                        boxSize: e.boxSize,
                        reversalAmount: e.reversalAmount
                    }
                }, S.prototype._patchExtra_to11 = function(e) {
                    var t = function(e, t, r) {
                            r.id = r.id || u.randomHashN(6), e.condition[t] = {
                                id: r.id,
                                plotIndex: r.plotIndex
                            }, e.statesForAlert[r.id] = r
                        },
                        r = {
                            version: S.version_11_tv_6611_1b_refactoring,
                            condition: {
                                id: e.condition.id,
                                fireInfo: {
                                    frequency: e.frequency || "once"
                                },
                                movPeriod: e.condition.options.period,
                                movValue: e.condition.options.value
                            },
                            statesForAlert: {}
                        };
                    t(r, "alertSeries", e.condition.mainSeries);
                    return ["band", "upperBand", "lowerBand"].filter((function(t) {
                        return !!e.condition.options[t]
                    })).forEach((function(n) {
                        t(r, n, e.condition.options[n])
                    })), r
                }, S.prototype._patchExtra_to12 = function(e) {
                    return ["alertSeries", "band", "upperBand", "lowerBand"].filter((function(t) {
                        return !!e.condition[t] && void 0 !== e.condition[t].plotIndex
                    })).map((function(t) {
                        var r = e.condition[t];
                        return {
                            state: e.statesForAlert[r.id],
                            plotIndex: r.plotIndex
                        }
                    })).filter((function(e) {
                        return !!e.state.plots
                    })).forEach((function(e) {
                        var t = e.state.plots[e.plotIndex];
                        null == t || "object" != typeof t && "function" != typeof t || void 0 === t.pinePlotIndex && (t.pinePlotIndex = e.plotIndex)
                    })), e.version = S.version_12_tv_6888_fix_plot_index, e
                }, S.prototype._patchExtra_to13 = function(e, t) {
                    var r = e;
                    if (!e.condition.mainSeries) {
                        if ("MainSeries" === e.statesForAlert[e.condition.alertSeries.id].type) r.condition.mainSeries = r.condition.alertSeries;
                        else {
                            var n = u.randomHashN(6);
                            r.condition.mainSeries = {
                                id: n
                            }, r.statesForAlert[n] = {
                                id: n
                            }
                        }
                        r.statesForAlert[r.condition.mainSeries.id].symbolString = t.symbol
                    }
                    for (var o in e.statesForAlert) {
                        var s = e.statesForAlert[o];
                        s.fullId && (s.scriptIdPart = i.parseIdString(s.fullId).shortId.split("$")[1])
                    }
                    return r.version = S.version_13_tv_4164_source_code_protection, r
                },
                S.prototype._patchExtra_to14 = function(e, t) {
                    var r = e;
                    return e.condition.mainSeries || ("MainSeries" === e.statesForAlert[e.condition.alertSeries.id].type ? r.condition.mainSeries = r.condition.alertSeries : (r.condition.mainSeries = {
                        id: u.randomHashN(6)
                    }, r.statesForAlert[r.condition.mainSeries.id] = {})), null == r.statesForAlert[r.condition.mainSeries.id].symbolString && (r.statesForAlert[r.condition.mainSeries.id].symbolString = t.symbol), r.version = S.version_14_tv_4164_source_code_protection_fix, r
                }, S.prototype._patchExtra_to15 = function(e, t) {
                    var r = e;
                    return null == r.statesForAlert[r.condition.mainSeries.id].interval && (r.statesForAlert[r.condition.mainSeries.id].interval = t.resolution), r.version = S.version_15_tv_8068_fix_main_series_resolution, r
                }, S.prototype._patchAlert_to16 = function(e) {
                    var t = JSON.parse(e.extra);

                    function r(e) {
                        return e.replace(/tv-scripting-1!?$/, "tv-scripting-88")
                    }

                    function n(t) {
                        return (n = t, o = i.cutDollarHash(n.fullId), s = S._recoverFullInputs(n.fullId, n.pineId, n.pineVersion, n.inputs).then((function(e) {
                            return {
                                id: f.idForAlert(a(n.fullId), e),
                                study: r(o),
                                inputs: e
                            }
                        })), l = new Promise((function(e, t) {
                            var o = JSON.parse(n.callStudyDependencies || "[]").map((function(e) {
                                return S._recoverFullInputs(null, e.scriptIdPart, e.scriptVersion, e.inputs).then((function(t) {
                                    return {
                                        id: e.id,
                                        study: r(e.study),
                                        inputs: t
                                    }
                                }))
                            }));
                            Promise.all(o).then((function(t) {
                                e(t)
                            }), t)
                        })), s.then((function(e) {
                            return l.then((function(t) {
                                return [e].concat(t)
                            }))
                        }))).then((function(r) {
                            t.studyDependencies = r;
                            var n = r[0];
                            t.id = n.id, t.uniqueId = t.id, e.scriptDeps = e.scriptDeps.concat(r)
                        }));
                        var n, o, s, l
                    }
                    e.scriptDeps = [];
                    var s = [];
                    for (var l in t.statesForAlert)
                        if (t.statesForAlert.hasOwnProperty(l)) {
                            var c = t.statesForAlert[l];
                            if ("MainSeries" === c.type) c.id = _(c.symbolString + c.interval).toString(), c.uniqueId = c.id;
                            else if (o(c.type, !1)) {
                                var u = n(c);
                                s.push(u)
                            } else /^LineTool.*/i.test(c.type) && (c.id = c.uniqueId)
                        }
                    return Promise.all(s).then((function() {
                        return function(e) {
                            var t = {},
                                r = {};
                            Object.keys(e.statesForAlert).forEach((function(n) {
                                var o = e.statesForAlert[n].id;
                                t[n] = o, r[o] = e.statesForAlert[n]
                            })), Object.keys(e.condition).filter((function(r) {
                                return null != e.condition[r].id && null != t[e.condition[r].id]
                            })).forEach((function(r) {
                                e.condition[r].id = t[e.condition[r].id]
                            })), e.statesForAlert = r
                        }(t), t.version = S.version_16_jv_298_remove_callstudy, e.extra = JSON.stringify(t), e
                    }))
                }, S.prototype.patchAlert_to16_forTestsOnly = S.prototype._patchAlert_to16, S.prototype._patchExtra_to17 = function(e) {
                    for (var t in e.statesForAlert)
                        if (e.statesForAlert.hasOwnProperty(t)) {
                            var r = e.statesForAlert[t],
                                n = r.inputs;
                            if (null != n && (r.inputs = s.splitInputs(n).obj), null != r.studyDependencies)
                                for (var o = 0; o < r.studyDependencies.length; o++) {
                                    var i = r.studyDependencies[o];
                                    i.inputs = s.splitInputs(i.inputs).obj
                                }
                        }
                    return e.version = S.version_17_jv_646_fix_mixed_inputs, e
                }, S.prototype.patchExtra_to17_forTestsOnly = S.prototype._patchExtra_to17, S._recoverFullInputs = function(e, t, r, n) {
                    if (t = t || e && l(e) || n.pineId, r = r || n.pineVersion || "-1", null == t) return Promise.resolve(n);
                    var o = p.translateScriptAsync2(t, r);
                    return new Promise((function(e, t) {
                        o.then(e, t)
                    })).catch((function(e) {
                        if ("-1" === r && t.startsWith("USER")) {
                            var o = function(e) {
                                var t = {};
                                return Object.keys(e).forEach((function(r) {
                                    var n, o = e[r];
                                    r.startsWith("in_") ? (n = ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"].indexOf(o) > 0 || /.*\$\d+/.test(o) ? "source" : "string" == typeof o ? "string" : "boolean" == typeof o ? "bool" : "float", t[r] = {
                                        f: !0,
                                        v: o,
                                        t: n
                                    }) : t[r] = o
                                })), t
                            }(n);
                            return d.logNormal("A very rare case: alert on legacy script that was never resaved. Trying to guess input types \n\t" + JSON.stringify(n) + " -> " + JSON.stringify(o)), o
                        }
                        return d.logError("Alert migration failed, inputs cannot be migrated: " + JSON.stringify(e)), Promise.reject(e)
                    })).then((function(e) {
                        return TVScript.patchInputs(e.inputs, n)
                    }))
                }, S.prototype._patchExtra_to18 = function(e) {
                    var t, r = {},
                        n = h.getData(e.condition.id);
                    if (n && "comparison" === n.type)
                        if (n.isChannel) {
                            var o = e.statesForAlert[e.condition.upperBand.id],
                                i = e.statesForAlert[e.condition.lowerBand.id];
                            "Value" === o.type ? t = o.value : "Value" === i.type && (t = i.value)
                        } else {
                            var s = e.statesForAlert[e.condition.band.id];
                            "Value" === s.type && (t = s.value)
                        }
                    if (t && -1 !== (t = t.toString().replace(/^-/, "")).indexOf(".")) {
                        var a = t.replace(/^\d+\./, "").length,
                            l = Math.pow(10, a);
                        r.priceScale = l
                    }
                    var c = e.condition.alertSeries.id;
                    return e.statesForAlert[c].formatter = {
                        type: "price",
                        state: r
                    }, e.version = S.version_18_tv_10636_price_format, e
                }, S.prototype._patchAlert_to19 = function(e) {
                    var t = JSON.parse(e.extra),
                        r = e.autoDeactivation,
                        n = t.condition.fireInfo.frequency,
                        o = t.statesForAlert[t.condition.mainSeries.id],
                        i = ["band", "lowerBand", "upperBand"].map((function(e) {
                            var r = t.condition[e];
                            return r && t.statesForAlert[r.id]
                        })).filter((function(e) {
                            return !!e
                        })).filter((function(e) {
                            return "LineToolVertLine" === e.type
                        })).length > 0,
                        s = m.hasProjection(o.style),
                        a = e.crossInterval,
                        l = [];

                    function c(e) {
                        return -1 !== l.indexOf(e)
                    }
                    return i ? l.push("once") : (a || s || (l.push("once"), l.push("60"), l.push("on_bar_close")), s ? l.push("on_bar_close") : l.push("on_first_fire")), "once_per_bar" === n && (n = "on_first_fire"), "once" !== n || c("once") || (r = !0, n = l[0]), "once" !== n && r && (n = l[0]), "once" !== n && i && (r = !0, n = "once"), "on_bar_close" === n && !c("on_bar_close") && c("on_first_fire") && (n = "on_first_fire"), e.autoDeactivation = r, t.condition.fireInfo.frequency = n, t.version = S.version_19_tv_11267_fix_frequency_options, e.extra = JSON.stringify(t), e
                }, S.prototype._patchExtra_to20 = function(e) {
                    var t = e.condition.mainSeries,
                        r = e.statesForAlert,
                        n = t && r && r[t.id];
                    if (n) {
                        var o = n.symbolString;
                        if (o && 0 === o.indexOf("=")) {
                            var i = o.slice(1);
                            "dividends" === (i = JSON.parse(i)).adjustment ? n.dividendsAdjustment = !0 : "splits" === i.adjustment && (n.dividendsAdjustment = !1)
                        }
                    }
                    return e.version = S.version_20_tv_14463_extract_dividends_adjustment_from_symbol_string, e
                }, S.prototype.patchExtra_to20_forTestsOnly = S.prototype._patchExtra_to20, S.prototype._patchExtra_to21 = function(e) {
                    var t = e.statesForAlert;
                    for (var r in t)
                        if (t.hasOwnProperty(r)) {
                            var n = t[r];
                            n.isSpread && (n.dangerReason = v.Spread)
                        }
                    return e.version = S.version_21_tv_14886_add_alert_dangerous_source_check, e
                }, S.prototype._patchExtra_to22 = function(e) {
                    var t = e.statesForAlert,
                        r = !0;
                    for (var n in t) {
                        if (t.hasOwnProperty(n))
                            if (("Study" === (s = t[n]).type || "StudyStrategy" === s.type) && s.isTVScript && 1 !== s.studyDependencies.length) {
                                r = !1;
                                break
                            }
                    }
                    if (r) {
                        var o = {},
                            i = {};
                        for (var n in t) {
                            var s;
                            if (t.hasOwnProperty(n))
                                if ("Study" !== (s = t[n]).type && "StudyStrategy" !== s.type || !s.isTVScript) o[n] = s;
                                else {
                                    var l = s.uniqueId,
                                        c = Object.assign({}, s.inputs);
                                    s.isTVScript && delete c.text;
                                    var u = f.idForAlert(a(s.fullId), c);
                                    s.id = u, s.uniqueId = u, s.studyDependencies[0].id = u, o[u] = s, i[l] = u
                                }
                        }
                        e.statesForAlert = o, e.condition.alertSeries.id = i[e.condition.alertSeries.id] || e.condition.alertSeries.id, e.condition.band && (e.condition.band.id = i[e.condition.band.id] || e.condition.band.id), e.condition.upperBand && (e.condition.upperBand.id = i[e.condition.upperBand.id] || e.condition.upperBand.id), e.condition.lowerBand && (e.condition.lowerBand.id = i[e.condition.lowerBand.id] || e.condition.lowerBand.id)
                    }
                    return e.version = S.version_22_tv_23957_remove_text_input_from_pine_studies, e
                }, e.exports = {
                    AlertVersioning: S
                }
        },
        904330: (e, t) => {
            var r = {
                    active: "active",
                    aid: "alertId",
                    alerts: "alerts",
                    bar_time: "barTime",
                    create_t: "createTime",
                    cross_int: "crossInterval",
                    deact: "autoDeactivation",
                    desc: "description",
                    email: "sendEmail",
                    error: "error",
                    events: "events",
                    exp: "expired",
                    fire_time: "fireTime",
                    inc_cross_int: "includeCrossInterval",
                    inf_exp: "noExpiration",
                    internal_sym: "symbolInternal",
                    popup: "showPopup",
                    reason: "reason",
                    res: "resolution",
                    script_deps: "scriptDeps",
                    script: "script",
                    sms: "sendSms",
                    true_sms: "sendTrueSms",
                    snd: "playSound",
                    push: "sendPush",
                    snd_duration: "soundDuration",
                    snd_file: "soundFile",
                    sort_by: "sortBy",
                    sort_dir: "sortDirection",
                    start_t: "startTime",
                    stop_t: "stopTime",
                    stop: "stopReason",
                    sym: "symbol",
                    web_hook: "webhookUrl",
                    inst_id: "instanceId",
                    name: "name",
                    alert_type: "alertType"
                },
                n = function() {
                    var e = {};
                    return Object.keys(r).forEach((function(t) {
                        e[r[t]] = t
                    })), e
                }();

            function o(e, t) {
                var r = {};
                return e ? (Object.keys(e).forEach((function(n) {
                    var o = t(n),
                        i = e[n];
                    r[o] = i
                })), r) : e
            }
            t.server2clientParams = function(e) {
                return o(e, (function(e) {
                    return r[e] || e
                }))
            }, t.client2serverParams = function(e) {
                return o(e, (function(e) {
                    return n[e] || e
                }))
            }
        },
        735797: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                AlertsDispatcher: () => re,
                prepareAlertsModels: () => se
            });
            var n = r(120220),
                o = r(759958),
                i = r(998562),
                s = r(804803),
                a = r.n(s),
                l = r(23492),
                c = r(979486),
                u = r(457746),
                d = r.n(u),
                p = r(697786),
                f = r(4516),
                _ = r.n(f),
                h = r(929098),
                m = r(903851),
                v = r(305803),
                y = r(987380),
                g = r(93962),
                S = r(756186),
                A = r(904330),
                b = r(110164),
                x = r(669491),
                w = (r(265194), r(423946));
            const P = {
                max_alerts_count_exceeded: "alerts",
                max_primitive_alerts_count_exceeded: "primitiveAlerts",
                max_complex_alerts_count_exceeded: "complexAlerts"
            };

            function E(e = "max_alerts_count_exceeded") {
                (0, w.createGoProDialog)({
                    feature: P[e]
                })
            }

            function I() {
                (0, w.createGoProDialog)({
                    feature: "alertsNoExpiration"
                })
            }
            var D = r(811132);

            function T() {
                (0, D.showAbortExplainingDialog)(i.AlertEditorAbortReason.AlertsMaintenance)
            }
            var k = r(388674),
                C = r(279407),
                O = r(328709),
                N = r(836989),
                q = r(541962),
                R = r(673715),
                F = r.n(R),
                W = (r(568421), r(274305)),
                B = r(140188),
                L = r(641242),
                M = r(166224);

            function V(e) {
                const t = e.shortSymbol(),
                    r = e.get("symbol");
                return {
                    id: "fired:price:" + e.id,
                    fired: new Date(e.get("fireTime")),
                    type: W.AlertNotificationType.Fired,
                    symbol: r,
                    desktopNotificationTitle: (0, n.t)("Alert on {shortSymbol}").format({
                        shortSymbol: t
                    }),
                    dialogTitle: (0, n.t)("Alert on {shortSymbol}").format({
                        shortSymbol: `<a data-symbol="${r}" class="js-symbol" href="${(0,M.getChartSymbolPageUrl)(r)}" target="_blank">${t}</span>`
                    }),
                    dialogSubTitle: e.get("name") || "",
                    description: e.get("description") || "",
                    title: t,
                    alertId: Number(e.get("alertId")),
                    alertCategory: B.AlertCategory.Price,
                    alertName: e.get("name") || "",
                    eventId: e.get("id"),
                    notifyWith: {
                        email: !!e.get("sendEmail"),
                        popup: !!e.get("showPopup"),
                        sms: !!e.get("sendSms"),
                        sound: !!e.get("playSound")
                    },
                    soundParams: {
                        duration: e.get("soundDuration") || 0,
                        name: e.get("soundFile") || L.DEFAULT_SOUNDS.alert
                    }
                }
            }

            function j(e) {
                if ("fire_control" === e.reason) {
                    const t = F().shortName(e.symbol),
                        r = 6e4,
                        o = new Date(Math.round(Date.now() / r) * r);
                    return {
                        id: `fire_control:price:${e.alertId}:${o.getTime()/1e3}`,
                        fired: o,
                        type: W.AlertNotificationType.FireControl,
                        symbol: e.symbol,
                        desktopNotificationTitle: t + (0, n.t)("The alert is triggered too often"),
                        description: e.description,
                        title: t,
                        alertId: e.alertId,
                        alertCategory: B.AlertCategory.Price,
                        alertName: e.alertName || "",
                        notifyWith: {
                            popup: !0
                        }
                    }
                }
                return null
            }
            var U = r(529569),
                H = r(896276),
                J = r.n(H),
                G = r(805958),
                $ = r(518514),
                z = r(818771),
                X = r(317476),
                Y = r(88425),
                K = r(272316),
                Q = r(918184);
            const Z = "cancelled: new alert already generating",
                ee = (0, y.getLogger)("Alerts.Price.Dispatcher"),
                te = e => (0, Y.cutString)(e, 100);

            function re() {
                this._loading = {}, this._alertVersioning = new l.AlertVersioning, this._lastGenIds = {}, this._notifierPromise = null, this._onPushStreamMessage = new(J()), this._onPushStreamStatusChanged = e => {
                    e === G.ConnectionStatus.Open && this._onPushStreamMessage.fire({
                        source: "host",
                        data: {
                            m: "pushstream_ready"
                        }
                    })
                }, this.alerts = new(K.Collection.extend({
                    model: c.Alert
                })), this.events = new(K.Collection.extend({
                    comparator: function(e, t) {
                        var r = e.get("fireTime"),
                            n = t.get("fireTime");
                        return r && n ? n - r : r ? n ? void 0 : 1 : -1
                    },
                    model: a()
                })), this._attachHandlers()
            }

            function ne(e) {
                e.forEach(e => e.set("selected", !1))
            }

            function oe(e, t) {
                e.forEach(e => {
                    e !== t && e.set("selected", !1)
                })
            }

            function ie(e) {
                const t = new Date;
                e.get("expired") < t && (t.setMonth(t.getMonth() + 1), e.set("expired", t))
            }

            function se(e, t) {
                return Promise.all(e.map((function(e) {
                    const n = e.id,
                        o = (0, A.server2clientParams)(e);
                    return t(o).catch(r("Migration failed", n)).then(e => e && new c.Alert(e)).catch(r("Alert creation failed", n))
                }))).then(e => e.filter(e => null !== e));

                function r(e, t) {
                    return r => (ee.logError(`${e}. Alert ID: ${t}. Error: ${r}`), null)
                }
            }

            function ae(e, t) {
                e.script = t.IL, t.inputs && (e.inputs = t.inputs), t.genAlertData && (e.gen_alert_data = t.genAlertData)
            }

            function le(e, ...t) {
                "function" == typeof e && e.apply(this, t)
            }
            re.checkProPermissions = function(e) {
                    return e.get("sendTrueSms") && !(0, m.enabled)(v.ProductFeatures.ALERTS_TRUE_SMS) ? ((0, x.showGoProAlertsTrueSmsDialog)(), !1) : e.get("noExpiration") && !(0, m.enabled)(v.ProductFeatures.ALERTS_NO_EXPIRATION) ? (I(), !1) : "string" != typeof e.get("webhookUrl") || (0, m.enabled)(v.ProductFeatures.ALERTS_WEBHOOK) ? !!(0,
                        N.canPlaceAlertOnResolution)(e.get("resolution")) || ((0, O.showGoProAlertsOnSecondsDialog)(), !1) : ((0, U.showGoProAlertsWebhookDialog)(), !1)
                }, re.getAnalyticsHeaders = function(e, t) {
                    return {
                        "X-Analytics-Price-Alert-Condition": String(e),
                        "X-Analytics-Price-Alert-Action-Source": String(t)
                    }
                }, re.prototype._onLoginStateChange = function(e) {
                    is_authenticated ? (e || setTimeout(this.showOfflineEvents.bind(this), 1), this._refreshPushStream()) : (this.alerts.reset(), this.events.reset(), this._alertVersioning.cancelAllPossibleExtraUpdates()), this._offlineEventsRequestWasSent = !1, this._fullListWasRequested = !1
                }, re.prototype._attachHandlers = function() {
                    var e = this;

                    function t(t) {
                        var r = e.chartWidget(),
                            n = r && r.hasModel() ? r.model() : null;
                        if (n) {
                            var o = n.selection().dataSources().some((function(e) {
                                return e.hasAlert.value() && e.alertId() === t.id
                            }));
                            t.set("selected", o)
                        }
                    }
                    loginStateChange.subscribe(this, this._onLoginStateChange.bind(this)), this._onLoginStateChange(!0), e.alerts.on("add", r => {
                        t(r),
                            function(t) {
                                if (t.isDrawing() && e._chartWidgetCollection) {
                                    var r = t.get("extra").drawing();
                                    e._chartWidgetCollection.getAll().forEach((function(e) {
                                        e.applyAlertIdByExternalSource(r.id, t.id)
                                    }))
                                }
                            }(r)
                    }).on("change:selected", (t, r, n) => {
                        if (r) {
                            var o = e.alerts;
                            ne(e.events), oe(o, t)
                        }
                    }).on("change:id", t).on("destroy", t => {
                        t.isNew() || e.events.where({
                            alertId: t.id
                        }).forEach((function(e) {
                            e.destroy()
                        }))
                    }), e.events.on("change:selected", (t, r, n) => {
                        var o = e.events.models;
                        r && (ne(e.alerts), oe(o, t))
                    }), e.alerts.on("change:id", t => {
                        let r = !1;
                        for (const n of e.alerts.models) n.id === t.id && (r ? ee.logWarn(`Two alerts share the same id ${t.id}, which may lead to undefined behaviour`) : r = !0)
                    }), q.TVXWindowEvents.on("alertevents-deleted", e => {
                        "" === e ? this.events.reset() : this.events.remove(JSON.parse(e))
                    })
                }, re.prototype.showOfflineEvents = function() {
                    if (!window.is_authenticated || this._offlineEventsRequestWasSent) return Promise.resolve();
                    this._offlineEventsRequestWasSent = !0;
                    return Promise.all([this.sendRequest({
                        method: "get_offline_events",
                        preventMaintenanceDialog: !0,
                        params: {}
                    }), this.getAlertNotifier()]).then(([{
                        fires: e,
                        fire_controls: t
                    }, r]) => {
                        const n = Object.keys(e),
                            o = Object.keys(t),
                            i = new Set([...n, ...o]);
                        i.size > 0 && this.sendRequest({
                            method: "clear_shown_events",
                            preventMaintenanceDialog: !0,
                            params: {
                                alerts_ids: Array.from(i).map(e => parseInt(e))
                            }
                        }).catch(e => {
                            ee.logError("Could not mark offline events as shown: " + e)
                        });
                        const s = n.map(t => e[t].latest_event).sort((e, t) => e.id - t.id);
                        for (const t of s) {
                            const n = new(a())((0, A.server2clientParams)(t));
                            this.events.add(n), n.trigger("fired", n);
                            const o = this.alerts.get(n.get("alertId"));
                            void 0 !== o && o.trigger("fired", o), r.addNotification({ ...V(n),
                                count: e[n.get("alertId")].events_count
                            })
                        }
                        s.length > 0 && this.events.trigger("offline_events");
                        for (const e of Object.values(t)) r.addNotification(j({
                            alertId: e.id,
                            alertName: e.name,
                            description: e.name || e.desc,
                            reason: "fire_control",
                            symbol: e.sym
                        }))
                    }, e => {
                        ee.logError("Failed to get offline events: " + e)
                    })
                }, re.prototype._refreshPushStream = function() {
                    _().off("alert"), _().offStatus(this._onPushStreamStatusChanged), is_authenticated && (_().on("alert", this._onMessage.bind(this)),
                        _().onPrivateStatus(this._onPushStreamStatusChanged))
                }, re.prototype._onMessage = function(e) {
                    var t, r, n, o, i, s = this;
                    if (e) switch (ee.logNormal(e), r = JSON.parse(e), this._onPushStreamMessage.fire({
                        source: "alert",
                        data: r
                    }), n = r.m, t = "new_alerts" === n ? r.p.alerts.map(A.server2clientParams) : (0, A.server2clientParams)(r.p), n) {
                        case "alert_running":
                            s._alertVersioning.cancelPossibleExtraUpdate(t.id), s._alertVersioning.migrate(t).then((function(e) {
                                (o = s.alerts.get(e.id)) ? o.set(e): s.alerts.add(e, {
                                    at: 0
                                })
                            }));
                            break;
                        case "new_alerts":
                            for (const e of t) s.alerts.add(e);
                            break;
                        case "alert_stopped":
                            if (o = s.alerts.get(t.id)) {
                                var l = {
                                    active: !1,
                                    stopReason: t.stopReason,
                                    error: t.error
                                };
                                o.set(l)
                            }
                            "fire_control" === t.stopReason && s.getAlertNotifier().then(e => {
                                const r = j({
                                    alertId: t.id,
                                    description: t.name || t.description,
                                    reason: t.stopReason,
                                    symbol: t.symbol
                                });
                                r && (e.addNotification(r), this.sendRequest({
                                    method: "clear_shown_events",
                                    preventMaintenanceDialog: !0,
                                    params: {
                                        alerts_ids: [t.id]
                                    }
                                }))
                            });
                            break;
                        case "alert_deleted":
                            if (s._alertVersioning.cancelPossibleExtraUpdate(t.id), o = s.alerts.get(t.id)) {
                                const e = s.chartWidget();
                                if (o.isDrawing() && e) {
                                    var c = o.get("extra").drawing();
                                    e.deleteAlertByExternalSource(c.id, o.id)
                                }
                                o.destroy()
                            }
                            break;
                        case "event":
                            this.getAlertNotifier().then(function(e) {
                                i = new(a())({ ...t
                                }), s.events.add(i);
                                const r = V(i);
                                e.addNotification(r), i.trigger("fired", i), i.trigger("fired:online", i);
                                const n = s.alerts.get(t.alertId);
                                void 0 !== n && (n.set({
                                    fireTime: t.fireTime
                                }), n.trigger("fired", n)), this.sendRequest({
                                    method: "clear_shown_events",
                                    preventMaintenanceDialog: !0,
                                    params: {
                                        alerts_ids: [t.alertId]
                                    }
                                })
                            }.bind(this))
                    }
                }, re.prototype.cloneAlert = function(e, t = {}) {
                    if (!(0, $.isAlertCloneable)(e)) return "function" == typeof t.error && t.error("Cannot clone alert"), void("function" == typeof t.complete && t.complete());
                    const r = e.getLocalClone();
                    ie(r), this.alerts.add(r), this.createAlert(r, { ...t,
                        eventName: "clone"
                    })
                }, re.prototype.detachAlert = function(e) {
                    var t = this.alerts.get(e);
                    t && t.destroy()
                }, re.prototype.createLocalAlert = function(e, t) {
                    var r;
                    return t && function(e) {
                        if (!e) throw new Error("Can't create alert. 'params' is required");
                        for (var t = ["symbol", "resolution", "expired", "autoDeactivation", "sendEmail", "sendSms", "sendTrueSms", "showPopup", "playSound", "description", "script"], r = [], n = t.length - 1; n >= 0; n--) {
                            var o = t[n];
                            o in e || r.push(o)
                        }
                        r.length && ee.logError("[Alerts] Can't create alert. " + r.join(" ,") + (1 === r.length ? " is" : " are") + " required")
                    }(e), r = new c.Alert(e), this.alerts.add(r), r
                }, re.prototype.createAlert = function(e, t = {}) {
                    const r = this;

                    function n(e, r) {
                        "function" == typeof t.complete && t.complete(), "function" == typeof t.error && t.error(e, r)
                    }
                    if (e instanceof c.Alert) {
                        if (re.checkProPermissions(e)) {
                            var o = Date.now(),
                                i = e.prepareToSend();
                            return r._generateScriptWithCancellation(e).then((function(n) {
                                return ae(i, n), r.sendRequest({
                                    headers: re.getAnalyticsHeaders(e.get("extra").conditionId(), t.actionSource),
                                    method: "create_alert",
                                    params: i,
                                    success: function(n) {
                                        n = (0, A.server2clientParams)(n || {});
                                        const o = r.alerts.get(n.id);
                                        o ? (r.alerts.remove(e), e = o) : (n.active = !0, e.set(n)), r._gaTrackEvent(t.eventName || "create", e, t.eventLabel),
                                            "function" == typeof t.success && t.success(e)
                                    },
                                    complete: function() {
                                        var r = Date.now() - o;
                                        b.telemetry.sendReport("alerts", "full_time_frame", {
                                            value: r
                                        }), "function" == typeof t.complete && t.complete(e)
                                    },
                                    error: t.error
                                })
                            })).catch((function(e) {
                                if (e === Z) return ee.logNormal("Alert generation is cancelled because next alert generation is started"), Z;
                                "function" == typeof t.error && t.error("Can't generate source code: " + e), "function" == typeof t.complete && t.complete()
                            }))
                        }
                        n("cannot create alert with current pro plan", !0)
                    } else n("'alert' should be instance of Alert")
                }, re.prototype.stopAlert = function(e, t = {}) {
                    const r = this;
                    let n, o;
                    e instanceof c.Alert ? (n = e, o = n.get("id")) : (o = e, n = r.alerts.get(o)), o ? r.sendRequest({
                        method: "stop_alert",
                        params: {
                            id: o
                        },
                        success: function() {
                            r._gaTrackEvent("stop"), n && n.set("active", !1), "function" == typeof t.success && t.success()
                        },
                        error: t.error,
                        complete: t.complete
                    }) : ee.logError("Alert id is required to stop alert")
                }, re.prototype.stopAllAlerts = function(e = {}) {
                    const t = this,
                        r = {
                            cross_int: !0
                        };
                    let o;
                    e.symbol && (r.symbol = e.symbol), e.resolution && (r.resolution = e.resolution), e.showConfirm && (o = e.symbol || e.resolution ? {
                        title: (0, n.t)("Stop filtered alerts"),
                        text: (0, n.t)("Need a quick break from filtered alerts?")
                    } : {
                        title: (0, n.t)("Stop all alerts"),
                        text: (0, n.t)("Need a quick break from your alerts?")
                    }), t.sendRequest({
                        method: "stop_all",
                        params: r,
                        success: function() {
                            t._gaTrackEvent("stop_all"), t.alerts.each((function(e) {
                                r.symbol && r.symbol !== e.get("symbol") || r.resolution && r.resolution !== e.get("resolution") || e.set("active", !1)
                            })), "function" == typeof e.success && e.success()
                        },
                        confirmation: o,
                        error: e.error,
                        complete: e.complete
                    })
                }, re.prototype.deleteAlert = function(e, t = {}) {
                    const r = this;
                    let o, i, s;
                    if (e instanceof c.Alert ? (i = e, s = i.get("id")) : (s = e, i = r.alerts.get(s)), i && i.isNew()) return i.destroy(), void("function" == typeof t.complete && t.complete());
                    if (s) {
                        if (t.showConfirm) {
                            const e = te(i ? i.title() : s),
                                t = (0, n.t)("Do you really want to delete your alert '{alert}'?").format({
                                    alert: e
                                });
                            o = {
                                title: (0, n.t)("Delete alert"),
                                text: t
                            }
                        }
                        r.sendRequest({
                            method: "delete_alert",
                            params: {
                                id: s
                            },
                            success: function() {
                                r._gaTrackEvent("delete"), "function" == typeof t.success && t.success(), i && i.destroy()
                            },
                            error: t.error,
                            cancel: t.cancel,
                            complete: t.complete,
                            confirmation: o
                        })
                    } else ee.logError("Alert id is required to delete alert")
                }, re.prototype.deleteAllAlerts = function(e = {}) {
                    const t = this,
                        r = {
                            crossInterval: !0
                        };
                    let o;
                    e.symbol && (r.symbol = e.symbol), e.resolution && (r.resolution = e.resolution), "boolean" == typeof e.active && (r.active = e.active), e.showConfirm && (o = !1 !== r.active || r.symbol || r.resolution ? r.symbol || r.resolution || r.active ? {
                        title: (0, n.t)("Delete filtered alerts"),
                        text: (0, n.t)("Do you really want to delete filtered alerts?")
                    } : {
                        title: (0, n.t)("Delete all alerts"),
                        text: (0, n.t)("Ready to delete your alerts and start over?")
                    } : {
                        title: (0, n.t)("Delete inactive alerts"),
                        text: (0, n.t)("Let’s delete your inactive alerts and make new ones?")
                    }), t.sendRequest({
                        method: "delete_all",
                        params: r,
                        success: function() {
                            var n, o = {};
                            for (t._gaTrackEvent("delete_all"), r.symbol && (o.symbol = r.symbol), r.resolution && (o.resolution = r.resolution),
                                "boolean" == typeof r.active && (o.active = r.active), n = t.alerts.findWhere(o); n;) n.destroy(), n = t.alerts.findWhere(o);
                            "function" == typeof e.success && e.success()
                        },
                        error: e.error,
                        complete: e.complete,
                        confirmation: o
                    })
                }, re.prototype.restartAlert = function(e, t = {}) {
                    const r = this;
                    let n, o;
                    if (e instanceof c.Alert ? n = e : (o = e, n = r.alerts.get(o)), n) {
                        if (ie(n), !re.checkProPermissions(n)) return "function" == typeof t.complete && t.complete(), void("function" == typeof t.error && t.error("cannot restart alert with current pro plan", !0));
                        var i = Date.now(),
                            s = n.prepareToSend();
                        return r._generateScriptWithCancellation(n).then((function(e) {
                            return ae(s, e), r.sendRequest({
                                headers: re.getAnalyticsHeaders(n.get("extra").conditionId(), t.actionSource),
                                method: "restart_alert",
                                params: s,
                                success: function() {
                                    r._gaTrackEvent("restart", n), n.set("active", !0), "function" == typeof t.success && t.success(n)
                                },
                                complete: function() {
                                    var e = Date.now() - i;
                                    b.telemetry.sendReport("alerts", "full_time_frame", {
                                        value: e
                                    }), "function" == typeof t.complete && t.complete(n)
                                },
                                error: t.error
                            })
                        })).catch((function(e) {
                            if (e === Z) return ee.logNormal("Alert generation is cancelled because next alert generation is started"), Z;
                            "function" == typeof t.error && t.error("Can't generate alert source code for alert #" + o)
                        }))
                    }
                    r.requestAlert(o, {
                        success: function(e) {
                            e ? r.restartAlert(e, t) : ("function" == typeof t.error && t.error("Can't find alert " + o), "function" == typeof t.complete && t.complete())
                        }
                    })
                }, re.prototype._generateScriptWithCancellation = function(e) {
                    var t = this;
                    null == t._lastGenIds[e.cid] && (t._lastGenIds[e.cid] = 0), t._lastGenIds[e.cid]++;
                    var r = t._lastGenIds[e.cid];
                    return new Promise((function(t, r) {
                        const n = e.get("extra");
                        let o = null,
                            i = "";
                        if (n.isValid() ? (o = n.toGenAlertJSON(e.get("description")), null === o && (i = "Can't generate alert JSON")) : i = "Can't generate alert on invalid AlertExtra", i) return ee.logError(i), void r(i);
                        d().generateAlert(JSON.stringify(o)).then((function(e, r, n, o) {
                            t({
                                IL: r,
                                inputs: n,
                                genAlertData: o
                            })
                        }), r)
                    })).then((function(n) {
                        return t._lastGenIds[e.cid] !== r ? Promise.reject(Z) : (e.set("script", n.IL), n)
                    }))
                }, re.prototype.restartAllAlerts = function(e = {}) {
                    const t = this,
                        r = {
                            crossInterval: !0
                        };
                    let o;
                    e.symbol && (r.symbol = e.symbol), e.resolution && (r.resolution = e.resolution), "boolean" == typeof e.active && (r.active = e.active), e.showConfirm && (o = e.symbol || e.resolution ? {
                        title: (0, n.t)("Restart filtered alerts"),
                        text: (0, n.t)("Ready to bring filtered alerts back to life?")
                    } : {
                        title: (0, n.t)("Restart all inactive alerts"),
                        text: (0, n.t)("Ready to bring your alerts back to life?")
                    });
                    t.alerts.every(re.checkProPermissions) && t.sendRequest({
                        method: "restart_all",
                        params: r,
                        success: function() {
                            t._gaTrackEvent("restart_all"), t.alerts.each((function(e) {
                                r.symbol && r.symbol !== e.get("symbol") || r.resolution && r.resolution !== e.get("resolution") || e.set("active", !0)
                            })), "function" == typeof e.success && e.success()
                        },
                        error: e.error,
                        complete: e.complete,
                        confirmation: o
                    })
                }, re.prototype.requestAlert = function(e, t = {}) {
                    const r = this,
                        n = parseInt(e);

                    function o(e) {
                        var o = r.alerts.get(n) || null;
                        return (o || e) && ("function" == typeof t.success && t.success(o), "function" == typeof t.complete && t.complete()), !!o
                    }

                    function i() {
                        r.sendRequest({
                            method: "get_alert",
                            preventMaintenanceDialog: !0,
                            params: {
                                id: n
                            },
                            success: function(e) {
                                var n, o = e.alert;
                                o = (0, A.server2clientParams)(o), r._alertVersioning.migrate(o).then((function(e) {
                                    n = new c.Alert(e), r.alerts.add(n), "function" == typeof t.success && t.success(n)
                                })).catch((function(e) {
                                    "function" == typeof t.error && t.error(e)
                                }))
                            },
                            complete: t.complete,
                            error: function(r) {
                                "function" == typeof t.error ? t.error(r) : ee.logError("Error in getting alert " + e + (r ? ": " + r : ""))
                            }
                        })
                    }!0 === t.fromCache ? o(!0) : !1 === t.fromCache ? i() : o() || i()
                }, re.prototype.getAlertSync = function(e) {
                    return this.alerts.get(e) || null
                }, re.prototype.ensureFullAlertsList = async function(e = {}) {
                    try {
                        if (window.is_authenticated || (this._fullListWasRequested = !0), this._fullListWasRequested) return void le(e.success);
                        const t = await this.sendRequest({
                            method: "list_alerts",
                            preventMaintenanceDialog: !0,
                            params: {
                                limit: 2e3
                            }
                        });
                        if (!t.alerts || !Array.isArray(t.alerts)) throw new Error("Not valid params in alert list response");
                        const r = await se(t.alerts, e => this._alertVersioning.migrate(e));
                        this.alerts.set(r), this._fullListWasRequested = !0, le(e.success)
                    } catch (t) {
                        const r = String(t);
                        throw ee.logError(r), le(e.error, r), t
                    } finally {
                        le(e.complete)
                    }
                }, re.prototype.requestEventList = function(e = {}) {
                    const t = this,
                        r = {
                            sym: e.symbol,
                            res: e.resolution && e.resolution.toString ? e.resolution.toString() : void 0,
                            limit: e.limit,
                            before: e.before,
                            inc_cross_int: void 0 === e.includeCrossInterval || e.includeCrossInterval
                        };
                    e.aid && (r.aid = e.aid), this.sendRequest({
                        method: "list_events",
                        preventMaintenanceDialog: !0,
                        params: r,
                        success: function(r) {
                            let n = r.events;
                            n && Q.isArray(n) ? (n = Q.map(n, (function(e) {
                                const r = new(a())((0, A.server2clientParams)(e));
                                return t.events.add(r), r
                            })), "function" == typeof e.success && e.success(n)) : console.warn("[Alerts] Not valid params in event list response")
                        },
                        error: e.error,
                        complete: e.complete
                    })
                }, re.prototype.deleteEvents = function(e = {}) {
                    const t = e.ids;
                    if (t && 0 === t.length) return r(), void("function" == typeof e.complete && e.complete());

                    function r() {
                        "function" == typeof e.success && e.success()
                    }
                    this.sendRequest({
                        method: "delete_events",
                        params: t ? {
                            ids: t
                        } : void 0,
                        success: () => {
                            t ? this.events.remove(t) : this.events.reset(), q.TVXWindowEvents.emit("alertevents-deleted", t ? JSON.stringify(t) : ""), r()
                        },
                        error: e.error,
                        complete: e.complete
                    })
                }, re.prototype.stopAlerts = function(e) {
                    const {
                        ids: t,
                        success: r,
                        error: n,
                        complete: o
                    } = e;
                    if (0 === t.length) return le(r), void le(o);
                    this.sendRequest({
                        method: "stop_alerts",
                        params: {
                            ids: t
                        },
                        success: () => {
                            this._gaTrackEvent("stop_alerts");
                            for (const e of t) {
                                const t = this.alerts.get(e);
                                t && t.set("active", !1)
                            }
                            le(r)
                        },
                        error: n,
                        complete: o
                    })
                }, re.prototype.restartAlerts = function(e) {
                    const {
                        ids: t,
                        success: r,
                        error: n,
                        complete: o
                    } = e;
                    if (0 === t.length) return le(r), void le(o);
                    const i = [];
                    for (const e of t) {
                        const t = this.alerts.get(e);
                        t && i.push(t)
                    }
                    if (!i.every(re.checkProPermissions)) return le(n, "Cannot restart alerts with current pro plan"), void le(o);
                    this.sendRequest({
                        method: "restart_alerts",
                        params: {
                            ids: t
                        },
                        success: () => {
                            this._gaTrackEvent("restart_alerts");
                            for (const e of i) e.set("active", !0);
                            le(r)
                        },
                        error: e => {
                            e in P && E(e), le(n)
                        },
                        complete: o
                    })
                },
                re.prototype.cloneAlerts = function(e) {
                    const {
                        success: t,
                        error: r,
                        complete: n
                    } = e, o = e.ids.filter(e => {
                        const t = this.alerts.get(e);
                        return Boolean(t && (0, $.isAlertCloneable)(t))
                    });
                    if (0 === o.length) return le(t), void le(n);
                    this.sendRequest({
                        method: "clone_alerts",
                        params: {
                            ids: o
                        },
                        success: () => {
                            this._gaTrackEvent("clone_alerts"), le(t)
                        },
                        error: r,
                        complete: n
                    })
                }, re.prototype.deleteAlerts = function(e) {
                    const {
                        ids: t,
                        showConfirm: r,
                        success: o,
                        error: i,
                        complete: s
                    } = e;
                    if (0 === t.length) return le(o), void le(s);
                    let a;
                    if (r)
                        if (1 === t.length) {
                            const e = t[0],
                                r = this.alerts.get(e),
                                o = r ? r.attributes.name || r.attributes.description || r.title() : e,
                                i = (0, n.t)("Do you really want to delete your alert '{alert}'?").format({
                                    alert: te(o)
                                });
                            a = {
                                title: (0, n.t)("Delete alert"),
                                text: i
                            }
                        } else a = {
                            title: (0, n.t)("Delete selected alerts"),
                            text: (0, n.t)("Do you really want to delete selected alerts?")
                        };
                    this.sendRequest({
                        method: "delete_alerts",
                        params: {
                            ids: t
                        },
                        success: () => {
                            this._gaTrackEvent("delete_alerts");
                            for (const e of t) {
                                const t = this.alerts.get(e);
                                t && t.destroy()
                            }
                            le(o)
                        },
                        error: i,
                        complete: s,
                        confirmation: a
                    })
                }, re.prototype.sendRequest = function(e) {
                    const t = e.method,
                        o = (0, A.client2serverParams)(e.params);
                    if (function(e, t) {
                            if (["create_alert", "restart_alert"].includes(e)) {
                                var r = t.extra && JSON.parse(t.extra),
                                    n = r && r.condition;
                                ["strategy", "alerts", "strategy_and_alerts"].includes(n.id) && (t.ns_only_fire = !0)
                            }
                        }(t, o), z.alertsMaintenanceTracker.sync(), z.alertsMaintenanceTracker.value()) return a("maintenance"), l(), Promise.reject("maintenance");
                    if (e.confirmation) {
                        const {
                            title: t,
                            text: r
                        } = e.confirmation;
                        return new Promise((function(o, s) {
                            (0, C.showConfirm)({
                                title: t || (0, n.t)("Alert"),
                                text: r,
                                onConfirm: ({
                                    dialogClose: e
                                }) => {
                                    const t = i();
                                    return t.then((function(t) {
                                        return e(), t
                                    })).catch((function(e) {
                                        return e
                                    })), o(t), t
                                },
                                onClose: () => {
                                    "function" == typeof e.cancel && e.cancel(), l()
                                }
                            })
                        }))
                    }
                    return i();

                    function i() {
                        const r = (0, g.sendRequest)({
                            method: t,
                            params: o,
                            noCache: e.noCache,
                            headers: e.headers
                        });
                        return r.then(s, a), r
                    }

                    function s(t) {
                        if ("function" == typeof e.success) {
                            var r = (0, A.server2clientParams)(t);
                            e.success(r)
                        }
                        return l(), r
                    }

                    function a(t) {
                        var n = !1;
                        return t in P ? (E(t), n = !0) : "max_total_alerts_count_exceeded" === t ? (Promise.all([r.e(99459), r.e(26822), r.e(74814), r.e(18436), r.e(84479), r.e(72845), r.e(11216), r.e(48263), r.e(3091)]).then(r.bind(r, 475958)).then(e => e.showWarningAlertsMaxTotalCountExceededImpl()), n = !0) : "pro_plan_expired" === t ? (I(), n = !0) : "maintenance" === t && (e.preventMaintenanceDialog || (setTimeout(T, 0), n = !0)), "function" == typeof e.error ? e.error(t, n) : "maintenance" === t ? ee.logNormal("Alerts maintenance") : t && ee.logError("Reason: " + t), l(), t
                    }

                    function l() {
                        "function" == typeof e.complete && e.complete()
                    }
                }, re.prototype.setChartWidgetCollection = function(e) {
                    this._chartWidgetCollection = e
                }, re.prototype.chartWidget = function() {
                    var e = null;
                    return this._chartWidgetCollection && (e = this._chartWidgetCollection.activeChartWidget.value() || null), e
                }, re.prototype.removeAlertFromAllChartsSilently = function(e, t) {
                    this._chartWidgetCollection && this._chartWidgetCollection.getAll().forEach((function(r) {
                        r.deleteAlertByExternalSource(e, t)
                    }))
                },
                re.prototype._gaTrackEvent = function(e, t, r) {
                    var n;
                    (0, h.trackEvent)("alert", e, r), "create" === e && t instanceof c.Alert && (n = t.get("extra"), (0, h.trackEvent)("alert", "create__style", function(e) {
                        var t = e && e.getMainSeries(),
                            r = t && t.getStyle && t.getStyle();
                        return r && p.STYLE_SHORT_NAMES.hasOwnProperty(r) ? p.STYLE_SHORT_NAMES[r] : "unknown"
                    }(n)), (0, h.trackEvent)("alert", "create__condition", function(e) {
                        var t = e.conditionId();
                        return e.prepareAlertConditions()[t] && (t = "pine_condition"), t || "unknown"
                    }(n)), (0, h.trackEvent)("alert", "create__frequency", t.get("frequency") || "unknown"), t.isPrice() ? (0, h.trackEvent)("alert", "create__on", "price") : t.isDrawing() ? (0, h.trackEvent)("alert", "create__on", "drawing") : t.isMoving() ? (0, h.trackEvent)("alert", "create__on", "moving") : n.band() || n.upperBand() || n.lowerBand() ? (0, h.trackEvent)("alert", "create__on", "study") : (0, h.trackEvent)("alert", "create__on", "unknown"))
                }, re.prototype.getAlertDialogInvocations = function() {
                    return X.alertEditorInvocationHandler.getDialogInvocations()
                }, re.prototype.openCreateDialog = function(e) {
                    (0, o.invokeAlertEditor)({
                        type: "create_alert",
                        ...e
                    })
                }, re.prototype.openEditDialog = function(e, t = {}) {
                    const r = this;
                    let s, a;
                    const l = e => t.onAborted && t.onAborted(e);
                    !t.dataSourceHub && r.chartWidget() && (t.dataSourceHub = r.chartWidget().model().model()), e instanceof c.Alert ? s = e : (a = e, s = r.alerts.get(a)), s ? (t = Q.extend(t, {
                        alert: s,
                        type: "edit_alert"
                    }), (0, o.invokeAlertEditor)(t)) : a ? r.requestAlert(a, {
                        success: function(e) {
                            r.openEditDialog(e, t)
                        },
                        error: function(e) {
                            "not_exists" === e && (0, k.showNoticeDialog)({
                                type: "modal",
                                title: (0, n.t)("Alert"),
                                content: (0, n.t)("Alert does not exist.")
                            }), "function" == typeof t.error && t.error(e), l(i.AlertEditorAbortReason.AlertIsInvalid)
                        }
                    }) : (console.error("[Alerts] alert id is required to edit alert"), l(i.AlertEditorAbortReason.AlertIsInvalid))
                }, re.prototype.subscribeToPushStream = function(e) {
                    this._onPushStreamMessage.subscribe(null, e)
                }, re.prototype.unsubscribeFromPushStream = function(e) {
                    e ? this._onPushStreamMessage.unsubscribe(null, e) : this._onPushStreamMessage.unsubscribeAll(null)
                }, re.prototype.getAlertNotifier = function() {
                    if (null === this._notifierPromise) {
                        var e = this;
                        this._notifierPromise = (0, S.createAlertNotifier)().then((function(t) {
                            return t.onEditAlert.subscribe(null, (function(t, r, n) {
                                r === B.AlertCategory.Price && e.openEditDialog(t, { ...n,
                                    actionSource: "alert_notifier_edit"
                                })
                            })), t.onRestartAlert.subscribe(null, (function(t, r, n) {
                                r === B.AlertCategory.Price && e.restartAlert(t, { ...n,
                                    actionSource: "alert_notifier_restart"
                                })
                            })), t
                        }))
                    }
                    return this._notifierPromise
                }
        },
        166224: (e, t, r) => {
            "use strict";

            function n(e) {
                const t = new URL("chart", window.location.origin);
                return t.searchParams.append("symbol", e), t.toString()
            }
            r.d(t, {
                getChartSymbolPageUrl: () => n
            })
        },
        669491: (e, t, r) => {
            "use strict";
            r.d(t, {
                createGoProAlertsTrueSmsDialog: () => i,
                showGoProAlertsTrueSmsDialog: () => s
            });
            var n = r(120220),
                o = r(423946);

            function i() {
                return (0, o.createGoProDialog)({
                    feature: "alertsTrueSms",
                    goOnMarkets: !1,
                    isTrialAvailable: !0,
                    upgradeMessage: (0, n.t)("Upgrade now")
                })
            }

            function s() {
                i()
            }
        },
        423946: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                onGoProDialog: () => i,
                createGoProDialog: () => s
            });
            const n = new Set,
                o = [];

            function i(e, t) {
                o.push(e), t && t.forEach(e => {
                    n.add(e)
                })
            }
            async function s(e) {
                var t;
                if (o.forEach(t => {
                        t(e.feature)
                    }), n.has(e.feature)) return;
                const i = await Promise.all([r.e(23876), r.e(26822), r.e(69756), r.e(88278), r.e(74814), r.e(36778), r.e(18436), r.e(3178), r.e(93576), r.e(11216), r.e(43424), r.e(14563), r.e(38578), r.e(63580), r.e(78451), r.e(5246)]).then(r.bind(r, 155175));
                await (null === (t = window.pro) || void 0 === t ? void 0 : t.ensureValidShopConf()), i.renderGoproDialog(e)
            }
            window.TradingView.createGoProDialog = s
        },
        388674: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                createNoticeDialog: () => i,
                showNoticeDialog: () => s
            });
            var n = r(120220);
            const o = {
                width: 400,
                destroyOnClose: !0,
                title: (0, n.t)("Notification"),
                content: (0, n.t)("You are notified"),
                contentWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--no-border"><div class="tv-text"><p></p></div></div>',
                actionsWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--actions tv-dialog__section--no-border">',
                actions: [{
                    name: "ok",
                    type: "primary",
                    text: (0, n.t)("Ok"),
                    method: "close",
                    key: [13, 32]
                }]
            };
            async function i(e) {
                return (await Promise.all([r.e(70964), r.e(38817), r.e(91877), r.e(59456), r.e(25535), r.e(5058), r.e(11216), r.e(99752), r.e(64011), r.e(7562), r.e(34834)]).then(r.bind(r, 464161))).createDialog({ ...o,
                    ...e
                })
            }

            function s(e) {
                i(e).then(e => e.open())
            }
        },
        529569: (e, t, r) => {
            "use strict";
            r.d(t, {
                showGoProAlertsWebhookDialog: () => o
            });
            var n = r(423946);

            function o() {
                (0, n.createGoProDialog)({
                    feature: "alertsWebhook"
                })
            }
        },
        494972: (e, t, r) => {
            "use strict";

            function n(e) {
                return e.reduce((function(e, t, r) {
                    return ~e.indexOf(t) || e.push(t), e
                }), [])
            }
            r.r(t), r.d(t, {
                uniq: () => n
            })
        }
    }
]);