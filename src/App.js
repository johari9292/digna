import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Component/NavBar'
import Home from './Component/home'
import {  Navbar,  NavbarBrand, Nav,NavItem,NavLink,Container} from 'reactstrap';
// import { Button } from 'reactstrap';

class  App extends React.Component{
  constructor() {
    super();
   
  }  

 render(){
   return(
     <div><Navbars>
       
     </Navbars>
     <Home/>
      </div>
       
   )
 }
}



export default App;