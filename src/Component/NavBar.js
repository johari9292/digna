import React, { Component } from "react";
import Responsive from 'react-responsive-decorator';

// import { BrowserRouter as Router } from 'react-router-dom';
import {  Navbar,  NavbarBrand, Nav,NavItem,NavLink,Container} from 'reactstrap';
import './nav.css'
class NavbarPage extends Component {


render() {
  return ( 
   
	<div id="header">
    <div className="container-fluid">

      <div id="logo" className="pull-left">
        {/* <h1><a href="#intro" className="scrollto">BizPage</a></h1> */}
        
        <a href="#intro"><img src="img/Header.png" alt="" title="" /></a>
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className=" list1"><a  href="#">Home</a></li>
          <li  className=" list1"><a href="#t">About Us</a></li>
          <li  className=" list1"><a href="#">Services</a></li>
          <li  className=" list1"><a href="#">Contact</a></li>
         
         <li>		<a href="#" className="learn_more22">Request a Demo</a> 
</li>
         
        </ul>
      </nav>
    </div>
  </div>

    ); }
}

export default Responsive(NavbarPage);