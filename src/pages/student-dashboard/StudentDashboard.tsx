import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashboardNavbar from "../../components/dashboard-navbar";
import CourseCard from "../../components/course-card";
import UpcomingList from "../../components/upcoming-list";
import { ICourse, ITask } from "../../shared/interfaces";

const courses: ICourse[] = [
  {
    courseId: "0",
    name: "MATH 239 - Intro to Combinatorics",
    admin: ["Prof A", "Prof B"],
    students: [],
    tasks: [],
  },
  {
    courseId: "1",
    name: "CS 240 - Data Strutures and Data Management",
    admin: ["Prof C", "Prof D"],
    students: [],
    tasks: [],
  },
];

const courseCardComponents = () =>
  courses.map((course: ICourse) => (
    <CourseCard
      key={course.courseId}
      title={course.name}
      profs={course.admin}
      tasks={course.tasks.length}
    />
  ));

export const StudentDashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <Container>
        <Row className="py-5">
          <Col className="px-4" lg="8">
            <h1>Courses</h1>
            {courseCardComponents()}
          </Col>
          <Col className="px-4" lg="4">
            <h1>Upcoming</h1>
            <UpcomingList />
          </Col>
        </Row>
      </Container>
    </>
  );
};
