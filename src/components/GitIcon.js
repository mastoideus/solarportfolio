import React from "react";
import { BsGithub } from "react-icons/bs";
import { VscNotebook } from "react-icons/vsc";
import classes from "./GitIcon.module.css";

const GitIcon = () => {
  return (
    <div className={classes.gitIcons}>
      <a href="https://github.com/mastoideus" target="_blank" rel="noreferrer">
        <BsGithub
          style={{ color: "brown", fontSize: "30px", marginRight: "7px" }}
        />
      </a>
    </div>
  );
};

export default GitIcon;
