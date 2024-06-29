// src/components/Resume.js
import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import './CreativeCanvas.css';

const CreativeCanvas = () => {

  const ref = useRef()
    const generatePDF = () => {
        const doc = new jsPDF('p', 'pt', 'a4');
        doc.html(ref.current, {
            callback:  (pdf)=> {
                pdf.save('resume.pdf');
            },
            // html2canvas: { scale: 1}, 
          
            margin:5,
 
            html2canvas: { scale: 0.745 },
            
        });
    };

    return (
     <div className="">
                  <button className="pdf-button" onClick={generatePDF}>Download PDF</button>

         <div className="resume-container" id="resume" ref={ref}>
            <header className='border'>
                <h1>John Doe</h1>
                <p className="title">Graphic Designer</p>
                <div className="contact-info">
                    <p>Email: john.doe@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Website: www.johndoe.com</p>
                </div>
            </header>

      
        </div>
     </div>
    );
};

export default CreativeCanvas;
