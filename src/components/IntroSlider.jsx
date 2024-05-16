import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@chakra-ui/react';

const slides = [
  { title: "Welcome to ResumeGen", description: "Create stunning resumes with ease and make a lasting impression on potential employers." },
  { title: "Easy to Use", description: "Our intuitive interface makes resume creation a breeze, even for beginners." },
  { title: "Professional Templates", description: "Choose from a variety of professional templates designed to highlight your skills." },
  { title: "Customizable Layouts", description: "Tailor your resume to your unique style with our customizable layouts." },
  { title: "One-Click Export", description: "Export your resume to PDF with a single click and share it effortlessly." },
  { title: "Data Security", description: "Your data is secure with us. We prioritize your privacy and confidentiality." },
  { title: "Get Started", description: "Join us today and take the first step towards your dream job with ResumeGen!" }
];

const IntroSlider = ({ onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bgColor = useColorModeValue('gray.800', 'gray.900');
  const textColor = useColorModeValue('white', 'gray.100');

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onClose();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <Container maxW="container.md" py={8} bg={bgColor} color={textColor} borderRadius="md" shadow="lg">
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mb={4}>{slides[currentSlide].title}</Heading>
        <Text fontSize="lg">{slides[currentSlide].description}</Text>
      </Box>
      <Box textAlign="center" mt={6} d="flex" justifyContent="space-between">
        <Button colorScheme="teal" size="lg" onClick={prevSlide} disabled={currentSlide === 0}>Previous</Button>
        <Button colorScheme="teal" size="lg" onClick={nextSlide}>{currentSlide === slides.length - 1 ? "Get Started" : "Next"}</Button>
      </Box>
    </Container>
  );
};

const IntroModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    if (!hasViewed) {
      onOpen();
      setHasViewed(true);
    }
  }, [hasViewed, onOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome</ModalHeader>
          <ModalBody>
            <IntroSlider onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IntroModal;
