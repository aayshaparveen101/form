import React from "react";
import Inputbox from "../components/Inputbox";
import SignUpStyles from "./SignUpStyles.css";
import Footer from "../components/Footer"
import { useState } from "react";
// import { Link } from "react-router-dom";

function SignUp() {
  const [state, setState] = useState("");

  function changeHandler(e) {
    console.log(e.target.value);
    // setState(e.target.value);
  }

  // function onSignUp() {
  //   console.log("hello");
  // }
  return (
    <>
    <div className="main-container">
      <div className="container">
        <h2>Sign Up</h2>
        <form>
          <Inputbox placeholder="full name" type="name" onChange={changeHandler}/>

          <p style={{ color: "red", textAlign: "left" }}>
            Mandatory field cannot be empty
          </p>
          <Inputbox
            placeholder="email address"
            type="email"
            onChange={changeHandler}
          />

          <p style={{ color: "red", textAlign: "left" }}>
            Mandatory field cannot be empty
          </p>
          <Inputbox placeholder="password" type="password" onChange={changeHandler}/>

          <p style={{ color: "red", textAlign: "left" }}>
            Mandatory field cannot be empty
          </p>
          <Inputbox placeholder="mobile number" type="tel"onChange={changeHandler} />
        </form>

        <button >Sign Up</button>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default SignUp;
