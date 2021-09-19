import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashboardNavbar from "../../components/dashboard-navbar";

export const StudentDashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <Container>
        <Row className="py-5">
          <Col lg="8">
            <h1>Courses</h1>
          </Col>
          <Col lg="4">
            <h1>Upcoming</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};
