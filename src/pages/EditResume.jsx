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
import { useParams } from "react-router";

const EditResume = () => {
  const gradientColor = useColorModeValue('linear(to-r, black, blue.900)', 'linear(to-r, black, blue.900)');
  const params = useParams();
  const {type} = params;

  const [data, setData] = useState({
    name: "John Doe",
    role: "Full Stack Developer",
    profileDescription:
      "Results-driven Full Stack Developer with [X years] of experience in designing, developing, and implementing scalable web applications. Proficient in both front-end and back-end technologies, with a strong focus on delivering high-quality code and intuitive user experiences.",
    contact: {
      address: "512 Moore Street, Indigo Valley, California",
      email: "johndoe@email.com",
      phone: "872-234-3355",
      linkedin: "linkedin of johndoe",
    },
    skills: [
      {
        more:[],
        title: "Front-end Development",
        content:
          "Proficient in HTML, CSS, and JavaScript. Experience with React.js for building interactive user interfaces.",
      },
      {
        more:[],
        title: "Back-end Development",
        content:
          "Skilled in server-side languages such as Node.js and frameworks like Express.js. Knowledge of RESTful API design.",
      },
      {
        more:[],
        title: "Database Management",
        content:
          "Familiarity with database systems such as MongoDB and SQL databases like PostgreSQL or MySQL.",
      },
      {
        more:[],
        title: "Version Control",
        content:
          "Proficient in using Git and GitHub for version control and collaboration with other developers.",
      },
    ],
    experience: [
      {
        more:[],
        from:'12 march 2022',
        to:'14 march 2024',
        role: "Front-end Developer at Company X",
        description:
          "Developed user interfaces using HTML, CSS, and JavaScript. Collaborated with designers to implement responsive designs. Utilized React.js to create interactive and dynamic web applications.",
      },
      {
        more:[],
        from:'12 march 2022',
        to:'14 march 2024',
        role: "Back-end Developer at Company Y",
        description:
          "Implemented server-side logic using Node.js and Express.js. Designed and maintained RESTful APIs for data exchange between front-end and back-end systems. Managed database systems including MongoDB and MySQL.",
      },
    ],
    education: [
      {
        more:[],
        institution: "University XYZ",
        degree: "Bachelor of Science in Computer Science",
        graduationYear: "201X",
        gpa: "3.8/4.0"
      },
      {
        more:[],
        institution: "ABC College",
        degree: "Master of Science in Software Engineering",
        graduationYear: "201Y",
        gpa: "3.8/4.0"
      },
    ],
    projects: [
        {
          more:[],
          title: "AI Chatbot",
          description: "Developed an AI-based chatbot for a capstone project, resulting in a 15% increase in customer satisfaction.",
          technologies: ["Python", "TensorFlow", "NLTK"],
          link: "https://github.com/johndoe/aichatbot"
        },
        {
          more:[],
          title: "E-commerce Platform",
          description: "Designed and implemented a scalable e-commerce platform using MERN stack.",
          technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
          link: "https://github.com/johndoe/ecommerce-platform"
        }
      ],
    custom: [],
    customLeft:[]
  });
  //console.log(data)
  const [state, setState] = useState({
    Image: true,
    Education: true,
    Profile: true,
    Contact: true,
    Experience: true,
    Skills: true,
    // Header: true,
    Projects:true,
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
  const [selectedFont, setSelectedFont] = useState('Arial, sans-serif');
  const [fontSizes,setFontSizes] = useState({
    heading:'',
    description:'',
    subheading:'',
    name:''

  }); 

  const[sections ,setSections] = useState([]);
  const [order, setOrder] = useState([])
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
            values: [{ subheading: "", description: ""}],
            side:"L" 
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
            side:"R",
            values: [{ subheading: "", description: ""
             }],
          },
        ],
      });
      setSections([...sections,{key:sections.length,value:customKey}])
      setCustomKey("");

      setIsOpen(false);
    }
  };

  useEffect(()=>{
    const a = [];
  const res =  Object.keys(state).map((key, index) => {
      if (key !== "customKeys") {
        a.push(index);
      return {key:index,value:key}

      }
 //  return {key:"key",value:"value"}
    });
    setSections(res);
  },[]);

  useEffect(()=>{
    const a = [];
    sections.map((item)=>{
      if(item)
      a.push(item.key);
    })
    setOrder(a);
  },[sections])

  const addSection = (sec)=>{
    setSections({...sections,sec})
  }

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

  const deleteSkill = (i) => {
    data.skills.splice(i, 1);
    setData({ ...data });
  };

  const addSkill = () => {
    setData({ ...data, skills: [...data.skills, { title: "", content: "" }] });
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

  const setProjects = (projects)=>{
    setData({...data,projects:projects})
  }

  return (
    <Box bgGradient={gradientColor}  >
      <Box p={"0.5rem"}>
        <Flex direction={{ base: "column", lg: "row" }} alignItems="center" justifyContent={"center"}>
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
                <Checkbox
                  isChecked={item.value}
                  onChange={() => handleCheckboxChange(item.key)}
                  colorScheme="teal"
                  size="lg"
                />
                <Text ml={3} fontWeight={item.value ? "bold" : "normal"}>
                  {item.key}
                </Text>
              </Flex>
            ))}
          </Flex>

          <Flex alignItems="center" >
     
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
            <Button onClick={()=>setIsReordering(true)} borderRadius={'1.5rem'}> <Flex alignItems={'center'} gap={'0.4rem'}><Text>Reorder</Text><CgReorder/></Flex></Button>
          </Flex>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Custom Section</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
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
                     flexDirection={'column'}
            alignItems="center"
            justifyContent={"center"}
            flexWrap={"wrap"}
            gap={"0.6rem"}
          >
            <List
               as={Reorder.Group}
            values={sections}
            onReorder={(s)=>{
              setSections(s);

            }}

            >
               {sections.map((key, index) => {
              if (key ) {
                return (
                 <ListItem key={key?.key} as={Reorder.Item} value={key}>
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
           <Text ml={2} >
             {key?.value}
           </Text>
         </Flex>
                 </ListItem>
                );
              }
              return null;
            })}
            </List>
            {sections.map((key, index) => {
              if (key !== "customKeys") {
                return (
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
                    <Text ml={2} >
                      {key?.value}
                    </Text>
                  </Flex>
                );
              }
              return null;
            })}
           
          </Flex>
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
        </Flex>

        <ResumeControls setFontSizes={setFontSizes} selectedFont={selectedFont} setSelectedFont={setSelectedFont} save={()=>{}}/>
      </Box>
      <Flex
  
        
    
        flexDirection={{ base:"column", md: "column", lg: "row" }}
      >
        <Box minW={'40%'} border={'1px solid #616161'}m="1rem" p={'2rem'} borderRadius={'1rem'} flex="1" pr={{ base: 0, lg: "2rem" }} mb={{ base: "1rem", lg: 0 }}>
          <Heading fontSize={{ base: "", md: "2rem" }} as="h2" mb="2rem">
            Edit Your Resume
          </Heading>

          <Box>
            {/* Your Slider component goes here */}
          </Box>

          <Box mb="2rem">
            <Input
              value={data.name}
              placeholder="Name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </Box>

          <Box mb="2rem">
            <Input
              value={data.role}
              placeholder="Role"
              onChange={(e) => setData({ ...data, role: e.target.value })}
            />
          </Box>

          <Text as="h3" mb="1rem">
            Profile Description
          </Text>
          <Textarea
            onChange={(e) =>
              setData({ ...data, profileDescription: e.target.value })
            }
            value={data.profileDescription}
            mb="2rem"
          />

          <Box border={'1px solid #616161'} p={'0.5rem'} borderRadius={'1rem'}>
          <Flex 
            cursor={"pointer"}
            p={"8px"}
            borderRadius={"10px"}
        
            w={"full"}
            justify={"space-between"}
            align="center"
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
            <Box  w={'full'}>
              {data.skills.map((item, index) => (
                <Flex key={index} mb="1rem"  justifyContent={'space-between'} w={'full'}>
                     <Flex flexDirection={'column'} gap={'0.3rem'} w={'full'} px={'0.5rem'} >
                            {/* Input for skill title */}
                  <Input
                
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
          cursor={'pointer'}
          justifyContent={'center'}
          borderRadius={'1rem'}
          backgroundColor={'gray.600'}
          alignItems={'center'}
          gap={'0.2rem'}
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
        <Box border={'1px solid #616161'} p={'0.5rem'} borderRadius={'1rem'}>
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
              <AiOutlineUp onClick={toggleExperienceExpand} cursor="pointer" />
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
                 <Flex flexDirection={'column'} gap={'0.5rem'} w={'full'}>
                    {/* Input for experience role */}
                    <Input
                    value={item.role}
                    onChange={(e) =>
                      setData({
                        ...data,
                        experience: data.experience.map((exp, i) =>
                          i === index ? { ...exp, role: e.target.value } : exp
                        ),
                      })
                    }
                    placeholder="Role"
                    mr="1rem"
                  />
                  {/* Input for experience description */}
                  <Input
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
                  <Input value={item.from}  onChange={(e) => setData(prevData => {
    const newData = { ...prevData };
    newData.experience[index].from = e.target.value;
    return newData;
  })}/>
                  <Input value={item.to}   onChange={(e) => setData(prevData => {
    const newData = { ...prevData };
    newData.experience[index].to = e.target.value;
    return newData;
  })} />
                   {item.more.map((field, fieldIndex) => (
          <Input
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
              experience: prevData.experience.map((experience, i) =>
                i === index
                  ? { ...experience, more: [...experience.more, ""] }
                  : experience
              ),
            }))
          }
          cursor={'pointer'}
          justifyContent={'center'}
          borderRadius={'1rem'}
          backgroundColor={'gray.600'}
          alignItems={'center'}
          gap={'0.2rem'}
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
                      { role: "", description: "" },
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

          <Flex
            cursor={"pointer"}
            p={"8px"}
            borderRadius={"10px"}
            border={"1px solid gray"}
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

          <Flex
            cursor={"pointer"}
            p={"8px"}
            borderRadius={"10px"}
            border={"1px solid gray"}
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

          {/* custom section */}
          {data.custom.map((customItem, customIndex) => (
  <Box key={customIndex} mb="2rem">
    <Input
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
          value={valueItem.subheading}
          onChange={(e) => {
            const updatedCustom = [...data.custom];
            updatedCustom[customIndex].values[valueIndex].subheading = e.target.value;
            setData({ ...data, custom: updatedCustom });
          }}
          placeholder="Subheading"
          mb="0.5rem"
        />
        <Textarea
          value={valueItem.description}
          onChange={(e) => {
            const updatedCustom = [...data.custom];
            updatedCustom[customIndex].values[valueIndex].description = e.target.value;
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
        updatedCustom[customIndex].values.push({ subheading: "", description: "" });
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

      <Box overflow={"auto"} >
      <Box   mx={'2rem'}  overflow={"auto"}>
          {/* <Resume data={data}/> */}
          
         {JSON.stringify(type)===JSON.stringify("atsbold") &&
             <ATSBold
             state={state}
             setExperience={setExperience}
             data={data}
             headerLength={heightVal}
             setDataSkills={setDataSkills}
             setEducation={setEducation}
             setProjects = {setProjects}
             fontSizes={fontSizes}
             selectedFont={selectedFont}
             order = {order}

           />
         }

{JSON.stringify(type)===JSON.stringify("modern") &&
             <ModernResume
             fontSizes={fontSizes}
             state={state}
             setExperience={setExperience}
             data={data}
             headerLength={heightVal}
             setDataSkills={setDataSkills}
             setEducation={setEducation}
             setProjects = {setProjects}
             selectedFont={selectedFont}
             order = {order}
           />
         }
   
        </Box>
      </Box>
      </Flex>
    </Box>
  );
};

export default EditResume;
