(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [99140], {
        878822: (e, n, i) => {
            "use strict";
            i.r(n), i.d(n, {
                openCoinsDialogOnLoad: () => a
            });
            var o = i(348310),
                s = i(995527);

            function a() {
                const e = function() {
                    const e = window.location.hash.slice(1);
                    if (e) switch (e) {
                        case "coins-redeem":
                            return s.MainTab.Redeem;
                        case "referred-friends":
                            return s.MainTab.Refer;
                        case "get-coins":
                            return s.MainTab.GetCoins;
                        case "coins-stats":
                            return s.MainTab.History;
                        case "about-coins":
                            return s.MainTab.About
                    }
                }();
                e && (0, o.showTVCoinsDialog)({
                    page: s.CoinsPage.Main,
                    tab: e
                })
            }
        },
        348310: (e, n, i) => {
            "use strict";
            i.d(n, {
                showTVCoinsDialog: () => s
            });
            var o = i(995527);

            function s(e) {
                Promise.all([i.e(70964), i.e(91877), i.e(59456), i.e(25535), i.e(5058), i.e(67890), i.e(11216), i.e(99752), i.e(69140), i.e(28458)]).then(i.bind(i, 278175)).then(n => {
                    const {
                        page: i = o.CoinsPage.Main,
                        tab: s = o.MainTab.GetCoins,
                        productId: a = o.ProductId.MidCoins,
                        ...t
                    } = e || {};
                    new n.TVCoinsDialog({
                        page: i,
                        tab: s,
                        ...t
                    }).open()
                })
            }
        },
        995527: (e, n, i) => {
            "use strict";
            var o, s, a;
            i.d(n, {
                    ProductId: () => o,
                    CoinsPage: () => s,
                    MainTab: () => a
                }),
                function(e) {
                    e.TestCoins = "100_coins", e.MidCoins = "500_coins", e.LargeCoins = "1000_coins", e.VeryLargeCoins = "5000_coins"
                }(o || (o = {})),
                function(e) {
                    e.Buy = "Buy", e.Main = "Main"
                }(s || (s = {})),
                function(e) {
                    e.About = "About", e.Refer = "Refer", e.GetCoins = "Get coins", e.History = "History", e.Redeem = "Redeem"
                }(a || (a = {}))
        }
    }
]);