import React, { Component } from "react";

const DownIcon = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "-60px",
        transform: "translateY(-65px)",
      }}
    >
      <div
        style={{
          maxWidth: "50px",
          
        }}
      >
        <img src={props.icon} />
      </div>
    </div>
  );
};
export default DownIcon;
