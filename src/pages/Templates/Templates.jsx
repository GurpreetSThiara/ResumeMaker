import { Box, Flex, Heading, Image, Text, useColorModeValue, Skeleton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import ATSBold from '../../components/Resumes/ATSBold/ATSBold'
import ModernResume from '../../components/Resumes/ModernResume/ModernResume'
import atsResume from './../../assets/Screenshot 2024-05-17 013214.png';
import modernResume from './../../assets/modres.png';

const Templates = () => {
    const gradientColor = useColorModeValue('linear(to-r, black, blue.700)', 'linear(to-r, black, blue.700)');
    const [imageLoaded, setImageLoaded] = useState(false);
    const navigate = useNavigate();

    const paths = [
        { path: atsResume, key: 'atsbold' },
        { path: modernResume, key: 'modern' },
    ];

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <Box bgGradient={gradientColor} h={{md:'100vh'}} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Heading as={'h1'} color={'gray'}>SELECT</Heading>
            <Heading textAlign={'center'} as={'h2'} color={'gray'}>a best template for your resume</Heading>

            <Flex justifyContent={{base:'center',md:'center'}} p={'16px'} flexWrap={'wrap'} gap={'2rem'} w={'full'} h={'full'} >
                {paths.map((item , index) => (
                    <Box key={index} onClick={() => navigate(`/templates/${item.key}`, {state: {imageSrc: item.path}})}>
                        <Box overflow={'hidden'} border={'1px solid #616161'} borderRadius={'0.5rem'} p={'0.5rem'} boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)" cursor={'pointer'} w={{base:'',md:'200px'}} h={{base:'',md:'300px'}}>
                            <Text>{item.key}</Text>
                            <Skeleton isLoaded={imageLoaded} startColor="transparent" endColor="gray.300">
                                <Image onLoad={handleImageLoad} borderRadius="8px" objectFit={'contain'} h={'full'} w={'full'} src={item.path} />
                            </Skeleton>
                        </Box>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default Templates;
