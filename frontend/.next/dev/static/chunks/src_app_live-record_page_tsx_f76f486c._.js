(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/live-record/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LiveRecordPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smile.js [app-client] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$meh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Meh$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/meh.js [app-client] (ecmascript) <export default as Meh>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$frown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Frown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/frown.js [app-client] (ecmascript) <export default as Frown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function LiveRecordPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(146);
    if ($[0] !== "9bdfd1a49b10fecf2c264a041847a4eac2db31c76e8c6a2ca9fe83a0b4415ea8") {
        for(let $i = 0; $i < 146; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9bdfd1a49b10fecf2c264a041847a4eac2db31c76e8c6a2ca9fe83a0b4415ea8";
    }
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recordingTime, setRecordingTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            TP9: 0,
            AF7: 0,
            AF8: 0,
            TP10: 0
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [signalQuality, setSignalQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [liveData, setLiveData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            alpha: 0,
            beta: 0,
            gamma: 0,
            theta: 0
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [currentValues, setCurrentValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [emotionState, setEmotionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Neutral");
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const [sessionData, setSessionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recordingIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "LiveRecordPage[handleConnect]": ()=>{
                setIsConnected(true);
                setSignalQuality({
                    TP9: 85 + Math.random() * 15,
                    AF7: 85 + Math.random() * 15,
                    AF8: 85 + Math.random() * 15,
                    TP10: 85 + Math.random() * 15
                });
            }
        })["LiveRecordPage[handleConnect]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleConnect = t4;
    let handleDisconnect;
    let handleStartRecording;
    let handleStopRecording;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        handleDisconnect = ({
            "LiveRecordPage[handleDisconnect]": ()=>{
                setIsConnected(false);
                handleStopRecording();
            }
        })["LiveRecordPage[handleDisconnect]"];
        const classifyEmotion = _LiveRecordPageClassifyEmotion;
        handleStartRecording = ({
            "LiveRecordPage[handleStartRecording]": ()=>{
                setIsRecording(true);
                setRecordingTime(0);
                setSessionData([]);
                recordingIntervalRef.current = setInterval({
                    "LiveRecordPage[handleStartRecording > setInterval()]": ()=>{
                        setRecordingTime(_LiveRecordPageHandleStartRecordingSetIntervalSetRecordingTime);
                    }
                }["LiveRecordPage[handleStartRecording > setInterval()]"], 1000);
                intervalRef.current = setInterval({
                    "LiveRecordPage[handleStartRecording > setInterval()]": ()=>{
                        const newAlpha = 8 + Math.random() * 5;
                        const newBeta = 13 + Math.random() * 10;
                        const newGamma = 30 + Math.random() * 20;
                        const newTheta = 4 + Math.random() * 4;
                        const newDataPoint = {
                            timestamp: Date.now(),
                            alpha: newAlpha,
                            beta: newBeta,
                            gamma: newGamma,
                            theta: newTheta
                        };
                        setCurrentValues({
                            alpha: newAlpha,
                            beta: newBeta,
                            gamma: newGamma,
                            theta: newTheta
                        });
                        setLiveData({
                            "LiveRecordPage[handleStartRecording > setInterval() > setLiveData()]": (prev_0)=>{
                                const updated = [
                                    ...prev_0,
                                    newDataPoint
                                ];
                                return updated.slice(-50);
                            }
                        }["LiveRecordPage[handleStartRecording > setInterval() > setLiveData()]"]);
                        setSessionData({
                            "LiveRecordPage[handleStartRecording > setInterval() > setSessionData()]": (prev_1)=>[
                                    ...prev_1,
                                    newDataPoint
                                ]
                        }["LiveRecordPage[handleStartRecording > setInterval() > setSessionData()]"]);
                        setEmotionState(classifyEmotion(newAlpha, newBeta, newGamma, newTheta));
                        setSignalQuality({
                            TP9: 85 + Math.random() * 15,
                            AF7: 85 + Math.random() * 15,
                            AF8: 85 + Math.random() * 15,
                            TP10: 85 + Math.random() * 15
                        });
                    }
                }["LiveRecordPage[handleStartRecording > setInterval()]"], 200);
            }
        })["LiveRecordPage[handleStartRecording]"];
        handleStopRecording = ({
            "LiveRecordPage[handleStopRecording]": ()=>{
                setIsRecording(false);
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
                if (recordingIntervalRef.current) {
                    clearInterval(recordingIntervalRef.current);
                }
            }
        })["LiveRecordPage[handleStopRecording]"];
        t5 = ({
            "LiveRecordPage[handleReset]": ()=>{
                setLiveData([]);
                setSessionData([]);
                setRecordingTime(0);
                setCurrentValues({
                    alpha: 0,
                    beta: 0,
                    gamma: 0,
                    theta: 0
                });
                setEmotionState("Neutral");
            }
        })["LiveRecordPage[handleReset]"];
        $[6] = handleDisconnect;
        $[7] = handleStartRecording;
        $[8] = handleStopRecording;
        $[9] = t5;
    } else {
        handleDisconnect = $[6];
        handleStartRecording = $[7];
        handleStopRecording = $[8];
        t5 = $[9];
    }
    const handleReset = t5;
    let t6;
    if ($[10] !== sessionData) {
        t6 = ({
            "LiveRecordPage[handleDownloadSession]": ()=>{
                const csv = [
                    "timestamp,alpha,beta,gamma,theta",
                    ...sessionData.map(_LiveRecordPageHandleDownloadSessionSessionDataMap)
                ].join("\n");
                const blob = new Blob([
                    csv
                ], {
                    type: "text/csv"
                });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `muse-session-${Date.now()}.csv`;
                a.click();
            }
        })["LiveRecordPage[handleDownloadSession]"];
        $[10] = sessionData;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const handleDownloadSession = t6;
    const formatTime = _LiveRecordPageFormatTime;
    const getSignalQualityColor = _LiveRecordPageGetSignalQualityColor;
    let t7;
    if ($[12] !== emotionState) {
        const getEmotionInfo = {
            "LiveRecordPage[getEmotionInfo]": ()=>{
                switch(emotionState){
                    case "Positive":
                        {
                            return {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"],
                                color: "#56B79A",
                                bg: "#56B79A20"
                            };
                        }
                    case "Negative":
                        {
                            return {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$frown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Frown$3e$__["Frown"],
                                color: "#E74C3C",
                                bg: "#E74C3C20"
                            };
                        }
                    default:
                        {
                            return {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$meh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Meh$3e$__["Meh"],
                                color: "#95A5A6",
                                bg: "#95A5A620"
                            };
                        }
                }
            }
        }["LiveRecordPage[getEmotionInfo]"];
        t7 = getEmotionInfo();
        $[12] = emotionState;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const emotionInfo = t7;
    const EmotionIcon = emotionInfo.icon;
    let t8;
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "LiveRecordPage[useEffect()]": ()=>()=>{
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                    }
                    if (recordingIntervalRef.current) {
                        clearInterval(recordingIntervalRef.current);
                    }
                }
        })["LiveRecordPage[useEffect()]"];
        t9 = [];
        $[14] = t8;
        $[15] = t9;
    } else {
        t8 = $[14];
        t9 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute top-20 left-10 w-96 h-96 bg-[#56B79A] rounded-full opacity-5 blur-3xl",
            animate: {
                scale: [
                    1,
                    1.2,
                    1
                ],
                x: [
                    0,
                    50,
                    0
                ]
            },
            transition: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute bottom-20 right-10 w-96 h-96 bg-[#3B6F8E] rounded-full opacity-5 blur-3xl",
                    animate: {
                        scale: [
                            1,
                            1.3,
                            1
                        ],
                        x: [
                            0,
                            -50,
                            0
                        ]
                    },
                    transition: {
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 279,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    let t13;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            opacity: 0,
            y: -20
        };
        t13 = {
            opacity: 1,
            y: 0
        };
        $[18] = t12;
        $[19] = t13;
    } else {
        t12 = $[18];
        t13 = $[19];
    }
    let t14;
    let t15;
    let t16;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            scale: 0
        };
        t15 = {
            scale: 1
        };
        t16 = {
            type: "spring",
            stiffness: 200,
            delay: 0.2
        };
        $[20] = t14;
        $[21] = t15;
        $[22] = t16;
    } else {
        t14 = $[20];
        t15 = $[21];
        t16 = $[22];
    }
    let t17;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center mb-8",
            initial: t12,
            animate: t13,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t14,
                    animate: t15,
                    transition: t16,
                    className: "inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#56B79A20] to-[#3B6F8E20] rounded-full mb-4 border border-[#56B79A30]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                            className: "text-[#56B79A]",
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-record/page.tsx",
                            lineNumber: 333,
                            columnNumber: 283
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#3B6F8E] font-semibold text-sm",
                            children: "Live Neural Monitoring"
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-record/page.tsx",
                            lineNumber: 333,
                            columnNumber: 329
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 333,
                    columnNumber: 80
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-[#3B6F8E] mb-2",
                    children: "Real-Time EEG Recording"
                }, void 0, false, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 333,
                    columnNumber: 426
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "Monitor live neural signals with Muse headband"
                }, void 0, false, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 333,
                    columnNumber: 509
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    let t18;
    let t19;
    let t20;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            opacity: 0,
            y: 20
        };
        t19 = {
            opacity: 1,
            y: 0
        };
        t20 = {
            delay: 0.2
        };
        $[24] = t18;
        $[25] = t19;
        $[26] = t20;
    } else {
        t18 = $[24];
        t19 = $[25];
        t20 = $[26];
    }
    const t21 = `card p-5 border-l-4 ${isConnected ? "border-[#56B79A]" : "border-gray-400"}`;
    let t22;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = {
            y: -3
        };
        $[27] = t22;
    } else {
        t22 = $[27];
    }
    let t23;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-600 mb-1",
            children: "Device Status"
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[28] = t23;
    } else {
        t23 = $[28];
    }
    const t24 = `text-xl font-bold ${isConnected ? "text-[#56B79A]" : "text-gray-500"}`;
    const t25 = isConnected ? "Connected" : "Disconnected";
    let t26;
    if ($[29] !== t24 || $[30] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: t24,
                    children: t25
                }, void 0, false, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 382,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[29] = t24;
        $[30] = t25;
        $[31] = t26;
    } else {
        t26 = $[31];
    }
    let t27;
    if ($[32] !== isConnected) {
        t27 = isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: {
                scale: [
                    1,
                    1.2,
                    1
                ]
            },
            transition: {
                duration: 2,
                repeat: Infinity
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                className: "text-[#56B79A]",
                size: 28
            }, void 0, false, {
                fileName: "[project]/src/app/live-record/page.tsx",
                lineNumber: 396,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 391,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
            className: "text-gray-400",
            size: 28
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 396,
            columnNumber: 69
        }, this);
        $[32] = isConnected;
        $[33] = t27;
    } else {
        t27 = $[33];
    }
    let t28;
    if ($[34] !== t26 || $[35] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t26,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[34] = t26;
        $[35] = t27;
        $[36] = t28;
    } else {
        t28 = $[36];
    }
    let t29;
    if ($[37] !== t21 || $[38] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: t21,
            whileHover: t22,
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 413,
            columnNumber: 11
        }, this);
        $[37] = t21;
        $[38] = t28;
        $[39] = t29;
    } else {
        t29 = $[39];
    }
    let t30;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = {
            y: -3
        };
        $[40] = t30;
    } else {
        t30 = $[40];
    }
    let t31;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-600 mb-1",
            children: "Recording Time"
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 431,
            columnNumber: 11
        }, this);
        $[41] = t31;
    } else {
        t31 = $[41];
    }
    const t32 = formatTime(recordingTime);
    let t33;
    if ($[42] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl font-bold text-[#3B6F8E]",
                    children: t32
                }, void 0, false, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 439,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[42] = t32;
        $[43] = t33;
    } else {
        t33 = $[43];
    }
    let t34;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "text-[#3B6F8E]",
            size: 28
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[44] = t34;
    } else {
        t34 = $[44];
    }
    let t35;
    if ($[45] !== t33) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "card p-5",
            whileHover: t30,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t33,
                    t34
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/live-record/page.tsx",
                lineNumber: 454,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[45] = t33;
        $[46] = t35;
    } else {
        t35 = $[46];
    }
    let t36;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = {
            y: -3
        };
        $[47] = t36;
    } else {
        t36 = $[47];
    }
    let t37;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-600 mb-1",
            children: "Data Points"
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 471,
            columnNumber: 11
        }, this);
        $[48] = t37;
    } else {
        t37 = $[48];
    }
    let t38;
    if ($[49] !== sessionData.length) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t37,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl font-bold text-[#3B6F8E]",
                    children: sessionData.length
                }, void 0, false, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 478,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 478,
            columnNumber: 11
        }, this);
        $[49] = sessionData.length;
        $[50] = t38;
    } else {
        t38 = $[50];
    }
    let t39;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
            className: "text-[#56B79A]",
            size: 28
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 486,
            columnNumber: 11
        }, this);
        $[51] = t39;
    } else {
        t39 = $[51];
    }
    let t40;
    if ($[52] !== t38) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "card p-5",
            whileHover: t36,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t38,
                    t39
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/live-record/page.tsx",
                lineNumber: 493,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 493,
            columnNumber: 11
        }, this);
        $[52] = t38;
        $[53] = t40;
    } else {
        t40 = $[53];
    }
    let t41;
    if ($[54] !== emotionInfo.bg) {
        t41 = {
            backgroundColor: emotionInfo.bg
        };
        $[54] = emotionInfo.bg;
        $[55] = t41;
    } else {
        t41 = $[55];
    }
    let t42;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = {
            y: -3
        };
        $[56] = t42;
    } else {
        t42 = $[56];
    }
    let t43;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-600 mb-1",
            children: "Emotion"
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 520,
            columnNumber: 11
        }, this);
        $[57] = t43;
    } else {
        t43 = $[57];
    }
    let t44;
    if ($[58] !== emotionInfo.color) {
        t44 = {
            color: emotionInfo.color
        };
        $[58] = emotionInfo.color;
        $[59] = t44;
    } else {
        t44 = $[59];
    }
    let t45;
    if ($[60] !== emotionState || $[61] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t43,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl font-bold",
                    style: t44,
                    children: emotionState
                }, void 0, false, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 537,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 537,
            columnNumber: 11
        }, this);
        $[60] = emotionState;
        $[61] = t44;
        $[62] = t45;
    } else {
        t45 = $[62];
    }
    let t46;
    if ($[63] !== emotionInfo.color) {
        t46 = {
            color: emotionInfo.color
        };
        $[63] = emotionInfo.color;
        $[64] = t46;
    } else {
        t46 = $[64];
    }
    let t47;
    if ($[65] !== EmotionIcon || $[66] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmotionIcon, {
            style: t46,
            size: 28
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 556,
            columnNumber: 11
        }, this);
        $[65] = EmotionIcon;
        $[66] = t46;
        $[67] = t47;
    } else {
        t47 = $[67];
    }
    let t48;
    if ($[68] !== t45 || $[69] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t45,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 565,
            columnNumber: 11
        }, this);
        $[68] = t45;
        $[69] = t47;
        $[70] = t48;
    } else {
        t48 = $[70];
    }
    let t49;
    if ($[71] !== t41 || $[72] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "card p-5",
            style: t41,
            whileHover: t42,
            children: t48
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 574,
            columnNumber: 11
        }, this);
        $[71] = t41;
        $[72] = t48;
        $[73] = t49;
    } else {
        t49 = $[73];
    }
    let t50;
    if ($[74] !== t29 || $[75] !== t35 || $[76] !== t40 || $[77] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",
            initial: t18,
            animate: t19,
            transition: t20,
            children: [
                t29,
                t35,
                t40,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 583,
            columnNumber: 11
        }, this);
        $[74] = t29;
        $[75] = t35;
        $[76] = t40;
        $[77] = t49;
        $[78] = t50;
    } else {
        t50 = $[78];
    }
    let t51;
    let t52;
    let t53;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = {
            opacity: 0,
            x: -20
        };
        t52 = {
            opacity: 1,
            x: 0
        };
        t53 = {
            delay: 0.3
        };
        $[79] = t51;
        $[80] = t52;
        $[81] = t53;
    } else {
        t51 = $[79];
        t52 = $[80];
        t53 = $[81];
    }
    let t54;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-xl flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                        className: "text-white",
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/app/live-record/page.tsx",
                        lineNumber: 617,
                        columnNumber: 174
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 617,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-bold text-[#3B6F8E]",
                    children: "Muse Device"
                }, void 0, false, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 617,
                    columnNumber: 222
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 617,
            columnNumber: 11
        }, this);
        $[82] = t54;
    } else {
        t54 = $[82];
    }
    let t55;
    if ($[83] !== isConnected || $[84] !== signalQuality) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "card",
            initial: t51,
            animate: t52,
            transition: t53,
            children: [
                t54,
                !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 bg-[#3B6F8E20] rounded-2xl flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                className: "text-[#3B6F8E]",
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/src/app/live-record/page.tsx",
                                lineNumber: 624,
                                columnNumber: 240
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-record/page.tsx",
                            lineNumber: 624,
                            columnNumber: 140
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mb-6",
                            children: "Connect your Muse headband"
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-record/page.tsx",
                            lineNumber: 624,
                            columnNumber: 292
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: handleConnect,
                            className: "btn-primary px-6 py-3 w-full",
                            whileHover: {
                                scale: 1.02
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            children: "Connect Device"
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-record/page.tsx",
                            lineNumber: 624,
                            columnNumber: 364
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 624,
                    columnNumber: 106
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold text-gray-600 mb-3",
                                    children: "Signal Quality"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/live-record/page.tsx",
                                    lineNumber: 628,
                                    columnNumber: 83
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: Object.entries(signalQuality).map({
                                        "LiveRecordPage[(anonymous)()]": (t56)=>{
                                            const [electrode, quality_0] = t56;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold text-gray-600",
                                                                children: electrode
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/live-record/page.tsx",
                                                                lineNumber: 631,
                                                                columnNumber: 101
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold",
                                                                style: {
                                                                    color: getSignalQualityColor(quality_0)
                                                                },
                                                                children: [
                                                                    quality_0.toFixed(0),
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/live-record/page.tsx",
                                                                lineNumber: 631,
                                                                columnNumber: 173
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/live-record/page.tsx",
                                                        lineNumber: 631,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2 bg-gray-200 rounded-full overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            className: "h-full rounded-full",
                                                            style: {
                                                                backgroundColor: getSignalQualityColor(quality_0)
                                                            },
                                                            initial: {
                                                                width: 0
                                                            },
                                                            animate: {
                                                                width: `${quality_0}%`
                                                            },
                                                            transition: {
                                                                duration: 0.5
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/live-record/page.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 122
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/live-record/page.tsx",
                                                        lineNumber: 633,
                                                        columnNumber: 60
                                                    }, this)
                                                ]
                                            }, electrode, true, {
                                                fileName: "[project]/src/app/live-record/page.tsx",
                                                lineNumber: 631,
                                                columnNumber: 24
                                            }, this);
                                        }
                                    }["LiveRecordPage[(anonymous)()]"])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/live-record/page.tsx",
                                    lineNumber: 628,
                                    columnNumber: 159
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/live-record/page.tsx",
                            lineNumber: 628,
                            columnNumber: 78
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: handleDisconnect,
                            className: "btn-secondary w-full py-2",
                            whileHover: {
                                scale: 1.02
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            children: "Disconnect"
                        }, void 0, false, {
                            fileName: "[project]/src/app/live-record/page.tsx",
                            lineNumber: 643,
                            columnNumber: 61
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 628,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 624,
            columnNumber: 11
        }, this);
        $[83] = isConnected;
        $[84] = signalQuality;
        $[85] = t55;
    } else {
        t55 = $[85];
    }
    let t56;
    let t57;
    let t58;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = {
            opacity: 0,
            x: 20
        };
        t57 = {
            opacity: 1,
            x: 0
        };
        t58 = {
            delay: 0.3
        };
        $[86] = t56;
        $[87] = t57;
        $[88] = t58;
    } else {
        t56 = $[86];
        t57 = $[87];
        t58 = $[88];
    }
    let t59;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 bg-[#56B79A20] rounded-xl flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        className: "text-[#56B79A]",
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/app/live-record/page.tsx",
                        lineNumber: 679,
                        columnNumber: 143
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 679,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-bold text-[#3B6F8E]",
                    children: "Recording Controls"
                }, void 0, false, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 679,
                    columnNumber: 193
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 679,
            columnNumber: 11
        }, this);
        $[89] = t59;
    } else {
        t59 = $[89];
    }
    const t60 = isRecording ? handleStopRecording : handleStartRecording;
    const t61 = !isConnected;
    const t62 = `flex flex-col items-center gap-3 p-6 rounded-2xl transition-all ${isRecording ? "bg-gradient-to-br from-[#E74C3C] to-[#C0392B] text-white shadow-lg" : "bg-gradient-to-br from-[#56B79A] to-[#3B6F8E] text-white shadow-lg"} disabled:opacity-50 disabled:cursor-not-allowed`;
    let t63;
    let t64;
    if ($[90] !== isConnected) {
        t63 = isConnected ? {
            scale: 1.05,
            y: -5
        } : {};
        t64 = isConnected ? {
            scale: 0.95
        } : {};
        $[90] = isConnected;
        $[91] = t63;
        $[92] = t64;
    } else {
        t63 = $[91];
        t64 = $[92];
    }
    let t65;
    if ($[93] !== isRecording) {
        t65 = isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
            size: 32
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 706,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
            size: 32
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 706,
            columnNumber: 47
        }, this);
        $[93] = isRecording;
        $[94] = t65;
    } else {
        t65 = $[94];
    }
    const t66 = isRecording ? "Stop" : "Start";
    let t67;
    if ($[95] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-bold",
            children: t66
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 715,
            columnNumber: 11
        }, this);
        $[95] = t66;
        $[96] = t67;
    } else {
        t67 = $[96];
    }
    let t68;
    if ($[97] !== t60 || $[98] !== t61 || $[99] !== t62 || $[100] !== t63 || $[101] !== t64 || $[102] !== t65 || $[103] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: t60,
            disabled: t61,
            className: t62,
            whileHover: t63,
            whileTap: t64,
            children: [
                t65,
                t67
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 723,
            columnNumber: 11
        }, this);
        $[97] = t60;
        $[98] = t61;
        $[99] = t62;
        $[100] = t63;
        $[101] = t64;
        $[102] = t65;
        $[103] = t67;
        $[104] = t68;
    } else {
        t68 = $[104];
    }
    let t69;
    let t70;
    if ($[105] !== isRecording) {
        t69 = !isRecording ? {
            scale: 1.05,
            y: -5
        } : {};
        t70 = !isRecording ? {
            scale: 0.95
        } : {};
        $[105] = isRecording;
        $[106] = t69;
        $[107] = t70;
    } else {
        t69 = $[106];
        t70 = $[107];
    }
    let t71;
    let t72;
    if ($[108] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
            size: 32
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 755,
            columnNumber: 11
        }, this);
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-bold",
            children: "Reset"
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 756,
            columnNumber: 11
        }, this);
        $[108] = t71;
        $[109] = t72;
    } else {
        t71 = $[108];
        t72 = $[109];
    }
    let t73;
    if ($[110] !== isRecording || $[111] !== t69 || $[112] !== t70) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: handleReset,
            disabled: isRecording,
            className: "flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#3B6F8E] text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg",
            whileHover: t69,
            whileTap: t70,
            children: [
                t71,
                t72
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 765,
            columnNumber: 11
        }, this);
        $[110] = isRecording;
        $[111] = t69;
        $[112] = t70;
        $[113] = t73;
    } else {
        t73 = $[113];
    }
    const t74 = sessionData.length === 0;
    let t75;
    let t76;
    if ($[114] !== sessionData.length) {
        t75 = sessionData.length > 0 ? {
            scale: 1.05,
            y: -5
        } : {};
        t76 = sessionData.length > 0 ? {
            scale: 0.95
        } : {};
        $[114] = sessionData.length;
        $[115] = t75;
        $[116] = t76;
    } else {
        t75 = $[115];
        t76 = $[116];
    }
    let t77;
    let t78;
    if ($[117] === Symbol.for("react.memo_cache_sentinel")) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
            size: 32
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 794,
            columnNumber: 11
        }, this);
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-bold",
            children: "Save"
        }, void 0, false, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 795,
            columnNumber: 11
        }, this);
        $[117] = t77;
        $[118] = t78;
    } else {
        t77 = $[117];
        t78 = $[118];
    }
    let t79;
    if ($[119] !== handleDownloadSession || $[120] !== t74 || $[121] !== t75 || $[122] !== t76) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: handleDownloadSession,
            disabled: t74,
            className: "flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-[#56B79A] to-[#3B6F8E] text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg",
            whileHover: t75,
            whileTap: t76,
            children: [
                t77,
                t78
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 804,
            columnNumber: 11
        }, this);
        $[119] = handleDownloadSession;
        $[120] = t74;
        $[121] = t75;
        $[122] = t76;
        $[123] = t79;
    } else {
        t79 = $[123];
    }
    let t80;
    if ($[124] !== t68 || $[125] !== t73 || $[126] !== t79) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "lg:col-span-2 card",
            initial: t56,
            animate: t57,
            transition: t58,
            children: [
                t59,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-4",
                    children: [
                        t68,
                        t73,
                        t79
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 815,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 815,
            columnNumber: 11
        }, this);
        $[124] = t68;
        $[125] = t73;
        $[126] = t79;
        $[127] = t80;
    } else {
        t80 = $[127];
    }
    let t81;
    if ($[128] !== t55 || $[129] !== t80) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",
            children: [
                t55,
                t80
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 825,
            columnNumber: 11
        }, this);
        $[128] = t55;
        $[129] = t80;
        $[130] = t81;
    } else {
        t81 = $[130];
    }
    let t82;
    let t83;
    let t84;
    if ($[131] === Symbol.for("react.memo_cache_sentinel")) {
        t82 = {
            opacity: 0,
            y: 20
        };
        t83 = {
            opacity: 1,
            y: 0
        };
        t84 = {
            delay: 0.4
        };
        $[131] = t82;
        $[132] = t83;
        $[133] = t84;
    } else {
        t82 = $[131];
        t83 = $[132];
        t84 = $[133];
    }
    let t85;
    if ($[134] === Symbol.for("react.memo_cache_sentinel")) {
        t85 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10 h-10 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-xl flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                        className: "text-white",
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/app/live-record/page.tsx",
                        lineNumber: 857,
                        columnNumber: 174
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 857,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-[#3B6F8E]",
                    children: "Live EEG Waveforms"
                }, void 0, false, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 857,
                    columnNumber: 225
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 857,
            columnNumber: 11
        }, this);
        $[134] = t85;
    } else {
        t85 = $[134];
    }
    let t86;
    if ($[135] === Symbol.for("react.memo_cache_sentinel")) {
        t86 = {
            key: "alpha",
            label: "Alpha",
            color: "#56B79A",
            domain: [
                0,
                20
            ]
        };
        $[135] = t86;
    } else {
        t86 = $[135];
    }
    let t87;
    if ($[136] === Symbol.for("react.memo_cache_sentinel")) {
        t87 = {
            key: "beta",
            label: "Beta",
            color: "#3B6F8E",
            domain: [
                0,
                40
            ]
        };
        $[136] = t87;
    } else {
        t87 = $[136];
    }
    let t88;
    if ($[137] === Symbol.for("react.memo_cache_sentinel")) {
        t88 = {
            key: "gamma",
            label: "Gamma",
            color: "#E67E22",
            domain: [
                0,
                60
            ]
        };
        $[137] = t88;
    } else {
        t88 = $[137];
    }
    let t89;
    if ($[138] === Symbol.for("react.memo_cache_sentinel")) {
        t89 = [
            t86,
            t87,
            t88,
            {
                key: "theta",
                label: "Theta",
                color: "#9B59B6",
                domain: [
                    0,
                    15
                ]
            }
        ];
        $[138] = t89;
    } else {
        t89 = $[138];
    }
    let t90;
    if ($[139] !== currentValues || $[140] !== liveData) {
        t90 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "card",
            initial: t82,
            animate: t83,
            transition: t84,
            children: [
                t85,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: t89.map({
                        "LiveRecordPage[(anonymous)()]": (wave, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.5 + index * 0.1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold",
                                                style: {
                                                    color: wave.color
                                                },
                                                children: [
                                                    wave.label,
                                                    " Wave"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/live-record/page.tsx",
                                                lineNumber: 921,
                                                columnNumber: 70
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-bold",
                                                style: {
                                                    color: wave.color
                                                },
                                                children: [
                                                    currentValues[wave.key].toFixed(2),
                                                    " Hz"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/live-record/page.tsx",
                                                lineNumber: 923,
                                                columnNumber: 40
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/live-record/page.tsx",
                                        lineNumber: 921,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-32 bg-[#F4F7F9] rounded-xl overflow-hidden border border-[#D6E0E7]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: "100%",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                                data: liveData,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                        strokeDasharray: "3 3",
                                                        stroke: "#D6E0E7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/live-record/page.tsx",
                                                        lineNumber: 925,
                                                        columnNumber: 261
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        hide: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/live-record/page.tsx",
                                                        lineNumber: 925,
                                                        columnNumber: 317
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        hide: true,
                                                        domain: wave.domain
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/live-record/page.tsx",
                                                        lineNumber: 925,
                                                        columnNumber: 338
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                        type: "monotone",
                                                        dataKey: wave.key,
                                                        stroke: wave.color,
                                                        strokeWidth: 3,
                                                        dot: false,
                                                        isAnimationActive: false
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/live-record/page.tsx",
                                                        lineNumber: 925,
                                                        columnNumber: 380
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/live-record/page.tsx",
                                                lineNumber: 925,
                                                columnNumber: 234
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/live-record/page.tsx",
                                            lineNumber: 925,
                                            columnNumber: 186
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/live-record/page.tsx",
                                        lineNumber: 925,
                                        columnNumber: 100
                                    }, this)
                                ]
                            }, wave.key, true, {
                                fileName: "[project]/src/app/live-record/page.tsx",
                                lineNumber: 913,
                                columnNumber: 61
                            }, this)
                    }["LiveRecordPage[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 912,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 912,
            columnNumber: 11
        }, this);
        $[139] = currentValues;
        $[140] = liveData;
        $[141] = t90;
    } else {
        t90 = $[141];
    }
    let t91;
    if ($[142] !== t50 || $[143] !== t81 || $[144] !== t90) {
        t91 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#F4F7F9] relative overflow-hidden",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 container mx-auto px-6 py-8",
                    children: [
                        t17,
                        t50,
                        t81,
                        t90
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/live-record/page.tsx",
                    lineNumber: 935,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/live-record/page.tsx",
            lineNumber: 935,
            columnNumber: 11
        }, this);
        $[142] = t50;
        $[143] = t81;
        $[144] = t90;
        $[145] = t91;
    } else {
        t91 = $[145];
    }
    return t91;
}
_s(LiveRecordPage, "+WtMM7cRTZbUDgtF+uxZ2epipdQ=");
_c = LiveRecordPage;
function _LiveRecordPageGetSignalQualityColor(quality) {
    if (quality >= 80) {
        return "#56B79A";
    }
    if (quality >= 50) {
        return "#E67E22";
    }
    return "#E74C3C";
}
function _LiveRecordPageFormatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}
function _LiveRecordPageHandleDownloadSessionSessionDataMap(d) {
    return `${d.timestamp},${d.alpha},${d.beta},${d.gamma},${d.theta}`;
}
function _LiveRecordPageHandleStartRecordingSetIntervalSetRecordingTime(prev) {
    return prev + 1;
}
function _LiveRecordPageClassifyEmotion(alpha, beta, gamma, theta) {
    const positiveScore = alpha * 0.4 + theta * 0.3 - beta * 0.2 + gamma * 0.1;
    const negativeScore = beta * 0.5 + gamma * 0.3 - alpha * 0.2;
    const neutralScore = Math.abs(alpha - beta) < 5 && Math.abs(gamma - theta) < 5;
    if (neutralScore) {
        return "Neutral";
    } else {
        if (positiveScore > negativeScore) {
            return "Positive";
        } else {
            return "Negative";
        }
    }
}
var _c;
__turbopack_context__.k.register(_c, "LiveRecordPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_live-record_page_tsx_f76f486c._.js.map