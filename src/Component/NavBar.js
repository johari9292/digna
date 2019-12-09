import React, { Component } from "react";

// import { BrowserRouter as Router } from 'react-router-dom';
import {  Navbar,  NavbarBrand, Nav,NavItem,NavLink,Container} from 'reactstrap';

class NavbarPage extends Component {


render() {
  return ( 
    <div id="header">
  <div className="container-fluid">
  <div id="logo" className="pull-left">
    {/* <h1><a href="#intro" className="scrollto">Digna</a></h1> */}
  
    <a href="/"><img src="img/digna_logo_no_slogan.png" alt="digna_logo"  /></a>
  </div>
  <nav id="nav-menu-container">
    <ul className="nav-menu">
      <li className="menu-active"><a href="#intro">Home</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#services">Services</a></li>
   
    

      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</div>
</div>
    );
  }
}

export default NavbarPage;