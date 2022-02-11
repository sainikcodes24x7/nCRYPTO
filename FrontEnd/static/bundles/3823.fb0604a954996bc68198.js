(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [3823], {
        362751: (t, e, i) => {
            t.exports = i.p + "4d973dad10589f7ebe1b822250d26eb8.png"
        },
        508552: (t, e, i) => {
            t.exports = i.p + "683e7a8e04465dc3fac39ed37f0789b8.png"
        },
        638619: () => {},
        999844: () => {},
        474112: () => {},
        393313: () => {},
        682306: () => {},
        228741: () => {},
        550846: () => {},
        329344: () => {},
        73914: () => {},
        315102: t => {
            t.exports = {
                "like-highlight-animation": "like-highlight-animation-3V8NN6uM"
            }
        },
        598984: t => {
            t.exports = {
                userNameHintList: "userNameHintList-TTHSrMMH"
            }
        },
        623049: () => {},
        917473: () => {},
        386407: (t, e, i) => {
            "use strict";
            i.d(e, {
                template: () => o
            });
            var s = i(330565);
            const o = '<div data-id="{{chartId}}" class="tv-widget-chart-like-button apply-common-tooltip {{typeClass}}" title="{{titleTooltip}}"><span class="tv-widget-chart-like-button__icon-place">' + s + '</span><span class="js-likes-counter"></span></div>'
        },
        387296: (t, e, i) => {
            "use strict";
            i.d(e, {
                ChatMessageTypeCustomizer: () => s
            });
            class s {
                constructor(t, e) {
                    this._types = t, this._onChangeCb = e
                }
                add(t) {
                    this._types = Object.assign(this._types, t), this._onChangeCb()
                }
                remove(t) {
                    delete this._types[t], this._onChangeCb()
                }
                getTypeNames() {
                    return Object.keys(this._types)
                }
                getHandler(t) {
                    return this._types[t].handler
                }
                onMessage(t) {
                    var e;
                    const i = null === (e = this._types[t.type]) || void 0 === e ? void 0 : e.onMessage;
                    i && i(t)
                }
                getHandlers(t) {
                    const e = {};
                    return Object.keys(this._types).forEach(i => {
                        e[i] = this.getHandler(i) || t
                    }), e
                }
                onCreateMessage(t, e) {
                    const {
                        onCreateMessage: i
                    } = this._types[e.type];
                    i && i(t, e)
                }
                isTypeExists(t) {
                    return Boolean(this._types[t])
                }
            }
        },
        155529: (t, e, i) => {
            "use strict";
            var s = i(918184),
                o = i(500466),
                n = i(24194),
                a = i(120220).t;
            i(706870), i(134131), i(405737), i(999844), i(623049);
            var r = i(598984),
                h = i(903682).default,
                d = i(279407).showWarning,
                l = i(396107).getUserProfilePath,
                c = i(641146),
                u = i(929879).getUsernameHintList,
                m = i(929879).getUserChatSuggestListHandler,
                p = i(929879).destroyUsernameHintList,
                g = i(802837),
                _ = i(959836).pushChartPage,
                v = i(454281),
                f = v.Action,
                b = v.Separator,
                y = i(417515).ContextMenuManager,
                w = i(120233).takeChartSnapshot,
                C = i(641242),
                R = i(972006),
                M = i(92765),
                S = i(179143),
                x = S.showBanUserDialog,
                $ = S.showUnbanUserDialog,
                T = i(685044).getViolations,
                k = i(282143).openPMDialog,
                I = i(874040).showReportModal,
                D = i(607562).SidebarCustomScroll,
                B = i(152107).bindPopupMenu,
                E = i(573043).emoji,
                A = i(388674).showNoticeDialog,
                W = i(279407).showConfirm,
                O = i(530775);
            const {
                isLatin: H
            } = i(893408);
            var L = i(380238).Spinner,
                z = i(929098).trackEvent,
                N = i(238342).trackChatEvent,
                P = i(524926),
                F = i(43981),
                U = i(7827),
                V = i(549627).parseBBCode,
                j = i(661424).buildUtmQueryStringFromUrlParams,
                q = i(386407).template,
                X = i(300262).lazyFancybox;
            i(910757);
            var J = i(582755).detectAutoDirection,
                K = i(87840).TVOldDialogs,
                Q = i(676905).convertToBadgeAccountProps,
                G = i(437288).BadgeSize,
                Y = i(308075).renderBadgeAccountWithoutFeaturedBroker,
                Z = i(230873).getBadgeAccountTitle,
                tt = i(913080).getBadgeAccountLink,
                et = i(387296).ChatMessageTypeCustomizer,
                it = i(362751),
                st = i(436170).htmlEscape,
                ot = i(450284).validateUrlsInText,
                nt = i(611877).hashFromEvent,
                at = i(611877).Modifiers,
                rt = i(192084),
                ht = i(195355).mobiletouch,
                dt = a("Like", {
                    context: "like_button"
                });

            function lt(t) {
                var e = function() {
                    window.user._chatInputs || (window.user._chatInputs = {})
                };
                e(), loginStateChange.subscribe(this, e), this._bridge = t;
                var i = t.$body;
                this._model = null;
                var s = this._bridge.visible.value();
                this.isPrivate() ? this._model = O.makePrivateModel() : this._bridge.live && this._bridge.rooms ? this._model = O.makeLiveSeparateModel(this._bridge.rooms) : (this._model = O.makePublicModel("en" === window.language), "en" !== window.language && (s = !0)), this._model.messageReceived().subscribe(this, this._onMessageWrapper), this._model.messageDeleted().subscribe(this, this._onMessageDeleted), this._model.roomChanged().subscribe(this, this._onRoomChanged), this._model.setActive(s), this._isHistoryEnded = !1, this._markNewMessagesAsUnread = !1, this._invisibleMessagesNumber = 0, this._inputDisabled = !1, this.MESSAGES_CONCATENATION_TIMEOUT = 12e4, this.MAX_MESSAGES = 100, this.MAX_HIGHLIGHTED_MESSAGES = 10, this.USERLINK_POPUP_TIMEOUT = 1e3, this.META_VERSION = "0.2", this._init_history_loading = !0, this._init_history_loaded = !1, this._onBridgeVisibleChange = null, this._onSymbolChanged = null, this._onIntervalChanged = null, this._onResize = null, this._onMaximized = null, this._standalone = !t || !!t.standalone, this._embedded = !t || !!t.embedded, this._noAutoFocus = !!t.noAutoFocus, this.utm = j(!1), this.isPrivate() || (this._updateMessageBatches(), this.updateLikesHandlers(), this.canHandleLikes = !0), this._hintListElement = null, this.prepareLayout(i), this.toggleSnaphotPreview(TVSettings.getBool("chat.show_snapshot_preview", !0));
                var o = null;
                this._standalone && t.activeRoom ? o = t.activeRoom : t && t.properties && (o = (t.properties.value() || {}).room || o), this.likeButtonTemplate = q, this._messageTypeCustomizer = new et(this._bridge.typeHandlers || {}, this._updateMessageContext), this._updateMessageContext(), (this.isPrivate() || this._standalone && this._model.getRoomById(o) || this._bridge.live) && this.selectChannel(o), t && (t.symbol && (this._onSymbolChanged = this.update.bind(this), t.symbol.subscribe(this._onSymbolChanged, {
                    callWithLast: !0
                })), t.interval && (this._onIntervalChanged = this.update.bind(this), t.interval.subscribe(this._onIntervalChanged, {
                    callWithLast: !0
                })), this._onResize = this.resize.bind(this), t.height && t.height.subscribe(this._onResize), t.width && t.width.subscribe(this._onResize), t.onMessage && !t.live && t.onMessage(this.onBridgeMessage.bind(this)))
            }
            lt.prototype._onMessageWrapper = function(t, e, i) {
                this.onMessage(t, i)
            }, lt.prototype.currentRoom = function() {
                return this._model.room()
            }, lt.prototype.enablePosting = function() {
                this._postingDisabled && (this._hiddenElements && this._hiddenElements.forEach((function(t) {
                    t.css("display", "")
                })), this._$inputNoPostingMessage && this._$inputNoPostingMessage.remove(), this.resizeHeader(), this._postingDisabled = !1)
            }, lt.prototype.onBridgeMessage = function(t, e) {
                "chat_set_sound_state" === t ? e.isPrivate === this.isPrivate() && this.sound.set(e.state) : "toggle_snaphot_preview" === t && this.toggleSnaphotPreview(), this.isPrivate() ? "private_chat_hidden" === t ? this._markMessagesAsUnread(!0) : "private_chat_visible" === t ? (this._scroll.checkContentVisibility(),
                    this._markMessagesAsUnread(!1)) : "private_chat_msgs_read" === t && this._markAsRead(e.idString) : "chat_select_channel" === t ? (this._newMessagesToHighlight = e.new_msgs, this.selectChannel(e.room_id)) : "chat_edit_room" === t ? this.editRoom(this._model.getRoomById(e)) : "chat_delete_room" === t ? this.deleteRoom(this._model.getRoomById(e)) : "chat_show_link" === t && this.showLinkToChat(this._model.getRoomById(e))
            }, lt.prototype.playSound = function(t) {
                this.sound.state[t] && (this.isPrivate() ? C.play("chat/popup") : C.play("chat/message"))
            }, lt.prototype._clearExcessiveMessages = function() {
                var t = this._$data.find(".ch-item");
                return t.length > this.MAX_MESSAGES && ((t = t.slice(0, t.length - this.MAX_MESSAGES)).add(".ch-item-empty"), P.jQueryCompatibleDestroy(t), t.remove()), this._history_hide_timeout && (clearTimeout(this._history_hide_timeout), this._history_hide_timeout = null), !!t.length
            }, lt.prototype._markAsRead = function(t) {
                var e = t.split(":");
                this._scroll.triggerVisibilityCallbacks((function(t) {
                    var i = e.indexOf(t.id);
                    return i >= 0 && (e.splice(i, 1), !0)
                }))
            }, lt.prototype._markMessagesAsUnread = function(t) {
                t && this._markNewMessagesAsUnread !== t && (this._prepareUnreadMarker = !0), this._markNewMessagesAsUnread = t
            }, lt.prototype._shouldPlaceUnreadMarkerNow = function() {
                var t = this._prepareUnreadMarker;
                return this._prepareUnreadMarker = !1, this._markNewMessagesAsUnread && t
            }, lt.prototype.onMessage = function(t, e) {
                if (!(this._model.ignoredUsers().includes(t.user_id) || t.id && this._lastMessageId === t.id)) {
                    this._lastMessageId = t.id;
                    var i = t.user_id !== window.user.id,
                        s = i && this._shouldPlaceUnreadMarkerNow();
                    s && this._$data.append(this._getNewUnreadMarker()), this.isPrivate() && this._bridge.visible.value() && this._bridge.postMessage("private_message_read", {
                        id: "marker"
                    }), (this._isMessageFromIgnoredUser(t) || ut(t)) && this._invisibleMessagesNumber++;
                    var o = this.createMessage(t, {
                            markAsUnread: this._markNewMessagesAsUnread,
                            forceFullMessage: s,
                            batch: 1
                        }),
                        n = o[0].querySelector(".js-badge-wrapper");
                    if (null !== n && Y(n, {
                            badges: Q(t),
                            size: G.XSmall,
                            getTitle: Z,
                            getLink: tt
                        }), o.data("short")) {
                        var a = this.getLastMessages(1);
                        o.insertAfter(a.find(".ch-item-text:last"))
                    } else this._$data.removeClass("no-messages"), o.appendTo(this._$data);
                    this._scroll.atEnd(2 * o.height()) && this._clearExcessiveMessages.apply(this), i && this._bridge && (t.meta.service_msg || (!this.isStandalone() && !this.isPrivate() || e || this.playSound(o.data("is_reply") ? "onMessageForUser" : "onMessage"), this.highlightMessage(o, t.id))), this._scroll.atEnd(2 * o.height()) && this._scroll.scrollToEnd(), this._messageTypeCustomizer.onMessage(t)
                }
            }, lt.prototype.highlightMessage = function(t, e) {
                var i = this;
                this._bridge.visible.value() ? this.isPrivate() && this._bridge.postMessage("private_message_read", {
                    id: e
                }) : this.isPrivate() || (this._messagesToHighlight ? this._messagesToHighlight = this._messagesToHighlight.concat(t.attr("id")).slice(-this.MAX_HIGHLIGHTED_MESSAGES) : (this._messagesToHighlight = [t.attr("id")], this._bridge.visible.when((function() {
                    var t = i._messagesToHighlight;
                    delete i._messagesToHighlight, i._$data.find("#" + t.join(", #")).highlight(5)
                })), t = null))
            }, lt.prototype._onMessageDeletedBySelf = function(t) {
                this._slidingUp || (this._slidingUp = []), this._slidingUp.length || this._scroll.fixBottom(), this._slidingUp.push(t), t.slideUp({
                    queue: !1,
                    complete: function() {
                        this._slidingUp.splice(this._slidingUp.indexOf(t), 1), this._slidingUp.length || (delete this._slidingUp, this._scroll.releaseBottom()), this.removeMessage(t)
                    }.bind(this)
                })
            }, lt.prototype._onMessageDeleted = function(t) {
                var e = s("#ch-item-" + t.id);
                if (e.hasClass("ch-item-text") && (e = e.closest(".ch-item")), e.length > 0 && this._messagesIdsToBeDeletedBySelf && this.getMessagesData(e)[0] === this._messagesIdsToBeDeletedBySelf[0]) return this._messagesIdsToBeDeletedBySelf = null, this._onMessageDeletedBySelf(e);
                e.length > 0 && (window.is_authenticated && window.user.id === t.user_id ? this.highlightAsModerated(e) : this.removeMessage(e), this._scroll.resize())
            }, lt.prototype._onRoomChanged = function() {
                this.isPrivate() && this._$addButton.find(".msg-window-members-count").text(this._bridge.membersCount())
            }, lt.prototype.removeMessage = function(t) {
                P.jQueryCompatibleDestroy(t), t.remove()
            }, lt.prototype.highlightAsModerated = function(t) {
                t.prepend('<div class="ch-message-moderated-layout"><div class="ch-overlap">' + a("MODERATED") + "</div></div>").addClass("ch-message-moderated")
            }, lt.prototype.getLastMessages = function(t, e) {
                var i = e instanceof DocumentFragment ? s(e.childNodes).filter(".ch-item") : (e || this._$data).find(".ch-item");
                return i.slice(i.length - t)
            }, lt.prototype.getFirstMessages = function(t, e) {
                return (e instanceof DocumentFragment ? s(e.childNodes).filter(".ch-item") : (e || this._$data).find(".ch-item")).slice(0, t)
            }, lt.prototype.update = function() {
                this._bridge && this._bridge.symbol && this._model.setStatSymbol(this._bridge.symbol.value() || void 0), this._bridge && this._bridge.interval && this._model.setStatInterval(this._bridge.interval.value() || void 0)
            }, lt.prototype._clearMessageBatch = function(t) {
                this._messageBatches[t].count > 0 && (this._messageBatches[t] = ct(t))
            }, lt.prototype._putMessageInBatch = function(t, e) {
                this._messageBatches[t].clearAfterTriggering && this._messageBatches[t].visibilityCallbacksFired && this._clearMessageBatch(t), this._messageBatches[t].messages[e] = !0, this._messageBatches[t].count++
            }, lt.prototype._checkMessageBatchQuantity = function(t) {
                return this._messageBatches[t].visibilityCallbacksFired || this._onMessagesVisibility(t), this._messageBatches[t].fireAlt
            };

            function ct(t) {
                var e = {
                    messages: {},
                    count: 0,
                    visibilityCallbacksFired: !1,
                    fireAlt: !1
                };
                return 1 === t && (e.clearAfterTriggering = !0), e
            }

            function ut(t) {
                return "create_room" === t.type || "edit_room" === t.type
            }

            function mt(t) {
                return JSON.parse(t).id
            }

            function pt(t) {
                if (window.getSelection().toString()) return !0;
                var e = s(t);
                if (e.is("img, a, path")) return !0;
                var i = e.closest("div");
                return i.hasClass("js-snapshot-like") || i.hasClass("js-chart-like")
            }
            lt.prototype._onMessagesVisibility = function(t) {
                    this._messageBatches[t].visibilityCallbacksFired = !0, this._messageBatches[t].count <= 5 && (this._messageBatches[t].fireAlt = !0)
                }, lt.prototype._updateMessageBatches = function() {
                    this._messageBatches && delete this._messageBatches, this._messageBatches = [ct(0), ct(1)]
                }, lt.prototype._canLoadHistoryMessages = function() {
                    return this._scroll.isContentShort() && !this._isHistoryEnded && this._bridge.visible.value()
                }, lt.prototype._loadChatHistory = function() {
                    let t = !1;
                    this._history_loading = !0, this._$data.addClass("loading"), this._model.loadHistory(this._$data.find(".ch-item-text").length + this._invisibleMessagesNumber, (e, i) => {
                        this._scroll.save(), g.isSymbolRoom(this._model.room()) && i && (e.messages.push(g.defaultSymbolRoomMesssage()), t = !0), this.prependMessages(e.messages, () => {
                            t || this._scroll.restore(), this._history_loading = !1, this._isHistoryEnded = i, this._$data.removeClass("loading"), this._history_hide_timeout && clearTimeout(this._history_hide_timeout), this._history_hide_timeout = setTimeout(() => {
                                this._clearExcessiveMessages.apply(this) && (this._scroll.scrollToEnd(), this._isHistoryEnded = !1)
                            }, 24e5), this._canLoadHistoryMessages() && this._loadChatHistory()
                        })
                    })
                }, lt.prototype.updateRoom = function(t) {
                    this._invisibleMessagesNumber = 0, this._isHistoryEnded = !1, this._$data.addClass("loading"), this._spinner || (this._spinner = new L("mini").spin(this._$scrollContainer.get(0))), this._init_history_loading = !0, this.isPrivate() && (this.updateLikesHandlers(), this._updateMessageBatches()), this._$inputDisabledMessage.hide(), this._$invalidLinkMessage.hide();
                    this._model.setRoom(t, (t, e, i) => {
                        this.isPrivate() && this._bridge.xWindowDataSync && "function" == typeof this._bridge.xWindowDataSync && this._bridge.xWindowDataSync(t), P.jQueryCompatibleDestroy(this._$data), this._$data.empty(), this.resizeHeader(), this.isPrivate() && !i && (this._lastVisited = 1e3 * t.last_visited), this._isHistoryEnded = e, t.messages.length && (this._lastMessageId = t.messages[0].id), g.isSymbolRoom(this._model.room()) && e && t.messages.push(g.defaultSymbolRoomMesssage()), this.prependMessages(t.messages, () => {
                            if (this.updateTitle(), this._$data.removeClass("loading"), this._spinner && (this._spinner.stop(), delete this._spinner), this._scroll.scrollToEnd(), this._newMessagesToHighlight && t.messages.length > 0) {
                                var e = Math.min(this._newMessagesToHighlight, this.MAX_HIGHLIGHTED_MESSAGES);
                                g.highlightNewMessages(this._$data, e, 5), this._newMessagesToHighlight = 0
                            }
                            this._init_history_loading = !1, this.isPrivate() && this.restoreInputText(), this._init_history_loaded && this.inputEditFocus(), this._init_history_loaded = !0, this._canLoadHistoryMessages() && this._loadChatHistory()
                        })
                    })
                }, lt.prototype.getRoomTitle = function(t) {
                    var e = this._model.getRoomById(t);
                    return e ? e.title : ""
                }, lt.prototype.isStandalone = function() {
                    return !!this._standalone
                }, lt.prototype.isEmbedded = function() {
                    return !!this._embedded
                }, lt.prototype.isPrivate = function() {
                    return this._bridge && !!this._bridge.private_chat
                }, lt.prototype._updateMessageContext = function() {
                    this.messageContext = this.getMessageContext()
                }, lt.prototype.getMessageContext = function() {
                    var t = this;
                    return Object.assign({
                        join: function(t) {
                            return {
                                text: "<i>" + a("{username} has entered the chat", {
                                    replace: {
                                        username: st(t.username)
                                    }
                                }) + "</i>",
                                isService: !0
                            }
                        },
                        leave: function(t) {
                            return {
                                text: "<i>" + a("{username} has left the chat", {
                                    replace: {
                                        username: st(t.username)
                                    }
                                }) + "</i>",
                                isService: !0
                            }
                        },
                        delete_room: function(t) {
                            return {
                                text: "<i>" + a("Room {title} was deleted", {
                                    replace: {
                                        title: st(t.meta.room_title)
                                    }
                                }) + "</i>",
                                isService: !0
                            }
                        },
                        warning: function(e) {
                            return s.extend(t.normalMessageContext(e), {
                                isService: !0,
                                isWarning: !0
                            })
                        },
                        normal: t.normalMessageContext,
                        get: function(e) {
                            return e.type && this[e.type] ? this[e.type](e) : t.normalMessageContext(e)
                        }
                    }, this._messageTypeCustomizer.getHandlers(t.normalMessageContext))
                }, lt.prototype.normalMessageContext = function(t) {
                    var e, i = t.meta && "snapshot" === t.meta.type,
                        s = this.META_VERSION === t.meta.version,
                        n = t.meta.temp;
                    return e = s ? this.renderText(t).replace(/\n/g, "<br/>") : M.urlizeAndParseQuotesAndClean(t.text || "").replace(/\n/g, "<br/>"), i && (e && (e += "<br/>"), e += o.render('<div class="ch-item-preview-wrap"><div class="ch-item-snapshot-link"><i class="icon icon-snapshot-small" title="{{title}}"></i> <a href="{{url}}" target="_blank">{{metaText}}</a></div><div class="ch-item-snapshot-preview"><a href="{{url}}" target="_blank"><img src="{{previewURL}}" loading="lazy" class = "snapshot-preview" alt=""/></a></div>{{#chartId}}{{> ideaLikesButton }}{{/chartId}}</div>', {
                        title: a("Chart Snapshot"),
                        url: TradingView.clean(t.meta.url),
                        metaText: a("Chart Snapshot"),
                        previewURL: TradingView.clean(t.meta.preview_url ? t.meta.preview_url : t.meta.url),
                        chartId: !(this.isPrivate() || !n) && t.id,
                        typeClass: "js-snapshot-like",
                        titleTooltip: dt
                    }, {
                        ideaLikesButton: this.likeButtonTemplate
                    })), {
                        text: e,
                        showAuthor: !t.meta.service_msg,
                        isAuthor: user.id === t.user_id,
                        isReport: t.meta.report_type,
                        isModNotification: t.meta.mod_notification,
                        isBanNotification: t.meta.ban_notification,
                        newMeta: s,
                        tempMeta: n,
                        snapshotAttached: i
                    }
                }, lt.prototype.renderText = function(t) {
                    var e = this.utm ? "?" + this.utm : "",
                        s = new M.UrlizeBuffer(TradingView.clean(t.text), t.utm);
                    if (s = M.obsceneWords(s), t.meta.links.charts) {
                        var n = t.meta.links.charts.occurences,
                            r = t.meta.links.charts.data;
                        n.forEach((function(t) {
                            var n = r[t.id],
                                h = TradingView.clean(t.match);
                            s.text.indexOf(h) >= 0 && (s.text = s.text.replace(h, "<" + s.count++ + ">"), s.values.push(o.render('{{#showLikesButton}}<div class="ch-item-preview-wrap">{{/showLikesButton}}<div class="ch-item-chart-link"><i class="icon icon-snapshot-small" title="{{publishedIdea}}"></i> <a href="{{href}}" target="_blank" data-id="{{chartId}}" data-symbol="{{symbol}}" data-url="{{href}}">{{publishedIdea}}</a></div><div class="ch-item-chart-preview"><a  href="{{href}}" target="_blank" data-id="{{chartId}}" data-symbol="{{symbol}}" data-url="{{href}}"><div class="tv-idea-preview-button__container"><img src="{{imageUrl}}" loading="lazy" alt="" class="idea-preview"/>{{#isVideo}}<div class="tv-idea-preview-button__play-icon">' + i(851341) + '</div>{{/isVideo}}{{#videoCam}}<div class="tv-idea-preview-button__video-cam">' + i(127032) + "</div>{{/videoCam}}</div></a></div>{{#showLikesButton}}{{> ideaLikesButton }}{{/showLikesButton}}{{#showLikesButton}}</div>{{/showLikesButton}}", {
                                href: n.published_chart_url + e,
                                publishedIdea: a("Published Idea"),
                                title: n.name,
                                symbol: n.symbol.split(":")[1],
                                imageUrl: F.createPublishedChartImageUrl(n.image_url),
                                showLikesButton: !this.isPrivate(),
                                chartId: n.image_url,
                                typeClass: "js-chart-like",
                                titleTooltip: dt,
                                isVideo: n.is_video,
                                videoCam: n.video_cam
                            }, {
                                ideaLikesButton: this.likeButtonTemplate
                            })))
                        }), this)
                    }
                    s.text = U.parseQuotes(s.text), s.text = V(s.text);
                    var h = M.chainedUrlize(s, M.commonFunctors);
                    return h = E.parseNativeEmoji(h)
                }, lt.prototype._isMessageFromIgnoredUser = function(t) {
                    return this._model.ignoredUsers().includes(t.user_id)
                }, lt.prototype.createMessage = function(t, e, n) {
                    if (this._isMessageFromIgnoredUser(t) || ut(t)) return s();
                    var r, h = this.messageContext.get(t),
                        d = t.meta.interval ? " " + t.meta.interval : "",
                        c = document.createElement("div");
                    c.innerHTML = h.text;
                    for (var u = 0; u < c.childNodes.length && (c.childNodes[u].nodeType !== Node.TEXT_NODE || !(r = J(c.childNodes[u].textContent))); u += 1);
                    var p = s(o.render('<div class="ch-item ch-item-user-{{userID}} js-userlink-popup-anchor" id="ch-item-{{messageID}}"><a class="ch-item-userpic ch-item-userpic-{{userID}}" href="{{profileUrl}}" data-username="{{username}}" data-userlinkpopup-timeout="{{userlinkPopupTimeout}}" target="_blank"><img src="{{userPic}}" loading="lazy" alt="Avatar"/></a><div class="ch-item-content">{{#showHeader}}<div class="ch-item-header">{{#showAuthor}}<span class="ch-item-author"><a href="{{profileUrl}}" target="_blank" class="ch-userlink selectable js-chat-suggest" data-username="{{username}}" data-userlinkpopup-timeout="{{userlinkPopupTimeout}}">{{username}}</a><span class="ch-userlink__badge-wrapper js-badge-wrapper"></span></span>{{/showAuthor}}<span class="ch-item-info">{{{symbolInterval}}}<span class="ch-item-time"><time></time></span></span>{{#showActions}}<div class="ch-item-actions js-actions"></div>{{/showActions}}</div>{{/showHeader}}<div class="ch-item-text selectable {{^showHeader}}ch-item-text-no-header{{/showHeader}} js-text"{{#autoDirection}}dir={{autoDirection}}{{/autoDirection}}>{{{text}}}</div></div></div>', {
                            userID: t.user_id,
                            messageID: t.id,
                            username: t.username,
                            userPic: t.user_pic,
                            userlinkPopupTimeout: this.USERLINK_POPUP_TIMEOUT,
                            showHeader: !("join" === t.type),
                            showAuthor: h.showAuthor,
                            symbolInterval: "" !== t.symbol ? '<span class="ch-item-symbol">' + st(t.symbol.substring(t.symbol.indexOf(":") + 1) + d) + ",</span>" : "",
                            showActions: !h.isService,
                            text: h.text,
                            autoDirection: r,
                            profileUrl: l({
                                username: t.username,
                                is_broker: t.is_broker
                            }, {
                                query: this.utm
                            })
                        })),
                        g = this;
                    if (p.find(".ch-item-userpic img").one("error", (function() {
                            this.src = it
                        })), e.markAsUnread && !h.isAuthor && (this._putMessageInBatch(e.batch, t.id), p.addClass("js-unread-message"), this._scroll.subscribeToContentVisible(t.id, p[0], (function(i) {
                            if (i || g._bridge.postMessage("private_message_read", {
                                    id: t.id
                                }), g._checkMessageBatchQuantity(e.batch)) return p.removeClass("js-unread-message"), void p.highlight(5);
                            p.addClass("js-read-message"), p.removeClass("js-unread-message"), setTimeout((function() {
                                p.removeClass("js-read-message")
                            }), 2500)
                        }))), h.isService) return p.addClass("ch-message-service"), h.isWarning && p.addClass("ch-message-type-warning"), p;
                    this._messageTypeCustomizer.isTypeExists(t.type) && this._messageTypeCustomizer.onCreateMessage(p[0], t);
                    var v = p.find(".js-text");
                    if (0 === v.text().length && 1 === v.children().length && (v.children().hasClass("emoji") || v.children().hasClass("tv-emoji-wrapper")) && v.addClass("ch-item-text-emoji"), this.canHandleLikes && h.tempMeta) {
                        if (h.snapshotAttached) {
                            var w = t.meta.temp.message_likes;
                            w && this._snapshotMessagesLikesHandler.addIdea(p.find(".js-snapshot-like")[0], t.id, w.count, w.voted)
                        }
                        if (h.newMeta && t.meta.links.charts && t.meta.temp.chart_likes) {
                            u = 0;
                            var C = t.meta.temp.chart_likes;
                            p.find(".js-chart-like").each((function() {
                                var e = s(this).data("id");
                                e === t.meta.links.charts.occurences[u++].id && g._chartLikesHandler.addIdea(this, e, C[e].count, C[e].voted)
                            }))
                        }
                    }
                    var R, M = p.find(".js-actions");
                    if (M.append(s('<a class="ch-item-action" title="' + a("Quote this message") + '">')).children().last().append(s(i(45192)).attr({
                            width: 12,
                            height: 12
                        })).on("click", (function(e) {
                            e.stopPropagation(), g.insertQuote(p, t)
                        })), h.isAuthor || M.append(s('<a class="ch-item-action ch-item-action-report" title="' + a("Report this message") + '">')).children().last().append(s(i(108872)).attr({
                            width: 12,
                            height: 12
                        })).on("click", (function(e) {
                            e.preventDefault(), g.showReportDialog(p, t)
                        })), M.append(s('<a class="ch-item-action js-settings" title="' + a("Message settings") + '">')).children().last().append(s(i(39441)).attr({
                            width: 12,
                            height: 12
                        })), M.on("contextmenu", (function(t) {
                            t.preventDefault(), t.stopPropagation()
                        })), this.bindMessageMenu(p, t), this.isEmbedded() || p.find(".js-chat-suggest").on("click", function(e) {
                            e.preventDefault(), e.stopPropagation(), m().then((function(e) {
                                e.onUserSelect({
                                    id: t.user_id,
                                    username: t.username,
                                    userpic: t.user_pic
                                })
                            })), this.insertAtCursorPosition("@" + t.username.replace(/\s/g, " ") + " ")
                        }.bind(this)), !this.isStandalone()) {
                        var S = p.find(".ch-item-snapshot-link a, .ch-item-snapshot-preview a");
                        X({
                            $elem: S,
                            type: "image",
                            live: !1
                        }), p.find(".ch-item-chart-link a, .ch-item-chart-preview a").click((function() {
                            var t = s(this).data("url"),
                                e = s(this).data("id"),
                                i = s(this).data("symbol"),
                                o = g._bridge.getChartWidgetCollection();
                            if (t) _({
                                chartId: e,
                                chartName: a("Published Idea"),
                                publishedUrl: t,
                                shortSymbol: i,
                                chartWidgetCollection: o
                            });
                            else if (i) {
                                var n = F.createPublishedChartUrl(e, i);
                                _({
                                    chartId: e,
                                    chartName: a("Published Idea"),
                                    publishedUrl: n,
                                    shortSymbol: i,
                                    chartWidgetCollection: o
                                })
                            } else _({
                                chartId: e,
                                chartName: a("Published Idea"),
                                chartWidgetCollection: o
                            });
                            return !1
                        }))
                    }
                    this.isStandalone() || this.isEmbedded() || p.on("contextmenu", (function(e) {
                        pt(e.target) || (e.preventDefault(), g._model.getBanStatus(t, (function(i, s) {
                            t.is_banned = i && s;
                            var o = g.prepareMessageMenu(p, t).map((function(t) {
                                return t.separator ? new b : new f({
                                    label: t.title,
                                    onExecute: t.action
                                })
                            }));
                            y.createMenu(o).then((function(t) {
                                t.show(e)
                            }))
                        })))
                    })), P.jQueryCompatibleAgoDateFormatter(p.find(".ch-item-time time"), this._parseMessageTime(t.time)), p.data("message", JSON.stringify(t)).data("alive", !0), this.isStandalone() && p.data("ch-is-standalone", !0), is_authenticated && (!g.isEmbedded() && h.isAuthor ? p.addClass("ch-is-author") : h.isReport ? (p.addClass("ch-is-report"), e.forceFullMessage = !0) : h.isModNotification ? (p.addClass("ch-mod-notification"), e.forceFullMessage = !0,
                        h.isBanNotification && p.addClass("ch-ban-notification")) : t.text && p.text().indexOf("@" + user.username.replace(/\s/g, " ")) > -1 && (p.addClass("ch-is-reply").data("is_reply", !0), R = !0));
                    var x = this.getLastMessages(1, n),
                        $ = x && !x.hasClass("ch-message-moderated") && x.data("message");
                    if ($) try {
                        $ = JSON.parse($)
                    } catch (t) {
                        $ = null
                    }
                    return !e.forceFullMessage && $ && t.username === $.username && !$.type && t.symbol === $.symbol && t.interval === $.interval && R === x.data("is_reply") && new Date(t.time) - new Date($.time) < this.MESSAGES_CONCATENATION_TIMEOUT && !this._messageTypeCustomizer.getTypeNames().includes(t.type) ? (x.find(".ch-item-symbol").replaceWith(p.find(".ch-item-symbol")), x.find(".ch-item-time time").replaceWith(p.find(".ch-item-time time")), p.find(".ch-item-text").data(p.data()).data("short", !0).addClass("js-message-concatenated").attr("id", p.attr("id"))) : p
                }, lt.prototype.getMessagesData = function(t) {
                    var e = [mt(t.data("message"))];
                    return t.find(".ch-item-text[id]").each((function(t, i) {
                        var o = s(i).data("message");
                        o && e.push(mt(o))
                    })), e
                }, lt.prototype.insertQuote = function(t, e) {
                    var i = this._$inputEdit.val().trim();
                    this._$inputEdit.focus(), this._$inputEdit.val(i + (i.length ? "\n" : "") + '[quote="' + e.username.replace(/\s/g, " ") + '"]' + this.getFullMessage(t, e) + "[/quote]\n"), h.update(this._$inputEdit)
                }, lt.prototype.getFullMessage = function(t, e, i) {
                    var o = [],
                        n = i ? U.removeBBCodes : U.removeQuotes;
                    return o.push(n(e.text)), "snapshot" === e.meta.type && o.push(e.meta.url), t.find(".js-message-concatenated").each((function() {
                        var t = JSON.parse(s(this).data("message"));
                        o.push(n(t.text)), "snapshot" === t.meta.type && o.push(t.meta.url)
                    })), o.filter((function(t) {
                        return t
                    })).join("\n")
                }, lt.prototype.bindMessageMenu = function(t, e) {
                    var i = this,
                        s = t.find(".js-settings");
                    s.on("click", (function(o) {
                        o.stopPropagation(), s.hasClass("open") ? s.trigger("hide-popup") : i.createMessageMenu(t, e, (function(t) {
                            s.trigger("show-popup", [t, !0])
                        }))
                    })), B(s, null, {
                        event: "show-popup",
                        hideEvent: "hide-popup",
                        addClass: "ch-popup ch-item-settings-popup",
                        careBottomBorder: !0,
                        careRightBorder: !0
                    })
                }, lt.prototype.showReportDialog = function(t, e) {
                    var i = this.getFullMessage(t, e, !0),
                        s = {};
                    this.isPrivate() || (s.additionalText = a("Posted in {title}.").format({
                        title: this._roomTitle
                    })), runOrSignIn(I.bind(null, e.username, "message", e.id.replace(/-/g, ""), i, e.id, s), {
                        source: "Chat report message",
                        verifiedPhoneRequired: !0
                    })
                }, lt.prototype.prepareMessageMenu = function(t, e) {
                    var i, s = [],
                        o = this;
                    if (s.push({
                            title: a("Quote this message"),
                            action: function() {
                                o.insertQuote(t, e)
                            }
                        }), s.push({
                            title: a("Permanent link to this message"),
                            action: function() {
                                window.open("/chat/m/" + e.id.replace(/-/g, "") + "/")
                            }
                        }), user.id === e.user_id || this.isPrivate() || o.isStandalone() || s.push({
                            title: a("Report this message"),
                            action: this.showReportDialog.bind(this, t, e)
                        }), (user.permissions.can_moderate_public_chats || user.id === e.user_id) && s.push({
                            title: a("Delete message"),
                            action: function() {
                                var e = o.getMessagesData(t);
                                o._messagesIdsToBeDeletedBySelf = e, o._model.deleteMessage(e, null, (function() {
                                    o._messagesIdsToBeDeletedBySelf = null
                                }))
                            }
                        }), s.push({
                            separator: !0
                        }),
                        user.permissions.can_ban_people && user.id !== e.user_id && !e.is_moderator) {
                        var n = !!e.is_banned,
                            r = {
                                unban: a("Unban {username}", {
                                    replace: {
                                        username: e.username
                                    }
                                }),
                                ban: a("Ban {username}", {
                                    replace: {
                                        username: e.username
                                    }
                                })
                            },
                            h = {
                                title: n ? r.unban : r.ban,
                                action: function() {
                                    n ? $(e.user_id, e.username, (function() {
                                        h.title = r.ban, n = !1
                                    })) : x(o.getFullMessage(t, e, !0), e, {
                                        modal: !0
                                    }, (function() {
                                        h.title = r.unban, n = !0
                                    }))
                                }
                            };
                        s.push(h), t.find(".ch-userlink, ch-item-userpic").on("userbanchange", (function(t, e) {
                            n = e, h.title = n ? r.unban : r.ban
                        }))
                    }
                    if (window.user.id !== e.user_id && !e.is_moderator) {
                        var d = !!this._model.ignoredUsers().includes(e.user_id),
                            l = {
                                ignore: a("Ignore {username}", {
                                    replace: {
                                        username: e.username
                                    }
                                }),
                                unignore: a("Unignore {username}", {
                                    replace: {
                                        username: e.username
                                    }
                                })
                            },
                            c = {
                                title: d ? l.unignore : l.ignore,
                                action: function() {
                                    d ? o._model.ignoreUserV2(e, !1, (function() {
                                        c.title = l.ignore, d = !1
                                    }), (function(t) {
                                        t && A({
                                            title: a("Error"),
                                            content: t.message
                                        })
                                    })) : W({
                                        text: a("Are you sure you want to ignore messages from {username}?", {
                                            replace: {
                                                username: e.username
                                            }
                                        }),
                                        onConfirm: function(t) {
                                            return new Promise((function(i) {
                                                o._model.ignoreUserV2(e, !0, (function() {
                                                    i(), t.dialogClose(), c.title = l.unignore, d = !0
                                                }), (function(e) {
                                                    i(), t.dialogClose(), e && A({
                                                        title: a("Error"),
                                                        content: e.message
                                                    })
                                                }))
                                            }))
                                        }
                                    })
                                }
                            };
                        s.push(c), t.find(".ch-userlink, ch-item-userpic").on("userignorechange", (function(t, e) {
                            d = e, c.title = d ? l.unignore : l.ignore
                        }))
                    }(o.isStandalone() || o.isPrivate() || user.id === e.user_id || s.push({
                        title: a("Send private message to {username}", {
                            replace: {
                                username: e.username
                            }
                        }),
                        action: function() {
                            runOrSignIn(k.bind(this, e.user_id, e.username), {
                                source: "Chat send private message",
                                verifiedPhoneRequired: !0,
                                doNotCheckSuspicious: !0
                            })
                        }
                    }), o.isPrivate()) || (i = user.id === e.user_id ? a("Show all my messages") : a("Show all messages from {username}", {
                        replace: {
                            username: e.username
                        }
                    }), s.push({
                        title: i,
                        action: function() {
                            var t = new Date,
                                i = t.getMonth() + 1,
                                s = t.getDate(),
                                n = t.getFullYear() + "-" + (i < 10 ? "0" : "") + i + "-" + (s < 10 ? "0" : "") + s;
                            window.open("/chat/history/?room=" + o._model.room() + "&date=" + n + "&tzoffset=" + t.getTimezoneOffset() + "&usernames=" + e.username)
                        }
                    }));
                    return s[s.length - 1].separator && s.pop(), s
                }, lt.prototype.createMessageMenu = function(t, e, i) {
                    var s = this;
                    this._model.getBanStatus(e, (function(o, n) {
                        e.type && !s._messageTypeCustomizer.getTypeNames().includes(e.type) || (e.is_banned = o && n, i(s.prepareMessageMenu(t, e)))
                    }))
                }, lt.prototype._messageUnread = function(t) {
                    return new Date(t) > new Date(this._lastVisited)
                }, lt.prototype.prependMessages = function(t, e) {
                    if (t.length) {
                        var i, o = this.getFirstMessages(1),
                            n = o && o.data("message");
                        if (n) try {
                            i = (n = JSON.parse(n)).username
                        } catch (t) {}
                        var a, r, h, d = document.createDocumentFragment(),
                            l = !1,
                            c = !!this._lastVisited,
                            u = t.reverse();
                        if (u.forEach((function(t) {
                                var e = c && this._messageUnread(t.time);
                                if (e) {
                                    var i = this._updateUnreadMarker(0);
                                    d.appendChild(i.get(0)), l = !0, c = !1
                                }(this._isMessageFromIgnoredUser(t) || ut(t)) && this._invisibleMessagesNumber++;
                                var s = this.createMessage(t, {
                                    markAsUnread: l,
                                    forceFullMessage: e,
                                    batch: 0
                                }, d);
                                if (s.length)
                                    if (s.data("short")) {
                                        var o = this.getLastMessages(1, d).find(".ch-item-text:last");
                                        s.insertAfter(o)
                                    } else d.appendChild(s.get(0)), a = s
                            }), this), this._messageUnread(u[0].time) || delete this._lastVisited, i && a && (r = a.data("message"))) {
                            try {
                                h = (r = JSON.parse(r)).username
                            } catch (t) {}
                            if (h && h === i && new Date(n.time) - new Date(r.time) < this.MESSAGES_CONCATENATION_TIMEOUT) {
                                var m = o.find(".ch-item-text");
                                m.eq(0).attr("id", o.attr("id")), m.eq(0).data(o.data()), m.insertAfter(a.find(".ch-item-text:last")), o.remove()
                            }
                        }
                        for (var p = Object.values(d.childNodes), g = 0; g < p.length; g++) {
                            var _ = p[g],
                                v = _.querySelector(".js-badge-wrapper");
                            if (null !== v) {
                                var f = s(_).data("message");
                                if (f && 0 !== f.length) {
                                    var b = JSON.parse(f);
                                    Y(v, {
                                        badges: Q(b),
                                        size: G.XSmall,
                                        getTitle: Z,
                                        getLink: tt
                                    })
                                }
                            }
                        }
                        var y = this._$data.get(0);
                        y.insertBefore(d, y.firstChild), e()
                    } else e()
                }, lt.prototype._getNewUnreadMarker = function() {
                    return this._$unreadMarker ? s() : this._updateUnreadMarker(1)
                }, lt.prototype._resetUnreadMarker = function() {
                    this._$unreadMarker && (this._$unreadMarker.remove(), delete this._$unreadMarker)
                }, lt.prototype._updateUnreadMarker = function(t) {
                    return this._resetUnreadMarker(), this._$unreadMarker = s('<div class="js-unread-marker ch-unread-marker">'), this._scroll.subscribeToContentVisible("__marker__", this._$unreadMarker[0], function(e) {
                        if (e || this._bridge.postMessage("private_message_read", {
                                id: "__marker__"
                            }), this._checkMessageBatchQuantity(t)) this._$unreadMarker.remove();
                        else {
                            this._$unreadMarker.addClass("js-vanish");
                            var i = this._$unreadMarker;
                            setTimeout((function() {
                                i.remove()
                            }), 2500)
                        }
                        delete this._$unreadMarker
                    }.bind(this)), this._$unreadMarker
                }, lt.prototype._parseMessageTime = function(t) {
                    return n.utc(t, "ddd MMM DD hh:mm:ss YYYY", "en").toDate()
                }, lt.prototype.insertAtCursorPosition = function(t) {
                    var e = this._$inputEdit.val(),
                        i = this._$inputEdit.prop("selectionStart");
                    this._$inputEdit.val(e.slice(0, i) + t + e.slice(i)), this._$inputEdit.putCursorAtPosition(i + t.length), h.update(this._$inputEdit).focus()
                }, lt.prototype.prepareLayout = function(t) {
                    var e = this;
                    if (this._$container = t, this._$widget = s('<div class="tv-chat">').appendTo(t), this._$scrollContainer = s('<div class="tv-chat-scroll-container">').appendTo(this._$widget), this._$scrollContainer.on("contextmenu", (function(t) {
                            t.target.classList.contains("tv-chat-scroll-container") && t.preventDefault()
                        })), this._$data = s('<div class="ch-data no-messages">').appendTo(this._$scrollContainer), this._$data.on("click", ".ch-item", (function(t) {
                            pt(t.target) || e.toggleHighlightUserMessages(s(t.currentTarget))
                        })).on("mouseenter", ".ch-item", (function() {
                            var t = s(this),
                                e = t.find(".ch-item-info");
                            t.find(".ch-item-header").width() - (t.find(".ch-item-author").width() + e.width()) < t.find(".js-actions").width() && e.addClass("js-hidden")
                        })).on("mouseleave", ".ch-item", (function() {
                            s(this).find(".ch-item-info").removeClass("js-hidden")
                        })), this._$input = s(), !this.isEmbedded()) {
                        if (this._bridge && this._bridge.$headerspace)
                            if (this.isPrivate() || this.isStandalone() || (this._$mentionsButton = s('<a class="button apply-common-tooltip" title="' + a("Show only my sent and received messages") + '" data-role="button" data-name="mentions"></a>').append(s(i(967037)).attr({
                                    width: 17,
                                    height: 17
                                })).appendTo(this._bridge.$headerspace), this._$mentionsButton.on("click", (function(t) {
                                    return e.toggleMentionsOnly(), !1
                                }))), this._bridge.hideMaximize || (this._bridge.options || {}).hideMaximize || "function" != typeof this._bridge.toggleMaximize || (this._$maximizeButton = s('<a class="button apply-common-tooltip" title="' + a("Maximize Chat") + '" data-role="button" data-name="maximize"></a>').append(s(i(209927)).attr({
                                    width: 8,
                                    height: 18
                                })).appendTo(this._bridge.$headerspace), this._$maximizeButton.on("click", (function(t) {
                                    e._bridge.toggleMaximize(), t.preventDefault()
                                })), this._bridge.hideDetach || this._$maximizeButton.addClass("button-half"), this._bridge.maximized && (this._onMaximized = function(t) {
                                    e._$maximizeButton.toggleClass("active", !!t), e.resizeHeader(), e.resize()
                                }, this._bridge.maximized.subscribe(this._onMaximized), this._bridge.maximized.value() && this._$maximizeButton.addClass("active"))), this._bridge.hideDetach || (this._$detachButton = s('<a class="button apply-common-tooltip svg-detach" title="' + a("Detach Chat") + '" data-role="button" data-name="detach"></a>').append(s(i(69206)).attr({
                                    width: 10,
                                    height: 10
                                })).appendTo(this._bridge.$headerspace), this._$detachButton.on("click touchend", (function(t) {
                                    t.preventDefault(), lt.openBoundWindow({
                                        roomId: e.currentRoom(),
                                        isPrivate: function() {
                                            return e.isPrivate()
                                        }
                                    })
                                })), this._$maximizeButton && this._$detachButton.addClass("button-half button-nomarginleft")), this.isPrivate()) {
                                var o = this._bridge.isAuthor ? a("Add/Remove people to this chat") : a("See the members of this chat");
                                this._$addButton = s('<a class="button apply-common-tooltip" id="add-people" title="' + o + '" data-role="button" data-name="add-people">').append(s(i(676842)).attr({
                                    width: 17,
                                    height: 17
                                })).append(s('<span class="msg-window-members-count">').text(e._bridge.membersCount())).prependTo(this._bridge.$headerspace), this._$addButton.on("click", (function(t) {
                                    t.preventDefault(), e._bridge.addPeople()
                                }))
                            }
                        this._$inputWrap = s('<div class="ch-input">').appendTo(this._$widget), this._$progressBarWrap = s('<div class="progress-bar-wrap">').appendTo(this._$inputWrap), this._$progressBar = s('<div class="progress-bar">').appendTo(this._$progressBarWrap), this._$input = s('<div class="wrap">').appendTo(this._$inputWrap), this._$inputDisabledMessage = s('<div class="ch-disabled-message">' + a("Please use English for chatting. Check local versions to see if your language is supported.") + ".</div>").prependTo(this._$inputWrap), this._$invalidLinkMessage = s('<div class="ch-disabled-message">' + a("Invalid link") + "</div>").prependTo(this._$inputWrap), this._$inputSnapshotLink = s('<div class="ch-snapshot-link"><a><img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="Screenshot preview"></a><i class="icon icon-snapshot-small" title="Chart Snapshot"></i> <a target="_blank">' + a("Chart snapshot") + '</a><i class="icon icon-snapshot-delete" title="' + a("Delete") + '"></i> </div>').prependTo(this._$inputWrap), this._$inputSnapshotLink.find(".icon-snapshot-delete").on("click", this.attachSnapshot.bind(this)),
                            this._$inputEditSizer = s('<div class="ch-textarea-sizer"></div>').appendTo(this._$input);
                        var n = this.isPrivate() ? a("Type your message here") : a("Have something to say?");
                        this._$inputEdit = s('<textarea class="message-input" autocomplete="off" enterkeyhint="send"></textarea>'), this._$inputEdit.appendTo(this._$inputEditSizer), h(this._$inputEdit), this._$inputEdit.on("autosize:resized", (function() {
                            var t = e._$inputEdit.height();
                            if (t !== e._header_height) {
                                var i = e._$inputEdit.outerHeight();
                                e._header_height = t, e._$input.height(i), e.resizeHeader()
                            }
                        })), this._$inputEdit.attr("placeholder", n), u(this._getHintListOptions()).then((function(t) {
                            e._hintListElement = t;
                            var i = e._$container.parent().parent();
                            s(e._hintListElement).appendTo(i), e._$inputEdit[0].addEventListener("keydown", (function(t) {
                                var i = nt(t);
                                if (i !== rt.ENTER || t.defaultPrevented || (t.preventDefault(), e.post()), i === rt.ENTER + at.Mod || i === rt.ENTER + at.Shift) {
                                    t.preventDefault();
                                    var s = e._$inputEdit.val(),
                                        o = e._$inputEdit.prop("selectionStart");
                                    e._$inputEdit.val(s.slice(0, o) + "\n" + s.slice(o)).putCursorAtPosition(o + 1), h.update(e._$inputEdit)
                                }
                            })), e._$inputEdit[0].addEventListener("paste", (function() {
                                setTimeout((function() {
                                    e.checkInput()
                                }), 0)
                            }))
                        })), this._$snapshotButton = s('<span class="ch-snapshot-button" title="' + a("Attach chart snapshot") + '"></span>').append(s(i(676190)).attr({
                            width: 16,
                            height: 13
                        })).on("click", this.attachSnapshot.bind(this)).on("contextmenu", (function(t) {
                            t.preventDefault()
                        })).appendTo(this._$inputEditSizer), this._$smilesButton = s('<span class="ch-smiles-button" title="' + a("Insert emoticon") + '"></span>').append(s(i(52959)).attr({
                            width: 15,
                            height: 14
                        })).on("click", this.showSmilesPopup.bind(this)).on("contextmenu", (function(t) {
                            t.preventDefault()
                        })).appendTo(this._$inputEditSizer), this._bridge && this._bridge.getChartWidget && this._bridge.getChartWidget() || (this._$snapshotButton.hide(), this._$smilesButton.addClass("off-chart")), this._scroll = new D(this._$scrollContainer[0], this._$data[0], {
                            vAlignBottom: !0,
                            headerHeight: 0
                        }), this._onBridgeVisibleChange = function(t) {
                            if (t) {
                                if (setTimeout((function() {
                                        e._model && e._model.setActive(t)
                                    }), 1e3), !e.isPrivate()) {
                                    var i = e._model.room();
                                    e._model.setRoom(""), e.updateRoom(i)
                                }
                            } else e._model.setActive(t);
                            t && e.isPrivate() && e._model.setMessagesRead(), t && (e._$inputEdit && h.update(e._$inputEdit), e.resizeHeader(), e._notInitialVisible || (e._scroll.scrollToEnd(), e._notInitialVisible = !0), e.inputEditFocus())
                        }, this._bridge.visible.subscribe(this._onBridgeVisibleChange), s(window).on("visibilitychange", (function(t, i) {
                            i && e.inputEditBlur()
                        })), this._bridge.visible.value() && (this._notInitialVisible = !0), this._scroll.scrolltostart.subscribe(this, (function() {
                            e._model.isHistoryLoading() || e._isHistoryEnded || e._init_history_loading || e._loadChatHistory()
                        })), is_authenticated && user && user.is_moderator && this.prepareModeratorLayout(), this.sound = new c.ChatSoundControl(this.isPrivate() ? "privatemessages.sound" : "chat.sound"), this.progressBar = new c.ChatProgressBar(this._$progressBar, 200, 90, 5, [200, 200, 400])
                    }
                }, lt.prototype._getHintListOptions = function() {
                    var t = this,
                        e = this.isStandalone() ? this._$container.parent()[0] : this._$container.parent().parent().parent()[0];
                    return {
                        fullBorder: !0,
                        maxItems: 5,
                        suggestLimit: 5,
                        className: r.userNameHintList,
                        closeOnMouseOutClick: !0,
                        input: this._$inputEdit[0],
                        container: e,
                        onItemSelected: function(e, i, s) {
                            t._$inputEdit.val(i).putCursorAtPosition(s), h.update(t._$inputEdit)
                        }
                    }
                }, lt.prototype.prepareModeratorLayout = function() {
                    this._$warningTemplates = s('<a class="ch-button ch-warning-templates-button" title="' + a("Moderators Warning Messages") + '"><i>' + i(32500) + "</i></a>").on("click", this.warningTemplatesPopup.bind(this)).insertBefore(this._$inputEditSizer), this._$widget.addClass("moderator-layout"), this._$inputEdit.on("autosize:resized", function() {
                        this._$inputEdit && this._$warningTemplates.height(this._$inputEdit.height() + 2)
                    }.bind(this)), B(this._$warningTemplates, null, {
                        event: "show-popup",
                        hideEvent: "hide-popup",
                        addClass: "ch-popup ch-warning-templates-popup",
                        careRightBorder: !0,
                        viewportSpacing: 2,
                        reverse: !0,
                        popupDrift: 68
                    })
                }, lt.prototype.warningTemplatesPopup = function(t) {
                    var e = T().map(function(t) {
                        return {
                            title: t.name,
                            action: this.initMessageTypeWarning.bind(this, t.text, t.id)
                        }
                    }.bind(this));
                    e.push({
                        title: a("Custom..."),
                        action: this.initMessageTypeWarning.bind(this, "", null)
                    }), e.push({
                        separator: !0
                    }), e.push({
                        title: a("Cancel"),
                        action: this.resetMessageType.bind(this)
                    }), s(t.target).trigger("show-popup", [e]), t.stopPropagation()
                }, lt.prototype.initMessageTypeWarning = function(t, e) {
                    (t = (this._$inputEdit.val() ? this._$inputEdit.val() + " " : "") + t) && (this._$inputEdit.val(t), h.update(this._$inputEdit).putCursorAtEnd()), this._$inputWrap.addClass("custom-message-warning"), setTimeout(function() {
                        this._$warningTemplates.addClass("active")
                    }.bind(this), 0), this._messageType = "warning", this._warningType = e
                }, lt.prototype.resetMessageType = function(t) {
                    this._$inputWrap[0].className = this._$inputWrap[0].className.replace(/\bcustom-message-.*?\b/g, ""), this._$warningTemplates.removeClass("active"), delete this._messageType, delete this._warningType
                }, lt.prototype._showSettingsDialog = function(t, e) {
                    return s(t.delegateTarget).hasClass("open") ? (s(t.delegateTarget).trigger("hide-popup"), !1) : (new c.ChatSettingsDialog(this._bridge, (function(e, i) {
                        s(t.delegateTarget).trigger("show-popup", [e, i])
                    }), e || this._model.getRooms()), t.preventDefault(), !1)
                }, lt.prototype.editRoom = function(t) {
                    i(558476).prototype.showEditRoomDialog.call(this, t)
                }, lt.prototype.deleteRoom = function(t) {
                    var e = this;
                    W({
                        text: a("Are you sure you want to delete room '{name}' ?").format({
                            name: t.title
                        }),
                        onConfirm: function(i) {
                            return new Promise((function(s) {
                                e._model.deleteRoom(t.room_id, (function(t) {
                                    s(), i.dialogClose(), t.error && A({
                                        title: a("Error"),
                                        content: t.error
                                    })
                                }))
                            }))
                        }
                    })
                }, lt.prototype.saveInputText = function() {
                    var t = this._$inputEdit.val().trim();
                    t && (window.user._chatInputs[this.currentRoom()] = t)
                }, lt.prototype.restoreInputText = function() {
                    this.currentRoom() in window.user._chatInputs && (this._$inputEdit.val(window.user._chatInputs[this.currentRoom()]), h.update(this._$inputEdit), delete window.user._chatInputs[this.currentRoom()])
                },
                lt.prototype.selectChannel = function(t) {
                    if (!this._checkRoom(t)) throw new Error("Chat room not found");
                    if (this._roomTitle = this.getRoomTitle(t), this._bridge && this._bridge.properties && this._bridge.properties.setValue) {
                        var e = this._bridge.properties.value() || {};
                        e.room = t, this._bridge.properties.setValue(e)
                    }
                    this.updateRoom(t)
                }, lt.prototype._checkRoom = function(t) {
                    return !!(this._model.getRoomById(t) || t.match(/pm_*/) || t.match(/live_*/))
                }, lt.prototype.getText = function(t) {
                    return this._$inputEdit.val() || t
                }, lt.prototype.clearInput = function() {
                    this._$inputEdit.val("")
                }, lt.prototype.post = function(t) {
                    var e = this,
                        i = e._postMeta || {
                            text: ""
                        };
                    if (this.checkInput(), !this._inputDisabled) {
                        var s = this.currentRoom(),
                            o = this._model.getRoomById(s);
                        e._sheduledSending = function() {
                            var n = t || e._$inputEdit.val();
                            if (!n && !i.text) return !1;
                            e._$inputEdit.val(""), h.update(e._$inputEdit), "snapshot" !== i.type && n && e.inputEditFocus();
                            var r = {};
                            e._messageType && (r.messageType = e._messageType, e._warningType && (r.warningType = e._warningType), e.resetMessageType());
                            var l = (new Date).getTime();
                            e.progressBar.start(l), e._model.sendMessageToRoom(s, n, i, r, (function(t) {
                                var s = t.error || t.warning;
                                if (s) {
                                    var r = t.title;
                                    d({
                                        title: t.error ? r || a("Error") : r || a("Warning"),
                                        html: s,
                                        onClose: function() {
                                            e.inputEditFocus()
                                        }
                                    }).then((function() {
                                        e.inputEditBlur(), e._$inputEdit.val(n), h.update(e._$inputEdit), e.progressBar.finishOnError(l)
                                    }))
                                } else e.progressBar.finish(l), N(o, n, i)
                            }), (function() {
                                e.progressBar.finishOnError(l), A({
                                    title: a("Error"),
                                    content: a("There was an error posting your message.")
                                }), e._$inputEdit.val(n), h.update(e._$inputEdit)
                            })), e._postMeta = null, e._$snapshotButton.removeClass("active"), e._$inputSnapshotLink.hide(), e.resizeHeader()
                        };
                        var n = {
                            source: "Chat post message",
                            sourceMeta: this.getChartWidgetCollection() ? "Chart" : null,
                            verifiedPhoneRequired: !0,
                            doNotCheckSuspicious: !0,
                            customPhoneCheck: function() {
                                if (!e.currentRoom().startsWith("live_")) return !1;
                                return !(user.max_user_language_reputation < 4.5) && !user.has_phone
                            }
                        };
                        return runOrSignIn((function() {
                            e._sheduledSending && e._sheduledSending(), e._sheduledSending = null
                        }), n), !1
                    }
                }, lt.prototype.resize = function(t) {
                    this._scroll.resize(), this._$inputEdit && h.update(this._$inputEdit)
                }, lt.prototype.updateTitle = function(t) {
                    this._bridge && this._bridge.setTitle && this._bridge.setTitle(this._roomTitle)
                }, lt.prototype.validateLanguageCheck = function(t) {
                    var e = !1;
                    if ("en" === window.language) {
                        var i = this._model.getRoomById(this.currentRoom());
                        e = !!i && !!i.pinned && !H(t)
                    }
                    return e
                }, lt.prototype.checkInput = function() {
                    var t = this._$inputEdit.val(),
                        e = this.validateLanguageCheck(t),
                        i = ot(t);
                    this._$inputEdit.toggleClass("disabled", e || !i), this._$inputDisabledMessage.toggle(e), this._$invalidLinkMessage.toggle(!i), e !== this._inputDisabled && this.resizeHeader(), this._inputDisabled = e || !i
                }, lt.prototype.resizeHeader = function() {
                    this._$scrollContainer.css("bottom", this._$inputWrap.outerHeight()), this._scroll.resize()
                }, lt.prototype.getChartWidgetCollection = function() {
                    return this._bridge && this._bridge.getChartWidgetCollection && this._bridge.getChartWidgetCollection()
                }, lt.prototype.attachSnapshot = function() {
                    var t = this,
                        e = this.getChartWidgetCollection();
                    if (e) {
                        if (t._postMeta) t._postMeta = null, t._$snapshotButton.removeClass("active"), t._$inputSnapshotLink.hide(), t.resizeHeader();
                        else {
                            var i = function() {
                                    t._$snapshotButton.removeClass("loading")
                                },
                                s = {
                                    previews: ["thumb"],
                                    onInvalidSnapshotImage: i
                                };
                            t._$snapshotButton.addClass("loading"), w(e, (function(e) {
                                var i = F.createSnapshotImageUrls(e);
                                t._postMeta = {
                                    text: a("Chart Snapshot"),
                                    url: i.url,
                                    preview_url: i.preview,
                                    type: "snapshot"
                                }, t._$snapshotButton.removeClass("loading").addClass("active");
                                var s = t._$inputSnapshotLink.show().find("a");
                                s.attr("href", i.url), X({
                                    $elem: s,
                                    type: "image",
                                    live: !1
                                }), t._$inputSnapshotLink.find("img").attr("src", i.url).on("load", t.resizeHeader.bind(t)), t.inputEditFocus()
                            }), i, s)
                        }
                        return !1
                    }
                }, lt.prototype.toggleSnaphotPreview = function(t) {
                    this._showSnapshotPreview = void 0 !== t ? t : !this._showSnapshotPreview, TVSettings.setValue("chat.show_snapshot_preview", this._showSnapshotPreview), this._$widget.toggleClass("show-snapshot-preview", this._showSnapshotPreview), this.resize()
                }, lt.prototype.toggleHighlightUserMessages = function(t) {
                    var e = t.attr("class").match(/ch-item-user-(\d+)/)[1],
                        i = !t.hasClass("ch-highlight-user");
                    s(".ch-item").removeClass("ch-highlight-user"), e && i && this._$data.find(".ch-item-user-" + e).addClass("ch-highlight-user")
                }, lt.prototype.destroy = function() {
                    this._isHistoryEnded = !0, this.isPrivate() && this.saveInputText(), this._sheduledSending && (this._sheduledSending(), this._sheduledSending = null), this._model.messageReceived().unsubscribe(this, this._onMessageWrapper), this._model.messageDeleted().unsubscribe(this, this._onMessageDeleted), this._model.roomChanged().unsubscribe(this, this._onRoomChanged), this._model.destroy(), this._model = null, window.loginStateChange.unsubscribeAll(this), this._scroll.scrolltostart.unsubscribeAll(this), this._bridge.visible.unsubscribe(this._onBridgeVisibleChange), this._bridge.symbol && this._onSymbolChanged && this._bridge.symbol.unsubscribe(this._onSymbolChanged), this._bridge.interval && this._onIntervalChanged && this._bridge.interval.unsubscribe(this._onIntervalChanged), this._bridge.height && this._onResize && this._bridge.height.unsubscribe(this._onResize), this._bridge.width && this._onResize && this._bridge.width.unsubscribe(this._onResize), this._bridge.maximized && this._onMaximized && this._bridge.maximized.unsubscribe(this._onMaximized), this.destroyLikesHandlers(), P.jQueryCompatibleDestroy(this._$data), this.sound.destroy(), this._bridge && this._bridge.$headerspace && this._bridge.$headerspace.empty(), p(this._hintListElement)
                }, lt.prototype.showLinkToChat = function(t) {
                    var e = window.location.protocol + "//" + window.location.host + "/chat/#" + t.room_id;
                    K.showCustomDialog({
                        width: 300,
                        title: a("Link to {room} chat", {
                            replace: {
                                room: TradingView.clean(t.title)
                            }
                        }),
                        html: '<form><input type="text" value="' + e + '"/></form>'
                    })
                }, lt.openBoundWindow = function(t) {
                    var e = "";
                    e = t.isPrivate() ? "/chat/" + t.roomId + "/" : "/chat/#" + t.roomId, R.open({
                        url: e,
                        parameters: {
                            menubar: !1,
                            location: !1,
                            status: !1,
                            directories: !1,
                            width: 470,
                            height: 600
                        }
                    }), z("GUI", "Chat Detached")
                }, lt.prototype.toggleMentionsOnly = function() {
                    this._mentionsOnly = !this._mentionsOnly, this._$data.toggleClass("mentions-only"), this._scroll.scrollToEnd(), this._$mentionsButton.toggleClass("active")
                }, lt.prototype.showSmilesPopup = function(t) {
                    var e = this,
                        i = s('<div class="ch-smiles-popup">').appendTo(document.body);
                    E.each((function(t) {
                        if (t.showInPopUp) {
                            var e = s('<div class="emoji-container js-emoji" title="' + t.code + '">');
                            e.data("code", t.code), e.append(E.getElement(t)), e.appendTo(i)
                        }
                    })), i.on("click", ".js-emoji", (function(t) {
                        var o = e._$inputEdit.val(),
                            n = e._$inputEdit.prop("selectionStart"),
                            a = n > 0 && " " !== o.charAt(n - 1) ? " " : "",
                            r = n < o.length && " " !== o.charAt(n) ? " " : "";
                        e.insertAtCursorPosition(a + s(t.target).closest(".js-emoji").data("code") + r), i.remove()
                    }));
                    var o = this._$smilesButton.offset(),
                        n = this._$smilesButton.outerWidth(),
                        a = this._$smilesButton.outerHeight(),
                        r = o.top + a / 2,
                        h = o.left + n / 2,
                        d = 15,
                        l = i.outerHeight(),
                        c = i.outerWidth(),
                        u = "top",
                        m = !0,
                        p = h - c / 2,
                        g = s(document).width(),
                        _ = s(window).width();
                    p + c + 10 > _ && (p = _ - (c + 10), g - h < 20 && (m = !1, d = 10));
                    var v = r + d,
                        f = s(window).height(),
                        b = s(window).scrollTop(),
                        y = s(window).scrollLeft();
                    v - b + l + d > f && (v = r - l - d, u = "bottom"), m && s('<div class="ch-smiles-caret ch-smiles-caret-' + u + '">').css("left", h - p - y).prependTo(i), i.css({
                        left: p + y,
                        top: v
                    }).on("mousedownoutside", (function() {
                        i.remove()
                    }))
                }, lt.prototype.inputEditFocus = function() {
                    ht || this._noAutoFocus || this._$inputEdit && this._$inputEdit.focus()
                }, lt.prototype.inputEditBlur = function() {
                    this._$inputEdit && this._$inputEdit.blur()
                }, lt.getLaunchInSeparateWindowAction = function(t, e) {
                    return {
                        title: a("Launch Chat in a Separate Window"),
                        action: function() {
                            lt.openBoundWindow({
                                roomId: t,
                                isPrivate: e
                            })
                        }
                    }
                }, lt.prototype.destroyLikesHandlers = function() {
                    this._chartLikesHandler && this._chartLikesHandler.destroy(), this._snapshotMessagesLikesHandler && this._snapshotMessagesLikesHandler.destroy()
                }, lt.prototype.updateLikesHandlers = function() {
                    this.destroyLikesHandlers(), this._chartLikesHandler = c.ChatLikesHandler.getChartsHandler(), this._snapshotMessagesLikesHandler = c.ChatLikesHandler.getMessagesSnapshotsHandler()
                }, t.exports = lt
        },
        238342: (t, e, i) => {
            "use strict";
            i.d(e, {
                trackChatEvent: () => c
            });
            var s = i(929098),
                o = i(573043);
            const n = /((https?:\/\/)|(www\.))(-\.)?([^\s/?.#]+\.)+([^\s<>]*)?/g,
                a = /^(https?:\/\/).*tradingview.com/,
                r = /tradingview.com\/(chart|script)\//,
                h = /(image|i)\/([0-9a-zA-Z]{8})\/$/,
                d = /x\/([0-9a-zA-Z]{8})\/(.+?)?\/?$/,
                l = /^pm_.{16}/;

            function c(t, e, i) {
                const c = l.test(t.room_id),
                    u = c ? "pm" : "public chat",
                    m = function(t) {
                        const e = [];
                        return o.emoji.each(i => {
                            t.search(i.re) >= 0 && e.push(i.code)
                        }), e
                    }(e),
                    p = m.length > 0,
                    g = function(t) {
                        const e = {
                                snapshot: 0,
                                chart: 0,
                                internal: 0,
                                external: 0
                            },
                            i = t.match(n);
                        return null !== i && i.forEach(t => {
                            a.test(t) ? d.test(t) || h.test(t) ? e.snapshot++ : r.test(t) ? e.chart++ : e.internal++ : e.external++
                        }), e
                    }(e);
                e && c ? (0, s.trackEvent)("Chat", "Send message to " + u) : e && !c && (0, s.trackEvent)("Chat", "Send message to " + u, String(t.title)), (i && "snapshot" === i.type || g.snapshot > 0) && (0, s.trackEvent)("Chat", "Send chart snapshot", u), g.chart > 0 && (0, s.trackEvent)("Chat", "Send chart link", u), g.internal > 0 && (0, s.trackEvent)("Chat", "Send internal link", u), g.external > 0 && (0,
                    s.trackEvent)("Chat", "Send external link", u), p && m.forEach(t => {
                    (0, s.trackEvent)("Chat", "Send emoji", t)
                })
            }
        },
        802837: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                SYMBOL_ROOM_PREFIX: () => n,
                highlightNewMessages: () => a,
                getChatHistoryMessageURL: () => r,
                symbolRoomId: () => h,
                isSymbolRoom: () => d,
                symbolFromChatRoomId: () => l,
                defaultSymbolRoomMesssage: () => c
            });
            i(918184), i(405737);
            var s = i(120220),
                o = i(918184);
            const n = "symbol_";

            function a(t, e, i) {
                let s = 0;
                const n = o(t.find(".ch-item").toArray().reverse().slice(0, e));
                if (!(!n.length || e < 1 || i < 1)) {
                    for (; e > 0;) {
                        e -= n.eq(s).find(".ch-item-text").length, s++
                    }
                    n.slice(0, s).highlight(i)
                }
            }

            function r(t, e) {
                const i = new Date(t),
                    s = i.getMonth() + 1,
                    o = i.getDate(),
                    n = i.getHours(),
                    a = i.getMinutes();
                return "/chat/history/?room=" + e + "&date=" + (i.getFullYear() + "-" + (s < 10 ? "0" : "") + s + "-" + (o < 10 ? "0" : "") + o) + "&timefrom=" + ((n < 10 ? "0" : "") + n + "%3A" + (a < 10 ? "0" : "") + a) + "&timeto=00%3A00&usernames=&order=asc&tzoffset=" + i.getTimezoneOffset()
            }

            function h(t) {
                return "en" === window.locale ? `${n}${t}` : `${n}${t}_${window.locale}`
            }

            function d(t) {
                return t.startsWith(n)
            }

            function l(t) {
                let e = t.replace(new RegExp("^" + n), "");
                return "en" !== window.locale && (e = e.replace(new RegExp(`_${window.locale}$`), "")), e
            }

            function c() {
                return {
                    symbol: "",
                    time: "Thu Jan 10 15:00:00 2022 UTC",
                    meta: {
                        version: "0.2",
                        links: {}
                    },
                    username: "TradingView",
                    user_pic: "https://s3.tradingview.com/userpics/6171439-Hlns_mid.png",
                    text: (0, s.t)("Well hello there. This is a symbol chat – it's where you can discuss the asset you're currently looking at, along with everybody else watching the same price movements. Remember, kindness pays itself forward, so don't go breaking Rule 6 of the House Rules on us (or any of the others for that matter).")
                }
            }
        },
        641146: (t, e, i) => {
            "use strict";
            var s = i(918184),
                o = i(991714).openIgnoreUsersDialog,
                n = i(323619).whenVerified,
                a = i(530775),
                r = i(729412).regExpEscape,
                h = i(541962).TVXWindowEvents,
                d = i(411585).appendEllipsis;

            function l(t, e, i, s, o) {
                this._$bar = t, this._value = 0, this._state = "off", this._halt = i, this._tick = s, this._step = this._halt * this._tick / e, this._animations = o
            }

            function c(t, e, s) {
                var o = i(558476);
                this._bridge = t, this._handler = e, this._rooms = s, this.favoritesSettings = o.prototype.getLocalizedJsonSetting("publiccharts.favorites", {}), this._handler(this.getMenu())
            }

            function u(t) {
                this._title = s.t("Onsite Notifications"), this._settingsKey = "messages.show_onsite_notifications", this._eventKey = "messages.toggleonsitenotifications", t ? (this._emailKey = "privatemessages.send_email_notifications", this._emailTitle = s.t("Email Notifications")) : (this._emailKey = "publicchats.send_email_notifications", this._emailTitle = s.t("Email Notifications When I'm Mentioned")), this._isOn = TVSettings.getBool(this._settingsKey, !0), this._isOnEmail = TVSettings.getBool(this._emailKey, !0), h.on(this._eventKey, this._toggle.bind(this))
            }

            function m(t) {
                this._settingsKey = t, this.state = this._getState(), this._updateSettingsListener = this._setFromAnother.bind(this), h.on("chat-sound-control-changed", this._updateSettingsListener), loginStateChange.subscribe(null, this._updateSettingsListener)
            }

            function p(t, e) {
                this.parentWidget = t, this.isParentDependent = e,
                    this.isOn = !1
            }

            function g(t) {
                this.voteSender = t, this.ideas = []
            }
            l.prototype.start = function(t) {
                "running" === this._state && this.stop(), this._transaction = t, this._$bar.css("opacity", "1"), this._$bar.css("background-color", "#18BE8A"), this._state = "running", this._intervalID = setInterval(this.update.bind(this), this._tick)
            }, l.prototype.stop = function() {
                clearInterval(this._intervalID), this._value = 0
            }, l.prototype.update = function() {
                this._value >= this._halt ? this.stop() : "running" === this._state && (this._value += this._step, this._$bar.width(this._value + "%"))
            }, l.prototype.finish = function(t, e) {
                "off" !== this._state && this._transaction === t && (this.stop(), this.transaction = -1, e && this._$bar.css("background-color", "red"), this._state = "off", this._$bar.animate({
                    width: "100%"
                }, this._animations[0]), this._$bar.animate({
                    opacity: "0"
                }, e ? this._animations[2] : this._animations[1], function() {
                    this._$bar.width(0)
                }.bind(this)))
            }, l.prototype.finishOnError = function(t) {
                this.finish(t, !0)
            }, c.prototype.soundSettings = [{
                title: s.t("Sound on Every Message"),
                state: {
                    onMessage: !0,
                    onMessageForUser: !0
                }
            }, {
                title: s.t("Sound on Addressed to Me Messages"),
                state: {
                    onMessage: !1,
                    onMessageForUser: !0
                }
            }, {
                title: s.t("No Sound Notifications"),
                state: {
                    onMessage: !1,
                    onMessageForUser: !1
                }
            }], c.prototype.getMenu = function() {
                var t = [],
                    e = this,
                    n = i(155529),
                    a = i(558476);
                if (this._bridge.private_chat && !this._bridge.standalone && (t = t.concat(this._bridge.privateMenuItems().multiUserActions)).length && t.push({
                        separator: !0
                    }), (t = t.concat(this.soundMenuItems(this.soundSettings, TVSettings.getJSON(this._bridge.private_chat ? "privatemessages.sound" : "chat.sound", m.prototype._default_state)))).push({
                        separator: !0
                    }), this._bridge.standalone || this._bridge.options && this._bridge.options.layoutWithSelect || (this._bridge.private_chat || t.push(this._bridge.chatNotificationControl.onsiteMenuItem()), t.push(this._bridge.chatNotificationControl.emailMenuItem()), t.push({
                        separator: !0
                    })), t.push({
                        title: s.t("Show Chart Snapshot Preview"),
                        icon: {
                            image: "url('/static/images/dialogs/checkbox.png')",
                            offset: TVSettings.getBool("chat.show_snapshot_preview") ? "0 -16px" : void 0
                        },
                        action: function(t) {
                            this._bridge.postMessage("toggle_snaphot_preview")
                        }.bind(this)
                    }), this._bridge.private_chat || this._bridge.standalone || t.push({
                        title: s.t("Show Only Favorite Rooms"),
                        icon: {
                            image: "url('/static/images/dialogs/checkbox.png')",
                            offset: TVSettings.getBool("chat.show_only_favorites") ? "0 -16px" : void 0
                        },
                        action: function(t) {
                            this._bridge.postMessage("toggle_show_only_favorites")
                        }.bind(this)
                    }), t.push({
                        separator: !0
                    }), this._bridge.private_chat && !this._bridge.standalone && t.push(this._bridge.privateMenuItems().hideConversation), t.push({
                        title: d(s.t("Ignored Users")),
                        action: function(t) {
                            o()
                        }
                    }), !this._bridge.standalone) {
                    for (var r, h = (!this._bridge.private_chat && this._bridge._room in this.favoritesSettings), l = 0; l < this._rooms.length; l++)
                        if (this._rooms[l].room_id === this._bridge._room) {
                            r = this._rooms[l];
                            break
                        }
                    if (r) {
                        t.push({
                            separator: !0
                        });
                        var c = n.getLaunchInSeparateWindowAction(e._bridge._room, (function() {
                            return !!e._bridge.private_chat
                        }));
                        this._bridge.private_chat ? t.push(c) : (r.pinned || t.push({
                            title: h ? s.t("Remove This Room from Favorites") : s.t("Add This Room to Favorites"),
                            action: function(t) {
                                this._bridge.postMessage("toggle_favorite_room", t)
                            }.bind(this, this._bridge._room)
                        }), (t = t.concat(a.publicMenuItems(this._bridge._room, this._bridge, this))).push(c), r.pinned || ((r.user_id === user.id || window.user.permissions.can_moderate_public_chats) && t.push({
                            title: d(s.t("Edit Room")),
                            action: function(t) {
                                this._bridge.postMessage("chat_edit_room", this._bridge._room)
                            }.bind(this)
                        }), window.user.permissions.can_moderate_public_chats && t.push({
                            title: s.t("Delete Room"),
                            action: function(t) {
                                this._bridge.postMessage("chat_delete_room", this._bridge._room)
                            }.bind(this)
                        })))
                    }
                }
                return t
            }, c.prototype.update = function() {
                this._handler(this.getMenu(), !0)
            }, c.prototype._radioIcon = "data:image/gif;base64,R0lGODlhBgAGAMIGAIuMjo+QkpOUlrS1tra2uLe4uf///////yH5BAEKAAcALAAAAAAGAAYAAAMQeCVSRyACEiQIVYZhx2NOAgA7", c.prototype.soundMenuItems = function(t, e) {
                return "boolean" == typeof e && (e = s.extend(m.prototype._default_state, {
                    onMessage: e
                })), t.map(function(t) {
                    var i = !0;
                    for (var s in e)
                        if ((s in t.state || !e[s]) && t.state[s] !== e[s]) {
                            i = !1;
                            break
                        }
                    return t.icon = {
                        image: "url(" + this._radioIcon + ")"
                    }, t.icon.offset = i ? {
                        x: 5,
                        y: 5
                    } : {
                        x: -30,
                        y: -30
                    }, t.action = function(e) {
                        this._bridge.postMessage("chat_set_sound_state", {
                            isPrivate: !!this._bridge.private_chat,
                            state: t.state
                        })
                    }.bind(this), t
                }.bind(this))
            }, u.prototype.destroy = function() {
                h.off(this._eventKey, this._toggle.bind(this))
            }, u.prototype._toggle = function(t) {
                this._isOn = "true" === t
            }, u.prototype.onsiteMenuItem = function() {
                var t = TVSettings.getBool(this._settingsKey);
                return t = void 0 !== t ? t : this._isOn, {
                    title: this._title,
                    icon: {
                        image: "url('" + i(508552) + "')",
                        offset: t ? "0 -16px" : void 0
                    },
                    action: function(e) {
                        this._isOn = !t, TradingView.profile && TradingView.profile.$settings.find('input[name="notification_mention_in_chat_onsite"]').prop("checked", this._isOn), TVSettings.setValue(this._settingsKey, this._isOn, {
                            forceFlush: !0
                        })
                    }.bind(this)
                }
            }, u.prototype.emailMenuItem = function() {
                var t = TVSettings.getBool(this._emailKey);
                return t = void 0 !== t ? t : this._isOnEmail, {
                    title: this._emailTitle,
                    icon: {
                        image: "url('" + i(508552) + "')",
                        offset: t ? "0 -16px" : void 0
                    },
                    action: function(e) {
                        this._isOnEmail = !t, TradingView.profile && "privatemessages.send_email_notifications" !== this._emailKey && TradingView.profile.$settings.find('input[name="notification_mention_in_chat_email"]').prop("checked", this._isOnEmail), TVSettings.setValue(this._emailKey, this._isOnEmail, {
                            forceFlush: !0
                        })
                    }.bind(this)
                }
            }, m.prototype._default_state = {
                onMessage: !1,
                onMessageForUser: !0
            }, m.prototype._getState = function(t) {
                var e = s.extend({}, this._default_state),
                    i = TVSettings.getJSON(this._settingsKey, null, t);
                return null !== i && ("boolean" == typeof i ? s.extend(e, {
                    onMessage: i
                }) : s.extend(e, i)), e
            }, m.prototype.set = function(t) {
                this._set(t), TVSettings.setJSON(this._settingsKey, this.state), h.emit("chat-sound-control-changed")
            }, m.prototype._setFromAnother = function() {
                this._set(this._getState(!0))
            }, m.prototype._set = function(t) {
                this.state = s.extend({}, this._default_state, t)
            }, m.prototype.destroy = function() {
                this._updateSettingsListener && (h.off("chat-sound-control-changed", this._updateSettingsListener), loginStateChange.unsubscribe(null, this._updateSettingsListener))
            }, p.prototype.appendInput = function(t) {
                this._$searchInputWrap = s('<div class="msg-input-wrap js-hidden">').appendTo(t), this._$searchInput = s('<div class="msg-input">').appendTo(this._$searchInputWrap), this._$searchInputText = s('<input type="text" placeholder="' + s.t("Find existing chat") + '"></textarea>').appendTo(this._$searchInput), this._$searchInputReset = s('<a class="input-reset js-hidden">').appendTo(this._$searchInput);
                var e = this;
                this._$searchInputText.on("keydown", (function(t) {
                    if (13 === t.which || 38 === t.which || 40 === t.which) return !1
                })).on("keyup", (function(t) {
                    var i = e._$searchInputText.val(),
                        o = new RegExp(i.split("").map(r).join(".*"), "i");
                    if (27 === t.which) "" === e._$searchInputText.val() && (e.isOn = !1, e._$searchInputWrap.addClass("js-hidden"), e.parentWidget.resize(), e._$searchButton.removeClass("active"), e.newRoom ? (e.parentWidget._scroll.animateTo(e.newRoom.position().top), delete e.newRoom) : e.parentWidget._scroll.restore()), e._$searchInputText.val(""), e.showRooms(), e._$searchInputReset.addClass("js-hidden");
                    else {
                        if (e.hideRooms(), 0 === e._$searchInputText.val().length) return e._$searchInputReset.addClass("js-hidden"), void e.showRooms();
                        e._$searchInputReset.removeClass("js-hidden"), e.parentWidget._scroll.scrollToStart(), e._$data.find(".title").each((function() {
                            o.test(s(this).text()) && e.canShowRoom(s(this).parent()) && s(this).parent().removeClass("js-hidden")
                        }))
                    }
                })), this._$searchInputReset.on("click", (function(t) {
                    e._$searchInputText.val(""), e._$searchInputReset.addClass("js-hidden"), e.showRooms(), e._$searchInputText.focus()
                }))
            }, p.prototype.appendButton = function(t) {
                var e = this;
                this._$searchButton = s('<a class="button apply-common-tooltip" title="' + s.t("Find existing chat") + '" data-role="button" data-name="search">').append(s(i(125955)).attr({
                    width: 17,
                    height: 17
                })).appendTo(t), this._$searchButton.on("click", (function(t) {
                    e.isOn ? (e.isOn = !1, e._$searchButton.removeClass("active"), e._$searchInputWrap.addClass("js-hidden"), e._$searchInputText.val(""), e._$searchInputReset.addClass("js-hidden"), e.showRooms(), e.parentWidget.resize(), e.newRoom ? (e.parentWidget._scroll.animateTo(e.newRoom.position().top), e.newRoom = "") : e.parentWidget._scroll.restore()) : (e.isOn = !0, e._$searchButton.addClass("active"), e.parentWidget._scroll.save(), e._$searchInputWrap.removeClass("js-hidden"), e.parentWidget.resize(), e._$searchInputText.focus(), e._onOpenCallback && e._onOpenCallback())
                }))
            }, p.prototype.setRoomList = function(t) {
                this._$data = t
            }, p.prototype.setOpenCallback = function(t) {
                this._onOpenCallback = t
            }, p.prototype.hideRooms = function() {
                this._$data.children().addClass("js-hidden")
            }, p.prototype.showRooms = function() {
                var t = this;
                this._$data.children().each((function() {
                    t.canShowRoom(s(this)) && s(this).removeClass("js-hidden")
                }))
            }, p.prototype.canShowRoom = function(t) {
                return !t.data("hidden-conversation")
            }, p.prototype.getButton = function() {
                return this._$searchButton
            }, p.prototype.hideInput = function() {
                this._$searchButton.removeClass("active"), this._$searchInputWrap.addClass("js-hidden"), this._$searchInputText.val(""), this._$searchInputReset.removeClass("js-hidden"), this.showRooms(), this.parentWidget.resize()
            }, p.prototype.getInputHeight = function() {
                return this._$searchInputWrap.hasClass("js-hidden") ? 0 : this._$searchInputWrap.outerHeight()
            }, p.prototype.isOpen = function() {
                return this.isOn
            }, p.prototype.setNewRoom = function(t) {
                this.newRoom = t
            }, g._likesMonitoringModel = null, g._createLikesMonitoringModelIfNeeded = function() {
                null === g._likesMonitoringModel && (g._likesMonitoringModel = a.makePublicModel())
            }, g.getChartsHandler = function() {
                g._createLikesMonitoringModelIfNeeded();
                var t = g._likesMonitoringModel;
                return new g(t.voteForChart.bind(t))
            }, g.getMessagesSnapshotsHandler = function() {
                g._createLikesMonitoringModelIfNeeded();
                var t = g._likesMonitoringModel;
                return new g(t.voteForMessageWithSnapshot.bind(t))
            }, g.prototype.getIdeaByID = function(t, e) {
                for (var i = 0; i < this.ideas.length; i++)
                    if (this.ideas[i].id === t) return e ? i : this.ideas[i];
                return !1
            }, g.prototype.addIdea = function(t, e, i, o, n) {
                var a = this.getIdeaByID(e);
                a ? a.elements.push(t) : (a = new g.Idea(e, i, o, t, n), this.ideas.push(a)), s(t).on("click", this.onClickUpdateVote.bind(this, a)), a.updateView()
            }, g.prototype.onClickUpdateVote = function(t) {
                if (window.user.id) {
                    var e = this;
                    n({
                        showDialog: !0,
                        source: "Widgetbar vote"
                    }).done((function() {
                        if (!(t.blocked || t.voteStatus < 0)) {
                            t.blocked = !0;
                            var i = 1 - t.voteStatus;
                            e.voteSender(t, i, (function(s) {
                                e.onData(t, i, s.score)
                            }))
                        }
                    }))
                } else runOrSignIn(function() {
                    this.voteSender(t, 1)
                }.bind(this), {
                    source: "Widgetbar vote",
                    verifiedPhoneRequired: !0
                })
            }, g.prototype.onData = function(t, e, i) {
                t.likes = i, t.voteStatus >= 0 && (t.voteStatus = e, t.blocked = !1), t.updateView(!1)
            }, g.prototype.destroy = function() {}, g.Idea = function(t, e, i, s) {
                this.id = t, this.likes = e, this.voteStatus = i, this.elements = [s]
            }, g.Idea.prototype.updateView = function(t) {
                var e = s(this.elements);
                e.toggleClass("js-has-likes", !!this.likes), setTimeout(function() {
                    e.find(".js-likes-counter").text(this.likes ? this.likes : "")
                }.bind(this), 75), e.toggleClass("active", !!this.voteStatus), t && (e.removeClass("js-like-highlight"), setTimeout((function() {
                    e.addClass("js-like-highlight")
                }), 10))
            }, e.ChatProgressBar = l, e.ChatSettingsDialog = c, e.ChatNotificationControl = u, e.ChatSoundControl = m, e.ChatRoomListSearchFilter = p, e.ChatLikesHandler = g
        },
        119160: (t, e, i) => {
            "use strict";
            i.d(e, {
                showDialog: () => a
            });
            var s = i(464161),
                o = (i(927394), i(228741), i(550846), i(682306), i(918184)),
                n = i(500466);

            function a(t, e, i, a) {
                const r = (0, s.createDialog)({
                        type: "modal",
                        width: 500,
                        title: t ? o.t("Edit chat room") : o.t("Create New Public Chat"),
                        content: n.render(`\n\n\t\t\t\t<div class="tv-control-fieldset js-room-title-wrap">\n\t\t\t\t\t<label class="tv-control-fieldset__label tv-control-fieldset__label--color_dark tv-control-fieldset__label--width_small">\n\t\t\t\t\t\t${o.t("Room title")+"*:"}\n\t\t\t\t\t</label>\n\t\t\t\t\t<span class="tv-control-fieldset__value tv-control-fieldset__value--width_big">\n\t\t\t\t\t\t<input name="room-title" type="text" value="${t?TradingView.clean(t.title):""}" class="tv-control-fieldset__value-control tv-control-input" required>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="tv-control-fieldset js-room-purpose-wrap">\n\t\t\t\t\t<label class="tv-control-fieldset__label tv-control-fieldset__label--color_dark tv-control-fieldset__label--width_small">\n\t\t\t\t\t\t${o.t("Room purpose")+"*:"}\n\t\t\t\t\t</label>\n\t\t\t\t\t<span class="tv-control-fieldset__value tv-control-fieldset__value--width_big">\n\t\t\t\t\t\t<textarea name="room-desc" type="text" class="tv-control-fieldset__value-control tv-control-textarea" required>${t?TradingView.clean(t.description):""}</textarea>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="tv-control-fieldset tv-control-fieldset__hint" style="text-align: justify;">\n\t\t\t\t\t<p class="tv-control-fieldset__text">\n\t\t\t\t\t\t${o.t("IMPORTANT: You are about to create a chat that will be visible to all users. Before you continue, please note these 5 requirements to avoid your chat getting deleted and -in severe cases- you getting banned:")}\n\t\t\t\t\t</p>\n\t\t\t\t\t<ol class="tv-list tv-list--font-popup tv-list--numeric">\n\t\t\t\t\t\t<li>${o.t("Provide a clear Search the existing chats and make sure you are not creating a duplicate")}</li>\n\t\t\t\t\t\t<li>${o.t("Title and Purpose that makes sense and is related to trading")}</li>\n\t\t\t\t\t\t<li>${o.t("Avoid contentious or offensive language when describing your chat")}</li>\n\t\t\t\t\t\t<li>${o.t("Use the correct language for the chat, it should align with the language version of TradingView")}</li>\n\t\t\t\t\t\t<li>${o.t("Chats should attract at least 5 users and 1 daily message continuously")}</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<p class="tv-control-fieldset__text">\n\t\t\t\t\t\t${o.t("These are the minimal requirements for viable chats. For tips on how to create truly awesome ones, please read {link_start}this article{link_end} carefully.").format({link_start:'<a href="http://blog.tradingview.com/?p=2113" target="_blank">',link_end:"</a> "})}\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t`),
                        destroyOnClose: !0,
                        actions: [{
                            name: "ok",
                            type: "success",
                            text: o.t("Ok"),
                            key: 13
                        }, {
                            name: "cancel",
                            type: "default",
                            text: o.t("Cancel"),
                            method: "close"
                        }]
                    }).on("action:ok", (function(s) {
                        var n = function(t) {
                                if (t.error) {
                                    s.$content.find(`[name="${t.input_name}"]`).tvControlError("add", {
                                        id: t.id,
                                        message: t.error
                                    }).tvControlError("render")
                                } else s.close(), a(t)
                            },
                            r = h.val(),
                            l = d.val(),
                            c = !1;
                        r.length || (h.tvControlError("add", {
                            id: "room-title",
                            message: o.t("Room title is required")
                        }).tvControlError("render"), c = !0), l.length || (d.tvControlError("add", {
                            id: "room-desc",
                            message: o.t("Room purpose is required")
                        }).tvControlError("render"), c = !0), c || (t ? i(t.room_id, r, l, n) : e(r, l, null, n))
                    })).open(),
                    h = r.$content.find('[name="room-title"]'),
                    d = r.$content.find('[name="room-desc"]');
                h.tvControlError(), d.tvControlError(), h.on("input", () => h.tvControlError("remove", {
                    id: "room-title"
                }).tvControlError("render")), d.on("input", () => d.tvControlError("remove", {
                    id: "room-desc"
                }).tvControlError("render"))
            }
        },
        929879: (t, e, i) => {
            "use strict";
            i.d(e, {
                getUsernameHintList: () => a,
                getUserChatSuggestListHandler: () => r,
                destroyUsernameHintList: () => h
            });
            var s = i(667294),
                o = i(973935),
                n = i(416282);
            async function a(t) {
                const e = await Promise.all([i.e(45066), i.e(11216), i.e(80235), i.e(96911)]).then(i.bind(i, 480235)),
                    n = document.createElement("div");
                return o.render(s.createElement(e.UsernameHintList, t), n), n
            }
            async function r(t) {
                return (await Promise.all([i.e(45066), i.e(11216), i.e(80235), i.e(96911)]).then(i.bind(i, 480235))).getUserChatSuggestListHandler()
            }

            function h(t) {
                o.unmountComponentAtNode((0, n.ensureNotNull)(t))
            }
        },
        323009: (t, e, i) => {
            "use strict";
            var s = i(765066),
                o = i(896276),
                n = i(918184),
                a = i(500466);
            i(405737), i(474112);
            var r = i(598984),
                h = i(120220).t,
                d = i(558476),
                l = i(155529),
                c = i(641146),
                u = i(929879).getUsernameHintList,
                m = i(454281).Action,
                p = i(417515).ContextMenuManager,
                g = i(641242),
                _ = i(980225),
                v = i(282143).newPrivateChatDialog,
                f = i(607562).SidebarCustomScroll,
                b = i(152107).bindPopupMenu,
                y = i(530775),
                w = i(279407),
                C = w.showConfirm,
                R = w.showRename,
                M = w.showWarning,
                S = i(773292);
            const {
                NotificationSettings: x
            } = i(692837);
            var $ = i(524926),
                T = i(7827),
                k = i(541962).TVXWindowEvents,
                I = i(238342).trackChatEvent,
                D = i(195355).mobiletouch,
                B = i(152946).linking;
            i(73914);

            function E(t) {
                this._bridge = t, this._container = t.$body, this._visible = !1, this._notificationCount = 0, this._init_history_loaded = !1, this._unreadFlag = !1, this._model = W(), this._model.roomAdded().subscribe(this, this._onRoomAdded), this._model.roomChanged().subscribe(this, this._onRoomChanged), this._model.roomDeleted().subscribe(this, this._onRoomDeleted), this._model.roomsChanged().subscribe(this, this._onRoomsChanged), this._model.otherRoomMessagesRead().subscribe(this, this._onRoomMessagesRead), this._model.messageReceivedInOtherRoom().subscribe(this, this._onChatMessage), this._chatMaximized = new s, this.layoutWithSelect() || this._chatMaximized.subscribe((function(t) {
                    TVSettings.setValue("privatemessages.chatmaximized", t)
                })), this._standalone = !!t.standalone || !!(t.options || {}).standalone, this._layoutWithSelect = !!t.layoutWithSelect || !!(t.options || {}).layoutWithSelect, this._chatNotificationControl = new c.ChatNotificationControl(!0), this.layoutWithSelect() ? (d.prototype.prepareLayoutWithSelect.call(this, !0, this._$notAuthMessage()), this.roomChange = new o) : this.prepareLayout(), 0 !== this._model.getRooms().length && this._onRoomsChanged(this._model.getRooms(), []), this.connect(), this.resize(), t.onMessage && t.onMessage(this.onBridgeMessage.bind(this)), t.visible.subscribe(function(e) {
                    if (this._visible = e, e) {
                        this._bridge.postMessage("private_chat_visible"), this.resize();
                        var i = TVSettings.getValue("privatemessages.activechat", "");
                        this._visibilityToggled ? this._visibilityToggled = !1 : i && this.getRoomById(i) && this.openChat(i), this._model.getRooms().forEach(function(t) {
                            t._notifyFired && (n("#msg-item-" + t.room_id).highlight(1), this.isCurrentRoom(t.room_id) && n("#msg-item-" + t.room_id + " .counter").text("0").removeClass("active")), t._notifyFired = !1
                        }.bind(this)), t.notify(null, {
                            stopHighlightTab: !0,
                            force: !0
                        }), this.updateNotifications()
                    } else this._bridge.postMessage("private_chat_hidden")
                }.bind(this), {
                    callWithLast: !0
                }), t.height && t.height.subscribe(this.onWindowResize.bind(this)), t.width && t.width.subscribe(this.resizeChat.bind(this)), TradingView.messagesWidget = this, setInterval(this.checkUnreadRooms.bind(this), 1e3)
            }
            let A;

            function W() {
                return A || (A = y.makePrivateModel()), A
            }

            function O(t, e, i, s, o) {
                if (i === window.user.id) return;
                const n = function(t, e) {
                    for (var i in t) {
                        var s = t[i].members_info;
                        if (2 === s.length && (s[0].user_id === e || s[1].user_id === e)) return t[i]
                    }
                    return null
                }(t.getRooms(), i);
                var a = function(i) {
                    t.getRoomInfo(i, (function(o) {
                        I(o, e), t.sendMessageToRoom(i, e, {}, null, (function(t) {
                            var e = t.error || t.warning;
                            if (e) {
                                var o = t.title;
                                M({
                                    title: t.error ? o || h("Error") : o || h("Warning"),
                                    html: e
                                })
                            }
                            "function" == typeof s && s(i)
                        }), (function() {
                            M({
                                title: h("Error"),
                                text: h("Unexpected error")
                            })
                        }))
                    }))
                };
                "function" == typeof o && o(), n ? a(n.room_id) : t.createRoom("", "", [i], (function(t) {
                    t.error ? M({
                        title: t.errorTitle || h("Error"),
                        html: t.error
                    }) : a(t.room.room_id)
                }))
            }
            E.prototype._emitXWindowOnNewMessagesRead = function(t) {
                    this._xWindowNewMessagesReadBuffer ? this._xWindowNewMessagesReadBuffer.push(t) : (this._xWindowNewMessagesReadBuffer = [t], setTimeout(function() {
                        var t = this._xWindowNewMessagesReadBuffer.join(":");
                        k.emit("messages.newmessagesread", t), delete this._xWindowNewMessagesReadBuffer
                    }.bind(this), 500))
                }, E.prototype.onBridgeMessage = function(t, e) {
                    "private_message_read" === t && this._emitXWindowOnNewMessagesRead(e.id)
                }, E.prototype.updateNotifications = function() {
                    var t = this._$data.find(".counter.active").length;
                    0 === t && (this._notificationCount = 0), this._bridge.notify(1, {
                        notificationValue: t,
                        clear: !t,
                        force: !0,
                        highlightTab: !1
                    })
                }, E.prototype.checkUnreadRooms = function() {
                    this._$data.find(".counter.active").length ? this._unreadFlag || (this._unreadFlag = !0, S.setTabIcon(S.TAB_ICON_URLS.UNREAD_MESSAGES)) : this._unreadFlag && (this._unreadFlag = !1, S.setTabIcon(S.TAB_ICON_URLS.DEFAULT))
                }, E.prototype.prepareLayout = function() {
                    var t = this;
                    this._$widget = n('<div class="tv-messages">').appendTo(this._container), this._$addChatButton = n('<a class="button apply-common-tooltip" title="' + h("Select user to start new chat with") + '" data-role="button" data-name="new-chat">').append(n(i(157191)).attr({
                        width: 17,
                        height: 17
                    })).click((function(t) {
                        runOrSignIn(v, {
                            source: "Private message dialog",
                            verifiedPhoneRequired: !0
                        })
                    })).appendTo(this._bridge.$headerspace), this._searchFilter = new c.ChatRoomListSearchFilter(this, !0), this._searchFilter.appendButton(this._bridge.$headerspace), this._searchFilter.appendInput(this._$widget), this._$dataWrap = n('<div class="msg-data-wrap">').appendTo(this._$widget), this._$dataWrap.on("contextmenu", (function(t) {
                        t.target.classList.contains("msg-data-wrap") && t.preventDefault()
                    })), this._$data = n('<div class="msg-data">').appendTo(this._$dataWrap), this._$data.on("click", ".msg-item", (function(e) {
                        t._searchFilter && t._searchFilter.isOpen() && t._searchFilter.setNewRoom(n("#msg-item-" + n(this).data("room"))), t.openChat(n(this).data("room")), e.preventDefault()
                    })).on("contextmenu", ".msg-item", (function(e) {
                        e.preventDefault(), t.showRoomContextMenu(e, n(this).data("room"))
                    })), this._searchFilter.setRoomList(this._$data), this._searchFilter.setOpenCallback((function() {
                        t._model.loadMoreRooms(1e3)
                    })), is_authenticated || this._$notAuthMessage().appendTo(this._$data), this._scroll = new f(this._$dataWrap[0], this._$data[0]), this._scroll.scrolltoend.subscribe(this, (function() {
                        this._model.loadMoreRooms()
                    }))
                }, E.prototype._onRoomAdded = function(t) {
                    if (!this._model.ignoredUsers().includes(t.user_id)) {
                        this.addRoom(t, !0);
                        var e = t.room_id;
                        this._roomToBeOpenedWhenAdded && this._roomToBeOpenedWhenAdded === e && (this._roomToBeOpenedWhenAdded = null, this._scroll.animateTo(n("#msg-item-" + e).position().top), this.openChat(e)), this.isStandalone() && this._bridge.notify(null, {
                            roomsCount: this._model.getRooms().length
                        })
                    }
                }, E.prototype._onRoomChanged = function(t) {
                    this._model.ignoredUsers().includes(t.user_id) || this.setRoomTitleById(t.room_id, this.roomTitle(t))
                }, E.prototype._onRoomDeleted = function(t) {
                    n("#msg-item-" + t.room_id).remove()
                }, E.prototype._onRoomsChanged = function(t, e) {
                    if (window.is_authenticated)
                        if (this._$data.empty(), t.length) {
                            this.isStandalone() && this._bridge.notify(null, {
                                roomsCount: t.length
                            });
                            var i = 0 === e.length && 0 !== t.length,
                                s = 0;
                            if (t.forEach((function(t) {
                                    s += this.addRoom(t, !1, i)
                                }), this), s) {
                                var o = this.layoutWithSelect() && this._bridge.activeRoom ? this._bridge.activeRoom : TVSettings.getValue("privatemessages.activechat", "");
                                i && this._visible && o && this.getRoomById(o) && this.openChat(o), i || !o || this.getRoomById(o) || this.closeChat()
                            } else this.appendPlaceholder("hidden")
                        } else this.isStandalone() ? this._bridge.notify(null, {
                            roomsCount: 0
                        }) : this.appendPlaceholder("empty");
                    else this.isStandalone() && this._bridge.notify(null, {
                        roomsCount: 0
                    })
                }, E.prototype._onChatMessage = function(t, e, i) {
                    var s = this;
                    if (!this._model.ignoredUsers().includes(t.user_id)) {
                        var o = n("#msg-item-" + e);
                        o.prependTo(this._$data), !t.type && this._model.isRoomHidden(e) && o.hasClass("js-hidden") && this._showRoom(e, o);
                        var a = o.find(".desc");
                        a.find(".last-message").text(t.username + ": " + T.removeBBCodes(t.text));
                        var r = a.find("time");
                        r.length ? $.jQueryCompatibleDestroy(r) : (r = n("<time>")).insertAfter(o.find(".js-last-message")), $.jQueryCompatibleAgoDateFormatter(r, new Date(t.time));
                        var h = t.user_id !== window.user.id,
                            d = this._model.getRoomById(e),
                            l = new x;
                        l.ready.then((function() {
                            var n = l.data.notification_popup;
                            if (h && (!s.isCurrentRoom(e) || !s._visible)) {
                                var a, r;
                                if (h && !i && !t.type && !s.isStandalone() && !s.layoutWithSelect() && n && document.hidden) d.members_info.length > 2 ? (r = s.roomTitle(d), a = t.username + ": " + T.removeBBCodes(t.text)) : (r = t.username, a = T.removeBBCodes(t.text)), _.show(r, a, t.user_pic);
                                var c = s._$data.find('a[data-room="' + e + '"] .counter'),
                                    u = parseInt(c.text(), 10);
                                c.addClass("active").text(u + 1), s._notificationCount++, o.highlight(1), s.updateNotifications();
                                var m = TVSettings.getJSON("privatemessages.sound", null),
                                    p = t.text && T.removeBBCodes(t.text).indexOf("@" + window.user.username) > -1;
                                h && !i && (!m || m.onMessage || p && m.onMessageForUser) && g.play("chat/popup")
                            }
                            d._notifyFired || s._visible || (s.updateNotifications(), d._notifyFired = !0)
                        }))
                    }
                }, E.prototype.connect = function() {
                    this._onXWindowChatOpen = this.onXWindowChatOpen.bind(this), this._onXWindowChatStatus = this.onXWindowChatStatus.bind(this), this._onXWindowChatVisibility = this.onXWindowChatVisibility.bind(this), this._onXWindowNewMessagesRead = this.onXWindowNewMessagesRead.bind(this), k.on("messages.newmessagesread", this._onXWindowNewMessagesRead), this.isStandalone() || (k.on("messages.openchat", this._onXWindowChatOpen), k.on("messages.chatstatus", this._onXWindowChatStatus), k.on("messages.chatvisibility", this._onXWindowChatVisibility))
                }, E.prototype.onXWindowNewMessagesRead = function(t) {
                    this._bridge.postMessage("private_chat_msgs_read", {
                        idString: t
                    })
                }, E.prototype.onXWindowChatOpen = function(t) {
                    if (this._model.getRooms().length) {
                        var e = t.indexOf(":"),
                            i = t.indexOf("@"),
                            s = t.substr(e + 1, i - e - 1);
                        this.openChat(s, !0)
                    }
                }, E.prototype.onXWindowChatStatus = function(t) {
                    if (this._model.getRooms().length) {
                        var e = t.split(":")[1];
                        n("#msg-item-" + e + " .counter").text("0").removeClass("active"), this.updateNotifications()
                    }
                }, E.prototype.onXWindowChatVisibility = function(t) {
                    if (this._model.getRooms().length) {
                        var e = t.split(":")[0],
                            i = t.split(":")[1];
                        this.getRoomById(e) && "hide" === i && this._hideRoom(e, !0)
                    }
                }, E.prototype.destroy = function() {
                    this._chatWidget && (this._chatWidget.destroy(), this._chatWidget = null), this._model.roomAdded().unsubscribe(this, this._onRoomAdded), this._model.roomChanged().unsubscribe(this, this._onRoomChanged), this._model.roomDeleted().unsubscribe(this, this._onRoomDeleted), this._model.roomsChanged().unsubscribe(this, this._onRoomsChanged), this._model.otherRoomMessagesRead().unsubscribe(this, this._onRoomMessagesRead), this._model.messageReceivedInOtherRoom().unsubscribe(this, this._onChatMessage), this._model.destroy(), this._model = null, k.off("messages.openchat", this._onXWindowChatOpen), k.off("messages.chatstatus", this._onXWindowChatStatus), k.off("messages.chatvisibility", this._onXWindowChatVisibility), k.off("messages.newmessagesread", this._onXWindowNewMessagesRead)
                }, E.prototype.removePlaceholder = function(t) {
                    t && t.find(".js-placeholder-message").remove(), this.isStandalone() ? (this._bridge.$header.show(), this._bridge.$body.find(".js-placeholder-message").remove()) : this._$data.find(".js-placeholder-message").remove()
                }, E.prototype.appendPlaceholder = function(t, e) {
                    var i, s;
                    e ? s = e : this.isStandalone() ? (this._bridge.$header.hide(), s = this._bridge.$body) : s = this._$data, "empty" === t ? i = h("You have no private messages yet") : "hidden" === t && (s.is(".chat-body") && n(document.body).addClass("no-chats"), i = h("You have no new messages!")), s.append('<div class="msg-empty tv-widget-empty-message js-placeholder-message">' + i + "</div>")
                },
                E.prototype.getRoomById = function(t) {
                    return this._model.getRoomById(t)
                }, E.prototype.roomTitle = function(t, e) {
                    if (!t) return "";
                    if (t.title) {
                        var i = TradingView.clean(t.title);
                        return e ? "<strong>" + i + "</strong>" : i
                    }
                    var s, o = [];
                    t.members_info.forEach((function(t) {
                        t.username !== window.user.username && o.push(t.username)
                    }));
                    var n = o.slice(0, 4);
                    return e && (n = n.map((function(t) {
                        return "<strong>" + TradingView.clean(t) + "</strong>"
                    }))), s = n.join(", "), o.length > 4 && (s += ", +" + (o.length - 4)), s
                }, E.prototype.getRoomTitleById = function(t, e) {
                    return this.roomTitle(this.getRoomById(t), e)
                }, E.prototype.setRoomTitleById = function(t, e) {
                    e = TradingView.clean(e), this._bridge.setTitle(e), n("#msg-item-" + t + " .title").text(e)
                }, E.prototype.addRoom = function(t, e, i) {
                    var s = this._model.isRoomHidden(t.room_id);
                    s && t.new_msgs && (this._model.removeHiddenRoom(t.room_id), s = !1);
                    var o = t.last_message ? T.removeBBCodes(TradingView.clean(t.last_message)) : "",
                        r = {
                            roomId: t.room_id,
                            isHidden: s,
                            title: TradingView.clean(this.roomTitle(t)),
                            lastMessage: o
                        },
                        h = n(a.render('<a href="#" data-room="{{roomId}}"{{#isHidden}} data-hidden-conversation="true"{{/isHidden}} id="msg-item-{{roomId}}" class="msg-item{{#isHidden}} js-hidden{{/isHidden}}"><div class="title">{{title}}</div><div class="desc"><span class="last-message js-last-message">{{lastMessage}}</span></div><div class="counter">0</div></a>', r));
                    if (o.length) {
                        var d = n("<time>");
                        d.insertAfter(h.find(".js-last-message")), $.jQueryCompatibleAgoDateFormatter(d, new Date(1e3 * t.updated || Date.now()))
                    }
                    this.isCurrentRoom(t.room_id) && h.addClass("active");
                    for (var l, c = n('<div class="userpics"></div>').prependTo(h), u = 0, m = 0; m < t.members_info.length; m++)(l = t.members_info[m]).username !== window.user.username && u < 4 && (u++, n('<i class="userpic userpic-' + u + (l.online ? " online" : "") + '"><img src="' + l.user_pic + '"/></i>').appendTo(c));
                    return c.addClass("layout-" + u), e ? h.prependTo(this._$data).highlight(1) : h.appendTo(this._$data), t.new_msgs && !this.isCurrentRoom(t.room_id) && (h.find(".counter").addClass("active").text(t.new_msgs), this._notificationCount += t.new_msgs, i && (t._notifyFired = !0), this.updateNotifications()), this._$data.find(".js-placeholder-message").remove(), s ? 0 : 1
                }, E.prototype._onRoomMessagesRead = function(t) {
                    this.markChatAsRead(t.room_id), this.updateNotifications()
                }, E.prototype.markChatAsRead = function(t) {
                    var e = n("#msg-item-" + t + " .counter"),
                        i = parseInt(e.text(), 10);
                    return e.text("0").removeClass("active"), i && (this._notificationCount = Math.max(0, this._notificationCount - i)), i
                }, E.prototype.openChat = function(t, e) {
                    this._$data.find("a").removeClass("active"), n("#msg-item-" + t).addClass("active"), this.markChatAsRead(t), (this._visible || e) && this.updateNotifications(), this.isCurrentRoom(t) || (this.layoutWithSelect() || this.flipWidgets(), this.isStandalone() && k.emit("messages.chatstatus", +new Date + ":" + t), this._bridge.setTitle(this.getRoomTitleById(t)), this.layoutWithSelect() && this._$select && this._$select.html(this.getRoomTitleById(t, !0)), this.removePlaceholder(this._$chat), this.closeChat(), this._createChatWidget(t, e), this._chatWidget.resize(), this.resize(),
                        this.isStandalone() || TVSettings.setValue("privatemessages.activechat", t), this.layoutWithSelect() || this.toggleMaximize(TVSettings.getBool("privatemessages.chatmaximized")), this.layoutWithSelect() && this.roomChange.fire(t))
                }, E.prototype.membersFilter = function(t) {
                    return t.username !== window.user.username
                }, E.prototype._membersCount = function(t) {
                    var e = this._model.getRoomById(t);
                    return e ? e.members_info.length > 2 ? e.members_info.filter(this.membersFilter).length : "" : 0
                }, E.prototype._createChatWidget = function(t, e) {
                    var i = this.layoutWithSelect() && this._bridge.$body ? this._bridge.$body : this._$chat;
                    this._$chatWidgetContainer = n('<div class="msg-window" id="msg-window-' + t + '" data-room="' + t + '"></div>').appendTo(i), this._$chatBody = n('<div class="msg-window-body chat-page"></div>').appendTo(this._$chatWidgetContainer), this.layoutWithSelect() && this._$chatBody.css("height", "100%"), this._createUsernameHint(t), this.symbolLinking = B.symbol.spawn(), this.intervalLinking = B.interval.spawn();
                    var s = this._model.getRoomById(t),
                        o = n.extend(!0, {}, this._bridge.options);
                    o.hideMaximize = o.hideMaximize || this.layoutWithSelect(), this._chatBridge = {
                        $body: this._$chatBody,
                        _room: t,
                        properties: {
                            value: function() {
                                return {
                                    room: t
                                }
                            }
                        },
                        options: o,
                        visible: this._bridge.visible,
                        $headerspace: this._bridge.$headerspace,
                        $header: this._bridge.$header,
                        private_chat: !0,
                        privateMenuItems: function() {
                            return this.getPrivateRoomActions(s)
                        }.bind(this),
                        getChartWidget: this._bridge.getChartWidget,
                        postMessage: this._bridge.postMessage,
                        onMessage: this._bridge.onMessage,
                        chatNotificationControl: this._chatNotificationControl,
                        getChartWidgetCollection: this._bridge.getChartWidgetCollection,
                        addPeople: this.addPeople.bind(this),
                        membersCount: this._membersCount.bind(this, t),
                        hideDetach: this._standalone,
                        standalone: this._standalone || this.layoutWithSelect(),
                        toggleMaximize: this.toggleMaximize.bind(this),
                        maximized: this._chatMaximized.readonly(),
                        symbol: this.symbolLinking,
                        interval: this.intervalLinking,
                        isAuthor: s.is_author
                    }, this.isStandalone() || e || (this._chatBridge.xWindowDataSync = function(e) {
                        k.emit("messages.openchat", +new Date + ":" + t + "@" + JSON.stringify(e))
                    }), this._chatWidget = new l(this._chatBridge), D || this.layoutWithSelect() || this._$chat.find(".message-input").focus()
                }, E.prototype.toggleMaximize = function(t) {
                    if ("boolean" != typeof t) t = !this._chatMaximized.value();
                    else if (t === this._chatMaximized.value()) return;
                    this._$chat.toggleClass("msg-chat-maximized", t), this._chatMaximized.setValue(t), this._chatWidget.resize()
                }, E.prototype._isCurrentUserAuthor = function(t) {
                    var e = this.getRoomById(t || this._currentRoom());
                    return window.is_authenticated && e && e.is_author
                }, E.prototype._getHintListOptions = function() {
                    return {
                        container: this._$chatWidgetContainer.parent().parent()[0],
                        input: this._$inputText[0],
                        fullBorder: !0,
                        simpleMode: !0,
                        className: r.userNameHintList,
                        closeOnMouseOutClick: !0,
                        onMouseDownOutside: function() {
                            this._$inputText.val("")
                        }.bind(this),
                        onItemSelected: function(t) {
                            this.addNewRecipient(t)
                        }.bind(this)
                    }
                }, E.prototype._createUsernameHint = function(t) {
                    var e = this._isCurrentUserAuthor(t) || window.user.is_moderator || window.user.is_staff;
                    if (this._$chatMembers = n(a.render('<div class="msg-members">{{#canEditMembers}}<div class="msg-input-wrap js-hidden"><div class="msg-input"><textarea placeholder="{{ placeholderText }}"></textarea></div></div>{{/canEditMembers}}<div class="msg-chat-members{{#canEditMembers}} msg-chat-members--height_decreased{{/canEditMembers}}"></div><div class="msg-username-hint-actions{{^canEditMembers}} msg-username-hint-actions--one-button{{/canEditMembers}}">{{#canEditMembers}}<a class="_tv-button cancel">' + h("Cancel") + '</a><a class="_tv-button ok">' + h("OK") + '</a>{{/canEditMembers}}{{^canEditMembers}}<a class="_tv-button cancel">' + h("Close", {
                            context: "input"
                        }) + "</a>{{/canEditMembers}}</div></div>", {
                            canEditMembers: e,
                            placeholderText: h("Add people to this chat...")
                        })), this._$chatMembers.appendTo(this._$chatBody), this._$inputWrap = this._$chatMembers.find(".msg-input-wrap"), this._$input = this._$chatMembers.find(".msg-input"), this._$inputText = this._$chatMembers.find("textarea"), this._$chatMembersContent = this._$chatMembers.find(".msg-chat-members"), this._$membersActions = this._$chatMembers.find(".msg-username-hint-actions"), this._$chatHeadingHeaderspace = this._bridge.$headerspace, e) {
                        var i = this;
                        u(this._getHintListOptions()).then((function(t) {
                            var e = i._$chatWidgetContainer.parent().parent();
                            n(t).appendTo(e)
                        }))
                    }
                    if (e) {
                        var s = this;
                        this._$chatMembersContent.on("click", ".remove", (function(t) {
                            return t.stopPropagation(), t.preventDefault(), s.removeNewRecipient(n(this).parent().data("id")), s.syncDeleteButtonVisibility(), !1
                        }))
                    }
                    this._$membersActions.on("click", ".ok", function() {
                        var t = this._$membersActions.find(".ok");
                        t.hasClass("i-disabled") || (t.addClass("i-disabled"), this.saveRecipients(this.getCurrentRecipients()).then((function() {
                            t.removeClass("i-disabled")
                        })))
                    }.bind(this)), this._$membersActions.on("click", ".cancel", function() {
                        this._$chatHeadingHeaderspace.find("#add-people").removeClass("active"), this._$inputWrap.addClass("js-hidden"), this._$chatMembers.hide()
                    }.bind(this))
                }, E.prototype.addPeople = function() {
                    var t = this._$chatHeadingHeaderspace.find("#add-people");
                    t.hasClass("active") ? (t.removeClass("active"), this._$inputWrap.addClass("js-hidden"), this._$chatMembers.hide()) : (t.addClass("active"), this._$inputWrap.removeClass("js-hidden"), this._$chatMembers.show(), this._$inputText.val("").focus(), this._showMembersList())
                }, E.prototype._showMembersList = function() {
                    var t = this;
                    this._$chatMembersContent.empty().css("height", ""), this._model.updateRoomInfo(this._currentRoom(), function() {
                        var e = this._model.getRoomById(this._currentRoom()).members_info.sort((function(t, e) {
                                return t.online ? -1 : 1
                            })).filter(this.membersFilter).map((function(t) {
                                return {
                                    username: t.username,
                                    online: t.online,
                                    userpic: t.user_pic,
                                    id: t.user_id
                                }
                            })),
                            i = t.renderRecipients(e);
                        this._$chatMembersContent.append(i), t.syncDeleteButtonVisibility()
                    }.bind(this))
                }, E.prototype.syncDeleteButtonVisibility = function() {
                    var t = this._$chatMembersContent.find(".recipient").length,
                        e = this._$chatMembersContent.find(".remove");
                    t > 1 ? e.show() : e.hide()
                }, E.prototype.addNewRecipient = function(t) {
                    if (this._$inputText.val("").focus(), -1 === this.getCurrentRecipients().indexOf(t.id)) {
                        var e = n.extend({}, t);
                        this.renderRecipients([e]).prependTo(this._$chatMembersContent), this.syncDeleteButtonVisibility()
                    } else M({
                        title: h("Notice"),
                        text: h("{name} is already in this chat.").format({
                            name: t.username
                        })
                    })
                }, E.prototype.renderRecipients = function(t) {
                    var e = this._isCurrentUserAuthor();
                    return n(a.render('{{#recipients}}<a href="/u/{{ username }}/" target="_blank" class="recipient{{#online}} online{{/online}}" data-id="{{ id }}"><img src="{{ userpic }}"/><span class="recipient-username">{{ username }}</span>{{#showDeleteButton}}<i class="remove"></i>{{/showDeleteButton}}</a>{{/recipients}}', {
                        recipients: t,
                        showDeleteButton: e || window.user.is_moderator || window.user.is_staff
                    }))
                }, E.prototype.removeNewRecipient = function(t) {
                    n('.recipient[data-id="' + t + '"]').remove(), this._$inputText.focus()
                }, E.prototype.saveRecipients = function(t) {
                    return new Promise(function(e) {
                        if (t.length) {
                            var i = this._currentRoom();
                            new Promise(function(e) {
                                this._model.getRoomInfo(i, (function(i) {
                                    2 === i.members_info.length && t.length > 2 ? C({
                                        title: h("Create new chat room?"),
                                        text: h("You're adding members to a one-on-one chat. Do you want to create a new chat room, or add new members to the existing chat?"),
                                        mainButtonText: h("Create new chat"),
                                        cancelButtonText: h("Add to existing chat"),
                                        onConfirm: function(t) {
                                            e(!1), t.dialogClose()
                                        },
                                        onCancel: function(t) {
                                            e(!0), t.dialogClose()
                                        }
                                    }) : e(!0)
                                }))
                            }.bind(this)).then(function(s) {
                                this.saveRecipientsImpl(i, t, s, e)
                            }.bind(this))
                        } else e()
                    }.bind(this))
                }, E.prototype.saveRecipientsImpl = function(t, e, i, s) {
                    this._model.updateRoomUsers(t, e, function(t) {
                        if (t.error) return M({
                            title: h("Error"),
                            html: t.error
                        }), void s();
                        this._$inputWrap.addClass("js-hidden"), this._$chatHeadingHeaderspace.find("#add-people").removeClass("active"), this._$chatMembers.hide();
                        var e = t.room;
                        if (e.existing) return this.openChat(e.room_id), void s();
                        this.isCurrentRoom(e.room_id) || this.isStandalone() || (this._roomToBeOpenedWhenAdded = e.room_id), s()
                    }.bind(this), {
                        updateExistingRoom: i
                    })
                }, E.prototype.flipWidgets = function() {
                    if (!this._flipped) {
                        var t = this._container.height(),
                            e = parseFloat(TVSettings.getValue("privatemessages.paneratio", "0.5")),
                            s = Math.round(e * t);
                        this._bridge.visible.value() || this._bridge.visible.subscribe(function(i) {
                            t = this._container.height(), s = Math.round(e * t), this._$chat.height(s), this._$widget.height(t - s), this.resize()
                        }.bind(this), {
                            once: !0
                        }), this._$headerWrap = n('<div class="tv-messages-header">').prependTo(this._$widget), this._$headerWrap.on("contextmenu", (function(t) {
                            t.preventDefault()
                        }));
                        var o = n('<div class="widgetbar-widgetheader"><div class="widgetbar-widgettitle">' + h("Recent Chats") + "</div></div>").appendTo(this._$headerWrap),
                            a = n('<div class="widgetbar-headerspace">').append(this._$addChatButton).append(this._searchFilter.getButton()).prependTo(o);
                        this._$settingsButton = n('<a class="button apply-common-tooltip" title="' + h("Settings") + '" data-role="button" data-name="settings">').append(n(i(872531)).attr({
                            width: 17,
                            height: 17
                        })).appendTo(a), this._$settingsButton.on("click", function(t) {
                            this._chatWidget && this._chatWidget._showSettingsDialog(t, this._model.getRooms())
                        }.bind(this)), b(this._$settingsButton, null, {
                            event: "show-popup",
                            addClass: "ch-popup ch-settings-popup",
                            careBottomBorder: !0,
                            careRightBorder: !0,
                            viewportSpacing: 2,
                            reverse: !0
                        }), this._$chat = n('<div class="msg-chat-wrap">').insertBefore(this._$widget), this._$chat.height(s), this._$widget.height(t - s), this._$chat.data("heightRatio", e), this._$resizeHandle = n('<div class="msg-window-handle"></div>').on("mousedown touchstart", this.onWidgetResizeHandleMousedown.bind(this)).appendTo(this._$widget), this._flipped = !0
                    }
                }, E.prototype.onWidgetResizeHandleMousedown = function(t) {
                    if (!t.isDefaultPrevented()) {
                        t.preventDefault();
                        var e, i = this,
                            s = this._$chat,
                            o = this._$widget;
                        e = t.originalEvent.touches ? t.originalEvent.touches[0].clientY : t.pageY;
                        var a, r = s.height(),
                            h = this._container.height(),
                            d = function(t) {
                                var n = (t.originalEvent.touches ? t.originalEvent.touches[0].clientY : t.pageY) - e,
                                    d = Math.max(0, Math.min(r + n, h - i._$headerWrap.outerHeight()));
                                a !== d && (a = d, s.data("heightRatio", (d / h).toFixed(2)), s.height(d), o.height(h - d), i.resize())
                            },
                            l = function(t) {
                                n(document.documentElement).off("mousemove touchmove", d).off("mouseup touchend", l), a !== r && TVSettings.setValue("privatemessages.paneratio", s.data("heightRatio"))
                            };
                        n(document.documentElement).on("mousemove touchmove", d).one("mouseup touchend", l)
                    }
                }, E.prototype.resize = function() {
                    if (!this.layoutWithSelect()) {
                        var t = this._$widget.height();
                        t -= this._searchFilter.getInputHeight(), this._$headerWrap && (t -= this._$headerWrap.outerHeight()), this._$dataWrap.height(t), this._scroll.resize()
                    }
                    this.resizeChat()
                }, E.prototype.resizeChat = function() {
                    this._chatWidget && this._chatWidget.resize()
                }, E.prototype.onWindowResize = function() {
                    if (this._chatWidget)
                        if (this.layoutWithSelect()) this._chatWidget.resize();
                        else {
                            var t = this._$chat.data("heightRatio"),
                                e = this._container.height();
                            this._$chat.height(e * t), this._$widget.height(e * (1 - t)), this.resize()
                        }
                }, E.prototype.closeChat = function(t) {
                    this._chatWidget && (this._chatWidget.destroy(), this._chatWidget = null), this._$chatWidgetContainer && (this._$chatWidgetContainer.remove(), this._$chatWidgetContainer = null), this._$chatHeadingHeaderspace && this._$chatHeadingHeaderspace.empty(), t && (this._bridge.setTitle(h("Select Conversation...")), this.appendPlaceholder("hidden", this._$chat)), this.isStandalone() || TVSettings.setValue("privatemessages.activechat", "")
                }, E.prototype.sendMessageToUser = function(t, e) {
                    return O(this._model, t, e, this._onMessageSentSuccess.bind(this), () => {
                        this._visibilityToggled = !0
                    })
                }, E.prototype._onMessageSentSuccess = function(t) {
                    this.openChat(t), window.widgetbar && window.widgetbar.setPage("pm_chats"), this._scroll && this._scroll.scrollToStart()
                }, E.prototype._currentRoom = function() {
                    return this._chatWidget && this._chatWidget.currentRoom() || ""
                }, E.prototype.isCurrentRoom = function(t) {
                    return this._currentRoom() === t
                }, E.prototype.isStandalone = function() {
                    return this._standalone
                }, E.prototype.layoutWithSelect = function() {
                    return this._layoutWithSelect
                }, E.prototype._$notAuthMessage = function() {
                    var t = n('<div class="ch-item-empty">' + h("If you want to use private messages - please {signInLink}!", {
                        replace: {
                            signInLink: '<a href="#signin">' + h("sign in or register") + "</a>"
                        }
                    }) + "</div>");
                    return t.on("click", (function() {
                        return runOrSignIn((function() {}), {
                            source: "Private messages widget placeholder",
                            sourceMeta: "Chart"
                        }), !1
                    })), t
                }, E.prototype.setRoomTitle = function(t) {
                    var e = this;
                    R({
                        title: h("Set chat title"),
                        initValue: this.getRoomTitleById(t),
                        maxLength: 128,
                        onRename: function(i) {
                            return new Promise((function(s) {
                                var o = i.newValue;
                                o ? e._model.editRoom(t, o, "", (function(t) {
                                    t.error && M({
                                        title: t.errorTitle || h("Error"),
                                        text: t.error
                                    }), s(), i.dialogClose()
                                })) : s()
                            }))
                        }
                    })
                }, E.prototype._showRoom = function(t, e) {
                    e.removeClass("js-hidden"), e.data("hidden-conversation", !1), this.removePlaceholder(), this._model.removeHiddenRoom(t)
                }, E.prototype._hideRoom = function(t, e) {
                    if (!this._model.isRoomHidden(t)) {
                        var i = this._$data.find("#msg-item-" + t),
                            s = this.isCurrentRoom(t),
                            o = this._$data.find(".msg-item").not(".js-hidden");
                        i.addClass("js-hidden"), i.removeClass("active"), i.data("hidden-conversation", !0), 1 === o.length && this.appendPlaceholder("hidden"), s && (this.closeChat(!0), this._scroll.scrollToStart()), this._model.addHiddenRoom(t), e || k.emit("messages.chatvisibility", t + ":hide")
                    }
                }, E.prototype.showRoomContextMenu = function(t, e) {
                    var i = this.getRoomById(e),
                        s = this.getPrivateRoomActions(i),
                        o = [s.hideConversation];
                    (o = o.concat(s.multiUserActions)).push(l.getLaunchInSeparateWindowAction(e, (function() {
                        return !0
                    }))), p.createMenu(o.map((function(t) {
                        return new m({
                            label: t.title,
                            onExecute: t.action
                        })
                    }))).then((function(e) {
                        e.show(t)
                    }))
                }, E.prototype.getPrivateRoomActions = function(t) {
                    var e = this,
                        i = {},
                        s = t.room_id;
                    return i.hideConversation = {
                        title: h("Hide Conversation"),
                        action: function() {
                            e._hideRoom(s)
                        }
                    }, i.multiUserActions = [], t.members_info.length > 2 && i.multiUserActions.push({
                        title: h("Set Chat Title..."),
                        action: function() {
                            e.setRoomTitle(s)
                        }
                    }, {
                        title: h("Leave This Chat"),
                        action: function() {
                            C({
                                text: h("Are you sure you want to leave this chat?"),
                                onConfirm: function(t) {
                                    return new Promise((function(i) {
                                        e._model.leaveFromRoom(s, (function(o) {
                                            if (i(), o.error) return M({
                                                title: o.errorTitle || h("Error"),
                                                text: o.error
                                            }), void t.dialogClose();
                                            e.isCurrentRoom(s) && e.closeChat(!0), e.resize(), t.dialogClose()
                                        }))
                                    }))
                                }
                            })
                        }
                    }), i
                }, E.prototype.getCurrentRecipients = function() {
                    var t = this._$chatMembersContent.find(".recipient").toArray().map((function(t) {
                        return Number(t.getAttribute("data-id"))
                    }));
                    return t.push(window.user.id), t
                }, t.exports = {
                    Widget: E,
                    sendMessageToUser: function(t, e) {
                        return TradingView.messagesWidget ? TradingView.messagesWidget.sendMessageToUser(t, e) : O(W(), t, e)
                    }
                }
        },
        692837: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                NotificationSettings: () => a
            });
            var s = i(685864),
                o = !1;
            const n = {
                data: {},
                ready: null
            };
            class a {
                constructor() {
                    return window.is_authenticated ? !1 === o && (o = !0, n.ready = (0, s.fetch)("/notifications-data/?widget_type=user", {
                        credentials: "same-origin"
                    }).then(t => {
                        t.json().then(t => {
                            n.data = t.settings
                        })
                    })) : (o = !1, n.ready = Promise.resolve()), n
                }
            }
        },
        558476: (t, e, i) => {
            "use strict";
            var s = i(918184);
            i(405737);
            var o = i(155529),
                n = i(641146),
                a = i(802837),
                r = i(454281).Action,
                h = i(417515).ContextMenuManager,
                d = i(198006).isFeatureEnabled,
                l = i(641242),
                c = i(980225),
                u = i(152946).linking,
                m = i(607562).SidebarCustomScroll,
                p = i(152107).bindPopupMenu,
                g = i(530775),
                _ = i(119160).showDialog;
            const {
                NotificationSettings: v
            } = i(692837);
            var f = i(524926),
                b = i(7827),
                y = i(411585).appendEllipsis,
                w = i(120220).t,
                C = i(903851).enabled,
                R = i(305803).ProductFeatures,
                M = i(423946).createGoProDialog;
            const {
                htmlEscape: S
            } = i(436170);

            function x(t) {
                this._bridge = t, this._container = t.$body, this._rooms_obj = {}, this._visible = !1, this._notificationCount = 0, this._currentSymbol = "", this.SORT_ROOMS_INTERVAL = 5e3, this._model = g.makePublicModel(), this._model.roomAdded().subscribe(this, this._onRoomAdded), this._model.roomChanged().subscribe(this, this._onRoomChanged), this._model.roomDeleted().subscribe(this, this._onRoomDeleted), this._model.roomsChanged().subscribe(this, this._onRoomsChanged), this._model.messageReceivedInOtherRoom().subscribe(this, this._onEventInOtherRooms), u.seriesShortSymbol.subscribe(() => this.sortRooms()), this._standalone = !!t.standalone, this._layoutWithSelect = !!t.layoutWithSelect || !!(t.options || {}).layoutWithSelect, this._bridge.chatNotificationControl = this._chatNotificationControl = new n.ChatNotificationControl(!1), t.visible && (this._visible = t.visible.value(), t.visible.subscribe(this.onVisibilityChange.bind(this))), t.height && t.height.subscribe(this.resize.bind(this)), t.width && t.width.subscribe(this.resize.bind(this)), this._bridge.onMessage(function(t, e) {
                    switch (t) {
                        case "toggle_favorite_room":
                            this.toggleFavoriteForRoom(e);
                            break;
                        case "toggle_room_notifications":
                            this.toggleNotificationsForRoom(e)
                    }
                }.bind(this)), this.layoutWithSelect() ? this.prepareLayoutWithSelect() : this.prepareLayout(), this.setSortRoomsInterval(), loginStateChange.subscribe(this, function() {
                    this._sortRoomsIntervalID && clearInterval(this._sortRoomsIntervalID)
                }.bind(this)), 0 !== this._model.getRooms().length && this._onRoomsChanged(this._model.getRooms(), []), this.layoutWithSelect() && this._createChatWidget(), this.connect(), this.resize()
            }
            i(393313), x.prototype._onRoomAddedBySelf = function(t) {
                    return !!this._model.getRoomById(t) && (this.scrollToRoom(t), this.openChat(t), !0)
                }, x.prototype._onRoomAdded = function(t) {
                    this.sortRooms(), t.user_id === window.user.id && this._needScrollToAddedRoom && (this._onRoomAddedBySelf(t.room_id), this._needScrollToAddedRoom = !1)
                }, x.prototype._onRoomChanged = function(t) {
                    this.updateRoomCounter(t.room_id);
                    var e = s("#pc-item-" + t.room_id);
                    e.find(".title-text").text(t.title), e.find(".desc span").text(t.description)
                }, x.prototype._onRoomDeleted = function(t) {
                    var e = s("#pc-item-" + t.room_id);
                    f.jQueryCompatibleDestroy(e), e.remove(), this.resize(), this._bridge._room === t.room_id && this.openChat(this.getDefaultRoom())
                }, x.prototype._onRoomsChanged = function(t, e) {
                    var i, s = 0 === e.length && 0 !== t.length;
                    this._notificationCount = 0, s && (this._$data.empty(), this._rooms_obj = {}), this.initNotificationsSettings(), i = this.layoutWithSelect() && this._bridge.activeRoom ? this._bridge.activeRoom : this.getActiveRoom(), this.sortRooms(s, i), this.toggleFavoritesVisibility(),
                        s && i && (this.layoutWithSelect() && this._rooms_obj[i] && this._$select.html("<strong>" + S(this._rooms_obj[i].title) + "</strong>" + (this._rooms_obj[i].description ? ": " + S(this._rooms_obj[i].description) : "")), this.isStandAlone() || setTimeout(function() {
                            this.openChat(this._model.getRoomById(i) ? i : this.getDefaultRoom())
                        }.bind(this), 0))
                }, x.prototype._onEventInOtherRooms = function(t, e, i) {
                    var o = this,
                        a = this._rooms_obj[t.room_id];
                    if (a) {
                        var r = s("#pc-item-" + a.room_id);
                        if (this.updateRoomCounter(t.room_id), t.type || this.updateRoomDescMsg(a.room_id, t.username, t.text), t.user_id !== window.user.id && this.roomNotificationsOn(a)) {
                            var h, d, u = TVSettings.getJSON("chat.sound", n.ChatSoundControl.prototype._default_state, !0);
                            t.text && (d = b.removeBBCodes(t.text), h = d.indexOf("@" + user.username) > -1), !i && (!0 === u || u.onMessage || h && u.onMessageForUser) && l.play("chat/message");
                            var m = new v;
                            m.ready.then((function() {
                                var e = m.data.notification_popup;
                                if (h && !i && !o._standalone && !o.layoutWithSelect() && e && document.hidden && c.show(a.title, t.username + ": " + d, t.user_pic), !o.isCurrentRoom(a.room_id) || !o._visible) {
                                    var s = o._$data.find('a[data-room="' + a.room_id + '"] .counter'),
                                        n = parseInt(s.text(), 10);
                                    s.addClass("active").text(n + 1), o._notificationCount++, r.highlight(1)
                                }
                                o.updateNotifications()
                            }))
                        }
                    }
                }, x.prototype.settingsKey = function(t) {
                    return "en" !== window.language && (t += "." + window.locale), t
                }, x.prototype.getLocalizedSetting = function(t, e) {
                    return TVSettings.getValue(this.settingsKey(t), e)
                }, x.prototype.getLocalizedJsonSetting = function(t, e) {
                    return TVSettings.getJSON(this.settingsKey(t), e)
                }, x.prototype.setTVSettings = function(t, e) {
                    return "en" !== window.language && (t += "." + window.locale), TVSettings.setValue(t, e)
                }, x.prototype.setJsonSetting = function(t, e) {
                    return TVSettings.setJSON(this.settingsKey(t), e)
                }, x.prototype.onVisibilityChange = function(t) {
                    this._visible = t, t && this._bridge._room && s("#pc-item-" + this._bridge._room + " .counter").text("0").removeClass("active"), this.updateNotifications()
                }, x.prototype.initNotificationsSettings = function() {
                    this.notificationsSettings = this.getLocalizedJsonSetting("publiccharts.notifications"), this.notificationsSettings || (this.notificationsSettings = this._model.getRooms().reduce((function(t, e) {
                        return e.pinned && (t[e.room_id] = 1), t
                    }), {}))
                }, x.prototype.setupDataEvents = function() {
                    var t = this;
                    this._$data.on("click touchend", ".pc-item, .msg-item", (function(e) {
                        t._touch_scroll || (t._searchFilter && t._searchFilter.isOpen() && t._searchFilter.setNewRoom(s("#pc-item-" + s(this).data("room"))), t.openChat(s(this).data("room")), e.preventDefault())
                    })).on("touchstart", (function() {
                        t._touch_scroll = !1
                    })).on("touchmove", (function(e) {
                        t._touch_scroll = !0
                    })).on("contextmenu", ".pc-item", (function(e) {
                        e.preventDefault(), t.showRoomContextMenu(e, s(this).data("room"))
                    })), this.isStandAlone && !this.isStandAlone() && this._$data.on("click touchend", ".pc-item .fav", (function(e) {
                        t.toggleFavoriteForRoom(s(this).data("room")), e.stopPropagation(), e.preventDefault()
                    })).on("click touchend", ".pc-item .notifications-toggle", (function(e) {
                        t.toggleNotificationsForRoom(s(this).data("room")), e.stopPropagation(), e.preventDefault()
                    }))
                },
                x.prototype.showRoomContextMenu = function(t, e) {
                    var i = x.publicMenuItems(e, this._bridge, this);
                    i.push(o.getLaunchInSeparateWindowAction(e, (function() {
                        return !1
                    }))), h.createMenu(i.map((function(t) {
                        return new r({
                            label: t.title,
                            onExecute: t.action
                        })
                    }))).then((function(e) {
                        e.show(t)
                    }))
                }, x.prototype.prepareLayout = function() {
                    var t = this;
                    this._$widget = s('<div class="tv-publicchats">').appendTo(this._container), t._touch_scroll = !1, this._searchFilter = new n.ChatRoomListSearchFilter(this, !1), this._searchFilter.appendInput(this._$widget), this._$dataWrap = s('<div class="pc-data-wrap">').appendTo(this._$widget), this._$dataWrap.on("contextmenu", (function(t) {
                        t.target.classList.contains("pc-data-wrap") && t.preventDefault()
                    })), this._$data = s('<div class="pc-data">').appendTo(this._$dataWrap), this._$noFavoritesMessage = s("<div>"), this._$noFavoritesMessage.addClass("tv-widget-empty-message js-hidden"), this._$noFavoritesMessage.text(s.t("You haven't added a chat room to favorites.")), this._$noFavoritesMessage.appendTo(this._$dataWrap), this._searchFilter.setRoomList(this._$data), this.setupDataEvents(), this._$addButton = s('<a class="button apply-common-tooltip" title="' + s.t("Create new public chat") + '" data-role="button" data-name="create">').append(s(i(109682)).attr({
                        width: 17,
                        height: 17
                    })).appendTo(this._bridge.$headerspace), this._$addButton.on("click", (function(e) {
                        e.preventDefault(), t.showEditRoomDialog()
                    })), this._searchFilter.appendButton(this._bridge.$headerspace), this._$settingsButton = s('<a class="button apply-common-tooltip" title="' + s.t("Settings") + '" data-role="button" data-name="settings">').append(s(i(872531)).attr({
                        width: 17,
                        height: 17
                    })).appendTo(this._bridge.$headerspace), this._$settingsButton.on("click", o.prototype._showSettingsDialog.bind(this)), p(this._$settingsButton, null, {
                        event: "show-popup",
                        hideEvent: "hide-popup",
                        addClass: "ch-popup ch-settings-popup",
                        careBottomBorder: !0,
                        careRightBorder: !0,
                        viewportSpacing: 2,
                        reverse: !0
                    }), this._scroll = new m(this._$dataWrap[0], this._$data[0])
                }, x.prototype.prepareLayoutWithSelect = function(t, e) {
                    var n = this,
                        a = !1;
                    if (t && !is_authenticated) return this._bridge.$header.hide(), void(this._$data = this._bridge.$body.append(e instanceof s ? e : '<div>Please <a href="#signin" onclick="runOrSignIn(function(){}, { source: "Public chat widget" }); return false;">' + s.t("sign in or register") + "</a></div>"));

                    function r(t) {
                        var e = s(t.target).parents().andSelf();
                        e.is(n._$select) || e.is(n._$data) || n._toggleList()
                    }
                    this._bridge.$header.show(), this._bridge.$body.empty(), this._bridge.$header.addClass("chat-select-container"), this._$select = s('<div class="standalone-chat-select">').appendTo(this._bridge.$header), this._toggleList = function() {
                        if (a) n._$data.stop().height("auto").removeClass("sliding open");
                        else {
                            n._$data.height("auto").addClass("sliding");
                            var t = Math.min(s(window).height() - n._$data.offset().top - 5, n._$data.height());
                            n._$data.height(0).animate({
                                height: t
                            }, {
                                duration: 200,
                                height: t,
                                complete: function() {
                                    n._$data.addClass("open").removeClass("sliding")
                                }
                            })
                        }
                        n._$select[a ? "removeClass" : "addClass"]("active"),
                            s(document)[a ? "off" : "on"]("mousedown touchstart", r), a = !a
                    }, this._$select.click((function(t) {
                        t.preventDefault(), t.stopPropagation(), n._toggleList()
                    })), this._$settingsButton = s('<a class="button apply-common-tooltip" title="' + s.t("Settings") + '"></a>').append(s(i(58940)).attr({
                        width: 17,
                        height: 17
                    })).appendTo(this._bridge.$header).click((function(t) {
                        n instanceof i(323009).Widget && n._chatWidget ? n._chatWidget._showSettingsDialog(t) : n instanceof x && o.prototype._showSettingsDialog.call(n, t)
                    })), p(this._$settingsButton, null, {
                        event: "show-popup",
                        addClass: "ch-popup ch-settings-popup",
                        careBottomBorder: !0,
                        careRightBorder: !0,
                        viewportSpacing: 2,
                        reverse: !0
                    }), this._$data = s('<div class="standalone-chat-list msg-data pc-data">').appendTo(this._bridge.$header).on("click touchend", (function(t) {
                        n._touch_scroll || n._toggleList()
                    })), x.prototype.setupDataEvents.call(this)
                }, x.prototype.connect = function() {
                    this._bridge.onMessage(function(t, e) {
                        "toggle_show_only_favorites" === t && (this._model.toggleShownOnlyFavorites(), this.toggleFavoritesVisibility(), this.resize())
                    }.bind(this))
                }, x.prototype.destroy = function() {
                    clearInterval(this._roomUpdateInterval), clearInterval(this._roomStatusInterval), this._model.roomAdded().unsubscribe(this, this._onRoomAdded), this._model.roomChanged().unsubscribe(this, this._onRoomChanged), this._model.roomDeleted().unsubscribe(this, this._onRoomDeleted), this._model.roomsChanged().unsubscribe(this, this._onRoomsChanged), this._model.messageReceivedInOtherRoom().unsubscribe(this, this._onEventInOtherRooms), this._model.destroy(), this._model = null
                }, x.prototype.getDefaultRoom = function() {
                    for (var t, e = this._model.getRooms(), i = e.length - 1; i >= 0; i--) e[i].is_default && (t = e[i].room_id);
                    return t = t || ("en" !== window.language ? "general_" + window.locale : "general")
                }, x.prototype.getActiveRoom = function() {
                    var t = this.getLocalizedSetting("publicchats.activechat");
                    return t || (t = this.getDefaultRoom()), t
                }, x.prototype.updateRoomCounter = function(t, e) {
                    var i = this._rooms_obj[t],
                        s = (new Date).getDate();
                    if (i && !i.isSymbol) {
                        !0 !== e ? (i.msgs_total++, i.msgs_date !== s ? (i.msgs_date = s, i.msgs_days++, i.msgs_today = 1, i.msgs_average = Math.round((i.msgs_total - 1) / i.msgs_days)) : i.msgs_today++) : i.msgs_date = s;
                        var o = function(t) {
                                if (t < 1e3) return String(t);
                                var e = Math.floor(Math.log(t) / Math.log(1e3));
                                return Math.round(t / Math.pow(1e3, e) * Math.pow(10, 1)) / Math.pow(10, 1) + "KMGTPE".charAt(e - 1)
                            }(~~i.msgs_total),
                            n = this._$data.find("#pc-item-" + t);
                        n.find(".title-total").text(o), this.layoutWithSelect() || n.find(".title-text, .title-total").addClass("apply-common-tooltip common-tooltip-html").attr("title", S(i.description) + "<br><small>" + window.t("{messagesCount} all time messages").format({
                            messagesCount: i.msgs_total
                        }) + "<br>" + window.t("{messagesCount} messages today").format({
                            messagesCount: i.msgs_today
                        }) + "<br>" + (0 === i.msgs_average ? window.t("< 1 message average per day") : window.t("{messagesCount} average per day").format({
                            messagesCount: i.msgs_average
                        })) + "</small>")
                    }
                }, x.prototype.addRoom = function(t, e) {
                    if (s('<a href="#" data-room="' + S(t.room_id) + '" id="pc-item-' + S(t.room_id) + '" class="pc-item' + (e ? " active" : "") + (t.pinned ? " pinned" : "") + (this._model.isRoomFavorite(t.room_id) ? " favorite" : "") + '"><div class="title"><span class="title-text">' + S(t.title) + "</span>" + (t.isSymbol ? "" : ' <span class="title-total">0</span>') + '</div><div class="desc"><span>' + S(t.description) + '</span></div><div class="counter">0</div>' + (this.isStandAlone() ? "" : '<div class="notifications-toggle' + (this.roomNotificationsOn(t) ? " active" : "") + '" data-room="' + S(t.room_id) + '" title="' + s.t("Toggle notifications for this room") + '">' + i(979169) + '</div><i class="fav' + (this._model.isRoomFavorite(t.room_id) ? " active" : "") + '" data-room="' + S(t.room_id) + '" title="' + s.t("Toggle favorite") + '">' + i(841142) + "</i>") + "</div></a>").appendTo(this._$data), this.updateRoomCounter(t.room_id, !0), t.msgs_last_ts && (t.last_message_time = 1e3 * +t.msgs_last_ts), t.msgs_last_text) {
                        var o = t.msgs_last_text.split(": ");
                        this.updateRoomDescMsg(t.room_id, o[0], o[1])
                    }
                }, x.prototype.updateRoom = function(t) {
                    s("#pc-item-" + t.room_id).appendTo(this._$data)
                }, x.prototype.deleteRoomById = function(t) {
                    s("#pc-item-" + t).remove(), delete this._rooms_obj[t]
                }, x.prototype.updateRoomDescMsg = function(t, e, i) {
                    var o = this._rooms_obj[t];
                    if (o) {
                        var n = s("#pc-item-" + t).find(".desc");
                        f.jQueryCompatibleDestroy(n);
                        var a = n.find("time");
                        a.length || (a = s("<time>").appendTo(n)), n.find("span").text(e + ": " + b.removeBBCodes(i)), f.jQueryCompatibleAgoDateFormatter(a, new Date(o.last_message_time || Date.now()))
                    }
                }, x.prototype.updateNotifications = function() {
                    var t = this._$data.find(".counter.active").length;
                    this._bridge.notify(1, {
                        notificationValue: t,
                        clear: !t,
                        force: !0,
                        room: this._model.getRoomById(this._bridge._room)
                    })
                }, x.prototype.openChat = function(t, e) {
                    if (!this._bridge._room || t !== this._bridge._room) {
                        this._$data.find("a").removeClass("active"), s("#pc-item-" + t).addClass("active");
                        var i = s("#pc-item-" + t + " .counter"),
                            o = parseInt(i.text(), 10);
                        if (i.text("0").removeClass("active"), this._bridge.postMessage("chat_select_channel", {
                                room_id: t,
                                new_msgs: o
                            }), o && (this._notificationCount = Math.max(0, this._notificationCount - o)), this._bridge._room = t, this.isStandAlone() || this.setTVSettings("publicchats.activechat", t), this.layoutWithSelect()) {
                            var n = this._model.getRoomById(t);
                            this._$select.html("<strong>" + S(n.title) + "</strong>" + (n.description ? ": " + S(n.description) : ""))
                        }
                        this.updateNotifications()
                    }
                }, x.prototype.resize = function() {
                    this.layoutWithSelect() ? this.chatWidget.resize() : this._scroll.resize()
                }, x.prototype.isCurrentRoom = function(t) {
                    return this._bridge._room === t
                }, x.prototype.scrollToRoom = function(t) {
                    this._scroll.animateTo(s("#pc-item-" + t).position().top - 10)
                }, x.prototype.toggleFavoritesVisibility = function() {
                    if (!this.isStandAlone()) {
                        this._$data.toggleClass("js-only-favorites", this._model.isShownOnlyFavorites());
                        var t = this._model.isShownOnlyFavorites() && 0 === this._$data.find(".favorite").length;
                        this.layoutWithSelect() || this._$noFavoritesMessage.toggleClass("js-hidden", !t)
                    }
                }, x.prototype.toggleFavoriteForRoom = function(t) {
                    var e = !1;
                    this._model.isRoomFavorite(t) ? (this._model.removeFavoriteRoom(t), e = !1) : (this._model.addFavoriteRoom(t), e = !0);
                    var i = s("#pc-item-" + t);
                    i.toggleClass("favorite", e), i.find(".fav").toggleClass("active", e), this.toggleFavoritesVisibility()
                }, x.prototype.setSortRoomsInterval = function() {
                    if (!this._sortRoomsIntervalID) {
                        var t = this;
                        (this._$dataWrap || this._$data).on("mouseenter", (function() {
                            t._pointerInsideData = !0
                        })).on("mouseleave", (function() {
                            t._pointerInsideData = !1
                        })), this._sortRoomsIntervalID = setInterval((function() {
                            t._pointerInsideData || t._bridge && t._bridge.visible && !t._bridge.visible.value() || t.sortRooms()
                        }), this.SORT_ROOMS_INTERVAL)
                    }
                }, x.prototype.sortRooms = function(t, e) {
                    e || (e = this.getActiveRoom());
                    var i = this._model.getRooms();
                    d("chat_by_symbol") && this.addSymbolRooms(e), i.sort(this.sortRoomsFilter.bind(this)), i.forEach((function(i) {
                        t || !(i.room_id in this._rooms_obj) ? (this._rooms_obj[i.room_id] = i, this.addRoom(i, e === i.room_id)) : this.updateRoom(i)
                    }), this)
                }, x.prototype.addSymbolRooms = function(t) {
                    var e = this._model.getRooms();
                    [t, ...this._model.favoriteRooms()].forEach(t => {
                        a.isSymbolRoom(t) && this.addSymbolRoom(a.symbolFromChatRoomId(t))
                    });
                    var i = u.seriesShortSymbol.value();
                    if (i && this._currentSymbol !== i) {
                        var s = a.symbolRoomId(this._currentSymbol);
                        if (this._currentSymbol && !this._model.isRoomFavorite(s)) {
                            this.deleteRoomById(s);
                            var o = e.findIndex(t => t.room_id === s);
                            e.splice(o, 1)
                        }
                        this.addSymbolRoom(i), this._currentSymbol = i
                    }
                }, x.prototype.addSymbolRoom = function(t) {
                    const e = a.symbolRoomId(t);
                    this._model.getRoomById(e) || this._model.getRooms().push({
                        room_id: e,
                        title: w("{symbol} Chat", {
                            replace: {
                                symbol: t
                            }
                        }),
                        description: w("All about {symbol}", {
                            replace: {
                                symbol: t
                            }
                        }),
                        isSymbol: !0,
                        pinned: !0,
                        symbol: t
                    })
                }, x.prototype.sortRoomsFilter = function(t, e) {
                    return t.isSymbol && !e.isSymbol ? -1 : !t.isSymbol && e.isSymbol ? 1 : t.isSymbol && e.isSymbol ? t.symbol === this._currentSymbol ? -1 : 1 : t.pinned && !e.pinned ? -1 : !t.pinned && e.pinned ? 1 : t.pinned && e.pinned ? t.title.toLowerCase() > e.title.toLowerCase() ? 1 : -1 : this._model.isRoomFavorite(t.room_id) && !this._model.isRoomFavorite(e.room_id) ? -1 : !this._model.isRoomFavorite(t.room_id) && this._model.isRoomFavorite(e.room_id) ? 1 : "number" == typeof t.last_message_time && "number" != typeof e.last_message_time ? -1 : "number" != typeof t.last_message_time && "number" == typeof e.last_message_time ? 1 : "number" == typeof t.last_message_time && "number" == typeof e.last_message_time && t.last_message_time > e.last_message_time ? -1 : "number" == typeof t.last_message_time && "number" == typeof e.last_message_time && t.last_message_time < e.last_message_time || t.title.toLowerCase() > e.title.toLowerCase() ? 1 : -1
                }, x.prototype.toggleNotificationsForRoom = function(t) {
                    t in this.notificationsSettings ? delete this.notificationsSettings[t] : this.notificationsSettings[t] = 1, this.setJsonSetting("publiccharts.notifications", this.notificationsSettings), s("#pc-item-" + t + " .notifications-toggle").toggleClass("active", t in this.notificationsSettings)
                }, x.prototype.roomNotificationsOn = function(t) {
                    return t.room_id in this.notificationsSettings
                }, x.prototype.showEditRoomDialog = function(t) {
                    var e = this;
                    runOrSignIn((function() {
                        window.user.permissions.can_moderate_public_chats || C(R.CAN_EDIT_PUBLIC_CHATS) ? _(t, e._model.createRoom.bind(e._model), e._model.editRoom.bind(e._model), (function(i) {
                            t || e._onRoomAddedBySelf(i.room.room_id) || (e._needScrollToAddedRoom = !0)
                        })) : M({
                            feature: "editCreatePublicChat",
                            isTrialAvailable: !0,
                            upgradeMessage: s.t("Upgrade now")
                        })
                    }), {
                        source: "Public chat widget",
                        verifiedPhoneRequired: !0
                    })
                }, x.prototype.isStandAlone = function() {
                    return this._standalone
                }, x.prototype.layoutWithSelect = function() {
                    return this._layoutWithSelect
                }, x.prototype._createChatWidget = function() {
                    var t = s.extend(!0, {}, this._bridge, {
                        $header: null,
                        publicMenuItems: this.publicMenuItems,
                        hideMaximize: (this._bridge.options || {}).hideMaximize || this._layoutWithSelect,
                        standalone: this.isStandAlone() || this.layoutWithSelect()
                    });
                    this.chatWidget = new o(t)
                }, x.publicMenuItems = function(t, e, i) {
                    var o = [];
                    return o.push({
                        title: s.t("Toggle Notifications for This Room"),
                        action: function() {
                            e.postMessage("toggle_room_notifications", t)
                        }
                    }), o.push({
                        title: y(s.t("Link to This Room")),
                        action: function() {
                            e.postMessage("chat_show_link", t)
                        }
                    }), o.push({
                        title: y(s.t("Room Archives")),
                        action: function() {
                            var e = new Date,
                                i = e.getMonth() + 1,
                                s = e.getDate(),
                                o = e.getFullYear() + "-" + (i < 10 ? "0" : "") + i + "-" + (s < 10 ? "0" : "") + s;
                            window.open("/chat/history/?room=" + t + "&date=" + o + "&tzoffset=" + e.getTimezoneOffset())
                        }
                    }), o
                }, t.exports = x
        },
        120233: (t, e, i) => {
            "use strict";
            i.d(e, {
                takeChartSnapshotPromise: () => r,
                takeChartSnapshot: () => h,
                makeSnapshotRequest: () => d
            });
            i(568421);
            var s = i(120220),
                o = i(307833),
                n = i(130060),
                a = i(685864);

            function r(t, e = {}) {
                return new Promise((i, s) => {
                    h(t, i, s, e)
                })
            }
            async function h(t, e, i, s = {}) {
                var o;
                const n = new FormData;
                if (void 0 !== s.previews)
                    for (const t of s.previews) n.append("previews[]", t);
                void 0 !== s.cme && n.append("cme", String(s.cme)), void 0 !== s.wl && n.append("wl", String(s.wl)), void 0 !== s.onWidget && n.append("onWidget", String(s.onWidget)), s.isReport && n.append("isReport", String(s.isReport)), s.asyncSave && n.append("asyncSave", String(s.asyncSave));
                const a = window.urlParams;
                a && a.locale && n.append("language", a.locale);
                const r = t.activeChartWidget.value(),
                    h = r.widgetCustomer();
                void 0 !== h && n.append("customer", h);
                let l = r.properties().childs().timezone.value();
                "exchange" === l && (l = (null === (o = r.model().mainSeries().symbolInfo()) || void 0 === o ? void 0 : o.timezone) || l), n.append("timezone", l), n.append("symbol", r.model().mainSeries().symbol());
                const c = await t.clientSnapshot({
                        showHeaderMainSymbol: s.showHeaderMainSymbol
                    }),
                    u = await new Promise(t => c.toBlob(t));
                null !== u && n.append("preparedImage", u), d(n, e, i, s)
            }
            async function d(t, e, r, h = {}) {
                const d = o.enabled("charting_library_base") ? h.snapshotUrl || "https://www.tradingview.com/snapshot/" : "/snapshot/";
                try {
                    const o = await (0, a.fetch)(d, {
                            body: t,
                            method: "POST",
                            credentials: "same-origin"
                        }),
                        l = await o.text();
                    if (o.ok) e(l);
                    else {
                        if ("suspicious_chart_snapshots_error" === l) {
                            const t = (0, s.t)("Snapshot seems to contain prohibited content. Please contact {start_link}our support team{end_link} if you have received this by mistake.").format({
                                start_link: '<a class="tv-dialog__link js-send-report-link" href="#" data-issue-type="other">',
                                end_link: "</a>"
                            });
                            h.onInvalidSnapshotImage && h.onInvalidSnapshotImage();
                            return (0, n.createErrorDialog)({
                                title: (0, s.t)("Your snapshot was flagged as suspicious"),
                                content: t,
                                btnType: "danger"
                            }).then(t => {
                                t.on("afterOpen", () => {
                                    i.e(1484).then(i.bind(i, 727017)).then(({
                                        bugDialogCreationHandler: e
                                    }) => {
                                        e(), t.$el.find(".js-send-report-link").click(() => {
                                            t.close()
                                        })
                                    })
                                }), t.open()
                            })
                        }
                        r()
                    }
                } catch (t) {
                    r()
                }
            }
        },
        530775: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                makeLiveSeparateModel: () => A,
                makePrivateModel: () => D,
                makePublicModel: () => B,
                setPublicInitialRooms: () => E
            });
            var s = i(896276),
                o = i.n(s),
                n = i(771073),
                a = i(4516),
                r = i.n(a),
                h = i(918184),
                d = i.n(h),
                l = i(177224),
                c = i(947855);
            class u {
                constructor(t) {
                    this._statInterval = "", this._statSymbol = "", this._historyRequest = null, this._room = "", this._isActive = !0, this._messageReceivedDelegate = new(o()), this._messageDeletedDelegate = new(o()), this._messageReceivedInOtherRoomDelegate = new(o()), this._messageDeletedInOtherRoomDelegate = new(o()), this._unknownEventDelegate = new(o()), this._pendingMessages = {}, this._newRoomInfoRequests = {}, this._onRoomDataHandler = this._pushStreamRoomDataHandler.bind(this), this._chatRooms = t, this._getChatRooms().startListenPushstream(), this._getChatRooms().roomsChanged().subscribe(this, this._flushPendingMessages), this._getChatRooms().otherEventReceived().subscribe(this, this._onOtherRoomEventReceived)
                }
                destroy() {
                    this.setRoom(""), this._getChatRooms().roomsChanged().unsubscribe(this, this._flushPendingMessages), this._getChatRooms().otherEventReceived().unsubscribe(this, this._onOtherRoomEventReceived), this._getChatRooms().stopListenPushstream(), this._historyRequest && this._historyRequest.abort()
                }
                roomAdded() {
                    return this._getChatRooms().roomAdded()
                }
                roomChanged() {
                    return this._getChatRooms().roomChanged()
                }
                roomDeleted() {
                    return this._getChatRooms().roomDeleted()
                }
                roomsChanged() {
                    return this._getChatRooms().roomsChanged()
                }
                messageReceived() {
                    return this._messageReceivedDelegate
                }
                messageDeleted() {
                    return this._messageDeletedDelegate
                }
                messageReceivedInOtherRoom() {
                    return this._messageReceivedInOtherRoomDelegate
                }
                messageDeletedInOtherRoom() {
                    return this._messageDeletedInOtherRoomDelegate
                }
                otherEventReceived() {
                    return this._unknownEventDelegate
                }
                createRoom(t, e, i, s) {
                    this._getChatRooms().createRoom(t, e, i, s)
                }
                editRoom(t, e, i, s) {
                    return this._getChatRooms().editRoom(t, e, i, s)
                }
                getRooms() {
                    return this._getChatRooms().rooms()
                }
                getRoomById(t) {
                    return this._getChatRooms().getRoomById(t)
                }
                getRoomInfo(t, e, i, s) {
                    return this._getChatRooms().getRoomInfo(t, e, i, s)
                }
                setActive(t) {
                    this._isActive = t
                }
                isActive() {
                    return this._isActive
                }
                room() {
                    return this._room
                }
                isHistoryLoading() {
                    return null !== this._historyRequest
                }
                setStatSymbol(t) {
                    this._statSymbol = t
                }
                setStatInterval(t) {
                    this._statInterval = t
                }
                loadHistory(t, e) {
                    this._loadHistoryInternal(t, e)
                }
                setRoom(t, e) {
                    this._room !== t && (this._historyRequest && (this._historyRequest.abort(), this._historyRequest = null), this._room && r().off(this._getChannel(), this._onRoomDataHandler), this._room = t, this._room && (this._historyRequest = this._loadHistoryInternal(0, (t, i, s) => {
                            e && e(t, i, s), r().on(this._getChannel(), this._onRoomDataHandler)
                        }),
                        this._historyRequest.always(() => {
                            this._historyRequest = null
                        })))
                }
                getBanStatus(t, e) {
                    window.user.is_moderator && window.user.id !== t.user_id && !t.is_moderator ? d().get("/ban-status/", {
                        user_id: t.user_id
                    }, t => {
                        e(!0, !t.error)
                    }) : e(!1)
                }
                ignoredUsers() {
                    return window.user.ignore_list
                }
                ignoredUsersV2() {
                    return window.user.ignore_list_v2
                }
                ignoreUser(t, e, i, s) {
                    const o = {
                        action: e ? "add" : "remove",
                        user_id: t.user_id,
                        username: t.username
                    };
                    d().post(e ? "/api/v1/user/privacy/ignore_list/add/" : "/api/v1/user/privacy/ignore_list/remove/", o, s => {
                        s.detail || (e ? window.user.ignore_list[t.user_id] = t.username : delete window.user.ignore_list[t.user_id], window.crossTabSyncUserAttr && window.crossTabSyncUserAttr("ignore_list")), i && i(s)
                    }).fail(t => {
                        if (s) {
                            const e = JSON.parse(t.responseText);
                            e.error = e.detail, s(e)
                        }
                    })
                }
                ignoreUserV2(t, e, i, s) {
                    e ? c.IgnoreUsers.add(t.username).then(e => {
                        e.detail || window.user.ignore_list.push(t.user_id), i(e)
                    }).catch(t => s(t)) : c.IgnoreUsers.remove(t.username).then(e => {
                        e.detail || (window.user.ignore_list = window.user.ignore_list.filter(e => e !== t.user_id)), i(e)
                    }).catch(t => s(t)), window.crossTabSyncUserAttr && window.crossTabSyncUserAttr("ignore_list")
                }
                sendMessageToRoom(t, e, i, s, o, a) {
                    if ((i = i || {}).interval = this._statInterval, !(e = e.trim()) && !i.text) return !1;
                    const r = window.TradingView.onChartPage ? this._statSymbol : "",
                        h = {
                            meta: JSON.stringify(i),
                            room_id: t,
                            symbol: r,
                            text: e
                        };
                    s && s.messageType && (h.type = s.messageType, s.warningType && (i.warning_type = s.warningType)), this._extendCommonRequestData(h), d().post("/conversation-post/", h).done(o).fail(a);
                    const l = "1" === h.is_private;
                    return (0, n.getTracker)().then(e => {
                        null !== e && e.trackChat(t, !1, l, window.locale)
                    }), !0
                }
                sendMessage(t, e, i, s, o) {
                    return "" !== this._room && this.sendMessageToRoom(this._room, t, e, i, s, o)
                }
                reportMessage(t) {
                    new l.ReportSendingAgent({
                        entityText: t.text,
                        entityType: "message",
                        entityURL: t.id.replace(/-/g, ""),
                        username: t.username
                    }, this._reportMessageOptions()).send()
                }
                deleteMessage(t, e, i) {
                    d().post("/conversation-delete/", {
                        ids: t
                    }).done(e).fail(i)
                }
                _getChatRooms() {
                    return this._chatRooms
                }
                _reportMessageOptions() {
                    return {}
                }
                _pushStreamRoomDataHandler(t, e, i, s) {
                    switch (t.action) {
                        case "message":
                            this._messageReceivedDelegate.fire(t.data, t.data.room_id, s);
                            break;
                        case "message-delete":
                            this._messageDeletedDelegate.fire(t.data, t.data.room_id, s);
                            break;
                        default:
                            throw new Error("AbstractChatModel._pushStreamRoomDataHandler: unknown action " + t.action)
                    }
                }
                _onOtherRoomEventReceived(t, e, i, s) {
                    const o = t.data.room_id;
                    o !== this.room() && ("message" === t.action || "message-delete" === t.action ? this.getRoomById(o) ? "message" === t.action ? this._messageReceivedInOtherRoomDelegate.fire(t.data, o, s) : this._messageDeletedInOtherRoomDelegate.fire(t.data, o, s) : (this._pendingMessages[o] = this._pendingMessages[o] || [], this._pendingMessages[o].push({
                        external: s,
                        message: t
                    }), this._newRoomInfoRequests[o] || (this._newRoomInfoRequests[o] = !0, this._getChatRooms().getRoomInfo(o, () => {
                        delete this._newRoomInfoRequests[o], this._flushPendingMessages()
                    }, () => {
                        delete this._newRoomInfoRequests[o], this._getChatRooms().updateRooms()
                    }))) : this._unknownEventDelegate.fire(t, e, i, s))
                }
                _flushPendingMessages() {
                    Object.keys(this._pendingMessages).forEach(t => {
                        if (!this._pendingMessages[t] || !this.getRoomById(t)) return;
                        let e;
                        e = t === this.room() ? {
                            message: this._messageReceivedDelegate,
                            "message-delete": this._messageDeletedDelegate
                        } : {
                            message: this._messageReceivedInOtherRoomDelegate,
                            "message-delete": this._messageDeletedInOtherRoomDelegate
                        }, this._pendingMessages[t].forEach(i => {
                            e[i.message.action].fire(i.message.data, t, i.external)
                        }), delete this._pendingMessages[t]
                    })
                }
                _loadHistoryInternal(t, e) {
                    const i = {
                        _rand: Math.random(),
                        offset: t,
                        room_id: this._room,
                        stat_interval: this._statInterval,
                        stat_symbol: this._statSymbol
                    };
                    return this._extendCommonRequestData(i), d().get("/conversation-status/", i, t => {
                        e && e(t, 0 === t.messages.length, !1)
                    })
                }
            }
            var m = i(987380);
            const p = (0, m.getLogger)("Chat.PrivateChatModel");
            class g extends u {
                constructor(t) {
                    super(t), this._roomMessagesReadDelegate = new(o()), this._otherRoomMessagesReadDelegate = new(o())
                }
                roomMessagesRead() {
                    return this._roomMessagesReadDelegate
                }
                otherRoomMessagesRead() {
                    return this._otherRoomMessagesReadDelegate
                }
                setMessagesRead() {
                    this._updateRoomLastVisitedTime()
                }
                loadHistory(t, e) {
                    super.loadHistory(t, (t, i, s) => {
                        this.setMessagesRead(), e && e(t, i, s)
                    })
                }
                loadMoreRooms(t) {
                    return this._getChatRooms().loadMoreRooms(t)
                }
                leaveFromRoom(t, e) {
                    return this._getChatRooms().leaveFromRoom(t, e)
                }
                updateRoomUsers(t, e, i, s) {
                    return this._getChatRooms().updateRoomUsers(t, e, i, s)
                }
                updateRoomInfo(t, e) {
                    this._getChatRooms().getRoomInfo(t, e, void 0, !0)
                }
                hiddenRooms() {
                    return this._getChatRooms().hiddenRooms()
                }
                addHiddenRoom(t) {
                    this._getChatRooms().addHiddenRoom(t), this._updateRoomLastVisitedTime(t)
                }
                removeHiddenRoom(t) {
                    this._getChatRooms().removeHiddenRoom(t)
                }
                isRoomHidden(t) {
                    return this._getChatRooms().isRoomHidden(t)
                }
                searchUsers(t, e) {
                    h.get("/username_hint/", {
                        s: t
                    }, e)
                }
                _extendCommonRequestData(t) {
                    t.is_private = "1"
                }
                _getChannel() {
                    return this.room()
                }
                _pushStreamRoomDataHandler(t, e, i, s) {
                    switch (t.action) {
                        case "message":
                            this.setMessagesRead();
                            break;
                        case "messages-read":
                            const e = this.getRoomById(t.data.room_id);
                            return void(e ? this._roomMessagesReadDelegate.fire(e) : p.logError("Received messages-read event for unknown room " + t.data.room_id))
                    }
                    super._pushStreamRoomDataHandler(t, e, i, s)
                }
                _onOtherRoomEventReceived(t, e, i, s) {
                    const o = t.data.room_id;
                    if (o !== this.room())
                        if ("messages-read" !== t.action) super._onOtherRoomEventReceived(t, e, i, s);
                        else {
                            const t = this.getRoomById(o);
                            t && this._otherRoomMessagesReadDelegate.fire(t)
                        }
                }
                _updateRoomLastVisitedTime(t) {
                    (t && t !== this.room() || this.isActive()) && (t = t || this.room(), h.post("/chats/status/", {
                        room_id: t
                    }))
                }
            }
            var _ = i(120220),
                v = i(685864);
            class f extends u {
                constructor(t, e = !0) {
                    super(t), this._activeReconnect = !0, this._activeReconnect = e
                }
                deleteRoom(t, e) {
                    return this._getChatRooms().deleteRoom(t, e)
                }
                async voteForChart(t, e, i) {
                    (0, v.fetch)(`/api/v1/ideas/${t.id}/like/`, {
                        method: "POST",
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            value: e ? 1 : 0
                        })
                    }).then(t => t.json()).then(i)
                }
                voteForMessageWithSnapshot(t, e, i) {
                    h.post("/conversation-vote/", {
                        id: t.id,
                        vote: e ? 1 : 0
                    }, i)
                }
                favoriteRooms() {
                    return this._getChatRooms().favoriteRooms()
                }
                isRoomFavorite(t) {
                    return this._getChatRooms().isRoomFavorite(t)
                }
                addFavoriteRoom(t) {
                    this._getChatRooms().addFavoriteRoom(t)
                }
                removeFavoriteRoom(t) {
                    this._getChatRooms().removeFavoriteRoom(t)
                }
                isShownOnlyFavorites() {
                    return this._getChatRooms().isShownOnlyFavorites()
                }
                toggleShownOnlyFavorites() {
                    this._getChatRooms().toggleShownOnlyFavorites()
                }
                _reportMessageOptions() {
                    const t = this.getRoomById(this.room());
                    return t ? {
                        additionalText: (0, _.t)("Posted in {title}").format({
                            title: t.title
                        })
                    } : {}
                }
                _extendCommonRequestData(t) {
                    t.is_private = ""
                }
                _getChannel() {
                    return "chat_" + this.room()
                }
            }
            class b extends f {
                setActive(t) {
                    super.setActive(t), t ? r().addChannel("chat") : this._activeReconnect && r().removeChannel("chat")
                }
            }
            class y extends f {
                setActive(t) {
                    super.setActive(t);
                    const e = this.getRooms()[0].room_id;
                    t ? r().addChannel(e) : this._activeReconnect && r().removeChannel(e)
                }
            }
            class w {
                constructor(t) {
                    this._roomAddedDelegate = new(o()), this._roomChangedDelegate = new(o()), this._roomDeletedDelegate = new(o()), this._roomsChangedDelegate = new(o()), this._otherEventReceivedDelegate = new(o()), this._subscribersCount = 0, this._rooms = t || [], setTimeout(() => {
                        0 === this._rooms.length && this.updateRooms()
                    }, 0)
                }
                getRoomInfo(t, e, i, s) {
                    const o = this.getRoomById(t);
                    e && o && e(o)
                }
                startListenPushstream() {
                    ++this._subscribersCount, 1 === this._subscribersCount && (this._multiplexerCallback = this._pushStreamBroadcastHandler.bind(this), r().on(this._multiplexerEvent(), this._multiplexerCallback))
                }
                stopListenPushstream() {
                    --this._subscribersCount, 0 === this._subscribersCount && r().off(this._multiplexerEvent(), this._multiplexerCallback)
                }
                rooms() {
                    return this._rooms
                }
                getRoomById(t) {
                    const e = this._getRoomIndex(t);
                    return -1 === e ? null : this._rooms[e]
                }
                roomAdded() {
                    return this._roomAddedDelegate
                }
                roomChanged() {
                    return this._roomChangedDelegate
                }
                roomDeleted() {
                    return this._roomDeletedDelegate
                }
                roomsChanged() {
                    return this._roomsChangedDelegate
                }
                otherEventReceived() {
                    return this._otherEventReceivedDelegate
                }
                _onRoomAdded(t) {
                    t && (this._rooms.push(t), this._roomAddedDelegate.fire(t))
                }
                _onRoomChanged(t) {
                    if (!t) return;
                    const e = this._getRoomIndex(t.room_id); - 1 !== e && (this._rooms[e] = t, this._roomChangedDelegate.fire(t))
                }
                _onRoomDeleted(t) {
                    if (!t) return;
                    const e = this._getRoomIndex(t.room_id); - 1 !== e && (this._rooms.splice(e, 1), this._roomDeletedDelegate.fire(t))
                }
                _onRoomsChanged(t) {
                    const e = this._rooms;
                    this._rooms = t, this._roomsChangedDelegate.fire(t, e)
                }
                _pushStreamBroadcastHandler(t, e, i, s) {
                    this._otherEventReceivedDelegate.fire(t, e, i, s)
                }
                _getRoomIndex(t) {
                    for (let e = this._rooms.length - 1; e >= 0; --e)
                        if (this._rooms[e].room_id === t) return e;
                    return -1
                }
            }
            var C = i(342098);
            const R = (0, m.getLogger)("Chat.PrivateChatRooms");
            class M extends w {
                constructor(t = !0) {
                    super(null), this._updateRoomRequest = null, this._withPagination = !0, this._withPagination = t, window.loginStateChange.subscribe(this, this._onLoginStateChanged), this._onLoginStateChanged()
                }
                updateRooms(t = 30) {
                    if (this._updateRoomRequest) return;
                    this._withPagination || (t = 0);
                    const e = window;
                    e.user && e.is_authenticated ? (this._updateRoomRequest = h.get("/chats/get/", {
                        limit: t
                    }, this._onRoomsChanged.bind(this)), this._updateRoomRequest.always(() => {
                        this._updateRoomRequest = null
                    })) : this._onRoomsChanged([])
                }
                loadMoreRooms(t = 30) {
                    this.updateRooms(this.rooms().length + t)
                }
                createRoom(t, e, i, s) {
                    h.post("/chats/create/", {
                        members: i
                    }, t => {
                        t.error || t.room.existing || this._onRoomAdded(t.room), s && s(t), (0, n.getTracker)().then(e => {
                            null !== e && e.trackChat(t.room.room_id, !0, !0, window.locale)
                        })
                    })
                }
                editRoom(t, e, i, s) {
                    const o = this.getRoomById(t);
                    if (!o) return !1;
                    const n = {
                        room_id: t,
                        room_title: e
                    };
                    return h.post("/chats/title/", n, t => {
                        t.error || (o.title = e, this._onRoomChanged(o)), s && s(t)
                    }), !0
                }
                getRoomInfo(t, e, i, s) {
                    const o = this.getRoomById(t);
                    !o || s ? h.get("/chats/info/", {
                        room_id: t
                    }, o => {
                        if (o.error) return void(i && i());
                        const n = this.getRoomById(t);
                        s && n ? this._onRoomChanged(o.room) : n || this._onRoomAdded(o.room), e && e(o.room)
                    }).fail(i) : e && e(o)
                }
                leaveFromRoom(t, e) {
                    return !!this.getRoomById(t) && (h.post("/chats/leave/", {
                        room_id: t
                    }, i => {
                        if (!i.error) {
                            const e = this.getRoomById(t);
                            e ? this._onRoomDeleted(e) : R.logError("We are already left the room " + t)
                        }
                        e && e(i)
                    }), !0)
                }
                updateRoomUsers(t, e, i, s) {
                    if (!this.getRoomById(t)) return !1;
                    const o = {
                        members: e,
                        room_id: t,
                        update_existing: null == s ? void 0 : s.updateExistingRoom
                    };
                    return h.post("/chats/update/", o, e => {
                        const s = this.getRoomById(t);
                        s && (e.room && e.room.members_info && e.room.room_id === s.room_id && (s.members_info = e.room.members_info), this._onRoomChanged(s)), i && i(e)
                    }), !0
                }
                hiddenRooms() {
                    return this._hiddenRooms
                }
                addHiddenRoom(t) {
                    this.isRoomHidden(t) || (this._hiddenRooms.push(t), this._flushHiddenRooms())
                }
                removeHiddenRoom(t) {
                    if (!this.isRoomHidden(t)) return;
                    const e = this._hiddenRooms.indexOf(t);
                    this._hiddenRooms.splice(e, 1), this._flushHiddenRooms()
                }
                isRoomHidden(t) {
                    return -1 !== this._hiddenRooms.indexOf(t)
                }
                _multiplexerEvent() {
                    return "pm_*"
                }
                _pushStreamBroadcastHandler(t, e, i, s) {
                    const o = t.data.type;
                    if ("join" === o || "leave" === o) {
                        if ("leave" === o && window.user.id === t.data.user_id) return;
                        this.getRoomInfo(t.data.room_id, void 0, void 0, !0)
                    }
                    super._pushStreamBroadcastHandler(t, e, i, s)
                }
                _flushHiddenRooms() {
                    (0, C.setJSON)("privatemessages.hiddenrooms", this._hiddenRooms, {
                        forceFlush: !0
                    })
                }
                _onLoginStateChanged() {
                    this._hiddenRooms = (0, C.getJSON)("privatemessages.hiddenrooms", []), this.updateRooms()
                }
            }

            function S(t) {
                return "en" !== window.language && (t = `${t}.${window.locale}`), t
            }
            class x extends w {
                constructor(t) {
                    super(t), this._favoriteRooms = (0, C.getJSON)(S("publiccharts.favorites"), {}), this._showOnlyFavorites = !!(0, C.getBool)("chat.show_only_favorites")
                }
                updateRooms() {
                    h.get("/chats/public/get/", this._onRoomsChanged.bind(this))
                }
                createRoom(t, e, i, s) {
                    const o = {
                        desc: e,
                        title: t
                    };
                    h.post("/chats/public/create/", o, t => {
                        t.error || h.post("/chats/public/createpingback/", {
                            room_id: t.room.room_id
                        }), s && s(t), (0, n.getTracker)().then(e => {
                            null !== e && e.trackChat(t.room.room_id, !0, !1, window.locale)
                        })
                    })
                }
                editRoom(t, e, i, s) {
                    if (!this.getRoomById(t)) return !1;
                    const o = {
                        desc: i,
                        room_id: t,
                        title: e
                    };
                    return h.post("/chats/public/edit/", o, s), !0
                }
                deleteRoom(t, e) {
                    return !!this.getRoomById(t) && (h.post("/chats/public/delete/", {
                        room_id: t
                    }, e), !0)
                }
                favoriteRooms() {
                    return Object.keys(this._favoriteRooms)
                }
                isRoomFavorite(t) {
                    return t in this._favoriteRooms
                }
                addFavoriteRoom(t) {
                    this._favoriteRooms[t] = !0,
                        this._saveFavorires()
                }
                removeFavoriteRoom(t) {
                    delete this._favoriteRooms[t], this._saveFavorires()
                }
                isShownOnlyFavorites() {
                    return this._showOnlyFavorites
                }
                toggleShownOnlyFavorites() {
                    this._showOnlyFavorites = !this._showOnlyFavorites, (0, C.setValue)("chat.show_only_favorites", this._showOnlyFavorites)
                }
                _multiplexerEvent() {
                    return "chat_*"
                }
                _pushStreamBroadcastHandler(t, e, i, s) {
                    if ("create_room" === t.data.type && t.data.meta.lang === window.locale) return void this._onRoomAdded(t.data.meta.room);
                    const o = this.getRoomById(t.data.room_id);
                    if (o) switch (o.last_message_time = Date.now(), t.data.type) {
                        case "edit_room":
                            return o.title = t.data.meta.room_title, o.description = t.data.meta.room_desc, void this._onRoomChanged(o);
                        case "delete_room":
                            return void this._onRoomDeleted(o)
                    }
                    super._pushStreamBroadcastHandler(t, e, i, s)
                }
                _saveFavorires() {
                    (0, C.setJSON)(S("publiccharts.favorites"), this._favoriteRooms)
                }
            }
            const $ = (0, m.getLogger)("Chat.ChatModelsFactory");
            let T = null,
                k = null,
                I = null;

            function D(t = !0) {
                if (function(t = !0) {
                        k || (k = new M(t))
                    }(t), !k) throw new Error("Unable to create private chat model");
                return new g(k)
            }

            function B(t = !0) {
                if (I || (I = new x(T)), !I) throw new Error("Unable to create public chat model");
                return new b(I, t)
            }

            function E(t) {
                I ? $.logError("Trying set initial rooms after creating") : T = t
            }

            function A(t) {
                const e = new x(t);
                return new y(e)
            }
        },
        947855: (t, e, i) => {
            "use strict";
            i.d(e, {
                IgnoreUsers: () => r
            });
            var s, o = i(120220);

            function n(t) {
                const e = new FormData;
                return e.append("username", t), e
            }! function(t) {
                t[t.Unknown = 0] = "Unknown", t[t.BadRequest = 400] = "BadRequest", t[t.Forbidden = 403] = "Forbidden", t[t.NotFound = 404] = "NotFound", t[t.UnprocessableEntity = 422] = "UnprocessableEntity"
            }(s || (s = {}));
            const a = o.t("Oh no! Something went wrong. Please try again.");
            var r;
            ! function(t) {
                t.getAll = function() {
                    return fetch("/api/v1/user/privacy/ignore_list/", {
                        method: "GET"
                    }).then(t => {
                        if (t.ok) return t.json();
                        throw new Error(a)
                    })
                }, t.add = async function(t) {
                    return fetch("/api/v1/user/privacy/ignore_list/add/", {
                        method: "POST",
                        body: n(t)
                    }).then(t => {
                        if (t.ok) return t.json();
                        if ([s.UnprocessableEntity].includes(t.status)) return t.json().then(e => {
                            if (!t.ok) {
                                const t = e.detail;
                                throw new Error(t)
                            }
                        });
                        throw new Error(a)
                    })
                }, t.remove = function(t) {
                    return fetch("/api/v1/user/privacy/ignore_list/remove/", {
                        method: "POST",
                        body: n(t)
                    }).then(t => {
                        if (t.ok) return t.json();
                        if ([s.UnprocessableEntity].includes(t.status)) return t.json().then(e => {
                            if (!t.ok) {
                                const t = e.detail;
                                throw new Error(t)
                            }
                        });
                        throw new Error(a)
                    })
                }
            }(r || (r = {}))
        },
        300262: (t, e, i) => {
            "use strict";
            i.d(e, {
                lazyFancybox: () => o
            });
            i(918184), i(917473);
            var s = i(918184);

            function o(t) {
                const e = i => {
                    const o = s(i.currentTarget);
                    i.preventDefault(), i.stopPropagation(), n(() => {
                        void 0 !== t.$elem && (t.$elem.off({
                            click: e
                        }), t.$elem.fancybox(t)), o.click()
                    })
                };
                "function" != typeof s.fancybox ? void 0 !== t.$elem ? t.$elem.one({
                    click: e
                }) : n(() => {
                    s.fancybox(t)
                }) : void 0 !== t.$elem ? t.$elem.fancybox(t) : s.fancybox(t)
            }

            function n(t) {
                Promise.all([i.e(91877), i.e(52086)]).then((e => {
                    i(852086), t()
                }).bind(null, i)).catch(i.oe)
            }
        },
        910757: (t, e, i) => {
            "use strict";
            i.r(e);
            i(918184);
            var s = i(918184),
                o = i(918184);
            s.fn.putCursorAtEnd = function() {
                return this.each((function() {
                    if (o(this).focus(), this.setSelectionRange) {
                        const t = 2 * o(this).val().length;
                        this.setSelectionRange(t, t)
                    } else o(this).val(o(this).val());
                    this.scrollTop = 999999
                }))
            }, s.fn.putCursorAtPosition = function(t) {
                return this.each((function() {
                    o(this).focus(), this.setSelectionRange && this.setSelectionRange(t, t)
                }))
            }
        },
        87840: (t, e, i) => {
            "use strict";
            var s = i(500466),
                o = i(918184);
            i(918184), i(180643);
            var n = i(120220).t,
                a = i(184162).max,
                r = i(824037).lazyJqueryUI,
                h = i(630976).getRootOverlapManager,
                d = i(195355).mobiletouch;
            const l = i(307833);
            var c = {
                modalDialog: null,
                dialogs: [],
                NOTIFICATION_ANIMATION_START_OFFSET: "-33px",
                _constrainDraggableOptionsIfNeeded: function(t) {
                    return l.enabled("constraint_dialogs_movement") && (t.containment = ".chart-page"), t
                },
                showNotice: function(t, e, i) {
                    "object" == typeof e && (i = e, e = "");
                    var o = (i = i || {}).doNotCloseOnBgClick || !1,
                        a = i.html || "",
                        r = i.width || "400px",
                        h = {};
                    h.noClose = i.noClose || null, h.addClass = i.modalDialogClass || null, c.createModalDialog(t, h);
                    var d = i.centerCaption ? "caption-big-center" : "caption-big";
                    c.modalDialog.find("._tv-dialog").css("width", r);
                    var l = i.customButtonCaption ? i.customButtonCaption : n("OK");
                    return c.modalDialog.find("._tv-dialog-content").html(s.render('<div class="main"><div class="{{captionClassName}} {{classSuffix}}">{{text}}' + a + '</div>{{^removeOkButton}}<div class="buttons"><input type="button" class="_tv-button ok" value="' + l + '"/></div>{{/removeOkButton}}</div>', {
                        captionClassName: d,
                        classSuffix: i.classSuffix || "",
                        text: e,
                        removeOkButton: i && i.removeOkButton
                    })), c.modalDialog.find("._tv-button.ok").on("click", (function() {
                        c.destroy(), i.onOkButtonClick && i.onOkButtonClick()
                    })), c.positionDialog(), c.applyHandlers(!1, {
                        doNotCloseOnBgClickIfShadowbox: o,
                        beforeDestroy: i.onClose
                    }), c.modalDialog
                },
                showCustomDialog: function(t) {
                    function e(t) {
                        c.destroy(), t.preventDefault()
                    }
                    return c.createModalDialog(t.title || n("Dialog"), {
                        addClass: ""
                    }), c.modalDialog.find("._tv-dialog").css("width", t.width || "400px"), c.modalDialog.find("._tv-dialog-content").html('<div class="main">' + (t.html || n("Content")) + "</div>"), c.modalDialog.find(".ok").click(e), c.modalDialog.find("form").submit(e), c.modalDialog.find(".cancel").click(e), c.modalDialog.find("._tv-dialog-title-close").click(e), c.positionDialog(), c.applyHandlers(), c.modalDialog
                },
                createModalDialog: function(t, e) {
                    e = e || {}, null !== c.modalDialog && c.destroy(), c.modalDialog = o('<div class="_tv-dialog-shadowbox"><div class="_tv-dialog _tv-dialog-modal' + (e.addClass ? " " + e.addClass : "") + '">' + (e.noHeader ? "" : '<div class="_tv-dialog-title">' + (e.noClose ? "" : '<a class="_tv-dialog-title-close"></a>') + '<span class="_tv-dialog-title-text">' + t + "</span></div>") + '<div class="_tv-dialog-error"><span class="message"></span></div><div class="_tv-dialog-message"><span class="message"></span></div><div class="_tv-dialog-content"></div></div></div>').appendTo(o("body")).data("title", t), c._addMessageCloseButton(c.modalDialog.find("._tv-dialog-error")), c._addMessageCloseButton(c.modalDialog.find("._tv-dialog-message")), e.noShadowBox && c.modalDialog.addClass("transparent"),
                        e.addClass && c.modalDialog.addClass(e.addClass), e.width && c.modalDialog.find("._tv-dialog").css({
                            width: e.width
                        }), e.content && c.modalDialog.find("._tv-dialog-content").html(e.content);
                    var i = o(".fancybox-overlay");
                    if (i.length) {
                        var s = i.css("z-index");
                        o("._tv-dialog-shadowbox").css("z-index", s + 1)
                    }
                    return e.draggable && r(c.modalDialog).draggable(c._constrainDraggableOptionsIfNeeded({
                        handle: c.modalDialog.find("._tv-dialog-title")
                    })), e.zIndex && c.modalDialog.css("z-index", e.zIndex), c.modalDialog
                },
                _addMessageCloseButton: function(t) {
                    var e = o(i(215208)).attr({
                        class: "close",
                        title: n("Close message")
                    });
                    t.append(e), o(e).on("click", (function() {
                        t.animate({
                            marginTop: c.NOTIFICATION_ANIMATION_START_OFFSET,
                            opacity: 0
                        }, "fast", (function() {
                            t.hide()
                        }))
                    }))
                },
                createDialog: function(t, e) {
                    if (c.isOpen(t)) return (l = c.get(t)).find("._tv-dialog-content").html(""), l.data("new", !1), l;
                    var i = (e = e || {}).ownerDocument || document,
                        n = h(i),
                        d = n.ensureWindow(t, {
                            position: "relative"
                        }),
                        l = o(s.render('<div class="_tv-dialog _tv-dialog-nonmodal {{&addClass}}"><div class="_tv-dialog-title{{#hideTitle}} _tv-dialog-title-hidden{{/hideTitle}}{{#hideCloseCross}} _tv-dialog-title-no-close{{/hideCloseCross}}">{{^hideTitle}} {{&title}}{{/hideTitle}}{{^hideCloseCross}}<a class="_tv-dialog-title-close"></a>{{/hideCloseCross}}</div><div class="_tv-dialog-error"><span class="message"></span></div><div class="_tv-dialog-message"><span class="message"></span></div><div class="_tv-dialog-content"></div></div>', {
                            addClass: e.addClass || "",
                            hideTitle: e.hideTitle,
                            hideCloseCross: e.hideCloseCross,
                            title: t
                        }), i).appendTo(d);
                    c._addMessageCloseButton(l.find("._tv-dialog-error")), c._addMessageCloseButton(l.find("._tv-dialog-message")), e.width && l.css({
                        width: e.width
                    }), e.content && l.find("._tv-dialog-content").html(e.content);
                    var u = 0;
                    u = e.zIndex ? e.zIndex : c.dialogs && c.dialogs.length ? a(o.map(c.dialogs, (function(t) {
                        return parseInt((t.dialog || t).css("z-index"), 10)
                    }))) + 1 : 110, l.css("z-index", u), l.data("new", !0), l.data("title", t), l.data("id", c.dialogs.length + 1), c.dialogs.push({
                        title: t,
                        dialog: l,
                        id: c.dialogs.length + 1
                    }), l.on("mousedown touchstart", (function() {
                        n.moveToTop(t)
                    }));
                    var m = {
                        start: function(t, e) {
                            for (var i = e.helper.css("z-index"), s = 0, o = null, n = 0; n < c.dialogs.length; n++) {
                                var a = c.dialogs[n].dialog.css("z-index");
                                a > s && (s = a, o = c.dialogs[n].dialog)
                            }
                            e.helper.css("z-index", s), o.css("z-index", i)
                        }
                    };
                    return e.dragHandle ? m.handle = e.dragHandle : e.hideTitle || (m.handle = "._tv-dialog-title"), e.dragOptions && o.extend(m, e.dragOptions), r(l).draggable(c._constrainDraggableOptionsIfNeeded(m)), l
                },
                positionDialog: function(t, e, i) {
                    i = i || {};

                    function s() {
                        g.css("margin-left", -Math.round(g.outerWidth() / 2) + "px"), g.css("margin-top", -Math.round(g.outerHeight() / 2) + "px")
                    }
                    if (e = e || i.position, t) {
                        var n, a, r = t.prop("ownerDocument"),
                            h = r.defaultView,
                            d = t.width(),
                            l = t.height(),
                            u = o(h).width(),
                            m = o(h).height();
                        if (e && e.top && e.left) a = i.forcePosition ? e.left : Math.max(2, Math.min(u - d - 4, e.left)) + "px", n = i.forcePosition ? e.top : Math.max(2, Math.min(m - l - 4, e.top)) + "px";
                        else if (e && e.considerScroll) {
                            var p = o(r);
                            a = Math.round((u - d) / 2 + p.scrollLeft()) + "px",
                                n = Math.round((m - l) / 2 + p.scrollTop()) + "px"
                        } else a = Math.round((u - d) / 2) + "px", n = Math.round((m - l) / 2) + "px";
                        i.fadeIn ? t.css({
                            left: a,
                            top: n
                        }).hide().fadeIn("fast") : i.smooth ? t.animate({
                            left: a,
                            top: n
                        }) : t.css({
                            left: a,
                            top: n
                        })
                    } else {
                        var g = (t = c.modalDialog).find("._tv-dialog");
                        s(), g.resize(s)
                    }
                },
                applyHandlers: function(t, e) {
                    var i = !t || t === this.modalDialog,
                        s = (e = e || {}, i ? function() {
                            c.destroy()
                        } : function() {
                            c.destroy(t.data("title"))
                        }),
                        n = (t = t || c.modalDialog.find("._tv-dialog")).prop("ownerDocument");
                    e.beforeDestroy && t.on("destroy", e.beforeDestroy), t.find("._tv-dialog-title ._tv-dialog-title-close, .js-dialog-close").on("click", (function(t) {
                        e.closeHandler && "function" == typeof e.closeHandler ? e.closeHandler(t) : s()
                    })), e.doNotCloseOnBgClick || setTimeout((function() {
                        o(n).on("mousedown.closeDialog", (function(i) {
                            var a = o(i.target).parents().andSelf();
                            a.is(t) || e.doNotCloseOnBgClickIfShadowbox && a.is("._tv-dialog-shadowbox, .tv-dialog__modal-wrap") || a.is(".colorpicker, .charts-popup-list, ._tv-dialog, .tvcolorpicker-popup, .symbol-edit-popup, .ui-datepicker, .clockpicker-popover, .pac-container, .context-menu-wrapper") || (o(n).off("mousedown.closeDialog"), s())
                        }))
                    }), 0), t.find('input[type="checkbox"]').change((function() {
                        var t = o(this);
                        t.next("._tv-dialog-checkbox-mask").toggleClass("disabled", t.prop("disabled")).toggleClass("_tv-dialog-checkbox-mask-active", t.is(":checked"))
                    }));
                    var a = t.find('input[type="text"]').focus((function() {
                        o(this).addClass("_tv-dialog-content-textactive")
                    })).blur((function() {
                        o(this).removeClass("_tv-dialog-content-textactive")
                    })).first();
                    d || e.notFocusFirst || a.focus(), t.find('input[type="password"]').focus((function() {
                        o(this).addClass("_tv-dialog-content-textactive")
                    })).blur((function() {
                        o(this).removeClass("_tv-dialog-content-textactive")
                    })), t.find("textarea").focus((function() {
                        o(this).addClass("_tv-dialog-content-textareaactive")
                    })).blur((function() {
                        o(this).removeClass("_tv-dialog-content-textareaactive")
                    })), t.find("._tv-dialog-checkbox-mask").click((function() {
                        var t = o(this).prev();
                        t.prop("disabled") || (t.prop("checked", !t[0].checked), t.change())
                    })), e.doNotCloseOnEsc || o(n).bind("keyup.hideDialog", (function(e) {
                        if (27 === e.keyCode) return t ? c.destroy(t.data("title")) : c.destroy(), !1
                    })), e.processEnterButton && o(n).bind("keyup.confirmAndCloseDialog", (function(t) {
                        13 === t.keyCode && "textarea" !== t.target.tagName.toLowerCase() && (e.processEnterButton.click(), o(n).unbind("keyup.confirmAndCloseDialog"))
                    }))
                },
                isOpen: function(t) {
                    for (var e = 0; e < c.dialogs.length; e++)
                        if (c.dialogs[e].title === t) return !0;
                    return !1
                },
                get: function(t) {
                    for (var e = 0; e < c.dialogs.length; e++)
                        if (c.dialogs[e].title === t) return c.dialogs[e].dialog
                },
                destroy: function(t, e) {
                    var i = null;
                    if (t && "string" == typeof t)
                        for (var s = 0; s < c.dialogs.length; s++) c.dialogs[s].title === t && (i = c.dialogs[s].dialog.prop("ownerDocument"), c.dialogs[s].dialog.find(".apply-common-tooltip").mouseout(), c.dialogs[s].dialog.trigger("destroy", e), o(document).unbind("mouseup.hideDialog" + c.dialogs[s].id), o("input", c.dialogs[s].dialog).blur(), c.dialogs[s].dialog.remove(), c.dialogs.splice(s, 1),
                            h(i).unregisterWindow(t));
                    else c.modalDialog && (i = c.modalDialog.prop("ownerDocument"), c.modalDialog.find(".apply-common-tooltip").mouseout(), c.modalDialog.find("._tv-dialog").trigger("destroy"), c.modalDialog.remove(), c.modalDialog = null);
                    o(i).unbind("keyup.hideDialog"), o(i).unbind("keyup.confirmAndCloseDialog")
                },
                resizeContent: function(t, e, i) {
                    null == i && (i = 20), t += i;
                    var s = parseInt(o("body").height(), 10),
                        n = e.height();
                    t > s && (n -= t - s, n = Math.max(0, n), e.height(n))
                }
            };
            t.exports.TVOldDialogs = c
        },
        685044: (t, e, i) => {
            "use strict";
            i.d(e, {
                getViolations: () => n
            });
            var s = i(120220);
            let o = null;

            function n() {
                if (null === o) {
                    const t = window.location.protocol + "//" + window.location.host,
                        e = t + "/house-rules/",
                        i = t + "/advertising-info/";
                    o = [{
                        name: (0, s.t)("Multiple accounts"),
                        text: (0, s.t)("Use only one account - registering with multiple accounts is not allowed."),
                        id: "multi_acc"
                    }, {
                        name: (0, s.t)("Suspicious links"),
                        text: (0, s.t)("No posting links or reference to content / sites that contain viruses or malware."),
                        id: "links"
                    }, {
                        name: (0, s.t)("Hate speech"),
                        text: (0, s.t)("No defamatory, threatening or discriminatory remarks, hate speech or personal attacks."),
                        id: "hate_speech"
                    }, {
                        name: (0, s.t)("English only"),
                        text: (0, s.t)("English only for main public chatrooms and public ideas - so that everyone can understand. Any language can be spoken in the custom chat rooms. Later we may introduce main public chatrooms for other languages."),
                        id: "language"
                    }, {
                        name: (0, s.t)("Personal information"),
                        text: (0, s.t)("Do not post offline personal contact information."),
                        id: "personal_info"
                    }, {
                        name: (0, s.t)("Illicit content"),
                        text: (0, s.t)("No links / posts with illegal content, pornography, or nudity."),
                        id: "illicit_content"
                    }, {
                        name: (0, s.t)("Rights infringement"),
                        text: (0, s.t)("Do not publish content that is not your original work, or infringes the copyright of any third party."),
                        id: "copyright"
                    }, {
                        name: (0, s.t)("Unsolicited advertising"),
                        text: (0, s.t)("No advertising, direct marketing, or solicitation! To engage our audience please go to {link}").format({
                            link: i
                        }),
                        id: "ads"
                    }, {
                        name: (0, s.t)("Violation of chat & comment etiquette"),
                        text: (0, s.t)("Violation of chat etiquette. For more information on this etiquette please go to {link}", {
                            replace: {
                                link: e
                            }
                        }),
                        id: "recidive"
                    }, {
                        name: (0, s.t)("Violation of script publishing"),
                        text: (0, s.t)("Violation of script publishing. For more information on this please go to {link}").format({
                            link: e
                        }),
                        id: "script_publishing"
                    }]
                }
                return o
            }
        },
        464161: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                createDialog: () => n
            });
            var s = i(158530),
                o = i(751609);

            function n(t) {
                const e = t.type || "popup";
                return delete t.type, "modal" === e ? new s.TVModal(t) : new o.TVPopup(t)
            }
        },
        991714: (t, e, i) => {
            "use strict";

            function s() {
                return Promise.all([i.e(23876), i.e(26822), i.e(69756), i.e(88278), i.e(52802), i.e(94595), i.e(94269), i.e(84479), i.e(13940), i.e(55442), i.e(75173), i.e(49638), i.e(92793), i.e(496), i.e(40459), i.e(84215), i.e(76770), i.e(11216), i.e(43424), i.e(20396), i.e(74061), i.e(8443), i.e(38405), i.e(93685), i.e(60167), i.e(94398)]).then(i.bind(i, 382657)).then(t => t.createIgnoreUsersDialog())
            }
            i.d(e, {
                openIgnoreUsersDialog: () => s
            })
        },
        773292: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                TAB_ICON_URLS: () => o,
                setTabIcon: () => n
            });
            var s = i(918184);
            const o = {
                UNREAD_MESSAGES: "/static/images/favicon/unread_messages/favicon.ico",
                DEFAULT: "/favicon.ico"
            };

            function n(t) {
                s('link[rel="icon"]').attr("href", t)
            }
        },
        411585: (t, e, i) => {
            "use strict";

            function s(t) {
                return t + "…"
            }
            i.r(e), i.d(e, {
                appendEllipsis: () => s
            })
        },
        972006: t => {
            "use strict";
            var e, i = [];

            function s() {
                for (var t = !1, s = i.length; s--;) {
                    var o = i[s].onclose;
                    i[s].wnd.closed ? (o && o.call(i[s].wnd), i.splice(s, 1)) : o && (t = !0)
                }!t && e && (clearInterval(e), e = void 0)
            }
            t.exports = {
                open: function(t) {
                    "string" == typeof t ? t = {
                        url: t
                    } : null == t && (t = {}), null != t.url && "" !== t.url || (t.url = "about:blank"), null == t.name && (t.name = void 0);
                    var o = window.open(t.url, t.name, function(t) {
                            if (null == t) return "";
                            if ("object" == typeof t) {
                                var e = "";
                                for (var i in t) {
                                    var s = t[i];
                                    if ("boolean" == typeof s) s = s ? "yes" : "no";
                                    else if (null == s) continue;
                                    e += (e ? "," : "") + i + "=" + s
                                }
                                return e
                            }
                            return t + ""
                        }(t.parameters)),
                        n = void 0 !== t.data,
                        a = {
                            wnd: o,
                            data: t.data
                        };
                    return "function" == typeof t.onclose && (a.onclose = t.onclose, n = !0), "function" == typeof t.onbound && (a.onbound = t.onbound, n = !0), n && (i.push(a), !e && a.onclose && (e = setInterval(s, 1e3))), o
                },
                getData: function(t) {
                    for (var e = i.length; e--;)
                        if (i[e].wnd === t) return i[e].onbound && (i[e].onbound.call(t), i[e].onbound = null), i[e].data
                }
            }
        },
        980225: (t, e, i) => {
            "use strict";
            var s = i(4516),
                o = i(541962).TVXWindowEvents,
                n = i(929098).trackEvent,
                a = function() {
                    var t = "tvdesktopnotifications.";
                    o.on("desktop-notification-tab-visibility-request", (function() {
                        "true" === TVLocalStorage.getItem(t + "tabs-hidden") && TVLocalStorage.setItem(t + "tabs-hidden", document.hidden)
                    }));

                    function e(t) {
                        var e = t.split("\n");
                        return e.length > 1 && (t = e[0]), ((t = t.trim()).length > 30 || e.length > 1) && (t = t.substring(0, 30) + "..."), t
                    }

                    function i() {
                        return window.Notification.permission
                    }

                    function a(t) {
                        var e = i();
                        "granted" === e && "function" == typeof t ? t() : "default" === e && window.Notification.requestPermission((function(e) {
                            "granted" === e && "function" == typeof t && t()
                        }))
                    }
                    return window.Notification ? {
                        show: function(r, h, d, l) {
                            s.ownPushStream() && (n("Desktop Notifications", "Notification Show Attempt"), "denied" !== i() && a((function() {
                                TVLocalStorage.setItem(t + "tabs-hidden", document.hidden), o.emit("desktop-notification-tab-visibility-request"), setTimeout((function() {
                                    "false" !== TVLocalStorage.getItem(t + "tabs-hidden") && document.hidden ? (! function(t, i, s, o) {
                                        var n = new window.Notification(t, {
                                            body: e(i),
                                            icon: s || "/static/images/desktop-notification.png"
                                        });
                                        n.onclick = function() {
                                            window.focus(), "function" == typeof o && o()
                                        }, setTimeout(n.close.bind(n), 5e3)
                                    }(r, h, d, l), n("Desktop Notifications", "Notification Show Success")) : n("Desktop Notifications", "Notification Show Tab Visible")
                                }), 100)
                            })))
                        },
                        askPermission: a
                    } : {
                        show: function() {},
                        askPermission: function() {}
                    }
                }();
            t.exports = a
        },
        308075: (t, e, i) => {
            "use strict";
            i.d(e, {
                renderBadgeAccountWithoutFeaturedBroker: () => a
            });
            var s = i(814874),
                o = i(230873),
                n = i(384658);

            function a(t, e) {
                const {
                    badges: i,
                    size: a,
                    getTitle: r,
                    getLink: h
                } = e;
                if (0 === i.length) return;
                const d = i.filter(t => !(0, s.isFeaturedBroker)(t.name)),
                    l = (0, o.getBadgeAccountName)(d);
                l && (0, n.renderBadgeAccount)(t, {
                    name: l,
                    title: r && r(i),
                    href: h && h(l),
                    size: a
                })
            }
        },
        676905: (t, e, i) => {
            "use strict";
            i.d(e, {
                convertToBadgeAccountProps: () => h
            });
            i(568421);
            var s = i(120220),
                o = i(820664),
                n = i(588015);
            const a = (0, s.t)("Moderator"),
                r = (0, s.t)("Pine Wizard");

            function h(t) {
                if (Array.isArray(t.badges)) return t.badges;
                const e = [];
                return t.is_pine_wizard && e.push({
                    name: "pine_wizard",
                    verbose_name: r
                }), t.is_featured && e.push({
                    name: o.BadgeBrokerNames.BrokerExtraFeatured,
                    verbose_name: ""
                }), t.broker_plan && e.push({
                    name: "broker:" + t.broker_plan,
                    verbose_name: ""
                }), t.is_moderator && !t.hide_mod_badge && e.push({
                    name: "moderator",
                    verbose_name: a
                }), t.is_pro && t.pro_plan && e.push({
                    name: "pro:" + t.pro_plan,
                    verbose_name: (0, n.getPlanName)(t.pro_plan)
                }), e
            }
        },
        32500: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 5" width="9" height="5"><path fill="currentColor" d="M0 0h9L4.5 5z"/></svg>'
        },
        125955: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 973.125"><path d="M960 832L710.875 582.875C746.438 524.812 768 457.155 768 384 768 171.97 596 0 384 0 171.97 0 0 171.97 0 384c0 212 171.97 384 384 384 73.156 0 140.812-21.562 198.875-57L832 960c17.5 17.5 46.5 17.375 64 0l64-64c17.5-17.5 17.5-46.5 0-64zM384 640c-141.375 0-256-114.625-256-256s114.625-256 256-256 256 114.625 256 256-114.625 256-256 256z"/></svg>'
        },
        872531: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16"><path d="M15.09 6.857s-.571 0-.724-.533c-.114-.457-.305-.876-.533-1.295-.229-.495.152-.876.152-.876l.571-.571c.229-.229.229-.61 0-.876l-.762-.762c-.229-.229-.61-.229-.876 0l-.571.571s-.381.381-.876.152c-.419-.229-.838-.419-1.295-.533-.533-.152-.533-.724-.533-.724v-.8a.602.602 0 0 0-.61-.61H7.966a.602.602 0 0 0-.61.61v.8s0 .571-.533.724c-.457.114-.876.305-1.295.533-.495.229-.876-.152-.876-.152l-.571-.571c-.229-.229-.61-.229-.876 0l-.762.762c-.229.229-.229.61 0 .876l.571.571s.381.381.152.876c-.229.419-.419.838-.533 1.295-.152.495-.724.533-.724.533h-.8a.602.602 0 0 0-.61.61v1.067c0 .343.267.61.61.61h.8s.571 0 .724.533c.114.457.305.876.533 1.295.229.495-.152.876-.152.876l-.571.571c-.229.229-.229.61 0 .876l.762.762c.229.229.61.229.876 0l.571-.571s.381-.381.876-.152c.419.229.838.419 1.295.533.495.152.533.724.533.724v.8c0 .343.267.61.61.61h1.067c.343 0 .61-.267.61-.61v-.8s0-.571.533-.724c.457-.114.876-.305 1.295-.533.495-.229.876.152.876.152l.571.571c.229.229.61.229.876 0l.762-.762c.229-.229.229-.61 0-.876l-.571-.571s-.381-.381-.152-.876c.229-.419.419-.838.533-1.295.152-.495.724-.533.724-.533h.8c.343 0 .61-.267.61-.61V7.467a.602.602 0 0 0-.61-.61h-.8zM8.5 11.555a3.541 3.541 0 0 1-3.556-3.556A3.541 3.541 0 0 1 8.5 4.443a3.541 3.541 0 0 1 3.556 3.556A3.561 3.561 0 0 1 8.5 11.555z"/></svg>'
        },
        69206: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 586.09999 586.09996" width="586.1" height="586.1" enable-background="new 0 0 595.3 841.9"><path d="M0 586.1h117.2l351.7-351.7 117.2 117.3V0H234.4l117.3 117.2L0 468.9z"/></svg>'
        },
        209927: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 18" width="8" height="18"><path d="M3 8V4H-.5L4-.5 8.5 4H5v4zM3 10h2v4h3.5L4 18.5-.5 14H3z"/></svg>'
        },
        967037: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.888672 15.336914" width="14.889" height="15.337" enable-background="new 0 0 32 32"><path d="M14.062 7.54q0 1.085-.32 2.1-.313 1.017-.9 1.853H9.406l-.21-.907q-.58.47-1.11.72-.53.25-1.22.25-1.31 0-2.1-.993-.782-.992-.782-2.773 0-1.774.96-2.83.962-1.053 2.298-1.053.572 0 1.01.133.437.125.944.382v-.375h1.243v6.578h1.89q.33-.585.49-1.46.17-.883.17-1.58 0-1.28-.36-2.327-.35-1.047-1.04-1.797-.686-.75-1.7-1.14-1.014-.41-2.3-.41-1.25 0-2.29.457-1.03.454-1.775 1.22-.75.765-1.18 1.836-.42 1.06-.42 2.265 0 1.29.402 2.36.404 1.063 1.146 1.82.775.79 1.814 1.188 1.04.41 2.267.41.67 0 1.383-.085.72-.086 1.376-.274v1.11q-.76.163-1.416.217-.656.06-1.35.06-1.454 0-2.697-.5-1.242-.49-2.132-1.38-.9-.898-1.4-2.156-.5-1.26-.5-2.78 0-1.448.526-2.69.525-1.25 1.43-2.164.908-.914 2.15-1.438 1.244-.53 2.66-.53 1.53 0 2.733.484 1.2.484 2.03 1.36.83.874 1.26 2.11.445 1.225.445 2.733zM9.18 9.532V5.485q-.493-.227-.884-.32-.39-.102-.836-.102-1.008 0-1.578.703-.57.703-.57 2 0 1.274.453 1.93.453.648 1.414.648.52 0 1.04-.242t.95-.57z" font-family="Arial-BoldMT" font-size="16"/></svg>'
        },
        979169: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12"><path d="M5 .7C3 .7 2 3 2 5c0 4 0 4-2 5h12c-2-1-2-1-2-5C10 3 9 .7 7 .7c0-.9-2-.9-2 0zM4 11c0 1 1 1 2 1s2 0 2-1z"/></svg>'
        },
        109682: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><path d="M7 2h3v13H7M2 7h13v3H2z"/></svg>'
        },
        58940: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z"/></g></svg>'
        },
        52959: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 586.70002 595.19999" width="586.7" height="595.2" enable-background="new 0 0 595.3 841.9"><path d="M293.4 0C131.8 0 0 131.8 0 297.6s131.8 297.6 293.4 297.6 293.3-131.8 293.3-297.6S454.9 0 293.4 0zm68 182.8h85v93.5h-85v-93.5zm-212.6 0h85v93.5h-85v-93.5zm148.8 306.1c-136 0-187.1-106.3-187.1-106.3h378.4s-55.2 106.3-191.3 106.3z"/></svg>'
        },
        676190: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 11.5" width="20" height="16"><path d="M7.5 4.8c-1.1 0-1.9.9-1.9 1.9s.9 1.9 1.9 1.9c1.1 0 1.9-.9 1.9-1.9s-.9-1.9-1.9-1.9zM13 1.9h-2.2c0-1-.9-1.9-2-1.9H6.1C5 0 4.2.9 4.2 1.9H1.9c-1 0-1.9.9-1.9 2v5.7c0 1.1.9 1.9 1.9 1.9H13c1.1 0 1.9-.9 1.9-1.9V3.9c.1-1.1-.8-2-1.9-2zm-5.5 8.3C5.6 10.2 4 8.6 4 6.7s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4c.1 1.9-1.4 3.5-3.3 3.5z"/></svg>'
        },
        841142: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M10.893 9.512l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'
        },
        676842: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17px" height="17px"><circle cx="10" cy="6" r="3"/><path d="M10 10c-4.575 0-6 3.333-6 3.333V15h12v-1.667S14.575 10 10 10zM2 5v6h2V5zm4 2v2H0V7z"/></svg>'
        },
        157191: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" width="34px" height="34px"><path d="M21.197 2.06c-7.07 0-12.8 5.83-12.8 13.027 0 7.14 5.644 12.934 12.638 13.024v5.545l8.747-8.902A13.208 13.208 0 0 0 34 15.03C34 7.832 28.267 2 21.197 2zM10.463 27.674v-1.58l-1.275-.017c-3.642-.046-6.606-3.1-6.606-6.806 0-3.052 1.986-5.643 4.71-6.504.16-.984.417-1.935.764-2.844C3.518 10.52 0 14.45 0 19.246c0 4.7 3.433 8.64 7.88 9.33V34l6.377-6.49a14.307 14.307 0 0 1-2.146-1.533l-1.643 1.674z"/></svg>'
        },
        45192: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" width="32px" height="24px"><path d="M32 24V0L20 12v12zm-20 0V0L0 12v12z"/></svg>'
        },
        215208: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" width="9px" height="9px"><path d="M2 1L1 2l2.5 2.5L1 7l1 1 2.5-2.5L7 8l1-1-2.5-2.5L8 2 7 1 4.5 3.5z"/></svg>'
        },
        330565: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 670 745"><path d="M417.91 738.04c-118.64-22.82-190.57-47.072-218.92-73.807-22.734-21.44-24.27-32.633-24.27-176.81 0-88.1 1.86-140.31 5.373-150.86 11.138-33.44 36.66-57.735 133.93-127.5 67.296-48.267 90.59-69.93 140.55-130.72C509.177 11.903 521.965.078 539.24.046c16.013-.03 25.43 13.07 32.622 45.373 7.83 35.164-3.512 82.774-30.952 129.93-40.764 70.052-39.008 75.19 31.705 92.733 49.08 12.178 81.767 30 91.884 50.097 8.98 17.844 7.335 39.84-7.633 102.04-7.523 31.264-15.156 66.454-16.962 78.203-1.806 11.748-11.588 46.504-21.738 77.236s-18.454 58.25-18.454 61.152c0 8.677-33.212 71.96-44.153 84.13-22.217 24.715-68.287 30.435-137.65 17.093zm-345.68-25.9c-5.722-2.5-22.273-14.2-36.78-26.03-14.506-11.88-28.418-21.59-30.914-21.59-2.82 0-4.538-65.6-4.538-173.26 0-95.29 1.752-173.25 3.893-173.25 2.144 0 17.104-11.498 33.248-25.552 30.614-26.65 49.608-34.114 68.466-26.907 16.703 6.386 18.065 16.296 7.704 56.06-8.34 32-9.423 51.51-9.423 169.55 0 131.23.62 138.49 16.636 194.72 5.75 20.178-24.144 36.41-48.29 26.22z"/></svg>'
        },
        39441: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" width="42px" height="42px"><path d="M38.626 17.554h-2.81c-.354-1.755-1.055-3.157-1.756-4.566l1.756-1.755c1.4-1.4 1.4-3.51 0-4.912s-3.51-1.4-4.912 0l-1.756 1.76c-1.4-.7-2.81-1.4-4.565-1.752V3.51c0-2.11-1.402-3.51-3.51-3.51s-3.52 1.41-3.52 3.51v2.81c-1.754.355-3.156 1.056-4.565 1.756L11.233 6.32c-1.4-1.4-3.51-1.4-4.912 0s-1.4 3.512 0 4.913l1.76 1.755c-.7 1.402-1.4 2.81-1.753 4.566H3.51c-2.1 0-3.51 1.41-3.51 3.51s1.4 3.512 3.51 3.512h2.81c.355 1.755 1.056 3.156 1.756 4.565L6.32 30.9c-1.4 1.402-1.4 3.51 0 4.913s3.512 1.4 4.913 0l1.755-1.756c1.402.7 2.81 1.402 4.566 1.756v2.815c0 2.11 1.4 3.51 3.51 3.51s3.51-1.4 3.51-3.51v-2.81c1.757-.354 3.158-1.055 4.567-1.756l1.76 1.754c1.4 1.4 3.51 1.4 4.915 0s1.4-3.51 0-4.912l-1.756-1.756c.7-1.4 1.4-2.81 1.755-4.565h2.81c2.107 0 3.51-1.4 3.51-3.51.006-2.11-1.403-3.52-3.505-3.52zm-17.56 14.05c-5.968 0-10.534-4.565-10.534-10.532s4.566-10.54 10.533-10.54 10.532 4.566 10.532 10.533-4.558 10.54-10.532 10.54zm0-14.05c-2.11 0-3.512 1.4-3.512 3.51s1.4 3.512 3.51 3.512 3.51-1.402 3.51-3.51-1.4-3.512-3.51-3.512z"/></svg>'
        },
        851341: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50"><path d="M20 17.995c0-1.102.753-1.51 1.69-.91l10.62 6.83c.934.6.937 1.57 0 2.17l-10.62 6.83c-.934.6-1.69.192-1.69-.91v-14.01z"/></svg>'
        },
        127032: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="27" height="16"><g fill="none"><rect width="27" height="16" fill="#2962FF" rx="8"/><path stroke="#FFF" stroke-linejoin="round" d="M8.5 3.5h6a2 2 0 0 1 2 2v1l4-2v7l-4-2v1a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z"/><path fill="#FFF" fill-rule="nonzero" d="M20 5.309l-3.276 1.638A.5.5 0 0 1 16 6.5v-1A1.5 1.5 0 0 0 14.5 4h-6A1.5 1.5 0 0 0 7 5.5v5A1.5 1.5 0 0 0 8.5 12h6a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 .724-.447L20 10.69V5.309zM17 10.5a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 6 10.5v-5A2.5 2.5 0 0 1 8.5 3h6A2.5 2.5 0 0 1 17 5.5v.191l3.276-1.638A.5.5 0 0 1 21 4.5v7a.5.5 0 0 1-.724.447L17 10.31v.191z"/></g></svg>'
        }
    }
]);