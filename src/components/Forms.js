import React from "react";
import { Context } from "../contexts/Context";
import PartOne from "./PartOne";
import PartTwo from "./PartTwo";
import PartThree from "./PartThree";

import { useTransition, animated } from "react-spring";

export default function Forms() {
  const transitions = useTransition({
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <Context.Consumer>
      {context => {
        const { currentStage } = context;

        return (
          <div id="forms">
            <animated.div>
              {currentStage === 1 ? (
                <PartOne />
              ) : currentStage === 2 ? (
                <PartTwo />
              ) : currentStage === 3 ? (
                <PartThree />
              ) : null}
            </animated.div>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
