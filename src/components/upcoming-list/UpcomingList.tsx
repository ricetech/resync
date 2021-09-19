import React from "react";
import { ListGroup } from "react-bootstrap";

const listItem = () => (
  <ListGroup.Item>
    <div>
      <p className="list-title">Assignment Name</p>
      <p className="list-body">Due in # days</p>
    </div>
  </ListGroup.Item>
);

export const UpcomingList = () => {
  return <ListGroup>{listItem()}</ListGroup>;
};
