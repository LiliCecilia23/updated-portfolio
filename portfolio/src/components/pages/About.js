import React from "react";

const About = () => (
    <div>
        <div className="row mt-3 mb-5 lato">
            <div className="mx-5 py-3 container rounded float-left" style="width: fit-content;">
                <div className="p-3">
                    <img src="../../assets/images/picofme.jpeg" className="rounded-circle" alt="Picture of Lili Clift" />
                </div>
                <div className="p-3 text-center">
                    <h1>⟹ Profiles ⟸</h1>
                    <button type="button" id="gitLink" className="btn btn-outline-light rounded mt-3 mr-3"><i className="fab fa-github mr-1"></i>GitHub</button>
                    <button type="button" id="liLink" className="btn btn-outline-light rounded mt-3"><i className="fab fa-linkedin mr-1"></i>LinkedIn</button>
                </div> 
            </div>

            <div className="container p-3 rounded col-md-6 float-right text-center">
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
                        Since starting the bootcamp, I have worked with HTML5, CSS3, Bootstrap, JavaScript,
                        node.js, Moment.js, jQuery, MySQL, Sequelize, MongoDB, as well as various web APIs. I have developed
                        applications using all of these technologies, and have recently started some
                        small freelance projects. I'd love to work with you, 
                            <a style="color: #D9A679;" className="satisfy ml-1 font-weight-bold" href="contact.html">let's connect!</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default About;