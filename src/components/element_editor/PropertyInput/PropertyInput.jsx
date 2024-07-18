// PropertyInput.js
import React from 'react';
import { Box, Flex, Input, Select } from '@chakra-ui/react';

const PropertyInput = ({ label, name, value, onChange, unit, onUnitChange }) => {
  console.log(unit);
  return (
    <Box mb={4}>
      <label>{label}:</label>
      <Flex>
        <Input
          type="number"
          name={name}
          value={parseFloat(value)}
          onChange={onChange}
          width="70%"
        />
        <Select name={`${name}Unit`} value={unit} onChange={onUnitChange} width="30%">
        <option value="rem">rem</option>
          <option value="px">px</option>
         
          <option value="%">%</option>
        </Select>
      </Flex>
    </Box>
  );
};

export default PropertyInput;
