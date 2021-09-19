import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
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
  const addCourse = () => {
    history.push(`${path}/add-course/courseid`);
  };
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
