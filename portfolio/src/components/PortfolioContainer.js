import React, { Component } from "react";
import Header from "./Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else {
      return <Contact />;
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
