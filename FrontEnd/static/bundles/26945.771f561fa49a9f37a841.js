(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [26945], {
        780072: (e, t, n) => {
            "use strict";

            function o(e) {
                return ["forex", "bitcoin", "crypto"].includes(e)
            }
            n.d(t, {
                isCurrencySymbol: () => o
            })
        },
        526945: (e, t, n) => {
            "use strict";
            n.d(t, {
                getSymbolPagePath: () => i,
                makeSymbolChartUrl: () => y,
                makeSymbolFinancialsPageUrl: () => h,
                makeSymbolPageUrl: () => d,
                makeSymbolTimelinePageUrl: () => p,
                makeTemplateSymbolUrl: () => m
            });
            var o = n(744990);
            var r = n(450284),
                s = n(780072);

            function i(e, t) {
                return a(l(e, t), c(e))
            }

            function c(e) {
                const t = {
                    shortName: e.shortName,
                    exchange: e.exchange,
                    proName: e.proName,
                    type: e.type
                };
                return e.proName && e.proName.includes(":") && ([t.exchange, t.shortName] = e.proName.split(":")), t
            }

            function a(e, t) {
                const n = encodeURIComponent(t.shortName || ""),
                    o = encodeURIComponent(t.exchange || ""),
                    r = encodeURIComponent(t.proName || "");
                return e.replace("{tvexchange}", o).replace("{tvsymbol}", n).replace("{tvprosymbol}", r)
            }

            function l(e, t = "") {
                const n = ["UKOIL", "USOIL", "XAGAUD", "XAGCAD", "XAGCHF", "XAGEUR", "XAGGBP", "XAGHKD", "XAGJPY", "XAGUSD", "XAUAUD", "XAUCAD", "XAUCHF", "XAUEUR", "XAUGBP", "XAUHKD", "XAUJPY", "XAUNZD", "XAUUSD", "XPDUSD", "XPTUSD", "SPX"];
                return e.type && ["spread", "expression"].includes(e.type) ? e.proName ? "/symbols/spread/{tvprosymbol}/" + t : "/" + t : void 0 === e.shortName && void 0 === e.proName ? (console.warn("Params missed"), "/") : U(e) ? e.exchange ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : "/symbols/{tvsymbol}/" + t : e.exchange || e.proName ? e.shortName && n.includes(e.shortName) ? "/symbols/{tvsymbol}/" + t : "/symbols/{tvexchange}-{tvsymbol}/" + t : "/symbols/{tvsymbol}/" + t
            }

            function m(e, t) {
                let n = e;
                if (!/{tvsymbol}|{tvexchange}|{tvprosymbol}/.test(e)) {
                    let o = "tvprosymbol";
                    void 0 === t.proName && (o = "tvsymbol"), n = `${e}?tvwidgetsymbol={${o}}`
                }
                const o = a(n, c(t));
                if (!(0, r.isSafeUrl)(o)) throw new Error(`The symbol URL ${o} is not allowed.`);
                return o
            }

            function u(e, t, n, r) {
                const s = (window.locale_domains ? function(e, t) {
                    const n = t || window.locale || "en";
                    let o = e[n] ? e[n] : e.en;
                    return o = "tradingview.com" === o ? "www.tradingview.com" : o, o ? document.location.protocol + "//" + o : ""
                }(window.locale_domains, r) : window.location.origin) + a(e, c(t));
                return n ? (0, o.addUtmToUrl)(s, n) : s
            }

            function d(e, t, n, o) {
                return u(l(e, o), e, t, n)
            }

            function y(e, t) {
                return u("/chart/?symbol={tvprosymbol}", e, t)
            }

            function h(e, t, n) {
                return d(e, t, n, "financials-overview/")
            }

            function p(e, t, n) {
                return u(function(e) {
                    return e.exchange && !U(e) ? "/symbols/{tvexchange}-{tvsymbol}/history-timeline/" : "/symbols/{tvsymbol}/history-timeline/"
                }(e), e, t, n)
            }

            function U(e) {
                return !!e.type && (0, s.isCurrencySymbol)(e.type)
            }
        },
        450284: (e, t, n) => {
            "use strict";

            function o(e) {
                const t = document.createElement("a");
                return t.href = e, a(t) && c(t) && i(t)
            }

            function r(e) {
                const t = document.createElement("a");
                return t.href = e, c(t) && i(t)
            }

            function s(e) {
                return !e.split(/(\s+)/).filter(e => e.trim().length > 0).some(e => {
                    try {
                        const t = new URL(e);
                        return !(!t || !t.hostname.length) && !r(e)
                    } catch (e) {
                        return !1
                    }
                })
            }
            n.d(t, {
                isInternalUrl: () => o,
                isSafeUrl: () => r,
                validateUrlsInText: () => s,
                isInternalHost: () => l
            });
            const i = e => !e.username,
                c = e => "http:" === e.protocol || "https:" === e.protocol,
                a = e => e.hostname === location.hostname || !/^\d+\.\d+\.\d+\.\d+$/.test(e.hostname) && l(e.hostname);

            function l(e, t = window.location.hostname) {
                const n = "." === t.slice(-1) ? 3 : 2,
                    o = t.toLowerCase().split(".").slice(-n),
                    r = e.toLowerCase().split(".").slice(-o.length);
                return o.join(".") === r.join(".")
            }
        },
        744990: (e, t, n) => {
            "use strict";
            n.d(t, {
                addUtmToUrl: () => r
            });
            var o = n(661424);

            function r(e, t) {
                if (!/([a-zA-Z0-9.-]*tradingview.com)|localhost/.test(e)) return e;
                const n = (0, o.buildUtmQueryString)(t);
                if ("" === n) return e;
                const r = e.indexOf("?"),
                    s = e.indexOf("#"),
                    i = -1 !== s;
                if (-1 !== r && (!i || r < s)) {
                    return `${e.slice(0,r)}?${i?e.slice(r+1,s):e.slice(r+1)}&${n}${i?e.slice(s):""}`
                }
                if (i) {
                    return `${e.slice(0,s)}?${n}${e.slice(s)}`
                }
                return `${e}?${n}`
            }
        },
        661424: (e, t, n) => {
            "use strict";
            n.d(t, {
                filterUtmInfo: () => i,
                buildUtmQueryString: () => c,
                buildUtmQueryStringFromUrlParams: () => a
            });
            var o = n(417238),
                r = n(436170);
            const s = ["utm_source", "utm_medium", "utm_campaign"];

            function i(e) {
                const t = {};
                return s.forEach(n => {
                    const o = e[n];
                    "string" == typeof o && "" !== o && (t[n] = (0, r.htmlEscape)(o))
                }), t
            }

            function c(e, t = !1) {
                const n = (0, o.createUrlParams)(e);
                return n && t ? "?" + n : n
            }

            function a(e) {
                return c(i((0, o.getUrlParams)()), e)
            }
        }
    }
]);