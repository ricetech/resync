import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import DashboardNavbar from "../../components/dashboard-navbar";
import CourseCard from "../../components/course-card";
import CourseCardAdmin from "../../components/course-card-admin";
import UpcomingList from "../../components/upcoming-list";
import { ICourse, ITask } from "../../shared/interfaces";
import TaskPage from "../task-page";
import TaskPageAdmin from "../task-page-admin";

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

const adminCourses: ICourse[] = [
  {
    courseId: "0",
    name: "MATH 999 - Calculus 99",
    admin: ["Prof A", "Prof B"],
    students: ["c", "d"],
    tasks: [],
  },
  {
    courseId: "1",
    name: "CS 000 - Binary",
    admin: ["Prof C", "Prof D"],
    students: ["a", "b"],
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

const adminCourseCardComponents = () =>
  adminCourses.map((course: ICourse) => (
    <CourseCardAdmin
      key={course.courseId}
      title={course.name}
      students={course.students.length}
      tasks={course.tasks.length}
    />
  ));

export const StudentDashboard = () => {
  let { path, url } = useRouteMatch();
  const [courseMode, setCourseMode] = useState("enrolled");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [courseCode, setCourseCode] = useState("");

  const viewTaught = () => {
    setCourseMode("teaching");
  };

  const viewEnrolled = () => {
    setCourseMode("enrolled");
  };

  const handleCourseCodeChange = (e: any) => {
    setCourseCode(e.target.value);
  };

  const handleAddCourse = () => {
    if (courseCode !== "") {
      // API call
      handleClose();
    }
  };

  return (
    <>
      <DashboardNavbar isDashboard={true} />
      <Container>
        <Row className="py-5">
          <Switch>
            <Route exact path={path}>
              <Col className="px-4" lg="8">
                <h1>Courses</h1>
                {courseMode === "enrolled" ? (
                  <>
                    <Button
                      variant="dark"
                      size="sm"
                      className="mb-3"
                      onClick={handleShow}
                    >
                      Join Course
                    </Button>{" "}
                    <Button
                      variant="outline-dark"
                      size="sm"
                      className="mb-3"
                      onClick={viewTaught}
                    >
                      View courses you teach
                    </Button>
                    {courseCardComponents()}
                  </>
                ) : (
                  <>
                    <Button variant="dark" size="sm" className="mb-3">
                      Create a course
                    </Button>{" "}
                    <Button
                      variant="outline-dark"
                      size="sm"
                      className="mb-3"
                      onClick={viewEnrolled}
                    >
                      View courses you're in
                    </Button>
                    {adminCourseCardComponents()}
                  </>
                )}
              </Col>
              <Col className="px-4" lg="4">
                <h1>Upcoming</h1>
                <UpcomingList />
              </Col>
            </Route>
            <Route path={`${path}/tasks`}>
              <TaskPage />
            </Route>
            <Route path={`${path}/admin-tasks`}>
              <TaskPageAdmin />
            </Route>
          </Switch>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Join a Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Enter the course code provided by your instructor below to join
            their course
          </p>
          <Form.Control
            type="input"
            placeholder="Code"
            name="courseCode"
            onChange={handleCourseCodeChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCourse}>
            Add Course
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
