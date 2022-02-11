(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [7562], {
        610090: () => {},
        466517: t => {
            t.exports = {
                wrapper: "wrapper-2eb-SI2I",
                touch: "touch-2eb-SI2I"
            }
        },
        607562: (t, i, s) => {
            "use strict";
            s.d(i, {
                SidebarCustomScroll: () => p
            });
            var e = s(195355),
                o = s(896276),
                h = s.n(o),
                r = s(491496),
                n = s(468450),
                a = s(64011),
                l = s(347666),
                _ = (s(610090), s(466517));
            const c = {
                headerHeight: 0,
                additionalClass: "",
                alwaysVisible: !1,
                showBottomShadow: !0,
                scrollMarginTop: 1,
                bubbleScrollEvent: !1
            };
            class p {
                constructor(t, i, s = {}) {
                    if (this.scrolled = new(h()), this.scrolltoend = new(h()), this.scrolltostart = new(h()), this.visibilityCallbacks = [], this._scrollTargetTop = 0, this._scrollSpeed = 40, this._shadowOffset = 10, this._shadowTop = null, this._shadowBottom = null, this._bottomFixed = !1, this._dragInitialized = !1, this._dragging = !1, this._draggable = null, this._atStart = !1, this._atEnd = !1, this._stickyBottom = null, this._tempIntervalID = void 0, this._animation = null, this._saved = null, this._options = { ...c,
                            ...s
                        }, this._wrapper = t, this._wrapper.classList.add(_.wrapper), this._content = i, this._headerHeight = this._options.headerHeight, this._scrollMarginTop = this._options.scrollMarginTop, this._scrollBar = document.createElement("div"), this._scrollBar.classList.add("sb-scrollbar", "sb-scrollbar-body"), this._options.additionalClass && this._scrollBar.classList.add(this._options.additionalClass), this._scrollBar.classList.toggle("active-always", this._options.alwaysVisible), this._scrollBarWrapper = document.createElement("div"), this._scrollBarWrapper.classList.add("sb-scrollbar-wrap"), this._touch = e.touch, this._touch) return this._content.style.position = "relative", this._wrapper.classList.add(_.touch), void this._wrapper.addEventListener("scroll", () => this._onScroll());
                    this._wrapper.style.overflow = "hidden", this._unsubscribe = (() => {
                            const t = () => {
                                    this._bottomFixed || this._dragging || (this._options.alwaysVisible || this._scrollBar.classList.add("active"), this._onScroll())
                                },
                                i = () => {
                                    this._bottomFixed || this._dragging || (this._options.alwaysVisible || this._scrollBar.classList.remove("active"), this._onScroll())
                                },
                                s = t => {
                                    if (!t.defaultPrevented) {
                                        const i = (0, l.getPixelsFromEvent)(t, () => ({
                                            height: this._wrapper.clientHeight
                                        })).y;
                                        this.scroll(-i, 1) || (t.stopPropagation(), t.preventDefault())
                                    }
                                };
                            return this._wrapper.addEventListener("mouseenter", t), this._wrapper.addEventListener("mouseleave", i), this._wrapper.addEventListener("wheel", s), () => {
                                this._wrapper.removeEventListener("mouseenter", t), this._wrapper.removeEventListener("mouseleave", i), this._wrapper.removeEventListener("wheel", s)
                            }
                        })(), !1 !== this._options.showTopShadow && (this._shadowTop = document.createElement("div"), this._shadowTop.classList.add("sb-inner-shadow", "top", "i-invisible"), this._wrapper.appendChild(this._shadowTop)), !1 !== this._options.showBottomShadow && (this._shadowBottom = document.createElement("div"), this._shadowBottom.classList.add("sb-inner-shadow"), this._wrapper.appendChild(this._shadowBottom)), this._shadowTop && this._headerHeight && (this._shadowTop.style.top = this._headerHeight - this._shadowOffset + "px"), this._wrapper.appendChild(this._scrollBarWrapper),
                        this._scrollBarWrapper.appendChild(this._scrollBar), this._onScroll()
                }
                isTouch() {
                    return this._touch
                }
                getScrollBar() {
                    return this._scrollBar
                }
                initDraggable() {
                    return this._dragInitialized || (this._draggable = new a.Draggable({
                        axis: "y",
                        source: this._scrollBar,
                        containment: this._scrollBarWrapper,
                        start: () => {
                            this._dragging = !0
                        },
                        stop: () => {
                            this._dragging = !1
                        },
                        drag: () => {
                            this.updateScroll()
                        }
                    }), this._dragInitialized = !0), this
                }
                updateScroll() {
                    if (this._touch) return this;
                    const t = Math.ceil((0, r.position)(this._scrollBar).top - this._scrollMarginTop - this._headerHeight),
                        i = this.getContainerHeightWithoutHeader(),
                        s = (0, r.outerHeight)(this._content),
                        e = s - i - 1;
                    return i <= 0 || (this._scrollTargetTop = e <= 0 ? this._headerHeight : Math.min(-t * s / i + this._headerHeight, this._headerHeight), t + (0, r.contentHeight)(this._scrollBar) + 2 >= i ? this.scrollToEnd() : (this._content.style.top = this._scrollTargetTop + "px", this._onScroll())), this
                }
                getContainerHeightWithoutHeader() {
                    return this._wrapper.getBoundingClientRect().height - this._headerHeight
                }
                getContainerHeight() {
                    return this._wrapper.getBoundingClientRect().height
                }
                getContentHeight() {
                    return this._content.getBoundingClientRect().height
                }
                updateScrollBar() {
                    if (this._touch) return this;
                    const t = (0, r.position)(this._content).top,
                        i = this.getContentHeight(),
                        s = this.getContainerHeight(),
                        e = this.getContainerHeightWithoutHeader(),
                        o = 1 + this._headerHeight,
                        h = e - 2,
                        n = (Math.abs(t) - this._headerHeight) * h / i,
                        a = s * s / i;
                    return this.isContentShort() ? (this._scrollBar.classList.add("js-hidden"), this._wrapper.classList.remove("sb-scroll-active")) : (this._scrollBar.classList.remove("js-hidden"), this._scrollBar.style.height = a + "px", this._scrollBar.style.top = o + n + "px", this._wrapper.classList.add("sb-scroll-active"), this.initDraggable()), this
                }
                scroll(t, i) {
                    const s = (0, r.position)(this._content).top,
                        e = (0, r.outerHeight)(this._content) - this.getContainerHeightWithoutHeader() - 1,
                        o = i || this._scrollSpeed;
                    return e <= 0 || (this._scrollTargetTop = Math.max(-e + this._headerHeight, Math.min(this._headerHeight, s + t * o)), this.setContentTop(this._scrollTargetTop), this._onScroll())
                }
                animateTo(t) {
                    if (this._touch) return this;
                    const i = (0, r.outerHeight)(this._content) - this.getContainerHeightWithoutHeader() - 1;
                    if (i <= 0) return !0;
                    this._scrollTargetTop = Math.max(-i + this._headerHeight, Math.min(this._headerHeight, -t)), this._animation && this._animation.stop(), this._animation = (0, n.doAnimate)({
                        duration: 500,
                        from: parseFloat(getComputedStyle(this._content).top),
                        to: this._scrollTargetTop,
                        onStep: (t, i) => {
                            this._content.style.top = i + "px"
                        },
                        onComplete: () => {
                            this._onScroll()
                        }
                    })
                }
                resize() {
                    if (this._bottomFixed) return;
                    const t = (0, r.outerHeight)(this._content),
                        i = (0, r.outerHeight)(this._wrapper);
                    !this._options.vAlignBottom && t < i ? this.atStart() || this.scrollToStart() : this.atEnd() ? this.scrollToEnd() : "number" == typeof this._stickyBottom && this.setContentTop(Math.min(0, this._stickyBottom + (0, r.outerHeight)(this._wrapper) - (0, r.outerHeight)(this._content)))
                }
                resizeHeader(t) {
                    const i = t - this._headerHeight;
                    this._headerHeight = t, this._scrollTargetTop += i, this._shadowTop && (this._shadowTop.style.top = this._headerHeight - this._shadowOffset + "px"), this.resize()
                }
                scrollTo(t, i) {
                    const s = {
                        position: "visible",
                        areaHeight: t instanceof HTMLElement ? (0, r.contentHeight)(t) : 0,
                        ...i
                    };
                    t instanceof HTMLElement && (t = s.offsetTop || (0, r.position)(t).top);
                    const e = (0, r.position)(this._content).top,
                        o = this._content.getBoundingClientRect().height,
                        h = this.getContainerHeightWithoutHeader();
                    if (o - h - 1 <= 0) return !0;
                    const n = -1 * (e - this._headerHeight),
                        a = n + h;
                    let l = 0;
                    if ("visible" === s.position) {
                        if (t > n && t + s.areaHeight < a) return !1;
                        l = t + s.areaHeight > a ? a - t - s.areaHeight : n - t
                    } else "top" === s.position && (l = n - t);
                    return this.scroll(l, 1), this._onScroll(), !1
                }
                scrollToEnd() {
                    const t = (0, r.position)(this._content).top,
                        i = (0, r.outerHeight)(this._content),
                        s = (0, r.outerHeight)(this._wrapper),
                        e = i > s ? t + (s - (i + t)) + 1 : 1;
                    return this.setContentTop(e), this._onScroll(), this
                }
                scrollToStart() {
                    return this.setContentTop(this._headerHeight), this._onScroll(), this
                }
                currentPosition() {
                    return Math.round((0, r.position)(this._content).top)
                }
                atStart() {
                    return Math.round((0, r.position)(this._content).top) >= this._headerHeight
                }
                atEnd(t) {
                    "number" == typeof t && isFinite(t) || (t = 0);
                    const i = Math.round((0, r.position)(this._content).top),
                        s = Math.round((0, r.outerHeight)(this._content)),
                        e = Math.round((0, r.outerHeight)(this._wrapper));
                    return s - Math.abs(i) - 1 <= e + t
                }
                checkContentVisibility() {
                    this._onContentVisible()
                }
                subscribeToContentVisible(t, i, s) {
                    this.visibilityCallbacks.push({
                        id: t,
                        element: i,
                        callback: s
                    })
                }
                triggerVisibilityCallbacks(t) {
                    this._onContentVisible(t)
                }
                save() {
                    return this._saved = {
                        top: (0, r.position)(this._content).top,
                        height: (0, r.outerHeight)(this._content)
                    }, this
                }
                restore() {
                    if (this._saved) {
                        if (this._saved.top === (0, r.position)(this._content).top && this._saved.height === (0, r.outerHeight)(this._content)) return this._saved = null, this;
                        this._options.vAlignBottom && (this._saved.top -= (0, r.outerHeight)(this._content) - this._saved.height, this._saved.top > this._headerHeight && (this._saved.top = this._headerHeight)), this.setContentTop(this._saved.top), this._saved = null, this._onScroll(!0)
                    }
                    return this
                }
                fixBottom() {
                    if (this._bottomFixed) return this;
                    if (this._touch) {
                        const t = (0, r.outerHeight)(this._content),
                            i = this._wrapper.scrollTop;
                        this._tempIntervalID = setInterval(() => {
                            this._wrapper.scrollTop = i + ((0, r.outerHeight)(this._content) - t)
                        }, 0)
                    } else this._content.style.top = "auto", this._content.style.bottom = (0, r.outerHeight)(this._wrapper) - (0, r.position)(this._content).top - (0, r.outerHeight)(this._content) + "px";
                    return this._bottomFixed = !0, this
                }
                releaseBottom() {
                    return this._bottomFixed ? (this._touch ? clearInterval(this._tempIntervalID) : (this._content.style.bottom = "auto", this._content.style.top = (0, r.position)(this._content).top + "px"), this._bottomFixed = !1, this._onScroll(), this) : this
                }
                setContentTop(t) {
                    return this._touch ? this._options.vAlignBottom && (0, r.outerHeight)(this._content) < (0, r.outerHeight)(this._wrapper) ? (this._wrapper.style.overflowY = "visible", this._content.style.position = "absolute", this._content.style.bottom = "0px") : (this._content.style.position = "relative", this._content.style.position = "auto", this._wrapper.style.overflowY = "auto", this._wrapper.scrollTop = -t) : this._content.style.top = t + "px", this
                }
                isContentShort() {
                    return this.getContentHeight() <= this.getContainerHeightWithoutHeader()
                }
                destroy() {
                    var t;
                    this._animation && this._animation.stop(), this._scrollBarWrapper && this._scrollBarWrapper.remove(), this._shadowBottom && this._shadowBottom.remove(), this._shadowTop && this._shadowTop.remove(), this._draggable && (this._draggable.destroy(), this._draggable = null), this._content.style.cssText = "", this._wrapper.style.cssText = "", null === (t = this._unsubscribe) || void 0 === t || t.call(this)
                }
                _onScroll(t) {
                    this._touch || (this._content.style.bottom = "auto"), this.scrolled.fire(), this._dragging && !0 !== t || this.updateScrollBar();
                    const i = this.atStart(),
                        s = this.atEnd();
                    return this._shadowTop && this._shadowTop.classList.toggle("i-invisible", !!i), this._shadowBottom && this._shadowBottom.classList.toggle("i-invisible", !!s), this._onContentVisible(), !this._atStart && i ? (this._atStart = !0, this.scrolltostart.fire()) : this._atStart && !i && (this._atStart = !1), !this._atEnd && s ? (this._atEnd = !0, this.scrolltoend.fire()) : this._atEnd && !s && (this._atEnd = !1), this._options.vAlignBottom && (this._stickyBottom = (0, r.outerHeight)(this._content) - Math.abs((0, r.position)(this._content).top) - (0, r.outerHeight)(this._wrapper)), (this._atStart || this._atEnd) && ("function" == typeof this._options.bubbleScrollEvent ? Boolean(this._options.bubbleScrollEvent()) : Boolean(this._options.bubbleScrollEvent))
                }
                _contentIsVisible(t) {
                    return (0, r.position)(t.element).top > -1 * this.currentPosition()
                }
                _onContentVisible(t) {
                    if (!this.visibilityCallbacks.length) return;
                    const i = t || this._contentIsVisible.bind(this),
                        s = [],
                        e = this.visibilityCallbacks.filter((t, e) => {
                            if (!this._content.contains(t.element)) return !1;
                            const o = i(t);
                            return o && s.push(e), !o
                        });
                    s.forEach(i => {
                        this.visibilityCallbacks[i].callback(!!t)
                    }), this.visibilityCallbacks = e
                }
            }
        },
        347666: (t, i, s) => {
            "use strict";
            s.d(i, {
                getPixelsFromEvent: () => o
            });
            const e = [() => navigator.userAgent.includes("Win") && navigator.userAgent.includes("Chrome") ? 1 / window.devicePixelRatio : 1, () => 16, (t = (() => 0)) => {
                var i;
                return .8 * (null !== (i = t()) && void 0 !== i ? i : 0)
            }];

            function o(t, i = (() => ({}))) {
                return {
                    x: t.deltaX * e[t.deltaMode](() => i().width),
                    y: t.deltaY * e[t.deltaMode](() => i().height)
                }
            }
        }
    }
]);