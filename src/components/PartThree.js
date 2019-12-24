import React from "react";
import { Context } from "../contexts/Context";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { useSpring, animated } from "react-spring";

export default function PartThree() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <Context.Consumer>
      {context => {
        const { changeStage } = context;

        return (
          <animated.div style={props} className="form-part">
            <p>Part 3</p>
            <TextField id="standard-basic" label="Standard" fullWidth />
            <Button variant="contained" onClick={changeStage}>
              Default
            </Button>
          </animated.div>
        );
      }}
    </Context.Consumer>
  );
}
