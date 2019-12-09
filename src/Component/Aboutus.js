import React, { Component } from "react";


class  App extends React.Component{
  constructor() {
    super();
   
  }  

 render(){
   return(
     <div>
          <div id="about">
        <div className="container">
          <header className="div-header">
            <h3>About Us</h3>
            <p>The team of DEXT.AI* has developed DIGNA - a revolutionary solution for
automated anomaly detection. It utilizes the asset of historical data in your Data
Warehouse to build machine learning models that can detect anomalies in new
data deliveries.</p>
          </header>
          <div className="row about-cols">
            <div className="col-md-4 wow fadeInUp">
              <div className="about-col">
                <div className="img">
                  <img src="img/about-missiond.jpg" alt=" Mission" className="img-fluid" />
                  <div className="icon"><i className="ion-ios-speedometer-outline" /></div>
                </div>
                <h2 className="title"><a href="#">Our Mission</a></h2>
                <p>
                 some thing thats your mission 
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="about-col">
                <div className="img">
                  <img src="img/about-plan.jpg" alt="" className="img-fluid" />
                  <div className="icon"><i className="ion-ios-list-outline" /></div>
                </div>
                <h2 className="title"><a href="#">Our Plan</a></h2>
                <p>
                some thing thats your your bussiness plan
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="about-col">
                <div className="img">
                  <img src="img/about-visionv.jpg" alt="vision" className="img-fluid" />
                  <div className="icon"><i className="ion-ios-eye-outline" /></div>
                </div>
                <h2 className="title"><a href="#">Our Vision</a></h2>
                <p>
                 something that is your vision
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{/* #about */}
      </div>
       
   )
 }
}



export default App;