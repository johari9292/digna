import React, { Component } from "react";
import Responsive from 'react-responsive-decorator';

// import { BrowserRouter as Router } from 'react-router-dom';
import {  Navbar,  NavbarBrand, Nav,NavItem,NavLink,Container} from 'reactstrap';

class NavbarPage extends Component {


render() {
  return ( 
   
    <div id="header_outer " >
		<div className="container">
			<div className="header_section">
				<div className="logo"><a href="javascript:void(0)"><img src="img/Header.png" alt=""/></a></div>
				<nav className="nav  " id="nav">
					<ul className="toggle">
						<li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
						<li><a href="#">Services</a></li>
				
						<li><a href="#">Contact</a></li>
            <li><a href="#" className="learn_more2">Request a Demo</a> </li>
					</ul>
					<ul className="">
					<li><a href="#">Home</a></li>
            <li><a href="#r">About us</a></li>
						<li><a href="#">Services</a></li>
				
						<li><a href="#">Contact</a></li>
            <li><a href="#" className="learn_more2">Request a Demo</a> </li>
					</ul>
				</nav>
				<a className="res-nav_click animated wobble wow" href="javascript:void(0)"><i className="fa-bars"></i></a> </div>
		</div>
	</div>
    );
  }
}

export default Responsive(NavbarPage);