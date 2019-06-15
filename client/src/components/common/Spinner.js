import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div>
      <div class="lds-roller" style={{ width: "100px", margin: "auto", display: "block" }}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      {/* <img
        src={spinner}
        alt="Loading"
        style={{ width: "200px", margin: "auto", display: "block" }}
      /> */}
    </div>
  );
};

export default Spinner;
