(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [31891], {
        8179: e => {
            e.exports = {
                options: "options-1TbOurr7",
                option: "option-1TbOurr7",
                input: "input-1TbOurr7",
                optionSelected: "optionSelected-1TbOurr7"
            }
        },
        177537: (e, t, s) => {
            "use strict";
            s.d(t, {
                SwitchGroup: () => o,
                makeSwitchGroupItem: () => r
            });
            var n = s(667294),
                i = s(45697);
            class o extends n.PureComponent {
                constructor() {
                    super(...arguments), this._subscriptions = new Set, this._getName = () => this.props.name, this._getValues = () => this.props.values, this._getOnChange = () => this.props.onChange, this._subscribe = e => {
                        this._subscriptions.add(e)
                    }, this._unsubscribe = e => {
                        this._subscriptions.delete(e)
                    }
                }
                getChildContext() {
                    return {
                        switchGroupContext: {
                            getName: this._getName,
                            getValues: this._getValues,
                            getOnChange: this._getOnChange,
                            subscribe: this._subscribe,
                            unsubscribe: this._unsubscribe
                        }
                    }
                }
                render() {
                    return this.props.children
                }
                componentDidUpdate(e) {
                    this._notify(this._getUpdates(this.props.values, e.values))
                }
                _notify(e) {
                    this._subscriptions.forEach(t => t(e))
                }
                _getUpdates(e, t) {
                    return [...t, ...e].filter(s => t.includes(s) ? !e.includes(s) : e.includes(s))
                }
            }

            function r(e) {
                var t;
                return (t = class extends n.PureComponent {
                    constructor() {
                        super(...arguments), this._onChange = e => {
                            this.context.switchGroupContext.getOnChange()(e)
                        }, this._onUpdate = e => {
                            e.includes(this.props.value) && this.forceUpdate()
                        }
                    }
                    componentDidMount() {
                        this.context.switchGroupContext.subscribe(this._onUpdate)
                    }
                    render() {
                        return n.createElement(e, { ...this.props,
                            name: this._getName(),
                            onChange: this._onChange,
                            checked: this._isChecked()
                        })
                    }
                    componentWillUnmount() {
                        this.context.switchGroupContext.unsubscribe(this._onUpdate)
                    }
                    _getName() {
                        return this.context.switchGroupContext.getName()
                    }
                    _isChecked() {
                        return this.context.switchGroupContext.getValues().includes(this.props.value)
                    }
                }).contextTypes = {
                    switchGroupContext: i.any.isRequired
                }, t
            }
            o.childContextTypes = {
                switchGroupContext: i.any.isRequired
            }
        },
        593690: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                TimeFrameViewRenderer: () => h
            });
            var n = s(667294),
                i = s(973935),
                o = s(294184),
                r = s(177537),
                a = s(8179);
            const p = (0, r.makeSwitchGroupItem)(class extends n.PureComponent {
                constructor() {
                    super(...arguments), this._onChange = () => {
                        this.props.onChange && this.props.onChange(this.props.value || "")
                    }
                }
                render() {
                    const {
                        option: e,
                        checked: t,
                        name: s,
                        value: i,
                        theme: r = a
                    } = this.props;
                    return n.createElement("label", {
                        title: e.description,
                        className: o("apply-common-tooltip", r.option, {
                            [r.optionSelected]: t
                        })
                    }, n.createElement("input", {
                        tabIndex: 0,
                        className: r.input,
                        type: "radio",
                        name: s,
                        onChange: this._onChange,
                        checked: t,
                        value: i
                    }), e.text)
                }
            });
            class c extends n.PureComponent {
                render() {
                    const {
                        name: e,
                        className: t,
                        ranges: s,
                        activeRange: i,
                        onSelectRange: c,
                        theme: h
                    } = this.props;
                    return n.createElement("div", {
                        className: o(a.options, t)
                    }, n.createElement(r.SwitchGroup, {
                        values: i ? [i] : [],
                        onChange: c,
                        name: e
                    }, s.map(e => n.createElement(p, {
                        key: e.value,
                        value: e.value,
                        option: e,
                        theme: h
                    }))))
                }
            }
            c.defaultProps = {
                name: "timeframe"
            };
            class h {
                constructor(e, t) {
                    this._container = e, this._props = t, this.update()
                }
                update(e = {}) {
                    this._props = { ...this._props,
                        ...e
                    };
                    const t = n.createElement(c, { ...this._props
                    });
                    i.render(t, this._container)
                }
                destroy() {
                    i.unmountComponentAtNode(this._container)
                }
            }
        }
    }
]);