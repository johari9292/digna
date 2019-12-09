import React, { Component } from "react";

class  App extends React.Component{
  constructor() {
    super();
   
  }  

 render(){
   return(
    <div id="intro">  
    <div className="intro-container">
    <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
      <ol className="carousel-indicators" />
      <div className="carousel-inner" role="listbox">
        
        <div className="carousel-item active">
          <div className="carousel-background"><img src="img/intro-carousel/3.jpg"  alt="image" /></div>
          <div className="carousel-container">
            <div className="carousel-content">
                <h1 ><img src="img/digna_logo_no_slogan.png"  alt="image" /></h1>
              <h2>Inelligient Data Ispection</h2>
              <p>Here comes what you want to put...... bla bla bla....... and ...... .or ....... .or.......</p>
              <a href="#featured-services" className="btn-get-started scrollto">Request Queote</a>
            </div>
          </div>
        </div>
         <div className="carousel-item">
          <div className="carousel-background"><img src="img/intro-carousel/1.png" alt="" /></div>
          <div className="carousel-container">
            <div className="carousel-content">
            {/* <h1 ><img src="img/digna_logo_no_slogan.png"  alt="image" /></h1> */}
            <h1></h1>
              <h2>AI Technique</h2>
              <p>Some thing that describe above diffrent from first one</p>
              <a href="#featured-services" className="btn-get-started scrollto">Request Quote</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-background"><img src="img/intro-carousel/2.png" alt="" /></div>
          <div className="carousel-container">
            <div className="carousel-content">
            {/* <h1 ><img src="img/digna_logo_no_slogan.png"  alt="image" /></h1> */}
            <h1></h1>
              <h2>Data Analaysis</h2>
              <p>Describing above diffrent from other 2</p>
              <a href="#featured-services" className="btn-get-started scrollto">Request Quote</a>
            </div>
          </div>
        </div>
        
      <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div></div> </div>
       
   )
 }
}



export default App;