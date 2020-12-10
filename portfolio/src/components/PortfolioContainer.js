import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "../index.css";
import Header from "./Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  
  goTo = event => {
    event.preventDefault();

    window.open(event.target.attributes.getNamedItem("link").value, '_blank'); 
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default PortfolioContainer;
