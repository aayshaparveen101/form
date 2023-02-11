import React, { useState } from "react";
import InputBox from "./InputBox.css"

const Inputbox = (props) => {
  // console.log("Name", props.value);
  // console.log("placeholder", props.placeholder);
  // console.log("changehandler", props.onChange);
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="inputField"
      value={props.value}
      onChange={props.onChange}
      // style={{
      //   width: "90%",
      //   border: "2px solid white",
      //   padding: "5px 10px",
      //   borderRadius: "0px 10px",
      //   boxShadow: "0px 0px 2px 1px",
      // }}
    />
  );
};

export default Inputbox;
