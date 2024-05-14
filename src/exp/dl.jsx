import { Center, ChakraProvider, List, ListItem } from "@chakra-ui/react";
import { Reorder } from "framer-motion";
import { useState } from "react";
const DL = () => {
    const [usernames, setUsernames] = useState([
        "malerba118",
        "compulves",
        "dan_abramov",
      ]);



  return (
    <Center h="100vh">
    <List
      as={Reorder.Group}
      axis="y"
      values={usernames}
      onReorder={setUsernames}
      spacing={2}
    >
      {usernames.map((item) => (
        <ListItem
          as={Reorder.Item}
          key={item}
          value={item}
          p={2}
          bg="gray.100"
          rounded="xl"
        >
        <div className="">
            hi 
            <div className="">
                yes
            </div>
            {item}
        </div>
        </ListItem>
      ))}
    </List>
  </Center>
  );
};

export default DL