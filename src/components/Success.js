import React from "react";

export default function Success() {
  return (
    <div id="success" style={{ paddingTop: "100px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "100px",
          color: "#adefd1ff"
        }}
      >
        Purchase Complete!
      </h1>
      <div class="success-checkmark">
        <div class="check-icon">
          <span class="icon-line line-tip"></span>
          <span class="icon-line line-long"></span>
          <div class="icon-circle"></div>
          <div class="icon-fix"></div>
        </div>
      </div>
    </div>
  );
}
