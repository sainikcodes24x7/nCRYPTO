(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [41242], {
        359596: (e, t, a) => {
            e.exports = a.p + "3_notes_reverb.09e1400a89db8dd7527e5f3fa415051a.mp3"
        },
        667669: (e, t, a) => {
            e.exports = a.p + "alarm_clock.48d3df0afe4d4981523b8a12e4e25f92.mp3"
        },
        44386: (e, t, a) => {
            e.exports = a.p + "alert_calling.a4d0d2424e7055609cc4b3e053d83cb7.mp3"
        },
        707086: (e, t, a) => {
            e.exports = a.p + "beep_beep.b0a574ec7e1237d53fd1c736fd463cbc.mp3"
        },
        976812: (e, t, a) => {
            e.exports = a.p + "chirpy.6792fab6703f7222b9e671731318b1a8.mp3"
        },
        213199: (e, t, a) => {
            e.exports = a.p + "fault.f9561694f3fce480ca1f9acbf8fca8f1.mp3"
        },
        712853: (e, t, a) => {
            e.exports = a.p + "fired.ecfdbbef82db7347aed64ea12a69d5df.mp3"
        },
        238457: (e, t, a) => {
            e.exports = a.p + "hand_bell.8fa7de2a7a40d51c4ee62d478d137e10.mp3"
        },
        939572: (e, t, a) => {
            e.exports = a.p + "call.961bf7a7267717c572de1c89456459d0.mp3"
        },
        566969: (e, t, a) => {
            e.exports = a.p + "chat_calling.e1e2e9645beebf2fe7634628b33a7fef.mp3"
        },
        119276: (e, t, a) => {
            e.exports = a.p + "hangup.a9dcd5a2dc2fc37abba02c7d688c13ca.mp3"
        },
        493945: (e, t, a) => {
            e.exports = a.p + "message.49f6f04e7c116770d4573e094e4a0013.mp3"
        },
        164419: (e, t, a) => {
            e.exports = a.p + "popup.0fae26fafe80bd033b16c1aff723016e.mp3"
        },
        735713: (e, t, a) => {
            e.exports = a.p + "notification.9344fa5a37d4769a5b7801274fe5e5a6.mp3"
        },
        641242: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                DEFAULT_SOUNDS: () => $,
                availableSounds: () => _,
                play: () => w,
                stop: () => x,
                onStopped: () => C,
                isPlaying: () => M,
                enableAlertSoundsForMobile: () => N,
                enableForMobile: () => k
            });
            var o = a(120220),
                r = a(640142),
                l = a(987380),
                n = a(765066),
                i = a.n(n),
                p = a(667669),
                s = a(707086),
                d = a(44386),
                c = a(566969),
                f = a(939572),
                u = a(976812),
                h = a(213199),
                m = a(712853),
                b = a(238457),
                g = a(119276),
                y = a(493945),
                P = a(735713),
                v = a(164419),
                A = a(359596);
            const E = (0, l.getLogger)("Lib.Sound", {
                    color: "#dea433"
                }),
                $ = {
                    sound: "notification/notification",
                    alert: "alert/fired"
                },
                _ = [{
                    title: (0, o.t)("Alarm Clock"),
                    path: "alert/alarm_clock",
                    soundForAlerts: !0,
                    filePath: p
                }];
            _.unshift({
                path: $.sound,
                title: (0, o.t)("Default"),
                common: !0,
                filePath: P
            }, {
                title: (0, o.t)("Chat Message"),
                path: "chat/message",
                filePath: y,
                common: !0
            }, {
                title: (0, o.t)("Chat Popup"),
                path: "chat/popup",
                filePath: v,
                common: !0
            }, {
                title: (0, o.t)("Chat Call"),
                path: "chat/call",
                filePath: f
            }, {
                title: (0, o.t)("Chat Calling"),
                path: "chat/calling",
                filePath: c
            }, {
                title: (0, o.t)("Chat Hangup"),
                path: "chat/hangup",
                filePath: g
            }, {
                title: (0, o.t)("Thin"),
                path: $.alert,
                filePath: m,
                soundForAlerts: !0
            }, {
                title: (0, o.t)("3 Notes Reverb"),
                path: "alert/3_notes_reverb",
                filePath: A,
                soundForAlerts: !0
            }), _.push({
                title: (0, o.t)("Beep-beep"),
                path: "alert/beep_beep",
                filePath: s,
                soundForAlerts: !0
            }, {
                title: (0, o.t)("Calling"),
                path: "alert/calling",
                filePath: d,
                soundForAlerts: !0
            }, {
                title: (0, o.t)("Chirpy"),
                path: "alert/chirpy",
                filePath: u,
                soundForAlerts: !0
            }, {
                title: (0, o.t)("Fault"),
                path: "alert/fault",
                filePath: h,
                soundForAlerts: !0
            }, {
                title: (0, o.t)("Hand Bell"),
                path: "alert/hand_bell",
                filePath: b,
                soundForAlerts: !0
            });
            const F = {};

            function w(e = $.sound, t) {
                if ((0, r.isOnMobileAppPage)("any")) return Promise.resolve();
                E.logNormal(`Sound play attempt for "${e}" duration-${t}s;`);
                return S(e).play(t)
            }

            function x(e) {
                if ((0, r.isOnMobileAppPage)("any")) return;
                let t = [];
                e ? t.push(S(e)) : t = Object.values(F), t.forEach(e => {
                    e.stop()
                })
            }

            function C(e, t) {
                (0, r.isOnMobileAppPage)("any") || S(e).playing.subscribe(e => {
                    e || t()
                }, {
                    once: !0
                })
            }

            function M(e) {
                return !(0, r.isOnMobileAppPage)("any") && S(e).playing.value()
            }

            function N() {
                k(_.filter(e => !!e.soundForAlerts).map(e => e.path))
            }

            function k(e) {
                if ((0, r.isOnMobileAppPage)("any")) return;
                if (!e) return;
                if (!/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(window.navigator.userAgent)) return;
                if (Array.isArray(e) || (e = [e]), 0 === (e = e.filter(e => {
                        const t = S(e);
                        return !(!t || !t.el.load || t._mobilePreloadActive) && (t._mobilePreloadActive = !0, !0)
                    })).length) return void E.logNormal("enableForMobile no sounds passed");
                const t = () => {
                        const o = [];
                        Array.isArray(e) && e.forEach(e => {
                            const t = S(e);
                            t.el.load();
                            const a = t.play().catch(e => {
                                if ("AbortError" !== e.name) throw E.logError(`enableForMobile for "${t.el.src}" preload error: - ${e.message}`), e
                            });
                            t.el.pause(), o.push(a)
                        }), Promise.all(o).then(() => {
                            E.logNormal("enableForMobile sounds initialized")
                        }), a.forEach(e => {
                            document.removeEventListener(e, t, !0)
                        })
                    },
                    a = ["click", "touchend", "keydown"];
                a.forEach(e => {
                    document.addEventListener(e, t, !0)
                })
            }
            const S = e => {
                if (e in F) return F[e];
                E.logNormal(`requested sound  ${e} not cached, building a new audio element`);
                const t = _.find(t => t.path === e);
                if (void 0 === t) throw new Error(`Cannot find sound "${e}"`);
                const a = new Audio(t.filePath),
                    o = {
                        el: a,
                        playing: new(i())(!1),
                        play: (t = 0) => o.playing.value() ? (E.logNormal("sound already playing"), Promise.reject("already playing")) : (o.playing.setValue(!0), new Promise((a, r) => {
                            let l = t > 0;
                            const n = () => {
                                (function(e) {
                                    try {
                                        E.logNormal(`"${e.el.src}" triggering html5 play method, readyState - ${e.el.readyState}; muted - ${e.el.muted}; volume - ${e.el.volume}; currentTime - ${e.el.currentTime}`);
                                        let t = e.el.play();
                                        return t || (t = Promise.resolve()), t
                                    } catch (t) {
                                        return E.logError(`play method for "${e.el.src}" catch error - ${t.message}`), Promise.reject(t)
                                    }
                                })(o).catch(t => {
                                    E.logNormal(`stop counting sound "${e}"; as playing due to an error: ${t.message}`), o.stop(), r(t)
                                })
                            };
                            o._onEnded = () => {
                                l ? n() : (o.stop(), a())
                            }, o.el.addEventListener("ended", o._onEnded), l && setTimeout(() => {
                                E.logNormal(`"${e}" repeat timeout - ${t}s off`), l = !1
                            }, 1e3 * t), n()
                        })),
                        stop: () => {
                            o.el.pause(), o.playing.setValue(!1), o._onEnded && o.el.removeEventListener("ended", o._onEnded)
                        }
                    };
                F[e] = o;
                return ["canplaythrough", "error"].forEach(t => {
                    a.addEventListener(t, () => {
                        E.logNormal(`for sound "${e}", event - ${t} is fired`)
                    }, !1)
                }), E.logNormal("canPlayType - " + a.canPlayType("audio/mp3")), F[e]
            };
            k(_.filter(e => !!e.common).map(e => e.path))
        }
    }
]);