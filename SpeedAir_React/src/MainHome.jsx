import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './MainHome.css';
import Support from './pages/mainPages/Support';
import Home from './pages/mainPages/Home'
import ForEnterprise from './pages/mainPages/ForEnterprise';
import Authentication from './pages/mainPages/Authentication';
import Estimate from './pages/mainPages/Estimate';

const MainHome = () => {
  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ForEnterprise' element={<ForEnterprise/>}/>
          <Route path='/Support' element={<Support/>}/>
          <Route path='/Login' element={<Authentication/>}/>
          <Route path='/Estimate' element={<Estimate/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default MainHome;
