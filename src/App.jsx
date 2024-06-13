
import ModernResume from './components/ModernResume';
import { Box } from '@chakra-ui/react';
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router';
import EditResume from './pages/EditResume';
import Res from './components/res/Res';
import DL from './exp/dl';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Templates from './pages/Templates/Templates';
import TemplateInfo from './pages/Templates/TemplateInfo';
import './App.css'
import DemoRes from './components/demoRes/DemoRes';
import ConvertImages from './pages/ConvertImages/ConvertImages';




const App = () => {


  

  return (
   <Box className="">
    <Navbar/>
     <Routes>
      <Route path='/' element={<Box backgroundColor={'white'}  >
      <HomePage/>
      {/* <ModernResume h={3.78} w={3.78}/> */}
    </Box>}/>

    <Route path='/modern' element={<ModernResume/>}/>
    <Route path='templates/:type/create' element={<EditResume/>}/>
    <Route path='/res' element={<DemoRes/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/templates' element={<Templates/>}/>
    <Route path='templates/:type' element={<TemplateInfo/>}/>
    <Route path='/convert' element={<ConvertImages/>}/>
    <></>
   

  
 
    </Routes>
   </Box>
   
  );
};

export default App;
