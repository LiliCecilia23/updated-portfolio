import React from "react";
import Header from "../Header";
import Project from "../Project";
// import "../../index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio () {
    return (
        <div>
            <Header />
            <div className="container p-3 mb-5 rounded col-md-8 text-center">
                <div className="text-info pl-3 mb-2">
                    <h1>⟹ Portfolio ⟸</h1>
                </div>
                <div className="p-3 lato">
                    <Project />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;