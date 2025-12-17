import react from 'react'; 
import Section from './Components/Section.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavaBar.jsx';
import Contact from './Components/Contact.jsx';
import Gallery from './Components/Gallary.jsx';
import Property from'./Components/Properties.jsx';
import Footer from './Components/footer.jsx';
import About from './Components/About.jsx';  
import Floating from './Components/Floating.jsx';
import EnquiryPopup from './Components/EnquiryPopup.jsx';

const App =() =>{
  return(
    <> 
    <EnquiryPopup/>
   <NavBar/>
   {/* <BrowserRouter> */}
   <Routes>
    <Route path='/' element={<Section/>}/> 
    <Route path='/gallery'  element={<Gallery/>}/>
    <Route path='/contact'  element={<Contact/>}/>
    <Route path='/property' element={<Property/>}/>
    <Route path='/about'    element={<About/>}/>
   </Routes>
   {/* </BrowserRouter> */}
   <Footer/>
   <Floating/>
   </>

     
  )
}
export default App;
