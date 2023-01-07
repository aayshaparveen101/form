import React from "react";
import Inputbox from "../components/Inputbox";
import SignUpStyles from "./SignUpStyles.css" ;
function SignUp () {
    return (
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="Box" style={{ width: "35%" }}>
          <h2 style={{ fontSize: "40px" }}>Sign Up</h2>
          <form>
            <Inputbox placeholder="full name" type="name" />
            
            {/* <input
              type="name"
              placeholder="Full Name"
              style={{
                width: "90%",
                border: "2px solid white",
                padding: "5px 10px",
                borderRadius: "0px 10px",
                boxShadow: "0px 0px 2px 1px",
              }}
            /> */}
            <p style={{ color: "red", textAlign: "left" }}>
              Mandatory field cannot be empty
            </p>
            <Inputbox placeholder="email address" type="email"/>
            {/* <input
              type="Email"
              placeholder="Email Address*"
              style={{
                width: "90%",
                border: "2px solid white",
                padding: "5px 10px",
                borderRadius: "0px 10px",
                boxShadow: "0px 0px 2px 1px",
              }}
            /> */}
            <p style={{ color: "red", textAlign: "left" }}>
              Mandatory field cannot be empty
            </p>
            <Inputbox placeholder="password" type="password"/>
            {/* <input
              type="Password"
              placeholder="Password*"
              style={{
                width: "90%",
                border: "2px solid white",
                padding: "5px 10px",
                borderRadius: "0px 10px",
                boxShadow: "0px 0px 2px 1px",
              }}
            /> */}
            <p style={{ color: "red", textAlign: "left" }}>
              Mandatory field cannot be empty
            </p>
            <Inputbox placeholder="mobile number" type="tel"/>

            {/* <input
              type="Number"
              placeholder="Mobile Number"
              style={{
                width: "90%",
                border: "2px solid white",
                padding: "5px 10px",
                borderRadius: "0px 10px",
                boxShadow: "0px 0px 2px 1px",
              }}
            /> */}
          </form>
          <div
            className="box"
            style={{ background: "#10f110", borderRadius: "0px 10px" }}
          >
            <h1 style={{ padding: "5px", fontSize: "20px" }}>Sign Up</h1>
          </div>
        {/* <footer>
          <p style={{fontFamily:"bold",fontSize:"20px"}}>Already have an account? <span style={{color:"darkgreen",textDecoration:"underline" }}>Sign In</span></p>
          <h5 style={{font:"small-caption"}}>
            By continuing you agreeing to our <span style={{textDecoration:"underline", fontFamily:"bold"}}>Terms of Service</span> and <span style={{textDecoration:"underline",fontFamily:"bold"}}>Privancy
            Pollcy</span>
          </h5>
        </footer> */}
        </div>

      </div>
    );
  
}

export default SignUp;
