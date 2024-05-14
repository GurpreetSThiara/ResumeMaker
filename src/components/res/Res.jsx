import React, { useEffect, useRef, useState } from 'react'
import './Res.css'
import axios from 'axios';
import Demores from '../demoRes/DemoRes';
import jsPDF from 'jspdf';
import Minimalistic from '../Resumes/Minimalistic/Minimalistic';

function getDefaultStyles() {
    const div = document.createElement("div");
    document.body.appendChild(div); // Append to body to ensure styles are applied
    const computedStyles = window.getComputedStyle(div);
    const defaultStyles = {};
    for (let i = 0; i < computedStyles.length; i++) {
      const propertyName = computedStyles[i];
      const propertyValue = computedStyles.getPropertyValue(propertyName);
      defaultStyles[propertyName] = propertyValue;
    }
    document.body.removeChild(div); // Remove from body
    return defaultStyles;
  }
  
  // Function to traverse and extract used class names and styles
  function traverseAndExtract(element, cssRules, defaultStyles) {
    // Iterate through each child node of the element
    element.childNodes.forEach((child) => {
      if (child.nodeType === 1) {
        // Check if it's an element node
        // Extract class name and styles
        const className = child.className;
        const styles = window.getComputedStyle(child);
  
        // Generate CSS rule if style differs from default
        let cssRule = "";
        for (let i = 0; i < styles.length; i++) {
          const propertyName = styles[i];
          const propertyValue = styles.getPropertyValue(propertyName);
          if (defaultStyles[propertyName] !== propertyValue) {
            cssRule += `${propertyName}: ${propertyValue};`;
          }
        }
        if (cssRule !== "") {
          cssRules.push(`.${className} { ${cssRule} }`);
        }
  
        // Recursively traverse children
        traverseAndExtract(child, cssRules, defaultStyles);
      }
    });
  }
  

function extractStylesWithClassNames(element) {
    const stylesWithClassNames = [];
  
    function traverseDOM(node) {
      const classNames = node.className;
      const styles = getComputedStyle(node);
      const css = Array.from(styles)
        .map(name => `${name}: ${styles.getPropertyValue(name)};`)
        .join('\n');
  
      if (classNames && classNames.length > 0) {
        stylesWithClassNames.push(`.${classNames} {\n${css}\n}`);
      }
  
      for (let childNode of node.children) {
        traverseDOM(childNode);
      }
    }
  
    traverseDOM(element);
    return stylesWithClassNames.join('\n\n');
  }
const Res = () => {
  const [data, setData] = useState({
    name: "John Doe",
    role: "Full Stack Developer",
    profileDescription:
      "Results-driven Full Stack Developer with [X years] of experience in designing, developing, and implementing scalable web applications. Proficient in both front-end and back-end technologies, with a strong focus on delivering high-quality code and intuitive user experiences.",
    contact: {
      address: "512 Moore Street, Indigo Valley, San Diego, California",
      email: "johndoe@email.com",
      phone: "872-234-3355",
      linkedin: "linkedin of johndoe",
    },
    skills: [
      {
        title: "Front-end Development",
        content:
          "Proficient in HTML, CSS, and JavaScript. Experience with React.js for building interactive user interfaces.",
      },
      {
        title: "Back-end Development",
        content:
          "Skilled in server-side languages such as Node.js and frameworks like Express.js. Knowledge of RESTful API design.",
      },
      {
        title: "Database Management",
        content:
          "Familiarity with database systems such as MongoDB and SQL databases like PostgreSQL or MySQL.",
      },
      {
        title: "Version Control",
        content:
          "Proficient in using Git and GitHub for version control and collaboration with other developers.",
      },
    ],
    experience: [
      {
        role: "Front-end Developer at Company X",
        description:
          "Developed user interfaces using HTML, CSS, and JavaScript. Collaborated with designers to implement responsive designs. Utilized React.js to create interactive and dynamic web applications.",
      },
      {
        role: "Back-end Developer at Company Y",
        description:
          "Implemented server-side logic using Node.js and Express.js. Designed and maintained RESTful APIs for data exchange between front-end and back-end systems. Managed database systems including MongoDB and MySQL.",
      },
    ],
    education: [
        {
          institution: "University XYZ",
          degree: "Bachelor of Science in Computer Science",
          graduationYear: "201X",
        },
        {
          institution: "ABC College",
          degree: "Master of Science in Software Engineering",
          graduationYear: "201Y",
        },
      ],
  });


    const [count, setCount] = useState(0);
    const [htm, setHtm] = useState();
    const boxRef = useRef(null)

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
    const gen =async ()=> {
        const x = <Res/>
        // const buttonNode = boxRef.current;
        // if (buttonNode) {
        //   const html = buttonNode.outerHTML;
        //   const cssWithClassNames = extractStylesWithClassNames(buttonNode);
     
        //   const htmlWithStyle = `<html><head><style>${cssWithClassNames}</style>\n${html}</head></html>`;
        //   setHtm(htmlWithStyle);
        //   console.log(htmlWithStyle)
      
        // }else{
        //     console.log("nothing")
        // }
    }
 


   useEffect(() => {
    // Default styles for common HTML elements
    const defaultStyles = getDefaultStyles();

    // Array to store CSS rules
    const cssRules = [];

    // Call the function with the parent element
    const element = document.getElementById('resume-con');
    if (element) {
      traverseAndExtract(element, cssRules, defaultStyles);

      // Output CSS rules to a file
      const cssContent = cssRules.join("\n");

      const ele =document.getElementById('resume-con');

      const html = ele.outerHTML;
      console.log(html)
    
 
      const htmlWithStyle = `<!DOCTYPE html><html><head><style>${`
      @page {
        margin-top: 20px;
        margin-bottom: 20px; 
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
      setHtm(htmlWithStyle);
    }
  }, []);

   const call =async ()=>{
    try {
        const response = await axios.post('http://localhost:3000/convertToPdf', { htmlContent:htm }, { responseType: 'blob' });
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
  return (
 <div className="">
    <button onClick={call}>press</button>
    <button onClick={gen}>gen</button>
   <div className="" id='resume-con' ref={boxRef}>
    <Minimalistic data={data}/>
   {/* <div className="complex-resume">
      <header className="header">
        <div className="name-section">
          <h1 className="name">Emily Johnson</h1>
          <p className="subtitle">Full Stack Developer</p>
        </div>
        <div className="contact-info">
          <p>Email: emily@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Location: New York City</p>
        </div>
      </header>
      <hr className="divider" />
      <section className="content">
        <div className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </div>
        <div className="section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-item">
            <h3>Senior Full Stack Developer</h3>
            <p>ABC Tech Solutions</p>
            <p>2018 - Present</p>
          </div>
          <div className="experience-item">
            <h3>Frontend Developer</h3>
            <p>XYZ Web Agency</p>
            <p>2016 - 2018</p>
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            <h3>Bachelor's Degree in Computer Science</h3>
            <p>University of ABC</p>
            <p>Graduated in 2016</p>
          </div>
        </div>
      </section>
    </div> */}
   </div>
 </div>
  )
}

export default Res
