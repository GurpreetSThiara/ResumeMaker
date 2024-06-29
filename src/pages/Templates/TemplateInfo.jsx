import { Box, Button, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { IoIosArrowForward } from "react-icons/io";

const TemplateInfo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {imageSrc} = location.state;
    console.log(imageSrc)
    const params = useParams();
    const name = params.type;
    const data = {
        atsbold:{
            info:` 
            This professional accounting resume template is both visually appealing and easy to scan, making it ideal for making an impressive first impression. It's easily accessible and ATS-friendly, with a well-organized layout that makes reading a breeze. Additionally, your name is prominently placed at the top to ensure hiring managers remember you.      
            100% fully customizable template
         `,
         data:{
            image:false,
            single:true,
            double:false
         }
        },
        modern:{
            info:`A modern resume focuses on establishing an effective first impression. It's designed to be clear and simple to read, with an emphasis on highlighting your significant accomplishments and talents. Rather than simply stating work duties, it emphasizes what you've accomplished in each function, typically with quantifiable outcomes. Modern resumes frequently include links to your professional portfolio or LinkedIn profile, which gives employers a more complete picture of your work. Tailoring your resume to the relevant job description helps it pass through Applicant Tracking Systems (ATS), ensuring it is discovered. This method demonstrates not only wha
            t you've done, but also that you're current with industry standards and job market trends.`,
            data:{
                image:false,
                single:false,
                double:true
             }
        }
    }
  return (
    <Box bg={'black'} h={{md:'100vh'}}  p={'1rem'} >
       <Flex alignItems={{base:'center',md:'flex-start'}}  flexDirection={{base:'column',md:'row'}} w={'full'} gap={'1rem'} justifyContent={'center'}>
       <Heading display={{base:'flex' , md:'none'}} textAlign={'center'} color={'gray'} as={'h1'}>{name.toUpperCase()}</Heading>


        <Box   borderRadius={'0.5rem'}  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"  cursor={'pointer'} onClick={()=>navigate(`/templates/${name}/create`)} h={{base:'',md:'400px'}} w={{base:"100%",md:'300px'}}  >
                  <Image borderRadius="8px"  objectFit={'contain'} h={'full'} w={'full'} src={imageSrc}/>
            </Box>
            <Flex w={{base:'full',md:'40%'}} alignItems={'start'} flexDirection={'column'} gap={'1rem'}>
            <Heading  display={{base:'none' , md:'flex'}} textAlign={'center'} color={'gray'} as={'h1'}>{name.toUpperCase()}</Heading>

            <Text textAlign={'justify'} >{data[name].info}</Text>
            
            <Button
              onClick={()=>navigate(`/templates/${name}/create` , {state:{metaData:data[name].data}})}
              bgGradient="linear(to-r, teal.500, teal.600)"
              color="white"
              borderRadius="full"
              px={6}
             
              boxShadow="xl"
              _hover={{
                bgGradient: "linear(to-r, teal.600, teal.700)",
              }}
              _active={{
                transform: "scale(0.95)",
              }}
            >
              <Flex alignItems="center">
              Edit this template
                <Icon as={IoIosArrowForward} boxSize={6} mr={2} />
               
              </Flex>
            </Button>
            </Flex>
       </Flex>
      
    </Box>
  )
}

export default TemplateInfo
