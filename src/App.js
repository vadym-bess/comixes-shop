import './App.css';
import React from 'react';
import HeaderMob from './components/headerMob';
import HeaderWeb from './components/headerWeb';
import { useMediaQuery } from 'react-responsive';
import HeroSection from './components/heroSection';
import Populars from './components/populars';
import ComixesSection from './components/comixesSection';
import BlueSection from './components/blueSection';
import UserSection from './components/userSection';
import MapSection from './components/mapSection';

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1140 });

  const mainThumbStyle = {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    maxWidth: '1140px',
    margin: '0 auto',
  };

  return (
    <>
      <div style={mainThumbStyle}>
        {isDesktop ? (
          <HeaderWeb/>
        ) : (
          <HeaderMob/>
        )}
      </div>

      <HeroSection />
      <Populars />
      <ComixesSection/>
      <BlueSection />
      <UserSection/>
      <MapSection/>

    </>
  );
}

export default App;
