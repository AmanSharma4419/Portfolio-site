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
            <div style={{ height: "200px", width: "200px" }}>
              <img
                style={{
                  justifyContent: "center",
                }}
                src={require("../Img/image.jpg")}
              />
            </div>
            <div style={{ marginLeft: "2% " }}>
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

              <p>
                <strong>H</strong>ey, this is my homepage, so I have to say
                something about myself. Sometimes it is hard to introduce
                yourself because you know yourself so well that you do not know
                where to start with.but i have a lot to say.Here its go.
              </p>
              <br />
              <p>
                I am a person who is positive about every aspect of life. There
                are many things I like to do, to see, and to experience. I like
                to read, I like to write I like to think, I like to dream I like
                to talk, I like to listen.
              </p>
              <p>
                I was pursuing my btech from a engineering college.but i was not
                satisfy with the education sysytem process there and i found
                that enviroment is not for me.so was looking for right platform
                and enviroment where actully i can gain quality stuff and can
                grow and that time i came to know about alt-campus. then i
                decided to join alt-campus and drop college. i have completed my
                full stack web development course from alt-campus and now
                looking for new opputunites and platforms for designation of
                full stack developer.
              </p>
            </p>
            <strong>Warm-regards</strong>
          </div>
        </div>
      </article>
    </>
  );
}
