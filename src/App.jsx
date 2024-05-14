
import ModernResume from './components/ModernResume';
import { Box } from '@chakra-ui/react';
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router';
import EditResume from './pages/EditResume';
import Res from './components/res/Res';
import DL from './exp/dl';





const App = () => {
  

  return (
    <Routes>
      <Route path='/' element={<Box backgroundColor={'white'}  >
      <HomePage/>
      {/* <ModernResume h={3.78} w={3.78}/> */}
    </Box>}/>

    <Route path='/modern' element={<ModernResume/>}/>
    <Route path='/modern/create' element={<EditResume/>}/>
    <Route path='/res' element={<DL/>}/>
   

  
 
    </Routes>
   
  );
};

export default App;
