(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [38578], {
        765679: (e, a, t) => {
            "use strict";
            t.d(a, {
                getEarlyAccessDiscount: () => l,
                getVisitEarlyAccessPaymentPageProperties: () => c,
                visitEarlyAccessPaymentPage: () => u,
                fill: () => d
            });
            var o = t(465754),
                n = t(808276),
                i = t(588015),
                r = t(184257),
                s = t(15642);

            function l() {
                return window.user && window.user.available_offers && window.user.available_offers.early_access ? window.user.available_offers.early_access.max_discount : null
            }

            function c(e, a, t = {}) {
                return e = e || n.ProPlans.ProRealtime, (a = a || l()) && (e = "{0}_{1}{2}".format(e, a, i.EA_SUFFIX)), {
                    billingCycle: o.BillingCycle.OneYear,
                    options: {
                        fixedCycle: !1,
                        paymentMethod: t.paymentMethod,
                        productName: e
                    }
                }
            }

            function u(e, a, t = {}) {
                const {
                    billingCycle: o,
                    options: n
                } = c(e, a, t);
                (0, r.visitPaymentPage)(o, n)
            }

            function d(e) {
                var a;
                const o = document.querySelector(".js-early-access-area"),
                    n = l(),
                    i = window.user.available_offers ? null === (a = window.user.available_offers[s.OFFERS.early_access]) || void 0 === a ? void 0 : a.expire_on : void 0;
                o && n && i && async function(e, a) {
                    (await Promise.all([t.e(36778), t.e(97259), t.e(61162), t.e(11216), t.e(14563), t.e(1114), t.e(78855), t.e(71854)]).then(t.bind(t, 175449))).renderEarlyBirdBanner(e, a)
                }(o, {
                    discount: n,
                    onButtonClick: e,
                    expiration: i
                }).then(() => {
                    o.classList.remove("js-hidden")
                })
            }
        },
        625672: (e, a, t) => {
            "use strict";
            var o = t(918184),
                n = t(120220).t,
                i = t(655119).TVLocalStorage,
                r = t(561203).trialMessageSuccessDialog,
                s = t(296420).startFreeTrialDialog,
                l = t(801728).getEarlyBirdDialogDay,
                c = t(404839).showEarlyBirdDialog,
                u = t(997929).showSixMonthsDialog,
                d = t(539894).blackFridayDialog,
                f = t(417238).getUrlParams,
                p = t(184257).visitPaymentPage,
                _ = t(929098).trackEvent,
                h = t(588015),
                w = t(765679).fill,
                v = t(53205).fill,
                g = t(598707).fill,
                m = t(993075).fill,
                y = t(765679).visitEarlyAccessPaymentPage,
                b = t(765679).getEarlyAccessDiscount,
                P = t(342098),
                k = t(15642).OFFERS,
                D = t(311930).TrialTokenStates;
            const {
                qaGlobals: x
            } = t(265194);
            var S = t(685864).fetch,
                F = t(808276).ProPlans,
                T = t(465754).BillingCycle,
                C = t(771073).getTracker,
                E = t(968724).onGoPro,
                O = t(968724).onOrder,
                B = t(423946).createGoProDialog,
                M = t(442926).PredefinedAction,
                R = t(280271).check;

            function N() {
                this._inited = !1
            }
            var V = new N;
            N.prototype.init = function() {
                if (!this._inited) return this._inited = !0, G(), !0
            };
            var A = n("Now you have even more tools and features to make your trading successful."),
                W = n("Your trial was successfully downgraded. You can always upgrade again to a more powerful plan before it runs out."),
                j = n("The amount charged at the end of the trial (if you don’t cancel) also reflects the new plan."),
                Y = "<p>" + A + "</p><p><span>" + j + "</span></p>",
                q = "<p>" + W + "</p><p><span>" + j + "</span></p>",
                G = function() {
                    function e(e) {
                        _("ProRT trial", e)
                    }

                    function a(e, a) {
                        return function(e) {
                            var a = o.Deferred();
                            e = e || {};
                            var i = new FormData;
                            return i.append("product_id", e.product_id), S("/trial/change/", {
                                method: "POST",
                                credentials: "include",
                                headers: new Headers({
                                    acccept: "application/json",
                                    "X-Requested-With": "XMLHttpRequest"
                                }),
                                body: i
                            }).then((function(e) {
                                return e.json()
                            })).then((function(o) {
                                ! function(e, a) {
                                    if (!e.code) return !1;
                                    var o, i = h.humanizeProPlan(a.product_id),
                                        r = "",
                                        s = n("{proPlanName} Trial").format({
                                            proPlanName: i
                                        }),
                                        l = n("Sorry, {proPlanName} trial could not be set.").format({
                                            proPlanName: i
                                        }),
                                        c = n("Close", {
                                            context: "input"
                                        });
                                    switch (e.code) {
                                        case "user_has_product":
                                            r = x(n("You already have {proPlanName} trial.").format({
                                                proPlanName: i
                                            }), l);
                                            break;
                                        case "trial_failed":
                                            r = x(n("You are already PRO. {proPlanName} trial cannot be activated on PRO accounts.").format({
                                                proPlanName: i
                                            }), l);
                                            break;
                                        case "unable_find_order":
                                        case "unable_change_trial":
                                        case "unable_update_subscription":
                                            r = x(n("We were unable to change your subscription plan to {proPlanName}. Please try again.").format({
                                                proPlanName: i
                                            }), n("Something went wrong."));
                                            break;
                                        case "user_not_on_trial":
                                            r = x(n("Wrong product for trial"), l);
                                            break;
                                        case "trial_not_available":
                                            s = n("Trial is not available", {
                                                context: "prohibited_trial"
                                            }), r = x(n("A trial could not be applied to this account. You can purchase a plan to take advantage of extra features.")), c = n("Pay now", {
                                                context: "prohibited_trial"
                                            }), o = function() {
                                                p(T.OneYear, {
                                                    paymentMethod: "paypal",
                                                    productName: a.product_id
                                                })
                                            }
                                    }
                                    return Promise.all([t.e(70964), t.e(38817), t.e(91877), t.e(59456), t.e(25535), t.e(5058), t.e(11216), t.e(99752), t.e(64011), t.e(7562), t.e(29201)]).then(t.bind(t, 613450)).then(({
                                        warningDialog: e
                                    }) => {
                                        const a = e({
                                            title: s,
                                            content: r,
                                            closeButtonText: c
                                        }).open();
                                        o && a.on("action:no", o)
                                    }), !0
                                }(o, e) ? a.resolve(): a.reject()
                            })), a.promise()
                        }({
                            product_id: e
                        }).done((function() {
                            r({
                                title: n("Congrats! Your new trial is setup"),
                                content: a || Y
                            }).then((function(e) {
                                e.on("afterClose", (function() {
                                    TradingView.onChartPage || location.reload()
                                }))
                            }))
                        }))
                    }

                    function x(e, a) {
                        return a && (a = "<p>" + a + "</p>"), "<div>" + (a || "") + (e ? "<p>" + e + "</p>" : "") + "</div>"
                    }

                    function N(e) {
                        I() && (e = e || {}, is_authenticated && R().then(a => {
                            a ? Promise.resolve().then(t.bind(t, 90645)).then(({
                                showRestrictedCountryNotificationDialog: e
                            }) => {
                                e()
                            }) : function(e) {
                                var a = {
                                    startTrial: (e = e || {}).product_id,
                                    billingCycle: e.billing_cycle,
                                    proContext: e.proContext
                                };
                                window.TVDialogs && window.TVDialogs.signModal ? window.TVDialogs.signModal.on("afterClose", (function() {
                                    s(a)
                                })) : s(a)
                            }(e)
                        }))
                    }

                    function A(a) {
                        var t = function() {
                            var t = (a = a || {}).discount = a.discount || b();
                            if (user.is_trial && t && !O() && !E()) {
                                var o = user.available_offers[k.early_access],
                                    n = a.trialDaysPassed || void 0 !== o && o.trial_days_passed,
                                    i = function(e, a) {
                                        return "early_bird_dialog_" + l(e, a)
                                    }(a.state, n),
                                    r = {
                                        state: a.state,
                                        trialDaysPassed: n,
                                        discount: t,
                                        maxDiscount: o.max_discount,
                                        actionHref: "/gopro/?source=early_bird_dialog&feature=show_options",
                                        onActionClick: function() {
                                            G(i, "accept", window.user.id), runOrSignIn((function() {
                                                W("popup with discount: {0}%".format(t))
                                            }), {
                                                source: "Early access trial dialog"
                                            })
                                        },
                                        onClose: function() {
                                            G(i, "decline", window.user.id), a.onDecline ? a.onDecline() : function(a) {
                                                e("Offer declined with discount: {0}%".format(a)), j()
                                            }(t)
                                        },
                                        root: document.createElement("div")
                                    };
                                c(r), G(i, "open", window.user.id), e(a.ga_shown_msg || "Early access dialog shown with {0}% discount".format(t))
                            }
                        };
                        "undefined" != typeof pro ? pro.runOrUpdate(t) : t()
                    }

                    function W(a) {
                        j(), e("GoPro after trial: {0}".format(a))
                    }

                    function j() {
                        o.get("/accounts/update-trial-marker/"), window.user && user.available_offers && user.available_offers[k.early_access] && delete user.available_offers[k.early_access].offer_state
                    }

                    function G(e, a, t) {
                        C().then((function(o) {
                            null !== o && o.trackPermissionDialog(e, a, (t || "").toString())
                        }))
                    }

                    function L() {
                        var e;
                        is_authenticated && user.is_trial && TradingView.setTrialAvailiable(!1),
                            function() {
                                if (window.is_authenticated && window.user && window.user.available_offers && window.user.available_offers[k.early_access]) {
                                    var e = b();
                                    w((function() {
                                        W("from billing page with discount: {0}%".format(e))
                                    }));
                                    var a = window.user.available_offers[k.early_access];
                                    if (a.actual_state) {
                                        switch (a.offer_state) {
                                            case D.Week1:
                                            case D.Week2:
                                            case D.Week3:
                                            case D.Week4:
                                            case D.Finished:
                                                A({
                                                    state: a.offer_state
                                                })
                                        }
                                        delete a.offer_state
                                    }
                                }
                            }(),
                            function() {
                                var e = user.available_offers && user.available_offers[k.six_months];
                                if (!is_authenticated || !e) return;
                                const a = parseInt(e.expire_on, 10),
                                    t = "six_months.week_shown_popup." + a,
                                    o = "six_months.last_day_shown_popup." + a;
                                if (m(), !O() && !E()) {
                                    if (!P.getValue(o)) {
                                        var i = new Date(1e3 * (a - 86400));
                                        if (new Date > i) return u({
                                            actionHref: "/gopro/?source=six_months_last_day_popup&feature=show_options",
                                            onActionClick: function() {
                                                G("six_months_dialog_last_day", "accept", window.user.id)
                                            },
                                            onClose: function() {
                                                G("six_months_dialog_last_day", "decline", window.user.id)
                                            },
                                            root: document.createElement("div")
                                        }), P.setValue(o, 1, {
                                            forceFlush: !0
                                        }), void G("six_months_dialog_last_day", "open", window.user.id)
                                    }
                                    if (!P.getValue(t)) {
                                        i = new Date(1e3 * (a - 1987200));
                                        new Date > i && (B({
                                            feature: "SixMonths",
                                            actions: [{
                                                text: n("Explore offer"),
                                                action: M.OpenGopro
                                            }, {
                                                text: n("Decline offer"),
                                                action: M.Close,
                                                variant: "ghost",
                                                color: "red"
                                            }],
                                            closeButton: !1,
                                            closeOnEsc: !1,
                                            goproSource: "six_months_first_week_popup"
                                        }), P.setValue(t, 1, {
                                            forceFlush: !0
                                        }))
                                    }
                                }
                            }(),
                            function() {
                                var e = user.available_offers && user.available_offers[k.upgrade];
                                if (is_authenticated && e && e.last_payment_date) {
                                    if (!f().upgrade_popup) {
                                        if (P.getValue("upgrade.shown_popup")) return;
                                        var a = new Date(1e3 * e.last_payment_date);
                                        const t = Math.abs(new Date - a);
                                        if (Math.ceil(t / 864e5) < 30) return
                                    }
                                    B({
                                        feature: "upgradeNotification",
                                        actions: [{
                                            text: n("Show my options"),
                                            action: M.OpenGopro
                                        }, {
                                            text: n("Don't need"),
                                            action: M.Close,
                                            variant: "ghost",
                                            color: "red"
                                        }],
                                        closeButton: !1,
                                        closeOnEsc: !1,
                                        goproSource: "upgrade_info_popup"
                                    }), P.setValue("upgrade.shown_popup", 1, {
                                        forceFlush: !0
                                    })
                                }
                            }(), e = user.available_offers && user.available_offers[k.last_chance], E() || O() || is_authenticated && e && (v(), P.getValue("lastChance.shown_popup") || (B({
                                feature: "LastChance",
                                actions: [{
                                    text: n("Explore special offers"),
                                    action: M.OpenGopro
                                }, {
                                    text: n("Decline offer"),
                                    action: M.Close,
                                    variant: "ghost",
                                    color: "red"
                                }],
                                closeButton: !1,
                                closeOnEsc: !1,
                                goproSource: "last_chance_info_popup"
                            }), P.setValue("lastChance.shown_popup", 1, {
                                forceFlush: !0
                            }))),
                            function() {
                                var e = user.available_offers && user.available_offers[k.one_usd];
                                if (!E() && !O() && is_authenticated && e) {
                                    g();
                                    var a = new Date(1e3 * e.expire_on),
                                        t = "oneUsd.shown_popup_" + a.getFullYear() + "_" + a.getMonth();
                                    P.getValue(t) || (B({
                                        feature: "oneUsd",
                                        actions: [{
                                            text: n("Upgrade Now"),
                                            action: M.OpenGopro
                                        }, {
                                            text: n("Decline offer"),
                                            action: M.Close,
                                            variant: "ghost",
                                            color: "red"
                                        }],
                                        closeButton: !1,
                                        closeOnEsc: !1,
                                        goproSource: "one_usd_info_popup"
                                    }), P.setValue(t, 1, {
                                        forceFlush: !0
                                    }))
                                }
                            }();
                        const a = user.available_offers[k.black_friday] || {},
                            t = user.available_offers[k.cyber_monday] || {};
                        (a.show_popup || t.show_popup) && d(user.available_offers)
                    }
                    var U = !1;

                    function I() {
                        var e = i.getItem("trial_availiable");
                        return null != e && 1 == +e
                    }
                    return V.startTrial = function(e) {
                            var a = {
                                product_id: F.ProRealtime,
                                billing_cycle: T.Monthly
                            };
                            Object.assign(a, e || {}), runOrSignIn(N.bind(this, a), {
                                mode: "signup",
                                source: "before_start_trial",
                                verifiedPhoneRequired: !0,
                                doNotCheckSocialActivity: !0,
                                doNotShowConfirmation: !0,
                                startTrial: !0,
                                paidAccountCheck: !0
                            })
                        }, V.earlyAccessDialog = A, V.changeTrial = a, V.upgradeTrial = function(e) {
                            return a(e, Y)
                        }, V.downgradeTrial = function(e) {
                            return a(e, q)
                        }, V.isTrialAvailable = I, V.openEarlyAccessPaymentPage = function(a) {
                            var t;
                            y((a = a || {}).product_id, a.discount, {
                                paymentMethod: a.paymentMethod
                            }), t = a.reason, j(), e("Order after trial: {0}".format(t))
                        },
                        function() {
                            if (U) return !1;
                            U = !0;
                            var e = function() {
                                var e = o(document.documentElement);
                                window.is_authenticated && I() ? e.addClass("is-trial-available").removeClass("is-not-trial-available") : e.addClass("is-not-trial-available").removeClass("is-trial-available")
                            };
                            loginStateChange.subscribe(null, (function(a) {
                                a || e()
                            })), e(), o(L)
                        }
                }();
            e.exports = V
        },
        53205: (e, a, t) => {
            "use strict";
            t.d(a, {
                fill: () => n
            });
            var o = t(15642);

            function n() {
                const e = document.querySelector(".js-last-chance-area"),
                    a = null === (i = null === (n = window.user.available_offers) || void 0 === n ? void 0 : n[o.OFFERS.last_chance]) || void 0 === i ? void 0 : i.expire_on;
                var n, i;
                const r = function() {
                    var e, a;
                    return null === (a = null === (e = window.user.available_offers) || void 0 === e ? void 0 : e[o.OFFERS.last_chance]) || void 0 === a ? void 0 : a.max_discount
                }();
                e && a && r && async function(e, a) {
                    (await Promise.all([t.e(36778), t.e(97259), t.e(61162), t.e(11216), t.e(14563), t.e(1114), t.e(78855), t.e(71611)]).then(t.bind(t, 955207))).renderLastChanceBanner(e, a)
                }(e, {
                    expiration: a,
                    maxDiscount: r
                }).then(() => {
                    e.classList.remove("js-hidden")
                })
            }
        },
        598707: (e, a, t) => {
            "use strict";
            t.d(a, {
                fill: () => n
            });
            var o = t(15642);

            function n() {
                var e;
                const a = document.querySelector(".js-one-usd-area"),
                    n = window.user.available_offers ? null === (e = window.user.available_offers[o.OFFERS.one_usd]) || void 0 === e ? void 0 : e.expire_on : void 0;
                a && async function(e, a) {
                    (await Promise.all([t.e(36778), t.e(97259), t.e(61162), t.e(11216), t.e(14563), t.e(1114), t.e(78855), t.e(47550)]).then(t.bind(t, 812425))).renderOneUsdBanner(e, a)
                }(a, {
                    expiration: n
                }).then(() => {
                    a.classList.remove("js-hidden")
                })
            }
        },
        993075: (e, a, t) => {
            "use strict";
            t.d(a, {
                fill: () => n
            });
            var o = t(15642);

            function n() {
                var e, a;
                const n = document.querySelector(".js-six-months-area"),
                    i = null === (a = null === (e = window.user.available_offers) || void 0 === e ? void 0 : e[o.OFFERS.six_months]) || void 0 === a ? void 0 : a.expire_on;
                n && i && async function(e, a) {
                    (await Promise.all([t.e(36778), t.e(97259), t.e(61162), t.e(11216), t.e(14563), t.e(1114), t.e(78855), t.e(90850)]).then(t.bind(t, 802956))).renderBanner(e, a)
                }(n, {
                    expiration: i
                }).then(() => {
                    n.classList.remove("js-hidden")
                })
            }
        },
        311930: (e, a, t) => {
            "use strict";
            var o;
            t.d(a, {
                    TrialTokenStates: () => o
                }),
                function(e) {
                    e.Started = "started", e.Week1 = "after 1 week", e.Week2 = "after 2 weeks", e.Week3 = "after 3 weeks", e.Week4 = "after 4 weeks", e.Finished = "finished"
                }(o || (o = {}))
        },
        539894: (e, a, t) => {
            "use strict";
            t.d(a, {
                blackFridayDialog: () => s
            });
            var o = t(342098),
                n = t(15642),
                i = t(640142);
            async function r(e) {
                const {
                    showBlackFridayDialog: a
                } = await Promise.all([t.e(70964), t.e(38817), t.e(99459), t.e(28322), t.e(91877), t.e(59456), t.e(25535), t.e(5058), t.e(97259), t.e(81057), t.e(11491), t.e(48856), t.e(86697), t.e(82977), t.e(11216), t.e(99752), t.e(64011), t.e(7562), t.e(1114), t.e(67713)]).then(t.bind(t, 841712));
                a().on("afterClose", () => {
                    o.setValue(e + ".shown_popup_2021", !0, {
                        forceFlush: !0
                    })
                })
            }

            function s(e) {
                const a = n.OFFERS.cyber_monday in e ? n.OFFERS.cyber_monday : n.OFFERS.black_friday,
                    t = window.location.pathname.split("/")[1];
                if ((0, i.isOnMobileAppPage)("any")) return Promise.resolve();
                if ("gopro" === t) return r(a);
                if (o.getBool(a + ".shown_popup_2021")) return Promise.resolve();
                const s = e[n.OFFERS.cyber_monday];
                return s && (1e3 * s.date_end - Date.now()) / 864e5 > 1 || ["", "black-friday", "order", "jobs", "paypal", "accounts", "account-recovery"].includes(t) ? Promise.resolve() : r(a)
            }
        },
        404839: (e, a, t) => {
            "use strict";
            async function o(e) {
                (await Promise.all([t.e(26822), t.e(74814), t.e(36778), t.e(18436), t.e(97259), t.e(77427), t.e(11216), t.e(14563), t.e(1114), t.e(58435)]).then(t.bind(t, 403933))).renderEarlyBirdDialog(e)
            }
            t.d(a, {
                showEarlyBirdDialog: () => o
            })
        },
        801728: (e, a, t) => {
            "use strict";
            t.d(a, {
                getEarlyBirdDialogDay: () => n
            });
            var o = t(311930);

            function n(e, a) {
                switch (e) {
                    case o.TrialTokenStates.Week1:
                        return "7";
                    case o.TrialTokenStates.Week2:
                        return "14";
                    case o.TrialTokenStates.Week3:
                        return "21";
                    case o.TrialTokenStates.Week4:
                    case o.TrialTokenStates.Finished:
                        return 28 === a ? "28" : "30";
                    default:
                        return null
                }
            }
        },
        296420: (e, a, t) => {
            "use strict";
            t.d(a, {
                startFreeTrialDialog: () => i
            });
            var o = t(198006),
                n = t(128308);

            function i(e) {
                return (0, o.isFeatureEnabled)("braintree-trial-in-order-dialog") ? (0, n.showPaymentOrderDialog)({
                    productId: e.startTrial,
                    billingCycle: e.billingCycle,
                    isTrial: !0
                }) : (0, o.isFeatureEnabled)("braintree-trial-implementation") ? Promise.all([t.e(37610), t.e(99459), t.e(23876), t.e(53617), t.e(29448), t.e(61212), t.e(85597), t.e(32795), t.e(91877), t.e(63193), t.e(45266), t.e(99305), t.e(90901), t.e(38968), t.e(70650), t.e(40587), t.e(85833), t.e(52951), t.e(58748), t.e(93921), t.e(26566), t.e(47203), t.e(61633), t.e(11216), t.e(45867), t.e(19894), t.e(14563), t.e(80498), t.e(52616), t.e(91050), t.e(34698), t.e(68981), t.e(93669), t.e(97301), t.e(54348), t.e(30914), t.e(7614), t.e(33409), t.e(78132)]).then(t.bind(t, 705815)).then(a => {
                    (0, a.showStartFreeTrialDialog)(e)
                }) : Promise.all([t.e(37610), t.e(70964), t.e(38817), t.e(23876), t.e(67470), t.e(53617), t.e(29448), t.e(61212), t.e(85597), t.e(63193), t.e(99305), t.e(90901), t.e(38968), t.e(20629), t.e(70650), t.e(54551), t.e(12141), t.e(85833), t.e(58748), t.e(42066), t.e(47203), t.e(39098), t.e(11216), t.e(99752), t.e(45867), t.e(19894), t.e(80498), t.e(52616), t.e(64011), t.e(7562), t.e(97301), t.e(79882), t.e(30914), t.e(76809), t.e(70797), t.e(7614), t.e(90325), t.e(49144)]).then(t.bind(t, 879996)).then(a => {
                    (0,
                        a.showStartFreeTrialDialog)(e)
                })
            }
        },
        997929: (e, a, t) => {
            "use strict";
            async function o(e) {
                (await Promise.all([t.e(26822), t.e(74814), t.e(36778), t.e(18436), t.e(97259), t.e(58252), t.e(11216), t.e(14563), t.e(1114), t.e(44816)]).then(t.bind(t, 584405))).renderSixMonthsDialog(e)
            }
            t.d(a, {
                showSixMonthsDialog: () => o
            })
        },
        561203: (e, a, t) => {
            "use strict";
            async function o(e = {}) {
                return (await Promise.all([t.e(70964), t.e(38817), t.e(91877), t.e(59456), t.e(25535), t.e(5058), t.e(85658), t.e(11216), t.e(99752), t.e(64011), t.e(7562), t.e(91653)]).then(t.bind(t, 988857))).trialMessageSuccessDialog(e)
            }
            t.d(a, {
                trialMessageSuccessDialog: () => o
            })
        }
    }
]);