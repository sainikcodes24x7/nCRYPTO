(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [68981], {
        239304: (e, o, l) => {
            "use strict";
            l.r(o), l.d(o, {
                setChartFontFamily: () => t,
                CHART_FONT_FAMILY: () => i
            });
            var r = l(640142);

            function t(e) {
                i = e
            }
            let i = ((0, r.isOnMobileAppPage)("old"), "'Trebuchet MS', Roboto, Ubuntu, sans-serif")
        },
        374026: (e, o, l) => {
            "use strict";
            var r;
            l.d(o, {
                    ColorType: () => r
                }),
                function(e) {
                    e.Solid = "solid", e.Gradient = "gradient"
                }(r || (r = {}))
        },
        668981: (e, o, l) => {
            "use strict";
            var r = l(394209).PositionPLDisplay;
            const {
                getHexColorByName: t
            } = l(993669), {
                generateColor: i
            } = l(350946);
            var a = l(394209).TradingSourcesHorizontalAlignment,
                n = l(697786),
                s = l(453995).LineToolPitchforkStyle,
                c = l(91491).LineToolBarsPatternMode,
                d = l(555782).LineStudyPlotStyle,
                g = l(484434),
                b = l(357086).PriceAxisLastValueMode,
                u = l(493441).StoriesTimeLineItemType,
                v = l(295215).MagnetMode,
                h = l(698815).LineEnd,
                w = l(374026).ColorType,
                L = l(293828).StatsPosition,
                f = l(142461).sessionsPreferencesDefault,
                y = l(987380).getLogger("Chart.Defaults"),
                C = l(239304).CHART_FONT_FAMILY;
            const p = t("color-tv-blue-500"),
                S = t("color-tv-blue-600"),
                E = t("color-ripe-red-200"),
                k = t("color-ripe-red-300"),
                B = t("color-ripe-red-400"),
                T = t("color-ripe-red-500"),
                P = t("color-ripe-red-600"),
                x = t("color-minty-green-100"),
                m = t("color-minty-green-400"),
                I = t("color-minty-green-500");
            var D = function(e) {
                var o = function(e, o) {
                        return {
                            color: e,
                            visible: o
                        }
                    },
                    l = function(e, o, l) {
                        return {
                            coeff: e,
                            color: o,
                            visible: l
                        }
                    },
                    t = function(e, o, l, r, t) {
                        return {
                            coeff: e,
                            color: o,
                            visible: l,
                            linestyle: void 0 === r ? CanvasEx.LINESTYLE_SOLID : r,
                            linewidth: void 0 === t ? 1 : t
                        }
                    },
                    y = function(e, o, l) {
                        return {
                            color: e,
                            width: l,
                            visible: o
                        }
                    },
                    D = function(e, o, l, r, t) {
                        return {
                            color: e,
                            visible: o,
                            width: l,
                            x: r,
                            y: t
                        }
                    },
                    A = function(e, o, l, r, t, i) {
                        return {
                            coeff1: e,
                            coeff2: o,
                            color: l,
                            visible: r,
                            linestyle: void 0 === t ? CanvasEx.LINESTYLE_SOLID : t,
                            linewidth: void 0 === i ? 1 : i
                        }
                    };
                if (void 0 === TradingView.defaultProperties) {
                    var O;
                    switch (window.locale) {
                        case "ar_AE":
                            O = "Asia/Dubai";
                            break;
                        case "au":
                            O = "Australia/Sydney";
                            break;
                        case "br":
                            O = "America/Sao_Paulo";
                            break;
                        case "ca":
                            O = "America/Toronto";
                            break;
                        case "de_DE":
                        case "it":
                            O = "Europe/Berlin";
                            break;
                        case "es":
                            O = "Europe/Madrid";
                            break;
                        case "fa_IR":
                            O = "Asia/Tehran";
                            break;
                        case "fr":
                        case "sv_SE":
                            O = "Europe/Paris";
                            break;
                        case "he_IL":
                        case "tr":
                            O = "Europe/Athens";
                            break;
                        case "hu_HU":
                        case "pl":
                            O = "Europe/Warsaw";
                            break;
                        case "id":
                        case "th_TH":
                        case "vi_VN":
                            O = "Asia/Bangkok";
                            break;
                        case "in":
                            O = "Asia/Kolkata";
                            break;
                        case "ja":
                        case "kr":
                            O = "Asia/Tokyo";
                            break;
                        case "ms_MY":
                            O = "Asia/Singapore";
                            break;
                        case "ru":
                            O = "Europe/Moscow";
                            break;
                        case "uk":
                            O = "Europe/London";
                            break;
                        case "zh_CN":
                        case "zh_TW":
                            O = "Asia/Shanghai";
                            break;
                        default:
                            O = "Etc/UTC"
                    }
                    TradingView.defaultProperties = {
                        chartproperties: {
                            timezone: O,
                            priceScaleSelectionStrategyName: "auto",
                            dataWindowProperties: {
                                background: "rgba( 255, 254, 206, 0.2)",
                                border: "rgba( 96, 96, 144, 1)",
                                font: "Verdana",
                                fontBold: !1,
                                fontItalic: !1,
                                fontSize: 10,
                                transparency: 80,
                                visible: !0
                            },
                            paneProperties: {
                                backgroundType: w.Solid,
                                background: "#ffffff",
                                backgroundGradientStartColor: "#ffffff",
                                backgroundGradientEndColor: "#ffffff",
                                vertGridProperties: {
                                    color: "rgba(42, 46, 57, 0.06)",
                                    style: CanvasEx.LINESTYLE_SOLID
                                },
                                horzGridProperties: {
                                    color: "rgba(42, 46, 57, 0.06)",
                                    style: CanvasEx.LINESTYLE_SOLID
                                },
                                crossHairProperties: {
                                    color: "#9598A1",
                                    style: CanvasEx.LINESTYLE_DASHED,
                                    transparency: 0,
                                    width: 1
                                },
                                topMargin: 10,
                                bottomMargin: 8,
                                axisProperties: {
                                    autoScale: !0,
                                    autoScaleDisabled: !1,
                                    lockScale: !1,
                                    percentage: !1,
                                    percentageDisabled: !1,
                                    indexedTo100: !1,
                                    log: !1,
                                    logDisabled: !1,
                                    alignLabels: !0,
                                    isInverted: !1
                                },
                                legendProperties: {
                                    showStudyArguments: !0,
                                    showStudyTitles: !0,
                                    showStudyValues: !0,
                                    showSeriesTitle: !0,
                                    showSeriesOHLC: !0,
                                    showLegend: !0,
                                    showBarChange: !0,
                                    showBackground: !0,
                                    backgroundTransparency: 50
                                }
                            },
                            scalesProperties: {
                                backgroundColor: "#ffffff",
                                lineColor: "rgba(42, 46, 57, 0.14)",
                                textColor: "#131722",
                                fontSize: 12,
                                scaleSeriesOnly: !1,
                                showSeriesLastValue: !0,
                                seriesLastValueMode: b.LastValueAccordingToScale,
                                showSeriesPrevCloseValue: !1,
                                showStudyLastValue: !0,
                                showSymbolLabels: !1,
                                showStudyPlotLabels: !1,
                                showBidAskLabels: !1,
                                showPrePostMarketPriceLabel: !0,
                                showFundamentalNameLabel: !1,
                                showFundamentalLastValue: !0,
                                barSpacing: g.DEFAULT_BAR_SPACING,
                                showCurrency: !0,
                                showUnit: !0
                            },
                            mainSeriesProperties: {
                                style: n.STYLE_CANDLES,
                                esdShowDividends: !0,
                                esdShowSplits: !0,
                                esdShowEarnings: !0,
                                esdShowBreaks: !1,
                                esdFlagSize: 2,
                                showCountdown: !0,
                                bidAsk: {
                                    visible: !1,
                                    lineStyle: CanvasEx.LINESTYLE_DOTTED,
                                    lineWidth: 1,
                                    bidLineColor: p,
                                    askLineColor: B
                                },
                                prePostMarket: {
                                    visible: !0,
                                    lineStyle: CanvasEx.LINESTYLE_DOTTED,
                                    lineWidth: 1,
                                    preMarketColor: "#fb8c00",
                                    postMarketColor: p
                                },
                                highLowAvgPrice: {
                                    highLowPriceLinesVisible: !1,
                                    highLowPriceLabelsVisible: !1,
                                    averageClosePriceLineVisible: !1,
                                    averageClosePriceLabelVisible: !1
                                },
                                showInDataWindow: !0,
                                visible: !0,
                                showPriceLine: !0,
                                priceLineWidth: 1,
                                priceLineColor: "",
                                baseLineColor: "#B2B5BE",
                                showPrevClosePriceLine: !1,
                                prevClosePriceLineWidth: 1,
                                prevClosePriceLineColor: "rgba( 85, 85, 85, 1)",
                                minTick: "default",
                                dividendsAdjustment: !1,
                                backAdjustment: !1,
                                settlementAsClose: !0,
                                sessionId: "regular",
                                sessVis: !1,
                                statusViewStyle: {
                                    fontSize: 16,
                                    showExchange: !0,
                                    showInterval: !0,
                                    symbolTextSource: "description"
                                },
                                candleStyle: {
                                    upColor: m,
                                    downColor: B,
                                    drawWick: !0,
                                    drawBorder: !0,
                                    borderColor: "#378658",
                                    borderUpColor: m,
                                    borderDownColor: B,
                                    wickColor: "#737375",
                                    wickUpColor: m,
                                    wickDownColor: B,
                                    barColorsOnPrevClose: !1,
                                    drawBody: !0
                                },
                                hollowCandleStyle: {
                                    upColor: m,
                                    downColor: B,
                                    drawWick: !0,
                                    drawBorder: !0,
                                    borderColor: "rgba( 55, 134, 88, 1)",
                                    borderUpColor: m,
                                    borderDownColor: B,
                                    wickColor: "rgba( 115, 115, 117, 1)",
                                    wickUpColor: m,
                                    wickDownColor: B,
                                    drawBody: !0
                                },
                                haStyle: {
                                    upColor: m,
                                    downColor: B,
                                    drawWick: !0,
                                    drawBorder: !0,
                                    borderColor: "rgba( 55, 134, 88, 1)",
                                    borderUpColor: m,
                                    borderDownColor: B,
                                    wickColor: "rgba( 115, 115, 117, 1)",
                                    wickUpColor: m,
                                    wickDownColor: B,
                                    showRealLastPrice: !1,
                                    barColorsOnPrevClose: !1,
                                    inputs: {},
                                    inputInfo: {},
                                    drawBody: !0
                                },
                                barStyle: {
                                    upColor: m,
                                    downColor: B,
                                    barColorsOnPrevClose: !1,
                                    dontDrawOpen: !1,
                                    thinBars: !0
                                },
                                hiloStyle: {
                                    color: p,
                                    showBorders: !0,
                                    borderColor: p,
                                    showLabels: !0,
                                    labelColor: p,
                                    fontSize: 7,
                                    drawBody: !0
                                },
                                lineStyle: {
                                    color: p,
                                    linestyle: CanvasEx.LINESTYLE_SOLID,
                                    linewidth: 2,
                                    priceSource: "close",
                                    styleType: n.STYLE_LINE_TYPE_SIMPLE
                                },
                                areaStyle: {
                                    color1: i(p, 72),
                                    color2: p,
                                    linecolor: p,
                                    linestyle: CanvasEx.LINESTYLE_SOLID,
                                    linewidth: 2,
                                    priceSource: "close",
                                    transparency: 100
                                },
                                priceAxisProperties: {
                                    autoScale: !0,
                                    autoScaleDisabled: !1,
                                    lockScale: !1,
                                    percentage: !1,
                                    percentageDisabled: !1,
                                    indexedTo100: !1,
                                    log: !1,
                                    logDisabled: !1,
                                    isInverted: !1,
                                    alignLabels: !0
                                },
                                renkoStyle: {
                                    upColor: m,
                                    downColor: B,
                                    borderUpColor: m,
                                    borderDownColor: B,
                                    upColorProjection: "rgba( 169, 220, 195, 1)",
                                    downColorProjection: "rgba( 245, 166, 174, 1)",
                                    borderUpColorProjection: "rgba( 169, 220, 195, 1)",
                                    borderDownColorProjection: "rgba( 245, 166, 174, 1)",
                                    wickUpColor: m,
                                    wickDownColor: B,
                                    inputs: {
                                        source: "close",
                                        sources: "Close",
                                        boxSize: 3,
                                        style: "ATR",
                                        atrLength: 14,
                                        wicks: !0
                                    },
                                    inputInfo: {
                                        source: {
                                            name: "Source"
                                        },
                                        sources: {
                                            name: "Source"
                                        },
                                        boxSize: {
                                            name: "Box size"
                                        },
                                        style: {
                                            name: "Style"
                                        },
                                        atrLength: {
                                            name: "ATR length"
                                        },
                                        wicks: {
                                            name: "Wicks"
                                        }
                                    }
                                },
                                pbStyle: {
                                    upColor: m,
                                    downColor: B,
                                    borderUpColor: m,
                                    borderDownColor: B,
                                    upColorProjection: "rgba( 169, 220, 195, 1)",
                                    downColorProjection: "rgba( 245, 166, 174, 1)",
                                    borderUpColorProjection: "rgba( 169, 220, 195, 1)",
                                    borderDownColorProjection: "rgba( 245, 166, 174, 1)",
                                    inputs: {
                                        source: "close",
                                        lb: 3
                                    },
                                    inputInfo: {
                                        source: {
                                            name: "Source"
                                        },
                                        lb: {
                                            name: "Number of line"
                                        }
                                    }
                                },
                                kagiStyle: {
                                    upColor: m,
                                    downColor: B,
                                    upColorProjection: "rgba( 169, 220, 195, 1)",
                                    downColorProjection: "rgba( 245, 166, 174, 1)",
                                    inputs: {
                                        source: "close",
                                        style: "ATR",
                                        atrLength: 14,
                                        reversalAmount: 1
                                    },
                                    inputInfo: {
                                        source: {
                                            name: "Source"
                                        },
                                        style: {
                                            name: "Style"
                                        },
                                        atrLength: {
                                            name: "ATR length"
                                        },
                                        reversalAmount: {
                                            name: "Reversal amount"
                                        }
                                    }
                                },
                                pnfStyle: {
                                    upColor: m,
                                    downColor: B,
                                    upColorProjection: "rgba( 169, 220, 195, 1)",
                                    downColorProjection: "rgba( 245, 166, 174, 1)",
                                    inputs: {
                                        sources: "Close",
                                        reversalAmount: 3,
                                        boxSize: 1,
                                        style: "ATR",
                                        atrLength: 14,
                                        oneStepBackBuilding: !1
                                    },
                                    inputInfo: {
                                        sources: {
                                            name: "Source"
                                        },
                                        boxSize: {
                                            name: "Box size"
                                        },
                                        reversalAmount: {
                                            name: "Reversal amount"
                                        },
                                        style: {
                                            name: "Style"
                                        },
                                        atrLength: {
                                            name: "ATR length"
                                        },
                                        oneStepBackBuilding: {
                                            name: "One step back building"
                                        }
                                    }
                                },
                                baselineStyle: {
                                    baselineColor: "rgba( 117, 134, 150, 1)",
                                    topFillColor1: i(m, 72),
                                    topFillColor2: i(m, 95),
                                    bottomFillColor1: i(B, 95),
                                    bottomFillColor2: i(B, 72),
                                    topLineColor: m,
                                    bottomLineColor: B,
                                    topLineWidth: 2,
                                    bottomLineWidth: 2,
                                    priceSource: "close",
                                    transparency: 50,
                                    baseLevelPercentage: 50
                                },
                                rangeStyle: {
                                    upColor: m,
                                    downColor: B,
                                    thinBars: !0,
                                    upColorProjection: "rgba( 169, 220, 195, 1)",
                                    downColorProjection: "rgba( 245, 166, 174, 1)",
                                    inputs: {
                                        range: 10,
                                        phantomBars: !1
                                    },
                                    inputInfo: {
                                        range: {
                                            name: "Range"
                                        },
                                        phantomBars: {
                                            name: "Phantom bars"
                                        }
                                    }
                                }
                            },
                            chartEventsSourceProperties: {
                                visible: !0,
                                futureOnly: !0,
                                breaks: {
                                    color: "rgba(85, 85, 85, 1)",
                                    visible: !1,
                                    style: CanvasEx.LINESTYLE_DASHED,
                                    width: 1
                                }
                            },
                            tradingProperties: {
                                showPositions: !0,
                                positionPL: {
                                    visibility: !0,
                                    display: r.Money
                                },
                                showOrders: !0,
                                showTPSL: !0,
                                showExecutions: !0,
                                showReverse: !0,
                                horizontalAlignment: a.Right,
                                extendLeft: !0,
                                lineWidth: 1,
                                lineStyle: CanvasEx.LINESTYLE_SOLID
                            },
                            editorFontsList: ["Verdana", "Courier New", "Times New Roman", "Arial"],
                            volumePaneSize: "large"
                        },
                        sessions: f,
                        drawings: {
                            magnet: !1,
                            magnetMode: v.WeakMagnet,
                            stayInDrawingMode: !1,
                            drawOnAllCharts: !0
                        },
                        linetoolorder: {
                            extendLeft: "inherit",
                            lineLength: "inherit",
                            lineColor: "rgba( 255, 0, 0, 1)",
                            lineActiveBuyColor: "rgb(64,148,232)",
                            lineInactiveBuyColor: "rgba(64,148,232,.5)",
                            lineActiveSellColor: "rgb(231,86,86)",
                            lineInactiveSellColor: "rgba(231,86,86,.5)",
                            lineStyle: "inherit",
                            lineWidth: "inherit",
                            bodyBorderActiveBuyColor: "rgb(64,148,232)",
                            bodyBorderInactiveBuyColor: "rgba(64,148,232,.5)",
                            bodyBorderActiveSellColor: "rgb(231,86,86)",
                            bodyBorderInactiveSellColor: "rgba(231,86,86,.5)",
                            bodyBackgroundColor: "rgba( 255, 255, 255, 0.75)",
                            bodyBackgroundTransparency: 25,
                            bodyTextInactiveLimitColor: "rgba(38,140,2,.5)",
                            bodyTextActiveLimitColor: "rgb(38,140,2)",
                            bodyTextInactiveStopColor: "rgba(231,86,86,.5)",
                            bodyTextActiveStopColor: "rgb(231,86,86)",
                            bodyTextInactiveBuyColor: "rgba(64,148,232,.5)",
                            bodyTextActiveBuyColor: "rgb(64,148,232)",
                            bodyTextInactiveSellColor: "rgba(231,86,86,.5)",
                            bodyTextActiveSellColor: "rgb(231,86,86)",
                            bodyFontFamily: "Verdana",
                            bodyFontSize: 9,
                            bodyFontBold: !0,
                            bodyFontItalic: !1,
                            quantityBorderActiveBuyColor: "rgb(64,148,232)",
                            quantityBorderInactiveBuyColor: "rgba(64,148,232,.5)",
                            quantityBorderActiveSellColor: "rgb(231,86,86)",
                            quantityBorderInactiveSellColor: "rgba(231,86,86,.5)",
                            quantityBackgroundInactiveBuyColor: "rgba(64,148,232,.5)",
                            quantityBackgroundActiveBuyColor: "rgb(64,148,232)",
                            quantityBackgroundInactiveSellColor: "rgba(231,86,86,.5)",
                            quantityBackgroundActiveSellColor: "rgb(231,86,86)",
                            quantityTextColor: "rgba( 255, 255, 255, 1)",
                            quantityTextTransparency: 0,
                            quantityFontFamily: "Verdana",
                            quantityFontSize: 9,
                            quantityFontBold: !0,
                            quantityFontItalic: !1,
                            cancelButtonBorderActiveBuyColor: "rgb(64,148,232)",
                            cancelButtonBorderInactiveBuyColor: "rgba(64,148,232,.5)",
                            cancelButtonBorderActiveSellColor: "rgb(231,86,86)",
                            cancelButtonBorderInactiveSellColor: "rgba(231,86,86,.5)",
                            cancelButtonBackgroundColor: "rgba( 255, 255, 255, 0.75)",
                            cancelButtonBackgroundTransparency: 25,
                            cancelButtonIconActiveBuyColor: "rgb(64,148,232)",
                            cancelButtonIconInactiveBuyColor: "rgba(64,148,232,.5)",
                            cancelButtonIconActiveSellColor: "rgb(231,86,86)",
                            cancelButtonIconInactiveSellColor: "rgba(231,86,86,.5)",
                            tooltip: "",
                            modifyTooltip: "",
                            cancelTooltip: ""
                        },
                        linetoolposition: {
                            extendLeft: "inherit",
                            lineLength: "inherit",
                            lineBuyColor: "rgb(64,148,232)",
                            lineSellColor: "rgb(231,86,86)",
                            lineStyle: "inherit",
                            lineWidth: "inherit",
                            bodyBorderBuyColor: "rgb(64,148,232)",
                            bodyBorderSellColor: "rgb(231,86,86)",
                            bodyBackgroundColor: "rgba( 255, 255, 255, 0.75)",
                            bodyBackgroundTransparency: 25,
                            bodyTextPositiveColor: "rgb(38,140,2)",
                            bodyTextNeutralColor: "rgb(100,100,100)",
                            bodyTextNegativeColor: "rgb(231,86,86)",
                            bodyFontFamily: "Verdana",
                            bodyFontSize: 9,
                            bodyFontBold: !0,
                            bodyFontItalic: !1,
                            quantityBorderBuyColor: "rgb(64,148,232)",
                            quantityBorderSellColor: "rgb(231,86,86)",
                            quantityBackgroundBuyColor: "rgb(64,148,232)",
                            quantityBackgroundSellColor: "rgb(231,86,86)",
                            quantityTextColor: "rgba( 255, 255, 255, 1)",
                            quantityTextTransparency: 0,
                            quantityFontFamily: "Verdana",
                            quantityFontSize: 9,
                            quantityFontBold: !0,
                            quantityFontItalic: !1,
                            reverseButtonBorderBuyColor: "rgb(64,148,232)",
                            reverseButtonBorderSellColor: "rgb(231,86,86)",
                            reverseButtonBackgroundColor: "rgba( 255, 255, 255, 0.75)",
                            reverseButtonBackgroundTransparency: 25,
                            reverseButtonIconBuyColor: "rgb(64,148,232)",
                            reverseButtonIconSellColor: "rgb(231,86,86)",
                            closeButtonBorderBuyColor: "rgb(64,148,232)",
                            closeButtonBorderSellColor: "rgb(231,86,86)",
                            closeButtonBackgroundColor: "rgba( 255, 255, 255, 0.75)",
                            closeButtonBackgroundTransparency: 25,
                            closeButtonIconBuyColor: "rgb(64,148,232)",
                            closeButtonIconSellColor: "rgb(231,86,86)",
                            tooltip: "",
                            protectTooltip: "",
                            closeTooltip: "",
                            reverseTooltip: ""
                        },
                        linetoolexecution: {
                            direction: "buy",
                            arrowHeight: 8,
                            arrowSpacing: 1,
                            arrowBuyColor: "#4094e8",
                            arrowSellColor: "#e75656",
                            text: "",
                            textColor: "rgba( 0, 0, 0, 1)",
                            textTransparency: 0,
                            fontFamily: "Verdana",
                            fontSize: 10,
                            fontBold: !1,
                            fontItalic: !1,
                            tooltip: ""
                        },
                        linetoolicon: {
                            color: p,
                            size: 40,
                            icon: 61720,
                            angle: .5 * Math.PI,
                            scale: 1
                        },
                        linetoolimage: {
                            transparency: 0,
                            cssWidth: 0,
                            cssHeight: 0,
                            angle: 0
                        },
                        linetoolbezierquadro: {
                            linecolor: p,
                            linewidth: 1,
                            fillBackground: !1,
                            backgroundColor: i(p, 80),
                            transparency: 50,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: h.Normal,
                            rightEnd: h.Normal
                        },
                        linetoolbeziercubic: {
                            linecolor: "#00bcd4",
                            linewidth: 1,
                            fillBackground: !1,
                            backgroundColor: "rgba(0, 188, 212, 0.2)",
                            transparency: 50,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: h.Normal,
                            rightEnd: h.Normal
                        },
                        linetooltrendline: {
                            linecolor: p,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: h.Normal,
                            rightEnd: h.Normal,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: p,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            showDateTimeRange: !1,
                            showDistance: !1,
                            showAngle: !1,
                            statsPosition: L.Right
                        },
                        linetoolinfoline: {
                            linecolor: p,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: h.Normal,
                            rightEnd: h.Normal,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: p,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !0,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !0,
                            showBarsRange: !0,
                            showDateTimeRange: !0,
                            showDistance: !0,
                            showAngle: !0,
                            statsPosition: L.Center
                        },
                        linetooltimecycles: {
                            linecolor: "rgba(21, 153, 128, 1)",
                            linewidth: 1,
                            fillBackground: !0,
                            backgroundColor: "rgba(106, 168, 79, 0.5)",
                            transparency: 50,
                            linestyle: CanvasEx.LINESTYLE_SOLID
                        },
                        linetoolsineline: {
                            linecolor: "rgba( 21, 153, 128, 1)",
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID
                        },
                        linetooltrendangle: {
                            linecolor: p,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            textcolor: p,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            extendRight: !1,
                            extendLeft: !1,
                            statsPosition: L.Right
                        },
                        linetooldisjointangle: {
                            linecolor: I,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            fillBackground: !0,
                            backgroundColor: i(I, 80),
                            transparency: 20,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: h.Normal,
                            rightEnd: h.Normal,
                            textcolor: I,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            showPrices: !1,
                            showPriceRange: !1,
                            showDateTimeRange: !1,
                            showBarsRange: !1
                        },
                        linetoolflatbottom: {
                            linecolor: "rgba(171, 71, 188, 1)",
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            fillBackground: !0,
                            backgroundColor: "rgba(171, 71, 188, 0.2)",
                            transparency: 20,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: h.Normal,
                            rightEnd: h.Normal,
                            textcolor: "rgba(171, 71, 188, 1)",
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            showPrices: !1,
                            showPriceRange: !1,
                            showDateTimeRange: !1,
                            showBarsRange: !1
                        },
                        linetoolfibspiral: {
                            counterclockwise: !1,
                            linecolor: I,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID
                        },
                        linetooldaterange: {
                            linecolor: p,
                            linewidth: 1,
                            textcolor: "rgba( 255, 255, 255, 1)",
                            fontsize: 12,
                            fillLabelBackground: !0,
                            labelBackgroundColor: i(p, 10),
                            fillBackground: !0,
                            backgroundColor: i(p, 80),
                            backgroundTransparency: 60,
                            drawBorder: !1,
                            borderColor: i(p, 10),
                            extendTop: !1,
                            extendBottom: !1,
                            showLabel: !0
                        },
                        linetoolpricerange: {
                            linecolor: p,
                            linewidth: 1,
                            textcolor: "rgba( 255, 255, 255, 1)",
                            fontsize: 12,
                            fillLabelBackground: !0,
                            labelBackgroundColor: i(p, 10),
                            fillBackground: !0,
                            backgroundColor: i(p, 80),
                            backgroundTransparency: 60,
                            drawBorder: !1,
                            borderColor: i(p, 10),
                            extendLeft: !1,
                            extendRight: !1,
                            showLabel: !0
                        },
                        linetooldateandpricerange: {
                            linecolor: p,
                            linewidth: 1,
                            textcolor: "rgba( 255, 255, 255, 1)",
                            fontsize: 12,
                            fillLabelBackground: !0,
                            labelBackgroundColor: i(p, 10),
                            fillBackground: !0,
                            backgroundColor: i(p, 80),
                            backgroundTransparency: 60,
                            borderWidth: 1,
                            drawBorder: !1,
                            borderColor: p,
                            showLabel: !0
                        },
                        linetoolriskrewardshort: {
                            linecolor: "rgba(120, 123, 134, 1)",
                            linewidth: 1,
                            textcolor: "rgba(255, 255, 255, 1)",
                            fontsize: 12,
                            fillLabelBackground: !0,
                            labelBackgroundColor: "rgba( 88, 88, 88, 1)",
                            fillBackground: !0,
                            stopBackground: i(T, 80),
                            profitBackground: i(I, 80),
                            stopBackgroundTransparency: 80,
                            profitBackgroundTransparency: 80,
                            drawBorder: !1,
                            borderColor: "rgba( 102, 123, 139, 1)",
                            compact: !1,
                            riskDisplayMode: "percents",
                            accountSize: 1e3,
                            lotSize: 1,
                            risk: 25,
                            alwaysShowStats: !1,
                            showPriceLabels: !0
                        },
                        linetoolriskrewardlong: {
                            linecolor: "rgba(120, 123, 134, 1)",
                            linewidth: 1,
                            textcolor: "rgba(255, 255, 255, 1)",
                            fontsize: 12,
                            fillLabelBackground: !0,
                            labelBackgroundColor: "rgba( 88, 88, 88, 1)",
                            fillBackground: !0,
                            stopBackground: i(T, 80),
                            profitBackground: i(I, 80),
                            stopBackgroundTransparency: 80,
                            profitBackgroundTransparency: 80,
                            drawBorder: !1,
                            borderColor: "rgba( 102, 123, 139, 1)",
                            compact: !1,
                            riskDisplayMode: "percents",
                            accountSize: 1e3,
                            lotSize: 1,
                            risk: 25,
                            alwaysShowStats: !1,
                            showPriceLabels: !0
                        },
                        linetoolarrow: {
                            linecolor: p,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !1,
                            extendRight: !1,
                            leftEnd: h.Normal,
                            rightEnd: h.Arrow,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: p,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            showDateTimeRange: !1,
                            showDistance: !1,
                            showAngle: !1,
                            statsPosition: L.Right
                        },
                        linetoolray: {
                            linecolor: p,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !1,
                            extendRight: !0,
                            leftEnd: h.Normal,
                            rightEnd: h.Normal,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: p,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            showDateTimeRange: !1,
                            showDistance: !1,
                            showAngle: !1,
                            statsPosition: L.Right
                        },
                        linetoolextended: {
                            linecolor: p,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !0,
                            extendRight: !0,
                            leftEnd: h.Normal,
                            rightEnd: h.Normal,
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textcolor: p,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            alwaysShowStats: !1,
                            showMiddlePoint: !1,
                            showPriceLabels: !1,
                            showPriceRange: !1,
                            showBarsRange: !1,
                            showDateTimeRange: !1,
                            showDistance: !1,
                            showAngle: !1,
                            statsPosition: L.Right
                        },
                        linetoolhorzline: {
                            linecolor: p,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            showPrice: !0,
                            showLabel: !1,
                            textcolor: p,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "top"
                        },
                        linetoolhorzray: {
                            linecolor: p,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            showPrice: !0,
                            showLabel: !1,
                            textcolor: p,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "top"
                        },
                        linetoolvertline: {
                            linecolor: p,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLine: !0,
                            showTime: !0,
                            showLabel: !1,
                            horzLabelsAlign: "right",
                            vertLabelsAlign: "top",
                            textcolor: p,
                            textOrientation: "vertical",
                            fontsize: 14,
                            bold: !1,
                            italic: !1
                        },
                        linetoolcrossline: {
                            linecolor: p,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            showPrice: !0,
                            showTime: !0
                        },
                        linetoolcirclelines: {
                            trendline: {
                                visible: !0,
                                color: "rgba( 128, 128, 128, 1)",
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_DASHED
                            },
                            linecolor: "rgba( 128, 204, 219, 1)",
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID
                        },
                        linetoolfibtimezone: {
                            horzLabelsAlign: "right",
                            vertLabelsAlign: "bottom",
                            baselinecolor: "rgba( 128, 128, 128, 1)",
                            linecolor: "rgba( 0, 85, 219, 1)",
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            showLabels: !0,
                            fillBackground: !1,
                            transparency: 80,
                            trendline: {
                                visible: !0,
                                color: "rgba( 128, 128, 128, 1)",
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_DASHED
                            },
                            level1: t(0, "rgba(120, 123, 134, 1)", !0),
                            level2: t(1, p, !0),
                            level3: t(2, p, !0),
                            level4: t(3, p, !0),
                            level5: t(5, p, !0),
                            level6: t(8, p, !0),
                            level7: t(13, p, !0),
                            level8: t(21, p, !0),
                            level9: t(34, p, !0),
                            level10: t(55, p, !0),
                            level11: t(89, p, !0)
                        },
                        linetooltext: {
                            color: p,
                            fontsize: 14,
                            fillBackground: !1,
                            backgroundColor: "rgba( 91, 133, 191, 0.3)",
                            backgroundTransparency: 70,
                            drawBorder: !1,
                            borderColor: "rgba( 102, 123, 139, 1)",
                            bold: !1,
                            italic: !1,
                            fixedSize: !0,
                            wordWrap: !1,
                            wordWrapWidth: 200
                        },
                        linetooltextabsolute: {
                            color: p,
                            fontsize: 14,
                            fillBackground: !1,
                            backgroundColor: "rgba( 155, 190, 213, 0.3)",
                            backgroundTransparency: 70,
                            drawBorder: !1,
                            borderColor: "rgba( 102, 123, 139, 1)",
                            bold: !1,
                            italic: !1,
                            fixedSize: !1,
                            wordWrap: !1,
                            wordWrapWidth: 200
                        },
                        linetoolballoon: {
                            color: "#ffffff",
                            backgroundColor: "rgba(156, 39, 176, 0.7)",
                            borderColor: "rgba(156, 39, 176, 0.0)",
                            fontsize: 14,
                            transparency: 30
                        },
                        linetoolbrush: {
                            linecolor: "#00bcd4",
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            smooth: 5,
                            fillBackground: !1,
                            backgroundColor: "rgba(0, 188, 212, 0.5)",
                            transparency: 50,
                            leftEnd: h.Normal,
                            rightEnd: h.Normal
                        },
                        linetoolhighlighter: {
                            linecolor: "rgba(236, 64, 122, 0.15)",
                            smooth: 5,
                            transparency: 85
                        },
                        linetoolpolyline: {
                            linecolor: "#7e57c2",
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            fillBackground: !0,
                            backgroundColor: "rgba(126, 87, 194, 0.2)",
                            transparency: 50,
                            filled: !1
                        },
                        linetoolsignpost: {
                            itemType: u.Emoji,
                            emoji: "🙂",
                            showImage: !1,
                            plateColor: p,
                            fontSize: 12,
                            bold: !1,
                            italic: !1
                        },
                        linetoolpath: {
                            lineColor: p,
                            lineWidth: 2,
                            lineStyle: CanvasEx.LINESTYLE_SOLID,
                            leftEnd: h.Normal,
                            rightEnd: h.Arrow
                        },
                        linetoolarrowmarkleft: {
                            color: p,
                            arrowColor: p,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            showLabel: !0
                        },
                        linetoolarrowmarkup: {
                            color: I,
                            arrowColor: I,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            showLabel: !0
                        },
                        linetoolarrowmarkright: {
                            color: p,
                            arrowColor: p,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            showLabel: !0
                        },
                        linetoolarrowmarkdown: {
                            color: P,
                            arrowColor: P,
                            fontsize: 14,
                            bold: !1,
                            italic: !1,
                            showLabel: !0
                        },
                        linetoolflagmark: {
                            flagColor: p
                        },
                        linetoolnote: {
                            markerColor: p,
                            textColor: "#ffffff",
                            backgroundColor: i(p, 30),
                            backgroundTransparency: 0,
                            borderColor: p,
                            fontSize: 14,
                            bold: !1,
                            italic: !1,
                            fixedSize: !0
                        },
                        linetoolnoteabsolute: {
                            markerColor: p,
                            textColor: "#ffffff",
                            backgroundColor: i(p, 30),
                            backgroundTransparency: 0,
                            borderColor: p,
                            fontSize: 14,
                            bold: !1,
                            italic: !1,
                            fixedSize: !0
                        },
                        linetoolpricelabel: {
                            color: "#ffffff",
                            backgroundColor: p,
                            borderColor: p,
                            fontWeight: "bold",
                            fontsize: 14,
                            transparency: 0
                        },
                        linetoolpricenote: {
                            showLabel: !1,
                            horzLabelsAlign: "center",
                            vertLabelsAlign: "bottom",
                            textColor: p,
                            fontSize: 14,
                            bold: !1,
                            italic: !1,
                            lineColor: p,
                            priceLabelBackgroundColor: p,
                            priceLabelBorderColor: p,
                            priceLabelTextColor: "#ffffff",
                            priceLabelFontSize: 12,
                            priceLabelBold: !1,
                            priceLabelItalic: !1
                        },
                        linetoolarrowmarker: {
                            backgroundColor: S,
                            textColor: S,
                            bold: !0,
                            italic: !1,
                            fontsize: 16,
                            showLabel: !0
                        },
                        linetoolrectangle: {
                            color: "#9c27b0",
                            fillBackground: !0,
                            backgroundColor: "rgba(156, 39, 176, 0.2)",
                            linewidth: 1,
                            transparency: 50,
                            showLabel: !1,
                            horzLabelsAlign: "left",
                            vertLabelsAlign: "bottom",
                            textColor: "#9c27b0",
                            fontSize: 14,
                            bold: !1,
                            italic: !1,
                            extendLeft: !1,
                            extendRight: !1
                        },
                        linetoolrotatedrectangle: {
                            color: "#4caf50",
                            fillBackground: !0,
                            backgroundColor: "rgba(76, 175, 80, 0.2)",
                            transparency: 50,
                            linewidth: 1
                        },
                        linetoolellipse: {
                            color: "#e91e63",
                            fillBackground: !0,
                            backgroundColor: "rgba(233, 30, 99, 0.2)",
                            transparency: 50,
                            linewidth: 1
                        },
                        linetoolarc: {
                            color: "#ab47bc",
                            fillBackground: !0,
                            backgroundColor: "rgba(171, 71, 188, 0.2)",
                            transparency: 50,
                            linewidth: 1
                        },
                        linetoolprediction: {
                            linecolor: p,
                            linewidth: 1,
                            sourceBackColor: p,
                            sourceTextColor: "rgba(255, 255, 255, 1)",
                            sourceStrokeColor: p,
                            targetStrokeColor: p,
                            targetBackColor: p,
                            targetTextColor: "rgba(255, 255, 255, 1)",
                            successBackground: "rgba(76, 175, 80, 1)",
                            successTextColor: "rgba(255, 255, 255, 1)",
                            failureBackground: T,
                            failureTextColor: "rgba(255, 255, 255, 1)",
                            intermediateBackColor: "rgba(234, 210, 137, 1)",
                            intermediateTextColor: "rgba(109, 77, 34, 1)",
                            transparency: 10,
                            centersColor: "rgba( 32, 32, 32, 1)"
                        },
                        linetooltriangle: {
                            color: "#f57c00",
                            fillBackground: !0,
                            backgroundColor: "rgba(245, 124, 0, 0.2)",
                            transparency: 50,
                            linewidth: 1
                        },
                        linetoolcallout: {
                            color: "#ffffff",
                            backgroundColor: "rgba(0, 151, 167, 0.7)",
                            transparency: 50,
                            linewidth: 1,
                            fontsize: 14,
                            bordercolor: "rgba(0, 151, 167, 1)",
                            bold: !1,
                            italic: !1,
                            wordWrap: !1,
                            wordWrapWidth: 200
                        },
                        linetoolparallelchannel: {
                            linecolor: p,
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            extendLeft: !1,
                            extendRight: !1,
                            fillBackground: !0,
                            backgroundColor: i(p, 80),
                            transparency: 20,
                            showMidline: !0,
                            midlinecolor: p,
                            midlinewidth: 1,
                            midlinestyle: CanvasEx.LINESTYLE_DASHED
                        },
                        linetoolelliottimpulse: {
                            degree: 7,
                            showWave: !0,
                            color: "rgba( 61, 133, 198, 1)",
                            linewidth: 1
                        },
                        linetoolelliotttriangle: {
                            degree: 7,
                            showWave: !0,
                            color: "rgba( 255, 152, 0, 1)",
                            linewidth: 1
                        },
                        linetoolelliotttriplecombo: {
                            degree: 7,
                            showWave: !0,
                            color: "rgba( 106, 168, 79, 1)",
                            linewidth: 1
                        },
                        linetoolelliottcorrection: {
                            degree: 7,
                            showWave: !0,
                            color: "rgba( 61, 133, 198, 1)",
                            linewidth: 1
                        },
                        linetoolelliottdoublecombo: {
                            degree: 7,
                            showWave: !0,
                            color: "rgba( 106, 168, 79, 1)",
                            linewidth: 1
                        },
                        linetoolbarspattern: {
                            color: p,
                            mode: c.Bars,
                            mirrored: !1,
                            flipped: !1
                        },
                        linetoolghostfeed: {
                            averageHL: 20,
                            variance: 50,
                            candleStyle: {
                                upColor: x,
                                downColor: E,
                                drawWick: !0,
                                drawBorder: !0,
                                borderColor: "#378658",
                                borderUpColor: I,
                                borderDownColor: T,
                                wickColor: "rgba(120, 123, 134, 1)"
                            },
                            transparency: 50
                        },
                        study: {
                            inputs: {},
                            styles: {},
                            palettes: {},
                            bands: {},
                            area: {},
                            graphics: {},
                            showInDataWindow: !0,
                            visible: !0,
                            showLegendValues: !0,
                            showLabelsOnPriceScale: !0,
                            precision: "default"
                        },
                        linetoolpitchfork: {
                            fillBackground: !0,
                            transparency: 80,
                            style: s.Original,
                            median: {
                                visible: !0,
                                color: T,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            extendLines: !1,
                            level0: t(.25, "rgba(255, 183, 77, 1)", !1),
                            level1: t(.382, "rgba(129, 199, 132, 1)", !1),
                            level2: t(.5, "rgba(76, 175, 80, 1)", !0),
                            level3: t(.618, I, !1),
                            level4: t(.75, "rgba(100, 181, 246, 1)", !1),
                            level5: t(1, p, !0),
                            level6: t(1.5, "rgba(156, 39, 176, 1)", !1),
                            level7: t(1.75, "rgba(233, 30, 99, 1)", !1),
                            level8: t(2, k, !1)
                        },
                        linetoolpitchfan: {
                            fillBackground: !0,
                            transparency: 80,
                            median: {
                                visible: !0,
                                color: T,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            level0: t(.25, "rgba(255, 183, 77, 1)", !1),
                            level1: t(.382, "rgba(129, 199, 132, 1)", !1),
                            level2: t(.5, "rgba(76, 175, 80, 1)", !0),
                            level3: t(.618, I, !1),
                            level4: t(.75, "rgba(100, 181, 246, 1)", !1),
                            level5: t(1, p, !0),
                            level6: t(1.5, "rgba(156, 39, 176, 1)", !1),
                            level7: t(1.75, "rgba(233, 30, 99, 1)", !1),
                            level8: t(2, k, !1)
                        },
                        linetoolgannfan: {
                            showLabels: !0,
                            fillBackground: !0,
                            transparency: 80,
                            level1: A(1, 8, "rgba(255, 183, 77, 1)", !0),
                            level2: A(1, 4, "rgba(129, 199, 132, 1)", !0),
                            level3: A(1, 3, "rgba(76, 175, 80, 1)", !0),
                            level4: A(1, 2, I, !0),
                            level5: A(1, 1, "rgba(100, 181, 246, 1)", !0),
                            level6: A(2, 1, p, !0),
                            level7: A(3, 1, "rgba(156, 39, 176, 1)", !0),
                            level8: A(4, 1, "rgba(233, 30, 99, 1)", !0),
                            level9: A(8, 1, k, !0)
                        },
                        linetoolganncomplex: {
                            fillBackground: !1,
                            arcsBackground: {
                                fillBackground: !0,
                                transparency: 80
                            },
                            reverse: !1,
                            scaleRatio: "",
                            showLabels: !0,
                            labelsStyle: {
                                font: C,
                                fontSize: 12,
                                bold: !1,
                                italic: !1
                            },
                            levels: [y("rgba(120, 123, 134, 1)", !0, 1), y("rgba(255, 152, 0, 1)", !0, 1), y("rgba(129, 199, 132, 1)", !0, 1), y("rgba(76, 175, 80, 1)", !0, 1), y(I, !0, 1), y("rgba(120, 123, 134, 1)", !0, 1)],
                            fanlines: [D("rgba(179, 157, 219, 1)", !1, 1, 8, 1), D(T, !1, 1, 5, 1), D("rgba(120, 123, 134, 1)", !1, 1, 4, 1), D("rgba(255, 152, 0, 1)", !1, 1, 3, 1), D("rgba(129, 199, 132, 1)", !0, 1, 2, 1), D("rgba(76, 175, 80, 1)", !0, 1, 1, 1), D(I, !0, 1, 1, 2), D(I, !1, 1, 1, 3), D(p, !1, 1, 1, 4), D("rgba(149, 117, 205, 1)", !1, 1, 1, 5), D("rgba(179, 157, 219, 1)", !1, 1, 1, 8)],
                            arcs: [D("rgba(255, 152, 0, 1)", !0, 1, 1, 0), D("rgba(255, 152, 0, 1)", !0, 1, 1, 1), D("rgba(255, 152, 0, 1)", !0, 1, 1.5, 0), D("rgba(129, 199, 132, 1)", !0, 1, 2, 0), D("rgba(129, 199, 132, 1)", !0, 1, 2, 1), D("rgba(76, 175, 80, 1)", !0, 1, 3, 0), D("rgba(76, 175, 80, 1)", !0, 1, 3, 1), D(I, !0, 1, 4, 0), D(I, !0, 1, 4, 1), D(p, !0, 1, 5, 0), D(p, !0, 1, 5, 1)]
                        },
                        linetoolgannfixed: {
                            fillBackground: !1,
                            arcsBackground: {
                                fillBackground: !0,
                                transparency: 80
                            },
                            reverse: !1,
                            levels: [y("rgba(120, 123, 134, 1)", !0, 1), y("rgba(255, 152, 0, 1)", !0, 1), y("rgba(129, 199, 132, 1)", !0, 1), y("rgba(76, 175, 80, 1)", !0, 1), y(I, !0, 1), y("rgba(120, 123, 134, 1)", !0, 1)],
                            fanlines: [D("rgba(179, 157, 219, 1)", !1, 1, 8, 1), D(T, !1, 1, 5, 1), D("rgba(120, 123, 134, 1)", !1, 1, 4, 1), D("rgba(255, 152, 0, 1)", !1, 1, 3, 1), D("rgba(129, 199, 132, 1)", !0, 1, 2, 1), D("rgba(76, 175, 80, 1)", !0, 1, 1, 1), D(I, !0, 1, 1, 2), D(I, !1, 1, 1, 3), D(p, !1, 1, 1, 4), D("rgba(149, 117, 205, 1)", !1, 1, 1, 5), D("rgba(179, 157, 219, 1)", !1, 1, 1, 8)],
                            arcs: [D("rgba(255, 152, 0, 1)", !0, 1, 1, 0), D("rgba(255, 152, 0, 1)", !0, 1, 1, 1), D("rgba(255, 152, 0, 1)", !0, 1, 1.5, 0), D("rgba(129, 199, 132, 1)", !0, 1, 2, 0), D("rgba(129, 199, 132, 1)", !0, 1, 2, 1), D("rgba(76, 175, 80, 1)", !0, 1, 3, 0), D("rgba(76, 175, 80, 1)", !0, 1, 3, 1), D(I, !0, 1, 4, 0), D(I, !0, 1, 4, 1), D(p, !0, 1, 5, 0), D(p, !0, 1, 5, 1)]
                        },
                        linetoolgannsquare: {
                            color: "rgba( 21, 56, 153, 0.8)",
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            showTopLabels: !0,
                            showBottomLabels: !0,
                            showLeftLabels: !0,
                            showRightLabels: !0,
                            fillHorzBackground: !0,
                            horzTransparency: 80,
                            fillVertBackground: !0,
                            vertTransparency: 80,
                            reverse: !1,
                            fans: o("rgba(149, 152, 161, 1)", !1),
                            hlevel1: l(0, "rgba(120, 123, 134, 1)", !0),
                            hlevel2: l(.25, "rgba(245, 124, 0, 1)", !0),
                            hlevel3: l(.382, "rgba(129, 199, 132, 1)", !0),
                            hlevel4: l(.5, "rgba(76, 175, 80, 1)", !0),
                            hlevel5: l(.618, I, !0),
                            hlevel6: l(.75, p, !0),
                            hlevel7: l(1, "rgba(120, 123, 134, 1)", !0),
                            vlevel1: l(0, "rgba(120, 123, 134, 1)", !0),
                            vlevel2: l(.25, "rgba(245, 124, 0, 1)", !0),
                            vlevel3: l(.382, "rgba(129, 199, 132, 1)", !0),
                            vlevel4: l(.5, "rgba(76, 175, 80, 1)", !0),
                            vlevel5: l(.618, I, !0),
                            vlevel6: l(.75, p, !0),
                            vlevel7: l(1, "rgba(120, 123, 134, 1)", !0)
                        },
                        linetoolfibspeedresistancefan: {
                            fillBackground: !0,
                            transparency: 80,
                            grid: {
                                color: "rgba( 21, 56, 153, 0.8)",
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                visible: !0
                            },
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            showTopLabels: !0,
                            showBottomLabels: !0,
                            showLeftLabels: !0,
                            showRightLabels: !0,
                            reverse: !1,
                            hlevel1: l(0, "rgba(120, 123, 134, 1)", !0),
                            hlevel2: l(.25, "rgba(245, 124, 0, 1)", !0),
                            hlevel3: l(.382, "rgba(129, 199, 132, 1)", !0),
                            hlevel4: l(.5, "rgba(76, 175, 80, 1)", !0),
                            hlevel5: l(.618, I, !0),
                            hlevel6: l(.75, p, !0),
                            hlevel7: l(1, "rgba(120, 123, 134, 1)", !0),
                            vlevel1: l(0, "rgba(120, 123, 134, 1)", !0),
                            vlevel2: l(.25, "rgba(245, 124, 0, 1)", !0),
                            vlevel3: l(.382, "rgba(129, 199, 132, 1)", !0),
                            vlevel4: l(.5, "rgba(76, 175, 80, 1)", !0),
                            vlevel5: l(.618, I, !0),
                            vlevel6: l(.75, p, !0),
                            vlevel7: l(1, "rgba(120, 123, 134, 1)", !0)
                        },
                        linetoolfibretracement: {
                            showCoeffs: !0,
                            showPrices: !0,
                            fillBackground: !0,
                            transparency: 80,
                            extendLines: !1,
                            extendLinesLeft: !1,
                            horzLabelsAlign: "left",
                            vertLabelsAlign: "bottom",
                            reverse: !1,
                            coeffsAsPercents: !1,
                            fibLevelsBasedOnLogScale: !1,
                            trendline: {
                                visible: !0,
                                color: "rgba(120, 123, 134, 1)",
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_DASHED
                            },
                            levelsStyle: {
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            level1: l(0, "rgba(120, 123, 134, 1)", !0),
                            level2: l(.236, T, !0),
                            level3: l(.382, "rgba(129, 199, 132, 1)", !0),
                            level4: l(.5, "rgba(76, 175, 80, 1)", !0),
                            level5: l(.618, I, !0),
                            level6: l(.786, "rgba(100, 181, 246, 1)", !0),
                            level7: l(1, "rgba(120, 123, 134, 1)", !0),
                            level8: l(1.618, p, !0),
                            level9: l(2.618, T, !0),
                            level10: l(3.618, "rgba(156, 39, 176, 1)", !0),
                            level11: l(4.236, "rgba(233, 30, 99, 1)", !0),
                            level12: l(1.272, "rgba(129, 199, 132, 1)", !1),
                            level13: l(1.414, T, !1),
                            level16: l(2, I, !1),
                            level14: l(2.272, "rgba(129, 199, 132, 1)", !1),
                            level15: l(2.414, "rgba(76, 175, 80, 1)", !1),
                            level17: l(3, "rgba(100, 181, 246, 1)", !1),
                            level18: l(3.272, "rgba(120, 123, 134, 1)", !1),
                            level19: l(3.414, p, !1),
                            level20: l(4, "rgba( 204, 40, 40, 1)", !1),
                            level21: l(4.272, "rgba(156, 39, 176, 1)", !1),
                            level22: l(4.414, "rgba(233, 30, 99, 1)", !1),
                            level23: l(4.618, "rgba(129, 199, 132, 1)", !1),
                            level24: l(4.764, I, !1)
                        },
                        linetoolfibchannel: {
                            showCoeffs: !0,
                            showPrices: !0,
                            fillBackground: !0,
                            transparency: 80,
                            extendLeft: !1,
                            extendRight: !1,
                            horzLabelsAlign: "left",
                            vertLabelsAlign: "middle",
                            coeffsAsPercents: !1,
                            levelsStyle: {
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            level1: l(0, "rgba(120, 123, 134, 1)", !0),
                            level2: l(.236, T, !0),
                            level3: l(.382, "rgba(129, 199, 132, 1)", !0),
                            level4: l(.5, "rgba(76, 175, 80, 1)", !0),
                            level5: l(.618, I, !0),
                            level6: l(.786, "rgba(100, 181, 246, 1)", !0),
                            level7: l(1, "rgba(120, 123, 134, 1)", !0),
                            level8: l(1.618, p, !0),
                            level9: l(2.618, T, !0),
                            level10: l(3.618, "rgba(156, 39, 176, 1)", !0),
                            level11: l(4.236, "rgba(233, 30, 99, 1)", !0),
                            level12: l(1.272, "rgba(129, 199, 132, 1)", !1),
                            level13: l(1.414, T, !1),
                            level16: l(2, I, !1),
                            level14: l(2.272, "rgba(129, 199, 132, 1)", !1),
                            level15: l(2.414, "rgba(76, 175, 80, 1)", !1),
                            level17: l(3, "rgba(100, 181, 246, 1)", !1),
                            level18: l(3.272, "rgba(120, 123, 134, 1)", !1),
                            level19: l(3.414, p, !1),
                            level20: l(4, "rgba( 204, 40, 40, 1)", !1),
                            level21: l(4.272, "rgba(156, 39, 176, 1)", !1),
                            level22: l(4.414, "rgba(233, 30, 99, 1)", !1),
                            level23: l(4.618, "rgba(129, 199, 132, 1)", !1),
                            level24: l(4.764, I, !1)
                        },
                        linetoolprojection: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            color1: i(p, 80),
                            color2: "rgba(156, 39, 176, 0.2)",
                            linewidth: 1,
                            trendline: {
                                visible: !0,
                                color: "rgba(149, 152, 161, 1)",
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            level1: t(1, "rgba( 128, 128, 128, 1)", !0)
                        },
                        linetool5pointspattern: {
                            color: p,
                            textcolor: "rgba( 255, 255, 255, 1)",
                            fillBackground: !0,
                            backgroundColor: p,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 85,
                            linewidth: 1
                        },
                        linetoolcypherpattern: {
                            color: p,
                            textcolor: "#FFFFFF",
                            fillBackground: !0,
                            backgroundColor: p,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 85,
                            linewidth: 1
                        },
                        linetooltrianglepattern: {
                            color: "#673AB7",
                            textcolor: "#FFFFFF",
                            fillBackground: !0,
                            backgroundColor: "#673AB7",
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 85,
                            linewidth: 1
                        },
                        linetoolabcd: {
                            color: I,
                            textcolor: "rgba( 255, 255, 255, 1)",
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            linewidth: 1
                        },
                        linetoolthreedrivers: {
                            color: "#673AB7",
                            textcolor: "rgba( 255, 255, 255, 1)",
                            fillBackground: !0,
                            backgroundColor: "rgba( 149, 40, 204, 0.5)",
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 50,
                            linewidth: 1
                        },
                        linetoolheadandshoulders: {
                            color: I,
                            textcolor: "rgba( 255, 255, 255, 1)",
                            fillBackground: !0,
                            backgroundColor: I,
                            fontsize: 12,
                            bold: !1,
                            italic: !1,
                            transparency: 85,
                            linewidth: 1
                        },
                        linetoolfibwedge: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            trendline: {
                                visible: !0,
                                color: "rgba( 128, 128, 128, 1)",
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            level1: t(.236, T, !0),
                            level2: t(.382, "rgba(129, 199, 132, 1)", !0),
                            level3: t(.5, "rgba(76, 175, 80, 1)", !0),
                            level4: t(.618, I, !0),
                            level5: t(.786, "rgba(100, 181, 246, 1)", !0),
                            level6: t(1, "rgba(120, 123, 134, 1)", !0),
                            level7: t(1.618, p, !1),
                            level8: t(2.618, T, !1),
                            level9: t(3.618, "rgba(103, 58, 183, 1)", !1),
                            level10: t(4.236, "rgba(233, 30, 99, 1)", !1),
                            level11: t(4.618, "rgba(233, 30, 99, 1)", !1)
                        },
                        linetoolfibcircles: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            coeffsAsPercents: !1,
                            trendline: {
                                visible: !0,
                                color: "rgba(120, 123, 134, 1)",
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_DASHED
                            },
                            level1: t(.236, T, !0),
                            level2: t(.382, "rgba(129, 199, 132, 1)", !0),
                            level3: t(.5, "rgba(76, 175, 80, 1)", !0),
                            level4: t(.618, I, !0),
                            level5: t(.786, "rgba(100, 181, 246, 1)", !0),
                            level6: t(1, "rgba(120, 123, 134, 1)", !0),
                            level7: t(1.618, p, !0),
                            level8: t(2.618, T, !0),
                            level9: t(3.618, "rgba(103, 58, 183, 1)", !0),
                            level10: t(4.236, "rgba(233, 30, 99, 1)", !0),
                            level11: t(4.618, "rgba(233, 30, 99, 1)", !0)
                        },
                        linetoolfibspeedresistancearcs: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            fullCircles: !1,
                            trendline: {
                                visible: !0,
                                color: "rgba(120, 123, 134, 1)",
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_DASHED
                            },
                            level1: t(.236, T, !0),
                            level2: t(.382, "rgba(129, 199, 132, 1)", !0),
                            level3: t(.5, "rgba(76, 175, 80, 1)", !0),
                            level4: t(.618, I, !0),
                            level5: t(.786, "rgba(100, 181, 246, 1)", !0),
                            level6: t(1, "rgba(120, 123, 134, 1)", !0),
                            level7: t(1.618, p, !0),
                            level8: t(2.618, T, !0),
                            level9: t(3.618, "rgba(103, 58, 183, 1)", !0),
                            level10: t(4.236, "rgba(233, 30, 99, 1)", !0),
                            level11: t(4.618, "rgba(233, 30, 99, 1)", !0)
                        },
                        linetooltrendbasedfibextension: {
                            showCoeffs: !0,
                            showPrices: !0,
                            fillBackground: !0,
                            transparency: 80,
                            extendLines: !1,
                            extendLinesLeft: !1,
                            horzLabelsAlign: "left",
                            vertLabelsAlign: "bottom",
                            reverse: !1,
                            coeffsAsPercents: !1,
                            fibLevelsBasedOnLogScale: !1,
                            trendline: {
                                visible: !0,
                                color: "rgba(120, 123, 134, 1)",
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_DASHED
                            },
                            levelsStyle: {
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            level1: l(0, "rgba(120, 123, 134, 1)", !0),
                            level2: l(.236, T, !0),
                            level3: l(.382, "rgba(129, 199, 132, 1)", !0),
                            level4: l(.5, "rgba(76, 175, 80, 1)", !0),
                            level5: l(.618, I, !0),
                            level6: l(.786, "rgba(100, 181, 246, 1)", !0),
                            level7: l(1, "rgba(120, 123, 134, 1)", !0),
                            level8: l(1.618, p, !0),
                            level9: l(2.618, T, !0),
                            level10: l(3.618, "rgba(156, 39, 176, 1)", !0),
                            level11: l(4.236, "rgba(233, 30, 99, 1)", !0),
                            level12: l(1.272, "rgba(129, 199, 132, 1)", !1),
                            level13: l(1.414, T, !1),
                            level16: l(2, I, !1),
                            level14: l(2.272, "rgba(129, 199, 132, 1)", !1),
                            level15: l(2.414, "rgba(76, 175, 80, 1)", !1),
                            level17: l(3, "rgba(100, 181, 246, 1)", !1),
                            level18: l(3.272, "rgba(120, 123, 134, 1)", !1),
                            level19: l(3.414, p, !1),
                            level20: l(4, "rgba( 204, 40, 40, 1)", !1),
                            level21: l(4.272, "rgba(156, 39, 176, 1)", !1),
                            level22: l(4.414, "rgba(233, 30, 99, 1)", !1),
                            level23: l(4.618, "rgba(129, 199, 132, 1)", !1),
                            level24: l(4.764, I, !1)
                        },
                        linetooltrendbasedfibtime: {
                            showCoeffs: !0,
                            fillBackground: !0,
                            transparency: 80,
                            horzLabelsAlign: "right",
                            vertLabelsAlign: "bottom",
                            trendline: {
                                visible: !0,
                                color: "rgba(120, 123, 134, 1)",
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_DASHED
                            },
                            level1: t(0, "rgba(120, 123, 134, 1)", !0),
                            level2: t(.382, T, !0),
                            level3: t(.5, "rgba(129, 199, 132, 1)", !1),
                            level4: t(.618, "rgba(76, 175, 80, 1)", !0),
                            level5: t(1, I, !0),
                            level6: t(1.382, "rgba(100, 181, 246, 1)", !0),
                            level7: t(1.618, "rgba(120, 123, 134, 1)", !0),
                            level8: t(2, p, !0),
                            level9: t(2.382, T, !0),
                            level10: t(2.618, "rgba(156, 39, 176, 1)", !0),
                            level11: t(3, "rgba(233, 30, 99, 1)", !0)
                        },
                        linetoolschiffpitchfork: {
                            fillBackground: !0,
                            transparency: 80,
                            style: s.Schiff,
                            median: {
                                visible: !0,
                                color: T,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            extendLines: !1,
                            level0: t(.25, "rgba(255, 183, 77, 1)", !1),
                            level1: t(.382, "rgba(129, 199, 132, 1)", !1),
                            level2: t(.5, "rgba(76, 175, 80, 1)", !0),
                            level3: t(.618, I, !1),
                            level4: t(.75, "rgba(100, 181, 246, 1)", !1),
                            level5: t(1, p, !0),
                            level6: t(1.5, "rgba(156, 39, 176, 1)", !1),
                            level7: t(1.75, "rgba(233, 30, 99, 1)", !1),
                            level8: t(2, k, !1)
                        },
                        linetoolschiffpitchfork2: {
                            fillBackground: !0,
                            transparency: 80,
                            style: s.Schiff2,
                            median: {
                                visible: !0,
                                color: T,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            extendLines: !1,
                            level0: t(.25, "rgba(255, 183, 77, 1)", !1),
                            level1: t(.382, "rgba(129, 199, 132, 1)", !1),
                            level2: t(.5, "rgba(76, 175, 80, 1)", !0),
                            level3: t(.618, I, !1),
                            level4: t(.75, "rgba(100, 181, 246, 1)", !1),
                            level5: t(1, p, !0),
                            level6: t(1.5, "rgba(156, 39, 176, 1)", !1),
                            level7: t(1.75, "rgba(233, 30, 99, 1)", !1),
                            level8: t(2, k, !1)
                        },
                        linetoolinsidepitchfork: {
                            fillBackground: !0,
                            transparency: 80,
                            style: s.Inside,
                            median: {
                                visible: !0,
                                color: T,
                                linewidth: 1,
                                linestyle: CanvasEx.LINESTYLE_SOLID
                            },
                            extendLines: !1,
                            level0: t(.25, "rgba(255, 183, 77, 1)", !1),
                            level1: t(.382, "rgba(129, 199, 132, 1)", !1),
                            level2: t(.5, "rgba(76, 175, 80, 1)", !0),
                            level3: t(.618, I, !1),
                            level4: t(.75, "rgba(100, 181, 246, 1)", !1),
                            level5: t(1, p, !0),
                            level6: t(1.5, "rgba(156, 39, 176, 1)", !1),
                            level7: t(1.75, "rgba(233, 30, 99, 1)", !1),
                            level8: t(2, k, !1)
                        },
                        linetoolregressiontrend: {
                            linewidth: 1,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            styles: {
                                upLine: {
                                    visible: !0,
                                    color: i(p, 70),
                                    linestyle: CanvasEx.LINESTYLE_SOLID,
                                    linewidth: 1
                                },
                                downLine: {
                                    visible: !0,
                                    color: i(p, 70),
                                    linestyle: CanvasEx.LINESTYLE_SOLID,
                                    linewidth: 1
                                },
                                baseLine: {
                                    visible: !0,
                                    color: i(T, 70),
                                    linestyle: CanvasEx.LINESTYLE_SOLID,
                                    linewidth: 1
                                },
                                extendLines: !1,
                                showPearsons: !0,
                                transparency: 70
                            }
                        }
                    }, _(TradingView.defaultProperties.chartproperties), N()
                }
                if (void 0 === TradingView.defaultProperties["study_MA@tv-basicstudies"] && (TradingView.defaultProperties["study_MA@tv-basicstudies"] = {
                        description: "Moving Average",
                        shortDescription: "MA",
                        inputs: {
                            length: 9,
                            source: "close"
                        },
                        styles: {
                            MovAvg: {
                                visible: !0,
                                color: p,
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1,
                                plottype: d.Line,
                                histogramBase: 0,
                                title: "MA"
                            }
                        }
                    }), void 0 === TradingView.defaultProperties["study_PivotPointsHighLow@tv-basicstudies"] && (TradingView.defaultProperties["study_PivotPointsHighLow@tv-basicstudies"] = {
                        fontsize: 10,
                        borderColor: p,
                        backColor: "#E3EFFD",
                        textColor: "#131722"
                    }), void 0 === TradingView.defaultProperties["study_PivotPointsStandard@tv-basicstudies"]) {
                    TradingView.defaultProperties["study_PivotPointsStandard@tv-basicstudies"] = {
                        _hardCodedDefaultsVersion: 1,
                        fontsize: 11,
                        levelsStyle: {
                            showLabels: !0,
                            visibility: {
                                P: !0,
                                "S1/R1": !0,
                                "S2/R2": !0,
                                "S3/R3": !0,
                                "S4/R4": !0,
                                "S5/R5": !0
                            },
                            colors: {
                                P: "#FB8C00",
                                "S1/R1": "#FB8C00",
                                "S2/R2": "#FB8C00",
                                "S3/R3": "#FB8C00",
                                "S4/R4": "#FB8C00",
                                "S5/R5": "#FB8C00"
                            },
                            widths: {
                                P: 1,
                                "S1/R1": 1,
                                "S2/R2": 1,
                                "S3/R3": 1,
                                "S4/R4": 1,
                                "S5/R5": 1
                            }
                        }
                    }
                }
                if (void 0 === TradingView.defaultProperties["study_ZigZag@tv-basicstudies"] && (TradingView.defaultProperties["study_ZigZag@tv-basicstudies"] = {
                        color: p,
                        linewidth: 2
                    }), void 0 === TradingView.defaultProperties["study_ElliottWave@tv-basicstudies"] && (TradingView.defaultProperties["study_ElliottWave@tv-basicstudies"] = {
                        inputs: {},
                        level0: o("rgba( 255, 0, 0, 1)", !1),
                        level1: o("rgba( 0, 128, 0, 1)", !1),
                        level2: o("rgba( 0, 0, 255, 1)", !1),
                        level3: o("rgba( 255, 0, 255, 1)", !1),
                        level4: o("rgba( 0, 128, 255, 1)", !0),
                        level5: o("rgba( 255, 0, 0, 1)", !0),
                        level6: o("rgba( 0, 128, 0, 1)", !0),
                        level7: o("rgba( 0, 0, 255, 1)", !0),
                        level8: o("rgba( 255, 0, 255, 1)", !0)
                    }), void 0 === TradingView.defaultProperties["study_LinearRegression@tv-basicstudies"] && (TradingView.defaultProperties["study_LinearRegression@tv-basicstudies"] = {
                        styles: {
                            upLine: {
                                visible: !0,
                                color: i(p, 70),
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1
                            },
                            downLine: {
                                visible: !0,
                                color: i(p, 70),
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1
                            },
                            baseLine: {
                                visible: !0,
                                color: i(T, 70),
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1
                            },
                            extendLines: !0,
                            showPearsons: !0,
                            backgroundColor: "rgba( 153, 21, 21, 0.3)",
                            transparency: 70
                        }
                    }), void 0 === TradingView.defaultProperties["study_Compare@tv-basicstudies"] && (TradingView.defaultProperties["study_Compare@tv-basicstudies"] = {
                        minTick: "default"
                    }), void 0 === TradingView.defaultProperties["study_Overlay@tv-basicstudies"]) {
                    TradingView.defaultProperties["study_Overlay@tv-basicstudies"] = {
                        style: n.STYLE_LINE,
                        allowExtendTimeScale: !1,
                        showPriceLine: !1,
                        minTick: "default",
                        candleStyle: {
                            upColor: "rgba( 107, 165, 131, 1)",
                            downColor: "rgba( 215, 84, 66, 1)",
                            drawWick: !0,
                            drawBorder: !0,
                            drawBody: !0,
                            borderColor: "rgba( 55, 134, 88, 1)",
                            borderUpColor: "rgba( 34, 84, 55, 1)",
                            borderDownColor: "rgba( 91, 26, 19, 1)",
                            wickColor: "rgba( 115, 115, 117, 1)",
                            wickUpColor: "rgba( 115, 115, 117, 1)",
                            wickDownColor: "rgba( 115, 115, 117, 1)",
                            barColorsOnPrevClose: !1
                        },
                        hollowCandleStyle: {
                            upColor: "rgba( 107, 165, 131, 1)",
                            downColor: "rgba( 215, 84, 66, 1)",
                            drawWick: !0,
                            drawBorder: !0,
                            drawBody: !0,
                            borderColor: "rgba( 55, 134, 88, 1)",
                            borderUpColor: "rgba( 34, 84, 55, 1)",
                            borderDownColor: "rgba( 91, 26, 19, 1)",
                            wickColor: "rgba( 115, 115, 117, 1)",
                            wickUpColor: "rgba( 115, 115, 117, 1)",
                            wickDownColor: "rgba( 115, 115, 117, 1)",
                            barColorsOnPrevClose: !1
                        },
                        barStyle: {
                            upColor: "rgba( 107, 165, 131, 1)",
                            downColor: "rgba( 215, 84, 66, 1)",
                            barColorsOnPrevClose: !1,
                            dontDrawOpen: !1,
                            thinBars: !0
                        },
                        lineStyle: {
                            color: "#FF6D00",
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            linewidth: 2,
                            priceSource: "close",
                            styleType: n.STYLE_LINE_TYPE_SIMPLE
                        },
                        areaStyle: {
                            color1: p,
                            color2: p,
                            linecolor: p,
                            linestyle: CanvasEx.LINESTYLE_SOLID,
                            linewidth: 2,
                            priceSource: "close",
                            transparency: 95
                        },
                        baselineStyle: {
                            baselineColor: "rgba( 117, 134, 150, 1)",
                            topFillColor1: "rgba( 83, 185, 135, 0.05)",
                            topFillColor2: "rgba( 83, 185, 135, 0.05)",
                            bottomFillColor1: "rgba( 235, 77, 92, 0.05)",
                            bottomFillColor2: "rgba( 235, 77, 92, 0.05)",
                            topLineColor: "rgba( 83, 185, 135, 1)",
                            bottomLineColor: "rgba( 235, 77, 92, 1)",
                            topLineWidth: 2,
                            bottomLineWidth: 2,
                            priceSource: "close",
                            transparency: 50,
                            baseLevelPercentage: 50
                        },
                        styles: {
                            open: {
                                visible: !0,
                                color: "rgba( 255, 0, 0, 1)",
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1,
                                plottype: d.Line,
                                histogramBase: 0
                            },
                            high: {
                                visible: !0,
                                color: "rgba( 255, 0, 0, 1)",
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1,
                                plottype: d.Line,
                                histogramBase: 0
                            },
                            low: {
                                visible: !0,
                                color: "rgba( 255, 0, 0, 1)",
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1,
                                plottype: d.Line,
                                histogramBase: 0
                            },
                            close: {
                                visible: !0,
                                color: "rgba( 255, 0, 0, 1)",
                                linestyle: CanvasEx.LINESTYLE_SOLID,
                                linewidth: 1,
                                plottype: d.Line,
                                histogramBase: 0
                            }
                        }
                    }
                }
                for (var z = e.split("."), R = TradingView.defaultProperties, Y = 0; Y < z.length; Y++) R && (R = R[z[Y]]);
                return null != R ? TradingView.clone(R) : {}
            };

            function A(e, o, l, r, t) {
                if (r)
                    for (var i in r) {
                        var a = i.split("."),
                            n = c(a[0]),
                            s = void 0 !== t && t === a[0];
                        0 !== a.length && s && (n = c((a = a.slice(1))[0])), 0 !== a.length && e.hasOwnProperty(n) ? d(e, a, r[i]) || g(i) : s && g(i)
                    }

                function c(e) {
                    return o && o[e] ? o[e] : e
                }

                function d(e, o, l, r) {
                    var t = c(o[0]);
                    return !!e.hasOwnProperty(t) && (o.length > 1 ? d(e[t], o.slice(1), l) : (e[t] && e[t].setValue ? e[t].setValue(l) : e[t] = l, !0))
                }

                function g(e) {
                    l || y.logWarn("Path `" + e + "` does not exist.")
                }
            }

            function _(e, o, l, r) {
                window.__defaultsOverrides && A(e, o, l, window.__defaultsOverrides, r)
            }

            function N() {
                var e = /^linetool.+/;
                Object.keys(TradingView.defaultProperties).forEach((function(o) {
                    e.test(o) && _(TradingView.defaultProperties[o], null, !1, o)
                }))
            }

            function O(e, o) {
                return o ? function(e, o) {
                    var l = D(e);
                    if (!window._UNIT_TESTS) {
                        var r = TradingView.clone(TVSettings.getJSON(e, null));
                        if (function(e) {
                                var o = new Set(["linetoolregressiontrend"]);
                                return e.startsWith("study_") || o.has(e)
                            }(e) && r && function(e) {
                                if (!e) return !1;
                                e = e.toString();
                                var o = new RegExp("\\d+").exec(e);
                                return null !== o && o[0] === e
                            }(r.version)) {
                            var t = r.inputs,
                                i = o.updateStudyInputs(r.id, r.version, "last", t, null);
                            r.inputs = i;
                            var a = o.updateStudyState(r, r);
                            r = a
                        }
                        TradingView.merge(l, r)
                    }
                    return l
                }(e, o) : function(e) {
                    var o = D(e);
                    if (!window._UNIT_TESTS) {
                        var l = TradingView.clone(TVSettings.getJSON(e, null));
                        l && TradingView.merge(o, l)
                    }
                    return o
                }(e)
            }
            O.create = function(e, o) {
                if (o) {
                    var l = D(e);
                    TradingView.defaultProperties[e] = Object.assign(o, l)
                }
            }, O.remove = function(e) {
                TradingView.defaultProperties[e] = void 0
            }, TradingView.saveDefaults = function(e, o) {
                TVSettings.setJSON(e, o)
            }, TradingView.factoryDefaults = D, window.applyDefaultOverridesToLinetools = N, window.applyDefaultsOverrides = _, window.applyPropertiesOverrides = A, window.defaults = O, o.applyDefaultOverridesToLinetools = N, o.applyDefaultsOverrides = _, o.applyPropertiesOverrides = A, o.defaults = O, o.factoryDefaults = D, o.saveDefaults = TradingView.saveDefaults
        },
        394209: (e, o, l) => {
            "use strict";
            var r, t;
            l.d(o, {
                    PositionPLDisplay: () => r,
                    TradingSourcesHorizontalAlignment: () => t,
                    tradingPreferencesDefault: () => i,
                    CustomSourceLayer: () => a
                }),
                function(e) {
                    e[e.Money = 0] = "Money", e[e.Pips = 1] = "Pips", e[e.Percentage = 2] = "Percentage"
                }(r || (r = {})),
                function(e) {
                    e[e.Left = 0] = "Left", e[e.Center = 1] = "Center", e[e.Right = 2] = "Right"
                }(t || (t = {}));
            const i = {
                showPositions: !1,
                positionPL: {
                    visibility: !1,
                    display: r.Money
                },
                showOrders: !1,
                showExecutions: !1,
                showReverse: !1,
                showTPSL: !1,
                extendLeft: !1,
                horizontalAlignment: t.Right,
                lineWidth: 0,
                lineStyle: 0
            };
            var a;
            ! function(e) {
                e[e.Background = 0] = "Background", e[e.Foreground = 1] = "Foreground", e[e.Topmost = 2] = "Topmost"
            }(a || (a = {}))
        },
        91491: (e, o, l) => {
            "use strict";
            var r;
            l.d(o, {
                    LineToolBarsPatternMode: () => r
                }),
                function(e) {
                    e[e.Bars = 0] = "Bars", e[e.Line = 1] = "Line", e[e.OpenClose = 2] = "OpenClose", e[e.LineOpen = 3] = "LineOpen", e[e.LineHigh = 4] = "LineHigh", e[e.LineLow = 5] = "LineLow", e[e.LineHL2 = 6] = "LineHL2"
                }(r || (r = {}))
        },
        453995: (e, o, l) => {
            "use strict";
            var r;
            l.d(o, {
                    LineToolPitchforkStyle: () => r
                }),
                function(e) {
                    e[e.Original = 0] = "Original", e[e.Schiff = 1] = "Schiff", e[e.Inside = 2] = "Inside", e[e.Schiff2 = 3] = "Schiff2"
                }(r || (r = {}))
        },
        295215: (e, o, l) => {
            "use strict";
            var r;
            l.d(o, {
                    MagnetMode: () => r
                }),
                function(e) {
                    e[e.WeakMagnet = 0] = "WeakMagnet", e[e.StrongMagnet = 1] = "StrongMagnet"
                }(r || (r = {}))
        },
        698815: (e, o, l) => {
            "use strict";
            var r;
            l.d(o, {
                    LineEnd: () => r
                }),
                function(e) {
                    e[e.Normal = 0] = "Normal", e[e.Arrow = 1] = "Arrow", e[e.Circle = 2] = "Circle"
                }(r || (r = {}))
        },
        293828: (e, o, l) => {
            "use strict";
            var r;
            l.d(o, {
                    StatsPosition: () => r
                }),
                function(e) {
                    e[e.Left = 0] = "Left", e[e.Center = 1] = "Center", e[e.Right = 2] = "Right"
                }(r || (r = {}))
        },
        142461: (e, o, l) => {
            "use strict";
            l.d(o, {
                sessionsPreferencesDefault: () => t
            });
            var r = l(993669);
            const t = {
                graphics: {
                    backgrounds: {
                        outOfSession: {
                            color: r.colorsPalette["color-tv-blue-500"],
                            transparency: 92,
                            visible: !1
                        },
                        preMarket: {
                            color: "#FF9800",
                            transparency: 92,
                            visible: !1
                        },
                        postMarket: {
                            color: r.colorsPalette["color-tv-blue-500"],
                            transparency: 92,
                            visible: !1
                        }
                    },
                    vertlines: {
                        sessBreaks: {
                            color: "#4985e7",
                            style: 2,
                            visible: !1,
                            width: 1
                        }
                    }
                }
            }
        },
        493441: (e, o, l) => {
            "use strict";
            var r;
            l.d(o, {
                    StoriesTimeLineItemType: () => r
                }),
                function(e) {
                    e[e.Image = 0] = "Image", e[e.Emoji = 1] = "Emoji"
                }(r || (r = {}))
        },
        555782: (e, o, l) => {
            "use strict";
            var r, t;

            function i(e) {
                return "line" === e.type
            }

            function a(e) {
                return "shapes" === e.type
            }

            function n(e) {
                return "chars" === e.type
            }

            function s(e) {
                return "arrows" === e.type
            }

            function c(e) {
                return "dataoffset" === e.type
            }

            function d(e) {
                return "ohlc_open" === e.type
            }

            function g(e) {
                return "ohlc_high" === e.type
            }

            function b(e) {
                return "ohlc_low" === e.type
            }

            function u(e) {
                return "ohlc_close" === e.type
            }

            function v(e) {
                return d(e) || g(e) || b(e) || u(e)
            }

            function h(e) {
                return "colorer" === e.type
            }

            function w(e) {
                return "bar_colorer" === e.type
            }

            function L(e) {
                return "bg_colorer" === e.type
            }

            function f(e) {
                return "text_colorer" === e.type
            }

            function y(e) {
                return "ohlc_colorer" === e.type
            }

            function C(e) {
                return "wick_colorer" === e.type
            }

            function p(e) {
                return "border_colorer" === e.type
            }

            function S(e) {
                return "up_colorer" === e.type
            }

            function E(e) {
                return "down_colorer" === e.type
            }

            function k(e) {
                return "alertcondition" === e.type
            }

            function B(e) {
                return "Plot" !== e
            }

            function T(e) {
                return "ohlc_bars" === e.plottype
            }

            function P(e) {
                return "ohlc_candles" === e.plottype
            }

            function x(e) {
                return h(e) || w(e) || L(e) || c(e) || y(e) || k(e) || S(e) || E(e) || p(e) || C(e) || f(e)
            }

            function m(e) {
                return h(e) || f(e) || w(e) || c(e) || y(e) || C(e) || p(e) || S(e) || E(e) || k(e)
            }
            l.r(o), l.d(o, {
                    LineStudyPlotStyle: () => r,
                    isLinePlot: () => i,
                    isShapesPlot: () => a,
                    isCharsPlot: () => n,
                    isArrowsPlot: () => s,
                    isDataOffsetPlot: () => c,
                    isOhlcOpenPlot: () => d,
                    isOhlcHighPlot: () => g,
                    isOhlcLowPlot: () => b,
                    isOhlcClosePlot: () => u,
                    isOhlcPlot: () => v,
                    isColorerPlot: () => h,
                    isBarColorerPlot: () => w,
                    isBgColorerPlot: () => L,
                    isTextColorerPlot: () => f,
                    isOhlcColorerPlot: () => y,
                    isCandleWickColorerPlot: () => C,
                    isCandleBorderColorerPlot: () => p,
                    isUpColorerPlot: () => S,
                    isDownColorerPlot: () => E,
                    isAlertConditionPlot: () => k,
                    isPlotTitleDefined: () => B,
                    isOhlcPlotStyleBars: () => T,
                    isOhlcPlotStyleCandles: () => P,
                    PlotSymbolSize: () => t,
                    isPlotWithTechnicalValues: () => x,
                    isNonVisualPlot: () => m
                }),
                function(e) {
                    e[e.Line = 0] = "Line", e[e.Histogram = 1] = "Histogram", e[e.Cross = 3] = "Cross", e[e.Area = 4] = "Area", e[e.Columns = 5] = "Columns", e[e.Circles = 6] = "Circles", e[e.LineWithBreaks = 7] = "LineWithBreaks", e[e.AreaWithBreaks = 8] = "AreaWithBreaks", e[e.StepLine = 9] = "StepLine", e[e.StepLineWithDiamonds = 10] = "StepLineWithDiamonds"
                }(r || (r = {})),
                function(e) {
                    e.Auto = "auto", e.Tiny = "tiny", e.Small = "small", e.Normal = "normal", e.Large = "large", e.Huge = "huge"
                }(t || (t = {}))
        },
        484434: (e, o, l) => {
            "use strict";
            l.r(o), l.d(o, {
                MINUTE_SPAN: () => r,
                HOUR_SPAN: () => t,
                DAY_SPAN: () => i,
                WEEK_SPAN: () => a,
                MONTH_SPAN: () => n,
                YEAR_SPAN: () => s,
                DEFAULT_BAR_SPACING: () => c
            });
            const r = 20,
                t = 30,
                i = 40,
                a = 50,
                n = 60,
                s = 70,
                c = 6
        }
    }
]);