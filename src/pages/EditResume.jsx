import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Input,
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
} from "@chakra-ui/react";
import { AiFillDelete, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import CustomSliderMark from "../components/CustomSliderMark";
import PDFConverter from "./PDFConverter";
import { chakraToHtml } from "../utils/chakraToHtml";
import { compile } from "@onedoc/react-print";
import ModernResume from "../components/Resumes/ModernResume/ModernResume";
import { AnimatePresence } from "framer-motion";

import { MdAdd } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
const EditResume = () => {
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
    custom: [],
  });

  const [state, setState] = useState({
    Image: true,
    Education: true,
    Profile: true,
    Contact: true,
    Experience: true,
    Skills: true,
    Header: true,
    customKeys: [], // Initialize custom keys array
  });

  const [customKey, setCustomKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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
            values: [{ subheading: "", description: "" }],
          },
        ],
      });
      setCustomKey("");
      setIsOpen(false);
    }
  };

  const [heightVal, setHeightVal] = useState(25);
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
  const [isContactExpanded, setIsContactExpanded] = useState(false);
  const [isEducationExpanded, setIsEducationExpanded] = useState(false);

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

  return (
    <Box  >
      <Box p={"0.5rem"}backgroundColor={"gray"}>
        <Flex direction="column" alignItems="center" justifyContent={"center"}>
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

          <Flex alignItems="center" mt={4}>
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
          </Flex>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Custom Key</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  value={customKey}
                  onChange={(e) => setCustomKey(e.target.value)}
                  placeholder="Enter custom key"
                />
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleAddCustomKey} colorScheme="teal">
                  Add
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Box>
      <Flex
  
        
        display={"flex"}
        flexDirection={{ sm: "column", md: "column", lg: "row" }}
      >
        <Box p={"16px"} w={"40%"}>
          <Text fontSize={{ base: "", md: "2rem" }} as="h2" mb="2rem">
            Edit Your Resume
          </Text>

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

          <Flex
            cursor={"pointer"}
            p={"8px"}
            borderRadius={"10px"}
            border={"1px solid gray"}
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
            <Box>
              {data.skills.map((item, index) => (
                <Flex key={index} mb="1rem" alignItems="center">
                  {/* Input for skill title */}
                  <Input
                    w={"30%"}
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

          <Flex
            cursor={"pointer"}
            p={"8px"}
            borderRadius={"10px"}
            border={"1px solid gray"}
            w={"full"}
            justify={"space-between"}
            align="center"
            mb="1rem"
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

        <Box  w={'50%'} border={'1px solid red'} p={'1rem'}>
          {/* <Resume data={data}/> */}
          <Box overflow={"auto"}>
            <ModernResume
              state={state}
              setExperience={setExperience}
              data={data}
              headerLength={heightVal}
              setDataSkills={setDataSkills}
              setEducation={setEducation}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default EditResume;
