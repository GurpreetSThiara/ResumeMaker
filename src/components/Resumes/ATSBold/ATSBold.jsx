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

const ATSBold = ({
  data,
  state,
  setEducation,
  setDataSkills,
  setExperience,
  setProjects,
  selectedFont,
  fontSizes,
  order
}) => {
  console.log("orderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
  console.log(order)
  console.log("orderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
  const secs = useSelector((state)=>state.resumeSections.sections);
  const dispatch = useDispatch();

  const handleDragEnd = (result) => {
    if (!result.destination) return; // Drop outside the list

    const items = Array.from(data.education);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setEducation(items);
  };

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
const keys = [1,2,3,4,5,6,7,8,9,10]
  const [x , setX] = useState([
    <Profile key={1} data={data} state={state} />,
    <Projects
    key={5}
    data={data}
    state={state}
    fontSizes={fontSizes}
    setProjects={setProjects}
  />,  <Skill
  key={4}
  data={data}
  state={state}
  fontSizes={fontSizes}
  setDataSkills={setDataSkills}
/>,<Education
          key={3}
          data={data}
          state={state}
          fontSizes={fontSizes}
          setEducation={setEducation}
        />,  <Experience
        key={2}
        data={data}
        state={state}
        fontSizes={fontSizes}
        setExperience={setExperience}
      />,])

  const [sections, setSections] = useState([
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
  ]);
  const buttonNames = ['First', 'Second', 'Third', 'Fourth'];
  const [checkedStates, setCheckedStates] = useState([false, false, false, false]);

  const handleCheckboxChange = (index) => (event) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = event.target.checked;
    setCheckedStates(newCheckedStates);
  };

 // const [reorderSections, setReorderSections] = useState(true);

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

  const reOrder = (list)=>{
    dispatch(reorderSections(list));
  }

useEffect(()=>{
  dispatch(reorderSections(z));
},[])
  return (
    <div className="">
    <Flex wrap={'wrap'} gap={'0.5rem'} py={'0.5rem'} justifyContent={'end'}>
    {/* {buttonNames.map((name, index) => (
          <Button key={index} colorScheme="teal" >
            <Checkbox
              isChecked={checkedStates[index]}
              onChange={handleCheckboxChange(index)}
              size="lg"
              colorScheme="teal"
              mr={2}
            />
            {checkedStates[index] ? `${name}` : `${name}`}
          </Button>
        ))} */}
         <Button onClick={save}>Save as PDF</Button>
      </Flex>
     
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
            <h1 className="" style={{ fontSize: fontSizes.name }}>
              {data.name.toUpperCase()}
            </h1>
            <h3>{data.role}</h3>
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
                  <p style={{ fontSize: fontSizes.description }}>
                    {data.contact.linkedin}
                  </p>
                </div>
              </div>
            )}
          </div>
{/* 
          <Box>
            <Reorder.Group axis="y" values={z} onReorder={(list)=>{reOrder(list)}}>
              {secs.map((item) => (
                <Reorder.Item key={item.key} value={item}>
                  <Box p={4} color="white" borderRadius="md" cursor="pointer">
                  {item.component}
                  </Box>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </Box> */}
          <Box
         
       
          >
            {/* {reorderSections && (
              <Reorder.Group values={x} onReorder={setX}>
                {x.map((item, index) => (
                  <Reorder.Item key={item} value={item} style={{}}>
                    <Box p={4} color="white" borderRadius="md" cursor="pointer">
                      {item.key === 4 ? (
                        <Skill
                          data={data}
                          state={state}
                          fontSizes={fontSizes}
                          setDataSkills={setDataSkills}
                        />
                      ) : item.key === 555 ? (
                        <Projects
                          key={5}
                          data={data}
                          state={state}
                          fontSizes={fontSizes}
                          setProjects={setProjects}
                        />
                      ) : item.key === 435345 ? (
                        <Experience
                          key={2}
                          data={data}
                          state={state}
                          fontSizes={fontSizes}
                          setExperience={setExperience}
                        />
                      ) : (
                        item
                      )}
                    </Box>
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            )} */}

            {(
              <>
                {z.map((item) => {
                  return (
                    <div key={item} className="">
                      {item.component}
                    </div>
                  );
                })}
              </>
            )}
          </Box>


          {/* {state.Profile && (
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
                 
                </div>
              </div>
            )
       
          }
          {state.Education && (
            <div className="ATSBold-education">
              <div className="ATSBold-subheading " style={{fontSize:fontSizes.header}}>Education</div>
              <div className="ATSBold-education-content ">
           

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
            }</ul> 
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
          }</div> 
            </div>
          )}
           */}

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
