import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'

const TemplateInfo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {imageSrc} = location.state;
    console.log(imageSrc)
    const params = useParams();
    const name = params.type;
    const data = {
        atsbold:`  const [selectedFont, setSelectedFont] = useState("Arial, sans-serif");
        This easy-to-scan but visually pleasing premium accounting resume template is the key to making a great impression. This accessible and ATS friendly accounting resume template is organized thoughtfully and a breeze to read through. Your name is prominently displayed at the top of this accounting resume template to make a lasting impression on hiring managers.
      
        100% fully customizable template
      
        Easily change the text, images, and more
      
        Get creative with thousands of photos, graphics, and fonts
      
        Dazzle followers with animations, transitions, or videos
      
        Quickly share and publish anywhere`,
        modern:`modern`
    }
  return (
    <Box>
        <Heading as={'h1'}>{name.toUpperCase()}</Heading>
        <Text>{data[name]}</Text>
        <Box border={'1px solid #616161'}  borderRadius={'0.5rem'} p={'0.5rem'}  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"  cursor={'pointer'} onClick={()=>navigate(`/templates/${name}/create`)} w={'200px'} h={'300px'} >
                  <Image borderRadius="8px"  objectFit={'contain'} h={'full'} w={'full'} src={imageSrc}/>
            </Box>
      
    </Box>
  )
}

export default TemplateInfo
