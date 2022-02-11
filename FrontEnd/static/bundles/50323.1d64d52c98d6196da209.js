(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [50323, 54281], {
        909906: () => {},
        488e3: () => {},
        454281: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                Action: () => h,
                ActionAsync: () => l,
                Separator: () => d,
                Loader: () => c
            });
            var i = s(34647),
                n = s(896276),
                o = s.n(n),
                a = s(611877),
                r = s(75443);
            class h {
                constructor(t, e = r.guid()) {
                    this.type = i.MenuItemType.Action, this._destroyed = !1, this._binding = null, this.id = e, this._onUpdate = new(o()), this._options = t, this.update(t)
                }
                execute() {
                    this._options.checkable && this.update({
                        checked: !this._options.checked
                    }), this._options.onExecute && this._options.onExecute(this)
                }
                getLabel() {
                    return this._options.label || ""
                }
                getSubItems() {
                    return this._options.subItems || []
                }
                isDisabled() {
                    return !0 === this._options.disabled
                }
                isActive() {
                    return !0 === this._options.active
                }
                isCheckable() {
                    return !0 === this._options.checkable
                }
                isChecked() {
                    return !0 === this._options.checked
                }
                isLoading() {
                    return !0 === this._options.loading
                }
                getSize() {
                    var t;
                    return null !== (t = this._options.size) && void 0 !== t ? t : "normal"
                }
                getPayload() {
                    return this._options.payload
                }
                update(t) {
                    this._destroyed || (this._unbindShortcut(), t.hotkeyHash && (this._options.shortcutHint = (0, a.humanReadableHash)(t.hotkeyHash)), this._options = Object.assign(this._options, t), this._bindShortcut(), this._onUpdate.fire(this))
                }
                onUpdate() {
                    return this._onUpdate
                }
                getState() {
                    return {
                        label: this.getLabel(),
                        disabled: this.isDisabled(),
                        active: this.isActive(),
                        subItems: this.getSubItems(),
                        checkable: this.isCheckable(),
                        checked: this.isChecked(),
                        loading: this.isLoading(),
                        size: this.getSize(),
                        doNotCloseOnClick: this._options.doNotCloseOnClick || !1,
                        shortcutHint: this._options.shortcutHint,
                        hint: this._options.hint,
                        icon: this._options.icon,
                        iconChecked: this._options.iconChecked,
                        toolbox: this._options.toolbox,
                        showToolboxOnHover: this._options.showToolboxOnHover || !1,
                        statName: this._options.statName,
                        name: this._options.name,
                        invisibleHotkey: this._options.invisibleHotkey,
                        jsxLabel: this._options.jsxLabel
                    }
                }
                getBinding() {
                    return this._binding
                }
                setBinding(t) {
                    this._binding = t
                }
                destroy() {
                    var t, e;
                    this._destroyed = !0, this._onUpdate.destroy(), null !== this._binding && this._binding.destroy(), this._unbindShortcut(), null === (e = (t = this._options).onDestroy) || void 0 === e || e.call(t)
                }
                options() {
                    return this._options
                }
                _bindShortcut() {
                    if (!this._options.hotkeyGroup || !this._options.hotkeyHash) return;
                    const t = "string" == typeof this._options.label ? this._options.label : this._options.name;
                    this._hotkeyAction = this._options.hotkeyGroup.add({
                        hotkey: this._options.hotkeyHash,
                        desc: t,
                        handler: () => this.execute(),
                        isDisabled: () => this.isDisabled()
                    })
                }
                _unbindShortcut() {
                    this._hotkeyAction && (this._hotkeyAction.destroy(), delete this._hotkeyAction)
                }
            }
            class l extends h {
                constructor(t, e) {
                    super({}, e), this._loader = t, this._loaded = !1
                }
                loadOptions() {
                    return this._loadingPromise || (this._loadingPromise = this._loader().then(t => {
                        this._loaded = !0, this.update(t)
                    })), this._loadingPromise
                }
                getState() {
                    return this.loadOptions(), super.getState()
                }
                isLoading() {
                    return !this.isLoaded()
                }
                isLoaded() {
                    return this._loaded
                }
            }
            class d {
                constructor(t, e = r.guid()) {
                    this.type = i.MenuItemType.Separator, this.id = e, this._hint = t
                }
                getHint() {
                    return this._hint
                }
            }
            class c extends h {
                constructor() {
                    super({})
                }
                isLoading() {
                    return !0
                }
                getSize() {
                    return "big"
                }
            }
        },
        34647: (t, e, s) => {
            "use strict";
            var i;
            s.d(e, {
                    MenuItemType: () => i
                }),
                function(t) {
                    t[t.Separator = 0] = "Separator", t[t.Action = 1] = "Action"
                }(i || (i = {}))
        },
        177224: (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                ReportSendingAgent: () => a
            });
            var i = s(120220),
                n = (s(568421), s(130060)),
                o = s(918184);
            class a {
                constructor(t, e = {}) {
                    switch (this._fullURL = `${window.location.protocol}//${window.location.host}`, this._data = t, this._options = e, t.entityType) {
                        case "message":
                            this._entityString = (0, i.t)("message"), this._actionString = (0, i.t)("removed"), this._fullURL += `/chat/m/${t.entityURL}/`;
                            break;
                        case "comment":
                            this._entityString = (0, i.t)("comment"), this._actionString = (0, i.t)("removed"), this._fullURL += `${t.entityURL}#tc${t.entityID}`;
                            break;
                        case "idea":
                            this._entityString = (0, i.t)("idea"), this._actionString = (0, i.t)("hidden"), this._fullURL += t.entityURL;
                            break;
                        case "script":
                            this._entityString = (0, i.t)("script"), this._actionString = (0, i.t)("hidden"), this._fullURL += t.entityURL;
                            break;
                        case "stream":
                            this._entityString = (0, i.t)("stream"), this._actionString = (0, i.t)("hidden"), this._fullURL += t.entityURL
                    }
                }
                send() {
                    const t = {
                        report_type: this._data.entityType,
                        text: ""
                    };
                    this._options.chartId && (t.chart_id = this._options.chartId), this._data.entityID && (t.object_id = this._data.entityID);
                    const e = {
                        is_report: !0,
                        meta: JSON.stringify(t),
                        text: this.getText()
                    };
                    o.post("/conversation-post/", e).done(t => {
                        t && t.error && (0, n.showErrorDialog)({
                            title: "Error",
                            content: t.error,
                            btnType: "danger"
                        })
                    })
                }
                getTitle() {
                    return (0, i.t)("Report {entity} from {username} to moderators").format({
                        entity: this._entityString,
                        username: `<strong>${this._data.username}</strong>`
                    })
                }
                getText() {
                    let t = (0, i.t)("Reported {entity} from @{username}, {url}").format({
                        entity: this._entityString,
                        username: this._data.username,
                        url: this._fullURL
                    });
                    return this._options.additionalText && (t += "\n" + this._options.additionalText), this._data.entityText && (t += "\n\n" + this._data.entityText), t
                }
                getEntity() {
                    return this._entityString
                }
                getAction() {
                    return this._actionString
                }
            }
        },
        126687: (t, e, s) => {
            "use strict";
            s.d(e, {
                default: () => l
            });
            var i = s(464079),
                n = (s(488e3), s(918184)),
                o = s(500466);
            const a = s(987380).getLogger("Ui.TvControlCheckbox"),
                r = {
                    labelWrapper: '{{#hasLabel}}<label>{{#labelLeft}}<span class="tv-control-checkbox__label {{#labelAddClass}}{{labelAddClass}}{{/labelAddClass}}">{{labelLeft}}</span>{{/labelLeft}}{{> inputWrapper }}{{#labelRight}}<span class="tv-control-checkbox__label {{#labelAddClass}}{{labelAddClass}}{{/labelAddClass}}">{{labelRight}}</span>{{/labelRight}}</label>{{/hasLabel}}{{^hasLabel}}{{> inputWrapper }}{{/hasLabel}}',
                    inputWrapper: '<{{ tag }} class="{{ customClass }}{{#disabled}} i-disabled{{/disabled}}">{{^hasCheckbox}}{{> checkbox }}{{/hasCheckbox}}{{> box }}{{> ripple }}</{{ tag }}>',
                    checkbox: '<input{{#id}} id="{{ id }}"{{/id}} class="{{> checkboxClass }}" type="checkbox"{{#name}} name="{{ name }}"{{/name}}{{#checked}} checked{{/checked}}{{#disabled}} disabled{{/disabled}}>',
                    checkboxClass: "{{ customClass }}__input",
                    box: '<span class="{{ customClass }}__box {{#boxAddClass}}{{boxAddClass}}{{/boxAddClass}}">' + s(814269) + "</span>",
                    ripple: '<span class="{{ customClass }}__ripple js-ripple"></span>'
                };
            class h {
                constructor({
                    customClass: t = "tv-control-checkbox",
                    $checkbox: e,
                    tag: s,
                    id: i,
                    name: o,
                    checked: r,
                    disabled: h,
                    labelLeft: l,
                    labelRight: d,
                    labelAddClass: c,
                    boxAddClass: p
                }) {
                    this.$el = null, void 0 === s && (s = l || d ? "span" : "label");
                    const u = e instanceof n && !!e.length;
                    if (u) {
                        if (!e.is("input[type=checkbox]")) return void a.logError("`$checkbox` need to be input[type=checkbox]");
                        if (e.hasClass("i-inited")) return;
                        this._setInputId(e, i), this._setInputClass(e, t), this._setInputName(e, o), this._setInputChecked(e, r), this._setInputDisabled(e, h), r = !!e.prop("checked"), h = !!e.attr("disabled")
                    }
                    this.$el = this.render({
                        $checkbox: e,
                        hasCheckbox: u,
                        customClass: t,
                        tag: s,
                        id: i,
                        name: o,
                        checked: r,
                        disabled: h,
                        labelLeft: l,
                        labelRight: d,
                        hasLabel: l || d,
                        labelAddClass: c,
                        boxAddClass: p
                    }), this.$checkbox = u ? e : this.$el.find("input[type=checkbox]")
                }
                _setInputId(t, e) {
                    void 0 !== e && t.attr("id", e)
                }
                _setInputClass(t, e) {
                    const s = o.render(r.checkboxClass, {
                        customClass: e
                    });
                    t.addClass(s)
                }
                _setInputName(t, e) {
                    void 0 !== e && t.attr("name", e)
                }
                _setInputChecked(t, e) {
                    void 0 !== e && t.prop("checked", !!e)
                }
                _setInputDisabled(t, e) {
                    void 0 !== e && (e ? t.setAttribute("disabled", "disabled") : t.removeAttr("disabled"))
                }
                render(t) {
                    const e = t.$checkbox,
                        s = n(o.render(r.labelWrapper, t, r));
                    if (t.hasCheckbox) {
                        s.insertBefore(e);
                        s.find("." + t.customClass).andSelf().filter("." + t.customClass).eq(0).prepend(e.detach()), e.addClass("i-inited")
                    }
                    return s
                }
                set checked(t) {
                    this._setInputChecked(this.$checkbox, !!t)
                }
                get checked() {
                    return !!this.$checkbox.prop("checked")
                }
            }
            n.fn.tvControlCheckbox = (0, i.createTvBlockWithInstance)("tv-control-checkbox", (function(t, e = {}) {
                return new h(TradingView.mergeObj(e, {
                    $checkbox: t
                }))
            }));
            const l = h
        },
        874040: (t, e, s) => {
            "use strict";
            s.d(e, {
                showReportModal: () => r
            });
            var i = s(120220),
                n = s(158530),
                o = s(177224),
                a = s(500466);

            function r(t, e, s, r, h, l) {
                var d = new o.ReportSendingAgent({
                    username: t,
                    entityType: e,
                    entityURL: s,
                    entityText: r,
                    entityID: h
                }, l);
                return new n.TVModal({
                    title: d.getTitle(),
                    width: 600,
                    destroyOnClose: !0,
                    content: a.render('<div class="tv-text"><p>{{{ warningText }}}</p><textarea readonly rows="7" class="tv-control-textarea">{{ text }}</textarea></div>', {
                        warningText: (0, i.t)("You can send report to moderators. The {entity} from {user} will be checked. If the {entity} contains anything that violates our {rulesLink}, the {entity} will be {action} and its author will be penalized. Please note that if you send false report to moderators, we may apply similar measures to you. Thank you for your help!", {
                            replace: {
                                user: `<strong>${t}</strong>`,
                                rulesLink: `<a href="/house-rules/" target="_blank">${(0,i.t)("House Rules")}</a>`,
                                entity: d.getEntity(),
                                action: d.getAction()
                            }
                        }),
                        text: d.getText()
                    }),
                    actions: [{
                        name: "report",
                        type: "danger",
                        text: (0, i.t)("Report"),
                        key: 13
                    }, {
                        name: "cancel",
                        type: "default",
                        text: (0, i.t)("Cancel"),
                        method: "close"
                    }]
                }).on("action:report", t => {
                    d.send(), t.close()
                }).open()
            }
        },
        544385: (t, e, s) => {
            "use strict";
            s.d(e, {
                listen: () => h,
                pushBackListener: () => l,
                disable: () => d,
                enable: () => c
            });
            var i = s(75443);
            const n = [];
            let o = null;

            function a(t) {
                for (let e = 0; e < n.length; e++)
                    if (n[e].name === t) return e;
                return -1
            }

            function r(t) {
                if (!o)
                    for (let e = n.length - 1; e >= 0 && !0 !== n[e].func(t); e--);
            }

            function h(t) {
                t.addEventListener("keypress", r, !1)
            }

            function l(t, e) {
                const s = {
                        name: t,
                        func: e
                    },
                    i = a(s.name);
                i > -1 && n.splice(i, 1), n.unshift(s)
            }

            function d() {
                return o ? null : (o = (0, i.randomHashN)(4), o)
            }

            function c(t) {
                if (t !== o) throw Error("Lock id is outdated");
                o = null
            }
            h(window)
        },
        108872: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12px" height="12px" fill="currentColor"><path d="M10.37.6c-.43.053-.97.13-1.55.13C7.918.73 7.1.52 6.273.35 5.433.175 4.566 0 3.648 0 1.816 0 1.195.38 1.133.42L1 .51V12h.625V6.626c.234-.094.85-.26 2.027-.26.852.002 1.65.313 2.496.49.86.175 1.75.36 2.715.36.574 0 1.082-.076 1.512-.125.234-.023.44-.05.625-.08V.506c-.184.035-.395.065-.63.095z"/></svg>'
        }
    }
]);