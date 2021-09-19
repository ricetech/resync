import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashboardNavbar from "../../components/dashboard-navbar";
import CourseCard from "../../components/course-card";
import UpcomingList from "../../components/upcoming-list";

export const StudentDashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <Container>
        <Row className="py-5">
          <Col lg="8">
            <h1>Courses</h1>
            <CourseCard />
          </Col>
          <Col lg="4">
            <h1>Upcoming</h1>
            <UpcomingList />
          </Col>
        </Row>
      </Container>
    </>
  );
};
