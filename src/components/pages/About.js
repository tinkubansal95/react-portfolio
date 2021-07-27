import React from "react";
import pic from "../../images/pic.jpg";

export default function About() {
  return (
    <div class="container pt-5">
      <div class="row justify-content-center ">
        <div class="col-md-2">
          <h1 class="aboutMe">About me</h1>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-3 text-center p-2">
          <img src={pic} alt="Tinku's Pic"></img>
        </div>
        <div class="col-lg-8 p-2">
          <p>
            I have done B.Tech. in Computer & Science Engineering. I am pursuing
            a Web Devlepoment Bootcamp course at Monash University. I have
            worked at Infosys as Software Engineer for six months. I have also
            worked at MAQ Software as BI Developer for about six months.
          </p>
        </div>
      </div>
    </div>
  );
}
