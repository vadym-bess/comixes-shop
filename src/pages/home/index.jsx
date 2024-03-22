import React from 'react';
import HeroSection from '../../components/heroSection';
import Populars from '../../components/populars';
import ComixesSection from '../../components/comixesSection';
import BlueSection from '../../components/blueSection';
import UserSection from '../../components/userSection';
import MapSection from '../../components/mapSection';


function Home() {

  

    return(
        <>
      <HeroSection />
      <Populars />
      <div id="comixes">
          <ComixesSection />
      </div>
      <div id="aboutUs">
      <BlueSection />
      </div>
      <UserSection/>
      <div id="comunication">
      <MapSection/>
      </div>
      
        </>
    )
}

export default Home;