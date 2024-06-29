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
      "name": "Gurpreet Singh",
      "role": "Full Stack Developer",
      "profileDescription": "Creative problem solver with in-depth knowledge of front-end technologies (HTML5, CSS3, JavaScript, React.js) and back-end technologies (Node.js, Express.js, Java, SQL). Proficient in designing, developing, and maintaining websites and web tools. Experienced in collaborating with cross-functional teams and taking the lead on new innovations and projects.",
      "contact": {
          "address": "Address: Hoshiarpur, Punjab 146113",
          "email": "email: gurpreetthiara221098@gmail.com",
          "phone": "Mobile: 8872269487",
          "linkedin": "https://www.linkedin.com/in/gurpreetsthiara"
      },
      "skills": [
          {
              "title": "Front-end Development",
              "content": "HTML5, CSS3, JavaScript, React.js, Flutter",
              "more": []
          },
          {
              "title": "Back-end Development",
              "content": "Express.js, Java Spring Boot, Node.js",
              "more": []
          },
          {
              "title": "Database Management",
              "content": "MongoDB, Firebase, MySQL",
              "more": []
          },
          {
              "title": "DevOps",
              "content": "Git and GitHub basics, Docker basics",
              "more": []
          }
      ],
      "experience": [
          {
              "role": "Full Stack Developer",
              "company": "Kreativan Technologies, Chandigarh",
              "from": "March 2022",
              "to": "Present",
              "description":  "Implemented server-side logic using Node.js and Express.js.",
              "more": [
               
                "Designed and maintained RESTful APIs for data exchange between front-end and back-end systems",
                "Managed databases including MySQL and MongoDB, writing complex queries, optimizing database performance, and ensuring data integrity and security.",
                " Monitored and improved application performance, achieving high availability and scalability.",
                "Assisted in implementing security protocols to protect data and systems from breaches and vulnerabilities.",
                "Collaborated with front-end developers and other team members to ensure seamless integration and project delivery.",
                "Conducted unit testing and debugging to maintain high-quality code and application reliability.",
                "Currently working on Kreativan's CRM app for managing all companies' leads, relationships, and enhancing customer interactions with advanced analytics and personalized communication features."
              ]
          }
      ],
      "education": [
          {
              "institution": "Dav University",
              "degree": "B.Tech in Computer Science",
              "graduationYear": "2022",
              "gpa": "7.86/10.0",
              "more": []
          },
          {
              "institution": "Chitkara University",
              "degree": "M.Tech in Computer Science",
              "graduationYear": "2024",
              "gpa": "9.6/10",
              "more": []
          }
      ],
      "projects": [
          {
              "title": "Free Resume Builder",
              "description": "Developed a user-friendly interface for creating resumes with real-time previews, drag-and-drop functionality, and responsive design. Utilized React.js, Chakra UI, and JavaScript. Ensured cross-browser compatibility and print-ready PDF exports. Deployed on Vercel and also deployed with Docker on Render.com.",
              "technologies": "React.js, Chakra UI, JavaScript",
              "link": "https://freeresumebuilder.vercel.app",
              "more": [
                "User-friendly interface for creating resumes",
                "Customizable templates with various design options",
                "Real-time preview of the resume during editing",
                "Drag-and-drop functionality for easy content arrangement",
                "Support for multiple sections including personal details, education, work experience, skills, and more",
                "Ability to add, edit, and delete sections and entries",
                "Responsive design ensuring compatibility across different devices",
               
                "Export resumes as PDF with selectable text using jsPDF",
            
              
                "Print-ready PDF export with professional formatting",
                "Cross-browser compatibility ensuring consistent performance",
              ]
          },
          {
              "title": "ShopSphere E-commerce Platform",
              "description": "Created a platform for users to open online shops, with features like OpenStreetMap integration and Razorpay payment processing. Developed a comprehensive admin dashboard for managing products, orders, and user engagements. Utilized Java Spring Boot, React.js, and MySQL.",
              "technologies": "Java Spring Boot, React.js, MySQL",
              "link": "https://github.com/GurpreetSThiara/ShopSphere-backend",
              "more": [
                'Users can open their online shops on this platform.',
                'Nearby users can access the shops and view shop details and available products.',
                'OpenStreetMap integration for viewing nearby shops.',
                'Sellers have the option to temporarily shut down their shops.',
                'Comprehensive admin dashboard for easy management, including CRUD operations for products, orders, and user engagements.',
                'Integration with Razorpay for payment processing.'
              ]
          }
      ],
      "certifications": [
          {
              "title": "AWS Certified Cloud Practitioner",
              "more": []
          },
          {
              "title": "Certified Kubernetes Application Developer (CKAD)",
              "more": []
          }
      ],
      "technicalProficiencies": [
          {
              "title": "Languages",
              "content": "Java, Python, Node.js, SQL",
              "more": []
          },
          {
              "title": "Frameworks",
              "content": "Express, Spring Boot, React.js, Flutter",
              "more": []
          },
          {
              "title": "Databases",
              "content": "MySQL, PostgreSQL, MongoDB, Firebase",
              "more": []
          },
          {
              "title": "Tools",
              "content": "Git, Docker, Kubernetes",
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
              "content": "Completed online courses on advanced database management and cloud computing.",
              "more": []
          },
          {
              "title": "Workshops",
              "content": "Attended workshops on secure coding practices and application performance optimization.",
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
              "content": "Fluent in English and Punjabi.",
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
              "value": "https://gurpreetthiara-portfolio.vercel.app",
              "more": []
          },
          {
            "key": "Linkedin",
            "value": "https://www.linkedin.com/in/gurpreetsthiara /",
            "more": []
        },  {
          "key": "Github",
          "value": "https://github.com/GurpreetSThiara",
          "more": []
      }
          
      ],
      "custom": [],
      "customLeft": []
  }
  
  
);
  console.log(data)
  const [state, setState] = useState({
    Image: image,
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
