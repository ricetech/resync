import React, { useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Overlay,
  Tooltip,
} from "react-bootstrap";
import TaskCard from "../../components/task-card";
import { ITask } from "../../shared/interfaces";
import NewTask from "../new-task";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const tasks = [
  {
    taskId: "0",
    name: "Assignment 1",
    startDate: new Date(),
    deadline: new Date(),
    softDeadline: new Date(),
    typeTag: ["Assignment"],
    displayDate: true,
    startTimes: [1, 2],
    endTimes: [1, 3],
    startPercent: [],
    endPercent: [],
  },
];

const numStudents = 5;

const taskCardComponents = () =>
  tasks.map((task: ITask) => (
    <TaskCard
      key={task.taskId}
      isStudent={false}
      task={task}
      numStudents={numStudents}
      curStatus={"PROGRESS"}
    />
  ));

export const TaskPageAdmin = () => {
  let query = useQuery();
  let { path, url } = useRouteMatch();
  const history = useHistory();

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const addCourse = () => {
    history.push(`${path}/add-course/courseid`);
  };
  const copyInviteCode = () => {
    setShow(!show);
    navigator.clipboard.writeText("CODE");
  };

  const viewAllStudents = () => {};

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <Col className="px-4" lg="10">
            <h1>Tasks</h1>
            <Button
              variant="dark"
              size="sm"
              className="mb-3"
              onClick={addCourse}
            >
              Add Task
            </Button>
            <Button
              ref={target}
              variant="dark"
              size="sm"
              className="mb-3 mx-2"
              onClick={copyInviteCode}
            >
              Copy Invite Code
            </Button>
            <Button
              variant="dark"
              size="sm"
              className="mb-3"
              onClick={viewAllStudents}
            >
              View all Students
            </Button>
            <Overlay target={target.current} show={show} placement="top">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  Copied!
                </Tooltip>
              )}
            </Overlay>
            {taskCardComponents()}
          </Col>
        </Route>
        <Route path={`${path}/add-course`}>
          <NewTask />
        </Route>
      </Switch>
    </>
  );
};
