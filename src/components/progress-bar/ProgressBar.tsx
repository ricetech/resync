import React from "react";
interface IProgressBarProps {
  percentInProgress: number;
  percentCompleted: number;
}

export const ProgressBar = ({
  percentInProgress,
  percentCompleted,
}: IProgressBarProps) => {
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
