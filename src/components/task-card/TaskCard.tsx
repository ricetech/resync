import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ITask } from "../../shared/interfaces";
import ProgressBar from "../progress-bar";
interface ITaskCardProps {
  isStudent: boolean;
  task: ITask;
  numStudents: number;
  curStatus: string;
}

export const TaskCard = ({
  isStudent,
  task,
  numStudents,
  curStatus,
}: ITaskCardProps) => {
  const history = useHistory();

  const badgeComponents = () =>
    task.typeTag.map((tag: string) => (
      <Badge pill bg="dark">
        {tag}
      </Badge>
    ));

  const handleClick = () => {
    if (!isStudent) {
      history.push("/dash/admin-tasks/insights/?id=taskId");
    }
  };

  return (
    <Card className="mb-4" onClick={handleClick}>
      <Card.Body className="px-4">
        <div className="spread-horizontally">
          <div>
            <Card.Title>{task.name}</Card.Title>
            {badgeComponents()}
            <span className="px-2">
              Due: {task.deadline.toLocaleDateString()}
            </span>
          </div>
          {isStudent ? (
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
          ) : (
            <></>
          )}
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
