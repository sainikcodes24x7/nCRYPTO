(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [25106], {
        737849: t => {
            t.exports = {
                scrollButtonCircleLeft: "scrollButtonCircleLeft-wO2GDwdp",
                scrollButtonCircleRight: "scrollButtonCircleRight-wO2GDwdp",
                isVisible: "isVisible-wO2GDwdp",
                scrollButtonCircleWrap: "scrollButtonCircleWrap-wO2GDwdp"
            }
        },
        525106: (t, l, e) => {
            "use strict";
            e.r(l), e.d(l, {
                scrollButtonSize: () => w,
                addScrollButtons: () => p
            });
            var s = e(416282),
                i = e(13548),
                r = e(488480),
                o = e(438462),
                c = e(737849);
            const n = `<div class="${c.scrollButtonCircleLeft}">${r}</div>`,
                d = `<div class="${c.scrollButtonCircleRight}">${o}</div>`,
                w = 0,
                p = (t, l, e) => {
                    t.classList.add(c.scrollButtonCircleWrap);
                    const r = (0, s.ensureNotNull)((0, i.parseHtmlElement)(d));
                    r.addEventListener("click", l), t.appendChild(r);
                    const o = (0, s.ensureNotNull)((0, i.parseHtmlElement)(n));
                    o.addEventListener("click", e), t.appendChild(o)
                }
        },
        488480: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><path d="M9.4 1.4l-1.4-1.4-8 8 8 8 1.4-1.4-6.389-6.532 6.389-6.668z"/></svg>'
        },
        438462: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><path d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z"/></svg>'
        }
    }
]);