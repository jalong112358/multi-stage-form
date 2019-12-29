import React from "react";
import { Context } from "../contexts/Context";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";

const useStyles = makeStyles({
  btn: {
    background: "rgb(173, 239, 209)",
    border: 0,
    borderRadius: 5,

    color: "#00203fff",
    height: 48,
    padding: "0 30px"
  },
  input: {
    marginBottom: "15px"
  }
});

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue
  }
});

export default function PartOne() {
  const classes = useStyles();
  return (
    <Context.Consumer>
      {context => {
        const { changeStage } = context;

        return (
          <ThemeProvider theme={theme}>
            <div className="form-part">
              <p>General Information</p>
              <TextField
                className={classes.input}
                color="primary"
                id="standard-basic"
                label="First Name"
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle
                }}
                fullWidth
              />
              <TextField
                className={classes.input}
                id="standard-basic"
                label="Last Name"
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle
                }}
                fullWidth
              />
              <TextField
                className={classes.input}
                id="standard-basic"
                label="Email"
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle
                }}
                fullWidth
              />
              <TextField
                className={classes.input}
                id="standard-basic"
                label="Password"
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle
                }}
                fullWidth
              />
              <TextField
                className={classes.input}
                id="standard-basic"
                label="Confirm Password"
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle
                }}
                fullWidth
              />

              <Button
                className={classes.btn}
                variant="contained"
                onClick={changeStage}
                fullWidth
              >
                Next
              </Button>
            </div>
          </ThemeProvider>
        );
      }}
    </Context.Consumer>
  );
}
