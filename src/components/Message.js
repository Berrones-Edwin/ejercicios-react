import React from "react";
// import "./Message.css";

const Message = ({ msg, bgColor }) => {

    return (
        <div
            style={{
                backgroundColor: bgColor,
                color: "#FFF",
                fontWeight: "bold",
                marginBottom: "1rem",
                padding: "1rem",
                textAlign: "center",
            }}
        >
            <p>{msg}</p>
        </div>
    );
};

export default Message;
