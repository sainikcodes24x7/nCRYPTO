(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [94965], {
        227937: (e, t, n) => {
            "use strict";
            var r = n(896276),
                i = n(331565).isFunction;

            function s(e) {
                if (this._listeners = new r, this._childs = [], this._muteChildChanges = !1, void 0 !== e)
                    if (this.isPrimitiveType(e)) this._value = e;
                    else
                        for (var t in e) this.addProperty(t, e[t])
            }
            s.prototype.merge = function(e, t) {
                var n = null;
                if (t) var r = (n = []).length;
                if (void 0 === e) return n;
                if (this.isPrimitiveType(e)) return t && this._value !== e && n.push(this), this._value = e, n;
                if (Array.isArray(e))
                    for (var i = 0; i < e.length; i++)
                        if (this[i]) {
                            var s = this[i].merge(e[i], t);
                            t && (n = n.concat(s))
                        } else this.addProperty(i, e[i]), t && n.push(this[i]);
                else
                    for (var a in e)
                        if (this[a]) {
                            s = this[a].merge(e[a], t);
                            t && void 0 !== s && (n = n.concat(s))
                        } else this.addProperty(a, e[a]), t && n.push(this[a]);
                return t && n.length > r && n.push(this), n
            }, s.prototype.mergeAndFire = function(e) {
                var t = this.merge(e, !0);
                this._muteChildChanges = !0, t.forEach((function(e) {
                    e._muteChildChanges = !0
                })), t.forEach((function(e) {
                    e._muteChildChanges = !1, e.listeners().fire(e)
                })), this._muteChildChanges = !1, t.length > 0 && this.listeners().fire(this)
            }, s.prototype.state = function(e) {
                var t = i(this.value) ? this.value() : void 0;
                void 0 === t && (t = {});
                for (var n = 0; n < this._childs.length; n++) {
                    var r = this._childs[n];
                    if (e && -1 !== e.indexOf(r)) continue;
                    const i = this[r];
                    let c;
                    if (e) {
                        for (var s = [], a = 0; a < e.length; a++) {
                            var o = e[a];
                            o.startsWith(r + ".") && s.push(o.substring(r.length + 1))
                        }
                        c = i.state(s)
                    } else c = i.state();
                    (void 0 !== c || i.storeStateIfUndefined()) && (t[r] = c)
                }
                return t
            }, s.prototype.storeStateIfUndefined = function() {
                return !0
            }, s.prototype.clone = function(e) {
                return new s(this.state())
            }, s.prototype.isPrimitiveType = function(e) {
                return null === e || (!!isNumber(e) || (!!new TradingView.TypeValidator(String).check(e) || TradingView.isBoolean(e)))
            }, s.prototype.value = function() {
                return this._value
            }, s.prototype.listeners = function() {
                return this._listeners
            }, s.prototype.childCount = function() {
                return this._childs.length
            }, s.prototype.childNames = function() {
                return this._childs
            }, s.prototype.child = function(e) {
                return this[e]
            }, s.prototype.setValue = function(e, t) {
                (this._value !== e || t) && (this._value = e, this._listeners.fire(this))
            }, s.prototype.setValueSilently = function(e) {
                this._value = e
            }, s.prototype.addProperty = function(e, t) {
                var n = new s(t);
                this[e] = n, this._childs.push(e), n.subscribe(this, this.childChanged)
            }, s.prototype.removeProperty = function(e) {
                this[e].unsubscribe(this, this.childChanged), delete this[e], this._childs = this._childs.filter((function(t) {
                    return t !== e
                }))
            }, s.prototype.hasChild = function(e) {
                return this._childs.indexOf(e) >= 0
            }, s.prototype.addChild = function(e, t) {
                this[e] && this[e].unsubscribe(this, this.childChanged), this[e] = t, -1 === this._childs.indexOf(e) && this._childs.push(e), t.subscribe(this, this.childChanged)
            }, s.prototype.childChanged = function(e, t) {
                this._muteChildChanges || this.listeners().fire(this)
            }, s.prototype.subscribe = function(e, t) {
                this.listeners().subscribe(e, t, !1)
            }, s.prototype.unsubscribe = function(e, t) {
                this.listeners().unsubscribe(e, t)
            }, s.prototype.unsubscribeAll = function(e) {
                this.listeners().unsubscribeAll(e)
            }, s.prototype.childs = function() {
                return this
            }, e.exports = s
        },
        457746: (e, t, n) => {
            "use strict";
            var r = n(896276),
                i = n(918184),
                s = n(416282).assert,
                a = n(929098).trackEvent,
                o = n(541962).TVXWindowEvents,
                c = n(987380).getLogger("Pine.ScriptLib"),
                u = n(110164).telemetry,
                l = n(288001),
                p = {
                    fast: ["delete", "get", "is_auth_to_get", "is_auth_to_write", "parse_title", "rename", "lib_list"],
                    medium: ["list", "eval_pine_ex", "translate_light"],
                    slow: ["process_legacy", "publish", "save", "translate", "translate_source", "gen_alert"]
                };
            var d = {};

            function f() {
                d._cache = {}
            }
            d._isAuthCache = new f, d._pineDeleted = new r, o.on("TVScriptModified", (function(e) {
                d.clearSavedScriptsCache(), d.scriptUpdater() && d.scriptUpdater().onTVScriptModified(JSON.parse(e))
            })), o.on("TVScriptDeleted", (function(e) {
                d.clearAllCaches(), d.scriptUpdater() && d.scriptUpdater().onTVScriptDeleted(JSON.parse(e))
            })), o.on("TVScriptRenamed", (function(e) {
                d.clearSavedScriptsCache(), d.scriptUpdater() && d.scriptUpdater().onTVScriptRenamed(JSON.parse(e))
            })), o.on("TVScriptLegacyPineProcessed", (function(e) {
                d.clearSavedScriptsCache(), d.scriptUpdater() && d.scriptUpdater().onTVScriptLegacyPineProcessed(JSON.parse(e))
            })), d.PINE_FACADE_URL = function() {
                return window.PINE_URL
            }, d.onPineDeleted = function() {
                return d._pineDeleted
            }, d._pineFacadeAjax = function(e, t, n, r) {
                c.logNormal("Requesting pine facade scripts, url: " + t);
                var s = function(e, t) {
                        for (var n = Object.keys(p), r = 0; r < n.length; r++) {
                            var i = p[n[r]].filter((function(t) {
                                return -1 !== e.indexOf(t)
                            }));
                            if (Boolean(i.length)) return n[r]
                        }
                        return !1
                    }(t),
                    a = Date.now(),
                    o = r ? void 0 : {
                        withCredentials: !0
                    };
                return i.ajax({
                    url: d.PINE_FACADE_URL() + t,
                    type: e,
                    data: n || {},
                    dataType: "json",
                    xhrFields: o
                }).done((function() {
                    var e = Date.now() - a;
                    u.sendReport("pine", s + "_group_time_frame", {
                        value: e
                    }), u.sendReport("pine", s + "_group_ok"), c.logNormal("Requesting pine facade scripts finished, url: " + t)
                })).fail((function() {
                    var e = Date.now() - a;
                    u.sendReport("pine", s + "_group_time_frame", {
                        value: e
                    }), u.sendReport("pine", s + "_group_error"), c.logError("Requesting pine facade scripts failed, url: " + t)
                }))
            }, d.convertScript = function(e, t) {
                var n = i.Deferred(),
                    r = {
                        source: e,
                        version_to: t
                    };
                return d._pineFacadeAjax("POST", "/convert/", r).done((function(e, t, r) {
                    e.error ? n.reject(d._readableError(e.error)) : n.resolve(e)
                })).fail((function(e, t, r) {
                    d._anyRequestAsyncFail(n, e)
                })), n.promise()
            }, d.translateScriptAsync = function(e, t, n, r) {
                a("Pine", "ScriptLib.translateScript"), r = !!r;
                var s = i.Deferred(),
                    o = "/translate_source/" + encodeURIComponent(t) + "/?is_pine_ex=" + r,
                    c = {
                        user_name: window.user && window.user.username,
                        source: e,
                        inputs: JSON.stringify(n || {})
                    };
                return d._pineFacadeAjax("POST", o, c).done((function(e, t, n) {
                    d._translateScriptAsyncDone(s, e)
                })).fail((function(e, t, n) {
                    d._anyRequestAsyncFail(s, e)
                })), s.promise()
            }, d.translateScriptAsync2 = function(e, t) {
                c.logNormal("translateScriptAsync2, pineId=" + e + " pineVersion=" + t), a("Pine", "ScriptLib.translateScript");
                var n = i.Deferred(),
                    r = 0 !== e.indexOf("USER"),
                    s = window.user && window.user.username,
                    u = "?user_name=" + encodeURIComponent(s),
                    p = "/translate/" + encodeURIComponent(e) + "/" + t + "/";
                return r || null == s || (p += u), d._pineFacadeAjax("GET", p, void 0, r).done((function(e, r, i) {
                    if (d._translateScriptAsyncDone(n, e), t < 0) {
                        d.clearSavedScriptsCache();
                        var s = {
                            scriptMetaInfo: e.result.metaInfo
                        };
                        o.emit("TVScriptLegacyPineProcessed", JSON.stringify(s)), l.emit("TVScriptLegacyPineProcessed", s), setTimeout((function() {
                            s.isSelfCall = !0, null != d.scriptUpdater() && d.scriptUpdater().onTVScriptLegacyPineProcessed(s)
                        }), 0)
                    }
                })).fail((function(e, t, r) {
                    d._anyRequestAsyncFail(n, e)
                })), n.promise()
            }, d._translateScriptAsyncDone = function(e, t) {
                if (t.error) e.reject(d._readableError(t.error));
                else if (t.success) e.resolve(t.result.metaInfo, t.result.IL);
                else {
                    var n = t.result ? t.result.metaInfo : null;
                    e.reject(t.reason, n)
                }
            }, d._saveScriptAsyncDone = function(e, t) {
                if (t.error) e.reject(d._readableError(t.error));
                else if (t.success) e.resolve(t.result.metaInfo);
                else {
                    var n = t.result ? t.result.metaInfo : null;
                    e.resolve(n, t.reason)
                }
            }, d._generateAlertAsyncDone = function(e, t) {
                if (t.error) e.reject(d._readableError(t.error));
                else if (t.success) e.resolve(t.result.metaInfo, t.result.IL, t.result.inputs || null, t.result.gen_alert_data || null);
                else {
                    var n = t.result ? t.result.metaInfo : null;
                    e.reject(t.reason, n)
                }
            }, d._readableError = function(e, t) {
                return t
            }, d._anyRequestAsyncFail = function(e, t) {
                0 === d.PINE_FACADE_URL().indexOf("http") && c.logError(t.responseText), e.reject(d._readableError(t.status, t.statusText))
            }, d.isAuthToWritePineScript = function(e) {
                var t = "write_" + e,
                    n = d._isAuthCache.getPromise(t);
                if (null !== n) return n;
                a("Pine", "ScriptLib.isAuthToWritePineScript");
                var r = i.Deferred(),
                    s = "/is_auth_to_write/" + encodeURIComponent(e);
                return d._pineFacadeAjax("GET", s).done((function(e, t, n) {
                    r.resolve(e)
                })).fail((function(e, t, n) {
                    d._anyRequestAsyncFail(r, e)
                })), d._isAuthCache.setPromise(t, r.promise())
            }, d.isAuthToGetPineSourceCode = function(e, t) {
                var n = "get_" + e + "_" + t,
                    r = d._isAuthCache.getPromise(n);
                if (null !== r) return r;
                a("Pine", "ScriptLib.isAuthToGetPineSourceCode");
                var s = i.Deferred(),
                    o = "/is_auth_to_get/" + encodeURIComponent(e) + "/" + t;
                return d._pineFacadeAjax("GET", o).done((function(e, t, n) {
                    s.resolve(e)
                })).fail((function(e, t, n) {
                    d._anyRequestAsyncFail(s, e)
                })), d._isAuthCache.setPromise(n, s.promise())
            }, f.prototype.getPromise = function(e) {
                var t = d._cache[e];
                return void 0 === t ? null : void 0 !== t.value ? i.Deferred().resolve(t.value) : void 0 !== t.promise ? t.promise : null
            }, f.prototype.setPromise = function(e, t) {
                return d._cache[e] = {
                    promise: t
                }, t.done((function(t) {
                    d._cache[e] = {
                        value: t
                    }
                })).fail((function(t) {
                    delete d._cache[e]
                })), t
            }, d.getPineSourceCode = function(e, t, n) {
                a("Pine", "ScriptLib.getPineSourceCode");
                var r = i.Deferred(),
                    s = "?no_4xx=" + !!n,
                    o = "/get/" + encodeURIComponent(e) + "/" + t + s;
                return d._pineFacadeAjax("GET", o).done((function(e, t, n) {
                    !1 === e.success ? r.reject(e.reason) : r.resolve(e)
                })).fail((function(e, t, n) {
                    d._anyRequestAsyncFail(r, e)
                })), r.promise()
            }, d.saveNewDraft = function(e) {
                a("Pine", "ScriptLib.saveNewDraft");
                var t = i.Deferred();
                if (null == e || "" === e) return t.reject(i.t("Cannot save empty source code"));
                var n = window.user && window.user.username,
                    r = "/save/new_draft/?user_name=" + encodeURIComponent(n) + "&allow_use_existing_draft=true",
                    s = {
                        source: e
                    };
                return d._pineFacadeAjax("POST", r, s).done((function(e, n, r) {
                    d._translateScriptAsyncDone(t, e)
                })).fail((function(e, n, r) {
                    d._anyRequestAsyncFail(t, e)
                })), t.promise()
            }, d.saveNextDraft = function(e, t, n) {
                a("Pine", "ScriptLib.saveNextDraft");
                var r = i.Deferred();
                if (null == t || "" === t) return r.reject(i.t("Cannot save empty source code"));
                var s = window.user && window.user.username,
                    o = (n = !!n, "/save/next_draft/" + encodeURIComponent(e) + "/?user_name=" + encodeURIComponent(s) + "&allow_create_new=" + n),
                    c = {
                        source: t
                    };
                return d._pineFacadeAjax("POST", o, c).done((function(e, t, n) {
                    d._translateScriptAsyncDone(r, e)
                })).fail((function(e, t, n) {
                    d._anyRequestAsyncFail(r, e)
                })), r.promise()
            }, d.processLegacy = function(e, t) {
                a("Pine", "ScriptLib.processLegacy");
                var n = i.Deferred(),
                    r = window.user && window.user.username,
                    s = "/process_legacy/" + encodeURIComponent(e) + "/?user_name=" + encodeURIComponent(r),
                    o = {};
                return null != t && "" !== t && (o.source = t), d._pineFacadeAjax("POST", s, o).done((function(e, t, r) {
                    d._translateScriptAsyncDone(n, e)
                })).fail((function(e, t, r) {
                    d._anyRequestAsyncFail(n, e)
                })), n.promise()
            }, d.generateAlert = function(e) {
                a("Pine", "ScriptLib.generateAlert");
                var t = i.Deferred(),
                    n = window.user && window.user.username,
                    r = "/gen_alert/?user_name=" + encodeURIComponent(n),
                    s = {
                        alert_info: e
                    },
                    o = Date.now();
                return d._pineFacadeAjax("POST", r, s).done((function(e, n, r) {
                    u.sendReport("alerts", "compilation_ok"), d._generateAlertAsyncDone(t, e)
                })).fail((function(e, n, r) {
                    u.sendReport("alerts", "compilation_error"), d._anyRequestAsyncFail(t, e)
                })).always((function() {
                    var e = Date.now() - o;
                    u.sendReport("alerts", "compilation_time_frame", {
                        value: e
                    })
                })), t.promise()
            }, d.parseScriptTitleAsync = function(e) {
                a("Pine", "ScriptLib.parseScriptTitle");
                var t = i.Deferred();
                if (null == e || "" === e) return t.reject(i.t("Cannot save empty source code"));
                var n = {
                    user_name: window.user && window.user.username,
                    source: e
                };
                return d._pineFacadeAjax("POST", "/parse_title/", n).done((function(e, n, r) {
                    e.error ? t.reject(d._readableError(e.error)) : e.success ? t.resolve(e.result) : t.reject(e.reason)
                })).fail((function(e) {
                    d._anyRequestAsyncFail(t, e)
                })), t.promise()
            }, d.evalMetaInfoExprsAsync = function(e, t) {
                a("Pine", "ScriptLib.evalMetaInfoExprs");
                var n = i.Deferred(),
                    r = {
                        username: window.user && window.user.username,
                        source: e,
                        inputs: JSON.stringify(t || {})
                    };
                return d._pineFacadeAjax("POST", "/eval_pine_ex/", r).done((function(e, t, r) {
                    e.error ? n.reject(d._readableError(e.error)) : e.success ? n.resolve(e.result) : n.reject(e.reason)
                })).fail((function(e) {
                    d._anyRequestAsyncFail(n, e)
                })), n.promise()
            }, d.patchPropertiesAsync = function(e, t, n) {
                return c.logNormal("patchPropertiesAsync"), new Promise((function(r, i) {
                    if (t.TVScriptMetaInfoExprs) {
                        var a = t.TVScriptMetaInfoExprs.tree,
                            o = t.TVScriptMetaInfoExprs.patchMap;
                        d.evalMetaInfoExprsAsync(a, n).done((function(t) {
                            for (var n = t.rootValues, i = Object.keys(o), a = 0; a < i.length; a++) {
                                var c = i[a],
                                    u = n[o[c]],
                                    l = c.split(".");
                                "defaults" === l[0] && l.splice(0, 1), s(l.length > 1, "Unexpectedly short json path");
                                for (var p = e, d = 0; d < l.length - 1; ++d) p = p[l[d]];
                                p[l[l.length - 1]].setValue(u)
                            }
                            r(e)
                        })).fail((function(e) {
                            i(e)
                        }))
                    } else r(e)
                }))
            }, d.scriptUpdater = function() {
                return window.scriptUpdater
            }, d.clearAllCaches = function() {
                d.clearIsAuthToCaches(),
                    d.clearSavedScriptsCache()
            }, d.clearIsAuthToCaches = function(e) {
                e ? Object.keys(d._cache).filter((function(t) {
                    return t.indexOf(e) >= 0
                })).forEach((function(e) {
                    delete d._cache[e]
                })) : d._isAuthCache = new f
            }, d.clearSavedScriptsCache = function(e) {
                delete d._userScriptsDfd
            }, d.requestUserScripts = function(e) {
                if (a("Pine", "ScriptLib.requestUserScripts"), window.is_authenticated) {
                    if (!d._userScriptsDfd) {
                        d._userScriptsDfd = i.Deferred();
                        var t = d._userScriptsDfd;
                        d._pineFacadeAjax("GET", "/list?filter=saved").done((function(e, n, r) {
                            t.resolve(e)
                        })).fail((function(e) {
                            d._anyRequestAsyncFail(t, e)
                        }))
                    }
                    t = d._userScriptsDfd
                } else t = i.Deferred().resolve([]);
                return "function" == typeof e && t.done(e), t.promise()
            }, d.setUserScripts = function(e) {
                d._userScriptsDfd || (d._userScriptsDfd = i.Deferred().resolve(e))
            }, d.requestUserPublishedScripts = function(e, t) {
                if (a("Pine", "ScriptLib.requestUserPublishedScripts"), window.is_authenticated) {
                    if (t || !d._userPublishedScriptsDfd) {
                        d._userPublishedScriptsDfd = i.Deferred();
                        var n = d._userPublishedScriptsDfd;
                        d._pineFacadeAjax("GET", "/list?filter=published").done((function(e, t, r) {
                            n.resolve(e)
                        })).fail((function(e) {
                            d._anyRequestAsyncFail(n, e)
                        }))
                    }
                    n = d._userPublishedScriptsDfd
                } else n = i.Deferred().resolve([]);
                return "function" == typeof e && n.done(e), n.promise()
            }, d.requestPineEditorNewTemplateScripts = function(e) {
                a("Pine", "ScriptLib.requestPineEditorNewTemplateScripts");
                var t = i.Deferred();
                return d._pineFacadeAjax("GET", "/list/?filter=template", void 0, !0).done((function(e, n, r) {
                    t.resolve(e)
                })).fail((function(e) {
                    d._anyRequestAsyncFail(t, e)
                })), "function" == typeof e && t.done(e), t.promise()
            }, d.requestInfoForScripts = function(e) {
                return Promise.all([d._pineFacadeAjax("GET", "/list?filter=saved"), d._pineFacadeAjax("GET", "/list?filter=addon", void 0, !0)]).then((function(t) {
                    var n = t[0],
                        r = t[1];
                    return n.concat(r).filter((function(t) {
                        return e.includes(t.scriptIdPart)
                    }))
                }))
            }, d.requestBuiltinScripts = function() {
                a("Pine", "ScriptLib.requestBuiltinScripts"), c.logNormal("Request built-in scripts");
                var e = i.Deferred();
                return d._pineFacadeAjax("GET", "/list/?filter=standard", void 0, !0).done((function(t, n, r) {
                    c.logNormal("Request built-in scripts finished"), e.resolve(t)
                })).fail((function(t) {
                    c.logWarn("Request built-in scripts finished with fail"), d._anyRequestAsyncFail(e, t)
                })), e.promise()
            }, d.requestBuiltinAndUserScripts = function() {
                a("Pine", "ScriptLib.requestBuiltinAndUserScripts"), c.logNormal("Request built-in and user scripts");
                var e, t = window.user && window.user.username,
                    n = {},
                    r = new Promise((function(t, r) {
                        e = t, n.reject = r
                    }));
                return Promise.all([d._pineFacadeAjax("GET", "/list?filter=saved&user_name=" + encodeURIComponent(t), void 0, !1), d._pineFacadeAjax("GET", "/list?filter=standard", void 0, !0)]).then((function(t) {
                    c.logNormal("Request built-in and user scripts finished");
                    var n = t[0],
                        r = t[1];
                    e(n.concat(r))
                })).catch((function(e) {
                    c.logWarn("Request built-in and user scripts finished with fail"), d._anyRequestAsyncFail(n, e)
                })), r
            }, d.requestCandlestickScripts = function() {
                var e;
                a("Pine", "ScriptLib.requestCandlestickScripts"), c.logNormal("Request candlestick scripts");
                var t = {},
                    n = new Promise((function(n, r) {
                        e = n, t.reject = r
                    }));
                return d._pineFacadeAjax("GET", "/list?filter=candlestick", void 0, !0).done((function(t) {
                    c.logNormal("Request candlestick scripts finished"), e(t)
                })).fail((function(e) {
                    c.logWarn("Request candlestick scripts finished with fail"), d._anyRequestAsyncFail(t, e)
                })), n
            };
            var _ = {
                time: -1 / 0,
                request: null
            };
            d.requestFundamentalScripts = function() {
                if (_.time + 6e5 > Date.now() && null !== _.request) return c.logNormal("Return fundamentals from cache"), _.request;
                c.logNormal("Request fundamental scripts");
                var e = d._pineFacadeAjax("GET", "/list?filter=fundamental", void 0, !1);
                return e.then((function(e) {
                    c.logNormal("Request fundamental scripts finished")
                })), e.fail((function(e) {
                    c.logWarn("Request fundamental scripts finished with fail, resetting cache"), _.request = null
                })), _.time = Date.now(), _.request = Promise.resolve(e.promise()), _.request
            }, d.requestPineAddons = function(e) {
                a("Pine", "ScriptLib.requestPineAddons");
                var t = i.Deferred();
                return d._pineFacadeAjax("GET", "/list?filter=addon&pine_id_prefix=" + e).done((function(e) {
                    t.resolve(e)
                })).fail((function(e) {
                    d._anyRequestAsyncFail(t, e)
                })), t
            }, d._updateAliveScriptInstances = function(e, t) {
                var n = {};
                n.scriptMetaInfo = e.result.metaInfo, n.scriptVersionToUpdate = t, o.emit("TVScriptModified", JSON.stringify(n)), l.emit("TVScriptModified", n), setTimeout((function() {
                    n.isSelfCall = !0, null != d.scriptUpdater() && d.scriptUpdater().onTVScriptModified(n)
                }), 0)
            }, d.saveNew = function(e, t, n, r) {
                a("Pine", "ScriptLib.saveNew");
                var s = i.Deferred();
                if (null == e || "" === e) return s.reject(i.t("Cannot save empty source code"));
                var o = window.user && window.user.username,
                    c = n ? "&allow_overwrite=true" : "",
                    u = "/save/new/?name=" + encodeURIComponent(t) + "&user_name=" + encodeURIComponent(o) + c,
                    l = {
                        source: e
                    };
                return d._pineFacadeAjax("POST", u, l).done((function(e, t, n) {
                    d.clearSavedScriptsCache(), d._updateAliveScriptInstances(e, r), d._saveScriptAsyncDone(s, e)
                })).fail((function(e, t, n) {
                    d._anyRequestAsyncFail(s, e)
                })), s.promise()
            }, d.saveNext = function(e, t, n, r, s) {
                a("Pine", "ScriptLib.saveNext");
                var o = null != n ? "&name=" + encodeURIComponent(n) : "",
                    c = i.Deferred();
                if (null == t || "" === t) return c.reject(i.t("Cannot save empty source code"));
                var u = window.user && window.user.username,
                    l = "/save/next/" + encodeURIComponent(e) + "/?user_name=" + encodeURIComponent(u) + "&allow_create_new=" + !!s + o,
                    p = {
                        source: t
                    };
                return d._pineFacadeAjax("POST", l, p).done((function(e, t, n) {
                    d.clearSavedScriptsCache(), d._updateAliveScriptInstances(e, r), d._saveScriptAsyncDone(c, e)
                })).fail((function(e, t, n) {
                    d._anyRequestAsyncFail(c, e)
                })), c.promise()
            }, d.deletePine = function(e) {
                a("Pine", "ScriptLib.deletePine");
                var t = i.Deferred(),
                    n = window.user && window.user.username,
                    r = "/delete/" + encodeURIComponent(e) + "/?user_name=" + encodeURIComponent(n);
                return d._pineFacadeAjax("POST", r).done((function(n, r, i) {
                        d.clearIsAuthToCaches(e), d.clearSavedScriptsCache(), t.resolve(n);
                        var s = {
                            scriptIdPart: e
                        };
                        o.emit("TVScriptDeleted", JSON.stringify(s)), l.emit("TVScriptDeleted", s), setTimeout((function() {
                            s.isSelfCall = !0, null != d.scriptUpdater() && d.scriptUpdater().onTVScriptDeleted(s), d._pineDeleted.fire(e)
                        }), 0)
                    })).fail((function(e, n, r) {
                        d._anyRequestAsyncFail(t, e)
                    })),
                    t.promise()
            }, d.renamePine = function(e, t, n) {
                a("Pine", "ScriptLib.renamePine");
                var r = i.Deferred(),
                    s = window.user && window.user.username,
                    c = "/rename/" + encodeURIComponent(e) + "/?name=" + encodeURIComponent(t) + "&user_name=" + encodeURIComponent(s) + "&force=" + encodeURIComponent(!!n);
                return d._pineFacadeAjax("POST", c).done((function(n, i, s) {
                    d.clearSavedScriptsCache();
                    var a = {
                        scriptIdPart: e,
                        scriptName: t
                    };
                    o.emit("TVScriptRenamed", JSON.stringify(a)), l.emit("TVScriptRenamed", a), setTimeout((function() {
                        a.isSelfCall = !0, null != d.scriptUpdater() && d.scriptUpdater().onTVScriptRenamed(a)
                    }), 0), r.resolve(n)
                })).fail((function(e, t, n) {
                    d._anyRequestAsyncFail(r, e)
                })), r.promise()
            }, d.publishNew = function(e, t) {
                a("Pine", "ScriptLib.publishNew");
                var n = i.Deferred(),
                    r = window.user && window.user.username,
                    s = "/publish/new/?access=" + encodeURIComponent(t) + "&user_name=" + encodeURIComponent(r),
                    o = {
                        source: e
                    };
                return d._pineFacadeAjax("POST", s, o).done((function(e, t, r) {
                    e.success ? (d.clearSavedScriptsCache(), n.resolve(e)) : n.reject(e.reason)
                })).fail((function(e, t, r) {
                    d._anyRequestAsyncFail(n, e)
                })), n.promise()
            }, d.publishNext = function(e, t) {
                c.logNormal("ScriptLib.publishNext", "pine"), a("Pine", "ScriptLib.publishNext");
                var n = i.Deferred(),
                    r = window.user && window.user.username,
                    s = "/publish/next/" + encodeURIComponent(t) + "?user_name=" + encodeURIComponent(r),
                    o = {
                        source: e
                    };
                return d._pineFacadeAjax("POST", s, o).done((function(e, t, r) {
                    d.clearSavedScriptsCache(), e.success || n.reject(e.reason), n.resolve(e)
                })).fail((function(e, t, r) {
                    d._anyRequestAsyncFail(n, e)
                })), n.promise()
            }, d.lightTranslate = function(e, t) {
                return c.logNormal("ScriptLib.lightTranslate", "pine"), a("Pine", "ScriptLib.lightTranslate"), new Promise((function(n, r) {
                    var i = window.user && window.user.username,
                        s = "/translate_light/?user_name=" + encodeURIComponent(i);
                    t && (s += "&pine_id=" + encodeURIComponent(t));
                    var a = {
                        source: e
                    };
                    d._pineFacadeAjax("POST", s, a).done((function(e, t, i) {
                        if (e.success) n(e.result);
                        else {
                            var s = e.result && e.result.reason || e.reason;
                            r(s)
                        }
                    })).fail((function(e, t, n) {
                        d._anyRequestAsyncFail({
                            reject: r
                        }, e)
                    }))
                }))
            }, d.getLibList = function(e, t, n) {
                return c.logNormal("ScriptLib.getLibList", "pine"), a("Pine", "ScriptLib.getLibList"), new Promise((function(r, i) {
                    var s = "/lib_list?lib_id_prefix=" + encodeURIComponent(e);
                    t && (s += "&ignore_cache=true"), n && (s += "&ignore_case=true"), d._pineFacadeAjax("GET", s).done((function(e, t, n) {
                        r(e)
                    })).fail((function(e, t, n) {
                        d._anyRequestAsyncFail({
                            reject: i
                        }, e)
                    }))
                }))
            }, d.getExistingLibraryInfo = async function(e) {
                try {
                    const t = await d.getLibList(e + "/last", !0, !0);
                    if (!t.length) return null;
                    const n = t[0];
                    return {
                        scriptIdPart: n.scriptIdPart,
                        chartId: n.chartId,
                        version: n.version
                    }
                } catch (e) {
                    return null
                }
            }, loginStateChange.subscribe(d, d.clearAllCaches), e.exports = d
        },
        357233: (e, t, n) => {
            var r;
            e = n.nmd(e), "undefined" != typeof window && (r = window.TVScript = window.TVScript || {}), (r = r || {}).Access = {}, r.Access.ACCESS_OPEN_NO_AUTH = "open_no_auth", r.Access.ACCESS_CLOSED_NO_AUTH = "closed_no_auth", r.Access.ACCESS_CLOSED_NEEDS_AUTH = "closed_needs_auth", r.Access.MAP_ID_TO_NAME = {
                    1: r.Access.ACCESS_OPEN_NO_AUTH,
                    2: r.Access.ACCESS_CLOSED_NO_AUTH,
                    3: r.Access.ACCESS_CLOSED_NEEDS_AUTH
                },
                r.Access.MAP_NAME_TO_ID = {}, Object.keys(r.Access.MAP_ID_TO_NAME).forEach((function(e) {
                    r.Access.MAP_NAME_TO_ID[r.Access.MAP_ID_TO_NAME[e]] = e
                })), r.PinePrefix = {}, r.PinePrefix.USER = "USER;", r.PinePrefix.PUB = "PUB;", r.PinePrefix.STD = "STD;", r.PinePrefix.TV = "TV_", r.PinePrefix.EDGR = "EDGR_", r.PineType = {}, r.PineType.UserSaved = "PineType_UserSaved", r.PineType.UserPublished = "PineType_UserPublished", r.PineType.BuiltIn = "PineType_BuiltIn", r.PineType.Addon = "PineType_Addon", r.Type = r.Type || function() {}, r.Type.VOID = "void", r.Type.INTEGER = "integer", r.Type.FLOAT = "float", r.Type.STRING = "string", r.Type.BOOL = "bool", r.Type.COLOR = "color", r.Type.SERIES = "series", r.Type.PLOT = "plot", r.Type.HLINE = "hline", r.Type.BARCOLOR = "barcolor", r.Type.BGCOLOR = "bgcolor", r.Type.PLOTSHAPES = "plotshape", r.Type.PLOTCHARS = "plotchar", r.Type.PLOTARROWS = "plotarrow", r.Type.NA = "na", r.Type.ARRAY = "array", r.TranslatorDefaultVersion = 1, r.TranslatorReferenceVersioningIntroduced = 4, r.TranslatorLastVersion = 5, r.pineType = function(e) {
                    return e.startsWith(r.PinePrefix.USER) ? r.PineType.UserSaved : e.startsWith(r.PinePrefix.PUB) ? r.PineType.UserPublished : e.startsWith(r.PinePrefix.STD) || e.startsWith(r.PinePrefix.TV) || e.startsWith(r.PinePrefix.EDGR) ? r.PineType.BuiltIn : r.PineType.Addon
                }, r.patchILTemplate = function(e, t, n) {
                    var i = n || {};
                    return r._patchTemplate(/<(in_\d+)>/g, e, t, i)
                }, r.decorateQuotes = function(e) {
                    if (!e) return e;
                    var t = /([^\\']+?)(')[^']*?/g,
                        n = e;
                    return "'" == n.charAt(0) && "'" == n.charAt(n.length - 1) ? "'" + (n = n.substr(1, n.length - 2)).replace(t, "$1\\$2") + "'" : n.replace(t, "$1\\$2")
                }, r.patchInputs = function(e, t) {
                    var n = {};
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            var i, s = e[r];
                            i = s.isFake ? {
                                v: t[s.id],
                                f: !0,
                                t: s.type
                            } : t[s.id], n[s.id] = i
                        }
                    return n
                }, r._patchTemplate = function(e, t, n, i) {
                    var s = i || {};
                    return t.replace(e, (function(e, t) {
                        for (var i = (t in s ? s[t] : n.defaults.inputs[t]), a = 0; a < n.inputs.length; ++a)
                            if (n.inputs[a].id === t)
                                if ("bool" === n.inputs[a].type) i = i ? "1.0" : "0.0";
                                else if (["text", "symbol", "resolution", "session"].indexOf(n.inputs[a].type) >= 0) i = "'" + r.decorateQuotes(i) + "'";
                        else if ("source" === n.inputs[a].type) {
                            var o = i.split("$");
                            o[0] = "'" + o[0] + "'", i = "source(" + o.join(",") + ")"
                        }
                        return i
                    }))
                }, r.isStrategy = function(e) {
                    return /^\s*strategy\s*\(/m.test(e)
                };
            var i = /^\s*\/\/\s*?@version\s*?=\s*?(\S*?)\s*?$/gm,
                s = /^[0-9]+$/;
            r.extractVersion = function(e) {
                i.lastIndex = 0;
                var t = i.exec(e);
                if (null === t) return r.TranslatorDefaultVersion;
                var n = t[1],
                    a = s.test(n) ? Number(n) : NaN;
                return isNaN(a) ? r.TranslatorDefaultVersion : a
            }, r.canUpgradeVersion = function(e) {
                return e >= 3 && e < r.TranslatorLastVersion
            }, r.canDowngradeVersion = function(e) {
                return e >= 4 && e <= r.TranslatorLastVersion
            }, e && e.exports && (e.exports = r)
        },
        328709: (e, t, n) => {
            "use strict";
            n.d(t, {
                showGoProAlertsOnSecondsDialog: () => i
            });
            var r = n(423946);

            function i() {
                (0, r.createGoProDialog)({
                    feature: "alertsOnSeconds"
                })
            }
        },
        226265: (e, t, n) => {
            "use strict";

            function r(e) {
                return "scriptTitle" in e && "modified" in e
            }

            function i(e) {
                return "userId" in e && "scriptAccess" in e
            }

            function s(e) {
                return "strategy" === e.kind
            }

            function a(e) {
                return "library" === e.kind
            }
            n.d(t, {
                isSavedPineInfo: () => r,
                isPubPineInfo: () => i,
                isScriptStrategy: () => s,
                isScriptLibrary: () => a
            })
        }
    }
]);