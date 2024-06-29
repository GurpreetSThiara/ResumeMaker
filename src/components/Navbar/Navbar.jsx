import { Box, Flex, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const linkColor = useColorModeValue('white', 'gray.200');
    const hoverColor = useColorModeValue('teal.300', 'teal.500');
    const gradientColor = useColorModeValue('linear(to-r, black, blue.900)', 'linear(to-r, black, blue.900)');
const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};
  return (
    <Box
   
          bgGradient={gradientColor}
    
    display={'flex'}
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      wrap="wrap"
      padding="1rem"
      width="100%"
      zIndex="999"
      position="relative"
      top="0"
      color="white"
    >
     <Flex>
     <Flex align="center" >
        {/* <Image src="/resugen-logo.png" alt="ResuGen Logo" width="100px" /> */}
      </Flex>
      <Text p={'0.5rem'} borderRadius={'50%'} as={'h1'} bgGradient="linear(to-r, black, blue.900)"  fontSize={{base:'1.4rem',md:'2rem'}} fontWeight={'bold'} color={'gray.200'}>
        Free Resume Builder
      </Text>
     </Flex>
      <Box display={{ base: 'block', md: 'none' }} onClick={()=>{setIsOpen(!isOpen)}}>
        <FaBars />
      </Box>
      <Box
        display={{ base: isMenuOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
  
     

      >
  <Box   borderRadius="lg" shadow="xl" maxW="100%" mx="auto" overflow="hidden">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 2, md: 4 }}
        align="center"
        gap="2rem"
        bgGradient={gradientColor}
        p={4}
        borderRadius="md"
        shadow="lg"
      >
        <Link
             to={'/'}
          color={linkColor}
          fontSize="lg"
          fontWeight="bold"
          transition="all 0.3s"
          _hover={{
            color: hoverColor,
            transform: 'scale(1.1)',
            textDecoration: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          p={3}
          borderRadius="md"
          _focus={{
            boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
          }}
        >
          Home
        </Link>

        <Link
             to={'/invoice'}
          color={linkColor}
          fontSize="lg"
          fontWeight="bold"
          transition="all 0.3s"
          _hover={{
            color: hoverColor,
            transform: 'scale(1.1)',
            textDecoration: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          p={3}
          borderRadius="md"
          _focus={{
            boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
          }}
        >
          Invoice
        </Link>
        <Link
          to={'/about'}
          color={linkColor}
          fontSize="lg"
          fontWeight="bold"
          transition="all 0.3s"
          _hover={{
            color: hoverColor,
            transform: 'scale(1.1)',
            textDecoration: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          p={3}
          borderRadius="md"
          _focus={{
            boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
          }}
        >
          About
        </Link>
        {/* <Link
          href="#"
          color={linkColor}
          fontSize="lg"
          fontWeight="bold"
          transition="all 0.3s"
          _hover={{
            color: hoverColor,
            transform: 'scale(1.1)',
            textDecoration: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          p={3}
          borderRadius="md"
          _focus={{
            boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
          }}
        >
          Services
        </Link>
        <Link
          href="faq"
       
          color={linkColor}
          fontSize="lg"
          fontWeight="bold"
          transition="all 0.3s"
          _hover={{
            color: hoverColor,
            transform: 'scale(1.1)',
            textDecoration: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          p={3}
          borderRadius="md"
          _focus={{
            boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
          }}
        >
          FAQ
        </Link> */}
        <Link
          href="#"
          color={linkColor}
          fontSize="lg"
          fontWeight="bold"
          transition="all 0.3s"
          _hover={{
            color: hoverColor,
            transform: 'scale(1.1)',
            textDecoration: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          p={3}
          borderRadius="md"
          _focus={{
            boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
          }}
        >
          Contact
        </Link>
      </Stack>
    </Box>
      </Box>

      <Modal size={'xl'} isOpen={isOpen} onClose={()=>{setIsOpen(!isOpen)}} isCentered>
      <ModalOverlay />
      <ModalContent bgGradient={gradientColor} m="1rem">
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack
            direction="column"
            spacing={{ base: 2, md: 4 }}
            align="center"
            gap="2rem"
            p={4}
            borderRadius="md"
            shadow="lg"
          >
            <Link
              to="/"
              color={linkColor}
              fontSize="lg"
              fontWeight="bold"
              transition="all 0.3s"
              _hover={{
                color: hoverColor,
                transform: 'scale(1.1)',
                textDecoration: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              p={3}
              borderRadius="md"
              _focus={{
                boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              color={linkColor}
              fontSize="lg"
              fontWeight="bold"
              transition="all 0.3s"
              _hover={{
                color: hoverColor,
                transform: 'scale(1.1)',
                textDecoration: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              p={3}
              borderRadius="md"
              _focus={{
                boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
              }}
            >
              About
            </Link>
            <Link
              href="#"
              color={linkColor}
              fontSize="lg"
              fontWeight="bold"
              transition="all 0.3s"
              _hover={{
                color: hoverColor,
                transform: 'scale(1.1)',
                textDecoration: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              p={3}
              borderRadius="md"
              _focus={{
                boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
              }}
            >
              Services
            </Link>
            <Link
              href="#"
              color={linkColor}
              fontSize="lg"
              fontWeight="bold"
              transition="all 0.3s"
              _hover={{
                color: hoverColor,
                transform: 'scale(1.1)',
                textDecoration: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              p={3}
              borderRadius="md"
              _focus={{
                boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
              }}
            >
              Contact
            </Link>
          </Stack>
        </ModalBody>
        <ModalFooter>
          {/* Footer content */}
        </ModalFooter>
      </ModalContent>
    </Modal>

      

    </Box>
  );
};

export default Navbar