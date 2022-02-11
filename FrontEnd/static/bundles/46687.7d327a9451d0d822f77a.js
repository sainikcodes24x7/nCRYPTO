(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [46687, 79836, 36170], {
        834597: t => {
            t.exports = {
                hidden: "hidden-3HK0hl_S",
                buttonIcon: "buttonIcon-3HK0hl_S"
            }
        },
        918578: t => {
            t.exports = {
                buttonInner: "buttonInner-3RPAzX-s",
                hidden: "hidden-3RPAzX-s"
            }
        },
        795621: (t, e, n) => {
            "use strict";
            n.d(e, {
                AnchorButton: () => d,
                Button: () => l
            });
            var o = n(667294),
                r = n(99256);

            function s(t = "default") {
                switch (t) {
                    case "default":
                        return "primary";
                    case "stroke":
                        return "secondary"
                }
            }

            function a(t = "primary") {
                switch (t) {
                    case "primary":
                        return "brand";
                    case "success":
                        return "green";
                    case "default":
                        return "gray";
                    case "danger":
                        return "red"
                }
            }

            function i(t = "m") {
                switch (t) {
                    case "s":
                        return "xsmall";
                    case "m":
                        return "small";
                    case "l":
                        return "large"
                }
            }

            function c(t) {
                const {
                    intent: e,
                    size: n,
                    appearance: o,
                    useFullWidth: r,
                    icon: c,
                    ...l
                } = t;
                return { ...l,
                    color: a(e),
                    size: i(n),
                    variant: s(o),
                    stretch: r,
                    startIcon: c
                }
            }

            function l(t) {
                return o.createElement(r.SquareButton, { ...c(t)
                })
            }

            function u(t) {
                const {
                    intent: e,
                    size: n,
                    appearance: o,
                    useFullWidth: r,
                    icon: c,
                    ...l
                } = t;
                return { ...l,
                    color: a(e),
                    size: i(n),
                    variant: s(o),
                    stretch: r,
                    startIcon: c
                }
            }

            function d(t) {
                return o.createElement(r.SquareAnchorButton, { ...u(t)
                })
            }
        },
        316831: (t, e, n) => {
            "use strict";
            n.d(e, {
                DonationButton: () => d
            });
            var o = n(667294),
                r = n(120220),
                s = n(393916),
                a = n(513904),
                i = n(929098),
                c = n(133093),
                l = n(505532),
                u = n(834597);

            function d(t) {
                const {
                    donationUserInfo: e,
                    targetObjectId: n,
                    hidden: d,
                    onMount: h,
                    onUnmount: f,
                    action: m,
                    donationKind: p,
                    closeOnEsc: w,
                    size: v = "small"
                } = t, b = (0, o.useCallback)(() => new Promise(t => {
                    m && m(), window.runOrSignIn(() => {
                        (0, a.openDonationPopup)({
                            donationUserInfo: e,
                            donationKind: p,
                            targetObjectId: n,
                            onMount: () => {
                                h && h()
                            },
                            onUnmount: () => {
                                f && f()
                            },
                            onOpen: t,
                            closeOnEsc: null == w || w
                        }), (0, i.trackEvent)("Donation", "Open donation dialog")
                    }, {
                        source: "Stream chat donate button"
                    })
                }), []);
                return o.createElement(s.ButtonWithLock, {
                    onClick: b,
                    variant: "primary",
                    className: d && u.hidden,
                    icon: "medium" === v ? c : l,
                    size: v
                }, r.t("Cheer"))
            }
        },
        607749: (t, e, n) => {
            "use strict";
            n.d(e, {
                FollowButton: () => c
            });
            var o = n(667294),
                r = n(120220),
                s = n(294184),
                a = n(99256),
                i = n(918578);
            class c extends o.PureComponent {
                constructor(t) {
                    super(t), this._buttonRef = o.createRef(), this._mutationObserver = null, this._observerCallback = (t, e) => {
                        const {
                            followed: n
                        } = this.state;
                        for (const e of t) {
                            if ("attributes" !== e.type || "class" !== e.attributeName) return;
                            const t = e.target.classList;
                            if (t.contains("js-follow-user--followed") && !n) return this.setState({
                                followed: !0
                            });
                            if (!t.contains("js-follow-user--followed") && n) return this.setState({
                                followed: !1
                            })
                        }
                    }, this.state = {
                        hover: !1,
                        followed: this.props.isFollowed
                    }
                }
                componentDidMount() {
                    this._buttonRef && this._buttonRef.current && (this._mutationObserver = new MutationObserver(this._observerCallback), this._mutationObserver.observe(this._buttonRef.current, {
                        attributes: !0
                    }))
                }
                componentDidUpdate(t) {
                    t.isFollowed !== this.props.isFollowed && this.setState({
                        followed: this.props.isFollowed
                    })
                }
                componentWillUnmount() {
                    this._mutationObserver && this._mutationObserver.disconnect()
                }
                render() {
                    const {
                        authorId: t,
                        hidden: e,
                        size: n = "small",
                        variant: c = "secondary",
                        color: l = "brand"
                    } = this.props, {
                        followed: u,
                        hover: d
                    } = this.state, h = function(t, e) {
                        if (e) return t ? r.t("Unfollow") : r.t("Follow");
                        return t ? r.t("Following", {
                            context: "follow_status"
                        }) : r.t("Follow")
                    }(u, d);
                    return o.createElement("div", {
                        "data-id": t,
                        className: s("js-follow-user", "js-follow-user-" + t, u && "js-follow-user--followed", e && i.hidden),
                        ref: this._buttonRef,
                        onMouseEnter: () => this.setState({
                            hover: !0
                        }),
                        onMouseLeave: () => this.setState({
                            hover: !1
                        })
                    }, o.createElement(a.SquareButton, {
                        variant: c,
                        color: l,
                        size: n
                    }, o.createElement("div", {
                        className: i.buttonInner
                    }, h)))
                }
            }
        },
        513904: (t, e, n) => {
            "use strict";

            function o(t) {
                return Promise.all([n.e(61212), n.e(85597), n.e(74814), n.e(81542), n.e(59678), n.e(14457), n.e(84044), n.e(28647), n.e(45480), n.e(19894), n.e(73362), n.e(39290), n.e(82163)]).then(n.bind(n, 519751)).then(e => {
                    e.renderDonationPopup(t)
                })
            }
            n.d(e, {
                openDonationPopup: () => o
            })
        },
        436170: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                htmlEscape: () => s,
                removeTags: () => a,
                removeSpaces: () => i,
                capitalizeFirstLetterInWord: () => c
            });
            const o = /[<"'&>]/g,
                r = t => `&#${t.charCodeAt(0)};`;

            function s(t) {
                return t.replace(o, r)
            }

            function a(t = "") {
                return t.replace(/(<([^>]+)>)/gi, "")
            }

            function i(t = "") {
                return t.replace(/\s+/g, "")
            }

            function c(t = "") {
                return t.replace(/\b\w/g, t => t.toUpperCase())
            }
        },
        859943: (t, e, n) => {
            "use strict";

            function o(t, e = window) {
                const n = "theme-" + t,
                    o = e.document.documentElement.classList;
                for (const t of Array.from(o)) t.startsWith("theme-") && t !== n && o.remove(t);
                o.add(n)
            }
            n.r(e), n.d(e, {
                applyTheme: () => o
            })
        },
        787479: (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                watchedTheme: () => a,
                setTheme: () => i
            });
            var o = n(765066),
                r = n.n(o),
                s = n(859943);
            const a = new(r());

            function i(t) {
                a.setValue(t)
            }
            a.subscribe(t => {
                (0, s.applyTheme)(t, window)
            })
        },
        505532: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.25 9a5.75 5.75 0 0 1 9.79-4.1.75.75 0 1 0 1.05-1.07 7.25 7.25 0 0 0-12.18 6.7.75.75 0 1 0 1.47-.32c-.09-.4-.13-.8-.13-1.21zm12.78-1.78a.75.75 0 0 0-1.45.36A5.77 5.77 0 0 1 4.87 13a.75.75 0 0 0-1.08 1.05 7.25 7.25 0 0 0 12.24-6.82zm-7.68.07a.75.75 0 0 0-1.06 0L5.22 9.36a.75.75 0 1 0 1.06 1.06l1.54-1.54 1.54 1.54a.75.75 0 0 0 1.06 0l2.06-2.07a.75.75 0 0 0-1.06-1.06L9.9 8.83 8.35 7.29z"/></svg>'
        },
        133093: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M3.75 14a10.25 10.25 0 0 1 18.24-6.42.75.75 0 0 0 1.17-.95A11.75 11.75 0 0 0 2.69 17.2a.75.75 0 1 0 1.44-.4c-.25-.89-.38-1.82-.38-2.79zm21.42-3.66a.75.75 0 1 0-1.43.47A10.24 10.24 0 0 1 14 24.25c-3.5 0-6.6-1.76-8.45-4.45a.75.75 0 0 0-1.24.85A11.74 11.74 0 0 0 25.75 14c0-1.28-.2-2.5-.58-3.66zm-12.6 1.13a.75.75 0 0 0-1.06 0l-3.93 3.92a.75.75 0 0 0 1.06 1.06l3.4-3.39 3.4 3.4c.28.29.76.29 1.05 0l3.93-3.93a.75.75 0 1 0-1.06-1.06l-3.4 3.4-3.4-3.4z"/></svg>'
        }
    }
]);