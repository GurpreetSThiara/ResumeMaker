
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPDFHTML from 'react-pdf-html';
import { PDFDownloadLink } from '@react-pdf/renderer';

const PDF = () => {
  const [pdfBlob, setPdfBlob] = useState(null);
  const htmlContent = `
    <h1>Hello, World!</h1>
    <p>This is a sample HTML content to be rendered as PDF.</p>
  `;

  const generatePdf = async () => {
    try {
      const pdfBlob = await ReactPDFHTML(htmlContent).toBlob();
      setPdfBlob(pdfBlob);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div>
      <button onClick={generatePdf}>Generate PDF</button>
      {pdfBlob && (
        <PDFDownloadLink
          document={pdfBlob}
          fileName="document.pdf"
          blob={pdfBlob}
        >
          {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
};



export default  PDF