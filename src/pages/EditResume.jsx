import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillDelete, AiOutlineDown, AiOutlineUp } from "react-icons/ai";

import ModernResume from "../components/Resumes/ModernResume/ModernResume";

import { MdAdd } from "react-icons/md";

import ATSBold from "../components/Resumes/ATSBold/ATSBold";
import ResumeControls from "../components/ResumeControls/ResumeControls";
import { IoAdd } from "react-icons/io5";
import { CgReorder } from "react-icons/cg";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import { useLocation, useParams } from "react-router";

const EditResume = () => {
  const gradientColor = useColorModeValue(
    "linear(to-r, black, blue.900)",
    "linear(to-r, black, blue.900)"
  );
  const params = useParams();
  const { type } = params;
  const location = useLocation();
  const { image, single } = location.state;

  const [data, setData] = useState(
    {
      "name": "John Doe",
      "role": "Software Engineer",
      "profileDescription": "Passionate software engineer with extensive experience in developing scalable web applications and software solutions. Skilled in a variety of programming languages and frameworks, with a strong focus on user-centric design and robust back-end architecture. Proven ability to lead projects and work effectively in team environments.",
      "contact": {
          "address": "1234 Elm Street, Springfield, IL 62704",
          "email": "john.doe@example.com",
          "phone": "555-123-4567",
          "linkedin": "https://www.linkedin.com/in/johndoe"
      },
      "skills": [
          {
              "title": "Programming Languages",
              "content": "Python, JavaScript, C++, Java",
              "more": []
          },
          {
              "title": "Web Development",
              "content": "React.js, Angular, Node.js, Django",
              "more": []
          },
          {
              "title": "Database Management",
              "content": "PostgreSQL, MySQL, SQLite",
              "more": []
          },
          {
              "title": "DevOps",
              "content": "AWS, Docker, Jenkins",
              "more": []
          }
      ],
      "experience": [
          {
              "role": "Software Engineer",
              "company": "Tech Solutions Inc., Chicago, IL",
              "from": "June 2019",
              "to": "Present",
              "description": "Developed and maintained web applications using React.js and Node.js.",
              "more": [
                  "Led a team of 5 developers to design and implement a new customer management system.",
                  "Improved application performance by optimizing front-end and back-end code.",
                  "Integrated third-party APIs to enhance application functionality.",
                  "Conducted code reviews and provided mentorship to junior developers.",
                  "Implemented continuous integration and deployment pipelines using Jenkins and Docker.",
                  "Collaborated with cross-functional teams to define project requirements and deliverables."
              ]
          },
          {
              "role": "Junior Software Developer",
              "company": "Web Innovations, Boston, MA",
              "from": "August 2017",
              "to": "May 2019",
              "description": "Assisted in the development of e-commerce platforms and content management systems.",
              "more": [
                  "Developed front-end components using Angular and integrated with RESTful APIs.",
                  "Performed database design and optimization for PostgreSQL and MySQL.",
                  "Participated in daily stand-up meetings and contributed to sprint planning sessions.",
                  "Wrote unit tests and performed debugging to ensure high code quality.",
                  "Collaborated with UI/UX designers to create responsive and user-friendly interfaces."
              ]
          }
      ],
      "education": [
          {
              "institution": "State University",
              "degree": "B.Sc. in Computer Science",
              "graduationYear": "2017",
              "gpa": "3.6/4.0",
              "more": []
          }
      ],
      "projects": [
          {
              "title": "Task Management App",
              "description": "Developed a web-based task management application with real-time collaboration features. Implemented user authentication, task assignment, and progress tracking functionalities.",
              "technologies": "React.js, Node.js, MongoDB",
              "link": "https://github.com/johndoe/task-manager",
              "more": [
                  "Real-time collaboration features using WebSocket.",
                  "User authentication and authorization.",
                  "Task assignment and progress tracking.",
                  "Responsive design for mobile and desktop platforms."
              ]
          },
          {
              "title": "Weather Forecasting App",
              "description": "Created a weather forecasting application that provides real-time weather updates and alerts. Integrated with third-party weather APIs and implemented a user-friendly interface.",
              "technologies": "Angular, Express.js, SQLite",
              "link": "https://github.com/johndoe/weather-app",
              "more": [
                  "Integration with third-party weather APIs.",
                  "Real-time weather updates and alerts.",
                  "User-friendly interface with responsive design.",
                  "Data caching and offline access using service workers."
              ]
          }
      ],
      "certifications": [
          {
              "title": "Certified Scrum Master (CSM)",
              "more": []
          },
          {
              "title": "AWS Certified Solutions Architect",
              "more": []
          }
      ],
      "technicalProficiencies": [
          {
              "title": "Languages",
              "content": "Python, JavaScript, C++, Java",
              "more": []
          },
          {
              "title": "Frameworks",
              "content": "React.js, Angular, Django, Express.js",
              "more": []
          },
          {
              "title": "Databases",
              "content": "PostgreSQL, MySQL, SQLite, MongoDB",
              "more": []
          },
          {
              "title": "Tools",
              "content": "Git, Docker, Jenkins, Kubernetes",
              "more": []
          },
          {
              "title": "Cloud Services",
              "content": "AWS, Azure, Google Cloud",
              "more": []
          }
      ],
      "professionalDevelopment": [
          {
              "title": "Courses",
              "content": "Completed online courses on machine learning and cloud computing.",
              "more": []
          },
          {
              "title": "Workshops",
              "content": "Attended workshops on microservices architecture and serverless computing.",
              "more": []
          }
      ],
      "additionalInformation": [
          {
              "title": "Relocation and Remote Work",
              "content": "Open to relocation and remote work options.",
              "more": []
          },
          {
              "title": "Languages",
              "content": "Fluent in English and Spanish.",
              "more": []
          }
      ],
      "references": [
          {
              "title": "References",
              "content": "Available upon request.",
              "more": []
          }
      ],
      "links": [
          {
              "key": "Portfolio",
              "value": "https://johndoe-portfolio.com",
              "more": []
          },
          {
              "key": "LinkedIn",
              "value": "https://www.linkedin.com/in/johndoe",
              "more": []
          },
          {
              "key": "GitHub",
              "value": "https://github.com/johndoe",
              "more": []
          }
      ],
      "custom": [],
      "customLeft": []
  }
  
  
);
  console.log(data)
  const [state, setState] = useState({
    Image: false,
    Contact: true,
    Profile: true,
    Experience: true,
    Education: true,

    Skills: true,

    Projects: true,
    Links:true,
    customKeys: [], // Initialize custom keys array
  });

  // const sections = [{image:true},{education:true}]
  //console.log(state)

  const [customKey, setCustomKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isReordering, setIsReordering] = useState(false);

  const [heightVal, setHeightVal] = useState(25);
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
  const [isContactExpanded, setIsContactExpanded] = useState(false);
  const [isEducationExpanded, setIsEducationExpanded] = useState(false);
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(true);
  const [isLinksExpanded, setIsLinksExpanded] = useState(true);
  const [selectedFont, setSelectedFont] = useState("Arial, sans-serif");
  const [fontSizes, setFontSizes] = useState({
    heading: "",
    description: "",
    subheading: "",
    name: "",
  });

  const [sections, setSections] = useState([]);
  const [order, setOrder] = useState([]);
  const handleCheckboxChange = (key) => {
    setState((prevState) => {
      if (key in prevState) {
        return {
          ...prevState,
          [key]: !prevState[key],
        };
      } else {
        // If key is a custom key, toggle its value
        const customKeys = prevState.customKeys.map((custom) => {
          if (custom.key === key) {
            return {
              ...custom,
              value: !custom.value,
            };
          }
          return custom;
        });
        return {
          ...prevState,
          customKeys,
        };
      }
    });
  };

  const handleAddCustomKeyL = () => {
    if (customKey && !state.customKeys.find((item) => item.key === customKey)) {
      setState((prevState) => ({
        ...prevState,
        customKeys: [...prevState.customKeys, { key: customKey, value: true }],
      }));
      setData({
        ...data,
        custom: [
          ...data.custom,
          {
            key: customKey,
            values: [{ subheading: "", description: "" }],
            side: "L",
          },
        ],
      });
      setCustomKey("");
      setIsOpen(false);
    }
  };
  const handleAddCustomKey = () => {
    if (customKey && !state.customKeys.find((item) => item.key === customKey)) {
      setState((prevState) => ({
        ...prevState,
        customKeys: [...prevState.customKeys, { key: customKey, value: true }],
      }));
      setData({
        ...data,
        custom: [
          ...data.custom,
          {
            key: customKey,
            side: "R",
            values: [{ subheading: "", description: "" }],
          },
        ],
      });
      setSections([...sections, { key: sections.length, value: customKey }]);
      setCustomKey("");

      setIsOpen(false);
    }
  };

  useEffect(() => {
    const a = [];
    const res = Object.keys(state).map((key, index) => {
      if (key !== "customKeys") {
        a.push(index);
        return { key: index, value: key };
      }
      //  return {key:"key",value:"value"}
    });
    setSections(res);
  }, []);

  useEffect(() => {
    const a = [];
    sections.map((item) => {
      if (item) a.push(item.key);
    });
    setOrder(a);
  }, [sections]);

  const addSection = (sec) => {
    setSections({ ...sections, sec });
  };

  const toggleSkillsExpand = () => {
    setIsSkillsExpanded(!isSkillsExpanded);
  };

  const toggleExperienceExpand = () => {
    setIsExperienceExpanded(!isExperienceExpanded);
  };

  const toggleContactExpand = () => {
    setIsContactExpanded(!isContactExpanded);
  };

  const toggleEducationExpand = () => {
    setIsEducationExpanded(!isEducationExpanded);
  };

  const toggleProjectsExpand = ()=>{
    setIsProjectsExpanded(!isProjectsExpanded)
  }

  const deleteSkill = (i) => {
    data.skills.splice(i, 1);
    setData({ ...data });
  };

  const addSkill = () => {
    setData({
      ...data,
      skills: [...data.skills, { title: "", content: "", more: [] }],
    });
  };
  const setDataSkills = (skills) => {
    setData({ ...data, skills: [...skills] });
  };

  const setEducation = (edu) => {
    setData({ ...data, education: edu });
  };

  const setExperience = (experience) => {
    setData({ ...data, experience: experience });
  };

  const setLinks = (links)=>{
    setData({ ...data, links: links });

  }
  const setProjects = (projects) => {
    setData({ ...data, projects: projects });
  };

  return (
    <Box bgGradient={gradientColor}>
      <Box p={"0.5rem"}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          alignItems="center"
          justifyContent={"center"}
        >
          <Flex
            alignItems="center"
            justifyContent={"center"}
            flexWrap={"wrap"}
            gap={"0.2rem"}
          >
            {Object.keys(state).map((key, index) => {
              if (key !== "customKeys") {
                return (
                  <Flex
                  border={"1px solid #6B7280"}
                    boxShadow={
                      "0 8px 12px -4px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.06)"
                    }
                    borderRadius={"0.75rem"}
                    paddingY={"0.05rem"}
                    paddingX={"1rem"}
                    key={index}
                    alignItems="center"
                    transition="all 0.3s"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow:
                        "0 12px 20px -4px rgba(0, 0, 0, 0.15), 0 6px 12px -2px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Checkbox
                      isChecked={state[key]}
                      onChange={() => handleCheckboxChange(key)}
                      colorScheme="teal"
                      size="lg"
                    />
                    <Text ml={2} fontWeight={state[key] ? "bold" : "normal"}>
                      {key}
                    </Text>
                  </Flex>
                );
              }
              return null;
            })}
            {state.customKeys.map((item, index) => (
              <Flex
                border={"1px solid #6B7280"}
                boxShadow={
                  "0 8px 12px -4px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.06)"
                }
                borderRadius={"0.75rem"}
                paddingY={"0.05rem"}
                paddingX={"1rem"}
                key={index}
                alignItems="center"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow:
                    "0 12px 20px -4px rgba(0, 0, 0, 0.15), 0 6px 12px -2px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Checkbox
                  isChecked={item.value}
                  onChange={() => handleCheckboxChange(item.key)}
                  colorScheme="teal"
                  color={'black'}
                  size="lg"
                />
                <Text ml={3} fontWeight={item.value ? "bold" : "normal"}>
                  {item.key}
                </Text>
              </Flex>
            ))}
          </Flex>

          <Flex alignItems="center">
            <Button
              onClick={() => setIsOpen(true)}
              bgGradient="linear(to-r, teal.500, teal.600)"
              color="white"
              borderRadius="full"
              px={6}
              py={3}
              boxShadow="xl"
              _hover={{
                bgGradient: "linear(to-r, teal.600, teal.700)",
              }}
              _active={{
                transform: "scale(0.95)",
              }}
            >
              <Flex alignItems="center">
                <Icon as={MdAdd} boxSize={6} mr={2} />
                Add Custom Section
              </Flex>
            </Button>
            <Button
              onClick={() => setIsReordering(true)}
              borderRadius={"1.5rem"}
              bg={'#1A202C'}
              color={'white'}
              _hover={{
                bg:'#002244'
              }}
            >
              {" "}
              <Flex alignItems={"center"} gap={"0.4rem"}>
                <Text>Reorder Sections</Text>
                <CgReorder />
              </Flex>
            </Button>
          </Flex>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Custom Section</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
             <Input
                         border={'1px solid #1D1D1D'}

                  value={customKey}
                  onChange={(e) => setCustomKey(e.target.value)}
                  placeholder="Enter custom key"
                />
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleAddCustomKeyL} colorScheme="teal">
                  Add to Left
                </Button>
                <Button onClick={handleAddCustomKey} colorScheme="teal">
                  Add to Right
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal isOpen={isReordering} onClose={() => setIsReordering(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Reorder sections</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex
                  flexDirection={"column"}
                  alignItems="center"
                  justifyContent={"center"}
                  flexWrap={"wrap"}
                  gap={"0.6rem"}
                >
                  <List
                    as={Reorder.Group}
                    values={sections}
                    onReorder={(s) => {
                      setSections(s);
                    }}
                  >
                    {sections.map((key, index) => {
                      if (key) {
                        return (
                          <ListItem
                            key={key?.key}
                            as={Reorder.Item}
                            value={key}
                          >
                            <Flex
                              border={"1px solid #ccc"}
                              boxShadow={
                                "0 8px 12px -4px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.06)"
                              }
                              borderRadius={"0.75rem"}
                              paddingY={"0.05rem"}
                              paddingX={"1rem"}
                              key={index}
                              alignItems="center"
                              transition="all 0.3s"
                              _hover={{
                                transform: "translateY(-2px)",
                                boxShadow:
                                  "0 12px 20px -4px rgba(0, 0, 0, 0.15), 0 6px 12px -2px rgba(0, 0, 0, 0.1)",
                              }}
                            >
                              {/* <Checkbox
             isChecked={state[key]}
             onChange={() => handleCheckboxChange(key)}
             colorScheme="teal"
             size="lg"
           /> */}
                              <Text ml={2}>{key?.value}</Text>
                            </Flex>
                          </ListItem>
                        );
                      }
                      return null;
                    })}
                  </List>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={() => setIsReordering(false)}
                  colorScheme="teal"
                >
                  Done
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>

        <ResumeControls
          setFontSizes={setFontSizes}
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
          save={() => {}}
        />
      </Box>
      <Flex flexDirection={{ base: "column", md: "column", lg: "row" }}>
        <Box
          minW={"40%"}
          border={"1px solid #616161"}
          m="1rem"
          p={"2rem"}
          borderRadius={"1rem"}
          flex="1"
          pr={{ base: 0, lg: "2rem" }}
          mb={{ base: "1rem", lg: 0 }}
          display={'flex'}
          flexDirection={'column'}
          gap={'1rem'}
        >
          <Heading fontSize={{ base: "", md: "2rem" }} as="h2" mb="2rem">
            Edit Your Resume
          </Heading>

        

          <Box mb="2rem">
          <Text as="h5" mb="">
            name
          </Text>
         <Input
                     border={'1px solid #1D1D1D'}

        
              value={data.name}
              placeholder="Name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </Box>

          <Box mb="2rem">
          <Text as="h5" mb="">
            job role
          </Text>
         <Input
                     border={'1px solid #1D1D1D'}

              value={data.role}
              placeholder="Role"
              onChange={(e) => setData({ ...data, role: e.target.value })}
            />
          </Box>

       <Box>
       <Text as="h5" mb="">
            Profile Description
          </Text>
          <Textarea
            onChange={(e) =>
              setData({ ...data, profileDescription: e.target.value })
            }
            value={data.profileDescription}
            mb="2rem"
          />
       </Box>

          <Box  px={'0.5rem'}  bgGradient="linear(to-r,black,blue.900)"  borderRadius={"0.7rem"}>
            <Flex
              cursor={"pointer"}
              p={"8px"}
              borderRadius={"10px"}
              w={"full"}
              justify={"space-between"}
              alignItems="center"
              mb="1rem"
              onClick={toggleSkillsExpand}
            >
              <Text as="h3" mr="1rem">
                Skills
              </Text>
              {isSkillsExpanded ? (
                <AiOutlineUp onClick={toggleSkillsExpand} cursor="pointer" />
              ) : (
                <AiOutlineDown onClick={toggleSkillsExpand} cursor="pointer" />
              )}
            </Flex>
            {isSkillsExpanded && (
              <Box w={"full"}>
                {data.skills.map((item, index) => (
                  <Flex
                    key={index}
                    mb="1rem"
                    justifyContent={"space-between"}
                    w={"full"}
                  >
                    <Flex
                     bgGradient="linear(to-r,black,blue.900)" boxShadow={'lg'} p={"0.5rem"}
                      flexDirection={"column"}
                      gap={"0.3rem"}
                      w={"full"}
                      px={"0.5rem"}
                    >
                      {/* Input for skill title */}
                   <Input
                               border={'1px solid #1D1D1D'}

                        value={item.title}
                        onChange={(e) =>
                          setData({
                            ...data,
                            skills: data.skills.map((skill, i) =>
                              i === index
                                ? { ...skill, title: e.target.value }
                                : skill
                            ),
                          })
                        }
                        placeholder="Skill"
                        mr="1rem"
                      />
                      {/* Input for skill description */}
                   <Input
                               border={'1px solid #1D1D1D'}

                        value={item.content}
                        onChange={(e) =>
                          setData({
                            ...data,
                            skills: data.skills.map((skill, i) =>
                              i === index
                                ? { ...skill, content: e.target.value }
                                : skill
                            ),
                          })
                        }
                        placeholder="Description"
                        mr="1rem"
                      />
                      {item.more.map((field, fieldIndex) => (
                     <Input
                                 border={'1px solid #1D1D1D'}

                          key={fieldIndex}
                          value={field}
                          placeholder="More info"
                          onChange={(e) =>
                            setData((prevData) => ({
                              ...prevData,
                              skills: prevData.skills.map((sk, j) =>
                                j === index
                                  ? {
                                      ...sk,
                                      more: sk.more.map((more, k) =>
                                        k === fieldIndex ? e.target.value : more
                                      ),
                                    }
                                  : sk
                              ),
                            }))
                          }
                        />
                      ))}
                      <Flex
                        onClick={() =>
                          setData((prevData) => ({
                            ...prevData,
                            skills: prevData.skills.map((skill, i) =>
                              i === index
                                ? { ...skill, more: [...skill.more, ""] }
                                : skill
                            ),
                          }))
                        }
                        cursor={"pointer"}
                        justifyContent={"center"}
                        borderRadius={"1rem"}
                        backgroundColor={"gray.600"}
                        alignItems={"center"}
                        gap={"0.2rem"}
                      >
                        <Text>Add More</Text> <IoAdd />
                      </Flex>
                    </Flex>
                    {/* Delete button for skill */}
                    <Box>
                      <AiFillDelete
                        size={24}
                        onClick={() => deleteSkill(index)}
                        cursor="pointer"
                      />
                    </Box>
                  </Flex>
                ))}
                <Button onClick={addSkill} mb="2rem">
                  Add New Skill
                </Button>
              </Box>
            )}
          </Box>
          <Box    bgGradient="linear(to-r,black,blue.900)" border={"3px solid #132744"} p={"0.5rem"} borderRadius={"0.7rem"}>
            <Flex
              cursor={"pointer"}
              p={"8px"}
              borderRadius={"10px"}
              w={"full"}
              justify={"space-between"}
              align="center"
              onClick={toggleExperienceExpand}
            >
              <Text as="h3" mr="1rem">
                Experience
              </Text>
              {isExperienceExpanded ? (
                <AiOutlineUp
                  onClick={toggleExperienceExpand}
                  cursor="pointer"
                />
              ) : (
                <AiOutlineDown
                  onClick={toggleExperienceExpand}
                  cursor="pointer"
                />
              )}
            </Flex>
            {isExperienceExpanded && (
              <Box>
                {data.experience.map((item, index) => (
                  <Flex key={index} mb="1rem" alignItems="center">
                    <Flex boxShadow='md'   borderRadius={'0.2rem'} p={'0.4rem'} bgGradient="linear(to-r, gray.900,black,blue.900)" flexDirection={"column"} gap={"0.5rem"} w={"full"} >
                      {/* Input for experience role */}
                   <Input
                               border={'1px solid #1D1D1D'}

                        value={item.role}
                        onChange={(e) =>
                          setData({
                            ...data,
                            experience: data.experience.map((exp, i) =>
                              i === index
                                ? { ...exp, role: e.target.value }
                                : exp
                            ),
                          })
                        }
                        placeholder="Role"
                        mr="1rem"
                      />
                      {/* Input for experience description */}
                   <Input
                               border={'1px solid #1D1D1D'}

                        value={item.description}
                        onChange={(e) =>
                          setData({
                            ...data,
                            experience: data.experience.map((exp, i) =>
                              i === index
                                ? { ...exp, description: e.target.value }
                                : exp
                            ),
                          })
                        }
                        placeholder="Description"
                        mr="1rem"
                      />
                   <Input
                               border={'1px solid #1D1D1D'}
      placeholder="from"

                        value={item.from}
                        onChange={(e) =>
                          setData((prevData) => {
                            const newData = { ...prevData };
                            newData.experience[index].from = e.target.value;
                            return newData;
                          })
                        }
                      />
                   <Input
                               border={'1px solid #1D1D1D'}

                      placeholder="to"
                        value={item.to}
                        onChange={(e) =>
                          setData((prevData) => {
                            const newData = { ...prevData };
                            newData.experience[index].to = e.target.value;
                            return newData;
                          })
                        }
                      />
                      {item.more.map((field, fieldIndex) => (
                     <Input
                                 border={'1px solid #1D1D1D'}

                          key={fieldIndex}
                          value={field}
                          placeholder="More info"
                          onChange={(e) =>
                            setData((prevData) => ({
                              ...prevData,
                              experience: prevData.experience.map((sk, j) =>
                                j === index
                                  ? {
                                      ...sk,
                                      more: sk.more.map((more, k) =>
                                        k === fieldIndex ? e.target.value : more
                                      ),
                                    }
                                  : sk
                              ),
                            }))
                          }
                        />
                      ))}
                      <Flex
                        onClick={() =>
                          setData((prevData) => ({
                            ...prevData,
                            experience: prevData.experience.map(
                              (experience, i) =>
                                i === index
                                  ? {
                                      ...experience,
                                      more: [...experience.more, ""],
                                    }
                                  : experience
                            ),
                          }))
                        }
                        cursor={"pointer"}
                        justifyContent={"center"}
                        borderRadius={"1rem"}
                        backgroundColor={"gray.600"}
                        alignItems={"center"}
                        gap={"0.2rem"}
                      >
                        <Text>Add More</Text> <IoAdd />
                      </Flex>
                    </Flex>
                    {/* Delete button for experience */}
                    <Box>
                      <AiFillDelete
                        size={24}
                        onClick={() => {
                          const updatedExperience = [...data.experience];
                          updatedExperience.splice(index, 1);
                          setData({ ...data, experience: updatedExperience });
                        }}
                        cursor="pointer"
                      />
                    </Box>
                  </Flex>
                ))}

                <Button
                  onClick={() =>
                    setData({
                      ...data,
                      experience: [
                        ...data.experience,
                        { role: "", description: "", more: [] },
                      ],
                    })
                  }
                  mb="2rem"
                >
                  Add New Experience
                </Button>
              </Box>
            )}
          </Box>
       
         <Box         px={'0.5rem'}  bgGradient="linear(to-r,black,blue.900)" borderRadius={"0.7rem"}>

         <Flex
            cursor={"pointer"}
            p={"8px"}
            
           
            w={"full"}
            justify={"space-between"}
            align="center"
            mb="1rem"
            onClick={toggleContactExpand}
          >
            <Text as="h3" mr="1rem">
              Contact
            </Text>
            {isContactExpanded ? (
              <AiOutlineUp onClick={toggleContactExpand} cursor="pointer" />
            ) : (
              <AiOutlineDown onClick={toggleContactExpand} cursor="pointer" />
            )}
          </Flex>
          <AnimatePresence>
            {isContactExpanded && (
              <Collapse in={isContactExpanded} key="contact">
                <>
               <Input
                           border={'1px solid #1D1D1D'}

                    w="full"
                    value={data.contact.address}
                    onChange={(e) =>
                      setData({
                        ...data,
                        contact: { ...data.contact, address: e.target.value },
                      })
                    }
                    placeholder="Address"
                    mb="1rem"
                  />
               <Input
                           border={'1px solid #1D1D1D'}

                    w="full"
                    value={data.contact.email}
                    onChange={(e) =>
                      setData({
                        ...data,
                        contact: { ...data.contact, email: e.target.value },
                      })
                    }
                    placeholder="Email"
                    mb="1rem"
                  />
               <Input
                           border={'1px solid #1D1D1D'}

                    w="full"
                    value={data.contact.phone}
                    onChange={(e) =>
                      setData({
                        ...data,
                        contact: { ...data.contact, phone: e.target.value },
                      })
                    }
                    placeholder="Phone"
                    mb="1rem"
                  />
               <Input
                           border={'1px solid #1D1D1D'}

                    w="full"
                    value={data.contact.linkedin}
                    onChange={(e) =>
                      setData({
                        ...data,
                        contact: { ...data.contact, linkedin: e.target.value },
                      })
                    }
                    placeholder="LinkedIn"
                  />
                </>
              </Collapse>
            )}
          </AnimatePresence>
         </Box>

        <Box        px={'0.5rem'} bgGradient="linear(to-r,black,blue.900)"  borderRadius={"0.7rem"}>
        <Flex
            cursor={"pointer"}
            p={"8px"}
            borderRadius={"10px"}
            
            w={"full"}
            justify={"space-between"}
            align="center"
            mb="1rem"
            onClick={toggleEducationExpand}
          >
            <Text as="h3" mr="1rem">
              Education
            </Text>
            {isEducationExpanded ? (
              <AiOutlineUp onClick={toggleEducationExpand} cursor="pointer" />
            ) : (
              <AiOutlineDown onClick={toggleEducationExpand} cursor="pointer" />
            )}
          </Flex>
          {isEducationExpanded && (
            <Box>
              {data.education.map((item, index) => (
                <Flex key={index} mb="1rem" alignItems="center">
                  {/* Input for education institution */}
               <Input
                           border={'1px solid #1D1D1D'}

                    value={item.institution}
                    onChange={(e) =>
                      setData({
                        ...data,
                        education: data.education.map((edu, i) =>
                          i === index
                            ? { ...edu, institution: e.target.value }
                            : edu
                        ),
                      })
                    }
                    placeholder="Institution"
                    mr="1rem"
                  />
                  {/* Input for education degree */}
               <Input
                           border={'1px solid #1D1D1D'}

                    value={item.degree}
                    onChange={(e) =>
                      setData({
                        ...data,
                        education: data.education.map((edu, i) =>
                          i === index ? { ...edu, degree: e.target.value } : edu
                        ),
                      })
                    }
                    placeholder="Degree"
                    mr="1rem"
                  />
                  {/* Input for education graduation year */}
               <Input
                           border={'1px solid #1D1D1D'}

                    value={item.graduationYear}
                    onChange={(e) =>
                      setData({
                        ...data,
                        education: data.education.map((edu, i) =>
                          i === index
                            ? { ...edu, graduationYear: e.target.value }
                            : edu
                        ),
                      })
                    }
                    placeholder="Graduation Year"
                    mr="1rem"
                  />
                  {/* Delete button for education */}
                  <Box>
                    <AiFillDelete
                      size={24}
                      onClick={() => {
                        const updatedEducation = [...data.education];
                        updatedEducation.splice(index, 1);
                        setData({ ...data, education: updatedEducation });
                      }}
                      cursor="pointer"
                    />
                  </Box>
                </Flex>
              ))}
              <Button
                onClick={() =>
                  setData({
                    ...data,
                    education: [
                      ...data.education,
                      { institution: "", degree: "", graduationYear: "" },
                    ],
                  })
                }
                mb="2rem"
              >
                Add New Education
              </Button>
            </Box>
          )}
        </Box>

          <Box             bgGradient="linear(to-r,black,blue.900)"
  borderRadius={'0.5rem'} padding={'0.5rem'}>
            <Flex
            cursor={"pointer"}
         
            borderRadius={"0.7rem"}
            px={'0.5rem'}
            
           
            w={"full"}
            justify={"space-between"}
            align="center"
            mb="1rem"
            onClick={toggleProjectsExpand}
          >
            <Text as="h3" mr="1rem">
              Projects
            </Text>
            {isProjectsExpanded ? (
              <AiOutlineUp onClick={toggleProjectsExpand} cursor="pointer" />
            ) : (
              <AiOutlineDown onClick={toggleProjectsExpand} cursor="pointer" />
            )}
          </Flex>
          {isProjectsExpanded && (
            <Box
            >
              {data.projects.map((project, index) => (
                <Flex key={index}>
                <Flex        boxShadow='md'   borderRadius={'0.2rem'} p={'0.4rem'} bgGradient="linear(to-r, gray.900,black,blue.900)" gap={'0.5rem'} w={'full'}  mb="1rem" alignItems="center" flexDirection={'column'}>
                  {/* Input for education institution */}
               <Input
                           border={'1px solid #1D1D1D'}

                  onChange={
                    (e)=>{
                      const newProjects = [...data.projects]
                      newProjects[index].title = e.target.value;
                        setData( (prevState)=>({
                          ...prevState,
                          projects:newProjects
                         }))
                  }
                  
                  }
                    value={project.title}
                
                    placeholder="title"
                  
                  />
                  {/* Input for education degree */}
               <Input
                           border={'1px solid #1D1D1D'}

                     onChange={
                      (e)=>{
                        const newProjects = [...data.projects]
                        newProjects[index].description = e.target.value;
                          setData( (prevState)=>({
                            ...prevState,
                            projects:newProjects
                           }))
                    }
                    
                    }
                    value={project.description}
                
                    placeholder="description"
                   
                  />
                  {/* Input for education graduation year */}
               <Input
                           border={'1px solid #1D1D1D'}

                    value={project.technologies}
                    onChange={
                      (e)=>{
                        const newProjects = [...data.projects]
                        newProjects[index].technologies = e.target.value;
                          setData( (prevState)=>({
                            ...prevState,
                            projects:newProjects
                           }))
                    }
                    
                    }
                
                    placeholder="technologies coma separated"
                   
                  />
                  <Input
                              border={'1px solid #1D1D1D'}

                    value={project.link}
                
                    placeholder="project link"
                    onChange={
                      (e)=>{
                        const newProjects = [...data.projects]
                        newProjects[index].link = e.target.value;
                          setData( (prevState)=>({
                            ...prevState,
                            projects:newProjects
                           }))
                    }}
                  />
                    {project.more.map((field, fieldIndex) => (
                     <Input
                                 border={'1px solid #1D1D1D'}

                          key={fieldIndex}
                          value={field}
                          placeholder="More info"
                          onChange={(e) =>
                            setData((prevData) => ({
                              ...prevData,
                              projects: prevData.projects.map((sk, j) =>
                                j === index
                                  ? {
                                      ...sk,
                                      more: sk.more.map((more, k) =>
                                        k === fieldIndex ? e.target.value : more
                                      ),
                                    }
                                  : sk
                              ),
                            }))
                          }
                        />
                      ))}
                     <Flex
                        onClick={() =>
                          setData((prevData) => ({
                            ...prevData,
                            projects: prevData.projects.map((project, i) =>
                              i === index
                                ? { ...project, more: [...project.more, ""] }
                                : project
                            ),
                          }))
                        }
                        cursor={"pointer"}
                        justifyContent={"center"}
                        borderRadius={"1rem"}
                        backgroundColor={"gray.600"}
                        alignItems={"center"}
                        gap={"0.2rem"}
                        w={'full'}
                      >
                        <Text>Add More</Text> <IoAdd />
                      </Flex>
                  {/* Delete button for education */}
              
                </Flex>
                    <Box>
                    <AiFillDelete
                      size={24}
                    
                      cursor="pointer"
                    />
                  </Box>
                  </Flex>
              ))}
              <Button
                onClick={() =>
                  setData({
                    ...data,
                    projects: [
                      ...data.projects,
                      { technologies: "", title: "", description: "" , more:[],link:"" },
                    ],
                  })
                }
                mb="2rem"
              >
                Add New Project
              </Button>
            </Box>
          )}
          
          </Box>

          
          <Box             bgGradient="linear(to-r,black,blue.900)"
  borderRadius={'0.5rem'} padding={'0.5rem'}>
            <Flex
            cursor={"pointer"}
         
            borderRadius={"0.7rem"}
            px={'0.5rem'}
            
           
            w={"full"}
            justify={"space-between"}
            align="center"
            mb="1rem"
            onClick={toggleProjectsExpand}
          >
            <Text as="h3" mr="1rem">
              Links
            </Text>
            {isProjectsExpanded ? (
              <AiOutlineUp onClick={toggleProjectsExpand} cursor="pointer" />
            ) : (
              <AiOutlineDown onClick={toggleProjectsExpand} cursor="pointer" />
            )}
          </Flex>
          {isProjectsExpanded && (
            <Box
            >
              {data.links.map((link, index) => (
                <Flex key={index}>
                <Flex        boxShadow='md'   borderRadius={'0.2rem'} p={'0.4rem'} bgGradient="linear(to-r, gray.900,black,blue.900)" gap={'0.5rem'} w={'full'}  mb="1rem" alignItems="center" flexDirection={'column'}>
                  {/* Input for education institution */}
               <Input
                           border={'1px solid #1D1D1D'}

                  onChange={
                    (e)=>{
                      const newLinks = [...data.links]
                      newLinks[index].key = e.target.value;
                        setData( (prevState)=>({
                          ...prevState,
                          links:newLinks
                         }))
                  }
                  
                  }
                    value={link.key}
                
                    placeholder="link title"
                  
                  />
                  {/* Input for education degree */}
               <Input
                           border={'1px solid #1D1D1D'}

                     onChange={
                      (e)=>{
                        const newLinks = [...data.links]
                        newLinks[index].value = e.target.value;
                          setData( (prevState)=>({
                            ...prevState,
                            links:newLinks
                           }))
                    }
                    
                    }
                    value={link.value}
                
                    placeholder="description"
                   
                  />
                  {/* Input for education graduation year */}
                
                  
                    {link.more.map((field, fieldIndex) => (
                     <Input
                                 border={'1px solid #1D1D1D'}

                          key={fieldIndex}
                          value={field}
                          placeholder="More info"
                          onChange={(e) =>
                            setData((prevData) => ({
                              ...prevData,
                              links: prevData.links.map((sk, j) =>
                                j === index
                                  ? {
                                      ...sk,
                                      more: sk.more.map((more, k) =>
                                        k === fieldIndex ? e.target.value : more
                                      ),
                                    }
                                  : sk
                              ),
                            }))
                          }
                        />
                      ))}
                     <Flex
                        onClick={() =>
                          setData((prevData) => ({
                            ...prevData,
                            links: prevData.links.map((link, i) =>
                              i === index
                                ? { ...link, more: [...link.more, ""] }
                                : link
                            ),
                          }))
                        }
                        cursor={"pointer"}
                        justifyContent={"center"}
                        borderRadius={"1rem"}
                        backgroundColor={"gray.600"}
                        alignItems={"center"}
                        gap={"0.2rem"}
                        w={'full'}
                      >
                        <Text>Add More</Text> <IoAdd />
                      </Flex>
                  {/* Delete button for education */}
              
                </Flex>
                    <Box>
                    <AiFillDelete
                      size={24}
                    
                      cursor="pointer"
                    />
                  </Box>
                  </Flex>
              ))}
              <Button
                onClick={() =>
                  setData({
                    ...data,
                    links: [
                      ...data.links,
                      {key:"",value:"",more:[] },
                    ],
                  })
                }
                mb="2rem"
              >
                Add New Link
              </Button>
            </Box>
          )}
          
          </Box>
          
          

          {/* custom section */}
          {data.custom.map((customItem, customIndex) => (
            <Box key={customIndex} mb="2rem">
           <Input
                       border={'1px solid #1D1D1D'}

                value={customItem.key}
                onChange={(e) => {
                  const updatedCustom = [...data.custom];
                  updatedCustom[customIndex].key = e.target.value;

                  const updatedCustomKeys = [...state.customKeys];
                  updatedCustomKeys[customIndex] = {
                    key: e.target.value,
                    value: state.customKeys[customIndex].value,
                  };

                  setState({
                    ...state,
                    customKeys: updatedCustomKeys,
                  });

                  setData({ ...data, custom: updatedCustom });
                }}
                placeholder="Custom Section Title"
                mb="1rem"
              />
              {customItem.values.map((valueItem, valueIndex) => (
                <Box key={valueIndex} mb="1rem">
               <Input
                           border={'1px solid #1D1D1D'}

                    value={valueItem.subheading}
                    onChange={(e) => {
                      const updatedCustom = [...data.custom];
                      updatedCustom[customIndex].values[valueIndex].subheading =
                        e.target.value;
                      setData({ ...data, custom: updatedCustom });
                    }}
                    placeholder="Subheading"
                    mb="0.5rem"
                  />
                  <Textarea
                    value={valueItem.description}
                    onChange={(e) => {
                      const updatedCustom = [...data.custom];
                      updatedCustom[customIndex].values[
                        valueIndex
                      ].description = e.target.value;
                      setData({ ...data, custom: updatedCustom });
                    }}
                    placeholder="Description"
                  />
                </Box>
              ))}
              {/* Button to add a new record within a custom section */}
              <Button
                onClick={() => {
                  const updatedCustom = [...data.custom];
                  updatedCustom[customIndex].values.push({
                    subheading: "",
                    description: "",
                  });
                  setData({ ...data, custom: updatedCustom });
                }}
                mb="2rem"
              >
                Add New Record
              </Button>
            </Box>
          ))}

          {/* Button to add new record within custom key */}
       
          {/* Input fields for contact details */}
        </Box>

        <Box overflow={"auto"}>
          <Box mx={"2rem"} overflow={"auto"}>
            {/* <Resume data={data}/> */}

            {JSON.stringify(type) === JSON.stringify("atsbold") && (
              <ATSBold
                state={state}
                setExperience={setExperience}
                data={data}
                headerLength={heightVal}
                setDataSkills={setDataSkills}
                setEducation={setEducation}
                setProjects={setProjects}
                fontSizes={fontSizes}
                selectedFont={selectedFont}
                order={order}
                setLinks={setLinks}
              />
            )}

            {JSON.stringify(type) === JSON.stringify("modern") && (
              <ModernResume
                fontSizes={fontSizes}
                state={state}
                setExperience={setExperience}
                data={data}
                headerLength={heightVal}
                setDataSkills={setDataSkills}
                setEducation={setEducation}
                setProjects={setProjects}
                selectedFont={selectedFont}
                order={order}
                setLinks
              />
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default EditResume;
