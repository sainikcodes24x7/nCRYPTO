(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [91239], {
        791239: (e, t, n) => {
            "use strict";

            function r(e, t) {
                const n = t.getElements().find(t => t.elementOffset > e);
                return (null == n ? void 0 : n.elementOffset) || t.getContentSize()
            }

            function i(e, t) {
                const n = [...t.getElements()].reverse().find(t => t.elementOffset < e);
                return (null == n ? void 0 : n.elementOffset) || 0
            }
            n.r(t), n.d(t, {
                getNextScrollPositionForwardCard: () => r,
                getNextScrollPositionBackwardCard: () => i
            })
        }
    }
]);