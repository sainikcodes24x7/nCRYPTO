(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [62344], {
        462344: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                getScrollOffsetCalculationData: () => l,
                computeElementMeasures: () => s
            });
            var n = i(582755);

            function l(e) {
                var t, i;
                const {
                    scrollWrapper: n,
                    gapSize: l = 0,
                    elementSize: r,
                    elementsCount: o,
                    scrollButtonSize: a = 0,
                    scrollButtonsAffectVisibilitySize: u = !1
                } = e, c = s(o, r, null !== (t = e.startPaddingSize) && void 0 !== t ? t : l, null !== (i = e.endPaddingSize) && void 0 !== i ? i : l);
                return {
                    getVisibleSize: () => n.offsetWidth,
                    getContentSize: () => n.scrollWidth,
                    getElements: () => c,
                    shrinkVisibilityStart: u ? a : 0,
                    shrinkVisibilityEnd: u ? a : 0
                }
            }

            function s(e, t, i = 0, l) {
                const s = [];
                let r = l;
                for (let n = 0; n < e; n++) s.push({
                    elementSize: t,
                    elementOffset: r
                }), r += t + i;
                return (0, n.isRtl)() && s.reverse(), s
            }
        }
    }
]);