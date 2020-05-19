import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import validator from "validator";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [isActive, setisActive] = useState(false);
  const [textTypeCredential, settextTypeCredential] = useState(false);

  const messageText = {
    text_for_credentials: "Please Fill Your All Credentials.",
    text_for_submission:
      "Thanks For Your FeedBack Will Get In Touch Very Soon.",
    text_for_invalid_email: "Please enter valid email adress.",
  };
  let templateParams = {
    to_name: "Aman Sharma",
    from_name: name,
    from_email: email,
    reply_to: email,
    message_html: message,
  };
  const handleSubmit = (e) => {
    if (!name || !email || !message) {
      return setisActive(true), settextTypeCredential(true);
    } else if (!window.navigator.onLine) {
      return alert("PLEASE CHECK YOUR INTERNET CONNECTION.");
    } else if (!validator.isEmail(email)) {
      return alert("PLEASE ENTER VALID EMAIL.");
    } else {
      return (
        sendEmail(),
        setisActive(true),
        setmessage((e.target.value = "")),
        setname((e.target.value = "")),
        setemail((e.target.value = ""))
      );
    }
  };

  const sendEmail = async (e) => {
    const email = await emailjs
      .send(
        process.env.REACT_APP_API_gmail,
        process.env.REACT_APP_API_template,
        templateParams,
        process.env.REACT_APP_API_user
      )
      .then(
        function (response) {
          setisActive(true);
        },
        function (error) {
          console.log(error, "SOME ERROR OCCURED");
        }
      );
    return email;
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
      <section class="hero is-light" style={{ alignItems: "center" }}>
        <div style={{ width: "40%", marginLeft: "10px", marginTop: "20px" }}>
          {isActive ? (
            <article class="message is-primary">
              <div class="message-header">
                <p>Primary</p>
                <button
                  class="delete"
                  aria-label="delete"
                  onClick={() => {
                    setisActive(false);
                  }}
                ></button>
              </div>
              <div class="message-body">
                <p>
                  {textTypeCredential
                    ? messageText.text_for_credentials
                    : messageText.text_for_submission}
                </p>
              </div>
            </article>
          ) : null}

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
                value={name}
              />
            </div>
          </div>

          <label class="label">Email</label>
          <div class="control">
            <input
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              className="input"
              placeholder="Enter Email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
            />
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
                value={message}
              ></textarea>
            </div>
          </div>

          <div
            class="field is-grouped"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div class="control">
              <button class="button is-link" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
