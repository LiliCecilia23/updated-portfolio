import React from "react";
import Header from "../Header";
import Project from "../Project";
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio () {
    return (
        <div>
            <Header />
            <div className="container p-3 mb-5 rounded text-center mx-auto" style={{width: "fit-content"}}>
                <div className="mb-2">
                    <h1>⟹ Portfolio ⟸</h1>
                </div>
                <Project />
            </div>
        </div>
    );
};

export default Portfolio;