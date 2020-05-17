import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  let templateParams = {
    to_name: "Aman Sharma",
    from_name: name,
    from_email: email,
    reply_to: email,
    message_html: message,
  };

  const handleSubmit = (e) => {
    console.log(
      process.env.REACT_APP_API_gmail,
      process.env.REACT_APP_API_template,
      templateParams,
      process.env.REACT_APP_API_user
    );
    emailjs
      .send(
        process.env.REACT_APP_API_gmail,
        process.env.REACT_APP_API_template,
        process.env.templateParams,
        process.env.REACT_APP_API_user
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <>
      <Navbar />
      <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Start a conversation.</h1>
            <hr />
            <h2 class="subtitle">
              If something sparked you, touched you, or you have a feedback,
              don't deprive me of a heartwarming message.
            </h2>
          </div>
        </div>
      </section>
      <section class="hero is-light">
        <div style={{ width: "40%", marginLeft: "10px", marginTop: "20px" }}>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Enter Name"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                type="Email"
                class="input"
                placeholder="Email input"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                class="textarea"
                type="text"
                placeholder="Enter Text"
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
              ></textarea>
            </div>
          </div>

          <div
            class="field is-grouped"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div class="control">
              <button
                class="button is-link"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
