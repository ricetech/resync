import React from "react";
import { Card, Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ITask } from "../../shared/interfaces";
import ProgressBar from "../progress-bar";
interface ITaskCardProps {
  task: ITask;
  numStudents: number;
}

export const TaskCard = ({ task, numStudents }: ITaskCardProps) => {
  const history = useHistory();

  const badgeComponents = () =>
    task.typeTag.map((tag: string) => (
      <Badge pill bg="dark">
        {tag}
      </Badge>
    ));

  return (
    <Card
      className="clickable mb-4"
      onClick={() => history.push("/dash/tasks/?id=coursename")}
    >
      <Card.Body className="px-4">
        <Card.Title>{task.name}</Card.Title>
        {badgeComponents()}
        <span className="px-2">Due: {task.deadline.toLocaleDateString()}</span>
        <ProgressBar
          percentInProgress={Math.round(
            (task.startTimes.length / numStudents) * 100
          )}
          percentCompleted={Math.round(
            (task.endTimes.length / numStudents) * 100
          )}
        />
      </Card.Body>
    </Card>
  );
};
