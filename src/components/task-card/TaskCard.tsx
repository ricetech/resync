import React from "react";
import { Card, Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ITask } from "../../shared/interfaces";

interface ITaskCardProps {
  task: ITask;
}

export const TaskCard = ({ task }: ITaskCardProps) => {
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
        <div className="course-card-body">
          <div>
            <Card.Title>{task.name}</Card.Title>
            {badgeComponents()}
            <span className="px-2">
              Due: {task.deadline.toLocaleDateString()}
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
