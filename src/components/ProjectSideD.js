import React from "react";
import classes from "./ProjectSideD.module.css";

const ProjectSideD = (props) => {
  return (
    <div className={`${classes.sideDrawer} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default ProjectSideD;
