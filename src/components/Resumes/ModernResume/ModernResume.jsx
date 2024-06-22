import React, { useEffect, useRef, useState } from 'react';
import './ModernResume.css'; // Import your CSS file
import { MdEmail, MdLocationOn, MdPerson, MdPhone } from 'react-icons/md';
import axios from 'axios';
import { Button, Flex, Select } from '@chakra-ui/react';
import { Reorder } from "framer-motion";
import { Center, ChakraProvider, List, ListItem } from "@chakra-ui/react";
import ResumeControls from '../../ResumeControls/ResumeControls';
import jsPDF from 'jspdf';

const ModernResume = ({state,data,setDataSkills,setEducation,setExperience,fontSizes}) => {

    const [resHtml , setResHtml] = useState();
    const [selectedFont, setSelectedFont] = useState('Arial, sans-serif');
    const contentRef = useRef();


  

  const HeadingText = ({ text }) => {
    return <h2 style={{fontSize:fontSizes.header}} className="heading-text">{text.toUpperCase()}</h2>;
  };

  const Divider = () => {
    return <div className=""/>;
  };

  const ContactItem = ({ icon, text }) => {
    return (
      <div className="contact-item  ml-0">
      
        <div style={{fontSize:fontSizes.description}} className="textsmall"><p style={{fontSize:fontSizes.description}}>{text}</p></div>
      </div>
    );
  };

  const SubHeading = ({ text }) => {
    return (
      <div style={{fontSize:fontSizes.subheading}} className="sub-heading">
        {text}
      </div>
    );
  }

  const [ContactItems , setContactItems] = useState(
    [
      <ContactItem
      key={1}
      icon={<MdLocationOn size={24} />}
      text={data.contact.address}
    />,

    <ContactItem
    key={2}
      icon={<MdEmail size={24} />}
      text={<a  className='link-color' rel="noopener noreferrer" href={data.contact.email}>{data.contact.email}</a>}
    />,

    <ContactItem
    key={3}
      icon={<MdPhone size={24} />}
      text={data.contact.phone}
    />,

    <ContactItem
    key={4}
      icon={<MdPerson size={24} />}
      text={<a className='link-color' rel="noopener noreferrer" href={data.contact.linkedin}> {data.contact.linkedin}</a>}
    />
    ]
  )

  const generatePDF = () => {
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.html(contentRef.current, {
      callback: (doc) => {
        doc.save('document.pdf');
      },
      margin:5,
   
      html2canvas: { scale: 0.745 }, // Optional: adjust this based on your needs
    });
  };


  const save =async ()=>{
    const element = document.getElementById('modern_resume');
    if (element) {
 

      const html = element.outerHTML;
 
 
      const htmlWithStyle = `<!DOCTYPE html><html><head><style>${`
      
      @page {
        margin-top: 20px;
        margin-bottom: 20px; 
        font-family: Arial, sans-serif;
      }
      body{
        font-family: Arial, sans-serif;
      }
      .flex{
        display: flex;
    }
    .center{align-items: center;justify-content: center;}
    .col{flex-direction: column;}
    .textjustify{
        text-align: justify;
    }
    .textsmall{
        font-size: 14px
    }
    .ucase{
        text-transform: uppercase;
    }
    .bold{
        font-weight: 700;
    }
    .start{
        justify-content: start;
    }
    .gap{
        gap: 10px;
    }
    .mingap{
      gap:0px
  }
    .border{
      border:1px solid;
      margin-left:0px;
      padding-left:0px;
    }
    .pl-0{
      padding-left: 0px;
  }
.textcolor{
  color: #656565;
}
    
    
    /* css for all headings */
    .heading-text {
        color: #323232;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.15rem;
        white-space: pre-line;
      }
    /* SubHeading */
    .sub-heading {
        color: black; /* Font color */
        font-weight: bold; /* Font weight */
        /* Add any additional styles here */
      }
      /* divider */
      .divider {
        width: 100%;
        height: 1px;
        background-color: #e0e0e0; /* Change color as desired */
        margin: 0.4rem 0; /* Adjust margin as needed */
      }
    
      /* contact item component */
    
      ul {
        list-style-type: none;
        width: 100%;
    }
      .contact-item {
        width: 100%;
       
        margin-bottom: 10px; /* Adjust margin as needed */
      }
      
      .icon {
        margin-right: 10px; /* Adjust margin as needed */
      }
      
      .text {
        font-size: 16px; /* Adjust font size as needed */
      }
      
      
      
    
    .resume{
        width: 210mm ;
        background-color: white;
        color: black;
        font-family: Arial, sans-serif;
    }
    
    .left-section{
        gap:1rem;
        padding: 1rem;
        width: 35%;
        background-color:  rgb(149, 154, 136);
    
        
    }
    .profile-description{
        font-size: 14px;
        font-weight: normal;
        line-height: 1.6;
      
    }
    
    .profile-image-container{
         width: 12rem;
         height: 12rem;
         margin: 2rem;
     
         border-radius: 50%;
         
    }
    
    .profile-image{
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    
    .education-container{
        width: 100%;
    }
    
    
    .header{
        width: 100%;
        margin-top: 2rem;
        background-color: #E6E5DB;
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-right: 20px;
        
    
    }
    
    .right-section{
        align-items: center;
        justify-content: start;
    
     
    }
    
    .right-section-content{
        padding-left: 16px;
        padding-right: 16px;
        gap: 10px;
    }
    
    .link-color{
        color: #333333;
    }
    
      `}</style></head><body>${html}</body></html>`;



    
      try {
        const apiUrl = import.meta.env.VITE_URL; // Ensure VITE_URL is correctly set in your .env file
        const apiKey = import.meta.env.VITE_API_KEY; // Ensure VITE_URL is correctly set in your .env file

        const response = await axios.post(
          `${apiUrl}`,
          {htm:htmlWithStyle}, // Request body
          {
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': apiKey
            },
            responseType: 'blob' // Ensure response type is blob for downloading files
          }
        );
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "converted_document.pdf");
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        console.error("Error converting HTML to PDF:", error);
      }
     
    }
  
   }



  
  

  return (
   <Flex padding={'0.5rem'} flexDirection={'column'} gap={'0.5rem'} className="">
      <Button onClick={generatePDF}>Save as PDF</Button>
     <Flex justifyContent={'end'} gap={'0.5rem'}>

   
     </Flex>
     <div ref={contentRef} style={{fontFamily:selectedFont?selectedFont:'',color:'black'}} id="modern_resume" className="resumee flex ">
      <div className="left-section"  >
        {state.Image && <div className="profile-image-container">
            <img className='profile-image' src={"https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1714915681~exp=1714919281~hmac=b729b711ae6017314dd8b875cbd6574a883b78066d5c954945f431bae840e3e4&w=1060"} alt="" />
        </div>}

        {/* profile description */}
        {state.Profile && <div className="">
        
        <p style={{fontSize:fontSizes.description}} className='profile-description textjustify '>{data.profileDescription}</p>
      </div>}
  
       {/* Contact Section */}
          {state.Contact && <div className="contact-container">
      <HeadingText text="CONTACT" />
      <Divider />

        <div className="pl-0" >
        <Reorder.Group className='pl-0' axis="y" values={ContactItems} onReorder={setContactItems}>
      {ContactItems.map((item) => (
        <Reorder.Item  className='' key={item.phone} value={item}>
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
    
      
        </div>
      </div>}

    {/* Education Section */}

  {state.Education &&    <div className="education-container">
        <HeadingText text={'EDUCATION'}/>
        <Divider/>
      <div >
      <List
      className='pl-0'
      as={Reorder.Group}
   
      values={data.education}
      onReorder={(education)=>{
        console.log("reorder");
        setEducation(education)
      }}
    
    >
      kjhjkgjhfhj
       {data.education.map((edu, index) => (
           <ListItem
           as={Reorder.Item}
           key={edu.graduationYear}
           value={edu}
           className=''
        
          
         >
          
            <div key={edu.graduationYear} className="">
                <SubHeading className='textsmall' text={edu.degree}/>
                <p style={{fontSize:fontSizes.description,color:'black'}} className='textsmall'>{edu.institution}</p>
                <p style={{fontSize:fontSizes.description}} className='textsmall'>passing year: {edu.graduationYear}</p>
            </div>
            </ListItem>
          ))}
   
    </List>
 
      </div>

    </div>}
    {data.custom.map((section, index) => (
              <div key={index} className="custom-section">
                {state.customKeys.map((item)=>{
                  if(JSON.stringify(item.key) === JSON.stringify(section.key)){
                    if(item.value && JSON.stringify("L") === JSON.stringify(section.side)){
                      return   <div key={index} className="">
                      <HeadingText text={section.key || 'Custom Section'} />
                       <Divider />
                       {
                         section.values.map((item,index)=>{
                           return <div key={index}>
                             <SubHeading text={item.subheading}/>
                             <p style={{fontSize:fontSizes.description}}  className=''>{item.description}</p>
                           </div>
                         })
                       }
                       
                      </div>
                    }
                  }
                })}
             
              </div>
            ))}
       
      </div>

      {/* header name role */}
      <div className="right-section flex col">
        <div className="header">
            <h1 style={{fontSize:fontSizes.name}} className='header-name ucase bold'>{data.name}</h1>
            <p style={{fontSize:fontSizes.description}}>{data.role}</p>
        </div>


        <div className="right-section-content flex col">
          
{/* Experience */}
      {state.Experience &&   <div className="experience">
        <HeadingText text="experience" />
      <Divider />
        <div >
        <List
      as={Reorder.Group}
      className='pl-0'
   
      values={data.experience}
      onReorder={(e)=>{
        console.log("reorder");
        setExperience(e)
      }}
    
    >
       {data.experience.map((exp, index) => (
           <ListItem
           as={Reorder.Item}
           key={exp.description}
           value={exp}
           className='pl-0'
          
         >
           <div key={index} className="flex col experience-item mingap">
              <SubHeading text={exp.role}/>
              <p style={{fontSize:fontSizes.description}} className='textcolor'>{exp.description}</p>
            </div>
    
            </ListItem>
          ))}
   
    </List>
     
        </div>
        </div>}
       {/* Skills */}
       {state.Skills &&  <div className="skills">
        <HeadingText text="skills" />
      <Divider />
       <div >
       <List
      as={Reorder.Group}
      className='pl-0'
   
      values={data.skills}
      onReorder={(s)=>{
        console.log("reorder");
        setDataSkills(s)
      }}
    
    >
       {data.skills.map((skill, index) => (
           <ListItem
           as={Reorder.Item}
           key={skill.title}
           value={skill}
          
         >
            <div key={index} className="skill-item flex col mingap">
       
              <SubHeading text={skill.title}/>

              <p style={{fontSize:fontSizes.description}}  className='textcolor'>{skill.content}</p>
            </div>
            </ListItem>
          ))}
   
    </List>

       </div>
        </div>
       }

{data.custom.map((section, index) => (
              <div key={index} className="custom-section">
                {state.customKeys.map((item)=>{
                  if(JSON.stringify(item.key) === JSON.stringify(section.key)){
                    if(item.value && JSON.stringify("R") === JSON.stringify(section.side)){
                      return   <div key={index} className="">
                      <HeadingText text={section.key || 'Custom Section'} />
                       <Divider />
                       {
                         section.values.map((item,index)=>{
                           return <div key={index}>
                             <SubHeading text={item.subheading}/>
                             <p style={{fontSize:fontSizes.description}}  className='textcolor'>{item.description}</p>
                           </div>
                         })
                       }
                       
                      </div>
                    }
                  }
                })}
             
              </div>
            ))}
        </div>
       
      </div>
    </div>
   </Flex>
  );
}

export default ModernResume;
