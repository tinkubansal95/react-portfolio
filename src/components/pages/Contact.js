import React from "react";

const emailVal = "";
const nameVal = "";
const messageVal = "";
export default function Contact() {
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
                id="name"
                aria-describedby="nameHelp"
              />
              <h5 class="mt-2">{nameVal}</h5>
            </div>
            <div class="form-group p-3">
              <label for="email">
                <h4>Email address:</h4>
              </label>
              <input
                type="email"
                class="form-control "
                id="email"
                aria-describedby="emailHelp"
              />
              <h5 class="mt-2">{emailVal}</h5>
            </div>
            <div class="form-group px-3">
              <label for="message">
                <h4>Message</h4>
              </label>
              <textarea class="form-control" id="message" rows="3"></textarea>
              <h5 class="mt-2">{messageVal}</h5>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="btn btn-primary m-3 "
                id="contactButton"
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
