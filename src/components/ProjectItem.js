import React from "react";
import classes from "./ProjectItem.module.css";

export const ProjectItem = (props) => {
  return (
    <div
      style={{
        fontSize: "18px",
        width: "100%",
        height: "100%",
        paddingTop: "50px",
      }}
    >
      <h1>{props.title}</h1>
      <p
        style={{
          fontSize: "15px",
          color: "rgb(32, 31, 31)",
          marginBottom: "3px",
        }}
      >
        {props.tools.map((tool) => (
          <span key={tool} style={{ marginLeft: "3px" }}>
            {tool}
          </span>
        ))}
      </p>
      <div className={classes.actions}>
        <button style={{ width: "49%" }}>
          <a href={props.code}>Code</a>
        </button>

        <button style={{ width: "49%" }}>
          <a href={props.url} target="_blank" rel="noreferrer">
            Page
          </a>
        </button>
      </div>
      {props.imageUrl && (
        <img
          src={props.imageUrl}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            opacity: 0.4,
            objectFit: "contain",
          }}
          className={classes.projectImg}
        />
      )}
    </div>
  );
};
