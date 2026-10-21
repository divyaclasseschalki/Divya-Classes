import { jsPDF } from 'jspdf';
import { Test, Question, Certificate, TestAttempt } from '../types';

export const PdfService = {
  // Download Branded Question Paper PDF
  generateQuestionPaperPdf(test: Test): void {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 18;

    // Header Border
    doc.setDrawColor(30, 58, 138); // Royal Navy
    doc.setLineWidth(1);
    doc.rect(10, 10, pageWidth - 20, 277);

    // Header Background
    doc.setFillColor(30, 58, 138);
    doc.rect(10, 10, pageWidth - 20, 28, 'F');

    // Title & Branding
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('DIVYA CLASSES', pageWidth / 2, y, { align: 'center' });

    y += 7;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Chalki, Begusarai, Bihar | Contact: +91 9065892913 | Mentor: Dipak Sir', pageWidth / 2, y, { align: 'center' });

    // Exam Metadata Bar
    y = 44;
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.text(`${test.title}`, pageWidth / 2, y, { align: 'center' });

    y += 8;
    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'normal');
    const metaLeft = `Board: ${test.board}   |   Class: ${test.classLevel}   |   Subject: ${test.subject}`;
    const metaRight = `Time: ${test.durationMinutes} Mins   |   Max Marks: ${test.totalMarks}`;
    doc.text(metaLeft, 14, y);
    doc.text(metaRight, pageWidth - 14, y, { align: 'right' });

    y += 3;
    doc.setDrawColor(203, 213, 225);
    doc.line(14, y, pageWidth - 14, y);

    // Instructions Box
    y += 6;
    doc.setFillColor(241, 245, 249);
    doc.rect(14, y, pageWidth - 28, 18, 'F');
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'bold');
    doc.text('General Instructions:', 16, y + 5);
    doc.setFont('helvetica', 'normal');
    doc.text('1. All questions are compulsory. 2. Verify option carefully before ticking.', 16, y + 10);
    doc.text('3. Section A contains MCQs (1 Mark each). Section B contains Assertion-Reason (1 Mark each).', 16, y + 14);

    y += 24;

    // Questions
    doc.setFontSize(10);
    test.questions.forEach((q, index) => {
      // Check page break
      if (y > 260) {
        doc.addPage();
        y = 20;
        doc.setDrawColor(30, 58, 138);
        doc.setLineWidth(1);
        doc.rect(10, 10, pageWidth - 20, 277);
      }

      doc.setFont('helvetica', 'bold');
      const qPrefix = `Q${index + 1}. [${q.marks} Mark${q.marks > 1 ? 's' : ''}] `;
      doc.text(qPrefix, 14, y);

      doc.setFont('helvetica', 'normal');
      const lines = doc.splitTextToSize(q.text, pageWidth - 45);
      doc.text(lines, 32, y);
      y += lines.length * 5 + 2;

      if (q.options && q.options.length > 0) {
        q.options.forEach((opt, optIdx) => {
          const optLabel = String.fromCharCode(65 + optIdx);
          doc.text(`(${optLabel}) ${opt}`, 35, y);
          y += 5;
        });
        y += 2;
      }
    });

    // Footer with Dipak Sir Authorization
    const totalPages = doc.getNumberOfPages();
    for (let p = 1; p <= totalPages; p++) {
      doc.setPage(p);
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text(
        `Divya Classes Official Academic Paper  |  Verified by Dipak Sir (Begusarai, Bihar)  |  Page ${p} of ${totalPages}`,
        pageWidth / 2,
        282,
        { align: 'center' }
      );
    }

    doc.save(`DivyaClasses_${test.board}_${test.classLevel}_${test.subject}.pdf`);
  },

  // Download Formal Certificate PDF
  generateCertificatePdf(cert: Certificate): void {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Outer double border
    doc.setDrawColor(30, 58, 138); // Deep Navy
    doc.setLineWidth(3);
    doc.rect(8, 8, pageWidth - 16, pageHeight - 16);

    doc.setDrawColor(217, 119, 6); // Golden Amber
    doc.setLineWidth(1);
    doc.rect(11, 11, pageWidth - 22, pageHeight - 22);

    // Decorative corner accents
    doc.setFillColor(217, 119, 6);
    doc.circle(11, 11, 3, 'F');
    doc.circle(pageWidth - 11, 11, 3, 'F');
    doc.circle(11, pageHeight - 11, 3, 'F');
    doc.circle(pageWidth - 11, pageHeight - 11, 3, 'F');

    // Header
    let y = 30;
    doc.setTextColor(30, 58, 138);
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.text('DIVYA CLASSES', pageWidth / 2, y, { align: 'center' });

    y += 8;
    doc.setFontSize(11);
    doc.setTextColor(100, 116, 139);
    doc.setFont('helvetica', 'normal');
    doc.text('Chalki, Begusarai, Bihar, India | Mentorship by Dipak Sir', pageWidth / 2, y, { align: 'center' });

    y += 14;
    doc.setTextColor(180, 83, 9); // Amber Gold
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('CERTIFICATE OF ACHIEVEMENT', pageWidth / 2, y, { align: 'center' });

    y += 10;
    doc.setTextColor(71, 85, 105);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('This is proudly presented to', pageWidth / 2, y, { align: 'center' });

    // Student Name
    y += 14;
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(26);
    doc.setFont('helvetica', 'bold');
    doc.text(cert.studentName.toUpperCase(), pageWidth / 2, y, { align: 'center' });

    // Line under name
    y += 3;
    doc.setDrawColor(30, 58, 138);
    doc.setLineWidth(0.8);
    doc.line(pageWidth / 2 - 60, y, pageWidth / 2 + 60, y);

    // Achievement text
    y += 12;
    doc.setTextColor(51, 65, 85);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const achText = `For outstanding performance and securing "${cert.achievement}" in the`;
    doc.text(achText, pageWidth / 2, y, { align: 'center' });

    y += 8;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(30, 58, 138);
    doc.text(`${cert.title} (${cert.board} - ${cert.classLevel})`, pageWidth / 2, y, { align: 'center' });

    if (cert.percentage) {
      y += 8;
      doc.setFontSize(12);
      doc.setTextColor(180, 83, 9);
      doc.text(`Score: ${cert.score}/${cert.totalScore}  (${cert.percentage}% Accuracy)`, pageWidth / 2, y, { align: 'center' });
    }

    // Signatures and Verification block
    y = pageHeight - 38;

    // Left: Issue Date & Verification Code
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`Issue Date: ${cert.issueDate}`, 25, y);
    doc.text(`Certificate ID: ${cert.id}`, 25, y + 5);
    doc.text(`Verification Code: ${cert.verificationCode}`, 25, y + 10);
    doc.text(`Verify Online: divyaclasses.edu/verify`, 25, y + 15);

    // Center: Gold Seal Emulation
    doc.setFillColor(254, 243, 199);
    doc.circle(pageWidth / 2, y + 5, 12, 'F');
    doc.setDrawColor(217, 119, 6);
    doc.setLineWidth(0.7);
    doc.circle(pageWidth / 2, y + 5, 12, 'S');
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 83, 9);
    doc.text('OFFICIAL SEAL', pageWidth / 2, y + 4, { align: 'center' });
    doc.text('DIVYA CLASSES', pageWidth / 2, y + 8, { align: 'center' });

    // Right: Dipak Sir's Signature & Name
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(14);
    doc.setTextColor(30, 58, 138);
    doc.text('Dipak Kumar', pageWidth - 55, y + 2, { align: 'center' });
    doc.line(pageWidth - 75, y + 4, pageWidth - 35, y + 4);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text('Dipak Kumar (Dipak Sir)', pageWidth - 55, y + 9, { align: 'center' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('Founder & Lead Educator', pageWidth - 55, y + 13, { align: 'center' });

    doc.save(`Certificate_${cert.studentName.replace(/\s+/g, '_')}_${cert.id}.pdf`);
  }
};
