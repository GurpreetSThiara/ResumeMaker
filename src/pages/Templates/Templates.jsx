import { Box, Flex, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'
import ATSBold from '../../components/Resumes/ATSBold/ATSBold'
import ModernResume from '../../components/Resumes/ModernResume/ModernResume'

const Templates = () => {
    const gradientColor = useColorModeValue('linear(to-r, black, blue.700)', 'linear(to-r, black, blue.700)');

    const paths = [
        { path: 'src/assets/Screenshot 2024-05-17 013214.png', key: 'atsbold' },
        { path: 'src/assets/modres.png', key: 'modern' },
      ];    const navigate = useNavigate()
  return (
     <Box bgGradient={gradientColor} h={'100vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <Heading as={'h1'} color={'gray'}>SELECT</Heading>
        <Heading as={'h2'} color={'gray'}>a best template for your resume</Heading>

<Flex justifyContent={{sm:'center',md:'center'}} p={'16px'} flexWrap={'wrap'} gap={'2rem'} w={'full'} h={'full'} >
        {paths.map((item , index)=>{
            return <Box border={'1px solid #616161'}  borderRadius={'0.5rem'} p={'0.5rem'}  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"  cursor={'pointer'} onClick={()=>navigate(`/${item.key}/create`,)} w={'200px'} h={'300px'} key={index}>
                  <Image borderRadius="8px"  objectFit={'contain'} h={'full'} w={'full'} src={item.path}/>
            </Box>
        })}


      
    </Flex>
     </Box>
  )
}

export default Templates
