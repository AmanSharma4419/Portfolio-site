import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  let templateParams = {
    from_name: name,
    from_email: email,
    message_html: message,
  };

  const handleSubmit = (e) => {
    emailjs
      .send(
        process.env.Service,
        process.env.TEMPLATE_ID,
        templateParams,
        process.env.userID
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
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Text input"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-danger"
            type="text"
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
            placeholder="Textarea"
            onChange={(e) => {
              setmessage(e.target.value);
            }}
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped">
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
    </>
  );
}
