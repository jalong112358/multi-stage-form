import React, { Component, createContext } from "react";

export const Context = createContext();

class ContextProvider extends Component {
  state = {
    currentStage: 1
  };

  changeStage = () => {
    this.setState({
      currentStage: this.state.currentStage + 1
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          changeStage: this.changeStage
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
