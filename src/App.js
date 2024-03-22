import './App.css';
import React from 'react';
import HeaderMob from './components/headerMob';
import HeaderWeb from './components/headerWeb';
import { useMediaQuery } from 'react-responsive';
import Home from './pages/home';
import ConfidentialPolicy from './pages/confidentialPolicy';
import CookiePolicy from './pages/cookiePolicy';
import RulesAndConditions from './pages/rulesAndConditions';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/footerSection';


function App() {
  const isDesktop = useMediaQuery({ minWidth: 1140 });



  const mainThumbStyle = {
    maxWidth: '1140px',
    margin: '0 auto',
  };

  return (
    <>
      <div style={mainThumbStyle}>
        {isDesktop ? (
          <HeaderWeb />
        ) : (
          <HeaderMob/>
        )}
      </div>
<Routes>
      <Route exact path="/" element={<Home/>}/>     
      <Route path="/confidential" element={ <ConfidentialPolicy/>}/>
      <Route path="/cookiepolicy" element={<CookiePolicy/>}/>
      <Route path="/rooles" element={<RulesAndConditions/>}/>
      <Route path="*" element={<Navigate to="/" />}/> 

</Routes>
    
       <Footer/>
    </>
  );
}

export default App;
