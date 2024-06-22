import React, { useRef } from 'react';
import { Box, Heading, Text, VStack, HStack, Divider, List, ListItem, Icon, Button } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import jsPDF from 'jspdf';

const CreativeCanvas = () => {
  const contentRef = useRef();

  const generatePDF = () => {
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.html(contentRef.current, {
      callback: (doc) => {
        doc.save('document.pdf');
      },
      margin: 5,
      html2canvas: { scale: 1 },
    });
  };

  return (
    <Box ref={contentRef}>
      <Button onClick={generatePDF}>Save as PDF</Button>
      <Box width="210mm" height="297mm" p={8} border="1px solid #e2e8f0" bg={'#002244'}>
        <VStack align="start" spacing={8}>
          <Heading as="h1" size="2xl">John Doe</Heading>
          <Text color={'black'} fontSize="lg" fontWeight="bold">Graphic Designer</Text>
          <Heading as="h1" size="2xl">John Doe</Heading>
          <Divider />
          <HStack color={'black'}>

            <Text color={'black'}>johndoe@example.com</Text>
          </HStack>
          <HStack>
            <Icon as={PhoneIcon} />
            <Text>+1 (555) 555-5555</Text>
          </HStack>
          <Divider />
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="md">Skills</Heading>
            <List spacing={2}>
              <ListItem>Adobe Photoshop</ListItem>
              <ListItem>Illustrator</ListItem>
              <ListItem>InDesign</ListItem>
              <ListItem>Sketch</ListItem>
              <ListItem>UI/UX Design</ListItem>
              <ListItem>Branding</ListItem>
            </List>
          </VStack>
          <Divider />
          <VStack align="start" spacing={4}>
            <Heading as="h2" size="md">Education</Heading>
            <Box>
              <Text fontWeight="bold">B.A. in Graphic Design</Text>
              <Text>University of Design, 2016-2020</Text>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default CreativeCanvas;
