(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [72226], {
        539018: (t, i, n) => {
            "use strict";
            n.r(i), n.d(i, {
                openSupportDialogOnLoad: () => e
            });
            var o = n(797087),
                u = n(672324);
            var r = n(417238);
            async function e() {
                const t = await async function() {
                        return window.is_authenticated && (0, u.isSupportApiAvailable)()
                    }(),
                    i = (0, r.getUrlParams)(),
                    n = function(t) {
                        if ("ticket" in t) {
                            const i = parseInt(t.ticket, 10);
                            return isNaN(i) ? null : i
                        }
                        return null
                    }(i);
                if (null !== n) return void(0, o.showSupportDialog)(t ? {
                    ticketId: n
                } : void 0);
                if (function(t) {
                        return "support-tickets" in t || "support" === window.location.hash.slice(1)
                    }(i)) return void(0, o.showSupportDialog)(t ? {
                    initialState: "tickets"
                } : void 0);
                (function(t) {
                    return "open-ticket" in t
                })(i) && (0, o.showSupportDialog)(t ? {
                    initialState: "open-ticket"
                } : void 0);
                const e = function(t) {
                    if ("solution" in t) {
                        const i = parseInt(t.solution, 10);
                        return isNaN(i) ? null : i
                    }
                    return null
                }(i);
                null === e ? function(t) {
                    return "support" in t
                }(i) && (0, o.showSupportDialog)() : (0, o.showSupportDialog)({
                    solutionId: e
                })
            }
        }
    }
]);