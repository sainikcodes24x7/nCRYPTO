(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [59958], {
        998562: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    AlertEditorAbortReason: () => r
                }),
                function(e) {
                    e.AlertIsInvalid = "alert-is-invalid", e.AlertsMaintenance = "alerts-maintenance", e.ChartModelNotFound = "chart-model-not-found", e.IsAlreadyPresent = "is-already-present", e.MainSeriesIsATR = "main-series-is-atr", e.MainSeriesIsInReplay = "main-series-is-in-replay", e.MainSeriesIsOffline = "main-series-is-offline", e.SourceIsDangerous = "source-is-dangerous", e.SymbolInfoTimeout = "symbol-info-timeout", e.SymbolIsInvalid = "symbol-is-invalid", e.SymbolCurrencyConverted = "symbol-currency-converted", e.SymbolUnitConverted = "symbol-unit-converted", e.SymbolCurrencyAndUnitConverted = "symbol-currency-and-unit-converted", e.SymbolIsEconomics = "symbol-is-economics", e.UnsupportedResolution = "unsupported-resolution", e.ManualAbort = "manual-abort", e.MisleadingPriceScale = "misleading-price-scale"
                }(r || (r = {}))
        },
        811132: (e, t, n) => {
            "use strict";
            n.d(t, {
                getAlertDialogType: () => A,
                shouldAbortAlertEditor: () => y,
                showAbortExplainingDialog: () => v,
                ensureSeriesIsNotOffline: () => S
            });
            var r = n(120220),
                o = n(279407),
                i = n(998562),
                a = n(697786),
                s = n(620554),
                l = n(152946),
                c = n(317476),
                u = n(836989),
                d = n(79200),
                b = n(818771);

            function A(e) {
                return e.alert ? e.type || "edit_alert" : "create_alert"
            }

            function y(e) {
                var t;
                if (b.alertsMaintenanceTracker.value()) return i.AlertEditorAbortReason.AlertsMaintenance;
                if (!e.alert && !e.dataSourceHub) return i.AlertEditorAbortReason.ChartModelNotFound;
                if (!c.alertEditorInvocationHandler.isAllowedToInvoke(e)) return i.AlertEditorAbortReason.IsAlreadyPresent;
                const n = null === (t = e.dataSourceHub) || void 0 === t ? void 0 : t.mainSeries();
                if (n && f(n)) return i.AlertEditorAbortReason.MainSeriesIsOffline;
                if (n && function(e) {
                        return e.status() === a.STATUS_INVALID_SYMBOL
                    }(n)) return i.AlertEditorAbortReason.SymbolIsInvalid;
                if (n && n.isConvertedToOtherCurrency() && n.isConvertedToOtherUnit()) return i.AlertEditorAbortReason.SymbolCurrencyAndUnitConverted;
                if (n && n.isConvertedToOtherCurrency()) return i.AlertEditorAbortReason.SymbolCurrencyConverted;
                if (n && n.isConvertedToOtherUnit()) return i.AlertEditorAbortReason.SymbolUnitConverted;
                const r = A(e);
                if ("create_alert" === r && n && function(e) {
                        var t;
                        return "ATR" === (null === (t = e.stateForAlert().styleInputs) || void 0 === t ? void 0 : t.style)
                    }(n)) return i.AlertEditorAbortReason.MainSeriesIsATR;
                if ("create_alert" === r && n && function(e) {
                        return e.isInReplay()
                    }(n)) return i.AlertEditorAbortReason.MainSeriesIsInReplay;
                if (n && function(e) {
                        const t = e.symbolInfo();
                        return null !== t && (0, s.isEconomicsSymbol)(t)
                    }(n)) return i.AlertEditorAbortReason.SymbolIsEconomics;
                const o = n ? n.interval() : l.linking.interval.value();
                return "create_alert" !== r || (0, u.canPlaceAlertOnResolution)(o) ? null : i.AlertEditorAbortReason.UnsupportedResolution
            }

            function f(e) {
                return e.status() === a.STATUS_OFFLINE
            }

            function v(e, t) {
                if (h.has(e)) return;
                h.add(e);
                const n = () => h.delete(e),
                    a = function(e) {
                        return new Map([
                            [i.AlertEditorAbortReason.UnsupportedResolution, "alertsOnSeconds"]
                        ]).get(e) || null
                    }(e);
                if (a) return void(0, d.reloginOrGoPro)({
                    feature: a,
                    actionAfterClose: n
                });
                const s = function(e, t) {
                    const n = r.t("Oops!"),
                        o = r.t("Alert editor could not be initialized"),
                        a = r.t("Ok");
                    return new Map([
                        [i.AlertEditorAbortReason.AlertsMaintenance, {
                            title: r.t("Alerts maintenance"),
                            text: r.t("We are doing some brief daily maintenance. Alerts will be back really soon, thanks for your patience!"),
                            buttonText: a
                        }],
                        [i.AlertEditorAbortReason.MainSeriesIsOffline, {
                            title: n,
                            text: ("create_alert" === t ? r.t("Cannot create an alert while offline") : r.t("Cannot edit an alert while offline")) + ". " + r.t("Please check your internet connection") + ".",
                            buttonText: a
                        }],
                        [i.AlertEditorAbortReason.SymbolIsInvalid, {
                            title: n,
                            text: "create_alert" === t ? r.t("Can't create alert on invalid symbol") : r.t("Can't edit alert on invalid symbol"),
                            buttonText: a
                        }],
                        [i.AlertEditorAbortReason.SymbolCurrencyAndUnitConverted, {
                            title: r.t("Both the currency and the unit have been converted!"),
                            text: "create_alert" === t ? r.t("It's not currently possible to create alerts on such a scale.") : r.t("It's not currently possible to edit alerts on such a scale."),
                            buttonText: r.t("Got it")
                        }],
                        [i.AlertEditorAbortReason.SymbolCurrencyConverted, {
                            title: r.t("A converted currency has been detected!"),
                            text: "create_alert" === t ? r.t("It's not currently possible to create alerts for this type of symbol.") : r.t("It's not currently possible to edit alerts for this type of symbol."),
                            buttonText: r.t("Got it")
                        }],
                        [i.AlertEditorAbortReason.SymbolUnitConverted, {
                            title: r.t("A converted unit has been detected!"),
                            text: "create_alert" === t ? r.t("It's not currently possible to create alerts for this type of symbol.") : r.t("It's not currently possible to edit alerts for this type of symbol."),
                            buttonText: r.t("Got it")
                        }],
                        [i.AlertEditorAbortReason.SymbolIsEconomics, {
                            title: r.t("Dang-it – Wrong symbol type!"),
                            text: r.t("Alerts aren't available right now for economics symbols."),
                            buttonText: r.t("Got it")
                        }],
                        [i.AlertEditorAbortReason.MainSeriesIsATR, {
                            title: r.t("Alert cannot be set on an ATR-based chart"),
                            text: r.t("Your alert won't trigger the way you expect it to! Inputs for ATR-based charts are recalculated each time you open a chart and are generally dependent on time. Please use the traditional chart type to set an alert with a static box size."),
                            buttonText: a
                        }],
                        [i.AlertEditorAbortReason.MainSeriesIsInReplay, {
                            title: r.t("Oops – Replay Mode!"),
                            text: r.t("Alerts are not currently available in replay mode."),
                            buttonText: r.t("Got it")
                        }]
                    ]).get(e) || {
                        title: n,
                        text: o,
                        buttonText: a
                    }
                }(e, t);
                (0, o.showWarning)({ ...s,
                    onClose: n
                })
            }
            const h = new Set;

            function S(e) {
                return new Promise(t => {
                    if (!f(e)) return void t();
                    const n = () => {
                        f(e) || (e.onStatusChanged().unsubscribe(null, n), t())
                    };
                    e.onStatusChanged().subscribe(null, n)
                })
            }
        },
        759958: (e, t, n) => {
            "use strict";
            n.d(t, {
                invokeAlertEditor: () => d,
                invokeAlertEditorWithOnlineSeries: () => A
            });
            var r = n(811132),
                o = n(482324),
                i = n(998562),
                a = n(220552),
                s = n(987380),
                l = n(317476),
                c = n(818771);
            const u = (0, s.getLogger)("Alerts.Price.InvokeAlertEditor");

            function d(e) {
                c.alertsMaintenanceTracker.sync();
                const t = (0, r.shouldAbortAlertEditor)(e);
                if (null !== t) return t !== i.AlertEditorAbortReason.IsAlreadyPresent && (0, r.showAbortExplainingDialog)(t, (0,
                    r.getAlertDialogType)(e)), u.logWarn("Aborted: " + t), void(e.onAborted && e.onAborted(t));
                const {
                    unlockInvocation: a,
                    abortSignal: s
                } = l.alertEditorInvocationHandler.lockInvocation(e);
                Promise.all([Promise.all([n.e(32637), n.e(11216), n.e(14563), n.e(34698), n.e(68981), n.e(4033), n.e(73715), n.e(93669), n.e(6798), n.e(41242), n.e(19453), n.e(84234), n.e(18229), n.e(51021), n.e(14080), n.e(77929), n.e(87048), n.e(94965), n.e(92462), n.e(60380), n.e(37621), n.e(7009), n.e(40989), n.e(77021), n.e(35683), n.e(60273)]).then(n.t.bind(n, 923931, 19)), (0, o.getPriceAlertsDispatcher)(), b(e, a, s)]).then(e => {
                    const [t, n, r] = e;
                    new t.AlertEditor(n, r)
                }, a)
            }

            function b(e, t, n) {
                return (e.series ? (0, a.hasUserAccessToDataSource)(e.series) : Promise.resolve(!0)).then(r => {
                    const o = e.onDestroy,
                        i = { ...e,
                            abortSignal: n,
                            onDestroy: () => {
                                t(), o && o()
                            }
                        };
                    return r || (delete i.series, delete i.value), i
                })
            }

            function A(e) {
                e.dataSourceHub ? (0, r.ensureSeriesIsNotOffline)(e.dataSourceHub.mainSeries()).then(() => {
                    d(e)
                }) : d(e)
            }
        },
        317476: (e, t, n) => {
            "use strict";
            n.d(t, {
                ALERT_DIALOG_CREATE_INVOCATION_ID: () => s,
                alertEditorInvocationHandler: () => c
            });
            var r = n(765066),
                o = n.n(r),
                i = n(811132),
                a = n(416282);
            const s = -1;
            class l {
                constructor() {
                    this._state = new(o())(!1)
                }
                subscribe(e) {
                    this._state.subscribe(e)
                }
                unsubscribe(e) {
                    this._state.unsubscribe(e)
                }
                value() {
                    return this._state.value()
                }
                abort() {
                    this._state.setValue(!0)
                }
            }
            const c = new class {
                constructor() {
                    this._dialogInvocations = new(o())(new Map)
                }
                getDialogInvocations() {
                    return this._dialogInvocations
                }
                isAllowedToInvoke(e) {
                    return e.silent || !this._dialogInvocations.value().has(u(e))
                }
                lockInvocation(e) {
                    if (e.silent) return {
                        unlockInvocation: () => {}
                    };
                    const t = u(e),
                        n = new l,
                        r = new Map(this._dialogInvocations.value());
                    return r.set(t, n), this._dialogInvocations.setValue(r), {
                        abortSignal: n,
                        unlockInvocation: () => {
                            const e = new Map(this._dialogInvocations.value());
                            e.delete(t), this._dialogInvocations.setValue(e)
                        }
                    }
                }
            };

            function u(e) {
                return "create_alert" === (0, i.getAlertDialogType)(e) ? s : (0, a.ensureDefined)(e.alert).id
            }
        },
        220552: (e, t, n) => {
            "use strict";

            function r(e) {
                return i().then(t => t.hasUserAccessToDataSource(e))
            }

            function o(e) {
                return i().then(t => t.filterAccessibleDataSources(e))
            }
            n.d(t, {
                hasUserAccessToDataSource: () => r,
                filterAccessibleDataSources: () => o
            });
            const i = () => Promise.all([n.e(32637), n.e(11216), n.e(14563), n.e(34698), n.e(68981), n.e(4033), n.e(73715), n.e(93669), n.e(6798), n.e(19453), n.e(84234), n.e(18229), n.e(51021), n.e(14080), n.e(77929), n.e(87048), n.e(94965), n.e(92462), n.e(60380), n.e(37621), n.e(7009), n.e(40989), n.e(77021), n.e(83441)]).then(n.bind(n, 179890))
        },
        836989: (e, t, n) => {
            "use strict";
            n.d(t, {
                canPlaceAlertOnResolution: () => a,
                isAlertResolutionEqual: () => s
            });
            var r = n(302459),
                o = n(903851),
                i = n(305803);

            function a(e) {
                return !r.Interval.isSeconds(e) || (0, o.enabled)(i.ProductFeatures.ALERTS_ON_SECONDS)
            }

            function s(e, t) {
                return e.get("crossInterval") || r.Interval.isEqual(e.get("resolution"), t)
            }
        },
        79200: (e, t, n) => {
            "use strict";
            n.d(t, {
                reloginOrGoPro: () => b,
                runOrGoPro: () => d,
                runOrGoProWithoutSync: () => u
            });
            var r = n(544439),
                o = n(423946),
                i = n(903851),
                a = n(305803);

            function s(e, t, n) {
                return t.value || (0, i.enabled)(e, n)
            }

            function l(e, t, n) {
                switch (e) {
                    case a.ProductFeatures.SCREENER_INTERVALS:
                        return function(e, t) {
                            const n = (0, i.getConfig)(a.ProductFeatures.SCREENER_INTERVALS, t);
                            return !(!n || !n.interval) && n.interval.includes(e.interval)
                        }(t, n);
                    case a.ProductFeatures.SCREENER_AUTO_REFRESH:
                        return s(a.ProductFeatures.SCREENER_AUTO_REFRESH, t, n);
                    case a.ProductFeatures.ALERTS_NO_EXPIRATION:
                        return s(a.ProductFeatures.ALERTS_NO_EXPIRATION, t, n);
                    default:
                        return (0, i.enabled)(e, n)
                }
            }
            var c = n(371141);

            function u(e, t, n, r) {
                l(t, r) ? e() : (0, o.createGoProDialog)(n)
            }
            async function d(e, t, n, o = {}) {
                const i = window.is_authenticated;
                window.is_authenticated && window.user.is_pro && await (0, r.syncUserData)("gopro"), i === window.is_authenticated ? u(e, t, n, o) : (0, c.showSignModal)({
                    source: n.goproSource,
                    feature: n.feature,
                    signinSuccess: e
                })
            }
            async function b(e) {
                const t = window.is_authenticated;
                window.is_authenticated && window.user.is_pro && await (0, r.syncUserData)("gopro"), t === window.is_authenticated ? (0, o.createGoProDialog)(e) : (0, c.showSignModal)({
                    source: e.goproSource,
                    feature: e.feature
                })
            }
        },
        544439: (e, t, n) => {
            "use strict";
            n.d(t, {
                syncUserData: () => c,
                syncUserConversionData: () => u
            });
            var r = n(987380),
                o = n(929098),
                i = n(685864);
            const a = (0, r.getLogger)("User.Sync");

            function s(e) {
                return `${e}_${window.user&&window.user.username||""}`
            }

            function l(e, t, n) {
                n !== window.user.pro_plan && (window.user.pro_plan = n, window.user.is_pro = Boolean(n), (0, o.trackEvent)("Sync User Data", "Different Pro Plan", s(e))), t !== window.is_authenticated && (window.is_authenticated = t, window.loginStateChange.fire(), (0, o.trackEvent)("Sync User Data", "Different Auth", s(e)))
            }
            async function c(e) {
                try {
                    const t = await n.e(90254).then(n.bind(n, 927358));
                    l(e, !0, (await t.getMe()).pro_plan)
                } catch (t) {
                    ! function(e, t) {
                        "not_authenticated" === t.type ? l(e, !1, void 0) : a.logError(t.message)
                    }(e, t)
                }
            }
            async function u(e) {
                const t = await (0, i.fetch)("/gopro"),
                    n = await t.json();
                return l(e, n.is_authenticated, n.user.pro_plan), n
            }
        }
    }
]);