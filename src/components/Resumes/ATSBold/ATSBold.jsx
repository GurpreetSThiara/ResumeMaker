import React, { useEffect, useState } from "react";
import "./ATSBold.css";
import axios from "axios";
import ResumeControls from "../../ResumeControls/ResumeControls";
import { Reorder, motion } from "framer-motion";
import { Box, Button, Checkbox, Flex, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import Profile from "./SubComponents/Profile";
import Experience from "./SubComponents/Experience";
import Education from "./SubComponents/Education";
import Skill from "./SubComponents/Skill";
import Projects from "./SubComponents/Projects";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { reorderSections } from "../../../redux/features/resumeSectionsSlice";
import Links from "./SubComponents/Links";

const ATSBold = ({
  data,
  state,
  setEducation,
  setDataSkills,
  setExperience,
  setProjects,
  selectedFont,
  fontSizes,
  setLinks,
  order:propOrder
}) => {

  const [order, setOrder] = useState(propOrder); // Initialize order state with prop value
  console.log(propOrder);
  
  useEffect(() => {
    // Update order state when prop changes
    setOrder(propOrder);
  }, [propOrder]);

  const [anything , setAnything] = useState(0);

  const z = [
    { component: <Profile data={data} state={state} />, key: 1 },
    {
      component: (
        <Experience
          key={2}
          data={data}
          state={state}
          fontSizes={fontSizes}
          setExperience={setExperience}
        />
      ),
      key: 2,
    },
    {
      component: (
        <Education
          key={3}
          data={data}
          state={state}
          fontSizes={fontSizes}
          setEducation={setEducation}
        />
      ),
      key: 3,
    },
    {
      component: (
        <Skill
          key={4}
          data={data}
          state={state}
          fontSizes={fontSizes}
          setDataSkills={setDataSkills}
        />
      ),
      key: 4,
    },
    {
      component:  <div className="">
        <Projects
      key={5}
      data={data}
      state={state}
      fontSizes={fontSizes}
      setProjects={setProjects}
    />
      </div>,
      key: 5,
    },
  ]

useEffect(()=>{
  setAnything(1);
},[order])


  const save = async () => {
    const element = document.getElementById("ATSBold-page");
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
        .justify{
          text-align: justify;
      }
      .gap-1{
        gap: 1rem;
    
    }
    .items-center{
        align-items: center;
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
            font-weight: bold;
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
          console.log(htmlWithStyle)

      try {
        const apiUrl = import.meta.env.VITE_URL; // Ensure VITE_URL is correctly set in your .env file
        const apiKey = import.meta.env.VITE_API_KEY; // Ensure VITE_URL is correctly set in your .env file

        const response = await axios.post(
          apiUrl,
          { htm: htmlWithStyle }, // Request body
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
  };
  const componentMap = {
    2: <Profile data={data} state={state} fontSizes={fontSizes} />,
    3: <Experience key={2} data={data} state={state} fontSizes={fontSizes} setExperience={setExperience} />,
    4: <Education key={3} data={data} state={state} fontSizes={fontSizes} setEducation={setEducation} />,
    5: <Skill key={4} data={data} state={state} fontSizes={fontSizes} setDataSkills={setDataSkills} />,
    6: <Projects key={5} data={data} state={state} fontSizes={fontSizes} setProjects={setProjects} />,
    7:<Links links={data.links} state={state} fontSizes={fontSizes} setLinks={setLinks}/>,

  }


  // useEffect(()=>{
  //   setComponentMap({...componentMap,

  //     data.custom.map((section, index) => (
  //       <div key={index} className="custom-section">
  //         {state.customKeys.map((item) => {
  //           if (JSON.stringify(item.key) === JSON.stringify(section.key)) {
  //             if (
  //               item.value &&
  //               JSON.stringify("R") === JSON.stringify(section.side)
  //             ) {
  //               return (
  //                 <div key={index} className="">
  //                   <div
  //                     style={{ fontSize: fontSizes.header }}
  //                     className="ATSBold-subheading"
  //                   >
  //                     {section.key}
  //                   </div>

  //                   {section.values.map((item, index) => {
  //                     return (
  //                       <div key={index}>
  //                         <div className="">
  //                           <h4 style={{ fontSize: fontSizes.subheading }}>
  //                             {item.subheading}
  //                           </h4>
  //                         </div>

  //                         <p
  //                           style={{ fontSize: fontSizes.description }}
  //                           className=""
  //                         >
  //                           {item.description}
  //                         </p>
  //                       </div>
  //                     );
  //                   })}
  //                 </div>
  //               );
  //             }
  //           }
  //         })}
  //       </div>
  //     ))
  //   })
  // },[])
  


  return (
    <div className="">
    <Flex wrap={'wrap'} gap={'0.5rem'} py={'0.5rem'} justifyContent={'end'}>
  
         <Button onClick={save}>Save as PDF</Button>
      </Flex>
     
  

      <div
        className="ATSBold-page "
        id="ATSBold-page"
        style={{ fontFamily: selectedFont }}
      >
        <div className="ATSBold justify">
          <div className="ATSBold-header">
            <h1 className="" style={{ fontSize: fontSizes.name }}>
              {data.name.toUpperCase()}
            </h1>
            <h3 >{data.role}</h3>
            {state.Contact && (
              <div className="ATSBold-header-contact-section">
                <div className="address">
                  <p style={{ fontSize: fontSizes.description }}>
                    {data.contact.address}
                  </p>
                </div>
                <div className="seperator" />
                <div className="contact">
                  <p style={{ fontSize: fontSizes.description }}>
                    {data.contact.phone}
                  </p>
                </div>
                <div className="seperator" />
                <div className="email">
                  <p style={{ fontSize: fontSizes.description }}>
                    {data.contact.email}
                  </p>
                </div>
                <div className="seperator" />
                <div className="linkedin">
                  <a href={data.contact.linkedin} style={{ fontSize: fontSizes.description }}>
                    linkedin
                    
                  </a>
                </div>
              </div>
            )}
          </div>
       <div className="flexgap">
       {propOrder && propOrder.map((orderIndex) => (
      <div key={orderIndex} className="">
        {componentMap[orderIndex]?componentMap[orderIndex]:null}
      </div>
    ))}
       </div>
          {/* <Box>
            {propOrder && propOrder.map((orderIndex, index) => {
              const item = z.find((zItem) => zItem.key === orderIndex);
              if(item)
              return (
                <div key={item.key} className="">
                  {item.component}
                </div>
              );
            })}
          </Box> */}

          <Box
         
       
          >
     
{/* 
            {(
              <>
                {order && z.map((item, index) => {
                  return (
                    <div key={item} className="">
                      {z[order[index]]?.component}
                    </div>
                  );
                })}
              </>
            )} */}
          </Box>


     

          {data.custom.map((section, index) => (
            <div key={index} className="custom-section">
              {state.customKeys.map((item) => {
                if (JSON.stringify(item.key) === JSON.stringify(section.key)) {
                  if (
                    item.value &&
                    JSON.stringify("R") === JSON.stringify(section.side)
                  ) {
                    return (
                      <div key={index} className="">
                        <div
                          style={{ fontSize: fontSizes.header }}
                          className="ATSBold-subheading"
                        >
                          {section.key}
                        </div>

                        {section.values.map((item, index) => {
                          return (
                            <div key={index}>
                              <div className="">
                                <h4 style={{ fontSize: fontSizes.subheading }}>
                                  {item.subheading}
                                </h4>
                              </div>

                              <p
                                style={{ fontSize: fontSizes.description }}
                                className=""
                              >
                                {item.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }
                }
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ATSBold;
