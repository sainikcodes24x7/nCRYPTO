(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [14436], {
        978852: (i, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                GdprNotification: () => c
            });
            var o = t(685864),
                s = t(541962);
            class c {
                constructor() {
                    this._dialog = null, this._promise = null, this._showDialog = i => {
                        this._dialog || (this._dialog = i, i.on("action:accept", this._onAccept), i.open())
                    }, this._closeDialog = () => {
                        this._dialog && (this._dialog.close(), this._dialog = null)
                    }, this._onAccept = () => {
                        (0, o.fetch)("/accept_policy/", {
                            credentials: "include",
                            method: "POST"
                        }).then(this._onSuccess, this._closeDialog)
                    }, this._onSuccess = () => {
                        this._closeDialog(), s.TVXWindowEvents.emit("acceptPolicy")
                    }, this._subscribe()
                }
                showIfNotAccepted() {
                    const i = window.user,
                        e = window.is_authenticated,
                        t = "/privacy-policy/" !== window.location.pathname,
                        o = new Date(2018, 4, 17),
                        s = (i.date_joined ? new Date(i.date_joined) : new Date) < o && !i.is_policy_accepted;
                    e && t && s && this._loadDialog().then(this._showDialog)
                }
                _loadDialog() {
                    return this._promise || (this._promise = Promise.all([t.e(70964), t.e(38817), t.e(91877), t.e(59456), t.e(25535), t.e(5058), t.e(11216), t.e(99752), t.e(64011), t.e(7562), t.e(43817)]).then(t.bind(t, 390262)).then(({
                        createGdprNotificationDialog: i
                    }) => i())), this._promise
                }
                _subscribe() {
                    window.loginStateChange.subscribe(this, this.showIfNotAccepted), s.TVXWindowEvents.on("acceptPolicy", this._closeDialog)
                }
            }
        }
    }
]);