import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Component/NavBar'
import Home from './Component/home'
import About from './Component/About'
import Featureservice from './Component/Featureservice'
import Responsive from 'react-responsive-decorator';
import {  Navbar,  NavbarBrand, Nav,NavItem,NavLink,Container} from 'reactstrap';
// import { Button } from 'reactstrap';

class  App extends React.Component{
  constructor() {
    super();
   
  }  

 render(){
   return(
     <div><br></br><br></br>
       <Navbars>
       
     </Navbars>
     <Home/>
     
      </div>
       
   )
 }
}



export default App;