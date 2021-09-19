import React from "react";
import { Col, Badge, Table } from "react-bootstrap";
import ProgressBar from "../../components/progress-bar";

const task = {
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
};

const percentInProgress = 30;
const percentCompleted = 50;

export const Insights = () => {
  const badgeComponents = () =>
    task.typeTag.map((tag: string) => (
      <Badge pill bg="dark">
        {tag}
      </Badge>
    ));
  return (
    <Col className="px-4" lg="8">
      <h1>Assignment Name</h1>
      {badgeComponents()}
      <span className="px-2">Due: {task.deadline.toLocaleDateString()}</span>
      <h3 className="mt-4">Aggregate Progress Breakdown</h3>
      <ProgressBar
        percentInProgress={percentInProgress}
        percentCompleted={percentCompleted}
      />
      <table className="stats-table">
        <tr>
          <td>
            <b>Average Time</b>
          </td>
          <td className="stat-data">12hr</td>
        </tr>
        <tr>
          <td>
            <b>Unstarted</b>
          </td>
          <td className="stat-data">34 Students</td>
        </tr>
        <tr>
          <td>
            <b>In Progress</b>
          </td>
          <td className="stat-data">50 Students</td>
        </tr>
        <tr>
          <td>
            <b>Completed</b>
          </td>
          <td className="stat-data">10 Students</td>
        </tr>
      </table>
      <h3 className="mt-4">Detailed Student Breakdown</h3>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Student</th>
            <th>Time Started</th>
            <th>Time Finished</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
};
