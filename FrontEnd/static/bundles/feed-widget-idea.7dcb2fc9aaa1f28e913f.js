(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [23303, 56852], {
        698252: () => {},
        67902: () => {},
        269274: () => {},
        827268: () => {},
        706864: () => {},
        94483: () => {},
        796619: () => {},
        738460: () => {},
        83096: t => {
            t.exports = {
                "badge-idea": "badge-idea-3rT_mi7c",
                icon: "icon-3rT_mi7c",
                "size-small": "size-small-3rT_mi7c",
                "type-long": "type-long-3rT_mi7c",
                "size-medium": "size-medium-3rT_mi7c",
                "size-large": "size-large-3rT_mi7c",
                "type-short": "type-short-3rT_mi7c",
                "with-icon": "with-icon-3rT_mi7c",
                "variant-primary": "variant-primary-3rT_mi7c",
                "type-education": "type-education-3rT_mi7c",
                "variant-ghost": "variant-ghost-3rT_mi7c"
            }
        },
        959836: (t, e, i) => {
            "use strict";
            t.exports.pushChartPage = async function(t) {
                const {
                    default: e
                } = await Promise.all([i.e(70964), i.e(38817), i.e(91877), i.e(59456), i.e(25535), i.e(5058), i.e(71576), i.e(11216), i.e(99752), i.e(64011), i.e(7562), i.e(34629)]).then(i.t.bind(i, 730173, 23)), s = new e.ChartPage(t);
                TradingView.historyManager.push(s)
            }
        },
        584819: (t, e, i) => {
            "use strict";

            function s(t, e) {
                return `${t}@${e}`
            }

            function a(t) {
                return t.replace(/(@[^-]+-[^-]+).*$/, "$1")
            }
            i.d(e, {
                studyIdString: () => s,
                extractStudyId: () => a
            })
        },
        483528: (t, e, i) => {
            "use strict";
            var s = i(685864),
                a = i(272316),
                r = i(918184);
            const n = i(987380).getLogger("SocialStats");
            class o extends a.Model {
                defaults() {
                    return {
                        isMyChart: !1
                    }
                }
                constructor(t) {
                    super(t), this.pending = {}, loginStateChange.subscribe(this, t => {
                        t || (this.get("authorId") !== window.user.id && this.get("isMyChart") ? this.set("isMyChart", !1) : this.get("authorId") !== window.user.id || this.get("isMyChart") || this.set("isMyChart", !0))
                    }), this.listenTo(this, "change:isMyChart", (t, e) => {
                        this.set("favoriteDisabled", e)
                    })
                }
                async agree() {
                    if (this.get("agreesDisabled") || this.pending.agree) return;
                    this.pending.agree = !0;
                    const t = !this.get("agreesState"),
                        e = this.get("agreesCount") + (t ? 1 : -1);
                    this.set({
                        agreesState: t,
                        agreesCount: e
                    });
                    (0, s.fetch)(`/api/v1/ideas/${this.get("imageUrl")}/like/`, {
                        method: "POST",
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            value: +t
                        })
                    }).then(t => t.json()).then(t => {
                        this.pending.agree = !1, this.set("agreesCount", t.score)
                    }).catch(() => {
                        this.pending.agree = !1, this.set({
                            agreesState: !t,
                            agreesCount: e + (t ? -1 : 1)
                        })
                    })
                }
                favorite() {
                    if (this.get("favoriteDisabled") || this.pending.favorite) return;
                    this.pending.favorite = !0;
                    const t = !this.get("favoriteState");
                    this.set("favoriteState", t);
                    const e = () => {
                        this.set("favoriteState", !t)
                    };
                    r.post(t ? "/add-to-favorites/" : "/remove-from-favorites/", {
                        id: this.id
                    }, t => {
                        if (this.pending.favorite = !1, t.debug && n.logDebug(t.debug), t.error) return n.logError(t.error), void e()
                    }, "json").fail(e)
                }
            }
            var d = i(965009),
                c = i(464079),
                l = i(971928),
                h = (i(698252), i(827268), i(706864), i(272316)),
                u = i(918184);
            class g extends h.View {
                constructor(t = {}) {
                    super(t), this.events = {
                            'click [role="button"]': "buttonHandler"
                        }, this.setElement(t.$el), this.model = this.initModel(t.model), this.items = {}, this.$el.find(".tv-card-social-item, .tv-social-stats__item").each((t, e) => {
                            var i = u(e),
                                s = i.data("name");
                            this.items[s] = {
                                $el: i,
                                $count: i.find(".tv-card-social-item__count, .tv-social-stats__count")
                            }
                        }),
                        this.listenTo(this.model, "change:viewsCount", (t, e) => {
                            this.countUpdate("views", e, t.previous("viewsCount"))
                        }), this.listenTo(this.model, "change:commentsCount", (t, e) => {
                            this.countUpdate("comments", e, t.previous("commentsCount"))
                        }), this.listenTo(this.model, "change:agreesCount", (t, e) => {
                            this.countUpdateWithAnimation("agrees", e, t.previous("agreesCount"))
                        }), this.listenTo(this.model, "change:agreesState", (t, e) => {
                            this.stateUpdate("agrees", e)
                        }), this.listenTo(this.model, "change:agreesDisabled", (t, e) => {
                            this.disabledUpdate("agrees", e)
                        }), this.listenTo(this.model, "change:favoriteState", (t, e) => {
                            this.stateUpdate("favorite", e)
                        }), this.listenTo(this.model, "change:favoriteDisabled", (t, e) => {
                            this.disabledUpdate("favorite", e, "i-hidden")
                        })
                }
                initModel(t) {
                    const e = this.$el.data("model");
                    return t ? (t.set(e), t) : new o(e)
                }
                buttonHandler(t) {
                    const e = this.model.attributes.authorId,
                        i = this.model.attributes.favoriteState ? "Unfollow" : "Follow",
                        s = {
                            authorId: e
                        };
                    switch (u(t.currentTarget).data("name")) {
                        case "agrees":
                            runOrSignIn(() => {
                                u(t.currentTarget).addClass("i-loaded"), this.model.agree(), this.trigger("agrees", t), this.$el.trigger("agrees", t)
                            }, {
                                source: "Chart agree",
                                verifiedPhoneRequired: !0
                            });
                            break;
                        case "favorite":
                            runOrSignIn(() => {
                                this.model.favorite(), (0, d.trackActionFollow)("Idea", i, s), this.trigger("favorite", t), this.$el.trigger("favorite", t)
                            }, {
                                source: "Chart favorite",
                                verifiedPhoneRequired: !0
                            });
                            break;
                        case "share":
                            this.trigger("share", u(t.currentTarget)), this.$el.trigger("share");
                            break;
                        case "report":
                            this.trigger("report", u(t.currentTarget)), this.$el.trigger("report");
                            break;
                        case "comments":
                            this.trigger("comments", t), this.$el.trigger("comments", t)
                    }
                }
                countUpdate(t, e) {
                    const i = this.items[t];
                    i && i.$count.text(e)
                }
                countUpdateWithAnimation(t, e, i) {
                    const s = this.items[t];
                    if (s) {
                        const t = e.toString(),
                            a = i.toString(),
                            r = Math.max(t.length, a.length),
                            n = "tv-social-stats__count-digit " + (e > i ? "tv-social-stats__count-digit--down" : "tv-social-stats__count-digit--up");
                        let o = "";
                        for (let e = 0; e < r; e++) {
                            const i = a[e] || "",
                                s = t[e] || "";
                            o += i === s ? `<span>${i}</span>` : `<span class="tv-social-stats__count-digit-warp"><span class="${n}">${s}</span></span>`
                        }
                        s.$count.html(o), setTimeout(() => {
                            s.$count.text(e)
                        }, 350)
                    }
                }
                stateUpdate(t, e) {
                    this.items[t] && (e = !!e, this.items[t].$el.toggleClass("i-checked", e), e && setTimeout(() => {
                        this.items[t].$el.addClass("i-blink"), setTimeout(() => {
                            this.items[t].$el.removeClass("i-blink")
                        }, .8 * l.dur)
                    }, .05 * l.dur))
                }
                disabledUpdate(t, e, i) {
                    this.items[t] && this.items[t].$el.toggleClass(i || "i-disabled", !!e)
                }
                destroy() {
                    this.stopListening(this.model)
                }
            }
            u.fn.tvSocialStats = (0, c.createTvBlockWithInstance)("tv-social-stats", (function(t, e = {}) {
                return new g(Object.assign({}, e, {
                    $el: t
                }))
            }))
        },
        604986: (t, e, i) => {
            "use strict";
            i(483528);
            var s = i(464079),
                a = i(959836),
                r = i(4516),
                n = i.n(r),
                o = i(956852);

            function d(t, e) {
                t.classList.toggle("i-checked", e)
            }
            var c = i(323619),
                l = i(987380),
                h = i(250401),
                u = i(195355),
                g = i(279407),
                v = (i(67902), i(734036), i(83096), i(94483), i(738460), i(796619), i(269274), i(679712), i(272316)),
                m = i(918184),
                S = i(513469);
            const f = (0, l.getLogger)("Widget.Idea");
            class p extends v.View {
                constructor(t = {}) {
                    super(t), this.events = {
                        "click .js-widget-idea__delete": "deletePrivateIdea",
                        "click .js-widget-idea__popup": "handleLinkClick",
                        "click .js-widget-idea__reputation-total": "toggleReputationPopup"
                    }, t.data ? this.data = t.data : this.data = {}, this.setElement(t.$el);
                    const e = t.$el.data("card"),
                        s = this.$el.find(".tv-social-row").tvSocialStats().tvSocialStats("getInstance"),
                        a = this.$el.find('[data-name="share"]');
                    s.on("share", () => {
                        Promise.all([i.e(59456), i.e(25535), i.e(5058), i.e(89109), i.e(4351), i.e(83651), i.e(96753), i.e(500), i.e(99752), i.e(17646)]).then(i.bind(i, 908699)).then(t => {
                            const i = t.createShareCardDialog({
                                card: {
                                    id: e.data.id,
                                    name: e.data.name,
                                    shortName: e.data.short_name,
                                    baseUrl: e.data.base_url,
                                    publishedUrl: e.data.published_url,
                                    imageUrl: e.data.image_url,
                                    isPublic: e.data.is_public,
                                    isScript: e.data.is_script
                                },
                                user: {
                                    username: e.author.username,
                                    is_broker: e.author.is_broker
                                }
                            }).open();
                            a.addClass("tv-card-social-item--active"), i.once("afterClose", () => {
                                a.removeClass("tv-card-social-item--active")
                            })
                        })
                    }), u.touch || s.on("comments", t => {
                        if (!this.data || t.metaKey || t.ctrlKey) return !0;
                        t.preventDefault(), this.showPopup("#chart-view-comment-form")
                    });
                    const r = this.$el.find('[data-name="favorite-script"]')[0];
                    if (r) try {
                        ! function(t, e) {
                            const i = t.dataset.scriptIdPart;
                            if (!i) throw new Error("Could not get a valid scriptIdPart from the provided element");
                            const s = o.FavoriteScriptsModel.getInstance();

                            function a() {
                                s.isFav(i) ? s.removeFavorite(i) : (s.addFavorite(i), e())
                            }

                            function r() {
                                d(t, s.isFav(i))
                            }
                            d(t, s.isFav(i)), t.addEventListener("click", a), s.favoritesChanged().subscribe(null, r)
                        }(r, () => {
                            !s.model.get("agreesState") && window.is_authenticated && (0, c.verificationIsRequired)().then(([t]) => {
                                t || s.model.agree()
                            })
                        })
                    } catch (t) {
                        f.logError("initFavoriteScript has failed: " + t.message)
                    }
                    this.data.socialStatsModel = s.model, n().on("ideas.channel", t => this.pushStreamListener(t));
                    var l = this.$el.find(".js-chart-moderate");
                    l.length && Promise.all([i.e(20629), i.e(79966), i.e(79882), i.e(1920)]).then(i.bind(i, 292910)).then(() => {
                        l.tvChartModerate(), this.listenTo(l.tvChartModerate("getInstance").model, "change:recommended", (t, e) => {
                            this.$el.children().first().toggleClass("tv-widget-idea--hidden-idea", !e)
                        })
                    }), (0, h.initImageLoad)(this.$el.get(0))
                }
                handleLinkClick(t) {
                    if (!this.data || t.metaKey || t.ctrlKey) return !0;
                    t.preventDefault(), u.mobiletouch ? location.href = t.currentTarget.dataset.href : this.showPopup()
                }
                showPopup(t = "") {
                    (0, a.pushChartPage)({
                        chartId: this.data.image_url,
                        chartName: this.data.name,
                        publishedUrl: this.data.published_chart_url + t,
                        shortSymbol: this.data.short_symbol,
                        socialStatsModel: this.data.socialStatsModel
                    })
                }
                deletePrivateIdea() {
                    var t = this.data.image_url;
                    (0, g.showConfirm)({
                        text: window.t("Are you sure you want to delete this post?"),
                        onConfirm: ({
                            dialogClose: e
                        }) => m.ajax({
                            type: "POST",
                            url: "/idea-delete/",
                            data: {
                                image_url: t
                            },
                            success: t => {
                                t.error ? (0, g.showWarning)({
                                    text: t.error
                                }) : (e(), this.$el.remove())
                            }
                        })
                    })
                }
                toggleReputationPopup() {
                    this.$el.find(".js-widget-idea__reputation-popup").toggle()
                }
                pushStreamListener(t) {
                    "delete" === t.action && t.idea.id === this.data.id && this.$el.addClass("tv-feed__item--deleted").find(".tv-widget-idea").addClass("tv-widget-idea--deleted-idea")
                }
            }
            m.fn.tvWidgetIdea = (0, s.createTvBlockWithInstance)("tv-widget-idea", (function(t, e = {}) {
                return new p(S.extend(e, {
                    $el: t
                }))
            }))
        },
        970759: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                createFeedWidget: () => a
            });
            i(604986);
            var s = i(918184);

            function a(t, e) {
                return s(t).tvWidgetIdea({
                    data: e
                }).tvWidgetIdea("getInstance")
            }
        },
        956852: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                FavoriteScriptsModel: () => u
            });
            var s = i(342098),
                a = i(541962),
                r = i(584819),
                n = i(211490);
            const o = JSON.parse('{"ACCD@tv-basicstudies":"STD;Accumulation_Distribution","studyADR@tv-basicstudies":"STD;Advance_Decline_Ratio_Bars","AROON@tv-basicstudies":"STD;Aroon","ATR@tv-basicstudies":"STD;Average_True_Range","AwesomeOscillator@tv-basicstudies":"STD;Awesome_Oscillator","BB@tv-basicstudies":"STD;Bollinger_Bands","BollingerBandsR@tv-basicstudies":"STD;Bollinger_Bands_B","BollingerBandsWidth@tv-basicstudies":"STD;Bollinger_Bands_Width","CMF@tv-basicstudies":"STD;Chaikin_Money_Flow","ChaikinOscillator@tv-basicstudies":"STD;Chaikin_Oscillator","ChoppinessIndex@tv-basicstudies":"STD;Choppiness_Index","DoubleEMA@tv-basicstudies":"STD;DEMA","WilliamR@tv-basicstudies":"STD;Willams_R","CCI@tv-basicstudies":"STD;CCI","CRSI@tv-basicstudies":"STD;Connors_RSI","DetrendedPriceOscillator@tv-basicstudies":"STD;DPO","DM@tv-basicstudies":"STD;DMI","DONCH@tv-basicstudies":"STD;Donchian_Channels","EaseOfMovement@tv-basicstudies":"STD;EOM","EFI@tv-basicstudies":"STD;EFI","ENV@tv-basicstudies":"STD;ENV","FisherTransform@tv-basicstudies":"STD;Fisher_Transform","HV@tv-basicstudies":"STD;Historical_Volatility","KLTNR@tv-basicstudies":"STD;Keltner_Channels","MOM@tv-basicstudies":"STD;Momentum","MF@tv-basicstudies":"STD;Money_Flow","UltimateOsc@tv-basicstudies":"STD;Ultimate_Oscillator","Trix@tv-basicstudies":"STD;TRIX","Stochastic@tv-basicstudies":"STD;Stochastic","StochasticRSI@tv-basicstudies":"STD;Stochastic_RSI","RSI@tv-basicstudies":"STD;RSI","ROC@tv-basicstudies":"STD;ROC","PriceOsc@tv-basicstudies":"STD;Price_Oscillator","MASimple@tv-basicstudies":"STD;SMA","OBV@tv-basicstudies":"STD;On_Balance_Volume","PSAR@tv-basicstudies":"STD;PSAR","VigorIndex@tv-basicstudies":"STD;Relative_Vigor_Index","VolatilityIndex@tv-basicstudies":"STD;Relative_Volatility_Index","SMIErgodicIndicator@tv-basicstudies":"STD;SMI_Ergodic_Indicator_Oscillator","SMIErgodicOscillator@tv-basicstudies":"STD;SMI_Ergodic_Oscillator","MACD@tv-basicstudies":"STD;MACD","MAWeighted@tv-basicstudies":"STD;WMA","MAExp@tv-basicstudies":"STD;EMA","hullMA@tv-basicstudies":"STD;Hull%1MA","chandeMO@tv-basicstudies":"STD;Chande_Momentum_Oscillator","TripleEMA@tv-basicstudies":"STD;TEMA","MAVolumeWeighted@tv-basicstudies":"STD;VWMA","WilliamsAlligator@tv-basicstudies":"STD;Williams_Alligator","WilliamsFractal@tv-basicstudies":"STD;Whilliams_Fractals"}');
            var d = i(896276),
                c = i.n(d);
            const l = o;
            let h = null;
            class u {
                constructor(t = s) {
                    this._favorites = [], this._favoritesChanged = new(c()), this._settings = t,
                        a.TVXWindowEvents.on("StudyFavoritesChanged", t => {
                            const e = JSON.parse(t);
                            this._loadFromState(e.favorites || [])
                        }), this._settings.onSync.subscribe(this, this._loadFavs), this._loadFavs()
                }
                isFav(t) {
                    const e = this.favId(t);
                    return -1 !== this._findFavIndex(e)
                }
                toggleFavorite(t) {
                    this.isFav(t) ? this.removeFavorite(t) : this.addFavorite(t)
                }
                addFavorite(t) {
                    const e = this.favId(t);
                    this._favorites.push(v(e)), this._favoritesChanged.fire(), this._saveFavs()
                }
                removeFavorite(t) {
                    const e = this.favId(t),
                        i = this._findFavIndex(e); - 1 !== i && (this._favorites.splice(i, 1), this._favoritesChanged.fire()), this._saveFavs()
                }
                favId(t) {
                    return (0, n.isPineIdString)(t) ? t : (0, n.extractPineId)(t) || (0, r.extractStudyId)(t)
                }
                favorites() {
                    return this._favorites
                }
                favoritePineIds() {
                    return this._favorites.filter(t => "pine" === t.type).map(t => t.pineId)
                }
                favoritesChanged() {
                    return this._favoritesChanged
                }
                static getInstance() {
                    return null === h && (h = new u), h
                }
                static create(t) {
                    return new u(t)
                }
                _loadFavs() {
                    const t = this._settings.getJSON("studyMarket.favorites", []);
                    this._loadFromState(t)
                }
                _saveFavs() {
                    const t = this._stateToSave();
                    this._settings.setJSON("studyMarket.favorites", t), a.TVXWindowEvents.emit("StudyFavoritesChanged", JSON.stringify({
                        favorites: t
                    }))
                }
                _stateToSave() {
                    return this._favorites.map(g)
                }
                _loadFromState(t) {
                    this._favorites = t.map(t => v(function(t) {
                        return t in l ? l[t] : t
                    }(t))), this._favoritesChanged.fire()
                }
                _findFavIndex(t) {
                    return this._favorites.findIndex(e => t === g(e))
                }
            }

            function g(t) {
                return "java" === t.type ? t.studyId : t.pineId
            }

            function v(t) {
                return (0, n.isPineIdString)(t) ? {
                    type: "pine",
                    pineId: t
                } : {
                    type: "java",
                    studyId: t
                }
            }
        },
        211490: (t, e, i) => {
            "use strict";

            function s(t) {
                return t === a(t)
            }

            function a(t) {
                const e = t.indexOf("$"),
                    i = t.indexOf("@");
                return e < 0 && i >= 0 ? null : t.substring(Math.max(e + 1, 0), i >= 0 ? i : t.length)
            }

            function r(t) {
                return t.startsWith("PUB;")
            }

            function n(t) {
                return t.startsWith("USER;")
            }

            function o(t) {
                return t.startsWith("STD;")
            }

            function d(t) {
                return t.includes("Candlestick%1Pattern%1")
            }

            function c(t) {
                return t.startsWith("EDGR_")
            }
            i.d(e, {
                isPineIdString: () => s,
                extractPineId: () => a,
                isPublishedPineId: () => r,
                isCustomPineId: () => n,
                isStandardPineId: () => o,
                isCandleStickId: () => d,
                isEdgrPineId: () => c
            })
        }
    }
]);