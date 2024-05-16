import React, { useState } from 'react'
import './ATSBold.css';
import axios from 'axios';
import ResumeControls from '../../ResumeControls/ResumeControls';

const ATSBold = ({data}) => {
    const [selectedFont, setSelectedFont] = useState('Arial, sans-serif');
    // This easy-to-scan but visually pleasing premium accounting resume template is the key to making a great impression. This accessible and ATS friendly accounting resume template is organized thoughtfully and a breeze to read through. Your name is prominently displayed at the top of this accounting resume template to make a lasting impression on hiring managers.

    // 100% fully customizable template

    // Easily change the text, images, and more

    // Get creative with thousands of photos, graphics, and fonts

    // Dazzle followers with animations, transitions, or videos

    // Quickly share and publish anywhere
   
      const save =async ()=>{
        const element = document.getElementById('ATSBold-page');
        if (element) {
     
    
          const html = element.outerHTML;
     
     
          const htmlWithStyle = `<!DOCTYPE html><html><head><style>${`
          @page {
            margin-top: 20px;
            margin-bottom: 20px; 
            font-family: Arial, sans-serif;
          }
          body{
            color: #000;
            font-weight: bold;
            font-size: 0.8rem;
       
           
        }

        .flexgap{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        
        }
        .ATSBold-page li{
            margin: 0px;
            padding: 0px;
        }
        p{
            margin:0.5px;
            padding:0.5px
        }
        .ATSBold-page h1,
.ATSBold-page h2,
.ATSBold-page h3,
.ATSBold-page h4,
.ATSBold-page h5,
.ATSBold-page h6 {
    margin: 0.4px;
    padding:0.5px
}
        
        .flex{
            display: flex;
        }
        .ATSBold p {
            color: #000;
        }
        .ATSBold div {
            color: #000;
        }
        h4{
            font-size: 1.2rem;
        }
        
        .ATSBold-page{
            display: flex;
            flex-direction: column;
            gap:0px;
            padding: 2rem;
            width: 210mm;
          
            align-items: center;
            overflow: auto;
            background-color: white;
        }
        
        .ATSBold{
           
        
           display: flex;
           flex-direction: column;
           gap: 1rem;
           overflow: auto;
           
        
        
        }
        .ATSBold-page ul{
            list-style-type: none;
            margin: 0px;
            padding: 0px;
        }
        
        .ATSBold-header{
            text-align: center;
        }
        
        .ATSBold-header h1{
            font-size: 4rem;
            font-weight: bold;
            color: black;
        
        }
        .ATSBold-header h3{
            font-size: 1.5rem;
            font-weight: bold;
            color: black;
        }
        
        .ATSBold-header-contact-section{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.4rem;
        }
        .seperator{
            width: 0.15rem;
            height: 1.1rem;
        
            background-color: black;
        }
        
        .ATSBold-subheading {
            text-transform: uppercase;
            font-size: 2rem;
        }
        
        .ATSBold-education-content{
            display: flex;
            flex-wrap: wrap;
            gap:1rem
         
        }
        
        .ATSBold-projects {
            margin-top: 1rem;
        }
        
        .ATSBold-projects h4 {
            font-size: 1.2rem;
        }
        
        .ATSBold-projects p {
            margin: 0.5rem 0;
        }
        
        .ATSBold-projects a {
            color: blue;
            text-decoration: underline;
        }
        
       
          `}</style></head><body>${html}</body></html>`;
    
          try {
            const response = await axios.post('http://localhost:3000/convertToPdf', { htmlContent:htmlWithStyle }, { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'converted_document.pdf');
            document.body.appendChild(link);
            link.click();
          } catch (error) {
            console.error('Error converting HTML to PDF:', error);
          }
         
        }
      
       }

    
  return (
  <div className="">
           <ResumeControls save={save} selectedFont={selectedFont} setSelectedFont={setSelectedFont}/>

     <div className='ATSBold-page' id='ATSBold-page' style={{fontFamily:selectedFont}}>
     <div className="ATSBold"  >
        <div className="ATSBold-header">
            <h1 className=''>{data.name.toUpperCase()}</h1>
            <h3>{data.role}</h3>
            <div className="ATSBold-header-contact-section">
                <div className="address">{data.contact.address}</div><div className="seperator"/>
                <div className="contact">{data.contact.phone}</div><div className="seperator"/>
                <div className="email">{data.contact.email}</div><div className="seperator"/>
                <div className="linkedin">{data.contact.linkedin}</div>
            </div>
        </div>

        <div className="ATSBold-profile">{data.profileDescription}</div>

        <div className="ATSBold-experience">
            <div className="ATSBold-subheading">Experience</div>
            <div className="flexgap">{
                data.experience.map((experience,i)=>{
                    return <div key={i} className="">
                        
                        <div className=""><h4>{experience.role}</h4></div>
                        <div className=""><p>from {experience.from} to {experience.to}</p></div>
                        <div className=""><p>{experience.description}</p></div>
                    </div>
                })
            }</div>
        </div>

        <div className="ATSBold-education">
            <div className="ATSBold-subheading ">Education</div>
            <div className="ATSBold-education-content ">{
                data.education.map((education,i)=>{
                    return <div key={i} className="">
                 
                        <div className=""><h4>{education.institution}</h4></div>
                        <div className=""><p>{education.degree}</p></div>
                        <div className=""><p>Graduation year:{' '}{education.graduationYear}</p></div>
                        <div className=""><p>gpa:{' '}{education.gpa}</p></div>
                    </div>
                })
            }</div>
        </div>

        
        <div className="ATSBold-skills">
            <div className="ATSBold-subheading ">Skills</div>
            <ul className="flexgap">{
                data.skills.map((skill,i)=>{
                    return <li key={i} className="">
                 
                        <div className=""><h4>{skill.title}</h4></div>
                        <div className=""><p>{skill.content}</p></div>
       
                    </li>
                })
            }</ul>
        </div>

        <div className="ATSBold-projects">
          <div className="ATSBold-subheading">Projects</div>
          <div className="flexgap">{
            data.projects.map((project, i) => (
              <div key={i} className="">
                <div className=""><h4>{project.title}</h4></div>
                <div className=""><p>{project.description}</p></div>
                <div className=""><p>Technologies: {project.technologies.join(', ')}</p></div>
                <div className=""><a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a></div>
              </div>
            ))
          }</div>
        </div>



      
    </div>
   </div>
  </div>
  )
}

export default ATSBold
