import React, { Component } from "react";
import Responsive from 'react-responsive-decorator';


class  App extends React.Component{
  constructor() {
    super();
   
  }  

 render(){
   return(
     <div>
    <div id="top_content" className="top_cont_outer bgcolor">
		<div id ="bk" className="top_cont_inner1">
			<div className="container">
				<div className="top_content">
					<div className="row">
						<div className="col-lg-5 col-sm-7">
							<div className="top_left_cont flipInY wow animated">
								{/* <h3>Automated Anamoly Detection</h3> */}
								<h2>About/ <img src="img/Header.png"  alt="image" /></h2>
								<p> Data quality issues are frequently caused by corrupted data delivery and unaligned
changes or releases in source system. In many cases, the negative impact of these
issues becomes only visible in the final report often undiscovered until data reports
are published. </p>
								</div>
						</div>
						<div className="col-lg-7 col-sm-5 is1" >  </div>
					</div>
				</div>
			</div>
		</div>
    
  <div className="pattren" >
  <div>
          <div id="about"  >
        <div className=" pattren container">
       
          <div className="row about-cols" id="col1">
            <div className="col-md-4 wow fadeInUp">
              <div className="about-col">
                <div className="img">
					
                  <img src="img/Anomaly detection.png" alt=" Mission"  className="img-fluid icon" />
                 
                  {/* <div className="icon"><i className="ion-ios-eye-outline" /></div> */}
                  <br></br>
                </div>
                <h2 className="title"><a href="#">Anamoly<br></br> detection
for  data<br></br> warehouses</a></h2>
                <p>
                Data quality issues are frequently caused by corrupted data delivery and unaligned
changes or releases in source system. In many cases, the negative impact of these
issues becomes only visible in the final report often undiscovered until data reports
are published.<br></br> <br></br> <br></br>
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="about-col">
                <div className="img">
			
                  <img src="img/Benefits.png" alt="" className="img-fluid icon" />
                  {/* <div className="icon"><i className="ion-ios-eye-outline" /></div> */}
                  <br></br>
                </div>
                <h2 className="title"><a href="#">Highly verisatile<br></br>
with minimal<br></br>maintenance</a></h2>
                <p>
                DIGNA can be used in many places (layers) in a Data Warehouse: it can check incoming data, validate
data after the load and even identify anomalies in reports you deliver to your users. DIGNA comes with a
GUI - Client for ad-hoc analysis and a command line interface for integration in an ETL process. <br></br><br></br>
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="about-col">
                <div className="img">
			
                  <img src="img/Minimal maintenance.png" alt="vision" className="img-fluid icon" />
                  {/* <div className="icon"><i className="ion-ios-eye-outline" /></div> */}
                  <br></br>
                </div>
                <h2 className="title"><a href="#">Benefits of <br></br>
 using DIGNA</a></h2>
<br></br>
                <p>
                Human-based monitoring is expensive, error-prone and infeasible in a large
DWH. DIGNA will learn all patterns in your data and inform you about suspicious
deviations and optionally, interact with the data warehouse refreshing/publishing
processes. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{/* #about */}
     
	  </div>



  </div>
	</div>
	<div id="blackbg" >
    <div className="row" id='lastrow'>
    <div className='col-lg-4 col-md-6 col-sm-9' id="last1">
      Powered by <img src="img/dexti.png"  alt="image" />
     
    </div>
    <div  className='col-lg-4 col-md-6 col-sm-9' id='last2'>
    <a href="#service" className="last2">Request a Demo</a> 
    </div>
    <div  className='col-lg-4 col-md-6 col-sm-9' id='last3'>
    <a href="#service" className="last3">Subscribe Newsletter</a> 
    </div>
	</div>
  </div>
  </div>

       
   )
 }
}



export default Responsive(App);