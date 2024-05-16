import { Button, Flex, Select } from '@chakra-ui/react'
import React, { useState } from 'react'

const ResumeControls = ({save,setSelectedFont,selectedFont}) => {
      
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



  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };
  return (
   
          <Flex mb={'0.3rem'} w={'full'} justifyContent={'end'} gap={'0.5rem'}>
     <Select w={'50%'} value={selectedFont} onChange={handleFontChange} placeholder="Select Font Family">
        {fontOptions.map((font, index) => (
          <option key={index} value={font.value}>{font.label}</option>
        ))}
      </Select>
    <Button onClick={save}>Save as pdf</Button>
     </Flex>

  )
}

export default ResumeControls
