(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [267], {
        465754: (_, e, S) => {
            "use strict";
            var T;
            S.d(e, {
                    BillingCycle: () => T
                }),
                function(_) {
                    _.Monthly = "m", _.ThreeMonths = "3m", _.OneYear = "y", _.TwoYears = "2y"
                }(T || (T = {}))
        },
        588015: (_, e, S) => {
            "use strict";
            S.r(e), S.d(e, {
                TRIAL_SUFFIX: () => i,
                EA_SUFFIX: () => A,
                CUSTOM_SUFFIX: () => r,
                billingCycleToTimeUnit: () => R,
                getReadableCycle: () => n,
                billingPeriodText: () => l,
                isEarlyAccess: () => I,
                isTrialProduct: () => o,
                getProductForTrial: () => a,
                getDiscountFromEarlyAccess: () => L,
                toEarlyAccess: () => O,
                humanizeProPlan: () => C,
                humanizeCardPlan: () => s,
                getAmountOfDaysForBillingCycle: () => N,
                countDiscountByBillingCycle: () => u,
                billingCycleToMonth: () => P,
                round2: () => D,
                round0: () => c,
                floor0: () => m,
                round2or0: () => d,
                round1or0: () => U,
                roundMinimal: () => M,
                getPlanName: () => H
            });
            S(568421);
            var T = S(120220),
                E = S(808276),
                t = S(465754);
            const i = "_trial",
                A = "_discount",
                r = "_custom";

            function R(_) {
                return {
                    y: T.t("year", {
                        plural: "years",
                        count: 1
                    }),
                    m: T.t("month", {
                        plural: "months",
                        count: 1
                    }),
                    "3m": T.t("three months"),
                    "2y": T.t("two years")
                }[_]
            }

            function n(_) {
                return {
                    m: T.t("monthly"),
                    y: T.t("annually"),
                    "3m": T.t("3 months"),
                    "2y": T.t("2-year")
                }[_] || ""
            }

            function l(_) {
                var e;
                return null !== (e = {
                    y: T.t("Billed every year."),
                    m: T.t("Billed every month."),
                    "2y": T.t("Billed every two years.")
                }[_]) && void 0 !== e ? e : ""
            }

            function I(_) {
                return /\d{0,2}_discount$/.test(_)
            }

            function o(_) {
                return new RegExp(i + "$").test(_)
            }

            function a(_) {
                return _.split(i)[0]
            }

            function L(_) {
                const e = _.match(new RegExp("^(d{0,2})" + A + "$"));
                return e ? +e[1] || 50 : 0
            }

            function O(_, e) {
                return `${_}_${e}${A}`
            }

            function C(_, e) {
                let S = _;
                switch (_) {
                    case E.ProPlans.Pro:
                        S = "Pro";
                        break;
                    case E.ProPlans.ProRealtime:
                        S = "Pro+";
                        break;
                    case E.ProPlans.ProPremium:
                        S = "Premium";
                        break;
                    case E.ProPlans.ProMiniAds:
                    case E.ProPlans.ProMiniLayouts:
                    case E.ProPlans.ProMiniAlerts:
                        S = T.t("1-feature");
                        break;
                    case E.ProPlans.ProEdu:
                        S = T.t("Rookie")
                }
                return e && (S += " " + T.t("trial")), S
            }

            function s(_) {
                let e = _;
                switch (_) {
                    case E.ProPlans.Pro:
                        e = "Pro";
                        break;
                    case E.ProPlans.ProRealtime:
                        e = "Pro+";
                        break;
                    case E.ProPlans.ProPremium:
                        e = "Premium";
                        break;
                    case E.ProPlans.Free:
                        e = "Basic"
                }
                return e
            }

            function N(_) {
                switch (_) {
                    case t.BillingCycle.TwoYears:
                        return 730;
                    case t.BillingCycle.OneYear:
                        return 365;
                    case t.BillingCycle.ThreeMonths:
                        return 90;
                    case t.BillingCycle.Monthly:
                        return 30;
                    default:
                        return 1
                }
            }

            function u(_, e, S) {
                return Math.round((e - _) * P(S))
            }

            function P(_) {
                switch (_) {
                    case t.BillingCycle.TwoYears:
                        return 24;
                    case t.BillingCycle.OneYear:
                        return 12;
                    default:
                        return 1
                }
            }

            function D(_) {
                return (Math.round(100 * _) / 100).toFixed(2)
            }

            function c(_) {
                const e = Math.round(100 * _) / 100;
                return Math.round(e).toFixed(0)
            }

            function m(_) {
                return Math.floor(_).toString()
            }

            function d(_) {
                const e = Math.round(100 * _) / 100,
                    S = Math.round(e);
                return Math.abs(e - S) > 0 ? e.toFixed(2) : S.toFixed(0)
            }

            function U(_) {
                return Number.isInteger(_) ? _.toFixed(0) : (Math.round(10 * _) / 10).toFixed(1)
            }

            function M(_) {
                const e = Math.round(100 * _) / 100,
                    S = Math.round(10 * _) / 10,
                    T = Math.round(e);
                return Math.abs(e - T) > 0 ? Math.abs(e - S) > 0 ? e.toFixed(2) : S.toFixed(1) : T.toFixed(0)
            }

            function H(_) {
                const e = T.t("{proPlanName} Trial");
                if (o(_)) {
                    const S = C(a(_));
                    return e.format({
                        proPlanName: S
                    })
                }
                return C(_)
            }
        },
        903851: (_, e, S) => {
            "use strict";
            S.d(e, {
                enabled: () => r,
                getConfig: () => R
            });
            const T = JSON.parse('{"free":{"CHART_STORAGE":{"limit":1},"MULTIPLE_CHARTS":{"limit":1},"INDICATORS_ON_CHART":{"limit":3},"HISTORICAL_BARS":{"limit":5},"STUDY_ON_STUDY":{"limit":270,"child_limit":1},"SERVER_SIDE_ALERTS":{"limit":1},"SCREENER_ALERTS":{"limit":1},"SCREENER_INTERVALS":{"interval":["1D","1W","1M"]},"STUDY_TEMPLATES":{"limit":1},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]}},"__legacy_pro":{"CHART_STORAGE":{"limit":99999},"MULTIPLE_CHARTS":{"limit":8},"CUSTOM_INTERVALS":{},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"INDICATORS_ON_CHART":{"limit":99999},"HISTORICAL_BARS":{"limit":10},"TV_VOLUMEBYPRICE":{"study_packages":["tv-volumebyprice"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":99999},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":20},"SCREENER_ALERTS":{"limit":99999},"SCREENER_AUTO_REFRESH":{},"SCREENER_EXPORT_DATA":{},"DEEP_HISTORY_BACKTEST":{},"SCREENER_INTERVALS":{"interval":["1m","5m","15m","30m","1h","2h","4h","1D","1W","1M"]},"NO_SPONSORED_ADS":{},"STUDY_TEMPLATES":{"limit":99999},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDC_AVAILABLE_DELAY":{},"STATUS":{"disable_on_trial":true},"MULTIFLAGGED_SYMBOLS_LISTS":{},"BAR_REPLAY_INTRADAY":{},"SHOWS":{"disable_on_trial":true},"ALERTS_WEBHOOK":{},"DEEP_FUNDAMENTALS_HISTORY":{},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram"],"disable_on_trial":true},"MULTI_MONITOR":{},"PUBLISH_PROTECTED_SCRIPTS":{"disable_on_trial":true}},"__legacy_pro_realtime":{"extends":"__legacy_pro","TV_PROSTUDIES":{"study_packages":["tv-prostudies"]},"SERVER_SIDE_ALERTS":{"limit":1000},"CAN_EDIT_PUBLIC_CHATS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"CUSTOM_FORMULAS":{},"INTRADAY_EXOTIC_CHARTS":{}},"__legacy_pro_premium":{"extends":"__legacy_pro_realtime","ALERTS_TRUE_SMS":{"disable_on_trial":true},"HISTORICAL_BARS":{"limit":20},"IDEA_SIGNATURE":{"disable_on_trial":true},"PROFILE_WEBSITE_FIELD":{"disable_on_trial":true},"ALERTS_NO_EXPIRATION":{},"PUBLISH_INVITE_ONLY_SCRIPTS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"ALERTS_ON_SECONDS":{},"PERMANENT_STREAM_RECORDS":{},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram","Website"],"disable_on_trial":true},"SECONDS_INTERVALS":{}},"pro":{"CHART_STORAGE":{"limit":5},"MULTIPLE_CHARTS":{"limit":2},"CUSTOM_INTERVALS":{},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"INDICATORS_ON_CHART":{"limit":5},"HISTORICAL_BARS":{"limit":10},"TV_VOLUMEBYPRICE":{"study_packages":["tv-volumebyprice"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":1},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":20},"SCREENER_ALERTS":{"limit":99999},"SCREENER_AUTO_REFRESH":{},"SCREENER_EXPORT_DATA":{},"DEEP_HISTORY_BACKTEST":{},"SCREENER_INTERVALS":{"interval":["1m","5m","15m","30m","1h","2h","4h","1D","1W","1M"]},"NO_SPONSORED_ADS":{},"STUDY_TEMPLATES":{"limit":99999},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDC_AVAILABLE_DELAY":{},"STATUS":{"disable_on_trial":true},"BAR_REPLAY_INTRADAY":{},"MULTIFLAGGED_SYMBOLS_LISTS":{},"SHOWS":{"disable_on_trial":true},"ALERTS_WEBHOOK":{},"DEEP_FUNDAMENTALS_HISTORY":{},"PUBLISH_PROTECTED_SCRIPTS":{"disable_on_trial":true},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram"],"disable_on_trial":true},"MULTI_MONITOR":{}},"pro_realtime":{"extends":"pro","CHART_STORAGE":{"limit":10},"MULTIPLE_CHARTS":{"limit":4},"INDICATORS_ON_CHART":{"limit":10},"TV_PROSTUDIES":{"study_packages":["tv-prostudies"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":9},"SERVER_SIDE_ALERTS":{"limit":100},"CAN_EDIT_PUBLIC_CHATS":{"disable_on_trial":true},"SIMULTANEOUS_CONNECTIONS":{"limit":2},"EXPORT_CHART_DATA":{},"CUSTOM_FORMULAS":{},"INTRADAY_EXOTIC_CHARTS":{}},"pro_premium":{"extends":"pro_realtime","CHART_STORAGE":{"limit":99999},"MULTIPLE_CHARTS":{"limit":8},"INDICATORS_ON_CHART":{"limit":25},"HISTORICAL_BARS":{"limit":20},"STUDY_ON_STUDY":{"limit":270,"child_limit":24},"SERVER_SIDE_ALERTS":{"limit":400},"SIMULTANEOUS_CONNECTIONS":{"limit":5},"ALERTS_TRUE_SMS":{"disable_on_trial":true},"IDEA_SIGNATURE":{"disable_on_trial":true},"PROFILE_WEBSITE_FIELD":{"disable_on_trial":true},"ALERTS_NO_EXPIRATION":{},"PUBLISH_INVITE_ONLY_SCRIPTS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"ALERTS_ON_SECONDS":{},"PERMANENT_STREAM_RECORDS":{},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram","Website"],"disable_on_trial":true},"SECONDS_INTERVALS":{}},"pro_mini_alerts":{"extends":"free","SERVER_SIDE_ALERTS":{"limit":30},"SCREENER_ALERTS":{"limit":99999},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_mini_ads":{"extends":"free","NO_SPONSORED_ADS":{},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_mini_layouts":{"extends":"free","MULTIPLE_CHARTS":{"limit":8},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_edu":{"extends":"free","CHART_STORAGE":{"limit":3},"MULTIPLE_CHARTS":{"limit":2},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":5},"SCREENER_ALERTS":{"limit":99999},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}}}'),
                E = JSON.parse('{"cme":{"INDICATORS_ON_CHART":{"limit":99999}},"bovespa":{"INDICATORS_ON_CHART":{"limit":99999}},"qecomqa":{"INDICATORS_ON_CHART":{"limit":99999}}}');
            var t = S(305803),
                i = S(808276),
                A = S(588015);

            function r(_, e, S) {
                let T = window.user;
                S && (T = S);
                const E = R(_, e, T);
                return !!E && !(E[t.ProductFeatures.DISABLE_ON_TRIAL] && (!T || T.is_trial))
            }

            function R(_, e, S) {
                var t;
                let r = function _(e) {
                    const S = T[e];
                    return S ? S.extends ? Object.assign({}, _(S.extends), S) : S : null
                }(e || function(_) {
                    let e = window.user;
                    _ && (e = _);
                    let S = (null == e ? void 0 : e.pro_plan) || i.ProPlans.Free;
                    const T = S !== i.ProPlans.Free && !(0, A.isTrialProduct)(S);
                    return T || (S = (0, A.getProductForTrial)(S)), T && e && !e.is_pro_limited && !e.new_pro_product_line && (S = "__legacy_" + S), S
                }(S));
                if (!r) return null;
                const R = null === (t = window.TradingView) || void 0 === t ? void 0 : t.widgetCustomer;
                return R && E[R] && (r = Object.assign({}, r, E[R])), r && r[_] || null
            }
        },
        305803: (_, e, S) => {
            "use strict";
            var T;
            S.d(e, {
                    ProductFeatures: () => T
                }),
                function(_) {
                    _.DISABLE_ON_TRIAL = "disable_on_trial", _.CUSTOM_INTERVALS = "CUSTOM_INTERVALS", _.CHART_STORAGE = "CHART_STORAGE", _.MULTIPLE_CHARTS = "MULTIPLE_CHARTS", _.MULTIPLE_WATCHLISTS = "MULTIPLE_WATCHLISTS", _.IMPORT_WATCHLISTS = "IMPORT_WATCHLISTS", _.EXPORT_WATCHLISTS = "EXPORT_WATCHLISTS", _.INDICATORS_ON_CHART = "INDICATORS_ON_CHART", _.STUDY_ON_STUDY = "STUDY_ON_STUDY", _.TICK_BY_TICK_PUSH_DATA = "TICK_BY_TICK_PUSH_DATA", _.SERVER_SIDE_ALERTS = "SERVER_SIDE_ALERTS", _.ALERTS_TRUE_SMS = "ALERTS_TRUE_SMS", _.PUBLISH_INVITE_ONLY_SCRIPTS = "PUBLISH_INVITE_ONLY_SCRIPTS", _.PUBLISH_PROTECTED_SCRIPTS = "PUBLISH_PROTECTED_SCRIPTS", _.SCREENER_ALERTS = "SCREENER_ALERTS", _.SCREENER_AUTO_REFRESH = "SCREENER_AUTO_REFRESH", _.SCREENER_EXPORT_DATA = "SCREENER_EXPORT_DATA", _.SCREENER_INTERVALS = "SCREENER_INTERVALS", _.SIMULTANEOUS_CONNECTIONS = "SIMULTANEOUS_CONNECTIONS", _.STUDY_TEMPLATES = "STUDY_TEMPLATES", _.CAN_EDIT_PUBLIC_CHATS = "CAN_EDIT_PUBLIC_CHATS", _.NO_SPONSORED_ADS = "NO_SPONSORED_ADS", _.IDC_AVAILABLE_DELAY = "IDC_AVAILABLE_DELAY", _.STATUS = "STATUS", _.ALERTS_NO_EXPIRATION = "ALERTS_NO_EXPIRATION", _.MULTIFLAGGED_SYMBOLS_LISTS = "MULTIFLAGGED_SYMBOLS_LISTS", _.BAR_REPLAY_INTRADAY = "BAR_REPLAY_INTRADAY", _.TV_VOLUMEBYPRICE = "TV_VOLUMEBYPRICE", _.ALERTS_WEBHOOK = "ALERTS_WEBHOOK", _.DEEP_FUNDAMENTALS_HISTORY = "DEEP_FUNDAMENTALS_HISTORY", _.EXPORT_CHART_DATA = "EXPORT_CHART_DATA", _.ALERTS_ON_SECONDS = "ALERTS_ON_SECONDS", _.PERMANENT_STREAM_RECORDS = "PERMANENT_STREAM_RECORDS", _.IDEA_SOCIAL_LINKS = "IDEA_SOCIAL_LINKS", _.EXTENDED_SOCIAL_LINKS = "EXTENDED_SOCIAL_LINKS", _.DEEP_HISTORY_BACKTEST = "DEEP_HISTORY_BACKTEST"
                }(T || (T = {}))
        },
        279407: (_, e, S) => {
            "use strict";
            async function T(_, e) {
                const T = await Promise.all([S.e(99459), S.e(23876), S.e(26822), S.e(61212), S.e(85597), S.e(60700), S.e(69756), S.e(88278), S.e(63193), S.e(24261), S.e(81594), S.e(11216), S.e(43424), S.e(19894), S.e(39351), S.e(41994), S.e(38890)]).then(S.bind(S, 441994));
                return T.showSimpleDialog(_, T.renameModule, e)
            }
            async function E(_, e) {
                const T = await Promise.all([S.e(99459), S.e(23876), S.e(26822), S.e(61212), S.e(85597), S.e(60700), S.e(69756), S.e(88278), S.e(63193), S.e(24261), S.e(81594), S.e(11216), S.e(43424), S.e(19894), S.e(39351), S.e(41994), S.e(38890)]).then(S.bind(S, 441994));
                return T.showSimpleDialog(_, T.confirmModule, e)
            }
            async function t(_, e) {
                const T = await Promise.all([S.e(99459), S.e(23876), S.e(26822), S.e(61212), S.e(85597), S.e(60700), S.e(69756), S.e(88278), S.e(63193), S.e(24261), S.e(81594), S.e(11216), S.e(43424), S.e(19894), S.e(39351), S.e(41994), S.e(38890)]).then(S.bind(S, 441994));
                return T.showSimpleDialog(_, T.warningModule, e)
            }
            S.r(e), S.d(e, {
                showRename: () => T,
                showConfirm: () => E,
                showWarning: () => t
            })
        }
    }
]);