import React, { useState } from 'react';
import { Flex, Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

// Function to generate a random SVG path
const generateRandomPath = () => {
    const commands = ['M', 'L', 'C', 'Q', 'T', 'S', 'A', 'Z'];
    const getRandomCommand = () => commands[Math.floor(Math.random() * commands.length)];
    const getRandomCoordinate = () => Math.floor(Math.random() * 200);
  
    let path = '';
    path += `M ${getRandomCoordinate()} ${getRandomCoordinate()} `; // Start with a moveto command
  
    for (let i = 0; i < 4; i++) { // Adjusted to ensure exactly 5 sub-paths
      path += `${getRandomCommand()} ${getRandomCoordinate()} ${getRandomCoordinate()} `;
    }
  
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
    return { path, color: randomColor };
  };
  
// SVGCanvas component to render the SVG path
const SVGCanvas = ({ shape }) => {
  if (!shape) return null;

  const { path, color } = shape;

  return (
    <Box w="200px" h="200px" bg="white" border="1px solid black">
      <svg width="100%" height="100%">
        <path d={path} fill={color} />
      </svg>
    </Box>
  );
};

const WaveComponent = () => {
  const [shape, setShape] = useState(generateRandomPath());

  const handleSliderChange = () => {
    const newShape = generateRandomPath();
    setShape(newShape);
  };

  return (
    <Flex p={4} direction="column" align="center">
      <SVGCanvas shape={shape} />
      <Box width="80%" mt={4}>
        <Slider defaultValue={0} min={0} max={100} step={1} onChange={handleSliderChange}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </Flex>
  );
};

export default WaveComponent;
