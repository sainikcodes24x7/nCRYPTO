(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [87380], {
        987380: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                LOGLEVEL: () => g,
                getLogLevel: () => N,
                isHighRateEnabled: () => R,
                setLogLevel: () => d,
                getRawLogHistory: () => I,
                serializeLogHistoryEntry: () => h,
                getLogHistory: () => O,
                getLogger: () => p,
                loggingOn: () => w,
                loggingOff: () => S
            });
            const n = "undefined" != typeof window ? window : {};
            let l = !1;
            try {
                localStorage.getItem(""), l = !0
            } catch (e) {}
            var g;
            ! function(e) {
                e[e.ERROR = 1] = "ERROR", e[e.WARNING = 2] = "WARNING", e[e.INFO = 3] = "INFO", e[e.NORMAL = 4] = "NORMAL", e[e.DEBUG = 5] = "DEBUG"
            }(g || (g = {}));
            let r = 0;
            const a = [];
            let i = null,
                c = null,
                s = null,
                u = NaN,
                m = g.WARNING,
                f = !1;

            function N() {
                return m
            }

            function R() {
                return f
            }

            function d(e) {
                e = Math.max(g.ERROR, Math.min(g.DEBUG, e)), m = e, E()
            }

            function I(e, t) {
                let o = a.reduce((e, t) => e.concat(t), []);
                return o.sort((e, t) => e.id - t.id), void 0 !== t && (o = o.filter(e => e.subSystemId === t)), "number" == typeof e && (o = o.slice(-e)), o
            }

            function h(e) {
                return new Date(e.timestamp).toISOString() + ":" + e.subSystemId + ":" + e.message.replace(/"/g, "'")
            }

            function O(e, t) {
                return function(e, t) {
                    let o, n = 0,
                        l = 0;
                    for (o = e.length - 1; o >= 1 && (n += 8 * (1 + encodeURIComponent(e[o]).length), !(o - 1 > 0 && (l = 8 * (1 + encodeURIComponent(e[o - 1]).length), n + l > t))); o--);
                    return e.slice(o)
                }(I(e, t).map(h), 75497472)
            }

            function b(e, t, o, n) {
                if (t === c && n.id === s) return;
                const l = new Date;
                if (e <= g.NORMAL && function(e, t, o, n, l) {
                        const g = {
                            id: r,
                            message: String(t),
                            subSystemId: n,
                            timestamp: Number(e)
                        };
                        r += 1, o.push(g), void 0 !== l && o.length > l && o.splice(0, 1)
                    }(l, t, o, n.id, n.maxCount), e <= m && (!n.highRate || R()) && (!i || n.id.match(i))) {
                    const o = l.toISOString() + ":" + n.id + ":" + t;
                    switch (e) {
                        case g.DEBUG:
                            console.debug(o);
                            break;
                        case g.INFO:
                        case g.NORMAL:
                            n.color ? console.log("%c" + o, "color: " + n.color) : console.log(o);
                            break;
                        case g.WARNING:
                            console.warn(o);
                            break;
                        case g.ERROR:
                            console.error(o)
                    }
                    c = t, s = n.id, u && clearTimeout(u), u = setTimeout(() => {
                        c = null, s = null, u = NaN
                    }, 1e3)
                }
            }

            function p(e, t = {}) {
                const o = [];
                a.push(o);
                const n = Object.assign(t, {
                    id: e
                });

                function l(e) {
                    return t => b(e, t, o, n)
                }
                return {
                    logDebug: l(g.DEBUG),
                    logError: l(g.ERROR),
                    logInfo: l(g.INFO),
                    logNormal: l(g.NORMAL),
                    logWarn: l(g.WARNING)
                }
            }
            const v = p("logger"),
                w = n.lon = (e, t) => {
                    d(g.DEBUG), v.logNormal("Debug logging enabled"), f = Boolean(e), i = t || null, E()
                },
                S = n.loff = () => {
                    d(g.INFO), v.logInfo("Debug logging disabled")
                };

            function E() {
                try {
                    l && (localStorage.setItem("tv.logger.logHighRate", String(f)), localStorage.setItem("tv.logger.loglevel", String(m)))
                } catch (e) {
                    v.logWarn(`Cannot save logger state (level: ${m}, high-rate: ${f}) to localStorage: ${e.message}`)
                }
            }! function() {
                f = !!l && "true" === localStorage.getItem("tv.logger.logHighRate");
                let e = parseInt(l && localStorage.getItem("tv.logger.loglevel") || "");
                Number.isNaN(e) && (e = g.WARNING), d(e), v.logNormal(`Init with settings - level: ${m}, high-rate: ${f}`)
            }(), n.performance && n.performance.now ? v.logNormal("Sync logger and perf times, now is " + n.performance.now()) : v.logWarn("Perf time is not available")
        }
    }
]);