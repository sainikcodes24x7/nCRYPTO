(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [93962], {
        93962: (e, t, r) => {
            "use strict";
            r.d(t, {
                sendRequest: () => R,
                sendRequestImmediately: () => b
            });
            var s = r(307833),
                n = r(987380);
            const a = (0, n.getLogger)("Alerts.Price.RequestCache");
            var o;

            function i(e, t = "") {
                a.logDebug(`${e} ${t}`)
            }! function(e) {
                const t = {};

                function r(e) {
                    const r = n(e);
                    return t[r] && i("got from cache", r), t[r] ? t[r].self : null
                }

                function s(e, r = !1) {
                    const s = n(e),
                        a = t[s];
                    if (a)
                        if (r) a.clearCacheTimeoutId && clearTimeout(a.clearCacheTimeoutId), delete t[s], i("removed immediately", s);
                        else {
                            const e = 5e3;
                            a.clearCacheTimeoutId = setTimeout(() => {
                                delete t[s], i("removed timeout", s)
                            }, e)
                        }
                }

                function n(e) {
                    return JSON.stringify(e)
                }
                e.set = function(e, a) {
                    const o = n(e);
                    r(e) && s(e, !0), t[o] = {
                        self: a
                    }, i("added", o), a.then(t => (s(e), t)).catch(t => (s(e, !0), t))
                }, e.get = r, e.isCachable = function(e) {
                    return "list_alerts" === e.method || "list_events" === e.method
                }
            }(o || (o = {}));
            var l = r(75443);
            const c = (0, n.getLogger)("Alerts.Price.MergedGetAlertsRequrest");
            var d;

            function u(e, t) {
                const r = t ? JSON.stringify(t) : "";
                c.logDebug(`${e} ${r}`)
            }! function(e) {
                const t = {};
                let r = null,
                    s = null;

                function n(e) {
                    delete t[e], Object.keys(t).length || (s = null, r = null)
                }
                e.isMergable = function(e) {
                    return "get_alert" === e.method || "get_alerts" === e.method
                }, e.mergeRequest = function(e) {
                    const a = (0, l.guid)(),
                        o = new Promise((t, n) => {
                            u("personal promise - creating", e),
                                function(e) {
                                    let t = [];
                                    "id" in e.params ? t = [e.params.id] : "ids" in e.params && (t = e.params.ids);
                                    s ? s.params.ids = s.params.ids.concat(t) : s = {
                                        method: "get_alerts",
                                        params: {
                                            ids: t
                                        }
                                    }
                                }(e),
                                function() {
                                    r || (u("merged promise - creating"), r = new Promise((e, t) => {
                                        setTimeout(() => {
                                            s ? (u("send request to server - timeout"), b(s).then(t => {
                                                e(t)
                                            }).catch(t)) : t("No data to send request")
                                        }, 500)
                                    }), r.then(e => u("merged promise - resolved")), r.catch(e => u("merged promise - rejected")));
                                    return r
                                }().then(r => {
                                    const s = function(e, t) {
                                        const r = t.alerts || [];
                                        let s = null;
                                        if ("get_alert" === e.method) {
                                            const t = r.filter(t => t.id === e.params.id)[0];
                                            t && (s = {
                                                alert: t
                                            })
                                        } else if ("get_alerts" === e.method) {
                                            const t = e.params.ids,
                                                n = [];
                                            for (let e = t.length - 1; e >= 0; e--) {
                                                const s = t[e];
                                                for (let e = r.length - 1; e >= 0; e--) {
                                                    const t = r[e];
                                                    if (t.id === s) {
                                                        n.push(t);
                                                        break
                                                    }
                                                }
                                            }
                                            n.length && (s = {
                                                alerts: n
                                            })
                                        }
                                        return s
                                    }(e, r);
                                    s ? (u("personal promise - resolved", e), t(s)) : (u("personal promise - rejected", e), n("not_exists"))
                                }).catch(n)
                        });
                    return o.then(e => (n(a), e)).catch(e => (n(a), e)),
                        function(e, r) {
                            t[e] = r
                        }(a, o), o
                }
            }(d || (d = {}));
            var m = r(654279);
            const g = (0, n.getLogger)("Alerts.Price.MergedClearShownEventsRequest");
            class h {
                constructor(e) {
                    this._mergedRequest = null, this._mergedIds = new Set, this._delay = e
                }
                mergeRequest(e) {
                    if (e.params.alerts_ids.forEach(e => this._mergedIds.add(e)), !this._mergedRequest) {
                        const e = this._mergedRequest = (0, m.sleep)(this._delay).then(() => {
                            if (this._mergedRequest === e) {
                                const e = Array.from(this._mergedIds);
                                g.logDebug("Sending merged request with ids " + e);
                                const t = b({
                                    method: "clear_shown_events",
                                    params: {
                                        alerts_ids: e
                                    }
                                });
                                return t.then(() => {
                                    g.logDebug(`Merged request for ids ${e} has succeeded`), this.cancel()
                                }, () => {
                                    g.logDebug(`Merged request for ids ${e} has failed`), this.cancel()
                                }), t
                            }
                            throw "cancelled"
                        })
                    }
                    return this._mergedRequest
                }
                cancel() {
                    this._mergedRequest = null, this._mergedIds.clear()
                }
            }
            var f;
            ! function(e) {
                const t = new h(5e3);
                e.isMergable = function(e) {
                    return "clear_shown_events" === e.method
                }, e.mergeRequest = function(e) {
                    return t.mergeRequest(e)
                }
            }(f || (f = {}));
            var _ = r(110164),
                p = r(685864);
            const v = (0, n.getLogger)("Alerts.Price.Request"),
                q = window.initData.price_alerts_url || "";
            s.enabled("alerts") && !q && v.logError("Url not passed");
            const w = new Set(["create_alert", "stop_alert", "stop_all", "restart_alert", "restart_all", "delete_alert", "delete_all", "delete_events", "update_extra", "get_offline_events", "restart_alerts", "stop_alerts", "clone_alerts", "delete_alerts"]);

            function R(e) {
                if (e.method && w.has(e.method)) {
                    const t = Object.assign({}, e.params);
                    e.params && "extra" in e.params && (t.extra = JSON.parse(e.params.extra)), v.logNormal(JSON.stringify({
                        m: e.method,
                        p: t
                    }))
                }
                if (d.isMergable(e)) return d.mergeRequest(e);
                if (f.isMergable(e)) return f.mergeRequest(e);
                if (o.isCachable(e)) {
                    let t = o.get(e);
                    return t || (t = b(e), o.set(e, t)), t
                }
                return b(e)
            }

            function b(e) {
                if (!q) return Promise.reject("no_alerts_url");
                if (!window.is_authenticated) return Promise.reject("not_authenticated");
                const t = e.method,
                    r = {
                        body: JSON.stringify({
                            m: t,
                            p: e.params
                        }),
                        credentials: "include",
                        method: "POST",
                        headers: e.headers
                    },
                    s = (new Date).getTime(),
                    n = `${q}?log_username=${window.user.username}&log_method=${t}`;
                return (0, p.fetch)(n, r, {
                    logBodyOnError: !0
                }).then(e => {
                    _.telemetry.sendReport("alerts", "api_http_status", {
                        value: e.status
                    });
                    const t = (new Date).getTime() - s;
                    return _.telemetry.sendReport("alerts", "api_time_frame", {
                        value: t
                    }), e.json()
                }).then(e => "success" === e.m ? e.p : "error" === e.m ? Promise.reject(e.p.reason || "Unexpected server response") : Promise.reject("Unexpected server response")).catch(e => e instanceof Error ? Promise.reject("Failed to fetch price-alerts: " + e) : Promise.reject(e))
            }
        },
        654279: (e, t, r) => {
            "use strict";

            function s(e) {
                return new Promise(t => {
                    setTimeout(t, e)
                })
            }
            r.d(t, {
                sleep: () => s
            })
        }
    }
]);