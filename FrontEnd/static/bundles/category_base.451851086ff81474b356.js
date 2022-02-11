(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [62142, 34604, 90254, 10061, 96301, 84029, 38357, 25031, 51922, 45867, 64011, 7562, 11228, 93669, 6798, 52946, 4516, 267, 94970, 85285, 42098, 63347, 75095, 87380, 757, 77021, 13088, 20401], {
        416282: (e, t) => {
            "use strict";

            function i(e) {
                if (void 0 === e) throw new Error("Value is undefined");
                return e
            }

            function o(e) {
                if (null === e) throw new Error("Value is null");
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ensureNever = t.ensure = t.ensureNotNull = t.ensureDefined = t.assert = void 0, t.assert = function(e, t) {
                if (!e) throw new Error("Assertion failed" + (t ? ": " + t : ""))
            }, t.ensureDefined = i, t.ensureNotNull = o, t.ensure = function(e) {
                return o(i(e))
            }, t.ensureNever = function(e) {}
        },
        775496: (e, t) => {
            "use strict";

            function i(e) {
                return Math.round(1e10 * e) / 1e10
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.alignTo = t.fixComputationError = t.isNaN = t.isInteger = t.isNumber = void 0, t.isNumber = function(e) {
                return "number" == typeof e && isFinite(e)
            }, t.isInteger = function(e) {
                return "number" == typeof e && e % 1 == 0
            }, t.isNaN = function(e) {
                return !(e <= 0 || e > 0)
            }, t.fixComputationError = i, t.alignTo = function(e, t) {
                var o = e / t,
                    n = Math.floor(o),
                    r = o - n;
                return r > 2e-10 ? i(r > .5 ? (n + 1) * t : n * t) : e
            }
        },
        271044: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pointInCircle = t.pointInPolygon = t.pointInBox = t.pointInTriangle = t.pointInHalfplane = void 0;
            var o = i(895196);
            t.pointInHalfplane = function(e, t) {
                var i = t.edge;
                return i.A * e.x + i.B * e.y + i.C > 0 === t.isPositive
            }, t.pointInTriangle = function(e, t, i, n) {
                var r = t.add(i).scaled(.5).add(n).scaled(.5),
                    s = o.intersectLineSegments(t, i, r, e);
                return null === s && (null === (s = o.intersectLineSegments(i, n, r, e)) && null === (s = o.intersectLineSegments(n, t, r, e)))
            }, t.pointInBox = function(e, t) {
                return e.x >= t.min.x && e.x <= t.max.x && e.y >= t.min.y && e.y <= t.max.y
            }, t.pointInPolygon = function(e, t) {
                for (var i = t.length - 1, o = !1, n = e.x, r = e.y, s = 0; s < t.length; s++) {
                    var a = t[s],
                        l = t[i];
                    (a.y < r && l.y >= r || l.y < r && a.y >= r) && a.x + (r - a.y) / (l.y - a.y) * (l.x - a.x) < n && (o = !o), i = s
                }
                return o
            }, t.pointInCircle = function(e, t, i) {
                return (e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y) <= i * i
            }
        },
        189684: (e, t) => {
            "use strict";

            function i(e, t, i) {
                var o = t.subtract(e),
                    n = i.subtract(e).dotProduct(o) / o.dotProduct(o);
                return {
                    coeff: n,
                    distance: e.addScaled(o, n).subtract(i).length()
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.distanceToSegment = t.distanceToLine = void 0, t.distanceToLine = i, t.distanceToSegment = function(e, t, o) {
                var n = i(e, t, o);
                if (0 <= n.coeff && n.coeff <= 1) return n;
                var r = e.subtract(o).length(),
                    s = t.subtract(o).length();
                return r < s ? {
                    coeff: 0,
                    distance: r
                } : {
                    coeff: 1,
                    distance: s
                }
            }
        },
        895196: (e, t, i) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.intersectPolygons = t.intersectPolygonAndHalfplane = t.intersectRayAndBox = t.intersectLineAndBox = t.intersectLineSegments = t.intersectLines = t.intersectLineSegmentAndBox = void 0;
            var o = i(416282),
                n = i(672927),
                r = i(189684),
                s = i(271044);

            function a(e, t) {
                var i = e.A,
                    o = t.A,
                    r = e.B,
                    s = t.B,
                    a = e.C,
                    l = t.C,
                    c = i * s - o * r;
                if (Math.abs(c) < 1e-6) return null;
                var d = (r * l - s * a) / c,
                    u = (o * a - i * l) / c;
                return new n.Point(d, u)
            }

            function l(e, t, i, o) {
                var n = function(e, t, i, o) {
                    var n = t.subtract(e),
                        r = o.subtract(i),
                        s = n.x * r.y - n.y * r.x;
                    if (Math.abs(s) < 1e-6) return null;
                    var a = e.subtract(i);
                    return (a.y * r.x - a.x * r.y) / s
                }(e, t, i, o);
                if (null === n) return null;
                var s = t.subtract(e).scaled(n).add(e),
                    a = r.distanceToSegment(i, o, s);
                return Math.abs(a.distance) < 1e-6 ? n : null
            }

            function c(e, t) {
                for (var i = 0, o = e; i < o.length; i++) {
                    var r = o[i];
                    if (n.equalPoints(r, t)) return !1
                }
                return e.push(t), !0
            }

            function d(e, t) {
                return !(e.length > 0 && (n.equalPoints(e[e.length - 1], t) || n.equalPoints(e[0], t))) && (e.push(t), !0)
            }

            function u(e, t) {
                for (var i = [], o = 0; o < e.length; ++o) {
                    var r = e[o],
                        l = e[(o + 1) % e.length],
                        c = n.lineThroughPoints(r, l);
                    if (s.pointInHalfplane(r, t)) {
                        if (d(i, r), !s.pointInHalfplane(l, t)) null !== (u = a(c, t.edge)) && d(i, u)
                    } else if (s.pointInHalfplane(l, t)) {
                        var u;
                        null !== (u = a(c, t.edge)) && d(i, u)
                    }
                }
                return i.length >= 3 ? i : null
            }
            t.intersectLineSegmentAndBox = function(e, t) {
                var i = e[0].x,
                    o = e[0].y,
                    r = e[1].x,
                    s = e[1].y,
                    a = t.min.x,
                    l = t.min.y,
                    c = t.max.x,
                    d = t.max.y;

                function u(e, t, i, o, n, r) {
                    var s = 0;
                    return e < i ? s |= 1 : e > n && (s |= 2), t < o ? s |= 4 : t > r && (s |= 8), s
                }
                for (var h = u(i, o, a, l, c, d), p = u(r, s, a, l, c, d), g = !1, m = 0;;) {
                    if (m > 1e3) throw new Error("Cohen - Sutherland algorithm: infinity loop");
                    if (m++, !(h | p)) {
                        g = !0;
                        break
                    }
                    if (h & p) break;
                    var _ = h || p,
                        f = void 0,
                        v = void 0;
                    8 & _ ? (f = i + (r - i) * (d - o) / (s - o), v = d) : 4 & _ ? (f = i + (r - i) * (l - o) / (s - o), v = l) : 2 & _ ? (v = o + (s - o) * (c - i) / (r - i), f = c) : (v = o + (s - o) * (a - i) / (r - i), f = a), _ === h ? h = u(i = f, o = v, a, l, c, d) : p = u(r = f, s = v, a, l, c, d)
                }
                return g ? n.equalPoints(n.point(i, o), n.point(r, s)) ? n.point(i, o) : n.lineSegment(n.point(i, o), n.point(r, s)) : null
            }, t.intersectLines = a, t.intersectLineSegments = l, t.intersectLineAndBox = function(e, t) {
                var i = t.min.x,
                    r = t.min.y,
                    s = t.max.x,
                    a = t.max.y;
                if (0 === e.A) {
                    var l = -e.C / e.B;
                    return r <= l && l <= a ? n.lineSegment(n.point(i, l), n.point(s, l)) : null
                }
                if (0 === e.B) {
                    var d = -e.C / e.A;
                    return i <= d && d <= s ? n.lineSegment(n.point(d, r), n.point(d, a)) : null
                }
                var u = [],
                    h = function(t) {
                        var i = function(e, t) {
                            return -(e.C + e.A * t) / e.B
                        }(e, t);
                        r <= i && i <= a && c(u, new n.Point(t, i))
                    },
                    p = function(t) {
                        var o = function(e, t) {
                            return -(e.C + e.B * t) / e.A
                        }(e, t);
                        i <= o && o <= s && c(u, new n.Point(o, t))
                    };
                switch (h(i), p(r), h(s), p(a), u.length) {
                    case 0:
                        return null;
                    case 1:
                        return u[0];
                    case 2:
                        return n.equalPoints(u[0], u[1]) ? u[0] : n.lineSegment(u[0], u[1])
                }
                return o.assert(!1, "We should have at most two intersection points"), null
            }, t.intersectRayAndBox = function(e, t, i) {
                var o = l(e, t, i.min, new n.Point(i.max.x, i.min.y)),
                    r = l(e, t, new n.Point(i.max.x, i.min.y), i.max),
                    a = l(e, t, i.max, new n.Point(i.min.x, i.max.y)),
                    c = l(e, t, new n.Point(i.min.x, i.max.y), i.min),
                    d = [];
                if (null !== o && o >= 0 && d.push(o), null !== r && r >= 0 && d.push(r), null !== a && a >= 0 && d.push(a), null !== c && c >= 0 && d.push(c), 0 === d.length) return null;
                d.sort((function(e, t) {
                    return e - t
                }));
                var u = s.pointInBox(e, i) ? d[0] : d[d.length - 1];
                return e.addScaled(t.subtract(e), u)
            }, t.intersectPolygonAndHalfplane = u, t.intersectPolygons = function(e, t) {
                for (var i = e, o = 0; o < t.length && null !== i; ++o) {
                    var r = t[o],
                        s = t[(o + 1) % t.length],
                        a = t[(o + 2) % t.length],
                        l = n.lineThroughPoints(r, s);
                    i = u(i, n.halfplaneThroughPoint(l, a))
                }
                return i
            }
        },
        672927: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.equalBoxes = t.box = t.halfplaneThroughPoint = t.halfplane = t.lineSegment = t.lineThroughPoints = t.line = t.equalPoints = t.point = t.Point = void 0;
            var i = function() {
                function e(e, t) {
                    this.x = e, this.y = t
                }
                return e.prototype.add = function(t) {
                    return new e(this.x + t.x, this.y + t.y)
                }, e.prototype.addScaled = function(t, i) {
                    return new e(this.x + i * t.x, this.y + i * t.y)
                }, e.prototype.subtract = function(t) {
                    return new e(this.x - t.x, this.y - t.y)
                }, e.prototype.dotProduct = function(e) {
                    return this.x * e.x + this.y * e.y
                }, e.prototype.crossProduct = function(e) {
                    return this.x * e.y - this.y * e.x
                }, e.prototype.signedAngle = function(e) {
                    return Math.atan2(this.crossProduct(e), this.dotProduct(e))
                }, e.prototype.angle = function(e) {
                    return Math.acos(this.dotProduct(e) / (this.length() * e.length()))
                }, e.prototype.length = function() {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                }, e.prototype.scaled = function(t) {
                    return new e(this.x * t, this.y * t)
                }, e.prototype.normalized = function() {
                    return this.scaled(1 / this.length())
                }, e.prototype.transposed = function() {
                    return new e(-this.y, this.x)
                }, e.prototype.clone = function() {
                    return new e(this.x, this.y)
                }, e
            }();

            function o(e, t) {
                return new i(e, t)
            }

            function n(e, t) {
                return e.x === t.x && e.y === t.y
            }

            function r(e, t, i) {
                if (0 === e && 0 === t) throw new Error("A and B can not be both equal to zero.");
                return {
                    A: e,
                    B: t,
                    C: i
                }
            }

            function s(e, t) {
                return {
                    edge: e,
                    isPositive: t
                }
            }
            t.Point = i, t.point = o, t.equalPoints = n, t.line = r, t.lineThroughPoints = function(e, t) {
                if (n(e, t)) throw new Error("Points should be distinct");
                return r(e.y - t.y, t.x - e.x, e.x * t.y - t.x * e.y)
            }, t.lineSegment = function(e, t) {
                if (n(e, t)) throw new Error("Points of a segment should be distinct");
                return [e, t]
            }, t.halfplane = s, t.halfplaneThroughPoint = function(e, t) {
                return s(e, e.A * t.x + e.B * t.y + e.C > 0)
            }, t.box = function(e, t) {
                return {
                    min: o(Math.min(e.x, t.x), Math.min(e.y, t.y)),
                    max: o(Math.max(e.x, t.x), Math.max(e.y, t.y))
                }
            }, t.equalBoxes = function(e, t) {
                return n(e.min, t.min) && n(e.max, t.max)
            }
        },
        318152: e => {
            e.exports = [{
                value: "",
                name: "All Exchanges",
                desc: window.t("All Exchanges"),
                flag: "",
                country: "",
                group: "AllExchanges",
                providerId: ""
            }, {
                value: "ASCENDEX",
                name: "AscendEX",
                desc: window.t("AscendEX"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "ascendex"
            }, {
                value: "BITHUMB",
                name: "Bithumb",
                desc: window.t("Bithumb"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bithumb"
            }, {
                value: "BITKUB",
                name: "BITKUB",
                desc: window.t("BITKUB"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitkub"
            }, {
                value: "796",
                name: "796",
                desc: window.t("796"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "COINFLOOR",
                name: "Coinfloor",
                desc: window.t("Coinfloor"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "coinfloor"
            }, {
                value: "DERIBIT",
                name: "Deribit",
                desc: window.t("Deribit"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "deribit"
            }, {
                value: "CURRENCYCOM",
                name: "Currencycom",
                desc: window.t("Currencycom"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "currencycom"
            }, {
                value: "GLASSNODE",
                name: "Glassnode",
                desc: window.t("Glassnode"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "glassnode"
            }, {
                value: "OKEX",
                name: "OKX",
                desc: window.t("OKX"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "okex"
            }, {
                value: "PANGOLIN",
                name: "Pangolin",
                desc: window.t("Pangolin"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "pangolin"
            }, {
                value: "SPOOKYSWAP",
                name: "SpookySwap",
                desc: window.t("SpookySwap"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "spookyswap"
            }, {
                value: "DFM",
                name: "DFM",
                desc: window.t("DFM — Dubai Financial Market"),
                flag: "ae",
                group: "Middle East / Africa",
                country: "ae",
                providerId: "",
                searchTerms: [window.t("UAE"), window.t("United Arab Emirates")]
            }, {
                value: "LSE",
                name: "LSE",
                desc: window.t("LSE — London Stock Exchange (UK Companies)"),
                flag: "uk",
                group: "Europe",
                country: "uk",
                providerId: "",
                searchTerms: [window.t("UK"), window.t("United Kingdom")]
            }, {
                value: "LSIN",
                name: "LSIN",
                desc: window.t("LSIN — London Stock Exchange (International Companies)"),
                flag: "uk",
                group: "Europe",
                country: "uk",
                providerId: "",
                searchTerms: [window.t("UK"), window.t("United Kingdom")]
            }, {
                value: "EUREX",
                name: "EUREX",
                desc: window.t("EUREX — Eurex Exchange"),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "MGEX",
                name: "MGEX",
                desc: window.t("MGEX — Futures"),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "NASDAQ",
                name: "NASDAQ",
                desc: window.t("NASDAQ — NASDAQ Stock Market"),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 1,
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "NYSE",
                name: "NYSE",
                desc: window.t("NYSE — New York Stock Exchange"),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 2,
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "AMEX",
                name: "Arca",
                desc: window.t("Arca — NYSE Arca"),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 3,
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "OTC",
                name: "OTC",
                desc: window.t("OTC — OTC Markets"),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 4,
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "DJ",
                name: "DJ",
                desc: window.t("DJ — Dow Jones Indices"),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 5,
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "SP",
                name: "SP",
                desc: window.t("SP — S&P Indices"),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 6,
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "CBOE",
                name: "CBOE",
                desc: window.t("CBOE — Chicago Board Options Exchange"),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 7,
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "CBOEEU",
                name: "CBOE EU",
                desc: window.t("CBOE EU — European Union Indices"),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "CBOT",
                name: "CBOT",
                desc: window.t("CBOT — Chicago Board of Trade"),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 8,
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "CME",
                name: "CME GLOBEX",
                desc: window.t("CME GLOBEX — Chicago Mercantile Exchange Globex"),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 9,
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "COMEX",
                name: "COMEX",
                desc: window.t("COMEX — Commodity Exchange"),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 10,
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "NYMEX",
                name: "NYMEX",
                desc: window.t("NYMEX — New York Mercantile Exchange"),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 11,
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "ICEUS",
                name: "ICEUS",
                desc: window.t("ICEUS — ICE Futures U.S."),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 12,
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "FAIRX",
                name: "FairX",
                desc: window.t("FairX"),
                flag: "usa",
                group: "North America",
                country: "us",
                priorityInGroup: 13,
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "CSE",
                name: "CSE",
                desc: window.t("CSE — Canadian Securities Exchange"),
                flag: "canada",
                group: "North America",
                country: "ca",
                priorityInGroup: 13,
                providerId: "",
                searchTerms: [window.t("Canada")]
            }, {
                value: "NEO",
                name: "NEO",
                desc: window.t("NEO — NEO Exchange"),
                flag: "canada",
                group: "North America",
                country: "ca",
                priorityInGroup: 14,
                providerId: "",
                searchTerms: [window.t("Canada")]
            }, {
                value: "TSX",
                name: "TSX",
                desc: window.t("TSX — Toronto Stock Exchange"),
                flag: "canada",
                group: "North America",
                country: "ca",
                priorityInGroup: 15,
                providerId: "",
                searchTerms: [window.t("Canada")]
            }, {
                value: "TSXV",
                name: "TSXV",
                desc: window.t("TSXV — TSX Venture Exchange"),
                flag: "canada",
                group: "North America",
                country: "ca",
                priorityInGroup: 16,
                providerId: "",
                searchTerms: [window.t("Canada")]
            }, {
                value: "MOEX",
                name: "MOEX",
                desc: window.t("MOEX — Moscow Exchange"),
                flag: "russia",
                group: "Europe",
                country: "ru",
                providerId: "",
                searchTerms: [window.t("Russian Federation")]
            }, {
                value: "MYX",
                name: "MYX",
                desc: window.t("MYX — Bursa Malaysia Berhad"),
                flag: "malaysia",
                group: "Asia / Pacific",
                country: "my",
                providerId: "",
                searchTerms: [window.t("Malaysia")]
            }, {
                value: "FTSEMYX",
                name: "FTSE",
                desc: window.t("FTSE — FTSE Indices"),
                flag: "malaysia",
                group: "Asia / Pacific",
                country: "my",
                providerId: "",
                searchTerms: [window.t("Malaysia")]
            }, {
                value: "HOSE",
                name: "HOSE",
                desc: window.t("HOSE — Ho Chi Minh City Stock Exchange"),
                flag: "vietnam",
                group: "Asia / Pacific",
                country: "vn",
                providerId: "",
                searchTerms: [window.t("Vietnam")]
            }, {
                value: "HNX",
                name: "HNX",
                desc: window.t("HNX — Hanoi Stock Exchange"),
                flag: "vietnam",
                group: "Asia / Pacific",
                country: "vn",
                providerId: "",
                searchTerms: [window.t("Vietnam")]
            }, {
                value: "UPCOM",
                name: "HNX",
                desc: window.t("HNX — Hanoi Stock Exchange (UPCoM)"),
                flag: "vietnam",
                group: "Asia / Pacific",
                country: "vn",
                providerId: "",
                searchTerms: [window.t("Vietnam")]
            }, {
                value: "BITSTAMP",
                name: "Bitstamp",
                desc: window.t("Bitstamp"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitstamp"
            }, {
                value: "BLACKBULL",
                name: "BlackBull Markets",
                desc: window.t("BlackBull Markets"),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "blackbullmarkets"
            }, {
                value: "FX",
                name: "FXCM",
                desc: window.t("FXCM"),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "fxcm"
            }, {
                value: "FXOPEN",
                name: "FXOpen",
                desc: window.t("FXOpen"),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "fxopen"
            }, {
                value: "EIGHTCAP",
                name: "Eightcap",
                desc: window.t("Eightcap"),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "eightcap"
            }, {
                value: "MERCADO",
                name: "Mercado",
                desc: window.t("Mercado"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "mercado"
            }, {
                value: "BTCE",
                name: "BTC-e",
                desc: window.t("BTC-E"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "BTCYOU",
                name: "BTCYou",
                desc: window.t("BTCYou"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "btcyou"
            }, {
                value: "HONEYSWAP",
                name: "Honeyswap",
                desc: window.t("Honeyswap"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "honeyswap"
            }, {
                value: "BSE",
                name: "BSE",
                desc: window.t("BSE — Bombay Stock Exchange"),
                flag: "india",
                group: "Asia / Pacific",
                country: "in",
                providerId: "",
                searchTerms: [window.t("India")]
            }, {
                value: "NYMEX_MINI",
                name: "NYMEX E-mini",
                desc: window.t("NYMEX E-mini — New York Mercantile Exchange"),
                flag: "usa",
                group: "North America",
                hideInSymbolSearch: !0,
                country: "us",
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "COMEX_MINI",
                name: "COMEX E-mini",
                desc: window.t("COMEX E-mini — Commodity Exchange"),
                flag: "usa",
                group: "North America",
                hideInSymbolSearch: !0,
                country: "us",
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "ICEEUR",
                name: "ICEEUR",
                desc: window.t("ICEEUR — ICE Futures Europe"),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "NSE",
                name: "NSE",
                desc: window.t("NSE — National Stock Exchange of India"),
                flag: "india",
                group: "Asia / Pacific",
                country: "in",
                providerId: "",
                searchTerms: [window.t("India")]
            }, {
                value: "MCX",
                name: "MCX",
                desc: window.t("MCX — Multi Commodity Exchange"),
                flag: "india",
                group: "Asia / Pacific",
                country: "in",
                providerId: "",
                searchTerms: [window.t("India")]
            }, {
                value: "KCBT",
                name: "KCBT",
                desc: window.t("KCBT Futures"),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "OKCOIN",
                name: "OKCoin",
                desc: window.t("OKCoin"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "okcoin"
            }, {
                value: "CBOT_MINI",
                name: "CBOT E-mini",
                desc: window.t("CBOT E-mini — Chicago Board of Trade"),
                flag: "usa",
                group: "North America",
                hideInSymbolSearch: !0,
                country: "us",
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "KRAKEN",
                name: "Kraken",
                desc: window.t("Kraken"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "kraken"
            }, {
                value: "KUCOIN",
                name: "KuCoin",
                desc: window.t("KuCoin"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "kucoin"
            }, {
                value: "CME_MINI",
                name: "CME E-mini",
                desc: window.t("CME GLOBEX E-mini — Chicago Mercantile Exchange Globex"),
                flag: "usa",
                group: "North America",
                hideInSymbolSearch: !0,
                country: "us",
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "DJ",
                name: "DJ",
                desc: window.t("DJ — Dow Jones Indexes"),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "SP",
                name: "SP",
                desc: window.t("SP — S&P Indexes"),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "BTCCHINA",
                name: "BTC China",
                desc: window.t("BTC China"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "HUOBI",
                name: "Huobi",
                desc: window.t("Huobi"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "huobi"
            }, {
                value: "KORBIT",
                name: "Korbit",
                desc: window.t("Korbit"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "korbit"
            }, {
                value: "THEROCKTRADING",
                name: "The Rock Trading",
                desc: window.t("The Rock Trading"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "therocktrading"
            }, {
                value: "TIMEX",
                name: "TimeX",
                desc: window.t("TimeX"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "timex"
            }, {
                value: "ANX",
                name: "ANX",
                desc: window.t("ANX"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "MEXBT",
                name: "meXBT",
                desc: window.t("meXBT"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "FTX",
                name: "FTX",
                desc: window.t("FTX"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "ftx"
            }, {
                value: "GEMINI",
                name: "Gemini",
                desc: window.t("Gemini"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "gemini"
            }, {
                value: "BITVC",
                name: "BitVC",
                desc: window.t("BitVC"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "BITYES",
                name: "BitYes",
                desc: window.t("BitYes"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "BNC",
                name: "BNC",
                desc: window.t("BNC"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: ""
            }, {
                value: "BITFLYER",
                name: "bitFlyer",
                desc: window.t("bitFlyer"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitflyer"
            }, {
                value: "BYBIT",
                name: "Bybit",
                desc: window.t("Bybit"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bybit"
            }, {
                value: "BITMEX",
                name: "BitMEX",
                desc: window.t("BitMEX"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitmex"
            }, {
                value: "BITPANDAPRO",
                name: "Bitpanda Pro",
                desc: window.t("Bitpanda Pro"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitpanda"
            }, {
                value: "CAPITALCOM",
                name: "Capital.com",
                desc: window.t("Capital.com"),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "capitalcom"
            }, {
                value: "COINEX",
                name: "CoinEx",
                desc: window.t("CoinEx"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "coinex"
            }, {
                value: "EXMO",
                name: "EXMO",
                desc: window.t("EXMO"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "exmo2"
            }, {
                value: "EASYMARKETS",
                name: "easyMarkets",
                desc: window.t("easyMarkets"),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "easymarkets"
            }, {
                value: "FOREXCOM",
                name: "FOREX.com",
                desc: window.t("FOREX.com"),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "gain"
            }, {
                value: "FX_IDC",
                name: "ICE",
                desc: window.t("ICE Data Services"),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "ice"
            }, {
                value: "GLOBALPRIME",
                name: "GLOBALPRIME",
                desc: window.t("Global Prime"),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "globalprime"
            }, {
                value: "IBROKER",
                name: "iBroker",
                desc: window.t("iBroker"),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "ibroker"
            }, {
                value: "CEXIO",
                name: "CEX.IO",
                desc: window.t("CEX.IO"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "cexio"
            }, {
                value: "BITSO",
                name: "Bitso",
                desc: window.t("Bitso"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitso"
            }, {
                value: "BITFINEX",
                name: "Bitfinex",
                desc: window.t("Bitfinex"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitfinex"
            }, {
                value: "MTGOX",
                name: "Mt.Gox",
                desc: window.t("Mt.Gox"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                hideInSymbolSearch: !0,
                country: "",
                providerId: "mtgox"
            }, {
                value: "PHEMEX",
                name: "Phemex",
                desc: window.t("Phemex"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "phemex"
            }, {
                value: "POLONIEX",
                name: "Poloniex",
                desc: window.t("Poloniex"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "poloniex"
            }, {
                value: "SUSHISWAP",
                name: "SushiSwap",
                desc: window.t("SushiSwap"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "sushiswap"
            }, {
                value: "TRADERJOE",
                name: "Trader Joe",
                desc: window.t("Trader Joe"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "traderjoe"
            }, {
                value: "TRADESTATION",
                name: "TradeStation",
                desc: window.t("TradeStation"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "tradestation"
            }, {
                value: "UNISWAP",
                name: "Uniswap",
                desc: window.t("Uniswap"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "uniswap"
            }, {
                value: "UPBIT",
                name: "UpBit",
                desc: window.t("UpBit"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "upbit"
            }, {
                value: "BINGX",
                name: "BingX",
                desc: window.t("BingX"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bingx"
            }, {
                value: "BTSE",
                name: "BTSE",
                desc: window.t("BTSE"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "btse"
            }, {
                value: "BITCOKE",
                name: "BitCoke",
                desc: window.t("BitCoke"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitcoke"
            }, {
                value: "BITTREX",
                name: "Bittrex",
                desc: window.t("Bittrex"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bittrex"
            }, {
                value: "BINANCE",
                name: "Binance",
                desc: window.t("Binance"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "binance"
            }, {
                value: "BITGET",
                name: "Bitget",
                desc: window.t("Bitget"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "bitget"
            }, {
                value: "BINANCEUS",
                name: "Binance US",
                desc: window.t("Binance US"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "binance"
            }, {
                value: "DELTA",
                name: "Delta",
                desc: window.t("Delta"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "delta"
            }, {
                value: "BCBA",
                name: "BYMA",
                desc: window.t("BYMA — Argentine Stock Exchanges and Markets"),
                flag: "argentina",
                group: "Mexico and South America",
                country: "ar",
                providerId: "",
                searchTerms: [window.t("Argentina")]
            }, {
                value: "MATBAROFEX",
                name: "ROFEX",
                desc: window.t("ROFEX — MATBA ROFEX"),
                flag: "argentina",
                group: "Mexico and South America",
                country: "ar",
                providerId: "",
                searchTerms: [window.t("Argentina")]
            }, {
                value: "BMFBOVESPA",
                name: "B3",
                desc: window.t("B3 — Brasil Bolsa Balcao S.A."),
                flag: "brasil",
                group: "Mexico and South America",
                country: "br",
                providerId: "",
                searchTerms: [window.t("Brazil")]
            }, {
                value: "BMV",
                name: "BMV",
                desc: window.t("BMV — Mexican Stock Exchange"),
                flag: "mexico",
                group: "Mexico and South America",
                country: "mx",
                providerId: "",
                searchTerms: [window.t("Mexico")]
            }, {
                value: "BVL",
                name: "BVL",
                desc: window.t("BVL — Bolsa de Valores de Lima"),
                flag: "peru",
                group: "Mexico and South America",
                country: "pe",
                providerId: "",
                searchTerms: [window.t("Peru")]
            }, {
                value: "BCS",
                name: "SSE",
                desc: window.t("SSE — Santiago Stock Exchange"),
                flag: "chile",
                group: "Mexico and South America",
                country: "cl",
                providerId: "",
                searchTerms: [window.t("Chile")]
            }, {
                value: "BVC",
                name: "BVC",
                desc: window.t("BVC — Bolsa de Valores de Colombia"),
                flag: "colombia",
                group: "Mexico and South America",
                country: "co",
                providerId: "",
                searchTerms: [window.t("Colombia")]
            }, {
                value: "NAG",
                name: "NSE",
                desc: window.t("NSE — Nagoya Stock Exchange"),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [window.t("Japan")]
            }, {
                value: "TSE",
                name: "TSE",
                desc: window.t("TSE — Tokyo Stock Exchange"),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [window.t("Japan")]
            }, {
                value: "TFEX",
                name: "TFEX",
                desc: window.t("TFEX — Thailand Futures Exchange"),
                flag: "thailand",
                group: "Asia / Pacific",
                country: "th",
                providerId: "",
                searchTerms: [window.t("Thailand")]
            }, {
                value: "TFX",
                name: "TFX",
                desc: window.t("TFX — Tokyo Financial Exchange"),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [window.t("Japan")]
            }, {
                value: "TOCOM",
                name: "TOCOM",
                desc: window.t("TOCOM — Tokyo Commodity Exchange"),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [window.t("Japan")]
            }, {
                value: "OSE",
                name: "OSE",
                desc: window.t("OSE — Osaka Exchange"),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [window.t("Japan")]
            }, {
                value: "SGX",
                name: "SGX",
                desc: window.t("SGX — Singapore Stock Exchange"),
                flag: "singapore",
                group: "Asia / Pacific",
                country: "sg",
                providerId: "",
                searchTerms: [window.t("Singapore")]
            }, {
                value: "ICESG",
                name: "ICE Futures Singapore",
                desc: window.t("ICE Futures Singapore"),
                flag: "singapore",
                group: "Asia / Pacific",
                country: "sg",
                providerId: "",
                searchTerms: [window.t("Singapore")]
            }, {
                value: "SAPSE",
                name: "SSE",
                desc: window.t("SSE — Sapporo Securities Exchange"),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [window.t("Japan")]
            }, {
                value: "FSE",
                name: "FSE",
                desc: window.t("FSE — Fukuoka Stock Exchange"),
                flag: "japan",
                group: "Asia / Pacific",
                country: "jp",
                providerId: "",
                searchTerms: [window.t("Japan")]
            }, {
                value: "TPEX",
                name: "TPEx",
                desc: window.t("TPEx — Taipei Exchange"),
                flag: "taiwan",
                group: "Asia / Pacific",
                country: "tw",
                providerId: "",
                searchTerms: [window.t("Taiwan")]
            }, {
                value: "TWSE",
                name: "TWSE",
                desc: window.t("TWSE — Taiwan Stock Exchange"),
                flag: "taiwan",
                group: "Asia / Pacific",
                country: "tw",
                providerId: "",
                searchTerms: [window.t("Taiwan")]
            }, {
                value: "SET",
                name: "SET",
                desc: window.t("SET — Stock Exchange of Thailand"),
                flag: "thailand",
                group: "Asia / Pacific",
                country: "th",
                providerId: "",
                searchTerms: [window.t("Thailand")]
            }, {
                value: "KRX",
                name: "KRX",
                desc: window.t("KRX — Korea Stock Exchange"),
                flag: "south_korea",
                group: "Asia / Pacific",
                country: "kr",
                providerId: "",
                searchTerms: [window.t("South Korea")]
            }, {
                value: "BAHRAIN",
                name: "BSE",
                desc: window.t("BSE — Bahrain Stock Exchange"),
                flag: "bahrain",
                group: "Middle East / Africa",
                country: "bh",
                providerId: "",
                searchTerms: [window.t("Bahrain")]
            }, {
                value: "ATHEX",
                name: "ATHEX",
                desc: window.t("ATHEX — Athens Stock Exchange"),
                flag: "greece",
                group: "Europe",
                country: "gr",
                providerId: ""
            }, {
                value: "BELEX",
                name: "BELEX",
                desc: window.t("BELEX — Belgrade Stock Exchange"),
                flag: "serbia",
                group: "Europe",
                country: "rs",
                providerId: "",
                searchTerms: [window.t("Serbia")]
            }, {
                value: "EGX",
                name: "EGX",
                desc: window.t("EGX — Egyptian Exchange"),
                flag: "egypt",
                group: "Middle East / Africa",
                country: "eg",
                providerId: "",
                searchTerms: [window.t("Egypt")]
            }, {
                value: "TADAWUL",
                name: "Tadawul",
                desc: window.t("Tadawul — Saudi Stock Exchange"),
                flag: "saudi_arabia",
                group: "Middle East / Africa",
                country: "sa",
                providerId: "",
                searchTerms: [window.t("Saudi Arabia")]
            }, {
                value: "IDX",
                name: "IDX",
                desc: window.t("IDX — Indonesia Stock Exchange"),
                flag: "indonesia",
                group: "Asia / Pacific",
                country: "id",
                providerId: "",
                searchTerms: [window.t("Indonesia")]
            }, {
                value: "HSI",
                name: "HSI",
                desc: window.t("HSI — Hang Seng Indices"),
                flag: "hong_kong",
                group: "Asia / Pacific",
                country: "hk",
                providerId: "",
                searchTerms: [window.t("Hong Kong")]
            }, {
                value: "QSE",
                name: "QSE",
                desc: window.t("QSE — Qatar Stock Exchange"),
                flag: "qatar",
                group: "Middle East / Africa",
                country: "qa",
                providerId: "",
                searchTerms: [window.t("Qatar")]
            }, {
                value: "OANDA",
                name: "OANDA",
                desc: window.t("OANDA"),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "oanda"
            }, {
                value: "SAXO",
                name: "Saxo",
                desc: window.t("Saxo"),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "saxobank"
            }, {
                value: "PEPPERSTONE",
                name: "Pepperstone",
                desc: window.t("Pepperstone"),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "pepperstone"
            }, {
                value: "SKILLING",
                name: "SKILLING",
                desc: window.t("SKILLING"),
                flag: "forex",
                group: "Forex",
                country: "",
                providerId: "skilling"
            }, {
                value: "EURONEXT",
                name: "Euronext",
                desc: window.t("Euronext — Euronext NV"),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "EURONEXTAMS",
                name: "EURONEXTAMS",
                desc: window.t("Euronext — Euronext Amsterdam"),
                flag: "netherlands",
                group: "Europe",
                country: "nl",
                providerId: "",
                searchTerms: [window.t("Netherlands")]
            }, {
                value: "EURONEXTBRU",
                name: "EURONEXTBRU",
                desc: window.t("Euronext — Euronext Brussels"),
                flag: "belgium",
                group: "Europe",
                country: "be",
                providerId: "",
                searchTerms: [window.t("Belgium")]
            }, {
                value: "EURONEXTLIS",
                name: "EURONEXTLIS",
                desc: window.t("Euronext — Euronext Lisbon"),
                flag: "portugal",
                group: "Europe",
                country: "pt",
                providerId: "",
                searchTerms: [window.t("Portugal")]
            }, {
                value: "EURONEXTPAR",
                name: "EURONEXTPAR",
                desc: window.t("Euronext — Euronext Paris"),
                flag: "france",
                group: "Europe",
                country: "fr",
                providerId: "",
                searchTerms: [window.t("France")]
            }, {
                value: "OSL",
                name: "EURONEXTOSE",
                desc: window.t("Euronext — Euronext Oslo"),
                flag: "norway",
                group: "Europe",
                country: "no",
                providerId: "",
                searchTerms: [window.t("Norway")]
            }, {
                value: "OMX",
                name: "OMX",
                desc: window.t("OMX — Nasdaq OMX Group"),
                flag: "europe",
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "FWB",
                name: "FWB",
                desc: window.t("FWB — Frankfurt Stock Exchange"),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [window.t("Germany")]
            }, {
                value: "FRA",
                name: "FRA",
                desc: window.t("FRA — Frankfurt Stock Exchange"),
                flag: "germany",
                hideInSymbolSearch: !0,
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [window.t("Germany")]
            }, {
                value: "SWB",
                name: "SWB",
                desc: window.t("SWB — Stuttgart Stock Exchange"),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [window.t("Germany")]
            }, {
                value: "XETR",
                name: "XETR",
                desc: window.t("XETR — Xetra"),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [window.t("Germany")]
            }, {
                value: "BME",
                name: "BME",
                desc: window.t("BME — Bolsa de Madrid"),
                flag: "spain",
                group: "Europe",
                country: "es",
                providerId: "",
                searchTerms: [window.t("Spain")]
            }, {
                value: "BSSE",
                name: "BSSE",
                desc: window.t("BSSE — Bratislava Stock Exchange"),
                flag: "slovakia",
                group: "Europe",
                country: "sk",
                providerId: ""
            }, {
                value: "GPW",
                name: "GPW",
                desc: window.t("GPW — Warsaw Stock Exchange"),
                flag: "poland",
                group: "Europe",
                country: "pl",
                providerId: "",
                searchTerms: [window.t("Poland")]
            }, {
                value: "NEWCONNECT",
                name: "GPW — NewConnect",
                desc: window.t(" GPW — NewConnect"),
                flag: "poland",
                group: "Europe",
                country: "pl",
                providerId: "",
                searchTerms: [window.t("Poland")]
            }, {
                value: "LUXSE",
                name: "LUXSE",
                desc: window.t("LuxSE — Luxembourg Stock Exchange"),
                flag: "luxembourg",
                group: "Europe",
                country: "lu",
                providerId: "",
                searchTerms: [window.t("Luxembourg")]
            }, {
                value: "MIL",
                name: "MIL",
                desc: window.t("MIL — Milan Stock Exchange"),
                flag: "italy",
                group: "Europe",
                country: "it",
                providerId: "",
                searchTerms: [window.t("Italy")]
            }, {
                value: "NGM",
                name: "NGM",
                desc: window.t("NGM — Nordic Growth Market"),
                flag: "sweden",
                group: "Europe",
                country: "se",
                providerId: "",
                searchTerms: [window.t("Sweden")]
            }, {
                value: "BER",
                name: "BER",
                desc: window.t("BER — Berlin Stock Exchange"),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [window.t("Germany")]
            }, {
                value: "DUS",
                name: "DUS",
                desc: window.t("DUS — Dusseldorf Stock Exchange"),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [window.t("Germany")]
            }, {
                value: "HAM",
                name: "HAM",
                desc: window.t("HAM — Hamburg Stock Exchange"),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [window.t("Germany")]
            }, {
                value: "HAN",
                name: "HAN",
                desc: window.t("HAN — Hanover Stock Exchange"),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [window.t("Germany")]
            }, {
                value: "MUN",
                name: "MUN",
                desc: window.t("MUN — Munich Stock Exchange"),
                flag: "germany",
                group: "Europe",
                country: "de",
                providerId: "",
                searchTerms: [window.t("Germany")]
            }, {
                value: "MILSEDEX",
                name: "MILSEDEX",
                desc: window.t("MILSEDEX — Milan Stock Exchange"),
                flag: "italy",
                group: "Europe",
                hideInSymbolSearch: !0,
                country: "it",
                providerId: "",
                searchTerms: [window.t("Italy")]
            }, {
                value: "IST",
                name: "IST",
                desc: window.t("IST — Istanbul Stock Exchange"),
                flag: "turkey",
                hideInSymbolSearch: !0,
                group: "Europe",
                country: "tr",
                providerId: "",
                searchTerms: [window.t("Turkey")]
            }, {
                value: "BIST",
                name: "BIST",
                desc: window.t("BIST — Borsa Istanbul"),
                flag: "turkey",
                group: "Europe",
                country: "tr",
                providerId: "",
                searchTerms: [window.t("Turkey")]
            }, {
                value: "TASE",
                name: "TASE",
                desc: window.t("TASE — Tel Aviv Stock Exchange"),
                flag: "israel",
                group: "Middle East / Africa",
                country: "il",
                providerId: "",
                searchTerms: [window.t("Israel")]
            }, {
                value: "SIX",
                name: "SIX",
                desc: window.t("SIX — Swiss Stock Exchange"),
                flag: "switzerland",
                hideInSymbolSearch: !0,
                group: "Europe",
                country: "ch",
                providerId: "",
                searchTerms: [window.t("Switzerland")]
            }, {
                value: "SIX",
                name: "SIX",
                desc: window.t("SIX — SIX Swiss Exchange"),
                flag: "switzerland",
                group: "Europe",
                country: "ch",
                providerId: "",
                searchTerms: [window.t("Switzerland")]
            }, {
                value: "ASX",
                name: "ASX",
                desc: window.t("ASX — Australian Securities Exchange"),
                flag: "australia",
                group: "Asia / Pacific",
                country: "au",
                providerId: "",
                searchTerms: [window.t("Australia")]
            }, {
                value: "CHIXAU",
                name: "Chi-X",
                desc: window.t("Chi-X Australia"),
                flag: "australia",
                group: "Asia / Pacific",
                country: "au",
                providerId: "",
                searchTerms: [window.t("Australia")]
            }, {
                value: "NZX",
                name: "NZX",
                desc: window.t("NZX — New Zealand Stock Exchange"),
                flag: "new_zealand",
                group: "Asia / Pacific",
                country: "nz",
                providerId: "",
                searchTerms: [window.t("New Zealand")]
            }, {
                value: "SSE",
                name: "SSE",
                desc: window.t("SSE — Shanghai Stock Exchange"),
                flag: "china",
                group: "Asia / Pacific",
                country: "cn",
                providerId: "",
                searchTerms: [window.t("China")]
            }, {
                value: "SZSE",
                name: "SZSE",
                desc: window.t("SZSE — Shenzhen Stock Exchange"),
                flag: "china",
                group: "Asia / Pacific",
                country: "cn",
                providerId: "",
                searchTerms: [window.t("China")]
            }, {
                value: "HKEX",
                name: "HKEX",
                desc: window.t("HKEX — Hong Kong Exchange"),
                flag: "hong_kong",
                group: "Asia / Pacific",
                country: "hk",
                providerId: "",
                searchTerms: [window.t("Hong Kong")]
            }, {
                value: "PSE",
                name: "PSE",
                desc: window.t("PSE — Philippine Stock Exchange"),
                flag: "philippines",
                group: "Asia / Pacific",
                country: "ph",
                providerId: "",
                searchTerms: [window.t("Philippines")]
            }, {
                value: "NSENG",
                name: "NSE",
                desc: window.t("NSE — Nigerian Stock Exchange"),
                flag: "nigeria",
                group: "Middle East / Africa",
                country: "ng",
                providerId: "",
                searchTerms: [window.t("Nigeria")]
            }, {
                value: "JSE",
                name: "JSE",
                desc: window.t("JSE — Johannesburg Stock Exchange"),
                flag: "south_africa",
                group: "Middle East / Africa",
                country: "za",
                providerId: "",
                searchTerms: [window.t("South Africa")]
            }, {
                value: "COINBASE",
                name: "Coinbase",
                desc: window.t("Coinbase"),
                flag: "bitcoin",
                group: "Cryptocurrency",
                country: "",
                providerId: "coinbase"
            }, {
                value: "USI",
                name: "USI",
                desc: window.t("USI"),
                flag: "usa",
                hideInSymbolSearch: !0,
                group: "North America",
                country: "us",
                providerId: "",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "OMXHEX",
                name: "HEX",
                desc: window.t("HEX — Nasdaq Helsinki"),
                flag: "finland",
                group: "Europe",
                country: "fi",
                providerId: "",
                searchTerms: [window.t("Finland")]
            }, {
                value: "OMXICE",
                name: "ICEX",
                desc: window.t("ICEX — Nasdaq Iceland"),
                flag: "iceland",
                group: "Europe",
                country: "is",
                providerId: "",
                searchTerms: [window.t("Iceland")]
            }, {
                value: "OMXCOP",
                name: "CSE",
                desc: window.t("CSE — Nasdaq Copenhagen"),
                flag: "denmark",
                group: "Europe",
                country: "dk",
                providerId: "",
                searchTerms: [window.t("Denmark")]
            }, {
                value: "OMXSTO",
                name: "STO",
                desc: window.t("STO — Nasdaq Stockholm"),
                flag: "sweden",
                group: "Europe",
                country: "se",
                providerId: "",
                searchTerms: [window.t("Sweden")]
            }, {
                value: "OMXVSE",
                name: "VSE",
                desc: window.t("VSE — Nasdaq Vilnius"),
                flag: "lithuania",
                group: "Europe",
                country: "lt",
                providerId: "",
                searchTerms: [window.t("Lithuania")]
            }, {
                value: "OMXTSE",
                name: "TALSE",
                desc: window.t("TALSE — Nasdaq Tallinn"),
                flag: "estonia",
                group: "Europe",
                country: "ee",
                providerId: "",
                searchTerms: [window.t("Estonia")]
            }, {
                value: "OMXRSE",
                name: "OMXR",
                desc: window.t("OMXR — Nasdaq Riga"),
                flag: "latvia",
                group: "Europe",
                country: "lv",
                providerId: "",
                searchTerms: [window.t("Latvia")]
            }, {
                value: "OMXNORDIC",
                name: "OMXNORDIC",
                desc: window.t("OMXNORDIC"),
                flag: "europe",
                hideInSymbolSearch: !0,
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "OMXBALTIC",
                name: "OMXBALTIC",
                desc: window.t("OMXBALTIC"),
                flag: "europe",
                hideInSymbolSearch: !0,
                group: "Europe",
                country: "eu",
                providerId: ""
            }, {
                value: "FRED",
                name: "FRED",
                desc: window.t("Federal Reserve Economic Data"),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "fred2",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "ISM",
                name: "ISM",
                desc: window.t("Institute for Supply Management"),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "quandl",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "FRBNY",
                name: "FRBNY",
                desc: window.t("Federal Reserve Bank of New York"),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "quandl",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "FRBP",
                name: "FRBP",
                desc: window.t("Federal Reserve Bank of Philadelphia"),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "quandl",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }, {
                value: "ECONOMICS",
                name: "Trading Economics",
                desc: window.t("World economic data"),
                flag: "usa",
                group: "Economy",
                country: "",
                providerId: "economics",
                searchTerms: [window.t("USA"), window.t("The United States of America")]
            }]
        },
        36254: e => {
            e.exports = [{
                name: window.t("All"),
                value: ""
            }, {
                name: window.t("Stock"),
                value: "stock"
            }, {
                name: window.t("Futures"),
                value: "futures"
            }, {
                name: window.t("Forex"),
                value: "forex"
            }, {
                name: window.t("CFD"),
                value: "cfd"
            }, {
                name: window.t("Crypto"),
                value: "bitcoin,crypto"
            }, {
                name: window.t("Index"),
                value: "index"
            }, {
                name: window.t("Bond"),
                value: "bond"
            }, {
                name: window.t("Economy"),
                value: "economic"
            }]
        },
        551922: () => {},
        60272: () => {},
        648497: e => {
            e.exports = {
                "css-value-widgetbar-tabs-width": "45px",
                "css-value-widgetbar-border-width": "1px"
            }
        },
        886816: () => {},
        450767: () => {},
        387118: () => {},
        957233: () => {},
        433336: () => {},
        999552: () => {},
        983472: () => {},
        193971: () => {},
        379481: () => {},
        219269: () => {},
        140154: () => {},
        567577: () => {},
        600084: () => {},
        702406: () => {},
        527551: () => {},
        633948: () => {},
        333399: e => {
            e.exports = {
                errorDialog: "errorDialog-35rITUhS"
            }
        },
        445981: e => {
            e.exports = {
                "css-value-categories-width": "200px",
                "css-value-subcategories-width": "220px",
                "css-value-extra-width": "232px"
            }
        },
        102166: e => {
            e.exports = {
                "css-value-categories-width": "200px",
                "css-value-subcategories-width": "220px",
                "css-value-extra-width": "232px",
                menuBox: "menuBox-3vJEMb9o",
                reversed: "reversed-3vJEMb9o",
                menuWrap: "menuWrap-3vJEMb9o",
                scrollWrap: "scrollWrap-3vJEMb9o",
                categories: "categories-3vJEMb9o",
                subcategories: "subcategories-3vJEMb9o",
                extra: "extra-3vJEMb9o",
                menuItem: "menuItem-3vJEMb9o",
                active: "active-3vJEMb9o",
                menuItemText: "menuItemText-3vJEMb9o",
                badge: "badge-3vJEMb9o",
                icon: "icon-3vJEMb9o"
            }
        },
        569448: e => {
            e.exports = {
                banner: "banner-1CkSj9H1",
                icon: "icon-1CkSj9H1",
                text: "text-1CkSj9H1"
            }
        },
        355085: e => {
            e.exports = {
                logo: "logo-3T-nEo6o",
                info: "info-3T-nEo6o",
                ratingWrapper: "ratingWrapper-3T-nEo6o",
                rating: "rating-3T-nEo6o",
                starsWrapper: "starsWrapper-3T-nEo6o"
            }
        },
        832871: e => {
            e.exports = {
                item: "item-AKDLxKRY"
            }
        },
        271257: e => {
            e.exports = {
                ticker: "ticker--Fvqc-rJ",
                text: "text--Fvqc-rJ",
                head: "head--Fvqc-rJ",
                body: "body--Fvqc-rJ",
                title: "title--Fvqc-rJ",
                logo: "logo--Fvqc-rJ",
                lastWrapper: "lastWrapper--Fvqc-rJ",
                last: "last--Fvqc-rJ",
                change: "change--Fvqc-rJ",
                growing: "growing--Fvqc-rJ",
                up: "up--Fvqc-rJ",
                falling: "falling--Fvqc-rJ",
                down: "down--Fvqc-rJ"
            }
        },
        255758: () => {},
        752467: () => {},
        193088: () => {},
        97708: e => {
            e.exports = {
                widgetbarButton: "widgetbarButton-UlhSTSo_"
            }
        },
        223523: e => {
            e.exports = {
                "css-value-widgets-margin": "4px",
                widget: "widget-1quyc-Kt",
                widgetHeader: "widgetHeader-1quyc-Kt",
                widgetTitle: "widgetTitle-1quyc-Kt",
                headerSpace: "headerSpace-1quyc-Kt"
            }
        },
        610090: () => {},
        614750: e => {
            e.exports = {
                container: "container-3CL4Geq2",
                mirror: "mirror-3CL4Geq2",
                background: "background-3CL4Geq2",
                arrow: "arrow-3CL4Geq2"
            }
        },
        24816: e => {
            e.exports = {
                wrap: "wrap-379NmUSU",
                scrollWrap: "scrollWrap-379NmUSU",
                noScrollBar: "noScrollBar-379NmUSU",
                content: "content-379NmUSU",
                icon: "icon-379NmUSU",
                scrollBot: "scrollBot-379NmUSU",
                scrollTop: "scrollTop-379NmUSU",
                isVisible: "isVisible-379NmUSU",
                iconWrap: "iconWrap-379NmUSU",
                fadeBot: "fadeBot-379NmUSU",
                fadeTop: "fadeTop-379NmUSU"
            }
        },
        964656: e => {
            e.exports = {
                button: "button-2OmDro4I",
                icon: "icon-2OmDro4I"
            }
        },
        536427: e => {
            e.exports = {
                filler: "filler-1ggHJ4cQ"
            }
        },
        474423: e => {
            e.exports = {
                toolbar: "toolbar-OvhMiobx",
                isGrayed: "isGrayed-OvhMiobx"
            }
        },
        749761: e => {
            e.exports = {
                separator: "separator-3YbwEKtL"
            }
        },
        261552: e => {
            e.exports = {
                button: "button-DABaJZo4",
                hover: "hover-DABaJZo4",
                hoverMask: "hoverMask-DABaJZo4",
                icon: "icon-DABaJZo4",
                counterRow: "counterRow-DABaJZo4",
                counter: "counter-DABaJZo4",
                isGrayed: "isGrayed-DABaJZo4",
                isActive: "isActive-DABaJZo4",
                isTab: "isTab-DABaJZo4"
            }
        },
        578746: e => {
            e.exports = {
                "common-tooltip": "common-tooltip-36YLR71G",
                "common-tooltip--hidden": "common-tooltip--hidden-36YLR71G",
                "common-tooltip--horizontal": "common-tooltip--horizontal-36YLR71G",
                "common-tooltip--farther": "common-tooltip--farther-36YLR71G",
                "common-tooltip--vertical": "common-tooltip--vertical-36YLR71G",
                "common-tooltip-farther": "common-tooltip-farther-36YLR71G",
                "common-tooltip--direction_normal": "common-tooltip--direction_normal-36YLR71G",
                "common-tooltip__body": "common-tooltip__body-36YLR71G",
                "common-tooltip__button-container": "common-tooltip__button-container-36YLR71G",
                "common-tooltip__body--no-buttons": "common-tooltip__body--no-buttons-36YLR71G",
                "common-tooltip__button": "common-tooltip__button-36YLR71G",
                "common-tooltip--direction_reversed": "common-tooltip--direction_reversed-36YLR71G",
                "common-tooltip__ear-holder": "common-tooltip__ear-holder-36YLR71G",
                "common-tooltip__ear-holder--below": "common-tooltip__ear-holder--below-36YLR71G",
                "common-tooltip__ear-holder--above": "common-tooltip__ear-holder--above-36YLR71G",
                "common-tooltip__ear-holder--before": "common-tooltip__ear-holder--before-36YLR71G",
                "common-tooltip__ear-holder--after": "common-tooltip__ear-holder--after-36YLR71G",
                "common-tooltip__body--with-hotkey": "common-tooltip__body--with-hotkey-36YLR71G",
                "common-tooltip__body--width_wide": "common-tooltip__body--width_wide-36YLR71G",
                "common-tooltip__body--width_narrow": "common-tooltip__body--width_narrow-36YLR71G",
                "common-tooltip__body--no-padding": "common-tooltip__body--no-padding-36YLR71G",
                "common-tooltip__hotkey-block": "common-tooltip__hotkey-block-36YLR71G",
                "common-tooltip__hotkey-block--divider": "common-tooltip__hotkey-block--divider-36YLR71G",
                "common-tooltip__hotkey-text": "common-tooltip__hotkey-text-36YLR71G",
                "common-tooltip__hotkey-button": "common-tooltip__hotkey-button-36YLR71G",
                "common-tooltip__plus-sign": "common-tooltip__plus-sign-36YLR71G"
            }
        },
        862768: () => {},
        424953: () => {},
        610046: () => {},
        851176: () => {},
        310714: () => {},
        914103: () => {},
        950579: () => {},
        804060: () => {},
        339350: () => {},
        850873: e => {
            e.exports = {
                "css-value-blackfriday-attention": "#F23645",
                "css-value-cybermonday-attention": "#00e5ff"
            }
        },
        180510: () => {},
        339410: e => {
            e.exports = {
                "i-hover": "i-hover-3x_bnkuB",
                "i-active": "i-active-3x_bnkuB"
            }
        },
        466517: e => {
            e.exports = {
                wrapper: "wrapper-2eb-SI2I",
                touch: "touch-2eb-SI2I"
            }
        },
        128519: () => {},
        456017: () => {},
        44404: () => {},
        35151: e => {
            e.exports = {
                counter: "counter-1nuJd9UN"
            }
        },
        661732: e => {
            e.exports = {
                pill: "pill-1GiNrmG7",
                color: "color-1GiNrmG7",
                orange: "orange-1GiNrmG7 color-1GiNrmG7",
                gray: "gray-1GiNrmG7 color-1GiNrmG7",
                green: "green-1GiNrmG7 color-1GiNrmG7",
                blue: "blue-1GiNrmG7 color-1GiNrmG7"
            }
        },
        150879: () => {},
        775074: () => {},
        133467: e => {
            e.exports = {
                menuWrap: "menuWrap-g78rwseC",
                isMeasuring: "isMeasuring-g78rwseC",
                scrollWrap: "scrollWrap-g78rwseC",
                momentumBased: "momentumBased-g78rwseC",
                menuBox: "menuBox-g78rwseC",
                isHidden: "isHidden-g78rwseC"
            }
        },
        993669: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                colorsPalette: () => d,
                getHexColorByName: () => u
            });
            const o = JSON.parse('{"color-white":"#ffffff","color-black":"#000000","color-cold-gray-50":"#F8F9FD","color-cold-gray-100":"#F0F3FA","color-cold-gray-150":"#E0E3EB","color-cold-gray-200":"#D1D4DC","color-cold-gray-250":"#C1C4CD","color-cold-gray-300":"#B2B5BE","color-cold-gray-350":"#A3A6AF","color-cold-gray-400":"#9598A1","color-cold-gray-450":"#868993","color-cold-gray-500":"#787B86","color-cold-gray-550":"#6A6D78","color-cold-gray-600":"#5D606B","color-cold-gray-650":"#50535E","color-cold-gray-700":"#434651","color-cold-gray-750":"#363A45","color-cold-gray-800":"#2A2E39","color-cold-gray-850":"#1E222D","color-cold-gray-900":"#131722","color-cold-gray-950":"#0C0E15","color-ripe-red-50":"#FFEBEC","color-ripe-red-100":"#FCCBCD","color-ripe-red-200":"#FAA1A4","color-ripe-red-300":"#F77C80","color-ripe-red-400":"#F7525F","color-ripe-red-500":"#F23645","color-ripe-red-600":"#CC2F3C","color-ripe-red-700":"#B22833","color-ripe-red-800":"#991F29","color-ripe-red-900":"#801922","color-ripe-red-a100":"#FF8080","color-ripe-red-a200":"#FF5252","color-ripe-red-a400":"#FF3333","color-ripe-red-a600":"#CC2929","color-ripe-red-a700":"#802028","color-ripe-red-a800":"#4D191D","color-ripe-red-a900":"#331F20","color-tan-orange-50":"#FFF3E0","color-tan-orange-100":"#FFE0B2","color-tan-orange-200":"#FFCC80","color-tan-orange-300":"#ffb74d","color-tan-orange-400":"#FFA726","color-tan-orange-500":"#FF9800","color-tan-orange-600":"#FB8C00","color-tan-orange-700":"#F57C00","color-tan-orange-800":"#EF6C00","color-tan-orange-900":"#e65100","color-tan-orange-a200":"#ffab40","color-tan-orange-a400":"#ff9100","color-tan-orange-a700":"#FF6D00","color-iguana-green-100":"#C8E6C9","color-iguana-green-200":"#A5D6A7","color-iguana-green-300":"#81c784","color-iguana-green-400":"#66BB6A","color-iguana-green-500":"#4caf50","color-iguana-green-600":"#43a047","color-iguana-green-700":"#388e3c","color-iguana-green-800":"#2E7D32","color-iguana-green-900":"#1B5E20","color-iguana-green-a700":"#00c853","color-banana-yellow-100":"#FFF9C4","color-banana-yellow-200":"#FFF59D","color-banana-yellow-300":"#FFF176","color-banana-yellow-400":"#ffee58","color-banana-yellow-500":"#ffeb3b","color-banana-yellow-600":"#fdd835","color-banana-yellow-700":"#fbc02d","color-banana-yellow-800":"#f9a825","color-banana-yellow-900":"#F57F17","color-banana-yellow-a400":"#ffea00","color-banana-yellow-a700":"#ffd600","color-tv-blue-50":"#E3EFFD","color-tv-blue-100":"#BBD9FB","color-tv-blue-200":"#90BFF9","color-tv-blue-300":"#5B9CF6","color-tv-blue-400":"#3179F5","color-tv-blue-500":"#2962FF","color-tv-blue-600":"#1E53E5","color-tv-blue-700":"#1848CC","color-tv-blue-800":"#143EB3","color-tv-blue-900":"#0C3299","color-tv-blue-a100":"#82b1ff","color-tv-blue-a200":"#448aff","color-tv-blue-a400":"#2979ff","color-tv-blue-a600":"#2962FF","color-tv-blue-a700":"#143A87","color-tv-blue-a800":"#142E61","color-tv-blue-a900":"#132042","color-deep-blue-100":"#D1C4E9","color-deep-blue-200":"#B39DDB","color-deep-blue-300":"#9575cd","color-deep-blue-400":"#7e57c2","color-deep-blue-500":"#673ab7","color-deep-blue-700":"#512da8","color-deep-blue-800":"#4527A0","color-deep-blue-900":"#311B92","color-deep-blue-a100":"#b388ff","color-deep-blue-a400":"#651FFF","color-deep-blue-a700":"#6200EA","color-minty-green-50":"#DAF2EE","color-minty-green-100":"#ACE5DC","color-minty-green-200":"#70CCBD","color-minty-green-300":"#42BDA8","color-minty-green-400":"#22AB94","color-minty-green-500":"#089981","color-minty-green-600":"#06806B","color-minty-green-700":"#056656","color-minty-green-800":"#004D40","color-minty-green-900":"#00332A","color-minty-green-a400":"#2BD9BC","color-minty-green-a700":"#24B29B","color-minty-green-a900":"#082621","color-grapes-purple-50":"#F3E5F5","color-grapes-purple-100":"#E1BEE7","color-grapes-purple-200":"#CE93D8","color-grapes-purple-300":"#ba68c8","color-grapes-purple-400":"#ab47bc","color-grapes-purple-500":"#9c27b0","color-grapes-purple-600":"#8e24aa","color-grapes-purple-700":"#7b1fa2","color-grapes-purple-800":"#6A1B9A","color-grapes-purple-900":"#4A148C","color-grapes-purple-a200":"#E040FB","color-grapes-purple-a400":"#D500F9","color-grapes-purple-a700":"#aa00ff","color-berry-pink-100":"#F8BBD0","color-berry-pink-200":"#f48fb1","color-berry-pink-300":"#f06292","color-berry-pink-400":"#ec407a","color-berry-pink-500":"#e91e63","color-berry-pink-600":"#D81B60","color-berry-pink-700":"#C2185B","color-berry-pink-800":"#AD1457","color-berry-pink-900":"#880E4F","color-berry-pink-a100":"#ff80ab","color-berry-pink-a200":"#ff4081","color-sky-blue-100":"#B2EBF2","color-sky-blue-200":"#80DEEA","color-sky-blue-300":"#4dd0e1","color-sky-blue-400":"#26c6da","color-sky-blue-500":"#00bcd4","color-sky-blue-600":"#00acc1","color-sky-blue-700":"#0097A7","color-sky-blue-800":"#00838F","color-sky-blue-900":"#006064","color-sky-blue-a400":"#00e5ff","color-sky-blue-a700":"#00B8D4","color-deep-blue-600":"#5E35B1","color-facebook":"#1877F2","color-deep-facebook":"#1564CA","color-twitter":"#1DA1F2","color-deep-twitter":"#188CD3","color-youtube":"#FF0000","color-linkedin":"#007BB5","color-aqua-spring":"#ebf9f5","color-army-green":"#3d2c12","color-army-green-2":"#31230d","color-athens-gray-1":"#f2f3f5","color-athens-gray-2":"#f7f8fa","color-athens-gray-3":"#eceff2","color-black-180":"#b4b4b4","color-blue-dianne":"#21384d","color-bluish":"#2185cc","color-bright-gray":"#363c4e","color-brownish-grey":"#8d6e63","color-carnation":"#f04561","color-catskill-white":"#e1ecf2","color-charade":"#2f3241","color-charcoal-grey":"#323337","color-curious-blue":"#299dcd","color-dark-blue-grey":"#123440","color-darkness-blue-grey":"#12213b","color-dark-grey":"#292a2d","color-dark-grey-blue":"#28415a","color-dark-sky-blue":"#37a6ef","color-deep-sea-blue":"#016087","color-ebony-clay":"#262b3e","color-foam":"#d7f0fb","color-gull-gray":"#9db2bd","color-humming-bird":"#d3eef9","color-keppel-1":"#37bc9b","color-keppel-2":"#34b293","color-lavender-blush":"#ffedf0","color-lightish-purple":"#a75ee8","color-loblolly":"#c5cbce","color-manatee":"#878ca8","color-mandy":"#eb4d5c","color-medium-blue":"#2e7bb2","color-milk-chocolate":"#6f2626","color-mirage-1":"#131722","color-mirage-2":"#171b29","color-mirage-3":"#1c2030","color-mischka":"#d6d8e0","color-morning-glory":"#9addcc","color-oslo-gray":"#8b8e95","color-pale":"#fff2cf","color-pale-grey-1":"#f9fafb","color-pale-grey-2":"#e7ebee","color-pale-sky":"#6b7988","color-picton-blue-1":"#3bb3e4","color-puerto-rico":"#3bc2a1","color-purple-brown":"#4e2934","color-purple-brown-2":"#3d2028","color-radical-red":"#ff4a68","color-regent-gray":"#8797a5","color-scooter":"#38acdb","color-silver-tree":"#53b987","color-slate-gray":"#758696","color-sundown":"#ffa4b3","color-sunglow":"#ffca3b","color-tan-hide":"#ff9850","color-trout-1":"#4c525e","color-trout-2":"#4f5966","color-violet-1":"#332738","color-violet-2":"#271d2b","color-white-ice":"#ebf7fc","color-wild-watermelon":"#ff5773","color-readonly-input":"#b4b4b4","color-brand-dark":"#2a2c39","color-seeking-alpha-brand":"#ff7200"}'),
                n = JSON.parse('{"color-bg-primary":"color-white","color-bg-primary-hover":"color-cold-gray-100","color-bg-secondary":"color-white","color-bg-highlight":"color-cold-gray-50","color-bg-scroll-buttons":"color-cold-gray-100","color-legacy-bg-scroll-buttons":"color-cold-gray-850","color-legacy-bg-widget":"color-white","color-text-primary":"color-cold-gray-900","color-text-secondary":"color-cold-gray-500","color-text-tertiary":"color-cold-gray-400","color-text-disabled":"color-cold-gray-300","color-accent-content":"color-cold-gray-900","color-box-shadow":"color-cold-gray-300","color-divider":"color-cold-gray-150","color-divider-hover":"color-cold-gray-100","color-divider-secondary":"color-cold-gray-100","color-active-hover-text":"color-cold-gray-900","color-alert-text":"color-cold-gray-900","color-border-table":"color-cold-gray-100","color-brand":"color-tv-blue-500","color-brand-active":"color-tv-blue-700","color-brand-hover":"color-tv-blue-600","color-chart-page-bg":"color-cold-gray-150","color-common-tooltip-bg":"color-cold-gray-800","color-danger":"color-ripe-red-400","color-danger-hover":"color-ripe-red-500","color-danger-active":"color-ripe-red-600","color-depthrenderer-stroke-style":"color-cold-gray-100","color-highlight-new":"color-tan-orange-50","color-input-bg":"color-white","color-input-publish-bg":"color-white","color-link":"color-tv-blue-500","color-link-hover":"color-tv-blue-600","color-link-active":"color-tv-blue-700","color-list-nth-child-bg":"color-cold-gray-50","color-pane-bg":"color-white","color-pane-secondary-bg":"color-cold-gray-100","color-popup-menu-item-hover-bg":"color-cold-gray-100","color-popup-menu-separator":"color-cold-gray-150","color-screener-description":"color-cold-gray-650","color-success":"color-minty-green-500","color-success-hover":"color-minty-green-600","color-success-active":"color-minty-green-700","color-toolbar-button-text":"color-cold-gray-900","color-toolbar-button-text-hover":"color-cold-gray-900","color-toolbar-button-text-active":"color-tv-blue-500","color-toolbar-button-text-active-hover":"color-tv-blue-600","color-toolbar-button-background-hover":"color-cold-gray-100","color-toolbar-button-background-secondary-hover":"color-cold-gray-150","color-toolbar-toggle-button-background-active":"color-tv-blue-500","color-toolbar-toggle-button-background-active-hover":"color-tv-blue-600","color-toolbar-interactive-element-text-normal":"color-cold-gray-900","color-toolbar-interactive-element-text-hover":"color-cold-gray-900","color-toolbar-opened-element-bg":"color-cold-gray-100","color-tooltip-bg":"color-cold-gray-800","color-tv-dialog-caption":"color-cold-gray-650","color-tv-dropdown-item-hover-bg":"color-cold-gray-100","color-underlined-text":"color-cold-gray-500","color-widget-pages-bg":"color-white","color-warning":"color-tan-orange-500","color-growing":"color-minty-green-400","color-falling":"color-ripe-red-400","color-forex-icon":"color-cold-gray-750","color-list-item-active-bg":"color-tv-blue-400","color-list-item-hover-bg":"color-tv-blue-50","color-list-item-text":"color-cold-gray-800","color-price-axis-label-back":"color-cold-gray-150","color-price-axis-label-text":"color-cold-gray-650","color-price-axis-gear":"color-cold-gray-900","color-price-axis-gear-hover":"color-black","color-price-axis-highlight":"color-cold-gray-150","color-bid":"color-tv-blue-500","color-border":"color-cold-gray-150","color-border-chat-fields":"color-cold-gray-250","color-border-hover":"color-cold-gray-250","color-button-hover-bg":"color-cold-gray-150","color-depthrenderer-fill-style":"color-cold-gray-650","color-disabled-border-and-color":"color-cold-gray-150","color-disabled-input":"color-cold-gray-150","color-empty-container-message":"color-cold-gray-500","color-icons":"color-cold-gray-500","color-input-textarea-readonly":"color-cold-gray-650","color-input-placeholder-text":"color-cold-gray-350","color-item-active-blue":"color-tv-blue-50","color-item-hover-active-bg":"color-tv-blue-100","color-item-hover-bg":"color-tv-blue-100","color-item-hover-blue":"color-tv-blue-100","color-item-selected-blue":"color-tv-blue-50","color-item-active-text":"color-white","color-item-active-bg":"color-tv-blue-500","color-list-item":"color-cold-gray-450","color-news-highlight":"color-tv-blue-100","color-placeholder":"color-cold-gray-350","color-row-hover-active-bg":"color-cold-gray-100","color-sb-scrollbar-body-bg":"color-cold-gray-200","color-section-separator-border":"color-cold-gray-300","color-separator-table-chat":"color-cold-gray-150","color-tag-active-bg":"color-cold-gray-200","color-tag-hover-bg":"color-cold-gray-150","color-text-regular":"color-cold-gray-700","color-tv-button-checked":"color-cold-gray-550","color-scroll-bg":"color-cold-gray-400","color-scroll-border":"color-cold-gray-100","color-widget-border":"color-cold-gray-100","color-scroll-buttons-arrow":"color-white","color-control-intent-default":"color-cold-gray-200","color-control-intent-success":"color-minty-green-600","color-control-intent-primary":"color-tv-blue-500","color-control-intent-warning":"color-tan-orange-500","color-control-intent-danger":"color-ripe-red-500","color-pre-market":"color-tan-orange-600","color-pre-market-bg":"color-tan-orange-400","color-post-market":"color-tv-blue-500","color-post-market-bg":"color-tv-blue-400","color-market-open":"color-minty-green-500","color-market-open-bg":"color-minty-green-400","color-market-closed":"color-cold-gray-400","color-market-holiday":"color-cold-gray-400","color-invalid-symbol":"color-ripe-red-400","color-invalid-symbol-hover":"color-ripe-red-700","color-replay-mode":"color-tv-blue-500","color-replay-mode-icon":"color-white","color-replay-mode-hover":"color-tv-blue-600","color-notaccurate-mode":"color-berry-pink-700","color-notaccurate-mode-bg":"color-berry-pink-400","color-delay-mode":"color-tan-orange-700","color-delay-mode-bg":"color-tan-orange-400","color-eod-mode":"color-grapes-purple-700","color-eod-mode-bg":"color-grapes-purple-400","color-data-problem":"color-ripe-red-600","color-data-problem-bg":"color-ripe-red-400","color-data-problem-hover":"color-ripe-red-700","color-list-item-bg-highlighted":"color-tv-blue-50","color-list-item-bg-selected":"color-tv-blue-100","color-list-item-bg-highlighted-hover":"color-tv-blue-100","color-list-item-bg-selected-hover":"color-tv-blue-200","color-screener-header-bg":"color-white","color-screener-header-bg-hover":"color-cold-gray-100","color-marker-flagged":"color-ripe-red-400","color-marker-flagged-hovered":"color-ripe-red-600","color-ask":"color-ripe-red-400","color-sell":"color-ripe-red-400","color-buy":"color-tv-blue-500","color-neutral":"color-cold-gray-500","color-pro":"color-minty-green-400","color-pro-hover":"color-minty-green-600","color-pro-plus":"color-tv-blue-500","color-pro-plus-hover":"color-tv-blue-600","color-pro-premium":"color-tan-orange-500","color-pro-premium-hover":"color-tan-orange-700","color-trial":"color-cold-gray-500","color-trial-hover":"color-cold-gray-600","color-mod":"color-ripe-red-400","color-mod-hover":"color-ripe-red-600","color-ad":"color-banana-yellow-a700","color-broker-featured":"color-minty-green-400","color-broker-featured-hover":"color-minty-green-600","color-alert-status-active":"color-minty-green-400","color-alert-status-stopped":"color-ripe-red-500","color-alert-status-triggered":"color-tan-orange-500","color-covid19-confirmed":"color-ripe-red-500","color-covid19-recovered":"color-minty-green-500","color-covid19-deaths":"color-cold-gray-450","color-overlay":"color-cold-gray-400","color-search-button-hover":"color-cold-gray-150","color-common-tooltip-text":"color-cold-gray-100","color-replay-data-mode":"color-radical-red","color-legacy-success":"color-keppel-1","color-collapse-tabs-border":"color-athens-gray-3","color-site-widget-hover":"color-athens-gray-1","color-attention":"color-sunglow","color-card-border":"color-cold-gray-150","color-card-border-hover":"color-cold-gray-300","color-background-special-primary":"color-white","color-stroke-special-primary":"color-cold-gray-150","color-selection-bg":"color-tv-blue-100"}');
            var r = i(416282);
            const s = { ...o,
                    ...n
                },
                a = {},
                l = Object.keys(s).length,
                c = /^#[0-9A-F]{6}$/i;
            Object.keys(s).forEach(e => {
                const t = function e(t, i = []) {
                    const o = s[t];
                    if (!o) return null;
                    if (c.test(o)) return o;
                    const n = o;
                    return i.push(t), -1 !== i.indexOf(n) ? (console.warn("Colors definitions cycled"), o) : i.length > l ? (console.warn("Too many variables-link in HEX-color search: " + i[0]), null) : e(n, i)
                }(e);
                a[e] = (0, r.ensureNotNull)(t)
            });
            const d = a;

            function u(e) {
                const t = d[e];
                if (!t) throw new Error("No such color " + e);
                return t
            }
        },
        669388: (e, t, i) => {
            "use strict";
            i.d(t, {
                dur: () => o,
                easingFunc: () => n,
                CubicBezier: () => r,
                color: () => s
            });
            const o = 350,
                n = {
                    linear: e => e,
                    easeInQuad: e => e * e,
                    easeOutQuad: e => e * (2 - e),
                    easeInOutQuad: e => e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1,
                    easeInCubic: e => e * e * e,
                    easeOutCubic: e => --e * e * e + 1,
                    easeInOutCubic: e => e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
                    easeInQuart: e => e * e * e * e,
                    easeOutQuart: e => 1 - --e * e * e * e,
                    easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
                    easeInQuint: e => e * e * e * e * e,
                    easeOutQuint: e => 1 + --e * e * e * e * e,
                    easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
                };
            class r {
                constructor(e, t, i, o) {
                    this._mX1 = e, this._mY1 = t, this._mX2 = i, this._mY2 = o
                }
                easingFunc(e) {
                    return this._mX1 === this._mY1 && this._mX2 === this._mY2 ? e : this._calcBezier(this._getTForX(e))
                }
                _a(e, t) {
                    return 1 - 3 * t + 3 * e
                }
                _b(e, t) {
                    return 3 * t - 6 * e
                }
                _c(e) {
                    return 3 * e
                }
                _calcBezier(e) {
                    return ((this._a(this._mY1, this._mY2) * e + this._b(this._mY1, this._mY2)) * e + this._c(this._mY1)) * e
                }
                _getSlope(e) {
                    return 3 * this._a(this._mX1, this._mX2) * e * e + 2 * this._b(this._mX1, this._mX2) * e + this._c(this._mX1)
                }
                _getTForX(e) {
                    let t = e;
                    for (let i = 0; i < 4; ++i) {
                        const i = this._getSlope(t);
                        if (0 === i) return t;
                        t -= (this._calcBezier(t) - e) / i
                    }
                    return t
                }
            }
            const s = {
                black70: "#4A4A4A",
                black80: "#535353"
            }
        },
        640539: (e, t, i) => {
            "use strict";
            i.d(t, {
                Icon: () => n
            });
            var o = i(667294);
            const n = o.forwardRef((e, t) => {
                const {
                    icon: i = "",
                    ...n
                } = e;
                return o.createElement("span", { ...n,
                    ref: t,
                    dangerouslySetInnerHTML: {
                        __html: i
                    }
                })
            })
        },
        637914: (e, t, i) => {
            "use strict";
            i.d(t, {
                isRatingFilter: () => n,
                castToRating: () => r,
                getRatingNaming: () => s
            });
            var o = i(120220);

            function n(e) {
                return "number" == typeof e && [1, 2, 3, 4, 5].includes(e)
            }

            function r(e) {
                return 0 === e ? 0 : (e = Math.max(1, Math.min(5, e)), Math.round(2 * e) / 2)
            }

            function s(e) {
                return new Map([
                    [1, o.t("Bad")],
                    [2, o.t("Poor")],
                    [3, o.t("Average")],
                    [4, o.t("Great")],
                    [5, o.t("Excellent")]
                ]).get(function(e) {
                    if (e <= 0) return 0;
                    return (e = Math.max(1, Math.min(5, e))) <= 4.5 ? Math.floor(e) : Math.ceil(e)
                }(e)) || ""
            }
        },
        485139: (e, t, i) => {
            "use strict";
            i.d(t, {
                makeCancelable: () => n,
                isCancelled: () => r
            });
            class o {}

            function n(e) {
                let t = !1;
                return {
                    promise: new Promise((i, n) => {
                        e.then(e => t ? n(new o) : i(e)), e.catch(e => n(t ? new o : e))
                    }),
                    cancel() {
                        t = !0
                    }
                }
            }

            function r(e) {
                return e instanceof o
            }
        },
        361581: (e, t, i) => {
            "use strict";
            i.d(t, {
                getTooltipData: () => n,
                setTooltipData: () => r
            });
            const o = new WeakMap;

            function n(e, t) {
                const i = o.get(e);
                return i instanceof Function ? i(t) : i && i[t]
            }

            function r(e, t, i) {
                if (i instanceof Function) return void o.set(e, i);
                const n = o.get(e),
                    r = void 0 === n || n instanceof Function ? {} : n;
                r[t] = i, o.set(e, r)
            }
        },
        883147: (e, t, i) => {
            "use strict";
            i.d(t, {
                hotKeySerialize: () => n,
                hotKeyDeserialize: () => r
            });
            var o = i(644197);

            function n(e) {
                return (0, o.clean)(JSON.stringify(e))
            }

            function r(e) {
                return JSON.parse((0, o.clean)(e, !0))
            }
        },
        94970: (e, t, i) => {
            "use strict";
            i.d(t, {
                hide: () => q,
                show: () => z,
                showOnElement: () => W
            });
            var o = i(195355);
            let n = 0,
                r = 0,
                s = 0;

            function a() {
                clearTimeout(n), clearTimeout(r), clearTimeout(s)
            }

            function l(e, t) {
                n = setTimeout(e, t)
            }
            const c = "tooltip-root-element";
            let d;

            function u() {
                const e = document.getElementById(c);
                e ? d = e : (d = document.createElement("div"), d.id = c, document.body.appendChild(d))
            }

            function h() {
                d && (d.innerHTML = "")
            }
            "interactive" === document.readyState ? u() : document.addEventListener("DOMContentLoaded", u);
            var p = i(416282);
            const g = {
                    default: "",
                    white: "theme-white",
                    "round-shadow": "theme-round-shadow"
                },
                m = Object.keys(g);
            var _ = i(361581),
                f = i(883147),
                v = i(13548),
                w = i(582755),
                y = (i(568421), i(53549)),
                b = i(184162),
                S = i(968724),
                T = i(578746);

            function E(e) {
                const t = function(e) {
                        const t = e.hasAttribute("data-tooltip") ? e.getAttribute("data-tooltip") : e.getAttribute("title");
                        return t && ((0, _.setTooltipData)(e, "text", t), e.removeAttribute("title")), (0, _.getTooltipData)(e, "text") || ""
                    }(e),
                    i = e.getBoundingClientRect(),
                    o = {
                        h: i.height,
                        w: i.width,
                        x: i.left,
                        y: i.top
                    },
                    n = e.getAttribute("data-color-theme") || "",
                    r = e.classList.contains("common-tooltip-html"),
                    s = parseInt(e.getAttribute("data-tooltip-delay") || ""),
                    a = parseInt(e.getAttribute("data-tooltip-debounce") || "");
                let l = {
                    type: "none"
                };
                return t && (l = {
                    type: r ? "html" : "text",
                    data: t
                }), {
                    above: e.classList.contains("common-tooltip-above"),
                    below: e.classList.contains("common-tooltip-below"),
                    otl: e.classList.contains("common-tooltip-otl"),
                    otr: e.classList.contains("common-tooltip-otr"),
                    vertical: e.classList.contains("common-tooltip-vertical"),
                    hotkey: e.getAttribute("data-tooltip-hotkey"),
                    narrow: e.classList.contains("common-tooltip-narrow"),
                    wide: e.classList.contains("common-tooltip-wide"),
                    colorTheme: n,
                    tooltipDelay: s,
                    tooltipDebounce: a,
                    rect: o,
                    content: l,
                    target: e
                }
            }

            function C(e) {
                const t = D.cloneNode(!0),
                    i = B(t),
                    {
                        content: o
                    } = e;
                switch (o.type) {
                    case "element":
                        i.innerHTML = "", i.appendChild(o.data);
                        break;
                    case "html":
                        i.innerHTML = o.data;
                        break;
                    case "text":
                        if (e.hotkey) {
                            const e = M.cloneNode(!0);
                            e.innerText = o.data, i.appendChild(e)
                        } else i.innerText = o.data
                }
                if (e.hotkey) {
                    const t = "none" !== o.type,
                        n = N.cloneNode(!0),
                        r = (0, f.hotKeyDeserialize)(e.hotkey),
                        s = r.keys.map(e => `<span class="${T["common-tooltip__hotkey-button"]}">${e}</span>`);
                    n.innerHTML = function(e, t) {
                        return e.replace(/{\d}|{hotkey_\d}/gi, e => {
                            const i = Number(e.match(/\d/));
                            return t[i]
                        })
                    }(r.text, s).replace(/\s\+\s/g, `<span class="${T["common-tooltip__plus-sign"]}">+</span>`), i.classList.add(T["common-tooltip__body--with-hotkey"]), t && n.classList.add(T["common-tooltip__hotkey-block--divider"]), i.appendChild(n)
                }
                return t.addEventListener("contextmenu", y.preventDefault), t
            }

            function A(e, t) {
                const i = t.rect;
                if (!i) return;
                ! function(e, t) {
                    const i = m.includes(t) ? g[t] : "";
                    e.classList.remove(...m.map(e => g[e]).filter(e => !!e)), i && !e.classList.contains(i) && e.classList.add(i)
                }(e, t.colorTheme || "default"), t.addClass && e.classList.add(t.addClass);
                const o = B(e),
                    n = e.querySelector("." + T["common-tooltip__button-container"]);
                o.classList.toggle(T["common-tooltip__body--width_wide"], Boolean(t.wide)),
                    o.classList.toggle(T["common-tooltip__body--no-padding"], Boolean(t.noPadding)), o.classList.toggle(T["common-tooltip__body--width_narrow"], Boolean(t.narrow)), o.classList.toggle(T["common-tooltip__body--no-buttons"], !0), o.style.left = k(0), o.style.width = k(o.clientWidth + (Boolean(t.noPadding) ? 0 : 2));
                const r = document.body.clientWidth,
                    s = S.CheckMobile.iOS() || (0, S.supportTouch)() && (0, S.isMac)() ? window.innerHeight : document.body.clientHeight,
                    a = t.vertical,
                    l = t.extendMargin || a && i.w < 20 || !a && i.h < 20;
                e.classList.toggle(T["common-tooltip--farther"], l), e.classList.toggle(T["common-tooltip--vertical"], a), e.classList.toggle(T["common-tooltip--horizontal"], !a);
                const c = function(e) {
                        return e.querySelector("." + T["common-tooltip__ear-holder"])
                    }(e),
                    d = e.offsetHeight;
                if (a) {
                    const a = 10,
                        l = s - 10,
                        u = 12,
                        h = a + u,
                        p = l - u,
                        g = (0, b.clamp)(i.y + i.h / 2, h, p) - d / 2,
                        m = g + d;
                    e.style.left = k(i.x + i.w), e.style.top = k(g), g < a ? o.style.top = n.style.top = k(a - g) : m > l && (o.style.top = n.style.top = k(l - m));
                    const {
                        right: _
                    } = (e.querySelector(":last-child") || o).getBoundingClientRect(), f = _ + 10 > r;
                    e.classList.toggle(T["common-tooltip--direction_reversed"], f), e.classList.toggle(T["common-tooltip--direction_normal"], !f);
                    let v = f ? "after" : "before";
                    (0, w.isRtl)() ? (v = t.otr ? "after" : v, v = t.otl ? "before" : v) : (v = t.otr ? "before" : v, v = t.otl ? "after" : v), c.classList.toggle(T["common-tooltip__ear-holder--before"], "before" === v), c.classList.toggle(T["common-tooltip__ear-holder--after"], "after" === v), "after" === v && (e.style.left = "auto", e.style.right = k(r - i.x))
                } else {
                    const a = i.x - (o.offsetWidth - i.w) / 2,
                        l = r - 10 - e.offsetWidth,
                        u = Math.max(10, Math.min(a, l));
                    e.style.left = k(u);
                    const h = l < a;
                    e.classList.toggle(T["common-tooltip--direction_reversed"], h), e.classList.toggle(T["common-tooltip--direction_normal"], !h);
                    const p = function(e, t, i, o) {
                        if (e.above) return O(t, o) ? "above" : "below";
                        if (e.below) return function(e, t, i) {
                            return i.y + i.h + t + 10 < e
                        }(t, i, o) ? "below" : "above";
                        return O(i, o) ? "above" : "below"
                    }(t, s, d, i);
                    "above" === p ? e.style.bottom = k(s - i.y) : e.style.top = k(i.y + i.h), c.classList.add("above" === p ? T["common-tooltip__ear-holder--above"] : T["common-tooltip__ear-holder--below"]);
                    const {
                        left: g
                    } = o.getBoundingClientRect();
                    let m = Math.trunc(i.x + i.w / 2 - (g + o.clientWidth / 2));
                    e.style.left = k(u + m), e.style.width = k(o.clientWidth + n.clientWidth), m = h ? Math.max(0, m) : Math.min(0, m), n.style.left = k(-m), o.style.left = k(-m)
                }
            }

            function I(e) {
                e.classList.toggle(T["common-tooltip--hidden"], !0)
            }

            function k(e) {
                return Math.floor(e) + "px"
            }
            const L = `\n\t<div id="common-tooltip-wrapper" class="${T["common-tooltip"]}">\n\t\t<div class="${T["common-tooltip__ear-holder"]}" >\n\t\t\t<div class="${T["common-tooltip__body"]} js-tooltip-body"></div>\n\t\t</div>\n\t\t<div class="${T["common-tooltip__button-container"]}"></div>\n\t</div>\n`,
                P = `\n\t<div class="${T["common-tooltip__hotkey-block"]}"></div>\n`,
                x = `\n\t<div class="${T["common-tooltip__hotkey-text"]}"></div>\n`,
                D = (0, v.parseHtmlElement)(L),
                N = (0, v.parseHtmlElement)(P),
                M = (0, v.parseHtmlElement)(x);

            function B(e) {
                return e.querySelector("." + T["common-tooltip__body"])
            }

            function O(e, t) {
                return 10 + e < t.y
            }
            var R = i(626083);
            let F = !1,
                U = null,
                V = null;
            o.mobiletouch || document.addEventListener("mouseover", (function(e) {
                var t;
                if (null === (t = e.sourceCapabilities) || void 0 === t ? void 0 : t.firesTouchEvents) return;
                const i = e.target,
                    o = e.currentTarget,
                    n = function(e, t, i) {
                        const o = [];
                        for (; e && e !== t;) e.classList && e.classList.contains(i) && o.push(e), e = e.parentElement || (n = e.parentNode) && (n.nodeType === Node.ELEMENT_NODE ? n : null);
                        var n;
                        return o
                    }(i, o, "apply-common-tooltip");
                for (const t of n) {
                    if ("buttons" in e) {
                        if (1 & e.buttons) continue
                    } else if (1 === e.which) continue;
                    const i = () => W(t);
                    if (i()) {
                        const e = e => {
                                e.target instanceof Element && e.target.contains(t) && o(null, !0)
                            },
                            o = (n, r = !1) => {
                                t.removeEventListener("common-tooltip-update", i), t.removeEventListener("mouseleave", o), t.removeEventListener("mousedown", o), document.removeEventListener("scroll", e, {
                                    capture: !0
                                }), V && (V.destroy(), V = null), q(r)
                            };
                        t.addEventListener("common-tooltip-update", i), t.addEventListener("mouseleave", o), t.addEventListener("mousedown", o), document.addEventListener("scroll", e, {
                            capture: !0
                        }), null === V && (V = (0, R.createGroup)({
                            desc: "Tooltip"
                        }), V.add({
                            desc: "Hide",
                            hotkey: 27,
                            handler: o
                        }));
                        break
                    }
                }
            }), !0);
            const H = new MutationObserver(() => {
                    if (U && U.options.target) {
                        let e;
                        e = "isConnected" in U.options.target ? U.options.target.isConnected : document.body.contains(U.options.target), e || q()
                    }
                }),
                W = (e, t = {}) => {
                    const {
                        content: i,
                        ...o
                    } = G(t), n = E(e), r = Object.assign(n, o);
                    return "none" !== i.type && (r.content = i), !("none" === r.content.type && !r.hotkey) && (r.target = e, z(r), !0)
                },
                z = e => {
                    const t = G(e),
                        i = C(t);
                    var o;
                    if (U = {
                            options: t,
                            element: i
                        }, o = i, h(), d && d.appendChild(o), a(), !F) return I(i), void l(() => Y(i), function(e) {
                        return "number" != typeof e.tooltipDelay || isNaN(e.tooltipDelay) ? 500 : e.tooltipDelay
                    }(t));
                    const {
                        tooltipDebounce: n
                    } = e;
                    "number" != typeof n || isNaN(n) ? Y(i) : l(() => Y(i), n)
                };

            function X() {
                h(), F = !1, U = null
            }
            const q = e => {
                if (a(), H.disconnect(), !U) return;
                if (!e && !F) return;
                const {
                    element: t,
                    options: i
                } = U, o = () => {
                    t.removeEventListener("mouseleave", o), I(t), e ? X() : s = setTimeout(() => {
                        X()
                    }, 250)
                };
                var n, l;
                i.tooltipHideDelay ? (n = () => {
                    t.querySelector(":hover") ? t.addEventListener("mouseleave", o) : o()
                }, l = i.tooltipHideDelay, r = setTimeout(n, l)) : o()
            };

            function Y(e) {
                const {
                    options: t
                } = (0, p.ensureNotNull)(U);
                if (A(e, t), function(e) {
                        e.classList.toggle(T["common-tooltip--hidden"], !1)
                    }(e), H.observe(document, {
                        childList: !0,
                        subtree: !0
                    }), F = !0, t.forceHideOnMove) {
                    const e = () => {
                        document.removeEventListener("mousemove", e), q()
                    };
                    document.addEventListener("mousemove", e)
                }
            }

            function G(e) {
                if (function(e) {
                        return "content" in e
                    }(e)) return e;
                const {
                    inner: t,
                    html: i,
                    text: o,
                    ...n
                } = e;
                let r = {
                    type: "none"
                };
                return t && (r = {
                    type: "element",
                    data: t
                }), o && (r = {
                    type: i ? "html" : "text",
                    data: o
                }), {
                    content: r,
                    ...n
                }
            }
        },
        130060: (e, t, i) => {
            "use strict";
            i.d(t, {
                createErrorDialog: () => r,
                showErrorDialog: () => a
            });
            var o = i(120220),
                n = i(333399);
            async function r(e) {
                return (await Promise.all([i.e(70964), i.e(38817), i.e(91877), i.e(59456), i.e(25535), i.e(5058), i.e(11216), i.e(99752), i.e(64011), i.e(7562), i.e(34834)]).then(i.bind(i, 464161))).createDialog({ ...s(e),
                    type: "modal"
                })
            }

            function s(e) {
                const {
                    title: t,
                    content: i,
                    actions: r,
                    btnTitle: s,
                    btnType: a,
                    help: l
                } = e;
                return {
                    title: t || (0, o.t)("Error"),
                    help: l,
                    content: i,
                    addClass: n.errorDialog,
                    destroyOnClose: !0,
                    width: 500,
                    dataset: {
                        "dialog-type": "error-dialog"
                    },
                    actions: r || [{
                        key: [13, 32],
                        method: "close",
                        name: "ok",
                        text: s || (0, o.t)("OK"),
                        type: a || "primary"
                    }]
                }
            }

            function a(e) {
                r(e).then(e => e.open())
            }
        },
        704318: (e, t, i) => {
            "use strict";
            i.d(t, {
                useBackStackReset: () => r,
                useCloseOnLoginChange: () => s,
                useCloseOnHamburgerButtonBreakpoint: () => a
            });
            var o = i(667294),
                n = i(912869);

            function r(e, t) {
                (0, o.useEffect)(() => {
                    e || t()
                }, [e])
            }

            function s(e) {
                (0, o.useEffect)(() => (window.loginStateChange.subscribe(null, e), () => {
                    window.loginStateChange.unsubscribe(null, e)
                }), [e])
            }

            function a(e) {
                (0, o.useEffect)(() => {
                    const t = window.matchMedia(n["media-mf-laptop"]);
                    return t.addListener(e), () => {
                        t.removeListener(e)
                    }
                }, [e])
            }
        },
        663966: (e, t, i) => {
            "use strict";
            i.d(t, {
                getMainMenuCategories: () => s
            });
            var o = i(416282),
                n = i(604346);
            let r = null;

            function s() {
                return r || (r = (0, o.ensureDefined)((0, n.getFreshInitData)().mainMenuCategories)), r
            }
        },
        192084: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                LEFT_ARROW: () => o,
                UP_ARROW: () => n,
                RIGHT_ARROW: () => r,
                DOWN_ARROW: () => s,
                ENTER: () => a,
                ESC: () => l,
                SPACE: () => c,
                SLASH: () => d
            });
            const o = 37,
                n = 38,
                r = 39,
                s = 40,
                a = 13,
                l = 27,
                c = 32,
                d = 47
        },
        242127: (e, t, i) => {
            "use strict";
            var o = i(94970);

            function n(e, t = "x") {
                let i = !1;
                return "x" !== t && "both" !== t || (i = i || e.offsetWidth < e.scrollWidth), "y" !== t && "both" !== t || (i = i || e.offsetHeight < e.scrollHeight), i
            }(0, i(795498).whenDocumentReady)(() => {
                document.addEventListener("mouseenter", e => {
                    const t = e.target;
                    if (t instanceof HTMLElement && t.matches(".apply-overflow-tooltip")) {
                        let e = "x";
                        if (t.matches(".apply-overflow-tooltip--direction_both") ? e = "both" : t.matches(".apply-overflow-tooltip--direction_y") && (e = "y"), t.matches(".apply-overflow-tooltip--check-children")) {
                            let i = !1;
                            const o = t.children;
                            for (let t = 0; t < o.length; t++) {
                                const r = o[t];
                                if (r instanceof HTMLElement && n(r, e)) {
                                    i = !0;
                                    break
                                }
                            }
                            if (!i) return
                        } else if (!n(t, e)) return;
                        let i = "";
                        i = t.matches && t.matches(".apply-overflow-tooltip--allow-text") ? t.textContent || "" : Array.from(t.childNodes).reduce((e, t) => (t.nodeType === Node.TEXT_NODE && e.push(t.textContent || ""), e), []).join("").trim(), (0, o.showOnElement)(t, {
                            text: i
                        });
                        const r = () => {
                            (0, o.hide)(), ["mouseleave", "mousedown"].forEach(e => t.removeEventListener(e, r))
                        };
                        ["mouseleave", "mousedown"].forEach(e => t.addEventListener(e, r))
                    }
                }, !0)
            })
        },
        470178: (e, t, i) => {
            "use strict";
            i.d(t, {
                ContentPage: () => d
            });
            var o = i(765066),
                n = i.n(o),
                r = i(743137),
                s = i(967097),
                a = i(173384),
                l = i(801369),
                c = i(912869);
            class d {
                constructor(e) {
                    this._width = new(n()), this._window = e
                }
                allocate(e) {
                    const t = e && e.areaName;
                    if ("right" !== t) throw new Error("unknown options.areaName");
                    this.free(t), this._visibilityApi = new a.VisibilityApi(this._window.document);
                    const i = this._createDOM(t),
                        o = {
                            alive: new(n())(!0),
                            container: new(n())(i),
                            width: new(n()),
                            height: new(n()),
                            availWidth: new(n()),
                            availHeight: new(n()),
                            visible: this._visibilityApi.isVisible,
                            fullscreen: new(n()),
                            remove: () => {
                                o.alive.setValue(!1)
                            },
                            negotiations: {
                                width: []
                            },
                            negotiateWidth: e => {
                                const t = (0, s.processNegotiation)(e);
                                (0, s.negotiationsAreEqual)(o.negotiations.width, t) || (o.negotiations.width = t, this.recalculate())
                            },
                            requestFullscreen: () => {
                                this._fullscreenArea || (this._fullscreenArea = t,
                                    this._resizeHandler && this._resizeHandler(), this.recalculate())
                            },
                            exitFullscreen: () => {
                                this._fullscreenArea === t && (this._fullscreenArea = void 0, this.recalculate())
                            }
                        };
                    return o.alive.subscribe(e => {
                        e || o !== this._area || this.free("right")
                    }), this._area = o, this._resizeHandler = e => {
                        if (e) {
                            if ((e.detail && e.detail.emittedBy) === this) return
                        }
                        const t = this._window.document,
                            i = t.documentElement.clientWidth,
                            n = t.documentElement.clientHeight;
                        o.height.value() === n && this._width.value() === i || (o.height.setValue(n), this._width.setValue(i), this.recalculate())
                    }, this._resizeHandler(), this._window.addEventListener("resize", this._resizeHandler), this._window.document.body.insertAdjacentElement("afterbegin", i), new r.ResizerDetacherState(o).bridge()
                }
                free(e) {
                    if ("right" !== e) throw new Error("unknown areaName");
                    const t = this._area;
                    if (!t) return;
                    this._area = void 0;
                    const i = t.container.value();
                    i && i.parentElement && i.parentElement.removeChild(i), t.alive.setValue(!1), this._resizeHandler && (this._window.removeEventListener("resize", this._resizeHandler), this._resizeHandler = void 0), this._visibilityApi && (this._visibilityApi.destroy(), this._visibilityApi = void 0), this._setBodyPadding(0)
                }
                recalculate() {
                    const e = {};
                    this._recalcSingleRunToken = e;
                    const t = this._area;
                    if (!t) return;
                    let i;
                    if ("right" === this._fullscreenArea) t.availWidth.setValue(1 / 0), i = this._width.value();
                    else {
                        let o = 0;
                        if ((0, l.isWidgetBarFullscreen)() || window.TradingView.onChartPage || (o = 450), t.availWidth.setValue(o), e !== this._recalcSingleRunToken) return;
                        i = (0, s.determineSize)(o, t.negotiations.width)
                    }
                    t.width.setValue(i), t.fullscreen.setValue("right" === this._fullscreenArea), this._fullscreenArea || this._setBodyPadding((0, l.getWidgetBarPadding)(i));
                    const o = t.container.value();
                    o && (o.style.width = i + "px")
                }
                _createDOM(e) {
                    const t = document.createElement("div");
                    return t.classList.add("layout__area--" + e), t.style.position = "fixed", t.style.webkitTransform = "translateZ(0)", t.style.top = "0", t.style.height = "100%", t.style.right = "0", t.style.zIndex = String(c["z-index-sticky-search-bar"] + 1), t
                }
                _setBodyPadding(e) {
                    this._prevBodyPadding !== e && (this._prevBodyPadding = e, this._window.document.body.style.paddingRight = e + "px", this._window.dispatchEvent(new CustomEvent("resize", {
                        detail: {
                            emittedBy: this
                        }
                    })))
                }
            }
        },
        743137: (e, t, i) => {
            "use strict";
            i.d(t, {
                ResizerDetacherState: () => s
            });
            var o = i(416282),
                n = i(765066),
                r = i.n(n);
            class s {
                constructor(e) {
                    this._alive = new(r()), this._container = new(r()), this._width = new(r()), this._height = new(r()), this._fullscreen = new(r()), this._detachable = new(r()), this._fullscreenable = new(r()), this._visible = new(r()), this._availWidth = new(r()), this._availHeight = new(r()), this._owner = new(r()), this._ownersStack = [], this.owner = this._owner.readonly(), this._bridge = {
                        alive: this._alive.readonly(),
                        container: this._container.readonly(),
                        width: this._width.readonly(),
                        height: this._height.readonly(),
                        fullscreen: this._fullscreen.readonly(),
                        detachable: this._detachable.readonly(),
                        fullscreenable: this._fullscreenable.readonly(),
                        visible: this._visible.readonly(),
                        availWidth: this._availWidth.readonly(),
                        availHeight: this._availHeight.readonly(),
                        remove: () => {
                            const e = this._owner.value();
                            e && e.remove && e.remove()
                        },
                        negotiateWidth: e => {
                            const t = this._owner.value();
                            t && t.negotiateWidth && t.negotiateWidth(e)
                        },
                        negotiateHeight: e => {
                            const t = this._owner.value();
                            t && t.negotiateHeight && t.negotiateHeight(e)
                        },
                        requestFullscreen: () => {
                            const e = this._owner.value();
                            e && e.requestFullscreen && e.requestFullscreen()
                        },
                        exitFullscreen: () => {
                            const e = this._owner.value();
                            e && e.exitFullscreen && e.exitFullscreen()
                        },
                        detach: e => {
                            const t = this._owner.value();
                            t && t.detach && t.detach(e)
                        },
                        attach: () => {
                            const e = this._owner.value();
                            e && e.attach && e.attach()
                        }
                    }, e && this.pushOwner(e)
                }
                bridge() {
                    return this._bridge
                }
                pushOwner(e) {
                    if (!e.alive.value()) return;
                    for (const e of this._ownersStack) this._unsubscribeOwner(e);
                    const t = {
                        owner: e
                    };
                    this._ownersStack.push(t), this._subscribeOwner(t)
                }
                _subscribeOwner(e) {
                    const t = e.owner;
                    if (e.deathWatcher || (this._alive.setValue(!0), e.deathWatcher = t.alive.spawn(), e.deathWatcher.subscribe(t => {
                            t || this._deadHandler(e)
                        })), this._owner.setValue(t), !e.subscriptions) {
                        const i = e.subscriptions = [];
                        this._visible.setValue(!1);
                        const o = (e, t) => {
                            if (e) {
                                const o = e.spawn();
                                i.push(o), o.subscribe(e => {
                                    t.setValue(e)
                                }, {
                                    callWithLast: !0
                                })
                            } else t.deleteValue()
                        };
                        o(t.container, this._container), o(t.width, this._width), o(t.height, this._height), o(t.fullscreen, this._fullscreen), o(t.detachable, this._detachable), o(t.fullscreenable, this._fullscreenable), o(t.availWidth, this._availWidth), o(t.availHeight, this._availHeight), o(t.visible, this._visible)
                    }
                }
                _unsubscribeOwner(e, t) {
                    if (e.subscriptions) {
                        for (const t of e.subscriptions) t.unsubscribe();
                        e.subscriptions = null
                    }
                    t && e.deathWatcher && (e.deathWatcher.unsubscribe(), e.deathWatcher = null)
                }
                _deadHandler(e) {
                    const t = this._ownersStack.indexOf(e);
                    (0, o.assert)(-1 !== t, "sanitized owner should be in stack");
                    for (let e = this._ownersStack.length - 1; e >= t; e--) this._unsubscribeOwner(this._ownersStack[e], !0);
                    this._ownersStack.length = t, t > 0 ? this._subscribeOwner(this._ownersStack[t - 1]) : (this._alive.setValue(!1), this._owner.deleteValue())
                }
            }
        },
        967097: (e, t, i) => {
            "use strict";

            function o(e, t) {
                let i = 0;
                for (const {
                        min: o,
                        max: n
                    } of t) {
                    if (e < o || n < o) continue;
                    const t = Math.min(e, n);
                    if (i = Math.max(i, t), e === i) break
                }
                return i
            }

            function n(e) {
                const t = [];
                if (void 0 === e) return [];
                Array.isArray(e) || (e = [e]);
                for (const i of e) {
                    let e, o;
                    isFinite(i) ? e = o = Number(i) : (e = +i.min, o = +i.max), (e < 0 || isNaN(e)) && (e = 0), isNaN(o) && (o = 1 / 0), e <= o && o > 0 && t.push({
                        min: e,
                        max: o
                    })
                }
                return t.sort((e, t) => e.min - t.min || e.max - t.max), t
            }

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let i = e.length; i--;) {
                    if (e[i].min !== t[i].min) return !1;
                    if (e[i].max !== t[i].max) return !1
                }
                return !0
            }
            i.d(t, {
                determineSize: () => o,
                processNegotiation: () => n,
                negotiationsAreEqual: () => r
            })
        },
        602153: (e, t, i) => {
            "use strict";
            i.d(t, {
                Root: () => u
            });
            i(120220);
            var o = i(765066),
                n = i.n(o),
                r = i(743137);
            class s {
                constructor(e) {
                    this._document = e, this.isFullscreen = new(n());
                    const t = () => {
                        const e = ["fullscreenElement", "webkitFullscreenElement", "mozFullscreenElement", "mozFullScreenElement", "msFullscreenElement"];
                        for (let t = 0; t < e.length; t++) {
                            const i = e[t];
                            if (i in this._document) {
                                this.isFullscreen.setValue(!!this._document[i]);
                                break
                            }
                        }
                    };
                    t();
                    for (const i of ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"]) e.addEventListener(i, t, !1)
                }
                enter() {
                    const e = this._document.documentElement;
                    for (const t of ["requestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen", "msRequestFullscreen"])
                        if ("function" == typeof e[t]) {
                            e[t]();
                            break
                        }
                    this.isFullscreen.setValue(!0)
                }
                exit() {
                    const e = this._document;
                    for (const t of ["exitFullscreen", "mozCancelFullScreen", "mozExitFullscreen", "webkitExitFullscreen", "msExitFullscreen"])
                        if ("function" == typeof e[t]) {
                            e[t]();
                            break
                        }
                    this.isFullscreen.setValue(!1)
                }
            }
            var a = i(173384),
                l = i(640142),
                c = i(416282),
                d = i(968724);
            class u {
                constructor(e) {
                    this._updateDocumentHeight = e => {
                        "visual" === this._viewportType && this._window.document.documentElement.style.setProperty("height", e + "px", "important")
                    }, this._window = e, this._fullscreenApi = new s(e.document), this._viewportType = d.CheckMobile.iOS() && !(0, l.isOnMobileAppPage)("any") && this._window.visualViewport ? "visual" : "quirks", "visual" === this._viewportType ? this._viewport = (0, c.ensureDefined)(this._window.visualViewport) : this._viewport = this._window;
                    const t = this._layoutSizeSensor = this._window.document.createElement("div");
                    t.id = "layout-size-sensor", t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.right = "0", t.style.bottom = "0", t.style.pointerEvents = "none", t.style.visibility = "hidden", this._initFullscreen()
                }
                allocate() {
                    this.free();
                    const e = this._window.document,
                        t = e.createElement("div");
                    t.classList.add("js-rootresizer__contents"), t.style.position = "relative", t.style.width = "100%", t.style.height = "100%", e.body.insertAdjacentElement("afterbegin", t), e.body.insertAdjacentElement("afterbegin", this._layoutSizeSensor), this._visibilityApi = new a.VisibilityApi(this._window.document);
                    const i = {
                        alive: new(n())(!0),
                        fullscreenable: new(n())(!0),
                        container: new(n())(t),
                        width: new(n()),
                        height: new(n()),
                        availWidth: new(n()),
                        availHeight: new(n()),
                        visible: this._visibilityApi.isVisible,
                        fullscreen: this._fullscreenApi.isFullscreen,
                        remove: () => {
                            i.alive.setValue(!1)
                        },
                        attach: () => {
                            i.alive.setValue(!1), this._window.close()
                        },
                        requestFullscreen: () => {
                            this._requestFullscreen()
                        },
                        exitFullscreen: () => {
                            this._exitFullscreen()
                        }
                    };
                    return i.alive.subscribe(e => {
                        e || i !== this._area || this.free()
                    }), this._area = i, this._resizeHandler = () => {
                        const e = this._width(i) || 800,
                            t = this._height(i) || 600;
                        i.availHeight.setValue(t), i.availWidth.setValue(e), i.height.setValue(t), i.width.setValue(e)
                    }, this._area.height.subscribe(this._updateDocumentHeight, {
                        callWithLast: !0
                    }), this._resizeHandler(), this._viewport.addEventListener("resize", this._resizeHandler), new r.ResizerDetacherState(i).bridge()
                }
                free() {
                    if (this._resizeHandler && (this._viewport.removeEventListener("resize", this._resizeHandler), this._resizeHandler = void 0), this._visibilityApi && (this._visibilityApi.destroy(), this._visibilityApi = void 0), this._area) {
                        const e = this._area;
                        this._area = void 0, e.height.unsubscribe(this._updateDocumentHeight), e.alive.setValue(!1);
                        const t = e.container.value(),
                            i = null == t ? void 0 : t.parentElement;
                        i && (i.removeChild(t), i.removeChild(this._layoutSizeSensor))
                    }
                }
                _height(e) {
                    if ("visual" === this._viewportType) return this._layoutSizeSensor.clientHeight;
                    return e.container.value().clientHeight
                }
                _width(e) {
                    return e.container.value().clientWidth
                }
                _requestFullscreen() {
                    this._fullscreenApi.enter()
                }
                _exitFullscreen() {
                    this._fullscreenApi.exit()
                }
                _initFullscreen() {
                    this._fullscreenApi.isFullscreen.subscribe(e => {
                        this._resizeHandler && this._resizeHandler()
                    })
                }
            }
        },
        173384: (e, t, i) => {
            "use strict";
            i.d(t, {
                VisibilityApi: () => r
            });
            var o = i(765066),
                n = i.n(o);
            class r {
                constructor(e) {
                    let t;
                    this.isVisible = new(n())(!0);
                    let i = null;
                    for (const o of ["", "moz", "ms", "webkit"]) {
                        const n = o ? o + "Hidden" : "hidden";
                        if (n in e) {
                            t = o + "visibilitychange", i = () => {
                                this.isVisible.setValue(!e[n])
                            }, i(), e.addEventListener(t, i, !1);
                            break
                        }
                    }
                    this.destroy = () => {
                        i && (e.removeEventListener(t, i, !1), i = null)
                    }
                }
            }
        },
        366278: (e, t, i) => {
            "use strict";
            var o, n, r;
            i.d(t, {
                    Size: () => o,
                    StarFill: () => n,
                    StarColor: () => r
                }),
                function(e) {
                    e.Small = "small", e.Medium = "medium", e.Large = "large"
                }(o || (o = {})),
                function(e) {
                    e.Full = "full", e.Half = "half", e.Empty = "empty", e.Hidden = "hidden"
                }(n || (n = {})),
                function(e) {
                    e.Blue = "blue", e.White = "white"
                }(r || (r = {}))
        },
        101384: (e, t, i) => {
            "use strict";
            i.d(t, {
                Star: () => c,
                isEmptyFillStar: () => m,
                getGradientId: () => _
            });
            var o = i(667294),
                n = i(294184),
                r = i.n(n),
                s = i(416282),
                a = i(75443),
                l = i(366278);

            function c(e) {
                const {
                    starFill: t,
                    size: i,
                    color: n = l.StarColor.Blue,
                    disabled: s,
                    id: a,
                    onClick: c
                } = e, p = !s && function(e) {
                    return e === l.StarFill.Full
                }(t), g = !s && function(e) {
                    return e === l.StarFill.Half
                }(t), m = function(e) {
                    return e === l.StarFill.Hidden
                }(t), _ = g ? a : void 0;
                return o.createElement("span", {
                    className: r()("tv-stars-rating-block__item", "tv-stars-rating-block__item--color-" + n, p && "tv-stars-rating-block__item--fill", m && "tv-stars-rating-block__item--hidden", "tv-stars-rating-block__item--" + i, s && "tv-stars-rating-block__item--disabled"),
                    onClick: c
                }, i === l.Size.Large ? o.createElement(h, {
                    gradientId: _
                }) : i === l.Size.Small ? o.createElement(d, {
                    gradientId: _
                }) : o.createElement(u, {
                    gradientId: _
                }))
            }

            function d(e) {
                const t = e.gradientId ? g(e.gradientId) : void 0;
                return o.createElement("svg", {
                    width: "16",
                    height: "15",
                    viewBox: "0 0 16 15",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: t
                }, t && o.createElement(p, {
                    gradientId: (0, s.ensureDefined)(e.gradientId)
                }), o.createElement("path", {
                    d: "M8 1.12l2.03 4.04.11.24.26.03 4.51.65-3.26 3.13-.19.19.05.26.77 4.43L8.23 12 8 11.87l-.23.12-4.05 2.1.77-4.43.05-.26-.2-.19L1.1 6.08l4.5-.65.27-.03.11-.24L8 1.12z"
                }))
            }

            function u(e) {
                const t = e.gradientId ? g(e.gradientId) : void 0;
                return o.createElement("svg", {
                    width: "19",
                    height: "17",
                    viewBox: "0 0 19 17",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: t
                }, t && o.createElement(p, {
                    gradientId: (0, s.ensureDefined)(e.gradientId)
                }), o.createElement("path", {
                    d: "M9.7.1113l2.7742 5.4864 6.2035.8797-4.4889 4.2705 1.0597 6.0301-5.5486-2.847-5.5485 2.847 1.0597-6.0301L.722 6.4774l6.2036-.8797L9.6999.1113z"
                }))
            }

            function h(e) {
                const t = e.gradientId ? g(e.gradientId) : void 0;
                return o.createElement("svg", {
                    width: "30",
                    height: "28",
                    viewBox: "0 0 30 28",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: t
                }, t && o.createElement(p, {
                    gradientId: (0, s.ensureDefined)(e.gradientId)
                }), o.createElement("path", {
                    d: "M15.01 1l3.86 7.64c.3.59.87.99 1.51 1.08L29 10.94l-6.2 5.9a2 2 0 00-.6 1.8L23.68 27a.04.04 0 01-.01.01h-.01l-7.73-3.97a2 2 0 00-1.84 0L6.35 27h-.02l1.47-8.36a2 2 0 00-.59-1.8l-6.2-5.9 8.6-1.22c.65-.1 1.22-.5 1.52-1.08L14.99 1a.04.04 0 01.02 0z",
                    strokeWidth: 2
                }))
            }

            function p(e) {
                return o.createElement("defs", null, o.createElement("linearGradient", {
                    id: e.gradientId
                }, o.createElement("stop", {
                    offset: "50%",
                    className: "stop-color-left"
                }), o.createElement("stop", {
                    offset: "50%",
                    className: "stop-color-right"
                })))
            }

            function g(e) {
                return {
                    fill: `url('#${e}')`
                }
            }

            function m(e) {
                return e === l.StarFill.Empty
            }

            function _(e, t) {
                return e && t ? `tv-star-rating-linear-gradient-50-${e}-${t}` : "tv-star-rating-linear-gradient-50-" + (0, a.randomHashN)(4)
            }
        },
        288679: (e, t, i) => {
            "use strict";
            i.d(t, {
                StarsRating: () => c
            });
            var o = i(667294),
                n = i(294184),
                r = i.n(n),
                s = i(366278),
                a = i(101384),
                l = i(637914);
            i(255758);

            function c(e) {
                const {
                    rating: t,
                    size: i,
                    id: n,
                    isInteractive: c,
                    disabled: d,
                    hideEmptyStars: u,
                    className: h,
                    color: p,
                    onClick: g
                } = e, m = [], _ = (0, l.castToRating)(t);
                for (let e = 5; e > 0; e--) {
                    let t = e <= _ ? s.StarFill.Full : s.StarFill.Empty;
                    const r = (0, a.getGradientId)(n, e);
                    let h;
                    if ((0, a.isEmptyFillStar)(t) && (t = Math.abs(e - _) <= .5 ? s.StarFill.Half : s.StarFill.Empty, u && (0, a.isEmptyFillStar)(t) && (t = s.StarFill.Hidden)), !d && c && g) {
                        const t = (0, l.castToRating)(e);
                        h = () => g(t)
                    }
                    m.push(o.createElement(a.Star, {
                        key: e,
                        id: r,
                        onClick: h,
                        starFill: t,
                        size: i,
                        color: p,
                        disabled: d
                    }))
                }
                return o.createElement("span", {
                    className: r()(h, "tv-stars-rating-block", c && "tv-stars-rating-block--interactive")
                }, m)
            }
        },
        984676: (e, t, i) => {
            "use strict";
            i.d(t, {
                openStreamMiniPlayer: () => n
            });
            var o = i(876727);

            function n(e) {
                Promise.all([i.e(99459), i.e(23876), i.e(26822), i.e(69756), i.e(88278), i.e(789), i.e(55429), i.e(43424), i.e(45873), i.e(38117), i.e(51701)]).then(i.bind(i, 116939)).then(t => {
                    const i = o.MiniPlayerSessionStorage.getItem(),
                        n = i ? JSON.parse(i) : null,
                        r = n ? n.time : e.currentTime ? e.currentTime : void 0,
                        s = n ? n.speed : e.currentSpeed ? e.currentSpeed : void 0,
                        a = n ? n.currentVolume : e.currentVolume ? e.currentVolume : void 0;
                    t.renderStreamMiniPlayer({
                        stream: e.stream,
                        currentTime: r,
                        currentSpeed: s,
                        currentVolume: a,
                        isTheaterMode: e.isTheaterMode,
                        setMiniModeOnPageStream: e.setMiniModeOnPageStream
                    })
                })
            }
        },
        876727: (e, t, i) => {
            "use strict";
            i.d(t, {
                MiniPlayerSessionStorage: () => o
            });
            var o;
            ! function(e) {
                e.getItem = function() {
                    return window.sessionStorage.getItem("stream-mini-player")
                }, e.setItem = function(e, t, i, o) {
                    const n = {
                        time: t,
                        data: e,
                        url: null == e ? void 0 : e.url,
                        speed: i,
                        currentVolume: o
                    };
                    window.sessionStorage.setItem("stream-mini-player", JSON.stringify(n))
                }, e.removeItem = function() {
                    window.sessionStorage.removeItem("stream-mini-player")
                }
            }(o || (o = {}))
        },
        478264: (e, t, i) => {
            "use strict";
            i.d(t, {
                followSymbol: () => n
            });
            var o = i(264553);

            function n(e) {
                return (0, o.handleJSONRequest)({
                    path: "/social/follow-the-symbol/",
                    requestData: {
                        body: e,
                        method: "POST"
                    }
                })
            }
        },
        907989: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                cookieBannerDelegate: () => s,
                initCookiesNotification: () => l
            });
            var o = i(655119),
                n = i(640142),
                r = (i(265194), i(457137));
            const s = (0, r.createDeferredPromise)();
            async function a() {
                const e = await Promise.all([i.e(99459), i.e(49531), i.e(35507), i.e(64466), i.e(46078), i.e(14563), i.e(28139), i.e(38869)]).then(i.bind(i, 660855)),
                    t = await e.showCookiesNotification();
                return o.TVLocalStorage.setItem("cookieBanner", "accepted"), t
            }
            async function l() {
                const e = document.querySelector(".js-main-page-promo-container");
                return !("accepted" !== o.TVLocalStorage.getItem("cookieBanner") && !(0, n.isOnMobileAppPage)("any")) || (e || s.resolve(), s.promise.then(() => a()))
            }
        },
        733735: (e, t, i) => {
            "use strict";
            i.d(t, {
                AbstractIndicator: () => a
            });
            var o = i(987380),
                n = i(75443),
                r = i(106798);
            i(94970);
            const s = (0, o.getLogger)("GUI.Blocks.AbstractIndicator");
            class a {
                constructor(e) {
                    this._classSuffix = "", this._quoteSessionPrefix = "abstract-indicator", this._shortMode = !1, this._showTooltip = !0, this._subscribed = !1, this._tooltipType = "custom", this._lastTooltipText = "", this._quoteSession = e.quoteSession
                }
                getValue() {
                    return this._value
                }
                getTooltipText() {
                    return this._labelMap[this._value] || ""
                }
                getLabel() {
                    return this._labelMap[this._value] || ""
                }
                getElement() {
                    return this._el
                }
                update(e, t) {
                    this._updateValue(e, t), this._render()
                }
                setTooltipEnabled(e = !1) {
                    this._showTooltip !== e && (this._showTooltip = e, this._renderTooltip())
                }
                enableShortMode() {
                    !0 !== this._shortMode && (this._shortMode = !0, this._render())
                }
                disableShortMode() {
                    !1 !== this._shortMode && (this._shortMode = !1, this._render())
                }
                isShortModeEnabled() {
                    return this._shortMode
                }
                start() {
                    !this._subscribed && this._symbolName && (this._quoteSession || (this._quoteSession = (0, r.getQuoteSessionInstance)("simple")), this._quoteSession.subscribe(this._getQuoteSessionId(), this._symbolName, this.update.bind(this)), this._subscribed = !0)
                }
                stop() {
                    this._subscribed && this._quoteSession && this._symbolName && (this._quoteSession.unsubscribe(this._getQuoteSessionId(), this._symbolName), this._subscribed = !1)
                }
                _init(e) {
                    this._el = e.el ? e.el : document.createElement("span"), this._el.innerHTML = "", this._classMap = e.classMap, this._labelMap = e.labelMap, this._showTooltip = e.showTooltip, this._classSuffix = e.classSuffix, this._symbolName = e.symbol, e.tooltipType && (this._tooltipType = e.tooltipType), this._quoteSessionGUID = (0, n.guid)(), !0 === e.short && this.enableShortMode(), e.data && this._updateValue(e.data)
                }
                _clearClasses() {
                    Object.values(this._classMap).map(e => {
                        this._el.classList.remove("" + e), this._el.classList.remove(`${e}${this._classSuffix}`)
                    })
                }
                _render() {
                    this._renderClasses(), this._renderTooltip(), this._renderLabel()
                }
                _renderLabel() {
                    this._el.textContent = this.getLabel()
                }
                _updateValue(e, t) {
                    const i = this._getValueFromData(e);
                    (t || i !== this._value) && (this._value = i)
                }
                _renderClasses() {
                    const e = this._el.classList;
                    e.add(this._componentClass, this._componentClass + this._classSuffix);
                    const t = this._classMap[this._value];
                    for (const i in this._classMap) {
                        const o = this._classMap[i];
                        o && (o === t ? e.add(o, o + this._classSuffix) : e.remove(o, o + this._classSuffix))
                    }!t && this._value && s.logWarn("no className for status " + this._value)
                }
                _renderTooltip() {
                    const e = this._showTooltip ? this.getTooltipText() : "";
                    e !== this._lastTooltipText && (this._lastTooltipText = e, this._el.setAttribute("title", e),
                        "custom" === this._tooltipType && this._el.classList.toggle("apply-common-tooltip", this._showTooltip))
                }
                _getQuoteSessionId() {
                    return `${this._quoteSessionPrefix}.${this._quoteSessionGUID}`
                }
            }
        },
        115701: (e, t, i) => {
            "use strict";
            i.d(t, {
                DataModeIndicator: () => c
            });
            var o = i(120220),
                n = (i(568421), i(752467), i(733735));
            const r = {
                    connecting: (0, o.t)("Connecting"),
                    delayed: (0, o.t)("Delayed"),
                    delayed_streaming: (0, o.t)("Delayed"),
                    endofday: (0, o.t)("End of Day"),
                    forbidden: (0, o.t)("Instrument is not allowed"),
                    realtime: (0, o.t)("Real-time"),
                    snapshot: (0, o.t)("Snapshot"),
                    loading: "",
                    replay: (0, o.t)("Replay Mode")
                },
                s = {
                    connecting: (0, o.t)("C", {
                        context: "data_mode_connecting_letter"
                    }),
                    delayed: (0, o.t)("D", {
                        context: "data_mode_delayed_letter"
                    }),
                    delayed_streaming: (0, o.t)("D", {
                        context: "data_mode_delayed_streaming_letter"
                    }),
                    endofday: (0, o.t)("E", {
                        context: "data_mode_end_of_day_letter"
                    }),
                    forbidden: (0, o.t)("F", {
                        context: "data_mode_forbidden_letter"
                    }),
                    realtime: (0, o.t)("R", {
                        context: "data_mode_realtime_letter"
                    }),
                    snapshot: (0, o.t)("S", {
                        context: "data_mode_snapshot_letter"
                    }),
                    loading: "",
                    replay: (0, o.t)("R", {
                        context: "data_mode_replay_letter"
                    })
                },
                a = {
                    streaming: "realtime"
                },
                l = {
                    classMap: {
                        connecting: "tv-data-mode--connecting",
                        delayed: "tv-data-mode--delayed",
                        delayed_streaming: "tv-data-mode--delayed",
                        endofday: "tv-data-mode--endofday",
                        forbidden: "tv-data-mode--forbidden",
                        realtime: "tv-data-mode--realtime",
                        snapshot: "tv-data-mode--snapshot",
                        loading: "tv-data-mode--loading",
                        replay: "tv-data-mode--replay"
                    },
                    classSuffix: "",
                    data: {
                        values: {
                            update_mode: "connecting"
                        }
                    },
                    labelMap: r,
                    modeInterval: 600,
                    short: !1,
                    shortLabelMap: s,
                    showTooltip: !0,
                    tooltipType: "custom"
                };
            class c extends n.AbstractIndicator {
                constructor(e) {
                    super(e), this._quoteSessionPrefix = "data-mode-indicator", this._componentClass = "tv-data-mode", this._init(e)
                }
                getLabel() {
                    return !0 === this._shortMode ? this._shortLabelMap[this._value] || "" : super.getLabel()
                }
                setMode(e, t) {
                    this.update({
                        values: {
                            update_mode: e,
                            update_mode_seconds: t
                        }
                    })
                }
                hide() {
                    this._el.classList.add("i-hidden")
                }
                show() {
                    this._el.classList.remove("i-hidden")
                }
                getTooltipText() {
                    let e = "";
                    const t = this.getValue();
                    if ("" === t) return e;
                    switch (t) {
                        case "delayed":
                            e = (0, o.t)("Quotes are delayed by {number} min and updated every 30 seconds");
                            break;
                        case "delayed_streaming":
                            e = (0, o.t)("Quotes are delayed by {number} min");
                            break;
                        default:
                            e = this._labelMap[t] || e
                    }
                    return ["delayed", "delayed_streaming"].includes(t) && (e = e.format({
                        number: String(Math.round(this._modeInterval / 60))
                    })), e
                }
                _init(e = {}) {
                    const t = Object.assign({}, l, e);
                    this._modeInterval = t.modeInterval || 600, this._shortLabelMap = t.shortLabelMap || s, super._init(t), this._render()
                }
                _getValueFromData(e) {
                    let t;
                    return t = void 0 !== e.values && void 0 !== e.values.update_mode ? e.values.update_mode : this.getValue(), a[t] || t
                }
                _updateValue(e, t) {
                    void 0 !== e.values && void 0 !== e.values.update_mode_seconds && (this._modeInterval = e.values.update_mode_seconds), super._updateValue(e, t)
                }
            }
        },
        620446: (e, t, i) => {
            "use strict";
            i.d(t, {
                MarketStatusIndicator: () => s
            });
            var o = i(120220),
                n = (i(193088), i(733735));
            const r = {
                classMap: {
                    invalid: "tv-market-status--invalid",
                    market: "tv-market-status--market",
                    out_of_session: "tv-market-status--out-of-session",
                    post_market: "tv-market-status--post-market",
                    pre_market: "tv-market-status--pre-market",
                    loading: "tv-market-status--loading",
                    holiday: "tv-market-status--holiday",
                    replay: "tv-market-status--replay"
                },
                classSuffix: "",
                data: {},
                extraTitle: "",
                labelMap: {
                    invalid: (0, o.t)("Invalid Symbol"),
                    market: (0, o.t)("Market Open"),
                    out_of_session: (0, o.t)("Market Closed"),
                    post_market: (0, o.t)("Post Market"),
                    pre_market: (0, o.t)("Pre Market"),
                    loading: (0, o.t)("Loading"),
                    holiday: (0, o.t)("Holiday"),
                    replay: ""
                },
                short: !1,
                showTooltip: !0,
                tooltipType: "custom"
            };
            class s extends n.AbstractIndicator {
                constructor(e) {
                    super(e), this._quoteSessionPrefix = "market-status-indicator", this._componentClass = "tv-market-status", this._extraTitle = "", this._init(e)
                }
                setStatus(e, t) {
                    const i = {
                        values: {
                            current_session: e
                        }
                    };
                    this.update(i, t)
                }
                getTooltipText() {
                    let e = super.getTooltipText();
                    return "" === e || "" !== this._extraTitle && (e = `${e}, ${this._extraTitle}`), e
                }
                setExtraTitle(e) {
                    this._extraTitle = e
                }
                reset() {
                    this._clearClasses(), this._labelEl.textContent = "", this._extraTitle = "", this._el.setAttribute("title", ""), this._value = ""
                }
                enableShortMode(e = !0) {
                    void 0 !== this._labelEl && this._labelEl.classList.add("i-hidden"), super.enableShortMode()
                }
                disableShortMode() {
                    void 0 !== this._labelEl && this._labelEl.classList.remove("i-hidden"), super.disableShortMode()
                }
                _renderLabel() {
                    this._labelEl.textContent = this.getLabel()
                }
                _getValueFromData(e) {
                    return void 0 !== e.values && void 0 !== e.values.current_session ? e.values.current_session : this.getValue()
                }
                _render() {
                    this._renderLabelElement(), this._renderDotElement(), super._render()
                }
                _init(e) {
                    const t = Object.assign({}, r, e);
                    super._init(t), this.setExtraTitle(t.extraTitle), this._render()
                }
                _renderLabelElement() {
                    void 0 === this._labelEl && (this._labelEl = document.createElement("span"), this._labelEl.classList.add(this._componentClass + "__label"), this._labelEl.classList.add(`${this._componentClass}__label${this._classSuffix}`), this._el.appendChild(this._labelEl))
                }
                _renderDotElement() {
                    void 0 === this._dotEl && (this._dotEl = document.createElement("span"), this._dotEl.classList.add(this._componentClass + "__dot"), this._dotEl.classList.add(`${this._componentClass}__dot${this._classSuffix}`), this._el.appendChild(this._dotEl))
                }
            }
        },
        97172: (e, t, i) => {
            "use strict";
            async function o(e) {
                Promise.all([i.e(41242), i.e(35183), i.e(93090)]).then(i.bind(i, 635183)).then(e => new e.ScreenerAlertsDispatcher);
                const [{
                    widgetBarWidgets: t
                }, {
                    configure: o
                }] = await Promise.all([Promise.all([i.e(70964), i.e(38817), i.e(53684), i.e(40114), i.e(29890), i.e(92309), i.e(3762), i.e(91877), i.e(59456), i.e(25535), i.e(5058), i.e(78708), i.e(89109), i.e(59678), i.e(54551), i.e(13738), i.e(42732), i.e(53466), i.e(37653), i.e(38325), i.e(96753), i.e(6585), i.e(500), i.e(45078), i.e(15294), i.e(42961), i.e(91787), i.e(7416), i.e(62602), i.e(68669), i.e(36158), i.e(11216), i.e(14563), i.e(64011), i.e(7562), i.e(9622), i.e(73715), i.e(41242), i.e(26945), i.e(92765), i.e(52107), i.e(28788), i.e(50323), i.e(77929), i.e(3823), i.e(37621), i.e(85857), i.e(96663), i.e(54876)]).then(i.bind(i, 547702)), Promise.all([i.e(70964), i.e(38817), i.e(53684), i.e(40114), i.e(29890), i.e(92309), i.e(3762), i.e(91877), i.e(59456), i.e(25535), i.e(5058), i.e(78708), i.e(89109), i.e(59678), i.e(54551), i.e(13738), i.e(42732), i.e(53466), i.e(37653), i.e(38325), i.e(96753), i.e(6585), i.e(500), i.e(45078), i.e(15294), i.e(42961), i.e(91787), i.e(7416), i.e(62602), i.e(68669), i.e(36158), i.e(11216), i.e(14563), i.e(64011), i.e(7562), i.e(9622), i.e(73715), i.e(41242), i.e(26945), i.e(92765), i.e(52107), i.e(28788), i.e(50323), i.e(77929), i.e(3823), i.e(37621), i.e(85857), i.e(96663), i.e(54876)]).then(i.bind(i, 646271))]);
                return t.Watchlist = o(e), t
            }
            i.d(t, {
                configuration: () => o
            })
        },
        677255: (e, t, i) => {
            "use strict";

            function o() {
                return {
                    version: 2,
                    width: 267,
                    pages: []
                }
            }
            i.d(t, {
                getDefaultState: () => o
            })
        },
        801369: (e, t, i) => {
            "use strict";

            function o(e) {
                return n() ? 0 : r() ? 46 : Math.min(Math.max(e, 46), 450)
            }
            i.d(t, {
                getWidgetBarPadding: () => o,
                isWidgetBarFullscreen: () => n
            });
            const n = () => !window.matchMedia("screen and (min-width: 768px)").matches,
                r = () => !window.matchMedia("screen and (min-width: 1280px)").matches
        },
        563757: (e, t, i) => {
            "use strict";
            var o;
            i.d(t, {
                WIDGET_BAR_MESSAGE_BUS: () => n
            });
            const n = new((o = class e {
                postMessage(t, i) {
                    e._handlers.forEach(e => {
                        e.handler(t, i)
                    })
                }
                onMessage(t) {
                    "function" == typeof t && e._handlers.push({
                        handler: t,
                        widget: this
                    })
                }
                offMessage(t) {
                    if ("function" == typeof t) {
                        const i = e._handlers.findIndex(e => e.handler === t); - 1 !== i && e._handlers.splice(i, 1)
                    }
                }
                offWidget(t) {
                    e._handlers = e._handlers.filter(e => e.widget !== t)
                }
            })._handlers = [], o)
        },
        865904: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                WidgetBar: () => Qe
            });
            var o = i(76539),
                n = (i(918184), i(416282)),
                r = (i(551922), i(405737), i(648497), i(120220)),
                s = i(568198),
                a = i(667294),
                l = i(973935),
                c = i(765066),
                d = i.n(c);
            const u = {
                isActive: !1,
                notificationCount: 0
            };
            class h {
                constructor(e) {
                    const t = { ...u,
                        ...e
                    };
                    this.isActive = new(d())(t.isActive), this.notificationsCount = new(d())(t.notificationCount), this.icon = new(d())(t.icon), this.hint = new(d())(t.hint), this.onClick = new(d())(t.onClick), this.TabButtonComponent = e.TabButtonComponent
                }
                onActiveStateChange(e) {
                    this.isActive.setValue(e)
                }
                updateNotifications(e) {
                    this.notificationsCount.setValue(e)
                }
            }
            var p = i(580525),
                g = i(154181),
                m = i(69612),
                _ = i(882351),
                f = i(991090),
                v = i(269092),
                w = i(413425),
                y = i(586544),
                b = i(570376),
                S = i(248060),
                T = i(743882),
                E = i(680585),
                C = i(786450),
                A = i(811656),
                I = i(969581),
                k = i(223523);
            const L = parseInt(k["css-value-widgets-margin"]),
                P = {
                    title: (0, r.t)("Details"),
                    ctor: null,
                    lazyLoad: !0,
                    chartWidgetAllowed: !0,
                    widgetClass: k.widget,
                    headerClass: k.widgetHeader,
                    margin: L
                },
                x = Object.assign({}, P, {
                    emptyHeader: !0
                }),
                D = {
                    reuters_calendar: {
                        title: (0, r.t)("Economic Calendar"),
                        ctor: null,
                        lazyLoad: !0,
                        icon: "economic-calendar",
                        options: {
                            widgetType: "widgetbar"
                        }
                    },
                    earnings_calendar: {
                        title: (0, r.t)("Earnings Calendar"),
                        ctor: null,
                        lazyLoad: !0,
                        icon: "earnings-calendar"
                    },
                    watchlist: {
                        title: (0, r.t)("Watchlist"),
                        ctor: null,
                        lazyLoad: !0,
                        chartWidgetAllowed: !0,
                        emptyHeader: !0,
                        widgetClass: k.widget,
                        headerClass: k.widgetHeader,
                        margin: L,
                        preloadDelay: 6e4
                    },
                    hotlist: {
                        title: (0, r.t)("Hotlist"),
                        ctor: null,
                        lazyLoad: !0,
                        chartWidgetAllowed: !0,
                        emptyHeader: !0,
                        widgetClass: k.widget,
                        headerClass: k.widgetHeader,
                        margin: L
                    },
                    detail: x,
                    news: {
                        title: (0, r.t)("Headlines"),
                        ctor: null,
                        noHeaderSpace: !0,
                        widgetClass: k.widget,
                        headerClass: k.widgetHeader,
                        titleClass: k.widgetTitle,
                        margin: L
                    },
                    chat: {
                        title: (0, r.t)("Talks"),
                        ctor: null,
                        chartWidgetAllowed: !0,
                        doNotClearNotifications: !0
                    },
                    messages: {
                        title: (0, r.t)("Recent Chats"),
                        ctor: null,
                        chartWidgetAllowed: !0,
                        doNotClearNotifications: !0
                    },
                    messages_with_select: {
                        title: (0, r.t)("Recent Chats"),
                        ctor: null,
                        chartWidgetAllowed: !0,
                        doNotClearNotifications: !0,
                        options: {
                            layoutWithSelect: !0
                        },
                        emptyHeader: !0
                    },
                    notifications_user: {
                        title: (0, r.t)("Notifications"),
                        ctor: null,
                        options: {
                            type: "user"
                        },
                        chartWidgetAllowed: !0
                    },
                    notifications_following: {
                        title: (0, r.t)("Ideas Stream"),
                        ctor: null,
                        options: {
                            type: "following"
                        },
                        chartWidgetAllowed: !0
                    },
                    datawindow: {
                        title: (0, r.t)("Data Window"),
                        ctor: null,
                        chartWidgetAllowed: !0,
                        chartWidgetRequired: !0
                    },
                    publicchats: {
                        title: (0, r.t)("All Talks"),
                        ctor: null,
                        doNotClearNotifications: !0
                    },
                    publicchats_with_select: {
                        title: (0, r.t)("All Talks"),
                        ctor: null,
                        doNotClearNotifications: !0,
                        options: {
                            layoutWithSelect: !0
                        },
                        emptyHeader: !0
                    },
                    notes: {
                        title: (0, r.t)("My Ideas"),
                        ctor: null,
                        lazyLoad: !0,
                        chartWidgetAllowed: !0
                    },
                    alerts_manage: {
                        ctor: null,
                        lazyLoad: !0,
                        chartWidgetAllowed: !0,
                        emptyHeader: !0,
                        noHeaderSpace: !0,
                        widgetClass: k.widget,
                        headerClass: k.widgetHeader,
                        margin: L
                    },
                    alerts_log: {
                        ctor: null,
                        chartWidgetAllowed: !0,
                        emptyHeader: !0,
                        noHeaderSpace: !0,
                        widgetClass: k.widget,
                        headerClass: k.widgetHeader,
                        margin: L
                    },
                    market_summary: {
                        title: (0, r.t)("Market Summary"),
                        ctor: null
                    },
                    object_tree: {
                        title: (0, r.t)("Object tree. Multi-select drawings tools"),
                        ctor: null,
                        noHeader: !0,
                        chartWidgetAllowed: !0,
                        chartWidgetRequired: !0
                    },
                    streams: {
                        title: (0, r.t)("Streams"),
                        ctor: null,
                        emptyHeader: !0,
                        widgetClass: k.widget,
                        headerClass: k.widgetHeader,
                        margin: L,
                        doNotClearNotifications: !0,
                        doNotClearNotificationsOnVisibilityChange: !0
                    }
                },
                N = {
                    base: p
                };
            N["economic-calendar"] = g, N["earnings-calendar"] = m, N["alarm-clock"] = _, N.hotlists = f, N.calendar = v, N.notes = w, N.chat = y, N.messages = b, N["ideas-stream"] = S, N.notifications = T, N.streams = E, N.news = C, N["object-tree"] = A, N.datawindow = I;
            var M = i(294184),
                B = i.n(M),
                O = i(743137),
                R = i(896276),
                F = i.n(R),
                U = i(152946),
                V = i(13548),
                H = i(929098),
                W = i(342098);
            class z {
                constructor(e) {
                    this._settingsKey = null, this._value = null, e && e.settingsKey && (this._settingsKey = e.settingsKey, this._value = W.getJSON(this._settingsKey, null)), e && e.widgetBarWidget && Object.defineProperty(this, "widgetBarWidget", {
                        value: e.widgetBarWidget,
                        configurable: !0
                    })
                }
                value() {
                    return this._value
                }
                setValue(e, t) {
                    return this._value = e, this._settingsKey && (null == e ? ((0, H.trackEvent)("Settings debug", "WigdetProperties.setValue: " + this._settingsKey, window.user.username), W.remove(this._settingsKey)) : W.setJSON(this._settingsKey, e, t)), this._value
                }
            }
            var X = i(491496),
                q = i(563757),
                Y = i(75443),
                G = i(64011),
                j = i(918184);
            class $ {
                constructor(e) {
                    this.heightRatio = $.heightRatio, this.widgetConfig = null, this.widgetActive = new(d()), this.widgetMaximized = new(d()), this.widgetVisible = null, this.symbolLinking = null, this.intervalLinking = null, this._header = null, this._widget = null, this._headerIcon = null, this._headerspace = null, this._title = null, this._resizehandle = null, this._widgetStarted = new(F()), this._resizer = null, this._internalState = {
                        alive: new(d())(!0),
                        container: new(d()),
                        width: new(d()),
                        height: new(d()),
                        detachable: new(d())(!1)
                    }, e && e.widgetBarPage && (this.widgetBarPage = e.widgetBarPage), this._rdState = new O.ResizerDetacherState(this._internalState), this._rdState.owner.subscribe(e => {
                        e !== this._internalState && j(this._internalState.container.value()).empty()
                    })
                }
                element(e) {
                    switch (e) {
                        case "widget":
                            return this._widget;
                        case "header":
                            return this._header;
                        case "resize-handle":
                            return this._resizehandle;
                        default:
                            return null
                    }
                }
                setHeight(e) {
                    this._internalState.container.value() && (this._internalState.container.value().style.height = e + "px"), this._internalState.height.setValue(e)
                }
                onWidthChange(e) {
                    this._internalState.width.setValue(e)
                }
                remove() {
                    this.widgetBarPage && this.widgetBarPage.removeWidget(this)
                }
                destroy() {
                    var e, t, i, o, n, r;
                    this.widgetObject && "destroy" in this.widgetObject && this.widgetObject.destroy(), this.remove(), this.symbolLinking && (this.symbolLinking.destroy(), this.symbolLinking = null), this.intervalLinking && (this.intervalLinking.destroy(), this.intervalLinking = null), this.widgetVisible && (this.widgetVisible.unsubscribe(), this.widgetVisible = null), this.widgetActive && (this.widgetActive.unsubscribe(), this.widgetActive = null), this.widgetMaximized && (this.widgetMaximized.unsubscribe(), this.widgetMaximized = null), null === (e = this._header) || void 0 === e || e.remove(), null === (t = this._widget) || void 0 === t || t.remove(), null === (i = this._headerIcon) || void 0 === i || i.remove(), null === (o = this._headerspace) || void 0 === o || o.remove(), null === (n = this._title) || void 0 === n || n.remove(), null === (r = this._resizehandle) || void 0 === r || r.remove(), this._header = null, this._widget = null, this._headerIcon = null, this._headerspace = null, this._title = null, this._resizehandle = null, q.WIDGET_BAR_MESSAGE_BUS.offWidget(this), this._preloadTimeout && clearTimeout(this._preloadTimeout)
                }
                rdState() {
                    return this._rdState
                }
                onActiveStateChange(e) {
                    var t;
                    const i = (this.getWidgetBarOption("widgetConfig") || D)[this.type];
                    e && !i.doNotClearNotifications && this.clearNotifications(), this.updateVisibleWatchedValue(), null === (t = this.widgetActive) || void 0 === t || t.setValue(!!e)
                }
                toggleMaximize(e) {
                    var t, i, o;
                    const n = "boolean" != typeof e ? !(null === (t = this.widgetMaximized) || void 0 === t ? void 0 : t.value()) : e;
                    n !== (null === (i = this.widgetMaximized) || void 0 === i ? void 0 : i.value()) && (null === (o = this.widgetMaximized) || void 0 === o || o.setValue(n),
                        this.widgetBarPage && this.widgetBarPage.widgetBarLayout && this.widgetBarPage.widgetBarLayout.widgetBar && this.widgetBarPage.widgetBarLayout.widgetBar.saveToTVSettings(), this.widgetBarPage && this.widgetBarPage.updateWidgetsHeight())
                }
                startWidget() {
                    var e;
                    if (this.widgetObject || this.widgetStartDelayed) return;
                    if (!this.id) return;
                    const t = this.getWidgetBarOption("widgetConfig") || D;
                    if (!this.type) return;
                    const i = t[this.type];
                    if (!i) return;
                    const o = i.ctor;
                    if (!o) return;
                    if (this.widgetVisible = this.widgetVisible || new(d()), this.updateVisibleWatchedValue(), i.lazyLoad && !this.widgetVisible.value()) return this.widgetStartDelayed = !0, this.widgetVisible.when(() => {
                        delete this.widgetStartDelayed, this.startWidget(), clearTimeout(this._preloadTimeout)
                    }), void(i.preloadDelay && (this._preloadTimeout = setTimeout(() => {
                        o.preload && o.preload()
                    }, i.preloadDelay)));
                    this.symbolLinking = U.linking.symbol.spawn(), this.intervalLinking = U.linking.interval.spawn();
                    const r = this._rdState.bridge(),
                        s = { ...{
                                $widget: this.$widget,
                                $header: this.$header,
                                $headerspace: this.$headerspace,
                                $body: j(r.container.value())
                            },
                            header: (0, n.ensureNotNull)(this._header),
                            headerspace: this._headerspace,
                            widget: (0, n.ensureNotNull)(this._widget),
                            container: r.container.value(),
                            properties: this.properties,
                            notify: this.notify.bind(this),
                            clearNotifications: this.clearNotifications.bind(this),
                            visible: this.widgetVisible.readonly(),
                            active: (0, n.ensureNotNull)(this.widgetActive).readonly(),
                            symbol: this.symbolLinking,
                            interval: this.intervalLinking,
                            height: r.height,
                            width: r.width,
                            setTitle: this.setTitle.bind(this),
                            setTitleHtml: this.setTitleHtml.bind(this),
                            id: this.id,
                            toggleMaximize: this.toggleMaximize.bind(this),
                            maximized: (0, n.ensureNotNull)(this.widgetMaximized).readonly(),
                            postMessage: q.WIDGET_BAR_MESSAGE_BUS.postMessage.bind(this),
                            onMessage: q.WIDGET_BAR_MESSAGE_BUS.onMessage.bind(this),
                            offMessage: q.WIDGET_BAR_MESSAGE_BUS.offMessage.bind(this),
                            hideDetach: !1,
                            unAuthEditable: this.unAuthEditable
                        };
                    if (i.chartWidgetAllowed) {
                        const e = () => this.widgetBarPage && this.widgetBarPage.widgetBarLayout && this.widgetBarPage.widgetBarLayout.widgetBar && this.widgetBarPage.widgetBarLayout.widgetBar.chartWidgetCollection;
                        s.getChartWidget = () => {
                            const t = e();
                            return t ? t.activeChartWidget.value() : null
                        }, s.getChartWidgetCollection = () => e() || null
                    }
                    void 0 !== this.readonly ? this.readonly && (s.readonly = !0) : this.getWidgetBarOption("readonly") && (s.readonly = !0), void 0 !== i.options && (s.options = i.options), null != this.stateData ? s.data = this.stateData : null != i.data && (s.data = i.data);
                    const a = this.widgetObject = new o(s);
                    "hasLifecycle" in a && (null === (e = this.widgetActive) || void 0 === e || e.readonly().subscribe(e => {
                        e ? a.mount() : a.unmount()
                    }, {
                        callWithLast: !i.lazyLoad
                    })), this._widgetStarted.fire(this)
                }
                widgetStarted() {
                    return this._widgetStarted
                }
                notify(e, t = {}) {
                    if (this.widgetBarPage && (!this.widgetBarPage.isActiveAndVisible() || t.force)) return this.widgetBarPage.notify(e, t)
                }
                clearNotifications() {
                    if (this.widgetBarPage) return this.widgetBarPage.clearNotifications()
                }
                onVisibilityChange() {
                    this.updateVisibleWatchedValue()
                }
                updateVisibleWatchedValue() {
                    this.widgetVisible && this.widgetVisible.setValue(!!this.widgetBarPage && this.widgetBarPage.isActiveAndVisible())
                }
                setTitle(e) {
                    this.customTitle = String(e), this._title && (this._title.textContent = this.getTitle())
                }
                setTitleHtml(e) {
                    this._title && (0, X.html)(this._title, e)
                }
                getWidgetBarOption(e) {
                    if (this.widgetBarPage && this.widgetBarPage.widgetBarLayout && this.widgetBarPage.widgetBarLayout.widgetBar && e in this.widgetBarPage.widgetBarLayout.widgetBar) return this.widgetBarPage.widgetBarLayout.widgetBar[e]
                }
                getTitle(e) {
                    const t = function(e, t) {
                        var i, o;
                        try {
                            let n = null === (i = (t = t || D)[e]) || void 0 === i ? void 0 : i.title;
                            return !n && e && (n = null === (o = String(e).match(/[A-Z]{2,}|\d+(?:\.\d+)?|[A-Z]?[a-z]+/g)) || void 0 === o ? void 0 : o.join(" ").replace(/^.|\s./g, e => e.toUpperCase())), n || void 0
                        } catch (e) {
                            return
                        }
                    }(this.type, this.getWidgetBarOption("widgetConfig"));
                    return e && this.customTitle && t ? this.customTitle.substring(0, t.length) === t ? this.customTitle : t + ": " + this.customTitle : this.customTitle || t || (0, r.t)("Widget")
                }
                createHTML() {
                    const e = !!this.widgetConfig && (!!this.widgetConfig.icon && this.widgetConfig.icon),
                        t = this.widgetConfig && this.widgetConfig.emptyHeader,
                        i = this.widgetConfig && this.widgetConfig.noHeader,
                        o = this.widgetConfig && this.widgetConfig.noHeaderSpace,
                        n = this.widgetConfig && this.widgetConfig.widgetClass || "",
                        r = this.widgetConfig && this.widgetConfig.headerClass || "",
                        s = this.widgetConfig && this.widgetConfig.titleClass || "",
                        a = this._widget = document.createElement("div");
                    a.classList.value = B()(n, "widgetbar-widget", "widgetbar-widget-" + this.type);
                    const l = this._header = document.createElement("div");
                    if (l.classList.value = r || "widgetbar-widgetheader", l.addEventListener("contextmenu", e => {
                            "input" !== e.target.tagName.toLowerCase() && e.preventDefault()
                        }), i || a.appendChild(l), this.$widget = j(this._widget), this.$header = j(this._header), e) {
                        const t = this._headerIcon = document.createElement("div");
                        t.classList.value = "widgetbar-widgetheader-icon widgetbar-widgetheader-icon-" + e, t.appendChild((0, V.parseHtml)(N[e])), l.appendChild(t), this.$headericon = j(l)
                    }
                    if (!o) {
                        const e = this._headerspace = document.createElement("div");
                        e.classList.value = "widgetbar-headerspace", e.addEventListener("click", e => e.preventDefault()), l.appendChild(e), this.$headerspace = j(e)
                    }
                    if (!t) {
                        const e = this._title = document.createElement("div");
                        e.classList.value = B()("widgetbar-widgettitle", s), e.dataset.name = this.type + "_header", e.textContent = this.getTitle(), l.appendChild(e), this.$title = j(e)
                    }
                    const c = document.createElement("div");
                    c.classList.value = "widgetbar-widgetbody", c.addEventListener("contextmenu", e => {
                        e.target === c && e.preventDefault()
                    }), a.appendChild(c), this._internalState.container.setValue(c);
                    const d = this._resizehandle = document.createElement("div");
                    d.classList.value = "widgetbar-widgethandle", d.addEventListener("contextmenu", e => {
                        e.target === d && e.preventDefault()
                    }), null !== this._resizer && this._resizer.destroy(), this._resizer = new G.PointerBackend({
                        handle: d,
                        onDragStart: e => {
                            var t;
                            null === (t = this.widgetBarPage) || void 0 === t || t.handleWidgetResizeStart(this, e)
                        },
                        onDragMove: e => {
                            var t;
                            null === (t = this.widgetBarPage) || void 0 === t || t.handleWidgetResizeChange(this, e)
                        },
                        onDragStop: e => {
                            var t;
                            null === (t = this.widgetBarPage) || void 0 === t || t.handleWidgetResizeStop(this, e)
                        }
                    }), a.appendChild(d), this.$resizehandle = j(d), !0 === this.maximized && (this.toggleMaximize(!0), delete this.maximized)
                }
                demarshal(e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    if (!e || "object" != typeof e) return null;
                    let t;
                    if ("id" in e ? (this.id = String(e.id), this.type = this.id.replace(/\..*/, "")) : "type" in e ? (this.type = String(e.type), this.id = this.type + "." + (0, Y.randomHash)()) : (delete this.type, delete this.id), null != e.readonly ? this.readonly = !!e.readonly : delete this.readonly, this.stateData = e.data, isFinite(Number(e.heightRatio)) && Number(e.heightRatio) >= 0 ? this.heightRatio = Number(e.heightRatio) : this.heightRatio = $.heightRatio, !0 === e.maximized && (this.maximized = !0), !0 === e.unAuthEditable && (this.unAuthEditable = !0), e.settingsKey) t = String(e.settingsKey);
                    else if (this.id) {
                        const e = this.getWidgetBarOption("_settingsPrefix");
                        e && (t = e + ".widget." + this.id)
                    }
                    if (this.properties = new z({
                            widgetBarWidget: this,
                            settingsKey: t
                        }), null == e.properties || t && null !== this.properties.value() || this.properties.setValue(e.properties), "news" !== this.type && "hotlist" !== this.type || !t || this.properties.setValue((0, o.default)({}, e.properties, this.properties.value())), "hotlist" === this.type)
                        if (!t && e.properties) this.properties.setValue(e.properties);
                        else {
                            const e = this.properties.value();
                            ("exchangeByLocale" in e || "groupByLocale" in e) && (delete e.exchangeByLocale, delete e.groupByLocale, this.properties.setValue(e))
                        }
                    this.widgetConfig = null;
                    const i = this.getWidgetBarOption("widgetConfig");
                    return this.type && i && i[this.type] && (this.widgetConfig = i[this.type]), this
                }
                marshal() {
                    var e;
                    const t = {};
                    return this.id && (t.id = this.id), this.type && (t.type = this.type), this.heightRatio !== $.heightRatio && (t.heightRatio = this.heightRatio), (null === (e = this.widgetMaximized) || void 0 === e ? void 0 : e.value()) && (t.maximized = !0), t
                }
            }
            $.heightRatio = 1;
            var J = i(918184);
            class K {
                constructor(e) {
                    this.widgets = [], this.notificationCounter = 0, this._page = null, this._invalidated = !1, this._resizeOperations = new WeakMap, this.widgets = [], e && e.widgetBarLayout && (this.widgetBarLayout = e.widgetBarLayout)
                }
                widget(e) {
                    for (const t of this.widgets)
                        if (t.type === e) return t;
                    return null
                }
                element() {
                    return this._page
                }
                gaEvent() {
                    return this._gaEvent
                }
                onActiveStateChange(e) {
                    var t;
                    e = !!e, null === (t = this._page) || void 0 === t || t.classList.toggle("active", !!e), (0, n.ensure)(this.tab).onActiveStateChange(e), e && this.updateWidgetsHeight({
                        skipIfHeightUnchanged: !0
                    }), this.widgets.forEach(t => {
                        t.onActiveStateChange(e)
                    })
                }
                updateWidgetsHeight(e = {}) {
                    if (!this._page) return;
                    if (!this.widgetBarLayout || !this.widgetBarLayout.widgetBar) return;
                    if (this.widgetBarLayout.getActivePage() !== this) return void(this._invalidated = !0);
                    const t = this.widgetBarLayout.widgetBar.resizerBridge.height.value();
                    if (this._pageHeight === t && e.skipIfHeightUnchanged || (this._invalidated = !0, this._pageHeight = t), !this._invalidated) return;
                    let i, o = t,
                        r = 0,
                        s = this.widgets,
                        a = null;
                    const l = s.every(e => 0 === e.heightRatio);
                    for (let e = this.widgets.length; e--;)
                        if ((0, n.ensureNotNull)(this.widgets[e].widgetMaximized).value()) {
                            a = this.widgets[e];
                            break
                        }
                    if (s.length > 0 && null === a && l) {
                        const e = s[s.length - 1];
                        e.heightRatio = 1, a = e
                    }
                    if (a) {
                        for (let e = this.widgets.length; e--;) {
                            const t = s[e];
                            t !== a && t.setHeight(0)
                        }
                        s = [a]
                    }
                    for (let e = s.length - 1; e > 0; e--) {
                        const t = s[e];
                        o -= t.widgetConfig && t.widgetConfig.margin || 1
                    }
                    for (let e = s.length; e--;) {
                        const t = s[e],
                            n = t.element("header");
                        n && (void 0 === i && (i = (0, X.outerHeight)(n, !0)), o -= i, r += t.heightRatio)
                    }
                    const c = o / r,
                        d = s.length - 1;
                    for (let e = 0; e <= d; e++) {
                        const t = s[e];
                        let i;
                        i = e === d ? o : Math.round(c * t.heightRatio), t.setHeight(i), o -= i
                    }
                }
                handleWidgetResizeStart(e, t) {
                    let i, o;
                    for (let t = this.widgets.length - 1; t > 0; t--) this.widgets[t] === e && (i = this.widgets[t], o = this.widgets[t - 1]);
                    (0, n.assert)(void 0 !== i), (0, n.assert)(void 0 !== o);
                    const r = o.rdState().bridge().height.value(),
                        s = o.heightRatio + i.heightRatio,
                        a = r + i.rdState().bridge().height.value();
                    0 === a && t.preventDefault(), this._resizeOperations.set(e, {
                        bottomWidget: i,
                        topWidget: o,
                        summaryHeight: a,
                        summaryRatio: s,
                        startTopWidgetHeight: r,
                        prevTopWidgetHeight: void 0
                    })
                }
                handleWidgetResizeChange(e, t) {
                    var i;
                    const o = this._resizeOperations.get(e);
                    if (void 0 === o) return;
                    null === (i = this._page) || void 0 === i || i.classList.add("widget-resize-mode");
                    const {
                        current: n,
                        initial: r
                    } = t.detail, s = n.pageY - r.pageY, a = Math.max(0, Math.min(o.startTopWidgetHeight + s, o.summaryHeight));
                    o.prevTopWidgetHeight !== a && (o.prevTopWidgetHeight = a, o.topWidget.heightRatio = a / o.summaryHeight * o.summaryRatio, o.bottomWidget.heightRatio = o.summaryRatio - o.topWidget.heightRatio, o.topWidget.setHeight(a), o.bottomWidget.setHeight(o.summaryHeight - a))
                }
                handleWidgetResizeStop(e, t) {
                    var i;
                    const o = this._resizeOperations.get(e);
                    void 0 !== o && (this._resizeOperations.delete(e), null === (i = this._page) || void 0 === i || i.classList.remove("widget-resize-mode"), o.prevTopWidgetHeight !== o.startTopWidgetHeight && (this.normalizeRatios(), this.widgetBarLayout && this.widgetBarLayout.widgetBar && this.widgetBarLayout.widgetBar.saveToTVSettings()))
                }
                normalizeRatios() {
                    let e = 1 / 0;
                    for (let t = this.widgets.length; t--;) {
                        const i = this.widgets[t].heightRatio;
                        i <= 0 || !isFinite(i) || i < e && (e = i)
                    }
                    if (!isFinite(e)) return;
                    let t = 1;
                    for (; e < 1;) e *= 2, t *= 2;
                    for (; e >= 2;) e /= 2, t /= 2;
                    for (let e = this.widgets.length; e--;) this.widgets[e].heightRatio *= t
                }
                attachWidget(e, t) {
                    var i;
                    t = Number(t);
                    const o = this.widgets.indexOf(e); - 1 !== o ? this.widgets.splice(o, 1) : e.widgetBarPage && e.widgetBarPage !== this && e.widgetBarPage.removeWidget(e), t < this.widgets.length ? t < 0 && (t = 0) : t = this.widgets.length, delete e.widgetBarPage, Object.defineProperty(e, "widgetBarPage", {
                        value: this,
                        configurable: !0
                    }), this.widgets.splice(t, 0, e);
                    const n = this.widgets[t + 1],
                        r = e.element("widget");
                    n ? r && r.insertAdjacentElement("beforebegin", n.element("widget")) : r && (null === (i = this._page) || void 0 === i || i.appendChild(r)), this.updateWidgetsHeight(), e.updateVisibleWatchedValue()
                }
                removeWidget(e) {
                    var t;
                    const i = this.widgets.indexOf(e); - 1 !== i && (delete e.widgetBarPage, this.widgets.splice(i, 1), null === (t = e.element("widget")) || void 0 === t || t.remove(), this.updateWidgetsHeight())
                }
                remove() {
                    this.widgetBarLayout && this.widgetBarLayout.removePage(this)
                }
                destroy() {
                    var e;
                    this.remove(), null === (e = this._page) || void 0 === e || e.remove()
                }
                onVisibilityChange(e) {
                    const t = e && this.widgetBarLayout && this.widgetBarLayout.getActivePage() === this;
                    this.widgets.forEach(e => {
                        const i = e.getWidgetBarOption("widgetConfig")[e.type];
                        t && !i.doNotClearNotificationsOnVisibilityChange && e.clearNotifications(), e.onVisibilityChange()
                    })
                }
                notify(e, t = {}) {
                    !0 !== t.clear ? t.stopHighlightTab || (this.notificationCounter = this.notificationCounter + (~~e || 1), this.updateNotifications(t.notificationValue)) : this.clearNotifications()
                }
                clearNotifications() {
                    this.notificationCounter = 0, (0, n.ensure)(this.tab).updateNotifications(this.notificationCounter)
                }
                updateNotifications(e) {
                    const t = "number" == typeof e ? e : this.notificationCounter;
                    (0, n.ensure)(this.tab).updateNotifications(t)
                }
                getWidgets(e) {
                    const t = [];
                    for (let i = 0; i < this.widgets.length; ++i) {
                        const o = this.widgets[i];
                        o.type === e && t.push(o)
                    }
                    return t
                }
                isActiveAndVisible() {
                    const e = this.widgetBarLayout;
                    return !(!e || !e.visible) && e.getActivePage() === this
                }
                createHTML() {
                    const e = this._page = document.createElement("div");
                    e.classList.value = "widgetbar-page", this.$page = J(e), this.widgets.forEach(t => {
                        t.createHTML();
                        const i = t.element("widget");
                        i && e.appendChild(i)
                    })
                }
                createTabButtonViewModel() {
                    this.tab = new h({
                        icon: N[this.icon],
                        hint: this.title,
                        onClick: e => {
                            this.widgetBarLayout && this.widgetBarLayout.onTabClick(e, this)
                        },
                        TabButtonComponent: this.TabButtonComponent
                    })
                }
                demarshal(e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    if ("object" != typeof e || !e.widgets || !Array.isArray(e.widgets)) return null;
                    const t = this.widgets;
                    return t.splice(0, t.length), this._gaEvent = e._gaEvent, this.title = e.title, this.name = e.name, this.icon = e.icon, this.spaceBottom = e.spaceBottom, this.spaceBottomText = e.spaceBottomText, this.onBottom = e.onBottom, this.TabButtonComponent = e.TabButtonComponent, this.createTabButtonViewModel(), e.widgets.forEach(e => {
                        const i = new $({
                            widgetBarPage: this
                        }).demarshal(e);
                        i && t.push(i)
                    }), 0 === t.length ? null : this
                }
                marshal() {
                    const e = [];
                    return this.widgets.forEach(t => {
                        const i = t.marshal();
                        i && e.push(i)
                    }), 0 === e.length ? null : e
                }
            }
            var Q = i(350138),
                Z = i(97708),
                ee = i(846233);
            var te = i(45697),
                ie = i(195355),
                oe = i(640539),
                ne = i(964656),
                re = i(615184);

            function se(e) {
                const t = M(e.className, ne.button, e.isGrayed && ne.isGrayed);
                return a.createElement("div", {
                    className: t,
                    onClick: e.onClick,
                    "data-role": "button",
                    "data-name": e.name
                }, a.createElement(oe.Icon, {
                    className: ne.icon,
                    icon: re
                }))
            }
            var ae = i(370104),
                le = i(550205),
                ce = i(930112),
                de = i(96431),
                ue = i(562309);
            const he = (0, r.t)("DOM"),
                pe = (0, de.registryContextType)();
            class ge extends a.PureComponent {
                constructor(e, t) {
                    super(e, t), this._handleClick = () => {
                        (0, Q.trackButtonClick)("right panel", "dom");
                        const {
                            setDomPanelVisibility: e
                        } = (0, n.ensure)(this.context.widgetBar.tradingPanelAccessor);
                        e(!this.state.isActive)
                    }, this._handleIsOpenedChange = () => {
                        this.setState({
                            isActive: this._tradingPanel.isPageOpened(ce.TradingPage.DomPanel)
                        })
                    }, this._handleActivePageChange = e => {
                        this._tradingPanel.isOpened.value() && this.setState({
                            isActive: e === ce.TradingPage.DomPanel
                        })
                    }, (0, de.validateRegistry)(t, {
                        widgetBar: te.any.isRequired
                    }), this._tradingPanel = (0, n.ensure)(this.context.widgetBar.tradingPanelAccessor).tradingPanel, this.state = {
                        isActive: this._tradingPanel.isPageOpened(ce.TradingPage.DomPanel)
                    }
                }
                componentDidMount() {
                    this._tradingPanel.isOpened.subscribe(this._handleIsOpenedChange), this._tradingPanel.activePage.subscribe(this._handleActivePageChange)
                }
                componentWillUnmount() {
                    this._tradingPanel.isOpened.unsubscribe(this._handleIsOpenedChange), this._tradingPanel.activePage.unsubscribe(this._handleActivePageChange)
                }
                render() {
                    return a.createElement(le.TabButton, { ...this.props,
                        icon: ue,
                        hint: he,
                        isActive: this.state.isActive,
                        onClick: this._handleClick
                    })
                }
            }
            ge.contextType = pe;
            var me = i(918170);
            const _e = (0, r.t)("Order Panel"),
                fe = (0, de.registryContextType)();
            class ve extends a.PureComponent {
                constructor(e, t) {
                    super(e, t), this._handleClick = () => {
                        (0, Q.trackButtonClick)("right panel", "order panel");
                        const {
                            setOrderPanelVisibility: e
                        } = (0, n.ensure)(this.context.widgetBar.tradingPanelAccessor), t = !this.state.isActive;
                        e(t), t && (0, H.trackEvent)("GUI", "Open Order Panel")
                    }, this._handleIsOpenedChange = () => {
                        this.setState({
                            isActive: this._tradingPanel.isPageOpened(ce.TradingPage.OrderPanel)
                        })
                    }, this._handleActivePageChange = e => {
                        this._tradingPanel.isOpened.value() && this.setState({
                            isActive: e === ce.TradingPage.OrderPanel
                        })
                    }, (0, de.validateRegistry)(t, {
                        widgetBar: te.any.isRequired
                    }), this._tradingPanel = (0, n.ensure)(this.context.widgetBar.tradingPanelAccessor).tradingPanel, this.state = {
                        isActive: this._tradingPanel.isPageOpened(ce.TradingPage.OrderPanel)
                    }
                }
                componentDidMount() {
                    this._tradingPanel.isOpened.subscribe(this._handleIsOpenedChange), this._tradingPanel.activePage.subscribe(this._handleActivePageChange)
                }
                componentWillUnmount() {
                    this._tradingPanel.isOpened.unsubscribe(this._handleIsOpenedChange), this._tradingPanel.activePage.unsubscribe(this._handleActivePageChange)
                }
                render() {
                    return a.createElement(le.TabButton, { ...this.props,
                        icon: me,
                        hint: _e,
                        isActive: this.state.isActive,
                        onClick: this._handleClick
                    })
                }
            }
            ve.contextType = fe;
            var we = i(749761);

            function ye(e) {
                return a.createElement("div", {
                    className: M(e.className, we.separator)
                })
            }
            var be = i(536427);

            function Se(e) {
                return a.createElement("div", {
                    className: M(be.filler, e.className)
                })
            }

            function Te(e, t) {
                return class extends a.PureComponent {
                    constructor(e) {
                        super(e), this._bindedForceUpdate = () => this.forceUpdate(), this.state = {
                            viewModel: t
                        }
                    }
                    componentDidMount() {
                        const {
                            viewModel: e
                        } = this.state;
                        e.notificationsCount.subscribe(this._bindedForceUpdate), e.isActive.subscribe(this._bindedForceUpdate)
                    }
                    componentWillUnmount() {
                        const {
                            viewModel: e
                        } = this.state;
                        e.notificationsCount.unsubscribe(this._bindedForceUpdate), e.isActive.unsubscribe(this._bindedForceUpdate)
                    }
                    render() {
                        const {
                            viewModel: t
                        } = this.state, i = t.notificationsCount.value();
                        return a.createElement(e, { ...this.props,
                            icon: t.icon.value(),
                            isActive: t.isActive.value(),
                            onClick: t.onClick.value(),
                            hint: t.hint.value(),
                            count: i
                        })
                    }
                }
            }
            var Ee = i(53549),
                Ce = i(987380),
                Ae = i(357824),
                Ie = i(474423);
            const ke = (0, Ce.getLogger)("Platform.GUI.RightToolbar"),
                Le = (0, de.registryContextType)();
            class Pe extends a.PureComponent {
                constructor(e, t) {
                    super(e, t), this._pages = {}, this._isTradingPanelVisible = null, this._tradingActivePage = null, this._isTradingPanelOpened = null,
                        this._handleMouseOver = e => {
                            (0, Ae.hoverMouseEventFilter)(e) && this.setState({
                                isHovered: !0
                            })
                        }, this._handleMouseOut = e => {
                            (0, Ae.hoverMouseEventFilter)(e) && this.setState({
                                isHovered: !1
                            })
                        }, this._handleFullscreenChange = e => {
                            this.setState({
                                isFullscreen: e
                            })
                        }, this._handleCloseClick = () => {
                            const {
                                widgetBar: e
                            } = this.context;
                            (0, n.ensureDefined)(e.layout).setMinimizedState(!0)
                        }, this._handleGrayedChange = () => {
                            this.setState({
                                isGrayed: this._isGrayed()
                            })
                        }, this._handleDomButtonVisibilityChange = e => {
                            this.setState({
                                isTradingButtonsVisible: e
                            })
                        }, this._isGrayed = () => {
                            let e = this._isMinimized.value();
                            return null !== this._isTradingPanelOpened && (e = e && !this._isTradingPanelOpened.value()), !e
                        }, (0, de.validateRegistry)(t, {
                            widgetBar: te.any.isRequired
                        });
                    const {
                        widgetBar: i
                    } = this.context;
                    if (this._isMinimized = (0, n.ensureDefined)(i.layout).isMinimized.spawn(), this._isFullscreen = i.resizerBridge.fullscreen.spawn(), i.tradingPanelAccessor) {
                        const e = i.tradingPanelAccessor.tradingPanel;
                        this._isTradingPanelVisible = e.isVisible.spawn(), this._tradingActivePage = e.activePage.spawn(), this._isTradingPanelOpened = e.isOpened.spawn()
                    }
                    this.state = {
                        isHovered: !1,
                        isGrayed: this._isGrayed(),
                        isFullscreen: this._isFullscreen.value(),
                        isTradingButtonsVisible: !1
                    }, null !== this._isTradingPanelVisible && (this.state = { ...this.state,
                        isTradingButtonsVisible: this._isTradingPanelVisible.value()
                    }), (0, n.ensureDefined)(i.layout).pages.forEach(e => {
                        var t;
                        void 0 === e.name && ke.logWarn('Page does not provide required field "name"');
                        const i = e.tab;
                        this._pages[e.name] = Te(null !== (t = i.TabButtonComponent) && void 0 !== t ? t : le.TabButton, i)
                    }), this._toolset = this._createToolset()
                }
                componentDidMount() {
                    this._isFullscreen.subscribe(this._handleFullscreenChange), this._isMinimized.subscribe(this._handleGrayedChange), null !== this._isTradingPanelVisible && this._isTradingPanelVisible.subscribe(this._handleDomButtonVisibilityChange), null !== this._isTradingPanelOpened && this._isTradingPanelOpened.subscribe(this._handleGrayedChange)
                }
                componentWillUnmount() {
                    this._isFullscreen.destroy(), this._isMinimized.destroy(), null !== this._isTradingPanelVisible && this._isTradingPanelVisible.destroy(), null !== this._tradingActivePage && this._tradingActivePage.destroy(), null !== this._isTradingPanelOpened && this._isTradingPanelOpened.destroy()
                }
                render() {
                    const {
                        className: e,
                        isDomButtonAvailable: t,
                        isOrderPanelButtonAvailable: i
                    } = this.props, {
                        isHovered: o,
                        isGrayed: n,
                        isFullscreen: r,
                        isTradingButtonsVisible: s
                    } = this.state, {
                        widgetBar: l
                    } = this.context, c = this._toolset, d = i && s, u = t && s;
                    return a.createElement(ae.VerticalScroll, {
                        isVisibleFade: ie.mobiletouch,
                        isVisibleButtons: !ie.mobiletouch && o,
                        isVisibleScrollbar: !1,
                        onMouseOver: this._handleMouseOver,
                        onMouseOut: this._handleMouseOut
                    }, a.createElement("div", {
                        className: M(e, Ie.toolbar, n && Ie.isGrayed),
                        "data-name": "right-toolbar",
                        onContextMenu: Ee.preventDefault
                    }, l.adaptive && r && a.createElement(se, {
                        name: "close-button",
                        onClick: this._handleCloseClick
                    }), this._renderPages(), (d || u) && a.createElement(ye, null), d && a.createElement(ve, {
                        name: "order-panel-button",
                        isGrayed: n
                    }), u && a.createElement(ge, {
                        name: "dom-button",
                        isGrayed: n
                    }), a.createElement(Se, null), this._renderPages(!0), c.SupportTicketButton && a.createElement(c.SupportTicketButton, {
                        name: "bug-report-button",
                        isGrayed: n,
                        isTab: !1
                    }), c.HelpButton && a.createElement(c.HelpButton, {
                        name: "help-button",
                        isGrayed: n,
                        isTab: !1
                    })))
                }
                _renderPages(e) {
                    const t = [],
                        {
                            isGrayed: i
                        } = this.state,
                        {
                            widgetBar: o
                        } = this.context,
                        {
                            pages: r
                        } = (0, n.ensureDefined)(o.layout);
                    return r.forEach(o => {
                        const n = o.name;
                        if (n in this._pages && Boolean(o.onBottom) === Boolean(e)) {
                            const e = this._pages[n];
                            t.push(a.createElement(e, {
                                name: n,
                                isGrayed: i,
                                key: n
                            })), o.spaceBottom && t.push(a.createElement(ye, {
                                key: o.spaceBottomText
                            }))
                        }
                    }), t
                }
                _createToolset() {
                    const {
                        widgetBar: e
                    } = this.context;
                    return {
                        SupportTicketButton: this.props.isSupportTicketButtonAvailable ? Te(le.TabButton, e.ensureSupportTicketButtonViewModel()) : void 0,
                        HelpButton: this.props.isHelpButtonAvailable ? Te(le.TabButton, e.ensureHelpButtonViewModel()) : void 0
                    }
                }
            }
            Pe.contextType = Le;
            const xe = {
                widgetBar: te.any
            };
            class De extends a.PureComponent {
                constructor(e) {
                    super(e), this._registry = {
                        widgetBar: this.props.widgetBar
                    }
                }
                render() {
                    return a.createElement(de.RegistryProvider, {
                        validation: xe,
                        value: this._registry
                    }, this.props.children)
                }
            }
            class Ne {
                constructor(e, t, i) {
                    this._widgetBar = e, this._container = t, this._options = i, this._render()
                }
                updateOptions(e) {
                    this._options = e, this._render()
                }
                destroy() {
                    l.unmountComponentAtNode(this._container)
                }
                _render() {
                    l.render(a.createElement(De, {
                        widgetBar: this._widgetBar
                    }, a.createElement(Pe, {
                        isDomButtonAvailable: this._options.isDomButtonAvailable,
                        isOrderPanelButtonAvailable: this._options.isOrderPanelButtonAvailable,
                        isHelpButtonAvailable: this._options.isHelpButtonAvailable,
                        isSupportTicketButtonAvailable: this._options.isSupportTicketButtonAvailable
                    })), this._container)
                }
            }
            var Me = i(614750);
            const Be = "http://www.w3.org/2000/svg";

            function Oe(e) {
                const {
                    direction: t,
                    theme: i = Me
                } = e;
                return a.createElement("svg", {
                    xmlns: Be,
                    width: "9",
                    height: "27",
                    viewBox: "0 0 9 27",
                    className: M(i.container, "right" === t ? i.mirror : null),
                    onContextMenu: Ee.preventDefault
                }, a.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, a.createElement("path", {
                    className: i.background,
                    d: "M4.5.5a4 4 0 0 1 4 4v18a4 4 0 1 1-8 0v-18a4 4 0 0 1 4-4z"
                }), a.createElement("path", {
                    className: i.arrow,
                    d: "M5.5 10l-2 3.5 2 3.5"
                })))
            }
            const Re = (0, r.t)("Hide Tab"),
                Fe = (0, r.t)("Open Tab");

            function Ue(e) {
                const t = M(e.className, "apply-common-tooltip", "common-tooltip-vertical", "common-tooltip-otl");
                return a.createElement("div", {
                    className: t,
                    onClick: e.onClick,
                    title: e.isMinimized ? Fe : Re
                }, a.createElement(Oe, {
                    direction: e.isMinimized ? "left" : "right"
                }))
            }
            var Ve = i(307833),
                He = i(918184);
            class We {
                constructor(e = {}) {
                    this.MIN_WIDTH = 200, this.MINIMIZE_THRESHOLD = 50, this.activeIndex = We.activeIndex, this.activeName = We.activeName, this.minimized = We.minimized, this.visible = We.visible, this.width = We.width, this.version = We.version, this.pages = [], this.isMinimized = new(d()), this.activePageIndex = new(d())(this.activeIndex), this.tabRenderer = null, this._tabs = null, this._pages = null, this._pagescontent = null, this._handle = null, this._deviceButton = null, this._hider = null, this._draggable = null, this._rightToolbarOptions = {
                        isDomButtonAvailable: Ve.enabled("dome_widget"),
                        isOrderPanelButtonAvailable: Ve.enabled("order_panel"),
                        isSupportTicketButtonAvailable: Ve.enabled("bugreport_button"),
                        isHelpButtonAvailable: !Ve.enabled("widget") && !Ve.enabled("charting_library_base")
                    }, this.widgetBar = e.widgetBar, this._rightToolbar = Boolean(e.rightToolbar)
                }
                element(e) {
                    switch (e) {
                        case "tabs":
                            return this._tabs;
                        case "pages":
                            return this._pages;
                        case "pages-content":
                            return this._pagescontent;
                        case "handle":
                            return this._handle;
                        case "device-button":
                            return this._deviceButton;
                        case "hider":
                            return this._hider;
                        default:
                            return null
                    }
                }
                widget(e) {
                    for (const t of this.pages) {
                        const i = t.widget(e);
                        if (i) return i
                    }
                    return null
                }
                startWidgets() {
                    this.pages.forEach(e => {
                        e.widgets.forEach(e => {
                            e.widgetObject || e.widgetStartDelayed || setTimeout(() => {
                                e.startWidget()
                            }, 0)
                        })
                    });
                    const e = this.getActivePage();
                    e && e.onActiveStateChange(!0)
                }
                syncHeight() {
                    const e = (0, n.ensureDefined)(this.widgetBar).resizerBridge.height.value();
                    if (null !== this._pages && (this._pages.style.height = e + "px"), !this.minimized) {
                        const e = this.getActivePage();
                        e && e.updateWidgetsHeight()
                    }
                }
                tabsWidth() {
                    return this._rightToolbar ? 46 : this.minimized ? 5 : 0
                }
                borderWidth() {
                    return 1
                }
                canOpen() {
                    return this.MIN_WIDTH + this.tabsWidth() + this.borderWidth() <= (0, n.ensureDefined)(this.widgetBar).resizerBridge.availWidth.value()
                }
                requestWidth(e) {
                    const t = (0, n.ensureDefined)(this.widgetBar).resizerBridge;
                    e > 0 && (e += this.borderWidth());
                    const i = this.tabsWidth(),
                        o = e + i;
                    this.canOpen() ? t.width.value() !== o && t.negotiateWidth([{
                        min: i,
                        max: i
                    }, {
                        min: this.MIN_WIDTH + i,
                        max: o
                    }]) : t.negotiateWidth(0)
                }
                requestOptimalWidth() {
                    this.minimized ? this.requestWidth(0) : this.requestWidth(this.width)
                }
                updateResponsiveness() {
                    var e, t;
                    const i = !this.canOpen();
                    null === (e = this._tabs) || void 0 === e || e.classList.toggle("js-hidden", i), null === (t = this._pages) || void 0 === t || t.classList.toggle("js-hidden", i)
                }
                syncWidth() {
                    const e = (0, n.ensureDefined)(this.widgetBar).resizerBridge,
                        t = this.tabsWidth(),
                        i = this.borderWidth(),
                        o = e.width.value(),
                        r = Math.max(o - t - i, 0) || 0;
                    r < this.MINIMIZE_THRESHOLD ? this.setMinimizedState(!0) : this.setMinimizedState(!1);
                    const s = this._pages;
                    if (s && (s.style.width = r + "px", s.classList.toggle("hidden", !!this.minimized)), !this.minimized) {
                        const e = this.getActivePage();
                        e && e.widgets.forEach(e => {
                            e.onWidthChange(r)
                        }), this.widgetBar && this.widgetBar.loadWidgets()
                    }
                    const a = !this.canOpen();
                    this._deviceButton && this._deviceButton.classList.toggle("js-hidden", !a || !this.minimized)
                }
                setMinimizedState(e) {
                    const t = Boolean(e);
                    !!this.minimized !== t && (this.minimized = t, this.isMinimized.setValue(this.minimized), t && (0, n.ensureDefined)(this.widgetBar).resizerBridge.exitFullscreen(), this.requestOptimalWidth(), this.activeIndex >= 0 && this.pages[this.activeIndex].onActiveStateChange(!this.minimized))
                }
                switchPage(e) {
                    if (-1 === e || 0 === this.pages.length) return this.activeIndex = -1, void this.activePageIndex.setValue(this.activeIndex);
                    let t;
                    if (e instanceof K) {
                        if (t = this.pages.indexOf(e), -1 === t) return
                    } else t = +e;
                    const i = this.pages[this.activeIndex];
                    this.activeIndex = Math.min(this.pages.length - 1, Math.max(0, t)), this.activePageIndex.setValue(this.activeIndex);
                    const o = this.pages[this.activeIndex];
                    this.activeName = o.name || "", this.minimized || i && i === o || (i && i.onActiveStateChange(!1), o && o.onActiveStateChange(!0))
                }
                getActivePage() {
                    return this.minimized ? null : this.pages[this.activeIndex] || null
                }
                onTabClick(e, t) {
                    if (e.isDefaultPrevented()) return;
                    const i = this.pages.indexOf(t);
                    if (-1 !== i) {
                        if (e.preventDefault(), this._trackClick(t.name), i !== this.activeIndex || this.minimized) {
                            const e = t.gaEvent();
                            e && (0, H.trackEvent)("Platform Widgets", e), this.switchPage(i), this.minimized && this.setMinimizedState(!1)
                        } else this.setMinimizedState(!0);
                        this.widgetBar && this.widgetBar.saveToTVSettings()
                    }
                }
                removePage(e) {
                    const t = this.pages.indexOf(e);
                    if (-1 === t) return;
                    delete e.widgetBarLayout, this.pages.splice(t, 1);
                    const i = e.element();
                    null == i || i.remove(), this.activeIndex === t && this.switchPage(t - 1)
                }
                createPage() {
                    var e;
                    const t = new K({
                        widgetBarLayout: this
                    });
                    this.pages.push(t), t.createHTML();
                    const i = (0, n.ensureNotNull)(t.element());
                    return null === (e = this._pagescontent) || void 0 === e || e.append(i), t
                }
                createWidget(e, t) {
                    if (t) {
                        if (-1 === this.pages.indexOf(t)) return null
                    } else t = this.createPage();
                    const i = new $({
                        widgetBarPage: t
                    });
                    return i.demarshal({
                        type: e
                    }), i.createHTML(), t.attachWidget(i), i
                }
                onVisibilityChange() {
                    const e = !(!this.widgetBar || !this.widgetBar.resizerBridge.visible.value());
                    this.visible = e, this.pages.forEach(t => {
                        t.onVisibilityChange(e)
                    })
                }
                destroy() {
                    var e, t, i, o, n, r;
                    this.widgetBar && this.widgetBar.layout === this && delete this.widgetBar.layout, this.tabRenderer && (this.tabRenderer.destroy(), this.tabRenderer = null), this._hider && l.unmountComponentAtNode(this._hider);
                    for (let e = this.pages.length; e--;) {
                        const t = this.pages[e];
                        for (let e = t.widgets.length; e--;) t.widgets[e].destroy()
                    }
                    null === (e = this._tabs) || void 0 === e || e.remove(), null === (t = this._pages) || void 0 === t || t.remove(), null === (i = this._pagescontent) || void 0 === i || i.remove(), null === (o = this._handle) || void 0 === o || o.remove(), null === (n = this._deviceButton) || void 0 === n || n.remove(), null === (r = this._hider) || void 0 === r || r.remove()
                }
                updateRightToolbar() {
                    var e;
                    null === (e = this.tabRenderer) || void 0 === e || e.updateOptions(this._rightToolbarOptions)
                }
                createHTML() {
                    const e = (0, n.ensureDefined)(this.widgetBar);
                    if (this._rightToolbar) {
                        const t = this._tabs = document.createElement("div");
                        if (t.classList.value = "widgetbar-tabs", this.$tabs = He(t), this.tabRenderer && (this.tabRenderer.destroy(), this.tabRenderer = null), this.tabRenderer = new Ne(e, t, this._rightToolbarOptions), e.adaptive) {
                            const t = this._deviceButton = (0, V.parseHtmlElement)(`\n\t\t<div class="${Z.widgetbarButton} js-hidden">\n\t\t\t${ee}\n\t\t</div>\n\t`);
                            t.addEventListener("click", () => {
                                e.resizerBridge.requestFullscreen(), (0, H.trackEvent)("Mobile", "Open right toolbar")
                            }), this.$deviceButton = He(t)
                        }
                    }
                    const t = this._pages = document.createElement("div");
                    t.classList.value = "widgetbar-pages";
                    const i = this._pagescontent = document.createElement("div");
                    i.classList.value = "widgetbar-pagescontent", t.appendChild(i), this._rightToolbar || (this._pages.style.right = "-1px");
                    const o = this._handle = document.createElement("div");
                    if (o.classList.value = "widgetbar-handle", t.appendChild(o),
                        o.addEventListener("contextmenu", e => {
                            e.target === o && e.preventDefault()
                        }), this._createDraggable(o), this.$pages = He(t), this.$pagescontent = He(i), this.$handle = He(o), e.showCloseButton) {
                        const e = this._hider = document.createElement("div");
                        e.classList.value = "widgetbar-hider", this.$hider = He(e);
                        const t = () => {
                            e.classList.toggle("widgetbar-hider--closed", this.isMinimized.value()), e.classList.toggle("js-hidden", this._rightToolbar && this.isMinimized.value()), l.render(a.createElement(Ue, {
                                isMinimized: this.isMinimized.value(),
                                onClick: () => {
                                    this.setMinimizedState(!this.minimized)
                                }
                            }), e)
                        };
                        this.isMinimized.subscribe(t), t()
                    }
                    this.pages.forEach(e => {
                        e.createHTML();
                        const t = e.element();
                        t && i.appendChild(t)
                    })
                }
                demarshal(e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    if ("object" != typeof e) return null;
                    this.width = Number(e.width), !isFinite(this.width) || this.width <= 0 ? this.width = We.width : this.width < this.MIN_WIDTH && (this.width = this.MIN_WIDTH), "minimized" in e ? (this.minimized = Boolean(e.minimized), this.isMinimized.setValue(this.minimized)) : (this.minimized = We.minimized, this.isMinimized.setValue(this.minimized)), "version" in e && (this.version = e.version);
                    let t = Number(e.activeIndex);
                    const i = e.activeName;
                    let o = !1;
                    const n = this.pages;
                    return n.splice(0, this.pages.length), Array.isArray(e.pages) && e.pages.forEach((e, r) => {
                        const s = new K({
                            widgetBarLayout: this
                        }).demarshal(e);
                        i ? e.name === i && s && (t = r, o = !0) : s || r !== t || t--, s && n.push(s)
                    }), i && !o && (t = 0), 0 === n.length ? (this.activeIndex = -1, this.activePageIndex.setValue(this.activeIndex)) : t >= 0 && t < n.length && (this.activeIndex = t, this.activePageIndex.setValue(this.activeIndex)), this
                }
                marshal() {
                    let e = [];
                    this.pages.forEach(t => {
                        const i = t.marshal();
                        i && (e = e.concat(i))
                    });
                    const t = {};
                    for (let i = 0; i < e.length; i++) {
                        const o = e[i].type;
                        o && (e[i].id && delete e[i].type, t[o] ? t[o].push(e[i]) : t[o] = [e[i]])
                    }
                    const i = {
                        widgets: t,
                        settings: {}
                    };
                    return this.minimized !== We.minimized && (i.settings.minimized = this.minimized), this.width !== We.width && (i.settings.width = this.width), this.activeIndex !== We.activeIndex && (i.settings.activeIndex = this.activeIndex), this.activeName !== We.activeName && (i.settings.activeName = this.activeName), this.version !== We.version && (i.settings.version = this.version), i
                }
                _createDraggable(e) {
                    null !== this._draggable && this._draggable.destroy();
                    const t = {
                        initialWidth: 0
                    };
                    this._draggable = new G.PointerBackend({
                        handle: e,
                        onDragStart: e => {
                            this.widgetBar ? t.initialWidth = Math.max(this.widgetBar.resizerBridge.width.value() - this.tabsWidth() - this.borderWidth(), 0) : e.preventDefault()
                        },
                        onDragMove: e => {
                            const {
                                current: i,
                                initial: o
                            } = e.detail, n = i.pageX - o.pageX;
                            let r = t.initialWidth - n;
                            r < this.MINIMIZE_THRESHOLD ? r = 0 : r < this.MIN_WIDTH && (r = this.MIN_WIDTH), r > 0 && (this.width = r), this.requestWidth(r)
                        },
                        onDragStop: e => {
                            this.widgetBar && this.widgetBar.saveToTVSettings()
                        }
                    })
                }
                _trackClick(e) {
                    switch (e) {
                        case "base":
                            (0, Q.trackButtonClick)("right panel", "watchlist");
                            break;
                        case "alerts":
                            (0, Q.trackButtonClick)("right panel", "alerts");
                            break;
                        case "news":
                            (0, Q.trackButtonClick)("right panel", "news");
                            break;
                        case "object_tree":
                            (0, Q.trackButtonClick)("right panel", "object tree");
                            break;
                        case "data-window":
                            (0,
                                Q.trackButtonClick)("right panel", "data window");
                            break;
                        case "hotlist":
                            (0, Q.trackButtonClick)("right panel", "hotlist");
                            break;
                        case "calendar":
                            (0, Q.trackButtonClick)("right panel", "calendar");
                            break;
                        case "notes":
                            (0, Q.trackButtonClick)("right panel", "my ideas");
                            break;
                        case "chats":
                            (0, Q.trackButtonClick)("right panel", "public chats");
                            break;
                        case "pm_chats":
                            (0, Q.trackButtonClick)("right panel", "private chats");
                            break;
                        case "ideas_stream":
                            (0, Q.trackButtonClick)("right panel", "ideas stream");
                            break;
                        case "streams":
                            (0, Q.trackButtonClick)("right panel", "streams");
                            break;
                        case "notifications":
                            (0, Q.trackButtonClick)("right panel", "notifications")
                    }
                }
            }
            We.width = 290, We.minimized = !Ve.enabled("show_right_widgets_panel_by_default"), We.activeIndex = 0, We.activeName = "", We.visible = !0, We.version = void 0;
            var ze = i(485139),
                Xe = i(42258),
                qe = i(198006),
                Ye = i(604346),
                Ge = i(677255),
                je = i(898388),
                $e = i(195754),
                Je = i(894255),
                Ke = i(918184);
            class Qe {
                constructor(e) {
                    this._wrap = null, this._tradingServiceCancelable = null, this.options = e, this._load = () => {};
                    const t = new Promise(e => {
                            this._load = e
                        }),
                        i = this.options.configuration;
                    this._configuration = Promise.race([(0, je.delay)(null, 5e3), t]).then(() => i()).then(e => {
                        const t = this.widgetConfig;
                        return t.reuters_calendar.ctor = e.ReutersCalendarWidget, t.earnings_calendar.ctor = e.CalendarWidget && e.CalendarWidget.Earnings, t.watchlist.ctor = e.Watchlist, t.hotlist.ctor = e.HotlistWidget, t.detail.ctor = e.Detail && e.Detail.Widget, t.news.ctor = e.NewsWidget, t.chat.ctor = e.ChatWidget, t.messages.ctor = e.Messages && e.Messages.Widget, t.messages_with_select.ctor = e.Messages && e.Messages.Widget, t.notifications_following.ctor = e.NotificationsWidgets, t.notifications_user.ctor = e.NotificationsWidgets, t.publicchats.ctor = e.PublicChatsWidget, t.publicchats_with_select.ctor = e.PublicChatsWidget, t.notes.ctor = e.NotesWidget, t.alerts_manage.ctor = e.AlertsManageWidget, t.alerts_log.ctor = e.AlertsLogWidget, t.streams.ctor = e.StreamsWidget, t.datawindow.ctor = e.DataWindowWidget, (0, n.ensure)(t.object_tree).ctor = e.ObjectTreeWidget, e
                    });
                    const r = this.resizerBridge = e.resizerBridge;
                    this.adaptive = Boolean(e.adaptive), this.tradingPanelAccessor = e.tradingPanelAccessor, this._visible = (0, s.combine)((e, t, i) => Boolean(e && t && i), r.width, r.height, r.visible), this.widgetConfig = (0, o.default)({}, D), e.widgetConfig && (this.widgetConfig = (0, o.default)(this.widgetConfig, e.widgetConfig)), this.layout = new We({
                            widgetBar: this,
                            rightToolbar: Ze()
                        }), this._customization = e.customization, e.chartWidgetCollection && (this.chartWidgetCollection = e.chartWidgetCollection), e.state ? this.layout.demarshal(e.state) : e.settingsPrefix && (this._settingsPrefix = String(e.settingsPrefix), this.loadFromTVSettings()), e.readonly && (this.readonly = !0), e.fixedMode && (this.fixedMode = !0), e.showCloseButton && (this.showCloseButton = !0), this._container = this.resizerBridge.container.value(), this.createHTML(), this.initLayout(), window.loginStateChange.subscribe(this, this.onLoginStateChange), this.resizerBridge.width.subscribe(() => {
                            var e;
                            null === (e = this.layout) || void 0 === e || e.syncWidth()
                        }), this.resizerBridge.height.subscribe(() => {
                            var e;
                            null === (e = this.layout) || void 0 === e || e.syncHeight()
                        }),
                        this.resizerBridge.visible.subscribe(() => {
                            var e;
                            null === (e = this.layout) || void 0 === e || e.onVisibilityChange()
                        }), this.resizerBridge.availWidth.subscribe(() => {
                            var e, t;
                            null === (e = this.layout) || void 0 === e || e.requestOptimalWidth(), null === (t = this.layout) || void 0 === t || t.updateResponsiveness()
                        }), this._tradingServiceCancelable = (0, ze.makeCancelable)((0, Xe.waitTradingService)()), this._tradingServiceCancelable.promise.then(e => {
                            this._tradingServiceCancelable = null, e.onConnectionStatusChange.subscribe(this, this._onBrokerConnectionStatusChanged)
                        })
                }
                destroy() {
                    if (null !== this._tradingServiceCancelable) this._tradingServiceCancelable.cancel(), this._tradingServiceCancelable = null;
                    else {
                        (0, n.ensureNotNull)((0, Xe.tradingService)()).onConnectionStatusChange.unsubscribe(this, this._onBrokerConnectionStatusChanged)
                    }
                }
                widget(e) {
                    return this.layout ? this.layout.widget(e) : null
                }
                isVisible() {
                    const e = this.resizerBridge;
                    return Boolean(e.visible.value() && e.height.value() && e.width.value())
                }
                visible() {
                    return this._visible
                }
                initLayout() {
                    var e;
                    this.options.instantLoad && this._load(), this.layout && (this._configuration.then(() => {
                        var e;
                        null === (e = this.layout) || void 0 === e || e.startWidgets()
                    }), 0 === this.layout.pages.length && (this.layout.setMinimizedState(!0), null === (e = this.layout.element("handle")) || void 0 === e || e.classList.add("js-hidden")), this.layout.requestOptimalWidth(), this.layout.syncWidth(), this.layout.syncHeight(), this.layout.onVisibilityChange(), this.layout.updateResponsiveness())
                }
                loadWidgets() {
                    this._widgetsLoadRequested || (this._widgetsLoadRequested = !0, this._load())
                }
                onLoginStateChange(e) {
                    e || window.is_authenticated && (this.dropWidgetData(), this.refreshFromTVSettings())
                }
                dropWidgetData() {
                    for (const e in this.widgetConfig) delete(0, n.ensure)(this.widgetConfig[e]).data
                }
                refreshFromTVSettings() {
                    var e, t, i;
                    if (!this._settingsPrefix) return;
                    this.layout && this.layout.destroy(), this.layout = new We({
                        widgetBar: this,
                        rightToolbar: Ze()
                    }), this.loadFromTVSettings(), this.layout.createHTML();
                    const o = this.layout.element("pages");
                    o && (null === (e = this._wrap) || void 0 === e || e.appendChild(o));
                    const n = this.layout.element("tabs");
                    n && (null === (t = this._wrap) || void 0 === t || t.appendChild(n));
                    const r = this.layout.element("hider");
                    r && (null === (i = this._wrap) || void 0 === i || i.appendChild(r)), this.initLayout()
                }
                getWidgets(e) {
                    let t = [];
                    if (!this.layout) return t;
                    for (let i = 0; i < this.layout.pages.length; ++i) t = t.concat(this.layout.pages[i].getWidgets(e));
                    return t
                }
                loadFromTVSettings() {
                    if (!this._settingsPrefix) return;
                    if (!this.layout) return;
                    let e = this.getLayoutState();
                    e = this.mergeProperties(e), this.layout.demarshal(e), this.saveToTVSettings();
                    const t = this._getSerializedStateFromSetting();
                    if (t) {
                        let e = [];
                        for (const i in t.widgets) {
                            const o = t.widgets[i];
                            e = e.concat(o.map(e => e.id))
                        }
                        const i = W.keysMask(this._settingsPrefix + ".widget.*.*");
                        i && i.forEach(t => {
                            const i = t.replace(this._settingsPrefix + ".widget.", ""); - 1 === e.indexOf(i) && 0 === t.indexOf(this._settingsPrefix + ".widget.") && ((0, H.trackEvent)("Settings debug", "loadFromTVSettings: " + t, window.user.username), W.remove(t))
                        })
                    }
                }
                mergeProperties(e) {
                    const t = this._getSerializedStateFromSetting();
                    if (!t) return e;
                    t.settings && Object.assign(e, t.settings);
                    const i = {};
                    for (let o = 0; o < e.pages.length; o++)
                        for (let n = 0; n < e.pages[o].widgets.length; n++) {
                            const r = e.pages[o].widgets[n],
                                s = i[r.type] || 0;
                            t.widgets[r.type] && t.widgets[r.type][s] && Object.assign(r, t.widgets[r.type][s]), i[r.type] = s + 1
                        }
                    return e
                }
                saveToTVSettings() {
                    if (!this._settingsPrefix) return;
                    if (!this.layout) return;
                    const e = this.layout.marshal();
                    this._setSerializedStateToSettings(e)
                }
                getWidgetProperties(e, t = 0) {
                    const i = (0, n.ensure)(this._settingsPrefix).replace(/\W/g, "\\$&") + ".widget.";
                    let o = W.keysMask(i + e + ".*");
                    return o && o.length && (o = o.sort(), o[t]) ? {
                        id: o[t].replace(i, "")
                    } : null
                }
                getGenericLayoutState(e) {
                    const t = (0, Ge.getDefaultState)(),
                        o = (0, qe.isFeatureEnabled)("news_separate_tab_enabled"),
                        n = (0, Ye.getInitData)().streams_enabled,
                        s = {
                            type: "news"
                        },
                        a = [{
                            _gaEvent: "General Widget",
                            title: o ? (0, r.t)("Watchlist and details") : (0, r.t)("Watchlist, details and news"),
                            name: "base",
                            icon: "base",
                            widgets: [{
                                type: "watchlist",
                                properties: e && e.length ? {
                                    list: e
                                } : void 0
                            }, {
                                type: "detail"
                            }, { ...s,
                                isEnabled: !o
                            }]
                        }, Ve.enabled("alerts") ? {
                            _gaEvent: "Alerts",
                            title: (0, r.t)("Alerts"),
                            name: "alerts",
                            icon: "alarm-clock",
                            widgets: [{
                                type: "alerts_manage",
                                properties: {}
                            }, {
                                type: "alerts_log",
                                properties: {}
                            }]
                        } : null, o ? {
                            _gaEvent: "News",
                            title: (0, r.t)("News"),
                            name: "news",
                            icon: "news",
                            widgets: [s]
                        } : null, this.chartWidgetCollection && !this.chartWidgetCollection.readOnly() ? {
                            _gaEvent: "Object tree",
                            title: (0, r.t)("Object tree. Multi-select drawings tools"),
                            name: "object_tree",
                            icon: "object-tree",
                            onBottom: !0,
                            widgets: [{
                                type: "object_tree"
                            }]
                        } : null, {
                            _gaEvent: "Data Window",
                            title: (0, r.t)("Data Window"),
                            name: "data-window",
                            icon: "datawindow",
                            widgets: [{
                                type: "datawindow"
                            }]
                        }, {
                            _gaEvent: "Hotlists",
                            title: (0, r.t)("Hotlists"),
                            name: "hotlist",
                            icon: "hotlists",
                            widgets: [{
                                type: "hotlist",
                                properties: {
                                    group: "volume_gainers"
                                }
                            }, {
                                type: "hotlist",
                                properties: {
                                    group: "percent_change_gainers"
                                }
                            }, {
                                type: "hotlist",
                                properties: {
                                    group: "percent_change_loosers"
                                }
                            }]
                        }, {
                            _gaEvent: "Calendar",
                            title: (0, r.t)("Calendar"),
                            name: "calendar",
                            icon: "calendar",
                            widgets: [{
                                type: "reuters_calendar",
                                properties: {}
                            }, {
                                type: "earnings_calendar",
                                properties: {}
                            }]
                        }, {
                            _gaEvent: "My Ideas",
                            title: (0, r.t)("My Ideas"),
                            name: "notes",
                            icon: "notes",
                            spaceBottom: !0,
                            spaceBottomText: (0, r.t)("Social"),
                            widgets: [{
                                type: "notes"
                            }]
                        }, {
                            _gaEvent: "Public Chats",
                            title: (0, r.t)("Public Chats"),
                            name: "chats",
                            icon: "chat",
                            widgets: [{
                                type: "chat"
                            }, {
                                type: "publicchats"
                            }]
                        }, {
                            _gaEvent: "Private Chats",
                            title: (0, r.t)("Private Chats"),
                            name: "pm_chats",
                            icon: "messages",
                            widgets: [{
                                type: "messages"
                            }]
                        }, {
                            _gaEvent: "Ideas Stream",
                            title: (0, r.t)("Ideas Stream"),
                            name: "ideas_stream",
                            icon: "ideas-stream",
                            widgets: [{
                                type: "notifications_following"
                            }]
                        }, n ? {
                            _gaEvent: "Streams",
                            title: (0, r.t)("Streams"),
                            name: "streams",
                            icon: "streams",
                            widgets: [{
                                type: "streams"
                            }],
                            TabButtonComponent: i(535458).StreamsTabButton
                        } : null, {
                            _gaEvent: "Notifications",
                            title: (0, r.t)("Notifications"),
                            name: "notifications",
                            icon: "notifications",
                            widgets: [{
                                type: "notifications_user"
                            }]
                        }];
                    for (let e = 0; e < a.length; e++) {
                        const i = a[e];
                        i && t.pages.push(i)
                    }
                    return t
                }
                getChartingPlatformLayoutState(e, t) {
                    const i = (0, Ge.getDefaultState)();
                    if (this._customization.watchlist || this._customization.details || this._customization.news) {
                        let o = "";
                        const n = [];
                        this._customization.watchlist && (o = (0, r.t)("Watchlist"), n.push({
                            type: "watchlist",
                            id: "watchlist." + t,
                            properties: e && e.length ? {
                                list: e
                            } : void 0
                        })), this._customization.details && (o = this._customization.watchlist ? (0, r.t)("Watchlist and details") : (0, r.t)("Details"), n.push({
                            type: "detail"
                        })), this._customization.news && (o = this._customization.watchlist && this._customization.details ? (0, r.t)("Watchlist and details and news") : this._customization.watchlist ? (0, r.t)("Watchlist and news") : (0, r.t)("News"), n.push({
                            type: "news",
                            id: "news." + t
                        })), i.pages.push({
                            name: "base",
                            title: o,
                            icon: "base",
                            widgets: n
                        })
                    }
                    return this._customization.datawindow && i.pages.push({
                        title: (0, r.t)("Data Window"),
                        name: "data-window",
                        icon: "datawindow",
                        widgets: [{
                            type: "datawindow"
                        }]
                    }), Ve.enabled("show_object_tree") && this.chartWidgetCollection && !this.chartWidgetCollection.readOnly() && i.pages.push({
                        title: (0, r.t)("Show Object tree"),
                        name: "object_tree",
                        icon: "object-tree",
                        onBottom: !0,
                        widgets: [{
                            type: "object_tree"
                        }]
                    }), i
                }
                getLayoutState() {
                    const e = W.getJSON("watchlist.list", []);
                    let t;
                    t = Ve.enabled("trading_terminal") ? this.getChartingPlatformLayoutState(e, "terminal") : this.getGenericLayoutState(e);
                    const i = e => !(void 0 !== e.isEnabled && !e.isEnabled) && (this.chartWidgetCollection || !(0, n.ensure)(D[e.type]).chartWidgetRequired);
                    for (let e = t.pages.length - 1; e >= 0; e--) {
                        const o = t.pages[e];
                        o.widgets = o.widgets.filter(i)
                    }
                    return t.pages = t.pages.filter(e => e.widgets && e.widgets.length), t
                }
                createWidgetId(e) {
                    return e + "." + (0, Y.randomHash)()
                }
                setPage(e) {
                    if (!this.layout) return null;
                    this.layout.setMinimizedState(!1);
                    let t = this.layout.activeIndex;
                    return this.layout.pages.forEach((i, o) => {
                        i.name === e && (t = o)
                    }), this.layout.switchPage(t), this.layout.getActivePage()
                }
                ensureSupportTicketButtonViewModel() {
                    return this._supportTicketButtonViewModel || (this._supportTicketButtonViewModel = new h({
                        icon: $e,
                        hint: (0, r.t)("Help Center"),
                        onClick: () => {
                            (0, Q.trackButtonClick)("right panel", "help center"), this._configuration.then(e => {
                                const t = e.showSupportDialog;
                                t && t()
                            }), this._load()
                        }
                    })), this._supportTicketButtonViewModel
                }
                ensureHelpButtonViewModel() {
                    if (this._helpButtonViewModel) return this._helpButtonViewModel;
                    const e = this.ensureSupportTicketButtonViewModel();
                    return this._helpButtonViewModel = new h({
                        icon: Je,
                        hint: (0, r.t)("Help Center"),
                        onClick: e.onClick.value()
                    }), this._helpButtonViewModel
                }
                createHTML() {
                    const e = this._container;
                    if (!e) return;
                    if (!this.layout) return;
                    e.innerHTML = "", this.layout.createHTML();
                    const t = this._wrap = document.createElement("div");
                    t.classList.value = "widgetbar-wrap unselectable js-right-boundary", e.appendChild(t), this.$wrap = Ke(t);
                    const i = this.layout.element("pages");
                    i && this._wrap.appendChild(i);
                    const o = this.layout.element("tabs");
                    Ze() && o && this._wrap.appendChild(o);
                    const n = this.layout.element("device-button");
                    n && this._wrap.appendChild(n);
                    const r = this.layout.element("hider");
                    r && this._wrap.appendChild(r)
                }
                _getSerializedStateFromSetting() {
                    return this._settingsPrefix ? W.getJSON(this._settingsPrefix + ".layout-settings", null) : null
                }
                _setSerializedStateToSettings(e) {
                    this._settingsPrefix && W.setJSON(this._settingsPrefix + ".layout-settings", e)
                }
                _onBrokerConnectionStatusChanged() {
                    var e;
                    null === (e = this.layout) || void 0 === e || e.updateRightToolbar()
                }
            }

            function Ze() {
                return Ve.enabled("right_toolbar")
            }
        },
        596010: (e, t, i) => {
            "use strict";
            i.d(t, {
                AuthToken: () => l
            });
            var o = i(896276),
                n = i.n(o),
                r = i(987380),
                s = i(685864);
            const a = (0, r.getLogger)("ChartApi.AuthToken", {
                color: "#173"
            });
            class l {
                constructor() {
                    this.invalidated = new(n()), this._tid = 0, window.loginStateChange || (window.loginStateChange = new(n())), window.loginStateChange.subscribe(this, e => {
                        e || (this._set(window.user.auth_token), this.invalidated.fire())
                    }), this._set(window.user.auth_token)
                }
                get(e) {
                    return window.is_authenticated ? !e && performance.now() < this._cache.validThru ? (a.logInfo("Using cached token " + this._cache.token), Promise.resolve(this._cache.token)) : this._fetch(Boolean(e), 0).then(e => {
                        if (!window.is_authenticated) throw new Error("User logged out while the request was in flight");
                        return this._set(e), e
                    }).catch(e => (a.logError("Error fetching new token: " + (e && e.message)), "")) : Promise.resolve("")
                }
                reset() {
                    this._set(void 0), this.invalidated.fire()
                }
                _set(e) {
                    if (window.is_authenticated && void 0 !== e) {
                        const t = function(e) {
                            if ("" === e) return 144e5;
                            try {
                                const t = JSON.parse(atob(e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))),
                                    i = 1e3 * (t.exp - t.iat);
                                if (!isFinite(i)) throw new Error("invalid expiration");
                                return Math.max(i - 3e5, 3e5)
                            } catch (t) {
                                return a.logError(`${e} is invalid: ${t.message}`), 144e5
                            }
                        }(e);
                        this._cache = {
                            token: e,
                            validThru: performance.now() + t
                        }, clearTimeout(this._tid), this._tid = setTimeout(() => this.reset(), t), a.logInfo(`Cached for ${t} ms: ${e}`)
                    } else this._cache = {
                        token: "",
                        validThru: -1 / 0
                    }, clearTimeout(this._tid), a.logInfo("Cache dropped")
                }
                _fetch(e, t) {
                    return a.logNormal("Fetching a new token, grabSession=" + e), (0, s.fetch)("/quote_token/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: e ? "grabSession=true" : ""
                    }).then(e => {
                        if (!e.ok) throw new Error("Response status is not ok: " + e.status);
                        return e.json().then(String)
                    }, i => {
                        if (t >= 3) throw i;
                        return a.logWarn("Request failed, will retry"),
                            function(e) {
                                return new Promise(t => setTimeout(t, 1e3 * e))
                            }(t).then(() => this._fetch(e, t + 1))
                    })
                }
            }
        },
        878087: (e, t, i) => {
            "use strict";
            var o = i(331565).declareClassAsPureInterface;

            function n() {}
            TradingView.WEB_SOCKET_WAS_CONNECTED = !1, n.REBIND_STUDY_STANDALONE_TO_CHILD = 1, n.REBIND_STUDY_CHILD_TO_STANDALONE = 2, n.prototype.defaultWatchlistSymbols = function() {}, n.prototype.defaultResolutions = function() {}, n.prototype.availableCurrencies = function() {}, n.prototype.availableUnits = function() {}, n.prototype.supportedSymbolsTypes = function() {}, n.prototype.supportedExchangesList = function() {}, n.prototype.symbolsGrouping = function() {}, n.prototype.quoteCreateSession = function(e) {}, n.prototype.quoteDeleteSession = function(e) {}, n.prototype.quoteSetFields = function(e, t) {}, n.prototype.quoteAddSymbols = function(e, t) {}, n.prototype.quoteRemoveSymbols = function(e, t) {}, n.prototype.quoteFastSymbols = function(e, t) {}, n.prototype.depthCreateSession = function(e, t, i) {},
                n.prototype.depthDeleteSession = function(e) {}, n.prototype.depthSetSymbol = function(e, t) {}, n.prototype.depthClearSymbol = function(e) {}, n.prototype.depthSetScale = function(e, t) {}, n.prototype.chartCreateSession = function(e, t) {}, n.prototype.chartDeleteSession = function(e) {}, n.prototype.createSession = function(e, t) {}, n.prototype.removeSession = function(e) {}, n.prototype.connected = function() {}, n.prototype.connect = function() {}, n.prototype.disconnect = function() {}, n.prototype.switchTimezone = function(e, t) {}, n.prototype.resolveSymbol = function(e, t, i, o) {}, n.prototype.createSeries = function(e, t, i, o, n, r, s, a) {}, n.prototype.removeSeries = function(e, t, i) {}, n.prototype.modifySeries = function(e, t, i, o, n, r, s) {}, n.prototype.requestMoreData = function(e, t, i, o) {}, n.prototype.requestMetadata = function(e, t, i) {}, n.prototype.isCanCreateStudy = function(e, t) {}, n.prototype.createStudy = function(e, t, i, o, n, r, s) {}, n.prototype.rebindStudy = function(e, t, i, o, n, r, s, a) {}, n.prototype.removeStudy = function(e, t, i) {}, n.prototype.modifyStudy = function(e, t, i, o, n) {}, n.prototype.createPointset = function(e, t, i, o, n, r, s) {}, n.prototype.modifyPointset = function(e, t, i, o, n) {}, n.prototype.removePointset = function(e, t, i) {}, n.prototype.requestMoreTickmarks = function(e, t, i, o) {}, n.prototype.requestFirstBarTime = function(e, t, i, o) {}, n.prototype._invokeHandler = function(e, t) {}, n.prototype._sendRequest = function(e, t) {}, n.prototype._onMessage = function(e) {}, n.prototype._dispathNotification = function(e) {}, n.prototype._invokeNotificationHandler = function(e, t, i) {}, n.prototype._notifySessions = function(e) {}, n.prototype.unpack = function(e) {}, n.prototype.searchSymbols = function(e, t, i, o, n, r, s, a, l, c) {}, n.prototype.serverTimeOffset = function() {}, n.prototype.getMarks = function(e, t, i, o, n) {}, n.prototype.getTimescaleMarks = function(e, t, i, o, n) {}, o(n, "ChartApiInterface"), e.exports.HandlerInfo = function(e, t) {
                    this.handler = e, this.customId = t
                }, e.exports.ChartApiInterface = n
        },
        135582: e => {
            "use strict";
            e.exports = function() {
                this.set_broker = function(e) {
                        return [e]
                    }, this.set_data_quality = function() {
                        return ["low"]
                    }, this.quote_create_session = function(e) {
                        return [e]
                    }, this.quote_delete_session = function(e) {
                        return [e]
                    }, this.quote_set_fields = function(e, t) {
                        return [e].concat(t)
                    }, this.quote_add_symbols = function(e, t) {
                        return [e].concat(t)
                    }, this.quote_remove_symbols = function(e, t) {
                        return [e].concat(t)
                    }, this.quote_fast_symbols = function(e, t) {
                        return [e].concat(t)
                    }, this.quote_hibernate_all = function(e) {
                        return [e]
                    }, this.depth_create_session = function(e, t, i) {
                        return [e, t, i]
                    }, this.depth_delete_session = function(e) {
                        return [e]
                    }, this.depth_set_symbol = function(e, t) {
                        return [e, t]
                    }, this.depth_clear_symbol = function(e) {
                        return [e]
                    }, this.depth_set_scale = function(e, t) {
                        return [e, t]
                    }, this.chart_create_session = function(e, t) {
                        return [e, t ? "disable_statistics" : ""]
                    }, this.chart_delete_session = function(e) {
                        return [e]
                    }, this.set_auth_token = function(e) {
                        return [e]
                    }, this.switch_timezone = function(e, t) {
                        return [e, t]
                    }, this.resolve_symbol = function(e, t, i) {
                        return [e, t, i]
                    }, this.create_series = function(e, t, i, o, n, r, s) {
                        return [e, t, i = i || "", o, n, r, s]
                    }, this.remove_series = function(e, t) {
                        return [e, t]
                    },
                    this.modify_series = function(e, t, i, o, n, r) {
                        return [e, t, i = i || "", o, n, r]
                    }, this.request_more_data = function(e, t, i) {
                        return [e, t, i]
                    }, this.request_studies_metadata = function(e, t) {
                        return [e, t]
                    }, this.create_study = function(e, t, i, o, n, r) {
                        return [e, t, i = i || "", o, n].concat(r)
                    }, this.create_child_study = function(e, t, i, o, n, r) {
                        return this.create_study(e, t, i, o, n, r)
                    }, this.child_study_rebind = function(e, t, i, o, n, r) {
                        return [e, t, i = i || "", o, n].concat(r)
                    }, this.remove_study = function(e, t) {
                        return [e, t]
                    }, this.modify_study = function(e, t, i, o) {
                        return [e, t, i = i || ""].concat(o)
                    }, this.create_pointset = function(e, t, i, o, n, r) {
                        return [e, t, i = i || "", o, n].concat(r)
                    }, this.modify_pointset = function(e, t, i, o) {
                        return [e, t, i = i || ""].concat(o)
                    }, this.remove_pointset = function(e, t) {
                        return [e, t]
                    }, this.request_more_tickmarks = function(e, t, i) {
                        return [e, t, i]
                    }, this.get_first_bar_time = function(e, t, i) {
                        return [e, t, i]
                    }, this.replay_create_session = function(e) {
                        return [e]
                    }, this.replay_delete_session = function(e) {
                        return [e]
                    }, this.replay_reset = function(e, t, i) {
                        return [e, t, i]
                    }, this.replay_start = function(e, t, i) {
                        return [e, t, i]
                    }, this.replay_stop = function(e, t) {
                        return [e, t]
                    }, this.replay_step = function(e, t, i) {
                        return [e, t, i]
                    }, this.replay_add_series = function(e, t, i, o) {
                        return [e, t, i, o]
                    }, this.replay_remove_series = function(e, t, i, o) {
                        return [e, t, i, o]
                    }, this.replay_set_resolution = function(e, t, i) {
                        return [e, t, i]
                    }, this.convertTimescaleResponse = function(e) {
                        for (var t = e.marks, i = 0; i < t.length; ++i) t[i] = {
                            span: t[i][0],
                            time: t[i][1],
                            index: t[i][2]
                        };
                        if (void 0 !== e.index_diff) {
                            var o = e.index_diff;
                            for (i = 0; i < o.length; ++i) o[i] = {
                                old: o[i][0],
                                new: o[i][1]
                            }
                        } else e.index_diff = [];
                        return e
                    };
                var e = this;
                this.getDataUpdateObjects = function(t) {
                    return e.getTimescaleObjects(t)
                }, this.getTimescaleObjects = function(e) {
                    return e.params[0]
                }, this.getTimescaleChangeset = function(e) {
                    return e.params[1]
                }, this.prepareDataUpdateObjects = function(e, t, i) {
                    for (var o in t) {
                        var n = t[o],
                            r = {};
                        for (var s in r.customId = o, r.turnaround = n.turnaround, r.plots = n.series ? n.series : n.plots, n.ns && (r.nonseries = n.ns), n.lbs && (r.lastBar = {
                                closeTime: n.lbs.bar_close_time
                            }), r.plots)
                            for (var a in r.plots[s].value) 1e100 === r.plots[s].value[a] && (r.plots[s].value[a] = void 0);
                        i(e, o, {
                            method: "data_update",
                            params: r
                        })
                    }
                }, this.unpack = function(e) {
                    var t, i;

                    function o(e) {
                        return e.index = e.i, e.value = e.v, delete e.i, delete e.v, e
                    }

                    function n(e) {
                        for (i in e) e[i].t && (e[i].turnaround = e[i].t), e[i].s && !e[i].series && (e[i].series = e[i].s.map(o)), e[i].st && !e[i].series && (e[i].series = e[i].st.map(o))
                    }
                    switch ((e = JSON.parse(e)).m && e.p && (e.method = e.m, e.params = e.p, e.time = e.t), t = e.params[1], e.method) {
                        case "qsd":
                            e.method = "quote_symbol_data", t.symbolname = t.n, t.status = t.s, t.values = t.v, t.values.change = t.v.ch, t.values.last_price = t.v.lp, t.values.change_percent = t.v.chp, delete t.n, delete t.s, delete t.v, delete t.values.ch, delete t.values.lp, delete t.values.chp;
                            break;
                        case "du":
                            e.method = "data_update", n(t);
                            break;
                        case "clear_data":
                            for (i in t) t[i].turnaround = t[i].t;
                            break;
                        case "timescale_update":
                            n(t)
                    }
                    return e
                }, this.prepareEncodeMessage = function(e, t) {
                    return JSON.stringify({
                        m: e,
                        p: t
                    })
                }
            }
        },
        100757: (e, t, i) => {
            "use strict";
            e = i.nmd(e);
            var o = !1,
                n = !1,
                r = !1,
                s = i(406450).showTooManyStudiesNotice,
                a = i(878087),
                l = a.ChartApiInterface,
                c = a.HandlerInfo,
                d = i(596010).AuthToken,
                u = i(11767),
                h = i(110164).telemetry,
                p = i(135582),
                g = i(307833),
                m = i(156598);
            i(692491);
            var _ = i(903851).enabled,
                f = i(903851).getConfig,
                v = i(305803).ProductFeatures,
                w = i(331565).requireFullInterfaceImplementation,
                y = i(198006).isFeatureEnabled,
                b = i(75443).randomHash,
                S = i(895612).ResponseMethods,
                T = i(987380),
                E = T.getLogger("ChartApi.Core", {
                    color: "#706"
                }),
                C = T.getLogger("ChartApi.ChartSession", {
                    color: "#706"
                }),
                A = T.getLogger("ChartApi.ChartSession", {
                    highRate: !0,
                    maxCount: 100,
                    color: "#706"
                }),
                I = T.getLogger("ChartApi.ChartSession", {
                    maxCount: 0,
                    color: "#706"
                }),
                k = T.getLogger("ChartApi.ChartSession", {
                    maxCount: 50,
                    color: "#706"
                }),
                L = T.getLogger("ChartApi.QuoteSession", {
                    maxCount: 50,
                    color: "#660"
                }),
                P = T.getLogger("ChartApi.QuoteSession", {
                    highRate: !0,
                    maxCount: 10,
                    color: "#660"
                }),
                x = T.getLogger("ChartApi.TrafficMeter", {
                    maxCount: 20,
                    color: "#268"
                }),
                D = i(693175),
                N = i(865255).exchanges,
                M = i(36254),
                B = i(336757).errorToString,
                O = i(685864).fetch,
                R = i(62972),
                F = i(25143).TIMEFRAMETYPE,
                {
                    getLogoUrlResolver: U,
                    LogoSize: V
                } = i(372777),
                H = y("broker_id_session");

            function W(e) {
                function t(e) {
                    if (0 === e) return "0";
                    var t = parseInt(Math.floor(Math.log(e) / Math.log(1024)));
                    return Math.round(e / Math.pow(1024, t), 2) + ["", "KB", "MB", "GB", "TB"][t]
                }
                this._isAuthTokenLoaded = !1, this._authTokenDfd = null, this._notificationHandlers = {}, this._sessions = {}, this._dataHandleModule = new p, this.studyCounter = 0, this.childStudyCounter = 0, this._sendingQueuedRequestsCount = 0, this._pendingMessagesQueue = [], this._brokerId = "", this._serverTimeOffset = 0, this._serverTimeBasePoint = Date.now() - performance.now(), this._trafficStats = {
                    total: 0,
                    sinceConnect: 0,
                    lastChunk: 0
                }, this._wsBackendConnection = e, this._wsBackendConnection.onReconnect(this._bindSocketEvents.bind(this)), this._wsBackendConnection.setLogger(E, T.getLogHistory), this._wsBackendConnection.setTelemetry(h), this._bindSocketEvents(), this._lowQualityEnabled = !1, this._turnaroundPrefix = b(), this._turnaroundIndex = 0, setInterval(function() {
                    x.logNormal("Last 30 seconds:" + t(this._trafficStats.lastChunk) + " Since last connect:" + t(this._trafficStats.sinceConnect) + " Total traffic:" + t(this._trafficStats.total)), this._trafficStats.lastChunk = 0
                }.bind(this), 3e4)
            }
            W.prototype.defaultWatchlistSymbols = function() {
                var e = D[window.locale];
                return void 0 === e && (e = D.default), e
            }, W.prototype.defaultResolutions = function() {
                var e = ["1", "3", "5", "15", "30", "45", "60", "120", "180", "240", "1D", "1W", "1M", "1000R", "100R", "10R", "1R"];
                if (!g.enabled("widget")) {
                    return ["1S", "5S", "15S", "30S"].concat(e)
                }
                return e
            };
            var z = null;

            function X() {
                if (null === z) {
                    const e = document.querySelector('link[rel~="conversions-config"]'),
                        t = new URL(e.href);
                    z = O(t.toString(), {
                        method: "GET"
                    }).then((function(e) {
                        if (!e.ok) throw new Error("Response status is not success");
                        return e.json()
                    })).then(e => {
                        const t = U();
                        return e.currencies.forEach(e => {
                            void 0 !== e.logoid && (e.logoUrl = t.getSymbolLogoUrl(e.logoid, V.Medium))
                        }), e
                    })
                }
                return z
            }

            function q(e) {
                if (null === e) return "";
                if (e.type === F.PeriodBack) {
                    var t = e.value;
                    return "YTD" !== t && "D" === t.slice(-1) && (t = t.slice(0, -1)), t
                }
                return "r," + e.from + ":" + e.to
            }
            W.prototype.availableCurrencies = function() {
                return X().then(e => e.currencies)
            }, W.prototype.availableUnits = function() {
                return X().then(e => {
                    const t = {};
                    for (const i of e.units) t[i.type] || (t[i.type] = []), t[i.type].push(i);
                    return t
                })
            }, W.prototype.supportedSymbolsTypes = function() {
                return "bovespa" === TradingView.widgetCustomer ? M.filter((function(e) {
                    return -1 !== ["", "stock", "futures", "index"].indexOf(e.value)
                })) : "cme" === TradingView.widgetCustomer ? M.filter((function(e) {
                    return e.value !== m.types.QUANDL
                })) : M
            }, W.prototype.supportedExchangesList = function() {
                return N
            }, W.prototype.symbolsGrouping = function() {
                return {
                    futures: /^(.+?)([12]!|\w\d{4})?$/
                }
            }, W.prototype.enableLowQualityMode = function() {
                this._lowQualityEnabled = !0, this._sendLowQualityModeIfEnabled()
            }, W.prototype._sendLowQualityModeIfEnabled = function() {
                this._lowQualityEnabled && this.connected() && this._sendRequest("set_data_quality", [])
            }, W.prototype.setLoadNew = function(e) {
                this._loadNewBars = !!e
            }, W.prototype.quoteCreateSession = function(e) {
                return this._sendRequest("quote_create_session", [e])
            }, W.prototype.quoteDeleteSession = function(e) {
                return this._sendRequest("quote_delete_session", [e])
            }, W.prototype.quoteSetFields = function(e, t) {
                return this._sendRequest("quote_set_fields", [e, t])
            }, W.prototype.quoteAddSymbols = function(e, t) {
                return this._sendRequest("quote_add_symbols", [e, t])
            }, W.prototype.quoteRemoveSymbols = function(e, t) {
                return this._sendRequest("quote_remove_symbols", [e, t])
            }, W.prototype.quoteFastSymbols = function(e, t) {
                return this._sendRequest("quote_fast_symbols", [e, t])
            }, W.prototype.quoteHibernateAll = function(e) {
                return this._sendRequest("quote_hibernate_all", [e])
            }, W.prototype.depthCreateSession = function(e, t, i) {
                return this._sendRequest("depth_create_session", [e, t, i])
            }, W.prototype.depthDeleteSession = function(e) {
                return this._sendRequest("depth_delete_session", [e])
            }, W.prototype.depthSetSymbol = function(e, t) {
                return this._sendRequest("depth_set_symbol", [e, t])
            }, W.prototype.depthClearSymbol = function(e) {
                return this._sendRequest("depth_clear_symbol", [e])
            }, W.prototype.depthSetScale = function(e, t) {
                return this._sendRequest("depth_set_scale", [e, t])
            }, W.prototype.chartCreateSession = function(e, t) {
                return this._sendRequest("chart_create_session", [e, t])
            }, W.prototype.chartDeleteSession = function(e) {
                return this._sendRequest("chart_delete_session", [e])
            }, W.prototype.createSession = function(e, t) {
                this._sessions[e] = t, this._notificationHandlers[e] = {}, this.connected() && this._isAuthTokenLoaded && t.onMessage({
                    method: "connected",
                    params: []
                })
            }, W.prototype.removeSession = function(e) {
                delete this._sessions[e], delete this._notificationHandlers[e]
            }, W.prototype.connected = function() {
                return !!this._isConnected
            }, W.prototype._bindSocketEvents = function() {
                var e = this;
                this.connectDfd = new Promise((function(t, i) {
                    e._wsBackendConnection.on("connect", (function() {
                        e._onConnect(), t()
                    })), e._wsBackendConnection.on("message", e._onMessage.bind(e)), e._wsBackendConnection.on("disconnect", (function() {
                        e._authTokenDfd && (e._authTokenDfd = null), delete e._isConnected, e.studyCounter = 0,
                            e._notifySessions({
                                method: "disconnected",
                                params: []
                            }), delete e._metadataCallback, e._disconnectCount = (e._disconnectCount || 0) + 1, e._wsBackendConnection.isConnected() && (e._telemetryDisconnectTimeout = setTimeout((function() {
                                h.sendChartReport("disconnect")
                            }), 5e3), e._wsBackendConnection.isMaxReconnects() && (e._notifySessions({
                                method: "reconnect_bailout",
                                params: []
                            }), i(), h.sendChartReport("reconnect_bailout")))
                    }))
                }))
            }, W.prototype.setBroker = function(e) {
                return e === this._brokerId || (this._brokerId = e, this._sendBrokerIdToSession(this._brokerId))
            }, W.prototype.serverTimeOffset = function() {
                return this._serverTimeOffset
            }, W.prototype.serverTime = function() {
                return Math.round(this._serverTimeBasePoint + performance.now())
            }, W.disconnectReason = function(e) {
                return 1e3 === e ? "Normal closure, meaning that the purpose for which the connection was established has been fulfilled." : 1001 === e ? 'An endpoint is "going away", such as a server going down or a browser having navigated away from a page.' : 1002 === e ? "An endpoint is terminating the connection due to a protocol error" : 1003 === e ? "An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message)." : 1004 === e ? "Reserved. The specific meaning might be defined in the future." : 1005 === e ? "No status code was actually present." : 1006 === e ? "The connection was closed abnormally, e.g., without sending or receiving a Close control frame" : 1007 === e ? "An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [http://tools.ietf.org/html/rfc3629] data within a text message)." : 1008 === e ? 'An endpoint is terminating the connection because it has received a message that "violates its policy". This reason is given either if there is no other sutible reason, or if there is a need to hide specific details about the policy.' : 1009 === e ? "An endpoint is terminating the connection because it has received a message that is too big for it to process." : 1010 === e ? "An endpoint (client) is terminating the connection because it has expected the server to negotiate one or more extension, but the server didn't return them in the response message of the WebSocket handshake. <br /> Specifically, the extensions that are needed are: " + event.reason : 1011 === e ? "A server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request." : 1015 === e ? "The connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)." : "Unknown reason"
            }, W.prototype._sendBrokerIdToSession = function(e) {
                return !H || this._sendRequest("set_broker", [e])
            }, W.prototype._getAuthTokenDfd = function(e) {
                if (this._loadNewBars) return Promise.resolve("load_new_token");
                if (g.enabled("widget") || -1 !== window.location.search.indexOf("widget_token") || -1 !== window.location.hash.indexOf("widget_token")) {
                    var t = window.TradingView && window.TradingView.widgetCustomer || "";
                    return Promise.resolve(R[t] || "widget_user_token")
                }
                if (!window.is_authenticated) return Promise.resolve("unauthorized_user_token");
                var i = this;
                if (!i._authTokenManager) {
                    var o = new d;
                    i._authTokenManager = o, i._authTokenManager.invalidated.subscribe(null, (function(e) {
                        i._authTokenManager.get().then((function(e) {
                            e && i.connected() && i._sendRequest("set_auth_token", [e])
                        }))
                    }))
                }
                return i._authTokenManager.get(e)
            }, W.prototype._onConnect = function() {
                if (!this.connected()) {
                    this._trafficStats.sinceConnect = 0, this._isAuthTokenLoaded = !1;
                    var e = this;
                    if (this._connectOnlyOptions = this._connectOnlyOptions || {}, this._authTokenDfd = this._getAuthTokenDfd(this._connectOnlyOptions.tokenGrabSession), this._connectOnlyOptions = {}, this.sessionid = this._wsBackendConnection.getSessionId(), this.sessionid && !this._isConnected) {
                        this._pendingMessagesQueue = [], this._sendingQueuedRequestsCount = 0, this._isConnected = !0;
                        var t = JSON.parse(this.sessionid);
                        this._sendLowQualityModeIfEnabled(), this._metadataServerHash = t.studies_metadata_hash || null;
                        var i = this._wsBackendConnection.getConnectionEstablished();
                        try {
                            var o = (performance.now() - i) / 1e3,
                                r = t.timestamp + o;
                            this._serverTimeOffset = r - Date.now() / 1e3, this._serverTimeBasePoint = Math.round(1e3 * t.timestamp - i)
                        } catch (e) {
                            this._serverTimeOffset = 0, this._serverTimeBasePoint = Date.now() - performance.now()
                        }
                        if (E.logInfo("Time shift with server:" + Math.round(this._serverTimeOffset) + " seconds."), this._authTokenDfd) {
                            this._sendingQueuedRequestsCount += 1, E.logInfo("Wait for auth token before send messages");
                            var s = this._authTokenDfd;
                            s.then((function(t) {
                                null !== e._authTokenDfd && e._authTokenDfd === s ? (E.logNormal("Auth token request is finished, token: " + Boolean(t)), e._authTokenDfd = null, t && e._pendingMessagesQueue.unshift({
                                    method: "set_auth_token",
                                    args: [t]
                                }), e._onSendingQueueRequestFinished(), e._isAuthTokenLoaded = !0, e._notifySessions({
                                    method: "connected",
                                    params: []
                                })) : E.logNormal("Comes auth token after requesting new token or after socket disconnected")
                            })).catch((function(e) {
                                E.logNormal(B(e))
                            }))
                        } else E.logWarn("Deferred auth token object is not valid"), this._isAuthTokenLoaded = !0;
                        "" !== this._brokerId && this._sendBrokerIdToSession(this._brokerId);
                        var a = this._wsBackendConnection.getConnectionStart();
                        TradingView.WEB_SOCKET_WAS_CONNECTED = !0, h.setSessionInfo(this.sessionid), h.sendChartReport("websocket_connected"), h.sendChartReport("websocket_connection_time_frame", {
                            value: i - a
                        }), h.sendChartReport("reconnect_count_frame", {
                            value: this._wsBackendConnection.getReconnectCount()
                        }), h.sendChartReport("redirect_count_frame", {
                            value: this._wsBackendConnection.getRedirectCount()
                        }), n || (n = !0, h.sendChartReport("before_websocket_connection_time_frame", {
                            value: a
                        })), this._wsBackendConnection.resetCounters(), clearTimeout(this._telemetryDisconnectTimeout)
                    }
                }
            }, W.prototype.connect = function(e) {
                this._connectOnlyOptions = e, this._wsBackendConnection.isConnected() || this._wsBackendConnection.isConnecting() || this._wsBackendConnection.connect()
            }, W.prototype.disconnect = function(e) {
                return this._wsBackendConnection.disconnect(), !0
            }, W.prototype.switchTimezone = function(e, t) {
                return this._sendRequest("switch_timezone", [e, t])
            }, W.prototype.resolveSymbol = function(e, t, i, o) {
                return h.timeCounters.series["resolve_symbol_" + e] = window.performance.now(), this._notificationHandlers[e][t] = new c(o, t), this._sendRequest("resolve_symbol", [e, t, i])
            }, W.prototype.createSeries = function(e, t, i, o, n, r, s, a) {
                this._notificationHandlers[e][t] = new c(a, t), h.timeCounters.series.marks.push("create_series_" + e);
                const l = q(s);
                return this._sendRequest("create_series", [e, t, i, o, n, r, l])
            }, W.prototype.removeSeries = function(e, t) {
                return delete this._notificationHandlers[e][t], this._sendRequest("remove_series", [e, t])
            }, W.prototype.modifySeries = function(e, t, i, o, n, r, s) {
                this._notificationHandlers[e][t] = new c(s, t);
                const a = q(r);
                return this._sendRequest("modify_series", [e, t, i, o, n, a])
            }, W.prototype.requestMoreData = function(e, t, i, o) {
                if ("number" != typeof i) throw new Error("unsupported request to load more data, bars=" + i);
                return this._notificationHandlers[e][t] = new c(o, t), this._sendRequest("request_more_data", [e, t, i])
            }, W.prototype.requestMetadata = function(e, t, i) {
                var o = this;
                if (o._metadataCallback) o._metadataCallback.handlers.push(i);
                else {
                    var n = g.enabled("widget"),
                        r = n ? "studies_metadata_widget" : "studies_metadata",
                        s = [];
                    o._metadataCallback = function(e) {
                        o._metadataCallback = null, TVLocalForage.setItem(r, TradingView.clone(e)).then((function() {
                            if (E.logNormal("Updated studies_metadata cache"), !n) {
                                var e = pro.hash();
                                TVLocalForage.setItem("pro_hash", TradingView.clone(e)).then((function() {
                                    E.logNormal("Updated pro_hash cache")
                                })).catch((function(e) {
                                    E.logError("Cannot update pro_hash cache, reason: " + e)
                                }))
                            }
                        })).catch((function(e) {
                            E.logError("Cannot update studies_metadata cache, reason: " + e)
                        }));
                        for (var t = 0; t < s.length; t++) {
                            (0, s[t])(TradingView.clone(e))
                        }
                    }, o._metadataCallback.handlers = s, o._metadataCallback.handlers.push(i), E.logNormal("Requesting pro hash"), TVLocalForage.getItem("pro_hash").then((function(i) {
                        var s = pro.hash();
                        null !== i && i === s || n ? (E.logNormal("Pro hash has not changed, requesting from local"), TVLocalForage.getItem(r).then((function(i) {
                            var n = null !== i && i.params[1].hash || null;
                            if (null === n || null === o._metadataServerHash || o._metadataServerHash !== n) return E.logNormal("Metadata hash has changed (cached:'" + n + "', server:'" + o._metadataServerHash + "'')"), void o._requestMetadataFromServer(e, t, o._metadataCallback);
                            if (pro.hasPackage("tv-volumebyprice") && void 0 === i.params[1].metainfo.find((function(e) {
                                    return e.id.includes("@tv-volumebyprice")
                                }))) return E.logNormal("De-sync detected! pro.hash contains VbPR studies, but data from cache doesn't and pro.hash isn't changed, pro.hash=" + s), void o._requestMetadataFromServer(e, t, o._metadataCallback);
                            if (E.logNormal("Using studies_metadata from browser cache"), o._metadataCallback) {
                                for (var r = 0; r < o._metadataCallback.handlers.length; r++) {
                                    (0, o._metadataCallback.handlers[r])(TradingView.clone(i))
                                }
                                o._metadataCallback = null
                            } else E.logWarn("Cached metadata received, but callback expired")
                        })).catch((function(i) {
                            E.logError("Cannot get studies_metadata, reason: " + i), o._requestMetadataFromServer(e, t, o._metadataCallback)
                        }))) : (E.logNormal("Pro hash has changed (cached: '" + i + "', current:'" + s + "')"), o._requestMetadataFromServer(e, t, o._metadataCallback))
                    })).catch((function(i) {
                        E.logError("Cannot get studies_metadata, reason: " + i), o._requestMetadataFromServer(e, t, o._metadataCallback)
                    }))
                }
            }, W.prototype.authTokenManager = function() {
                return this._authTokenManager
            }, W.prototype._requestMetadataFromServer = function(e, t, i) {
                return !!i && (E.logNormal("Request studies_metadata from server"), this._notificationHandlers[e][t] = new c(i, t), this._sendRequest("request_studies_metadata", [e, t]))
            }, W.prototype.isCanCreateStudy = function(e, t) {
                if (!_(v.STUDY_ON_STUDY)) return !1;
                var i = f(v.STUDY_ON_STUDY);
                return !0 === e ? this.childStudyCounter < i.child_limit : this.studyCounter < i.limit
            }, W.prototype.createStudy = function(e, t, i, o, n, r, a, l) {
                if (!this.isCanCreateStudy()) return s(), !1;
                this._notificationHandlers[e][t] = new c(a, t);
                var d = this._sendRequest(!0 === l ? "create_child_study" : "create_study", [e, t, i, o, n, r]);
                return !1 !== d && (this.studyCounter++, l && this.childStudyCounter++, d)
            }, W.prototype.rebindStudy = function(e, t, i, o, n, r, s, a) {
                if (a === l.REBIND_STUDY_STANDALONE_TO_CHILD) {
                    if (!this.isCanCreateStudy(!0)) return !1;
                    this.childStudyCounter++
                } else a === l.REBIND_STUDY_CHILD_TO_STANDALONE && this.childStudyCounter--;
                return i = i || "", this._notificationHandlers[e][t] = new c(s, t), this._sendRequest("child_study_rebind", [e, t, i, o, n, r]), !0
            }, W.prototype.removeStudy = function(e, t, i) {
                delete this._notificationHandlers[e][t];
                var o = this._sendRequest("remove_study", [e, t]);
                return !1 !== o && (this.studyCounter--, i && this.childStudyCounter--, o)
            }, W.prototype.modifyStudy = function(e, t, i, o, n) {
                return this._notificationHandlers[e][t] = new c(n, t), this._sendRequest("modify_study", [e, t, i, o])
            }, W.prototype.createPointset = function(e, t, i, o, n, r, s) {
                return this._notificationHandlers[e][t] = new c(s, t), this._sendRequest("create_pointset", [e, t, i, o, n, r])
            }, W.prototype.modifyPointset = function(e, t, i, o, n) {
                return this._notificationHandlers[e][t] = new c(n, t), this._sendRequest("modify_pointset", [e, t, i, o])
            }, W.prototype.removePointset = function(e, t, i) {
                return this._notificationHandlers[e][t] = new c(i, t), this._sendRequest("remove_pointset", [e, t])
            }, W.prototype.requestMoreTickmarks = function(e, t, i, o) {
                return this._notificationHandlers[e][t] = new c(o, t), this._sendRequest("request_more_tickmarks", [e, t, i])
            }, W.prototype.requestFirstBarTime = function(e, t, i, o) {
                return this._notificationHandlers[e][t] = new c(o, t), this._sendRequest("get_first_bar_time", [e, t, i])
            }, W.prototype._generateNextTurnaround = function() {
                var e = this._turnaroundPrefix + this._turnaroundIndex;
                return this._turnaroundIndex += 1, e
            }, W.prototype.replayCreateSession = function(e) {
                return this._sendRequest("replay_create_session", [e])
            }, W.prototype.replayDeleteSession = function(e) {
                return this._sendRequest("replay_delete_session", [e])
            }, W.prototype.replayReset = function(e, t, i) {
                var o = this._generateNextTurnaround();
                return this._notificationHandlers[e][o] = new c(i, o), this._sendRequest("replay_reset", [e, o, t])
            }, W.prototype.replayStart = function(e, t, i) {
                var o = this._generateNextTurnaround();
                return this._notificationHandlers[e][o] = new c(i, o),
                    this._sendRequest("replay_start", [e, o, t])
            }, W.prototype.replayStop = function(e, t) {
                var i = this._generateNextTurnaround();
                return this._notificationHandlers[e][i] = new c(t, i), this._sendRequest("replay_stop", [e, i])
            }, W.prototype.replayStep = function(e, t, i) {
                var o = this._generateNextTurnaround();
                return this._notificationHandlers[e][o] = new c(i, o), this._sendRequest("replay_step", [e, o, t])
            }, W.prototype.replayAddSeries = function(e, t, i, o) {
                var n = this._generateNextTurnaround();
                return this._notificationHandlers[e][n] = new c(o, n), this._sendRequest("replay_add_series", [e, n, t, i])
            }, W.prototype.replayRemoveSeries = function(e, t, i, o) {
                var n = this._generateNextTurnaround();
                return this._notificationHandlers[e][n] = new c(o, n), this._sendRequest("replay_remove_series", [e, n, t, i])
            }, W.prototype.replaySetResolution = function(e, t, i) {
                var o = this._generateNextTurnaround();
                return this._notificationHandlers[e][o] = new c(i, o), this._sendRequest("replay_set_resolution", [e, o, t])
            }, W.prototype.redirectCount = function() {
                return this._wsBackendConnection.getRedirectCount()
            }, W.prototype.disconnectCount = function() {
                return this._disconnectCount || 0
            }, W.prototype._invokeHandler = function(e, t) {
                e && e(t)
            }, W.prototype._flushPendingMessages = function() {
                E.logInfo("Flush pending messages. Count=" + this._pendingMessagesQueue.length), this._pendingMessagesQueue.forEach((function(e) {
                    this._sendRequest(e.method, e.args)
                }), this), this._pendingMessagesQueue = []
            }, W.prototype._sendRequest = function(e, t) {
                if (0 !== this._sendingQueuedRequestsCount) return this._pendingMessagesQueue.push({
                    method: e,
                    args: t
                }), !0;
                var i = this._dataHandleModule[e].apply(this._dataHandleModule, t),
                    o = {
                        m: e,
                        p: i
                    },
                    n = JSON.stringify(o);
                if (i.length > 0) {
                    var r = i[0];
                    r.startsWith("qs_") ? L.logNormal("send: " + n) : r.startsWith("cs_") && C.logNormal("send: " + n)
                } else E.logNormal("send: " + n);
                var s = this._dataHandleModule.prepareEncodeMessage(e, i);
                return this._wsBackendConnection.send(s)
            }, W.prototype._onMessage = function(e) {
                this._calcTrafficStats(e);
                var t = this.unpack(e);
                "protocol_switched" !== t.method ? this._dispathNotification(t, e) : E.logError("Unexpected protocol changing request, try skipping. Requested protocol:" + t.params[0])
            }, W.prototype._onSendingQueueRequestFinished = function() {
                this._sendingQueuedRequestsCount -= 1, E.logInfo("Sending queue request finished. Remaining pending requests=" + this._sendingQueuedRequestsCount), this._sendingQueuedRequestsCount < 0 && E.logError("Invalid queue state=" + this._sendingQueuedRequestsCount), 0 === this._sendingQueuedRequestsCount && this._flushPendingMessages()
            }, W.prototype._convertTimescaleResponse = function(e) {
                return this._dataHandleModule.convertTimescaleResponse(e)
            }, W.prototype._appendDuration = function(e, t) {
                return e ? t + ", duration: " + Math.round(Date.now() / 1e3 - e + this._serverTimeOffset) + "s" : t
            }, W.prototype._dispathNotification = function(e, t) {
                var i = e.params.shift();
                if (this._notificationHandlers[i]) {
                    var n = e.params[0];
                    if ("symbol_resolved" === e.method) {
                        var s = e.params[1].full_name;
                        h.sendChartReport("symbol_resolved", {
                            count: 1,
                            additional: {
                                symbol: s
                            }
                        });
                        var a = h.timeCounters.series["resolve_symbol_" + i];
                        "number" == typeof a && h.sendChartReport("symbol_resolve_time_frame", {
                            value: window.performance.now() - a,
                            additional: {
                                symbol: s
                            }
                        })
                    }
                    if (["series_error", "series_completed"].includes(e.method) && h.timeCounters.series.marks.length > 0) {
                        var l = "create_series_" + i,
                            c = h.timeCounters.series.marks.indexOf(l);
                        c >= 0 && h.timeCounters.series.marks.splice(c, 1)
                    }
                    r || "series_error" !== e.method || (r = !0);
                    var d = this._wsBackendConnection.getConnectionEstablished();
                    if (null !== d && "series_completed" === e.method && (r || (r = !0, h.sendChartReport("first_series_full_time_frame", {
                            value: window.performance.now() - d
                        }), h.timeCounters.series.marks = []), o || (o = !0, h.sendChartReport("page_full_load_time_frame", {
                            value: window.performance.now()
                        }))), i.startsWith("cs_")) {
                        var u = "recv: " + t;
                        "data_update" === e.method ? (u = T.isHighRateEnabled() ? u : u.slice(0, 500), A.logNormal(this._appendDuration(e.time, u))) : "study_loading" === e.method ? I.logNormal(this._appendDuration(e.time, u)) : "tickmark_update" === e.method ? k.logNormal(this._appendDuration(e.time, u)) : C.logNormal(this._appendDuration(e.time, u))
                    }
                    if (i.startsWith("qs_"))("quote_symbol_data" === e.method ? P.logNormal : L.logNormal)("recv: " + t);
                    switch (e.method) {
                        case "timescale_update":
                            var p = this._dataHandleModule.getTimescaleObjects(e),
                                g = this._dataHandleModule.getTimescaleChangeset(e);
                            (m = this._convertTimescaleResponse(g)).clear = 0 === m.changes.length && 0 === m.index_diff.length && 0 === m.marks.length, this._sessions[i].onMessage({
                                method: "timescale_update",
                                params: m
                            }), this._dataHandleModule.prepareDataUpdateObjects(i, p, function(e, t, i) {
                                this._invokeNotificationHandler(e, t, i)
                            }.bind(this));
                            break;
                        case "tickmark_update":
                            var m;
                            (m = this._convertTimescaleResponse(e.params[0])).changes = [], this._sessions[i].onMessage({
                                method: "timescale_update",
                                params: m
                            });
                            break;
                        case "data_update":
                            p = this._dataHandleModule.getDataUpdateObjects(e);
                            this._dataHandleModule.prepareDataUpdateObjects(i, p, function(e, t, i) {
                                this._invokeNotificationHandler(e, t, i)
                            }.bind(this));
                            break;
                        case "index_update":
                            for (var _ in e.params[0]) {
                                var f = {
                                    method: "index_update",
                                    params: e.params[0][_]
                                };
                                this._invokeNotificationHandler(i, _, f)
                            }
                            break;
                        case "critical_error":
                            E.logInfo(new Date + " critical_error session:" + this.sessionid + " reason:" + e.params[0]), h.sendChartReport("critical_error"), this._sessions[i].onMessage({
                                method: "critical_error",
                                params: e.params
                            });
                            break;
                        case "timescale_completed":
                        case "quote_symbol_data":
                        case "quote_list_fields":
                        case "quote_completed":
                        case "depth_symbol_error":
                        case "depth_symbol_success":
                        case "dd":
                        case "dpu":
                        case "depth_bar_last_value":
                            this._sessions[i].onMessage({
                                method: e.method,
                                params: e.params
                            });
                            break;
                        case "clear_data":
                            for (var v in e.params[0]) this._invokeNotificationHandler(i, v, {
                                method: "clear_data",
                                params: e.params[0][v]
                            });
                            break;
                        case S.point:
                        case S.resolutions:
                        case S.endOfData:
                        case S.instanceId:
                            this._sessions[i].onMessage(e);
                            break;
                        case "series_timeframe":
                            e.params[4] = function(e) {
                                if (null == e) return null;
                                var t = /r,(\d+):(\d+)/.exec(e);
                                return null !== t ? {
                                    from: Number(t[1]),
                                    to: Number(t[2]),
                                    type: F.TimeRange
                                } : {
                                    value: e,
                                    type: F.PeriodBack
                                }
                            }(e.params[4]), this._invokeNotificationHandler(i, n, e);
                            break;
                        case "symbol_resolved":
                            ! function(e) {
                                if (void 0 === e.corrections) {
                                    var t = e.subsessions.find((function(t) {
                                        return t.id === e.subsession_id
                                    }));
                                    void 0 !== t && (e.corrections = t["session-correction"])
                                }
                            }(e.params[1]), this._invokeNotificationHandler(i, n, e);
                            break;
                        default:
                            this._invokeNotificationHandler(i, n, e)
                    }
                }
            }, W.prototype._isStrategy = function(e, t) {
                var i = this._notificationHandlers[e][t];
                return i && i.handler && i.handler.isTVScriptStrategy
            }, W.prototype._invokeNotificationHandler = function(e, t, i) {
                if (void 0 !== t) {
                    var o = this._notificationHandlers[e][t];
                    0 === i.method.indexOf("replay_") && delete this._notificationHandlers[e][t], void 0 !== o && this._invokeHandler(o.handler, i)
                }
            }, W.prototype._notifySessions = function(e) {
                for (var t in this._sessions) {
                    if (!this._sessions.hasOwnProperty(t)) return;
                    var i = this._sessions[t];
                    "function" == typeof i.onMessage && i.onMessage(e)
                }
            }, W.prototype.unpack = function(e) {
                return this._dataHandleModule.unpack(e)
            }, W.prototype._symbolSearchRequest = null, W.prototype.searchSymbols = function(e, t, i, o, n, r, s, a, l, c) {
                var d = this;
                this._symbolSearchRequest && this._symbolSearchRequest.abort();
                var p = location.protocol + "//" + window.SS_HOST;
                u.isProd() ? p += "/symbol_search/" : p += "/local_search/", window.SS_URL && (p = window.SS_URL);
                var g = {
                    text: e,
                    exchange: t,
                    type: i,
                    hl: n,
                    lang: o
                };
                window.SS_DOMAIN_PARAMETER && (g.domain = window.SS_DOMAIN_PARAMETER), r && (g.strict = 1), i === m.types.QUANDL && (p = "https://quandlapi.tradingview.com/api/v3/datasets.json", g = {
                    query: e,
                    database_code: t
                }), s && (g.broker = s, a && (g.tradable = !0), l && (g.unhide = l));
                var _ = Object.keys(g).map((function(e) {
                        return encodeURIComponent(e) + "=" + encodeURIComponent(g[e])
                    })).join("&"),
                    f = new XMLHttpRequest;
                f.open("GET", p + "?" + _);
                var v = window.performance.now();

                function w() {
                    h.sendChartReport("symbol_search_time_frame", {
                        value: window.performance.now() - v
                    })
                }

                function y() {
                    w(), h.sendChartReport("symbol_search_http_error"), d._symbolSearchRequest = null
                }
                f.addEventListener("load", (function() {
                    var e = JSON.parse(f.responseText);
                    c && c(e), w(), h.sendChartReport("symbol_search_http_status", {
                        value: f.status
                    }), d._symbolSearchRequest = null
                })), f.addEventListener("error", y), f.addEventListener("timeout", y), this._symbolSearchRequest = f, f.send()
            }, W.prototype.getMarks = function(e, t, i, o, n) {
                throw Error("This method is not implemented")
            }, W.prototype.getTimescaleMarks = function(e, t, i, o, n) {
                throw Error("This method is not implemented")
            }, W.prototype.getPingInfo = function() {
                return this._wsBackendConnection.getPingInfo()
            }, W.prototype._calcTrafficStats = function(e) {
                var t = e.length;
                this._trafficStats.total += t, this._trafficStats.sinceConnect += t, this._trafficStats.lastChunk += t
            }, w(W, "TVChartApi", l, "ChartApiInterface"), window.ChartApiInstance = new W(window.WSBackendConnection), e && e.exports && (e.exports = W)
        },
        983291: (e, t, i) => {
            "use strict";
            i.d(t, {
                reconnectChartApi: () => o,
                setBroker: () => n
            });
            i(100757);

            function o(e) {
                const t = window.ChartApiInstance;
                window.is_authenticated && (t.disconnect(), e && t.authTokenManager().reset(), setTimeout(() => t.connect(), 500))
            }

            function n(e) {
                window.ChartApiInstance.setBroker(e)
            }
        },
        25143: (e, t, i) => {
            "use strict";
            var o, n;

            function r(e, t) {
                return "period-back" === e.type && "period-back" === t.type ? e.value === t.value : "time-range" === e.type && "time-range" === t.type && (e.from === t.from && e.to === t.to)
            }
            i.d(t, {
                    Helpers: () => o,
                    TIMEFRAMETYPE: () => n,
                    areEqualTimeFrames: () => r
                }),
                function(e) {
                    e.extractErrorReason = function(e) {
                        return e.params[1]
                    }
                }(o || (o = {})),
                function(e) {
                    e.PeriodBack = "period-back", e.TimeRange = "time-range"
                }(n || (n = {}))
        },
        106798: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                getQuoteSessionInstance: () => s,
                setQuoteSessionInstance: () => a,
                getQuoteSessionNoEnsure: () => l,
                destroyQuoteSessions: () => c
            });
            var o = i(270447),
                n = i.n(o);
            const r = {};

            function s(e = "full") {
                return r[e] || a(e, new(n())(e)), r[e]
            }

            function a(e = "full", t) {
                r[e] = t
            }

            function l(e = "full") {
                return r[e]
            }

            function c() {
                for (const e in r)
                    if (r.hasOwnProperty(e)) {
                        const t = r[e];
                        void 0 !== t && t.destroy(), delete r[e]
                    }
            }
        },
        63404: (e, t, i) => {
            "use strict";
            e = i.nmd(e);
            var o = i(75443).randomHash;

            function n(e) {
                this._chartApi = e, this._sessionid = "qs_" + o(), this._sessionstarted = !1
            }
            n.prototype.destroy = function() {
                this._sessionstarted && (this._chartApi.quoteDeleteSession(this._sessionid), this._sessionid = null, this._sessionstarted = !1)
            }, n.prototype.connected = function() {
                return this._chartApi.connected()
            }, n.prototype.connect = function(e) {
                this._globalHandler = e, this._chartApi.createSession(this._sessionid, this), this._chartApi.connect()
            }, n.prototype.disconnect = function() {
                this._chartApi.disconnect()
            }, n.prototype.quoteAddSymbols = function(e) {
                this._chartApi.quoteAddSymbols(this._sessionid, e)
            }, n.prototype.quoteRemoveSymbols = function(e) {
                this._chartApi.quoteRemoveSymbols(this._sessionid, e)
            }, n.prototype.quoteFastSymbols = function(e) {
                this._chartApi.quoteFastSymbols(this._sessionid, e)
            }, n.prototype.quoteSetFields = function(e) {
                this._chartApi.quoteSetFields(this._sessionid, e)
            }, n.prototype.onMessage = function(e) {
                switch (e.method) {
                    case "connected":
                        this._sessionstarted || (this._chartApi.quoteCreateSession(this._sessionid), this._sessionstarted = !0);
                        break;
                    case "disconnected":
                        this._sessionstarted = !1
                }
                this._globalHandler(e)
            }, n.prototype.quoteHibernateAll = function(e) {
                this._chartApi.quoteHibernateAll(this._sessionid)
            }, TradingView.QuoteSession = n, e && e.exports && (e.exports = n)
        },
        270447: (e, t, i) => {
            "use strict";
            e = i.nmd(e);
            var o = i(896276),
                n = i(858848).default,
                r = i(316152).default,
                s = i(511228).PriceFormatter;
            const {
                uniq: a
            } = i(494972);
            var l, c = i(75443),
                d = i(924754).parseUpdateMode,
                u = i(821318).deepExtend;

            function h(e, t) {
                this.options = Object.assign({
                    throttleTimeout: 125
                }, t), this._connected = !1, this._symbol_data = {}, this._subscriptions = {}, this.onConnect = new o, this.onDisconnect = new o, this._quoteApi = new l(window.ChartApiInstance), this._type = e || "full", this._delayUpdateFastSymbols = r(this._updateFastSymbols, 250), this._throttledSymbolData = {}, this._formatterValuesCache = {}, this._waitingForFormatters = {}, this._snapshotValuesCache = {}, this._waitingForSnapshot = {}, this.connect()
            }
            l = i(63404), h.prototype.destroy = function() {
                    this._quoteApi.destroy(), this._quoteApi = null, this._connected = !1, this.onDisconnect.fire()
                }, h.prototype.typeFields = {},
                h.prototype.typeFields.simple = ["base-currency-logoid", "ch", "chp", "currency-logoid", "currency_code", "current_session", "description", "exchange", "format", "fractional", "is_tradable", "language", "local_description", "logoid", "lp", "lp_time", "minmov", "minmove2", "original_name", "pricescale", "pro_name", "short_name", "type", "update_mode", "volume"], h.prototype.typeFields.simpleDetailed = [].concat(h.prototype.typeFields.simple, ["ask", "bid", "fundamentals", "high_price", "is_tradable", "low_price", "open_price", "prev_close_price", "rch", "rchp", "rtc", "rtc_time", "status", "basic_eps_net_income", "beta_1_year", "earnings_per_share_basic_ttm", "industry", "market_cap_basic", "price_earnings_ttm", "sector", "volume", "dividends_yield", "timezone"]), h.prototype.typeFields.full = [], h.prototype.typeFields.watchlist = [].concat(h.prototype.typeFields.simple, ["rchp", "rtc", "country_code", "provider_id"]), h.prototype.typeFields.portfolio = ["pro_name", "short_name", "exchange", "description", "sector", "type", "industry", "currency_code", "currency_id", "ch", "chp", "logoid", "currency-logoid", "base-currency-logoid", "earnings_per_share_forecast_next_fq", "earnings_release_next_date", "earnings_release_date", "earnings_per_share_fq", "lp", "fractional", "minmov", "minmove2", "pricescale", "volume", "average_volume", "market_cap_basic", "total_revenue", "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy", "dividends_yield", "fundamental_currency_code"], h.prototype.connect = function(e) {
                    this._quoteApi.connect(this.quoteHandler.bind(this))
                }, h.prototype.quoteHandler = function(e) {
                    var t = e.method,
                        i = e.params;
                    switch (t) {
                        case "connected":
                            this._connected || (this._connected = !0, this.onConnected());
                            break;
                        case "quote_list_fields":
                            break;
                        case "quote_symbol_data":
                            this._connected && this.onSymbolData(i[0]);
                            break;
                        case "quote_completed":
                            this._connected && this.onSymbolData({
                                symbolname: i[0],
                                complete: performance.now(),
                                values: {}
                            });
                            break;
                        case "disconnected":
                            this._connected && (this._connected = !1, this.onDisconnect.fire())
                    }
                }, h.prototype.onConnected = function() {
                    this.setFields();
                    var e = Object.keys(this._symbol_data);
                    e.length && (this._quoteApi.quoteAddSymbols(e), this._delayUpdateFastSymbols()), this.onConnect.fire()
                }, h.prototype.setFields = function() {
                    var e = h.prototype.typeFields[this._type];
                    e && e.length && this._quoteApi.quoteSetFields(e)
                }, h.prototype.onSymbolData = function(e) {
                    var t = e.symbolname,
                        i = this._throttledSymbolData[t];
                    i || (i = this._throttledSymbolData[t] = {
                        fnDispatch: n(this.dipatchSymbolData.bind(this), this.options.throttleTimeout)
                    }), i.cache ? u(i.cache, e) : i.cache = e, i.fnDispatch(t)
                }, h.prototype._parseUpdateMode = function(e) {
                    var t = d(e.update_mode);
                    null !== t && (e.update_mode = t.mode, e.update_mode_seconds = t.interval)
                }, h.prototype.dipatchSymbolData = function(e) {
                    var t = this._symbol_data[e],
                        i = this._throttledSymbolData[e].cache;
                    if (delete this._throttledSymbolData[e].cache, this._symbol_data[e])
                        for (var o in u(t, i), t.values && this._parseUpdateMode(t.values), this._subscriptions) {
                            var n = this._subscriptions[o];
                            n.has(e) && n.get(e).forEach((function(e) {
                                e(t, i)
                            }))
                        }
                }, h.prototype.subscribe = function(e, t, i) {
                    this._subscriptions[e] = this._subscriptions[e] || new Map;
                    var o = this._subscriptions[e];
                    t = [].concat(t);
                    var n = [];
                    t.forEach((function(e) {
                        this._symbol_data[e] ? o && o.has(e) || this._symbol_data[e].subscribers_count++ : (this._symbol_data[e] = {
                            subscribers_count: 1
                        }, n.push(e)), o.has(e) || o.set(e, []), o.get(e).push(i), o.get(e).fast = !0, this._symbol_data[e] && this._symbol_data[e].values && i(this._symbol_data[e], this._symbol_data[e])
                    }), this), n.length && this._connected && (this._quoteApi.quoteAddSymbols(n), this._delayUpdateFastSymbols())
                }, h.prototype.unsubscribe = function(e, t, i) {
                    t = [].concat(t);
                    for (var o = this._subscriptions[e], n = [], r = 0; r < t.length; r++) {
                        var s = t[r];
                        if (o)
                            if (o.has(s) && i) {
                                var a = o.get(s).indexOf(i);
                                ~a && o.get(s).splice(a, 1), o.get(s).length || o.delete(s)
                            } else o.delete(s);
                        o && 0 === o.size && delete this._subscriptions[e], this._symbol_data.hasOwnProperty(s) && (o && !o.has(s) && this._symbol_data[s].subscribers_count--, this._symbol_data[s].subscribers_count || (delete this._symbol_data[s], n.push(s)))
                    }
                    n.length && this._connected && (this._quoteApi.quoteRemoveSymbols(n), this._delayUpdateFastSymbols())
                }, h.prototype.setFastSymbols = function(e, t) {
                    if (this._subscriptions[e])
                        for (var i = this._subscriptions[e], o = Array.from(i.keys()), n = 0; n < o.length; ++n) {
                            var r = o[n];
                            i.get(r).fast = -1 !== t.indexOf(r)
                        }
                    this._delayUpdateFastSymbols()
                }, h.prototype._updateFastSymbols = function() {
                    if (this._connected) {
                        var e = this._fastSymbols();
                        0 === e.length ? this._quoteApi.quoteHibernateAll() : this._quoteApi.quoteFastSymbols(e)
                    }
                }, h.prototype._delayUpdateFastSymbols = h.prototype._updateFastSymbols, h.prototype._fastSymbols = function() {
                    var e = [];
                    for (var t in this._subscriptions)
                        for (var i = this._subscriptions[t], o = Array.from(i.keys()), n = 0; n < o.length; ++n) {
                            var r = o[n];
                            i.get(r).fast && e.push(r)
                        }
                    return e = a(e)
                }, h.prototype.formatter = function(e, t) {
                    var i = this;
                    if (this._waitingForFormatters[e]) return this._waitingForFormatters[e];

                    function o(e) {
                        var i = t && !e.fractional ? 1 : e.minmov;
                        return new s(e.pricescale, i, e.fractional, e.minmove2)
                    }
                    var n = new Promise((function(t, n) {
                        if (i._formatterValuesCache[e]) t(o(i._formatterValuesCache[e]));
                        else {
                            var r = c.guid();
                            i.subscribe(r, [e], (function(s) {
                                "error" === s.status && (i._waitingForFormatters[e] = null, n("Quotes snapshot is not received")),
                                    function(e) {
                                        return e && null != e.pricescale && null != e.minmov
                                    }(s.values) && (i._waitingForFormatters[e] = null, i._formatterValuesCache[e] = s.values, t(o(s.values)), i.unsubscribe(r, e))
                            }))
                        }
                    }));
                    return this._waitingForFormatters[e] = n, n
                }, h.prototype.snapshot = function(e) {
                    var t = this;
                    if (this._waitingForSnapshot[e]) return this._waitingForSnapshot[e];
                    var i = new Promise((function(i, o) {
                        if (t._snapshotValuesCache[e]) i(t._snapshotValuesCache[e]);
                        else {
                            var n = c.guid();
                            t.subscribe(n, [e], (function(r) {
                                "error" === r.status && (t._waitingForSnapshot[e] = null, o("Quotes snapshot is not received"));
                                var s = r.values;
                                s && s.minmov && s.pricescale && s.description && (t._waitingForSnapshot[e] = null, t._snapshotValuesCache[e] = s, i(s), t.unsubscribe(n, e))
                            }))
                        }
                    }));
                    return this._waitingForSnapshot[e] = i, i
                }, TradingView.QuoteSessionMultiplexer = h, e && e.exports && (e.exports = h)
        },
        503707: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                LINESTYLE_SOLID: () => o,
                LINESTYLE_DOTTED: () => n,
                LINESTYLE_DASHED: () => r,
                LINESTYLE_LARGE_DASHED: () => s,
                LINESTYLE_SPARSE_DOTTED: () => a,
                LINESTYLE_SMALL_DASHED: () => l
            });
            const o = 0,
                n = 1,
                r = 2,
                s = 3,
                a = 4,
                l = 5
        },
        799438: (e, t, i) => {
            "use strict";
            var o = i(184162),
                n = o.greaterThan,
                r = o.lessThan,
                s = window.CanvasEx = i(503707);
            s.computeDashPattern = function(e) {
                return [
                    [e.lineWidth, 2 * e.lineWidth],
                    [5 * e.lineWidth, 6 * e.lineWidth],
                    [6 * e.lineWidth, 6 * e.lineWidth],
                    [e.lineWidth, 4 * e.lineWidth],
                    [2 * e.lineWidth, e.lineWidth]
                ][e.lineStyle - 1]
            }, s.drawLine = function(e, t, i, o, n) {
                isFinite(t) && isFinite(o) && isFinite(i) && isFinite(n) && (e.lineStyle !== s.LINESTYLE_SOLID ? s.drawDashedLine(e, t, i, o, n) : s.drawSolidLine(e, t, i, o, n))
            }, s.drawArrow = function(e, t, i, o, n, r) {
                if (isFinite(t) && isFinite(o) && isFinite(i) && isFinite(n)) {
                    var s = Math.round(r / 2),
                        a = t + s,
                        l = o + s;
                    e.beginPath(), e.moveTo(l, n), e.lineTo(a, i), e.moveTo(t, i + s), e.lineTo(a, i), e.lineTo(t + r, i + s), e.stroke()
                }
            }, s.drawSolidLine = function(e, t, i, o, n) {
                e.beginPath(), e.moveTo(t, i), e.lineTo(o, n), e.stroke()
            }, s.setLineStyle = function(e, t) {
                e.lineStyle = t;
                var i = [];
                t !== s.LINESTYLE_SOLID && (i = s.computeDashPattern(e)), s.setLineDash(e, i)
            }, s.setLineDash = function(e, t) {
                "function" == typeof e.setLineDash ? e.setLineDash(t) : void 0 !== e.mozDash ? e.mozDash = t : void 0 !== e.webkitLineDash && (e.webkitLineDash = t)
            }, s.drawPoly = function(e, t, i) {
                e.beginPath(), e.moveTo(t[0].x, t[0].y);
                for (var o = 0; o < t.length; o++) {
                    var n = t[o];
                    e.lineTo(n.x, n.y)
                }
                e.closePath(), e.stroke(), i && e.fill()
            }, s.drawDashedLine = function(e, t, i, o, n) {
                e.save();
                var r = s.computeDashPattern(e);
                if (e.beginPath(), "function" == typeof e.setLineDash) e.setLineDash(r);
                else if (void 0 !== e.mozDash) e.mozDash = r;
                else {
                    if (void 0 === e.webkitLineDash) return s.dashedLineTo(e, t, i, o, n, r), e.stroke(), void e.restore();
                    e.webkitLineDash = r
                }
                e.moveTo(t, i), e.lineTo(o, n), e.stroke(), e.restore()
            }, s.drawDashedLineHorizontal = function(e, t, i, o) {
                e.save();
                var n = s.computeDashPattern(e),
                    r = 0,
                    a = e.lineWidth,
                    l = a / 2;
                e.translate(-l, -l);
                for (var c = !0, d = t + o; t < d;) {
                    var u = n[r];
                    c && e.fillRect(t, i, u, a), c = !c, t += u, r = r === n.length - 1 ? 0 : r + 1
                }
                e.restore()
            }, s.drawDashedLineVertical = function(e, t, i, o) {
                e.save();
                var n = s.computeDashPattern(e),
                    r = 0,
                    a = e.lineWidth,
                    l = a / 2;
                e.translate(-l, -l);
                for (var c = !0, d = i + o; i < d;) {
                    var u = n[r];
                    c && e.fillRect(t, i, a, u), c = !c, i += u, r = r === n.length - 1 ? 0 : r + 1
                }
                e.restore()
            }, s.dashedLineTo = function(e, t, i, o, s, a) {
                var l = {
                        thereYet: n,
                        cap: Math.min
                    },
                    c = {
                        thereYet: n,
                        cap: Math.min
                    };
                i - s > 0 && (c.thereYet = r, c.cap = Math.max), t - o > 0 && (l.thereYet = r, l.cap = Math.max), e.moveTo(t, i);
                for (var d = t, u = i, h = 0, p = !0; !l.thereYet(d, o) || !c.thereYet(u, s);) {
                    var g = Math.atan2(s - i, o - t),
                        m = a[h];
                    d = l.cap(o, d + Math.cos(g) * m), u = c.cap(s, u + Math.sin(g) * m), p ? e.lineTo(d, u) : e.moveTo(d, u), h = (h + 1) % a.length, p = !p
                }
            }, s.setFont = function(e, t) {
                if (e.font !== t) try {
                    e.font = t
                } catch (e) {}
            }, "undefined" != typeof CanvasRenderingContext2D && (CanvasRenderingContext2D.prototype.setFont = function(e) {
                s.setFont(this, e)
            }, CanvasRenderingContext2D.prototype.lineStyle = s.LINESTYLE_SOLID), e.exports = s
        },
        568198: (e, t, i) => {
            "use strict";
            i.d(t, {
                combine: () => r
            });
            var o = i(765066),
                n = i.n(o);

            function r(e, ...t) {
                const i = (...t) => e(...t.map(e => e.value())),
                    o = new(n())(i(...t)),
                    r = () => o.setValue(i(...t)),
                    s = t.map(e => e.spawn());
                for (const e of s) e.subscribe(r);
                return o.readonly().spawn(() => s.forEach(e => e.destroy()))
            }
        },
        896276: (e, t, i) => {
            "use strict";
            e = i.nmd(e);
            const o = i(987380).getLogger("Common.Delegate");

            function n() {
                this._listeners = []
            }

            function r(e) {
                return !e.singleshot
            }
            n.prototype.subscribe = function(e, t, i) {
                const o = {
                    object: e,
                    member: t,
                    singleshot: !!i,
                    skip: !1
                };
                this._listeners.push(o)
            }, n.prototype.unsubscribe = function(e, t) {
                for (let i = 0; i < this._listeners.length; ++i) {
                    const o = this._listeners[i];
                    if (o.object === e && o.member === t) {
                        o.skip = !0, this._listeners.splice(i, 1);
                        break
                    }
                }
            }, n.prototype.unsubscribeAll = function(e) {
                for (let t = this._listeners.length - 1; t >= 0; --t) {
                    const i = this._listeners[t];
                    i.object === e && (i.skip = !0, this._listeners.splice(t, 1))
                }
            }, n.prototype.destroy = function() {
                delete this._listeners
            }, n.prototype.fire = function() {
                const e = this._listeners;
                this._listeners = this._listeners.filter(r);
                const t = e.length;
                for (let i = 0; i < t; ++i) {
                    const t = e[i];
                    if (!t.skip) try {
                        t.member.apply(t.object || null, arguments)
                    } catch (e) {
                        o.logError(e.stack || e.message)
                    }
                }
            }, "undefined" != typeof window && (window.Delegate = n), e && e.exports && (e.exports = n)
        },
        692491: (e, t, i) => {
            "use strict";
            var o = i(369483),
                n = i(918184);
            i(918184);
            var r = i(987380).getLogger("Common.LocalForage"),
                s = i(655119).TVLocalStorageAsync,
                a = [o.INDEXEDDB, o.LOCALSTORAGE, o.WEBSQL],
                l = [o.LOCALSTORAGE, o.WEBSQL, o.INDEXEDDB];
            window.localForageReady = n.Deferred();
            var c = function(e) {
                r.logNormal("localForage driver: " + JSON.stringify(e));
                var t = {
                    name: "tradingview",
                    driver: e
                };
                o.config(t), window.TVLocalForage = o, window.localForageReady.resolve()
            };
            try {
                var d = window.indexedDB.open("tradingviewCheckIndexedDB");
                d.onerror = function(e) {
                    r.logError("IndexedDB is NOT available"), c(l)
                }, d.onsuccess = function(e) {
                    r.logNormal("IndexedDB is available"), c(a)
                }
            } catch (e) {
                r.logError("IndexedDB is NOT available, " + e);
                try {
                    c(l)
                } catch (e) {
                    window.TVLocalForage = s, window.localForageReady.resolve()
                }
            }
            e.exports = {
                TVLocalForage: window.TVLocalForage
            }
        },
        184162: (e, t, i) => {
            "use strict";

            function o(e, t) {
                return e <= t
            }

            function n(e, t) {
                return e >= t
            }

            function r(e, t, i) {
                return Math.min(Math.max(e, t), i)
            }

            function s(e) {
                return e < 0 ? -1 : e > 0 ? 1 : 0
            }

            function a(e) {
                if (e < 0) return !1;
                for (let t = e; t > 1; t /= 10)
                    if (t % 10 != 0) return !1;
                return !0
            }

            function l(e, t, i) {
                return t - e <= i
            }

            function c(e, t, i) {
                return Math.abs(e - t) < i
            }

            function d(e) {
                return e <= 0 ? NaN : Math.log(e) / Math.log(10)
            }

            function u(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }

            function h(e, t = u) {
                if (e.length < 1) throw Error("array is empty");
                let i = e[0];
                for (let o = 0; o < e.length; ++o) t(e[o], i) < 0 && (i = e[o]);
                return i
            }

            function p(e, t = u) {
                if (e.length < 1) throw Error("array is empty");
                let i = e[0];
                for (let o = 0; o < e.length; ++o) t(e[o], i) > 0 && (i = e[o]);
                return i
            }

            function g(e) {
                const t = Math.ceil(e);
                return t % 2 != 0 ? t - 1 : t
            }

            function m(e) {
                return e > 0 ? Math.floor(e) : Math.ceil(e)
            }
            i.r(t), i.d(t, {
                lessThan: () => o,
                greaterThan: () => n,
                clamp: () => r,
                sign: () => s,
                isBaseDecimal: () => a,
                greaterOrEqual: () => l,
                equal: () => c,
                log10: () => d,
                defComparator: () => u,
                min: () => h,
                max: () => p,
                ceiledEven: () => g,
                toInt: () => m
            })
        },
        765066: (e, t, i) => {
            "use strict";
            e = i.nmd(e);
            var o = i(987380).getLogger("Common.WatchedValue");

            function n() {}

            function r(e) {
                if (!(this instanceof r)) return new r(e);
                arguments.length > 0 && (this._value = e), this._listeners = []
            }
            r.prototype.value = function() {
                return this._owner ? this._owner._value : this._value
            }, r.prototype.setValue = function(e, t) {
                var i = this._owner ? this._owner : this;
                if ("function" == typeof i.hook && (e = i.hook(e)), i.writeLock) return i._value;
                var n = i._value === e || Number.isNaN(i._value) && Number.isNaN(e);
                if (!t && n && i.hasOwnProperty("_value")) return e;
                i._value = e;
                for (var r = i._listeners.slice(), s = 0, a = 0; a < r.length; a++) {
                    r[a].once && (i._listeners.splice(a - s, 1), s++);
                    try {
                        r[a].cb(e)
                    } catch (e) {
                        o.logError(e.stack || e.message)
                    }
                }
                return e
            }, r.prototype.deleteValue = function() {
                var e = this._owner ? this._owner : this;
                if (e.hasOwnProperty("_value")) {
                    if (e.writeLock) return e._value;
                    delete e._value;
                    for (var t = e._listeners.slice(), i = 0, n = 0; n < t.length; n++) {
                        t[n].once && (e._listeners.splice(n - i, 1), i++);
                        try {
                            t[n].cb()
                        } catch (e) {
                            o.logError(e.stack || e.message)
                        }
                    }
                }
            }, r.prototype.subscribe = function(e, t) {
                if ("function" != typeof e) throw new TypeError("callback must be a function");
                var i = !!t && !!t.once,
                    n = !!t && !!t.callWithLast,
                    r = this._owner ? this._owner : this;
                if (n && r.hasOwnProperty("_value")) {
                    try {
                        e(r._value)
                    } catch (e) {
                        o.logError(e.stack || e.message)
                    }
                    if (i) return
                }
                r._listeners.push({
                    cb: e,
                    owner: this,
                    once: !!t && !!t.once
                })
            }, r.prototype.unsubscribe = function(e) {
                var t = this._owner ? this._owner : this;
                void 0 === e && (e = null);
                for (var i = t._listeners, o = i.length; o--;) i[o].owner !== this && t !== this || i[o].cb !== e && null !== e || i.splice(o, 1)
            }, r.prototype.listeners = function() {
                return (this._owner ? this._owner : this)._listeners
            }, r.prototype.readonly = function() {
                if (this._readonlyInstance) return this._readonlyInstance;
                var e = this._readonlyInstance = new n;
                return e.subscribe = this.subscribe.bind(this), e.unsubscribe = this.unsubscribe.bind(this), e.value = this.value.bind(this), e.when = this.when.bind(this), e.spawn = function() {
                    return this.spawn().readonly()
                }.bind(this), this.destroy && (e.destroy = this.destroy.bind(this)), e
            }, r.prototype.spawn = function(e) {
                var t = new r;
                return delete t._listeners, t._owner = this._owner || this, t.destroy = function() {
                    if ("function" == typeof e) try {
                        e()
                    } catch (e) {
                        o.logError(e.stack || e.message)
                    }
                    this.unsubscribe(), delete this._owner
                }, t
            }, r.prototype.when = function(e) {
                var t = this;
                if (this.value()) try {
                    e()
                } catch (e) {
                    o.logError(e.stack || e.message)
                } else {
                    var i = function(o) {
                        o && (t.unsubscribe(i), e())
                    };
                    t.subscribe(i)
                }
            }, r.prototype.opposite = function() {
                if (!this._opposite) {
                    var e = this,
                        t = new r(!this.value());
                    this.subscribe((function(e) {
                        t.setValue(!e)
                    })), t.subscribe((function(t) {
                        e.setValue(!t)
                    })), this._opposite = t
                }
                return this._opposite
            }, "undefined" != typeof window && (window.WatchedValue = r), e && e.exports && (e.exports = r)
        },
        938669: (e, t, i) => {
            "use strict";
            i.d(t, {
                VerticalAttachEdge: () => o,
                HorizontalAttachEdge: () => n,
                VerticalDropDirection: () => r,
                HorizontalDropDirection: () => s,
                getPopupPositioner: () => c
            });
            var o, n, r, s, a = i(416282);
            ! function(e) {
                e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom"
            }(o || (o = {})),
            function(e) {
                e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
            }(n || (n = {})),
            function(e) {
                e[e.FromTopToBottom = 0] = "FromTopToBottom",
                    e[e.FromBottomToTop = 1] = "FromBottomToTop"
            }(r || (r = {})),
            function(e) {
                e[e.FromLeftToRight = 0] = "FromLeftToRight", e[e.FromRightToLeft = 1] = "FromRightToLeft"
            }(s || (s = {}));
            const l = {
                verticalAttachEdge: o.Bottom,
                horizontalAttachEdge: n.Left,
                verticalDropDirection: r.FromTopToBottom,
                horizontalDropDirection: s.FromLeftToRight,
                verticalMargin: 0,
                horizontalMargin: 0,
                matchButtonAndListboxWidths: !1
            };

            function c(e, t) {
                return (i, c) => {
                    const d = (0, a.ensureNotNull)(e).getBoundingClientRect(),
                        {
                            verticalAttachEdge: u = l.verticalAttachEdge,
                            verticalDropDirection: h = l.verticalDropDirection,
                            horizontalAttachEdge: p = l.horizontalAttachEdge,
                            horizontalDropDirection: g = l.horizontalDropDirection,
                            horizontalMargin: m = l.horizontalMargin,
                            verticalMargin: _ = l.verticalMargin,
                            matchButtonAndListboxWidths: f = l.matchButtonAndListboxWidths
                        } = t,
                        v = u === o.Top ? -1 * _ : _,
                        w = p === n.Right ? d.right : d.left,
                        y = u === o.Top ? d.top : d.bottom,
                        b = {
                            x: w - (g === s.FromRightToLeft ? i : 0) + m,
                            y: y - (h === r.FromBottomToTop ? c : 0) + v
                        };
                    return f && (b.overrideWidth = d.width), b
                }
            }
        },
        350138: (e, t, i) => {
            "use strict";
            i.d(t, {
                trackButtonClick: () => n
            });
            var o = i(771073);

            function n(e, t, i) {
                (0, o.getTracker)().then(o => {
                    null !== o && o.trackToolbarButtonClick(e, i ? `${t} ${i}` : t)
                })
            }
        },
        370104: (e, t, i) => {
            "use strict";
            i.d(t, {
                VerticalScroll: () => h
            });
            var o = i(667294),
                n = i(294184),
                r = i.n(n),
                s = i(836982),
                a = i(640539),
                l = i(468450),
                c = i(971928),
                d = i(24816),
                u = i(329123);
            class h extends o.PureComponent {
                constructor(e) {
                    super(e), this._scroll = null, this._handleScrollTop = () => {
                        this.animateTo(Math.max(0, this.currentPosition() - (this.state.heightWrap - 50)))
                    }, this._handleScrollBot = () => {
                        this.animateTo(Math.min((this.state.heightContent || 0) - (this.state.heightWrap || 0), this.currentPosition() + (this.state.heightWrap - 50)))
                    }, this._handleResizeWrap = ({
                        height: e
                    }) => {
                        this.setState({
                            heightWrap: e
                        })
                    }, this._handleResizeContent = ({
                        height: e
                    }) => {
                        this.setState({
                            heightContent: e
                        })
                    }, this._handleScroll = () => {
                        const {
                            onScroll: e
                        } = this.props;
                        e && e(this.currentPosition(), this.isAtTop(), this.isAtBot()), this._checkButtonsVisibility()
                    }, this._checkButtonsVisibility = () => {
                        const {
                            isVisibleTopButton: e,
                            isVisibleBotButton: t
                        } = this.state, i = this.isAtTop(), o = this.isAtBot();
                        i || e ? i && e && this.setState({
                            isVisibleTopButton: !1
                        }) : this.setState({
                            isVisibleTopButton: !0
                        }), o || t ? o && t && this.setState({
                            isVisibleBotButton: !1
                        }) : this.setState({
                            isVisibleBotButton: !0
                        })
                    }, this.state = {
                        heightContent: 0,
                        heightWrap: 0,
                        isVisibleBotButton: !1,
                        isVisibleTopButton: !1
                    }
                }
                componentDidMount() {
                    this._checkButtonsVisibility()
                }
                componentDidUpdate(e, t) {
                    t.heightWrap === this.state.heightWrap && t.heightContent === this.state.heightContent || this._handleScroll()
                }
                currentPosition() {
                    return this._scroll ? this._scroll.scrollTop : 0
                }
                isAtTop() {
                    return this.currentPosition() <= 1
                }
                isAtBot() {
                    return this.currentPosition() + this.state.heightWrap >= this.state.heightContent - 1
                }
                animateTo(e, t = c.dur) {
                    const i = this._scroll;
                    i && (0, l.doAnimate)({
                        onStep(e, t) {
                            i.scrollTop = t
                        },
                        from: i.scrollTop,
                        to: Math.round(e),
                        easing: c.easingFunc.easeInOutCubic,
                        duration: t
                    })
                }
                render() {
                    const {
                        children: e,
                        isVisibleScrollbar: t,
                        isVisibleFade: i,
                        isVisibleButtons: n,
                        onMouseOver: l,
                        onMouseOut: c
                    } = this.props, {
                        heightContent: h,
                        heightWrap: p,
                        isVisibleBotButton: g,
                        isVisibleTopButton: m
                    } = this.state;
                    return o.createElement(s, {
                        whitelist: ["height"],
                        onMeasure: this._handleResizeWrap
                    }, o.createElement("div", {
                        className: d.wrap,
                        onMouseOver: l,
                        onMouseOut: c
                    }, o.createElement("div", {
                        className: r()(d.scrollWrap, {
                            [d.noScrollBar]: !t
                        }),
                        onScroll: this._handleScroll,
                        ref: e => this._scroll = e
                    }, o.createElement(s, {
                        onMeasure: this._handleResizeContent,
                        whitelist: ["height"]
                    }, o.createElement("div", {
                        className: d.content
                    }, e))), i && o.createElement("div", {
                        className: r()(d.fadeTop, {
                            [d.isVisible]: m && h > p
                        })
                    }), i && o.createElement("div", {
                        className: r()(d.fadeBot, {
                            [d.isVisible]: g && h > p
                        })
                    }), n && o.createElement("div", {
                        className: r()(d.scrollTop, {
                            [d.isVisible]: m && h > p
                        }),
                        onClick: this._handleScrollTop
                    }, o.createElement("div", {
                        className: d.iconWrap
                    }, o.createElement(a.Icon, {
                        icon: u,
                        className: d.icon
                    }))), n && o.createElement("div", {
                        className: r()(d.scrollBot, {
                            [d.isVisible]: g && h > p
                        }),
                        onClick: this._handleScrollBot
                    }, o.createElement("div", {
                        className: d.iconWrap
                    }, o.createElement(a.Icon, {
                        icon: u,
                        className: d.icon
                    })))))
                }
            }
            h.defaultProps = {
                isVisibleScrollbar: !0
            }
        },
        96431: (e, t, i) => {
            "use strict";
            i.d(t, {
                validateRegistry: () => a,
                RegistryProvider: () => l,
                useRegistry: () => c,
                registryContextType: () => d
            });
            var o = i(667294),
                n = i(45697),
                r = i.n(n);
            const s = o.createContext({});

            function a(e, t) {
                r().checkPropTypes(t, e, "context", "RegistryContext")
            }

            function l(e) {
                const {
                    validation: t,
                    value: i
                } = e;
                return a(i, t), o.createElement(s.Provider, {
                    value: i
                }, e.children)
            }

            function c(e) {
                const t = (0, o.useContext)(s);
                return a(t, e), t
            }

            function d() {
                return s
            }
        },
        550205: (e, t, i) => {
            "use strict";
            i.d(t, {
                TabButton: () => a
            });
            var o = i(667294),
                n = i(294184),
                r = i(640539),
                s = i(261552);

            function a(e) {
                e = {
                    isTab: !0,
                    theme: s,
                    ...e
                };
                const {
                    NotificationComponent: t = l
                } = e, i = n(e.className, e.theme.button, e.isTab && e.theme.isTab, e.isActive && e.theme.isActive, e.isGrayed && e.theme.isGrayed, e.hint && "apply-common-tooltip common-tooltip-vertical");
                return o.createElement("div", {
                    className: i,
                    title: e.hint,
                    onClick: e.onClick,
                    ref: e.reference,
                    "data-role": "button",
                    "data-name": e.name
                }, o.createElement("div", {
                    className: e.theme.hoverMask
                }), o.createElement(r.Icon, {
                    icon: e.icon
                }), o.createElement("div", {
                    className: e.theme.counterRow
                }, o.createElement(t, {
                    className: e.theme.counter,
                    count: e.count,
                    "data-name": "counter"
                })))
            }

            function l(e) {
                return o.createElement("span", {
                    className: e.className,
                    "data-name": "counter"
                }, e.count && 0 !== e.count ? e.count.toString() : void 0)
            }
        },
        607562: (e, t, i) => {
            "use strict";
            i.d(t, {
                SidebarCustomScroll: () => h
            });
            var o = i(195355),
                n = i(896276),
                r = i.n(n),
                s = i(491496),
                a = i(468450),
                l = i(64011),
                c = i(347666),
                d = (i(610090), i(466517));
            const u = {
                headerHeight: 0,
                additionalClass: "",
                alwaysVisible: !1,
                showBottomShadow: !0,
                scrollMarginTop: 1,
                bubbleScrollEvent: !1
            };
            class h {
                constructor(e, t, i = {}) {
                    if (this.scrolled = new(r()), this.scrolltoend = new(r()), this.scrolltostart = new(r()), this.visibilityCallbacks = [], this._scrollTargetTop = 0, this._scrollSpeed = 40, this._shadowOffset = 10, this._shadowTop = null, this._shadowBottom = null, this._bottomFixed = !1,
                        this._dragInitialized = !1, this._dragging = !1, this._draggable = null, this._atStart = !1, this._atEnd = !1, this._stickyBottom = null, this._tempIntervalID = void 0, this._animation = null, this._saved = null, this._options = { ...u,
                            ...i
                        }, this._wrapper = e, this._wrapper.classList.add(d.wrapper), this._content = t, this._headerHeight = this._options.headerHeight, this._scrollMarginTop = this._options.scrollMarginTop, this._scrollBar = document.createElement("div"), this._scrollBar.classList.add("sb-scrollbar", "sb-scrollbar-body"), this._options.additionalClass && this._scrollBar.classList.add(this._options.additionalClass), this._scrollBar.classList.toggle("active-always", this._options.alwaysVisible), this._scrollBarWrapper = document.createElement("div"), this._scrollBarWrapper.classList.add("sb-scrollbar-wrap"), this._touch = o.touch, this._touch) return this._content.style.position = "relative", this._wrapper.classList.add(d.touch), void this._wrapper.addEventListener("scroll", () => this._onScroll());
                    this._wrapper.style.overflow = "hidden", this._unsubscribe = (() => {
                        const e = () => {
                                this._bottomFixed || this._dragging || (this._options.alwaysVisible || this._scrollBar.classList.add("active"), this._onScroll())
                            },
                            t = () => {
                                this._bottomFixed || this._dragging || (this._options.alwaysVisible || this._scrollBar.classList.remove("active"), this._onScroll())
                            },
                            i = e => {
                                if (!e.defaultPrevented) {
                                    const t = (0, c.getPixelsFromEvent)(e, () => ({
                                        height: this._wrapper.clientHeight
                                    })).y;
                                    this.scroll(-t, 1) || (e.stopPropagation(), e.preventDefault())
                                }
                            };
                        return this._wrapper.addEventListener("mouseenter", e), this._wrapper.addEventListener("mouseleave", t), this._wrapper.addEventListener("wheel", i), () => {
                            this._wrapper.removeEventListener("mouseenter", e), this._wrapper.removeEventListener("mouseleave", t), this._wrapper.removeEventListener("wheel", i)
                        }
                    })(), !1 !== this._options.showTopShadow && (this._shadowTop = document.createElement("div"), this._shadowTop.classList.add("sb-inner-shadow", "top", "i-invisible"), this._wrapper.appendChild(this._shadowTop)), !1 !== this._options.showBottomShadow && (this._shadowBottom = document.createElement("div"), this._shadowBottom.classList.add("sb-inner-shadow"), this._wrapper.appendChild(this._shadowBottom)), this._shadowTop && this._headerHeight && (this._shadowTop.style.top = this._headerHeight - this._shadowOffset + "px"), this._wrapper.appendChild(this._scrollBarWrapper), this._scrollBarWrapper.appendChild(this._scrollBar), this._onScroll()
                }
                isTouch() {
                    return this._touch
                }
                getScrollBar() {
                    return this._scrollBar
                }
                initDraggable() {
                    return this._dragInitialized || (this._draggable = new l.Draggable({
                        axis: "y",
                        source: this._scrollBar,
                        containment: this._scrollBarWrapper,
                        start: () => {
                            this._dragging = !0
                        },
                        stop: () => {
                            this._dragging = !1
                        },
                        drag: () => {
                            this.updateScroll()
                        }
                    }), this._dragInitialized = !0), this
                }
                updateScroll() {
                    if (this._touch) return this;
                    const e = Math.ceil((0, s.position)(this._scrollBar).top - this._scrollMarginTop - this._headerHeight),
                        t = this.getContainerHeightWithoutHeader(),
                        i = (0, s.outerHeight)(this._content),
                        o = i - t - 1;
                    return t <= 0 || (this._scrollTargetTop = o <= 0 ? this._headerHeight : Math.min(-e * i / t + this._headerHeight, this._headerHeight), e + (0,
                        s.contentHeight)(this._scrollBar) + 2 >= t ? this.scrollToEnd() : (this._content.style.top = this._scrollTargetTop + "px", this._onScroll())), this
                }
                getContainerHeightWithoutHeader() {
                    return this._wrapper.getBoundingClientRect().height - this._headerHeight
                }
                getContainerHeight() {
                    return this._wrapper.getBoundingClientRect().height
                }
                getContentHeight() {
                    return this._content.getBoundingClientRect().height
                }
                updateScrollBar() {
                    if (this._touch) return this;
                    const e = (0, s.position)(this._content).top,
                        t = this.getContentHeight(),
                        i = this.getContainerHeight(),
                        o = this.getContainerHeightWithoutHeader(),
                        n = 1 + this._headerHeight,
                        r = o - 2,
                        a = (Math.abs(e) - this._headerHeight) * r / t,
                        l = i * i / t;
                    return this.isContentShort() ? (this._scrollBar.classList.add("js-hidden"), this._wrapper.classList.remove("sb-scroll-active")) : (this._scrollBar.classList.remove("js-hidden"), this._scrollBar.style.height = l + "px", this._scrollBar.style.top = n + a + "px", this._wrapper.classList.add("sb-scroll-active"), this.initDraggable()), this
                }
                scroll(e, t) {
                    const i = (0, s.position)(this._content).top,
                        o = (0, s.outerHeight)(this._content) - this.getContainerHeightWithoutHeader() - 1,
                        n = t || this._scrollSpeed;
                    return o <= 0 || (this._scrollTargetTop = Math.max(-o + this._headerHeight, Math.min(this._headerHeight, i + e * n)), this.setContentTop(this._scrollTargetTop), this._onScroll())
                }
                animateTo(e) {
                    if (this._touch) return this;
                    const t = (0, s.outerHeight)(this._content) - this.getContainerHeightWithoutHeader() - 1;
                    if (t <= 0) return !0;
                    this._scrollTargetTop = Math.max(-t + this._headerHeight, Math.min(this._headerHeight, -e)), this._animation && this._animation.stop(), this._animation = (0, a.doAnimate)({
                        duration: 500,
                        from: parseFloat(getComputedStyle(this._content).top),
                        to: this._scrollTargetTop,
                        onStep: (e, t) => {
                            this._content.style.top = t + "px"
                        },
                        onComplete: () => {
                            this._onScroll()
                        }
                    })
                }
                resize() {
                    if (this._bottomFixed) return;
                    const e = (0, s.outerHeight)(this._content),
                        t = (0, s.outerHeight)(this._wrapper);
                    !this._options.vAlignBottom && e < t ? this.atStart() || this.scrollToStart() : this.atEnd() ? this.scrollToEnd() : "number" == typeof this._stickyBottom && this.setContentTop(Math.min(0, this._stickyBottom + (0, s.outerHeight)(this._wrapper) - (0, s.outerHeight)(this._content)))
                }
                resizeHeader(e) {
                    const t = e - this._headerHeight;
                    this._headerHeight = e, this._scrollTargetTop += t, this._shadowTop && (this._shadowTop.style.top = this._headerHeight - this._shadowOffset + "px"), this.resize()
                }
                scrollTo(e, t) {
                    const i = {
                        position: "visible",
                        areaHeight: e instanceof HTMLElement ? (0, s.contentHeight)(e) : 0,
                        ...t
                    };
                    e instanceof HTMLElement && (e = i.offsetTop || (0, s.position)(e).top);
                    const o = (0, s.position)(this._content).top,
                        n = this._content.getBoundingClientRect().height,
                        r = this.getContainerHeightWithoutHeader();
                    if (n - r - 1 <= 0) return !0;
                    const a = -1 * (o - this._headerHeight),
                        l = a + r;
                    let c = 0;
                    if ("visible" === i.position) {
                        if (e > a && e + i.areaHeight < l) return !1;
                        c = e + i.areaHeight > l ? l - e - i.areaHeight : a - e
                    } else "top" === i.position && (c = a - e);
                    return this.scroll(c, 1), this._onScroll(), !1
                }
                scrollToEnd() {
                    const e = (0, s.position)(this._content).top,
                        t = (0, s.outerHeight)(this._content),
                        i = (0, s.outerHeight)(this._wrapper),
                        o = t > i ? e + (i - (t + e)) + 1 : 1;
                    return this.setContentTop(o), this._onScroll(), this
                }
                scrollToStart() {
                    return this.setContentTop(this._headerHeight), this._onScroll(), this
                }
                currentPosition() {
                    return Math.round((0, s.position)(this._content).top)
                }
                atStart() {
                    return Math.round((0, s.position)(this._content).top) >= this._headerHeight
                }
                atEnd(e) {
                    "number" == typeof e && isFinite(e) || (e = 0);
                    const t = Math.round((0, s.position)(this._content).top),
                        i = Math.round((0, s.outerHeight)(this._content)),
                        o = Math.round((0, s.outerHeight)(this._wrapper));
                    return i - Math.abs(t) - 1 <= o + e
                }
                checkContentVisibility() {
                    this._onContentVisible()
                }
                subscribeToContentVisible(e, t, i) {
                    this.visibilityCallbacks.push({
                        id: e,
                        element: t,
                        callback: i
                    })
                }
                triggerVisibilityCallbacks(e) {
                    this._onContentVisible(e)
                }
                save() {
                    return this._saved = {
                        top: (0, s.position)(this._content).top,
                        height: (0, s.outerHeight)(this._content)
                    }, this
                }
                restore() {
                    if (this._saved) {
                        if (this._saved.top === (0, s.position)(this._content).top && this._saved.height === (0, s.outerHeight)(this._content)) return this._saved = null, this;
                        this._options.vAlignBottom && (this._saved.top -= (0, s.outerHeight)(this._content) - this._saved.height, this._saved.top > this._headerHeight && (this._saved.top = this._headerHeight)), this.setContentTop(this._saved.top), this._saved = null, this._onScroll(!0)
                    }
                    return this
                }
                fixBottom() {
                    if (this._bottomFixed) return this;
                    if (this._touch) {
                        const e = (0, s.outerHeight)(this._content),
                            t = this._wrapper.scrollTop;
                        this._tempIntervalID = setInterval(() => {
                            this._wrapper.scrollTop = t + ((0, s.outerHeight)(this._content) - e)
                        }, 0)
                    } else this._content.style.top = "auto", this._content.style.bottom = (0, s.outerHeight)(this._wrapper) - (0, s.position)(this._content).top - (0, s.outerHeight)(this._content) + "px";
                    return this._bottomFixed = !0, this
                }
                releaseBottom() {
                    return this._bottomFixed ? (this._touch ? clearInterval(this._tempIntervalID) : (this._content.style.bottom = "auto", this._content.style.top = (0, s.position)(this._content).top + "px"), this._bottomFixed = !1, this._onScroll(), this) : this
                }
                setContentTop(e) {
                    return this._touch ? this._options.vAlignBottom && (0, s.outerHeight)(this._content) < (0, s.outerHeight)(this._wrapper) ? (this._wrapper.style.overflowY = "visible", this._content.style.position = "absolute", this._content.style.bottom = "0px") : (this._content.style.position = "relative", this._content.style.position = "auto", this._wrapper.style.overflowY = "auto", this._wrapper.scrollTop = -e) : this._content.style.top = e + "px", this
                }
                isContentShort() {
                    return this.getContentHeight() <= this.getContainerHeightWithoutHeader()
                }
                destroy() {
                    var e;
                    this._animation && this._animation.stop(), this._scrollBarWrapper && this._scrollBarWrapper.remove(), this._shadowBottom && this._shadowBottom.remove(), this._shadowTop && this._shadowTop.remove(), this._draggable && (this._draggable.destroy(), this._draggable = null), this._content.style.cssText = "", this._wrapper.style.cssText = "", null === (e = this._unsubscribe) || void 0 === e || e.call(this)
                }
                _onScroll(e) {
                    this._touch || (this._content.style.bottom = "auto"), this.scrolled.fire(), this._dragging && !0 !== e || this.updateScrollBar();
                    const t = this.atStart(),
                        i = this.atEnd();
                    return this._shadowTop && this._shadowTop.classList.toggle("i-invisible", !!t),
                        this._shadowBottom && this._shadowBottom.classList.toggle("i-invisible", !!i), this._onContentVisible(), !this._atStart && t ? (this._atStart = !0, this.scrolltostart.fire()) : this._atStart && !t && (this._atStart = !1), !this._atEnd && i ? (this._atEnd = !0, this.scrolltoend.fire()) : this._atEnd && !i && (this._atEnd = !1), this._options.vAlignBottom && (this._stickyBottom = (0, s.outerHeight)(this._content) - Math.abs((0, s.position)(this._content).top) - (0, s.outerHeight)(this._wrapper)), (this._atStart || this._atEnd) && ("function" == typeof this._options.bubbleScrollEvent ? Boolean(this._options.bubbleScrollEvent()) : Boolean(this._options.bubbleScrollEvent))
                }
                _contentIsVisible(e) {
                    return (0, s.position)(e.element).top > -1 * this.currentPosition()
                }
                _onContentVisible(e) {
                    if (!this.visibilityCallbacks.length) return;
                    const t = e || this._contentIsVisible.bind(this),
                        i = [],
                        o = this.visibilityCallbacks.filter((e, o) => {
                            if (!this._content.contains(e.element)) return !1;
                            const n = t(e);
                            return n && i.push(o), !n
                        });
                    i.forEach(t => {
                        this.visibilityCallbacks[t].callback(!!e)
                    }), this.visibilityCallbacks = o
                }
            }
        },
        930112: (e, t, i) => {
            "use strict";
            var o;
            i.d(t, {
                    TradingPage: () => o,
                    MAX_PANEL_WIDTH: () => n,
                    PANEL_WIDTH: () => r,
                    PANEL_HEIGHT: () => s
                }),
                function(e) {
                    e.DomPanel = "domPanel", e.OrderPanel = "orderPanel"
                }(o || (o = {}));
            const n = 400,
                r = 315,
                s = 451
        },
        42258: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                TRADING_SERVICE: () => n,
                tradingService: () => r,
                waitTradingService: () => s
            });
            var o = i(360531);
            const n = {
                id: "TradingService"
            };

            function r() {
                return (0, o.hasService)(n) ? (0, o.service)(n) : null
            }

            function s() {
                return (0, o.waitServiceRegistered)(n)
            }
        },
        505417: (e, t, i) => {
            "use strict";
            i.d(t, {
                japaneseChartStyles: () => r,
                commonChartStyles: () => s,
                allChartStyles: () => a
            });
            var o = i(198006),
                n = i(307833);

            function r() {
                const e = [8];
                return n.enabled("japanese_chart_styles") && (e.push(4, 7, 5, 6), e.push(11)), e
            }

            function s() {
                const e = [0, 1, 9, 2, 3, 10];
                return (0, o.isFeatureEnabled)("chart_style_hilo") && e.push(12), e
            }

            function a() {
                return s().concat(r())
            }
        },
        280790: (e, t, i) => {
            "use strict";
            i.d(t, {
                NumericFormatter: () => r
            });
            var o = i(511228),
                n = i(593302);
            class r {
                constructor(e) {
                    this._precision = e
                }
                format(e) {
                    return (void 0 !== this._precision ? e.toFixed(this._precision) : r.formatNoE(e)).replace(".", o.formatterOptions.decimalSign)
                }
                parse(e) {
                    const t = e.replace(o.formatterOptions.decimalSign, ".");
                    let i = parseFloat(t);
                    return this._precision && (i = +i.toFixed(this._precision)), i
                }
                static formatNoE(e) {
                    if (!Number.isFinite(e)) return String(e);
                    const t = new n.Big(e);
                    return t.lt(1) ? t.toFixed() : t.toString()
                }
            }
        },
        414704: (e, t, i) => {
            "use strict";
            i.d(t, {
                PercentageFormatter: () => r
            });
            var o = i(511228),
                n = i(582755);
            class r extends o.PriceFormatter {
                constructor(e) {
                    super(e), this.type = "percentage"
                }
                state() {
                    const e = o.PriceFormatter.prototype.state.call(this);
                    return e.percent = !0, e
                }
                parse(e) {
                    return e = e.replace("%", ""), super.parse(e)
                }
                format(e, t, i, o, r = !0) {
                    const s = super.format(e, t, i, o, !1) + "%";
                    return r ? (0, n.forceLTRStr)(s) : s
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new r(e.priceScale)
                }
            }
        },
        511228: (e, t, i) => {
            "use strict";
            i.d(t, {
                formatterOptions: () => l,
                numberToStringWithLeadingZero: () => c,
                isFormatterHasForexAdditionalPrecision: () => d,
                PriceFormatter: () => u
            });
            var o = i(120220),
                n = i(331565),
                r = i(582755);
            const s = (0, i(987380).getLogger)("Chart.PriceFormatter"),
                a = new RegExp(/^(-?)[0-9]+$/),
                l = {
                    decimalSign: ".",
                    decimalSignFractional: "'"
                };

            function c(e, t) {
                if (!(0, n.isNumber)(e)) return "n/a";
                if (!(0, n.isInteger)(t)) throw new TypeError("invalid length");
                if (t < 0 || t > 16) throw new TypeError("invalid length");
                if (0 === t) return e.toString();
                return ("0000000000000000" + e.toString()).slice(-t)
            }

            function d(e) {
                return "hasForexAdditionalPrecision" in e
            }
            class u {
                constructor(e, t, i, r) {
                    if (this.type = "price", this._formatterErrors = {
                            custom: (0, o.t)("Price format is invalid."),
                            fraction: (0, o.t)("Fraction part is invalid."),
                            secondFraction: (0, o.t)("Second fraction part is invalid.")
                        }, t || (t = 1), (0, n.isNumber)(e) && (0, n.isInteger)(e) || (e = 100), e < 0) throw new TypeError("invalid base");
                    this._priceScale = e, this._minMove = t, this._minMove2 = r, i && void 0 !== r && r > 0 && 2 !== r && 4 !== r && 8 !== r ? s.logDebug("invalid minmove2") : (this._fractional = i, this.calculateDecimal())
                }
                isFractional() {
                    return !!this._fractional
                }
                state() {
                    return {
                        fractional: this._fractional,
                        fractionalLength: this._fractionalLength,
                        minMove: this._minMove,
                        minMove2: this._minMove2,
                        priceScale: this._priceScale
                    }
                }
                calculateDecimal() {
                    if (this._fractionalLength = 0, this._priceScale > 0 && this._minMove > 0) {
                        let e = this._priceScale;
                        for (this._fractional && this._minMove2 && (e /= this._minMove2); e > 1;) e /= 10, this._fractionalLength++
                    }
                }
                format(e, t, i, o = !0, n = !0) {
                    let s, a = "";
                    return e < 0 ? (a = !1 === o ? "" : "−", e = -e) : e && !0 === t && (a = "+"), s = this._fractional ? a + this._formatAsFractional(e, i) : a + this._formatAsDecimal(e, i), n ? (0, r.forceLTRStr)(s) : s
                }
                parse(e) {
                    return e = (e = (0, r.stripLTRMarks)(e)).replace("−", "-"), this._fractional ? this._minMove2 ? this._parseAsDoubleFractional(e) : this._parseAsSingleFractional(e) : this._parseAsDecimal(e)
                }
                hasForexAdditionalPrecision() {
                    return !this._fractional && 10 === this._minMove2
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new u(e.priceScale, e.minMove, e.fractional, e.minMove2)
                }
                _formatAsDecimal(e, t) {
                    let i;
                    t = t || 0, i = this._fractional ? Math.pow(10, this._fractionalLength || 0) : Math.pow(10, t) * this._priceScale / this._minMove;
                    const o = 1 / i;
                    let n;
                    if (i > 1) n = Math.floor(e);
                    else {
                        const t = Math.floor(Math.round(e / o) * o);
                        n = 0 === Math.round((e - t) / o) ? t : t + o
                    }
                    let r = "";
                    if (i > 1) {
                        let o = parseFloat((Math.round(e * i) - n * i).toFixed(this._fractionalLength));
                        o >= i && (o -= i, n += 1);
                        const s = void 0 !== this._fractionalLength ? this._fractionalLength : NaN;
                        r = l.decimalSign + c(parseFloat(o.toFixed(this._fractionalLength)) * this._minMove, s + t), r = this._removeEndingZeros(r, t)
                    }
                    return n.toString() + r
                }
                _getFractPart(e, t) {
                    const i = [0, 5],
                        o = [0, 2, 5, 7];
                    return 2 === t ? void 0 === i[e] ? -1 : i[e] : 4 === t ? void 0 === o[e] ? -1 : o[e] : e
                }
                _formatAsFractional(e, t) {
                    const i = this._priceScale / this._minMove;
                    let o = Math.floor(e),
                        n = t ? Math.floor(e * i) - o * i : Math.round(e * i) - o * i;
                    n === i && (n = 0, o += 1);
                    let r = "";
                    if (t) {
                        let s = (e - o - n / i) * i;
                        s = Math.round(s * Math.pow(10, t)), r = c(s, t), r = this._removeEndingZeros(r, t)
                    }
                    if (!this._fractionalLength) throw new Error("_fractionalLength is not calculated");
                    let s = "";
                    if (this._minMove2) {
                        const e = n % this._minMove2;
                        n = (n - e) / this._minMove2;
                        const t = c(n, this._fractionalLength),
                            i = this._getFractPart(e, this._minMove2);
                        s = t + l.decimalSignFractional + i
                    } else n = this._getFractPart(n, this._priceScale), s = c(n * this._minMove, this._fractionalLength);
                    return o.toString() + l.decimalSignFractional + s + r
                }
                _removeEndingZeros(e, t) {
                    for (let i = 0; i < t && "0" === e[e.length - 1]; i++) e = e.substring(0, e.length - 1);
                    return e
                }
                _parseAsDecimal(e) {
                    let t = a.exec(e);
                    if (t) {
                        const t = parseFloat(e);
                        return {
                            value: t,
                            res: !0,
                            suggest: this.format(t)
                        }
                    }
                    if (t = new RegExp("^(-?)[0-9]+\\" + l.decimalSign + "[0-9]*$").exec(e), t) {
                        const t = parseFloat(e.replace(l.decimalSign, "."));
                        return {
                            value: t,
                            res: !0,
                            suggest: this.format(t)
                        }
                    }
                    return {
                        error: this._formatterErrors.custom,
                        res: !1
                    }
                }
                _patchFractPart(e, t) {
                    const i = {
                            0: 0,
                            5: 1
                        },
                        o = {
                            0: 0,
                            2: 1,
                            5: 2,
                            7: 3
                        };
                    return 2 === t ? void 0 === i[e] ? -1 : i[e] : 4 === t ? void 0 === o[e] ? -1 : o[e] : e
                }
                _parseAsSingleFractional(e) {
                    let t = a.exec(e);
                    if (t) {
                        const t = parseFloat(e);
                        return {
                            value: t,
                            res: !0,
                            suggest: this.format(t)
                        }
                    }
                    if (t = new RegExp("^(-?)([0-9]+)\\" + l.decimalSignFractional + "([0-9]+)$").exec(e), t) {
                        const e = !!t[1],
                            i = parseInt(t[2]),
                            o = this._priceScale,
                            n = this._patchFractPart(parseInt(t[3]), o);
                        if (n >= o || n < 0) return {
                            error: this._formatterErrors.fraction,
                            res: !1
                        };
                        let r = i + n / o;
                        return e && (r = -r), {
                            value: r,
                            res: !0,
                            suggest: this.format(r)
                        }
                    }
                    return {
                        error: this._formatterErrors.custom,
                        res: !1
                    }
                }
                _parseAsDoubleFractional(e) {
                    let t = a.exec(e);
                    if (t) {
                        const t = parseFloat(e);
                        return {
                            value: t,
                            res: !0,
                            suggest: this.format(t)
                        }
                    }
                    if (t = new RegExp("^(-?)([0-9]+)\\" + l.decimalSignFractional + "([0-9]+)\\" + l.decimalSignFractional + "([0-9]+)$").exec(e), t) {
                        const e = !!t[1],
                            i = parseInt(t[2]),
                            o = void 0 !== this._minMove2 ? this._minMove2 : NaN,
                            n = this._priceScale / o,
                            r = this._minMove2,
                            s = this._patchFractPart(parseInt(t[3]), n),
                            a = this._patchFractPart(parseInt(t[4]), r);
                        if (s >= n || s < 0) return {
                            error: this._formatterErrors.fraction,
                            res: !1
                        };
                        if (void 0 !== r && a >= r || a < 0) return {
                            error: this._formatterErrors.secondFraction,
                            res: !1
                        };
                        let l = void 0 !== r ? i + s / n + a / (n * r) : NaN;
                        return e && (l = -l), {
                            value: l,
                            res: !0,
                            suggest: this.format(l)
                        }
                    }
                    return {
                        error: this._formatterErrors.custom,
                        res: !1
                    }
                }
            }
        },
        681293: (e, t, i) => {
            "use strict";
            i.d(t, {
                PLACE_HOLDER: () => a,
                VolumeFormatter: () => l
            });
            var o = i(120220),
                n = i(280790),
                r = i(331565),
                s = i(775496);
            const a = "---";
            class l {
                constructor(e) {
                    this.type = "volume", this._numericFormatter = new n.NumericFormatter, this._fractionalValues = void 0 !== e && e > 0, this._precision = e
                }
                state() {
                    return {
                        precision: this._precision
                    }
                }
                format(e, t) {
                    if (!(0, r.isNumber)(e)) return a;
                    let i = "";
                    return e < 0 ? (i = "−", e = -e) : e > 0 && t && (i = "+"), e >= 1e100 ? (0, o.t)("N/A") : (!this._fractionalValues || e >= 995 ? e = Math.round(e) : this._fractionalValues && (e = +e.toFixed(this._precision)), e < 995 ? i + this._formatNumber(e) : e < 999995 ? i + this._formatNumber(e / 1e3) + "K" : e < 999999995 ? (e = 1e3 * Math.round(e / 1e3), i + this._formatNumber(e / 1e6) + "M") : e < 999999999995 ? (e = 1e6 * Math.round(e / 1e6), i + this._formatNumber(e / 1e9) + "B") : (e = 1e9 * Math.round(e / 1e9), i + this._formatNumber(e / 1e12) + "T"))
                }
                parse(e) {
                    if ("---" === e) return {
                        error: "not a number",
                        res: !1,
                        value: NaN
                    };
                    const t = {
                            K: 1e3,
                            M: 1e6,
                            B: 1e9
                        },
                        i = e.slice(-1);
                    if (t.hasOwnProperty(i)) {
                        const o = this._numericFormatter.parse(e.slice(0, -1));
                        return (0, r.isNumber)(o) ? {
                            res: !0,
                            value: o * t[i]
                        } : {
                            error: "not a number",
                            res: !1,
                            value: NaN
                        }
                    } {
                        const t = this._numericFormatter.parse(e);
                        return (0, r.isNumber)(t) ? {
                            res: !0,
                            value: t
                        } : {
                            error: "not a number",
                            res: !1,
                            value: NaN
                        }
                    }
                }
                static serialize(e) {
                    return e.state()
                }
                static deserialize(e) {
                    return new l(e.precision)
                }
                _formatNumber(e) {
                    return this._fractionalValues && (e = (0, s.fixComputationError)(e)), this._numericFormatter.format(e).replace(/(\.[1-9]*)0+$/, (e, t) => t)
                }
            }
        },
        302459: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                ResolutionKind: () => r,
                SpecialResolutionKind: () => s,
                Interval: () => d,
                isHour: () => h
            });
            const o = /^(\d*)([TSHDWMR])$/,
                n = /^(\d+)$/;
            var r, s;
            ! function(e) {
                e.Ticks = "ticks", e.Seconds = "seconds", e.Minutes = "minutes", e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Range = "range", e.Invalid = "invalid"
            }(r || (r = {})),
            function(e) {
                e.Hours = "hours"
            }(s || (s = {}));
            const a = {};
            a[r.Ticks] = 1e3, a[r.Seconds] = 1e3, a[r.Minutes] = 60 * a[r.Seconds], a[r.Days] = 1440 * a[r.Minutes], a[r.Weeks] = 7 * a[r.Days];
            const l = {
                    T: r.Ticks,
                    S: r.Seconds,
                    D: r.Days,
                    W: r.Weeks,
                    M: r.Months,
                    R: r.Range
                },
                c = new Set([r.Ticks, r.Seconds, r.Minutes]);
            class d {
                constructor(e, t) {
                    this._kind = r.Invalid, this._multiplier = 0, e !== r.Invalid && t > 0 && (this._kind = e, this._multiplier = t)
                }
                kind() {
                    return this._kind
                }
                multiplier() {
                    return this._multiplier
                }
                isValid() {
                    return this.kind() !== r.Invalid && this.multiplier() > 0
                }
                isDWM() {
                    return this.isValid() && !this.isRange() && !this.isIntraday() && !this.isTicks()
                }
                isIntraday() {
                    const e = c.has(this.kind());
                    return this.isValid() && e
                }
                isSeconds() {
                    return this.kind() === r.Seconds
                }
                isMinutes() {
                    return this.kind() === r.Minutes
                }
                isMinuteHours() {
                    return this.kind() === r.Minutes && h(this.multiplier())
                }
                isDays() {
                    return this.kind() === r.Days
                }
                isWeeks() {
                    return this.kind() === r.Weeks
                }
                isMonths() {
                    return this.kind() === r.Months
                }
                isRange() {
                    return this.kind() === r.Range
                }
                isTicks() {
                    return this.kind() === r.Ticks
                }
                isTimeBased() {
                    return !this.isRange()
                }
                letter() {
                    return this.isValid() && this.kind() !== r.Minutes ? this.kind()[0].toUpperCase() : ""
                }
                value() {
                    return this.isValid() ? this.kind() === r.Minutes ? this.multiplier() + "" : this.multiplier() + this.letter() : ""
                }
                isEqualTo(e) {
                    if (!(e instanceof d)) throw new Error("Argument is not an Interval");
                    return !(!this.isValid() || !e.isValid()) && (this.kind() === e.kind() && this.multiplier() === e.multiplier())
                }
                inMilliseconds(e = Date.now()) {
                    if (!this.isValid() || this.isRange()) return NaN;
                    if (this.isMonths()) {
                        const t = new Date(e);
                        t.setUTCMonth(t.getUTCMonth() + (this.multiplier() || 1));
                        return +t - e
                    }
                    const t = this.multiplier();
                    return a[this.kind()] * t
                }
                static isEqual(e, t) {
                    return e === t || d.parse(e).isEqualTo(d.parse(t))
                }
                static parse(e) {
                    e = (e + "").toUpperCase().split(",")[0];
                    let t = o.exec(e);
                    return null !== t ? "H" === t[2] ? new d(r.Minutes, 60 * u(t[1])) : new d(l[t[2]], u(t[1])) : (t = n.exec(e), null !== t ? new d(r.Minutes, u(t[1])) : new d(r.Invalid, 0))
                }
                static kind(e) {
                    return d.parse(e).kind()
                }
                static isValid(e) {
                    return d.parse(e).isValid()
                }
                static isDWM(e) {
                    return d.parse(e).isDWM()
                }
                static isIntraday(e) {
                    return d.parse(e).isIntraday()
                }
                static isSeconds(e) {
                    return d.parse(e).isSeconds()
                }
                static isMinutes(e) {
                    return d.parse(e).isMinutes()
                }
                static isMinuteHours(e) {
                    return d.parse(e).isMinuteHours()
                }
                static isDays(e) {
                    return d.parse(e).isDays()
                }
                static isWeeks(e) {
                    return d.parse(e).isWeeks()
                }
                static isMonths(e) {
                    return d.parse(e).isMonths()
                }
                static isRange(e) {
                    return d.parse(e).isRange()
                }
                static isTicks(e) {
                    return d.parse(e).isTicks()
                }
                static isTimeBased(e) {
                    return d.parse(e).isTimeBased()
                }
                static normalize(e) {
                    const t = d.parse(e);
                    return t.isValid() ? t.value() : null
                }
            }

            function u(e) {
                return 0 === e.length ? 1 : parseInt(e, 10)
            }

            function h(e) {
                return e >= 60 && !(e % 60)
            }
        },
        895612: (e, t, i) => {
            "use strict";
            var o, n;
            i.d(t, {
                    ResponseMethods: () => o,
                    ErrorReasons: () => n
                }),
                function(e) {
                    e.error = "replay_error", e.point = "replay_point", e.ok = "replay_ok", e.resolutions = "replay_resolutions", e.endOfData = "replay_data_end", e.instanceId = "replay_instance_id"
                }(o || (o = {})),
                function(e) {
                    e.tooSmallDelay = "too_small_delay", e.alreadyInAutoplay = "already_in_autoplay", e.nothingToStop = "nothing_to_stop", e.pointTooDeep = "point_too_deep", e.alreadyInSession = "already_in_session", e.thereIsNoSuchSeries = "no_series", e.notAllowedInAutoplay = "not_allow_in_autoplay", e.invalidResolution = "invalid_resolution"
                }(n || (n = {}))
        },
        697786: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                STATUS_OFFLINE: () => o,
                STATUS_RESOLVING: () => n,
                STATUS_LOADING: () => r,
                STATUS_READY: () => s,
                STATUS_INVALID_SYMBOL: () => a,
                STATUS_SNAPSHOT: () => l,
                STATUS_EOD: () => c,
                STATUS_PULSE: () => d,
                STATUS_DELAYED: () => u,
                STATUS_DELAYED_STREAMING: () => h,
                STATUS_NO_BARS: () => p,
                STATUS_REPLAY: () => g,
                STATUS_ERROR: () => m,
                SERIES_STATUS_TEXT: () => _,
                STYLE_LINE_TYPE_MARKERS: () => f,
                STYLE_LINE_TYPE_STEP: () => v,
                STYLE_LINE_TYPE_SIMPLE: () => w,
                STYLE_BARS: () => y,
                STYLE_CANDLES: () => b,
                STYLE_LINE: () => S,
                STYLE_AREA: () => T,
                STYLE_RENKO: () => E,
                STYLE_KAGI: () => C,
                STYLE_PNF: () => A,
                STYLE_PB: () => I,
                STYLE_HEIKEN_ASHI: () => k,
                STYLE_HOLLOW_CANDLES: () => L,
                STYLE_BASELINE: () => P,
                STYLE_RANGE: () => x,
                STYLE_HILO: () => D,
                STYLE_SHORT_NAMES: () => N,
                SYMBOL_STRING_DATA: () => M
            });
            const o = 0,
                n = 1,
                r = 2,
                s = 3,
                a = 4,
                l = 5,
                c = 6,
                d = 7,
                u = 8,
                h = 9,
                p = 10,
                g = 11,
                m = 12,
                _ = {
                    [o]: "connecting",
                    [n]: "loading",
                    [r]: "loading",
                    [s]: "realtime",
                    [a]: "invalid",
                    [l]: "snapshot",
                    [c]: "endofday",
                    [d]: "endofday",
                    [u]: "delayed",
                    [h]: "delayed_streaming",
                    [p]: "forbidden",
                    [g]: "replay",
                    [m]: "error"
                },
                f = 0,
                v = 1,
                w = 2,
                y = 0,
                b = 1,
                S = 2,
                T = 3,
                E = 4,
                C = 5,
                A = 6,
                I = 7,
                k = 8,
                L = 9,
                P = 10,
                x = 11,
                D = 12,
                N = {
                    0: "bar",
                    1: "candle",
                    9: "hollowCandle",
                    2: "line",
                    3: "area",
                    4: "renko",
                    7: "pb",
                    5: "kagi",
                    6: "pnf",
                    8: "ha",
                    10: "baseline",
                    11: "range",
                    12: "hilo"
                },
                M = {
                    4: {
                        type: "BarSetRenko@tv-prostudies",
                        basicStudyVersion: 40
                    },
                    7: {
                        type: "BarSetPriceBreak@tv-prostudies",
                        basicStudyVersion: 34
                    },
                    5: {
                        type: "BarSetKagi@tv-prostudies",
                        basicStudyVersion: 34
                    },
                    6: {
                        type: "BarSetPnF@tv-prostudies",
                        basicStudyVersion: 34
                    },
                    8: {
                        type: "BarSetHeikenAshi@tv-basicstudies",
                        basicStudyVersion: 60
                    },
                    11: {
                        type: "BarSetRange@tv-basicstudies",
                        basicStudyVersion: 72
                    }
                }
        },
        620554: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                isRequiringRestartSeriesStyles: () => b,
                isRangeBasedStyle: () => S,
                isRangeStyle: () => T,
                isTimeBasedStyle: () => E,
                isValidStyle: () => C,
                isSingleValueBasedStyle: () => A,
                setLastUsedStyle: () => I,
                getLastUsedStyle: () => k,
                getLastUsedSingleValueBasedStyle: () => L,
                getDefaultStyle: () => P,
                getChartStyleByResolution: () => x,
                chartStyleStudyId: () => D,
                preparePriceAxisProperties: () => N,
                hasProjection: () => B,
                isPriceSourceStyle: () => O,
                getSeriesPriceFormattingState: () => R,
                createSeriesFormatter: () => F,
                symbolCurrencyConvertible: () => U,
                symbolCurrency: () => V,
                symbolOriginalCurrency: () => H,
                symbolBaseCurrency: () => W,
                isConvertedToOtherCurrency: () => z,
                symbolUnitConvertible: () => X,
                symbolUnit: () => q,
                symbolOriginalUnit: () => Y,
                isConvertedToOtherUnit: () => G,
                symbolUnitConvertibleGroupsIfExist: () => j,
                symbolCurrentContract: () => $,
                extractSymbolNameFromSymbolInfo: () => J,
                symbolTitle: () => K,
                displayedSymbolName: () => Q,
                displayedSymbolExchange: () => Z,
                actualSymbol: () => ee,
                proSymbol: () => te,
                symbolForApi: () => ie,
                isRegularSessionId: () => oe,
                isCloseBasedSymbol: () => ne,
                hasVolume: () => re,
                isEconomicsSymbol: () => se
            });
            var o = i(342098),
                n = i(697786),
                r = i(302459),
                s = i(511228),
                a = i(307833),
                l = i(198006),
                c = i(416282),
                d = i(681293),
                u = i(414704);
            const h = (0, l.isFeatureEnabled)("unit_conversion"),
                p = a.enabled("pay_attention_to_ticker_not_symbol"),
                g = a.enabled("uppercase_instrument_names"),
                m = a.enabled("charting_library_single_symbol_request"),
                _ = a.enabled("use_ticker_on_symbol_info_update"),
                f = [4, 5, 6, 7, 8],
                v = [4, 5, 6, 7, 8, 11],
                w = [0, 1, 9, 2, 3, 10],
                y = [2, 10, 3];

            function b(e) {
                return -1 !== f.indexOf(e)
            }

            function S(e) {
                return -1 !== v.indexOf(e)
            }

            function T(e) {
                return 11 === e
            }

            function E(e) {
                return -1 !== w.indexOf(e)
            }

            function C(e) {
                return S(e) || E(e)
            }

            function A(e) {
                switch (e) {
                    case 3:
                    case 10:
                    case 2:
                        return !0;
                    default:
                        return !1
                }
            }

            function I(e, t) {
                C(e) && (11 !== e && o.setValue("chart.lastUsedStyle", e), ne(t) && A(e) && o.setValue("chart.lastUsedSingleValueBasedStyle", e))
            }

            function k() {
                const e = o.getInt("chart.lastUsedStyle");
                return void 0 === e ? 1 : e
            }

            function L() {
                const e = o.getInt("chart.lastUsedSingleValueBasedStyle");
                return void 0 === e ? 2 : e
            }

            function P(e) {
                return e ? 11 : 1
            }

            function x(e, t) {
                const i = T(t),
                    o = r.Interval.isRange(e);
                return !i && o ? P(!0) : i && !o ? P(!1) : t
            }

            function D(e, t) {
                const i = n.SYMBOL_STRING_DATA[e];
                return void 0 === i ? null : t ? `${i.type}-${i.basicStudyVersion}` : i.type
            }

            function N(e) {
                const t = e.priceAxisProperties,
                    i = t.lockScale.value(),
                    o = 6 === e.style.value();
                (o || i) && (t.log.setValue(!1), t.percentage.setValue(!1)), t.logDisabled.setValue(!(!o && !i)), t.percentageDisabled.setValue(!(!o && !i))
            }
            const M = [4, 7, 5, 6];

            function B(e) {
                return -1 !== M.indexOf(e)
            }

            function O(e) {
                return y.includes(e)
            }

            function R(e, t = "default", i = !1) {
                let o, n, r = 100,
                    s = 1;
                if ("default" === t) null != e && (r = e.pricescale, s = e.minmov, o = e.fractional, n = e.minmove2);
                else {
                    let e = t.split(",");
                    3 !== e.length && (e = ["100", "1", "false"]), r = parseInt(e[0]), s = parseInt(e[1]), o = "true" === e[2]
                }
                return i && (s = 1), {
                    priceScale: r,
                    minMove: s,
                    fractional: o,
                    minMove2: n
                }
            }

            function F(e, t, i = !1) {
                if ("default" === t && null != e) {
                    if ("volume" === e.formatter || "volume" === e.format) return new d.VolumeFormatter(2);
                    if ("percent" === e.formatter || "percent" === e.format) return new u.PercentageFormatter(e.pricescale)
                }
                const {
                    priceScale: o,
                    minMove: n,
                    fractional: r,
                    minMove2: a
                } = R(e, t, i);
                return new s.PriceFormatter(o, n, r, a)
            }

            function U(e) {
                return null !== e && "spread" !== e.type
            }

            function V(e, t, i) {
                if (null === e) return null;
                const o = !t || i ? e.currency_id : e.currency_code;
                return void 0 === o || "" === o ? null : o
            }

            function H(e, t) {
                return (t ? e.original_currency_code : e.original_currency_id) || V(e, t)
            }

            function W(e) {
                return e.base_currency_id || null
            }

            function z(e) {
                return !(null === e || !U(e)) && (void 0 !== e.original_currency_id && e.original_currency_id !== e.currency_id)
            }

            function X(e) {
                return h && null !== e && "spread" !== e.type
            }

            function q(e) {
                if (null === e || !h) return null;
                const t = e.unit_id;
                return void 0 === t || "" === t ? null : t
            }

            function Y(e) {
                return h ? e.original_unit_id || q(e) : null
            }

            function G(e) {
                return !(null === e || !X(e)) && (void 0 !== e.original_unit_id && e.original_unit_id !== e.unit_id)
            }

            function j(e) {
                return null !== e && X(e) ? e.unit_conversion_types || null : []
            }

            function $(e) {
                return "futures" === e.type && e.front_contract || null
            }

            function J(e, t) {
                let i = e && (e.pro_name || e.full_name || e.name);
                return m && t ? i = t : _ && e && e.ticker && (i = e.ticker), g && i && (i = i.toUpperCase()), i
            }

            function K(e, t, i = "exchange") {
                return t ? e.name : `${e.name}, ${e[i]}`
            }

            function Q(e) {
                let t = e && ($(e) || e.name) || "";
                return t.length > 40 && (t = t.substring(0, 37) + "..."), t.trim()
            }

            function Z(e) {
                const t = e ? e.exchange : "";
                return g ? t.toUpperCase() : t
            }

            function ee(e, t) {
                return null !== e ? e.full_name : t
            }

            function te(e, t) {
                return null !== e ? e.pro_name : t
            }

            function ie(e, t) {
                return p && e ? (0, c.ensureDefined)(e.ticker) : ee(e, t)
            }

            function oe(e) {
                return "regular" === e || "us_regular" === e
            }

            function ne(e) {
                return "c" === (null == e ? void 0 : e.visible_plots_set)
            }

            function re(e) {
                return void 0 !== e.visible_plots_set ? "ohlcv" === e.visible_plots_set : !e.has_no_volume
            }

            function se(e) {
                return "ECONOMICS" === e.listed_exchange
            }
        },
        156598: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                types: () => o
            });
            const o = {
                ECONOMIC: "economic",
                QUANDL: "quandl"
            }
        },
        141341: (e, t, i) => {
            "use strict";
            i.r(t);
            i(540290), i(470588), i(346678), i(473579);
            var o = i(667294),
                n = i(879405),
                r = i(973935);

            function s(e) {
                return t => {
                    let i = !1;
                    const n = document.createElement("div"),
                        s = function(e, t) {
                            if (e.matches(":hover")) return t(), () => {};
                            return e.addEventListener("touchstart", t, {
                                passive: !0,
                                once: !0
                            }), e.addEventListener("mouseover", t, {
                                once: !0
                            }), () => {
                                e.removeEventListener("touchstart", t), e.addEventListener("mouseover", t)
                            }
                        }(t, c);
                    return t.addEventListener("click", a), () => {
                        s(), r.unmountComponentAtNode(n), t.removeEventListener("click", a)
                    };

                    function a() {
                        i ? l() : (i = !0, c())
                    }

                    function l() {
                        i = !1, c()
                    }

                    function c() {
                        r.render(o.createElement(e, {
                            buttonEl: t,
                            onClose: l,
                            isOpened: i
                        }), n), t.classList.toggle("i-dropped", i)
                    }
                }
            }
            var a = i(938669),
                l = i(582755);
            const c = (0, l.isRtl)() ? {
                horizontalAttachEdge: a.HorizontalAttachEdge.Right,
                horizontalDropDirection: a.HorizontalDropDirection.FromRightToLeft
            } : {
                horizontalAttachEdge: a.HorizontalAttachEdge.Left,
                horizontalDropDirection: a.HorizontalDropDirection.FromLeftToRight
            };

            function d(e) {
                const t = (0, a.getPopupPositioner)(e, { ...c,
                    verticalMargin: 10
                });
                return (e, i) => {
                    const o = t(e, i),
                        {
                            clientWidth: n,
                            clientHeight: r
                        } = document.documentElement,
                        s = o.x + e,
                        a = n - ((null === (l = window.widgetbar) || void 0 === l ? void 0 : l.resizerBridge.width.value()) || 0);
                    var l;
                    s > a && (o.x -= s - a);
                    const c = r - o.y - 48;
                    return i > c && (o.overrideHeight = c), o
                }
            }
            var u = i(704318),
                h = i(912869);
            const p = h["media-phone-vertical"],
                g = h["media-mf-tablet-landscape"],
                m = o.lazy(async () => ({
                    default: (await Promise.all([i.e(23876), i.e(29448), i.e(76473), i.e(78708), i.e(59678), i.e(13738), i.e(55313), i.e(14457), i.e(18277), i.e(28216), i.e(75812), i.e(45159), i.e(30431), i.e(25305)]).then(i.bind(i, 522820))).UserDropdownMenu
                })),
                _ = o.lazy(async () => ({
                    default: (await Promise.all([i.e(23876), i.e(26822), i.e(29448), i.e(69756), i.e(88278), i.e(52802), i.e(94595), i.e(94269), i.e(76473), i.e(78708), i.e(59678), i.e(13738), i.e(55313), i.e(14457), i.e(18277), i.e(55318), i.e(28216), i.e(27356), i.e(43424), i.e(20396), i.e(45159), i.e(30431), i.e(99757), i.e(73204)]).then(i.bind(i, 539881))).UserDialogMenu
                })),
                f = o.lazy(async () => ({
                    default: (await Promise.all([i.e(23876), i.e(29448), i.e(52802), i.e(76473), i.e(78708), i.e(59678), i.e(13738), i.e(55313), i.e(14457), i.e(18277), i.e(55318), i.e(28216), i.e(19871), i.e(45159), i.e(30431), i.e(99757), i.e(66208)]).then(i.bind(i, 94397))).UserBackStackDropdownMenu
                }));
            const v = s((function(e) {
                const {
                    isOpened: t,
                    onClose: i,
                    buttonEl: r
                } = e, s = (0, o.useMemo)(() => d(r), [r]);
                return (0, u.useCloseOnLoginChange)(i), o.createElement(n.MatchMedia, {
                    rule: p
                }, e => o.createElement(n.MatchMedia, {
                    rule: g
                }, n => o.createElement(o.Suspense, {
                    fallback: null
                }, e ? o.createElement(_, {
                    onClose: i,
                    isOpened: t
                }) : n ? o.createElement(m, {
                    onClose: i,
                    isOpened: t,
                    position: s,
                    doNotCloseOn: r
                }) : o.createElement(f, {
                    onClose: i,
                    isOpened: t,
                    position: s,
                    doNotCloseOn: r
                }))))
            }));
            var w = i(416282),
                y = i(445981);
            const b = (0, l.isRtl)() ? {
                    horizontalAttachEdge: a.HorizontalAttachEdge.Right,
                    horizontalDropDirection: a.HorizontalDropDirection.FromRightToLeft
                } : {
                    horizontalAttachEdge: a.HorizontalAttachEdge.Left,
                    horizontalDropDirection: a.HorizontalDropDirection.FromLeftToRight
                },
                S = parseInt(y["css-value-categories-width"]);
            var T = i(929098);

            function E(e, t) {
                (0, T.trackEvent)("Main menu", e, t)
            }
            var C = i(294184),
                A = i(640539),
                I = i(302444),
                k = i(241323),
                L = i(45867),
                P = i(132302),
                x = i(420325),
                D = i(375095),
                N = i(832871);
            const M = o.forwardRef((e, t) => o.createElement("a", {
                className: C(N.item, e.className),
                href: e.href,
                ref: t,
                onClick: e.onClick
            }, e.children));
            var B = i(271257);

            function O(e) {
                const {
                    proName: t,
                    market: i,
                    url: n,
                    title: r,
                    logoUrls: s,
                    isTickerActive: a
                } = e, l = function(e, t) {
                    const i = (0, o.useRef)(null);
                    return (0, o.useEffect)(() => {
                        if (!t) return;
                        const o = (0, w.ensureNotNull)(i.current),
                            n = {
                                dontDyePrice: !0,
                                signPositive: !0,
                                signNegative: !0,
                                changeDirectionUpClass: B.up,
                                changeDirectionDownClass: B.down,
                                lastGrowingClass: B.growing,
                                lastFallingClass: B.falling,
                                dataModeClassSuffix: "--for-ticker-header",
                                sessionStatusClassSuffix: "--for-ticker-header"
                            },
                            r = new D.QuoteTicker(e, o, n);
                        return () => {
                            r.disconnect()
                        }
                    }, [e, t]), i
                }(t, a);
                return o.createElement(M, {
                    className: B.ticker,
                    href: n,
                    ref: l,
                    onClick: function() {
                        ! function(e, t) {
                            (0, T.trackEvent)("Main menu symbols", t, e)
                        }(t, i)
                    }
                }, o.createElement("div", {
                    className: B.logo
                }, o.createElement(x.CircleLogoAny, {
                    size: "xsmall",
                    logoUrls: s,
                    placeholderLetter: r[0] || " "
                })), o.createElement("div", {
                    className: B.text
                }, o.createElement("div", {
                    className: B.head
                }, o.createElement("span", {
                    className: C(B.title, !r && "js-symbol-description-name")
                }, r), o.createElement("span", {
                    className: "js-symbol-session-status"
                })), o.createElement("div", {
                    className: B.body
                }, o.createElement("span", {
                    className: B.lastWrapper
                }, o.createElement("span", {
                    className: C(B.last, "js-symbol-last")
                }), o.createElement("span", {
                    className: "js-data-mode"
                })), o.createElement("span", {
                    className: C(B.change, "js-symbol-change-direction", "js-symbol-change-pt")
                }))))
            }
            var R = i(892133),
                F = i(771073),
                U = i(569448);

            function V(e) {
                const {
                    icon: t,
                    text: i,
                    url: n,
                    type: r
                } = e, s = "broker-account" === r;
                return o.createElement(M, {
                    className: U.banner,
                    href: n,
                    onClick: s ? function() {
                        (0, F.getTracker)().then(e => {
                            null == e || e.trackBrokerBrandingBanner({
                                action: R.BrokerBranding.EventType.Click,
                                broker: "DEFAULT_TV_BROKER",
                                country: window.countryCode,
                                link: n,
                                market: "",
                                source: "main menu"
                            })
                        })
                    } : void 0
                }, o.createElement(A.Icon, {
                    icon: t,
                    className: U.icon
                }), o.createElement("span", {
                    className: U.text
                }, i))
            }
            var H = i(288679),
                W = i(366278),
                z = i(396107),
                X = i(355085);

            function q(e) {
                const {
                    name: t,
                    rating: i,
                    logo_square: n,
                    user: r
                } = e, s = (0, z.getUserProfilePath)({
                    username: r.username,
                    is_broker: !0
                });
                return o.createElement(M, {
                    className: U.banner,
                    href: s
                }, o.createElement("img", {
                    alt: "",
                    src: n || r.picture_url,
                    className: X.logo
                }), o.createElement("div", {
                    className: X.info
                }, o.createElement("div", null, t), o.createElement("div", {
                    className: X.ratingWrapper
                }, o.createElement("span", {
                    className: X.rating
                }, i.toFixed(2)), o.createElement("div", {
                    className: X.starsWrapper
                }, o.createElement(H.StarsRating, {
                    rating: i,
                    size: W.Size.Small,
                    isInteractive: !1
                })))))
            }
            var Y = i(672927),
                G = i(271044),
                j = i(663966);
            const $ = {
                screener: i(900260),
                calendar: i(962234),
                "broker-account": i(688209)
            };
            let J = null;

            function K() {
                return J || (J = function e(t, i) {
                    var o;
                    const n = [],
                        r = t === (0, j.getMainMenuCategories)();
                    let s = !1;
                    for (const a of t)
                        if ("children" in a) {
                            const t = {
                                name: a.name,
                                url: a.url,
                                watchlists: a.watchlists,
                                banners: null === (o = a.banners) || void 0 === o ? void 0 : o.map(e => ("broker-account" === e.type && (s = !0), {
                                    icon: $[e.type],
                                    text: e.text,
                                    url: e.url,
                                    type: e.type,
                                    brokerData: e.broker_data
                                })),
                                rootTrackId: r ? a.id : void 0,
                                children: e(a.children, a)
                            };
                            n.push(t)
                        } else {
                            const e = {
                                name: a.name,
                                url: a.url,
                                badge: a.badge,
                                trackLabel: Q(a, i),
                                isExternalLink: a.isExternalLink
                            };
                            n.push(e)
                        }
                    s && (0, F.getTracker)();
                    return n
                }((0, j.getMainMenuCategories)(), null)), J
            }

            function Q(e, t) {
                return (null == t ? void 0 : t.id) && ["feeds-news", "feeds-snaps"].includes(t.id) && e.id ? e.id : e.url
            }

            function Z(e, t) {
                (0, o.useEffect)(() => {
                    t && function(e) {
                        (0, T.trackEvent)("GUI", "MainMenuShowDropdown", e)
                    }(e)
                }, [t])
            }

            function ee(e) {
                const [t, i] = (0, o.useState)((e => e.length ? e[0] : null)(e)), n = (0, o.useRef)(null), r = (0, o.useRef)(null), s = (0, o.useRef)(null);

                function a() {
                    null !== s.current && (clearTimeout(s.current), s.current = null)
                }
                return (0, o.useEffect)(() => a, []), {
                    activeCategory: t,
                    categoriesContainerRef: n,
                    getCategoryHoverCallbacks: function(e) {
                        function o(o) {
                            if (a(), "mouseleave" !== o.type)
                                if (e === t) r.current = o;
                                else {
                                    const t = r.current,
                                        a = n.current;
                                    t && a && function(e, t, i) {
                                        const o = i.getBoundingClientRect(),
                                            n = new Y.Point(e.clientX, e.clientY),
                                            r = new Y.Point(t.clientX, t.clientY),
                                            s = te ? o.left : o.right,
                                            a = new Y.Point(s, o.top),
                                            l = new Y.Point(s, o.bottom);
                                        return (0, G.pointInTriangle)(n, r, a, l)
                                    }(o, t, a) ? s.current = setTimeout(() => {
                                        i(e), s.current = null
                                    }, 150) : i(e)
                                }
                        }
                        return {
                            onMouseEnter: o,
                            onMouseLeave: o,
                            onMouseOver: o
                        }
                    }
                }
            }
            const te = (0,
                l.isRtl)();
            var ie = i(606628),
                oe = i(102166);
            const ne = (0, I.mergeThemes)(L.DEFAULT_MENU_THEME, {
                    menuBox: oe.menuBox,
                    menuWrap: oe.menuWrap,
                    scrollWrap: oe.scrollWrap
                }),
                re = (0, I.mergeThemes)(ne, {
                    menuBox: oe.reversed
                });

            function se(e) {
                return "children" in e
            }

            function ae(e) {
                const {
                    rootCategoryIndex: t,
                    isReversed: i,
                    ...n
                } = e, {
                    children: r,
                    name: s,
                    rootTrackId: a
                } = function(e) {
                    return (0, o.useMemo)(() => {
                        const t = K()[e];
                        return (0, w.assert)("children" in t), t
                    }, [e])
                }(t), {
                    activeCategory: l,
                    categoriesContainerRef: c,
                    getCategoryHoverCallbacks: d
                } = ee(r), u = function(e) {
                    const t = (0, o.useRef)(null);
                    return (0, o.useLayoutEffect)(() => {
                        var e;
                        null === (e = t.current) || void 0 === e || e.update(!0)
                    }, [e]), t
                }(l);
                Z(s, n.isOpened);
                const h = l && se(l) ? l.children : [];
                return o.createElement(k.PopupMenu, {
                    theme: i ? re : ne,
                    controller: u,
                    ...n
                }, o.createElement("div", {
                    className: oe.categories,
                    ref: c
                }, r.map((e, t) => o.createElement(le, {
                    key: t,
                    isActive: e === l,
                    url: e.url,
                    badge: se(e) ? void 0 : e.badge,
                    hasChildren: se(e),
                    rootTrackId: a,
                    ...d(e)
                }, e.name))), h.length > 0 && o.createElement("div", {
                    className: oe.subcategories
                }, h.map((e, t) => o.createElement(le, {
                    key: t,
                    url: e.url,
                    badge: e.badge,
                    rootTrackId: a,
                    trackLabel: e.trackLabel
                }, e.name))), o.createElement(ce, {
                    categories: r,
                    activeCategory: l
                }))
            }

            function le(e) {
                const {
                    children: t,
                    url: i,
                    badge: n,
                    isActive: r,
                    hasChildren: s,
                    rootTrackId: a,
                    trackLabel: l,
                    ...c
                } = e;
                return o.createElement("a", {
                    className: C(oe.menuItem, r && oe.active),
                    href: i,
                    onClick: function() {
                        a && l && E(a, l)
                    },
                    ...c
                }, o.createElement("span", {
                    className: oe.menuItemText
                }, t), n && o.createElement(P.Pill, {
                    className: oe.badge,
                    label: n,
                    color: "orange"
                }), s && o.createElement(A.Icon, {
                    className: oe.icon,
                    icon: ie
                }))
            }

            function ce(e) {
                const {
                    categories: t,
                    activeCategory: i
                } = e, n = function(e) {
                    return (0, o.useMemo)(() => e.filter(e => "children" in e && (e.watchlists || e.banners)), [e])
                }(t);
                return o.createElement(o.Fragment, null, n.map((e, t) => {
                    const {
                        banners: n = [],
                        watchlists: r = []
                    } = e, s = e === i;
                    return o.createElement("div", {
                        key: t,
                        className: C(oe.extra, !s && "i-hidden")
                    }, r.map(e => o.createElement(O, { ...e,
                        key: e.proName,
                        isTickerActive: s
                    })), n.map((e, t) => e.brokerData ? o.createElement(q, { ...e.brokerData,
                        key: e.brokerData.name
                    }) : o.createElement(V, {
                        key: t,
                        ...e
                    })))
                }))
            }
            const de = h["media-phone-vertical"],
                ue = o.lazy(async () => ({
                    default: (await Promise.all([i.e(23876), i.e(26822), i.e(29448), i.e(69756), i.e(88278), i.e(52802), i.e(94595), i.e(94269), i.e(76473), i.e(78708), i.e(59678), i.e(13738), i.e(55313), i.e(14457), i.e(18277), i.e(55318), i.e(28216), i.e(27356), i.e(43424), i.e(20396), i.e(45159), i.e(30431), i.e(99757), i.e(73204)]).then(i.bind(i, 988593))).MainDialogMenu
                })),
                he = o.lazy(async () => ({
                    default: (await Promise.all([i.e(23876), i.e(29448), i.e(52802), i.e(76473), i.e(78708), i.e(59678), i.e(13738), i.e(55313), i.e(14457), i.e(18277), i.e(55318), i.e(28216), i.e(19871), i.e(45159), i.e(30431), i.e(99757), i.e(66208)]).then(i.bind(i, 151098))).MainBackStackDropdownMenu
                }));
            const pe = s((function(e) {
                    const {
                        isOpened: t,
                        onClose: i,
                        buttonEl: r
                    } = e, s = (0, o.useMemo)(() => d(r), [r]);
                    return (0, u.useCloseOnHamburgerButtonBreakpoint)(i), (0, u.useCloseOnLoginChange)(i), o.createElement(n.MatchMedia, {
                        rule: de
                    }, e => o.createElement(o.Suspense, {
                        fallback: null
                    }, e ? o.createElement(ue, {
                        onClose: i,
                        isOpened: t
                    }) : o.createElement(he, {
                        onClose: i,
                        isOpened: t,
                        position: s,
                        doNotCloseOn: r
                    })))
                })),
                ge = (me = function(e) {
                    const {
                        isOpened: t,
                        onClose: i,
                        buttonEl: n,
                        reference: r,
                        onMouseOut: s
                    } = e, [l, c] = (0, o.useState)(!1), d = (0, o.useMemo)(() => function(e, t) {
                        const i = (0, a.getPopupPositioner)(e, { ...b,
                            verticalMargin: -4
                        });
                        return (e, o) => {
                            const n = i(e, o),
                                {
                                    clientWidth: r
                                } = document.documentElement,
                                s = n.x + e > r ? -1 : n.x < 0 ? 1 : 0,
                                a = e - S;
                            return n.x += a * s, n.forbidCorrectYCoord = !0, n.overrideHeight = o, t(0 !== s), n
                        }
                    }(n, c), [n]), h = (0, o.useMemo)(() => Number((0, w.ensureDefined)(n.dataset.mainMenuDropdownRootIndex)), [n]);
                    return (0, u.useCloseOnHamburgerButtonBreakpoint)(i), (0, u.useCloseOnLoginChange)(i), o.createElement(ae, {
                        onClose: i,
                        isOpened: t,
                        isReversed: l,
                        position: d,
                        doNotCloseOn: n,
                        rootCategoryIndex: h,
                        reference: r,
                        onMouseOut: s
                    })
                }, e => {
                    const t = document.createElement("div"),
                        i = o.createRef();
                    let n = !1;
                    return e.matches(":hover") && a(), e.addEventListener("mouseenter", a), e.addEventListener("mouseleave", s), () => {
                        r.unmountComponentAtNode(t), e.removeEventListener("mouseenter", a), e.removeEventListener("mouseleave", s)
                    };

                    function s(t) {
                        const o = i.current,
                            n = t.relatedTarget,
                            r = o && n && o.contains(n),
                            s = e.contains(n);
                        r || s || l()
                    }

                    function a() {
                        n = !0, c()
                    }

                    function l() {
                        n = !1, c()
                    }

                    function c() {
                        r.render(o.createElement(me, {
                            buttonEl: e,
                            onClose: l,
                            isOpened: n,
                            reference: i,
                            onMouseOut: e => s(e.nativeEvent)
                        }), t), e.classList.toggle("i-dropped", n)
                    }
                });
            var me;

            function _e(e) {
                const t = function(e) {
                        return e.addEventListener("click", t), () => {
                            e.removeEventListener("click", t)
                        };

                        function t(e) {
                            const t = e.target instanceof HTMLElement ? e.target.closest("a[data-main-menu-root-track-id]") : null;
                            if (t) {
                                E((0, w.ensureDefined)(t.dataset.mainMenuRootTrackId), t.href)
                            }
                        }
                    }(e),
                    i = [],
                    o = Array.from(e.querySelectorAll("[data-main-menu-dropdown-root-index]"));
                for (const e of o) i.push(ge(e));
                return () => {
                    t();
                    for (const e of i) e()
                }
            }
            let fe = null;

            function ve(e = !1) {
                e ? function() {
                    if (null !== fe) return;
                    const e = Array.from(document.querySelectorAll(".js-notifications-indicator"));
                    Promise.all([i.e(91877), i.e(38951), i.e(11216), i.e(11008), i.e(72324), i.e(90688), i.e(65589)]).then(i.bind(i, 289920)).then(t => {
                        fe = new t.HeaderNotificationView(e)
                    })
                }() : null !== fe && (fe.destroy(), fe = null)
            }
            var we = i(344828),
                ye = i(611877);
            i(850873), i(339350);
            const be = document.querySelector(".js-site-header-container");
            be && function(e) {
                e.querySelectorAll(".js-header-user-menu-button").forEach(e => {
                    v(e)
                });
                const t = e.querySelector(".js-header-main-menu-mobile-button");
                t && pe(t);
                const i = e.querySelector(".js-header-main-menu");
                i && _e(i);
                const o = e.querySelector(".js-search-hotkey-hint");
                o && (o.innerText = (0, ye.humanReadableHash)(ye.Modifiers.Mod + 75));
                const n = e.querySelector(".js-userpic"),
                    r = e.querySelector(".js-userpic-mid");

                function s() {
                    const {
                        user: e
                    } = window;
                    e.userpic_mid && (null == r || r.setAttribute("src", e.userpic_mid)), e.userpic && (null == n || n.setAttribute("src", e.userpic))
                }
                s(), ve(window.is_authenticated), (0, we.initHeaderSearchDialog)(), window.loginStateChange.subscribe(null, () => {
                    s(), ve(window.is_authenticated)
                })
            }(be);
            i(729199);
            var Se = i(918184);

            function Te(e) {
                return Promise.all([i.e(54591), i.e(48739)]).then(i.bind(i, 802543)).then(() => {
                    Se(e).tvDeviceMenu()
                })
            }
            var Ee = i(865904),
                Ce = i(120220),
                Ae = i(604346),
                Ie = i(927358),
                ke = i(130060);
            i(265194);
            async function Le(e) {
                const t = await Promise.all([i.e(99459), i.e(49531), i.e(35507), i.e(64466), i.e(28139), i.e(51199)]).then(i.bind(i, 601500)),
                    o = await t.showAccountDeletionNotification(e);
                await async function() {
                    try {
                        return "ok" === (await (0, Ie.cancelAccountDeletion)()).status
                    } catch (e) {
                        return (0, ke.showErrorDialog)({
                            title: Ce.t("Error"),
                            content: e.message || e,
                            actions: [{
                                key: 13,
                                method: "close",
                                name: "ok",
                                text: Ce.t("OK"),
                                type: "primary"
                            }]
                        }), !1
                    }
                }() && o()
            }
            var Pe = i(459484),
                xe = i(550765);
            var De = i(344020),
                Ne = i(790869),
                Me = i(97172),
                Be = i(918184),
                Oe = (0, Ae.getFreshInitData)();
            Be((function() {
                var e = i(470178).ContentPage,
                    t = i(602153).Root;
                (0, Ne.registerSiteSymbolListBackend)(ChartApiInstance), Oe.block_widgetbar(Ee.WidgetBar, e, t, () => (0, Me.configuration)({
                    chartApiInstance: ChartApiInstance
                })), De.mediaState.width <= De.mediaState.breakpoints.tablet ? Te(".tv-device-menu") : De.mediaState.on("changeDevice", (function e() {
                    De.mediaState.width <= De.mediaState.breakpoints.tablet && (Te(".tv-device-menu"), De.mediaState.off("changeDevice", e))
                }))
            })), async function() {
                const e = (0, Ae.getFreshInitData)();
                window.is_authenticated && void 0 !== e.days_to_deactivation && null !== e.days_to_deactivation && Le({
                    daysToDeactivation: e.days_to_deactivation
                })
            }(), (0, xe.initMobileNotificationBanner)(), i.e(65481).then(i.bind(i, 220198)).then(e => e.offerButtonInit()), "serviceWorker" in navigator && navigator.serviceWorker.getRegistrations().then((function(e) {
                for (var t of e) t.unregister()
            })), (0, Pe.initAllAnalytics)()
        },
        540290: (e, t, i) => {
            "use strict";
            i.r(t);
            i(857298);
            var o = i(120220),
                n = i(423946),
                r = i(442926),
                s = i(4516),
                a = i.n(s),
                l = i(929098),
                c = i(541962),
                d = i(194795),
                u = i.n(d),
                h = i(987380);
            const p = (0, h.getLogger)("UserSessions");
            let g, m = 0,
                _ = !1,
                f = !1;
            const v = new(u());

            function w(e) {
                if (_) {
                    ChartApiInstance.connect({
                        tokenGrabSession: e
                    });
                    const t = ChartApiInstance.connectDfd;
                    return _ = !1, g && (t.then((function() {
                        (0, l.trackEvent)("Auth", "Different Device Active Recovery"), g.destroy(), g = void 0
                    })), t.catch((function() {
                        _ = !0
                    })), _ || v.emitEvent("Session recovered")), t
                }
            }
            c.TVXWindowEvents.on("session_captured", (function() {
                w()
            })), a().on("auth", (function(e) {
                if (is_authenticated && user && user.session_hash && "active_session_changed" === e.type && e.timestamp > m) {
                    if (m = e.timestamp, user.session_hash === e.source_session && e.source_session in e.changes && "cycled" === e.changes[e.source_session].a && (user.session_hash = e.changes[e.source_session].h), user.session_hash in e.changes && "logout" === e.changes[user.session_hash].a) return void(e.source_session !== user.session_hash && (t = e.device_info, (0, n.createGoProDialog)({
                        feature: "sessionLogout",
                        customParams: t,
                        actions: [{
                            action: r.PredefinedAction.Close,
                            text: o.t("Close", {
                                context: "input"
                            })
                        }]
                    })));
                    if (!e.active_sessions) return;
                    let i = !1;
                    for (let t = e.active_sessions.length - 1; t >= 0; t--) user.session_hash === e.active_sessions[t] && (i = !0);
                    i ? g && w() : function(e) {
                        if (_) return;
                        let t = !0;
                        if (ChartApiInstance && (t = ChartApiInstance.disconnect(!0)), t) {
                            (0,
                                l.trackEvent)("Auth", "Different Device Active Dialog"), _ = !0, p.logNormal("Different device connection detected: " + JSON.stringify(e));
                            const t = function() {
                                f = !1;
                                const e = w(!0);
                                e && e.then((function() {
                                    c.TVXWindowEvents.emit("session_captured")
                                }))
                            };
                            if (!f) {
                                const i = {
                                    feature: "sessionLock",
                                    customParams: e,
                                    actionAfterClose: t,
                                    actions: [{
                                        action: r.PredefinedAction.Close,
                                        text: o.t("Connect"),
                                        onClick: t
                                    }]
                                };
                                (0, n.createGoProDialog)(i).then(() => {
                                    f = !0
                                })
                            }
                            v.emitEvent("Session broken down.")
                        }
                    }(e.device_info)
                }
                var t
            }));
            i(152946), i(180643);
            var y = i(65470),
                b = i.n(y),
                S = i(626083);
            b().safari && (0, S.createGroup)().add({
                desc: "Prevent exit native fullscreen",
                hotkey: 27,
                handler: () => {}
            });
            i(180510);
            var T = i(464079),
                E = i(918184);

            function C(e) {
                var t = "";
                for (var i in e) e.hasOwnProperty(i) && (t += i + ":" + e[i] + ";");
                return t
            }
            var A = {
                    duration: 500,
                    show: function(e, t) {
                        if (2 === e.button) return !1;
                        var i = t || this,
                            o = document.createElement("div");
                        o.className = "tv-ripple", i.appendChild(o);
                        var n, r, s, a, l, c = (a = {
                                top: 0,
                                left: 0
                            }, l = (n = i) && n.ownerDocument, r = l.documentElement, void 0 !== n.getBoundingClientRect && (a = n.getBoundingClientRect()), s = function(e) {
                                return null !== (t = e) && t === t.window ? e : 9 === e.nodeType && e.defaultView;
                                var t
                            }(l), {
                                top: a.top + s.pageYOffset - r.clientTop,
                                left: a.left + s.pageXOffset - r.clientLeft
                            }),
                            d = e.pageY - c.top,
                            u = e.pageX - c.left,
                            h = "scale(" + i.clientWidth / 100 * 10 + ")";
                        "touches" in e && (d = e.touches[0].pageY - c.top, u = e.touches[0].pageX - c.left), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-scale", h), o.setAttribute("data-x", u), o.setAttribute("data-y", d);
                        var p = {
                            top: d + "px",
                            left: u + "px"
                        };
                        o.className = o.className + " tv-ripple--notransition", o.setAttribute("style", C(p)), o.className = o.className.replace("tv-ripple--notransition", ""), p.opacity = "1", p["-webkit-transform"] = p["-moz-transform"] = p["-ms-transform"] = p["-o-transform"] = p.transform = h, p["-webkit-transition-duration"] = p["-moz-transition-duration"] = p["-o-transition-duration"] = p["transition-duration"] = A.duration + "ms", p["-webkit-transition-timing-function"] = p["-moz-transition-timing-function"] = p["-o-transition-timing-function"] = p["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", o.setAttribute("style", C(p))
                    },
                    hide: function(e) {
                        I.touchup(e);
                        var t = this,
                            i = null,
                            o = t.getElementsByClassName("tv-ripple");
                        if (!(o.length > 0)) return !1;
                        var n = (i = o[o.length - 1]).getAttribute("data-x"),
                            r = i.getAttribute("data-y"),
                            s = i.getAttribute("data-scale"),
                            a = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
                        a < 0 && (a = 0), setTimeout((function() {
                            var e = {
                                top: r + "px",
                                left: n + "px",
                                opacity: "0",
                                "-webkit-transition-duration": A.duration + "ms",
                                "-moz-transition-duration": A.duration + "ms",
                                "-o-transition-duration": A.duration + "ms",
                                "transition-duration": A.duration + "ms",
                                "-webkit-transform": s,
                                "-moz-transform": s,
                                "-ms-transform": s,
                                "-o-transform": s,
                                transform: s
                            };
                            i.setAttribute("style", C(e)), setTimeout((function() {
                                try {
                                    t.removeChild(i)
                                } catch (e) {
                                    return !1
                                }
                            }), A.duration)
                        }), a)
                    }
                },
                I = {
                    touches: 0,
                    allowEvent: function(e) {
                        var t = !0;
                        return "touchstart" === e.type ? I.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout((function() {
                            I.touches > 0 && (I.touches -= 1)
                        }), 500) : "mousedown" === e.type && I.touches > 0 && (t = !1), t
                    },
                    touchup: function(e) {
                        I.allowEvent(e)
                    }
                };

            function k(e) {
                var t = function(e) {
                    if (!1 === I.allowEvent(e)) return null;
                    for (var t = null, i = e.target || e.srcElement; null != i.parentElement;) {
                        if (!(i instanceof SVGElement || -1 === i.className.indexOf("tv-ripple"))) {
                            t = i;
                            break
                        }
                        if (!(i instanceof SVGElement) && -1 !== i.className.indexOf("js-ripple")) {
                            t = i;
                            break
                        }
                        i = i.parentElement
                    }
                    return t
                }(e);
                null !== t && (A.show(e, t), "ontouchstart" in window && (t.addEventListener("touchend", A.hide, !1), t.addEventListener("touchcancel", A.hide, !1)), t.addEventListener("mouseup", A.hide, !1), t.addEventListener("mouseleave", A.hide, !1))
            }
            E.fn.tvRipple = (0, T.createTvBlockWithInstance)("tv-ripple", (function(e, t = {}) {
                return e[0].addEventListener("mousedown", k, !1), e
            })), E((function() {
                E(document.body).tvRipple()
            }));
            var L = i(971928),
                P = i(156177),
                x = i(918184),
                D = i(513469);
            class N {
                constructor(e = {}) {
                    this.opened = !1, this.animated = !1, this.$el = e.$el, this.delegateEvents(), this.$el.addClass("i-inited")
                }
                delegateEvents() {
                    this.$body = this.$el.find(".js-expand__body").first(), this.$el.find(".js-expand__title").first().off("click.js-expand").on("click.js-expand", e => {
                        e.isDefaultPrevented() || this.toggle()
                    })
                }
                setOpened(e) {
                    this.opened = e
                }
                setPause(e) {
                    this.paused = e
                }
                toggle() {
                    this[this.opened ? "close" : "open"]()
                }
                open(e = !1) {
                    if (!(this.animated || this.opened || this.paused)) {
                        if (this.opened = !0, this.animated = !0, this.$el.addClass("i-dropped").trigger("beforeOpen"), e) return this.$body.removeClass("i-hidden"), this.$el.trigger("afterOpen"), void(this.animated = !1);
                        (0, P.lazyVelocity)().then(() => {
                            this.$body.css("opacity", 0).velocity("slideDown", {
                                queue: !1,
                                easing: "easeOutCubic",
                                duration: .75 * L.dur,
                                complete: () => {
                                    this.$body.removeClass("i-hidden")
                                }
                            }).velocity({
                                opacity: 1
                            }, {
                                queue: !1,
                                easing: "easeOutCubic",
                                duration: .5 * L.dur,
                                delay: .75 * L.dur,
                                complete: () => {
                                    this.$body.attr("style", ""), this.$el.trigger("afterOpen"), this.animated = !1
                                }
                            })
                        })
                    }
                }
                close(e = !1) {
                    if (!this.animated && this.opened && !this.paused) {
                        if (this.opened = !1, this.animated = !0, this.$el.removeClass("i-dropped").trigger("beforeClose"), e) return this.$body.addClass("i-hidden"), this.$el.trigger("beforeClose"), void(this.animated = !1);
                        (0, P.lazyVelocity)().then(() => {
                            this.$body.velocity({
                                opacity: 0
                            }, {
                                queue: !1,
                                easing: "easeOutCubic",
                                duration: .5 * L.dur
                            }).velocity("slideUp", {
                                queue: !1,
                                easing: "easeOutCubic",
                                duration: .75 * L.dur,
                                delay: .5 * L.dur,
                                complete: () => {
                                    this.$body.attr("style", "").addClass("i-hidden"), this.$el.trigger("afterClose"), this.animated = !1
                                }
                            })
                        })
                    }
                }
            }
            x.fn.tvExpand = (0, T.createTvBlockWithInstance)("tv-expand", (function(e, t = {}) {
                return new N(D.extend(t, {
                    $el: e
                }))
            }));
            i(470588), i(497698);
            var M = i(100757),
                B = i.n(M),
                O = i(102188),
                R = i.n(O),
                F = i(968724),
                U = i(983291);

            function V(e) {
                const t = e.target,
                    i = t.closest && t.closest(":link");
                i && i.target && i.relList && i.relList.add("noopener")
            }
            var H = i(907989);

            function W() {
                var e;
                const t = null === (e = (0, F.desktopAppVersion)()) || void 0 === e ? void 0 : e.match(/beta.(\d+)/);
                (0, F.isWindows)() && t && Number(t[1]) < 13 && async function() {
                    const {
                        showUpdateAppDialog: e,
                        updateDesktopAppDialogKey: t,
                        dialogHideValue: o
                    } = await Promise.all([i.e(23876), i.e(26822), i.e(69756), i.e(88278), i.e(74814), i.e(36778), i.e(18436), i.e(3178), i.e(43424), i.e(14563), i.e(38578), i.e(63580), i.e(78451), i.e(7333)]).then(i.bind(i, 656433));
                    window.sessionStorage.getItem(t) !== o && e()
                }()
            }
            var z = i(876727),
                X = i(984676),
                q = i(903851),
                Y = i(305803),
                G = i(871351),
                j = i(245378),
                $ = i(417238),
                J = i(64390),
                K = i(604346);
            var Q = i(198006),
                Z = i(482324);
            var ee = i(797087),
                te = i(385622),
                ie = i(316152),
                oe = i(655119),
                ne = i(110164),
                re = i(75443);
            let se = null;
            class ae {
                constructor() {
                    this._isMasterTab = !1, this._lastState = {
                        tabs: [],
                        ts: 0
                    }, this._sendReport = (0, ie.default)((e, t) => {
                        this._isMasterTab && (ne.telemetry.sendReport("site", "browsers_tabs_ratio_frame", {
                            value: e
                        }), ne.telemetry.sendReport("site", "browsers_tabs_count_frame", {
                            value: t
                        }))
                    }, 2e4), this._guid = (0, re.guid)(), this._initTimer()
                }
                unregisterTab() {
                    clearInterval(this._timerId);
                    const e = this._getState();
                    e.tabs = e.tabs.filter(e => e[0] !== this._guid), e.ts = Date.now(), this._setState(e)
                }
                static getInstance() {
                    return null === se && (se = new ae), se
                }
                _checkIsMaster(e) {
                    const t = 0 === e.tabs.length,
                        i = Date.now() - e.ts > 2e4;
                    return t || i || e.tabs[0][0] === this._guid
                }
                _countVisibleTabsRatio(e) {
                    const t = e.reduce((e, t) => e + ("visible" === t[1] ? 1 : 0), 0);
                    return Math.round(t / e.length * 100)
                }
                _getState() {
                    const e = oe.TVLocalStorage.getItem("activeBrowserTabsCounter"),
                        t = null !== e ? JSON.parse(e) : this._lastState;
                    return this._lastState = t, t
                }
                _setState(e) {
                    oe.TVLocalStorage.setItem("activeBrowserTabsCounter", JSON.stringify(e))
                }
                _pulse() {
                    const e = this._lastState.tabs,
                        t = document.visibilityState,
                        i = this._getState(),
                        o = i.tabs.find(e => e[0] === this._guid),
                        n = this._isMasterTab;
                    this._isMasterTab = this._checkIsMaster(i);
                    const r = !n && this._isMasterTab;
                    if (void 0 !== o && o[1] !== t && (o[1] = t), r) i.tabs = [
                        [this._guid, t]
                    ], i.ts = Date.now(), this._isMasterTab = !0, this._sendReport(100, 1);
                    else if (this._isMasterTab) {
                        i.ts = Date.now();
                        const t = this._countVisibleTabsRatio(e),
                            o = this._countVisibleTabsRatio(i.tabs);
                        t !== o && this._sendReport(o, i.tabs.length)
                    } else void 0 === o && i.tabs.push([this._guid, t]);
                    this._setState(i)
                }
                _initTimer() {
                    this._pulse(), this._timerId = setInterval(() => this._pulse(), 1e4)
                }
            }
            var le = i(932010),
                ce = i(918184),
                de = i(918184);
            const ue = (0, h.getLogger)("Chart.Base");
            var he;
            if (window.initData.lfs && (he = B().prototype.disconnect, B().prototype.disconnect = function(e) {
                    e || he.call(this)
                }), ce.error = function(e) {
                    (0, l.trackEvent)("jQuery Error", e, navigator.userAgent)
                }, loginStateChange.subscribe(window, (function(e) {
                    if (user && is_authenticated) {
                        const e = TVLocalStorage.getItem("last_username"),
                            t = TVLocalStorage.getItem("previous_username");
                        e !== user.username && (TVLocalStorage.setItem("last_username", user.username), e && e !== t && (TVLocalStorage.setItem("previous_username", e), (0, te.paidAccountCheck)({
                            isNeedCancelButton: !1
                        }).catch(() => {})))
                    }
                    e || (0, U.reconnectChartApi)()
                })), de((function() {
                    de(".js-expand").tvExpand(), "#signin" === window.location.hash ? Promise.resolve().then(i.bind(i, 371141)).then(e => e.showSignModal({
                        source: "Redirect"
                    })) : "#signup" === window.location.hash && Promise.resolve().then(i.bind(i, 371141)).then(e => e.showSignModal({
                        mode: "signup",
                        source: "Redirect"
                    })), de(".tv-control-material-input, .tv-control-material-textarea").tvControlMaterial(), de(".js-time-upd").timeUpdate(), (0, F.checkPageType)("mobile") || window.TVD || (0, H.initCookiesNotification)().then(() => {
                        TradingView.onChartPage && (0, j.initTrialToast)("chart").then(async () => {
                            (0, q.enabled)(Y.ProductFeatures.NO_SPONSORED_ADS) || await Promise.all([Promise.all([i.e(49531), i.e(72867), i.e(63443), i.e(83639)]).then(i.bind(i, 163443)), Promise.all([i.e(35507), i.e(64466), i.e(11216), i.e(28139), i.e(94291)]).then(i.bind(i, 999037))]).then(([e, t]) => {
                                new e.PlatformPlacement(t.globalToasts, !1, G.Placement.Platform).display()
                            })
                        })
                    }), (0, Q.isFeatureEnabled)("desktop_version_notification_enabled") && (0, F.isDesktopApp)() && W(), window.initData.show_idc_dialog ? i.e(9726).then(i.bind(i, 317617)).then(e => {
                        e.showIdcAgreementDialog()
                    }) : window.initData.banned_payments && Promise.all([i.e(70964), i.e(38817), i.e(91877), i.e(59456), i.e(25535), i.e(5058), i.e(11216), i.e(99752), i.e(64011), i.e(7562), i.e(29201)]).then(i.bind(i, 613450)).then(({
                        warningDialog: e
                    }) => {
                        e({
                            title: window.t("Notification"),
                            content: "<p>" + window.t("Due to suspicious activity in your account, we had to block you from making any new purchases. Please contact our support team to resolve the issue. Thank you for understanding.") + "</p>",
                            closeButtonText: window.t("Close", {
                                context: "input"
                            })
                        }).open()
                    })
                })), TradingView.onChartPage || (ue.logNormal("low quality mode is enabled"), ChartApiInstance.enableLowQualityMode()), window.pro = new(R())(window.shopConf), loginStateChange.fire(!0), i.e(38578).then(i.t.bind(i, 625672, 23)).then(({
                    default: e
                }) => {
                    e.init()
                }), !window.is_authenticated) {
                const e = e => {
                        "1" !== TVLocalStorage.getItem(e) && (Promise.all([i.e(70964), i.e(99459), i.e(91877), i.e(74814), i.e(59456), i.e(25535), i.e(36778), i.e(5058), i.e(84479), i.e(76609), i.e(11216), i.e(99752), i.e(14563), i.e(81619), i.e(36057)]).then(i.bind(i, 583878)).then(e => e.createReferralWelcomeDialog()).then((function(e) {
                            e.open()
                        })), TVLocalStorage.setItem(e, "1"))
                    },
                    t = (0, $.getUrlParams)(),
                    o = t.share_your_love,
                    n = t.aff_id;
                if (n || o) {
                    const i = window.location.hostname.split("."),
                        r = i.slice(1, i.length).join(".");
                    if (n && n.length <= 32) {
                        (0, l.trackEvent)("Affiliate Program", "Referral Visit (Direct)", n);
                        const i = {
                            aff_id: n
                        };
                        [{
                            key: "source",
                            maxLength: 64
                        }, {
                            key: "aff_sub",
                            maxLength: 64
                        }, {
                            key: "url_id",
                            maxLength: 256
                        }, {
                            key: "file_id",
                            maxLength: 256
                        }].forEach(e => {
                            const o = e.key;
                            t[o] && t[o].length <= e.maxLength && (i[o] = t[o])
                        }), le.set("direct_affiliate_params", JSON.stringify(i), 90, "/", r ? "." + r : ""), e("seen_by_direct_link")
                    } else o && o.length <= 150 && (le.set("_referralProgramId", o, 0, "/", r ? "." + r : ""), e("seen_by_referral_program_link"))
                }
            }
            if (document.addEventListener("click", V, !0), i.e(14436).then(i.bind(i, 978852)).then(e => {
                    (new e.GdprNotification).showIfNotAccepted()
                }), Promise.all([i.e(72324), i.e(72226)]).then(i.bind(i, 539018)).then(e => {
                    e.openSupportDialogOnLoad()
                }), i.e(14309).then(i.bind(i, 239931)).then(e => {
                    e.openPaymentOrderDialogOnLoad()
                }),
                i.e(99140).then(i.bind(i, 878822)).then(e => {
                    e.openCoinsDialogOnLoad()
                }), (async () => {
                    await Promise.all([i.e(70964), i.e(38817), i.e(99459), i.e(53617), i.e(40114), i.e(60700), i.e(91877), i.e(59456), i.e(25535), i.e(36778), i.e(5058), i.e(78708), i.e(89109), i.e(59678), i.e(54551), i.e(13738), i.e(53466), i.e(37653), i.e(28647), i.e(38325), i.e(96753), i.e(6585), i.e(500), i.e(15294), i.e(42961), i.e(91787), i.e(93475), i.e(21851), i.e(11216), i.e(14563), i.e(64011), i.e(7562), i.e(41242), i.e(26945), i.e(92765), i.e(52107), i.e(50323), i.e(3823), i.e(85857), i.e(46687), i.e(89568)]).then(i.t.bind(i, 866917, 23))
                })(), !window.is_authenticated && (0, Q.isFeatureEnabled)("google-one-tap-signin") && function() {
                    if (!window.GOOGLE_CLIENT_ID || (0, K.getFreshInitData)().googleSigninPopupDisabled) return;
                    (0, J.appendScript)("https://accounts.google.com/gsi/client"), window.handleGoogleCredentialResponse = e => {
                        const t = (0, $.getUrlParams)();
                        (0, l.trackEvent)("Login", "one tap sign in"), window.open(`/accounts/complete/android-jwt/?token=${e.credential}&feature_source=google_one_tap&utm_source=${t.utmsource}&utm_medium=${t.utmmedium}`)
                    };
                    const e = document.createElement("div");
                    e.setAttribute("id", "g_id_onload"), e.setAttribute("data-client_id", window.GOOGLE_CLIENT_ID), e.setAttribute("data-callback", "handleGoogleCredentialResponse"), document.body.appendChild(e)
                }(), window.initData.offlineAlertEventsOnInit && (0, Z.getPriceAlertsDispatcher)().then(e => {
                    e.showOfflineEvents()
                }), async function() {
                    (await Promise.all([i.e(99459), i.e(49531), i.e(35507), i.e(64466), i.e(71936), i.e(14563), i.e(28139), i.e(97276)]).then(i.bind(i, 372840))).initNotification()
                }(), document.addEventListener("DOMContentLoaded", (function() {
                    document.addEventListener("click", e => {
                        if (e.target.matches(".js-open-support-dialog") && ((0, ee.showSupportDialog)(), e.preventDefault()), e.target.search && !1 === window.location.pathname.startsWith("/support")) {
                            const t = (0, $.getQueryParams)(e.target.search.substring(1));
                            "solution" in t && ((0, ee.showSupportDialog)({
                                solutionId: parseInt(t.solution, 10)
                            }), e.preventDefault())
                        }
                    })
                })), (0, Q.isFeatureEnabled)("count-browser-tabs")) {
                const e = ae.getInstance();
                window.addEventListener("unload", () => e.unregisterTab())
            }
            try {
                var pe = z.MiniPlayerSessionStorage.getItem();
                null !== pe && (window.location.pathname.startsWith("/streams") && 0 !== window.location.pathname.split("/streams/")[1].length ? z.MiniPlayerSessionStorage.removeItem() : (0, X.openStreamMiniPlayer)({
                    stream: JSON.parse(pe).data
                }))
            } catch (e) {}
        },
        857298: (e, t, i) => {
            "use strict";
            window.TradingView = window.TradingView || {}, window.requireAll = function(e) {
                return e.keys().map(e)
            }, i(918184), i(557147), i(120220), i(195355).setClasses(), i(292733), i(828846).install(), i(615634), i(815365), i(369441), i(216820), i(968724), i(331565), i(799438), i(568421), i(151612), i(100757), i(375095), i(551762), i(79891), i(655119), i(644197), i(183554), i(342098), i(198006)
        },
        871351: (e, t, i) => {
            "use strict";
            i.d(t, {
                AdUnit: () => p,
                Placement: () => g,
                getAdUnitPath: () => m,
                displaySlot: () => f,
                isEnabled: () => v,
                trackAdDialogEvent: () => w
            });
            var o = i(64390),
                n = i(604346),
                r = i(198006),
                s = i(582755),
                a = i(11767),
                l = i(808276),
                c = i(110164),
                d = i(771073);
            let u = !1;
            const h = {};
            var p, g;
            async function m(e) {
                const t = (0, s.isRtl)();
                if (!t && void 0 === e.darkLtr) return e.lightLtr;
                if (t && void 0 === e.darkRtl) return e.lightRtl;
                const [{
                    StdTheme: o
                }, {
                    getCurrentTheme: r
                }] = await Promise.all([Promise.all([i.e(14563), i.e(64853)]).then(i.bind(i, 364853)), Promise.all([i.e(14563), i.e(34698), i.e(68981), i.e(89590)]).then(i.bind(i, 934698))]), a = (0, n.getInitData)().theme || r().name;
                return t ? a === o.Dark && e.darkRtl ? e.darkRtl : e.lightRtl : a === o.Dark && void 0 !== e.darkLtr ? e.darkLtr : e.lightLtr
            }
            async function _(e, t) {
                return u || ((0, o.appendScript)("https://securepubads.g.doubleclick.net/tag/js/gpt.js"), window.googletag = window.googletag || {
                    cmd: []
                }, u = !0), new Promise(i => {
                    window.googletag.cmd.push(() => {
                        if (h[e.adUnitPath]) {
                            const t = h[e.adUnitPath].onDestroy;
                            void 0 !== t && t(), window.googletag.destroySlots([h[e.adUnitPath].slot])
                        }
                        const o = window.googletag.defineSlot(e.adUnitPath, e.size, e.optDiv);
                        h[e.adUnitPath] = {
                            slot: o
                        }, void 0 !== t && (h[e.adUnitPath].onDestroy = t), o.addService(window.googletag.pubads()), window.googletag.pubads().enableSingleRequest(), window.googletag.pubads().setTargeting("locale", window.locale), window.googletag.pubads().setTargeting("env", (0, a.isProd)() ? "battle" : "staging"), window.googletag.enableServices(), i(o)
                    })
                })
            }
            async function f(e, t, i, o) {
                const n = await _(e, i),
                    r = setTimeout(() => {
                        t(!0)
                    }, 3e3);
                window.googletag.cmd.push(() => {
                    window.googletag.pubads().addEventListener("slotRenderEnded", i => {
                        i.slot === n && (clearTimeout(r), t(i.isEmpty), i.isEmpty || c.telemetry.sendReport("site", e.placementId + "_ad_slot_shown"))
                    }), void 0 !== o && window.googletag.pubads().addEventListener("impressionViewable", e => {
                        e.slot === n && o()
                    }), window.googletag.display(e.optDiv)
                }), c.telemetry.sendReport("site", e.placementId + "_ad_slot_display")
            }

            function v() {
                var e;
                return (0, r.isFeatureEnabled)("google-ads") && (null === (e = window.user.active_broker) || void 0 === e ? void 0 : e.plan) !== l.BrokerPlansIds.Platinum
            }
            async function w(e, t, i, o) {
                const n = await (0, d.getTracker)();
                n && n.trackAdDialog(e, t, i, o, window.is_authenticated ? "free" : "visitor")
            }! function(e) {
                e.IdeasStream = "ideas stream", e.Platform = "platform", e.PublishedIdea = "published idea"
            }(p || (p = {})),
            function(e) {
                e.Symbols = "symbols", e.Platform = "platform", e.OpenedIdea = "opened idea", e.Feeds = "feeds"
            }(g || (g = {}))
        },
        482324: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                getPriceAlertsDispatcher: () => n,
                getPriceAlertsDispatcherIfExists: () => r,
                setPriceAlertsDispatcherIfNotExists: () => s
            });
            i(265194);
            let o = null;

            function n() {
                return new Promise(e => {
                    null === o ? Promise.all([i.e(11216), i.e(11228), i.e(73715), i.e(41242), i.e(19453), i.e(52946), i.e(84234), i.e(267), i.e(51021), i.e(94965), i.e(59958), i.e(35683), i.e(93962), i.e(48158)]).then(i.bind(i, 735797)).then(t => {
                        null === o && (o = new t.AlertsDispatcher), e(o)
                    }) : e(o)
                })
            }

            function r() {
                return o
            }

            function s(e) {
                return null === o && (o = e, !0)
            }
        },
        464079: (e, t, i) => {
            "use strict";
            var o = i(918184);
            const n = i(987380).getLogger("CommonUI.CreateTVBlockPlugin");
            e.exports.createTvBlockWithInstance = function(e, t) {
                if (e && t) return e = e.toString(),
                    function(r, s, a) {
                        var l, c, d;
                        return "get" === r ? l = s : (c = s, "object" == typeof r && void 0 === s ? (c = r,
                            r = "init") : "string" != typeof r && (r = "init")), "getInstance" === r ? o(this).eq(0).data(e) : "destroy" === r ? (d = o(this).eq(0).data(e)) ? void("function" == typeof d.destroy ? (i(d, "destroy", c), o(this).eq(0).removeData(e)) : n.logError("[Block Plugin] " + e + " does not support destroy command")) : void console.warn("[Block Plugin] Trying to execute destroy method of " + e + " but it has not been inited") : "get" === r ? (d = o(this).eq(0).data(e)) ? "function" == typeof d[l] ? i(d, l, a) : d[l] : void console.warn("[Block Plugin] Trying to get prop or execute method of " + e + " but it has not been inited") : o(this).each((function() {
                            var s = o(this),
                                a = s.data(e);
                            void 0 === a && (a = void 0 === c ? t(s) : t(s, c), s.data(e, a)), "init" !== r && ("function" == typeof a[r] ? i(a, r, c) : n.logError("[Block Plugin] " + e + " does not support command " + r))
                        }))
                    };

                function i(e, t, i) {
                    return void 0 === i ? e[t]() : e[t](i)
                }
            }
        },
        473579: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                buttonLoader: () => s,
                ButtonLoader: () => a
            });
            i(387118);
            var o = i(464079),
                n = i(971928),
                r = i(918184);

            function s(e) {
                return new a(r(e))
            }
            r.fn.tvButtonLoader = (0, o.createTvBlockWithInstance)("tv-button-loader", (function(e) {
                return new a(e)
            }));
            class a {
                constructor(e) {
                    this.$btn = r(e).addClass("tv-button--loader"), 0 === this.$btn.find(".tv-button__loader").length && this.$btn.html('<span class="tv-button__text">' + this.$btn.html() + '</span><span class="tv-button__loader"><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span><span class="tv-button__loader-item"></span></span>'), this.loading = this.$btn.hasClass("i-loading")
                }
                _start() {
                    this.starting = !0, this.$btn.addClass("i-start-load"), this.$btn.trigger("tv-button-loader:start"), setTimeout(() => {
                        this.loading = !0, this.starting = !1, this._startPromise = !1, this.$btn.addClass("i-loading"), this.$btn.removeClass("i-start-load"), this._stopPromise && this._stop()
                    }, 2 * n.dur)
                }
                start() {
                    this.starting || (this.stopping ? this._startPromise = !0 : this._start())
                }
                _stop() {
                    this.stopping = !0, this.$btn.addClass("i-stop-load"), this.$btn.trigger("tv-button-loader:stop"), setTimeout(() => {
                        this.loading = !1, this.stopping = !1, this._stopPromise = !1, this.$btn.removeClass("i-loading i-start-load i-stop-load"), this._startPromise && this._start()
                    }, n.dur)
                }
                stop() {
                    this.stopping || (this.starting ? this._stopPromise = !0 : this._stop())
                }
                toggle() {
                    this.loading ? this.stop() : this.start()
                }
                contentHtml(e) {
                    return e ? (this.$btn.find(".tv-button__text").html(e), e) : this.$btn.find(".tv-button__text").html()
                }
                contentNojQuery() {
                    return this.$btn.get(0)
                }
                disable() {
                    this.stop(), this.$btn.addClass("i-disabled")
                }
                enable() {
                    this.$btn.removeClass("i-disabled")
                }
            }
        },
        470588: (e, t, i) => {
            "use strict";
            i.d(t, {
                controlMaterial: () => s
            });
            i(433336), i(999552);
            var o = i(464079),
                n = i(918184);
            class r {
                constructor(e, t = {}) {
                    var i = e.prop("tagName").toLowerCase(),
                        o = e.prop("readonly"),
                        r = e.prop("disabled"),
                        s = "tv-control-material-" + i,
                        a = n(document.createElement("span")).addClass(s + "__label").text(e.attr("placeholder") || ""),
                        l = n(document.createElement("div")).addClass(s + "__wrap"),
                        c = e.get(0);
                    if (c && c.classList) {
                        for (var d = [], u = 0; u < c.classList.length; u++) {
                            var h = c.classList[u];
                            if (h.includes(s)) {
                                const e = h.replace(s, "");
                                e && d.push(e)
                            }
                        }
                        for (u = 0; u < d.length; u++) a.addClass(`${s}__label${d[u]}`), l.addClass(`${s}__wrap${d[u]}`)
                    }
                    e.attr("placeholder", "").removeClass("tv-control-" + i).addClass(`tv-control-material-${i}__control `).wrap(l).after(a), this.$el = e.parent(), e.on("focus", () => {
                        o || r || a.addClass("i-up")
                    }), e.on("blur", () => {
                        "" === e.val() && a.removeClass("i-up")
                    }), e.on("change", () => {
                        "" !== e.val() && a.addClass("i-up")
                    }), this.$el.on("click", () => {
                        e.focus()
                    }), "" !== e.attr("value") && void 0 !== e.attr("value") && a.addClass("i-up")
                }
            }

            function s(e, t) {
                return new r(n(e), t)
            }
            n.fn.tvControlMaterial = (0, o.createTvBlockWithInstance)("tv-control-material", (function(e, t) {
                return new r(e, t)
            }))
        },
        346678: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                DropdownView: () => a
            });
            i(134131), i(983472);
            var o = i(464079),
                n = i(607562),
                r = i(192084),
                s = i(918184);
            class a {
                constructor(e, t = {}) {
                    this.$el = e, this.$wrap = t.$wrap || e.find(".tv-dropdown-behavior__button"), this.$body = t.$body || e.find(".tv-dropdown-behavior__body"), this.notCloseWithCtrl = !!t.notCloseWithCtrl && t.notCloseWithCtrl, this.closeWithEsc = void 0 === t.closeWithEsc || t.closeWithEsc, this.closeWithEsc && this.$el.attr("tabIndex", 0), (e.data("scroll") || t.scroll) && (this.$scroll = this.$body.find(".tv-dropdown-behavior__scroll"), this.$inScroll = this.$scroll.find(".tv-dropdown-behavior__inscroll"), this.scroll = new n.SidebarCustomScroll(this.$scroll[0], this.$inScroll[0], {
                        showTopShadow: !1,
                        showBottomShadow: !1
                    }), this.$scrollBar = s(this.scroll.getScrollBar()), this.$scrollBar && this.$scrollBar.on("mousedown.tv-dropdown-view-scroll", () => {
                        this.offClickOutside(), s(document).on("mouseup.tv-dropdown-view-scroll", () => {
                            this.onClickOutside(), s(document).off("mouseup.tv-dropdown-view-scroll")
                        })
                    })), (e.data("adaptBody") || t.adaptBody) && (this._adaptBody = !0), (e.data("adaptOnlyInScrollHeight") || t.adaptOnlyInScrollHeight) && (this._adaptOnlyInScrollHeight = !0), this._fitScreen = e.data("fitScreen") || t.fitScreen, this._maxHeight = e.data("maxHeight") || t.maxHeight, this._dropdownWidth = e.data("dropdownWidth") || t.dropdownWidth, this._boundingElement = t.boundingElement, this.$wrap.add(e.find(".js-dropdown-toggle")).on("click", e => {
                        s(e.currentTarget).hasClass("js-prevent-dropdown") || this.toggle()
                    }), this._checkIgnoreClickOutside = []
                }
                toggle() {
                    this.opened ? this.close(!0) : this.open()
                }
                open() {
                    this.opened || this.disabled || this.readonly || (this.$el.trigger("beforeOpenMenu"), this.$body.removeClass("i-hidden").addClass("i-opened"), this.$wrap.addClass("i-dropped"), this.$el.addClass("i-opened"), "horz" === this._fitScreen && this.fitHorizontally(), this._adaptBody && this.adaptBody(), this.onClickOutside(), this.$el.trigger("updateScroll"), this.$el.trigger("afterOpenMenu"), this.opened = !0, this.closeWithEsc && this.$el.on("keypress keyup", e => {
                        e.keyCode === r.ESC && this.close(!0)
                    }))
                }
                onClickOutside() {
                    setTimeout(() => {
                        this.$body.on("clickoutside", e => {
                            this._checkIgnoreClickOutside.length && this._checkIgnoreClickOutside.some(t => t(e)) || this.close(!0)
                        })
                    }, 0)
                }
                offClickOutside() {
                    this.$body.off("clickoutside")
                }
                setCheckIgnoreClickOutside(e) {
                    this._checkIgnoreClickOutside.push(e)
                }
                dropCheckIgnoreClickOutside(e) {
                    var t = this._checkIgnoreClickOutside.indexOf(e); - 1 !== t && this._checkIgnoreClickOutside.splice(t, 1)
                }
                close(e = !1) {
                    !this.opened || this.disabled || this.readonly || !e && this.notCloseWithCtrl && (window.event.ctrlKey || window.event.metaKey) || (this.offClickOutside(), this.$wrap.removeClass("i-dropped"), this.$el.trigger("beforeCloseMenu"), this.$body.removeClass("i-opened").addClass("i-hidden"), this.$el.removeClass("i-opened"), this.closeWithEsc && this.$el.off("keypress keyup"), this.opened = !1, this.$el.trigger("afterCloseMenu"))
                }
                isOpened() {
                    return this.opened
                }
                updateScroll() {
                    this.scroll && (this.scroll.updateScrollBar(), this.scroll.scrollToStart())
                }
                enable() {
                    this.$wrap.removeClass("i-disabled"), this.disabled = !1
                }
                disable() {
                    this.$wrap.addClass("i-disabled"), this.disabled = !0
                }
                setReadonly(e) {
                    this.readonly = e
                }
                adaptBody() {
                    const e = this.$body,
                        t = this.$wrap.get(0).getBoundingClientRect(),
                        i = this._boundingElement ? this._boundingElement.getBoundingClientRect() : {
                            top: 0,
                            bottom: window.innerHeight,
                            height: window.innerHeight
                        },
                        o = parseFloat(e.css("padding-top")),
                        n = parseFloat(e.css("padding-bottom")),
                        r = this.$inScroll.outerHeight(!0) + o + n;
                    if (this.scroll && this.scroll.scrollToStart(), this._adaptOnlyInScrollHeight) {
                        const o = e.find(".js-dropdown-dummy"),
                            r = o ? parseFloat(o.css("padding-bottom")) + parseFloat(o.css("margin-bottom")) : 0,
                            s = t.top + t.height + r;
                        return void this.$el.find(".tv-dropdown-behavior__scroll").css("maxHeight", i.bottom - n - s - 25)
                    }
                    const s = this._maxHeight || r,
                        a = t.top + s + 25 <= i.bottom,
                        l = i.top + 15 + s <= t.bottom;
                    let c, d = this._maxHeight || "auto";
                    if (a) c = -o;
                    else if (l) c = -s + t.height + n;
                    else {
                        c = -t.top + i.top + 15;
                        const e = i.height - 15 - 25;
                        s > e && (d = e)
                    }
                    e.css("top", c), e.height(d), this._dropdownWidth && e.width(this._dropdownWidth)
                }
                fitHorizontally() {
                    this.$body.css("marginLeft", 0);
                    const e = document.body.getBoundingClientRect(),
                        t = parseFloat(s(document.body).css("paddingRight")),
                        i = this.$body.offset();
                    i.right = i.left + this.$body.outerWidth();
                    const o = Math.max(Math.min(0, e.right - t - i.right), e.left - i.left);
                    o && this.$body.css("marginLeft", o)
                }
                destroy() {
                    this.scroll && this.scroll.destroy(), this.offClickOutside(), this.$el.find(".js-dropdown-toggle").off("click"), this.$wrap.off("click")
                }
            }
            s.fn.tvDropdown = (0, o.createTvBlockWithInstance)("tv-dropdown", (function(e, t = {}) {
                return new a(e, t)
            }))
        },
        644197: (e, t, i) => {
            e = i.nmd(e), TradingView.cleanButAmpersand = function(e, t) {
                var i = t ? ["&amp;"] : ["&"];
                return TradingView.clean(e, t, i)
            }, TradingView.strip_tags = function(e) {
                return e && e.replace ? e.replace(/(<([^>]+)>)/gi, "") : e
            }, TradingView.encodeSpread = function(e) {
                return encodeURIComponent(e)
            }, TradingView.clean = function(e, t, i) {
                var o = [
                        ["&", "&amp;"],
                        ["<", "&lt;"],
                        [">", "&gt;"],
                        ['"', "&quot;"],
                        ["'", "&#039;"],
                        ["'", "&#39;"]
                    ],
                    n = e;
                if (!e || !e.replace) return n;
                for (var r = 0; r < o.length; r++) {
                    var s = o[r][0],
                        a = o[r][1];
                    i && i.indexOf && -1 !== i.indexOf(t ? a : s) || (n = t ? n.replace(new RegExp(a, "g"), s) : n.replace(new RegExp(s, "g"), a))
                }
                return n
            }, e && e.exports && (e.exports = {
                clean: TradingView.clean,
                cleanButAmpersand: TradingView.cleanButAmpersand,
                stripTags: TradingView.strip_tags
            })
        },
        183554: (e, t, i) => {
            "use strict";
            i.r(t);
            var o = i(541962),
                n = i(929098),
                r = i(685864),
                s = i(15642),
                a = (i(216820), i(75443)),
                l = i(11767),
                c = i(655119),
                d = i(987380);
            const u = (0, d.getLogger)("Common.Evercookie");
            const h = (0, d.getLogger)("Common.Evercookie"),
                p = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
            class g {
                constructor() {
                    this._cookieName = "tv_ecuid", this._env = null, this._ec = null, this.check = () => {
                        if (this._isEcNotAvailable() || c.TVLocalStorage.getItem("_tv_ec_ignore_username") === window.user.username) return;
                        const e = window.user.id;
                        this._getEcUids().catch(e => {
                            h.logWarn(`Error thrown inside getEcUids(). Leave evercookie data untouched. User: ${window.user.username} (${window.user.id})\nActual error: ${e}`)
                        }).then(t => {
                            if (void 0 === t) return void h.logWarn(`getEcUids() returned no data. Leave evercookie data untouched. User: ${window.user.username} (${window.user.id})`);
                            let o = t.localEcUid;
                            const n = t.remoteEcUids;
                            o && p.test(o) || (o = (0, a.guid)(), this._getEc().set(this._cookieName, o));
                            const s = t => {
                                t.subscription_canceled && Promise.all([i.e(99459), i.e(26822), i.e(74814), i.e(18436), i.e(53471), i.e(63949), i.e(11216), i.e(18932)]).then(i.bind(i, 353373)).then(e => e.createTrialCanceledDialog()), e === window.user.id && t.is_suspicious ? c.TVLocalStorage.setItem("is_suspicious", "1") : c.TVLocalStorage.removeItem("is_suspicious")
                            };
                            n && 0 !== n.length && -1 !== n.indexOf(o) || e !== window.user.id || function(e) {
                                const t = new FormData;
                                return t.append("ecuid", e), (0, r.fetch)("/accounts/set-ecuid/", {
                                    body: t,
                                    credentials: "include",
                                    method: "POST"
                                }).then(e => {
                                    if (e.ok) return e.json().catch(e => {
                                        u.logWarn(`Error in reponse.json() of /accounts/set-ecuid/. User: ${window.user.username} (${window.user.id})\nActual error: ${e}`)
                                    });
                                    throw new Error("Unable to set remote ecuids. Response was not OK")
                                })
                            }(o).then(s)
                        }).catch(e => {
                            h.logError(e.message + ` User: ${window.user.username} (${window.user.id})`)
                        })
                    }, this._isEcNotAvailable() || (this._env = (0, l.environment)(), (0, l.isDebug)() && (this._cookieName += "_" + this._env))
                }
                _isEcNotAvailable() {
                    return TradingView.onWidget && TradingView.onWidget() || !window.user
                }
                _getEc() {
                    return this._ec || (this._ec = new window.evercookie({
                        domain: (0, l.isProd)() ? ".tradingview.com" : location.hostname,
                        lso: !1
                    })), this._ec
                }
                _getLocalEcUid() {
                    return new Promise(e => {
                        this._getEc().get(this._cookieName, t => {
                            e(t)
                        })
                    })
                }
                _getEcUids() {
                    return new Promise((e, t) => {
                        let i;
                        this._getLocalEcUid().then(e => (i = e, function(e) {
                            return new Promise((t, i) => {
                                const o = new FormData;
                                e && o.append("local_ecuid", e), (0, r.fetch)("/accounts/get-ecuid/", {
                                    body: o,
                                    credentials: "include",
                                    method: "POST"
                                }).then(e => {
                                    if (e.ok) return e.json().catch(e => {
                                        u.logWarn(`Error in reponse.json() of /accounts/get-ecuid/. User: ${window.user.username} (${window.user.id})\nActual error: ${e}`)
                                    });
                                    throw new Error("Unable to get remote ecuids. Response was not OK")
                                }).then(e => {
                                    t(e)
                                }).catch(e => {
                                    i(e)
                                })
                            })
                        }(e))).then(t => {
                            if (void 0 === t) throw new Error(`getRemoteEcUids() returned no response. User: ${window.user.username} (${window.user.id})`);
                            e({
                                localEcUid: i,
                                remoteEcUids: t.ecuids
                            })
                        }).catch(e => {
                            t(e)
                        })
                    })
                }
            }
            i(918184);
            var m = i(120220),
                _ = i(965009),
                f = i(396107),
                v = i(388674),
                w = i(536053),
                y = i(918184);
            y("body").on("click", ".js-follow-user", (function(e) {
                const t = y(e.currentTarget),
                    o = t.data("id"),
                    n = t.is(".js-follow-user--followed") ? "Unfollow" : "Follow",
                    r = {
                        authorId: o
                    };
                window.runOrSignIn(async () => {
                    if (!t.is(".self")) {
                        const e = t.is(".js-follow-user--followed") ? 0 : 1;
                        (await Promise.all([i.e(9029), i.e(57853)]).then(i.bind(i, 58406))).protectedFetch("/social/follow-the-user/", {
                            follow: e,
                            targetId: o
                        }, "follow").then(e => {
                            "max_followings_exceed" !== e.error_code ? e.error ? (0, v.showNoticeDialog)({
                                content: e.error,
                                title: e.errorTitle || (0, m.t)("Error")
                            }) : (y(".js-follow-user-" + o).toggleClass("js-follow-user--followed").toggleClass("i-checked"), (0, _.trackActionFollow)("User", n, r)) : Promise.all([i.e(70964), i.e(38817), i.e(91877), i.e(59456), i.e(25535), i.e(5058), i.e(11216), i.e(99752), i.e(64011), i.e(7562), i.e(34834)]).then(i.bind(i, 464161)).then(({
                                createDialog: e
                            }) => {
                                const t = e({
                                    type: "modal",
                                    closeOnEsc: !1,
                                    closeOnOutsideClick: !1,
                                    closeButton: !1,
                                    width: 546,
                                    contentWrapTemplate: '\n\t\t\t\t\t\t\t\t\t\t<div class="tv-dialog__section tv-dialog__section--no-border">\n\t\t\t\t\t\t\t\t\t\t\t<div class="tv-text"></div>\n\t\t\t\t\t\t\t\t\t\t</div>',
                                    content: `\n\t\t\t\t\t\t\t\t\t\t<div class="tv-dialog__header">\n\t\t\t\t\t\t\t\t\t\t\t<div class="tv-dialog__header-logo">${w}</div>\n\t\t\t\t\t\t\t\t\t\t\t<h2 class="tv-dialog__header-title">${(0,m.t)("Unfollow some authors")}</h2>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<p class="tv-text__font tv-text__font--size_semilarge">\n\t\t\t\t\t\t\t\t\t\t\t\t${(0,m.t)("Sorry, follow limit reached and you cannot follow more authors without removing some first.")}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>`,
                                    actions: [{
                                        name: "goToProfile",
                                        type: "primary",
                                        text: (0, m.t)("Go to Profile"),
                                        key: 13
                                    }, {
                                        addClass: "tv-button--no-padding i-float_left",
                                        name: "cancel",
                                        type: "link",
                                        text: (0, m.t)("No thanks"),
                                        method: "close"
                                    }]
                                });
                                t.on("action:goToProfile", e => {
                                    window.location.replace((0, f.getUserProfilePath)(window.user, {
                                        page: f.ProfilePages.FollowingPeople
                                    })), e.destroy()
                                }), t.open()
                            })
                        }).catch(e => {
                            (0, v.showNoticeDialog)({
                                content: e.message,
                                title: (0, m.t)("Oops!")
                            })
                        })
                    }
                }, {
                    source: "Follow user",
                    verifiedPhoneRequired: !0
                })
            }));
            var b = i(282143);
            document.addEventListener("DOMContentLoaded", () => {
                document.addEventListener("click", e => {
                    const t = e.target.closest(".js-profile-message");
                    t instanceof HTMLElement && (e.preventDefault(), function(e) {
                        const t = Number(e.dataset.id),
                            i = e.dataset.username;
                        window.runOrSignIn(() => (0, b.openPMDialog)(t, i), {
                            source: "Private message from broker popup",
                            verifiedPhoneRequired: !0
                        })
                    }(t))
                })
            });
            var S = i(371141),
                T = i(968724),
                E = i(640142),
                C = (i(242127), i(896276)),
                A = i.n(C),
                I = i(821318),
                k = i(795498);
            i(918184)(document).ajaxSend((e, t, i) => {
                i.crossDomain && !i.forceLanguageHeader || (window.locale ? t.setRequestHeader("X-Language", window.locale) : console.warn("window.locale is not defined"))
            });
            var L = i(323619);
            var P = i(385622);
            let x, D;

            function N() {
                if (window.initData.lfs) {
                    const e = document.getElementsByClassName("js-admin-warning")[0];
                    document.body.removeChild(e)
                }
                let e = !0;
                [/^\/chart\//, /^\/share-your-love\//].forEach(t => {
                        t.test(window.location.pathname) && (e = !1)
                    }),
                    e && window.location.reload()
            }

            function M(e, t) {
                window.TVDialogs && window.TVDialogs.signModal && window.TVDialogs.signModal.close(), window.user = (0, I.deepExtend)({}, e), window.TradingView.changeLoginState(!0), "function" == typeof t && window.TVDialogs && window.TVDialogs.signModal ? window.TVDialogs.signModal.on("signinSuccess", () => {
                    t()
                }) : "function" == typeof t && t()
            }

            function B(e) {
                window.iframeAuthWidget && !1 === window.user.profile_data_filled && (window.iframeAuthWidget.preventClose = !0);
                const t = window.user.available_offers || {}; {
                    const e = document.documentElement;
                    e.classList.toggle("is-authenticated", window.is_authenticated), e.classList.toggle("is-not-authenticated", !window.is_authenticated)
                }
                window.TVSettings && window.TVSettings.sync(window.user.settings), window.is_authenticated ? (e && !1 !== window.user.profile_data_filled || void 0 === D || D.check(), e || (Promise.all([i.e(11216), i.e(19158)]).then(i.bind(i, 406795)).then(e => e.offerButtonLoginStateChangeInit()), (0, T.onGoPro)() && window.user.is_pro && window.location.reload()), !1 === window.user.profile_data_filled && ((0, T.checkPageType)("mobile") || (0, E.isOnMobileAppPage)("any") || (0, k.whenDocumentReady)(() => {
                    (0, S.showSignModal)({
                        mode: "create-account",
                        noCloseButton: !!window.user.social_registration,
                        dontCloseOnEsc: !!window.user.social_registration,
                        nameFields: !window.user.social_registration,
                        noUsernameField: !window.user.social_registration
                    }).then(e => {
                        window.iframeAuthWidget && (window.iframeAuthWidget.preventClose = !1, e.on("destroy", () => {
                            window.iframeAuthWidget.postClose()
                        }))
                    }), window.user.social_registration ? (i.e(22947).then(i.bind(i, 602508)).then(({
                        default: e
                    }) => {
                        e("Social")
                    }), delete window.user.social_registration) : o.TVXWindowEvents.emit("loginStateChange", JSON.stringify({
                        is_authenticated: window.is_authenticated,
                        user: window.user
                    }))
                }, !0), (0, n.trackEvent)("Conversion", "First login"), delete window.user.profile_data_filled), window.TradingView.setTrialAvailiable(void 0 !== t[s.OFFERS.trial])) : (Object.keys(t).forEach(e => {
                    const i = e;
                    t[i].available_for_anons || delete t[i]
                }), window.user = {
                    username: "Guest",
                    following: "0",
                    followers: "0",
                    ignore_list: [],
                    available_offers: t
                }, c.TVLocalStorage.removeItem("trial_availiable"))
            }
            x = window.loginStateChange ? window.loginStateChange : window.loginStateChange = new(A()), x.subscribe(null, B), o.TVXWindowEvents.on("loginStateChange", e => {
                const t = JSON.parse(e);
                window.user = t.user, window.is_authenticated = !!t.is_authenticated, x.fire()
            }), o.TVXWindowEvents.on("signOut", () => {
                N()
            }), (() => {
                const e = {};
                window.crossTabSyncUserAttr = e => {
                    const t = {};
                    e instanceof Array ? e.forEach(e => {
                        t[e] = window.user[e]
                    }) : t[e] = window.user[e], o.TVXWindowEvents.emit("user-obj-changed", JSON.stringify(t))
                }, o.TVXWindowEvents.on("user-obj-changed", t => {
                    const i = JSON.parse(t);
                    let o;
                    for (o in i)
                        if (i.hasOwnProperty(o)) {
                            window.user[o] = i[o];
                            (e[o] || []).forEach(e => {
                                e.fire(i[o])
                            })
                        }
                })
            })(), window.TradingView.changeLoginState = e => {
                window.is_authenticated = !!e, o.TVXWindowEvents.emit("loginStateChange", JSON.stringify({
                    is_authenticated: window.is_authenticated,
                    user: window.user
                })), x.fire()
            }, window.loginUser = M, window.addEventListener("storage", e => {
                "login_user" === e.key && null !== e.newValue && M(JSON.parse(e.newValue))
            }), window.TradingView.signOut = () => {
                const e = { ...window.user
                };
                (0, r.fetch)("/accounts/logout/", {
                    method: "POST",
                    headers: {
                        accept: "html"
                    },
                    credentials: "same-origin"
                }).then(() => {
                    window.TradingView.changeLoginState(!1), o.TVXWindowEvents.emit("signOut"), N()
                }).catch(() => {
                    window.user = e, window.TradingView.changeLoginState(!0)
                })
            }, D = new g, window.loginRequiredDelegate = new(A()), window.runOrSignIn = (e, t) => {
                t || (t = {});
                const i = [];
                if (t.paidAccountCheck && i.push(() => (0, P.paidAccountCheck)({
                        successButtonText: t.paidAccountSuccessButtonText
                    })), t.verifiedPhoneRequired) {
                    const e = () => Promise.resolve((0, L.whenVerified)({
                        showDialog: !0,
                        source: t.source,
                        doNotCheckSuspicious: t.doNotCheckSuspicious,
                        doNotCheckSocialActivity: t.doNotCheckSocialActivity,
                        customPhoneCheck: t.customPhoneCheck,
                        doNotShowConfirmation: t.doNotShowConfirmation
                    }));
                    i.push(e)
                }
                window.is_authenticated ? i.reduce((e, t) => e.then(t), Promise.resolve()).then(e).catch(() => {}) : (0, S.showSignModal)({
                    source: t.source,
                    sourceMeta: t.sourceMeta,
                    feature: t.feature,
                    mode: t.mode,
                    signinSuccess: e,
                    startTrial: t.startTrial
                })
            }, window.onLoginStateChange = B, window.TradingView.setTrialAvailiable = e => {
                c.TVLocalStorage.setItem("trial_availiable", e ? "1" : "0")
            }, window.TradingView.notificationsChanged = new(A())
        },
        524926: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                agoDateFormatter: () => p,
                destroy: () => m,
                getFormattedDataByDate: () => u,
                initAgoDateFormatters: () => _,
                jQueryCompatibleAgoDateFormatter: () => h,
                jQueryCompatibleDestroy: () => g,
                shortFormat: () => f
            });
            var o = i(120220),
                n = i(24194);
            const r = {
                    L: "MMM D",
                    LL: "YYYY MMM D",
                    LLL: "HH:mm - YYYY MMM D"
                },
                s = {
                    ja: r,
                    ko: r
                };

            function a(e) {
                return 6e4 - e % 6e4
            }

            function l(e) {
                const t = 36e5;
                return t - e % t
            }

            function c(e) {
                const t = 864e5;
                return t - e % t
            }

            function d(e) {
                const t = e.getAttribute("data-ago-date-timer");
                t && clearTimeout(+t)
            }

            function u({
                date: e,
                forceAgoFormat: t,
                customDateFormat: i,
                customDateFormatLocale: o
            }) {
                n.relativeTimeThreshold("h", 24), "number" == typeof e && (e = new Date(e));
                const r = n(new Date).diff(e),
                    d = function(e) {
                        let t = 200;
                        if ((e = Math.floor(e / 6e4)) < 60) t += a(e);
                        else if (e < 1440) t += l(e);
                        else {
                            if (!(e < 43200)) return 0;
                            t += c(e)
                        }
                        return t
                    }(r),
                    u = s[window.language];
                let h = "",
                    p = {
                        L: "L",
                        LL: "LL",
                        LLL: "LLL"
                    };
                u && (p = u), o && (p.LLL = o), h = t || Math.round(r / 36e5) < 24 ? n(e).fromNow() : i ? n(e).format(i) : e.getFullYear() === (new Date).getFullYear() ? n(e).format(p.L) : n(e).format(p.LL);
                return {
                    diff: r,
                    formattedDate: n(e).format(p.LLL),
                    text: h,
                    updateTimeout: d
                }
            }

            function h(e, t, i, o, n) {
                const r = Array.from(e);
                for (const e of r) p(e, t, i, o, n)
            }

            function p(e, t, i, o, n) {
                const {
                    diff: r,
                    formattedDate: s,
                    text: a,
                    updateTimeout: l
                } = u({
                    date: t,
                    forceAgoFormat: i,
                    customDateFormat: n
                }), c = e.parentElement;
                if (null !== c && c.classList.toggle("just-now", r < 45e3), e.setAttribute("title", s), e.textContent = a, l) {
                    d(e);
                    const i = setTimeout(() => {
                        p(e, t)
                    }, l);
                    e.setAttribute("data-ago-date-timer", i.toString())
                } else e.removeAttribute("data-ago-date-timer");
                if (o) {
                    const t = e.closest(".js-visible-after-ago-formatter-inited");
                    null !== t && t.classList.remove("i-invisible", "js-visible-after-ago-formatter-inited")
                }
            }

            function g(e) {
                const t = Array.from(e);
                for (const e of t) m(e)
            }

            function m(e) {
                d(e);
                const t = Array.from(e.querySelectorAll("[data-ago-date-timer]"));
                for (const e of t) d(e)
            }

            function _(e, t, i, o) {
                const n = Array.from(e.querySelectorAll(".js-ago-date-formatter"));
                for (const e of n) p(e, 1e3 * Number(e.dataset.time), t, i, o);
                return () => {
                    for (const e of n) m(e)
                }
            }

            function f(e) {
                let t = Math.floor(e / 6e4),
                    i = "",
                    n = 0;
                return t < 60 ? (i = (t < 1 ? 0 : t) + o.t("m", {
                    context: "date_diff_short"
                }), n = a(e)) : t < 1440 ? (t = Math.floor(t / 60), i = t + o.t("h", {
                    context: "date_diff_short"
                }), n = l(e)) : t < 43200 ? (t = Math.floor(t / 1440), i = t + o.t("d", {
                    context: "date_diff_short"
                }), n = c(e)) : t < 15768e3 ? (t = Math.floor(t / 43200), i = t + o.t("mn", {
                    context: "date_diff_short"
                })) : (t = Math.floor(t / 15768e3), i = t + o.t("y", {
                    context: "date_diff_short"
                })), n && (n += 200), {
                    text: i,
                    timeout: n
                }
            }
        },
        264553: (e, t, i) => {
            "use strict";
            i.d(t, {
                handleVoidRequest: () => r,
                handleJSONRequest: () => s,
                APIError: () => a
            });
            var o = i(685864);

            function n({
                path: e,
                requestData: t
            }) {
                const i = new URL(e, window.origin);
                if ("GET" === t.method && t.query)
                    for (const [e, o] of Object.entries(t.query)) void 0 !== o && i.searchParams.append(e, o);
                const n = {
                    method: t.method,
                    credentials: "same-origin"
                };
                return "POST" !== t.method && "PUT" !== t.method || (n.body = JSON.stringify(t.body), n.headers = new Headers({
                    "Content-Type": "application/json"
                })), (0, o.fetch)(i.toString(), n)
            }
            async function r(e) {
                const t = await n(e);
                if (!t.ok) try {
                    const e = await t.json();
                    return Promise.reject(new a(t.status, e))
                } catch (e) {
                    return Promise.reject(new a(t.status, {}))
                }
            }
            async function s(e) {
                const t = await n(e);
                try {
                    const e = await t.json();
                    return t.ok ? e : Promise.reject(new a(t.status, e))
                } catch (e) {
                    return Promise.reject(new a(t.status, {}))
                }
            }
            class a extends Error {
                constructor(e, t) {
                    super([e, t.code, t.detail].filter(Boolean).join(" - ")), this.status = e, this.payload = t, this.name = "APIError", Object.setPrototypeOf(this, new.target.prototype)
                }
            }
        },
        468450: (e, t, i) => {
            "use strict";

            function o(e, t, i) {
                return e * (1 - i) + t * i
            }
            i.d(t, {
                lerp: () => o,
                doAnimate: () => s
            });
            const n = {
                from: 0,
                duration: 250,
                easing: i(971928).easingFunc.easeOutCubic
            };
            class r {
                constructor(e) {
                    this._doing = !0, this._completed = !1, this._options = { ...n,
                        ...e
                    };
                    const t = performance.now();
                    window.requestAnimationFrame(e => {
                        this._animation(t, this._options.from, e)
                    })
                }
                stop() {
                    this._doing = !1
                }
                completed() {
                    return this._completed
                }
                _animation(e, t, i) {
                    if (!this._doing) return void this._finishAnimation();
                    const n = (i = !i || i < 1e12 ? performance.now() : i) - e,
                        r = n >= this._options.duration || t === this._options.to,
                        s = o(this._options.from, this._options.to, this._options.easing(n / this._options.duration)),
                        a = r ? this._options.to : s,
                        l = a - t;
                    this._options.onStep(l, a), r ? this._finishAnimation() : window.requestAnimationFrame(t => {
                        this._animation(e, a, t)
                    })
                }
                _finishAnimation() {
                    this._options.onComplete && this._options.onComplete(), this._completed = !0
                }
            }

            function s(e) {
                return new r(e)
            }
        },
        685864: (e, t, i) => {
            "use strict";
            i.d(t, {
                fetch: () => n
            });
            const o = (0, i(987380).getLogger)("Fetch");

            function n(e, t, i = {}) {
                {
                    t = t || {},
                        function(e) {
                            {
                                const t = document.createElement("a");
                                return t.href = e, t.hostname || (t.href = t.href), t.hostname === location.hostname && !t.username
                            }
                        }(e) && (t.headers ? t.headers instanceof Headers || (t.headers = new Headers(t.headers)) : t.headers = new Headers,
                            window.locale && t.headers.set("X-Language", window.locale), t.headers.set("X-Requested-With", "XMLHttpRequest")), void 0 === t.credentials && (t.credentials = "same-origin");
                    const n = window.fetch(e, t);
                    return n.then(n => {
                        if (!n.ok) {
                            let r = "";
                            t.method && (r += t.method.toUpperCase() + " "), r += e, r += ". Status " + n.status, n.statusText && (r += ". " + n.statusText), n.headers.via && (r += ". Via: " + n.headers.via), i.logBodyOnError && "string" == typeof t.body && (r += ". Body: " + t.body.slice(0, 1024)), o.logError(r)
                        }
                        return n
                    }, i => {
                        if (i && "AbortError" === i.name) return;
                        let n = "";
                        t.method && (n += t.method.toUpperCase() + " "), n += e, navigator.onLine ? n += ". " + i : n += ". User is offline.", o.logError(n)
                    }), n
                }
            }
        },
        987380: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                LOGLEVEL: () => r,
                getLogLevel: () => g,
                isHighRateEnabled: () => m,
                setLogLevel: () => _,
                getRawLogHistory: () => f,
                serializeLogHistoryEntry: () => v,
                getLogHistory: () => w,
                getLogger: () => b,
                loggingOn: () => T,
                loggingOff: () => E
            });
            const o = "undefined" != typeof window ? window : {};
            let n = !1;
            try {
                localStorage.getItem(""), n = !0
            } catch (e) {}
            var r;
            ! function(e) {
                e[e.ERROR = 1] = "ERROR", e[e.WARNING = 2] = "WARNING", e[e.INFO = 3] = "INFO", e[e.NORMAL = 4] = "NORMAL", e[e.DEBUG = 5] = "DEBUG"
            }(r || (r = {}));
            let s = 0;
            const a = [];
            let l = null,
                c = null,
                d = null,
                u = NaN,
                h = r.WARNING,
                p = !1;

            function g() {
                return h
            }

            function m() {
                return p
            }

            function _(e) {
                e = Math.max(r.ERROR, Math.min(r.DEBUG, e)), h = e, C()
            }

            function f(e, t) {
                let i = a.reduce((e, t) => e.concat(t), []);
                return i.sort((e, t) => e.id - t.id), void 0 !== t && (i = i.filter(e => e.subSystemId === t)), "number" == typeof e && (i = i.slice(-e)), i
            }

            function v(e) {
                return new Date(e.timestamp).toISOString() + ":" + e.subSystemId + ":" + e.message.replace(/"/g, "'")
            }

            function w(e, t) {
                return function(e, t) {
                    let i, o = 0,
                        n = 0;
                    for (i = e.length - 1; i >= 1 && (o += 8 * (1 + encodeURIComponent(e[i]).length), !(i - 1 > 0 && (n = 8 * (1 + encodeURIComponent(e[i - 1]).length), o + n > t))); i--);
                    return e.slice(i)
                }(f(e, t).map(v), 75497472)
            }

            function y(e, t, i, o) {
                if (t === c && o.id === d) return;
                const n = new Date;
                if (e <= r.NORMAL && function(e, t, i, o, n) {
                        const r = {
                            id: s,
                            message: String(t),
                            subSystemId: o,
                            timestamp: Number(e)
                        };
                        s += 1, i.push(r), void 0 !== n && i.length > n && i.splice(0, 1)
                    }(n, t, i, o.id, o.maxCount), e <= h && (!o.highRate || m()) && (!l || o.id.match(l))) {
                    const i = n.toISOString() + ":" + o.id + ":" + t;
                    switch (e) {
                        case r.DEBUG:
                            console.debug(i);
                            break;
                        case r.INFO:
                        case r.NORMAL:
                            o.color ? console.log("%c" + i, "color: " + o.color) : console.log(i);
                            break;
                        case r.WARNING:
                            console.warn(i);
                            break;
                        case r.ERROR:
                            console.error(i)
                    }
                    c = t, d = o.id, u && clearTimeout(u), u = setTimeout(() => {
                        c = null, d = null, u = NaN
                    }, 1e3)
                }
            }

            function b(e, t = {}) {
                const i = [];
                a.push(i);
                const o = Object.assign(t, {
                    id: e
                });

                function n(e) {
                    return t => y(e, t, i, o)
                }
                return {
                    logDebug: n(r.DEBUG),
                    logError: n(r.ERROR),
                    logInfo: n(r.INFO),
                    logNormal: n(r.NORMAL),
                    logWarn: n(r.WARNING)
                }
            }
            const S = b("logger"),
                T = o.lon = (e, t) => {
                    _(r.DEBUG), S.logNormal("Debug logging enabled"), p = Boolean(e), l = t || null, C()
                },
                E = o.loff = () => {
                    _(r.INFO), S.logInfo("Debug logging disabled")
                };

            function C() {
                try {
                    n && (localStorage.setItem("tv.logger.logHighRate", String(p)), localStorage.setItem("tv.logger.loglevel", String(h)))
                } catch (e) {
                    S.logWarn(`Cannot save logger state (level: ${h}, high-rate: ${p}) to localStorage: ${e.message}`)
                }
            }! function() {
                p = !!n && "true" === localStorage.getItem("tv.logger.logHighRate");
                let e = parseInt(n && localStorage.getItem("tv.logger.loglevel") || "");
                Number.isNaN(e) && (e = r.WARNING), _(e), S.logNormal(`Init with settings - level: ${h}, high-rate: ${p}`)
            }(), o.performance && o.performance.now ? S.logNormal("Sync logger and perf times, now is " + o.performance.now()) : S.logWarn("Perf time is not available")
        },
        805958: (e, t, i) => {
            "use strict";
            var o;
            i.d(t, {
                    ConnectionStatus: () => o
                }),
                function(e) {
                    e[e.Closed = 0] = "Closed", e[e.Connecting = 1] = "Connecting", e[e.Open = 2] = "Open"
                }(o || (o = {}))
        },
        804950: (e, t, i) => {
            "use strict";
            i.d(t, {
                PersistentTransport: () => d
            });
            var o = i(805958),
                n = i(382713),
                r = i(765066),
                s = i.n(r),
                a = i(896276),
                l = i.n(a),
                c = i(898388);
            class d {
                constructor(e, t) {
                    this._url = "", this._socket = null, this._reconnectCount = 0, this._onlineCancellationToken = null, this._connectionStatus = new(s())(o.ConnectionStatus.Closed), this._socketCloseHandler = this._onCloseCallback.bind(this), this._socketErrorHandler = this._onErrorCallback.bind(this), this._socketOpenHandler = this._onOpenCallback.bind(this), this._socketMessageHandler = this._onMessageCallback.bind(this), this._maxReconnectReachedEventDelegate = new(l()), this._shouldReconnect = !0, this._maxReconnectCount = null, this._reconnectTimeoutId = 0, this._connectAbortController = null, this._tryReconnect = () => {
                        if (this._disconnect(), this._shouldReconnect) {
                            const e = this._getReconnectTimeout();
                            this._logger.logNormal(`Sleeping some time before reconnect ${e}ms`), this._reconnectTimeoutId = setTimeout(this._tryReconnectImpl.bind(this), e)
                        } else this._logger.logNormal("Skip reconnecting because of shouldReconnect state")
                    }, this._onOfflineHandler = () => {
                        this._removeOnOfflineListener(), this._logger.logInfo("Network status changed to offline - trying to reconnect"), this._tryReconnect()
                    }, this._logger = t, this._messageHandler = e, window.addEventListener("unload", () => {
                        t.logNormal("Unload event comes - disconnecting without reconnect after that..."), this._shouldReconnect = !1, this._disconnect()
                    }, !1)
                }
                setUrl(e) {
                    if (this._url === e) return;
                    const t = this._connectionStatus.value() !== o.ConnectionStatus.Closed;
                    t && this._disconnect(), this._url = e, t && this.connect()
                }
                url() {
                    return this._url
                }
                connect() {
                    this._connectImpl()
                }
                setMaxReconnectCount(e) {
                    this._maxReconnectCount = e
                }
                connectionStatus() {
                    return this._connectionStatus.readonly()
                }
                disconnect() {
                    this._shouldReconnect = !1, this._disconnect()
                }
                maxReconnectReachedEvent() {
                    return this._maxReconnectReachedEventDelegate
                }
                async _prepareParamsForConnection(e) {}
                _disconnect() {
                    var e;
                    null === (e = this._connectAbortController) || void 0 === e || e.abort(), this._connectAbortController = null, clearTimeout(this._reconnectTimeoutId), this._reconnectTimeoutId = 0, this._connectionStatus.value() !== o.ConnectionStatus.Closed ? this._socket ? (this._logger.logNormal(`Closing connection to: ${this._socket.url}, currentStatus: ${o.ConnectionStatus[this._connectionStatus.value()]}`),
                        this._disconnectTransport()) : this._logger.logNormal("Disconnecting without socket - probably within preparing, it should be already scheduled for aborting") : this._logger.logNormal("Attempt to close connection but it is closed already")
                }
                _onErrorCallback() {
                    this._logger.logInfo("Connection is closed by error"), this._tryReconnect()
                }
                _onCloseCallback(e) {
                    this._logger.logInfo(`Connection is closed - code=${e.code} msg=${e.reason}`), this._tryReconnect()
                }
                _tryReconnectImpl() {
                    return null !== this._maxReconnectCount && this._reconnectCount === this._maxReconnectCount ? (this._logger.logWarn("Maximum attempts to reconnect to websocket reached"), void this._maxReconnectReachedEventDelegate.fire()) : (this._reconnectCount += 1, this._logger.logInfo("Reconnecting count: " + this._reconnectCount), navigator.onLine ? (this._logger.logInfo("Network status: online - trying to connect"), void this.connect()) : (this._logger.logInfo("Network status: offline - wait until online"), void(this._onlineCancellationToken = (0, n.callWhenOnline)(() => {
                        this._logger.logInfo("Network status changed to online - trying to connect"), this.connect()
                    }))))
                }
                _onOpenCallback() {
                    this._logger.logNormal("Connection opened"), this._reconnectCount = 0, this._connectionStatus.setValue(o.ConnectionStatus.Open)
                }
                _onMessageCallback(e) {
                    this._messageHandler(e.data)
                }
                _getReconnectTimeout() {
                    return this._reconnectCount < 5 ? 300 : 5e3
                }
                _setOnOfflineListener() {
                    window.addEventListener("offline", this._onOfflineHandler)
                }
                _removeOnOfflineListener() {
                    window.removeEventListener("offline", this._onOfflineHandler)
                }
                async _connectImpl() {
                    if (this._connectionStatus.value() !== o.ConnectionStatus.Closed) return void this._logger.logNormal("Attempt to open connection but it is not closed");
                    this._socket && (this._logger.logError("Something went wrong - code 0x2"), this.disconnect()), this._onlineCancellationToken && (this._onlineCancellationToken(), this._onlineCancellationToken = null), this._logger.logNormal("Connecting to " + this._url), this._shouldReconnect = !0, this._connectAbortController = new AbortController;
                    const e = this._connectAbortController.signal;
                    try {
                        if (this._connectionStatus.setValue(o.ConnectionStatus.Connecting), await this._prepareParamsForConnection(e), e.aborted) throw (0, c.createAbortError)();
                        this._socket = this._createNativeTransport(this._url), this._setOnOfflineListener()
                    } catch (e) {
                        this._connectionStatus.setValue(o.ConnectionStatus.Closed), (0, c.skipAbortError)(e)
                    } finally {
                        this._connectAbortController = null
                    }
                }
            }
        },
        99020: (e, t, i) => {
            "use strict";
            i.d(t, {
                PersistentWebsocketTransport: () => a
            });
            var o = i(987380),
                n = i(805958),
                r = i(804950);
            const s = (0, o.getLogger)("PersistentWebsocketTransport");
            class a extends r.PersistentTransport {
                constructor(e) {
                    super(e, s)
                }
                sendMessage(e) {
                    this._connectionStatus.value() === n.ConnectionStatus.Open ? this._socket ? this._socket.send(e) : s.logError("Something went wrong - code 0x3") : s.logWarn("Attempt to send message but connection is not opened")
                }
                _createNativeTransport(e) {
                    const t = new WebSocket(e);
                    return t.binaryType = "arraybuffer", t.addEventListener("error", this._socketErrorHandler),
                        t.addEventListener("close", this._socketCloseHandler), t.addEventListener("open", this._socketOpenHandler), t.addEventListener("message", this._socketMessageHandler), t
                }
                _disconnectTransport() {
                    if (null === this._socket) return;
                    this._socket.removeEventListener("error", this._socketErrorHandler), this._socket.removeEventListener("close", this._socketCloseHandler), this._socket.removeEventListener("open", this._socketOpenHandler), this._socket.removeEventListener("message", this._socketMessageHandler), this._removeOnOfflineListener();
                    const e = this._socket;
                    this._socket = null, this._connectionStatus.setValue(n.ConnectionStatus.Closed), e.readyState !== WebSocket.CLOSED && e.close()
                }
            }
        },
        729412: (e, t, i) => {
            "use strict";

            function o(e) {
                return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            i.d(t, {
                regExpEscape: () => o
            })
        },
        582755: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                isRtl: () => n,
                stripLTRMarks: () => s,
                startWithLTR: () => a,
                forceLTRStr: () => l,
                forceLTRStrSsr: () => c,
                forceRTLStr: () => d,
                getLTRScrollLeft: () => u,
                getLTRScrollLeftOffset: () => h,
                detectAutoDirection: () => m
            });
            var o = i(846417);
            const n = () => "rtl" === window.document.dir,
                r = new RegExp("‎|‪|‫|‬", "g");

            function s(e) {
                return "" !== e && n() && null != e ? e.replace(r, "") : e
            }

            function a(e) {
                return "" !== e && n() && null != e ? "‎" + e : e
            }

            function l(e) {
                return "" !== e && n() && null != e ? "‪" + e + "‬" : e
            }

            function c(e) {
                return "‪" + e + "‬"
            }

            function d(e) {
                return "" !== e && n() && null != e ? "‫" + e + "‬" : e
            }

            function u(e) {
                return (0, o.getNormalizedScrollLeft)(e, "rtl")
            }

            function h(e, t) {
                const i = (0, o.detectScrollType)();
                if ("indeterminate" === i) return 0;
                switch (i) {
                    case "negative":
                        t = e.clientWidth - e.scrollWidth + t;
                        break;
                    case "reverse":
                        t = e.scrollWidth - e.clientWidth - t
                }
                return t
            }
            const p = /[^\u0000-\u0040\u005B-\u0060\u007B-\u00BF\u00D7\u00F7\u02B9-\u02FF\u2000-\u200E\u2010-\u2029\u202C\u202F-\u2BFF]/,
                g = /[\u0590-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/;

            function m(e) {
                const t = p.exec(e);
                return t ? g.test(t[0]) ? "rtl" : "ltr" : ""
            }
        },
        971928: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                CubicBezier: () => o.CubicBezier,
                color: () => o.color,
                dur: () => o.dur,
                easingFunc: () => o.easingFunc
            });
            var o = i(669388)
        },
        465754: (e, t, i) => {
            "use strict";
            var o;
            i.d(t, {
                    BillingCycle: () => o
                }),
                function(e) {
                    e.Monthly = "m", e.ThreeMonths = "3m", e.OneYear = "y", e.TwoYears = "2y"
                }(o || (o = {}))
        },
        760555: (e, t, i) => {
            "use strict";
            i.d(t, {
                getCountries: () => r
            });
            var o = i(685864);
            let n = null;
            async function r() {
                var e;
                if (null !== n) return n;
                const t = await (0, o.fetch)("/accounts/countries/", {
                    credentials: "include"
                });
                if (!t.ok) {
                    const e = await t.json();
                    throw Error(String(e))
                }
                const i = await t.json();
                return n = { ...i,
                    current_country_code: null !== (e = i.current_country_code) && void 0 !== e ? e : "US"
                }, n
            }
        },
        15642: (e, t, i) => {
            "use strict";
            i.d(t, {
                OFFERS: () => o,
                OfferKind: () => n
            });
            const o = {
                    trial: "trial",
                    early_access: "early_access",
                    black_friday: "black_friday",
                    cyber_monday: "cyber_monday",
                    custom_discount: "custom_discount",
                    longer_cycle: "longer_cycle",
                    upgrade: "upgrade",
                    last_chance: "last_chance",
                    one_usd: "one_usd",
                    six_months: "six_months"
                },
                n = {
                    early_access: "early_access",
                    black_friday: "black_friday",
                    last_chance: "last_chance",
                    one_usd: "1 usd offer",
                    six_months: "six_months",
                    custom_discount: "custom_discount"
                }
        },
        808276: (e, t, i) => {
            "use strict";
            var o, n, r;
            i.d(t, {
                    ProPlans: () => o,
                    BrokerPlans: () => n,
                    BrokerPlansIds: () => r
                }),
                function(e) {
                    e.Free = "free", e.Pro = "pro", e.ProTrial = "pro_trial", e.ProRealtime = "pro_realtime", e.ProRealtimeTrial = "pro_realtime_trial", e.ProPremium = "pro_premium", e.ProPremiumTrial = "pro_premium_trial", e.ProMiniAlerts = "pro_mini_alerts", e.ProMiniAds = "pro_mini_ads", e.ProMiniLayouts = "pro_mini_layouts", e.ProEdu = "pro_edu"
                }(o || (o = {})),
                function(e) {
                    e.Platinum = "platinum", e.Gold = "gold", e.Silver = "silver", e.Free = "free"
                }(n || (n = {})),
                function(e) {
                    e[e.Platinum = 3] = "Platinum", e[e.Gold = 2] = "Gold", e[e.Silver = 1] = "Silver", e[e.Free = 0] = "Free"
                }(r || (r = {}))
        },
        245378: (e, t, i) => {
            "use strict";
            i.d(t, {
                initTrialToast: () => l,
                trialToast: () => a
            });
            var o = i(15642);
            var n = i(968724),
                r = i(640142);
            class s {
                showAfterTimeout(e, t) {
                    this._timeoutId = setTimeout(async () => {
                        if (window.is_authenticated && !(o.OFFERS.trial in window.user.available_offers)) return void t();
                        const {
                            globalToasts: n
                        } = await Promise.all([i.e(35507), i.e(64466), i.e(11216), i.e(28139), i.e(94291)]).then(i.bind(i, 999037));
                        !async function(e, t, o) {
                            (await Promise.all([i.e(99459), i.e(49531), i.e(22392), i.e(14563), i.e(64278)]).then(i.bind(i, 970347))).showTrialNotification(e, t, o)
                        }(n, e, t)
                    }, 3e4)
                }
                clear() {
                    clearTimeout(this._timeoutId)
                }
                static getInstance() {
                    return s._instance || (s._instance = new s), s._instance
                }
            }

            function a() {
                return s.getInstance()
            }

            function l(e) {
                return (0, r.isOnMobileAppPage)("any") || n.CheckMobile.Android() ? Promise.resolve() : new Promise(t => {
                    a().showAfterTimeout(e, () => (t(), Promise.resolve()))
                })
            }
        },
        423946: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                onGoProDialog: () => r,
                createGoProDialog: () => s
            });
            const o = new Set,
                n = [];

            function r(e, t) {
                n.push(e), t && t.forEach(e => {
                    o.add(e)
                })
            }
            async function s(e) {
                var t;
                if (n.forEach(t => {
                        t(e.feature)
                    }), o.has(e.feature)) return;
                const r = await Promise.all([i.e(23876), i.e(26822), i.e(69756), i.e(88278), i.e(74814), i.e(36778), i.e(18436), i.e(3178), i.e(93576), i.e(11216), i.e(43424), i.e(14563), i.e(38578), i.e(63580), i.e(78451), i.e(5246)]).then(i.bind(i, 155175));
                await (null === (t = window.pro) || void 0 === t ? void 0 : t.ensureValidShopConf()), r.renderGoproDialog(e)
            }
            window.TradingView.createGoProDialog = s
        },
        442926: (e, t, i) => {
            "use strict";
            var o, n;
            i.d(t, {
                    PredefinedAction: () => o,
                    ContentAlign: () => n
                }),
                function(e) {
                    e.Close = "close", e.OpenGopro = "openGopro"
                }(o || (o = {})),
                function(e) {
                    e.Center = "center", e.Left = "left"
                }(n || (n = {}))
        },
        550765: (e, t, i) => {
            "use strict";
            i.d(t, {
                updateInfoAboutMobileBanner: () => c,
                initMobileNotificationBanner: () => u
            });
            var o = i(655119),
                n = i(968724),
                r = i(640142),
                s = i(250614);

            function a(e) {
                return Promise.all([i.e(53172), i.e(49125)]).then(i.bind(i, 208270)).then(t => t.createAndroidNotificationDialog(e))
            }

            function l(e, t) {
                const i = Math.abs((new Date).getTime() - new Date(e).getTime());
                return Math.ceil(i / 864e5) >= t
            }

            function c() {
                const e = o.TVLocalStorage.getItem("mobileNotification");
                if (e) {
                    let t = JSON.parse(e);
                    t = {
                        numberOfClose: t.numberOfClose + 1,
                        dataOfClose: (new Date).getTime()
                    }, o.TVLocalStorage.setItem("mobileNotification", JSON.stringify(t))
                } else {
                    const e = {
                        numberOfClose: 1,
                        dataOfClose: (new Date).getTime()
                    };
                    o.TVLocalStorage.setItem("mobileNotification", JSON.stringify(e))
                }
            }

            function d() {
                const e = o.TVLocalStorage.getItem("mobileNotification");
                if (e) {
                    const t = JSON.parse(e);
                    switch (t.numberOfClose) {
                        case 1:
                            return l(t.dataOfClose, 7);
                        case 2:
                            return l(t.dataOfClose, 30);
                        case 3:
                        default:
                            return l(t.dataOfClose, 182)
                    }
                }
                return !(0, n.onMainPage)()
            }
            async function u() {
                window.addEventListener("beforeinstallprompt", t => {
                    t.preventDefault(), d() && a({
                        storeAction: e ? s.StoreAction.App : s.StoreAction.Shop,
                        deferredInstallPromptRef: t
                    })
                });
                let e = !1;
                if ("getInstalledRelatedApps" in window.navigator) try {
                    const t = await window.navigator.getInstalledRelatedApps();
                    e = t.length > 0
                } catch (e) {}
                d() && (n.CheckMobile.Android() && !(0, r.isOnMobileAppPage)("new") && ("onbeforeinstallprompt" in window || a({
                    storeAction: e ? s.StoreAction.App : s.StoreAction.Shop
                })), n.CheckMobile.iOS() && !(0, r.isOnMobileAppPage)("old") && Promise.all([i.e(95821), i.e(95758)]).then(i.bind(i, 154093)).then(e => e.createIosNotificationDialog()))
            }
        },
        250614: (e, t, i) => {
            "use strict";
            var o;
            i.d(t, {
                    StoreAction: () => o,
                    utm: () => n
                }),
                function(e) {
                    e.App = "app", e.Shop = "shop"
                }(o || (o = {}));
            const n = {
                utmSource: "TV_banner",
                utmMedium: "banner",
                utmCampaign: "banner"
            }
        },
        388674: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                createNoticeDialog: () => r,
                showNoticeDialog: () => s
            });
            var o = i(120220);
            const n = {
                width: 400,
                destroyOnClose: !0,
                title: (0, o.t)("Notification"),
                content: (0, o.t)("You are notified"),
                contentWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--no-border"><div class="tv-text"><p></p></div></div>',
                actionsWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--actions tv-dialog__section--no-border">',
                actions: [{
                    name: "ok",
                    type: "primary",
                    text: (0, o.t)("Ok"),
                    method: "close",
                    key: [13, 32]
                }]
            };
            async function r(e) {
                return (await Promise.all([i.e(70964), i.e(38817), i.e(91877), i.e(59456), i.e(25535), i.e(5058), i.e(11216), i.e(99752), i.e(64011), i.e(7562), i.e(34834)]).then(i.bind(i, 464161))).createDialog({ ...n,
                    ...e
                })
            }

            function s(e) {
                r(e).then(e => e.open())
            }
        },
        128308: (e, t, i) => {
            "use strict";

            function o(e) {
                return Promise.all([i.e(37610), i.e(87127), i.e(99459), i.e(23876), i.e(26822), i.e(29448), i.e(61212), i.e(85597), i.e(60700), i.e(69756), i.e(32795), i.e(88278), i.e(91877), i.e(63193), i.e(74814), i.e(45266), i.e(99305), i.e(90901), i.e(36778), i.e(38968), i.e(70650), i.e(40587), i.e(78708), i.e(13738), i.e(42732), i.e(4351), i.e(85833), i.e(52951), i.e(97259), i.e(58748), i.e(22124), i.e(93921), i.e(28647), i.e(55318), i.e(26566), i.e(30336), i.e(63936), i.e(12120), i.e(85161), i.e(98650), i.e(11216), i.e(43424), i.e(45867), i.e(19894), i.e(14563), i.e(80498), i.e(52616), i.e(91050), i.e(9622), i.e(34698), i.e(68981), i.e(93669), i.e(1114), i.e(41153), i.e(97301), i.e(54348), i.e(94970), i.e(73922), i.e(30914), i.e(58341), i.e(95509), i.e(78703)]).then(i.bind(i, 855979)).then(t => t.openPaymentOrderDialog(e))
            }
            i.r(t), i.d(t, {
                showPaymentOrderDialog: () => o
            })
        },
        177541: (e, t, i) => {
            "use strict";
            var o;
            i.d(t, {
                    StatusExtraData: () => o
                }),
                function(e) {
                    e.Enable = "enable", e.Disable = "disable"
                }(o || (o = {}))
        },
        280271: (e, t, i) => {
            "use strict";
            i.d(t, {
                check: () => n
            });
            var o = i(760555);
            async function n() {
                const {
                    is_restricted: e
                } = await (0, o.getCountries)();
                return e
            }
        },
        90645: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                showRestrictedCountryNotificationDialog: () => r
            });
            var o = i(120220),
                n = i(279407);

            function r() {
                (0, n.showWarning)({
                    title: (0, o.t)("We can't accept your payment right now"),
                    text: (0, o.t)("TradingView needs to comply with U.S. trade embargoes and economic sanctions, so we're unable to accept any payments from the region you're in at the moment.")
                })
            }
        },
        282143: (e, t, i) => {
            "use strict";

            function o() {
                return Promise.all([i.e(70964), i.e(38817), i.e(53617), i.e(40114), i.e(91877), i.e(59456), i.e(25535), i.e(5058), i.e(78708), i.e(89109), i.e(59678), i.e(54551), i.e(13738), i.e(53466), i.e(37653), i.e(38325), i.e(96753), i.e(6585), i.e(500), i.e(15294), i.e(42961), i.e(91787), i.e(80842), i.e(11216), i.e(99752), i.e(64011), i.e(7562), i.e(11228), i.e(41242), i.e(26945), i.e(92765), i.e(52946), i.e(4516), i.e(52107), i.e(267), i.e(50323), i.e(42098), i.e(3823), i.e(85857), i.e(20401), i.e(24025)]).then(i.t.bind(i, 793533, 19))
            }

            function n(e, t, i) {
                o().then(o => o.noteForAuthor(e, t, i))
            }

            function r(e, t, i) {
                o().then(o => o.openPMDialog(e, t, i))
            }

            function s() {
                o().then(e => e.newPrivateChatDialog())
            }
            i.d(t, {
                noteForAuthor: () => n,
                openPMDialog: () => r,
                newPrivateChatDialog: () => s
            })
        },
        406450: (e, t, i) => {
            "use strict";
            i.d(t, {
                showTooManyStudiesNotice: () => a
            });
            var o = i(120220),
                n = i(903851),
                r = i(305803),
                s = i(279407);

            function a(e) {
                "number" != typeof e && (e = TradingView.STUDY_COUNT_LIMIT, e = (0, n.getConfig)(r.ProductFeatures.STUDY_ON_STUDY).limit), (0, s.showWarning)({
                    title: (0, o.t)("Warning"),
                    text: (0, o.t)("Studies limit exceeded: {number} studies per layout.\nPlease, remove some studies.").format({
                        number: e
                    })
                })
            }
        },
        614239: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                firstLoginDataUrl: () => n,
                accumulateErrors: () => r,
                fetchPost: () => s,
                firstLoginData: () => a,
                resendLink: () => l,
                signinUrl: () => c,
                signin: () => u,
                signupUrl: () => h,
                signup: () => p,
                ApiError: () => g,
                AggregateError: () => m,
                recoverPasswordUrl: () => _,
                recoverPassword: () => f,
                resetPassword: () => v
            });
            var o = i(685864);
            const n = "/accounts/first_login_data/";

            function r(e, t) {
                return Object.entries(e).map(e => new g(e[1].join("\n"), t, e[0]))
            }

            function s(e, t) {
                return (0, o.fetch)(e, {
                    method: "POST",
                    credentials: "include",
                    mode: "same-origin",
                    body: t
                })
            }

            function a(e) {
                return s(n, e).then(e => e.ok ? e.json() : e.json().then(t => {
                    throw new m(r(t.errors, e.status))
                }))
            }

            function l() {
                return s("/api/v1/users/anon/change-email/resend/").then(e => e.ok ? e.json() : e.json().then(e => {
                    throw Error(e.error)
                }))
            }
            const c = "/accounts/signin/";

            function d(e) {
                return e.json().then(t => {
                    if ("error" in t && "" !== t.error || "code" in t || !e.ok) throw new g(t.error || t.detail, e.status, t.code, t.two_factor_types);
                    return t
                })
            }

            function u(e) {
                return s(c, e).then(d)
            }
            const h = "/accounts/signup/";

            function p(e) {
                return s(h, e).then(e => e.json().then(t => {
                    if ("errors" in t && "" !== t.errors) throw new m(r(t.errors, e.status))
                }))
            }
            class g extends Error {
                constructor(e, t, i, o) {
                    super(e), this.type = i, this.status = t, this.secondFactorTypes = o
                }
            }
            class m extends Error {
                constructor(e) {
                    super(e.map(e => e.message).join("\n")), this.errors = [], this.errors = e
                }
            }
            const _ = "/api/v1/recover_password/search/";

            function f(e) {
                return s(_, e).then(d)
            }

            function v(e) {
                return s("/accounts/reset_password/", e).then(e => 400 === e.status ? e.json().then(t => {
                    if ("errors" in t) throw new m(r(t.errors, e.status));
                    throw new g(t.detail, e.status, t.code)
                }) : d(e))
            }
        },
        371141: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                showSignModal: () => n,
                isSignModalOpen: () => r
            });
            let o = () => !1;
            async function n(e) {
                if (window.TVD && window.TVD.signIn) return window.TVD.signIn(e); {
                    const t = await Promise.all([i.e(70964), i.e(95121), i.e(91877), i.e(59456), i.e(25535), i.e(5058), i.e(54551), i.e(16861), i.e(53661), i.e(9029), i.e(14742), i.e(23798), i.e(11216), i.e(99752), i.e(14563), i.e(23600), i.e(76809), i.e(36123)]).then(i.bind(i, 153022));
                    return o = t.isSignModalOpen, t.showSignModal(e)
                }
            }

            function r() {
                return o()
            }
        },
        797087: (e, t, i) => {
            "use strict";
            i.d(t, {
                showSupportDialog: () => o
            });
            i(265194);

            function o(e) {
                return Promise.all([i.e(70964), i.e(87127), i.e(99459), i.e(53617), i.e(61212), i.e(85597), i.e(60700), i.e(32795), i.e(91877), i.e(63193), i.e(74814), i.e(45266), i.e(99305), i.e(59456), i.e(25535), i.e(5058), i.e(70650), i.e(81542), i.e(37653), i.e(58882), i.e(62001), i.e(55318), i.e(67890), i.e(14495), i.e(62879), i.e(59825), i.e(11216), i.e(99752), i.e(19894), i.e(14563), i.e(80498), i.e(26945), i.e(92765), i.e(50649), i.e(41153), i.e(4516), i.e(94970), i.e(85285), i.e(42098), i.e(69140), i.e(72324), i.e(85817), i.e(39554), i.e(30359), i.e(20401), i.e(57274)]).then(i.bind(i, 69401)).then(t => new t.SupportDialog(e).open())
            }
        },
        731672: (e, t, i) => {
            "use strict";
            async function o(e) {
                return (await Promise.all([i.e(70964), i.e(99459), i.e(61212), i.e(85597), i.e(60700), i.e(69756), i.e(91877), i.e(63193), i.e(74814), i.e(99305), i.e(59456), i.e(25535), i.e(90901), i.e(5058), i.e(70650), i.e(42732), i.e(85833), i.e(49406), i.e(11216), i.e(99752), i.e(19894), i.e(14563), i.e(80498), i.e(9622), i.e(34698), i.e(68981), i.e(93669), i.e(42098), i.e(74688), i.e(68606)]).then(i.bind(i, 84087))).createPhoneDialog(e)
            }
            async function n(e) {
                return (await Promise.all([i.e(70964), i.e(99459), i.e(61212), i.e(85597), i.e(60700), i.e(69756), i.e(91877), i.e(63193), i.e(74814), i.e(99305), i.e(59456), i.e(25535), i.e(90901), i.e(5058), i.e(70650), i.e(42732), i.e(85833), i.e(49406), i.e(11216), i.e(99752), i.e(19894), i.e(14563), i.e(80498), i.e(9622), i.e(34698), i.e(68981), i.e(93669), i.e(42098), i.e(74688), i.e(68606)]).then(i.bind(i, 84087))).createEmailDialog(e)
            }
            i.d(t, {
                createPhoneDialog: () => o,
                createSMSEmailDialog: () => n
            })
        },
        385622: (e, t, i) => {
            "use strict";
            i.d(t, {
                paidAccountCheck: () => r
            });
            var o = i(655119);
            const n = (0, i(987380).getLogger)("PaidAccountCheck");
            async function r(e) {
                const t = window.user,
                    r = o.TVLocalStorage.getItem("previous_username");
                if (t && window.is_authenticated && !t.is_pro && r) {
                    const [{
                        getProfile: t
                    }, {
                        showWrongAccountDialog: o
                    }] = await Promise.all([i.e(90254).then(i.bind(i, 927358)), Promise.all([i.e(90530), i.e(11216), i.e(14563), i.e(12019)]).then(i.bind(i, 586273))]);
                    try {
                        const i = await t(r);
                        if (Boolean(i.pro_plan)) return o({
                            userName: r,
                            isNeedCancelButton: e.isNeedCancelButton,
                            successButtonText: e.successButtonText
                        })
                    } catch (e) {
                        n.logError(e.message)
                    }
                }
                return Promise.resolve(!0)
            }
        },
        151612: (e, t, i) => {
            "use strict";
            var o = i(918184);
            const n = i(987380).getLogger("Chart.FollowSymbolsButton"),
                r = i(965009).trackActionFollow,
                s = i(478264).followSymbol;
            ! function() {
                var e = {};

                function t(t) {
                    if (!t.symbol) return o.Deferred().reject().promise();
                    if (null == t.follow && Object.prototype.hasOwnProperty.call(e, t.symbol)) return e[t.symbol].promise;
                    var i = o.Deferred(),
                        n = i.promise();
                    return e[t.symbol] || (e[t.symbol] = {}), e[t.symbol].promise = n, s(t).then(o => {
                        o.error ? i.reject(o) : (i.resolve(o), o.symbol !== t.symbol && (e[o.symbol] = e[t.symbol]))
                    }).catch(() => {
                        i.reject.apply(i, arguments)
                    }), n
                }

                function i(e, i) {
                    return t({
                        symbol: e,
                        follow: +!!i
                    }).done((function(t) {
                        var i = t.followTheSymbol;
                        a(e, i)
                    })).promise()
                }

                function a(e, t) {
                    o(".js-follow-symbol").each((function() {
                        var i = o(this);
                        i.data("symbol") === e && c(i, t)
                    }))
                }

                function l() {
                    for (var t in e) delete e[t];
                    c(o(".js-follow-symbol"), !1)
                }

                function c(e, t) {
                    t = !!t, e.each((function() {
                        var e = o(this);
                        e.toggleClass("js-follow-symbol--followed", t).toggleClass(e.data("follow-symbol-button-followed-style-class") ? e.data("follow-symbol-button-followed-style-class") : "i-checked", t)
                    }))
                }
                o(document).on("click", ".js-follow-symbol", (function(e) {
                    var t = o(this),
                        n = t.data("symbol"),
                        s = t.data("type");
                    n && runOrSignIn((function() {
                        var e = function(e) {
                                return e.hasClass("js-follow-symbol--followed")
                            }(t),
                            o = i(n, !e),
                            a = e ? "Unfollow" : "Follow",
                            l = {
                                symbol: n,
                                symbolType: s
                            };
                        c(t, !e), r("Symbol", a, l), o.fail((function() {
                            c(t, e)
                        }))
                    }), {
                        source: "Follow symbol button"
                    })
                })), TradingView.FollowSymbols = {
                    changeState: i,
                    makeButton: function(e) {
                        var i = (e = e || {}).$button,
                            r = e.symbol;
                        return i ? (i.addClass("js-follow-symbol tv-button tv-button--success"), r || (r = i.data("symbol"))) : i = o('<span class="js-follow-symbol tv-button tv-button--success">'), i.data({
                            "follow-symbol-button-followed-style-class": "i-checked",
                            "follow-symbol-button-change-text": void 0 === e.changeText || !!e.changeText
                        }), r ? (t({
                            symbol: r
                        }).pipe((function(e) {
                            i.attr("data-symbol", e.symbol), c(i, e.followTheSymbol)
                        })), i) : (n.logError("symbol is required"), i)
                    },
                    request: t
                }, o((function() {
                    loginStateChange.subscribe(TradingView.FollowSymbols, (function(i) {
                        i || (window.is_authenticated ? (l(), o(".js-follow-symbol").each((function() {
                            var i = o(this).data("symbol");
                            i && (Object.prototype.hasOwnProperty.call(e, i) || t({
                                symbol: i
                            }).done((function(e) {
                                a(e.symbol, e.followTheSymbol)
                            })))
                        }))) : l())
                    }))
                }))
            }()
        },
        382151: (e, t, i) => {
            "use strict";
            i.r(t);
            i(527551), i(886816), i(450767), i(702406), i(128519), i(633948), i(957233), i(140154), i(219269), i(379481), i(339410), i(567577), i(600084), i(193971), i(44404);
            Promise.all([i.e(25535), i.e(78708), i.e(55704), i.e(43911), i.e(86271), i.e(44978), i.e(68669), i.e(20386), i.e(53683), i.e(90518), i.e(87328)]).then(i.t.bind(i, 748459, 23))
        },
        875853: (e, t, i) => {
            "use strict";
            i(382151), i(141341)
        },
        323619: (e, t, i) => {
            "use strict";
            i.d(t, {
                getDialogDfd: () => d,
                verificationIsRequired: () => u,
                whenVerified: () => h,
                requestPhoneNumber: () => p
            });
            var o = i(929098),
                n = i(731672),
                r = i(655119),
                s = i(307833),
                a = i(918184);
            let l = a.Deferred();

            function c(e, t) {
                var i = TVSettings.getBool("_phone_verif_dlg_initial", !0);
                TVSettings.setValue("_phone_verif_dlg_initial", !1), (0, o.trackEvent)("Phone verification", e + (i ? " initial" : ""), t)
            }

            function d(e) {
                const t = a.Deferred();
                return (0, n.createPhoneDialog)({
                    featureSource: e.source,
                    doNotShowConfirmation: e.doNotShowConfirmation
                }).then(i => {
                    i.on("afterOpen", () => c("Show dialog", e.source)).on("verification:success", i => {
                        t.resolve(i), c("Verified", e.source)
                    }).on("verification:cancel", () => {
                        t.reject("cancelled"), c("Cancelled", e.source)
                    }).on("verification:codeExpired", () => c("Show dialog", e.source)).open()
                }), t
            }

            function u(e = {}) {
                return new Promise(t => {
                    !window.is_authenticated || user.is_staff || user.is_superuser || user.is_pro || user.is_moderator ? t([!1]) : e.customPhoneCheck ? e.customPhoneCheck() ? t([!0, "date-joined"]) : t([!1]) : s.enabled("phone_verification") && !user.has_phone ? !0 !== e.doNotCheckSocialActivity ? t([!0, "date-joined"]) : (!0 !== e.doNotCheckSuspicious && t([Boolean(r.TVLocalStorage.getItem("is_suspicious")), "suspicious"]), t([!0, "default"])) : t([!1])
                })
            }

            function h(e = {}) {
                const t = a.Deferred();
                return u({
                    doNotCheckSuspicious: e.doNotCheckSuspicious,
                    doNotCheckSocialActivity: e.doNotCheckSocialActivity,
                    customPhoneCheck: e.customPhoneCheck
                }).then(([i, o]) => {
                    if (!i) return l.resolve(), t.resolve();
                    if (i && e.silentPhoneVerification) return t.reject("phone_verification_required");
                    if (!e.showDialog) return l.done(() => t.resolve());
                    const n = {
                        source: e.source,
                        doNotShowConfirmation: e.doNotShowConfirmation
                    };
                    "suspicious" !== o && (n.topMessage = window.t("Verify your phone number and get access to more tools on TradingView.")), d(n).done(() => t.resolve()).always(() => t.reject("phone_verification_declined"))
                }).catch(e => e), t.promise()
            }

            function p(e = {}) {
                return new Promise((t, i) => {
                    d(e).done(t).always(i)
                })
            }
            window.loginStateChange && loginStateChange.subscribe(null, () => {
                window.is_authenticated && (l = a.Deferred(), u().then(([e, t]) => {
                    e || l.resolve()
                }))
            })
        },
        102188: (e, t, i) => {
            "use strict";
            var o = i(685864).fetch,
                n = i(184257).visitPaymentPage,
                r = i(465754).BillingCycle,
                s = i(896276),
                a = i(604346).getFreshInitData;
            i(60272);
            var l = a();

            function c(e) {
                if (this._freeProductIds = ["tv-scripting", "tv-basicstudies", "tv-prostudies", "Script$USER", "Script$EDGR", "ESD$TV"], this.packagesUpdated = new s, !e) return this._products = this._discounts = {}, void(this._offers = this._order = []);
                this._products = {}, this._discounts = {}, this._offers = e.offers, this._order = [], this._invalidShopConf = !0, "undefined" != typeof window && window.loginStateChange.subscribe(this, this.onLoginStateChange)
            }
            c.prototype.PRODUCT_TYPES = {
                pro_plan: 1,
                study_package: 2,
                news_feed: 3,
                exchange: 4,
                connection: 6,
                coins: 8
            }, c.prototype.updateShopConf = function(e) {
                return this._shopConfPromise || (this._shopConfPromise = o("/market/shopconf/", {
                    credentials: "include"
                }).then((function(e) {
                    return e.json()
                })).then(function(t) {
                    this._products = t.all_products && JSON.parse(t.all_products) || {}, this._discounts = t.discounts && JSON.parse(t.discounts) || {}, this._offers = t.offers && JSON.parse(t.offers) || [], this._order = t.order && JSON.parse(t.order) || [], this._invalidShopConf = !1, delete this._shopConfPromise, e || this.packagesUpdated.fire()
                }.bind(this)).catch(function() {
                    delete this._shopConfPromise
                }.bind(this))), this._shopConfPromise
            }, c.prototype.invalidateShopConf = function() {
                this._invalidShopConf = !0
            }, c.prototype.isInvalidShopConf = function() {
                return !!this._invalidShopConf
            }, c.prototype.ensureValidShopConf = function() {
                return new Promise(function(e) {
                    return this.runOrUpdate(e)
                }.bind(this))
            }, c.prototype.onLoginStateChange = function(e) {
                e || this.updateShopConf()
            }, c.prototype.runOrUpdate = function(e, t) {
                this.isInvalidShopConf() ? this.updateShopConf(t).then(e) : e()
            }, c.prototype.getIDCExchanges = function(e) {
                var t = this._products;
                if (l)
                    if (e) {
                        if (l.idc_delay_exchanges_list) return l.idc_delay_exchanges_list
                    } else if (l.idc_exchanges_list) return l.idc_exchanges_list;
                return Object.keys(t).filter((function(i) {
                    return e ? t[i].idc_service_codes_delay : t[i].idc_service_codes
                })).map((function(e) {
                    return t[e].exchange
                }))
            }, c.prototype.getProduct = function(e) {
                if (e in this._products) return this._products[e];
                if (this.isDiscountProductId(e)) {
                    var t = this._discounts[e],
                        i = Object.assign({
                            discount_text_id: e
                        }, this._products[t.product]);
                    return t.cost && (i.cost = t.cost), t.cost_annual && (i.cost_annual = t.cost_annual), t.cost_biennial && (i.cost_biennial = t.cost_biennial), void 0 !== t.fixed_cost && (i.fixed_cost = t.fixed_cost), void 0 !== t.extra_days && (i.extra_days = t.extra_days), void 0 !== t.billing_cycle && (i.billing_cycle = t.billing_cycle), i
                }
                return {}
            }, c.prototype.findProduct = function(e) {
                return new Promise(function(t) {
                    var i = function() {
                        t(this.getProduct(e))
                    }.bind(this);
                    if (!this.isInvalidShopConf()) return i();
                    this.updateShopConf().then(i).catch(i)
                }.bind(this))
            }, c.prototype.isProductDefined = function(e) {
                return !(!e || !Object.keys(e).length)
            }, c.prototype.getDiscountProduct = function(e) {
                return this._discounts[e] || {}
            }, c.prototype.isOffer = function(e, t) {
                var i = this._discounts;
                return Object.keys(i).filter((function(e) {
                    return !i[e].expired && i[e].offer_type === t
                })).includes(e)
            }, c.prototype.getProductId = function(e) {
                return e && (e.discount_text_id || e.text_id) || ""
            }, c.prototype.isDiscountProductId = function(e) {
                return e in this._discounts
            }, c.prototype.isPlan = function(e) {
                return e.type === this.PRODUCT_TYPES.pro_plan
            }, c.prototype.isExchange = function(e) {
                return e.type === this.PRODUCT_TYPES.exchange
            }, c.prototype.getActiveExchanges = function() {
                return this.getProductsByType(this.PRODUCT_TYPES.exchange).filter((function(e) {
                    return !e.disabled && Boolean(e.cost)
                }))
            }, c.prototype.getExchange = function(e) {
                for (var t, i = this.getProductsByType(this.PRODUCT_TYPES.exchange), o = 0; o < i.length; o += 1)
                    if ((t = i[o]).exchange === e || t.included_exchanges && t.included_exchanges.includes(e)) return t;
                return {}
            }, c.prototype.getCost = function(e, t) {
                var i = 1;
                if (r.TwoYears === t) {
                    if (e.fixed_cost || (i = 24), e.cost_biennial) return e.cost_biennial * i;
                    if (e.cost_annual) return e.cost_annual * i
                } else if (r.OneYear === t) {
                    if (e.fixed_cost || (i = 12), e.cost_annual) return e.cost_annual * i
                } else r.ThreeMonths === t && (e.fixed_cost || (i = 3));
                return e.cost, e.cost * i
            }, c.prototype.getProductsByType = function(e) {
                return Object.keys(this._products).filter((function(t) {
                    return this._products[t].type === e
                }), this).map((function(e) {
                    return this.getProduct(e)
                }), this).sort((function(e, t) {
                    return t.order > e.order ? -1 : t.order < e.order ? 1 : 0
                }))
            }, c.prototype.getProPlans = function(e) {
                return this.getProductsByType(this.PRODUCT_TYPES.pro_plan).filter((function(t) {
                    return !e || !t.is_limited
                })).map((function(e) {
                    return e.text_id
                }))
            }, c.prototype.getSuperProduct = function(e) {
                for (var t in this._products) {
                    var i = this._products[t];
                    if (i.subproduct_ids && i.subproduct_ids.indexOf(e) >= 0) return i.id
                }
            }, c.prototype.getStudiesOrder = function() {
                return this._order.filter((function(e) {
                    return this._products[e] && this._products[e].type === this.PRODUCT_TYPES.study_package
                }), this)
            }, c.prototype.hasPackage = function(e) {
                return this._offers.includes(e) || this._freeProductIds.includes(e)
            }, c.prototype._getUser = function() {
                return window.user
            }, c.prototype.updateUser = function() {}, c.prototype.isPro = function() {
                return !!this._getUser().pro_plan
            }, c.prototype.isTrial = function() {
                return !!this._getUser().is_trial
            }, c.prototype.isPaidPro = function() {
                return this.isPro() && !this.isTrial()
            }, c.prototype.userHasRealtimeForExchange = function(e) {
                e = (e || "").toLowerCase().replace("exchange-", "");
                var t = this.getExchange(e);
                if (!this.isProductDefined(t)) return !1;
                if (this._offers.includes("exchange-" + t.exchange)) return !0;
                if (t.included_exchanges)
                    for (var i = 0; i < t.included_exchanges.length; i += 1)
                        if (this._offers.includes("exchange-" + t.included_exchanges[i])) return !0;
                return !1
            }, c.prototype._exHasRealtimeForType = function(e, t) {
                return !("stock" === t && !e.is_stocks) && (!("index" === t && !e.is_indices) && !("futures" === t && !e.is_futures))
            }, c.prototype.hasRealtimeForExchange = function(e, t) {
                var i, o, n = pro.getProductsByType(pro.PRODUCT_TYPES.exchange);
                e = (e || "").toLowerCase();
                for (var r = 0; r < n.length; r += 1)
                    if ((i = n[r]).exchange === e || (i.included_exchanges || []).includes(e)) {
                        if (i.disabled && !i.included_exchanges) return !1;
                        if (!t) return !0;
                        if (i.included_exchanges) {
                            for (var s, a = 0; a < i.included_exchanges.length; a += 1)
                                if (o = this.getProduct("exchange-" + i.included_exchanges[a]), this.isProductDefined(o) && this._exHasRealtimeForType(o, t)) {
                                    s = !0;
                                    break
                                }
                            if (!s) return !1
                        } else if (!this._exHasRealtimeForType(i, t)) return !1;
                        return !0
                    }
                return !1
            }, c.prototype.visitExchangesPage = function(e) {
                var t = r.Monthly,
                    i = !0,
                    o = this._getUser();
                o.is_trial || (t = o.pro_plan_billing_cycle || r.OneYear, i = !1), n(t, {
                    exchangesOnly: !0,
                    newWindow: (e = e || {}).newWindow,
                    paymentMethod: e.paymentMethod,
                    fixedCycle: i
                })
            }, c.prototype.offerLogoSrc = function(e) {
                return e.has_logo ? "/static/images/indicators/logos/" + e.text_id + ".png" : null
            }, c.prototype.offers = function() {
                return this._offers
            }, c.prototype.isSupportAvailable = function() {
                return Boolean(l.is_support_available)
            }, c.prototype.discounts = function() {
                return this._discounts
            }, c.prototype.hash = function() {
                var e = this._offers.slice(0);
                e.sort();
                var t = {
                    offers: e
                };
                return JSON.stringify(t)
            }, "undefined" != typeof window && window.TradingView && (window.TradingView.Pro = c), e.exports = c
        },
        588015: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                TRIAL_SUFFIX: () => s,
                EA_SUFFIX: () => a,
                CUSTOM_SUFFIX: () => l,
                billingCycleToTimeUnit: () => c,
                getReadableCycle: () => d,
                billingPeriodText: () => u,
                isEarlyAccess: () => h,
                isTrialProduct: () => p,
                getProductForTrial: () => g,
                getDiscountFromEarlyAccess: () => m,
                toEarlyAccess: () => _,
                humanizeProPlan: () => f,
                humanizeCardPlan: () => v,
                getAmountOfDaysForBillingCycle: () => w,
                countDiscountByBillingCycle: () => y,
                billingCycleToMonth: () => b,
                round2: () => S,
                round0: () => T,
                floor0: () => E,
                round2or0: () => C,
                round1or0: () => A,
                roundMinimal: () => I,
                getPlanName: () => k
            });
            i(568421);
            var o = i(120220),
                n = i(808276),
                r = i(465754);
            const s = "_trial",
                a = "_discount",
                l = "_custom";

            function c(e) {
                return {
                    y: o.t("year", {
                        plural: "years",
                        count: 1
                    }),
                    m: o.t("month", {
                        plural: "months",
                        count: 1
                    }),
                    "3m": o.t("three months"),
                    "2y": o.t("two years")
                }[e]
            }

            function d(e) {
                return {
                    m: o.t("monthly"),
                    y: o.t("annually"),
                    "3m": o.t("3 months"),
                    "2y": o.t("2-year")
                }[e] || ""
            }

            function u(e) {
                var t;
                return null !== (t = {
                    y: o.t("Billed every year."),
                    m: o.t("Billed every month."),
                    "2y": o.t("Billed every two years.")
                }[e]) && void 0 !== t ? t : ""
            }

            function h(e) {
                return /\d{0,2}_discount$/.test(e)
            }

            function p(e) {
                return new RegExp(s + "$").test(e)
            }

            function g(e) {
                return e.split(s)[0]
            }

            function m(e) {
                const t = e.match(new RegExp("^(d{0,2})" + a + "$"));
                return t ? +t[1] || 50 : 0
            }

            function _(e, t) {
                return `${e}_${t}${a}`
            }

            function f(e, t) {
                let i = e;
                switch (e) {
                    case n.ProPlans.Pro:
                        i = "Pro";
                        break;
                    case n.ProPlans.ProRealtime:
                        i = "Pro+";
                        break;
                    case n.ProPlans.ProPremium:
                        i = "Premium";
                        break;
                    case n.ProPlans.ProMiniAds:
                    case n.ProPlans.ProMiniLayouts:
                    case n.ProPlans.ProMiniAlerts:
                        i = o.t("1-feature");
                        break;
                    case n.ProPlans.ProEdu:
                        i = o.t("Rookie")
                }
                return t && (i += " " + o.t("trial")), i
            }

            function v(e) {
                let t = e;
                switch (e) {
                    case n.ProPlans.Pro:
                        t = "Pro";
                        break;
                    case n.ProPlans.ProRealtime:
                        t = "Pro+";
                        break;
                    case n.ProPlans.ProPremium:
                        t = "Premium";
                        break;
                    case n.ProPlans.Free:
                        t = "Basic"
                }
                return t
            }

            function w(e) {
                switch (e) {
                    case r.BillingCycle.TwoYears:
                        return 730;
                    case r.BillingCycle.OneYear:
                        return 365;
                    case r.BillingCycle.ThreeMonths:
                        return 90;
                    case r.BillingCycle.Monthly:
                        return 30;
                    default:
                        return 1
                }
            }

            function y(e, t, i) {
                return Math.round((t - e) * b(i))
            }

            function b(e) {
                switch (e) {
                    case r.BillingCycle.TwoYears:
                        return 24;
                    case r.BillingCycle.OneYear:
                        return 12;
                    default:
                        return 1
                }
            }

            function S(e) {
                return (Math.round(100 * e) / 100).toFixed(2)
            }

            function T(e) {
                const t = Math.round(100 * e) / 100;
                return Math.round(t).toFixed(0)
            }

            function E(e) {
                return Math.floor(e).toString()
            }

            function C(e) {
                const t = Math.round(100 * e) / 100,
                    i = Math.round(t);
                return Math.abs(t - i) > 0 ? t.toFixed(2) : i.toFixed(0)
            }

            function A(e) {
                return Number.isInteger(e) ? e.toFixed(0) : (Math.round(10 * e) / 10).toFixed(1)
            }

            function I(e) {
                const t = Math.round(100 * e) / 100,
                    i = Math.round(10 * e) / 10,
                    o = Math.round(t);
                return Math.abs(t - o) > 0 ? Math.abs(t - i) > 0 ? t.toFixed(2) : i.toFixed(1) : o.toFixed(0)
            }

            function k(e) {
                const t = o.t("{proPlanName} Trial");
                if (p(e)) {
                    const i = f(g(e));
                    return t.format({
                        proPlanName: i
                    })
                }
                return f(e)
            }
        },
        927358: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                Code: () => o,
                checkUserAnonymizationAbility: () => c,
                anonimyzeAccount: () => d,
                cancelAccountDeletion: () => u,
                contacts: () => h,
                SendCodeStatus: () => p,
                isCodeSendedResponse: () => g,
                contactsSendCode: () => m,
                contactsConfirmAccess: () => _,
                changeEmail: () => f,
                togglePrivacyChattingMode: () => v,
                getProfile: () => w,
                getMe: () => y
            });
            var o, n = i(120220),
                r = i(685864),
                s = i(614239),
                a = i(416282);
            ! function(e) {
                e.PaidServicesExist = "paid_services_exist", e.UnusablePassword = "unusable_password", e.InvalidPassword = "invalid_password", e.TooManyAttempts = "too_many_attempts"
            }(o || (o = {}));
            const l = n.t("Unknown error happened");

            function c() {
                return (0, r.fetch)("/api/v1/users/anonymize/", {
                    credentials: "include",
                    method: "GET",
                    headers: {
                        accept: "application/json"
                    }
                }).then(e => {
                    if (!e.ok) throw new Error(l);
                    return e.json()
                })
            }

            function d(e) {
                return (0, r.fetch)("/api/v1/users/anonymize/", {
                    credentials: "include",
                    method: "POST",
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        current_password: e
                    })
                }).then(e => {
                    if (!e.ok) throw new Error(l);
                    return e.json()
                })
            }

            function u() {
                return (0, r.fetch)("/api/v1/users/anonymize/", {
                    credentials: "include",
                    method: "DELETE",
                    headers: {
                        accept: "application/json"
                    }
                }).then(e => {
                    if (!e.ok) throw new Error(l);
                    return e.json()
                })
            }

            function h() {
                return (0, r.fetch)("/api/v1/user/profile/contacts/", {
                    credentials: "include",
                    method: "GET"
                }).then(e => e.json())
            }
            var p;

            function g(e) {
                return e.status === p.Sended
            }! function(e) {
                e[e.AlreadyConfirmed = 0] = "AlreadyConfirmed", e[e.Sended = 1] = "Sended"
            }(p || (p = {}));

            function m(e) {
                const t = new FormData;
                return t.append("option", e.option), (0, r.fetch)("/api/v1/user/profile/contacts/send_code/", {
                    credentials: "include",
                    method: "POST",
                    body: t
                }).then(e => e.ok ? e.json().then(e => ({
                    status: p.Sended,
                    response: {
                        sid: e.sid,
                        exp: Date.now() + 1e3 * e.exp
                    }
                })) : e.json().then(e => {
                    if ("confirmed" === e.code) return {
                        status: p.AlreadyConfirmed
                    };
                    if (e.errors) throw Error(Object.values(e.errors).join());
                    throw Error(e.error)
                }))
            }

            function _(e) {
                const t = new FormData;
                return t.append("option", e.option), t.append("code", e.code), t.append("sid", e.sid), (0, r.fetch)("/api/v1/user/profile/contacts/confirm_access/", {
                    credentials: "include",
                    method: "POST",
                    body: t
                }).then(e => e.ok ? e.json().then(e => ({
                    exp: Date.now() + 1e3 * e.exp
                })) : e.json().then(e => {
                    if (e.errors) throw Error(Object.values(e.errors).join());
                    throw Error(e.error)
                }))
            }

            function f(e) {
                return (0, r.fetch)("/api/v1/users/change-email/", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        accept: "application/json"
                    },
                    body: e
                }).then(e => e.ok ? e.json() : e.json().then(t => {
                    if (400 === e.status) throw new s.AggregateError((0, s.accumulateErrors)(t.errors, e.status));
                    if (403 === e.status) throw new s.ApiError(t.error, e.status, t.code);
                    if (429 === e.status) throw new s.ApiError(t.error, e.status, t.code);
                    throw Error("Unhandled exception")
                }))
            }

            function v(e) {
                const t = new FormData;
                return t.append("disallow_adding_to_private_chats", e.toString()), (0, r.fetch)("/api/v1/user/profile/settings/", {
                    method: "POST",
                    body: t
                }).then(e => {
                    if (!e.ok) throw new Error(l);
                    return e.json()
                }).then(e => (0, a.ensureDefined)(e.disallow_adding_to_private_chats))
            }
            async function w(e) {
                const t = await (0, r.fetch)(`/api/v1/user/profile/${e}/?by=username`);
                return t.ok ? t.json() : t.json().then(e => {
                    throw new Error(e.detail)
                })
            }
            async function y() {
                const e = await (0, r.fetch)("/api/v1/user/profile/me/");
                if (!e.ok) {
                    const t = await e.json();
                    throw 403 === e.status ? new s.ApiError(t.detail, e.status, t.code) : Error(String(t))
                }
                return e.json()
            }
        },
        375095: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                QuoteTicker: () => T
            });
            var o, n = i(821318),
                r = i(987380),
                s = i(331565),
                a = i(414704),
                l = i(971928),
                c = i(993669);
            ! function(e) {
                function t(e, t) {
                    return 0 === e ? t && void 0 !== t.neutral ? t.neutral : l.color.black70 : e > 0 ? t && void 0 !== t.up ? t.up : c.colorsPalette["color-success"] : t && void 0 !== t.down ? t.down : c.colorsPalette["color-danger"]
                }
                e.formatSign = t, e.formatDiff = function(e, i) {
                        return t(i - e)
                    },
                    e.domDifference = function(e, t, i = 0, o = "", n = "") {
                        function r(e) {
                            const t = document.createElement("span");
                            return t.innerHTML = e, t
                        }
                        const s = document.createElement("div");
                        if (!i) return s.appendChild(r(e)), s;
                        const a = e + "",
                            l = t + "";
                        let c = null;
                        if (a.length === l.length) {
                            for (let e = 0; e < a.length; e++)
                                if (a.charAt(e) !== l.charAt(e)) {
                                    c = e;
                                    break
                                }
                        } else c = Number("0");
                        if (null === c) return s.appendChild(r(a)), s;
                        const d = r(a.substring(0, c)),
                            u = document.createElement("span");
                        return u.className = i < 0 ? o : n, u.appendChild(r(a.substring(c))), s.appendChild(d), s.appendChild(u), s
                    }
            }(o || (o = {}));
            var d = i(511228),
                u = i(681293),
                h = i(620446),
                p = i(115701),
                g = i(605956),
                m = i(106798),
                _ = i(250077),
                f = i(13379);
            const v = (0, r.getLogger)("QuoteTicker"),
                w = {
                    addDescriptionTitle: !0,
                    changeDirectionDownClass: "down",
                    changeDirectionUpClass: "up",
                    changeDirectionNeutralClass: "neutral",
                    changeInBrackets: !1,
                    changePercentInBrackets: !1,
                    lastPriceTimeInBrackets: !0,
                    rtcTimeInBrackets: !0,
                    clientName: "quote-ticker",
                    dontDyePrice: !1,
                    fallingBg: null,
                    growingBg: null,
                    lastFallingClass: "falling",
                    lastGrowingClass: "growing",
                    quoteSession: null,
                    signNegative: !0,
                    signPositive: !1,
                    customPriceFormatter: null,
                    customTimeFormatter: null,
                    sessionStatusClassSuffix: "--for-ticker",
                    dataModeClassSuffix: "--for-ticker",
                    showInvalidSymbolStatus: !1,
                    indicatorsTooltipType: "custom",
                    lastPriceLastCharSup: !1,
                    lastPriceHighlightDiffOnly: !1,
                    initedHook: void 0,
                    setStateHook: void 0,
                    sfPermissionDeniedHook: void 0,
                    noSuchSymbolHook: void 0
                },
                y = ["aboard", "about", "above", "abreast", "abroad", "absent", "across", "adjacent", "after", "against", "along", "alongside", "amid", "among", "an", "apropos", "apud", "around", "as", "astride", "at", "atop", "bar", "before", "behind", "below", "beneath", "beside", "besides", "between", "beyond", "but", "by", "chez", "circa", "come", "despite", "down", "during", "except", "for", "from", "in", "inside", "into", "less", "like", "minus", "near", "notwithstanding", "of", "off", "on", "onto", "ontop", "opposite", "out", "outside", "over", "pace", "past", "per", "post", "pre", "pro", "qua", "re", "sans", "save", "short", "since", "than", "through", "throughout", "to", "toward, towards", "under", "underneath", "unlike", "until", "up", "upon", "upside", "versus", "via", "vice", "with", "within", "without", "worth"],
                b = String.fromCharCode(8198),
                S = /[K,M,B]/;

            function T(e, t, i = {}) {
                this.enabled = !0, this._symbol = e, this._symbolOriginal = null, this._options = (0, n.deepExtend)({}, w, i), !1 !== this._options.signNegative && !0 !== this._options.signNegative && delete this._options.signNegative, i.customPriceFormatter && (this._customPriceFormatter = i.customPriceFormatter), i.customTimeFormatter && (void 0 !== i.customTimeFormatter.lastPrice || void 0 !== i.customTimeFormatter.rtc ? this._timeFormatter = i.customTimeFormatter : this._timeFormatter = {
                        lastPrice: i.customPriceFormatter,
                        rtc: i.customPriceFormatter
                    }), this._percentFormatter = new a.PercentageFormatter, this._priceFormatter = this._customPriceFormatter || new d.PriceFormatter(100), this._volumeFormatter = new u.VolumeFormatter, this._cache = {}, this._lastPrice = null, this._lastPriceFormatted = "", this._elements = {}, this._textNodes = {}, this._changeVolumeLetter = this._getChangeVolumeLetterCallback(), this._setElements(t),
                    this._highlighters = {}, this._initHighlighters(), this._options.setStateHook && this.setStateHook(this._options.setStateHook), this.quoteSession = this._options.quoteSession || (0, m.getQuoteSessionInstance)("simple"), this._quoteSessionEventHandler = this.onData.bind(this), this._connectTimeoutId = setTimeout(this.connect.bind(this), 0)
            }

            function E(e) {
                const t = e.search(S),
                    i = t >= 0 ? `${b}${e.slice(t)}` : "";
                return [t > 0 ? e.substring(t, 0) : 0 === t ? "" : e, i]
            }

            function C(e, t, i, o, n) {
                var r, s = null;

                function a() {
                    if (r && (clearTimeout(r), r = void 0), i || t)
                        for (var s = 0; s < e.length; s++) e[s].style.background = "";
                    if (!i || !t)
                        for (s = 0; s < e.length; s++) e[s].classList.remove(n, o)
                }
                return {
                    show: function(l) {
                        var c = 0;
                        if (l !== s) {
                            if (null !== s && null !== l && (c = l - s), a(), r = setTimeout(a, 750), 0 < c)
                                if (t)
                                    for (var d = 0; d < e.length; d++) e[d].style.background = t;
                                else
                                    for (d = 0; d < e.length; d++) e[d].classList.add(o);
                            else if (c < 0)
                                if (i)
                                    for (d = 0; d < e.length; d++) e[d].style.background = i;
                                else
                                    for (d = 0; d < e.length; d++) e[d].classList.add(n);
                            null !== l && (s = l)
                        }
                    },
                    hide: a
                }
            }
            T.prototype._setElements = function(e) {
                this._container = e, this._elements.change = this._findElements(e, ["js-symbol-change", "symbol-change"]), this._elements.changeDirection = this._findElements(e, ["js-symbol-change-direction", "symbol-change-direction"]), this._elements.extHrsChangeDirection = this._findElements(e, ["js-symbol-ext-hrs-change-direction"]), this._elements.changePercent = this._findElements(e, ["js-symbol-change-pt", "symbol-change-pt"]), this._elements.description = this._findElements(e, ["js-symbol-description-name", "symbol-description-name"]), this._elements.extHrsChange = this._findElements(e, "js-symbol-ext-hrs-change"), this._elements.extHrsChangePercent = this._findElements(e, "js-symbol-ext-hrs-change-pt"), this._elements.extHrsClose = this._findElements(e, "js-symbol-ext-hrs-close"), this._elements.industry = this._findElements(e, ["js-symbol-industry", "symbol-industry"]), this._elements.last = this._findElements(e, ["js-symbol-last", "symbol-last"]), this._elements.sector = this._findElements(e, ["js-symbol-sector", "symbol-sector"]), this._elements.sessionStatus = this._findElements(e, "js-symbol-session-status"), this._elements.shortName = this._findElements(e, ["js-symbol-short-name", "symbol-short-name"]), this._elements.updateMode = this._findElements(e, "js-data-mode"), this._elements.updateMode.forEach(e => e.classList.add("i-hidden")), this._textNodes.change = this._getOrCreateTextNodes(this._elements.change), this._textNodes.changePercent = this._getOrCreateTextNodes(this._elements.changePercent), this._textNodes.extHrsChange = this._getOrCreateTextNodes(this._elements.extHrsChange), this._textNodes.extHrsChangePercent = this._getOrCreateTextNodes(this._elements.extHrsChangePercent), this._textNodes.extHrsClose = this._getOrCreateTextNodes(this._elements.extHrsClose), this._textNodes.last = this._getOrCreateTextNodes(this._elements.last), this._textNodes.open = this._findTextNodes(e, "js-symbol-open"), this._textNodes.eps = this._findTextNodes(e, "js-symbol-eps"), this._textNodes.marketCap = this._findTextNodes(e, "js-symbol-market-cap"), this._textNodes.prevClose = this._findTextNodes(e, "js-symbol-prev-close"),
                    this._textNodes.dividends = this._findTextNodes(e, "js-symbol-dividends"), this._textNodes.priceEarnings = this._findTextNodes(e, "js-symbol-pe"), this._textNodes.volume = this._findTextNodes(e, "js-symbol-volume"), this._textNodes.high = this._findTextNodes(e, "js-symbol-high"), this._textNodes.low = this._findTextNodes(e, "js-symbol-low"), this._textNodes.currency = this._findTextNodes(e, "js-symbol-currency"), this._textNodes.lastPriceTime = this._findTextNodes(e, "js-symbol-lp-time"), this._textNodes.rtcTime = this._findTextNodes(e, "js-symbol-rtc-time"), this._elements.lastHighlight = this._options.lastPriceHighlightDiffOnly ? this._elements.last.map(e => this._appendAndGetNewElement(e, "span")) : this._elements.last, this._textNodes.lastHighlight = this._getOrCreateTextNodes(this._elements.lastHighlight), this._elements.lastSup = this._options.lastPriceLastCharSup ? this._elements.lastHighlight.map(e => this._appendAndGetNewElement(e, "sup")) : [], this._textNodes.lastSup = this._getOrCreateTextNodes(this._elements.lastSup)
            }, T.prototype._findElements = function(e, t) {
                var i = (0, s.isArray)(t) ? t : [t];
                return Array.prototype.concat.apply([], i.map(t => Array.prototype.slice.call(e.getElementsByClassName(t))))
            }, T.prototype._findTextNodes = function(e, t) {
                return this._getOrCreateTextNodes(this._findElements(e, t))
            }, T.prototype._getOrCreateTextNodes = function(e) {
                return e.map(e => {
                    var t = this._getFirstTextNode(e);
                    return t || (t = e.ownerDocument.createTextNode(""), e.appendChild(t)), t
                })
            }, T.prototype._appendAndGetNewElement = function(e, t) {
                const i = document.createElement(t);
                return e.appendChild(i), i
            }, T.prototype._getFirstTextNode = function(e) {
                for (var t = e.childNodes, i = t.length - 1; i >= 0; i--)
                    if (3 === t.item(i).nodeType) return t.item(i);
                return null
            }, T.prototype.connect = function(e) {
                this._subscribed || (this._subscribedSymbol = e || this._symbol, this.quoteSession.subscribe(this._options.clientName, this._subscribedSymbol, this._quoteSessionEventHandler), this._subscribed = !0)
            }, T.prototype.disconnect = function() {
                clearTimeout(this._connectTimeoutId), this._subscribed && (this.quoteSession.unsubscribe(this._options.clientName, this._subscribedSymbol, this._quoteSessionEventHandler), this._subscribed = !1)
            }, T.prototype.onData = function(e, t) {
                this.enabled && ("ok" === e.status ? this.successData(e, t) : "permission_denied" === e.status ? this.onPermissionDenied(e) : "error" === e.status && this.errorData(e))
            }, T.prototype.successData = function(e, t) {
                e.values && this.setState(e.values, e, t)
            }, T.prototype.onPermissionDenied = function(e) {
                (0, f.isSfQuoteData)(e) ? this._options.sfPermissionDeniedHook ? this._options.sfPermissionDeniedHook(e, this._symbolOriginal || this._symbol) : this.errorData(e): this.downgradeData(e)
            }, T.prototype.errorData = function(e) {
                this._options.showInvalidSymbolStatus && (this.setShortName(this._symbol), this._elements.sessionStatus.map(e => new h.MarketStatusIndicator({
                    classSuffix: this._options.sessionStatusClassSuffix,
                    el: e,
                    data: {
                        values: {
                            current_session: "invalid"
                        }
                    },
                    tooltipType: this._options.indicatorsTooltipType
                }))), this._options.noSuchSymbolHook ? (this._symbolOriginal && this.setShortName(this._symbolOriginal),
                    this._options.noSuchSymbolHook.call(this, e, this._symbolOriginal || this._symbol)) : v.logWarn("No data for: " + this._symbol)
            }, T.prototype.downgradeData = function(e) {
                {
                    const t = e && e.values && e.values.alternative,
                        i = this._symbol === t;
                    if (!(t && -1 !== t.indexOf(":")) || i) return void this.errorData(e);
                    this._symbolOriginal = this._symbol, this._symbol = t, this._subscribed = !1, this.connect()
                }
            }, T.prototype.setState = function(e, t, i) {
                const o = i.values;
                this._isVolumeFormat = "volume" === e.format, null == o.pricescale && null == o.minmov && null == o.fractional && null == o.minmove2 || (this._priceFormatter = this._customPriceFormatter || this._isVolumeFormat && this._volumeFormatter || new d.PriceFormatter(e.pricescale || 100, e.minmov || 1, e.fractional, e.minmove2));
                const n = this._options,
                    r = this._percentFormatter,
                    s = this._priceFormatter,
                    a = this._volumeFormatter;
                o.timezone && this._timeFormatter && (this._timeFormatter.lastPrice && this._timeFormatter.lastPrice.setTimezone(o.timezone), this._timeFormatter.rtc && this._timeFormatter.rtc.setTimezone(o.timezone));
                const l = (e, t = !0) => t ? `(${e})` : e,
                    c = void 0 !== n.signPositiveChange ? n.signPositiveChange : n.signPositive,
                    m = e => {
                        const t = s.format(e, c, void 0, n.signNegative);
                        return l(t, n.changeInBrackets)
                    },
                    _ = e => {
                        const t = r.format(e, c, void 0, n.signNegative);
                        return l(t, n.changePercentInBrackets)
                    },
                    f = s.format.bind(s),
                    w = a.format.bind(a),
                    y = e => null == e ? u.PLACE_HOLDER : f(e);
                n.disableChange || (this._setNodesValue(this._textNodes.change, o.change, m), this._setNodesValue(this._textNodes.changePercent, o.change_percent, _), null != o.change && (n.dontDyePrice || this._setChangeFontColor([].concat(this._elements.change, this._elements.changePercent), o.change, n.changeUpFontColor, n.changeDownFontColor, n.changeNeutralFontColor), this._setChangeDirection(this._elements.changeDirection, o.change)), this._setNodesValue(this._textNodes.extHrsChange, o.rch, m), this._setNodesValue(this._textNodes.extHrsChangePercent, o.rchp, _), null != o.rch && (n.dontDyePrice || this._setChangeFontColor([].concat(this._elements.extHrsChange, this._elements.extHrsChangePercent), o.rch, n.changeUpFontColor, n.changeDownFontColor, n.changeNeutralFontColor), this._setChangeDirection(this._elements.extHrsChangeDirection, o.rch))), this._setNodesValue(this._textNodes.prevClose, o.prev_close_price, f), this._setNodesValue(this._textNodes.dividends, e.dividends_yield, e => null == e ? u.PLACE_HOLDER : r.format(e, n.signPositive, void 0, n.signNegative), !0);
                let b = (0, g.getTranslatedSymbolDescription)(o);
                if (b && (b = this._prepareSymbolDescription(b), this._setTextsContent(this._elements.description, b), this._options.addDescriptionTitle))
                    for (var S = 0; S < this._elements.description.length; S++) this._elements.description[S].setAttribute("title", b);
                if ((null != o.short_name || null != o.exchange) && e.short_name) {
                    var T = e.short_name;
                    "QUANDL" === e.exchange && void 0 !== e.short_name.split("/")[1] && (T = e.short_name.split("/")[1] + ", " + e.short_name.split("/")[0]), this.setShortName(T)
                }
                if (this._setLastValue(o.last_price, f), this._setNodesValue(this._textNodes.extHrsClose, o.rtc, f), o.rtc && this._highlighters.extHrsClose.show(o.rtc),
                    o.industry && this._setTextsContent(this._elements.industry, e.industry, e => e), o.sector && this._setTextsContent(this._elements.sector, e.sector), this._elements.sessionStatus && o.current_session && (this._sessionStatusInstances ? this._sessionStatusInstances.forEach(e => e.setStatus(o.current_session)) : this._sessionStatusInstances = this._elements.sessionStatus.map(t => new h.MarketStatusIndicator({
                        classSuffix: this._options.sessionStatusClassSuffix,
                        el: t,
                        short: !0,
                        data: {
                            values: o
                        },
                        quoteSession: this.quoteSession,
                        symbol: e.original_name,
                        manualUpdate: !0,
                        tooltipType: this._options.indicatorsTooltipType
                    }))), this._setNodesValue(this._textNodes.open, o.open_price, f), this._setNodesValue(this._textNodes.high, o.high_price, f), this._setNodesValue(this._textNodes.low, o.low_price, f), this._setNodesValue(this._textNodes.eps, e.earnings_per_share_basic_ttm, y, !0), this._setNodesValue(this._textNodes.priceEarnings, e.price_earnings_ttm, y, !0), this._setNodesValue(this._textNodes.marketCap, e.market_cap_basic, w, !0), this._setNodesValue(this._textNodes.volume, e.volume, w, !0), this._setNodesValue(this._textNodes.currency, e.currency_code, null, !0), (o.lp_time || o.timezone && e.lp_time) && this._textNodes.lastPriceTime.length && (this._timeFormatter && this._timeFormatter.lastPrice ? this._setNodesValue(this._textNodes.lastPriceTime, l(this._timeFormatter.lastPrice.format(e.lp_time), this._options.lastPriceTimeInBrackets)) : v.logError("last price time field requested with no formatter provided")), (o.rtc_time || o.timezone && e.rtc_time) && this._textNodes.rtcTime.length && (this._timeFormatter && this._timeFormatter.rtc ? this._setNodesValue(this._textNodes.rtcTime, l(this._timeFormatter.rtc.format(e.rtc_time), this._options.rtcTimeInBrackets)) : v.logError("rtc time field requested with no formatter provided")), null != o.last_price)
                    for (S = 0; S < this._elements.updateMode.length; S++) this._elements.updateMode[S].classList.remove("i-hidden");
                this._elements.updateMode && (o.update_mode || o.update_mode_seconds) && (this._updateModeInstances ? this._updateModeInstances.forEach(t => t.update({
                    values: e
                })) : this._updateModeInstances = this._elements.updateMode.map(t => new p.DataModeIndicator({
                    classSuffix: this._options.dataModeClassSuffix,
                    el: t,
                    data: {
                        values: e
                    },
                    modeInterval: e.update_mode_seconds,
                    short: !0,
                    tooltipType: this._options.indicatorsTooltipType
                }))), this._setStateHook && this._setStateHook(t.values, i.values, t.complete), this._lastPrice ? this._highlighters.last.show(e.last_price) : null === this._lastPrice && (this._container.classList.add("quote-ticker-inited"), "function" == typeof this._options.initedHook && this._options.initedHook("last_price" in e)), this._lastPrice = e.last_price
            }, T.prototype._setNodesValue = function(e, t, i, o) {
                if (null != t || o)
                    for (var n = "function" == typeof i ? i(t) : t, r = 0; r < e.length; r++) e[r].nodeValue = n
            }, T.prototype._setTextsContent = function(e, t, i) {
                if (e && e.length && t)
                    for (var o = "function" == typeof i ? i(t) : t, n = 0; n < e.length; n++) e[n].textContent = o
            }, T.prototype._setLastValue = function(e, t) {
                if (null == e) return;
                const i = "function" == typeof t ? t(e) : String(e);
                if (i === this._lastPriceFormatted) return;
                const [o, n, r] = this._options.lastPriceHighlightDiffOnly ? this._getLastValueStringDiff(this._lastPriceFormatted, i) : ["", i, ""], s = o, [a, l] = this._options.lastPriceLastCharSup ? [n.slice(0, -1), n.slice(-1)] : [n, ""];
                this._options.lastPriceHighlightDiffOnly && (this._isVolumeFormat && this._changeVolumeLetter.call(this, r), this._setNodesValue(this._textNodes.last, s)), this._setNodesValue(this._textNodes.lastHighlight, a), this._setNodesValue(this._textNodes.lastSup, l), this._lastPriceFormatted = i
            }, T.prototype._getChangeVolumeLetterCallback = function() {
                let e;
                return function(t) {
                    t !== e && (e = t, this._elements.last.forEach(t => {
                        3 !== t.childNodes.length ? t.appendChild(document.createTextNode(e)) : t.childNodes[2].nodeValue = e
                    }))
                }
            }, T.prototype._getLastValueStringDiff = function(e, t) {
                if (e === t) {
                    const [e, i] = E(t);
                    return [e, "", i]
                }
                let i = 0;
                for (; e[i] === t[i];) i++;
                const [o, n] = E(t.slice(i));
                return [t.slice(0, i), o, n]
            }, T.prototype._setChangeFontColor = function(e, t, i, n, r) {
                for (var s = o.formatSign(t, {
                        up: i,
                        down: n,
                        neutral: r
                    }), a = 0; a < e.length; a++) e[a].style.color = s
            }, T.prototype._setChangeDirection = function(e, t) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i].classList;
                    o.toggle(this._options.changeDirectionUpClass, t > 0), o.toggle(this._options.changeDirectionDownClass, t < 0), o.toggle(this._options.changeDirectionNeutralClass, 0 === t)
                }
            }, T.prototype.setShortName = function(e = "") {
                this._setTextsContent(this._elements.shortName, e)
            }, T.prototype._prepareSymbolDescription = function(e) {
                var t, i = this._getCache("symbol-description:" + e);
                if (i) return i;
                return i = (i = (t = e) === t.toUpperCase() ? e.toLowerCase() : e).replace(/[^\s]\S*/g, (function(e) {
                    return function(e) {
                        return 1 !== e.length && !~y.indexOf(e)
                    }(e) ? (0, _.capitalizeFirstLetter)(e) : e
                })), i = (0, _.capitalizeFirstLetter)(i), this._setCache("symbol-description:" + e, i), i
            }, T.prototype._initHighlighters = function() {
                this._highlighters.last = new C(this._elements.lastHighlight, this._options.growingBg, this._options.fallingBg, this._options.lastGrowingClass, this._options.lastFallingClass), this._highlighters.extHrsClose = new C(this._elements.extHrsClose, this._options.growingBg, this._options.fallingBg, this._options.lastGrowingClass, this._options.lastFallingClass)
            }, T.prototype.disable = function() {
                this.enabled = !1, this.disconnect()
            }, T.prototype.enable = function() {
                this.enabled = !0, this.connect()
            }, T.prototype.setStateHook = function(e) {
                null === e && this._setStateHook ? delete this._setStateHook : "function" == typeof e && (this._setStateHook = e)
            }, T.prototype._setCache = function(e, t) {
                null == t ? delete this._cache[e] : this._cache[e] = t
            }, T.prototype._getCache = function(e) {
                return this._cache && this._cache[e]
            }
        },
        79891: (e, t, i) => {
            "use strict";
            var o = i(423946).createGoProDialog,
                n = i(371141).showSignModal;
            window.TVDialogs = {
                showSignInDialog: function(e) {
                    return n(e)
                },
                signModal: null,
                showGoProDialog: function(e) {
                    o(e)
                }
            }
        },
        535458: (e, t, i) => {
            "use strict";
            i.d(t, {
                StreamsTabButton: () => s
            });
            var o = i(667294),
                n = i(550205),
                r = i(35151);

            function s(e) {
                return o.createElement(n.TabButton, { ...e,
                    NotificationComponent: a
                })
            }

            function a(e) {
                const {
                    count: t
                } = e;
                return t && t > 0 ? o.createElement("span", {
                    className: r.counter
                }) : null
            }
        },
        605956: (e, t, i) => {
            "use strict";
            i.d(t, {
                getTranslatedSymbolDescription: () => s
            });
            var o = i(120220);
            const n = (0, i(198006).isFeatureEnabled)("short_descriptions");

            function r(e) {
                const t = `#${e}-symbol-description`,
                    i = (0, o.t)(t);
                return i === t ? null : i
            }

            function s(e) {
                if (void 0 !== e.pro_name) {
                    const t = r(e.pro_name);
                    if (null !== t) return t;
                    if (void 0 !== e.short_name) {
                        const t = r(e.short_name);
                        if (null !== t) return t
                    }
                }
                return "en" !== e.language && void 0 !== e.local_description && e.language === window.language ? e.local_description : n && void 0 !== e.short_description ? e.short_description : "en" === e.language && void 0 !== e.local_description && e.language === window.language ? e.local_description : e.description || ""
            }
        },
        729199: (e, t, i) => {
            "use strict";
            var o = i(771073);
            i(862768), i(424953), i(610046), i(851176), i(310714), i(914103), i(950579), i(804060);
            !async function() {
                const e = await (0, o.getTracker)(),
                    t = document.querySelectorAll(".js-footer-markets-link"),
                    i = document.querySelector(".js-footer-trading-view-desktop-link");
                t.forEach(t => {
                    t.addEventListener("click", t => {
                        const i = t.currentTarget;
                        if (null === i) return;
                        const o = i.dataset.platform;
                        e && o && e.trackAppLinkClick("tradingview", "footer", "footer", o)
                    })
                }), i && i.addEventListener("click", t => {
                    null !== t.currentTarget && e && e.trackAppLinkClick("tradingview", "footer", "get_desktop_app_footer_menu", "desktop")
                })
            }()
        },
        898388: (e, t, i) => {
            "use strict";

            function o(e) {
                let t = null;
                return (i, ...o) => (null == t || t.abort(), t = new AbortController, null == i || i.addEventListener("error", () => null == t ? void 0 : t.abort(), {
                    once: !0
                }), e(t.signal, ...o))
            }

            function n(e) {
                if (!l(e)) throw e
            }

            function r(e) {
                if (l(e)) throw e
            }

            function s(e) {
                return (null == e ? void 0 : e.aborted) ? Promise.reject(a()) : new Promise((t, i) => {
                    null == e || e.addEventListener("abort", () => i(a()), {
                        once: !0
                    })
                })
            }

            function a() {
                return new DOMException("Aborted", "AbortError")
            }

            function l(e) {
                return e instanceof Error && "AbortError" === e.name
            }

            function c(e, t) {
                return Promise.race([s(e), t])
            }
            async function d(e, t) {
                let i;
                try {
                    await c(e, new Promise(e => {
                        i = setTimeout(e, t)
                    }))
                } finally {
                    clearTimeout(i)
                }
            }
            i.d(t, {
                respectLatest: () => o,
                skipAbortError: () => n,
                rethrowAbortError: () => r,
                createAbortError: () => a,
                isAbortError: () => l,
                respectAbort: () => c,
                delay: () => d
            })
        },
        382713: (e, t, i) => {
            "use strict";
            i.d(t, {
                callWhenOnline: () => n,
                waitForOnline: () => r
            });
            var o = i(898388);

            function n(e) {
                let t = e;
                const i = () => {
                    window.removeEventListener("online", i), t && t()
                };
                return window.addEventListener("online", i), () => {
                    t = null
                }
            }
            async function r(e = null) {
                return !0 === navigator.onLine || void 0 === navigator.onLine ? Promise.resolve() : (0, o.respectAbort)(e, new Promise(e => {
                    const t = () => {
                        window.removeEventListener("online", t), e()
                    };
                    window.addEventListener("online", t)
                }))
            }
        },
        250077: (e, t, i) => {
            "use strict";

            function o(e) {
                return e.charAt(0).toUpperCase() + e.substring(1)
            }
            i.d(t, {
                capitalizeFirstLetter: () => o
            })
        },
        932010: (e, t, i) => {
            "use strict";

            function o(e, t, i, o, n) {
                let r = "";
                if (o = o ? "; path=" + o : "", n = n ? "; domain=" + n : "", i) {
                    const e = new Date;
                    e.setTime(e.getTime() + 24 * i * 60 * 60 * 1e3), r = "; expires=" + e.toUTCString()
                } else r = "";
                document.cookie = e + "=" + t + r + n + o
            }

            function n(e) {
                const t = e + "=",
                    i = document.cookie.split(";");
                for (let e = 0; e < i.length; e++) {
                    let o = i[e];
                    for (;
                        " " === o.charAt(0);) o = o.substring(1, o.length);
                    if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
                }
                return null
            }
            i.d(t, {
                set: () => o,
                get: () => n
            })
        },
        821318: (e, t, i) => {
            "use strict";

            function o(e, ...t) {
                return e && "object" == typeof e ? (0 === t.length || t.forEach(t => {
                    null != t && "object" == typeof t && Object.keys(t).forEach(i => {
                        const r = e[i],
                            s = t[i];
                        if (s === e) return;
                        const a = Array.isArray(s);
                        if (s && (n(s) || a)) {
                            let t;
                            t = a ? r && Array.isArray(r) ? r : [] : r && n(r) ? r : {}, e[i] = o(t, s)
                        } else void 0 !== s && (e[i] = s)
                    })
                }), e) : e
            }

            function n(e) {
                if (!e || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
                const t = Object.getPrototypeOf(e);
                if (!t) return !0;
                const i = Object.hasOwnProperty.toString,
                    o = t.hasOwnProperty("constructor") && t.constructor;
                return "function" == typeof o && i.call(o) === i.call(Object)
            }
            i.d(t, {
                deepExtend: () => o
            })
        },
        336757: (e, t, i) => {
            "use strict";

            function o(e) {
                if (void 0 === e) return "";
                if (e instanceof Error) {
                    let t = e.message;
                    return e.stack && (t += " " + e.stack), t
                }
                return "string" == typeof e ? e.toString() : JSON.stringify(e)
            }
            i.d(t, {
                errorToString: () => o
            })
        },
        75443: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                guid: () => n,
                randomHash: () => r,
                randomHashN: () => s
            });
            const o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

            function n() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
                    const t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            }

            function r() {
                return s(12)
            }

            function s(e) {
                let t = "";
                for (let i = 0; i < e; ++i) {
                    const e = Math.floor(Math.random() * o.length);
                    t += o[e]
                }
                return t
            }
        },
        13548: (e, t, i) => {
            "use strict";
            i.d(t, {
                parseHtml: () => n,
                parseHtmlElement: () => r
            });
            const o = new WeakMap;

            function n(e, t) {
                let i, n;
                return i = null == t ? document.documentElement : 9 === t.nodeType ? t.documentElement : t, o && (n = o.get(i)), n || (n = i.ownerDocument.createRange(), n.selectNodeContents(i), o && o.set(i, n)), n.createContextualFragment(e)
            }

            function r(e, t) {
                const i = n(e, t);
                let o;
                if ("firstElementChild" in i) o = i.firstElementChild;
                else {
                    o = null;
                    for (let e = 0; e < i.childNodes.length; e++) {
                        const t = i.childNodes[e];
                        if (1 === t.nodeType) {
                            o = t;
                            break
                        }
                    }
                }
                return null !== o && i.removeChild(o), o
            }
        },
        53549: (e, t, i) => {
            "use strict";

            function o(e) {
                e.preventDefault()
            }
            i.d(t, {
                preventDefault: () => o,
                preventDefaultForContextMenu: () => r
            });
            const n = ["input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="search"]', 'input[type="number"]', 'input[type="url"]', "textarea", "a[href]", '*[contenteditable="true"]', "[data-allow-context-menu]"];

            function r(e) {
                const t = e.target;
                t && !t.closest(n.join(", ")) && e.preventDefault()
            }
        },
        494972: (e, t, i) => {
            "use strict";

            function o(e) {
                return e.reduce((function(e, t, i) {
                    return ~e.indexOf(t) || e.push(t), e
                }), [])
            }
            i.r(t), i.d(t, {
                uniq: () => o
            })
        },
        417238: (e, t, i) => {
            "use strict";

            function o(e) {
                return decodeURIComponent(e.replace(/\+/g, " ")).replace(/<\/?[^>]+(>|$)/g, "")
            }

            function n(e) {
                const t = /([^&=]+)=?([^&]*)/g,
                    i = {};
                if (!e) return i;
                let n = t.exec(e);
                for (; n;) i[o(n[1])] = o(n[2]), n = t.exec(e);
                return i
            }

            function r() {
                return n(window.location.search.substring(1))
            }

            function s() {
                return n(window.location.hash.split("#")[1])
            }

            function a(e) {
                const t = [];
                for (const i in e) e.hasOwnProperty(i) && null != e[i] && t.push({
                    key: i,
                    pair: encodeURIComponent(i) + "=" + encodeURIComponent(e[i])
                });
                return t.sort((e, t) => e.key > t.key ? 1 : e.key < t.key ? -1 : 0).map(e => e.pair).join("&")
            }
            i.r(t), i.d(t, {
                decode: () => o,
                getQueryParams: () => n,
                getUrlParams: () => r,
                getHashUrlParams: () => s,
                createUrlParams: () => a
            })
        },
        396107: (e, t, i) => {
            "use strict";
            var o;

            function n(e, t = {}) {
                const {
                    page: i,
                    query: n
                } = t;
                let r = "/u/",
                    s = !1,
                    a = null;
                if (function(e) {
                        return e.is_broker || 1 === e.account_type
                    }(e)) switch (r = "/broker/", i) {
                    case o.PublishedCharts:
                        a = "ideas/";
                        break;
                    case o.FollowingPeople:
                        a = "following/";
                        break;
                    case o.Followers:
                        a = "followers/";
                        break;
                    case o.Reviews:
                        a = "reviews/";
                        break;
                    case o.Settings:
                    case o.SettingsProfile:
                    case o.Notifications:
                    case o.Billing:
                        r = "/u/", s = !0
                } else s = !0;
                return "Guest" !== e.username && (r += e.username + "/"), n && (r += "?" + n), void 0 !== i && (s ? r += "#" + i : null !== a && (r += "" + a)), r
            }
            i.r(t), i.d(t, {
                    ProfilePages: () => o,
                    getUserProfilePath: () => n
                }),
                function(e) {
                    e.Settings = "settings", e.SettingsProfile = "settings-profile", e.Notifications = "notifications", e.Billing = "billing", e.PublishedCharts = "published-charts", e.FollowingPeople = "following-people", e.Followers = "followers", e.Reviews = "reviews"
                }(o || (o = {}))
        },
        795498: (e, t, i) => {
            "use strict";

            function o(e, t = !1) {
                ("attachEvent" in document ? "complete" === document.readyState : "loading" !== document.readyState) ? t ? setTimeout(() => e(), 1) : e(): document.addEventListener("DOMContentLoaded", () => e())
            }
            i.d(t, {
                whenDocumentReady: () => o,
                whenDocumentReadyPromise: () => n
            });
            const n = new Promise(e => {
                o(e)
            })
        },
        184257: (e, t, i) => {
            "use strict";
            i.d(t, {
                visitPaymentPage: () => u
            });
            var o = i(120220),
                n = i(13548),
                r = i(128308),
                s = i(465754),
                a = i(198006),
                l = i(177541),
                c = i(280271),
                d = i(90645);

            function u(e = "y", t = {}) {
                var i;
                const u = null !== (i = t.productName) && void 0 !== i ? i : "pro",
                    h = t.paymentMethod || "paypal",
                    p = "bitcoin" === h ? "Bitcoin payment" : "Paypal payment";
                window.runOrSignIn(async () => {
                    if (await (0, c.check)()) return void(0, d.showRestrictedCountryNotificationDialog)();
                    if ("function" == typeof t.canVisit && !t.canVisit()) return void(location.href = "/");
                    if ((0, a.isFeatureEnabled)("braintree-trial-implementation")) return void(0, r.showPaymentOrderDialog)({
                        productId: t.productName,
                        billingCycle: t.exchangesOnly ? s.BillingCycle.Monthly : e,
                        fixedCycle: t.fixedCycle,
                        statusExtraData: t.exchangesExpanded ? l.StatusExtraData.Enable : void 0
                    });
                    const i = (0, n.parseHtmlElement)(`<form action="/order/" method="post" ${t.newWindow?'target="_blank"':""}>\n\t\t\t\t\t<input type="hidden" name="product" value="${u}"/>\n\t\t\t\t\t<input type="hidden" name="billing_cycle" value="${e}"/>\n\t\t\t\t\t<input type="hidden" name="fixed_billing_cycle" value="${t.fixedCycle?"1":""}"/>\n\t\t\t\t\t<input type="hidden" name="exchanges_only" value="${t.exchangesOnly?"1":""}"/>\n\t\t\t\t\t<input type="hidden" name="exchanges_expanded" value="${t.exchangesExpanded?"1":""}"/>\n\t\t\t\t\t<input type="hidden" name="selected_packages" value="${(t.selectedPackages||[]).join(",")}"/>\n\t\t\t\t\t<input type="hidden" name="payment_method" value="${h}"/>\n\t\t\t\t</form>`);
                    i && (document.body.appendChild(i), i.submit())
                }, {
                    source: p,
                    paidAccountCheck: window.pro && window.pro.getProduct(u).type === window.pro.PRODUCT_TYPES.pro_plan,
                    paidAccountSuccessButtonText: (0,
                        o.t)("Continue purchasing")
                })
            }
        },
        976623: (e, t, i) => {
            "use strict";

            function o(e, t, i, o, n) {
                function r(n) {
                    if (e > n.timeStamp) return;
                    const r = n.target;
                    void 0 !== i && null !== t && null !== r && r.ownerDocument === o && (t.contains(r) || i(n))
                }
                return n.click && o.addEventListener("click", r, !1), n.mouseDown && o.addEventListener("mousedown", r, !1), n.touchEnd && o.addEventListener("touchend", r, !1), n.touchStart && o.addEventListener("touchstart", r, !1), () => {
                    o.removeEventListener("click", r, !1), o.removeEventListener("mousedown", r, !1), o.removeEventListener("touchend", r, !1), o.removeEventListener("touchstart", r, !1)
                }
            }
            i.d(t, {
                addOutsideEventListener: () => o
            })
        },
        459484: (e, t, i) => {
            "use strict";
            i.d(t, {
                initAllAnalytics: () => _
            });
            var o = i(795498),
                n = i(865490),
                r = i(507965),
                s = i(425443),
                a = i(604346),
                l = i(640142),
                c = i(968724),
                d = i(64390);

            function u() {
                try {
                    return null === top || window !== window.top || document !== top.document || self.location !== top.location
                } catch (e) {
                    return !0
                }
            }
            const h = (0, c.onMainPage)() || window.location.pathname.startsWith("/symbols/");
            let p = !1;

            function g() {
                if (function() {
                        if (p || !(0, d.yandexAnalyticsEnabled)() && !u() || (0, l.isOnMobileAppPage)("any") || c.CheckMobile.any() || !h) return;
                        (0, a.updateInitData)(), (0, a.getInitData)().yaTagId && ((0, d.appendScript)("https://mc.yandex.ru/metrika/tag.js"), window.ym = function() {
                            window.ym.a.push(arguments)
                        }, window.ym.a = window.ym.a || [], window.ym.l = (new Date).getTime(), p = !0)
                    }(), !p) return;
                const e = (0, a.getInitData)().yaTagId;
                window.ym(e, "init", {
                    clickmap: !0,
                    trackLinks: !0,
                    accurateTrackBounce: !0,
                    webvisor: !0,
                    trackHash: !0
                })
            }
            var m = i(771073);
            async function _(e) {
                if ((0, n.trackFacebookEvent)(n.FacebookEvent.PageView), (0, r.trackTwitterEvent)(r.TwitterEvent.SiteVisit), await Promise.all([o.whenDocumentReadyPromise, e]), (0, s.initGA)(), g(), !u()) {
                    const e = await (0, m.getTracker)();
                    e && e.trackPageView()
                }
            }
        },
        64390: (e, t, i) => {
            "use strict";
            i.d(t, {
                appendScript: () => r,
                createImage: () => s,
                marketingAnalyticsEnabled: () => a,
                yandexAnalyticsEnabled: () => l
            });
            var o = i(926357),
                n = i(198006);

            function r(e, t = !0) {
                const i = document.createElement("script");
                i.async = t, i.src = e;
                const n = (0, o.getCspNonce)();
                return n && i.setAttribute("nonce", n), document.head.appendChild(i), i
            }

            function s(e) {
                const t = document.createElement("img");
                return t.src = e, t
            }

            function a() {
                return (0, n.isFeatureEnabled)("marketing-analytics")
            }

            function l() {
                return (0, n.isFeatureEnabled)("yandex_metric_enabled")
            }
        },
        865490: (e, t, i) => {
            "use strict";
            i.d(t, {
                FacebookEvent: () => r,
                trackFacebookEvent: () => s
            });
            var o = i(604346),
                n = i(64390);
            (0, o.updateInitData)();
            var r;

            function s(e) {
                (0, n.marketingAnalyticsEnabled)() && (0, n.createImage)((e => `https://www.facebook.com/tr?id=${(0,o.getInitData)().fbTagId}&ev=${e}&noscript=1`)(e))
            }! function(e) {
                e.PageView = "PageView", e.CompleteRegistration = "CompleteRegistration", e.StartTrial = "StartTrial", e.Subscribe = "Subscribe"
            }(r || (r = {}))
        },
        425443: (e, t, i) => {
            "use strict";
            i.d(t, {
                initGA: () => a,
                trackTiming: () => l
            });
            var o = i(604346),
                n = i(968724),
                r = i(64390);
            let s = !1;

            function a() {
                if (s) return;
                (0, o.updateInitData)();
                const e = (0, o.getInitData)();
                if (!e.gaId) return;
                s = !0, (0, r.appendScript)("https://www.googletagmanager.com/gtag/js?id=" + (0, o.getInitData)().gaId),
                    window.dataLayer = window.dataLayer || [], window.gtag = function() {
                        window.dataLayer.push(arguments)
                    }, window.gtag("js", new Date);
                const t = {
                    optimize_id: e.optimizeId,
                    anonymize_ip: !0
                };
                window.TVD && (t.app_name = "TVD", t.app_version = (0, n.desktopAppVersion)()), e.gaVars && window.gtag("set", e.gaVars), window.gtag("config", e.gaId, t)
            }

            function l(e, t, i, o) {
                a(), window.gtag("event", "timing_complete", {
                    name: t,
                    value: i,
                    event_category: e,
                    event_label: o
                })
            }
        },
        507965: (e, t, i) => {
            "use strict";
            i.d(t, {
                TwitterEvent: () => o,
                trackTwitterEvent: () => r
            });
            var o, n = i(64390);
            ! function(e) {
                e.SiteVisit = "o2eg2", e.TrialSignUp = "o1wjo", e.RegistrationCompleted = "o1wjq", e.PaidPlanAcquired = "o1wjr"
            }(o || (o = {}));

            function r(e) {
                (0, n.marketingAnalyticsEnabled)() && (e => [`https://analytics.twitter.com/i/adsct?txn_id=${e}&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0`, `https://t.co/i/adsct?txn_id=${e}&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0"`])(e).map(n.createImage)
            }
        },
        180643: (e, t, i) => {
            "use strict";
            var o, n, r, s = i(918184),
                a = i(65470);

            function l() {
                return o || (this instanceof l ? void(o = this) : new l)
            }
            l.prototype.browser = function() {
                return n || (n = a.name + " " + a.version), n
            }, l.prototype.setBrowser = function(e) {
                "string" == typeof e && e && (n = e)
            }, l.prototype.os = function() {
                if (!r) {
                    var e = Object.keys(a);
                    r = ["mac", "windows", "windowsphone", "linux", "chromeos", "android", "ios", "blackberry", "firefoxos", "webos", "bada", "tizen", "sailfish"].filter((function(t) {
                        return e.includes(t)
                    }))[0]
                }
                return r
            }, l.prototype.setOS = function(e) {
                "string" == typeof e && e && (r = e)
            }, l.prototype.cookieEnabled = function() {
                return navigator.cookieEnabled
            }, l.prototype.viewportSize = function() {
                return s(window).width() + " x " + s(window).height()
            }, l.prototype.screenSize = function() {
                return window.screen && (screen.width || screen.availWidth) + " x " + (screen.height || screen.availHeight) || "unknown"
            }, l.prototype.colorDepth = function() {
                return window.screen && screen.colorDepth || "unknown"
            }, l.prototype.pixelRatio = function() {
                return window.devicePixelRatio || 0
            }, l.prototype.wsTestResult = function() {
                return "Pending"
            }, l.prototype.state = function() {
                return {
                    os: this.os(),
                    browser: this.browser(),
                    cookieEnabled: this.cookieEnabled(),
                    viewportSize: this.viewportSize(),
                    screenSize: this.screenSize(),
                    colorDepth: this.colorDepth(),
                    pixelRatio: this.pixelRatio()
                }
            }, e.exports = l
        },
        926357: (e, t, i) => {
            "use strict";

            function o() {
                const e = document.querySelector("script[nonce]");
                if (null !== e) return e.getAttribute("nonce") || e.nonce
            }
            i.d(t, {
                getCspNonce: () => o
            })
        },
        924754: (e, t, i) => {
            "use strict";

            function o(e) {
                if (void 0 === e) return null;
                const t = e.match(/(delayed_streaming)_([\d]{1,4})/);
                return null === t ? null : {
                    mode: t[1],
                    interval: parseInt(t[2])
                }
            }
            i.d(t, {
                parseUpdateMode: () => o
            })
        },
        157014: (e, t, i) => {
            "use strict";
            var o, n;
            i.r(t), i.d(t, {
                    WeekDays: () => o,
                    Months: () => n
                }),
                function(e) {
                    e[e.SUNDAY = 1] = "SUNDAY", e[e.MONDAY = 2] = "MONDAY", e[e.TUESDAY = 3] = "TUESDAY", e[e.WEDNESDAY = 4] = "WEDNESDAY", e[e.THURSDAY = 5] = "THURSDAY", e[e.FRIDAY = 6] = "FRIDAY", e[e.SATURDAY = 7] = "SATURDAY"
                }(o || (o = {})),
                function(e) {
                    e[e.JANUARY = 0] = "JANUARY", e[e.FEBRUARY = 1] = "FEBRUARY", e[e.MARCH = 2] = "MARCH", e[e.APRIL = 3] = "APRIL", e[e.MAY = 4] = "MAY", e[e.JUNE = 5] = "JUNE", e[e.JULY = 6] = "JULY",
                        e[e.AUGUST = 7] = "AUGUST", e[e.SEPTEMBER = 8] = "SEPTEMBER", e[e.OCTOBER = 9] = "OCTOBER", e[e.NOVEMBER = 10] = "NOVEMBER", e[e.DECEMBER = 11] = "DECEMBER"
                }(n || (n = {}))
        },
        480697: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                monthsFullNames: () => r,
                monthsShortNames: () => s,
                weekDaysFullNames: () => a,
                weekDaysShortNames: () => l,
                weekDaysMiniNames: () => c
            });
            var o = i(120220),
                n = i(157014);
            const r = {
                    [n.Months.JANUARY]: (0, o.t)("January"),
                    [n.Months.FEBRUARY]: (0, o.t)("February"),
                    [n.Months.MARCH]: (0, o.t)("March"),
                    [n.Months.APRIL]: (0, o.t)("April"),
                    [n.Months.MAY]: (0, o.t)("May"),
                    [n.Months.JUNE]: (0, o.t)("June"),
                    [n.Months.JULY]: (0, o.t)("July"),
                    [n.Months.AUGUST]: (0, o.t)("August"),
                    [n.Months.SEPTEMBER]: (0, o.t)("September"),
                    [n.Months.OCTOBER]: (0, o.t)("October"),
                    [n.Months.NOVEMBER]: (0, o.t)("November"),
                    [n.Months.DECEMBER]: (0, o.t)("December")
                },
                s = {
                    [n.Months.JANUARY]: (0, o.t)("Jan"),
                    [n.Months.FEBRUARY]: (0, o.t)("Feb"),
                    [n.Months.MARCH]: (0, o.t)("Mar"),
                    [n.Months.APRIL]: (0, o.t)("Apr"),
                    [n.Months.MAY]: (0, o.t)("May", {
                        context: "short"
                    }),
                    [n.Months.JUNE]: (0, o.t)("Jun"),
                    [n.Months.JULY]: (0, o.t)("Jul"),
                    [n.Months.AUGUST]: (0, o.t)("Aug"),
                    [n.Months.SEPTEMBER]: (0, o.t)("Sep"),
                    [n.Months.OCTOBER]: (0, o.t)("Oct"),
                    [n.Months.NOVEMBER]: (0, o.t)("Nov"),
                    [n.Months.DECEMBER]: (0, o.t)("Dec")
                },
                a = {
                    [n.WeekDays.SUNDAY]: (0, o.t)("Sunday"),
                    [n.WeekDays.MONDAY]: (0, o.t)("Monday"),
                    [n.WeekDays.TUESDAY]: (0, o.t)("Tuesday"),
                    [n.WeekDays.WEDNESDAY]: (0, o.t)("Wednesday"),
                    [n.WeekDays.THURSDAY]: (0, o.t)("Thursday"),
                    [n.WeekDays.FRIDAY]: (0, o.t)("Friday"),
                    [n.WeekDays.SATURDAY]: (0, o.t)("Saturday")
                },
                l = {
                    [n.WeekDays.SUNDAY]: (0, o.t)("Sun"),
                    [n.WeekDays.MONDAY]: (0, o.t)("Mon"),
                    [n.WeekDays.TUESDAY]: (0, o.t)("Tue"),
                    [n.WeekDays.WEDNESDAY]: (0, o.t)("Wed"),
                    [n.WeekDays.THURSDAY]: (0, o.t)("Thu"),
                    [n.WeekDays.FRIDAY]: (0, o.t)("Fri"),
                    [n.WeekDays.SATURDAY]: (0, o.t)("Sat")
                },
                c = {
                    [n.WeekDays.SUNDAY]: (0, o.t)("Su", {
                        context: "day_of_week"
                    }),
                    [n.WeekDays.MONDAY]: (0, o.t)("Mo", {
                        context: "day_of_week"
                    }),
                    [n.WeekDays.TUESDAY]: (0, o.t)("Tu", {
                        context: "day_of_week"
                    }),
                    [n.WeekDays.WEDNESDAY]: (0, o.t)("We", {
                        context: "day_of_week"
                    }),
                    [n.WeekDays.THURSDAY]: (0, o.t)("Th", {
                        context: "day_of_week"
                    }),
                    [n.WeekDays.FRIDAY]: (0, o.t)("Fr", {
                        context: "day_of_week"
                    }),
                    [n.WeekDays.SATURDAY]: (0, o.t)("Sa", {
                        context: "day_of_week"
                    })
                }
        },
        457137: (e, t, i) => {
            "use strict";

            function o() {
                let e, t;
                return {
                    promise: new Promise((i, o) => {
                        e = i, t = o
                    }),
                    reject: t,
                    resolve: e
                }
            }
            i.d(t, {
                createDeferredPromise: () => o
            })
        },
        64011: (e, t, i) => {
            "use strict";
            i.d(t, {
                Draggable: () => a,
                PointerBackend: () => l
            });
            var o = i(416282),
                n = i(491496),
                r = i(968724),
                s = i(195355);
            class a {
                constructor(e) {
                    var t, i;
                    this._helper = null, this._handleDragStart = e => {
                        var t;
                        if (null !== this._helper) return;
                        const i = this._source;
                        i.classList.add("ui-draggable-dragging");
                        const [o, r] = [(0, n.outerWidth)(i), (0, n.outerHeight)(i)];
                        this._helper = {
                            startTop: parseFloat(i.style.top) || 0,
                            startLeft: parseFloat(i.style.left) || 0,
                            nextTop: null,
                            nextLeft: null,
                            raf: null,
                            size: [o, r],
                            containment: this._containment instanceof HTMLElement ? [parseInt(getComputedStyle(this._containment).borderLeftWidth) + parseInt(getComputedStyle(this._containment).paddingLeft), parseInt(getComputedStyle(this._containment).borderTopWidth) + parseInt(getComputedStyle(this._containment).paddingTop), this._containment.offsetWidth - parseInt(getComputedStyle(this._containment).borderRightWidth) - parseInt(getComputedStyle(this._containment).paddingRight) - parseInt(getComputedStyle(i).marginLeft) - parseInt(getComputedStyle(i).marginRight) - o, this._containment.offsetHeight - parseInt(getComputedStyle(this._containment).borderBottomWidth) - parseInt(getComputedStyle(this._containment).paddingBottom) - parseInt(getComputedStyle(i).marginTop) - parseInt(getComputedStyle(i).marginBottom) - r] : "window" === this._containment ? [window.scrollX, window.scrollY, window.scrollX + document.documentElement.offsetWidth - o, window.scrollY + document.documentElement.offsetHeight - r] : null
                        }, null === (t = this._start) || void 0 === t || t.call(this)
                    }, this._handleDragMove = e => {
                        var t;
                        if (null === this._helper) return;
                        const {
                            current: i,
                            initial: o
                        } = e.detail, n = this._source, r = this._helper.nextTop, s = this._helper.nextLeft, a = "y" === this._axis || !1 === this._axis || 0 !== i.movementY;
                        if (a) {
                            const e = this._helper.startTop;
                            isFinite(e) && (this._helper.nextTop = i.clientY - o.clientY + e)
                        }
                        const l = "x" === this._axis || !1 === this._axis || 0 !== i.movementY;
                        if (l) {
                            const e = this._helper.startLeft;
                            isFinite(e) && (this._helper.nextLeft = i.clientX - o.clientX + e)
                        }
                        if (null !== this._helper.containment) {
                            const [e, t, i, o] = this._helper.containment;
                            a && this._helper.nextTop && (this._helper.nextTop = Math.min(this._helper.nextTop, o), this._helper.nextTop = Math.max(this._helper.nextTop, t)), l && this._helper.nextLeft && (this._helper.nextLeft = Math.min(this._helper.nextLeft, i), this._helper.nextLeft = Math.max(this._helper.nextLeft, e))
                        }
                        null !== this._helper.raf || r === this._helper.nextTop && s === this._helper.nextLeft || (this._helper.raf = requestAnimationFrame(() => {
                            null !== this._helper && (null !== this._helper.nextTop && (n.style.top = this._helper.nextTop + "px", this._helper.nextTop = null), null !== this._helper.nextLeft && (n.style.left = this._helper.nextLeft + "px", this._helper.nextLeft = null), this._helper.raf = null)
                        })), null === (t = this._drag) || void 0 === t || t.call(this)
                    }, this._handleDragStop = e => {
                        var t;
                        if (null === this._helper) return;
                        this._source.classList.remove("ui-draggable-dragging"), this._helper = null, null === (t = this._stop) || void 0 === t || t.call(this)
                    };
                    const o = this._source = e.source;
                    o.classList.add("ui-draggable");
                    const r = this._handle = null !== (t = e.handle ? o.querySelector(e.handle) : null) && void 0 !== t ? t : o;
                    r.classList.add("ui-draggable-handle"), this._start = e.start, this._stop = e.stop, this._drag = e.drag, this._backend = new l({
                        handle: r,
                        onDragStart: this._handleDragStart,
                        onDragMove: this._handleDragMove,
                        onDragStop: this._handleDragStop
                    }), this._axis = null !== (i = e.axis) && void 0 !== i && i, this._containment = e.containment
                }
                destroy() {
                    const e = this._source;
                    e.classList.remove("ui-draggable"), e.classList.remove("ui-draggable-dragging");
                    this._handle.classList.remove("ui-draggable-handle"), this._backend.destroy(),
                        null !== this._helper && (this._helper.raf && cancelAnimationFrame(this._helper.raf), this._helper = null)
                }
            }
            class l {
                constructor(e) {
                    this._initial = null, this._handlePointerDown = e => {
                        if (null !== this._initial) return;
                        if (!(e.target instanceof Element && this._handle.contains(e.target))) return;
                        if (this._initial = e, !this._dispatchEvent(this._createEvent("pointer-drag-start", e))) return void(this._initial = null);
                        e.preventDefault();
                        const t = this._getEventTarget();
                        t.addEventListener("pointermove", this._handlePointerMove), t.addEventListener("pointerup", this._handlePointerUp), t.addEventListener("pointercancel", this._handlePointerUp), t.addEventListener("lostpointercapture", this._handlePointerUp), t.setPointerCapture(e.pointerId)
                    }, this._handlePointerMove = e => {
                        null !== this._initial && this._initial.pointerId === e.pointerId && (e.preventDefault(), this._dispatchEvent(this._createEvent("pointer-drag-move", e)))
                    }, this._handlePointerUp = e => {
                        if (null === this._initial || this._initial.pointerId !== e.pointerId) return;
                        e.preventDefault();
                        const t = this._getEventTarget();
                        t.removeEventListener("pointermove", this._handlePointerMove), t.removeEventListener("pointerup", this._handlePointerUp), t.removeEventListener("pointercancel", this._handlePointerUp), t.removeEventListener("lostpointercapture", this._handlePointerUp), t.releasePointerCapture(this._initial.pointerId), this._dispatchEvent(this._createEvent("pointer-drag-stop", e)), this._initial = null
                    };
                    const t = this._handle = e.handle;
                    this._onDragStart = e.onDragStart, this._onDragMove = e.onDragMove, this._onDragStop = e.onDragStop, t.style.touchAction = "none";
                    this._getEventTarget().addEventListener("pointerdown", this._handlePointerDown)
                }
                destroy() {
                    this._handle.style.touchAction = "";
                    const e = this._getEventTarget();
                    e.removeEventListener("pointerdown", this._handlePointerDown), e.removeEventListener("pointermove", this._handlePointerMove), e.removeEventListener("pointerup", this._handlePointerUp), e.removeEventListener("pointercancel", this._handlePointerUp), e.removeEventListener("lostpointercapture", this._handlePointerUp), null !== this._initial && (e.releasePointerCapture(this._initial.pointerId), this._initial = null)
                }
                _getEventTarget() {
                    return r.CheckMobile.iOS() || (0, r.isMac)() && s.touch ? window.document.documentElement : this._handle
                }
                _dispatchEvent(e) {
                    switch (e.type) {
                        case "pointer-drag-start":
                            this._onDragStart(e);
                            break;
                        case "pointer-drag-move":
                            this._onDragMove(e);
                            break;
                        case "pointer-drag-stop":
                            this._onDragStop(e)
                    }
                    return !e.defaultPrevented
                }
                _createEvent(e, t) {
                    return (0, o.assert)(null !== this._initial), new CustomEvent(e, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            backend: this,
                            initial: this._initial,
                            current: t
                        }
                    })
                }
            }
        },
        11767: (e, t, i) => {
            "use strict";

            function o(e = location.host) {
                return -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(e) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(e) || e.match(/^[a-z]{2}\.tradingview\.com/) || e.match(/prod-[^.]+.tradingview.com/) ? "battle" : e.includes("tradingview.com") || e.includes("staging") ? "staging" : e.match(/webcharts/) ? "staging_local" : (e.match(/^localhost(:\d+)?$/), "local")
            }

            function n() {
                return "local" === o()
            }

            function r() {
                return "battle" === o()
            }

            function s() {
                return !r()
            }
            i.r(t), i.d(t, {
                environment: () => o,
                isLocal: () => n,
                isProd: () => r,
                isDebug: () => s
            })
        },
        865255: (e, t, i) => {
            "use strict";
            i.d(t, {
                exchanges: () => n
            });
            i(120220);
            var o = i(318152);
            const n = o
        },
        903851: (e, t, i) => {
            "use strict";
            i.d(t, {
                enabled: () => l,
                getConfig: () => c
            });
            const o = JSON.parse('{"free":{"CHART_STORAGE":{"limit":1},"MULTIPLE_CHARTS":{"limit":1},"INDICATORS_ON_CHART":{"limit":3},"HISTORICAL_BARS":{"limit":5},"STUDY_ON_STUDY":{"limit":270,"child_limit":1},"SERVER_SIDE_ALERTS":{"limit":1},"SCREENER_ALERTS":{"limit":1},"SCREENER_INTERVALS":{"interval":["1D","1W","1M"]},"STUDY_TEMPLATES":{"limit":1},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]}},"__legacy_pro":{"CHART_STORAGE":{"limit":99999},"MULTIPLE_CHARTS":{"limit":8},"CUSTOM_INTERVALS":{},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"INDICATORS_ON_CHART":{"limit":99999},"HISTORICAL_BARS":{"limit":10},"TV_VOLUMEBYPRICE":{"study_packages":["tv-volumebyprice"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":99999},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":20},"SCREENER_ALERTS":{"limit":99999},"SCREENER_AUTO_REFRESH":{},"SCREENER_EXPORT_DATA":{},"DEEP_HISTORY_BACKTEST":{},"SCREENER_INTERVALS":{"interval":["1m","5m","15m","30m","1h","2h","4h","1D","1W","1M"]},"NO_SPONSORED_ADS":{},"STUDY_TEMPLATES":{"limit":99999},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDC_AVAILABLE_DELAY":{},"STATUS":{"disable_on_trial":true},"MULTIFLAGGED_SYMBOLS_LISTS":{},"BAR_REPLAY_INTRADAY":{},"SHOWS":{"disable_on_trial":true},"ALERTS_WEBHOOK":{},"DEEP_FUNDAMENTALS_HISTORY":{},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram"],"disable_on_trial":true},"MULTI_MONITOR":{},"PUBLISH_PROTECTED_SCRIPTS":{"disable_on_trial":true}},"__legacy_pro_realtime":{"extends":"__legacy_pro","TV_PROSTUDIES":{"study_packages":["tv-prostudies"]},"SERVER_SIDE_ALERTS":{"limit":1000},"CAN_EDIT_PUBLIC_CHATS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"CUSTOM_FORMULAS":{},"INTRADAY_EXOTIC_CHARTS":{}},"__legacy_pro_premium":{"extends":"__legacy_pro_realtime","ALERTS_TRUE_SMS":{"disable_on_trial":true},"HISTORICAL_BARS":{"limit":20},"IDEA_SIGNATURE":{"disable_on_trial":true},"PROFILE_WEBSITE_FIELD":{"disable_on_trial":true},"ALERTS_NO_EXPIRATION":{},"PUBLISH_INVITE_ONLY_SCRIPTS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"ALERTS_ON_SECONDS":{},"PERMANENT_STREAM_RECORDS":{},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram","Website"],"disable_on_trial":true},"SECONDS_INTERVALS":{}},"pro":{"CHART_STORAGE":{"limit":5},"MULTIPLE_CHARTS":{"limit":2},"CUSTOM_INTERVALS":{},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"INDICATORS_ON_CHART":{"limit":5},"HISTORICAL_BARS":{"limit":10},"TV_VOLUMEBYPRICE":{"study_packages":["tv-volumebyprice"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":1},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":20},"SCREENER_ALERTS":{"limit":99999},"SCREENER_AUTO_REFRESH":{},"SCREENER_EXPORT_DATA":{},"DEEP_HISTORY_BACKTEST":{},"SCREENER_INTERVALS":{"interval":["1m","5m","15m","30m","1h","2h","4h","1D","1W","1M"]},"NO_SPONSORED_ADS":{},"STUDY_TEMPLATES":{"limit":99999},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"IDC_AVAILABLE_DELAY":{},"STATUS":{"disable_on_trial":true},"BAR_REPLAY_INTRADAY":{},"MULTIFLAGGED_SYMBOLS_LISTS":{},"SHOWS":{"disable_on_trial":true},"ALERTS_WEBHOOK":{},"DEEP_FUNDAMENTALS_HISTORY":{},"PUBLISH_PROTECTED_SCRIPTS":{"disable_on_trial":true},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram"],"disable_on_trial":true},"MULTI_MONITOR":{}},"pro_realtime":{"extends":"pro","CHART_STORAGE":{"limit":10},"MULTIPLE_CHARTS":{"limit":4},"INDICATORS_ON_CHART":{"limit":10},"TV_PROSTUDIES":{"study_packages":["tv-prostudies"]},"STUDY_ON_STUDY":{"limit":270,"child_limit":9},"SERVER_SIDE_ALERTS":{"limit":100},"CAN_EDIT_PUBLIC_CHATS":{"disable_on_trial":true},"SIMULTANEOUS_CONNECTIONS":{"limit":2},"EXPORT_CHART_DATA":{},"CUSTOM_FORMULAS":{},"INTRADAY_EXOTIC_CHARTS":{}},"pro_premium":{"extends":"pro_realtime","CHART_STORAGE":{"limit":99999},"MULTIPLE_CHARTS":{"limit":8},"INDICATORS_ON_CHART":{"limit":25},"HISTORICAL_BARS":{"limit":20},"STUDY_ON_STUDY":{"limit":270,"child_limit":24},"SERVER_SIDE_ALERTS":{"limit":400},"SIMULTANEOUS_CONNECTIONS":{"limit":5},"ALERTS_TRUE_SMS":{"disable_on_trial":true},"IDEA_SIGNATURE":{"disable_on_trial":true},"PROFILE_WEBSITE_FIELD":{"disable_on_trial":true},"ALERTS_NO_EXPIRATION":{},"PUBLISH_INVITE_ONLY_SCRIPTS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"ALERTS_ON_SECONDS":{},"PERMANENT_STREAM_RECORDS":{},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram","Website"],"disable_on_trial":true},"SECONDS_INTERVALS":{}},"pro_mini_alerts":{"extends":"free","SERVER_SIDE_ALERTS":{"limit":30},"SCREENER_ALERTS":{"limit":99999},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_mini_ads":{"extends":"free","NO_SPONSORED_ADS":{},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_mini_layouts":{"extends":"free","MULTIPLE_CHARTS":{"limit":8},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}},"pro_edu":{"extends":"free","CHART_STORAGE":{"limit":3},"MULTIPLE_CHARTS":{"limit":2},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"limit":5},"SCREENER_ALERTS":{"limit":99999},"SHOWS":{"disable_on_trial":true},"IDC_AVAILABLE_DELAY":{},"DEEP_FUNDAMENTALS_HISTORY":{}}}'),
                n = JSON.parse('{"cme":{"INDICATORS_ON_CHART":{"limit":99999}},"bovespa":{"INDICATORS_ON_CHART":{"limit":99999}},"qecomqa":{"INDICATORS_ON_CHART":{"limit":99999}}}');
            var r = i(305803),
                s = i(808276),
                a = i(588015);

            function l(e, t, i) {
                let o = window.user;
                i && (o = i);
                const n = c(e, t, o);
                return !!n && !(n[r.ProductFeatures.DISABLE_ON_TRIAL] && (!o || o.is_trial))
            }

            function c(e, t, i) {
                var r;
                let l = function e(t) {
                    const i = o[t];
                    return i ? i.extends ? Object.assign({}, e(i.extends), i) : i : null
                }(t || function(e) {
                    let t = window.user;
                    e && (t = e);
                    let i = (null == t ? void 0 : t.pro_plan) || s.ProPlans.Free;
                    const o = i !== s.ProPlans.Free && !(0, a.isTrialProduct)(i);
                    return o || (i = (0, a.getProductForTrial)(i)), o && t && !t.is_pro_limited && !t.new_pro_product_line && (i = "__legacy_" + i), i
                }(i));
                if (!l) return null;
                const c = null === (r = window.TradingView) || void 0 === r ? void 0 : r.widgetCustomer;
                return c && n[c] && (l = Object.assign({}, l, n[c])), l && l[e] || null
            }
        },
        305803: (e, t, i) => {
            "use strict";
            var o;
            i.d(t, {
                    ProductFeatures: () => o
                }),
                function(e) {
                    e.DISABLE_ON_TRIAL = "disable_on_trial", e.CUSTOM_INTERVALS = "CUSTOM_INTERVALS", e.CHART_STORAGE = "CHART_STORAGE", e.MULTIPLE_CHARTS = "MULTIPLE_CHARTS", e.MULTIPLE_WATCHLISTS = "MULTIPLE_WATCHLISTS", e.IMPORT_WATCHLISTS = "IMPORT_WATCHLISTS", e.EXPORT_WATCHLISTS = "EXPORT_WATCHLISTS", e.INDICATORS_ON_CHART = "INDICATORS_ON_CHART", e.STUDY_ON_STUDY = "STUDY_ON_STUDY", e.TICK_BY_TICK_PUSH_DATA = "TICK_BY_TICK_PUSH_DATA", e.SERVER_SIDE_ALERTS = "SERVER_SIDE_ALERTS", e.ALERTS_TRUE_SMS = "ALERTS_TRUE_SMS", e.PUBLISH_INVITE_ONLY_SCRIPTS = "PUBLISH_INVITE_ONLY_SCRIPTS", e.PUBLISH_PROTECTED_SCRIPTS = "PUBLISH_PROTECTED_SCRIPTS", e.SCREENER_ALERTS = "SCREENER_ALERTS", e.SCREENER_AUTO_REFRESH = "SCREENER_AUTO_REFRESH", e.SCREENER_EXPORT_DATA = "SCREENER_EXPORT_DATA", e.SCREENER_INTERVALS = "SCREENER_INTERVALS", e.SIMULTANEOUS_CONNECTIONS = "SIMULTANEOUS_CONNECTIONS", e.STUDY_TEMPLATES = "STUDY_TEMPLATES", e.CAN_EDIT_PUBLIC_CHATS = "CAN_EDIT_PUBLIC_CHATS", e.NO_SPONSORED_ADS = "NO_SPONSORED_ADS", e.IDC_AVAILABLE_DELAY = "IDC_AVAILABLE_DELAY", e.STATUS = "STATUS", e.ALERTS_NO_EXPIRATION = "ALERTS_NO_EXPIRATION", e.MULTIFLAGGED_SYMBOLS_LISTS = "MULTIFLAGGED_SYMBOLS_LISTS", e.BAR_REPLAY_INTRADAY = "BAR_REPLAY_INTRADAY", e.TV_VOLUMEBYPRICE = "TV_VOLUMEBYPRICE", e.ALERTS_WEBHOOK = "ALERTS_WEBHOOK", e.DEEP_FUNDAMENTALS_HISTORY = "DEEP_FUNDAMENTALS_HISTORY", e.EXPORT_CHART_DATA = "EXPORT_CHART_DATA", e.ALERTS_ON_SECONDS = "ALERTS_ON_SECONDS", e.PERMANENT_STREAM_RECORDS = "PERMANENT_STREAM_RECORDS", e.IDEA_SOCIAL_LINKS = "IDEA_SOCIAL_LINKS", e.EXTENDED_SOCIAL_LINKS = "EXTENDED_SOCIAL_LINKS", e.DEEP_HISTORY_BACKTEST = "DEEP_HISTORY_BACKTEST"
                }(o || (o = {}))
        },
        198006: (e, t, i) => {
            "use strict";
            var o = i(655119).TVLocalStorage,
                n = i(896276),
                r = i(853363);
            i(968724);
            var s = new n;
            TradingView.FeatureToggle = {
                force_prefix: "forcefeaturetoggle.",
                onChanged: new n,
                enableFeature: function(e) {
                    o.setItem(this.force_prefix + e, "true"), s.fire(e)
                },
                disableFeature: function(e) {
                    o.setItem(this.force_prefix + e, "false"), s.fire(e)
                },
                resetFeature: function(e) {
                    o.removeItem(this.force_prefix + e), s.fire(e)
                },
                onFeaturesStateChanged: function() {
                    return s
                }
            }, TradingView.isFeatureEnabled = function(e) {
                function t(e) {
                    try {
                        var t = r(e + function() {
                            if (window.user && window.user.id) return window.user.id;
                            var e = o.getItem("featuretoggle_seed");
                            return null !== e || (e = Math.floor(1e6 * Math.random()), o.setItem("featuretoggle_seed", e)), e
                        }());
                        return new DataView(t).getUint32(0, !0) / 4294967296
                    } catch (e) {
                        return .5
                    }
                }

                function n(i) {
                    return !("local" !== window.environment || ! function(e) {
                        var t = new RegExp("broker_[A-Z]+[a-zA-Z0-9_]+_dev", "g"),
                            i = new RegExp("hide_[A-Z]+[a-zA-Z0-9_]+_on_ios", "g"),
                            o = new RegExp("hide_[A-Z]+[a-zA-Z0-9_]+_on_android", "g"),
                            n = new RegExp("hide_[A-Z]+[a-zA-Z0-9_]+_on_mobile_web", "g");
                        return -1 === ["broker_FXCM_token_v2", "broker_TRADESTATION_V3", "broker_TRADOVATE_dev", "black_friday_mainpage", "black_friday_popup", "datawindow", "trading-fast-renew-oauth-token", "switching_trial_year_to_month_disabled", "switching_year_to_month_disabled", "default_year_billing_cycle_switcher", "marketing-analytics", "google-ads", "visible_address_fields_by_default", "slow-support-warning", "hide-trading-floating-toolbar", "tvcoins_donations", "save-short-streams", "details_disable_bid_ask", "vat_disabled", "pro_plan_upgrades_disabled", "pro_plan_downgrades_disabled", "unit_conversion", "disable_recaptcha_on_signup", "braintree-order-one-click-dropdown", "braintree-trial-implementation", "braintree-gopro-in-order-dialog", "braintree-apple-pay", "braintree-google-pay", "braintree-apple-pay-trial", "braintree-google-pay-trial", "hide_gopro_popup_upgrade_button", "yandex_metric_enabled", "broker_id_session", "remove_line_tools_from_content", "chart_storage_with_broker_name", "autosave_line_tools_immediately", "log_removing_line_tools_group", "oanda-european-accounts-warning", "mobile_show_bottom_panel", "disable_save_settings", "desktop_version_notification_enabled", "paperrest_2fa", "paperrest_preview", "favorites-in-broker-dropdown", "streams_stats_profile", "hide_ecomonic_events", "aggregating_page_pings", "mobile_trading_web", "mobile_trading_ios", "mobile_trading_android", "hide_real_brokers_on_mobile", "percentage_values_for_percentage_scale", "hide_ranges_label_colors", "disable_user_specific_encryption", "remove_scale_settings_from_menu", "enable_deep_history_backtesting", "show_checkbox_of_house_rules_to_idea_and_script"].indexOf(e) && -1 === e.indexOf("-maintenance") && !1 === t.test(e) && !1 === i.test(e) && !1 === o.test(e) && !1 === n.test(e)
                    }(i)) || (!e[i] || -1 !== e[i]) && (!!("true" === o.getItem(TradingView.FeatureToggle.force_prefix + i) || window.is_authenticated && "undefined" != typeof user && user.settings && "true" === user.settings[TradingView.FeatureToggle.force_prefix + i]) || !("false" === o.getItem(TradingView.FeatureToggle.force_prefix + i) || window.is_authenticated && "undefined" != typeof user && user.settings && "false" === user.settings[TradingView.FeatureToggle.force_prefix + i]) && (!!e[i] && (1 === e[i] || t(i) <= e[i])))
                }
                return TradingView.onWidget() || Promise.all([i.e(11216), i.e(4516), i.e(34604)]).then(i.t.bind(i, 4516, 23)).then(t => {
                    t.on("featuretoggle", (function(t) {
                        var i = n(t.name);
                        e[t.name] = t.state, i !== n(t.name) && s.fire(t.name)
                    }))
                }), n
            }(window.featureToggleState || {}), t.FeatureToggle = TradingView.FeatureToggle, t.isFeatureEnabled = TradingView.isFeatureEnabled, t.onFeaturesStateChanged = TradingView.FeatureToggle.onFeaturesStateChanged.bind(TradingView.FeatureToggle)
        },
        828846: (e, t, i) => {
            "use strict";

            function o(e) {
                if (e instanceof Error) return e.stack || e.message;
                try {
                    return e.outerHTML.slice(0, 1024)
                } catch (e) {}
                try {
                    if (void 0 !== e) return JSON.stringify(e).slice(0, 1024)
                } catch (e) {}
                return String(e)
            }

            function n() {
                window.__tv_js_errors || (window.__tv_js_errors = []), window.addEventListener("error", e => {
                    const t = (new Date).toISOString();
                    window.__tv_js_errors.push(`${t} ${e.message||"JS error"}. ${e.filename||"<unknown url>"}, line ${e.lineno}, col ${e.colno}.\nError: ` + o(e.error))
                }, !1), window.addEventListener("unhandledrejection", e => {
                    const t = (new Date).toISOString();
                    window.__tv_js_errors.push(t + " Unhandled rejection.\nReason: " + o(e.reason))
                }, !1), document.addEventListener("securitypolicyviolation", e => {
                    var t, i;
                    const n = (new Date).toISOString(),
                        r = "report" === e.disposition ? "CSP report-only" : "CSP violation";
                    window.__tv_js_errors.push(`${n} ${r}: ${e.violatedDirective||e.effectiveDirective}. ${e.sourceFile||"<unknown url>"}, line ${null!==(t=e.lineno)&&void 0!==t?t:e.lineNumber}, col ${null!==(i=e.colno)&&void 0!==i?i:e.columnNumber}.\nBlocked URI: ${e.blockedURL||e.blockedURI}\nSample: ${e.sample}\nTarget: ` + o(e.target))
                }, !1)
            }
            i.d(t, {
                install: () => n
            })
        },
        288001: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                unsubscribe: () => l,
                on: () => c,
                subscribe: () => d,
                subscribeToAll: () => u,
                emit: () => h,
                emitOnce: () => p
            });
            var o = i(896276),
                n = i.n(o);
            const r = {},
                s = [],
                a = {};

            function l(e, t, i) {
                r[e].unsubscribe(i, t)
            }

            function c(e, t, i) {
                d(e, t, i)
            }

            function d(e, t, i, o) {
                r.hasOwnProperty(e) || (r[e] = new(n())), a[e] ? t.call(i) : r[e].subscribe(i, t, o)
            }

            function u(e) {
                s.push(e)
            }

            function h(e, ...t) {
                const i = [e].concat(t);
                s.forEach(e => {
                    e.apply(null, i)
                }), r.hasOwnProperty(e) && r[e].fire.apply(r[e], t)
            }

            function p(e) {
                a[e] && console.warn(`Something went wrong: emitOnce called multiple times with same event (${e})`), a[e] = !0, h.apply(null, arguments)
            }
        },
        626083: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                Modifiers: () => o.Modifiers,
                createGroup: () => h,
                pressedKeys: () => u,
                registerWindow: () => p,
                unregisterWindow: () => g
            });
            var o = i(611877),
                n = i(620887),
                r = i(765066),
                s = i.n(r);
            var a = i(929098);
            class l {
                constructor(e, t) {
                    this._group = e, this.hotkey = t.hotkey, this.handler = t.handler, this.desc = t.desc, this.element = t.element || null, t.isDisabled ? "function" == typeof t.isDisabled ? this.isDisabled = t.isDisabled : this.isDisabled = () => !0 : this.isDisabled = () => !1
                }
                destroy() {
                    this._group && (this._group.remove(this), this._group = null)
                }
            }
            class c {
                constructor(e, t) {
                    this._actions = [], this._manager = e, this.modal = !(!t || !t.modal), t && (this.desc = t.desc), t && t.isDisabled ? "function" == typeof t.isDisabled ? this.isDisabled = t.isDisabled : this.isDisabled = () => !0 : this.isDisabled = () => !1, this._manager.registerGroup(this)
                }
                add(e) {
                    const t = new l(this, e);
                    return this._actions.push(t), t
                }
                remove(e) {
                    for (let t = this._actions.length; t-- > 0;) this._actions[t] === e && this._actions.splice(t, 1)
                }
                handleHotkey(e, t) {
                    for (let i = this._actions.length; i-- > 0;) {
                        const n = this._actions[i];
                        if (n.hotkey === e && ((!n.element || t.target && n.element.contains(t.target)) && !n.isDisabled())) return n.handler(t), t.preventDefault(), (0, a.trackEvent)("Keyboard Shortcuts", (0, o.humanReadableHash)(e)), !0
                    }
                    return !1
                }
                promote() {
                    this._manager.promoteGroup(this)
                }
                destroy() {
                    this._actions.length = 0, this._manager.unregisterGroup(this)
                }
            }
            const d = new class {
                    constructor() {
                        this._groups = [], this._pressedKeys = new(s())(0), this._keyDownListener = e => {
                            if (e.defaultPrevented) return;
                            const t = (0, o.hashFromEvent)(e);
                            if (this._pressedKeys.setValue(t), !(0, n.isNativeUIInteraction)(t, e.target))
                                for (let i = this._groups.length; i-- > 0;) {
                                    const o = this._groups[i];
                                    if (!o.isDisabled()) {
                                        if (o.handleHotkey(t, e)) return;
                                        if (o.modal) return
                                    }
                                }
                        }, this._keyUpListener = e => {
                            const t = (0, o.hashFromEvent)(e);
                            this._pressedKeys.setValue(t)
                        }, this._blurEvent = () => {
                            this._pressedKeys.setValue(0)
                        }, this._mouseEvent = e => {
                            const t = (0, o.modifiersFromEvent)(e),
                                i = 255 & this._pressedKeys.value();
                            this._pressedKeys.setValue(t | i)
                        }
                    }
                    listen(e) {
                        e.addEventListener("keydown", this._keyDownListener), e.addEventListener("keyup", this._keyUpListener), e.addEventListener("blur", this._blurEvent), e.addEventListener("mousemove", this._mouseEvent)
                    }
                    unlisten(e) {
                        e.removeEventListener("keydown", this._keyDownListener), e.removeEventListener("keyup", this._keyUpListener), e.removeEventListener("blur", this._blurEvent), e.removeEventListener("mousemove", this._mouseEvent)
                    }
                    registerGroup(e) {
                        this._groups.push(e)
                    }
                    unregisterGroup(e) {
                        for (let t = this._groups.length; t--;) this._groups[t] === e && this._groups.splice(t, 1)
                    }
                    promoteGroup(e) {
                        let t = this._groups.length - 1;
                        for (let i = this._groups.length; i--;) {
                            if (this._groups[i] === e) return void(i !== t && (this._groups.splice(i, 1), this._groups.splice(t, 0, e)));
                            this._groups[i].modal && (t = i - 1)
                        }
                    }
                    pressedKeys() {
                        return this._pressedKeys
                    }
                },
                u = d.pressedKeys();

            function h(e) {
                return new c(d, e)
            }

            function p(e) {
                d.listen(e)
            }

            function g(e) {
                d.unlisten(e)
            }
            p(window)
        },
        611877: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                isMacKeyboard: () => n,
                Modifiers: () => r,
                modifiersFromEvent: () => s,
                hashFromEvent: () => a,
                hashShiftPlusEnter: () => l,
                humanReadableModifiers: () => c,
                humanReadableHash: () => u
            });
            var o = i(968724);
            const n = (0, o.isMac)() || o.CheckMobile.iOS();
            var r;

            function s(e) {
                let t = 0;
                return e.shiftKey && (t += 1024), e.altKey && (t += 512), e.ctrlKey && (t += 256), e.metaKey && (t += 2048), t
            }

            function a(e) {
                return s(e) | e.keyCode
            }! function(e) {
                e[e.None = 0] = "None", e[e.Alt = 512] = "Alt", e[e.Shift = 1024] = "Shift", e[e.Mod = n ? 2048 : 256] = "Mod", e[e.Control = 256] = "Control", e[e.Meta = 2048] = "Meta"
            }(r || (r = {}));
            const l = 1037;

            function c(e, t = !n) {
                let i = "";
                return 256 & e && (i += n ? "^" : "Ctrl", t && (i += " + ")), 512 & e && (i += n ? "⌥" : "Alt", t && (i += " + ")), 1024 & e && (i += n ? "⇧" : "Shift", t && (i += " + ")), 2048 & e && (i += n ? "⌘" : "Win", t && (i += " + ")), i
            }
            const d = {
                9: "⇥",
                13: "↵",
                27: "Esc",
                8: n ? "⌫" : "Backspace",
                32: "Space",
                35: "End",
                36: "Home",
                37: "←",
                38: "↑",
                39: "→",
                40: "↓",
                45: "Ins",
                46: "Del",
                188: ",",
                191: "/"
            };
            for (let e = 1; e <= 16; e++) d[e + 111] = "F" + e;

            function u(e) {
                let t = c(e);
                const i = 255 & e;
                return t += i in d ? d[i] : String.fromCharCode(i), t
            }
        },
        620887: (e, t, i) => {
            "use strict";
            i.d(t, {
                isTextEditingField: () => n,
                isNativeUIInteraction: () => r
            });
            var o = i(611877);

            function n(e) {
                if ("INPUT" === e.tagName) {
                    const t = e.type;
                    return "text" === t || "email" === t || "number" === t || "password" === t || "search" === t || "tel" === t || "url" === t
                }
                return "TEXTAREA" === e.tagName || e.isContentEditable
            }

            function r(e, t) {
                if (!t) return !1;
                const i = 255 & e;
                if (27 === i || i >>> 4 == 7) return !1;
                switch (e ^ i) {
                    case o.Modifiers.Alt:
                        return (38 === i || 40 === i) && "SELECT" === t.tagName || n(t);
                    case o.Modifiers.Alt + o.Modifiers.Shift:
                        return n(t);
                    case o.Modifiers.Mod:
                        if (67 === i || !o.isMacKeyboard && 45 === i) {
                            const e = t.ownerDocument && t.ownerDocument.getSelection();
                            if (e && !e.isCollapsed) return !0
                        }
                        return n(t);
                    case o.Modifiers.Mod + o.Modifiers.Shift:
                        return i >= 33 && i <= 40 && n(t);
                    case o.Modifiers.Shift:
                    case 0:
                        return !!(9 !== i || t.ownerDocument && t !== t.ownerDocument.body && t !== t.ownerDocument.documentElement) && ((13 === i || 32 === i || ! function(e) {
                            if ("BUTTON" === e.tagName) return !0;
                            if ("INPUT" === e.tagName) {
                                const t = e.type;
                                if ("submit" === t || "button" === t || "reset" === t || "checkbox" === t || "radio" === t) return !0
                            }
                            return !1
                        }(t)) && ("form" in t || t.isContentEditable))
                }
                return !1
            }
        },
        604346: (e, t, i) => {
            "use strict";
            i.d(t, {
                updateInitData: () => s,
                getInitData: () => a,
                getFreshInitData: () => l,
                deleteField: () => c
            });
            var o = i(416282);
            const n = (0, i(987380).getLogger)("Common.InitData"),
                r = window.initData || {};

            function s() {
                window.initData && window.initData !== r && (Object.assign(r, window.initData), window.initData = r);
                const e = document.querySelectorAll('script[type="application/prs.init-data+json"]');
                for (let t = 0; t < e.length; t++) {
                    const i = e[t];
                    try {
                        const e = JSON.parse((0, o.ensureNotNull)(i.textContent));
                        Object.assign(r, e)
                    } catch (e) {
                        n.logWarn("Failed to parse initData element. " + e)
                    } finally {
                        (0, o.ensureNotNull)(i.parentNode).removeChild(i)
                    }
                }
            }

            function a() {
                return r
            }

            function l() {
                return s(), r
            }

            function c(e) {
                delete r[e]
            }
        },
        152946: (e, t, i) => {
            "use strict";
            i.d(t, {
                linking: () => m
            });
            var o = i(316152),
                n = i(765066),
                r = i.n(n),
                s = i(307833),
                a = i(620554),
                l = i(987380),
                c = i(342098),
                d = i(604346),
                u = i(771073),
                h = i(505417);
            const p = (0, l.getLogger)("Linking");
            var g;
            ! function(e) {
                e[e.NotBound = 0] = "NotBound", e[e.BoundToWidget = 1] = "BoundToWidget", e[e.BoundToModel = 2] = "BoundToModel"
            }(g || (g = {}));
            const m = new class {
                constructor() {
                    this._watchedSymbol = new(r()), this._seriesShortSymbol = new(r()), this._proSymbol = new(r()), this._watchedInterval = new(r()), this._watchedIntraday = new(r()), this._watchedSeconds = new(r()), this._watchedTicks = new(r()), this._watchedRange = new(r()), this._watchedSupportedResolutions = new(r()), this._watchedSupportedChartStyles = new(r())([]), this._symbolNamesList = new(r()), this._chartWidgetBindingState = g.NotBound, this._activeChartWidget = null, this._watchedSymbolListenerBound = this._watchedSymbolListener.bind(this), this._watchedIntervalListenerBound = this._watchedIntervalListener.bind(this), this._onSymbolLinkBound = this._onSymbolLink.bind(this), this._searchCharts = null, this._searchChartsLoadDebounced = null, this._selfEmit = !1, this._preventFeedBySymbol = !1, this._feedBySymbolDebounceCounter = 0
                }
                get symbol() {
                    return this._watchedSymbol
                }
                get proSymbol() {
                    return this._proSymbol
                }
                get symbolNamesList() {
                    return this._symbolNamesList
                }
                get seriesShortSymbol() {
                    return this._seriesShortSymbol.readonly()
                }
                get interval() {
                    return this._watchedInterval
                }
                get intraday() {
                    return this._watchedIntraday.readonly()
                }
                get seconds() {
                    return this._watchedSeconds.readonly()
                }
                get ticks() {
                    return this._watchedTicks.readonly()
                }
                get range() {
                    return this._watchedRange.readonly()
                }
                get supportedResolutions() {
                    return this._watchedSupportedResolutions.readonly()
                }
                get supportedChartStyles() {
                    return this._watchedSupportedChartStyles.readonly()
                }
                get preventFeedBySymbol() {
                    return this._preventFeedBySymbol
                }
                bindToChartWidget(e) {
                    if (this.unbindFromChartWidget(), this._activeChartWidget = e, e.hasModel()) return void this._onChartModelCreated(e.model());
                    e.modelCreated().subscribe(this, this._onChartModelCreated), this._chartWidgetBindingState = g.BoundToWidget;
                    const t = e.properties().childs().mainSeriesProperties.childs();
                    this._watchedSymbol.setValue(t.symbol.value()), this._watchedInterval.setValue(t.interval.value())
                }
                unbindFromChartWidget() {
                    switch (this._chartWidgetBindingState) {
                        case g.BoundToWidget:
                            if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
                            this._activeChartWidget.modelCreated().unsubscribe(this, this._onChartModelCreated);
                            break;
                        case g.BoundToModel:
                            this._symbolProperty().unsubscribe(this, this._onSymbolPropertyChange), this._watchedSymbol.unsubscribe(this._watchedSymbolListenerBound), this._mainSeries().dataEvents().symbolResolved().unsubscribe(this, this._updateSeriesSymbolInfo), this._mainSeries().dataEvents().symbolError().unsubscribe(this, this._updateSeriesSymbolInfo), this._intervalProperty().unsubscribe(this, this._onIntervalPropertyChange), this._watchedInterval.unsubscribe(this._watchedIntervalListenerBound), delete this._watchedSymbol.hook, delete this._watchedSymbol.writeLock
                    }
                    this._activeChartWidget = null, this._chartWidgetBindingState = g.NotBound
                }
                getChartWidget() {
                    return this._activeChartWidget
                }
                bindToChartWidgetCollection(e) {
                    this._chartWidgetCollection = e, this.unbindFromChartWidget(), e.activeChartWidget.subscribe(e => {
                        this.unbindFromChartWidget(), this.bindToChartWidget(e)
                    }, {
                        callWithLast: !0
                    })
                }
                bindToSearchCharts(e) {
                    this.unbindFromSearchCharts(), this._searchCharts = e, e.onSearchBySymbol.subscribe(this, this._onSearchBySymbol), e.loadingSymbol.subscribe(e => {
                        !1 === e && (this._feedBySymbolDebounceCounter = 0)
                    }), this._watchedSymbol.subscribe(this._onSymbolLinkBound)
                }
                unbindFromSearchCharts() {
                    this._searchCharts && (this._searchCharts.onSearchBySymbol.unsubscribe(this, this._onSearchBySymbol), this._watchedSymbol.unsubscribe(this._onSymbolLinkBound), this._searchCharts = null)
                }
                setPreventFeedBySymbol(e) {
                    this._preventFeedBySymbol = e
                }
                _onSearchBySymbol(e) {
                    if (!e.resolved_symbol) throw new Error("no resolved_symbol");
                    this._selfEmit = !0, this._watchedSymbol.setValue(e.resolved_symbol), this._selfEmit = !1
                }
                _onSymbolLink(e) {
                    if (!this._selfEmit) {
                        if (!this._searchCharts) {
                            const e = "No search charts defined";
                            throw p.logError(e), new Error(e)
                        }
                        this._preventFeedBySymbol || this._loadSearchCharts(e)
                    }
                }
                _loadSearchCharts(e) {
                    if (!this._searchCharts) {
                        const e = "No search charts defined";
                        throw p.logError(e), new Error(e)
                    }
                    if (this._searchChartsLoadDebounced) return void(this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++, this._searchChartsLoadDebounced(e)));
                    const t = e => this._searchCharts ? (!0 === this._searchCharts.loadingSymbol.value() ? this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++, this._searchChartsLoadDebounced = (0, o.default)(t, 2e3),
                        this._searchChartsLoadDebounced(e)) : this._searchChartsLoadDebounced = null, this._searchCharts.feedBySymbol.call(this._searchCharts, e)) : () => {};
                    !0 === this._searchCharts.loadingSymbol.value() ? this._feedBySymbolDebounceCounter < 100 && (this._feedBySymbolDebounceCounter++, this._searchChartsLoadDebounced = (0, o.default)(t, 2e3), this._searchChartsLoadDebounced(e)) : this._searchCharts.feedBySymbol(e)
                }
                _mainSeries() {
                    if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
                    return this._activeChartWidget.model().mainSeries()
                }
                _properties() {
                    return this._mainSeries().properties()
                }
                _symbolProperty() {
                    return this._properties().symbol
                }
                _intervalProperty() {
                    return this._properties().interval
                }
                _watchedSymbolListener(e) {
                    this._symbolProperty().value() !== e && (this._chartWidgetCollection.setSymbol(e), this._sendSnowplowAnalytics())
                }
                _sendSnowplowAnalytics() {
                    if (window.user.do_not_track) return;
                    const e = this._mainSeries(),
                        t = () => {
                            e.dataEvents().symbolResolved().unsubscribe(this, i)
                        },
                        i = i => {
                            (0, u.getTracker)().then(e => {
                                if (null === e) return;
                                const t = this._chartWidgetCollection.layout.value(),
                                    o = this._chartWidgetCollection.metaInfo.uid.value() || "";
                                e.trackChartSymbols(i.pro_name, i.type, t, o)
                            }), e.dataEvents().symbolError().unsubscribe(this, t)
                        };
                    e.dataEvents().symbolResolved().subscribe(this, i, !0), e.dataEvents().symbolError().subscribe(this, t, !0)
                }
                _onSymbolPropertyChange() {
                    const e = this._symbolProperty().value() !== this._watchedSymbol.value();
                    this._watchedSymbol.setValue(this._symbolProperty().value()), e && this._chartWidgetCollection.setSymbol(this._symbolProperty().value())
                }
                _onSymbolResolved(e) {
                    const t = this._mainSeries().symbolInfo();
                    t && this._applyValuesFromSymbolInfo(t)
                }
                _applyValuesFromSymbolInfo(e) {
                    const t = e.pro_name || s.enabled("trading_terminal") && (e.full_name || e.name) || "";
                    this._proSymbol.setValue(t), e.aliases && this._symbolNamesList.setValue(e.aliases)
                }
                _updateSeriesSymbolInfo() {
                    this._seriesShortSymbol.setValue(this._properties().shortName.value());
                    const e = this._mainSeries().symbolInfo();
                    if (e) {
                        this._applyValuesFromSymbolInfo(e);
                        let t = (0, h.allChartStyles)();
                        (0, a.isCloseBasedSymbol)(e) && (t = t.filter(e => (0, a.isSingleValueBasedStyle)(e))), this._watchedSupportedChartStyles.setValue(t), this._watchedIntraday.setValue(!!e.has_intraday), this._watchedSeconds.setValue(!!e.has_seconds), this._watchedTicks.setValue(!(0, a.isCloseBasedSymbol)(e) && !!e.has_ticks), this._watchedRange.setValue(!(0, a.isCloseBasedSymbol)(e))
                    } else this._watchedIntraday.deleteValue(), this._watchedSeconds.deleteValue(), this._watchedTicks.deleteValue(), this._watchedRange.deleteValue(), this._proSymbol.deleteValue()
                }
                _watchedIntervalListener(e) {
                    this._intervalProperty().value() !== e && this._chartWidgetCollection.setResolution(e)
                }
                _onIntervalPropertyChange() {
                    const e = this._intervalProperty().value() !== this._watchedInterval.value();
                    this._watchedInterval.setValue(this._intervalProperty().value()), e && this._chartWidgetCollection.setResolution(this._intervalProperty().value())
                }
                _onChartModelCreated(e) {
                    if (!this._activeChartWidget) throw new Error("ChartWidget is undefined");
                    this._chartWidgetBindingState = g.BoundToModel,
                        this._activeChartWidget.modelCreated().unsubscribe(this, this._onChartModelCreated);
                    const t = this._symbolProperty();
                    t.subscribe(this, this._onSymbolPropertyChange), this._watchedSymbol.setValue(t.value()), this._watchedSymbol.subscribe(this._watchedSymbolListenerBound);
                    const i = this._mainSeries();
                    i.dataEvents().symbolResolved().subscribe(this, this._onSymbolResolved), this._watchedSymbol.hook = e => (i.symbolSameAsCurrent(e) && (e = i.symbol()), e), i.dataEvents().symbolResolved().subscribe(this, this._updateSeriesSymbolInfo), i.dataEvents().symbolError().subscribe(this, this._updateSeriesSymbolInfo), i.dataEvents().symbolNotPermitted().subscribe(this, this._updateSeriesSymbolInfo), i.dataEvents().symbolGroupNotPermitted().subscribe(this, this._updateSeriesSymbolInfo), this._updateSeriesSymbolInfo();
                    const o = this._intervalProperty();
                    o.subscribe(this, this._onIntervalPropertyChange), this._watchedInterval.setValue(o.value()), this._watchedInterval.subscribe(this._watchedIntervalListenerBound), this._activeChartWidget.readOnly() && (this._watchedSymbol.writeLock = !0)
                }
            }; {
                const e = (0, d.getFreshInitData)().symbolInfo,
                    t = e ? e.pro_symbol : c.getValue("editchart.model.symbol", window.DEFAULT_SYMBOL);
                m.symbol.setValue(t)
            }
            window.TradingViewApi || (window.TradingViewApi = {
                linking: m
            })
        },
        655119: (e, t, i) => {
            "use strict";
            const {
                getLogger: o
            } = i(987380), n = o("TVLocalStorage");
            var r = function() {
                try {
                    this.isAvailable = !0, this.localStorage = window.localStorage, this.localStorage.setItem("tvlocalstorage.available", "true")
                } catch (e) {
                    delete this.isAvailable, delete this.localStorage
                }
                this._updateLength();
                try {
                    this._report()
                } catch (e) {}
            };
            r.prototype._report = function() {
                if (this.isAvailable) {
                    const e = 10,
                        t = [];
                    for (let e = 0; e < this.localStorage.length; e++) {
                        const i = this.key(e);
                        t.push({
                            key: i,
                            length: String(this.getItem(i)).length
                        })
                    }
                    t.sort((e, t) => t.length - e.length);
                    const i = t.slice(0, e);
                    t.sort((e, t) => t.key.length - e.key.length);
                    const o = t.slice(0, e);
                    n.logNormal("Total amount of keys in Local Storage: " + this.length), n.logNormal(`Top ${e} keys with longest values: ${JSON.stringify(i)}`), n.logNormal(`Top ${e} longest key names: ${JSON.stringify(o)}`);
                    try {
                        navigator.storage.estimate().then(e => {
                            n.logNormal("Storage estimate: " + JSON.stringify(e))
                        })
                    } catch (e) {}
                }
            }, r.prototype.length = 0, r.prototype.isAvailable = !1, r.prototype.localStorage = {
                "tvlocalstorage.available": "false"
            }, r.prototype._updateLength = function() {
                if (this.isAvailable) this.length = this.localStorage.length;
                else {
                    var e, t = 0;
                    for (e in this.localStorage) this.localStorage.hasOwnProperty(e) && t++;
                    this.length = t
                }
            }, r.prototype.key = function(e) {
                return this.isAvailable ? this.localStorage.key(e) : Object.keys(this.localStorage)[e]
            }, r.prototype.getItem = function(e) {
                return this.isAvailable ? this.localStorage.getItem(e) : void 0 === this.localStorage[e] ? null : this.localStorage[e]
            }, r.prototype.setItem = function(e, t) {
                this.isAvailable ? this.localStorage.setItem(e, t) : this.localStorage[e] = t, this._updateLength()
            }, r.prototype.removeItem = function(e) {
                this.isAvailable ? this.localStorage.removeItem(e) : delete this.localStorage[e], this._updateLength()
            }, r.prototype.clear = function() {
                this.isAvailable ? this.localStorage.clear() : this.localStorage = {}, this._updateLength()
            };
            var s = function(e) {
                this.storage = e
            };
            s.prototype.getItem = function(e) {
                return Promise.resolve(this.storage.getItem(e))
            }, s.prototype.setItem = function(e, t) {
                return Promise.resolve(this.storage.setItem(e, t))
            }, window.TVLocalStorage = new r, window.TVLocalStorageAsync = new s(window.TVLocalStorage), e.exports = {
                TVLocalStorage: window.TVLocalStorage,
                TVLocalStorageAsync: window.TVLocalStorageAsync
            }
        },
        372777: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                LogoSize: () => o,
                LogoUrlResolver: () => s,
                getLogoUrlResolver: () => l
            });
            var o, n = i(416282),
                r = i(604346);
            ! function(e) {
                e[e.Medium = 0] = "Medium", e[e.Large = 1] = "Large"
            }(o || (o = {}));
            class s {
                constructor(e) {
                    (0, n.assert)("" !== e, "S3 base url must be a non-empty string"), this._baseUrl = e
                }
                getSymbolLogoUrl(e, t) {
                    switch ((0, n.assert)("" !== e, "logo id must be a non-empty string"), t) {
                        case o.Medium:
                            return this._baseUrl + (e + ".svg");
                        case o.Large:
                            return this._baseUrl + (e + "--big.svg")
                    }
                }
                getCountryFlagUrl(e, t) {
                    return this.getSymbolLogoUrl("country/" + e, t)
                }
                getCryptoLogoUrl(e, t) {
                    return this.getSymbolLogoUrl("crypto/" + e, t)
                }
                getProviderLogoUrl(e, t) {
                    return this.getSymbolLogoUrl("provider/" + e, t)
                }
            }
            let a;

            function l() {
                if (!a) {
                    const e = (0, r.getInitData)(),
                        t = e.settings ? e.settings.S3_LOGO_SERVICE_BASE_URL : "";
                    a = new s(t)
                }
                return a
            }
        },
        758988: (e, t, i) => {
            "use strict";
            i.d(t, {
                breakpoints: () => o,
                mobileFirstBreakpoints: () => n,
                mobileFirstLegacyBreakpoints: () => r
            });
            const o = {
                    desktop: 1 / 0,
                    desktopHd: 1919,
                    phone: 767,
                    "phone-vertical": 479,
                    tablet: 1019
                },
                n = {
                    base: 0,
                    "media-mf-phone-vertical": 320,
                    "media-mf-phone-landscape": 568,
                    "media-mf-tablet-vertical": 768,
                    "media-mf-tablet-landscape": 1024,
                    "media-mf-laptop": 1280,
                    "media-mf-desktop-medium": 1440,
                    "media-mf-desktop-large": 1920,
                    "media-mf-desktop-extra-large": 2560
                },
                r = {
                    "media-mf-legacy-phone-vertical": 330,
                    "media-mf-legacy-phone": 480,
                    "media-mf-legacy-notebook": 1020,
                    "media-mf-legacy-desktop-medium": 1480,
                    "media-mf-legacy-desktop": 1531
                }
        },
        751193: (e, t, i) => {
            "use strict";
            i.d(t, {
                getScrollbarWidth: () => o,
                matchMediaMinMax: () => n,
                getContentWidth: () => r,
                setStyle: () => s,
                getCSSProperty: () => a,
                getCSSPropertyNumericValue: () => l
            });
            const o = (() => {
                let e;
                return () => {
                    var t;
                    if (void 0 === e) {
                        const i = document.createElement("div"),
                            o = i.style;
                        o.visibility = "hidden", o.width = "100px", o.msOverflowStyle = "scrollbar", document.body.appendChild(i);
                        const n = i.offsetWidth;
                        i.style.overflow = "scroll";
                        const r = document.createElement("div");
                        r.style.width = "100%", i.appendChild(r);
                        const s = r.offsetWidth;
                        null === (t = i.parentNode) || void 0 === t || t.removeChild(i), e = n - s
                    }
                    return e
                }
            })();

            function n(e, t) {
                return t === 1 / 0 ? window.matchMedia(`(min-width: ${e}px)`) : window.matchMedia(`(min-width: ${e}px) and (max-width: ${t}px)`)
            }

            function r(e) {
                if (null === e) return;
                return l(e, "width") - l(e, "padding-left") - l(e, "padding-right")
            }

            function s(e, t, i) {
                null !== e && e.style.setProperty(t, i)
            }

            function a(e, t) {
                return getComputedStyle(e, null).getPropertyValue(t)
            }

            function l(e, t) {
                return parseInt(a(e, t))
            }
        },
        344020: (e, t, i) => {
            "use strict";
            i.d(t, {
                mediaState: () => c
            });
            var o = i(194795),
                n = i.n(o),
                r = i(795498),
                s = i(758988),
                a = i(751193);
            class l extends(n()) {
                constructor() {
                    super(),
                        this.width = 0, this.height = 0, this.device = null, this.breakpoints = s.breakpoints, this._checkDevice(), window.addEventListener("resize", this._checkDevice), Object.entries(s.breakpoints).sort(([e, t], [i, o]) => t - o).forEach(([e, t], i, o) => {
                            let n;
                            if (0 !== i) {
                                const [, e] = o[i - 1];
                                n = e + 1
                            } else n = 0;
                            const r = (0, a.matchMediaMinMax)(n, t);
                            r.matches && this._setNewDevice(e), r.addListener(t => {
                                t.matches && (this._checkDevice(), this._setNewDevice(e))
                            })
                        }), (0, r.whenDocumentReady)(this._checkDevice.bind(this)), this.isPhoneSizeDevice.bind(this)
                }
                isPhoneSizeDevice() {
                    return "phone" === this.device || "phone-vertical" === this.device
                }
                _checkDevice() {
                    this.width = window.innerWidth, this.height = window.innerHeight
                }
                _setNewDevice(e) {
                    const t = this.device;
                    this.device = e, this.trigger("changeDevice", [e, t])
                }
            }
            const c = new l
        },
        640142: (e, t, i) => {
            "use strict";
            i.d(t, {
                isOnMobileAppPage: () => n,
                urlWithMobileAppParams: () => r
            });
            var o = i(932010);

            function n(e, t = !1) {
                const {
                    searchParams: i
                } = new URL(String(location)), n = o.get("tv_app") || "";
                let r = "true" === i.get("mobileapp_new"),
                    s = "true" === i.get("mobileapp");
                return t || (r || (r = ["android", "android_nps"].includes(n)), s || (s = "ios" === n)), !("new" !== e && "any" !== e || !r) || !("new" === e || !s)
            }

            function r(e) {
                if (n("new")) {
                    const t = new URL(e, location.href);
                    t.searchParams.set("mobileapp_new", "true"), e = t.toString()
                }
                if (n("old")) {
                    const t = new URL(e, location.href);
                    t.searchParams.set("mobileapp", "true"), e = t.toString()
                }
                return e
            }
        },
        551762: (e, t, i) => {
            "use strict";
            const o = i(307833);
            window.TradingView = window.TradingView || {};
            var n, r, s, a, l, c, d = TradingView.postMessageWrapper = (r = {}, s = {}, a = {}, l = 0, c = 0, window.addEventListener && window.addEventListener("message", (function(e) {
                var t;
                try {
                    t = JSON.parse(e.data), o.enabled("charting_library_debug_mode") && console.log("PostMessage: incoming message: " + JSON.stringify(t))
                } catch (e) {
                    return
                }
                if (t && t.provider && "TradingView" === t.provider)
                    if ("get" === t.type) {
                        if (!s[t.name]) return;
                        s[t.name].forEach((function(e) {
                            "function" == typeof e && e.call(t, t.data, (function(e) {
                                var i = {
                                    id: t.id,
                                    type: "on",
                                    name: t.name,
                                    client_id: t.client_id,
                                    data: e,
                                    provider: "TradingView"
                                };
                                n.postMessage(JSON.stringify(i), "*")
                            }))
                        }))
                    } else if ("on" === t.type) r[t.client_id] && r[t.client_id][t.id] && (r[t.client_id][t.id].call(t, t.data), delete r[t.client_id][t.id]);
                else if ("post" === t.type) {
                    if (!s[t.name]) return;
                    s[t.name].forEach((function(e) {
                        "function" == typeof e && e.call(t, t.data, (function() {}))
                    }))
                }
            })), function(e, t) {
                r[t] = {}, a[t] = e, n = e;
                var i = "";
                return {
                    on: function(e, t, i) {
                        s[e] && i || (s[e] = []), s[e].push(t)
                    },
                    get: function(e, i, o) {
                        var n = {
                            id: l++,
                            type: "get",
                            name: e,
                            client_id: t,
                            data: i,
                            provider: "TradingView"
                        };
                        r[t][n.id] = o, a[t].postMessage(JSON.stringify(n), "*")
                    },
                    post: function(e, t, o) {
                        var n = {
                            id: c++,
                            type: "post",
                            name: t,
                            client_id: i,
                            data: o,
                            provider: "TradingView"
                        };
                        e && "function" == typeof e.postMessage && e.postMessage(JSON.stringify(n), "*")
                    },
                    setClientId: function(e) {
                        i = e
                    }
                }
            });
            e.exports = d
        },
        4516: (e, t, i) => {
            "use strict";
            var o = i(75443),
                n = i(541962).TVXWindowEvents,
                r = i(929098).trackEvent,
                s = i(655119).TVLocalStorage,
                a = i(504021).PushStream,
                l = i(805958).ConnectionStatus,
                c = i(110164).telemetry,
                d = i(987380),
                u = d.getLogger,
                h = d.getRawLogHistory,
                p = u("PushStreamMultiplexer"),
                g = function() {
                    var e, t = null,
                        i = null,
                        d = {},
                        u = {},
                        g = [],
                        m = null,
                        _ = "multiplexer-bc-",
                        f = "pushStreamMultiplexerState.",
                        v = l.Closed,
                        w = l.Closed,
                        y = !1,
                        b = {
                            _codeParams: function(e) {
                                return (e = Array.prototype.slice.call(e)).push((new Date).getTime()), JSON.stringify(e)
                            },
                            _decodeParams: function(e) {
                                var t = JSON.parse(e);
                                return t.pop(), t
                            },
                            guid: o.guid(),
                            _init: function() {
                                if (this._needInstantiating()) this._instantiatePushStream();
                                else {
                                    var e = this._decodeConnectionStatus(s.getItem(this._connectionStatusKey));
                                    v = e[0], w = e[1]
                                }
                                setTimeout((function() {
                                    b.isConnected() || (p.logNormal("Not connected for a while after init..."), r("pushstream", "not connected after init", navigator.userAgent))
                                }), b._activityTimeout)
                            },
                            _instantiatePushStream: function(e) {
                                this._setMark(), t && (r("PushstreamDoublePublic", window.user && window.user.username || "Guest", navigator.userAgent), t.disconnect()), (t = new a(this._dispatchMessage.bind(this), {
                                    url: window.PUSHSTREAM_URL,
                                    urlPath: "message-pipe-ws"
                                })).connectionStatus().subscribe(function(e) {
                                    this._dispatchStatusChange(e, w)
                                }.bind(this)), i && (r("PushstreamDoublePrivate", window.user && window.user.username || "Guest", navigator.userAgent), i.disconnect()), (i = new a(this._dispatchMessage.bind(this), {
                                    url: window.PUSHSTREAM_URL,
                                    urlPath: "message-pipe-ws"
                                })).connectionStatus().subscribe(function(e) {
                                    this._dispatchStatusChange(v, e)
                                }.bind(this)), this.on("pushstream_set_user_channel", function(e) {
                                    this._setUserChannel(e)
                                }.bind(this)), this._connectChannels(e)
                            },
                            _destructPushStream: function() {
                                var e = t;
                                t = null, e.disconnect(), e = i, i = null, e.disconnect(), this._dispatchStatusChangeFromOther(s.getItem(this._connectionStatusKey))
                            },
                            _activityTimeout: 5e3,
                            _delayTimeout: 2e4,
                            _pulseActivity: function() {
                                this.ownPushStream() ? this._lostOwn() ? (p.logNormal("Lost own pushstream connection"), c.sendReport("site", "pushstream_lost_own"), this._destructPushStream()) : this._setMark() : this._needInstantiating() && !y && (p.logNormal("Creating pushstream connection, because other tab lost it"), c.sendReport("site", "pushstream_pick_up"), this._instantiatePushStream(this.getChannels()))
                            },
                            _markName: f + "mark",
                            _lostOwn: function() {
                                var e = s.getItem(this._markName);
                                return !!e && (e = this._decodeParams(e))[0] !== this.guid
                            },
                            _getMark: function() {
                                return this._decodeParams(s.getItem(this._markName))
                            },
                            _setMark: function() {
                                s.setItem(this._markName, this._codeParams([this.guid, (new Date).getTime()]))
                            },
                            _unsetMark: function() {
                                s.setItem(this._markName, "")
                            },
                            _needInstantiating: function() {
                                var e = s.getItem(this._markName);
                                if (e) {
                                    var t = (e = this._decodeParams(e))[1];
                                    return (new Date).getTime() - t > this._delayTimeout
                                }
                                return !0
                            },
                            _onRequestRecreate: function(e) {
                                if (!this.ownPushStream() && this._needInstantiating()) {
                                    var t = this._decodeParams(e)[0];
                                    p.logNormal("Creating pushstream connection after recreate request"), this._instantiatePushStream(t)
                                }
                            },
                            _onUnload: function() {
                                this.ownPushStream() && (this._unsetMark(),
                                    this._sendRecreateRequest())
                            },
                            _getChannels: function() {
                                return t.getChannels().concat(i.getChannels())
                            },
                            _channelsName: f + "channels",
                            _getChannelsFromStorage: function() {
                                var e = s.getItem(this._channelsName);
                                return e ? JSON.parse(e) : []
                            },
                            getChannels: function() {
                                return this.ownPushStream() ? this._getChannels() : this._getChannelsFromStorage()
                            },
                            _storeChannels: function() {
                                s.setItem(this._channelsName, JSON.stringify(this._getChannels()))
                            },
                            _sendRecreateRequest: function() {
                                var e = this._getChannels();
                                n.emit(this._xEventRecreate, this._codeParams([e]))
                            },
                            ownPushStream: function() {
                                return !!t || !!i
                            },
                            pushStream: function() {
                                if (!this.ownPushStream()) throw new Error("Not own PushStream");
                                return t
                            },
                            isConnected: function() {
                                return v > 0
                            },
                            status: function() {
                                return v || l.Closed
                            },
                            statusPrivate: function() {
                                return w || l.Closed
                            },
                            _userChannel: function(e) {
                                return "private_" + e
                            },
                            userChannel: function() {
                                if (!m) throw new Error("No user channel");
                                return this._userChannel(m)
                            },
                            _xEventRecreate: _ + "recreate",
                            _xEventSend: _ + "send",
                            _xEventChannelAdd: _ + "channelAdd",
                            _xEventChannelRemove: _ + "channelRemove",
                            _xEventRequiredChannels: _ + "requirech",
                            _xEventConnectionStatus: _ + "connectionStatus",
                            _xEventReconnectCommand: _ + "reconnectCommand",
                            _xEventRequestLogs: _ + "requestLogs",
                            _xEventShareLogs: _ + "shareLogs",
                            _shareLogsKey: f + "shareLogs",
                            _connectionStatusKey: f + "connectionStatus",
                            _addChannel: function(e) {
                                var o = e.startsWith("private_") ? i : t;
                                o.hasChannel(e) || (o.addChannel(e), this._storeChannels())
                            },
                            addChannel: function(e) {
                                this.ownPushStream() ? this._addChannel(e) : n.emit(this._xEventChannelAdd, this._codeParams([e]))
                            },
                            _addChannelFromOther: function(e) {
                                var t = this._decodeParams(e)[0];
                                this.ownPushStream() && this._addChannel(t)
                            },
                            _removeChannel: function(e) {
                                var o = e.startsWith("private_") ? i : t;
                                o.hasChannel(e) && (o.removeChannel(e), this._storeChannels())
                            },
                            removeChannel: function(e) {
                                this.ownPushStream() ? this._removeChannel(e) : n.emit(this._xEventChannelRemove, this._codeParams([e]))
                            },
                            _removeChannelFromOther: function(e) {
                                var t = this._decodeParams(e)[0];
                                this.ownPushStream() && this._removeChannel(t)
                            },
                            _connectChannels: function(e) {
                                t.addChannel("public"), void 0 !== e && e.length > 0 && e.forEach((function(e) {
                                    e.startsWith("private_") || t.hasChannel(e) || t.addChannel(e)
                                })), "is_authenticated" in window ? this._connectUserChannelInitial(!0) : window.loginStateChange && loginStateChange.subscribe(this, this._connectUserChannelInitial), t.connect()
                            },
                            _connectUserChannelInitial: function(e) {
                                e && (is_authenticated ? (m = user.private_channel, i.addChannel(this.userChannel()), i.connect()) : m = null)
                            },
                            _changeLoginState: function(e) {
                                e || (is_authenticated ? (m = user.private_channel, this.ownPushStream() && (this._addChannel(this.userChannel()), i.connect())) : (this.ownPushStream() && (this._removeChannel(this.userChannel()), i.disconnect()), m = null))
                            },
                            _setUserChannel: function(e) {
                                p.logNormal("Set user channel " + e), e !== m && (this.ownPushStream() && m && this._removeChannel(this.userChannel()), m = e, this.ownPushStream() && m && this._addChannel(this.userChannel()))
                            },
                            _dispatchStatusChange: function(e, t) {
                                this._dispatchStatusChangeToOthers(e, t), this._dispatchStatusChangeToSelf(e, t)
                            },
                            _dispatchStatusChangeToSelf: function(e, t) {
                                e !== v && (v = e, this._callStatusHandlers(e, !1)), t !== w && (w = t, this._callStatusHandlers(t, !0))
                            },
                            _callStatusHandlers: function(e, t) {
                                p.logNormal("Connection status change: " + e + ", private " + t), c.sendReport("site", "pushstream_status_change"), g.forEach((function(i) {
                                    i.isPrivate === t && i.handler(e)
                                }))
                            },
                            _decodeConnectionStatus: function(e) {
                                var t = parseInt(e, 10);
                                return isNaN(t) ? this._decodeParams(e) : [t, t]
                            },
                            _dispatchStatusChangeFromOther: function(e) {
                                var t = this._decodeConnectionStatus(e),
                                    i = t[0],
                                    o = t[1];
                                this.ownPushStream() || this._dispatchStatusChangeToSelf(i, o)
                            },
                            _dispatchStatusChangeToOthers: function(e, t) {
                                if (this.ownPushStream()) {
                                    var i = this._codeParams([e, t]);
                                    s.setItem(this._connectionStatusKey, i), n.emit(this._xEventConnectionStatus, i)
                                }
                            },
                            _dispatchMessage: function(e, t, i) {
                                this._dispatchMessageToOthers(e, t, i), this._dispatchMessageToSelf(e, t, i, !1)
                            },
                            _dispatchMessageToSelf: function(e, t, i, o) {
                                i = e.channel, e = e.content, this._emit(e, t, i, o)
                            },
                            _dispatchMessageToOthers: function(e, t, i) {
                                var o = [e, t, i, (new Date).getTime()];
                                n.emit(this._xEventSend, this._codeParams(o))
                            },
                            _dispatchMessageFromOther: function(e) {
                                if (!this.ownPushStream()) {
                                    var t = this._decodeParams(e),
                                        i = t[0],
                                        o = t[1],
                                        n = t[2];
                                    this._dispatchMessageToSelf(i, o, n, !0)
                                }
                            },
                            _isSpecialChannel: function(e) {
                                return /\*/.test(e)
                            },
                            _emit: function(e, t, i, o) {
                                function n(n) {
                                    n.call(this, e, t, i, o)
                                }
                                for (var r in d[i] && d[i].forEach(n, this), u) {
                                    var s = "^" + r.replace(/\*/g, ".*?") + "$";
                                    new RegExp(s).test(i) && u[r].forEach(n, this)
                                }
                            },
                            on: function(e, t) {
                                var i = this._isSpecialChannel(e) ? u : d;
                                i[e] || (i[e] = []), i[e].push(t)
                            },
                            off: function(e, t) {
                                var i = this._isSpecialChannel(e) ? u : d;
                                switch (arguments.length) {
                                    case 0:
                                        d = {}, u = {};
                                        break;
                                    case 1:
                                        i[e] && delete i[e];
                                        break;
                                    default:
                                        if (i[e]) {
                                            var o = i[e].indexOf(t);
                                            ~o && i[e].splice(o, 1)
                                        }
                                }
                            },
                            onStatus: function(e) {
                                g.push({
                                    handler: e,
                                    isPrivate: !1
                                }), setTimeout((function() {
                                    e(v)
                                }), 0)
                            },
                            onPrivateStatus: function(e) {
                                g.push({
                                    handler: e,
                                    isPrivate: !0
                                }), setTimeout((function() {
                                    e(w)
                                }), 0)
                            },
                            offStatus: function(e) {
                                g = g.filter((function(t) {
                                    return t.handler !== e
                                }))
                            },
                            forceConnect: function() {
                                y = !1, p.logNormal("Creating pushstream connection after force connect"), this.ownPushStream() ? (t.disconnect(), i.disconnect(), this._instantiatePushStream(this.getChannels())) : this._needInstantiating() ? this._instantiatePushStream() : n.emit(this._xEventReconnectCommand, {})
                            },
                            disconnect: function() {
                                this.ownPushStream() && (this._destructPushStream(), this._unsetMark(), y = !0)
                            },
                            _dispatchReconnectCommandFromOther: function() {
                                this.ownPushStream() && this.forceConnect()
                            },
                            _getOwnLogs: function(e) {
                                if (this.ownPushStream()) {
                                    var t = h(e, "PushStreamMultiplexer"),
                                        i = this.pushStream().getLogs();
                                    return [].concat(t, i)
                                }
                                return []
                            },
                            _onRequestLogs: function(e) {
                                if (this.ownPushStream()) {
                                    var t = this._getOwnLogs(e),
                                        i = "";
                                    try {
                                        i = JSON.stringify(t)
                                    } catch (e) {
                                        p.logError("Failed to stringify own pushstream logs")
                                    }
                                    s.setItem(this._shareLogsKey, i), n.emit(this._xEventShareLogs, i)
                                }
                            },
                            getLogs: function(e) {
                                return new Promise(function(t) {
                                    var i = setTimeout(function() {
                                            var e = s.getItem(this._shareLogsKey);
                                            t(null !== e ? JSON.parse(e) : [])
                                        }.bind(this), 1e3),
                                        o = function(e) {
                                            var r;
                                            n.off(this._xEventShareLogs, o), n.emit(this._xEventShareLogs, ""), clearTimeout(i);
                                            try {
                                                r = JSON.parse(e)
                                            } catch (e) {
                                                r = [], p.logError("Failed to parse logs received from master tab")
                                            }
                                            t(r)
                                        }.bind(this);
                                    this.ownPushStream() ? t(this._getOwnLogs(e)) : (n.on(this._xEventShareLogs, o), n.emit(this._xEventRequestLogs))
                                }.bind(this))
                            }
                        };
                    return b._init(), window.addEventListener("unload", b._onUnload.bind(b)), n.on(b._xEventRecreate, b._onRequestRecreate.bind(b)), n.on(b._xEventSend, b._dispatchMessageFromOther.bind(b)), n.on(b._xEventChannelAdd, b._addChannelFromOther.bind(b)), n.on(b._xEventChannelRemove, b._removeChannelFromOther.bind(b)), n.on(b._xEventConnectionStatus, b._dispatchStatusChangeFromOther.bind(b)), n.on(b._xEventReconnectCommand, b._dispatchReconnectCommandFromOther.bind(b)), n.on(b._xEventRequestLogs, b._onRequestLogs.bind(b)), e = function() {
                        window.loginStateChange && loginStateChange.subscribe(b, b._changeLoginState)
                    }, "loading" !== document.readyState ? e() : document.addEventListener("DOMContentLoaded", e), setInterval(b._pulseActivity.bind(b), b._activityTimeout), b._pulseActivity(), b
                }();
            e.exports = g
        },
        504021: (e, t, i) => {
            "use strict";
            i.d(t, {
                PushStream: () => a
            });
            var o = i(416282),
                n = i(99020),
                r = i(987380);
            const s = (0, r.getLogger)("PushStream");
            class a {
                constructor(e, t) {
                    this._channels = [], this._transport = new n.PersistentWebsocketTransport(this._onPushStreamMessage.bind(this)), this._settings = t, this._messageHandler = e
                }
                addChannel(e) {
                    (0, o.assert)(!this.hasChannel(e), "Channel already subscribed"), s.logNormal("Adding channel " + e), this._channels.push(e), this._transport.setUrl(this._generateUrl())
                }
                removeChannel(e) {
                    const t = this._channels.indexOf(e);
                    (0, o.assert)(-1 !== t, "There is no that channel"), s.logNormal("Removing channel " + e), this._channels.splice(t, 1), this._transport.setUrl(this._generateUrl())
                }
                getChannels() {
                    return this._channels
                }
                hasChannel(e) {
                    return -1 !== this._channels.indexOf(e)
                }
                connectionStatus() {
                    return this._transport.connectionStatus()
                }
                connect() {
                    (0, o.assert)(0 !== this._channels.length, "There is no channels"), this._transport.connect()
                }
                disconnect() {
                    this._transport.disconnect()
                }
                sendMessage(e) {
                    this._transport.sendMessage(e)
                }
                getLogs(e) {
                    return (0, r.getRawLogHistory)(e, "PushStream")
                }
                _onPushStreamMessage(e) {
                    if ("string" != typeof e) throw new Error("Wrong message type, expected string");
                    const t = JSON.parse(e),
                        i = t.id,
                        o = t.channel; - 2 === i ? s.logWarn("Received unexpected message: about removed the channel") : i > 0 && (s.logDebug(`Received message: id="${i}" channel="${o}"`), this._messageHandler(t.text, i, o))
                }
                _generateUrl() {
                    const e = this._channels.join("/");
                    return `${this._settings.url}/${this._settings.urlPath}/${e}`
                }
            }
        },
        265194: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                qaGlobals: () => o
            });
            const o = new class {
                constructor(e, t) {
                    this._test = e[t] = {}
                }
                provide(e, t) {
                    this._test[e] = t
                }
            }(window, "qaGlobals")
        },
        491496: (e, t, i) => {
            "use strict";
            i.d(t, {
                unwrap: () => n,
                html: () => r,
                contentHeight: () => s,
                outerHeight: () => a,
                outerWidth: () => l,
                offset: () => c,
                position: () => d
            });
            var o = i(416282);

            function n(e) {
                return e[0]
            }

            function r(e, t) {
                return void 0 === t || (null === t && (e.innerHTML = ""), "string" != typeof t && "number" != typeof t || (e.innerHTML = String(t))),
                    e
            }

            function s(e) {
                const {
                    paddingTop: t,
                    paddingBottom: i
                } = window.getComputedStyle(e);
                return [t, i].reduce((e, t) => e - Number((t || "").replace("px", "")), e.clientHeight)
            }

            function a(e, t = !1) {
                const i = getComputedStyle(e),
                    o = [i.height];
                return "border-box" !== i.boxSizing && o.push(i.paddingTop, i.paddingBottom, i.borderTopWidth, i.borderBottomWidth), t && o.push(i.marginTop, i.marginBottom), o.reduce((e, t) => e + (parseFloat(t) || 0), 0)
            }

            function l(e, t = !1) {
                const i = getComputedStyle(e),
                    o = [i.width];
                return "border-box" !== i.boxSizing && o.push(i.paddingLeft, i.paddingRight, i.borderLeftWidth, i.borderRightWidth), t && o.push(i.marginLeft, i.marginRight), o.reduce((e, t) => e + (parseFloat(t) || 0), 0)
            }

            function c(e) {
                if (!e.getClientRects().length) return {
                    top: 0,
                    left: 0
                };
                const t = e.getBoundingClientRect(),
                    i = (0, o.ensureNotNull)(e.ownerDocument.defaultView);
                return {
                    top: t.top + i.pageYOffset,
                    left: t.left + i.pageXOffset
                }
            }

            function d(e) {
                const t = getComputedStyle(e);
                let i, o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === t.position) i = e.getBoundingClientRect();
                else {
                    i = c(e);
                    const t = e.ownerDocument;
                    let n = e.offsetParent || t.documentElement;
                    for (; n && (n === t.body || n === t.documentElement) && "static" === getComputedStyle(n).position;) n = n.parentElement;
                    n && n !== e && 1 === n.nodeType && (o = c(n), o.top += parseFloat(getComputedStyle(n).borderTopWidth), o.left += parseFloat(getComputedStyle(n).borderLeftWidth))
                }
                return {
                    top: i.top - o.top - parseFloat(t.marginTop),
                    left: i.left - o.left - parseFloat(t.marginLeft)
                }
            }
        },
        360531: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                registerService: () => s,
                unregisterService: () => a,
                hasService: () => l,
                service: () => c,
                waitServiceRegistered: () => d
            });
            var o = i(457137);
            const n = {},
                r = new Map;

            function s(e, t) {
                if (l(e)) throw new Error("Service already registered");
                n[e.id] = t;
                const i = r.get(e.id);
                void 0 !== i && (r.delete(e.id), i.resolve(t))
            }

            function a(e) {
                if (!l(e)) throw new Error("Service not found");
                n[e.id] = void 0
            }

            function l(e) {
                return void 0 !== n[e.id]
            }

            function c(e) {
                const t = n[e.id];
                if (void 0 === t) throw new Error("ServiceLocator: Service " + e.id + " not found");
                return t
            }

            function d(e) {
                if (l(e)) return Promise.resolve(c(e));
                let t = r.get(e.id);
                return void 0 === t && (t = (0, o.createDeferredPromise)(), r.set(e.id, t)), t.promise
            }
        },
        342098: (e, t, i) => {
            "use strict";
            e = i.nmd(e), i(968724);
            var o = i(685864).fetch,
                n = i(729412).regExpEscape,
                r = i(541962).TVXWindowEvents,
                s = i(655119).TVLocalStorage,
                a = i(896276),
                l = i(307833),
                c = i(198006).isFeatureEnabled,
                d = i(987380).getLogger("Lib.TVSettings"),
                u = ["s.tradingview.com", "betacdn.tradingview.com"],
                h = (l.enabled("use_localstorage_for_settings"), window.TVSettings = function() {
                    var e = !1,
                        t = null,
                        i = !1;

                    function p() {
                        return !(t || window.is_authenticated)
                    }
                    try {
                        e = !TradingView.onWidget() && parent && parent !== window && !!parent.IS_DEMO_PAGE
                    } catch (e) {}
                    if (e) {
                        var g = {
                                "widgetbar.layout-settings": {
                                    widgets: {},
                                    settings: {
                                        minimized: !0
                                    }
                                },
                                notShowMainWizard: !0
                            },
                            m = function(e, t, i) {
                                var o = g[e];
                                return null == o ? t : o
                            },
                            _ = function() {};
                        return {
                            loaded: !1,
                            loadedModel: !1,
                            getValue: m,
                            getJSON: m,
                            getBool: m,
                            getFloat: m,
                            getInt: m,
                            setValue: _,
                            setJSON: _,
                            remove: _,
                            keys: function() {
                                return Object.keys(g)
                            },
                            keysMask: function() {
                                return []
                            },
                            sync: _,
                            onSync: {
                                subscribe: function() {}
                            }
                        }
                    }
                    var f = 12e4;
                    "local" === window.environment && (f = 5e3);
                    var v, w, y, b = TradingView.onWidget() ? "tradingview-widget" : "tradingview",
                        S = b + ".",
                        T = {},
                        E = [],
                        C = [/^widgetbar\.widget\.watchlist.+/, /.+quicks$/, /^widgetbar\.layout-settings$/, /^ChartSideToolbarWidget\.visible$/, /^onwidget\.watchlist$/, /^domepanel.visible$/, /^orderpanel.visible$/, /^chart\.favoriteDrawings$/, /^chart\.favoriteDrawingsPosition$/, /^loadChartDialog.favorites$/, /^ChartFavoriteDrawingToolbarWidget\.visible/, /^trading\.chart\.proterty$/, /^trading_floating_toolbar\.position$/, /^trading\.orderWidgetMode\./, /^symbolWatermark$/, /^pinereference\.size$/, /^pinereference\.position$/, /^hint\.+/, /^ChartDrawingToolbarWidget\.visible/];
                    const A = ["current_theme.name"];

                    function I(e) {
                        return S + e
                    }

                    function k(e) {
                        return e.substring(S.length)
                    }

                    function L(e, t) {
                        var i = T[e];
                        return null == i ? t : i
                    }

                    function P(e, t, i) {
                        i = i || {};
                        var o = "" + t;
                        return T[e] !== o && (T[e] = o, N(e)), i.forceFlush && !w && (w = setTimeout((function() {
                            w = void 0, M()
                        }), 10)), h
                    }

                    function x(e, t) {
                        return t = t || {}, null != T[e] && (delete T[e], N(e)), t.forceFlush && M(), h
                    }

                    function D() {
                        v = void 0, E.length && M()
                    }

                    function N(e) {
                        if (t) null == T[e] ? t.removeValue(e) : t.setValue(e, T[e]);
                        else if (p()) try {
                            null == T[e] ? s.removeItem(I(e)) : s.setItem(I(e), T[e])
                        } catch (e) {} else E.push(e), v || (v = setTimeout(D, f));
                        r.emit("settings", JSON.stringify({
                            key: e,
                            value: T[e]
                        }))
                    }

                    function M(e) {
                        if (!i && !y)
                            if (c("disable_save_settings")) d.logWarn("Settings flashing has been skipped because of disable_save_settings featuretoggle");
                            else if (!l.enabled("widget") && !p() && 0 !== E.length) {
                            var t = E;
                            E = [];
                            for (var n = {}, r = t.length; r--;) {
                                var s = t[r],
                                    a = T[s];
                                void 0 === a && (a = null), n[s] = a
                            }
                            var u = new FormData;
                            u.append("delta", JSON.stringify(n)), e && navigator.sendBeacon ? navigator.sendBeacon("/savesettings/", u) : o("/savesettings/", {
                                method: "POST",
                                credentials: "include",
                                body: u
                            }).then((function(i) {
                                if (i.ok || (E = E.concat(t)), [429, 503].includes(i.status)) {
                                    var o = 1e3 * +i.headers.get("retry-after") || 3e5;
                                    y = setTimeout(() => {
                                        y = void 0, M(e)
                                    }, o)
                                }
                            })).catch((function() {
                                E = E.concat(t)
                            }))
                        }
                    }

                    function B() {
                        return Object.keys(T)
                    }

                    function O(e) {
                        for (var t = 0; t < C.length; ++t)
                            if (C[t].exec(e)) return !0;
                        return !1
                    }

                    function R(e) {
                        return e.substring(0, S.length) === S
                    }

                    function F(e) {
                        T = {};
                        const t = 0 === Object.keys(e).length;
                        t || function(e) {
                                Object.keys(e).forEach((function(t) {
                                    T[t] = e[t] + ""
                                }))
                            }(e),
                            function(e) {
                                for (var t = s.length; t--;) {
                                    var i = s.key(t);
                                    i && R(i) && ((e || A.includes(k(i))) && P(k(i), s.getItem(i)), s.removeItem(i))
                                }
                            }(t)
                    }
                    r.on("settings", (function(e) {
                        var t = JSON.parse(e);
                        null == t.value ? delete T[t.key] : T[t.key] = t.value
                    }));
                    var U = new a;
                    return document.addEventListener("visibilitychange", (function() {
                        "hidden" !== document.visibilityState && !0 !== document.hidden || M()
                    })), window.addEventListener("beforeunload", (function() {
                        M(!0)
                    })), {
                        loaded: !1,
                        loadedModel: !1,
                        getValue: L,
                        getJSON: function(e, t) {
                            var i = L(e, void 0);
                            if (null == i) return t;
                            try {
                                return JSON.parse(i)
                            } catch (i) {
                                return x(e), t
                            }
                        },
                        getBool: function(e, t) {
                            var i = L(e);
                            return null == i ? t : !(!i || "false" === i || 0 == +i)
                        },
                        getFloat: function(e, t, i) {
                            var o = L(e, void 0);
                            if (null == o) return t;
                            var n = parseFloat(o);
                            if (!isFinite(n)) throw new TypeError('"' + o + '" is not float (key: "' + e + '")');
                            return n
                        },
                        getInt: function(e, t, i) {
                            var o = L(e, void 0);
                            if (null == o) return t;
                            var n = parseInt(o, 10);
                            if (!isFinite(n)) throw new TypeError('"' + o + '" is not int (key: "' + e + '")');
                            return n
                        },
                        setValue: P,
                        setJSON: function(e, t, i) {
                            return P(e, JSON.stringify(t), i), h
                        },
                        remove: x,
                        keys: B,
                        keysMask: function(e, t) {
                            for (var i = B(), o = [], r = (e = new RegExp("^" + n(e).replace(/\\\*\\\*/gi, ".+").replace(/\\\*/gi, "[^.]+") + "$", "gi"), i.length - 1); r >= 0; r--) e.test(i[r]) && o.push(i[r]), e.lastIndex = 0;
                            return o
                        },
                        sync: function(e) {
                            null !== e ? (t ? F(t.initialSettings || {}) : p() ? (function() {
                                if (TradingView.onWidget() && u.includes(window.location.host))
                                    for (var e = s.length; e--;) {
                                        var t = s.key(e);
                                        if (0 === t.indexOf("tradingview.")) {
                                            var i = t.replace("tradingview.", b + ".");
                                            s.setItem(i, s.getItem(t)), s.removeItem(t)
                                        }
                                    }
                            }(), function() {
                                for (const e of A) T[e] && !s.getItem(I(e)) && s.setItem(I(e), T[e])
                            }(), function() {
                                T = {};
                                for (var e = !l.enabled("save_chart_properties_to_local_storage"), t = s.length; t--;) {
                                    var i = s.key(t);
                                    if (i && R(i)) {
                                        var o = i.substring(S.length);
                                        e && !O(o) || (T[o] = s.getItem(i))
                                    }
                                }
                            }()) : F(e || {}), U.fire()) : i = !0
                        },
                        onSync: U,
                        setSettingsAdapter: function(e) {
                            t = e
                        }
                    }
                }());
            setTimeout((function() {
                i.e(30362).then(i.bind(i, 198376)).then(e => {
                    e.clearOldSettings()
                })
            }), 3e4), e && e.exports && (e.exports = h)
        },
        13379: (e, t, i) => {
            "use strict";
            i.d(t, {
                isSfQuoteData: () => n
            });
            var o = i(76033);

            function n(e) {
                return !!e && (!(void 0 === e.symbolname || !(0, o.isSfFlag)(e.symbolname)) || Boolean("permission_denied" === e.status && e.values && void 0 !== e.values.alternative && (0, o.isSfFlag)(e.values.alternative)))
            }
        },
        76033: (e, t, i) => {
            "use strict";
            i.d(t, {
                isSfFlag: () => n
            });
            const o = {
                sf_dly: 0,
                sf_rt: 0
            };

            function n(e) {
                return o.hasOwnProperty(e)
            }
        },
        892133: (e, t, i) => {
            "use strict";
            var o, n;
            i.d(t, {
                    IdeaEventAction: () => o,
                    BrokerBranding: () => n
                }),
                function(e) {
                    e.Agree = "agree", e.Disagree = "disagree", e.Comment = "comment", e.Follow = "follow", e.Unfollow = "unfollow", e.WatchIdea = "watch_idea", e.Report = "report_idea"
                }(o || (o = {})),
                function(e) {
                    let t;
                    ! function(e) {
                        e.Click = "click", e.View = "view"
                    }(t = e.EventType || (e.EventType = {}))
                }(n || (n = {}))
        },
        771073: (e, t, i) => {
            "use strict";
            async function o() {
                if (!window.user || window.user.do_not_track) return null; {
                    const e = (await Promise.all([i.e(11216), i.e(87380), i.e(12984), i.e(24081)]).then(i.bind(i, 80686))).getTrackerInstance();
                    return e || null
                }
            }
            i.d(t, {
                getTracker: () => o
            })
        },
        965009: (e, t, i) => {
            "use strict";
            i.d(t, {
                trackActionFollow: () => n
            });
            var o = i(771073);

            function n(e, t, i) {
                const n = i.authorId ? i.authorId.toString() : "",
                    r = i.symbol ? i.symbol : "",
                    s = i.symbolType ? i.symbolType : "";
                (0, o.getTracker)().then(i => {
                    i && i.trackFollow(e, t, n, r, s)
                })
            }
        },
        110164: (e, t, i) => {
            "use strict";
            i.d(t, {
                telemetry: () => u
            });
            var o = i(896276),
                n = i.n(o),
                r = i(685864),
                s = i(968724),
                a = i(640142);
            i(265194);
            const l = (0, i(987380).getLogger)("Common.Telemetry"),
                c = {
                    default: 15e3,
                    site: 3e5
                },
                d = ["before_websocket_connection_time_frame", "websocket_connection_time_frame", "first_series_full_time_frame", "page_full_load_time_frame", "page_load_time_frame"];
            const u = new class {
                constructor() {
                    this.reportSent = new(n()), this.timeCounters = {
                        series: {
                            marks: []
                        },
                        study: {},
                        pine: {}
                    }, this._timeoutIds = {}, this._commonAdditionalData = {
                        cluster: null,
                        userId: "0"
                    }, this._reportStash = {}
                }
                setSessionInfo(e) {
                    const t = this._parseCluster(e);
                    null !== t && (this._commonAdditionalData.cluster = t)
                }
                sendReport(e, t, i) {
                    var o;
                    if (!this._isAbleToSendReport(t)) return;
                    const n = this._getSubserviceType(e),
                        r = this._getHost(e, n);
                    if (null !== r) {
                        if (i = void 0 === i ? {
                                count: 1
                            } : i, this._addReportToStash(i, t, r), !this._timeoutIds[e]) {
                            const t = null !== (o = c[e]) && void 0 !== o ? o : c.default;
                            this._timeoutIds[e] = setTimeout(this._sendTelemetryToService.bind(this, e, r), t)
                        }
                    } else l.logError(`Unable to get host for counter: ${t}, metric type: ${e}, serivce type: ${n}`)
                }
                sendChartReport(e, t, i = !0) {
                    this._updateUserInfo(), t = void 0 === t ? {
                        count: 1
                    } : t, i && (t = this._appendCommonAdditionalInfo(t, ["cluster", "userId"])), this.sendReport("charts", e, t)
                }
                _updateUserInfo() {
                    const e = "user" in window && "id" in window.user ? window.user.id : "0";
                    this._commonAdditionalData.userId = String(e)
                }
                _isAbleToSendReport(e) {
                    const t = window.TELEMETRY_HOSTS,
                        i = d.includes(e),
                        o = Boolean(window.TradingView.onChartPage || (0, s.onWidget)());
                    return t && (!i || o)
                }
                _sendTelemetryToService(e, t) {
                    if (this._reportStash.hasOwnProperty(t)) {
                        const e = this._cropParams(this._reportStash[t]),
                            i = this._renameAllParams(e),
                            o = {
                                event: "report_stash",
                                params: this._cleanAllParams(i)
                            };
                        l.logDebug(`Report to host: ${t}; stash: ${JSON.stringify(this._reportStash[t])}`), this.reportSent.fire(this._reportStash[t]), delete this._reportStash[t], (0, r.fetch)(t + "/report", {
                            method: "POST",
                            body: JSON.stringify(o)
                        })
                    }
                    this._timeoutIds[e] = null
                }
                _getHost(e, t) {
                    const i = window.TELEMETRY_HOSTS,
                        o = i[e] && i[e][t];
                    return Boolean(o) ? o : null
                }
                _getSubserviceType(e) {
                    if (!["charts", "site"].includes(e)) return "all";
                    let t = "free";
                    const i = window.user.is_pro;
                    return "charts" === e && (0, a.isOnMobileAppPage)("old") ? t = i ? "ios_pro" : "ios_free" : "charts" === e && (0, a.isOnMobileAppPage)("new") ? t = i ? "android_pro" : "android_free" : (0, s.onWidget)() ? t = "widget" : i && (t = "pro"), t
                }
                _parseCluster(e) {
                    let t;
                    try {
                        t = JSON.parse(e).session_id
                    } catch (e) {
                        return l.logError("Could not parse cluster id (session id)"), null
                    }
                    const i = /(.*@)(.*)/gi.exec(t);
                    return null !== i && i.length >= 3 ? i[2] : null
                }
                _appendCommonAdditionalInfo(e, t) {
                    return t.forEach(t => {
                        t in this._commonAdditionalData && (e.additional = e.additional || {}, e.additional[t] = this._commonAdditionalData[t])
                    }), e
                }
                _cropParams(e) {
                    var t;
                    for (const i in e) e.hasOwnProperty(i) && e[i].length > 1e3 && (e.too_much_metrics_frame = null !== (t = e.too_much_metrics_frame) && void 0 !== t ? t : [], e.too_much_metrics_frame.push({
                        value: e[i].length,
                        additional: {
                            event: i
                        }
                    }), delete e[i]);
                    return e
                }
                _renameAllParams(e) {
                    const t = {};
                    for (const i in e) e.hasOwnProperty(i) && (t[i] = [], e[i].forEach(e => {
                        t[i].push(this._renameEntryParams(e))
                    }));
                    return t
                }
                _renameEntryParams(e) {
                    const t = {
                        count: "c",
                        value: "v",
                        text: "t",
                        additional: "a"
                    };
                    return Object.keys(e).reduce((i, o) => (i[t[o]] = e[o], i), {})
                }
                _cleanAllParams(e) {
                    const t = {};
                    for (const i in e)
                        if (e.hasOwnProperty(i)) {
                            t[i] = [];
                            const o = {
                                c: 0
                            };
                            e[i].forEach(e => {
                                const n = this._cleanEntryParams(e),
                                    r = Object.keys(n).length;
                                1 === r && void 0 !== n.c ? o.c += n.c : r > 0 && t[i].push(n)
                            }), o.c > 0 && t[i].push(o), 0 === t[i].length && delete t[i]
                        }
                    return t
                }
                _cleanEntryParams(e) {
                    const t = Object.keys(e).reduce((t, i) => "c" !== i && "t" !== i || e[i] ? (t[i] = e[i], t) : t, {});
                    return "c" in t || "v" in t || "t" in t ? t : {}
                }
                _addReportToStash(e, t, i) {
                    i in this._reportStash || (this._reportStash[i] = {}), t in this._reportStash[i] || (this._reportStash[i][t] = []), Object.keys(e).length > 0 && this._reportStash[i][t].push(e)
                }
            }
        },
        929098: (e, t, i) => {
            "use strict";
            i.d(t, {
                trackEvent: () => l,
                disableTrackingEvents: () => c
            });
            var o = i(288001),
                n = i(307833);
            const r = (0, i(987380).getLogger)("Common.TrackEvent"),
                s = [/Study_(Drawing)_(.*)/, /(Study)_(.*)@tv-basicstudies/, /(Study)_(.*)/, /(Chart Style) (.*)/];
            let a = !1;
            const l = (e, t, i) => {
                if (a) return;
                if (n.enabled("charting_library_base")) return void((e, t, i) => {
                    t = t || e || i || "";
                    let n = "";
                    for (let e = 0; e < s.length; e++) {
                        const i = t.match(s[e]);
                        if (i && 3 === i.length) {
                            t = i[1], n = i[2];
                            break
                        }
                    }(0, o.emit)(t.toLowerCase().replace(" ", "_"), {
                        category: e,
                        label: i,
                        value: n
                    })
                })(e, t, i);
                let l = (e ? e + ":" : "") + t;
                i && (l += " " + i), r.logNormal(l), n.enabled("widget") || !window._UNIT_TESTS && window.gtag && window.gtag("event", t, {
                    event_category: e,
                    event_label: i
                })
            };

            function c() {
                a = !0
            }
            "undefined" != typeof window && (window.TradingView = window.TradingView || {}, window.TradingView.trackEvent = l)
        },
        541962: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                TVXWindowEvents: () => s
            });
            i(568421);
            var o = i(987380),
                n = i(655119);
            const r = (0, o.getLogger)("XWindowEvents");
            var s;
            ! function(e) {
                const t = "tvxwevents.",
                    i = {};
                let o;
                window.BroadcastChannel ? (o = new BroadcastChannel("tvxwevents"), o.addEventListener("message", (function(e) {
                    const {
                        data: {
                            event: t,
                            value: o
                        }
                    } = e;
                    i[t] && i[t].forEach(e => {
                        e(o)
                    })
                })), function() {
                    const e = [],
                        i = performance.now();
                    for (let i = 0; i < n.TVLocalStorage.length; i++) {
                        const o = n.TVLocalStorage.key(i);
                        o.startsWith(t) && e.push(o)
                    }
                    const o = n.TVLocalStorage.length;
                    for (const t of e) n.TVLocalStorage.removeItem(t);
                    const s = performance.now() - i;
                    r.logNormal("Total keys amount in local storage on operation start: " + o), r.logNormal("Keys amount in local storage to be deleted: " + e.length), r.logNormal("Keys to be deleted from local storage: " + JSON.stringify(e)), r.logNormal(`Removing keys from local storage took ${s} ms`)
                }()) : window.addEventListener("storage", (function(e) {
                    const {
                        newValue: o,
                        key: r
                    } = e;
                    if (null === o || !r || !r.startsWith(t)) return;
                    const s = r.substring(t.length);
                    i[s] && i[s].forEach(t => {
                        t(e.newValue)
                    });
                    n.TVLocalStorage.removeItem(r)
                })), e.on = function(e, t) {
                    i[e] || (i[e] = []), i[e].push(t)
                }, e.off = function(e, t) {
                    if (!i[e]) return;
                    const o = i[e].indexOf(t); - 1 !== o && (1 === i[e].length ? delete i[e] : i[e].splice(o, 1))
                }, e.emit = function(e, i = Date.now()) {
                    try {
                        o ? o.postMessage({
                            event: e,
                            value: i
                        }) : n.TVLocalStorage.setItem(t + e, i.toString())
                    } catch (e) {
                        r.logError(e.message)
                    }
                }
            }(s || (s = {}))
        },
        62261: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                convertToCustomSymbolList: () => s,
                convertToMarkedSymbolList: () => a,
                convertToSymbolList: () => l,
                getCustomWatchLists: () => c,
                renameWatchList: () => d,
                removeWatchList: () => u,
                addSymbols: () => h,
                removeSymbols: () => p,
                replaceSymbols: () => g,
                createWatchList: () => m,
                putWatchList: () => _,
                setActive: () => f,
                getActive: () => v
            });
            var o = i(416282),
                n = i(685864),
                r = i(370253);

            function s(e) {
                var t;
                return {
                    type: "custom",
                    id: e.id,
                    name: e.name,
                    symbols: null !== (t = e.symbols) && void 0 !== t ? t : [],
                    shared: e.shared
                }
            }

            function a(e) {
                var t, i;
                const n = (0, o.ensureNotNull)(e.color);
                return {
                    type: "colored",
                    id: n,
                    color: n,
                    name: null !== (t = e.name) && void 0 !== t ? t : null,
                    symbols: null !== (i = e.symbols) && void 0 !== i ? i : [],
                    shared: e.shared
                }
            }

            function l(e) {
                return "custom" === e.type ? s(e) : a(e)
            }

            function c() {
                return (0, n.fetch)("/api/v1/symbols_list/custom/").then(r.handleJSON).then(e => e.map(s))
            }

            function d(e, t) {
                return (0, n.fetch)(`/api/v1/symbols_list/custom/${e.id}/rename/`, {
                    method: "POST",
                    body: JSON.stringify({
                        name: t
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(r.handleJSON)
            }

            function u(e) {
                return (0, n.fetch)(`/api/v1/symbols_list/custom/${e.id}/`, {
                    method: "DELETE"
                }).then(r.handleJSON)
            }

            function h(e, t) {
                return (0, n.fetch)(`/api/v1/symbols_list/custom/${e.id}/append/`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(r.handleJSON)
            }

            function p(e, t) {
                return (0, n.fetch)(`/api/v1/symbols_list/custom/${e.id}/remove/`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(r.handleJSON)
            }

            function g(e, t) {
                return (0, n.fetch)(`/api/v1/symbols_list/custom/${e.id}/replace/?unsafe=true`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(r.handleJSON)
            }

            function m(e) {
                return (0, n.fetch)("/api/v1/symbols_list/custom/", {
                    method: "POST",
                    body: JSON.stringify({
                        name: e.name,
                        symbols: e.symbols
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(r.handleJSON).then(s)
            }

            function _(e) {
                throw new Error("not implemented")
            }

            function f(e) {
                return (0, n.fetch)(`/api/v1/symbols_list/active/${e}/`, {
                    method: "POST"
                })
            }

            function v() {
                return (0, n.fetch)("/api/v1/symbols_list/active/", {
                    method: "GET"
                }).then(r.handleJSON).then(l)
            }
        },
        370253: (e, t, i) => {
            "use strict";

            function o(e) {
                return e.ok ? 204 === e.status ? Promise.resolve() : e.json() : e.json().then(e => {
                    const t = new Error(e.detail || "not ok");
                    throw e.code && (t.name = "ApiError:" + e.code), t
                })
            }
            i.d(t, {
                handleJSON: () => o
            })
        },
        132302: (e, t, i) => {
            "use strict";
            i.d(t, {
                Pill: () => a
            });
            var o = i(667294),
                n = i(294184),
                r = i.n(n),
                s = i(661732);

            function a(e) {
                const {
                    className: t,
                    label: i,
                    color: n,
                    style: a,
                    tooltip: l
                } = e;
                return o.createElement("div", {
                    className: r()(s.pill, t, n && s[n], l && "apply-common-tooltip"),
                    style: a,
                    title: l
                }, i)
            }
        },
        279407: (e, t, i) => {
            "use strict";
            async function o(e, t) {
                const o = await Promise.all([i.e(99459), i.e(23876), i.e(26822), i.e(61212), i.e(85597), i.e(60700), i.e(69756), i.e(88278), i.e(63193), i.e(24261), i.e(81594), i.e(11216), i.e(43424), i.e(19894), i.e(39351), i.e(41994), i.e(38890)]).then(i.bind(i, 441994));
                return o.showSimpleDialog(e, o.renameModule, t)
            }
            async function n(e, t) {
                const o = await Promise.all([i.e(99459), i.e(23876), i.e(26822), i.e(61212), i.e(85597), i.e(60700), i.e(69756), i.e(88278), i.e(63193), i.e(24261), i.e(81594), i.e(11216), i.e(43424), i.e(19894), i.e(39351), i.e(41994), i.e(38890)]).then(i.bind(i, 441994));
                return o.showSimpleDialog(e, o.confirmModule, t)
            }
            async function r(e, t) {
                const o = await Promise.all([i.e(99459), i.e(23876), i.e(26822), i.e(61212), i.e(85597), i.e(60700), i.e(69756), i.e(88278), i.e(63193), i.e(24261), i.e(81594), i.e(11216), i.e(43424), i.e(19894), i.e(39351), i.e(41994), i.e(38890)]).then(i.bind(i, 441994));
                return o.showSimpleDialog(e, o.warningModule, t)
            }
            i.r(t), i.d(t, {
                showRename: () => o,
                showConfirm: () => n,
                showWarning: () => r
            })
        },
        790869: (e, t, i) => {
            "use strict";
            i.d(t, {
                registerSiteSymbolListBackend: () => d
            });
            var o = i(301171);
            const n = i(62261);
            var r = i(120220),
                s = i(360531);
            class a {
                constructor(e = []) {
                    this._list = {
                        id: "DEFAULT_SINGLE_WATCHLIST",
                        type: "custom",
                        name: (0, r.t)("Watchlist"),
                        symbols: [...e],
                        shared: !1
                    }
                }
                getCustomWatchLists() {
                    return Promise.resolve([this._list])
                }
                getSymbols(e) {
                    return Promise.resolve(this._list.symbols)
                }
                createWatchList(e) {
                    throw new Error("not implemented")
                }
                putWatchList(e) {
                    throw new Error("not implemented")
                }
                removeWatchList(e) {
                    throw new Error("not implemented")
                }
                renameWatchList(e, t) {
                    return Promise.resolve(t)
                }
                replaceSymbols(e, t) {
                    return this._list.symbols = [...t], Promise.resolve(this._list)
                }
                addSymbols(e, t) {
                    return this._list.symbols.push(...t), Promise.resolve(this._list.symbols)
                }
                removeSymbols(e, t) {
                    return this._list.symbols = this._list.symbols.filter(e => !t.includes(e)), Promise.resolve(this._list.symbols)
                }
                setActive(e) {
                    return Promise.resolve(this._list)
                }
                getActive() {
                    return Promise.resolve(this._list)
                }
            }
            var l = i(160245);
            class c {
                constructor(e) {
                    this._deletedSymbolsList = new l.DeletedSymbolsList, this.update(e)
                }
                update(e) {
                    const {
                        isAuthenticated: t,
                        chartApiInstance: i
                    } = e;
                    this._current = t ? n : new a(i.defaultWatchlistSymbols())
                }
                getCustomWatchLists() {
                    return this._current.getCustomWatchLists().then(e => {
                        const t = [...e],
                            i = this._deletedSymbolsList.getList();
                        return i && t.push(i), t
                    })
                }
                createWatchList(e) {
                    if ((0, l.isDeletedSymbolsList)(e.id)) {
                        this._deletedSymbolsList.createList(e);
                        const t = this._deletedSymbolsList.getList();
                        if (t) return Promise.resolve(t)
                    }
                    return this._current.createWatchList(e)
                }
                putWatchList(e) {
                    if ((0, l.isDeletedSymbolsList)(e.id)) {
                        const e = this._deletedSymbolsList.getList();
                        if (e) return Promise.resolve(e)
                    }
                    return this._current.putWatchList(e)
                }
                removeWatchList(e) {
                    var t;
                    return (0, l.isDeletedSymbolsList)(e.id) ? (null === (t = this._deletedSymbolsList) || void 0 === t || t.removeList(), Promise.resolve()) : this._current.removeWatchList(e)
                }
                renameWatchList(e, t) {
                    if ((0, l.isDeletedSymbolsList)(e.id)) {
                        const e = this._deletedSymbolsList.getList();
                        if (e) return Promise.resolve(e.name)
                    }
                    return this._current.renameWatchList(e, t)
                }
                replaceSymbols(e, t) {
                    if ((0, l.isDeletedSymbolsList)(e.id)) {
                        this._deletedSymbolsList.replaceSymbols(t);
                        const e = this._deletedSymbolsList.getList();
                        return Promise.resolve(e)
                    }
                    return this._current.replaceSymbols(e, t)
                }
                addSymbols(e, t) {
                    if ((0, l.isDeletedSymbolsList)(e.id)) {
                        this._deletedSymbolsList.addSymbols(t);
                        const e = this._deletedSymbolsList.getList();
                        return e ? Promise.resolve(e.symbols) : Promise.resolve([])
                    }
                    return this._current.addSymbols(e, t)
                }
                removeSymbols(e, t) {
                    if ((0, l.isDeletedSymbolsList)(e.id)) {
                        this._deletedSymbolsList.removeSymbols(t);
                        const e = this._deletedSymbolsList.getList();
                        return e ? Promise.resolve(e.symbols) : Promise.resolve([])
                    }
                    return this._current.removeSymbols(e, t)
                }
                setActive(e) {
                    return (0, l.isDeletedSymbolsList)(e) ? (this._deletedSymbolsList.setIsActive(!0), Promise.resolve()) : (this._deletedSymbolsList.getIsActive() && this._deletedSymbolsList.setIsActive(!1), this._current.setActive(e))
                }
                getActive() {
                    if (this._deletedSymbolsList.getIsActive()) {
                        const e = this._deletedSymbolsList.getList();
                        if (e) return Promise.resolve(e)
                    }
                    return this._current.getActive()
                }
            }

            function d(e) {
                const t = new c({
                    chartApiInstance: e,
                    isAuthenticated: window.is_authenticated
                });
                return window.loginStateChange.subscribe(t, () => {
                    t.update({
                        chartApiInstance: e,
                        isAuthenticated: window.is_authenticated
                    })
                }), (0, s.registerService)(o.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE, t), () => {
                    window.loginStateChange.unsubscribeAll(t), (0, s.unregisterService)(o.SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE)
                }
            }
        },
        301171: (e, t, i) => {
            "use strict";
            i.d(t, {
                SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE: () => o
            });
            const o = {
                id: "SymbolListRepositoryBackend"
            }
        },
        160245: (e, t, i) => {
            "use strict";
            i.d(t, {
                DELETED_SYMBOLS_LIST_ID: () => r,
                isDeletedSymbolsList: () => a,
                DeletedSymbolsList: () => l
            });
            var o = i(655119),
                n = i(656315);
            const r = "deleted_symbols_list_id",
                s = "There was an error during attempt to set local storage value",
                a = e => e === r;
            class l {
                constructor() {
                    this._logError = (e, t) => {
                        e instanceof Error ? n.logger.logError(e.message) : n.logger.logError(t)
                    }
                }
                createList(e) {
                    this._setList(e)
                }
                removeList() {
                    try {
                        o.TVLocalStorage.removeItem("deleted_symbols_list")
                    } catch (e) {
                        this._logError(e, "There was an error during local storage item removal")
                    }
                }
                addSymbols(e) {
                    const t = this.getList();
                    if (!t) return;
                    const i = new Set(t.symbols);
                    for (const t of e) i.add(t);
                    const o = Array.from(i);
                    o.length > 100 ? t.symbols = o.reverse().slice(0, 100).reverse() : t.symbols = o, this._setList(t)
                }
                removeSymbols(e) {
                    const t = this.getList();
                    if (!t) return;
                    const i = new Set(t.symbols);
                    for (const t of e) i.delete(t);
                    t.symbols = Array.from(i), this._setList(t)
                }
                replaceSymbols(e) {
                    const t = this.getList();
                    t && (t.symbols = e, this._setList(t))
                }
                getIsActive() {
                    try {
                        return "true" === o.TVLocalStorage.getItem("is_deleted_symbols_list_active")
                    } catch (e) {
                        return this._logError(e, s), !1
                    }
                }
                setIsActive(e) {
                    try {
                        o.TVLocalStorage.setItem("is_deleted_symbols_list_active", String(e))
                    } catch (e) {
                        this._logError(e, s)
                    }
                }
                getList() {
                    try {
                        const e = o.TVLocalStorage.getItem("deleted_symbols_list");
                        return e ? JSON.parse(e) : null
                    } catch (e) {
                        return this._logError(e, "There was an error during attempt to get local storage value"), null
                    }
                }
                _setList(e) {
                    try {
                        o.TVLocalStorage.setItem("deleted_symbols_list", JSON.stringify(e))
                    } catch (e) {
                        this._logError(e, s)
                    }
                }
            }
        },
        656315: (e, t, i) => {
            "use strict";
            i.d(t, {
                logger: () => o
            });
            const o = (0, i(987380).getLogger)("Platform.Model.Watchlist")
        },
        420325: (e, t, i) => {
            "use strict";
            i.d(t, {
                CircleLogoAny: () => s
            });
            var o = i(667294),
                n = i(294921),
                r = i(377672);

            function s(e) {
                const {
                    logoUrls: t
                } = e;
                return 1 === t.length ? o.createElement(r.CircleLogo, { ...e,
                    logoUrl: t[0]
                }) : 2 === t.length ? o.createElement(n.CircleLogoPair, { ...e,
                    primaryLogoUrl: t[0],
                    secondaryLogoUrl: t[1]
                }) : o.createElement(r.CircleLogo, { ...e,
                    logoUrl: void 0
                })
            }
        },
        294921: (e, t, i) => {
            "use strict";
            i.d(t, {
                CircleLogoPair: () => r
            });
            var o = i(667294),
                n = i(141942);
            i(150879);

            function r(e) {
                const {
                    primaryLogoUrl: t,
                    secondaryLogoUrl: i,
                    size: r,
                    className: a
                } = e;
                return o.createElement("span", {
                    className: (0, n.getBlockStyleClasses)(r, a),
                    title: e.title
                }, o.createElement(s, {
                    logoUrl: i,
                    size: r
                }), o.createElement(s, {
                    logoUrl: t,
                    size: r
                }))
            }

            function s(e) {
                const {
                    logoUrl: t,
                    size: i
                } = e, r = (0, n.getLogoStyleClasses)(i);
                return void 0 === t ? o.createElement("span", {
                    className: r
                }) : o.createElement("img", {
                    className: r,
                    src: t,
                    alt: ""
                })
            }
        },
        141942: (e, t, i) => {
            "use strict";
            i.d(t, {
                getBlockStyleClasses: () => n,
                getLogoStyleClasses: () => r
            });
            var o = i(294184);

            function n(e, t) {
                return o("tv-circle-logo-pair", "tv-circle-logo-pair--" + e, t)
            }

            function r(e, t) {
                return o("tv-circle-logo-pair__logo", "tv-circle-logo-pair__logo--" + e, !t && "tv-circle-logo-pair__logo-empty")
            }
        },
        377672: (e, t, i) => {
            "use strict";
            i.d(t, {
                CircleLogo: () => r
            });
            var o = i(667294),
                n = i(43096);
            i(775074);

            function r(e) {
                const t = (0, n.getStyleClasses)(e.size, e.className);
                return (0, n.isCircleLogoWithUrlProps)(e) ? o.createElement("img", {
                    className: t,
                    src: e.logoUrl,
                    alt: "",
                    title: e.title,
                    loading: e.loading
                }) : o.createElement("span", {
                    className: t,
                    title: e.title
                }, e.placeholderLetter)
            }
        },
        43096: (e, t, i) => {
            "use strict";
            i.d(t, {
                getStyleClasses: () => n,
                isCircleLogoWithUrlProps: () => r
            });
            var o = i(294184);

            function n(e, t) {
                return o("tv-circle-logo", "tv-circle-logo--" + e, t)
            }

            function r(e) {
                return "logoUrl" in e && void 0 !== e.logoUrl
            }
        },
        344828: (e, t, i) => {
            "use strict";
            i.d(t, {
                initHeaderSearchDialog: () => s
            });
            var o = i(509793),
                n = i(626083);
            let r = !1;

            function s() {
                document.querySelectorAll(".js-header-search-button").forEach(e => {
                    e.addEventListener("click", () => {
                        r || a()
                    })
                }), n.createGroup({
                    desc: "Search actions"
                }).add({
                    desc: "Show Search",
                    hotkey: n.Modifiers.Mod + 75,
                    handler: a,
                    isDisabled: () => r
                })
            }

            function a() {
                r = !0, (0, o.openHeaderSearchDialog)(l)
            }

            function l() {
                r = !1
            }
        },
        509793: (e, t, i) => {
            "use strict";

            function o(e) {
                return n().then(t => t.openHeaderSearchDialogImpl(e))
            }

            function n() {
                return Promise.all([i.e(99459), i.e(23876), i.e(26822), i.e(29448), i.e(60700), i.e(69756), i.e(32795), i.e(88278), i.e(91877), i.e(43894), i.e(18436), i.e(33996), i.e(52802), i.e(94595), i.e(94269), i.e(87936), i.e(40587), i.e(47607), i.e(96271), i.e(30209), i.e(55442), i.e(18078), i.e(26992), i.e(93228), i.e(20597), i.e(23013), i.e(57373), i.e(25913), i.e(81778), i.e(86333), i.e(63497), i.e(14303), i.e(94718), i.e(62471), i.e(11216), i.e(43424), i.e(14563), i.e(20396), i.e(91050), i.e(74061), i.e(9622), i.e(14890), i.e(33289), i.e(807), i.e(52146), i.e(3882), i.e(76242), i.e(25155), i.e(9394), i.e(11228), i.e(73715), i.e(6798), i.e(59371), i.e(4516), i.e(267), i.e(63347), i.e(3918), i.e(29031)]).then(i.bind(i, 99386))
            }
            i.d(t, {
                openHeaderSearchDialog: () => o,
                loadHeaderSearchDialog: () => n
            })
        },
        357824: (e, t, i) => {
            "use strict";
            i.d(t, {
                hoverMouseEventFilter: () => r,
                useAccurateHover: () => s,
                useHover: () => n
            });
            var o = i(667294);

            function n() {
                const [e, t] = (0, o.useState)(!1);
                return [e, {
                    onMouseOver: function(e) {
                        r(e) && t(!0)
                    },
                    onMouseOut: function(e) {
                        r(e) && t(!1)
                    }
                }]
            }

            function r(e) {
                return !e.currentTarget.contains(e.relatedTarget)
            }

            function s(e) {
                const [t, i] = (0, o.useState)(!1);
                return (0, o.useEffect)(() => {
                    const t = t => {
                        if (null === e.current) return;
                        const o = e.current.contains(t.target);
                        i(o)
                    };
                    return document.addEventListener("mouseover", t), () => document.removeEventListener("mouseover", t)
                }, []), t
            }
        },
        36493: (e, t, i) => {
            "use strict";
            i.d(t, {
                useOutsideEvent: () => r
            });
            var o = i(667294),
                n = i(976623);

            function r(e) {
                const {
                    click: t,
                    mouseDown: i,
                    touchEnd: r,
                    touchStart: s,
                    handler: a,
                    reference: l,
                    ownerDocument: c = document
                } = e, d = (0, o.useRef)(null), u = (0, o.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, o.useLayoutEffect)(() => {
                    const e = {
                            click: t,
                            mouseDown: i,
                            touchEnd: r,
                            touchStart: s
                        },
                        o = l ? l.current : d.current;
                    return (0, n.addOutsideEventListener)(u.current, o, a, c, e)
                }, [t, i, r, s, a]), l || d
            }
        },
        879405: (e, t, i) => {
            "use strict";
            i.d(t, {
                MatchMedia: () => n
            });
            var o = i(667294);
            class n extends o.PureComponent {
                constructor(e) {
                    super(e), this._handleChange = () => {
                        this.forceUpdate()
                    }, this.state = {
                        query: window.matchMedia(this.props.rule)
                    }
                }
                componentDidMount() {
                    this._subscribe(this.state.query)
                }
                componentDidUpdate(e, t) {
                    this.state.query !== t.query && (this._unsubscribe(t.query), this._subscribe(this.state.query))
                }
                componentWillUnmount() {
                    this._unsubscribe(this.state.query)
                }
                render() {
                    return this.props.children(this.state.query.matches)
                }
                static getDerivedStateFromProps(e, t) {
                    return e.rule !== t.query.media ? {
                        query: window.matchMedia(e.rule)
                    } : null
                }
                _subscribe(e) {
                    e.addListener(this._handleChange)
                }
                _unsubscribe(e) {
                    e.removeListener(this._handleChange)
                }
            }
        },
        387553: (e, t, i) => {
            "use strict";
            i.d(t, {
                globalCloseDelegate: () => n,
                globalCloseMenu: () => r
            });
            var o = i(896276);
            const n = new(i.n(o)());

            function r() {
                n.fire()
            }
        },
        159050: (e, t, i) => {
            "use strict";
            i.d(t, {
                MenuContext: () => o
            });
            const o = i(667294).createContext(null)
        },
        45867: (e, t, i) => {
            "use strict";
            i.d(t, {
                DEFAULT_MENU_THEME: () => _,
                Menu: () => f
            });
            var o = i(667294),
                n = i(294184),
                r = i.n(n),
                s = i(416282),
                a = i(184162),
                l = i(53549),
                c = i(629791),
                d = i(387553),
                u = i(630976),
                h = i(626083),
                p = i(984123),
                g = i(159050),
                m = i(133467);
            const _ = m;
            class f extends o.PureComponent {
                constructor(e) {
                    super(e), this._containerRef = null, this._scrollWrapRef = null, this._raf = null, this._manager = new u.OverlapManager, this._hotkeys = null, this._scroll = 0, this._handleContainerRef = e => {
                        this._containerRef = e, this.props.reference && ("function" == typeof this.props.reference && this.props.reference(e), "object" == typeof this.props.reference && (this.props.reference.current = e))
                    }, this._handleScrollWrapRef = e => {
                        this._scrollWrapRef = e, "function" == typeof this.props.scrollWrapReference && this.props.scrollWrapReference(e), "object" == typeof this.props.scrollWrapReference && (this.props.scrollWrapReference.current = e)
                    }, this._handleMeasure = e => {
                        var t, i, o;
                        if (this.state.isMeasureValid) return;
                        const {
                            position: n
                        } = this.props, r = (0, s.ensureNotNull)(this._containerRef);
                        let l = r.getBoundingClientRect();
                        const c = document.documentElement.clientHeight,
                            d = document.documentElement.clientWidth;
                        let u = c - 0;
                        const h = l.height > u;
                        if (h) {
                            (0, s.ensureNotNull)(this._scrollWrapRef).style.overflowY = "scroll", l = r.getBoundingClientRect()
                        }
                        const {
                            width: p,
                            height: g
                        } = l, m = "function" == typeof n ? n(p, g) : n, _ = d - (null !== (t = m.overrideWidth) && void 0 !== t ? t : p) - 0, f = (0, a.clamp)(m.x, 0, Math.max(0, _)), v = c - (null !== (i = m.overrideHeight) && void 0 !== i ? i : g) - 0;
                        let w = (0, a.clamp)(m.y, 0, Math.max(0, v));
                        m.forbidCorrectYCoord && w < m.y && (u -= m.y - w, w = m.y), this.setState({
                            appearingMenuHeight: null !== (o = m.overrideHeight) && void 0 !== o ? o : h ? u : void 0,
                            appearingMenuWidth: m.overrideWidth,
                            appearingPosition: {
                                x: f,
                                y: w
                            },
                            isMeasureValid: !0
                        }, () => {
                            this._restoreScrollPosition(), e && e()
                        })
                    }, this._restoreScrollPosition = () => {
                        const e = document.activeElement,
                            t = (0, s.ensureNotNull)(this._containerRef);
                        if (null !== e && t.contains(e)) try {
                            e.scrollIntoView()
                        } catch (e) {} else(0, s.ensureNotNull)(this._scrollWrapRef).scrollTop = this._scroll
                    }, this._resizeForced = () => {
                        this.setState({
                            appearingMenuHeight: void 0,
                            appearingMenuWidth: void 0,
                            appearingPosition: void 0,
                            isMeasureValid: void 0
                        })
                    }, this._resize = () => {
                        null === this._raf && (this._raf = requestAnimationFrame(() => {
                            this.setState({
                                appearingMenuHeight: void 0,
                                appearingMenuWidth: void 0,
                                appearingPosition: void 0,
                                isMeasureValid: void 0
                            }), this._raf = null
                        }))
                    }, this._handleGlobalClose = () => {
                        this.props.onClose()
                    }, this._handleSlot = e => {
                        this._manager.setContainer(e)
                    }, this._handleScroll = () => {
                        this._scroll = (0, s.ensureNotNull)(this._scrollWrapRef).scrollTop
                    }, this.state = {}
                }
                componentDidMount() {
                    this._handleMeasure(this.props.onOpen);
                    const {
                        customCloseDelegate: e = d.globalCloseDelegate
                    } = this.props;
                    e.subscribe(this, this._handleGlobalClose), window.addEventListener("resize", this._resize);
                    const t = null !== this.context;
                    this._hotkeys || t || (this._hotkeys = h.createGroup({
                        desc: "Popup menu"
                    }), this._hotkeys.add({
                        desc: "Close",
                        hotkey: 27,
                        handler: () => this._handleGlobalClose()
                    }))
                }
                componentDidUpdate() {
                    this._handleMeasure()
                }
                componentWillUnmount() {
                    const {
                        customCloseDelegate: e = d.globalCloseDelegate
                    } = this.props;
                    e.unsubscribe(this, this._handleGlobalClose), window.removeEventListener("resize", this._resize), this._hotkeys && (this._hotkeys.destroy(), this._hotkeys = null), null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null)
                }
                render() {
                    const {
                        id: e,
                        role: t,
                        "aria-labelledby": i,
                        "aria-activedescendant": n,
                        children: s,
                        minWidth: a,
                        theme: d = m,
                        className: u,
                        maxHeight: h,
                        onMouseOver: _,
                        onMouseOut: f,
                        onKeyDown: w,
                        onFocus: y,
                        onBlur: b
                    } = this.props, {
                        appearingMenuHeight: S,
                        appearingMenuWidth: T,
                        appearingPosition: E,
                        isMeasureValid: C
                    } = this.state;
                    return o.createElement(g.MenuContext.Provider, {
                        value: this
                    }, o.createElement(p.SubmenuHandler, null, o.createElement(c.SlotContext.Provider, {
                        value: this._manager
                    }, o.createElement("div", {
                        id: e,
                        role: t,
                        "aria-labelledby": i,
                        "aria-activedescendant": n,
                        className: r()(u, d.menuWrap, !C && d.isMeasuring),
                        style: {
                            height: S,
                            left: E && E.x,
                            minWidth: a,
                            position: "fixed",
                            top: E && E.y,
                            width: T
                        },
                        "data-name": this.props["data-name"],
                        ref: this._handleContainerRef,
                        onScrollCapture: this.props.onScroll,
                        onContextMenu: l.preventDefaultForContextMenu,
                        tabIndex: this.props.tabIndex,
                        onMouseOver: _,
                        onMouseOut: f,
                        onKeyDown: w,
                        onFocus: y,
                        onBlur: b
                    }, o.createElement("div", {
                        className: r()(d.scrollWrap, !this.props.noMomentumBasedScroll && d.momentumBased),
                        style: {
                            overflowY: void 0 !== S ? "scroll" : "auto",
                            maxHeight: h
                        },
                        onScrollCapture: this._handleScroll,
                        ref: this._handleScrollWrapRef
                    }, o.createElement(v, {
                        className: d.menuBox
                    }, s)))), o.createElement(c.Slot, {
                        reference: this._handleSlot
                    })))
                }
                update(e) {
                    e ? this._resizeForced() : this._resize()
                }
            }

            function v(e) {
                const t = (0, s.ensureNotNull)((0, o.useContext)(p.SubmenuContext)),
                    i = o.useRef(null);
                return o.createElement("div", {
                    ref: i,
                    className: e.className,
                    onMouseOver: function(e) {
                        if (!(null !== t.current && e.target instanceof Node && (o = e.target,
                                null === (n = i.current) || void 0 === n ? void 0 : n.contains(o)))) return;
                        var o, n;
                        t.isSubmenuNode(e.target) || t.setCurrent(null)
                    },
                    "data-name": "menu-inner"
                }, e.children)
            }
            f.contextType = p.SubmenuContext
        },
        630976: (e, t, i) => {
            "use strict";
            i.d(t, {
                OverlapManager: () => r,
                getRootOverlapManager: () => a
            });
            var o = i(416282);
            class n {
                constructor() {
                    this._storage = []
                }
                add(e) {
                    this._storage.push(e)
                }
                remove(e) {
                    this._storage = this._storage.filter(t => e !== t)
                }
                has(e) {
                    return this._storage.includes(e)
                }
                getItems() {
                    return this._storage
                }
            }
            class r {
                constructor(e = document) {
                    this._storage = new n, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
                }
                setContainer(e) {
                    const t = this._container,
                        i = null === e ? this._document.createDocumentFragment() : e;
                    ! function(e, t) {
                        Array.from(e.childNodes).forEach(e => {
                            e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
                        })
                    }(t, i), this._container = i
                }
                registerWindow(e) {
                    this._storage.has(e) || this._storage.add(e)
                }
                ensureWindow(e, t = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const i = this._windows.get(e);
                    if (void 0 !== i) return i;
                    this.registerWindow(e);
                    const o = this._document.createElement("div");
                    if (o.style.position = t.position, o.style.zIndex = this._index.toString(), o.dataset.id = e, void 0 !== t.index) {
                        const e = this._container.childNodes.length;
                        if (t.index >= e) this._container.appendChild(o);
                        else if (t.index <= 0) this._container.insertBefore(o, this._container.firstChild);
                        else {
                            const e = this._container.childNodes[t.index];
                            this._container.insertBefore(o, e)
                        }
                    } else "reverse" === t.direction ? this._container.insertBefore(o, this._container.firstChild) : this._container.appendChild(o);
                    return this._windows.set(e, o), ++this._index, o
                }
                unregisterWindow(e) {
                    this._storage.remove(e);
                    const t = this._windows.get(e);
                    void 0 !== t && (null !== t.parentElement && t.parentElement.removeChild(t), this._windows.delete(e))
                }
                getZindex(e) {
                    const t = this.ensureWindow(e);
                    return parseInt(t.style.zIndex || "0")
                }
                moveToTop(e) {
                    if (this.getZindex(e) !== this._index) {
                        this.ensureWindow(e).style.zIndex = (++this._index).toString()
                    }
                }
                removeWindow(e) {
                    this.unregisterWindow(e)
                }
            }
            const s = new WeakMap;

            function a(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, o.ensureDefined)(s.get(t)); {
                    const t = new r(e),
                        i = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return s.set(i, t), t.setContainer(i), e.body.appendChild(i), t
                }
            }
        },
        669369: (e, t, i) => {
            "use strict";
            i.d(t, {
                CloseDelegateContext: () => r
            });
            var o = i(667294),
                n = i(387553);
            const r = o.createContext(n.globalCloseDelegate)
        },
        241323: (e, t, i) => {
            "use strict";
            i.d(t, {
                PopupMenu: () => c
            });
            var o = i(667294),
                n = i(973935),
                r = i(472625),
                s = i(45867),
                a = i(669369),
                l = i(36493);

            function c(e) {
                const {
                    controller: t,
                    children: i,
                    isOpened: c,
                    closeOnClickOutside: d = !0,
                    doNotCloseOn: u,
                    onClickOutside: h,
                    onClose: p,
                    ...g
                } = e, m = (0, o.useContext)(a.CloseDelegateContext), _ = (0, l.useOutsideEvent)({
                    handler: function(e) {
                        h && h(e);
                        if (!d) return;
                        if (u && e.target instanceof Node) {
                            const t = n.findDOMNode(u);
                            if (t instanceof Node && t.contains(e.target)) return
                        }
                        p()
                    },
                    mouseDown: !0,
                    touchStart: !0
                });
                return c ? o.createElement(r.Portal, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    pointerEvents: "none"
                }, o.createElement("span", {
                    ref: _,
                    style: {
                        pointerEvents: "auto"
                    }
                }, o.createElement(s.Menu, { ...g,
                    onClose: p,
                    onScroll: function(t) {
                        const {
                            onScroll: i
                        } = e;
                        i && i(t)
                    },
                    customCloseDelegate: m,
                    ref: t
                }, i))) : null
            }
        },
        472625: (e, t, i) => {
            "use strict";
            i.d(t, {
                Portal: () => l,
                PortalContext: () => c
            });
            var o = i(667294),
                n = i(973935),
                r = i(75443),
                s = i(630976),
                a = i(629791);
            class l extends o.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, r.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", n.createPortal(o.createElement(c.Provider, {
                        value: this
                    }, this.props.children), e)
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid)
                }
                _manager() {
                    return null === this.context ? (0, s.getRootOverlapManager)() : this.context
                }
            }
            l.contextType = a.SlotContext;
            const c = o.createContext(null)
        },
        629791: (e, t, i) => {
            "use strict";
            i.d(t, {
                Slot: () => n,
                SlotContext: () => r
            });
            var o = i(667294);
            class n extends o.Component {
                shouldComponentUpdate() {
                    return !1
                }
                render() {
                    return o.createElement("div", {
                        style: {
                            position: "fixed",
                            zIndex: 150,
                            left: 0,
                            top: 0
                        },
                        ref: this.props.reference
                    })
                }
            }
            const r = o.createContext(null)
        },
        984123: (e, t, i) => {
            "use strict";
            i.d(t, {
                SubmenuContext: () => n,
                SubmenuHandler: () => r
            });
            var o = i(667294);
            const n = o.createContext(null);

            function r(e) {
                const [t, i] = (0, o.useState)(null), r = (0, o.useRef)(null), s = (0, o.useRef)(new Map);
                return (0, o.useEffect)(() => () => {
                    null !== r.current && clearTimeout(r.current)
                }, []), o.createElement(n.Provider, {
                    value: {
                        current: t,
                        setCurrent: function(e) {
                            null !== r.current && (clearTimeout(r.current), r.current = null);
                            null === t ? i(e) : r.current = setTimeout(() => {
                                r.current = null, i(e)
                            }, 100)
                        },
                        registerSubmenu: function(e, t) {
                            return s.current.set(e, t), () => {
                                s.current.delete(e)
                            }
                        },
                        isSubmenuNode: function(e) {
                            return Array.from(s.current.values()).some(t => t(e))
                        }
                    }
                }, e.children)
            }
        },
        302444: (e, t, i) => {
            "use strict";

            function o(e, t, i = {}) {
                const o = Object.assign({}, t);
                for (const n of Object.keys(t)) {
                    const r = i[n] || n;
                    r in e && (o[n] = [e[r], t[n]].join(" "))
                }
                return o
            }

            function n(e, t, i = {}) {
                return Object.assign({}, e, o(e, t, i))
            }
            i.d(t, {
                weakComposeClasses: () => o,
                mergeThemes: () => n
            })
        },
        347666: (e, t, i) => {
            "use strict";
            i.d(t, {
                getPixelsFromEvent: () => n
            });
            const o = [() => navigator.userAgent.includes("Win") && navigator.userAgent.includes("Chrome") ? 1 / window.devicePixelRatio : 1, () => 16, (e = (() => 0)) => {
                var t;
                return .8 * (null !== (t = e()) && void 0 !== t ? t : 0)
            }];

            function n(e, t = (() => ({}))) {
                return {
                    x: e.deltaX * o[e.deltaMode](() => t().width),
                    y: e.deltaY * o[e.deltaMode](() => t().height)
                }
            }
        },
        606628: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M10.47 19.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06zM17 14l.53.53c.3-.3.3-.77 0-1.06L17 14zm-5.47-6.53a.75.75 0 1 0-1.06 1.06l1.06-1.06zm0 13.06l6-6-1.06-1.06-6 6 1.06 1.06zm6-7.06l-6-6-1.06 1.06 6 6 1.06-1.06z"/></svg>'
        },
        688209: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M10 8.5H7c-.83 0-1.5.67-1.5 1.5v3.75H8v1.5H5.5V21c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5v-5.75H20v-1.5h2.5V10c0-.83-.67-1.5-1.5-1.5H10zM18 7h3a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h3V6c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1zm-1.5 0V6a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v1h5zm-3.25 4.25a2.5 2.5 0 0 0 0 5h1.5a1 1 0 1 1 0 2H13.5c-.69 0-1.25-.56-1.25-1.25h-1.5c0 1.43 1.1 2.61 2.5 2.74V21h1.5v-1.25a2.5 2.5 0 0 0 0-5h-1.5a1 1 0 1 1 0-2h1.25c.69 0 1.25.56 1.25 1.25h1.5c0-1.43-1.1-2.61-2.5-2.74V10h-1.5v1.25z"/></svg>'
        },
        962234: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M9.75 3c.41 0 .75.34.75.75V5h7V3.75a.75.75 0 0 1 1.5 0V5a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4V3.75c0-.41.34-.75.75-.75zM9 6.5h10A2.5 2.5 0 0 1 21.5 9v1.5h-15V9A2.5 2.5 0 0 1 9 6.5zM6.5 12v7A2.5 2.5 0 0 0 9 21.5h10a2.5 2.5 0 0 0 2.5-2.5v-7h-15z"/></svg>'
        },
        900260: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M20.52 8.54l-1.78 1.78a6 6 0 1 1-1.06-1.06l1.78-1.78a8.5 8.5 0 1 0 1.06 1.06zm-5.74 3.62l1.83-1.83a4.5 4.5 0 1 0 1.06 1.06l-1.83 1.83A2 2 0 0 1 14 16a2 2 0 1 1 .78-3.84zm6.8-4.68a10 10 0 1 1-.51-.55c.18.18.35.36.51.55z"/></svg>'
        },
        846233: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M15.83 7.5l4.67 4.67 4.67-4.67-4.67-4.67-4.67 4.67zm3.26-6.09L13 7.5l6.09 6.09L20.5 15l1.41-1.41L26.6 8.9 28 7.5l-1.41-1.41L21.9 1.4 20.5 0l-1.41 1.41zM4 4h7v7H4V4zM2 2h11v11H2V2zm15 15h7v7h-7v-7zm-2-2h11v11H15V15zM4 17h7v7H4v-7zm-2-2h11v11H2V15z"/></svg>'
        },
        615184: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>'
        },
        329123: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>'
        },
        69612: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21"><path d="M6 1.5A4.5 1.5 0 0 0 1.5 3 4.5 1.5 0 0 0 6 4.5 4.5 1.5 0 0 0 10.5 3 4.5 1.5 0 0 0 6 1.5zm8.8 2.7a4.5 1.5 0 0 0-4.5 1.5 4.5 1.5 0 0 0 4.5 1.5 4.5 1.5 0 0 0 4.5-1.5 4.5 1.5 0 0 0-4.5-1.5zm-12.6.7a4.5 1.5 0 0 0-.7.8A4.5 1.5 0 0 0 6 7.2a4.5 1.5 0 0 0 3.8-.7v-.8c0-.2.1-.5.2-.7a4.5 1.5 0 0 0-.2-.1 4.5 1.5 0 0 1-3.8.7 4.5 1.5 0 0 1-3.8-.7zm0 2.7a4.5 1.5 0 0 0-.7.8 4.5 1.5 0 0 0 3 1.4v-.3c0-.4.2-.7.5-1 .2-.1.3-.1.4-.2a4.5 1.5 0 0 1-3.2-.7zm16.4 0a4.5 1.5 0 0 1-3.8.7 4.5 1.5 0 0 1-1.3-.1c.2.1.3.2.5.3.3.3.5.6.5 1v.4a4.5 1.5 0 0 0 .3 0 4.5 1.5 0 0 0 4.5-1.5 4.5 1.5 0 0 0-.7-.8zM9.5 8A4.5 1.5 0 0 0 5 9.5 4.5 1.5 0 0 0 9.5 11 4.5 1.5 0 0 0 14 9.5 4.5 1.5 0 0 0 9.5 8zm-7.3 2.3a4.5 1.5 0 0 0-.7.8 4.5 1.5 0 0 0 3 1.4v-1.6a4.5 1.5 0 0 1-2.3-.6zm16.4 0a4.5 1.5 0 0 1-3.8.7 4.5 1.5 0 0 1-.3 0v1.6a4.5 1.5 0 0 0 .3 0 4.5 1.5 0 0 0 4.5-1.5 4.5 1.5 0 0 0-.7-.8zM5.7 11.4a4.5 1.5 0 0 0-.7.8 4.5 1.5 0 0 0 4.5 1.5 4.5 1.5 0 0 0 4.5-1.5 4.5 1.5 0 0 0-.7-.8 4.5 1.5 0 0 1-3.8.7 4.5 1.5 0 0 1-3.8-.7zM18.6 13a4.5 1.5 0 0 1-3.8.7 4.5 1.5 0 0 1-.3 0v1.6a4.5 1.5 0 0 0 .3 0 4.5 1.5 0 0 0 4.5-1.5 4.5 1.5 0 0 0-.7-.8zM5.7 14.1a4.5 1.5 0 0 0-.7.8 4.5 1.5 0 0 0 4.5 1.5 4.5 1.5 0 0 0 4.5-1.5 4.5 1.5 0 0 0-.7-.8 4.5 1.5 0 0 1-3.8.7 4.5 1.5 0 0 1-3.8-.7zm0 2.7a4.5 1.5 0 0 0-.7.8 4.5 1.5 0 0 0 4.5 1.5 4.5 1.5 0 0 0 4.5-1.5 4.5 1.5 0 0 0-.7-.8 4.5 1.5 0 0 1-3.8.7 4.5 1.5 0 0 1-3.8-.7z"/></svg>'
        },
        154181: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="22" height="22"><path d="M6.5 1C5.67 1 5 1.67 5 2.5v1C5 4.33 5.67 5 6.5 5S8 4.33 8 3.5v-1C8 1.67 7.33 1 6.5 1zm8 0c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5S16 4.33 16 3.5v-1c0-.83-.67-1.5-1.5-1.5zM1 4v16h19V4h-3.05c-.238 1.164-1.262 2-2.45 2-1.186-.002-2.208-.838-2.445-2H8.95C8.71 5.164 7.687 6 6.5 6c-1.186-.002-2.208-.838-2.445-2H1zm20 2v15H3v1h19V6h-1zM2 8h17v11H2V8zm3 1v3h3V9H5zm4 0v3h3V9H9zm4 0v3h3V9h-3zm-8 4v3h3v-3H5zm4 0v3h3v-3H9zm4 0v3h3v-3h-3z"/></svg>'
        },
        811656: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M22.308 8.606a.5.5 0 0 0-.616 0l-11.5 9a.5.5 0 0 0 0 .788l11.5 9a.5.5 0 0 0 .616 0l11.5-9a.5.5 0 0 0 0-.788l-11.5-9zM22 26.366L11.311 18 22 9.635 32.689 18 22 26.365zm0 4l-11.192-8.76-.616.788 11.5 9a.5.5 0 0 0 .616 0l11.5-9-.616-.788L22 30.366zm0 4l-11.192-8.76-.616.788 11.5 9a.5.5 0 0 0 .616 0l11.5-9-.616-.788L22 34.366z"/></svg>'
        },
        882351: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="M22.5 12a1 1 0 0 1 0 21 1 1 0 0 1 0-21m0 1a1 1 0 0 0 0 19 1 1 0 0 0 0-19m-7.15 16.85l.8.6-2.05 2.75-.8-.6zm13.48.57l.8-.6 2.07 2.78-.8.6zM22 22v-7h1v8h-6v-1zm9.93-2.95l-.58-.81a4 4 0 1 0-5.84-5.2l-.87-.49a5 5 0 1 1 7.3 6.5zm-11.57-6.5l-.87.48a4 4 0 1 0-5.9 5.17l-.6.8a5 5 0 1 1 7.36-6.46z"/></svg>'
        },
        195754: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill="none" stroke="currentColor"><path d="M14.5 27.5c0 4.97 3.03 8 8 8 4.97 0 8-3.03 8-8v-6a3 3 0 0 0-3-3h-10a3 3 0 0 0-3 3v6z"/><path stroke-linecap="square" d="M22.5 19v16"/><path d="M27.5 18.5a5 5 0 1 0-10 0m13 3h2a2 2 0 0 1 2 2V25m-4 2.5h2a2 2 0 0 1 2 2V31M29 32.5h1.5a2 2 0 0 1 2 2V36m-18-14.5h-2a2 2 0 0 0-2 2V25m4 2.5h-2a2 2 0 0 0-2 2V31m5.5 1.5h-1.5a2 2 0 0 0-2 2V36"/><g transform="translate(12 8)"><circle cx="2.5" cy="2.5" r="2"/><path d="M3.911 3.911L7 7"/></g><g transform="translate(26 8)"><circle cx="4.5" cy="2.5" r="2"/><path d="M3.115 3.885L0 7"/></g></g></svg>'
        },
        269092: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m29.5 10a4.5 4.5 0 0 1 4.5 4.5v15a4.5 4.5 0 0 1-4.5 4.5h-15a4.5 4.5 0 0 1-4.5-4.5v-15a4.5 4.5 0 0 1 4.5-4.5m0 1a3.5 3.5 0 0 0-3.5 3.5v15a3.5 3.5 0 0 0 3.5 3.5h15a3.5 3.5 0 0 0 3.5-3.5v-15a3.5 3.5 0 0 0-3.5-3.5M16 8h1v5h-1m11-5h1v5h-1M16 27a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m-6-7a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m-12-7a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2m6-1a1 1 0 0 0 0 4 1 1 0 0 0 0-4m0 1a1 1 0 0 1 0 2 1 1 0 0 1 0-2"/></svg>'
        },
        969581: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m5 12v-1h4v1zm5-6h1v4h-1zm0 7h1v4h-1zm2-1v-1h4v1zm7 0v-1h10.5a4.5 4.5 0 0 1 4.5 4.5v14a4.5 4.5 0 0 1-4.5 4.5h-15a4.5 4.5 0 0 1-4.5-4.5V20h1v9.5a3.5 3.5 0 0 0 3.5 3.5h15a3.5 3.5 0 0 0 3.5-3.5v-14a3.5 3.5 0 0 0-3.5-3.5H19zm-3 5a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2H16zm0-1h12a2 2 0 1 1 0 4H16a2 2 0 1 1 0-4zm-1 8v-1h8v1zm0 4v-1h8v1zm11-4v-1h3v1zm0 4v-1h3v1z"/></svg>'
        },
        562309: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m17 30a1 1 0 0 1 0 4h-4a1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m0-7a1 1 0 0 1 0 4h-4a1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m6 5a1 1 0 0 1 0 4 1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2 1 1 0 0 0 0-2m0-7a1 1 0 0 1 0 4 1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2 1 1 0 0 0 0-2m0-7a1 1 0 0 1 0 4 1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2 1 1 0 0 0 0-2m0-7a1 1 0 0 1 0 4 1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2 1 1 0 0 0 0-2m10 5a1 1 0 0 1 0 4h-4a1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m0-7a1 1 0 0 1 0 4h-4a1 1 0 0 1 0-4m0 1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2"/></svg>'
        },
        991090: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m28.5 16.92l.14-.8.65.47a9.8 9.8 0 0 1 1.87 2A10.12 10.12 0 0 1 33 24.5C33 30.28 28.28 35 22.5 35S12 30.28 12 24.5c0-4.4 1.71-6.67 6.46-10.3l.49-.36a30 30 0 0 0 3.2-2.7l.4-.39.34.44a12.57 12.57 0 0 1 1.05 1.64 7.95 7.95 0 0 1 .93 5.5 28.56 28.56 0 0 1-.71 3.64c2.46-.27 3.85-2.04 4.35-5.05zm-8.95-2.29l-.48.37C14.55 18.45 13 20.5 13 24.5c0 5.22 4.28 9.5 9.5 9.5s9.5-4.28 9.5-9.5c0-2.08-.62-3.86-1.66-5.34a8.91 8.91 0 0 0-1.02-1.22C28.55 21.13 26.66 23 23.5 23h-.66l.18-.64a35.38 35.38 0 0 0 .49-2.02c.16-.74.28-1.46.37-2.14a7 7 0 0 0-.82-4.9c-.2-.38-.41-.72-.63-1.04-.74.7-1.55 1.36-2.88 2.37z"/></svg>'
        },
        248060: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><g fill="none" stroke="currentcolor"><path d="M19.5 33.5h6a2 2 0 0 0 2-2v-4c2.41-1.615 4-4.88 4-8a9 9 0 0 0-18 0c0 3.122 1.586 6.386 4 8v4a2 2 0 0 0 2 2zm-2-6h10m-10 3h10m-7 3v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1"/><path stroke-linecap="square" d="M22.5 27.5v-7m-2 0h4"/><path d="M11.86 13.945A11.948 11.948 0 0 0 10.5 19.5c0 2.009.494 3.902 1.366 5.566M9.203 12.552A14.935 14.935 0 0 0 7.5 19.5c0 2.508.615 4.872 1.703 6.95M33.14 13.945A11.946 11.946 0 0 1 34.5 19.5c0 2.009-.494 3.902-1.366 5.566m2.663-12.514A14.935 14.935 0 0 1 37.5 19.5c0 2.508-.615 4.872-1.703 6.95"/></g></svg>'
        },
        413425: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m27 31.5a2.5 2.5 0 0 1-2.5 2.5h-6a2.5 2.5 0 0 1-2.5-2.5v-3.74c-2.41-1.74-4-5.04-4-8.26a9.5 9.5 0 0 1 19 0c0 3.21-1.6 6.52-4 8.26v3.74zM18.5 33h6a1.5 1.5 0 0 0 1.5-1.5v-4.27l.22-.14c2.25-1.51 3.78-4.6 3.78-7.59a8.5 8.5 0 1 0-17 0c0 3 1.53 6.08 3.78 7.58l.22.15v4.27a1.5 1.5 0 0 0 1.5 1.5zm-2-5v-1h10v1zm0 3v-1h10v1zm2.5 2.5h1v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1h1v1a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-1zm3-5.5h-1v-8h1zm-3-7v-1h5v1z"/></svg>'
        },
        786450: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width="45" height="45" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.5 11c-.83 0-1.5.67-1.5 1.5v19a2.5 2.5 0 0 0 2.5 2.5H33.5c.59 0 1.06-.15 1.43-.4.37-.24.61-.57.77-.88a2.96 2.96 0 0 0 .3-1.18v-.04h-.5.5v-11c0-.83-.67-1.5-1.5-1.5H32v-6.5c0-.83-.67-1.5-1.5-1.5h-19zM32 20V31.55a1.97 1.97 0 0 0 .2.73c.1.19.23.36.42.5.2.12.47.22.88.22.41 0 .69-.1.88-.23.2-.13.33-.3.42-.5a1.96 1.96 0 0 0 .2-.76V20.5a.5.5 0 0 0-.5-.5H32zm-.7 12.72l.16.28H12.5a1.5 1.5 0 0 1-1.5-1.5v-19c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5v19h.5-.5v.04a2.08 2.08 0 0 0 .04.35c.03.22.1.53.26.83zM15.5 15c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3zm-.5 1.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3zM28 24H14v-1h14v1zm-6-8h6v-1h-6v1zm6 3h-6v-1h6v1zm-14 8h14v-1H14v1zm7 3h-7v-1h7v1z"/></svg>'
        },
        743882: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="M23.98 13.12c3.67 1.19 5.98 4.85 6.02 9.26v2.31c-.04 1.53.03 2.14.35 2.46l-.7.7c-.61-.6-.7-1.32-.66-3.18L29 24v-1.62c-.04-4.13-2.23-7.46-5.63-8.4a.5.5 0 0 1-.37-.48c0-1.04-.56-1.5-1.5-1.5s-1.5.46-1.5 1.5a.5.5 0 0 1-.37.48c-3.4.93-5.59 4.27-5.63 8.4V24l.01.67c.04 1.86-.05 2.58-.66 3.18l-.7-.7c.32-.32.4-.93.36-2.46L13 24v-1.62c.04-4.41 2.35-8.07 6.02-9.26.15-1.39 1.14-2.12 2.48-2.12s2.33.73 2.48 2.12zM13 28a1 1 0 0 0 0 2h17a1 1 0 0 0 0-2m0-1a1 1 0 0 1 0 4H13a1 1 0 0 1 0-4m6 3.5a1 1 0 0 0 5 0h1a1 1 0 0 1-7 0"/></svg>'
        },
        570376: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m14.5 10a4.5 4.5 0 0 0-4.5 4.5v17.2l4.7-4.7h10.8a4.5 4.5 0 0 0 4.5-4.5v-8a4.5 4.5 0 0 0-4.5-4.5zm0 1h11a3.5 3.5 0 0 1 3.5 3.5v8a3.5 3.5 0 0 1-3.5 3.5H14.3L11 29.3V14.5a3.5 3.5 0 0 1 3.5-3.5zm15 5v1h1a2.5 2.5 0 0 1 2.5 2.5v12.8L29.7 29h-8.2a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5h7.8l4.7 4.7V19.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>'
        },
        586544: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m21.5 10a3.5 3.5 0 0 0-3.5 3.5v3h1v-3a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-1v1h1a3.5 3.5 0 0 0 3.5-3.5v-3a3.5 3.5 0 0 0-3.5-3.5zm-7 6a4.5 4.5 0 0 0-4.5 4.5v13.2l4.7-4.7h10.8a4.5 4.5 0 0 0 4.5-4.5v-4a4.5 4.5 0 0 0-4.5-4.5zm0 1h11a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-3.5 3.5H14.3L11 31.3V20.5a3.5 3.5 0 0 1 3.5-3.5zm15 5v1h1a2.5 2.5 0 0 1 2.5 2.5v8.8L29.7 31h-8.2a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5h7.8l4.7 4.7V25.5a3.5 3.5 0 0 0-3.5-3.5z"/></svg>'
        },
        894255: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m18 18v-.5c0-1.2.6-2 1.5-2.7.8-.5 2-.8 3-.8s2.2.3 3 .8c.9.6 1.5 1.5 1.5 2.7a4 4 0 0 1-1.3 2.8l-2.3 2c-.3.3-.4.6-.4 1.2v.5h-1v-.5c0-.8.2-1.4.6-1.9l2.4-2c.6-.7 1-1.3 1-2.1a2 2 0 0 0-1-1.8c-.7-.5-1.6-.7-2.5-.7-1 0-1.8.2-2.5.7-.6.4-1 1-1 1.8v.5m3.5 8a1 1 0 0 0 0 5 1 1 0 0 0 0-5m0 1a1 1 0 0 1 0 3 1 1 0 0 1 0-3m0-17a1 1 0 0 0 0 25 1 1 0 0 0 0-25m0 1a1 1 0 0 1 0 23 1 1 0 0 1 0-23"/></svg>'
        },
        680585: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width="45" height="45" fill="none"><path fill="currentcolor" fill-rule="evenodd" clip-rule="evenodd" d="M14.25 23.02a8.76 8.76 0 0 1 3.6-7.09l-.51-.87a9.76 9.76 0 0 0-.05 15.88l.5-.88a8.76 8.76 0 0 1-3.54-7.04zm17.5 0c0 2.89-1.39 5.45-3.54 7.04l.5.87a9.76 9.76 0 0 0-.05-15.87l-.5.87a8.76 8.76 0 0 1 3.6 7.09zM9 23.02c0 4.83 2.44 9.1 6.16 11.61l-.5.87a15.01 15.01 0 0 1 .05-25l.5.87A14.01 14.01 0 0 0 9 23.02zm21.84 11.61l.5.87a15.01 15.01 0 0 0-.05-25l-.5.87a14.01 14.01 0 0 1 .05 23.26zm-9.2-8.03l5.6-3.23a1 1 0 0 0 0-1.74l-5.6-3.23a1 1 0 0 0-1.5.87v6.46a1 1 0 0 0 1.5.87zm-.5-7.33l5.6 3.23-5.6 3.23v-6.46z"/></svg>'
        },
        918170: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width="45" height="45"><path fill="currentcolor" d="M16.5 21.5l8.146 8.146a.914.914 0 0 1-1.292 1.293L16.5 24.086l-6.854 6.853a.914.914 0 0 1-1.292-1.293L16.5 21.5zm0 4l6.146 6.146a1.914 1.914 0 0 0 2.708-2.707L16.5 20.086l-8.854 8.853a1.914 1.914 0 1 0 2.708 2.707L16.5 25.5zm13 0l8.146-8.146a.914.914 0 0 0-1.292-1.293L29.5 22.914l-6.854-6.853a.914.914 0 0 0-1.292 1.293L29.5 25.5zm0-4l6.146-6.146a1.914 1.914 0 0 1 2.708 2.707L29.5 26.914l-8.854-8.853a1.914 1.914 0 1 1 2.708-2.707L29.5 21.5z"/></svg>'
        },
        580525: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"><path fill="currentcolor" d="m29.5 11a4.5 4.5 0 0 1 4.5 4.5v14a4.5 4.5 0 0 1-4.5 4.5h-15a4.5 4.5 0 0 1-4.5-4.5v-14a4.5 4.5 0 0 1 4.5-4.5m0 1a3.5 3.5 0 0 0-3.5 3.5v14a3.5 3.5 0 0 0 3.5 3.5h15a3.5 3.5 0 0 0 3.5-3.5v-14a3.5 3.5 0 0 0-3.5-3.5M15 17v-1h14v1zm0 4v-1h14v1zm0 4v-1h14v1zm0 4v-1h14v1z"/></svg>'
        },
        536053: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108" width="108" height="108"><path fill="#2962FF" stroke="#2962FF" stroke-linejoin="round" stroke-width="2" d="m57.29 54a15.43 15.43 0 1 1 0-30.86 15.43 15.43 0 0 1 0 30.86zm5.06 10.3C66.2 64.3 83 69.74 83 85.5v3.47H31.57V85.9a21.6 21.6 0 0 1 21.6-21.6l9.18.02z"/><path fill="#4a4a4a" d="m48.71 50.86a17.43 17.43 0 1 1 0-34.86 17.43 17.43 0 0 1 0 34.86zm0-4a13.43 13.43 0 1 0 0-26.86 13.43 13.43 0 0 0 0 26.86zM25 81.83v-1.09a19.6 19.6 0 0 1 19.6-19.6 5627.07 5627.07 0 0 1 9.09.02 2 2 0 0 0 .17-4l-4.67-.01H44.6A23.6 23.6 0 0 0 21 80.74v3.08c0 1.1.9 2 2 2h51.43a2 2 0 1 0 0-4H25zM64.14 70h20.57a2 2 0 1 0 0-4H64.14a2 2 0 1 0 0 4z"/></svg>'
        },
        912869: e => {
            "use strict";
            e.exports = JSON.parse('{"size-header-height":"64px","size-sticky-symbol-header-height":"64px","media-tablet":"screen and (max-width: 1019px)","media-phone":"screen and (max-width: 767px)","media-phone-vertical":"screen and (max-width: 479px)","media-extreme-thin":"screen and (max-width: 329px)","media-mf-legacy-phone":"screen and (min-width: 480px)","media-mf-legacy-notebook":"screen and (min-width: 1020px)","media-mf-phone-landscape":"screen and (min-width: 568px)","media-mf-tablet-vertical":"screen and (min-width: 768px)","media-mf-tablet-landscape":"screen and (min-width: 1024px)","media-mf-laptop":"screen and (min-width: 1280px)","z-index-sticky-search-bar":101}')
        },
        62972: e => {
            "use strict";
            e.exports = JSON.parse('{"abrilcombr":"widget_user_token-abrilcombr","agencialbmcombr":"widget_user_token-agencialbmcombr","ambito":"widget_user_token-ambito","atlcapital":"widget_user_token-atlcapital","bankirosru":"widget_user_token-bankirosru","bbvach":"widget_user_token-bbvach","belugagroupru":"widget_user_token-belugagroupru","bovespa":"widget_user_token-bmfbovespacombr","bpmoneycombr":"widget_user_token-bpmoneycombr","cincodias":"widget_user_token-cincodias","copees":"widget_user_token-copees","easynvestcombr":"widget_user_token-easynvestcombr","elespanolcom":"widget_user_token-elespanolcom","elobreroes":"widget_user_token-elobreroes","elpaisfinanciero":"widget_user_token-elpaisfinanciero","euqueroinvestir":"widget_user_token-euqueroinvestircom","eurofins":"widget_user_token-eurofins","europapresses":"widget_user_token-europapresses","finixio":"widget_user_token-finixio","forbescombr":"widget_user_token-forbescombr","genialinvestimentos":"widget_user_token-genialinvestimentos","healthitalia":"widget_user_token-healthitalia","hegnarno":"widget_user_token-hegnarno","hipotecariocomar":"widget_user_token-hipotecariocomar","investopedia":"widget_user_token-investopedia","ivsgroup":"widget_user_token-ivsgroup","lainformacioncom":"widget_user_token-lainformacioncom","marcopolocombr":"widget_user_token-marcopolocombr","mercadoem1minutocombr":"widget_user_token-mercadoem1minutocombr","mercadofinancierocom":"widget_user_token-mercadofinancierocom","moex":"widget_user_token-moex","moneytimescombr":"widget_user_token-moneytimescombr","negocios":"widget_user_token-negocios","novafutura":"widget_user_token-novafutura","okdiario":"widget_user_token-okdiario","pse":"widget_user_token-pse","pseD":"widget_user_token-pseD","riyadhcapitalD":"widget_user_token-riyadhcapitalD","riyadhcapitalRT":"widget_user_token-riyadhcapitalRT","qecomqa":"widget_user_token-qecomqa","recrusulcombr":"widget_user_token-recrusulcombr","seekingalpha":"widget_user_token-seekingalpha","seudinheiro":"widget_user_token-seudinheiro","sgcompanyit":"widget_user_token-sgcompanyit","sharejunction":"widget_user_token-sharejunction","smartlab-custom":"widget_user_token-smartlab","smartlab":"widget_user_token-smartlab","spacemoneycombr":"widget_user_token-spacemoneycombr","theo3combr":"widget_user_token-theo3combr","thetradersnet":"widget_user_token-thetradersnet","toroinvestimentoscombr":"widget_user_token-toroinvestimentoscombr","vocesaabrilcombr":"widget_user_token-vocesaabrilcombr","xpicombr":"widget_user_token-xpicombr"}')
        },
        693175: e => {
            "use strict";
            e.exports = JSON.parse('{"ar_AE":["TADAWUL:TASI","TADAWUL:MT30","TVC:SPX","TVC:NDX","NSE:NIFTY","###الأسهم","TADAWUL:2222","TADAWUL:1120","TADAWUL:1150","NASDAQ:AAPL","NASDAQ:TSLA","###الفوركس","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###العقود الآجلة","TVC:USOIL","TVC:UKOIL","TVC:GOLD","###العملات الرقمية","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD"],"br":["BMFBOVESPA:IBOV","BMFBOVESPA:SMLL","TVC:SPX","TVC:DXY","TVC:DJI","###Ações (Stocks)","BMFBOVESPA:PETR4","BMFBOVESPA:VVAR3","BMFBOVESPA:ITSA4","BMFBOVESPA:MGLU3","###Cripto","BITSTAMP:BTCUSD","BINANCE:BTCBRL","BINANCE:ETHUSDT","###Futuros (Futures)","BMFBOVESPA:WIN1!","BMFBOVESPA:WDO1!","TVC:UKOIL","TVC:GOLD","BMFBOVESPA:CCM1!","###Moedas (Forex)","FX_IDC:USDBRL","FX:EURUSD","FX:USDJPY"],"de_DE":["TVC:DEU30","TVC:SPX","TVC:NDX","TVC:SX5E","TVC:UKX","###Aktien","XETR:SAP","XETR:BAYN","XETR:ADS","NASDAQ:AAPL","NASDAQ:TSLA","###Forex","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###Krypto","BITSTAMP:BTCUSD","BITSTAMP:BTCEUR","BITSTAMP:ETHUSD","###Futures","EUREX:FDAX1!","TVC:GOLD","TVC:USOIL","TVC:UKOIL"],"default":["SP:SPX","TVC:NDX","TVC:DJI","CBOE:VIX","TVC:DXY","###Stocks","NASDAQ:AAPL","NASDAQ:TSLA","NASDAQ:NFLX","###Futures","TVC:USOIL","TVC:GOLD","TVC:SILVER","###Forex","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###Crypto","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD"],"es":["TVC:SPX","TVC:IBEX35","TVC:DXY","TVC:VIX","###Acciones","NASDAQ:AAPL","BME:SAN","BCBA:GGAL","BMV:CEMEX/CPO","###Forex","FX:EURUSD","FX:USDJPY","FX:GBPUSD","###Futuros","TVC:USOIL","TVC:GOLD","TVC:SILVER","###Cripto","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD"],"fr":["TVC:CAC40","TVC:DEU30","TVC:NDX","TVC:SPX","###Actions","EURONEXT:FP","EURONEXT:GLE","EURONEXT:ORA","###Futures","TVC:UKOIL","TVC:USOIL","TVC:GOLD","###Forex","FX:EURUSD","FX:GBPUSD","FX:USDJPY","FX:EURGBP","###Crypto","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD","BINANCE:BTCUSDT","BITSTAMP:BTCEUR"],"he_IL":["TASE:TA35","TVC:NDX","TVC:SPX","TVC:DJI","TVC:DXY","###מניות","TASE:TEVA","TASE:OPK","TASE:INTL","NASDAQ:AAPL","NASDAQ:TSLA","###חוזים עתידיים","TVC:USOIL","TVC:GOLD","TVC:SILVER","###מט\\"ח","FX:EURUSD","FX:GBPUSD","FX:USDJPY","FX_IDC:USDILS","###קריפטו","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD"],"id":["IDX:COMPOSITE","IDX:IDX30","IDX:IDXBUMN20","TVC:SPX","TVC:DXY","###Saham (Stock)","IDX:ANTM","IDX:BBRI","IDX:TLKM","###Forex","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###Kontrak berjangka (Futures)","TVC:USOIL","TVC:UKOIL","TVC:GOLD","###Crypto","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD"],"in":["NSE:NIFTY","NSE:BANKNIFTY","BSE:SENSEX","NSE:CNXIT","TVC:SPX","###Stocks","NSE:RELIANCE","NSE:AXISBANK","NSE:HDFCBANK","NSE:ICICIBANK","NSE:BAJFINANCE","###Futures","NSE:NIFTY1!","NSE:BANKNIFTY1!","NSE:RELIANCE1!","NSE:INFY1!","###Forex","FX_IDC:USDINR","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###Crypto","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD","BITSTAMP:XRPUSD","BITSTAMP:LTCUSD"],"it":["TVC:FTMIB","TVC:SPX","TVC:DXY","TVC:UKX","TVC:DAX","###Forex","FX:EURUSD","FX:EURGBP","FX:USDJPY","FX:GBPUSD","###Azioni","MIL:ENI","MIL:ISP","NASDAQ:TSLA","NASDAQ:AAPL","###Futures","TVC:GOLD","TVC:USOIL","###Cripto","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD","BITSTAMP:BTCEUR"],"ja":["TVC:NI225","TVC:DJI","TVC:SPX","TVC:DXY","TVC:VIX","###株式","TSE:9984","TSE:8306","TSE:6758","###先物","TVC:GOLD","TVC:USOIL","OSE:NK2251!","TVC:US10Y","###FX","FX:USDJPY","FX:EURUSD","FX:GBPJPY","###仮想通貨","BITSTAMP:BTCUSD","BITFLYER:BTCJPY","BITMEX:XBTUSD"],"kr":["KRX:KOSPI","KRX:KOSPI200","KRX:KOSDAQ","TVC:SPX","TVC:NDX","TVC:NI225","###가상화페","BITMEX:XBTUSD","BITHUMB:BTCKRW","BINANCE:BTCUSDT","###외환","FX_IDC:USDKRW","FX:EURUSD","FX:USDJPY","###국내주식","KRX:005930","KRX:035420","KRX:005380","KRX:068270","KRX:035720","###해외선물","CBOT_MINI:YM1!","CME_MINI:NQ1!","CME_MINI:ES1!","NYMEX:CL1!","CBOE:VX1!"],"ms_MY":["FTSEMYX:FBMKLCI","FX_IDC:USDMYR","MYX:FCPO1!","TVC:SPX","TVC:VIX","###Saham","MYX:TOPGLOV","MYX:SUPERMX","MYX:CAREPLS","NASDAQ:AAPL","NASDAQ:TSLA","###Forex","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###Hadapan","TVC:USOIL","TVC:UKOIL","TVC:GOLD","###Kripto","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD","BITFINEX:BTCMYR"],"pl":["GPW:WIG20","TVC:SX5E","TVC:DAX","TVC:SPX","###Akcje Giełdowe","GPW:PKO","GPW:JSW","GPW:PKN","NASDAQ:AAPL","NASDAQ:TSLA","###Kontrakty Terminowe","TVC:USOIL","TVC:GOLD","TVC:SILVER","###Forex","FX_IDC:USDPLN","FX_IDC:EURPLN","FX:EURUSD","FX:USDJPY","FX:GBPUSD","###Krypto","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD"],"ru":["MOEX:IMOEX","MOEX:RTSI","TVC:SPX","TVC:NDX","###Акции","MOEX:SBER","MOEX:GAZP","MOEX:LKOH","MOEX:VTBR","###Фьючерсы","MOEX:BR1!","MOEX:RI1!","MOEX:GD1!","###Валюты","MOEX:USDRUB_TOM","MOEX:EURRUB_TOM","FX:EURUSD","FX:GBPUSD","###Криптовалюты","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD","BITSTAMP:XRPUSD","BITSTAMP:LTCUSD"],"sv_SE":["OMXSTO:OMXSPI","TVC:SPX","TVC:NDX","CURRENCYCOM:UK100","TVC:VIX","###Aktier","OMXSTO:VOLV_A","OMXSTO:ATCO_A","OMXSTO:INVE_A","NASDAQ:AAPL","NASDAQ:TSLA","###Terminer","TVC:USOIL","TVC:UKOIL","TVC:GOLD","###Valutor","FX:USDSEK","FX:EURSEK","FX:EURUSD","FX:USDJPY","###Krypto","BITSTAMP:BTCUSD","BITSTAMP:BTCEUR","BITSTAMP:ETHUSD"],"th_TH":["SET:SET","SET:SET50","TVC:SPX","TVC:NDX","TVC:VIX","###หุ้น","SET:AOT","SET:CPALL","SET:PTT","NASDAQ:AAPL","NASDAQ:TSLA","###ฟิวเจอร์","TVC:USOIL","TVC:GOLD","TVC:SILVER","###Forex","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###คริปโต","BITKUB:BTCTHB","BITSTAMP:BTCUSD","BINANCE:ETHUSDT"],"tr":["BIST:XU100","TVC:SPX","TVC:DAX","FX_IDC:XAUTRY","TVC:VIX","###Hisse Senetleri","BIST:THYAO","BIST:ASELS","BIST:TUPRS","NASDAQ:AAPL","NASDAQ:TSLA","###Vadeliler","TVC:USOIL","TVC:GOLD","TVC:SILVER","###Döviz","FX:USDTRY","FX:EURTRY","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###Kripto","BITFINEX:BTCTRY","BITSTAMP:BTCUSD","BITSTAMP:ETHUSD","BITSTAMP:XRPUSD"],"uk":["TVC:UKX","TVC:SPX","TVC:NDX","CBOE:VIX","TVC:DXY","###Stocks","LSE:LLOY","LSE:BARC","LSE:BP.","NASDAQ:AAPL","NASDAQ:TSLA","###Futures","OANDA:XAUUSD","TVC:USOIL","CURRENCYCOM:US30","###Forex","FX:GBPUSD","FX:EURUSD","FX:GBPJPY","###Crypto","BITSTAMP:BTCUSD","BITSTAMP:BTCGBP","BITSTAMP:ETHUSD","BITSTAMP:XRPUSD"],"vi_VN":["HOSE:VNINDEX","HNX:HNXINDEX","TVC:SPX","TVC:NDX","TVC:VIX","###Tiền điện tử","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD","###Cổ phiếu","HOSE:HPG","HOSE:VCB","HOSE:FPT","NASDAQ:AAPL","NASDAQ:TSLA","###Ngoại hối","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###Hợp đồng Tương lai","TVC:USOIL","TVC:UKOIL","TVC:GOLD"],"zh_CN":["TVC:SHCOMP","SZSE:399106","TVC:HSI","TVC:SPX","TVC:DXY","###股票","HKEX:700","HKEX:9988","SSE:600519","NASDAQ:AAPL","NASDAQ:TSLA","###期货","TVC:GOLD","TVC:SILVER","TVC:USOIL","TVC:UKOIL","###外汇","FX:EURUSD","FX:GBPUSD","FX:USDJPY","FX_IDC:USDCNY","###加密货币","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD"],"zh_TW":["TWSE:TAIEX","TVC:HSI","TVC:SPX","TVC:NDX","TVC:VIX","###股票","TWSE:2330","TWSE:0050","HKEX:700","NASDAQ:AAPL","NASDAQ:TSLA","###期貨","TVC:USOIL","TVC:GOLD","HKEX:HSI1!","###外匯","FX:EURUSD","FX:GBPUSD","FX:USDJPY","###加密貨幣","BITSTAMP:BTCUSD","BINANCE:BTCUSDT","BITSTAMP:ETHUSD"]}')
        }
    },
    e => {
        "use strict";
        e.O(0, [62142], () => [25535, 78708, 55704, 43911, 86271, 44978, 68669, 20386, 53683, 90518, 87328].map(e.E), 5);
        e.O(0, [37610, 70964, 38817, 87127, 53684, 51219, 76520, 67470, 40788, 53617, 95121, 24035, 40114, 29890, 4803, 92309, 74374, 95051, 28322, 3762, 22853, 21340, 54570, 42023, 56822, 11216], () => {
            return t = 875853, e(e.s = t);
            var t
        });
        e.O()
    }
]);