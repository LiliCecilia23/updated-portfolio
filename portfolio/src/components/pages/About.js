import React from "react";
import Header from "../Header";
// import "../../index.css";

function About (props) {

    return (
        <div>
            <Header />
            <div className="row mt-3 mb-5 lato">
                <div className="mx-5 py-3 container rounded float-left mb-5" style={{width: "fit-content"}}>
                    <div className="p-3">
                        <img src="https://res.cloudinary.com/dsiaveqw7/image/upload/v1607547115/portfolio/picofme_cg5f0n.jpg" className="rounded-circle" alt="Lili Clift" style={{border: "dashed 3px white", height: "250px"}} />
                    </div>
                    <div className="p-3 text-center">
                        <h1>⟹ Profiles ⟸</h1>
                        <button type="button" onClick={props.goTo} link="https://github.com/LiliCecilia23" rel="noreferrer" className="btn btn-outline-light rounded mt-3 mr-3"><i className="fab fa-github mr-1"></i>GitHub</button>
                        <button type="button" onClick={props.goTo} link="https://www.linkedin.com/in/lili-clift/" rel="noreferrer" className="btn btn-outline-light rounded mt-3"><i className="fab fa-linkedin mr-1"></i>LinkedIn</button>
                    </div> 
                </div>

                <div className="container p-3 rounded col-md-6 float-right text-center mb-5" style={{height: "fit-content"}}>
                    <div className="row">
                        <h1>⟹ About Me ⟸</h1>
                    </div>
                    <div className="row px-3">
                        <div className="p-3 mt-n1 mb-n1 lato">
                            <p className="pgraph">
                                Hello! My name is Lili Clift. I am a student in full-stack web development at The University of Texas' 
                                Coding Bootcamp. I graduated from UT in 2014 with my Bachelor of 
                                Arts degree in English literature. While I enjoyed studying English; 
                                after graduating, I found there was little opportunity for work
                                in that field, so I decided to pursue my interest in coding! 
                            </p>
                            <p className="text-break pgraph">
                            Since starting the bootcamp, I have worked with HTML5, CSS3, React, Bootstrap, JavaScript,
                            Node, jQuery, MySQL, Sequelize, MongoDB, as well as various web APIs. I have developed
                            applications using all of these technologies, and have recently started some
                            small freelance projects. I'd love to work with you! 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;