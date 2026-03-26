(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/pdfGenerator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generatePDFReport",
    ()=>generatePDFReport,
    "generatePatientReport",
    ()=>generatePatientReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
;
const generatePatientReport = (report)=>{
    const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let yPosition = 20;
    // Helper function to add new page if needed
    const checkPageBreak = (requiredSpace)=>{
        if (yPosition + requiredSpace > pageHeight - 20) {
            pdf.addPage();
            yPosition = 20;
            return true;
        }
        return false;
    };
    // ===== HEADER =====
    pdf.setFillColor(59, 111, 142);
    pdf.rect(0, 0, pageWidth, 45, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(26);
    pdf.setFont("helvetica", "bold");
    pdf.text("EEG Analysis Report", pageWidth / 2, 20, {
        align: "center"
    });
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    pdf.text("EmotiWave Insight", pageWidth / 2, 32, {
        align: "center"
    });
    yPosition = 60;
    // ===== PATIENT INFORMATION =====
    pdf.setFillColor(244, 247, 249);
    pdf.rect(15, yPosition - 5, pageWidth - 30, 28, "F");
    pdf.setTextColor(59, 111, 142);
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("Patient Information", 20, yPosition + 3);
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(40, 40, 40);
    pdf.text(`Name: ${report.patientName || "User"}`, 20, yPosition + 12);
    pdf.text(`Patient ID: ${report.patientId || "355"}`, 20, yPosition + 20);
    pdf.text(`Report ID: ${report.id}`, pageWidth / 2 + 10, yPosition + 12);
    pdf.text(`Date: ${report.date}`, pageWidth / 2 + 10, yPosition + 20);
    yPosition += 40;
    // ===== EMOTIONAL STATE =====
    checkPageBreak(45);
    const emotionColor = report.emotion === "Positive" ? [
        86,
        183,
        154
    ] : report.emotion === "Negative" ? [
        231,
        76,
        60
    ] : [
        149,
        165,
        166
    ];
    pdf.setFillColor(emotionColor[0], emotionColor[1], emotionColor[2], 0.15);
    pdf.rect(15, yPosition - 5, pageWidth - 30, 40, "F");
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(59, 111, 142);
    pdf.text("Emotional State", 20, yPosition + 5);
    pdf.setFontSize(20);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(emotionColor[0], emotionColor[1], emotionColor[2]);
    pdf.text(report.emotion, pageWidth - 20, yPosition + 5, {
        align: "right"
    });
    yPosition += 18;
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(40, 40, 40);
    const summaryLines = pdf.splitTextToSize(report.summary, pageWidth - 50);
    summaryLines.forEach((line)=>{
        pdf.text(line, 20, yPosition);
        yPosition += 6;
    });
    yPosition += 10;
    // ===== BRAIN WAVE ANALYSIS =====
    checkPageBreak(35);
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(59, 111, 142);
    pdf.text("Brain Wave Analysis", 20, yPosition);
    yPosition += 10;
    pdf.setFillColor(244, 247, 249);
    pdf.rect(15, yPosition - 3, pageWidth - 30, 20, "F");
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(86, 183, 154);
    pdf.text(`Dominant Wave: ${report.dominantWave}`, 20, yPosition + 6);
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(40, 40, 40);
    pdf.text(`Model Accuracy: ${report.accuracy}`, 20, yPosition + 14);
    yPosition += 30;
    // ===== RECOMMENDATIONS =====
    checkPageBreak(50);
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(59, 111, 142);
    pdf.text("Recommendations", 20, yPosition);
    yPosition += 10;
    report.recommendations.forEach((rec, index)=>{
        checkPageBreak(12);
        pdf.setFillColor(244, 247, 249);
        pdf.rect(15, yPosition - 3, pageWidth - 30, 10, "F");
        pdf.setFontSize(11);
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(40, 40, 40);
        pdf.text(`${index + 1}. ${rec}`, 20, yPosition + 4);
        yPosition += 12;
    });
    yPosition += 10;
    // ===== NEXT STEPS =====
    checkPageBreak(40);
    pdf.setFillColor(244, 247, 249);
    pdf.rect(15, yPosition - 5, pageWidth - 30, 35, "F");
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(59, 111, 142);
    pdf.text("Next Steps", 20, yPosition + 3);
    yPosition += 12;
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(40, 40, 40);
    pdf.text("• Share this report with your healthcare provider", 20, yPosition);
    yPosition += 7;
    pdf.text("• Follow the recommendations above", 20, yPosition);
    yPosition += 7;
    pdf.text("• Schedule follow-up in 2-4 weeks", 20, yPosition);
    yPosition += 15;
    // ===== DISCLAIMER =====
    checkPageBreak(25);
    pdf.setFillColor(255, 243, 224);
    pdf.rect(15, yPosition - 5, pageWidth - 30, 20, "F");
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(230, 126, 34);
    pdf.text("Important Note", 20, yPosition + 3);
    yPosition += 10;
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(40, 40, 40);
    const disclaimerLines = pdf.splitTextToSize("This report is for informational purposes only. Consult with a qualified healthcare provider for medical advice.", pageWidth - 40);
    disclaimerLines.forEach((line)=>{
        pdf.text(line, 20, yPosition);
        yPosition += 5;
    });
    // ===== FOOTER ON ALL PAGES =====
    const totalPages = pdf.getNumberOfPages();
    for(let i = 1; i <= totalPages; i++){
        pdf.setPage(i);
        pdf.setDrawColor(214, 224, 231);
        pdf.setLineWidth(0.5);
        pdf.line(20, pageHeight - 15, pageWidth - 20, pageHeight - 15);
        pdf.setFontSize(9);
        pdf.setTextColor(100, 100, 100);
        pdf.setFont("helvetica", "normal");
        pdf.text(`EmotiWave Insight © ${new Date().getFullYear()}`, pageWidth / 2, pageHeight - 8, {
            align: "center"
        });
        pdf.text(`Page ${i} of ${totalPages}`, pageWidth - 20, pageHeight - 8, {
            align: "right"
        });
    }
    // Save PDF
    pdf.save(`EEG-Report-${report.id}-${Date.now()}.pdf`);
};
const generatePDFReport = (analysisData)=>{
    const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let yPosition = 20;
    // Colors
    const primaryBlue = "#3B6F8E";
    const primaryTeal = "#56B79A";
    // Helper function to add new page if needed
    const checkPageBreak = (requiredSpace)=>{
        if (yPosition + requiredSpace > pageHeight - 20) {
            pdf.addPage();
            yPosition = 20;
            return true;
        }
        return false;
    };
    // Header
    pdf.setFillColor(59, 111, 142);
    pdf.rect(0, 0, pageWidth, 40, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(24);
    pdf.setFont("helvetica", "bold");
    pdf.text("EEG Analysis Report", pageWidth / 2, 20, {
        align: "center"
    });
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    pdf.text("EmotiWave Insight", pageWidth / 2, 30, {
        align: "center"
    });
    yPosition = 50;
    // File Information
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.text(`File: ${analysisData.fileName}`, 20, yPosition);
    yPosition += 6;
    pdf.text(`Generated: ${new Date().toLocaleString()}`, 20, yPosition);
    yPosition += 6;
    pdf.text(`Total Patients: ${analysisData.personStats.length}`, 20, yPosition);
    yPosition += 6;
    pdf.text(`Data Points: ${analysisData.data.length}`, 20, yPosition);
    yPosition += 15;
    // Brain State Section
    checkPageBreak(40);
    pdf.setFillColor(238, 243, 246);
    pdf.rect(15, yPosition - 5, pageWidth - 30, 35, "F");
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(59, 111, 142);
    pdf.text("Brain State Analysis", 20, yPosition + 5);
    pdf.setFontSize(24);
    pdf.setTextColor(86, 183, 154);
    pdf.text(analysisData.state, pageWidth - 20, yPosition + 5, {
        align: "right"
    });
    pdf.setFontSize(10);
    pdf.setTextColor(100, 100, 100);
    const stateDescription = getStateDescription(analysisData.state);
    pdf.text(stateDescription, 20, yPosition + 18, {
        maxWidth: pageWidth - 40
    });
    yPosition += 45;
    // Dominant Wave
    const dominantWave = Object.entries(analysisData.averages).reduce((a, b)=>analysisData.averages[a[0]] > analysisData.averages[b[0]] ? a : b);
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(59, 111, 142);
    pdf.text(`Dominant Wave: ${dominantWave[0].charAt(0).toUpperCase() + dominantWave[0].slice(1)} (${dominantWave[1].toFixed(2)} Hz)`, 20, yPosition);
    yPosition += 15;
    // EEG Waveform Analysis
    checkPageBreak(80);
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(59, 111, 142);
    pdf.text("EEG Waveform Analysis", 20, yPosition);
    yPosition += 10;
    // Alpha Wave
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(86, 183, 154);
    pdf.text("Alpha Wave (8-13 Hz)", 20, yPosition);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${analysisData.averages.alpha.toFixed(2)} Hz`, pageWidth - 20, yPosition, {
        align: "right"
    });
    yPosition += 6;
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text("Associated with relaxation, calmness, and meditative states.", 20, yPosition);
    yPosition += 4;
    drawProgressBar(pdf, 20, yPosition, pageWidth - 40, 4, analysisData.averages.alpha / 50, [
        86,
        183,
        154
    ]);
    yPosition += 12;
    // Beta Wave
    checkPageBreak(20);
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(59, 111, 142);
    pdf.text("Beta Wave (13-30 Hz)", 20, yPosition);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${analysisData.averages.beta.toFixed(2)} Hz`, pageWidth - 20, yPosition, {
        align: "right"
    });
    yPosition += 6;
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text("Linked to active thinking, focus, and problem-solving.", 20, yPosition);
    yPosition += 4;
    drawProgressBar(pdf, 20, yPosition, pageWidth - 40, 4, analysisData.averages.beta / 50, [
        59,
        111,
        142
    ]);
    yPosition += 12;
    // Gamma Wave
    checkPageBreak(20);
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(230, 126, 34);
    pdf.text("Gamma Wave (30-100 Hz)", 20, yPosition);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${analysisData.averages.gamma.toFixed(2)} Hz`, pageWidth - 20, yPosition, {
        align: "right"
    });
    yPosition += 6;
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text("Related to high-level information processing and cognition.", 20, yPosition);
    yPosition += 4;
    drawProgressBar(pdf, 20, yPosition, pageWidth - 40, 4, analysisData.averages.gamma / 50, [
        230,
        126,
        34
    ]);
    yPosition += 12;
    // Theta Wave
    checkPageBreak(20);
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(155, 89, 182);
    pdf.text("Theta Wave (4-8 Hz)", 20, yPosition);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${analysisData.averages.theta.toFixed(2)} Hz`, pageWidth - 20, yPosition, {
        align: "right"
    });
    yPosition += 6;
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text("Connected to deep relaxation, creativity, and sleep.", 20, yPosition);
    yPosition += 4;
    drawProgressBar(pdf, 20, yPosition, pageWidth - 40, 4, analysisData.averages.theta / 50, [
        155,
        89,
        182
    ]);
    yPosition += 15;
    // Patient Statistics
    if (analysisData.personStats.length > 0) {
        checkPageBreak(60);
        pdf.setFontSize(16);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(59, 111, 142);
        pdf.text("Patient Statistics", 20, yPosition);
        yPosition += 10;
        // Table header
        pdf.setFillColor(238, 243, 246);
        pdf.rect(20, yPosition - 5, pageWidth - 40, 8, "F");
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(59, 111, 142);
        pdf.text("Patient", 25, yPosition);
        pdf.text("Alpha", 80, yPosition);
        pdf.text("Beta", 110, yPosition);
        pdf.text("Gamma", 140, yPosition);
        pdf.text("Theta", 170, yPosition);
        yPosition += 10;
        // Table rows
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(9);
        analysisData.personStats.forEach((patient, index)=>{
            if (checkPageBreak(8)) {
                // Redraw header on new page
                pdf.setFillColor(238, 243, 246);
                pdf.rect(20, yPosition - 5, pageWidth - 40, 8, "F");
                pdf.setFontSize(10);
                pdf.setFont("helvetica", "bold");
                pdf.setTextColor(59, 111, 142);
                pdf.text("Patient", 25, yPosition);
                pdf.text("Alpha", 80, yPosition);
                pdf.text("Beta", 110, yPosition);
                pdf.text("Gamma", 140, yPosition);
                pdf.text("Theta", 170, yPosition);
                yPosition += 10;
                pdf.setFont("helvetica", "normal");
                pdf.setTextColor(0, 0, 0);
                pdf.setFontSize(9);
            }
            if (index % 2 === 0) {
                pdf.setFillColor(250, 250, 250);
                pdf.rect(20, yPosition - 5, pageWidth - 40, 7, "F");
            }
            pdf.text(patient.person, 25, yPosition);
            pdf.text(patient.alpha.toFixed(2), 80, yPosition);
            pdf.text(patient.beta.toFixed(2), 110, yPosition);
            pdf.text(patient.gamma.toFixed(2), 140, yPosition);
            pdf.text(patient.theta.toFixed(2), 170, yPosition);
            yPosition += 7;
        });
    }
    // Footer on last page
    const totalPages = pdf.getNumberOfPages();
    for(let i = 1; i <= totalPages; i++){
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.setTextColor(150, 150, 150);
        pdf.text(`Page ${i} of ${totalPages} | EmotiWave Insight © ${new Date().getFullYear()}`, pageWidth / 2, pageHeight - 10, {
            align: "center"
        });
    }
    // Save PDF
    pdf.save(`EEG-Analysis-Report-${Date.now()}.pdf`);
};
function drawProgressBar(pdf, x, y, width, height, percentage, color) {
    // Background
    pdf.setFillColor(230, 237, 242);
    pdf.rect(x, y, width, height, "F");
    // Progress
    pdf.setFillColor(color[0], color[1], color[2]);
    pdf.rect(x, y, width * Math.min(percentage, 1), height, "F");
}
function getStateDescription(state) {
    switch(state){
        case "Relaxed":
            return "High alpha wave activity indicates a calm, relaxed mental state. Perfect for meditation and stress relief.";
        case "Focused":
            return "Elevated beta wave activity suggests active concentration and cognitive engagement. Optimal for problem-solving.";
        case "Neutral":
            return "Balanced brain wave activity. A stable baseline state between relaxation and focus.";
        default:
            return "Brain state analysis based on EEG frequency patterns.";
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/patient-details/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PatientDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pdfGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pdfGenerator.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function PatientDetailsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(132);
    if ($[0] !== "e031afdebfd292287a66395d0242567cbb88072359e3130d70b66878395fb2d3") {
        for(let $i = 0; $i < 132; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e031afdebfd292287a66395d0242567cbb88072359e3130d70b66878395fb2d3";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams.get("id");
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const patientId = t0;
    const [patient, setPatient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const [reports, setReports] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [selectedReport, setSelectedReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    let t3;
    if ($[4] !== patientId || $[5] !== router) {
        t2 = ({
            "PatientDetailsPage[useEffect()]": ()=>{
                if (!patientId) {
                    router.push("/dashboard");
                    return;
                }
                const storedReports = localStorage.getItem("patientReports");
                if (storedReports) {
                    const allReports = JSON.parse(storedReports);
                    const patientReports = allReports.filter({
                        "PatientDetailsPage[useEffect() > allReports.filter()]": (r)=>r.patientId === patientId
                    }["PatientDetailsPage[useEffect() > allReports.filter()]"]);
                    if (patientReports.length > 0) {
                        setReports(patientReports);
                        const latestReport = patientReports[0];
                        setPatient({
                            id: patientId,
                            name: latestReport.patientName,
                            age: 30,
                            gender: "Unknown",
                            phone: "+1 234-567-8900",
                            email: `${patientId.toLowerCase()}@example.com`,
                            address: "123 Medical Center Dr",
                            totalScans: patientReports.length,
                            latestEmotion: latestReport.emotion,
                            lastVisit: latestReport.date
                        });
                    } else {
                        router.push("/dashboard");
                    }
                }
            }
        })["PatientDetailsPage[useEffect()]"];
        t3 = [
            patientId,
            router
        ];
        $[4] = patientId;
        $[5] = router;
        $[6] = t2;
        $[7] = t3;
    } else {
        t2 = $[6];
        t3 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const getEmotionColor = _PatientDetailsPageGetEmotionColor;
    if (!patient) {
        let t4;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-[#F4F7F9] flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "spinner"
                }, void 0, false, {
                    fileName: "[project]/src/app/patient-details/page.tsx",
                    lineNumber: 88,
                    columnNumber: 88
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/patient-details/page.tsx",
                lineNumber: 88,
                columnNumber: 12
            }, this);
            $[8] = t4;
        } else {
            t4 = $[8];
        }
        return t4;
    }
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: [
                t4,
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
                    fileName: "[project]/src/app/patient-details/page.tsx",
                    lineNumber: 111,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== router) {
        t6 = ({
            "PatientDetailsPage[<motion.button>.onClick]": ()=>router.push("/dashboard")
        })["PatientDetailsPage[<motion.button>.onClick]"];
        $[11] = router;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t10;
    let t7;
    let t8;
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            opacity: 0,
            x: -20
        };
        t8 = {
            opacity: 1,
            x: 0
        };
        t9 = {
            x: -5
        };
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t7;
        $[15] = t8;
        $[16] = t9;
    } else {
        t10 = $[13];
        t7 = $[14];
        t8 = $[15];
        t9 = $[16];
    }
    let t11;
    if ($[17] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: t6,
            className: "flex items-center gap-2 text-[#3B6F8E] hover:text-[#56B79A] mb-6",
            initial: t7,
            animate: t8,
            whileHover: t9,
            children: [
                t10,
                "Back to Dashboard"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[17] = t6;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            opacity: 0,
            y: 20
        };
        t13 = {
            opacity: 1,
            y: 0
        };
        $[19] = t12;
        $[20] = t13;
    } else {
        t12 = $[19];
        t13 = $[20];
    }
    let t14;
    if ($[21] !== patient.name) {
        t14 = patient.name.split(" ").map(_PatientDetailsPageAnonymous).join("").slice(0, 2);
        $[21] = patient.name;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-24 h-24 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-2xl flex items-center justify-center text-white text-3xl font-bold",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[23] = t14;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== patient.name) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold text-[#3B6F8E] mb-2",
            children: patient.name
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[25] = patient.name;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[27] !== patient.id) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "Patient ID: ",
                patient.id
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[27] = patient.id;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "•"
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] !== patient.age) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                patient.age,
                " years"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[30] = patient.age;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "•"
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    let t21;
    if ($[33] !== patient.gender) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: patient.gender
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[33] = patient.gender;
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    let t22;
    if ($[35] !== t17 || $[36] !== t19 || $[37] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 text-gray-600",
            children: [
                t17,
                t18,
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[35] = t17;
        $[36] = t19;
        $[37] = t21;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== t16 || $[40] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[39] = t16;
        $[40] = t22;
        $[41] = t23;
    } else {
        t23 = $[41];
    }
    let t24;
    if ($[42] !== t15 || $[43] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-6",
            children: [
                t15,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[42] = t15;
        $[43] = t23;
        $[44] = t24;
    } else {
        t24 = $[44];
    }
    const t25 = `${getEmotionColor(patient.latestEmotion)}20`;
    const t26 = getEmotionColor(patient.latestEmotion);
    let t27;
    if ($[45] !== t25 || $[46] !== t26) {
        t27 = {
            backgroundColor: t25,
            color: t26
        };
        $[45] = t25;
        $[46] = t26;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] !== patient.latestEmotion || $[49] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block px-4 py-2 rounded-full text-sm font-semibold",
            style: t27,
            children: patient.latestEmotion
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[48] = patient.latestEmotion;
        $[49] = t27;
        $[50] = t28;
    } else {
        t28 = $[50];
    }
    let t29;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600 mt-2",
            children: "Latest State"
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[51] = t29;
    } else {
        t29 = $[51];
    }
    let t30;
    if ($[52] !== t28) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[52] = t28;
        $[53] = t30;
    } else {
        t30 = $[53];
    }
    let t31;
    if ($[54] !== t24 || $[55] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between",
            children: [
                t24,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[54] = t24;
        $[55] = t30;
        $[56] = t31;
    } else {
        t31 = $[56];
    }
    let t32;
    let t33;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 bg-[#3B6F8E20] rounded-lg flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                className: "text-[#3B6F8E]",
                size: 20
            }, void 0, false, {
                fileName: "[project]/src/app/patient-details/page.tsx",
                lineNumber: 325,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-600",
            children: "Phone"
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[57] = t32;
        $[58] = t33;
    } else {
        t32 = $[57];
        t33 = $[58];
    }
    let t34;
    if ($[59] !== patient.phone) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t33,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-[#3B6F8E]",
                            children: patient.phone
                        }, void 0, false, {
                            fileName: "[project]/src/app/patient-details/page.tsx",
                            lineNumber: 335,
                            columnNumber: 67
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/patient-details/page.tsx",
                    lineNumber: 335,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[59] = patient.phone;
        $[60] = t34;
    } else {
        t34 = $[60];
    }
    let t35;
    let t36;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 bg-[#56B79A20] rounded-lg flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                className: "text-[#56B79A]",
                size: 20
            }, void 0, false, {
                fileName: "[project]/src/app/patient-details/page.tsx",
                lineNumber: 344,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-600",
            children: "Email"
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        $[61] = t35;
        $[62] = t36;
    } else {
        t35 = $[61];
        t36 = $[62];
    }
    let t37;
    if ($[63] !== patient.email) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t35,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t36,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-[#3B6F8E]",
                            children: patient.email
                        }, void 0, false, {
                            fileName: "[project]/src/app/patient-details/page.tsx",
                            lineNumber: 354,
                            columnNumber: 67
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/patient-details/page.tsx",
                    lineNumber: 354,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[63] = patient.email;
        $[64] = t37;
    } else {
        t37 = $[64];
    }
    let t38;
    let t39;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 bg-[#3B6F8E20] rounded-lg flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                className: "text-[#3B6F8E]",
                size: 20
            }, void 0, false, {
                fileName: "[project]/src/app/patient-details/page.tsx",
                lineNumber: 363,
                columnNumber: 97
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 363,
            columnNumber: 11
        }, this);
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-600",
            children: "Address"
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[65] = t38;
        $[66] = t39;
    } else {
        t38 = $[65];
        t39 = $[66];
    }
    let t40;
    if ($[67] !== patient.address) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t38,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t39,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-[#3B6F8E]",
                            children: patient.address
                        }, void 0, false, {
                            fileName: "[project]/src/app/patient-details/page.tsx",
                            lineNumber: 373,
                            columnNumber: 67
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/patient-details/page.tsx",
                    lineNumber: 373,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[67] = patient.address;
        $[68] = t40;
    } else {
        t40 = $[68];
    }
    let t41;
    if ($[69] !== t34 || $[70] !== t37 || $[71] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-[#D6E0E7]",
            children: [
                t34,
                t37,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 381,
            columnNumber: 11
        }, this);
        $[69] = t34;
        $[70] = t37;
        $[71] = t40;
        $[72] = t41;
    } else {
        t41 = $[72];
    }
    let t42;
    if ($[73] !== t31 || $[74] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "card p-8 mb-8",
            initial: t12,
            animate: t13,
            children: [
                t31,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[73] = t31;
        $[74] = t41;
        $[75] = t42;
    } else {
        t42 = $[75];
    }
    let t43;
    let t44;
    let t45;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = {
            opacity: 0,
            y: 20
        };
        t44 = {
            opacity: 1,
            y: 0
        };
        t45 = {
            delay: 0.1
        };
        $[76] = t43;
        $[77] = t44;
        $[78] = t45;
    } else {
        t43 = $[76];
        t44 = $[77];
        t45 = $[78];
    }
    let t46;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600 mb-1",
            children: "Total Scans"
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, this);
        $[79] = t46;
    } else {
        t46 = $[79];
    }
    let t47;
    if ($[80] !== patient.totalScans) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t46,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-[#3B6F8E]",
                    children: patient.totalScans
                }, void 0, false, {
                    fileName: "[project]/src/app/patient-details/page.tsx",
                    lineNumber: 430,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 430,
            columnNumber: 11
        }, this);
        $[80] = patient.totalScans;
        $[81] = t47;
    } else {
        t47 = $[81];
    }
    let t48;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-14 h-14 bg-[#3B6F8E20] rounded-2xl flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                className: "text-[#3B6F8E]",
                size: 28
            }, void 0, false, {
                fileName: "[project]/src/app/patient-details/page.tsx",
                lineNumber: 438,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[82] = t48;
    } else {
        t48 = $[82];
    }
    let t49;
    if ($[83] !== t47) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "card p-6",
            initial: t43,
            animate: t44,
            transition: t45,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t47,
                    t48
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/patient-details/page.tsx",
                lineNumber: 445,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 445,
            columnNumber: 11
        }, this);
        $[83] = t47;
        $[84] = t49;
    } else {
        t49 = $[84];
    }
    let t50;
    let t51;
    let t52;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = {
            opacity: 0,
            y: 20
        };
        t51 = {
            opacity: 1,
            y: 0
        };
        t52 = {
            delay: 0.2
        };
        $[85] = t50;
        $[86] = t51;
        $[87] = t52;
    } else {
        t50 = $[85];
        t51 = $[86];
        t52 = $[87];
    }
    let t53;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600 mb-1",
            children: "Last Visit"
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 476,
            columnNumber: 11
        }, this);
        $[88] = t53;
    } else {
        t53 = $[88];
    }
    let t54;
    if ($[89] !== patient.lastVisit) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t53,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl font-bold text-[#56B79A]",
                    children: patient.lastVisit
                }, void 0, false, {
                    fileName: "[project]/src/app/patient-details/page.tsx",
                    lineNumber: 483,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 483,
            columnNumber: 11
        }, this);
        $[89] = patient.lastVisit;
        $[90] = t54;
    } else {
        t54 = $[90];
    }
    let t55;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-14 h-14 bg-[#56B79A20] rounded-2xl flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                className: "text-[#56B79A]",
                size: 28
            }, void 0, false, {
                fileName: "[project]/src/app/patient-details/page.tsx",
                lineNumber: 491,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 491,
            columnNumber: 11
        }, this);
        $[91] = t55;
    } else {
        t55 = $[91];
    }
    let t56;
    if ($[92] !== t54) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "card p-6",
            initial: t50,
            animate: t51,
            transition: t52,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t54,
                    t55
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/patient-details/page.tsx",
                lineNumber: 498,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[92] = t54;
        $[93] = t56;
    } else {
        t56 = $[93];
    }
    let t57;
    let t58;
    let t59;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = {
            opacity: 0,
            y: 20
        };
        t58 = {
            opacity: 1,
            y: 0
        };
        t59 = {
            delay: 0.3
        };
        $[94] = t57;
        $[95] = t58;
        $[96] = t59;
    } else {
        t57 = $[94];
        t58 = $[95];
        t59 = $[96];
    }
    let t60;
    if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600 mb-1",
            children: "Reports"
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 529,
            columnNumber: 11
        }, this);
        $[97] = t60;
    } else {
        t60 = $[97];
    }
    let t61;
    if ($[98] !== reports.length) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t60,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-[#3B6F8E]",
                    children: reports.length
                }, void 0, false, {
                    fileName: "[project]/src/app/patient-details/page.tsx",
                    lineNumber: 536,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 536,
            columnNumber: 11
        }, this);
        $[98] = reports.length;
        $[99] = t61;
    } else {
        t61 = $[99];
    }
    let t62;
    if ($[100] === Symbol.for("react.memo_cache_sentinel")) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-14 h-14 bg-[#3B6F8E20] rounded-2xl flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                className: "text-[#3B6F8E]",
                size: 28
            }, void 0, false, {
                fileName: "[project]/src/app/patient-details/page.tsx",
                lineNumber: 544,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 544,
            columnNumber: 11
        }, this);
        $[100] = t62;
    } else {
        t62 = $[100];
    }
    let t63;
    if ($[101] !== t61) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "card p-6",
            initial: t57,
            animate: t58,
            transition: t59,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t61,
                    t62
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/patient-details/page.tsx",
                lineNumber: 551,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 551,
            columnNumber: 11
        }, this);
        $[101] = t61;
        $[102] = t63;
    } else {
        t63 = $[102];
    }
    let t64;
    if ($[103] !== t49 || $[104] !== t56 || $[105] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-6 mb-8",
            children: [
                t49,
                t56,
                t63
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 559,
            columnNumber: 11
        }, this);
        $[103] = t49;
        $[104] = t56;
        $[105] = t63;
        $[106] = t64;
    } else {
        t64 = $[106];
    }
    let t65;
    let t66;
    let t67;
    let t68;
    if ($[107] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = {
            opacity: 0,
            y: 20
        };
        t66 = {
            opacity: 1,
            y: 0
        };
        t67 = {
            delay: 0.4
        };
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold text-[#3B6F8E] mb-6",
            children: "Analysis Reports"
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 583,
            columnNumber: 11
        }, this);
        $[107] = t65;
        $[108] = t66;
        $[109] = t67;
        $[110] = t68;
    } else {
        t65 = $[107];
        t66 = $[108];
        t67 = $[109];
        t68 = $[110];
    }
    let t69;
    if ($[111] !== patient.id || $[112] !== patient.name || $[113] !== reports) {
        let t70;
        if ($[115] !== patient.id || $[116] !== patient.name) {
            t70 = ({
                "PatientDetailsPage[reports.map()]": (report, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "p-6 bg-[#F4F7F9] rounded-xl hover:bg-white border-2 border-transparent hover:border-[#56B79A] transition-all cursor-pointer",
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            delay: 0.5 + index * 0.1
                        },
                        whileHover: {
                            y: -5
                        },
                        onClick: {
                            "PatientDetailsPage[reports.map() > <motion.div>.onClick]": ()=>setSelectedReport(report)
                        }["PatientDetailsPage[reports.map() > <motion.div>.onClick]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                size: 16,
                                                className: "text-gray-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/patient-details/page.tsx",
                                                lineNumber: 611,
                                                columnNumber: 169
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-600",
                                                children: report.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/patient-details/page.tsx",
                                                lineNumber: 611,
                                                columnNumber: 217
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 611,
                                        columnNumber: 128
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 rounded-full text-xs font-semibold",
                                        style: {
                                            backgroundColor: `${getEmotionColor(report.emotion)}20`,
                                            color: getEmotionColor(report.emotion)
                                        },
                                        children: report.emotion
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 611,
                                        columnNumber: 283
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/patient-details/page.tsx",
                                lineNumber: 611,
                                columnNumber: 72
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mb-1",
                                        children: "Dominant Wave"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 614,
                                        columnNumber: 67
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-bold text-[#3B6F8E]",
                                        children: report.dominantWave
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 614,
                                        columnNumber: 126
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/patient-details/page.tsx",
                                lineNumber: 614,
                                columnNumber: 45
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-600",
                                        children: [
                                            "Accuracy: ",
                                            report.accuracy
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 614,
                                        columnNumber: 256
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "PatientDetailsPage[reports.map() > <button>.onClick]": (e)=>{
                                                e.stopPropagation();
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pdfGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatePatientReport"])({
                                                    ...report,
                                                    patientName: patient.name,
                                                    patientId: patient.id,
                                                    summary: report.notes,
                                                    recommendations: [
                                                        "Continue monitoring brain wave patterns",
                                                        "Maintain regular sleep schedule",
                                                        "Practice stress management techniques"
                                                    ]
                                                });
                                            }
                                        }["PatientDetailsPage[reports.map() > <button>.onClick]"],
                                        className: "text-[#56B79A] hover:text-[#3B6F8E] flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/patient-details/page.tsx",
                                                lineNumber: 625,
                                                columnNumber: 144
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Download"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/patient-details/page.tsx",
                                                lineNumber: 625,
                                                columnNumber: 166
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 614,
                                        columnNumber: 330
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/patient-details/page.tsx",
                                lineNumber: 614,
                                columnNumber: 205
                            }, this)
                        ]
                    }, report.id, true, {
                        fileName: "[project]/src/app/patient-details/page.tsx",
                        lineNumber: 599,
                        columnNumber: 65
                    }, this)
            })["PatientDetailsPage[reports.map()]"];
            $[115] = patient.id;
            $[116] = patient.name;
            $[117] = t70;
        } else {
            t70 = $[117];
        }
        t69 = reports.map(t70);
        $[111] = patient.id;
        $[112] = patient.name;
        $[113] = reports;
        $[114] = t69;
    } else {
        t69 = $[114];
    }
    let t70;
    if ($[118] !== t69) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "card p-8",
            initial: t65,
            animate: t66,
            transition: t67,
            children: [
                t68,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: t69
                }, void 0, false, {
                    fileName: "[project]/src/app/patient-details/page.tsx",
                    lineNumber: 643,
                    columnNumber: 94
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 643,
            columnNumber: 11
        }, this);
        $[118] = t69;
        $[119] = t70;
    } else {
        t70 = $[119];
    }
    let t71;
    if ($[120] !== t11 || $[121] !== t42 || $[122] !== t64 || $[123] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 container mx-auto px-6 py-8",
            children: [
                t11,
                t42,
                t64,
                t70
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 651,
            columnNumber: 11
        }, this);
        $[120] = t11;
        $[121] = t42;
        $[122] = t64;
        $[123] = t70;
        $[124] = t71;
    } else {
        t71 = $[124];
    }
    let t72;
    if ($[125] !== patient.id || $[126] !== patient.name || $[127] !== selectedReport) {
        t72 = selectedReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            onClick: {
                "PatientDetailsPage[<motion.div>.onClick]": ()=>setSelectedReport(null)
            }["PatientDetailsPage[<motion.div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto",
                initial: {
                    scale: 0.9,
                    y: 20
                },
                animate: {
                    scale: 1,
                    y: 0
                },
                onClick: _PatientDetailsPageMotionDivOnClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-[#3B6F8E]",
                                children: "Report Details"
                            }, void 0, false, {
                                fileName: "[project]/src/app/patient-details/page.tsx",
                                lineNumber: 674,
                                columnNumber: 112
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "PatientDetailsPage[<button>.onClick]": ()=>setSelectedReport(null)
                                }["PatientDetailsPage[<button>.onClick]"],
                                className: "text-gray-400 hover:text-gray-600 text-2xl",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/patient-details/page.tsx",
                                lineNumber: 674,
                                columnNumber: 181
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/patient-details/page.tsx",
                        lineNumber: 674,
                        columnNumber: 56
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-[#F4F7F9] rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mb-2",
                                        children: "Report ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 676,
                                        columnNumber: 197
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-[#3B6F8E]",
                                        children: selectedReport.id
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 676,
                                        columnNumber: 252
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/patient-details/page.tsx",
                                lineNumber: 676,
                                columnNumber: 152
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-[#F4F7F9] rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mb-2",
                                        children: "Analysis Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 676,
                                        columnNumber: 370
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-[#3B6F8E]",
                                        children: selectedReport.date
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 676,
                                        columnNumber: 429
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/patient-details/page.tsx",
                                lineNumber: 676,
                                columnNumber: 325
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-[#F4F7F9] rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mb-2",
                                        children: "Emotional State"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 676,
                                        columnNumber: 549
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block px-4 py-2 rounded-full font-semibold",
                                        style: {
                                            backgroundColor: `${getEmotionColor(selectedReport.emotion)}20`,
                                            color: getEmotionColor(selectedReport.emotion)
                                        },
                                        children: selectedReport.emotion
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 676,
                                        columnNumber: 610
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/patient-details/page.tsx",
                                lineNumber: 676,
                                columnNumber: 504
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-[#F4F7F9] rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mb-3",
                                        children: "Brain Wave Frequencies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 679,
                                        columnNumber: 98
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-600",
                                                        children: "Alpha"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 211
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-[#3B6F8E]",
                                                        children: [
                                                            selectedReport.frequencies.alpha,
                                                            " Hz"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 257
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/patient-details/page.tsx",
                                                lineNumber: 679,
                                                columnNumber: 206
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-600",
                                                        children: "Beta"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 349
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-[#56B79A]",
                                                        children: [
                                                            selectedReport.frequencies.beta,
                                                            " Hz"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 394
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/patient-details/page.tsx",
                                                lineNumber: 679,
                                                columnNumber: 344
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-600",
                                                        children: "Gamma"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 485
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-[#E67E22]",
                                                        children: [
                                                            selectedReport.frequencies.gamma,
                                                            " Hz"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 531
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/patient-details/page.tsx",
                                                lineNumber: 679,
                                                columnNumber: 480
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-600",
                                                        children: "Theta"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 623
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-[#9B59B6]",
                                                        children: [
                                                            selectedReport.frequencies.theta,
                                                            " Hz"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 669
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/patient-details/page.tsx",
                                                lineNumber: 679,
                                                columnNumber: 618
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 679,
                                        columnNumber: 166
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/patient-details/page.tsx",
                                lineNumber: 679,
                                columnNumber: 53
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-[#F4F7F9] rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mb-2",
                                        children: "Clinical Notes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 679,
                                        columnNumber: 813
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700",
                                        children: selectedReport.notes
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 679,
                                        columnNumber: 873
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/patient-details/page.tsx",
                                lineNumber: 679,
                                columnNumber: 768
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                className: "btn-primary w-full py-3",
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                onClick: {
                                    "PatientDetailsPage[<motion.button>.onClick]": ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pdfGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generatePatientReport"])({
                                            ...selectedReport,
                                            patientName: patient.name,
                                            patientId: patient.id,
                                            summary: selectedReport.notes,
                                            recommendations: [
                                                "Continue monitoring brain wave patterns",
                                                "Maintain regular sleep schedule",
                                                "Practice stress management techniques"
                                            ]
                                        });
                                    }
                                }["PatientDetailsPage[<motion.button>.onClick]"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 18,
                                        className: "inline mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/patient-details/page.tsx",
                                        lineNumber: 693,
                                        columnNumber: 61
                                    }, this),
                                    "Download Full Report"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/patient-details/page.tsx",
                                lineNumber: 679,
                                columnNumber: 934
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/patient-details/page.tsx",
                        lineNumber: 676,
                        columnNumber: 125
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/patient-details/page.tsx",
                lineNumber: 668,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 662,
            columnNumber: 29
        }, this);
        $[125] = patient.id;
        $[126] = patient.name;
        $[127] = selectedReport;
        $[128] = t72;
    } else {
        t72 = $[128];
    }
    let t73;
    if ($[129] !== t71 || $[130] !== t72) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#F4F7F9] relative overflow-hidden",
            children: [
                t5,
                t71,
                t72
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/patient-details/page.tsx",
            lineNumber: 703,
            columnNumber: 11
        }, this);
        $[129] = t71;
        $[130] = t72;
        $[131] = t73;
    } else {
        t73 = $[131];
    }
    return t73;
}
_s(PatientDetailsPage, "o40oDItdbyoMQkNrJLKo/W2UvDg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = PatientDetailsPage;
function _PatientDetailsPageMotionDivOnClick(e_0) {
    return e_0.stopPropagation();
}
function _PatientDetailsPageAnonymous(n) {
    return n[0];
}
function _PatientDetailsPageGetEmotionColor(emotion) {
    switch(emotion){
        case "Positive":
            {
                return "#56B79A";
            }
        case "Negative":
            {
                return "#E74C3C";
            }
        default:
            {
                return "#95A5A6";
            }
    }
}
var _c;
__turbopack_context__.k.register(_c, "PatientDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_f86aeb3f._.js.map