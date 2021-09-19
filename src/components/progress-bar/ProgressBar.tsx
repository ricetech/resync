import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

interface IProgressBarProps {
  percentInProgress: number;
  percentCompleted: number;
}

export const ProgressBar = ({
  percentInProgress,
  percentCompleted,
}: IProgressBarProps) => {
  console.log(percentInProgress);
  return (
    <div className="prog-bar-wrapper">
      <div
        className="prog-bar-notstarted"
        style={{ width: `${100 - percentCompleted - percentInProgress}%` }}
      ></div>
      <div
        className="prog-bar-completed"
        style={{ width: `${percentCompleted}%` }}
      ></div>
    </div>
  );
};
