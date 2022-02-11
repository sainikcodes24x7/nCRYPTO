(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [91050], {
        991050: (t, e, s) => {
            "use strict";
            s.d(e, {
                horizontalScrollFactory: () => f,
                HorizontalScroll: () => R
            });
            var i = s(667294),
                r = s(294184),
                n = s(836982),
                o = s(416282),
                l = s(640539),
                a = s(468450),
                h = s(971928),
                c = s(582755),
                u = s(329123),
                d = s(736677);
            const p = {
                isVisibleScrollbar: !0,
                shouldMeasure: !0,
                hideButtonsFrom: 1
            };

            function f(t = b, e = S, s = m, l = w) {
                var u;
                return (u = class extends i.PureComponent {
                    constructor(t) {
                        super(t), this._scroll = i.createRef(), this._wrapMeasureRef = i.createRef(), this._contentMeasureRef = i.createRef(), this._handleScrollLeft = () => {
                            if (this.props.onScrollButtonClick) return void this.props.onScrollButtonClick("left");
                            const t = this.props.scrollStepSize || this.state.widthWrap - 50;
                            this.animateTo(Math.max(0, this.currentPosition() - t))
                        }, this._handleScrollRight = () => {
                            if (this.props.onScrollButtonClick) return void this.props.onScrollButtonClick("right");
                            const t = this.props.scrollStepSize || this.state.widthWrap - 50;
                            this.animateTo(Math.min((this.state.widthContent || 0) - (this.state.widthWrap || 0), this.currentPosition() + t))
                        }, this._handleResizeWrap = t => {
                            this.props.onMeasureWrap && this.props.onMeasureWrap(t), this.setState({
                                widthWrap: t.width
                            }), this._checkButtonsVisibility()
                        }, this._handleResizeContent = t => {
                            this.props.onMeasureContent && this.props.onMeasureContent(t);
                            const {
                                shouldDecreaseWidthContent: e,
                                buttonsWidthIfDecreasedWidthContent: s
                            } = this.props;
                            e && s ? this.setState({
                                widthContent: t.width + 2 * s
                            }) : this.setState({
                                widthContent: t.width
                            })
                        }, this._handleScroll = () => {
                            const {
                                onScroll: t
                            } = this.props;
                            t && t(this.currentPosition(), this.isAtLeft(), this.isAtRight()), this._checkButtonsVisibility()
                        }, this._checkButtonsVisibility = () => {
                            const {
                                isVisibleLeftButton: t,
                                isVisibleRightButton: e
                            } = this.state, s = this.isAtLeft(), i = this.isAtRight();
                            s || t ? s && t && this.setState({
                                isVisibleLeftButton: !1
                            }) : this.setState({
                                isVisibleLeftButton: !0
                            }), i || e ? i && e && this.setState({
                                isVisibleRightButton: !1
                            }) : this.setState({
                                isVisibleRightButton: !0
                            })
                        }, this.state = {
                            widthContent: 0,
                            widthWrap: 0,
                            isVisibleRightButton: !1,
                            isVisibleLeftButton: !1
                        }
                    }
                    componentDidMount() {
                        this._checkButtonsVisibility()
                    }
                    componentDidUpdate(t, e) {
                        e.widthWrap === this.state.widthWrap && e.widthContent === this.state.widthContent || this._handleScroll(), this.props.shouldMeasure && this._wrapMeasureRef.current && this._contentMeasureRef.current && (this._wrapMeasureRef.current.measure(), this._contentMeasureRef.current.measure())
                    }
                    currentPosition() {
                        return this._scroll.current ? (0, c.isRtl)() ? (0, c.getLTRScrollLeft)(this._scroll.current) : this._scroll.current.scrollLeft : 0
                    }
                    isAtLeft() {
                        return !this._isOverflowed() || this.currentPosition() <= (0, o.ensureDefined)(this.props.hideButtonsFrom)
                    }
                    isAtRight() {
                        return !this._isOverflowed() || this.currentPosition() + this.state.widthWrap >= this.state.widthContent - (0, o.ensureDefined)(this.props.hideButtonsFrom)
                    }
                    animateTo(t, e = h.dur) {
                        const s = this._scroll.current;
                        s && ((0, c.isRtl)() && (t = (0, c.getLTRScrollLeftOffset)(s, t)), e <= 0 ? s.scrollLeft = Math.round(t) : (0, a.doAnimate)({
                            onStep(t, e) {
                                s.scrollLeft = Math.round(e)
                            },
                            from: s.scrollLeft,
                            to: Math.round(t),
                            easing: h.easingFunc.easeInOutCubic,
                            duration: e
                        }))
                    }
                    render() {
                        const {
                            children: o,
                            isVisibleScrollbar: a,
                            isVisibleFade: h,
                            isVisibleButtons: c,
                            shouldMeasure: u,
                            shouldDecreaseWidthContent: p,
                            buttonsWidthIfDecreasedWidthContent: f,
                            onMouseOver: m,
                            onMouseOut: w,
                            scrollWrapClassName: b,
                            fadeClassName: S
                        } = this.props, {
                            isVisibleRightButton: _,
                            isVisibleLeftButton: R
                        } = this.state, C = p && f;
                        return i.createElement(n, {
                            whitelist: ["width"],
                            onMeasure: this._handleResizeWrap,
                            shouldMeasure: u,
                            ref: this._wrapMeasureRef
                        }, i.createElement("div", {
                            className: d.wrapOverflow,
                            onMouseOver: m,
                            onMouseOut: w
                        }, i.createElement("div", {
                            className: r(d.wrap, C ? d.wrapWithArrowsOuting : "")
                        }, i.createElement("div", {
                            className: r(d.scrollWrap, b, {
                                [d.noScrollBar]: !a
                            }),
                            onScroll: this._handleScroll,
                            ref: this._scroll
                        }, i.createElement(n, {
                            onMeasure: this._handleResizeContent,
                            whitelist: ["width"],
                            shouldMeasure: u,
                            ref: this._contentMeasureRef
                        }, o)), h && i.createElement(s, {
                            isVisible: R,
                            className: S
                        }), h && i.createElement(l, {
                            isVisible: _,
                            className: S
                        }), c && i.createElement(t, {
                            onClick: this._handleScrollLeft,
                            isVisible: R
                        }), c && i.createElement(e, {
                            onClick: this._handleScrollRight,
                            isVisible: _
                        }))))
                    }
                    _isOverflowed() {
                        const {
                            widthContent: t,
                            widthWrap: e
                        } = this.state;
                        return t > e
                    }
                }).defaultProps = p, u
            }

            function m(t) {
                return i.createElement("div", {
                    className: r(d.fadeLeft, t.className, {
                        [d.isVisible]: t.isVisible
                    })
                })
            }

            function w(t) {
                return i.createElement("div", {
                    className: r(d.fadeRight, t.className, {
                        [d.isVisible]: t.isVisible
                    })
                })
            }

            function b(t) {
                return i.createElement(_, { ...t,
                    className: d.scrollLeft
                })
            }

            function S(t) {
                return i.createElement(_, { ...t,
                    className: d.scrollRight
                })
            }

            function _(t) {
                return i.createElement("div", {
                    className: r(t.className, {
                        [d.isVisible]: t.isVisible
                    }),
                    onClick: t.onClick
                }, i.createElement("div", {
                    className: d.iconWrap
                }, i.createElement(l.Icon, {
                    icon: u,
                    className: d.icon
                })))
            }
            const R = f(b, S, m, w)
        }
    }
]);