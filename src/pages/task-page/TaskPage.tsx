import React from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import TaskCard from "../../components/task-card";
import { ITask } from "../../shared/interfaces";

const tasks = [
  {
    taskId: "0",
    name: "Assignment 1",
    startDate: new Date(),
    deadline: new Date(),
    softDeadline: new Date(),
    typeTag: ["Assignment"],
    displayDate: true,
    startTimes: [1, 2, 3],
    endTimes: [1, 3],
    startPercent: [],
    endPercent: [],
  },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const taskCardComponents = () =>
  tasks.map((task: ITask) => <TaskCard task={task} />);

export const TaskPage = () => {
  let query = useQuery();
  return (
    <>
      <Col className="px-4" lg="10">
        <h1>Tasks</h1> {taskCardComponents()}
      </Col>
    </>
  );
};
