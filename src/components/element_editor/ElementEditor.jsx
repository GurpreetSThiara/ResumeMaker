// ElementEditor.js
import React, { useEffect, useState } from 'react';
import './ElementEditor.css';
import { Box, Flex, Input, Select } from '@chakra-ui/react';
import PropertyInput from './PropertyInput/PropertyInput';


const ElementEditor = ({ selectedElement, updateElement, addElement }) => {
  const [state , setState] = useState();
  const element = selectedElement;

  const handleChange = (e) => {
    updateElement(element.id, { content: e.target.value });
  };

  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    console.log(value)
    if(JSON.stringify(name) === JSON.stringify("height") && !value ){
      console.log("dome")
      updateElement(element.id, { styles: { ...element.styles, [name]: '' } });
      return
    }
    if(JSON.stringify(name) === JSON.stringify("width") && !value ){
      console.log("dome")
      updateElement(element.id, { styles: { ...element.styles, [name]: '' } });
      return
    }
    if(JSON.stringify(name) === JSON.stringify("padding") && !value ){
      console.log("dome")
      updateElement(element.id, { styles: { ...element.styles, [name]: '' } });
      return
    }
    const unit = element.units ? element.units[name] || '' : ''; // Get the current unit or default to an empty string
    const updatedValue = unit ? `${value}${unit}` : value;
    updateElement(element.id, { styles: { ...element.styles, [name]: updatedValue } });
  };

  const handleUnitChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    if(JSON.stringify(value) === JSON.stringify('default')){
      console.log("default");
      const propertyName = name.replace('Unit', '');
      updateElement(element.id, { units: { ...element.units, [propertyName]: "" } });
      return;
    }
    const propertyName = name.replace('Unit', '');
    updateElement(element.id, { units: { ...element.units, [propertyName]: value } });
    console.log("PPPXXXXXXXXXXXX")
    setState('');
    
  };

  const borderStyleOptions = ['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset'];


  if (!element) {
    return null;
  }
  useEffect(() => {
    updateElement(element.id, { 
      units: { 
        height: 'rem', 
        width: 'rem', 
        fontSize: 'rem', 
        padding: 'rem', 
        gap: 'rem', 
      
        margin: 'rem',
        top: 'rem',
        right: 'rem',
        bottom: 'rem',
        left: 'rem',
        paddingTop: 'rem',
        paddingRight: 'rem',
        paddingBottom: 'rem',
        paddingLeft: 'rem',
        marginTop: 'rem',
        marginRight: 'rem',
        marginBottom: 'rem',
        marginLeft: 'rem',
        maxWidth: 'rem',
        minWidth: 'rem',
        maxHeight: 'rem',
        minHeight: 'rem',
        lineHeight: 'rem',
        letterSpacing: 'rem',
        borderWidth: 'rem',
        borderTopWidth: 'rem',
        borderRightWidth: 'rem',
        borderBottomWidth: 'rem',
        borderLeftWidth: 'rem',
        borderRadius: 'rem',
        borderTopLeftRadius: 'rem',
        borderTopRightRadius: 'rem',
        borderBottomRightRadius: 'rem',
        borderBottomLeftRadius: 'rem',
        boxShadow: 'rem',
        textShadow: 'rem',
        columnGap: 'rem',
        rowGap: 'rem',
        perspective: 'rem',
        transform: 'rem', // if specific units are used within transform
        inset: 'rem',
        insetTop: 'rem',
        insetRight: 'rem',
        insetBottom: 'rem',
        insetLeft: 'rem'
      } 
    });
  }, []);
  
  return (
    <Box h={'100vh'} overflow={'auto'} className="element-editor" w={'25%'}>

      <h3>Edit {element.type}</h3>
      <textarea
        className='textarea-dark-mode'
        value={element.content}
        onChange={handleChange}
        rows="4"
        cols="30"
      />
      
      <div className="style-editor">
        <label>
          Color:
          <input
            type="color"
            name="color"
            value={element.styles.color || '#000000'}
            onChange={handleStyleChange}
          />
        </label>
        <label>
          bgColor:
          <input
            type="color"
            name="backgroundColor"
            value={element.styles.backgroundColor || '#000000'}
            onChange={handleStyleChange}
          />
        </label>

        <PropertyInput
          label="Height"
          name="height"
          value={element.styles.height}
          onChange={handleStyleChange}
          unit={element.units? element.units.height || "rem" : 'rem'}
          onUnitChange={handleUnitChange}
        />
   <PropertyInput
          label="Width"
          name="width"
          value={element.styles.width}
          onChange={handleStyleChange}
          unit={element.units ? element.units.width || 'rem' : 'rem'}
          onUnitChange={handleUnitChange}
        />
        <PropertyInput
          label="Padding"
          name="padding"
          value={element.styles.padding}
          onChange={handleStyleChange}
          unit={element.units ? element.units.padding || 'rem' : 'rem'}
          onUnitChange={handleUnitChange}
        />

        <PropertyInput
        
          label="Gap"
          name="gap"
          value={element.styles.gap}
          onChange={handleStyleChange}
          unit={element.units ? element.units.gap || 'rem' : 'rem'}
          onUnitChange={handleUnitChange}
        />

        <PropertyInput
          label="Font Size"
          name="fontSize"
          value={element.styles.fontSize}
          onChange={handleStyleChange}
          unit={element.units ? element.units.fontSize || 'rem' : 'rem'}
          onUnitChange={handleUnitChange}
        />

        <label>
          Display:
          <select
            className='select-dark-mode'
            name="display"
            value={element.styles.display || 'block'}
            onChange={handleStyleChange}
          >
            <option value="block">Block</option>
            <option value="flex">Flex</option>
          </select>
        </label>
        <label>
          Justify Content:
          <select
            className='select-dark-mode'
            name="justifyContent"
            value={element.styles.justifyContent || 'flex-start'}
            onChange={handleStyleChange}
          >
            <option value="flex-start">Flex Start</option>
            <option value="center">Center</option>
            <option value="flex-end">Flex End</option>
            <option value="space-between">Space Between</option>
            <option value="space-around">Space Around</option>
          </select>
        </label>
        <label>
          Align Items:
          <select
            className='select-dark-mode'
            name="alignItems"
            value={element.styles.alignItems || 'stretch'}
            onChange={handleStyleChange}
          >
            <option value="stretch">Stretch</option>
            <option value="flex-start">Flex Start</option>
            <option value="center">Center</option>
            <option value="flex-end">Flex End</option>
            <option value="baseline">Baseline</option>
          </select>
        </label>
        <Flex justifyContent={'space-between'} alignItems={'center'} className="border-editor">

         
        <Box>
        <input
              type="color"
              name="borderColor"
              value={element.styles.borderColor || '#000000'}
              onChange={handleStyleChange}
            />
        </Box>
     
       
          <Box >
          <Input
          
        type="number"
        name="borderWidth"
        value={parseInt(element.styles.borderWidth, 10) || 0}
        onChange={handleStyleChange}
        min="0"
        width="50px" // Adjust the width as needed
        textAlign="center" // Center align the text
        size="sm" // Optional: Adjust the size if needed
      />
            
          </Box>
    
      
         <Box>
         <Select
        name="borderStyle"
        value={element.styles.borderStyle || 'solid'}
        onChange={handleStyleChange}
        variant="filled"
        bg="gray.700"
        color="white"
        borderColor="gray.600"
        _hover={{
          borderColor: 'gray.500',
        }}
      >
        {borderStyleOptions.map((style) => (
          <option key={style} value={style}>
            {style}
          </option>
        ))}
      </Select>
         </Box>

         <Box>
<Input name='borderRadius' onChange={handleStyleChange} w={'50px'} value={parseFloat(element.styles.borderRadius) || 0} type="number"/>
</Box>
       
        </Flex>
        <Box>
          padding
          <Input onChange={handleStyleChange} name='padding' value={parseFloat(element.styles?.padding) || 0
          } type='number'/>
        </Box>
        <Box>
          padding
          <Input onChange={handleStyleChange} name='gap' value={parseFloat(element.styles?.gap) || 0
          } type='number'/>
        </Box>
      </div>

      {element.type === 'box' && (
        <div className="add-nested-element">
          <button onClick={() => addElement('line', element.id)}>Add Line Inside Box</button>
          <button onClick={() => addElement('text', element.id)}>Add Text Inside Box</button>
          <button onClick={() => addElement('box', element.id)}>Add Box Inside Box</button>
        </div>
      )}
    </Box>
  );
};

export default ElementEditor;
