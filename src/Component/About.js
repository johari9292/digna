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
          <header className="section-header">
            <h3>About <img src="img/digna_logo_no_slogan.png"  alt="image" /></h3>
            <p>The team of DEXT.AI* has developed DIGNA - a revolutionary solution for
automated anomaly detection. It utilizes the asset of historical data in your Data
Warehouse to build machine learning models that can detect anomalies in new
data deliveries.</p>
          </header>
          <div className="row about-cols">
            <div className="col-md-4 wow fadeInUp">
              <div className="about-col">
                <div className="img">
                  {/* <img src="img/about-missiond.jpg" alt=" Mission" className="img-fluid" /> */}
                 
                  <div className="icon"><i className="ion-ios-eye-outline" /></div>
                  <br></br>
                </div>
                <h2 className="title"><a href="#">ANOMALY DETECTION
FOR DATA WAREHOUSES</a></h2>
                <p>
                Data quality issues are frequently caused by corrupted data delivery and unaligned
changes or releases in source system. In many cases, the negative impact of these
issues becomes only visible in the final report often undiscovered until data reports
are published. Usual strategies to handle the risk of wrong data and delays are
comprehensive rulesets of data quality checks and manual checks, performed by
domain experts.<br></br> <br></br> <br></br>
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="about-col">
                <div className="img">
                  {/* <img src="img/about-plan.jpg" alt="" className="img-fluid" /> */}
                  <div className="icon"><i className="ion-ios-eye-outline" /></div>
                  <br></br>
                </div>
                <h2 className="title"><a href="#">HIGHLY VERSATILE
WITH MINIMAL MAINTENANCE</a></h2>
                <p>
                DIGNA can be used in many places (layers) in a Data Warehouse: it can check incoming data, validate
data after the load and even identify anomalies in reports you deliver to your users. DIGNA comes with a
GUI - Client for ad-hoc analysis and a command line interface for integration in an ETL process. The use
of artificial intelligence enables DIGNA to understand the structure of your data very quickly. True to the
motto, detect anomalies before anyone else does!<br></br><br></br>
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="about-col">
                <div className="img">
                  {/* <img src="img/about-visionv.jpg" alt="vision" className="img-fluid" /> */}
                  <div className="icon"><i className="ion-ios-eye-outline" /></div>
                  <br></br>
                </div>
                <h2 className="title"><a href="#">BENEFITS
OF USING DIGNA</a></h2>
<br></br>
                <p>
                Human-based monitoring is expensive, error-prone and infeasible in a large
DWH. DIGNA will learn all patterns in your data and inform you about suspicious
deviations and optionally, interact with the data warehouse refreshing/publishing
processes. DIGNA works for you day and night, even when your employees are
sleeping.
By capturing issues early in the process, the data warehouse team will need to
spend less efforts in fixing erroneous data  and it will be able to deliver good data quality in better time.
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