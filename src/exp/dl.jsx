import React, { useState } from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { Reorder } from 'framer-motion';

const initialItems = [
  { id: 'item-1', content: 'Item 1' },
  { id: 'item-2', content: 'Item 2' },
  { id: 'item-3', content: 'Item 3' },
  { id: 'item-4', content: 'Item 4' },
  { id: 'item-5', content: 'Item 5' },
  { id: 'item-6', content: 'Item 6' },
  { id: 'item-7', content: 'Item 7' },
  { id: 'item-8', content: 'Item 8' },
  { id: 'item-9', content: 'Item 9' },
  { id: 'item-10', content: 'Item 10' },
  { id: 'item-11', content: 'Item 11' },
  { id: 'item-12', content: 'Item 12' },
  { id: 'item-13', content: 'Item 13' },
  { id: 'item-14', content: 'Item 14' },
  { id: 'item-15', content: 'Item 15' },
  { id: 'item-16', content: 'Item 16' },
  { id: 'item-17', content: 'Item 17' },
  { id: 'item-18', content: 'Item 18' },
  { id: 'item-19', content: 'Item 19' },
  { id: 'item-20', content: 'Item 20' },
];

const DL = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <ChakraProvider>
      <Flex
      
        p={4}
        bg="gray.50"
        border="1px solid lightgray"
        borderRadius="md"
        minH="100px"
      >
        <Reorder.Group
          axis="x"
          values={items}
          onReorder={setItems}
          style={{ display: 'flex' }}
        >
          {items.map((item) => (
            <Reorder.Item
              key={item.id}
              value={item}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{
                margin: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                p={4}
                bg="teal.500"
                color="white"
                borderRadius="md"
                width="100px"
                textAlign="center"
                cursor="pointer"
              >
                {item.content}
              </Box>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </Flex>
    </ChakraProvider>
  );
};

export default DL;
