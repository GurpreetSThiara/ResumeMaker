import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

const Templates = () => {
      const paths = ['src/assets/modres.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png']
    const navigate = useNavigate()
  return (
     <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <Heading as={'h1'} color={'gray'}>SELECT</Heading>
        <Heading as={'h2'} color={'gray'}>a best template for your resume</Heading>

<Flex justifyContent={{sm:'center',md:'center'}} p={'16px'} flexWrap={'wrap'} gap={'2rem'} w={'full'} h={'full'} >
        {paths.map((item , index)=>{
            return <Box border={'1px solid #616161'}  borderRadius={'0.5rem'} p={'0.5rem'}  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"  cursor={'pointer'} onClick={()=>navigate('/modern/create')} w={'200px'} h={'300px'} key={index}>
                  <Image borderRadius="8px"  objectFit={'contain'} h={'full'} w={'full'} src={item}/>
            </Box>
        })}


      
    </Flex>
     </Box>
  )
}

export default Templates
