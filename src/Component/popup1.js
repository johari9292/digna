import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from "reactjs-popup";
import { Col, Button,Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

/**
 *
 *
 * @class App
 * @extends {React.Component}
 */
class  App extends React.Component{
  constructor() {
    super();
   
  }  

 /**
  *
  *
  * @returns
  * @memberof App
  */
 /**
  *
  *
  * @returns
  * @memberof App
  */
 render(){
   return(
    <div id="pop1"> <Popup trigger={ <li>		<a href="#" className="learn_more22">Request a Demo</a> 
    </li>} position="center center" className='foo'  modal repositionOnResize style ="width:33%" >
    <Form id = "form1"><h2 style={{textAlign:"center"}}>Intelligent Data Inspection</h2>
    <p style={{textAlign:"center", color:"blue"}}>Just answer a few  simple questions<br></br> so we can personalize the right experience for you </p>
        <br></br>
          <Row form>
            <Col md={6}>
              <FormGroup id="formgroup">
                <Label id='label1'  for="exampleEmail">First name</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter your first name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup id="formgroup">
                <Label id='label1' for="examplePassword">Last name</Label>
                <Input type="text" name="password" id="examplePassword" placeholder="Enter your last name" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
          <Col md={6}>
              <FormGroup id="formgroup">
                <Label id='label1' for="examplePassword">Business email</Label>
                <Input type="text" name="password" id="examplePassword" placeholder="Enter you business email" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup id="formgroup">
                <Label id='label1' for="examplePassword">Phone number</Label>
                <Input type="text" name="password" id="examplePassword" placeholder="+54-545-3617-3451" />
              </FormGroup>
            </Col>
            </Row><Row>
            <Col md={6}>
              <FormGroup id="formgroup">
                <Label id='label1' for="examplePassword">Job title</Label>
                <Input type="text" name="password" id="examplePassword" placeholder="Enter your job title" />
              </FormGroup>
            </Col>
            </Row>
            <Row>
            <Col md={11}>
          <FormGroup style={{width:'100%'}} id="formgroup">
            <Label id='label1' for="exampleAddress2">What would you be using DIGNA for?</Label>
            <Input type="text" name="address2" id="exampleAddress2" placeholder=""/>
          </FormGroup>
          </Col>
          </Row>
          <Row>
          <Col md={11}>
          <Button style={{width:'100%'}} color='primary' id="formgroup">Request a Demo</Button>
          </Col>
          </Row>
        </Form>
      </Popup>
      </div>
       
   )
 }
}



export default App;