import React, { Component } from "react";
import Responsive from 'react-responsive-decorator';
import axios from 'axios';
import Popup from "reactjs-popup";
// import { BrowserRouter as Router } from 'react-router-dom';
import { Col, Button,Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './nav.css'
import Popupcomp from './popup1'
class NavbarPage extends Component {
  constructor(){
    super()
    this.state ={

    }
  }


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
         <Popupcomp/>
        
         
        </ul>
      </nav>
    </div>
  </div>

    ); }
}

export default Responsive(NavbarPage);