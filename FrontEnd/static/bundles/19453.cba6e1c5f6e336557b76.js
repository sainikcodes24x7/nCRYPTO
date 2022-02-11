(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [19453], {
        819453: (n, t, e) => {
            "use strict";
            e.r(t), e.d(t, {
                normalizeIntervalString: () => v,
                isAvailable: () => f,
                setLastUsedResolution: () => g,
                getRangeResolution: () => K,
                getTimeBasedResolution: () => p,
                getDefaultResolution: () => h,
                getResolutionByChartStyle: () => m,
                getServerInterval: () => k,
                isResolutionMultiplierValid: () => I,
                getMaxResolutionValue: () => S,
                getResolutionsFromSettings: () => y,
                convertResolutionsFromSettings: () => T,
                mergeResolutions: () => w,
                sortResolutions: () => D,
                getCustomResolutions: () => V,
                getTranslatedResolution: () => _,
                getTranslatedResolutionModel: () => W,
                isSecondsEnabled: () => B,
                isTicksEnabled: () => N
            });
            var i = e(120220),
                o = e(302459),
                s = e(620554),
                r = e(342098),
                u = e(152946),
                l = e(494972),
                a = e(331565);
            e(307833);
            const c = {
                    [o.ResolutionKind.Ticks]: 1,
                    [o.ResolutionKind.Seconds]: 60,
                    [o.ResolutionKind.Minutes]: 1440,
                    [o.SpecialResolutionKind.Hours]: 24,
                    [o.ResolutionKind.Days]: 365,
                    [o.ResolutionKind.Weeks]: 52,
                    [o.ResolutionKind.Months]: 12,
                    [o.ResolutionKind.Range]: 1e6,
                    [o.ResolutionKind.Invalid]: NaN
                },
                d = {
                    [o.ResolutionKind.Ticks]: 0,
                    [o.ResolutionKind.Seconds]: 1,
                    [o.ResolutionKind.Minutes]: 2,
                    [o.SpecialResolutionKind.Hours]: 3,
                    [o.ResolutionKind.Days]: 4,
                    [o.ResolutionKind.Weeks]: 5,
                    [o.ResolutionKind.Months]: 6,
                    [o.ResolutionKind.Range]: 7,
                    [o.ResolutionKind.Invalid]: 8
                },
                R = {
                    [o.ResolutionKind.Invalid]: "",
                    [o.ResolutionKind.Ticks]: (0, i.t)("T", {
                        context: "interval_short"
                    }),
                    [o.ResolutionKind.Seconds]: (0, i.t)("s", {
                        context: "interval_short"
                    }),
                    [o.ResolutionKind.Minutes]: (0, i.t)("m", {
                        context: "interval_short"
                    }),
                    [o.SpecialResolutionKind.Hours]: (0, i.t)("h", {
                        context: "interval_short"
                    }),
                    [o.ResolutionKind.Days]: (0, i.t)("D", {
                        context: "interval_short"
                    }),
                    [o.ResolutionKind.Weeks]: (0, i.t)("W", {
                        context: "interval_short"
                    }),
                    [o.ResolutionKind.Months]: (0, i.t)("M", {
                        context: "interval_short"
                    }),
                    [o.ResolutionKind.Range]: (0, i.t)("R", {
                        context: "interval_short"
                    })
                };

            function v(n) {
                return o.Interval.parse(n).value()
            }

            function f(n) {
                const t = o.Interval.parse(n);
                if (t.isRange()) return u.linking.range.value();
                const e = t.value(),
                    i = u.linking.supportedResolutions.value();
                return void 0 !== i ? void 0 !== i.find(n => v(n) === e) : t.isIntraday() ? Boolean(u.linking.intraday.value()) : t.isDWM()
            }

            function g(n) {
                o.Interval.isValid(n) && (o.Interval.isRange(n) ? r.setValue("chart.lastUsedRangeResolution", n) : r.setValue("chart.lastUsedTimeBasedResolution", n))
            }

            function K(n) {
                const t = r.getValue("chart.lastUsedRangeResolution");
                if (void 0 !== t && o.Interval.isRange(t)) return t;
                let e = "100R";
                for (const t of n) {
                    const n = o.Interval.parse(t);
                    if (n.isRange()) {
                        const t = n.value();
                        if ("100R" === t) return t;
                        e = t
                    }
                }
                return e
            }

            function p(n) {
                const t = r.getValue("chart.lastUsedTimeBasedResolution");
                if (void 0 !== t && o.Interval.isTimeBased(t)) return t;
                let e = "1D";
                for (const t of n) {
                    const n = o.Interval.parse(t);
                    if (n.isTimeBased()) {
                        const t = n.value();
                        if ("1D" === t) return t;
                        e = t
                    }
                }
                return e
            }

            function h(n) {
                return n ? "100R" : "1D"
            }

            function m(n, t, e) {
                const i = s.isRangeStyle(n),
                    r = o.Interval.isRange(t);
                return !i && r ? p(e) : i && !r ? K(e) : t
            }

            function k(n) {
                return o.Interval.isRange(n) ? "1" : n
            }

            function I(n) {
                const t = o.Interval.parse(n),
                    e = M(t.kind()),
                    i = t.multiplier();
                return t.isValid() && i <= e
            }

            function M(n) {
                const t = c[n];
                return Number.isNaN(t) ? 1 : t
            }

            function S(n) {
                return M(o.Interval.kind(n))
            }

            function y(n) {
                const t = T(r.getJSON(n, []));
                return (0, l.uniq)(t.filter(I).map(v))
            }

            function T(n) {
                return Array.isArray(n) ? n : Object.keys(n).map(o.Interval.normalize).filter(a.notNull)
            }

            function w(...n) {
                let t = [].concat(...n);
                return t = (0, l.uniq)(t.filter(I).map(v)), D(t)
            }

            function D(n) {
                return n.sort(H)
            }

            function x(n) {
                const t = o.Interval.parse(n),
                    e = t.multiplier() || 1;
                return t.isMinuteHours() ? [o.SpecialResolutionKind.Hours, e / 60] : [t.kind(), e]
            }

            function H(n, t) {
                const [e, i] = x(n), [o, s] = x(t);
                return e !== o ? d[e] - d[o] : i - s
            }

            function V() {
                let n = [];
                return window.user.is_pro && (n = y("IntervalWidget.intervals")), n
            }

            function _(n) {
                const {
                    multiplier: t,
                    shortKind: e
                } = W(n);
                return `${t}${e}`
            }

            function W(n, t) {
                const e = o.Interval.parse(n);
                let i = e.multiplier(),
                    s = e.kind();
                if (!e.isValid()) {
                    if (t) return null;
                    throw new TypeError("Can't translate invalid interval")
                }
                return e.isMinuteHours() && (i = Math.floor(i / 60), s = o.SpecialResolutionKind.Hours), {
                    multiplier: i.toString(),
                    shortKind: b(s),
                    hint: `${i} ${b(s,i)}`,
                    mayOmitMultiplier: e.isDWM() && 1 === i,
                    mayOmitShortKind: e.isMinutes() && !e.isMinuteHours()
                }
            }

            function b(n, t) {
                if (!t) return R[n];
                switch (n) {
                    case o.ResolutionKind.Ticks:
                        return (0, i.t)("tick", {
                            plural: "ticks",
                            count: t
                        });
                    case o.ResolutionKind.Days:
                        return (0, i.t)("day", {
                            plural: "days",
                            count: t
                        });
                    case o.ResolutionKind.Weeks:
                        return (0, i.t)("week", {
                            plural: "weeks",
                            count: t
                        });
                    case o.ResolutionKind.Months:
                        return (0, i.t)("month", {
                            plural: "months",
                            count: t
                        });
                    case o.ResolutionKind.Seconds:
                        return (0, i.t)("second", {
                            plural: "seconds",
                            count: t
                        });
                    case o.ResolutionKind.Minutes:
                        return (0, i.t)("minute", {
                            plural: "minutes",
                            count: t
                        });
                    case o.SpecialResolutionKind.Hours:
                        return (0, i.t)("hour", {
                            plural: "hours",
                            count: t
                        });
                    case o.ResolutionKind.Range:
                        return (0, i.t)("range", {
                            plural: "ranges",
                            count: t
                        });
                    default:
                        return n
                }
            }

            function B() {
                return !0
            }

            function N() {
                return !1
            }
        }
    }
]);