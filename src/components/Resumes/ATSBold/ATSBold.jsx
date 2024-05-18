import React, { useState } from "react";
import "./ATSBold.css";
import axios from "axios";
import ResumeControls from "../../ResumeControls/ResumeControls";
import { Reorder, motion } from "framer-motion";
import { List, ListIcon, ListItem } from "@chakra-ui/react";

const ATSBold = ({
  data,
  state,
  setEducation,
  setDataSkills,
  setExperience,
  setProjects,
  selectedFont,
  fontSizes
}) => {
 // const [selectedFont, setSelectedFont] = useState("Arial, sans-serif");
  // This easy-to-scan but visually pleasing premium accounting resume template is the key to making a great impression. This accessible and ATS friendly accounting resume template is organized thoughtfully and a breeze to read through. Your name is prominently displayed at the top of this accounting resume template to make a lasting impression on hiring managers.

  // 100% fully customizable template

  // Easily change the text, images, and more

  // Get creative with thousands of photos, graphics, and fonts

  // Dazzle followers with animations, transitions, or videos

  // Quickly share and publish anywhere
  const handleDragEnd = (result) => {
    if (!result.destination) return; // Drop outside the list

    const items = Array.from(data.education);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setEducation(items);
  };

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
        const response = await axios.post(
          "http://localhost:3000/convertToPdf",
          { htmlContent: htmlWithStyle },
          { responseType: "blob" }
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

  return (
    <div className="">
      {/* <ResumeControls
        save={save}
        selectedFont={selectedFont}
        setSelectedFont={setSelectedFont}
      /> */}

      <div
        className="ATSBold-page"
        id="ATSBold-page"
        style={{ fontFamily: selectedFont }}
      >
        <div className="ATSBold">
          <div className="ATSBold-header">
            <h1 className="" style={{fontSize:fontSizes.name}}>{data.name.toUpperCase()}</h1>
            <h3>{data.role}</h3>
            {state.Contact && (
              <div className="ATSBold-header-contact-section">
                <div className="address"><p  style={{fontSize:fontSizes.description}}>{data.contact.address}</p></div>
                <div className="seperator" />
                <div className="contact"><p  style={{fontSize:fontSizes.description}}>{data.contact.phone}</p></div>
                <div className="seperator" />
                <div className="email"><p style={{fontSize:fontSizes.description}}>{data.contact.email}</p></div>
                <div className="seperator" />
                <div className="linkedin"><p style={{fontSize:fontSizes.description}}>{data.contact.linkedin}</p></div>
              </div>
            )}
          </div>

          {state.Profile && (
            <div className="ATSBold-profile">{data.profileDescription}</div>
          )}

          {
            state.Experience && (
              <div className="ATSBold-experience">
                <div className="ATSBold-subheading" style={{fontSize:fontSizes.header}}>Experience</div>
                <div className="flexgap">
                <List
                className="flexgap"
                as={Reorder.Group}
                values={data.experience}
                onReorder={(experience) => {
                  console.log("reorder");
                  setExperience(experience);
                }}
              >
                {data.experience.map((experience, i) => {
                  return (
                    <ListItem
                      key={experience.description}
                      as={Reorder.Item}
                      value={experience}
                      className=""
                    >
                        <div key={i} className="">
                        <div className="">
                          <h4  style={{fontSize:fontSizes.subheading}}>{experience.role}</h4>
                        </div>
                        <div className="">
                          <p style={{fontSize:fontSizes.description}}>
                            from {experience.from} to {experience.to}
                          </p>
                        </div>
                        <div className="">
                          <p style={{fontSize:fontSizes.description}}>{experience.description}</p>
                        </div>
                      </div>
                    </ListItem>
                  );
                })}
              </List>
                  {/* {data.experience.map((experience, i) => {
                    return (
                      <div key={i} className="">
                        <div className="">
                          <h4>{experience.role}</h4>
                        </div>
                        <div className="">
                          <p style={{fontSize:fontSizes.description}}>
                            from {experience.from} to {experience.to}
                          </p>
                        </div>
                        <div className="">
                          <p style={{fontSize:fontSizes.description}}>{experience.description}</p>
                        </div>
                      </div>
                    );
                  })} */}
                </div>
              </div>
            )
            //   <List
            //   className='pl-0'
            //   as={Reorder.Group}

            //   values={data.education}
            //   onReorder={(education)=>{
            //     console.log("reorder");
            //     setEducation(education)
            //   }}

            // >
            //    {data.education.map((edu, index) => (
            //        <ListItem
            //        as={Reorder.Item}
            //        key={edu.graduationYear}
            //        value={edu}
            //        className=''

            //      >

            //         <div key={edu.graduationYear} className="">
            //             <SubHeading className='textsmall' text={edu.degree}/>
            //             <p style={{fontSize:fontSizes.description}} className='textsmall'>{edu.institution}</p>
            //             <p style={{fontSize:fontSizes.description}} className='textsmall'>passing year: {edu.graduationYear}</p>
            //         </div>
            //         </ListItem>
            //       ))}

            // </List>
          }
          {state.Education && (
            <div className="ATSBold-education">
              <div className="ATSBold-subheading " style={{fontSize:fontSizes.header}}>Education</div>
              <div className="ATSBold-education-content ">
                {/* <List
            className='ATSBold-education-content'
                  as={Reorder.Group}
               
                  values={data.education}
                  onReorder={(education)=>{
                    console.log("reorder");
                    setEducation(education);
                  
                  }}>
                    {
                           data.education.map((education,i)=>{
                            return <ListItem
                            as={Reorder.Item}
                                   key={education.graduationYear}
                                   value={education}
                                   className=''
                            >
                                <div className=""><h4>{education.institution}</h4></div>
                        <div className=""><p style={{fontSize:fontSizes.description}}>{education.degree}</p></div>
                        <div className=""><p style={{fontSize:fontSizes.description}}>Graduation year:{' '}{education.graduationYear}</p></div>
                        <div className=""><p style={{fontSize:fontSizes.description}}>gpa:{' '}{education.gpa}</p></div>

                            </ListItem>
                        })
                    }

                </List> */}

                {data.education.map((education, i) => {
                  return (
                    <div key={i} className="">
                      <div className="">
                        <h4  style={{fontSize:fontSizes.subheading}}>{education.institution}</h4>
                      </div>
                      <div className="">
                        <p style={{fontSize:fontSizes.description}}>{education.degree}</p>
                      </div>
                      <div className="">
                        <p style={{fontSize:fontSizes.description}}>Graduation year: {education.graduationYear}</p>
                      </div>
                      <div className="">
                        <p style={{fontSize:fontSizes.description}}>gpa: {education.gpa}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {state.Skills && (
            <div className="ATSBold-skills">
              <div className="ATSBold-subheading " style={{fontSize:fontSizes.header}}>Skills</div>
              <List
                  className="flexgap"
                as={Reorder.Group}
                values={data.skills}
                onReorder={(skills) => {
                  console.log("reorder");
                  setDataSkills(skills);
                }}
              >
                {data.skills.map((skill, i) => {
                  return (
                    <ListItem
                      key={skill.title}
                      as={Reorder.Item}
                      value={skill}
                      className=""
                    >
                      <div className="">
                        <h4  style={{fontSize:fontSizes.subheading}}>{skill.title}</h4>
                      </div>
                      <div className="">
                        <p style={{fontSize:fontSizes.description}}>{skill.content}</p>
                      </div>
                      <div style={{fontSize:fontSizes.description}} className="">{skill.more.map((more,index)=>{
                        return <div key={more} className="">{more}</div>
                      })}</div>
                    </ListItem>
                  );
                })}
              </List>
              {/* <ul className="flexgap">{
                data.skills.map((skill,i)=>{
                    return <li key={i} className="">
                 
                        <div className=""><h4>{skill.title}</h4></div>
                        <div className=""><p style={{fontSize:fontSizes.description}}>{skill.content}</p></div>
       
                    </li>
                })
            }</ul> */}
            </div>
          )}
          {state.Projects && (
            <div className="ATSBold-projects">
              <div className="ATSBold-subheading" style={{fontSize:fontSizes.header}}>Projects</div>
              <List
                  className="flexgap"
                as={Reorder.Group}
                values={data.projects}
                onReorder={(projects) => {
                  setProjects(projects);
                }}
              >
                {data.projects.map((project, i) => {
                  return (
                    <ListItem
                      key={project.title}
                      as={Reorder.Item}
                      value={project}
                      className=""
                    >
                      <div key={project.title} className="">
                        <div className="">
                          <h4  style={{fontSize:fontSizes.subheading}}>{project.title}</h4>
                        </div>
                        <div className="">
                          <p style={{fontSize:fontSizes.description}}>{project.description}</p>
                        </div>
                        <div className="">
                          <p style={{fontSize:fontSizes.description}}>Technologies: {project.technologies.join(", ")}</p>
                        </div>
                        <div className="">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Project Link
                          </a>
                        </div>
                      </div>
                    </ListItem>
                  );
                })}
              </List>
              {/* <div className="flexgap">{
            data.projects.map((project, i) => (
              <div key={i} className="">
                <div className=""><h4>{project.title}</h4></div>
                <div className=""><p style={{fontSize:fontSizes.description}}>{project.description}</p></div>
                <div className=""><p style={{fontSize:fontSizes.description}}>Technologies: {project.technologies.join(', ')}</p></div>
                <div className=""><a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a></div>
              </div>
            ))
          }</div> */}
            </div>
          )}

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
                        <div style={{fontSize:fontSizes.header}} className="ATSBold-subheading">{section.key}</div>

                        {section.values.map((item, index) => {
                          return (
                            <div key={index}>
                              <div className="">
                                <h4 style={{fontSize:fontSizes.subheading}}>{item.subheading}</h4>
                              </div>

                              <p style={{fontSize:fontSizes.description}} className="">{item.description}</p>
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
