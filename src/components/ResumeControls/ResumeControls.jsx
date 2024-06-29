import { Box, Button, Flex, Select } from '@chakra-ui/react'
import React, { useState } from 'react'

const ResumeControls = ({ save, setSelectedFont, selectedFont, setFontSizes, fontSizes }) => {
  const fontOptions = [
    { label: 'Arial', value: 'Arial, sans-serif' },
    { label: 'Calibri', value: 'Calibri, sans-serif' },
    { label: 'Helvetica', value: 'Helvetica, sans-serif' },
    { label: 'Times New Roman', value: 'Times New Roman, serif' },
    { label: 'Georgia', value: 'Georgia, serif' },
    { label: 'Cambria', value: 'Cambria, serif' },
    { label: 'Garamond', value: 'Garamond, serif' },
    { label: 'Verdana', value: 'Verdana, sans-serif' },
    { label: 'Trebuchet MS', value: 'Trebuchet MS, sans-serif' },
    { label: 'Lato', value: 'Lato, sans-serif' },
    { label: 'Roboto', value: 'Roboto, sans-serif' },
    { label: 'Open Sans', value: 'Open Sans, sans-serif' },
    { label: 'Montserrat', value: 'Montserrat, sans-serif' },
    { label: 'Noto Sans', value: 'Noto Sans, sans-serif' },
    { label: 'Roboto Slab', value: 'Roboto Slab, serif' }
  ];

  const fontSizeDescription = [
    { label: '1', value: '0.5rem' },
    { label: '2', value: '0.55rem' },
    { label: '3', value: '0.6rem' },
    { label: '4', value: '0.65rem' },
    { label: '5', value: '0.7rem' },
    { label: '6', value: '0.75rem' },
    { label: '7', value: '0.8rem' },
    { label: '8', value: '0.85rem' },
    { label: '9', value: '0.9rem' },
    { label: '10', value: '0.95rem' },
    { label: '11', value: '1rem' },
    { label: '12', value: '1.05rem' },
    { label: '13', value: '1.1rem' },
    { label: '14', value: '1.15rem' },
    { label: '15', value: '1.2rem' },
    { label: '16', value: '1.25rem' },
    { label: '17', value: '1.3rem' },
    { label: '18', value: '1.35rem' },
    { label: '19', value: '1.4rem' },
    { label: '20', value: '1.45rem' },
    { label: '21', value: '1.5rem' },
    { label: '22', value: '1.55rem' },
    { label: '23', value: '1.6rem' },
    { label: '24', value: '1.65rem' },
    { label: '25', value: '1.7rem' },
    { label: '26', value: '1.75rem' },
    { label: '27', value: '1.8rem' },
    { label: '28', value: '1.85rem' },
    { label: '29', value: '1.9rem' },
    { label: '30', value: '1.95rem' },
    { label: '31', value: '2rem' }
];


  const fontSizeName = [
    { label: '1', value: '2rem' },
    { label: '2', value: '2.5rem' },
    { label: '3', value: '2.75rem' },
    { label: '4', value: '3rem' },
    { label: '5', value: '3.5rem' },
    { label: '6', value: '3.75rem' },
    { label: '7', value: '4rem' },
    { label: '8', value: '4.25rem' },
    { label: '9', value: '4.5rem' },
  ];

  const fontSizeHeader = [
    { label: '1', value: '1rem' },
    { label: '2', value: '1.5rem' },
    { label: '3', value: '1.75rem' },
    { label: '4', value: '2rem' },
    { label: '5', value: '2.5rem' },
    { label: '6', value: '2.75rem' },
    { label: '7', value: '3rem' },
    { label: '8', value: '3.25rem' },
    { label: '9', value: '3.35rem' },

  ];
  const fontSizeSubheading = [
    { label: '1', value: '0.3rem' },
    { label: '2', value: '0.6rem' },
    { label: '3', value: '0.9rem' },
    { label: '4', value: '1.0rem' },
    { label: '5', value: '1.2rem' },
    { label: '6', value: '1.5rem' },
    { label: '7', value: '1.75rem' },
    { label: '8', value: '2rem' },
    { label: '9', value: '2.25rem' },
    { label: '10', value: '2.35rem' },

  ];
  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const handleFontSizeChange = (event, key) => {
    setFontSizes({ ...fontSizes, [key]: event.target.value });
  };

  return (
    <Flex borderRadius={'10px'} m={'0.5rem'} p={'0.5rem'} bg={'blue.900'} mb={'0.3rem'} w={'full'} justifyContent={'center'} gap={'0.5rem'} flexWrap="wrap">
     <Box bg={'black'} borderRadius={'15px'}>
     <Select   bgGradient="linear(to-r, black,black, blue.900)"    border={"1px solid #002244"} borderRadius={'15px'} value={selectedFont} onChange={handleFontChange} placeholder="Select Font Family">
        {fontOptions.map((font, index) => (
          <option key={index} value={font.value}>{font.label}</option>
        ))}
      </Select>
     </Box>
    <Box  borderRadius={'15px'}  bgGradient="linear(to-r, black,black,black, blue.900)">
    <Select   bgGradient="linear(to-r, black,black, blue.900)"  border={"1px solid #002244"}  borderRadius={'15px'}  value={"header"} onChange={(e) => handleFontSizeChange(e, 'header')} placeholder="Header Font Size">
        {fontSizeHeader.map((size, index) => (
          <option key={index} value={size.value}>{size.label}</option>
        ))}
      </Select>
    </Box>
   <Box borderRadius={'15px'}  bgGradient="linear(to-r, black,black, blue.900)">
   <Select  bgGradient="linear(to-r, black,black, blue.900)"  border={"1px solid #002244"}  borderRadius={'15px'}  value={"subheader"} onChange={(e) => handleFontSizeChange(e, 'subheading')} placeholder="Subheading Font Size">
        {fontSizeSubheading.map((size, index) => (
          <option key={index} value={size.value}>{size.label}</option>
        ))}
      </Select>
   </Box>
   <Box borderRadius={'15px'}   bgGradient="linear(to-r, black, blue.900)">
   <Select   bgGradient="linear(to-r, black,black, blue.900)" border={"1px solid #002244"}  borderRadius={'15px'} value={"name"} onChange={(e) => handleFontSizeChange(e, 'name')} placeholder="Name Font Size">
        {fontSizeName.map((size, index) => (
          <option key={index} value={size.value}>{size.label}</option>
        ))}
      </Select>
   </Box>
  <Box borderRadius={'15px'} bg={'blue.900'}>
  <Select  bgGradient="linear(to-r, black,black, blue.900)" border={"1px solid #002244"}  borderRadius={'15px'}  value={"description"} onChange={(e) => handleFontSizeChange(e, 'description')} placeholder="Description Font Size">
        {fontSizeDescription.map((size, index) => (
          <option key={index} value={size.value}>{size.label}</option>
        ))}
      </Select>
  </Box>
  
    </Flex>
  )
}

export default ResumeControls;
