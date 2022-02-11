(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [52946], {
        505417: (e, t, s) => {
            "use strict";
            s.d(t, {
                japaneseChartStyles: () => n,
                commonChartStyles: () => a,
                allChartStyles: () => o
            });
            var i = s(198006),
                r = s(307833);

            function n() {
                const e = [8];
                return r.enabled("japanese_chart_styles") && (e.push(4, 7, 5, 6), e.push(11)), e
            }

            function a() {
                const e = [0, 1, 9, 2, 3, 10];
                return (0, i.isFeatureEnabled)("chart_style_hilo") && e.push(12), e
            }

            function o() {
                return a().concat(n())
            }
        },
        280790: (e, t, s) => {
            "use strict";
            s.d(t, {
                NumericFormatter: () => n
            });
            var i = s(511228),
                r = s(593302);
            class n {
                constructor(e) {
                    this._precision = e
                }
                format(e) {
                    return (void 0 !== this._precision ? e.toFixed(this._precision) : n.formatNoE(e)).replace(".", i.formatterOptions.decimalSign)
                }
                parse(e) {
                    const t = e.replace(i.formatterOptions.decimalSign, ".");
                    let s = parseFloat(t);
                    return this._precision && (s = +s.toFixed(this._precision)), s
                }
                static formatNoE(e) {
                    if (!Number.isFinite(e)) return String(e);
                    const t = new r.Big(e);
                    return t.lt(1) ? t.toFixed() : t.toString()
                }
            }
        },
        414704: (e, t, s) => {
            "use strict";
            s.d(t, {
                PercentageFormatter: () => n
            });
            var i = s(511228),
                r = s(582755);
            class n extends i.PriceFormatter {
                constructor(e) {
                    super(e), this.type = "percentage"
                }
                state() {
                    const e = i.PriceFormatter.prototype.state.call(this);
                    return e.percent = !0, e
                }
                parse(e) {
                    return e = e.replace("%", ""), super.parse(e)
                }
                format(e, t, s, i, n = !0) {
                    const a = super.format(e, t, s, i, !1) + "%";
                    return n ? (0, r.forceLTRStr)(a) : a
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new n(e.priceScale)
                }
            }
        },
        681293: (e, t, s) => {
            "use strict";
            s.d(t, {
                PLACE_HOLDER: () => o,
                VolumeFormatter: () => l
            });
            var i = s(120220),
                r = s(280790),
                n = s(331565),
                a = s(775496);
            const o = "---";
            class l {
                constructor(e) {
                    this.type = "volume", this._numericFormatter = new r.NumericFormatter, this._fractionalValues = void 0 !== e && e > 0, this._precision = e
                }
                state() {
                    return {
                        precision: this._precision
                    }
                }
                format(e, t) {
                    if (!(0, n.isNumber)(e)) return o;
                    let s = "";
                    return e < 0 ? (s = "−", e = -e) : e > 0 && t && (s = "+"), e >= 1e100 ? (0, i.t)("N/A") : (!this._fractionalValues || e >= 995 ? e = Math.round(e) : this._fractionalValues && (e = +e.toFixed(this._precision)), e < 995 ? s + this._formatNumber(e) : e < 999995 ? s + this._formatNumber(e / 1e3) + "K" : e < 999999995 ? (e = 1e3 * Math.round(e / 1e3), s + this._formatNumber(e / 1e6) + "M") : e < 999999999995 ? (e = 1e6 * Math.round(e / 1e6), s + this._formatNumber(e / 1e9) + "B") : (e = 1e9 * Math.round(e / 1e9), s + this._formatNumber(e / 1e12) + "T"))
                }
                parse(e) {
                    if ("---" === e) return {
                        error: "not a number",
                        res: !1,
                        value: NaN
                    };
                    const t = {
                            K: 1e3,
                            M: 1e6,
                            B: 1e9
                        },
                        s = e.slice(-1);
                    if (t.hasOwnProperty(s)) {
                        const i = this._numericFormatter.parse(e.slice(0, -1));
                        return (0, n.isNumber)(i) ? {
                            res: !0,
                            value: i * t[s]
                        } : {
                            error: "not a number",
                            res: !1,
                            value: NaN
                        }
                    } {
                        const t = this._numericFormatter.parse(e);
                        return (0, n.isNumber)(t) ? {
                            res: !0,
                            value: t
                        } : {
                            error: "not a number",
                            res: !1,
                            value: NaN
                        }
                    }
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new l(e.precision)
                }
                _formatNumber(e) {
                    return this._fractionalValues && (e = (0, a.fixComputationError)(e)), this._numericFormatter.format(e).replace(/(\.[1-9]*)0+$/, (e, t) => t)
                }
            }
        },
        302459: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                ResolutionKind: () => n,
                SpecialResolutionKind: () => a,
                Interval: () => h,
                isHour: () => d
            });
            const i = /^(\d*)([TSHDWMR])$/,
                r = /^(\d+)$/;
            var n, a;
            ! function(e) {
                e.Ticks = "ticks", e.Seconds = "seconds", e.Minutes = "minutes", e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Range = "range", e.Invalid = "invalid"
            }(n || (n = {})),
            function(e) {
                e.Hours = "hours"
            }(a || (a = {}));
            const o = {};
            o[n.Ticks] = 1e3, o[n.Seconds] = 1e3, o[n.Minutes] = 60 * o[n.Seconds], o[n.Days] = 1440 * o[n.Minutes], o[n.Weeks] = 7 * o[n.Days];
            const l = {
                    T: n.Ticks,
                    S: n.Seconds,
                    D: n.Days,
                    W: n.Weeks,
                    M: n.Months,
                    R: n.Range
                },
                u = new Set([n.Ticks, n.Seconds, n.Minutes]);
            class h {
                constructor(e, t) {
                    this._kind = n.Invalid, this._multiplier = 0, e !== n.Invalid && t > 0 && (this._kind = e, this._multiplier = t)
                }
                kind() {
                    return this._kind
                }
                multiplier() {
                    return this._multiplier
                }
                isValid() {
                    return this.kind() !== n.Invalid && this.multiplier() > 0
                }
                isDWM() {
                    return this.isValid() && !this.isRange() && !this.isIntraday() && !this.isTicks()
                }
                isIntraday() {
                    const e = u.has(this.kind());
                    return this.isValid() && e
                }
                isSeconds() {
                    return this.kind() === n.Seconds
                }
                isMinutes() {
                    return this.kind() === n.Minutes
                }
                isMinuteHours() {
                    return this.kind() === n.Minutes && d(this.multiplier())
                }
                isDays() {
                    return this.kind() === n.Days
                }
                isWeeks() {
                    return this.kind() === n.Weeks
                }
                isMonths() {
                    return this.kind() === n.Months
                }
                isRange() {
                    return this.kind() === n.Range
                }
                isTicks() {
                    return this.kind() === n.Ticks
                }
                isTimeBased() {
                    return !this.isRange()
                }
                letter() {
                    return this.isValid() && this.kind() !== n.Minutes ? this.kind()[0].toUpperCase() : ""
                }
                value() {
                    return this.isValid() ? this.kind() === n.Minutes ? this.multiplier() + "" : this.multiplier() + this.letter() : ""
                }
                isEqualTo(e) {
                    if (!(e instanceof h)) throw new Error("Argument is not an Interval");
                    return !(!this.isValid() || !e.isValid()) && (this.kind() === e.kind() && this.multiplier() === e.multiplier())
                }
                inMilliseconds(e = Date.now()) {
                    if (!this.isValid() || this.isRange()) return NaN;
                    if (this.isMonths()) {
                        const t = new Date(e);
                        t.setUTCMonth(t.getUTCMonth() + (this.multiplier() || 1));
                        return +t - e
                    }
                    const t = this.multiplier();
                    return o[this.kind()] * t
                }
                static isEqual(e, t) {
                    return e === t || h.parse(e).isEqualTo(h.parse(t))
                }
                static parse(e) {
                    e = (e + "").toUpperCase().split(",")[0];
                    let t = i.exec(e);
                    return null !== t ? "H" === t[2] ? new h(n.Minutes, 60 * c(t[1])) : new h(l[t[2]], c(t[1])) : (t = r.exec(e), null !== t ? new h(n.Minutes, c(t[1])) : new h(n.Invalid, 0))
                }
                static kind(e) {
                    return h.parse(e).kind()
                }
                static isValid(e) {
                    return h.parse(e).isValid()
                }
                static isDWM(e) {
                    return h.parse(e).isDWM()
                }
                static isIntraday(e) {
                    return h.parse(e).isIntraday()
                }
                static isSeconds(e) {
                    return h.parse(e).isSeconds()
                }
                static isMinutes(e) {
                    return h.parse(e).isMinutes()
                }
                static isMinuteHours(e) {
                    return h.parse(e).isMinuteHours()
                }
                static isDays(e) {
                    return h.parse(e).isDays()
                }
                static isWeeks(e) {
                    return h.parse(e).isWeeks()
                }
                static isMonths(e) {
                    return h.parse(e).isMonths()
                }
                static isRange(e) {
                    return h.parse(e).isRange()
                }
                static isTicks(e) {
                    return h.parse(e).isTicks()
                }
                static isTimeBased(e) {
                    return h.parse(e).isTimeBased()
                }
                static normalize(e) {
                    const t = h.parse(e);
                    return t.isValid() ? t.value() : null
                }
            }

            function c(e) {
                return 0 === e.length ? 1 : parseInt(e, 10)
            }

            function d(e) {
                return e >= 60 && !(e % 60)
            }
        },
        697786: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                STATUS_OFFLINE: () => i,
                STATUS_RESOLVING: () => r,
                STATUS_LOADING: () => n,
                STATUS_READY: () => a,
                STATUS_INVALID_SYMBOL: () => o,
                STATUS_SNAPSHOT: () => l,
                STATUS_EOD: () => u,
                STATUS_PULSE: () => h,
                STATUS_DELAYED: () => c,
                STATUS_DELAYED_STREAMING: () => d,
                STATUS_NO_BARS: () => _,
                STATUS_REPLAY: () => m,
                STATUS_ERROR: () => y,
                SERIES_STATUS_TEXT: () => S,
                STYLE_LINE_TYPE_MARKERS: () => b,
                STYLE_LINE_TYPE_STEP: () => p,
                STYLE_LINE_TYPE_SIMPLE: () => f,
                STYLE_BARS: () => g,
                STYLE_CANDLES: () => v,
                STYLE_LINE: () => C,
                STYLE_AREA: () => w,
                STYLE_RENKO: () => T,
                STYLE_KAGI: () => E,
                STYLE_PNF: () => B,
                STYLE_PB: () => L,
                STYLE_HEIKEN_ASHI: () => k,
                STYLE_HOLLOW_CANDLES: () => I,
                STYLE_BASELINE: () => V,
                STYLE_RANGE: () => M,
                STYLE_HILO: () => N,
                STYLE_SHORT_NAMES: () => R,
                SYMBOL_STRING_DATA: () => W
            });
            const i = 0,
                r = 1,
                n = 2,
                a = 3,
                o = 4,
                l = 5,
                u = 6,
                h = 7,
                c = 8,
                d = 9,
                _ = 10,
                m = 11,
                y = 12,
                S = {
                    [i]: "connecting",
                    [r]: "loading",
                    [n]: "loading",
                    [a]: "realtime",
                    [o]: "invalid",
                    [l]: "snapshot",
                    [u]: "endofday",
                    [h]: "endofday",
                    [c]: "delayed",
                    [d]: "delayed_streaming",
                    [_]: "forbidden",
                    [m]: "replay",
                    [y]: "error"
                },
                b = 0,
                p = 1,
                f = 2,
                g = 0,
                v = 1,
                C = 2,
                w = 3,
                T = 4,
                E = 5,
                B = 6,
                L = 7,
                k = 8,
                I = 9,
                V = 10,
                M = 11,
                N = 12,
                R = {
                    0: "bar",
                    1: "candle",
                    9: "hollowCandle",
                    2: "line",
                    3: "area",
                    4: "renko",
                    7: "pb",
                    5: "kagi",
                    6: "pnf",
                    8: "ha",
                    10: "baseline",
                    11: "range",
                    12: "hilo"
                },
                W = {
                    4: {
                        type: "BarSetRenko@tv-prostudies",
                        basicStudyVersion: 40
                    },
                    7: {
                        type: "BarSetPriceBreak@tv-prostudies",
                        basicStudyVersion: 34
                    },
                    5: {
                        type: "BarSetKagi@tv-prostudies",
                        basicStudyVersion: 34
                    },
                    6: {
                        type: "BarSetPnF@tv-prostudies",
                        basicStudyVersion: 34
                    },
                    8: {
                        type: "BarSetHeikenAshi@tv-basicstudies",
                        basicStudyVersion: 60
                    },
                    11: {
                        type: "BarSetRange@tv-basicstudies",
                        basicStudyVersion: 72
                    }
                }
        },
        620554: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                isRequiringRestartSeriesStyles: () => v,
                isRangeBasedStyle: () => C,
                isRangeStyle: () => w,
                isTimeBasedStyle: () => T,
                isValidStyle: () => E,
                isSingleValueBasedStyle: () => B,
                setLastUsedStyle: () => L,
                getLastUsedStyle: () => k,
                getLastUsedSingleValueBasedStyle: () => I,
                getDefaultStyle: () => V,
                getChartStyleByResolution: () => M,
                chartStyleStudyId: () => N,
                preparePriceAxisProperties: () => R,
                hasProjection: () => A,
                isPriceSourceStyle: () => D,
                getSeriesPriceFormattingState: () => P,
                createSeriesFormatter: () => F,
                symbolCurrencyConvertible: () => U,
                symbolCurrency: () => O,
                symbolOriginalCurrency: () => Y,
                symbolBaseCurrency: () => x,
                isConvertedToOtherCurrency: () => H,
                symbolUnitConvertible: () => G,
                symbolUnit: () => K,
                symbolOriginalUnit: () => $,
                isConvertedToOtherUnit: () => q,
                symbolUnitConvertibleGroupsIfExist: () => z,
                symbolCurrentContract: () => j,
                extractSymbolNameFromSymbolInfo: () => X,
                symbolTitle: () => J,
                displayedSymbolName: () => Q,
                displayedSymbolExchange: () => Z,
                actualSymbol: () => ee,
                proSymbol: () => te,
                symbolForApi: () => se,
                isRegularSessionId: () => ie,
                isCloseBasedSymbol: () => re,
                hasVolume: () => ne,
                isEconomicsSymbol: () => ae
            });
            var i = s(342098),
                r = s(697786),
                n = s(302459),
                a = s(511228),
                o = s(307833),
                l = s(198006),
                u = s(416282),
                h = s(681293),
                c = s(414704);
            const d = (0, l.isFeatureEnabled)("unit_conversion"),
                _ = o.enabled("pay_attention_to_ticker_not_symbol"),
                m = o.enabled("uppercase_instrument_names"),
                y = o.enabled("charting_library_single_symbol_request"),
                S = o.enabled("use_ticker_on_symbol_info_update"),
                b = [4, 5, 6, 7, 8],
                p = [4, 5, 6, 7, 8, 11],
                f = [0, 1, 9, 2, 3, 10],
                g = [2, 10, 3];

            function v(e) {
                return -1 !== b.indexOf(e)
            }

            function C(e) {
                return -1 !== p.indexOf(e)
            }

            function w(e) {
                return 11 === e
            }

            function T(e) {
                return -1 !== f.indexOf(e)
            }

            function E(e) {
                return C(e) || T(e)
            }

            function B(e) {
                switch (e) {
                    case 3:
                    case 10:
                    case 2:
                        return !0;
                    default:
                        return !1
                }
            }

            function L(e, t) {
                E(e) && (11 !== e && i.setValue("chart.lastUsedStyle", e), re(t) && B(e) && i.setValue("chart.lastUsedSingleValueBasedStyle", e))
            }

            function k() {
                const e = i.getInt("chart.lastUsedStyle");
                return void 0 === e ? 1 : e
            }

            function I() {
                const e = i.getInt("chart.lastUsedSingleValueBasedStyle");
                return void 0 === e ? 2 : e
            }

            function V(e) {
                return e ? 11 : 1
            }

            function M(e, t) {
                const s = w(t),
                    i = n.Interval.isRange(e);
                return !s && i ? V(!0) : s && !i ? V(!1) : t
            }

            function N(e, t) {
                const s = r.SYMBOL_STRING_DATA[e];
                return void 0 === s ? null : t ? `${s.type}-${s.basicStudyVersion}` : s.type
            }

            function R(e) {
                const t = e.priceAxisProperties,
                    s = t.lockScale.value(),
                    i = 6 === e.style.value();
                (i || s) && (t.log.setValue(!1), t.percentage.setValue(!1)), t.logDisabled.setValue(!(!i && !s)), t.percentageDisabled.setValue(!(!i && !s))
            }
            const W = [4, 7, 5, 6];

            function A(e) {
                return -1 !== W.indexOf(e)
            }

            function D(e) {
                return g.includes(e)
            }

            function P(e, t = "default", s = !1) {
                let i, r, n = 100,
                    a = 1;
                if ("default" === t) null != e && (n = e.pricescale, a = e.minmov, i = e.fractional, r = e.minmove2);
                else {
                    let e = t.split(",");
                    3 !== e.length && (e = ["100", "1", "false"]), n = parseInt(e[0]), a = parseInt(e[1]), i = "true" === e[2]
                }
                return s && (a = 1), {
                    priceScale: n,
                    minMove: a,
                    fractional: i,
                    minMove2: r
                }
            }

            function F(e, t, s = !1) {
                if ("default" === t && null != e) {
                    if ("volume" === e.formatter || "volume" === e.format) return new h.VolumeFormatter(2);
                    if ("percent" === e.formatter || "percent" === e.format) return new c.PercentageFormatter(e.pricescale)
                }
                const {
                    priceScale: i,
                    minMove: r,
                    fractional: n,
                    minMove2: o
                } = P(e, t, s);
                return new a.PriceFormatter(i, r, n, o)
            }

            function U(e) {
                return null !== e && "spread" !== e.type
            }

            function O(e, t, s) {
                if (null === e) return null;
                const i = !t || s ? e.currency_id : e.currency_code;
                return void 0 === i || "" === i ? null : i
            }

            function Y(e, t) {
                return (t ? e.original_currency_code : e.original_currency_id) || O(e, t)
            }

            function x(e) {
                return e.base_currency_id || null
            }

            function H(e) {
                return !(null === e || !U(e)) && (void 0 !== e.original_currency_id && e.original_currency_id !== e.currency_id)
            }

            function G(e) {
                return d && null !== e && "spread" !== e.type
            }

            function K(e) {
                if (null === e || !d) return null;
                const t = e.unit_id;
                return void 0 === t || "" === t ? null : t
            }

            function $(e) {
                return d ? e.original_unit_id || K(e) : null
            }

            function q(e) {
                return !(null === e || !G(e)) && (void 0 !== e.original_unit_id && e.original_unit_id !== e.unit_id)
            }

            function z(e) {
                return null !== e && G(e) ? e.unit_conversion_types || null : []
            }

            function j(e) {
                return "futures" === e.type && e.front_contract || null
            }

            function X(e, t) {
                let s = e && (e.pro_name || e.full_name || e.name);
                return y && t ? s = t : S && e && e.ticker && (s = e.ticker), m && s && (s = s.toUpperCase()), s
            }

            function J(e, t, s = "exchange") {
                return t ? e.name : `${e.name}, ${e[s]}`
            }

            function Q(e) {
                let t = e && (j(e) || e.name) || "";
                return t.length > 40 && (t = t.substring(0, 37) + "..."), t.trim()
            }

            function Z(e) {
                const t = e ? e.exchange : "";
                return m ? t.toUpperCase() : t
            }

            function ee(e, t) {
                return null !== e ? e.full_name : t
            }

            function te(e, t) {
                return null !== e ? e.pro_name : t
            }

            function se(e, t) {
                return _ && e ? (0, u.ensureDefined)(e.ticker) : ee(e, t)
            }

            function ie(e) {
                return "regular" === e || "us_regular" === e
            }

            function re(e) {
                return "c" === (null == e ? void 0 : e.visible_plots_set)
            }

            function ne(e) {
                return void 0 !== e.visible_plots_set ? "ohlcv" === e.visible_plots_set : !e.has_no_volume
            }

            function ae(e) {
                return "ECONOMICS" === e.listed_exchange
            }
        },
        152946: (e, t, s) => {
            "use strict";
            s.d(t, {
                linking: () => y
            });
            var i = s(316152),
                r = s(765066),
                n = s.n(r),
                a = s(307833),
                o = s(620554),
                l = s(987380),
                u = s(342098),
                h = s(604346),
                c = s(771073),
                d = s(505417);
            const _ = (0, l.getLogger)("Linking");
            var m;
            ! function(e) {
                e[e.NotBound = 0] = "NotBound", e[e.BoundToWidget = 1] = "BoundToWidget", e[e.BoundToModel = 2] = "BoundToModel"
            }(m || (m = {}));
            const y = new class {
                constructor() {
                    this._watchedSymbol = new(n()), this._seriesShortSymbol = new(n()), this._proSymbol = new(n()), this._watchedInterval = new(n()), this._watchedIntraday = new(n()), this._watchedSeconds = new(n()), this._watchedTicks = new(n()), this._watchedRange = new(n()), this._watchedSupportedResolutions = new(n()), this._watchedSupportedChartStyles = new(n())([]), this._symbolNamesList = new(n()), this._chartWidgetBindingState = m.NotBound, this._activeChartWidget = null, this._watchedSymbolListenerBound = this._watchedSymbolListener.bind(this), this._watchedIntervalListenerBound = this._watchedIntervalListener.bind(this), this._onSymbolLinkBound = this._onSymbolLink.bind(this), this._searchCharts = null, this._searchChartsLoadDebounced = null, this._selfEmit = !1, this._preventFeedBySymbol = !1, this._feedBySymbolDebounceCounter = 0
                }
                get symbol() {
                    return this._watchedSymbol
                }
                get proSymbol() {
                    return this._proSymbol
                }
                get symbolNamesList() {
                    return this._symbolNamesList
                }
                get seriesShortSymbol() {
                    return this._seriesShortSymbol.readonly()
                }
                get interval() {
                    return this._watchedInterval
                }
                get intraday() {
                    return this._watchedIntraday.readonly()
                }
                get seconds() {
                    return this._watchedSeconds.readonly()
                }
                get ticks() {
                    return this._watchedTicks.readonly()
                }
                get range() {
                    return this._watchedRange.readonly()
                }
                get supportedResolutions() {
                    return this._watchedSupportedResolutions.readonly()
                }
                get supportedChartStyles() {
                    return this._watchedSupportedChartStyles.readonly()
                }
                get preventFeedBySymbol() {
                    return this._preventFeedBySymbol
                }
                bindToChartWidget(e) {
                    if (this.unbindFromChartWidget(), this._activeChartWidget = e, e.hasModel()) return void this._onChartModelCreated(e.model());
                    e.modelCreated().subscribe(this, this._onChartModelCreated), this._chartWidgetBindingState = m.BoundToWidget;
                    const t = e.properties().childs().mainSeriesProperties.childs();
                    this._watchedSymbol.setValue(t.symbol.value()), this._watchedInterval.setValue(t.interval.value())
                }
                unbindFromChartWidget() {
                    switch (this._chartWidgetBindingState) {
                        case m.BoundToWidget:
                            if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
                            this._activeChartWidget.modelCreated().unsubscribe(this, this._onChartModelCreated);
                            break;
                        case m.BoundToModel:
                            this._symbolProperty().unsubscribe(this, this._onSymbolPropertyChange), this._watchedSymbol.unsubscribe(this._watchedSymbolListenerBound), this._mainSeries().dataEvents().symbolResolved().unsubscribe(this, this._updateSeriesSymbolInfo), this._mainSeries().dataEvents().symbolError().unsubscribe(this, this._updateSeriesSymbolInfo),
                                this._intervalProperty().unsubscribe(this, this._onIntervalPropertyChange), this._watchedInterval.unsubscribe(this._watchedIntervalListenerBound), delete this._watchedSymbol.hook, delete this._watchedSymbol.writeLock
                    }
                    this._activeChartWidget = null, this._chartWidgetBindingState = m.NotBound
                }
                getChartWidget() {
                    return this._activeChartWidget
                }
                bindToChartWidgetCollection(e) {
                    this._chartWidgetCollection = e, this.unbindFromChartWidget(), e.activeChartWidget.subscribe(e => {
                        this.unbindFromChartWidget(), this.bindToChartWidget(e)
                    }, {
                        callWithLast: !0
                    })
                }
                bindToSearchCharts(e) {
                    this.unbindFromSearchCharts(), this._searchCharts = e, e.onSearchBySymbol.subscribe(this, this._onSearchBySymbol), e.loadingSymbol.subscribe(e => {
                        !1 === e && (this._feedBySymbolDebounceCounter = 0)
                    }), this._watchedSymbol.subscribe(this._onSymbolLinkBound)
                }
                unbindFromSearchCharts() {
                    this._searchCharts && (this._searchCharts.onSearchBySymbol.unsubscribe(this, this._onSearchBySymbol), this._watchedSymbol.unsubscribe(this._onSymbolLinkBound), this._searchCharts = null)
                }
                setPreventFeedBySymbol(e) {
                    this._preventFeedBySymbol = e
                }
                _onSearchBySymbol(e) {
                    if (!e.resolved_symbol) throw new Error("no resolved_symbol");
                    this._selfEmit = !0, this._watchedSymbol.setValue(e.resolved_symbol), this._selfEmit = !1
                }
                _onSymbolLink(e) {
                    if (!this._selfEmit) {
                        if (!this._searchCharts) {
                            const e = "No search charts defined";
                            throw _.logError(e), new Error(e)
                        }
                        this._preventFeedBySymbol || this._loadSearchCharts(e)
                    }
                }
                _loadSearchCharts(e) {
                    if (!this._searchCharts) {
                        const e = "No search charts defined";
                        throw _.logError(e), new Error(e)
                    }
                    if (this._searchChartsLoadDebounced) return void(this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++, this._searchChartsLoadDebounced(e)));
                    const t = e => this._searchCharts ? (!0 === this._searchCharts.loadingSymbol.value() ? this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++, this._searchChartsLoadDebounced = (0, i.default)(t, 2e3), this._searchChartsLoadDebounced(e)) : this._searchChartsLoadDebounced = null, this._searchCharts.feedBySymbol.call(this._searchCharts, e)) : () => {};
                    !0 === this._searchCharts.loadingSymbol.value() ? this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++, this._searchChartsLoadDebounced = (0, i.default)(t, 2e3), this._searchChartsLoadDebounced(e)) : this._searchCharts.feedBySymbol(e)
                }
                _mainSeries() {
                    if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
                    return this._activeChartWidget.model().mainSeries()
                }
                _properties() {
                    return this._mainSeries().properties()
                }
                _symbolProperty() {
                    return this._properties().symbol
                }
                _intervalProperty() {
                    return this._properties().interval
                }
                _watchedSymbolListener(e) {
                    this._symbolProperty().value() !== e && (this._chartWidgetCollection.setSymbol(e), this._sendSnowplowAnalytics())
                }
                _sendSnowplowAnalytics() {
                    if (window.user.do_not_track) return;
                    const e = this._mainSeries(),
                        t = () => {
                            e.dataEvents().symbolResolved().unsubscribe(this, s)
                        },
                        s = s => {
                            (0, c.getTracker)().then(e => {
                                    if (null === e) return;
                                    const t = this._chartWidgetCollection.layout.value(),
                                        i = this._chartWidgetCollection.metaInfo.uid.value() || "";
                                    e.trackChartSymbols(s.pro_name, s.type, t, i)
                                }),
                                e.dataEvents().symbolError().unsubscribe(this, t)
                        };
                    e.dataEvents().symbolResolved().subscribe(this, s, !0), e.dataEvents().symbolError().subscribe(this, t, !0)
                }
                _onSymbolPropertyChange() {
                    const e = this._symbolProperty().value() !== this._watchedSymbol.value();
                    this._watchedSymbol.setValue(this._symbolProperty().value()), e && this._chartWidgetCollection.setSymbol(this._symbolProperty().value())
                }
                _onSymbolResolved(e) {
                    const t = this._mainSeries().symbolInfo();
                    t && this._applyValuesFromSymbolInfo(t)
                }
                _applyValuesFromSymbolInfo(e) {
                    const t = e.pro_name || a.enabled("trading_terminal") && (e.full_name || e.name) || "";
                    this._proSymbol.setValue(t), e.aliases && this._symbolNamesList.setValue(e.aliases)
                }
                _updateSeriesSymbolInfo() {
                    this._seriesShortSymbol.setValue(this._properties().shortName.value());
                    const e = this._mainSeries().symbolInfo();
                    if (e) {
                        this._applyValuesFromSymbolInfo(e);
                        let t = (0, d.allChartStyles)();
                        (0, o.isCloseBasedSymbol)(e) && (t = t.filter(e => (0, o.isSingleValueBasedStyle)(e))), this._watchedSupportedChartStyles.setValue(t), this._watchedIntraday.setValue(!!e.has_intraday), this._watchedSeconds.setValue(!!e.has_seconds), this._watchedTicks.setValue(!(0, o.isCloseBasedSymbol)(e) && !!e.has_ticks), this._watchedRange.setValue(!(0, o.isCloseBasedSymbol)(e))
                    } else this._watchedIntraday.deleteValue(), this._watchedSeconds.deleteValue(), this._watchedTicks.deleteValue(), this._watchedRange.deleteValue(), this._proSymbol.deleteValue()
                }
                _watchedIntervalListener(e) {
                    this._intervalProperty().value() !== e && this._chartWidgetCollection.setResolution(e)
                }
                _onIntervalPropertyChange() {
                    const e = this._intervalProperty().value() !== this._watchedInterval.value();
                    this._watchedInterval.setValue(this._intervalProperty().value()), e && this._chartWidgetCollection.setResolution(this._intervalProperty().value())
                }
                _onChartModelCreated(e) {
                    if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
                    this._chartWidgetBindingState = m.BoundToModel, this._activeChartWidget.modelCreated().unsubscribe(this, this._onChartModelCreated);
                    const t = this._symbolProperty();
                    t.subscribe(this, this._onSymbolPropertyChange), this._watchedSymbol.setValue(t.value()), this._watchedSymbol.subscribe(this._watchedSymbolListenerBound);
                    const s = this._mainSeries();
                    s.dataEvents().symbolResolved().subscribe(this, this._onSymbolResolved), this._watchedSymbol.hook = e => (s.symbolSameAsCurrent(e) && (e = s.symbol()), e), s.dataEvents().symbolResolved().subscribe(this, this._updateSeriesSymbolInfo), s.dataEvents().symbolError().subscribe(this, this._updateSeriesSymbolInfo), s.dataEvents().symbolNotPermitted().subscribe(this, this._updateSeriesSymbolInfo), s.dataEvents().symbolGroupNotPermitted().subscribe(this, this._updateSeriesSymbolInfo), this._updateSeriesSymbolInfo();
                    const i = this._intervalProperty();
                    i.subscribe(this, this._onIntervalPropertyChange), this._watchedInterval.setValue(i.value()), this._watchedInterval.subscribe(this._watchedIntervalListenerBound), this._activeChartWidget.readOnly() && (this._watchedSymbol.writeLock = !0)
                }
            }; {
                const e = (0, h.getFreshInitData)().symbolInfo,
                    t = e ? e.pro_symbol : u.getValue("editchart.model.symbol", window.DEFAULT_SYMBOL);
                y.symbol.setValue(t)
            }
            window.TradingViewApi || (window.TradingViewApi = {
                linking: y
            })
        }
    }
]);