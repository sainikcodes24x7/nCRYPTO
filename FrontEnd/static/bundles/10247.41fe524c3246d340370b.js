(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [10247], {
        931905: function() {
            ! function(t) {
                if (!t.fetch) {
                    var e = "URLSearchParams" in t,
                        n = "Symbol" in t && "iterator" in Symbol,
                        r = "FileReader" in t && "Blob" in t && function() {
                            try {
                                return new Blob, !0
                            } catch (t) {
                                return !1
                            }
                        }(),
                        i = "FormData" in t,
                        o = "ArrayBuffer" in t;
                    if (o) var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        a = function(t) {
                            return t && DataView.prototype.isPrototypeOf(t)
                        },
                        u = ArrayBuffer.isView || function(t) {
                            return t && s.indexOf(Object.prototype.toString.call(t)) > -1
                        };
                    f.prototype.append = function(t, e) {
                        t = c(t), e = h(e);
                        var n = this.map[t];
                        this.map[t] = n ? n + "," + e : e
                    }, f.prototype.delete = function(t) {
                        delete this.map[c(t)]
                    }, f.prototype.get = function(t) {
                        return t = c(t), this.has(t) ? this.map[t] : null
                    }, f.prototype.has = function(t) {
                        return this.map.hasOwnProperty(c(t))
                    }, f.prototype.set = function(t, e) {
                        this.map[c(t)] = h(e)
                    }, f.prototype.forEach = function(t, e) {
                        for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
                    }, f.prototype.keys = function() {
                        var t = [];
                        return this.forEach((function(e, n) {
                            t.push(n)
                        })), p(t)
                    }, f.prototype.values = function() {
                        var t = [];
                        return this.forEach((function(e) {
                            t.push(e)
                        })), p(t)
                    }, f.prototype.entries = function() {
                        var t = [];
                        return this.forEach((function(e, n) {
                            t.push([n, e])
                        })), p(t)
                    }, n && (f.prototype[Symbol.iterator] = f.prototype.entries);
                    var l = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                    g.prototype.clone = function() {
                        return new g(this, {
                            body: this._bodyInit
                        })
                    }, w.call(g.prototype), w.call(T.prototype), T.prototype.clone = function() {
                        return new T(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new f(this.headers),
                            url: this.url
                        })
                    }, T.error = function() {
                        var t = new T(null, {
                            status: 0,
                            statusText: ""
                        });
                        return t.type = "error", t
                    };
                    var d = [301, 302, 303, 307, 308];
                    T.redirect = function(t, e) {
                        if (-1 === d.indexOf(e)) throw new RangeError("Invalid status code");
                        return new T(null, {
                            status: e,
                            headers: {
                                location: t
                            }
                        })
                    }, t.Headers = f, t.Request = g, t.Response = T, t.fetch = function(t, e) {
                        return new Promise((function(n, i) {
                            var o = new g(t, e),
                                s = new XMLHttpRequest;
                            s.onload = function() {
                                var t, e, r = {
                                    status: s.status,
                                    statusText: s.statusText,
                                    headers: (t = s.getAllResponseHeaders() || "", e = new f, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                                        var n = t.split(":"),
                                            r = n.shift().trim();
                                        if (r) {
                                            var i = n.join(":").trim();
                                            e.append(r, i)
                                        }
                                    })), e)
                                };
                                r.url = "responseURL" in s ? s.responseURL : r.headers.get("X-Request-URL");
                                var i = "response" in s ? s.response : s.responseText;
                                n(new T(i, r))
                            }, s.onerror = function() {
                                i(new TypeError("Network request failed"))
                            }, s.ontimeout = function() {
                                i(new TypeError("Network request failed"))
                            }, s.open(o.method, o.url, !0), "include" === o.credentials ? s.withCredentials = !0 : "omit" === o.credentials && (s.withCredentials = !1), "responseType" in s && r && (s.responseType = "blob"), o.headers.forEach((function(t, e) {
                                s.setRequestHeader(e, t)
                            })), s.send(void 0 === o._bodyInit ? null : o._bodyInit)
                        }))
                    }, t.fetch.polyfill = !0
                }

                function c(t) {
                    if ("string" != typeof t && (t = String(t)),
                        /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
                    return t.toLowerCase()
                }

                function h(t) {
                    return "string" != typeof t && (t = String(t)), t
                }

                function p(t) {
                    var e = {
                        next: function() {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            }
                        }
                    };
                    return n && (e[Symbol.iterator] = function() {
                        return e
                    }), e
                }

                function f(t) {
                    this.map = {}, t instanceof f ? t.forEach((function(t, e) {
                        this.append(e, t)
                    }), this) : Array.isArray(t) ? t.forEach((function(t) {
                        this.append(t[0], t[1])
                    }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                        this.append(e, t[e])
                    }), this)
                }

                function y(t) {
                    if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    t.bodyUsed = !0
                }

                function m(t) {
                    return new Promise((function(e, n) {
                        t.onload = function() {
                            e(t.result)
                        }, t.onerror = function() {
                            n(t.error)
                        }
                    }))
                }

                function S(t) {
                    var e = new FileReader,
                        n = m(e);
                    return e.readAsArrayBuffer(t), n
                }

                function b(t) {
                    if (t.slice) return t.slice(0);
                    var e = new Uint8Array(t.byteLength);
                    return e.set(new Uint8Array(t)), e.buffer
                }

                function w() {
                    return this.bodyUsed = !1, this._initBody = function(t) {
                        if (this._bodyInit = t, t)
                            if ("string" == typeof t) this._bodyText = t;
                            else if (r && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                        else if (i && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                        else if (e && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                        else if (o && r && a(t)) this._bodyArrayBuffer = b(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                        else {
                            if (!o || !ArrayBuffer.prototype.isPrototypeOf(t) && !u(t)) throw new Error("unsupported BodyInit type");
                            this._bodyArrayBuffer = b(t)
                        } else this._bodyText = "";
                        this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, r && (this.blob = function() {
                        var t = y(this);
                        if (t) return t;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? y(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(S)
                    }), this.text = function() {
                        var t, e, n, r = y(this);
                        if (r) return r;
                        if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, n = m(e), e.readAsText(t), n;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                            for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
                            return n.join("")
                        }(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, i && (this.formData = function() {
                        return this.text().then(v)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }

                function g(t, e) {
                    var n, r, i = (e = e || {}).body;
                    if (t instanceof g) {
                        if (t.bodyUsed) throw new TypeError("Already read");
                        this.url = t.url,
                            this.credentials = t.credentials, e.headers || (this.headers = new f(t.headers)), this.method = t.method, this.mode = t.mode, i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0)
                    } else this.url = String(t);
                    if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new f(e.headers)), this.method = (n = e.method || this.method || "GET", r = n.toUpperCase(), l.indexOf(r) > -1 ? r : n), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(i)
                }

                function v(t) {
                    var e = new FormData;
                    return t.trim().split("&").forEach((function(t) {
                        if (t) {
                            var n = t.split("="),
                                r = n.shift().replace(/\+/g, " "),
                                i = n.join("=").replace(/\+/g, " ");
                            e.append(decodeURIComponent(r), decodeURIComponent(i))
                        }
                    })), e
                }

                function T(t, e) {
                    e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new f(e.headers), this.url = e.url || "", this._initBody(t)
                }
            }("undefined" != typeof self ? self : this)
        },
        988928: function(t, e, n) {
            "use strict";
            var r = this && this.__assign || Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                },
                i = this && this.__awaiter || function(t, e, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function s(t) {
                            try {
                                u(r.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function a(t) {
                            try {
                                u(r.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(t) {
                            t.done ? i(t.value) : new n((function(e) {
                                e(t.value)
                            })).then(s, a)
                        }
                        u((r = r.apply(t, e || [])).next())
                    }))
                },
                o = this && this.__generator || function(t, e) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                s.label = i[1], i = o;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(o);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    o = e.call(t, s)
                                } catch (t) {
                                    o = [6, t], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                s = this && this.__rest || function(t, e) {
                    var n = {};
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && (n[r[i]] = t[r[i]])
                    }
                    return n
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = n(318487),
                u = n(318487);
            e.ClientError = u.ClientError, n(931905);
            var l = function() {
                function t(t, e) {
                    this.url = t, this.options = e || {}
                }
                return t.prototype.rawRequest = function(t, e) {
                    return i(this, void 0, void 0, (function() {
                        var n, i, u, l, d, h, p, f, y;
                        return o(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return n = this.options, i = n.headers, u = s(n, ["headers"]), l = JSON.stringify({
                                        query: t,
                                        variables: e || void 0
                                    }), [4, fetch(this.url, r({
                                        method: "POST",
                                        headers: Object.assign({
                                            "Content-Type": "application/json"
                                        }, i),
                                        body: l
                                    }, u))];
                                case 1:
                                    return [4, c(d = o.sent())];
                                case 2:
                                    if (h = o.sent(), d.ok && !h.errors && h.data) return p = d.headers, f = d.status, [2, r({}, h, {
                                        headers: p,
                                        status: f
                                    })];
                                    throw y = "string" == typeof h ? {
                                        error: h
                                    } : h, new a.ClientError(r({}, y, {
                                        status: d.status,
                                        headers: d.headers
                                    }), {
                                        query: t,
                                        variables: e
                                    })
                            }
                        }))
                    }))
                }, t.prototype.request = function(t, e) {
                    return i(this, void 0, void 0, (function() {
                        var n, i, u, l, d, h, p;
                        return o(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return n = this.options, i = n.headers, u = s(n, ["headers"]), l = JSON.stringify({
                                        query: t,
                                        variables: e || void 0
                                    }), [4, fetch(this.url, r({
                                        method: "POST",
                                        headers: Object.assign({
                                            "Content-Type": "application/json"
                                        }, i),
                                        body: l
                                    }, u))];
                                case 1:
                                    return [4, c(d = o.sent())];
                                case 2:
                                    if (h = o.sent(), d.ok && !h.errors && h.data) return [2, h.data];
                                    throw p = "string" == typeof h ? {
                                        error: h
                                    } : h, new a.ClientError(r({}, p, {
                                        status: d.status
                                    }), {
                                        query: t,
                                        variables: e
                                    })
                            }
                        }))
                    }))
                }, t.prototype.setHeaders = function(t) {
                    return this.options.headers = t, this
                }, t.prototype.setHeader = function(t, e) {
                    var n, r = this.options.headers;
                    return r ? r[t] = e : this.options.headers = ((n = {})[t] = e, n), this
                }, t
            }();

            function d(t, e, n) {
                return i(this, void 0, void 0, (function() {
                    return o(this, (function(r) {
                        return [2, new l(t).request(e, n)]
                    }))
                }))
            }

            function c(t) {
                return i(this, void 0, void 0, (function() {
                    var e;
                    return o(this, (function(n) {
                        return (e = t.headers.get("Content-Type")) && e.startsWith("application/json") ? [2, t.json()] : [2, t.text()]
                    }))
                }))
            }
            e.GraphQLClient = l, e.rawRequest = function(t, e, n) {
                return i(this, void 0, void 0, (function() {
                    return o(this, (function(r) {
                        return [2, new l(t).rawRequest(e, n)]
                    }))
                }))
            }, e.request = d, e.default = d
        },
        318487: function(t, e) {
            "use strict";
            var n, r = this && this.__extends || (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                },
                function(t, e) {
                    function r() {
                        this.constructor = t
                    }
                    n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                });
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function(t) {
                function e(n, r) {
                    var i = this,
                        o = e.extractMessage(n) + ": " + JSON.stringify({
                            response: n,
                            request: r
                        });
                    return (i = t.call(this, o) || this).response = n, i.request = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, e), i
                }
                return r(e, t), e.extractMessage = function(t) {
                    try {
                        return t.errors[0].message
                    } catch (e) {
                        return "GraphQL Error (Code: " + t.status + ")"
                    }
                }, e
            }(Error);
            e.ClientError = i
        },
        710247: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                GqlRequest: () => I
            });
            var r = n(120220),
                i = n(988928);
            const o = b("\n\tquery GetLiveStreams(\n\t\t$locale: String!,\n\t) {\n\t\tstreams(\n\t\t\tfilter: {\n\t\t\t\tstate: live,\n\t\t\t\tshowPrivateStreams: false,\n\t\t\t\tlocale: $locale\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t}\n\t}\n"),
                s = b("\n\tquery GetUserStream(\n\t\t$userId: Int!,\n\t) {\n\t\tstreams(\n\t\t\tfilter: {\n\t\t\t\tstate: live,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 1\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\tisBroadcasting\n\t\t\tyoutubeId\n\t\t\ttwitchId\n\t\t\tpermanent\n\t\t}\n\t}\n"),
                a = b("\n\tquery GetUserStreams(\n\t\t$userId: Int!,\n\t) {\n\t\tlive: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: live,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50\n\t\t\t},\n\t\t\tsort: { viewersCount: -1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t\tencoderId\n\t\t}\n\n\t\tscheduled: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: scheduled,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50\n\t\t\t},\n\t\t\tsort: { plannedTime: 1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t}\n\n\t\tended: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: ended,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50\n\t\t\t},\n\t\t\tsort: { startTime: -1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tpermanent\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t}\n\t}\n"),
                u = b("\n\tmutation CreateStream(\n\t\t$title: String!,\n\t\t$plannedTime: DateTime!,\n\t\t$category: Category!,\n\t\t$visibility: Visibility!,\n\t\t$encoder: Encoder,\n\t\t$description: String!,\n\t\t$locale: String!,\n\t\t$youtubeToken: String,\n\t\t$twitchToken: String,\n\t\t$permanent: Boolean,\n\t) {\n\t\tcreateStream(input: {\n\t\t\ttitle: $title,\n\t\t\tdescription: $description,\n\t\t\tlocale: $locale,\n\t\t\tplannedTime: $plannedTime,\n\t\t\tcategory: $category,\n\t\t\tvisibility: $visibility,\n\t\t\tencoder: $encoder,\n\t\t\trecord: true,\n\t\t\tyoutubeToken: $youtubeToken\n\t\t\ttwitchToken: $twitchToken\n\t\t\tpermanent: $permanent\n\t\t}) {\n\t\t\turl\n\t\t\tstate\n\t\t\ttitle\n\t\t\tencoder\n\t\t\trecord\n\t\t\tpermanent\n\t\t\tcategory\n\t\t\tvisibility\n\t\t\tplannedTime\n\t\t\tdescription\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tstreamingToken\n\t\t\tyoutubeId\n\t\t\ttwitchId\n\t\t}\n\t}\n"),
                l = b("\n\tmutation UpdateStream(\n\t\t$url: ID!,\n\t\t$title: String,\n\t\t$category: Category,\n\t\t$description: String,\n\t\t$visibility: Visibility,\n\t\t$plannedTime: DateTime,\n\t\t$encoder: Encoder,\n\t\t$youtubeToken: String,\n\t\t$twitchToken: String,\n\t\t$permanent: Boolean,\n\t\t$previewName: String,\n\t) {\n\t\tupdateStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\ttitle: $title,\n\t\t\t\tencoder: $encoder,\n\t\t\t\tcategory: $category,\n\t\t\t\tvisibility: $visibility,\n\t\t\t\tdescription: $description,\n\t\t\t\tplannedTime: $plannedTime\n\t\t\t\tyoutubeToken: $youtubeToken,\n\t\t\t\ttwitchToken: $twitchToken,\n\t\t\t\tpermanent: $permanent,\n\t\t\t\tpreviewName: $previewName\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\ttitle\n\t\t\tencoder\n\t\t\tdescription\n\t\t\tcategory\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tviewersCount\n\t\t\tyoutubeId\n\t\t\ttwitchId\n\t\t\tpermanent\n\t\t\tpreviewName\n\t\t}\n\t}\n"),
                d = b("\n\tmutation DeleteStream(\n\t\t$url: ID!,\n\t\t$youtubeToken: String\n\t\t$twitchToken: String\n\t) {\n\t\tdeleteStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\tyoutubeToken: $youtubeToken\n\t\t\t\ttwitchToken: $twitchToken\n\t\t\t}\n\t\t) {\n\t\t\ttitle\n\t\t}\n\t}\n"),
                c = b("\n\tmutation StopStream(\n\t\t$url: ID!,\n\t\t$youtubeToken: String\n\t\t$twitchToken: String\n\t) {\n\t\tstopStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\tyoutubeToken: $youtubeToken\n\t\t\t\ttwitchToken: $twitchToken\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\tstate\n\t\t\ttitle\n\t\t\tendTime\n\t\t}\n\t}\n"),
                h = b("\n\tmutation StopStream(\n\t\t$url: ID!,\n\t\t$youtubeToken: String\n\t\t$twitchToken: String\n\t) {\n\t\tstopStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\tyoutubeToken: $youtubeToken\n\t\t\t\ttwitchToken: $twitchToken\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\tstate\n\t\t\ttitle\n\t\t\tendTime\n\t\t}\n\t\tdeleteRecord (\n\t\t\turl: $url\n\t\t)\n\t}\n"),
                p = b("\n\tmutation DeleteRecord (\n\t\t\t$url: ID!\n\t\t) {\n\t\t\tdeleteRecord (\n\t\t\t\turl: $url\n\t\t\t)\n\t}\n"),
                f = b("\n\tmutation StartStream(\n\t\t$url: ID!,\n\t\t$youtubeToken: String,\n\t\t$twitchToken: String\n\t) {\n\t\tstartStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\tyoutubeToken: $youtubeToken\n\t\t\t\ttwitchToken: $twitchToken\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tstartTime\n\t\t}\n\t}\n"),
                y = b("\n\tquery GetStream(\n\t\t$url: ID!\n\t) {\n\t\tstream (\n\t\t\turl: $url\n\t\t) {\n\t\t\turl\n\t\t\tuserId\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\tdescription\n\t\t\tplannedTime\n\t\t\tstartTime\n\t\t\tendTime\n\t\t\tstate\n\t\t\trecord\n\t\t\tcategory\n\t\t\tvisibility\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t\tencoderId\n\t\t\tyoutubeId\n\t\t\ttwitchId\n\t\t}\n\t}\n"),
                m = b("\n\tquery GetStream(\n\t\t$url: ID!\n\t) {\n\t\tstream (\n\t\t\turl: $url\n\t\t) {\n\t\t\tstreamingToken\n\t\t\tisBroadcasting\n\t\t}\n\t}\n"),
                S = b("\n\tquery GetStats {\n\t\tstats {\n\t\t\tviews {\n\t\t\t\ttime\n\t\t\t\tvalue\n\t\t\t}\n\t\t\tviewers {\n\t\t\t\ttime\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n");

            function b(t) {
                return t.replace(/[\n\t]+/g, " ").trim()
            }
            var w;
            ! function(t) {
                t.ListLiveStreamUrl = "ListLiveStreamUrl", t.LiveStreamUrl = "LiveStreamUrl", t.Streams = "Streams", t.CreateStream = "CreateStream", t.UpdateStream = "UpdateStream", t.DeleteStream = "DeleteStream", t.StopStream = "StopStream", t.StopStreamSave = "StopStreamSave", t.DeleteRecord = "DeleteRecord", t.StartStream = "StartStream", t.GetStream = "GetStream", t.GetToken = "GetToken", t.GetStreamsStats = "GetStreamsStats"
            }(w || (w = {}));
            var g = n(279407),
                v = n(797087),
                T = n(90506),
                _ = n(697105);
            let $ = null;
            class I {
                constructor() {
                    if ($) return $;
                    $ = this, this._gqlQueriesStrings = {
                        [w.ListLiveStreamUrl]: o,
                        [w.LiveStreamUrl]: s,
                        [w.Streams]: a,
                        [w.CreateStream]: u,
                        [w.UpdateStream]: l,
                        [w.DeleteStream]: d,
                        [w.StopStream]: c,
                        [w.StopStreamSave]: h,
                        [w.DeleteRecord]: p,
                        [w.StartStream]: f,
                        [w.GetStream]: y,
                        [w.GetToken]: m,
                        [w.GetStreamsStats]: S
                    };
                    let t = (0, T.getGraphqlUrl)();
                    return !t && window && ((0, T.setStreamsConfig)({
                        mediaServerUrl: window.TV_LIVE_MEDIA_SERVER_DOMAIN,
                        mediaServerRtmpUrl: window.TV_LIVE_MEDIA_SERVER_RTMP_URL,
                        tvLiveUrl: window.TV_LIVE_DIRECTOR_DOMAIN,
                        liveMediaUrls: window.TV_LIVE_MEDIA_SERVER_LIVE_URLS,
                        recordMediaUrl: window.TV_LIVE_MEDIA_URL
                    }), t = (0, T.getGraphqlUrl)()), this._gqlUrl = t, this._gqlClient = new i.GraphQLClient(this._gqlUrl, {
                        headers: this._getHeadersObject(),
                        credentials: "include",
                        mode: "cors"
                    }), window && window.loginStateChange.subscribe(this, this._onLoginStateChange), $
                }
                getStreamsStats() {
                    const t = this._gqlQueriesStrings[w.GetStreamsStats];
                    return this._sendRequest(t).then(t => t)
                }
                getListLiveStreamUrl(t) {
                    const e = this._gqlQueriesStrings[w.ListLiveStreamUrl];
                    return this._sendRequest(e, {
                        locale: t
                    }).then(t => 0 === t.streams.length ? null : t)
                }
                getLiveStreamUrl(t, e = !1) {
                    const n = this._gqlQueriesStrings[w.LiveStreamUrl];
                    return this._sendRequest(n, {
                        userId: t
                    }).then(t => {
                        if (0 === t.streams.length) return null;
                        const {
                            url: n,
                            isBroadcasting: r,
                            youtubeId: i,
                            twitchId: o
                        } = t.streams[0];
                        return r || !e ? [n, i, o] : null
                    })
                }
                getStreams(t) {
                    const e = this._gqlQueriesStrings[w.Streams];
                    return this._sendRequest(e, t)
                }
                createStream(t) {
                    const {
                        plannedTime: e
                    } = t, n = this._gqlQueriesStrings[w.CreateStream], r = e ? e.toISOString() : (new Date).toISOString(), i = Object.assign({}, t, {
                        plannedTime: r
                    });
                    return this._sendRequest(n, i)
                }
                updateStream(t) {
                    const e = this._gqlQueriesStrings[w.UpdateStream];
                    return this._sendRequest(e, t)
                }
                deleteStream(t) {
                    const e = this._gqlQueriesStrings[w.DeleteStream];
                    return this._sendRequest(e, t)
                }
                async stopStream(t, e) {
                    const n = e ? this._gqlQueriesStrings[w.StopStream] : this._gqlQueriesStrings[w.StopStreamSave];
                    return (await this._sendRequest(n, t)).stopStream
                }
                deleteRecord(t) {
                    const e = this._gqlQueriesStrings[w.DeleteRecord];
                    return this._sendRequest(e, t).then(t => t.deleteRecord)
                }
                startStream(t) {
                    const e = this._gqlQueriesStrings[w.StartStream];
                    return this._sendRequest(e, t)
                }
                getStream(t) {
                    const e = this._gqlQueriesStrings[w.GetStream];
                    return this._sendRequest(e, t).then(t => t.stream)
                }
                getToken(t) {
                    const e = this._gqlQueriesStrings[w.GetToken];
                    return this._sendRequest(e, t).then(t => t.stream)
                }
                previewUpload(t) {
                    const e = {
                            query: `\n\t\t\t\tmutation(\n\t\t\t\t\t$file: Upload!\n\t\t\t\t) {\n\t\t\t\t\tuploadPreview(\n\t\t\t\t\t\turl: "${t.url}",\n\t\t\t\t\t\tfile: $file\n\t\t\t\t\t) {\n\t\t\t\t\t\tfilename,\n\t\t\t\t\t\tmimetype,\n\t\t\t\t\t\tencoding\n\t\t\t\t\t}\n\t\t\t\t}`,
                            variables: {
                                file: null
                            }
                        },
                        n = new FormData;
                    return n.append("operations", JSON.stringify(e)), n.append("map", '{ "0": ["variables.file"] }'), n.append("0", t.file), fetch(this._gqlUrl, {
                        method: "POST",
                        headers: new Headers(this._getHeadersObject()),
                        body: n,
                        credentials: "include",
                        mode: "cors"
                    }).then(t => t.json())
                }
                _sendRequest(t, e) {
                    return this._gqlClient.request(t, e).catch(async t => {
                        var e;
                        const i = "GraphQL Error (Code: " + t.response.status,
                            {
                                errors: o = [{
                                    message: i,
                                    extensions: {
                                        code: T.TvLiveErrorCode.InternalServerError
                                    }
                                }]
                            } = t.response,
                            s = o[0];
                        let a, u = r.t("Error");
                        (null === (e = s.extensions) || void 0 === e ? void 0 : e.code) === T.TvLiveErrorCode.YoutubeError && (u = r.t("YouTube error"), a = _.solutionIds.YOUTUBE_ERROR);
                        const l = await Promise.resolve().then(n.t.bind(n, 644197, 23)),
                            d = a ? [{
                                name: "Learn more",
                                title: r.t("Learn more"),
                                appearance: "stroke",
                                intent: "default",
                                handler: () => {
                                    (0, v.showSupportDialog)({
                                        solutionId: a
                                    })
                                }
                            }] : void 0;
                        (0, g.showWarning)({
                            title: u,
                            text: l.stripTags(s.message),
                            intentButton: "danger",
                            closeOnOutsideClick: !1,
                            actions: d
                        })
                    })
                }
                _getHeadersObject() {
                    return {
                        "X-UserId": this._getUserId(),
                        "X-UserProPlan": window.user.pro_plan || "",
                        "X-UserPerm": '{ "can_create_streams": 1, "is_streams_admin": 1 }'
                    }
                }
                _getUserId() {
                    return window.user.id ? String(window.user.id) : ""
                }
                _onLoginStateChange() {
                    this._gqlClient.setHeaders(this._getHeadersObject())
                }
            }
        }
    }
]);