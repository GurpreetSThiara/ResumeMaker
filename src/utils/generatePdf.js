
import html2pdf from 'html2pdf.js';

const convertHtmlToPdf = (elementId, pdfName) => {
  const element = document.getElementById(elementId);
  

  
  html2pdf().from(element).save();
};

export default convertHtmlToPdf;
