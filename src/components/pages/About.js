import React from "react";
import pic from "../../images/pic.jpg";

export default function About() {
  return (
    <div class="container pt-5 about">
      <div class="row justify-content-center ">
        <div class="col-md-2">
          <h1 class="aboutMe">About me</h1>
        </div>
      </div>
      <div class="row justify-content-center align-items-center pt-5">
        <div class="col-lg-3 text-center p-2">
          <img src={pic} alt="Tinku's Pic"></img>
        </div>
        <div class="col-lg-8 p-2">
          <p>
            Web Developer with a Certificate in Full Stack Web Development from
            Monash University, who enjoys working with React and JavaScript.
            With a B.Tech. in Computer Science and Engineering, and work
            experience as a Software Developer, skills include MySQL, SSIS, SSAS
            and Power BI. Currently working in warehousing, transferable skills
            include managing a team of six, working to deadlines and quality
            administration.
          </p>
        </div>
      </div>
    </div>
  );
}
