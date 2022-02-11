(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [28139], {
        78090: t => {
            t.exports = {
                "toast-positioning-wrapper": "toast-positioning-wrapper-1j0He64l",
                compact: "compact-1j0He64l",
                "location-bottom-left": "location-bottom-left-1j0He64l",
                "location-bottom-right": "location-bottom-right-1j0He64l",
                hidden: "hidden-1j0He64l",
                added: "added-1j0He64l"
            }
        },
        192557: (t, e, o) => {
            "use strict";
            var i, n;
            o.d(e, {
                    ToastAnimationStage: () => i,
                    ToastPriority: () => n
                }),
                function(t) {
                    t[t.Add = 0] = "Add", t[t.Remove = 1] = "Remove", t[t.None = 2] = "None"
                }(i || (i = {})),
                function(t) {
                    t[t.Low = 0] = "Low", t[t.Medium = 1] = "Medium", t[t.High = 2] = "High"
                }(n || (n = {}))
        },
        28139: (t, e, o) => {
            "use strict";
            o.d(e, {
                ToastsLayer: () => _
            });
            var i = o(667294),
                n = o(973935),
                a = o(294184),
                s = o(75443),
                r = o(472625),
                h = o(629791),
                d = o(630976),
                g = o(531484),
                c = o(192557);
            class u {
                constructor(t) {
                    this._animationStage = c.ToastAnimationStage.Add, this._keys = new Map, this._element = null, this.render = t => this._render(t), this.remove = () => this._currentToastsLayer.removeToast(this);
                    const {
                        priority: e,
                        origin: o,
                        currentLayer: i,
                        onLayerChange: n,
                        render: a
                    } = t;
                    this._staticData = Object.freeze({
                        priority: e,
                        origin: o,
                        onLayerChange: n
                    }), this._currentToastsLayer = i || o, this._render = a
                }
                getStaticData() {
                    return this._staticData
                }
                migrate(t) {
                    this._currentToastsLayer = t, this._animationStage = c.ToastAnimationStage.Add
                }
                getCurrentLayer() {
                    return this._currentToastsLayer
                }
                isForeign() {
                    return this._staticData.origin !== this._currentToastsLayer
                }
                getAnimationStage() {
                    return this._animationStage
                }
                setAnimationStage(t) {
                    this._animationStage = t
                }
                setKey(t, e) {
                    this._keys.set(t, e)
                }
                getKey(t = this._currentToastsLayer) {
                    return this._keys.get(t)
                }
                getElement() {
                    return this._element
                }
                setElement(t) {
                    this._element = t
                }
            }
            var l = o(78090);
            const m = {
                position: "fixed",
                left: "0",
                bottom: "0",
                right: "0",
                zIndex: 160
            };
            class _ {
                constructor(t, e, o = m, i) {
                    this._toasts = {
                        [c.ToastPriority.Low]: [],
                        [c.ToastPriority.Medium]: [],
                        [c.ToastPriority.High]: []
                    }, this._container = void 0 !== e ? e : document.body, this._suggestedLayout = void 0 !== t ? t : "loose", this._location = null != i ? i : "bottom-left", this._manager = new d.OverlapManager(document), this._overlapManagerContainer = function(t, e = {}) {
                        const o = t.createElement("div");
                        return o.dataset.role = "toast-container", p(o, { ...m,
                            ...e
                        }), o
                    }(document, o), this._manager.setContainer(this._overlapManagerContainer), this._container.appendChild(this._overlapManagerContainer), this._detachedContainer = document.createElement("div")
                }
                showToast(t) {
                    const {
                        render: e,
                        priority: o = c.ToastPriority.Medium,
                        index: i,
                        origin: n = this,
                        onLayerChange: a
                    } = t, s = new u({
                        priority: o,
                        origin: n,
                        currentLayer: this,
                        render: e,
                        onLayerChange: a
                    }), r = this._getNextKey();
                    return s.setKey(this, r), "compact" === this._suggestedLayout && o === c.ToastPriority.Low ? Promise.all(this._toasts[c.ToastPriority.Low].map(t => this.removeToast(t))).then(() => {
                        this._add(s, i), this._render()
                    }) : (this._add(s, i), this._render()), s
                }
                showExistingToast(t) {
                    const e = this._getNextKey();
                    return t.setKey(this, e), this._add(t), this._render(), t
                }
                removeToast(t) {
                    return new Promise(e => {
                        t.setAnimationStage(c.ToastAnimationStage.Remove), this._render(), setTimeout(() => {
                            this._remove(t), this._render(), e()
                        }, 250)
                    })
                }
                update(t) {
                    const {
                        suggestedLayout: e,
                        location: o,
                        container: i,
                        rootContainerOptions: n
                    } = t;
                    let a = !1,
                        s = !1;
                    void 0 !== e && e !== this._suggestedLayout && (this._setSuggestedLayout(e), a = !0), void 0 !== o && (this._setLocation(o), s = !0), void 0 !== i && (this._setContainer(i), s = !0), void 0 !== n && (this._updateRootContainer(n), s = !0), a ? "compact" === this._suggestedLayout && this._toasts[c.ToastPriority.Low].slice(0, -1).forEach(t => this.removeToast(t)) : s && this._render()
                }
                getToasts() {
                    return this._toasts
                }
                forceRender() {
                    this._render()
                }
                merge(t) {
                    y(t.getToasts()).forEach(async e => {
                        const o = e.getStaticData();
                        await e.remove(), e.migrate(this), this.showExistingToast(e), void 0 !== o.onLayerChange && o.onLayerChange(t, this)
                    })
                }
                split(t) {
                    y(this._toasts).filter(t => t.isForeign()).forEach(async e => {
                        const o = e.getStaticData();
                        await e.remove(), e.migrate(t), t.showExistingToast(e), void 0 !== o.onLayerChange && o.onLayerChange(this, t)
                    })
                }
                reset() {
                    this._toasts = {
                        [c.ToastPriority.Low]: [],
                        [c.ToastPriority.Medium]: [],
                        [c.ToastPriority.High]: []
                    }, this._render()
                }
                destroy() {
                    this._removeRootContainer()
                }
                _removeRootContainer() {
                    n.unmountComponentAtNode(this._detachedContainer), this._detachedContainer.remove(), this._overlapManagerContainer.remove()
                }
                _getToastsList(t) {
                    const e = t.getStaticData().priority;
                    return this._toasts[e]
                }
                _normalizeIndex(t, e) {
                    return t < 0 ? 0 : t > e.length ? e.length : t
                }
                _add(t, e) {
                    const o = this._getToastsList(t);
                    if (void 0 !== e) {
                        const i = this._normalizeIndex(e, o);
                        o.splice(i, 0, t)
                    } else o.push(t)
                }
                _remove(t) {
                    const e = this._getToastsList(t),
                        o = e.indexOf(t);
                    o >= 0 && e.splice(o, 1)
                }
                _render() {
                    const t = y(this._toasts);
                    n.render(i.createElement(T, {
                        toasts: t,
                        suggestedLayout: this._suggestedLayout,
                        location: this._location,
                        manager: this._manager,
                        layer: this
                    }), this._detachedContainer)
                }
                _setSuggestedLayout(t) {
                    t !== this._suggestedLayout && (this._suggestedLayout = t)
                }
                _setLocation(t) {
                    t !== this._location && (this._location = t)
                }
                _setContainer(t) {
                    t !== this._container && (this._container = t, this._container.appendChild(this._overlapManagerContainer))
                }
                _updateRootContainer(t) {
                    p(this._overlapManagerContainer, t)
                }
                _getNextKey() {
                    return (0, s.randomHashN)(5)
                }
            }

            function y(t) {
                return [...t[c.ToastPriority.Low], ...t[c.ToastPriority.Medium], ...t[c.ToastPriority.High]]
            }

            function p(t, e) {
                const {
                    top: o,
                    right: i,
                    bottom: n,
                    left: a,
                    position: s,
                    zIndex: r
                } = e;
                void 0 !== s && (t.style.position = s), void 0 !== r && (t.style.zIndex = String(r)), void 0 !== o && (t.style.top = o), void 0 !== i && (t.style.right = i), void 0 !== n && (t.style.bottom = n), void 0 !== a && (t.style.left = a)
            }

            function v(t, e, o) {
                return t.getKey(o) || e.toString(10)
            }

            function L(t) {
                const {
                    toast: e,
                    toasts: o,
                    layer: n,
                    suggestedLayout: s,
                    location: h,
                    forceRender: d
                } = t, g = (0, i.useRef)(null), u = e.getAnimationStage(), m = u !== c.ToastAnimationStage.None, _ = u === c.ToastAnimationStage.Add, y = function(t, e, o) {
                    var i;
                    const n = e.indexOf(t),
                        a = v(t, n, o);
                    let s = 0;
                    for (const t of e) {
                        const r = e.indexOf(t),
                            h = v(t, r, o),
                            d = (null === (i = t.getElement()) || void 0 === i ? void 0 : i.offsetHeight) || 0,
                            g = t.getAnimationStage() !== c.ToastAnimationStage.None;
                        let u = 0;
                        g && h === a ? u = 1 : !g && n < r && (u = -1), s += u * d
                    }
                    return s
                }(e, o, n), p = a(l["toast-positioning-wrapper"], m && l.hidden, _ && l.added, "compact" === s && l.compact, h && l["location-" + h]);
                return (0,
                    i.useEffect)(() => {
                    if (e.getCurrentLayer() !== n || e.getAnimationStage() !== c.ToastAnimationStage.Add || null === g.current) return;
                    const t = e.getElement();
                    null === t || t !== g.current ? (e.setElement(g.current), d()) : (e.setAnimationStage(c.ToastAnimationStage.None), d())
                }), i.createElement(r.Portal, {
                    layerOptions: {
                        position: "absolute"
                    },
                    left: "0",
                    right: "0"
                }, i.createElement("div", {
                    className: p,
                    style: {
                        transform: `translateY(${y}px)`
                    },
                    ref: g
                }, e.render({
                    onRemove: e.remove,
                    suggestedLayout: s
                })))
            }

            function T(t) {
                const {
                    toasts: e,
                    suggestedLayout: o,
                    location: n,
                    manager: a,
                    layer: s
                } = t, r = (0, g.useForceUpdate)();
                return i.createElement(h.SlotContext.Provider, {
                    value: a
                }, e.map((t, a) => i.createElement(L, {
                    key: v(t, a, s),
                    toast: t,
                    toasts: e,
                    layer: s,
                    suggestedLayout: o,
                    location: n,
                    forceRender: r
                })))
            }
        }
    }
]);