import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ITask } from "../../shared/interfaces";
import ProgressBar from "../progress-bar";
interface ITaskCardProps {
  task: ITask;
  numStudents: number;
  curStatus: string;
}

export const TaskCard = ({ task, numStudents, curStatus }: ITaskCardProps) => {
  const history = useHistory();

  const badgeComponents = () =>
    task.typeTag.map((tag: string) => (
      <Badge pill bg="dark">
        {tag}
      </Badge>
    ));

  return (
    <Card
      className="mb-4"
      onClick={() => history.push("/dash/tasks/?id=coursename")}
    >
      <Card.Body className="px-4">
        <div className="spread-horizontally">
          <div>
            <Card.Title>{task.name}</Card.Title>
            {badgeComponents()}
            <span className="px-2">
              Due: {task.deadline.toLocaleDateString()}
            </span>
          </div>
          <div>
            {curStatus === "PROGRESS" ? (
              <Button variant="dark" size="sm" className="mt-2">
                Begin Task
              </Button>
            ) : (
              <Button variant="outline-dark" size="sm" className="mt-2">
                Mark as Completed
              </Button>
            )}
          </div>
        </div>

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
