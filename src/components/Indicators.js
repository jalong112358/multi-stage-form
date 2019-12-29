import React from "react";
import { Context } from "../contexts/Context";

var progressBar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};
var progressNode = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "35px",
  height: "35px",
  display: "flex",

  backgroundColor: "rgba(255, 255, 255, 0.35)",
  borderRadius: "50%"
};
var progressNodeActive = {
  backgroundColor: "#ADEFD1FF",
  color: "#00203FFF",
  transform: "scale(1.5)",
  transition: "all 500ms ease"
};
var nodeSeperator = {
  height: "2px",
  width: "210px",
  backgroundColor: "rgba(255, 255, 255, 0.35)"
};
var nodeSeperatorActive = {
  backgroundColor: "#ADEFD1FF",
  transition: "background-color 500ms ease"
};
export default function Indicators() {
  return (
    <Context.Consumer>
      {context => {
        const { currentStage } = context;

        return (
          <div style={progressBar}>
            <div
              style={
                currentStage > 0
                  ? { ...progressNode, ...progressNodeActive }
                  : progressNode
              }
            >
              1
            </div>
            <div
              style={
                currentStage > 1
                  ? { ...nodeSeperator, ...nodeSeperatorActive }
                  : nodeSeperator
              }
            ></div>
            <div
              style={
                currentStage > 1
                  ? { ...progressNode, ...progressNodeActive }
                  : progressNode
              }
            >
              2
            </div>
            <div
              style={
                currentStage > 2
                  ? { ...nodeSeperator, ...nodeSeperatorActive }
                  : nodeSeperator
              }
            ></div>
            <div
              style={
                currentStage > 2
                  ? { ...progressNode, ...progressNodeActive }
                  : progressNode
              }
            >
              3
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
