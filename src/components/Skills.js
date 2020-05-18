import React from "react";
import Navbar from "./Navbar";

export default function Skills() {
  return (
    <>
      <Navbar />
      <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Complete Skill Set</h1>
            <h2 class="subtitle">
              Skills Which Are Used By Aman Sharma For Software Development.
            </h2>
          </div>
        </div>
      </section>
      <hr/>
      <div class="content">
        <div style={{marginLeft:"42%"}}>
          <h3 class="subtitle">Languages</h3>
          <ol type="1">
            <li>Html 5</li>
            <li>Css 3</li>
            <li>JavaScript</li>
          </ol>
          <h3 class="subtitle">Frontend-Libraries</h3>
          <ol type="1">
            <li>ReactJs</li>
            <li>Redux</li>
          </ol>
          <h3 class="subtitle">UI-Frameworks</h3>
          <ol type="1">
            <li>Material UI</li>
            <li>Bulma Css</li>
          </ol>
          <h3 class="subtitle">Backend-Enviromnet & Frameworks</h3>
          <ol type="1">
            <li>Nodejs</li>
            <li>ExpressJs</li>
          </ol>
          <h3 class="subtitle">Databases</h3>
          <ol type="1">
            <li>Nosql-MongoDB</li>
            <li>Mysql</li>
          </ol>
        </div>

        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              <strong>Developed by </strong>
              <a href="https://github.com/AmanSharma4419">Aman Sharma</a>. The
              source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
              The website content is licensed
              <a href="https://github.com/AmanSharma4419">@amansharma</a>.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
