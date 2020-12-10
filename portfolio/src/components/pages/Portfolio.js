import React from "react";
import Header from "../Header";
import Project from "../Project";
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio () {
    return (
        <div>
            <Header />
            <div className="container p-3 mb-5 rounded text-center col-md-10">
                <div className="text-info pl-3 mb-2">
                    <h1>⟹ Portfolio ⟸</h1>
                </div>
                <Project />
            </div>
        </div>
    );
};

export default Portfolio;