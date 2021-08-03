import React from "react";
import ResumeTinku from "../../assets/ResumeTinku.pdf";

export default function Home() {
  return (
    <div class="container pt-3 resume">
      <div class="row justify-content-center ">
        <div class="col-md">
          <h1 class="text-center">My Resume</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <a href={ResumeTinku} download="Resume_Tinku">
            <h4 class="text-center">Download Resume</h4>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h4>Computer Science applied to JavaScript</h4>
          <ul>
            <li>Design Patterns</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Big O Notation</li>
          </ul>
          <h4>Browser Based Technologies</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
            <li>Local Storage, Session Storage, IndexedDB</li>
            <li>React.js</li>
          </ul>

          <h4>Agile Development</h4>
          <ul>
            <li>Kanban, Project Management</li>
            <li>Issues</li>
            <li>User Stories</li>
            <li>Sprints</li>
            <li>Standup</li>
            <li>Retros</li>
          </ul>
          <h4>Deployment</h4>
          <ul>
            <li>Heroku</li>
            <li>Git</li>
          </ul>
        </div>
        <div class="col">
          <h4>Databases</h4>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
          <h4>Analysis Services</h4>
          <ul>
            <li>SSIS</li>
            <li>SSAS</li>
            <li>Power BI</li>
          </ul>
          <h4>Server-Side Development</h4>
          <ul>
            <li>Express</li>
            <li>User Authentication</li>
            <li>Sequelize</li>
            <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            <li>Java</li>
            <li>Python</li>
            <li>RESTful Web Services</li>
          </ul>
          <h4>Accessibility</h4>
          <ul>
            <li>Semantic HTML</li>
          </ul>
          <h4>Quality and Performance</h4>
          <ul>
            <li>Unit Testing</li>
            <li>Google Lighthouse</li>
            <li>Webpack</li>
            <li>PWAs (Progressive Web Apps)</li>
            <li>Lazy Loading</li>
            <li>Service Workers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
