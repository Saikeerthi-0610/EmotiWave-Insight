module.exports = [
"[externals]/module [external] (module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}),
"[project]/src/utils/pdfGenerator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generatePDFReport",
    ()=>generatePDFReport,
    "generatePatientReport",
    ()=>generatePatientReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-ssr] (ecmascript)");
;
const generatePatientReport = (report)=>{
    const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
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
    const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
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
}),
"[project]/src/app/patient-reports/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PatientReportsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-ssr] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pdfGenerator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pdfGenerator.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
// Mock patient reports data
const mockPatientReports = [
    {
        id: "R001",
        date: "2024-03-20",
        emotion: "Positive",
        dominantWave: "Alpha",
        accuracy: "98.59%",
        summary: "Patient shows positive emotional state with high alpha wave activity indicating relaxation and calmness.",
        recommendations: [
            "Continue current wellness routine",
            "Maintain regular sleep schedule",
            "Practice mindfulness exercises"
        ]
    },
    {
        id: "R002",
        date: "2024-03-15",
        emotion: "Neutral",
        dominantWave: "Beta",
        accuracy: "98.59%",
        summary: "Balanced brain wave activity across all frequency bands. Neutral emotional baseline detected.",
        recommendations: [
            "Monitor stress levels",
            "Engage in regular physical activity",
            "Maintain work-life balance"
        ]
    },
    {
        id: "R003",
        date: "2024-03-10",
        emotion: "Positive",
        dominantWave: "Alpha",
        accuracy: "98.59%",
        summary: "Excellent emotional state with optimal alpha-theta balance. Patient demonstrates good emotional regulation.",
        recommendations: [
            "Continue meditation practices",
            "Maintain current lifestyle",
            "Schedule follow-up in 2 weeks"
        ]
    }
];
function PatientReportsPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedReport, setSelectedReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check authentication
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            router.push("/access");
            return;
        }
        const userData = JSON.parse(storedUser);
        if (userData.role !== "patient") {
            router.push("/dashboard");
            return;
        }
        setUser(userData);
    }, [
        router
    ]);
    const handleDownloadReport = (report)=>{
        // Add patient information to the report
        const reportWithPatientInfo = {
            ...report,
            patientName: user?.name || "User",
            patientId: user?.id || "355"
        };
        // Generate the patient-friendly PDF
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pdfGenerator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generatePatientReport"])(reportWithPatientInfo);
    };
    const getEmotionColor = (emotion)=>{
        switch(emotion){
            case "Positive":
                return "#56B79A";
            case "Negative":
                return "#E74C3C";
            default:
                return "#95A5A6";
        }
    };
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#F4F7F9] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "spinner"
            }, void 0, false, {
                fileName: "[project]/src/app/patient-reports/page.tsx",
                lineNumber: 97,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/patient-reports/page.tsx",
            lineNumber: 96,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F4F7F9] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        fileName: "[project]/src/app/patient-reports/page.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        fileName: "[project]/src/app/patient-reports/page.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/patient-reports/page.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container mx-auto px-6 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mb-8",
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-[#3B6F8E] mb-2",
                                children: "My Reports"
                            }, void 0, false, {
                                fileName: "[project]/src/app/patient-reports/page.tsx",
                                lineNumber: 139,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "View your EEG analysis reports and recommendations"
                            }, void 0, false, {
                                fileName: "[project]/src/app/patient-reports/page.tsx",
                                lineNumber: 140,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/patient-reports/page.tsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "card p-6 mb-8",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-gradient-to-br from-[#3B6F8E] to-[#56B79A] rounded-2xl flex items-center justify-center text-white text-2xl font-bold",
                                    children: user.name.split(' ').map((n)=>n[0]).join('')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-[#3B6F8E]",
                                            children: user.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: [
                                                "Patient ID: ",
                                                user.id
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/patient-reports/page.tsx",
                            lineNumber: 150,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/patient-reports/page.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-[#3B6F8E] mb-4",
                                        children: "Analysis Reports"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/patient-reports/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 25
                                    }, this),
                                    mockPatientReports.map((report, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: `card p-6 cursor-pointer transition-all ${selectedReport?.id === report.id ? "border-2 border-[#56B79A] bg-[#56B79A10]" : "hover:border-2 hover:border-[#3B6F8E]"}`,
                                            initial: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                delay: 0.2 + index * 0.1
                                            },
                                            onClick: ()=>setSelectedReport(report),
                                            whileHover: {
                                                x: 5
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 bg-[#3B6F8E20] rounded-xl flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                        className: "text-[#3B6F8E]",
                                                                        size: 24
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                        lineNumber: 183,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                    lineNumber: 182,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "font-bold text-[#3B6F8E]",
                                                                            children: [
                                                                                "Report ",
                                                                                report.id
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                            lineNumber: 186,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 text-sm text-gray-600",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                                    lineNumber: 188,
                                                                                    columnNumber: 49
                                                                                }, this),
                                                                                report.date
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                            lineNumber: 187,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                    lineNumber: 185,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-1 rounded-full text-sm font-semibold",
                                                            style: {
                                                                backgroundColor: `${getEmotionColor(report.emotion)}20`,
                                                                color: getEmotionColor(report.emotion)
                                                            },
                                                            children: report.emotion
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-[#F4F7F9] rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-600 mb-1",
                                                                    children: "Dominant Wave"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold text-[#3B6F8E]",
                                                                    children: report.dominantWave
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                    lineNumber: 207,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-[#F4F7F9] rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-600 mb-1",
                                                                    children: "Accuracy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold text-[#56B79A]",
                                                                    children: report.accuracy
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, report.id, true, {
                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 29
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/patient-reports/page.tsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "card p-6 lg:sticky lg:top-8 h-fit",
                                initial: {
                                    opacity: 0,
                                    x: 20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    delay: 0.3
                                },
                                children: selectedReport ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-[#3B6F8E]",
                                                    children: "Report Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    onClick: ()=>handleDownloadReport(selectedReport),
                                                    className: "btn-primary px-4 py-2 flex items-center gap-2",
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 41
                                                        }, this),
                                                        "Download"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-[#F4F7F9] rounded-xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                                    className: "text-[#3B6F8E]",
                                                                    size: 20
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-bold text-[#3B6F8E]",
                                                                    children: "Analysis Summary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 leading-relaxed",
                                                            children: selectedReport.summary
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-[#F4F7F9] rounded-xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                                    className: "text-[#56B79A]",
                                                                    size: 20
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                    lineNumber: 252,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-bold text-[#3B6F8E]",
                                                                    children: "Recommendations"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                    lineNumber: 253,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-2",
                                                            children: selectedReport.recommendations.map((rec, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-start gap-2 text-gray-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[#56B79A] font-bold mt-1",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                            lineNumber: 258,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        rec
                                                                    ]
                                                                }, index, true, {
                                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 49
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-gradient-to-r from-[#3B6F8E10] to-[#56B79A10] rounded-xl border border-[#D6E0E7]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-[#3B6F8E]",
                                                                children: "Note:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/patient-reports/page.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 45
                                                            }, this),
                                                            " This report was generated using our hybrid BiGRU + BiLSTM deep learning model with ",
                                                            selectedReport.accuracy,
                                                            " accuracy."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/patient-reports/page.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                            lineNumber: 241,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-20 bg-[#3B6F8E20] rounded-2xl flex items-center justify-center mx-auto mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "text-[#3B6F8E]",
                                                size: 40
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/patient-reports/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                            lineNumber: 274,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "Select a report to view details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/patient-reports/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/patient-reports/page.tsx",
                                    lineNumber: 273,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/patient-reports/page.tsx",
                                lineNumber: 219,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/patient-reports/page.tsx",
                        lineNumber: 162,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/patient-reports/page.tsx",
                lineNumber: 132,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/patient-reports/page.tsx",
        lineNumber: 103,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0bb54f9e._.js.map