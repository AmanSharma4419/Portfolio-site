import React from "react";
import Navbar from "./Navbar";

export default function About() {
  const currentDate = new Date();
  const exactDate = currentDate.toDateString();
  return (
    <>
      <Navbar />
      <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
          <div class="container" style={{ display: "flex" }}>
            <p class="image is-128x128 ">
              <img
                class="is-rounded"
                style={{
                  position: "absolute",
                  justifyContent: "center",
                  border: "2px solid black",
                }}
                src={require("../Img/image.jpg")}
              />
            </p>
            <div style={{marginLeft:"3% "}}>
              <h2 class="subtitle">
                Aman Full-stack Developer
                <hr />
                <p>
                  Can handle both frontend, as well as backend, of application
                  using latest trending techonologies.
                </p>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <article class="media">
        <figure class="media-left"></figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Aman Sharma</strong>
              <br />
              <small>{exactDate}</small>
              <hr style={{ width: "100px" }} />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
