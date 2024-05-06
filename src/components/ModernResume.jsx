import {
  Avatar,
  Box,
  ChakraProvider,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  extendTheme,
} from "@chakra-ui/react";
import React, { useState } from "react";
import resumeData from "../data";
import { MdEmail, MdLocationOn, MdPerson, MdPhone } from "react-icons/md";

const ModernResume = ({data}) => {
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


  return (
    <ChakraProvider theme={customTheme}>
      <Box
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
          h={"25%"}
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
              <HeadingText text={"PERSONAL\nPROFILE"} />
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
