import React from "react";
import techBlog from "../../images/techBlog.png";
import noteTaker from "../../images/noteTaker.png";
import goodGaming from "../../images/goodGaming.png";
import passwordGenerator from "../../images/passwordGenerator.png";
import weatherDashboard from "../../images/weatherDashboard.png";
import workDayScheduler from "../../images/workDayScheduler.png";

export default function Blog() {
  return (
    <section id="Projects">
      <section class="projects">
        <section class="card">
          <header>Tech Blog</header>

          <img src={techBlog} alt="Tech Blog" />
          <p>
            A blog site, where developers can publish their blog posts and
            comment on other developers’ posts as well. This app follows the MVC
            paradigm in its architectural structure and express-session for
            authentication.
          </p>
          <div class="text-center">
            <button id="gitLink">
              <a
                href="https://github.com/tinkubansal95/tech-blog"
                target="_blank"
              >
                <i class="fab fa-github"></i> Github
              </a>
            </button>
            <button id="gitLink">
              <a href="https://techbookblog.herokuapp.com/" target="_blank">
                <i class="fas fa-laptop-code"></i> Live
              </a>
            </button>
          </div>
        </section>
        <section class="card">
          <header>Good Gaming</header>
          <img src={goodGaming} alt="Good Gaming" />
          <p>
            Good Gaming is all about finding your gaming buddy online. User can
            have a profile and can add games to their collection. Same game can
            be added into other user’s collection as well. This site is deployed
            to Heroku.
          </p>
          <div class="text-center">
            <button id="gitLink">
              <a
                href="https://github.com/KorolyovaLara/TeamProject-2"
                target="_blank"
              >
                <i class="fab fa-github"></i> Github
              </a>
            </button>
            <button id="gitLink">
              <a href="https://goodgaming.herokuapp.com/" target="_blank">
                <i class="fas fa-laptop-code"></i> Live
              </a>
            </button>
          </div>
        </section>
        <section class="card">
          <header>Weather Dashboard</header>
          <img src={weatherDashboard} alt="Weather Dashboard" />
          <p>
            A Weather Dashboard, that fetches the data from API(OpenWeather) and
            displays weather conditions, the temperature, the humidity, the wind
            speed, and the UV index of current day and next five days
            dynamically.
          </p>
          <div class="text-center">
            <button id="gitLink">
              <a
                href="https://github.com/tinkubansal95/weather-dashboard"
                target="_blank"
              >
                <i class="fab fa-github"></i> Github
              </a>
            </button>
            <button id="gitLink">
              <a
                href="https://tinkubansal95.github.io/weather-dashboard/"
                target="_blank"
              >
                <i class="fas fa-laptop-code"></i> Live
              </a>
            </button>
          </div>
        </section>
        <section class="card">
          <header>Work-Day-Scheduler</header>
          <img src={workDayScheduler} alt="Work-Day-Scheduler" />
          <p>
            An application that allows a user to save events for each hour of
            the day by modifying starter code. This app features dynamically
            updated HTML and CSS powered by jQuery.
          </p>
          <div class="text-center">
            <button id="gitLink">
              <a
                href="https://github.com/tinkubansal95/work-day-scheduler"
                target="_blank"
              >
                <i class="fab fa-github"></i> Github
              </a>
            </button>
            <button id="gitLink">
              <a
                href="https://tinkubansal95.github.io/work-day-scheduler/"
                target="_blank"
              >
                <i class="fas fa-laptop-code"></i> Live
              </a>
            </button>
          </div>
        </section>
        <section class="card">
          <header>Password Generator</header>
          <img src={passwordGenerator} alt="Password Generator" />
          <p>
            An application that enables employees to generate random passwords
            based on criteria that they’ve selected. This app features
            dynamically updated HTML and CSS.
          </p>
          <div class="text-center">
            <button id="gitLink">
              <a
                href="https://github.com/tinkubansal95/password-generator"
                target="_blank"
              >
                <i class="fab fa-github"></i> Github
              </a>
            </button>
            <button id="gitLink">
              <a
                href="https://tinkubansal95.github.io/password-generator/"
                target="_blank"
              >
                <i class="fas fa-laptop-code"></i> Live
              </a>
            </button>
          </div>
        </section>
        <section class="card">
          <header>Note Taker</header>
          <img src={noteTaker} alt="Note Taker" />
          <p>
            Note Taker that can be used to write, save and delete notes. This
            application uses an Express.js back end and saves and retrieves note
            data from a JSON file.
          </p>
          <div class="text-center">
            <button id="gitLink">
              <a
                href="https://github.com/tinkubansal95/note-taker"
                target="_blank"
              >
                <i class="fab fa-github"></i> Github
              </a>
            </button>
            <button id="gitLink">
              <a href="https://safe-spire-05163.herokuapp.com/" target="_blank">
                <i class="fas fa-laptop-code"></i> Live
              </a>
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}
