import './Main.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Signing from '../Signing/Signing';
import Navigation from '../Navigation/Navigation';

function Main({ loggedIn }) {

  return (
    <>
      <Header 
        color={"grey"}
        children={
          loggedIn ? <Navigation /> :  <Signing />
        }
      />
      <main className='content'>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer /> 
    </>
  );
}

export default Main;