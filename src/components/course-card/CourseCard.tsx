import React from "react";
import { Card } from "react-bootstrap";

const handleCourseClick = () => {};

export const CourseCard = () => {
  return (
    <Card className="clickable" onClick={handleCourseClick}>
      <div className="course-card-top-pink" />
      <Card.Body className="px-4">
        <div className="course-card-body">
          <div>
            <Card.Title>Course Name</Card.Title>
            <Card.Text>Professor List</Card.Text>
          </div>
          <div>Num Tasks</div>
        </div>
      </Card.Body>
    </Card>
  );
};
