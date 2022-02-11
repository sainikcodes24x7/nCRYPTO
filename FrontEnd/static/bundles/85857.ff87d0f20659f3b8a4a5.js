(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [85857, 99928], {
        918266: () => {},
        387118: () => {},
        392556: () => {},
        456017: () => {},
        959836: (t, e, r) => {
            "use strict";
            t.exports.pushChartPage = async function(t) {
                const {
                    default: e
                } = await Promise.all([r.e(70964), r.e(38817), r.e(91877), r.e(59456), r.e(25535), r.e(5058), r.e(71576), r.e(11216), r.e(99752), r.e(64011), r.e(7562), r.e(34629)]).then(r.t.bind(r, 730173, 23)), s = new e.ChartPage(t);
                TradingView.historyManager.push(s)
            }
        },
        192084: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                LEFT_ARROW: () => s,
                UP_ARROW: () => i,
                RIGHT_ARROW: () => o,
                DOWN_ARROW: () => n,
                ENTER: () => a,
                ESC: () => l,
                SPACE: () => h,
                SLASH: () => c
            });
            const s = 37,
                i = 38,
                o = 39,
                n = 40,
                a = 13,
                l = 27,
                h = 32,
                c = 47
        },
        129786: (t, e, r) => {
            "use strict";
            r.d(e, {
                DEFAULT_SIZE: () => s
            });
            const s = "large"
        },
        380238: (t, e, r) => {
            "use strict";
            r.d(e, {
                Spinner: () => n
            });
            r(918266);
            var s = r(13548),
                i = r(129786);
            const o = (0, s.parseHtmlElement)('\n\t\t<div class="tv-spinner" role="progressbar">\n\t\t\t<div class="tv-spinner__spinner-layer">\n\t\t\t\t<div class="tv-spinner__background tv-spinner__width_element"></div>\n\t\t\t\t<div class="tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left"></div>\x3c!--\n\t\t\t\t--\x3e<div class="tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right"></div>\n\t\t\t</div>\n\t\t</div>\n\t');
            class n {
                constructor(t) {
                    this._shown = !1, this._el = o.cloneNode(!0), this.setSize(t || i.DEFAULT_SIZE)
                }
                spin(t) {
                    return this._el.classList.add("tv-spinner--shown"), void 0 === this._container && (this._container = t, void 0 !== t && t.appendChild(this._el)), this._shown = !0, this
                }
                stop(t) {
                    return t && void 0 !== this._container && this._container.removeChild(this._el), this._el.classList.remove("tv-spinner--shown"), this._shown = !1, this
                }
                setStyle(t) {
                    return Object.keys(t).forEach(e => {
                        const r = t[e];
                        void 0 !== r && this._el.style.setProperty(e, r)
                    }), this
                }
                style() {
                    return this._el.style
                }
                setSize(t) {
                    const e = void 0 !== t ? "tv-spinner--size_" + t : "";
                    return this._el.className = `tv-spinner ${e} ${this._shown?"tv-spinner--shown":""}`, this
                }
                getEl() {
                    return this._el
                }
                destroy() {
                    this.stop(), delete this._el, delete this._container
                }
            }
        },
        927394: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                ControlError: () => n,
                controlError: () => a
            });
            r(392556);
            var s = r(464079),
                i = r(971928),
                o = r(918184);
            class n {
                constructor(t, {
                    addFocusEvents: e = !0,
                    addErrorOnElement: s = !0,
                    leftMessageAlign: i = !1,
                    maxWidth: n,
                    doNotShowIcon: a = !1
                } = {}) {
                    function l(t, e) {
                        return t.some(t => e.test(t))
                    }
                    let h = o(t);
                    const c = h.hasClass("tv-control-checkbox__input"),
                        d = h.hasClass("tv-control-radio__input"),
                        p = h.hasClass("tv-control-number-input"),
                        u = l(h.attr("class").split(/\s+/), /^.+--size_small$/),
                        g = l(h.attr("class").split(/\s+/), /^.+--size_large$/);
                    this.options = {
                        smallMode: u,
                        addErrorOnElement: s,
                        maxWidth: n
                    }, c && (h = h.closest(".tv-control-checkbox")), d && (h = h.closest(".tv-control-radio-group")), this.errors = {}, this.$control = h;
                    const v = h.get(0);
                    h.data("tv-control-material") ? this.$toWrap = h.data("tv-control-material").$el : "tvControlErrorWrap" in v.dataset ? this.$toWrap = o(v.dataset.tvControlErrorWrap) : h.data("tv-control-error-wrap") ? this.$toWrap = h.data("tv-control-error-wrap") : this.$toWrap = h, this.$toWrap.parent().hasClass("tv-control-error") || this.$toWrap.wrap(`<div class="tv-control-error ${p?"tv-control-error--for-number-input":""}"></div>`), this.$el = this.$toWrap.parent(), c && this.$el.addClass("tv-control-error--msg_left"), u && this.$el.addClass("tv-control-error--size_small"), g && this.$el.addClass("tv-control-error--size_large"), c || a || (this.$icon = this.$el.find(".tv-control-error__icon"), this.$icon.length || (this.$icon = o(`<span class="tv-control-error__icon">${o("<div>").append(o(r(604578)).attr("focusable","false")).html()}</span>`).appendTo(this.$el)), h.data("tv-control-material") && this.$icon.addClass("tv-control-error__icon--material-input")), this.$widthControlWrapper = this.$el.find(".tv-control-error__width-control-wrapper"), this.$widthControlWrapper.length || (this.$widthControlWrapper = o('<div class="tv-control-error__width-control-wrapper">').appendTo(this.$el)), this.$widthControlWrapper.css("width", this.options.maxWidth), i && this.$widthControlWrapper.addClass("tv-control-error__width-control-wrapper--from-left"), this.$messages = this.$el.find(".tv-control-error__messages"), this.$messages.length || (this.$messages = o('<span class="tv-control-error__messages"></span>').appendTo(this.$widthControlWrapper)), h.on("focus", () => {
                        this.$el.addClass("i-focus"), h.removeClass("i-error"), e && h.on("keyup.tv-control-error", t => {
                            9 !== t.keyCode && 16 !== t.keyCode && (this.clear().render(), this.$el.removeClass("i-focus"), h.off("keyup.tv-control-error"))
                        })
                    }), h.on("blur", () => {
                        this.$el.removeClass("i-focus"), this.hasErrors() && h.addClass("i-error")
                    })
                }
                add({
                    id: t,
                    message: e
                }) {
                    return this.errors[t] = e, this
                }
                remove({
                    id: t
                }) {
                    return delete this.errors[t], this
                }
                clear() {
                    return this.errors = {}, this
                }
                hasErrors() {
                    return !!Object.keys(this.errors).length
                }
                render() {
                    this.emptyTimeout && clearTimeout(this.emptyTimeout);
                    var t = Object.keys(this.errors);
                    if (t.length) {
                        this.$messages.empty(), this.$el.addClass("i-error"), this.options.addErrorOnElement && this.$control.addClass("i-error");
                        for (var e = 0; e < t.length; e++) this.errors[t[e]] && o(`<span class="tv-control-error__message">${this.errors[t[e]]}</span>`).appendTo(this.$messages)
                    } else this.$el.removeClass("i-error"), this.$control.removeClass("i-error"), this.emptyTimeout = setTimeout(() => {
                        this.$messages.empty()
                    }, i.dur);
                    return this
                }
            }

            function a(t, e) {
                return new n(o(t), e)
            }
            o.fn.tvControlError = (0, s.createTvBlockWithInstance)("tv-control-error", (function(t, e) {
                return new n(t, e)
            }))
        },
        857556: (t, e, r) => {
            "use strict";
            r.d(e, {
                urlsRegExp: () => s
            });
            const s = {
                amazonawsLinks: "(?:https://|http://)(s3\\.(amazonaws|tradingview)\\.com(\\/tradingview(_staging)?)?\\/snapshots)\\/(?:\\S*?)\\.(png|bmp|jpg|jpeg)",
                imageUrl: "^[0-9a-zA-Z]{8}$",
                publishedChart: "/chart/(.+?)/([0-9a-zA-Z]{8})(?:-([^/]+))?/?",
                publishedChartOld: "/v/([0-9a-zA-Z]{8})/?",
                publishedImage: "/(?:i|x)/([0-9a-zA-Z]{8})/?",
                publishedScript: "/script/([0-9a-zA-Z]{8})(?:-([^/]+))?/?",
                externalLinks: "((http://|https://)|(www\\.))[\\w.\\-]+"
            }
        },
        179143: (t, e, r) => {
            "use strict";

            function s() {
                return Promise.all([r.e(67470), r.e(59456), r.e(25535), r.e(5058), r.e(20629), r.e(89109), r.e(59678), r.e(53466), r.e(37653), r.e(38325), r.e(96753), r.e(6585), r.e(500), r.e(15294), r.e(42961), r.e(91787), r.e(11216), r.e(99752), r.e(41242), r.e(26945), r.e(92765), r.e(52107), r.e(79882), r.e(50323), r.e(3823), r.e(67198)]).then(r.bind(r, 397961))
            }

            function i(t, e, r, i) {
                s().then(s => {
                    new s.BanUserDialog(t, e, r, i).show()
                })
            }

            function o(t, e, r) {
                s().then(s => {
                    new s.UnbanUserDialog(t, e, r).show()
                })
            }
            r.r(e), r.d(e, {
                showBanUserDialog: () => i,
                showUnbanUserDialog: () => o
            })
        },
        893408: (t, e, r) => {
            "use strict";

            function s(t) {
                return !/[\u0370-\u1FFF\u2E80-\uFDFF\uFE20-\uFFFF]/gu.test(t)
            }
            r.r(e), r.d(e, {
                isLatin: () => s
            })
        },
        159091: (t, e, r) => {
            "use strict";
            r.d(e, {
                setFixedBodyState: () => a
            });
            var s = r(751193),
                i = r(801369);
            let o = 0,
                n = !1;

            function a(t) {
                const {
                    body: e
                } = document, r = e.querySelector(".widgetbar-wrap");
                if (t && 1 == ++o) {
                    const t = (0, s.getCSSProperty)(e, "overflow"),
                        i = (0, s.getCSSPropertyNumericValue)(e, "padding-right");
                    "hidden" !== t.toLowerCase() && e.scrollHeight > e.offsetHeight && ((0, s.setStyle)(r, "right", (0, s.getScrollbarWidth)() + "px"), e.style.paddingRight = i + (0, s.getScrollbarWidth)() + "px", n = !0), e.classList.add("i-no-scroll")
                } else if (!t && o > 0 && 0 == --o && (e.classList.remove("i-no-scroll"), n)) {
                    (0, s.setStyle)(r, "right", "0px");
                    let t = 0;
                    t = (0, i.getWidgetBarPadding)((0, s.getContentWidth)(r) || 0), e.scrollHeight <= e.clientHeight && (t -= (0, s.getScrollbarWidth)()), e.style.paddingRight = (t < 0 ? 0 : t) + "px", n = !1
                }
            }
        },
        43981: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                createPublishedChartUrl: () => h,
                parsePublishedChartUrl: () => c,
                createPublishedChartImageUrl: () => d,
                createSnapshotImageUrls: () => p
            });
            var s = r(857556),
                i = r(11767);
            const o = new RegExp(s.urlsRegExp.publishedChartOld),
                n = new RegExp(s.urlsRegExp.publishedChart),
                a = new RegExp(s.urlsRegExp.publishedScript),
                l = new RegExp(s.urlsRegExp.imageUrl);

            function h(t, e, r) {
                if (!t || !/[0-9a-zA-Z]{8}/.test(t)) return "";
                if (t && e) {
                    return `/chart/${e}/${t}${r?"-"+r:""}/`
                }
                return `/v/${t}/`
            }

            function c(t) {
                if (o.test(t)) {
                    return {
                        image_url: (t.match(o) || [])[1]
                    }
                }
                if (n.test(t)) {
                    const e = t.match(n) || [];
                    return {
                        image_url: e[2],
                        symbol: e[1],
                        title: e[3]
                    }
                }
                if (a.test(t)) {
                    const e = t.match(a) || [];
                    return {
                        image_url: e[1],
                        title: e[2]
                    }
                }
                return l.test(t) ? {
                    image_url: t
                } : {}
            }

            function d(t) {
                if (!t || !/[0-9a-zA-Z]{8}/.test(t)) return "";
                const e = (0, i.environment)();
                if ("battle" === e || "staging" === e) {
                    return `https://s3.amazonaws.com/${"battle"===e?"tradingview":"tradingview-beta-staging"}/${t.charAt(0).toLowerCase()}/${t}.png`
                }
                return `/i/${t}/`
            }

            function p(t) {
                if (!t || !/[0-9a-zA-Z]{8}/.test(t)) return null;
                const e = (0, i.environment)();
                if ("battle" === e || "staging" === e) {
                    const r = `https://s3.amazonaws.com/${"battle"===e?"tradingview":"tradingview-beta-staging"}/snapshots/${t.charAt(0).toLowerCase()}`;
                    return {
                        preview: `${r}/${t}_thumb.png`,
                        url: `${r}/${t}.png`
                    }
                } {
                    const e = `${window.location.protocol}//${window.location.host}`;
                    return {
                        preview: `${e}/x/${t}/s/`,
                        url: `${e}/x/${t}/`
                    }
                }
            }
        },
        604578: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 508.52 508.52" enable-background="new 0 0 508.52 508.52"><path d="M254.26 0c-140.415 0-254.26 113.845-254.26 254.26s113.845 254.26 254.26 254.26 254.26-113.845 254.26-254.26-113.845-254.26-254.26-254.26zm0 412.664c-17.544 0-31.782-14.239-31.782-31.782 0-17.576 14.239-31.782 31.782-31.782s31.782 14.207 31.782 31.782c0 17.543-14.238 31.782-31.782 31.782zm31.782-126.622c0 17.544-14.239 31.782-31.782 31.782s-31.782-14.239-31.782-31.782v-158.912c0-17.544 14.239-31.782 31.782-31.782s31.782 14.239 31.782 31.782v158.912z"/></svg>'
        }
    }
]);