import React from "react";

function Todo() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: "10px",
        paddingLeft: "10px",
      }}
    >
      <div style={{ fontSize: "30px", fontWeight: 700 }}>
        Today's progress task
      </div>
    </div>
  );
}

export default Todo;
