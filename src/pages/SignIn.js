import React from "react";
import Inputbox from "../components/Inputbox";
// import SignUpStyles from "./SignUpStyles.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
function SignIn() {
  const [state, setState] = useState("");

  function changeHandler(e) {
    console.log(e.target.value);
  }

  return (
    <>
    <div className="main-container">
      <div className="container">
        <h2>Sign In</h2>
        <form>
          <Inputbox
            placeholder="full name"
            type="name"
            onChange={changeHandler}
          />

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
          <Inputbox
            placeholder="password"
            type="password"
            onChange={changeHandler}
          />

          <p style={{ color: "red", textAlign: "left" }}>
            Mandatory field cannot be empty
          </p>
          <Inputbox
            placeholder="mobile number"
            type="tel"
            onChange={changeHandler}
          />
        </form>
        <button >Sign In</button>
      </div>
    </div>
    <footer>
          <p>Already have an account? 
           <Link to="SignUp">SignUp</Link>
          </p>
          <h5>
            By continuing you agreeing to our <span >Terms of Service</span> and <span>Privancy
            Pollcy</span>
          </h5>
        </footer>
    </>
  );
}

export default SignIn;
