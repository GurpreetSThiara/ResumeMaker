
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
import PDF from './pages/PDFConverter';
import CreativeCanvas from './components/Resumes/CreativeCanvas/CreativeCanvas';
import Invoice from './pages/invoice/Invoice';
import GResume from './components/Resumes/GoogleRecomended1/Resume';
import WaveComponent from './components/waves/Waves';




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
    <Route path='/pdf' element={<CreativeCanvas/>}/>
    <Route path='/g' element={<GResume/>}/>
    <Route path='/wave' element={<WaveComponent/>}/>
    <Route path='/invoice' element={<Invoice/>}/>
    <></>
   

  
 
    </Routes>
   </Box>
   
  );
};

export default App;
