import React, { useState } from "react";
import ModernResume from "../components/ModernResume";
import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
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

  const deleteSkill = (i) => {
    data.skills.splice(i, 1);
    setData({ ...data });
  };

  const addSkill = () => {
    setData({...data,skills:[...data.skills,{title:'',content:''}]});
  }

  return (
    <Flex w={"100%"}>
      <Box w={"40%"}>
        <Text fontSize={{ sm: "", md: "2rem" }} as={"h2"}>
          Edit Your Resume
        </Text>
        <Box>
          <Input
            value={data.name}
            placeholder="Name"
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />
        </Box>

        <Box>
          <Input
            value={data.role}
            placeholder="Role"
            onChange={(e) => {
              setData({ ...data, role: e.target.value });
            }}
          />
        </Box>
        {/* {profile info feild} */}
        <Text as={"h3"}>Profile Description</Text>
        <Textarea onChange={(e)=>setData({...data,profileDescription:e.target.value})} value={data.profileDescription}/>
        <Text as={"h3"}>Skills</Text>
        {data.skills.map((item, index) => {
          return (
            <Box w={"full"} key={index}>
              <Box key={index} w={"100%"}>
                <Flex
                  gap={"0.5rem"}
                  flexDirection={"column"}
                  border={"1px solid gray"}
                  p={"1rem"}
                >
                  <Input
                    onChange={(e) =>
                      setData({
                        ...data,
                        skills: data.skills.map((skill, i) => {
                          if (i === index) {
                            return {
                              title: e.target.value,
                              content: skill.content,
                            };
                          }
                          return skill;
                        }),
                      })
                    }
                    value={item.title}
                  />
                  <Input
                    value={item.content}
                    onChange={(e) =>
                      setData({
                        ...data,
                        skills: data.skills.map((skill, i) => {
                          if (i === index) {
                            return {
                              title: skill.title,
                              content: e.target.value,
                            };
                          }
                          return skill;
                        }),
                      })
                    }
                  />
                  <Box cursor={"pointer"} onClick={() => deleteSkill(index)}>
                    <AiFillDelete />
                  </Box>
                </Flex>
              </Box>
            </Box>
          );
        })}

        <Button onClick={addSkill}>Add New Skill</Button>

        <Text as={'h3'}>Experience</Text>
        {data.experience.map((item, index) => {
          return (
            <Box w={"full"} key={index}>
              <Box key={index} w={"100%"}>
                <Flex
                  gap={"0.5rem"}
                  flexDirection={"column"}
                  border={"1px solid gray"}
                  p={"1rem"}
                >
                  <Input
                    onChange={(e) =>
                      setData({
                        ...data,
                        experience: data.experience.map((exp, i) => {
                          if (i === index) {
                            return {
                              role: e.target.value,
                              description: exp.description,
                            };
                          }
                          return exp;
                        }),
                      })
                    }
                    value={item.role}
                  />
                  <Input
                    value={item.description}
                    onChange={(e) =>
                      setData({
                        ...data,
                        experience: data.experience.map((exp, i) => {
                          if (i === index) {
                            return {
                              role: exp.role,
                              description: e.target.value,
                            };
                          }
                          return exp;
                        }),
                      })
                    }
                  />
                  <Box cursor={"pointer"} onClick={() => {
                    data.experience.splice(index,1);
                    setData({...data})
                  }}>
                    <AiFillDelete />
                  </Box>

                </Flex>
              </Box>
            </Box>
          );
        })}

<Button onClick={()=>{
        setData({...data,experience:[...data.experience,{role:'',description:''}]});

}}>Add New Experience</Button>

{/* Contact */}


      </Box>
      <Box w={"60%"}>
        <ModernResume data={data} />
      </Box>
    </Flex>
  );
};

export default EditResume;
