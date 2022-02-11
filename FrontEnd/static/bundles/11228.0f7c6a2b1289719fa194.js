(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [11228], {
        511228: (t, r, e) => {
            "use strict";
            e.d(r, {
                formatterOptions: () => c,
                numberToStringWithLeadingZero: () => l,
                isFormatterHasForexAdditionalPrecision: () => h,
                PriceFormatter: () => f
            });
            var i = e(120220),
                a = e(331565),
                n = e(582755);
            const o = (0, e(987380).getLogger)("Chart.PriceFormatter"),
                s = new RegExp(/^(-?)[0-9]+$/),
                c = {
                    decimalSign: ".",
                    decimalSignFractional: "'"
                };

            function l(t, r) {
                if (!(0, a.isNumber)(t)) return "n/a";
                if (!(0, a.isInteger)(r)) throw new TypeError("invalid length");
                if (r < 0 || r > 16) throw new TypeError("invalid length");
                if (0 === r) return t.toString();
                return ("0000000000000000" + t.toString()).slice(-r)
            }

            function h(t) {
                return "hasForexAdditionalPrecision" in t
            }
            class f {
                constructor(t, r, e, n) {
                    if (this.type = "price", this._formatterErrors = {
                            custom: (0, i.t)("Price format is invalid."),
                            fraction: (0, i.t)("Fraction part is invalid."),
                            secondFraction: (0, i.t)("Second fraction part is invalid.")
                        }, r || (r = 1), (0, a.isNumber)(t) && (0, a.isInteger)(t) || (t = 100), t < 0) throw new TypeError("invalid base");
                    this._priceScale = t, this._minMove = r, this._minMove2 = n, e && void 0 !== n && n > 0 && 2 !== n && 4 !== n && 8 !== n ? o.logDebug("invalid minmove2") : (this._fractional = e, this.calculateDecimal())
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
                        let t = this._priceScale;
                        for (this._fractional && this._minMove2 && (t /= this._minMove2); t > 1;) t /= 10, this._fractionalLength++
                    }
                }
                format(t, r, e, i = !0, a = !0) {
                    let o, s = "";
                    return t < 0 ? (s = !1 === i ? "" : "−", t = -t) : t && !0 === r && (s = "+"), o = this._fractional ? s + this._formatAsFractional(t, e) : s + this._formatAsDecimal(t, e), a ? (0, n.forceLTRStr)(o) : o
                }
                parse(t) {
                    return t = (t = (0, n.stripLTRMarks)(t)).replace("−", "-"), this._fractional ? this._minMove2 ? this._parseAsDoubleFractional(t) : this._parseAsSingleFractional(t) : this._parseAsDecimal(t)
                }
                hasForexAdditionalPrecision() {
                    return !this._fractional && 10 === this._minMove2
                }
                static serialize(t) {
                    return t.state()
                }
                static deserialize(t) {
                    return new f(t.priceScale, t.minMove, t.fractional, t.minMove2)
                }
                _formatAsDecimal(t, r) {
                    let e;
                    r = r || 0, e = this._fractional ? Math.pow(10, this._fractionalLength || 0) : Math.pow(10, r) * this._priceScale / this._minMove;
                    const i = 1 / e;
                    let a;
                    if (e > 1) a = Math.floor(t);
                    else {
                        const r = Math.floor(Math.round(t / i) * i);
                        a = 0 === Math.round((t - r) / i) ? r : r + i
                    }
                    let n = "";
                    if (e > 1) {
                        let i = parseFloat((Math.round(t * e) - a * e).toFixed(this._fractionalLength));
                        i >= e && (i -= e, a += 1);
                        const o = void 0 !== this._fractionalLength ? this._fractionalLength : NaN;
                        n = c.decimalSign + l(parseFloat(i.toFixed(this._fractionalLength)) * this._minMove, o + r), n = this._removeEndingZeros(n, r)
                    }
                    return a.toString() + n
                }
                _getFractPart(t, r) {
                    const e = [0, 5],
                        i = [0, 2, 5, 7];
                    return 2 === r ? void 0 === e[t] ? -1 : e[t] : 4 === r ? void 0 === i[t] ? -1 : i[t] : t
                }
                _formatAsFractional(t, r) {
                    const e = this._priceScale / this._minMove;
                    let i = Math.floor(t),
                        a = r ? Math.floor(t * e) - i * e : Math.round(t * e) - i * e;
                    a === e && (a = 0, i += 1);
                    let n = "";
                    if (r) {
                        let o = (t - i - a / e) * e;
                        o = Math.round(o * Math.pow(10, r)), n = l(o, r),
                            n = this._removeEndingZeros(n, r)
                    }
                    if (!this._fractionalLength) throw new Error("_fractionalLength is not calculated");
                    let o = "";
                    if (this._minMove2) {
                        const t = a % this._minMove2;
                        a = (a - t) / this._minMove2;
                        const r = l(a, this._fractionalLength),
                            e = this._getFractPart(t, this._minMove2);
                        o = r + c.decimalSignFractional + e
                    } else a = this._getFractPart(a, this._priceScale), o = l(a * this._minMove, this._fractionalLength);
                    return i.toString() + c.decimalSignFractional + o + n
                }
                _removeEndingZeros(t, r) {
                    for (let e = 0; e < r && "0" === t[t.length - 1]; e++) t = t.substring(0, t.length - 1);
                    return t
                }
                _parseAsDecimal(t) {
                    let r = s.exec(t);
                    if (r) {
                        const r = parseFloat(t);
                        return {
                            value: r,
                            res: !0,
                            suggest: this.format(r)
                        }
                    }
                    if (r = new RegExp("^(-?)[0-9]+\\" + c.decimalSign + "[0-9]*$").exec(t), r) {
                        const r = parseFloat(t.replace(c.decimalSign, "."));
                        return {
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
                _patchFractPart(t, r) {
                    const e = {
                            0: 0,
                            5: 1
                        },
                        i = {
                            0: 0,
                            2: 1,
                            5: 2,
                            7: 3
                        };
                    return 2 === r ? void 0 === e[t] ? -1 : e[t] : 4 === r ? void 0 === i[t] ? -1 : i[t] : t
                }
                _parseAsSingleFractional(t) {
                    let r = s.exec(t);
                    if (r) {
                        const r = parseFloat(t);
                        return {
                            value: r,
                            res: !0,
                            suggest: this.format(r)
                        }
                    }
                    if (r = new RegExp("^(-?)([0-9]+)\\" + c.decimalSignFractional + "([0-9]+)$").exec(t), r) {
                        const t = !!r[1],
                            e = parseInt(r[2]),
                            i = this._priceScale,
                            a = this._patchFractPart(parseInt(r[3]), i);
                        if (a >= i || a < 0) return {
                            error: this._formatterErrors.fraction,
                            res: !1
                        };
                        let n = e + a / i;
                        return t && (n = -n), {
                            value: n,
                            res: !0,
                            suggest: this.format(n)
                        }
                    }
                    return {
                        error: this._formatterErrors.custom,
                        res: !1
                    }
                }
                _parseAsDoubleFractional(t) {
                    let r = s.exec(t);
                    if (r) {
                        const r = parseFloat(t);
                        return {
                            value: r,
                            res: !0,
                            suggest: this.format(r)
                        }
                    }
                    if (r = new RegExp("^(-?)([0-9]+)\\" + c.decimalSignFractional + "([0-9]+)\\" + c.decimalSignFractional + "([0-9]+)$").exec(t), r) {
                        const t = !!r[1],
                            e = parseInt(r[2]),
                            i = void 0 !== this._minMove2 ? this._minMove2 : NaN,
                            a = this._priceScale / i,
                            n = this._minMove2,
                            o = this._patchFractPart(parseInt(r[3]), a),
                            s = this._patchFractPart(parseInt(r[4]), n);
                        if (o >= a || o < 0) return {
                            error: this._formatterErrors.fraction,
                            res: !1
                        };
                        if (void 0 !== n && s >= n || s < 0) return {
                            error: this._formatterErrors.secondFraction,
                            res: !1
                        };
                        let c = void 0 !== n ? e + o / a + s / (a * n) : NaN;
                        return t && (c = -c), {
                            value: c,
                            res: !0,
                            suggest: this.format(c)
                        }
                    }
                    return {
                        error: this._formatterErrors.custom,
                        res: !1
                    }
                }
            }
        }
    }
]);