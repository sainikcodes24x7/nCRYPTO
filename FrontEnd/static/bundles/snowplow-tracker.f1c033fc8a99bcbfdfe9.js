(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [24081], {
        896276: (e, t, i) => {
            "use strict";
            e = i.nmd(e);
            const r = i(987380).getLogger("Common.Delegate");

            function a() {
                this._listeners = []
            }

            function n(e) {
                return !e.singleshot
            }
            a.prototype.subscribe = function(e, t, i) {
                const r = {
                    object: e,
                    member: t,
                    singleshot: !!i,
                    skip: !1
                };
                this._listeners.push(r)
            }, a.prototype.unsubscribe = function(e, t) {
                for (let i = 0; i < this._listeners.length; ++i) {
                    const r = this._listeners[i];
                    if (r.object === e && r.member === t) {
                        r.skip = !0, this._listeners.splice(i, 1);
                        break
                    }
                }
            }, a.prototype.unsubscribeAll = function(e) {
                for (let t = this._listeners.length - 1; t >= 0; --t) {
                    const i = this._listeners[t];
                    i.object === e && (i.skip = !0, this._listeners.splice(t, 1))
                }
            }, a.prototype.destroy = function() {
                delete this._listeners
            }, a.prototype.fire = function() {
                const e = this._listeners;
                this._listeners = this._listeners.filter(n);
                const t = e.length;
                for (let i = 0; i < t; ++i) {
                    const t = e[i];
                    if (!t.skip) try {
                        t.member.apply(t.object || null, arguments)
                    } catch (e) {
                        r.logError(e.stack || e.message)
                    }
                }
            }, "undefined" != typeof window && (window.Delegate = a), e && e.exports && (e.exports = a)
        },
        932010: (e, t, i) => {
            "use strict";

            function r(e, t, i, r, a) {
                let n = "";
                if (r = r ? "; path=" + r : "", a = a ? "; domain=" + a : "", i) {
                    const e = new Date;
                    e.setTime(e.getTime() + 24 * i * 60 * 60 * 1e3), n = "; expires=" + e.toUTCString()
                } else n = "";
                document.cookie = e + "=" + t + n + a + r
            }

            function a(e) {
                const t = e + "=",
                    i = document.cookie.split(";");
                for (let e = 0; e < i.length; e++) {
                    let r = i[e];
                    for (;
                        " " === r.charAt(0);) r = r.substring(1, r.length);
                    if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
                }
                return null
            }
            i.d(t, {
                set: () => r,
                get: () => a
            })
        },
        198006: (e, t, i) => {
            "use strict";
            var r = i(655119).TVLocalStorage,
                a = i(896276),
                n = i(853363);
            i(968724);
            var o = new a;
            TradingView.FeatureToggle = {
                force_prefix: "forcefeaturetoggle.",
                onChanged: new a,
                enableFeature: function(e) {
                    r.setItem(this.force_prefix + e, "true"), o.fire(e)
                },
                disableFeature: function(e) {
                    r.setItem(this.force_prefix + e, "false"), o.fire(e)
                },
                resetFeature: function(e) {
                    r.removeItem(this.force_prefix + e), o.fire(e)
                },
                onFeaturesStateChanged: function() {
                    return o
                }
            }, TradingView.isFeatureEnabled = function(e) {
                function t(e) {
                    try {
                        var t = n(e + function() {
                            if (window.user && window.user.id) return window.user.id;
                            var e = r.getItem("featuretoggle_seed");
                            return null !== e || (e = Math.floor(1e6 * Math.random()), r.setItem("featuretoggle_seed", e)), e
                        }());
                        return new DataView(t).getUint32(0, !0) / 4294967296
                    } catch (e) {
                        return .5
                    }
                }

                function a(i) {
                    return !("local" !== window.environment || ! function(e) {
                        var t = new RegExp("broker_[A-Z]+[a-zA-Z0-9_]+_dev", "g"),
                            i = new RegExp("hide_[A-Z]+[a-zA-Z0-9_]+_on_ios", "g"),
                            r = new RegExp("hide_[A-Z]+[a-zA-Z0-9_]+_on_android", "g"),
                            a = new RegExp("hide_[A-Z]+[a-zA-Z0-9_]+_on_mobile_web", "g");
                        return -1 === ["broker_FXCM_token_v2", "broker_TRADESTATION_V3", "broker_TRADOVATE_dev", "black_friday_mainpage", "black_friday_popup", "datawindow", "trading-fast-renew-oauth-token", "switching_trial_year_to_month_disabled", "switching_year_to_month_disabled", "default_year_billing_cycle_switcher", "marketing-analytics", "google-ads", "visible_address_fields_by_default", "slow-support-warning", "hide-trading-floating-toolbar", "tvcoins_donations", "save-short-streams", "details_disable_bid_ask", "vat_disabled", "pro_plan_upgrades_disabled", "pro_plan_downgrades_disabled", "unit_conversion", "disable_recaptcha_on_signup", "braintree-order-one-click-dropdown", "braintree-trial-implementation", "braintree-gopro-in-order-dialog", "braintree-apple-pay", "braintree-google-pay", "braintree-apple-pay-trial", "braintree-google-pay-trial", "hide_gopro_popup_upgrade_button", "yandex_metric_enabled", "broker_id_session", "remove_line_tools_from_content", "chart_storage_with_broker_name", "autosave_line_tools_immediately", "log_removing_line_tools_group", "oanda-european-accounts-warning", "mobile_show_bottom_panel", "disable_save_settings", "desktop_version_notification_enabled", "paperrest_2fa", "paperrest_preview", "favorites-in-broker-dropdown", "streams_stats_profile", "hide_ecomonic_events", "aggregating_page_pings", "mobile_trading_web", "mobile_trading_ios", "mobile_trading_android", "hide_real_brokers_on_mobile", "percentage_values_for_percentage_scale", "hide_ranges_label_colors", "disable_user_specific_encryption", "remove_scale_settings_from_menu", "enable_deep_history_backtesting", "show_checkbox_of_house_rules_to_idea_and_script"].indexOf(e) && -1 === e.indexOf("-maintenance") && !1 === t.test(e) && !1 === i.test(e) && !1 === r.test(e) && !1 === a.test(e)
                    }(i)) || (!e[i] || -1 !== e[i]) && (!!("true" === r.getItem(TradingView.FeatureToggle.force_prefix + i) || window.is_authenticated && "undefined" != typeof user && user.settings && "true" === user.settings[TradingView.FeatureToggle.force_prefix + i]) || !("false" === r.getItem(TradingView.FeatureToggle.force_prefix + i) || window.is_authenticated && "undefined" != typeof user && user.settings && "false" === user.settings[TradingView.FeatureToggle.force_prefix + i]) && (!!e[i] && (1 === e[i] || t(i) <= e[i])))
                }
                return TradingView.onWidget() || Promise.all([i.e(11216), i.e(4516), i.e(34604)]).then(i.t.bind(i, 4516, 23)).then(t => {
                    t.on("featuretoggle", (function(t) {
                        var i = a(t.name);
                        e[t.name] = t.state, i !== a(t.name) && o.fire(t.name)
                    }))
                }), a
            }(window.featureToggleState || {}), t.FeatureToggle = TradingView.FeatureToggle, t.isFeatureEnabled = TradingView.isFeatureEnabled, t.onFeaturesStateChanged = TradingView.FeatureToggle.onFeaturesStateChanged.bind(TradingView.FeatureToggle)
        },
        655119: (e, t, i) => {
            "use strict";
            const {
                getLogger: r
            } = i(987380), a = r("TVLocalStorage");
            var n = function() {
                try {
                    this.isAvailable = !0, this.localStorage = window.localStorage, this.localStorage.setItem("tvlocalstorage.available", "true")
                } catch (e) {
                    delete this.isAvailable, delete this.localStorage
                }
                this._updateLength();
                try {
                    this._report()
                } catch (e) {}
            };
            n.prototype._report = function() {
                if (this.isAvailable) {
                    const e = 10,
                        t = [];
                    for (let e = 0; e < this.localStorage.length; e++) {
                        const i = this.key(e);
                        t.push({
                            key: i,
                            length: String(this.getItem(i)).length
                        })
                    }
                    t.sort((e, t) => t.length - e.length);
                    const i = t.slice(0, e);
                    t.sort((e, t) => t.key.length - e.key.length);
                    const r = t.slice(0, e);
                    a.logNormal("Total amount of keys in Local Storage: " + this.length), a.logNormal(`Top ${e} keys with longest values: ${JSON.stringify(i)}`), a.logNormal(`Top ${e} longest key names: ${JSON.stringify(r)}`);
                    try {
                        navigator.storage.estimate().then(e => {
                            a.logNormal("Storage estimate: " + JSON.stringify(e))
                        })
                    } catch (e) {}
                }
            }, n.prototype.length = 0, n.prototype.isAvailable = !1, n.prototype.localStorage = {
                "tvlocalstorage.available": "false"
            }, n.prototype._updateLength = function() {
                if (this.isAvailable) this.length = this.localStorage.length;
                else {
                    var e, t = 0;
                    for (e in this.localStorage) this.localStorage.hasOwnProperty(e) && t++;
                    this.length = t
                }
            }, n.prototype.key = function(e) {
                return this.isAvailable ? this.localStorage.key(e) : Object.keys(this.localStorage)[e]
            }, n.prototype.getItem = function(e) {
                return this.isAvailable ? this.localStorage.getItem(e) : void 0 === this.localStorage[e] ? null : this.localStorage[e]
            }, n.prototype.setItem = function(e, t) {
                this.isAvailable ? this.localStorage.setItem(e, t) : this.localStorage[e] = t, this._updateLength()
            }, n.prototype.removeItem = function(e) {
                this.isAvailable ? this.localStorage.removeItem(e) : delete this.localStorage[e], this._updateLength()
            }, n.prototype.clear = function() {
                this.isAvailable ? this.localStorage.clear() : this.localStorage = {}, this._updateLength()
            };
            var o = function(e) {
                this.storage = e
            };
            o.prototype.getItem = function(e) {
                return Promise.resolve(this.storage.getItem(e))
            }, o.prototype.setItem = function(e, t) {
                return Promise.resolve(this.storage.setItem(e, t))
            }, window.TVLocalStorage = new n, window.TVLocalStorageAsync = new o(window.TVLocalStorage), e.exports = {
                TVLocalStorage: window.TVLocalStorage,
                TVLocalStorageAsync: window.TVLocalStorageAsync
            }
        },
        640142: (e, t, i) => {
            "use strict";
            i.d(t, {
                isOnMobileAppPage: () => a,
                urlWithMobileAppParams: () => n
            });
            var r = i(932010);

            function a(e, t = !1) {
                const {
                    searchParams: i
                } = new URL(String(location)), a = r.get("tv_app") || "";
                let n = "true" === i.get("mobileapp_new"),
                    o = "true" === i.get("mobileapp");
                return t || (n || (n = ["android", "android_nps"].includes(a)), o || (o = "ios" === a)), !("new" !== e && "any" !== e || !n) || !("new" === e || !o)
            }

            function n(e) {
                if (a("new")) {
                    const t = new URL(e, location.href);
                    t.searchParams.set("mobileapp_new", "true"), e = t.toString()
                }
                if (a("old")) {
                    const t = new URL(e, location.href);
                    t.searchParams.set("mobileapp", "true"), e = t.toString()
                }
                return e
            }
        },
        80686: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                getTrackerInstance: () => c,
                Tracker: () => l
            });
            var r = i(541432),
                a = i(787570),
                n = i(867339),
                o = i(907249);
            let s = null;

            function c() {
                if (null === s) {
                    const e = (0, n.getSettings)();
                    void 0 !== e && (e.userId = window.user.id, s = new l(e), window.loginStateChange.subscribe(s, () => {
                        s && s.setUserId(window.user.id)
                    }))
                }
                return s
            }
            class l extends o.SnowplowTrackerBase {
                constructor(e) {
                    super(e, a), this.setUserId(e.userId)
                }
                setUserId(e) {
                    (0, r.snowplowTracker)("setUserId", e)
                }
                trackPermissionDialog(e, t, i) {
                    const r = {
                        feature_id: e,
                        dialog_action: t,
                        user_id: i
                    };
                    this._trackSelfDescribingEvent("permission_dialogs", r)
                }
                trackStudiesAnalytics(e, t, i, r, a = "") {
                    const n = {
                        study_name: e,
                        study_package: t,
                        study_action: i,
                        is_strategy: r,
                        pro_plan: a
                    };
                    this._trackSelfDescribingEvent("studies_analytics", n)
                }
                trackDrawingsAnalytics(e, t, i) {
                    const r = {
                        symbol_name: e,
                        drawing_name: t,
                        drawing_action: i
                    };
                    this._trackSelfDescribingEvent("drawings_analytics", r)
                }
                trackChartApiDrawingCreation(e) {
                    const t = {
                        drawing_name: e
                    };
                    this._trackSelfDescribingEvent("chart_api_drawing_creation", t)
                }
                trackChartStyle(e) {
                    const t = {
                        style_name: e
                    };
                    this._trackSelfDescribingEvent("chart_styles", t)
                }
                trackChartSymbols(e, t, i, r) {
                    const a = {
                        symbol_name: e,
                        symbol_type: t,
                        layout_type: i,
                        chart_id: r
                    };
                    this._trackSelfDescribingEvent("chart_symbols", a)
                }
                trackRefunds(e, t, i, r) {
                    const a = {
                        action: e,
                        segment: t,
                        plan: i,
                        billing_cycle: r
                    };
                    this._trackSelfDescribingEvent("refunds", a)
                }
                trackSolutionWatch(e, t, i) {
                    const r = {
                        solution_id: e,
                        popular: t,
                        lang: i
                    };
                    this._trackSelfDescribingEvent("solutions_watch", r)
                }
                trackSolutionNodeWatch(e, t, i, r) {
                    const a = {
                        node_id: e,
                        node_type: t,
                        title: i,
                        lang: r
                    };
                    this._trackSelfDescribingEvent("solutions_nodes_watch", a)
                }
                trackSolutionSkip(e, t, i, r) {
                    const a = {
                        node_id: e,
                        node_type: t,
                        title: i,
                        lang: r
                    };
                    this._trackSelfDescribingEvent("solutions_skip", a)
                }
                trackSolutionSendTicket(e, t, i, r) {
                    const a = {
                        category_id: e,
                        folder_id: i,
                        solution_id: r,
                        lang: t
                    };
                    this._trackSelfDescribingEvent("solutions_send_ticket", a)
                }
                trackTrial(e, t, i, r) {
                    const a = {
                        product_id: e,
                        billing_cycle: t,
                        action: i,
                        merchant: r
                    };
                    this._trackSelfDescribingEvent("trials", a)
                }
                trackNewsClick(e) {
                    this._trackSelfDescribingEvent("news_clicks", e)
                }
                trackGoproVisits(e, t, i) {
                    const r = {
                        source: e,
                        feature: t,
                        outcome: i
                    };
                    this._trackSelfDescribingEvent("gopro_visits", r)
                }
                trackFollow(e, t, i, r, a) {
                    const n = {
                        follow_type: e,
                        action: t,
                        author_id: i,
                        symbol: r,
                        symbol_type: a
                    };
                    this._trackSelfDescribingEvent("follow", n)
                }
                trackFullFeaturedChartButton(e, t, i) {
                    const r = {
                        user_id: e,
                        page: t,
                        source: i
                    };
                    this._trackSelfDescribingEvent("full_featured_chart_button", r)
                }
                trackRefLinkAction(e, t, i) {
                    const r = {
                        ref: e,
                        action: t,
                        source: i
                    };
                    this._trackSelfDescribingEvent("referral_ref_link", r)
                }
                trackReferralVisit(e, t) {
                    const i = {
                        source: e,
                        feature: t
                    };
                    this._trackSelfDescribingEvent("referral_visits", i)
                }
                trackTradingBrokerConnnected(e, t, i) {
                    const r = {
                        broker_id: e,
                        account_type: t,
                        user_id: i
                    };
                    this._trackSelfDescribingEvent("trading_broker_connection_status", r)
                }
                trackTradingOrder(e) {
                    this._trackSelfDescribingEvent("trading_order_status", e)
                }
                trackTradingOrderWidget(e) {
                    this._trackSelfDescribingEvent("trading_order_widget", e)
                }
                trackPhoneVerificationDialog(e, t, i) {
                    this._trackSelfDescribingEvent("phone_verification_dialog", {
                        action: e,
                        feature_source: t,
                        page: i
                    })
                }
                trackCopyCodes(e) {
                    const t = {
                        type_2fa: e
                    };
                    this._trackSelfDescribingEvent("copy_reserve_codes", t)
                }
                trackTVCoinsDialogWatch(e, t) {
                    this._trackSelfDescribingEvent("tv_coins_dialog_watch", {
                        page: e,
                        tab: t
                    })
                }
                trackBurgerMenuClick(e) {
                    this._trackSelfDescribingEvent("burger_menu_click", {
                        source: e
                    })
                }
                trackChangeProPlan(e, t, i, r, a) {
                    const n = {
                        product_id: e,
                        from_product_id: t,
                        action: i,
                        days_left: null,
                        from_billing_cycle: r,
                        to_billing_cycle: a
                    };
                    this._trackSelfDescribingEvent("change_pro_plan", n)
                }
                trackUnsubscribeDialog(e, t, i, r) {
                    this._trackSelfDescribingEvent("unsubscribe_dialog", {
                        page: i,
                        action: r,
                        product_id: e,
                        billing_cycle: t
                    })
                }
                trackChat(e, t, i, r) {
                    const a = {
                        chatroom_id: e,
                        is_chatroom: t,
                        is_private: i,
                        locale: r
                    };
                    this._trackSelfDescribingEvent("chat", a)
                }
                trackBrokerBrandingBanner(e) {
                    this._trackSelfDescribingEvent("broker_brandig_banner", e)
                }
                trackBrokerProfileLinksClick(e) {
                    this._trackSelfDescribingEvent("broker_profile_links_click", e)
                }
                trackStreamsActions(e, t, i) {
                    this._trackSelfDescribingEvent("streams_actions", {
                        locale: e,
                        action: t,
                        stream_id: i
                    })
                }
                trackStreamsViewingDuration(e, t, i, r) {
                    this._trackSelfDescribingEvent("streams_viewing_duration", {
                        locale: e,
                        stream_time: t,
                        source: i,
                        stream_id: r
                    })
                }
                trackBrokerOpenAccount(e) {
                    this._trackSelfDescribingEvent("broker_open_account", e)
                }
                trackFinancialsDialog(e, t) {
                    this._trackSelfDescribingEvent("financials_dialog", {
                        symbol: e,
                        source: t
                    })
                }
                trackChangeSymbol(e, t) {
                    this._trackSelfDescribingEvent("change_symbol", {
                        symbol: e,
                        source: t
                    })
                }
                trackPaymentOrderDialogInitial(e, t, i) {
                    this._trackSelfDescribingEvent("payment_order_dialog_initial", {
                        step: e,
                        products: t,
                        billing_cycle: i
                    })
                }
                trackPaymentOrderDialogChanges(e, t) {
                    this._trackSelfDescribingEvent("payment_order_dialog_changes", {
                        value: t,
                        action: e
                    })
                }
                trackGoproCardsClicks(e, t) {
                    this._trackSelfDescribingEvent("gopro_cards_clicks", {
                        component: e,
                        value: t
                    })
                }
                trackSearchToolbar(e, t, i) {
                    this._trackSelfDescribingEvent("search_toolbar", {
                        search_type: e,
                        search_input: t,
                        search_result: i
                    })
                }
                trackAppLinkClick(e, t, i, r) {
                    this._trackSelfDescribingEvent("app_link", {
                        source: e,
                        medium: t,
                        campaign: i,
                        app_platform: r
                    })
                }
                trackAppBannerClick(e, t, i, r, a) {
                    this._trackSelfDescribingEvent("app_banner", {
                        source: e,
                        medium: t,
                        campaign: i,
                        action: r,
                        destination: a
                    })
                }
                trackScreenerHighLevel(e, t, i) {
                    this._trackSelfDescribingEvent("screener_high_level", {
                        event: e.event,
                        source: e.source,
                        location: e.location,
                        state: e.state,
                        value: e.value,
                        screener_type: t,
                        screener_source: i
                    })
                }
                trackIdeaAction(e) {
                    this._trackSelfDescribingEvent("idea_events", {
                        picked_time: "",
                        author_plan: "",
                        author_reputation: "",
                        author_count_ideas: 0,
                        author_scripts: 0,
                        author_likes: 0,
                        author_followers: 0,
                        idea_lock: !1,
                        ...e
                    })
                }
                trackMarketHeatmapEvent(e) {
                    this._trackSelfDescribingEvent("market_heatmap_events", {
                        event_name: e.event_name,
                        market_type: e.market_type,
                        dataset: e.dataset,
                        color_parameter: e.color_parameter,
                        size_parameter: e.size_parameter,
                        is_monosize: e.is_monosize,
                        is_fullscreen: e.is_fullscreen,
                        group_by: e.group_by,
                        active_group: e.active_group,
                        multiplier: e.multiplier,
                        has_filters: e.has_filters
                    })
                }
                trackToastDialog(e, t, i, r, a) {
                    this._trackSelfDescribingEvent("toast_dialog", {
                        toast_type: e,
                        action: t,
                        title: i,
                        placement: r,
                        user_plan: a,
                        symbol_type: ""
                    })
                }
                trackAdDialog(e, t, i, r, a) {
                    this._trackSelfDescribingEvent("ad_dialog", {
                        ad_unit: e,
                        placement: t,
                        action: i,
                        filled: r,
                        user_plan: a,
                        symbol_type: ""
                    })
                }
                trackToolbarButtonClick(e, t) {
                    this._trackSelfDescribingEvent("toolbar_button_click", {
                        area: e,
                        button: t
                    })
                }
                trackSparksEvent(e, t) {
                    this._trackSelfDescribingEvent("sparks", {
                        slug_name: e,
                        action: t
                    })
                }
            }
        }
    }
]);