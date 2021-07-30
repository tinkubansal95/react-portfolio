import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [emailErr, setEmailErr] = useState();
  const [nameErr, setNameErr] = useState();
  const [messageErr, setMessageErr] = useState();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    if (target.name === "email") {
      setEmail(target.value);
      !validateEmail(target.value)
        ? setEmailErr("Your email is invalid")
        : setEmailErr("");
      return;
    }
    if (target.name === "name") {
      setName(target.value);
      target.value.trim() === ""
        ? setNameErr("Please enter a name")
        : setNameErr("");
      return;
    }
    if (target.name === "message") {
      setMessage(target.value);
      target.value.trim() === ""
        ? setMessageErr("Please enter a message")
        : setMessageErr("");
      return;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleInputChange(e);

    if (name.trim() === "") {
      setNameErr("Name is required!");
      return;
    }
    if (email.trim() === "" || !validateEmail(email)) {
      setEmailErr("Valid Email is required!");
      return;
    }
    if (message.trim() === "") {
      setMessageErr("Message is required!");
      return;
    }
  };

  return (
    <div class="container pt-3 contact">
      <div class="row justify-content-center ">
        <div class="col-md-8">
          <h1 class="text-center">Get in Touch!</h1>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12 pt-2 px-2">
          <form>
            <div class="form-group px-3">
              <label for="name">
                <h4>Name:</h4>
              </label>
              <input
                type="text"
                class="form-control "
                name="name"
                value={name}
                aria-describedby="nameHelp"
                onChange={handleInputChange}
              />
              <h5 class="mt-2">{nameErr}</h5>
            </div>
            <div class="form-group p-3">
              <label for="email">
                <h4>Email address:</h4>
              </label>
              <input
                type="email"
                class="form-control "
                name="email"
                value={email}
                aria-describedby="emailHelp"
                onChange={handleInputChange}
              />
              <h5 class="mt-2">{emailErr}</h5>
            </div>
            <div class="form-group px-3">
              <label for="message">
                <h4>Message</h4>
              </label>
              <textarea
                class="form-control"
                name="message"
                value={message}
                rows="3"
                onChange={handleInputChange}
              ></textarea>
              <h5 class="mt-2">{messageErr}</h5>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="btn btn-primary m-3 "
                id="contactButton"
                onClick={handleFormSubmit}
              >
                <h5>Submit</h5>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
