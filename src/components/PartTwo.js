import React from "react";
import { Context } from "../contexts/Context";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

let inputStyles = {
  marginBottom: "15px"
};

export default function PartTwo() {
  return (
    <Context.Consumer>
      {context => {
        const { changeStage } = context;

        return (
          <div className="form-part">
            <p>Part 2</p>
            <TextField
              style={inputStyles}
              id="standard-basic"
              label="First Name"
              fullWidth
            />
            <TextField
              style={inputStyles}
              id="standard-basic"
              label="Last Name"
              fullWidth
            />
            <TextField
              style={inputStyles}
              id="standard-basic"
              label="Email"
              fullWidth
            />
            <TextField
              style={inputStyles}
              id="standard-basic"
              label="Password"
              fullWidth
            />
            <TextField
              style={inputStyles}
              id="standard-basic"
              label="Confirm Password"
              fullWidth
            />

            <Button variant="contained" onClick={changeStage} fullWidth>
              Next
            </Button>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
