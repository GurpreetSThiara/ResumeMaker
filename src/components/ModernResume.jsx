import {
  Avatar,
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  extendTheme,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import resumeData from "../data";
import { MdEmail, MdLocationOn, MdPerson, MdPhone } from "react-icons/md";

import html2pdf from 'html2pdf.js';

import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import axios from "axios";
import ReactDOM from 'react-dom';

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

const ModernResume = ({headerLength}) => {
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
        title: "frontEndDevelopment",
        content:
          "Proficient in HTML, CSS, and JavaScript. Experience with React.js for building interactive user interfaces.",
      },
      {
        title: "backEndDevelopment",
        content:
          "Skilled in server-side languages such as Node.js and frameworks like Express.js. Knowledge of RESTful API design.",
      },
      {
        title: "databaseManagement",
        content:
          "amiliarity with database systems such as MongoDB and SQL databases like PostgreSQL or MySQL.",
      },
      {
        title: "versionControl",
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
  });
  const customTheme = extendTheme({
    fonts: {
      body: "Arial",
      heading: "Arial",
      // Add more font styles if needed
    },
  });
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showProfile, setShowProfile] = useState(true);
  const [showContact, setShowContact] = useState(true);
  const [showExperience, setShowExperience] = useState(true);
  const [showSkills, setShowSkills] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [state, setState] = useState({});// for customs
  const boxRef = useRef(null);

  function extractHTMLWithStyles(element) {
    // Clone the element to avoid affecting the original DOM
    // var clone = element.cloneNode(true);

    // // Get computed styles of the element
    // var computedStyles = window.getComputedStyle(element);

    // // Apply computed styles to the clone
    // for (var i = 0; i < computedStyles.length; i++) {
    //     var styleName = computedStyles[i];
    //     clone.style.setProperty(styleName, computedStyles.getPropertyValue(styleName), computedStyles.getPropertyPriority(styleName));
    // }

    // // Wrap the clone in a div to ensure the styles are retained
    // var wrapper = document.createElement('div');
    // wrapper.appendChild(clone);

    // // Create a new HTML document
    // var newDocument = document.implementation.createHTMLDocument();
    // newDocument.body.appendChild(wrapper);
  //   const buttonNode = boxRef.current
  //   if (buttonNode) {
      
  //   //   const html = buttonNode.outerHTML;

  //   //   const classNames = buttonNode.className;
  //   //   const styles = getComputedStyle(buttonNode);
  //   //   const css = Array.from(styles)
  //   //   .map(name => `${name}: ${styles.getPropertyValue(name)};`)
  //   //   .join('\n');
  //   // const cssWithClassNames = `.${classNames} {\n${css}\n}`;

  const buttonNode = boxRef.current;
  if (buttonNode) {
    const html = buttonNode.outerHTML;
    const cssWithClassNames = extractStylesWithClassNames(buttonNode);
    console.log(cssWithClassNames);
    const htmlWithStyle = `<html><head><style>${cssWithClassNames}</style></head><body>${html}</body></html>`;
    setHtmlContent(htmlWithStyle);

  }
  //   // console.log(cssWithClassNames);
  //   //     const htmlWithStyle = `<html><head><style>${cssWithClassNames}</style>\n${html}</head></html>`;
  //   //    console.log(htmlWithStyle);
  //   //       setHtmlContent(htmlWithStyle);

    
  // }
    //   const css = Array.from(styles).map(name => `${name}: ${styles.getPropertyValue(name)};`).join('\n');
    //   // console.log(css)

    // // Serialize the HTML content
    // var htmlWithStyles = newDocument.body.style;
    // console.log(htmlWithStyles);

   //  setHtmlContent(htmlWithStyles);
}

  const HeadingText = ({ text }) => {
    return (
      <Text
        color={"#AAB0B1"}
        fontSize={"1.5rem"}
        fontWeight={600}
        as="h2"
        letterSpacing="0.3rem"
        whiteSpace="pre-line"
      >
        {text.toUpperCase()}
      </Text>
    );
  };

  const DescriptionText = ({ text }) => {
    return <Text color={"#656565"}>{text}</Text>;
  };

  const Devider = () => {
    return (
      <Box w={"35%"} my={"0.4rem"} h={"0.5rem"} backgroundColor={"gray"}></Box>
    );
  };

  const ContactItem = ({ text, icon }) => {
    return (
      <Flex alignItems={"center"} justify={""} gap={"0.4rem"}>
        <Box backgroundColor={"black"} borderRadius={"50%"} p={"0.5rem"}>
          {" "}
          {icon}
        </Box>
        <DescriptionText text={text} />
      </Flex>
    );
  };

  const SubHeading = ({text})=> {
    return  <Text color={"black"} fontWeight="bold">{text}</Text>
  }
  function generatePDF() {
    const doc = new jsPDF();
    doc.text(htmlContent, 10, 10); // Add HTML content to the PDF
    doc.save('my-component.pdf'); // Download the PDF with filename
  }
  const handleConvertToPdf = async () => {
    try {
      const response = await axios.post('http://localhost:3000/convertToPdf', { htmlContent }, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'converted_document.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error converting HTML to PDF:', error);
    }
  };

  
  const handleDownload = () => {
    const blob = new Blob([<Document key={1}>
      <Page size="A4">
      <Box
      id="resume-component"
      aspectRatio={1/1.4142}
      objectFit={'contain'}
      width={"210mm"} // A4 width
      height={"297mm"} // A4 height
        border="1px solid gray"
        transform={`scale(${zoomLevel})`} // Adding border for visualization
      >
       {showHeader &&  <Flex
          background={`url(${"https://img.freepik.com/free-vector/v915_53876-174949.jpg?t=st=1714915412~exp=1714919012~hmac=4b9c2aeb3e1c41dd9768244dd875844912108679c457af7df5f13fbdf4c835b9&w=1060"})`}
          backgroundColor={"gray"}
          h={`${headerLength}%`}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Avatar
            h={"10rem"}
            width={"10rem"}
            src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1714915681~exp=1714919281~hmac=b729b711ae6017314dd8b875cbd6574a883b78066d5c954945f431bae840e3e4&w=1060"
          ></Avatar>
          <Box>
            <Text fontWeight={800} color={"black"} fontSize={"3rem"} as="h1">
              {data.name
              }
            </Text>
            <Text color={"black"} fontSize={"1.5rem"}>
              {data.role}
            </Text>
          </Box>
        </Flex>}
        <Flex h={"75%"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"2rem"}
            p={"2rem"}
            w={"34%"}
          >
           {showProfile &&  <Box w={"full"}>
              <HeadingText text={"PROFILE"} />
              <Devider />
              <DescriptionText
                text={
                    data.profileDescription
                }
              />
            </Box>}
           {showContact &&  <Box w={"full"}>
              <HeadingText text={"CONTACT"} />
              <Devider />

              <List spacing={3}>
                <ListItem>
                  <ContactItem
                    icon={<MdLocationOn size={24} />}
                    text={
                     data.contact.address
                    }
                  />
                </ListItem>
                <ListItem>
                  <ContactItem
                    icon={<MdEmail size={24} />}
                    text={data.contact.email}
                  />
                </ListItem>
                <ListItem>
                  <ContactItem
                    icon={<MdPhone size={24} />}
                    text={data.contact.phone}
                  />
                </ListItem>
                <ListItem>
                  <ContactItem
                    icon={<MdPerson size={24} />}
                    text={data.contact.linkedin}
                  />
                </ListItem>
              </List>
            </Box>}
          </Box>
          <Flex  gap={'2rem'} flexDirection={'column'}   p={"2rem"} h={"100%"} w={"66%"} backgroundColor={"#f2f4f7"}>
           {showSkills && 
            <Box>
              <HeadingText text={"SKILLS"} />
              <Devider/>
              <Box>
     
      <List spacing={2}>
        {
            data.skills.map((item,index)=>{
                return         <ListItem key={index}>
                <SubHeading text={item.title}/>
                <DescriptionText text={item.content}/>
              <Text>
              </Text>
            </ListItem>
            })
        }
        
 
      </List>
    </Box>
            </Box>
}
            {showExperience && <Box>
      <HeadingText text={"EXPERIENCE"} />
      
      <Devider />
   
      <Box>
        <List spacing={2}>
        {data.experience.map((item,index)=>{
        return   <ListItem key={index}>
        <SubHeading text={item.role} />
        <DescriptionText
          text={
            item.description

          }
        />
      </ListItem>
      })}
          
        </List>
      </Box>
    </Box>}
          </Flex>
        </Flex>
      </Box>
      </Page>
    </Document>], { type: 'application/pdf' });
    saveAs(blob, 'resume.pdf');
  };

  const [htmlContent, setHtmlContent] = useState('');
  console.log(htmlContent);

  useEffect(() => {
    const captureHTML = () => {
      const rootElement = document.getElementById('resume-component'); // Assuming your component is rendered in a root element
      extractHTMLWithStyles(rootElement)
    };

    captureHTML();
  }, []);



  
  return (
    <ChakraProvider id='' theme={customTheme}>
        <Button onClick={handleConvertToPdf}>Save as PDF</Button>

      <Box
      ref={boxRef}
      id="resume-component"
      aspectRatio={1/1.4142}
      objectFit={'contain'}
      width={"210mm"} // A4 width
      height={"297mm"} // A4 height
        border="1px solid gray"
        transform={`scale(${zoomLevel})`} // Adding border for visualization
      >
       {showHeader &&  <Flex
          background={`url(${"https://img.freepik.com/free-vector/v915_53876-174949.jpg?t=st=1714915412~exp=1714919012~hmac=4b9c2aeb3e1c41dd9768244dd875844912108679c457af7df5f13fbdf4c835b9&w=1060"})`}
          backgroundColor={"gray"}
          h={`${headerLength}%`}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Avatar
            h={"10rem"}
            width={"10rem"}
            src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1714915681~exp=1714919281~hmac=b729b711ae6017314dd8b875cbd6574a883b78066d5c954945f431bae840e3e4&w=1060"
          ></Avatar>
          <Box>
            <Text fontWeight={800} color={"black"} fontSize={"3rem"} as="h1">
              {data.name
              }
            </Text>
            <Text color={"black"} fontSize={"1.5rem"}>
              {data.role}
            </Text>
          </Box>
        </Flex>}
        <Flex h={"75%"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"2rem"}
            p={"2rem"}
            w={"34%"}
          >
           {showProfile &&  <Box w={"full"}>
              <HeadingText text={"PROFILE"} />
              <Devider />
              <DescriptionText
                text={
                    data.profileDescription
                }
              />
            </Box>}
           {showContact &&  <Box w={"full"}>
              <HeadingText text={"CONTACT"} />
              <Devider />

              <List spacing={3}>
                <ListItem>
                  <ContactItem
                    icon={<MdLocationOn size={24} />}
                    text={
                     data.contact.address
                    }
                  />
                </ListItem>
                <ListItem>
                  <ContactItem
                    icon={<MdEmail size={24} />}
                    text={data.contact.email}
                  />
                </ListItem>
                <ListItem>
                  <ContactItem
                    icon={<MdPhone size={24} />}
                    text={data.contact.phone}
                  />
                </ListItem>
                <ListItem>
                  <ContactItem
                    icon={<MdPerson size={24} />}
                    text={data.contact.linkedin}
                  />
                </ListItem>
              </List>
            </Box>}
          </Box>
          <Flex  gap={'2rem'} flexDirection={'column'}   p={"2rem"} h={"100%"} w={"66%"} backgroundColor={"#f2f4f7"}>
           {showSkills && 
            <Box>
              <HeadingText text={"SKILLS"} />
              <Devider/>
              <Box>
     
      <List spacing={2}>
        {
            data.skills.map((item,index)=>{
                return         <ListItem key={index}>
                <SubHeading text={item.title}/>
                <DescriptionText text={item.content}/>
              <Text>
              </Text>
            </ListItem>
            })
        }
        
 
      </List>
    </Box>
            </Box>
}
            {showExperience && <Box>
      <HeadingText text={"EXPERIENCE"} />
      
      <Devider />
   
      <Box>
        <List spacing={2}>
        {data.experience.map((item,index)=>{
        return   <ListItem key={index}>
        <SubHeading text={item.role} />
        <DescriptionText
          text={
            item.description

          }
        />
      </ListItem>
      })}
          
        </List>
      </Box>
    </Box>}
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default ModernResume;
