import './App.css';
import React, { useEffect, useState } from 'react';
import HeaderMob from './components/headerMob';
import HeaderWeb from './components/headerWeb';
import { useMediaQuery } from 'react-responsive';
import Home from './pages/home';
import ConfidentialPolicy from './pages/confidentialPolicy';
import CookiePolicy from './pages/cookiePolicy';
import RulesAndConditions from './pages/rulesAndConditions';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/footerSection';
import Modal from './components/modal';
import Cart from './pages/cart';
import axios from 'axios';



function App() {
  const isDesktop = useMediaQuery({ minWidth: 1140 });
  const [items, setItems] = useState([]);


  useEffect(() => {
   
    axios.get('https://65fe77d8b2a18489b3861712.mockapi.io/comixes').then((res) => {
      setItems(res.data);
      console.log(res.data)
    });
  }, []);

  // const onAddToCart = (obj) => {
  //   axios.post('https://65fe77d8b2a18489b3861712.mockapi.io/cart', obj);
  //   if (!cartItems.some((item) => item.id === obj.id)) {
  //     setCartItems((prev) => [...prev, obj]);
  //   }
  // };



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
      <Route exact path="/" element={<Home items={items}  />}/>     
      <Route path="/confidential" element={ <ConfidentialPolicy/>}/>
      <Route path="/cookiepolicy" element={<CookiePolicy/>}/>
      <Route path="/rooles" element={<RulesAndConditions/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<Navigate to="/" />}/> 
      

</Routes>
       <Modal/>
       <Footer/>
    </>
  );
}

export default App;
