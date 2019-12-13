import React, { Component } from "react";
import Responsive from 'react-responsive-decorator';

class  App extends React.Component{
  constructor() {
    super();
   
  }  

 render(){
   return(
    <div >  
    
	<div id="top_content" className="top_cont_outer">
		<div  className="top_cont_inner" >
			<div className="container">
				<div className="top_content">

					<div className="row">
					
						<div className="col-lg-5 col-sm-7">
							<div className="top_left_cont flipInY abc wow animated">
								<h3>Automated Anamoly Detection</h3>
								<h2>Intelligent<br>
								</br> Data Inspection</h2>
								<p> Automated Monitering and Error Detection<br></br>
								in Data Warehouse using Arificial Intelligence </p>
								<a href="#service" className="learn_more2">Request a Demo</a> </div>
						</div>
						<div className="col-lg-7 col-sm-5"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
  
  </div>
      
   )
 }
}



export default Responsive(App);