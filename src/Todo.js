import React from "react";

function Todo(){
    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
        }}>
            <div style={{fontSize: "36px", fontWeight: 700}}>Today's progress task</div>
        </div>
    )
}

export default Todo;