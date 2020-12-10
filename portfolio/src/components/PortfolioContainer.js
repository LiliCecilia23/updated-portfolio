import React, { Component } from "react";
import "../index.css";
import Header from "./Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "About"
  };

  goTo = event => {
    event.preventDefault();

    window.open(event.target.attributes.getNamedItem("link").value, '_blank'); 
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About 
        goTo={this.goTo}
      />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio 
      goTo={this.goTo}
      />;
    } else {
      return <Contact 
      goTo={this.goTo}
      />;
    }
  };

  render() {
    return (
      <div>
        <Header
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default PortfolioContainer;
