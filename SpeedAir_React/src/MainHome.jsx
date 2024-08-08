import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './MainHome.css';
import Support from './pages/mainPages/Support';
import Home from './pages/mainPages/Home'
import ForEnterprise from './pages/mainPages/ForEnterprise';
import DeliveryPartners from './pages/mainPages/DeliveryPartners';
import Authentication from './pages/mainPages/Authentication';

const MainHome = () => {
  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ForEnterprise' element={<ForEnterprise/>}/>
          <Route path='/DeliveryPartners' element={<DeliveryPartners/>}/>
          <Route path='/Support' element={<Support/>}/>
          <Route path='/Login' element={<Authentication/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default MainHome;
