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
            html2canvas: { scale: 10}, 
            
        });
    };

    return (
        <div className="resume-container" id="resume" ref={ref}>
            <header>
                <h1>John Doe</h1>
                <p className="title">Graphic Designer</p>
                <div className="contact-info">
                    <p>Email: john.doe@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Website: www.johndoe.com</p>
                </div>
            </header>

            <section className="summary">
                <h2>Summary</h2>
                <p>Creative and detail-oriented graphic designer with 5+ years of experience in creating visually compelling designs for various platforms. Proficient in Adobe Creative Suite, Sketch, and other design tools.</p>
            </section>

            <section className="experience">
                <h2>Professional Experience</h2>
                <div className="job">
                    <h3>Senior Graphic Designer</h3>
                    <p className="company">XYZ Design Studio | Jan 2018 - Present</p>
                    <ul>
                        <li>Lead design projects for clients in various industries, delivering high-quality visuals.</li>
                        <li>Collaborated with marketing teams to create promotional materials.</li>
                        <li>Mentored junior designers and provided feedback on their work.</li>
                    </ul>
                </div>
                <div className="job">
                    <h3>Graphic Designer</h3>
                    <p className="company">ABC Agency | Jun 2015 - Dec 2017</p>
                    <ul>
                        <li>Developed branding strategies and designed logos, brochures, and websites.</li>
                        <li>Worked closely with clients to understand their vision and requirements.</li>
                        <li>Managed multiple projects simultaneously, ensuring timely delivery.</li>
                    </ul>
                </div>
            </section>

            <section className="education">
                <h2>Education</h2>
                <p>Bachelor of Fine Arts in Graphic Design</p>
                <p className="school">University of Design | Graduated May 2015</p>
            </section>

            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Adobe Creative Suite</li>
                    <li>Sketch</li>
                    <li>Typography</li>
                    <li>Web Design</li>
                    <li>Brand Identity</li>
                </ul>
            </section>

            <button className="pdf-button" onClick={generatePDF}>Download PDF</button>
        </div>
    );
};

export default CreativeCanvas;
