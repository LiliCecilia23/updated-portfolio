import React from "react";
import projects from "../assets/projects.json"
// import {Image} from 'cloudinary-react';
// import "../index.css";


function Project () {
    return (
        
        <div>
            
            {projects.map(project => (
                
                <div className="card m-3 p-3" key={project.title} style={{width: "284px", backgroundColor: "#D9A679"}}>
                    <img src={project.imageURL} className="card-img-top rounded-lg" alt="screenshot of app" style={{height: "150px", width: "250px"}} />
                    <div className="card-body pb-3">
                        <h5 className="card-title pt-2">{project.title}</h5>
                        <p className="card-text text-light">{project.description}</p>
                        <button className="btn btn-outline-light mb-3 satisfy"><a href={project.deployedLink} target="_blank" rel="noreferrer">See the Page</a></button>
                        <button className="btn btn-outline-light satisfy"><a href={project.repoLink} target="_blank" rel="noreferrer">See the Code</a></button>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Project;