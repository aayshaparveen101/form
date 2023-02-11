import React from "react"; 
import Footerstyle from "../components/Footerstyle.css"
import { Link } from "react-router-dom";
 function Footer(){
    return(
       
        <footer>
          <p>Already have an account? 
           <Link to="SignIn">SignIn</Link>
          </p>
          <h5>
            By continuing you agreeing to our <span >Terms of Service</span> and <span>Privancy
            Pollcy</span>
          </h5>
        </footer>
        
    );
 }
 export default Footer;
       