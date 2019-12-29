import React from "react";
import { Context } from "../contexts/Context";
import PartOne from "./PartOne";
import PartTwo from "./PartTwo";
import PartThree from "./PartThree";
import Success from "./Success";

export default function Forms() {
  return (
    <Context.Consumer>
      {context => {
        const { currentStage } = context;

        return (
          <div id="forms">
            <div className={currentStage === 1 ? "form active" : "form"}>
              <PartOne />
            </div>
            <div className={currentStage === 2 ? "form active" : "form"}>
              <PartTwo />
            </div>
            <div className={currentStage === 3 ? "form active" : "form"}>
              <PartThree />
            </div>
            {currentStage === 4 ? <Success /> : null}
          </div>
        );
      }}
    </Context.Consumer>
  );
}
