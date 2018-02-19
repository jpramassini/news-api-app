import React from 'react';

export default () => {
  return(
    <div className="page-wrapper">
    <div className="page-wrapper-dark">
      <div className="mybackground center-full-page">
        <h1 className="display-1 heading-padding my-text-white reem-kufi-font">nowfeed.</h1>
        <h2 className="merriweather-font my-text-white">Simplified news for today.</h2>
      </div>
    </div>

      <div id="outlets" className="container-fluid white-container text-center">
        <h2 className="merriweather-font section-heading-dark">Your favorite news outlets.</h2>
        <h2 className="merriweather-font">Together.</h2>
        <div className="row text-center align-baseline">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg">
            <img className="align-baseline" src="./assets/CNN.svg" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg">
            <img className="align-baseline" src="./assets/CBS_News.svg" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg">
            <img className="align-baseline" src="./assets/Fortune-logo-2016.svg" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg">
            <img className="align-baseline" src="./assets/New_Bloomberg_Logo.svg" />
          </div>
        </div>
        <div className="row text-center align-baseline">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg">
            <img className="align-baseline" src="./assets/POLITICOLOGO.svg" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg">
            <img className="align-baseline" src="assets\The-Wall-Street-Journal.svg" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg">
            <img src="./assets/NewYorkTimes.svg" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg">
            <img src="./assets/BBC_News.svg" />
          </div>
        </div>
        <div className="row text-center align-baseline">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg">
            <img className="align-baseline" src="./assets/IGN_Entertainment_Logo.svg" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg">
            <img className="align-baseline" src="./assets/TechCrunch_Logo.svg" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg">
            <img src="./assets/ESPN_wordmark.svg" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg">
            <img src="./assets/Reuters_2008_logo.svg" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
