(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [72324], {
        672324: (t, r, o) => {
            "use strict";
            o.d(r, {
                isSupportApiAvailable: () => u,
                supportApi: () => k
            });
            var e = o(685864),
                n = o(11767),
                s = o(987380);
            o(265194);
            const i = (0, s.getLogger)("Support.Api"),
                a = window.DATA_ISSUES_HOST,
                c = void 0 !== a ? a + "/api/v1" : void 0;

            function u() {
                return void 0 !== c
            }

            function h(t) {
                if (!u()) throw new Error("Helpdesk host is not defined.");
                return `${c}${t}`
            }
            const d = {
                    count: () => ({
                        method: "GET",
                        url: h("/tickets/count_by_userid")
                    }),
                    list: t => ({
                        method: "GET",
                        url: h("/tickets/by_userid/?page=" + t)
                    }),
                    get: t => ({
                        method: "GET",
                        url: h("/tickets/" + t)
                    }),
                    send: () => ({
                        method: "POST",
                        url: h("/tickets/save")
                    }),
                    close: () => ({
                        method: "POST",
                        url: h("/tickets/close")
                    }),
                    getSatisfactionRatings: t => ({
                        method: "GET",
                        url: h(`/tickets/${t}/get_satisfaction_ratings`)
                    }),
                    addSatisfactionRating: t => ({
                        method: "POST",
                        url: h(`/tickets/${t}/add_satisfaction_rating`)
                    })
                },
                l = {
                    list: t => ({
                        method: "GET",
                        url: h(`/tickets/${t}/comments`)
                    }),
                    send: () => ({
                        method: "POST",
                        url: h("/tickets/add_comment")
                    })
                },
                w = {
                    get: () => ({
                        method: "GET",
                        url: h("/unreads/get")
                    }),
                    update: () => ({
                        method: "PATCH",
                        url: h("/unreads/update")
                    }),
                    drop: () => ({
                        method: "PATCH",
                        url: h("/unreads/drop")
                    })
                },
                g = {
                    getPopulars: t => ({
                        method: "GET",
                        url: h("/solutions/popular/" + t)
                    }),
                    getTree: t => ({
                        method: "GET",
                        url: h("/solutions/get_solutions_tree/" + t)
                    }),
                    search: (t, r) => ({
                        method: "GET",
                        url: h(`/solutions/search/${t}?term=${r}`)
                    }),
                    get: (t, r) => ({
                        method: "GET",
                        url: h(`/solutions/${t}/${r}`)
                    })
                },
                f = {
                    get: () => ({
                        method: "GET",
                        url: h("/business_hours")
                    })
                },
                E = {
                    get: t => ({
                        method: "GET",
                        url: h("/freshdeskId/" + t)
                    })
                };

            function p(t, r, o) {
                const s = {
                    method: t,
                    credentials: "include"
                };
                return s.headers = new Headers, (0, n.isProd)() || (s.headers.set("X-UserId", String(window.user.id)), s.headers.set("X-UserPerm", JSON.stringify({
                    is_pro_admin: 1,
                    is_support_unreads_admin: 1
                }))), void 0 !== o && (s.headers.set("Content-Type", "application/json"), s.body = JSON.stringify(o)), (0, e.fetch)(r, s)
            }
            async function m(t) {
                const r = await t.text();
                if (!t.ok) throw new Error(`Response was not OK. Status: ${t.status}. Content: ${r}`);
                return r
            }
            async function y(t) {
                const r = await t.text();
                if (!t.ok) {
                    const o = JSON.parse(r);
                    if (o.code) throw new Error(o.code);
                    throw new Error(`Response was not OK. Status: ${t.status}. Content: ${r}`)
                }
                try {
                    return JSON.parse(r)
                } catch (o) {
                    throw new Error(`Failed to parse JSON response (at ${t.url}). Original error: "${o.name}: ${o.message}". Tried to parse: ${r}`)
                }
            }
            const k = {
                tickets: {
                    count: async function() {
                        const {
                            method: t,
                            url: r
                        } = d.count();
                        try {
                            const o = await p(t, r);
                            return await y(o)
                        } catch (t) {
                            throw i.logError("Error while fetching tickets count. " + t), t
                        }
                    },
                    list: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = d.list(t);
                        try {
                            const t = await p(r, o);
                            return await y(t)
                        } catch (t) {
                            throw i.logError("Error while fetching tickets. " + t), t
                        }
                    },
                    get: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = d.get(t);
                        try {
                            const t = await p(r, o);
                            return await y(t)
                        } catch (r) {
                            throw i.logError(`Error while fetching ticket ${t}. ` + r), r
                        }
                    },
                    send: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = d.send();
                        try {
                            const e = await p(r, o, t);
                            return await y(e)
                        } catch (t) {
                            throw i.logError("Error while sending new ticket. " + t), t
                        }
                    },
                    close: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = d.close();
                        try {
                            const e = await p(r, o, t);
                            return await y(e)
                        } catch (r) {
                            throw i.logError(`Error while fetching ticket ${t.reportId}. ` + r), r
                        }
                    },
                    getSatisfactionRatings: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = d.getSatisfactionRatings(t);
                        try {
                            const t = await p(r, o);
                            return await y(t)
                        } catch (t) {
                            throw i.logError("Error while fetching ticket satisfaction ratings. " + t), t
                        }
                    },
                    addSatisfactionRating: async function(t, r) {
                        const {
                            method: o,
                            url: e
                        } = d.addSatisfactionRating(t);
                        try {
                            const t = await p(o, e, r);
                            return await y(t)
                        } catch (t) {
                            throw i.logError("Error while sending new ticket satisfaction rating. " + t), t
                        }
                    }
                },
                conversations: {
                    list: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = l.list(t);
                        try {
                            const t = await p(r, o);
                            return await y(t)
                        } catch (t) {
                            throw i.logError("Error while fetching ticket conversations. " + t), t
                        }
                    },
                    send: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = l.send();
                        try {
                            const e = await p(r, o, t);
                            return await y(e)
                        } catch (t) {
                            throw i.logError("Error while sending new ticket note. " + t), t
                        }
                    }
                },
                unreads: {
                    get: async function() {
                        const {
                            method: t,
                            url: r
                        } = w.get();
                        try {
                            const o = await p(t, r);
                            return await y(o)
                        } catch (t) {
                            throw i.logWarn("Error while fetching support unreads count. " + t), t
                        }
                    },
                    update: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = w.update();
                        try {
                            const e = await p(r, o, t);
                            await m(e)
                        } catch (t) {
                            throw i.logError("Error while updating ticket conversations unreads. " + t), t
                        }
                    },
                    drop: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = w.drop();
                        try {
                            const e = await p(r, o, t);
                            await m(e)
                        } catch (t) {
                            throw i.logError("Error while dropping ticket conversations unreads. " + t), t
                        }
                    }
                },
                solutions: {
                    getPopulars: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = g.getPopulars(t);
                        try {
                            const t = await p(r, o);
                            return await y(t)
                        } catch (t) {
                            throw i.logError("Error while fetching popular solutions. " + t), t
                        }
                    },
                    getTree: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = g.getTree(t);
                        try {
                            const t = await p(r, o);
                            return await y(t)
                        } catch (t) {
                            throw i.logError("Error while fetching solutions tree. " + t), t
                        }
                    },
                    search: async function(t, r) {
                        const {
                            method: o,
                            url: e
                        } = g.search(t, r);
                        try {
                            const t = await p(o, e);
                            return await y(t)
                        } catch (t) {
                            throw i.logError("Error while searching solutions. " + t), t
                        }
                    },
                    get: async function(t, r) {
                        const {
                            method: o,
                            url: e
                        } = g.get(t, r);
                        try {
                            const t = await p(o, e);
                            return await y(t)
                        } catch (r) {
                            throw i.logError(`Error while fetching solution ${t}. ` + r), r
                        }
                    }
                },
                businessHours: {
                    get: async function() {
                        const {
                            method: t,
                            url: r
                        } = f.get();
                        try {
                            const o = await p(t, r);
                            return await y(o)
                        } catch (t) {
                            throw i.logError("Error while fetching support business hours. " + t), t
                        }
                    }
                },
                freshdeskId: {
                    get: async function(t) {
                        const {
                            method: r,
                            url: o
                        } = E.get(t);
                        try {
                            const t = await p(r, o);
                            return await y(t)
                        } catch (t) {
                            throw i.logWarn("Error while fetching user Freshdesk ID. " + t), t
                        }
                    }
                }
            }
        }
    }
]);