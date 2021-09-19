import React from "react";
import { useLocation } from "react-router-dom";
import { Col } from "react-bootstrap";
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
    startTimes: [1, 2],
    endTimes: [1, 3],
    startPercent: [],
    endPercent: [],
  },
  {
    taskId: "1",
    name: "Quiz 1",
    startDate: new Date(),
    deadline: new Date(),
    softDeadline: new Date(),
    typeTag: ["Quiz"],
    displayDate: true,
    startTimes: [1],
    endTimes: [2, 4, 1, 3],
    startPercent: [],
    endPercent: [],
  },
];

const numStudents = 5;

const taskCardComponents = () =>
  tasks.map((task: ITask) => (
    <TaskCard
      key={task.taskId}
      isStudent={true}
      task={task}
      numStudents={numStudents}
      curStatus={"PROGRESS"}
    />
  ));

export const TaskPage = () => {
  return (
    <>
      <Col className="px-4" lg="10">
        <h1>Tasks</h1> {taskCardComponents()}
      </Col>
    </>
  );
};
