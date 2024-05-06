import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

const HomePage = () => {
    const paths = ['src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png','src/assets/modernTemp.png']
    const navigate = useNavigate()
  return (
    <Flex justifyContent={{sm:'center',md:'start'}} p={'16px'} flexWrap={'wrap'} gap={'2rem'} w={'full'} h={'full'} >
        {paths.map((item , index)=>{
            return <Box cursor={'pointer'} onClick={()=>navigate('/modern/create')} w={'200px'} h={'300px'} key={index}>
                  <Image borderRadius="8px"  objectFit={'contain'} h={'full'} w={'full'} src={item}/>
            </Box>
        })}


      
    </Flex>
  )
}

export default HomePage
