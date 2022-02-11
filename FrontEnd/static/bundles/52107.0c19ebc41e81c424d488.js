(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [52107], {
        178017: () => {},
        152107: (t, e, a) => {
            "use strict";
            var s = a(918184),
                n = a(192084).ESC,
                o = a(75443).guid,
                p = a(195355).mobiletouch,
                i = a(630976).getRootOverlapManager;
            a(178017);
            var c = function(t, e, l) {
                var r, d;
                t = s(t), (l = l || {}).activeClass = l.activeClass || "", r = (l.event || "click") + ".popup-menu", l.hideEvent && (d = l.hideEvent + ".popup-menu");
                var u = function() {},
                    h = u,
                    f = {},
                    v = function(r, v, g) {
                        var m = o(),
                            C = r.target.ownerDocument,
                            b = C.defaultView,
                            x = i(C),
                            w = v || e;
                        if ("function" == typeof w && (w = w()), s(this).hasClass("open") || s(this).hasClass("active")) return r.preventDefault(), h(), void(B = f.scrollTop);

                        function y(e) {
                            var a = s(e.target).parents().andSelf();
                            a.is(M) || a.is(t) || a.is(".charts-popup-tab-headers, .charts-popup-itemheader") || h()
                        }

                        function T(t) {
                            if (f.preventFirstProcessClick) f.preventFirstProcessClick = !1;
                            else {
                                var e = s(t.target).parents().andSelf();
                                e.is(".charts-popup-tab-headers, .charts-popup-itemheader") || l.notCloseOnButtons && e.is(".icon-delete") || h()
                            }
                        }

                        function k(t) {
                            t.keyCode === n && h()
                        }
                        h = function() {
                            f.scrollTop = M.scrollTop(), M.remove(), x.removeWindow(m), t.removeClass("active open " + l.activeClass), t.data("popup-menu", null), s(C).off("click", T), s(C).off("mousedown", y), p && s(C).off("touchstart.chartgui", y), s(C).off("selectstart..popup-menu"), C.removeEventListener("keydown", k, !1), h = u, l.onRemove && l.onRemove()
                        }, t.addClass("active open " + l.activeClass);
                        var M = s('<div class="charts-popup-list">');
                        l.addClass && M.addClass(l.addClass), l.zIndex && M.css("z-index", l.zIndex);
                        var D = M;
                        l.listInner && (D = s('<div class="list-inner">').appendTo(D)), l.listTable && (D = s('<div class="list-table">').appendTo(D)), s.each(w, (function(e) {
                            ! function e(n, o, p) {
                                if (n instanceof c.TabGroup) {
                                    if (!n.tabs || !n.tabs.length) return;
                                    if (1 === n.tabs.length && !n.tabs[0].title) return void s.each(n.tabs[0].items, (function() {
                                        e(this, void 0, p)
                                    }));
                                    var i = s('<div class="charts-popup-tab-group"></div>').appendTo(p),
                                        r = s('<div class="charts-popup-tab-headers"></div>').appendTo(i),
                                        d = null;
                                    s.each(n.tabs || [], (function(t, a) {
                                        if (a.items && a.items.length) {
                                            var o = s('<div class="charts-popup-tab"></div>').hide().appendTo(i);
                                            s.each(a.items, (function() {
                                                e(this, void 0, o)
                                            }));
                                            var p = s('<span class="charts-popup-tab-header">').append(s('<a href="javascript://" class="charts-popup-tab-header-label">').text(a.name)).appendTo(r);
                                            p.on("click", (function(t) {
                                                p.is(".active") || (r.find(".charts-popup-tab-header.active").removeClass("active"), p.addClass("active"), i.find(".charts-popup-tab").hide(), o.show(), t && t.preventDefault(), "function" == typeof n.onChange && n.onChange.call(n, a.name))
                                            })), d && !a.active || (d = p, r.find(".charts-popup-tab-header.active").removeClass("active"), p.addClass("active"), i.find(".charts-popup-tab").hide(), o.show())
                                        }
                                    }))
                                } else if (n instanceof c.Group) {
                                    var u = s('<div class="charts-popup-group"></div>').appendTo(p);
                                    if (n.title) {
                                        var h = s('<div class="charts-popup-itemheader"></div>').text(n.title).prepend(s('<span class="charts-popup-itemheader-icon"></span>'));
                                        n.collapsible && (u.addClass("charts-popup-group-collapsible"), u.toggleClass("collapsed", n.collapsed),
                                            h.on("click", (function() {
                                                u.toggleClass("collapsed"), "function" == typeof n.onChange && n.onChange(u.hasClass("collapsed")), M.height() === parseInt(M.css("max-height")) ? M.addClass("popup-menu-scroll-y") : M.height() < parseInt(M.css("max-height")) && M.removeClass("popup-menu-scroll-y")
                                            }))), u.append(h)
                                    }
                                    s.each(n.items, (function(t) {
                                        e(this, 1, u)
                                    }))
                                } else if (n instanceof c.Header) p.append(s('<div class="charts-popup-itemheader"></div>').text(n.title));
                                else if (n.separator) {
                                    var f = s('<span class="separator"></span>');
                                    p.append(f)
                                } else {
                                    var v;
                                    f = s('<a class="item">');
                                    if (n.url && f.attr("href", n.url), n.target && f.attr("target", n.target), o || f.addClass("first"), "function" == typeof n.active ? n.active(n) && f.addClass("active") : n.active && f.addClass("active"), n.addClass && f.addClass(n.addClass), n.addData && f.data(n.addData), n.disabled && f.addClass("disabled"), "function" == typeof n.action) {
                                        var g = n.action,
                                            m = function(t) {
                                                var e = s(t.target).parents().andSelf();
                                                e.is(y) || (g.apply(f, arguments), !n.url && t && "function" == typeof t.preventDefault && t.preventDefault())
                                            };
                                        l.upAction ? f.bind("mouseup", m) : f.bind("click", m)
                                    }
                                    if (n.date) v = s('<span class="title"></span>').appendTo(f), s('<span class="date"></span>').text(n.date || "").appendTo(f);
                                    else if (n.icon && !l.svg) {
                                        var C = s('<span class="icon"></span>').appendTo(f);
                                        C.css("background-image", n.icon.image || ""), n.icon.offset && C.css("background-position", "string" == typeof n.icon.offset ? n.icon.offset : n.icon.offset.x + "px " + n.icon.offset.y + "px"), v = s('<span class="title"></span>').appendTo(f)
                                    } else !0 === l.svg && n.svg ? (l.wrapIcon ? f.append(s('<span class="icon-wrap">').addClass(n.iconClass).append(n.svg)) : f.append(n.svg), v = s('<span class="title"></span>').appendTo(f)) : n.iconClass ? (f.append(s('<span class="icon"></span>').addClass(n.iconClass)), v = s('<span class="title"></span>').appendTo(f)) : v = s('<span class="title-expanded"></span>').appendTo(f);
                                    n.html ? v.html(n.html) : v.text(TradingView.clean(n.title, !0) || "");
                                    var b = s('<span class="shortcut"></span>').appendTo(f);
                                    if (n.shortcut && b.text(n.shortcut.keys), "function" == typeof n.deleteAction) {
                                        var x = n.deleteAction,
                                            w = n.deleteAction.title || s.t("Delete"),
                                            y = s('<span class="icon-delete">');
                                        y.html(a(571656)), y.attr("title", w), y.on("click", (function(t) {
                                            x.apply(f, arguments), t.preventDefault()
                                        })), f.append(y)
                                    }
                                    if (n.externalLink) {
                                        var T = s('<span class="icon-external">');
                                        T.html(a(305669)), f.append(T)
                                    }
                                    if (n.buttons instanceof Array && n.buttons.length && n.buttons.forEach((function(t) {
                                            t.el instanceof s || (t.el = s(t.el)), t.el.appendTo(f), t.handler && t.el.on("click", (function(e) {
                                                t.handler.apply(f, arguments)
                                            }))
                                        })), void 0 !== n.counter)
                                        if ("function" == typeof n.counter) {
                                            s('<span class="counter"></span>').html(n.counter()).appendTo(f)
                                        } else {
                                            var k = n.counterBlue ? "blue" : "";
                                            s('<span class="counter"></span>').text(n.counter + "").addClass(k).appendTo(f)
                                        }
                                    n.name && f.attr("data-name", n.name), p.append(f), t.data("popup-menu", p)
                                }
                            }(this, e, D)
                        })), d || (f.preventFirstProcessClick = !0), s(C).on("click", T), s(C).on("mousedown", y), C.addEventListener("keydown", k, !1), p && s(C).on("touchstart.chartgui", y), l.upAction && s(C).on("selectstart.popup-menu", (function() {
                            return !1
                        })), M.appendTo(x.ensureWindow(m));
                        var E = C.documentElement.clientWidth,
                            A = C.documentElement.clientHeight,
                            I = t.outerWidth(),
                            S = t.outerHeight(),
                            H = t.offset(),
                            B = s(b).scrollTop() || 0;
                        H.top -= B, H.top = Math.round(H.top), H.left = Math.round(H.left);
                        var G = M.outerWidth(),
                            L = M.outerHeight(),
                            P = void 0 !== l.viewportSpacing ? l.viewportSpacing : 10,
                            W = l.popupSpacing ? ~~l.popupSpacing : 1,
                            R = l.popupDrift ? ~~l.popupDrift : 0,
                            z = L - M.height(),
                            F = "down";
                        l.direction && (F = "function" == typeof l.direction ? l.direction() : l.direction);
                        var O = !!l.reverse;
                        if ("down" === F) {
                            var V = A - H.top - S - W - P - z,
                                j = H.top - W - P - z;
                            V < Math.max(L || 0, 100) && j > V && (F = "up")
                        } else if ("right" === F) {
                            var q = E - H.left - I - W - P - z,
                                J = H.left - W - P - z;
                            q < Math.max(G || 0, 100) && J > q && (F = "left")
                        }
                        switch (F) {
                            case "down":
                            case "up":
                                "down" === F ? M.css("top", H.top + S + W + "px") : M.css("bottom", A - H.top + W + "px").css("top", "auto"), O ? M.css("left", Math.max(H.left + R + I - G, P) + "px").css("right", "auto") : M.css("left", H.left + R + "px").css("right", "auto");
                                break;
                            case "right":
                            case "left":
                                W = Math.max(W, 4), "right" === F ? M.css("left", Math.floor(H.left + I + W) + "px").css("right", "auto") : M.css("left", Math.floor(Math.max(H.left - G - W, P)) + "px").css("right", "auto"), O ? M.css("top", Math.floor(Math.max(H.top + R + S - L, P)) + "px") : M.css("top", Math.floor(H.top + R) + "px")
                        }
                        M.show();
                        var K = H.top;
                        if ("up" === F || {
                                left: 1,
                                right: 1
                            }[F] && O ? "up" !== F ? K += S : K -= S + W + z + P : K = A - K - S - 2 * W - z, M.height() > K && M.addClass("popup-menu-scroll-y"), M.css("max-height", K + "px"), l.careRightBorder) {
                            var N = E + s(b).scrollLeft();
                            parseInt(M.css("left")) + M.width() + P > N && M.css("left", N - M.width() - P + "px").css("right", "auto")
                        }
                        l.careBottomBorder && parseInt(M.css("top")) + M.height() + P > A + B && M.css("top", A - M.height() - P + B + "px");
                        var Q = M.offset();
                        M.css({
                            position: "fixed",
                            left: Q.left - s(C).scrollLeft(),
                            right: "auto"
                        }), M[0].scrollHeight > M.height() && M.addClass("popup-with-scroll"), r && r.preventDefault()
                    };
                r && t.bind(r, v), d && t.bind(d, (function() {
                    h()
                })), l.runOpened && v()
            };
            c.TabGroup = function t(e) {
                if (!(this instanceof t)) return new t(e);
                e = e || {}, this.tabs = [], "function" == typeof e.onChange && (this.onChange = e.onChange)
            }, c.TabGroup.prototype.appendTab = function(t, e, a) {
                if (null == t ? t = "" : t += "", e || (e = []), a || (a = {}), !Array.isArray(e)) throw new TypeError("items must be an array");
                return this.tabs.push({
                    name: t,
                    items: e,
                    active: !!a.active
                }), e
            }, c.Header = function t(e) {
                if (!(this instanceof t)) return new t(e);
                this.title = e
            }, c.Group = function t(e) {
                if (!(this instanceof t)) return new t(e);
                e = e || {}, this.items = [], this.title = null == e.title ? "" : e.title + "", this.collapsible = !!e.collapsible, this.collapsed = !!e.collapsed, "function" == typeof e.onChange && (this.onChange = e.onChange)
            }, c.Group.prototype.push = function() {
                this.items.push.apply(this.items, arguments)
            }, e.bindPopupMenu = c;
            e.unbindPopupMenu = function(t) {
                (t = s(t)).unbind(".popup-menu"), t.removeData("popup-menu")
            }
        },
        305669: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11" width="11" height="11"><path fill="none" stroke="currentColor" d="M10.5 6v3.5a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1H5m5.5 0L6 5M7 .5h3.5V4"/></svg>'
        }
    }
]);