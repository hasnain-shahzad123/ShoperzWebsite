import React from "react";
import  ReactDOM  from "react-dom";
import NavSecond from "./NavSecond";
import Slider from './Slider'
import './index.css';
import 'styled-components'
import NavBar from './NavBar';
import Benefits from "./Benefits";
import FeaturedProducts from "./FeaturedProducts";
import BigDeals from "./BigDeals";
import FooterSection from "./FooterSection";
import FooterCoupen from './FooterCoupen'
import BeneathFooter from "./BeneathFooter";
const App=()=>{
    return(
        <>
    <NavBar/>
  <NavSecond/>
  <Slider/>
  <Benefits/>
  <FeaturedProducts/>
  <BigDeals/>
  <FooterCoupen/>
  <FooterSection/>
  <BeneathFooter/>
        </>
    )
}
export default App;