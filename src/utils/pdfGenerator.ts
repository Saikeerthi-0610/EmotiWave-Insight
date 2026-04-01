import jsPDF from "jspdf";

interface AnalysisData {
    fileName: string;
    state: string;
    averages: {
        alpha: number;
        beta: number;
        gamma: number;
        theta: number;
    };
    personStats: any[];
    data: any[];
}

interface PatientReport {
    id: string;
    date: string;
    emotion: string;
    dominantWave: string;
    accuracy: string;
    summary: string;
    recommendations: string[];
    patientName?: string;
    patientId?: string;
}

// Generate patient-friendly report
export const generatePatientReport = (report: PatientReport) => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let yPosition = 20;

    // Helper function to add new page if needed
    const checkPageBreak = (requiredSpace: number) => {
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
    pdf.text("EEG Analysis Report", pageWidth / 2, 20, { align: "center" });
    
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    pdf.text("EmotiWave Insight", pageWidth / 2, 32, { align: "center" });

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
    const emotionColor = report.emotion === "Positive" ? [86, 183, 154] : 
                        report.emotion === "Negative" ? [231, 76, 60] : [149, 165, 166];
    
    pdf.setFillColor(emotionColor[0], emotionColor[1], emotionColor[2], 0.15);
    pdf.rect(15, yPosition - 5, pageWidth - 30, 40, "F");
    
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(59, 111, 142);
    pdf.text("Emotional State", 20, yPosition + 5);
    
    pdf.setFontSize(20);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(emotionColor[0], emotionColor[1], emotionColor[2]);
    pdf.text(report.emotion, pageWidth - 20, yPosition + 5, { align: "right" });
    
    yPosition += 18;
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(40, 40, 40);
    const summaryLines = pdf.splitTextToSize(report.summary, pageWidth - 50);
    summaryLines.forEach((line: string) => {
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

    report.recommendations.forEach((rec, index) => {
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
    const disclaimerLines = pdf.splitTextToSize(
        "This report is for informational purposes only. Consult with a qualified healthcare provider for medical advice.",
        pageWidth - 40
    );
    disclaimerLines.forEach((line: string) => {
        pdf.text(line, 20, yPosition);
        yPosition += 5;
    });

    // ===== FOOTER ON ALL PAGES =====
    const totalPages = pdf.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        
        pdf.setDrawColor(214, 224, 231);
        pdf.setLineWidth(0.5);
        pdf.line(20, pageHeight - 15, pageWidth - 20, pageHeight - 15);
        
        pdf.setFontSize(9);
        pdf.setTextColor(100, 100, 100);
        pdf.setFont("helvetica", "normal");
        pdf.text(
            `EmotiWave Insight © ${new Date().getFullYear()}`,
            pageWidth / 2,
            pageHeight - 8,
            { align: "center" }
        );
        pdf.text(`Page ${i} of ${totalPages}`, pageWidth - 20, pageHeight - 8, { align: "right" });
    }

    // Save PDF
    pdf.save(`EEG-Report-${report.id}-${Date.now()}.pdf`);
};

// Original function for analysis page
export const generatePDFReport = (analysisData: AnalysisData) => {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let yPosition = 20;

    // Colors
    const primaryBlue = "#3B6F8E";
    const primaryTeal = "#56B79A";

    // Helper function to add new page if needed
    const checkPageBreak = (requiredSpace: number) => {
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
    pdf.text("EEG Analysis Report", pageWidth / 2, 20, { align: "center" });
    
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    pdf.text("EmotiWave Insight", pageWidth / 2, 30, { align: "center" });

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
    pdf.text(analysisData.state, pageWidth - 20, yPosition + 5, { align: "right" });
    
    pdf.setFontSize(10);
    pdf.setTextColor(100, 100, 100);
    const stateDescription = getStateDescription(analysisData.state);
    pdf.text(stateDescription, 20, yPosition + 18, { maxWidth: pageWidth - 40 });
    
    yPosition += 45;

    // Dominant Wave
    const dominantWave = Object.entries(analysisData.averages).reduce((a, b) => 
        analysisData.averages[a[0] as keyof typeof analysisData.averages] > 
        analysisData.averages[b[0] as keyof typeof analysisData.averages] ? a : b
    );
    
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
    pdf.text(`${analysisData.averages.alpha.toFixed(2)} Hz`, pageWidth - 20, yPosition, { align: "right" });
    yPosition += 6;
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text("Associated with relaxation, calmness, and meditative states.", 20, yPosition);
    yPosition += 4;
    drawProgressBar(pdf, 20, yPosition, pageWidth - 40, 4, analysisData.averages.alpha / 50, [86, 183, 154]);
    yPosition += 12;

    // Beta Wave
    checkPageBreak(20);
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(59, 111, 142);
    pdf.text("Beta Wave (13-30 Hz)", 20, yPosition);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${analysisData.averages.beta.toFixed(2)} Hz`, pageWidth - 20, yPosition, { align: "right" });
    yPosition += 6;
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text("Linked to active thinking, focus, and problem-solving.", 20, yPosition);
    yPosition += 4;
    drawProgressBar(pdf, 20, yPosition, pageWidth - 40, 4, analysisData.averages.beta / 50, [59, 111, 142]);
    yPosition += 12;

    // Gamma Wave
    checkPageBreak(20);
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(230, 126, 34);
    pdf.text("Gamma Wave (30-100 Hz)", 20, yPosition);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${analysisData.averages.gamma.toFixed(2)} Hz`, pageWidth - 20, yPosition, { align: "right" });
    yPosition += 6;
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text("Related to high-level information processing and cognition.", 20, yPosition);
    yPosition += 4;
    drawProgressBar(pdf, 20, yPosition, pageWidth - 40, 4, analysisData.averages.gamma / 50, [230, 126, 34]);
    yPosition += 12;

    // Theta Wave
    checkPageBreak(20);
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(155, 89, 182);
    pdf.text("Theta Wave (4-8 Hz)", 20, yPosition);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${analysisData.averages.theta.toFixed(2)} Hz`, pageWidth - 20, yPosition, { align: "right" });
    yPosition += 6;
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text("Connected to deep relaxation, creativity, and sleep.", 20, yPosition);
    yPosition += 4;
    drawProgressBar(pdf, 20, yPosition, pageWidth - 40, 4, analysisData.averages.theta / 50, [155, 89, 182]);
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
        
        analysisData.personStats.forEach((patient, index) => {
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
    for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.setTextColor(150, 150, 150);
        pdf.text(
            `Page ${i} of ${totalPages} | EmotiWave Insight © ${new Date().getFullYear()}`,
            pageWidth / 2,
            pageHeight - 10,
            { align: "center" }
        );
    }

    // Save PDF
    pdf.save(`EEG-Analysis-Report-${Date.now()}.pdf`);
};

function drawProgressBar(
    pdf: jsPDF,
    x: number,
    y: number,
    width: number,
    height: number,
    percentage: number,
    color: number[]
) {
    // Background
    pdf.setFillColor(230, 237, 242);
    pdf.rect(x, y, width, height, "F");
    
    // Progress
    pdf.setFillColor(color[0], color[1], color[2]);
    pdf.rect(x, y, width * Math.min(percentage, 1), height, "F");
}

function getStateDescription(state: string): string {
    switch (state) {
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
