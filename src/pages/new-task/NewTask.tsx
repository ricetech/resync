import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export const NewTask = () => {
  return (
    <>
      <Col className="px-4" lg="8">
        <h3>New Task Details</h3>
      </Col>
      <Col className="px-4" lg="4">
        <h3>Notification Settings</h3>
      </Col>
    </>
  );
};
