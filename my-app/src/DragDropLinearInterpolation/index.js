import React from "react";
import useLinearInterpolation from "./useLinearInterpolation";
import "./style.css";

const DragDropLinearInterpolation = () => {
  const container = document.querySelector(".container");
  useLinearInterpolation();
  return (
    <div className="container">
      <div style={{ top: "100px", left: "100px" }} className="box"></div>
      <div style={{ top: "200px", left: "200px" }} className="box"></div>
      <div style={{ top: "300px", left: "300px" }} className="box"></div>
      <div style={{ top: "400px", left: "400px" }} className="box"></div>
    </div>
  );
};

export default DragDropLinearInterpolation;
