(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [14309], {
        239931: (e, n, i) => {
            "use strict";
            i.r(n), i.d(n, {
                openPaymentOrderDialogOnLoad: () => g
            });
            var r = i(128308),
                a = i(796935),
                t = i(417238),
                l = i(465754),
                o = i(177541);
            const c = [l.BillingCycle.OneYear, l.BillingCycle.Monthly];

            function g() {
                var e;
                const n = window.pro;
                if (void 0 === n) return;
                const i = (0, t.getUrlParams)();
                if (!("order_pro_plan_id" in i) && "order_exchanges" in i && "exchange-agreement" in i) return;
                const l = i.order_pro_plan_id,
                    g = (null !== (e = i.order_exchanges) && void 0 !== e ? e : "").split(",").map(e => "exchange-" + e),
                    d = "exchange-agreement" in i;
                let s;
                "order_billing_cycle" in i && c.includes(i.order_billing_cycle) && (s = i.order_billing_cycle), n.runOrUpdate(() => {
                    let e;
                    l && n.isPlan(n.getProduct(l)) && (e = l);
                    const i = g.filter(e => n.isExchange(n.getProduct(e)));
                    (void 0 !== e || 0 !== i.length || d) && (d ? (0, a.showExchangeAgreementDialog)({}) : (0, r.showPaymentOrderDialog)({
                        productId: e,
                        exchanges: i,
                        statusExtraData: i.length > 0 ? o.StatusExtraData.Enable : void 0,
                        billingCycle: s,
                        fixedCycle: void 0 !== s
                    }))
                })
            }
        },
        796935: (e, n, i) => {
            "use strict";
            async function r(e) {
                (await Promise.all([i.e(37610), i.e(99459), i.e(23876), i.e(26822), i.e(29448), i.e(61212), i.e(85597), i.e(69756), i.e(32795), i.e(88278), i.e(63193), i.e(74814), i.e(45266), i.e(99305), i.e(90901), i.e(36778), i.e(38968), i.e(70650), i.e(42732), i.e(85833), i.e(52951), i.e(58748), i.e(55318), i.e(30336), i.e(85161), i.e(11216), i.e(43424), i.e(45867), i.e(19894), i.e(80498), i.e(52616), i.e(9622), i.e(41153), i.e(97301), i.e(73922), i.e(58341), i.e(61932)]).then(i.bind(i, 168534))).openExchangeAgreementDialog(e)
            }
            i.d(n, {
                showExchangeAgreementDialog: () => r
            })
        }
    }
]);