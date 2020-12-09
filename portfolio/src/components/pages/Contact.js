import React from "react";

const Contact = () => (
    <div>
        <div className="container col-md-6 rounded p-3 lato pt-4">
        <div className="row rounded px-3">
          <h1>⟹ Let's Connect ⟸</h1>
        </div>
        <div className="row">
          <ul className="list-group list-group-flush pl-4">
            <li className="list-group-item"><i className="fab fa-github pink mr-2"></i><a href="https://github.com/LiliCecilia23" target="_blank">GitHub</a></li>
            <li className="list-group-item"><i className="fab fa-linkedin pink mr-2"></i><a href="https://www.linkedin.com/in/lili-clift/" target="_blank">LinkedIn</a></li>
            <li className="list-group-item"><i className="fab fa-twitter-square mr-2 pink"></i><a href="https://twitter.com/Lili_Cece23" target="_blank">Twitter</a></li>
            
          </ul>
          <ul className="list-group list-group-flush pr-4">
            <li className="list-group-item"><span className="pink satisfy mr-2">Phone</span> (512) 738 - 3988</li>
            <li className="list-group-item"><span className="pink satisfy mr-2">Email</span> liliclift@gmail.com</li>
            <li className="list-group-item"><span className="pink satisfy mr-2">Resume</span><a href="Assets/Lili Clift Resume (1) 10.2020.pdf" target="_blank">Click to View</a></li>
          </ul>
        </div>  
      </div>
    </div>
);

export default Contact;