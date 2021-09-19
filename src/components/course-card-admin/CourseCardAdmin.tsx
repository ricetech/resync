import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

interface ICourseCardAdminProps {
  title: string;
  students: number;
  tasks: number;
}

export const CourseCardAdmin = ({
  title,
  students,
  tasks,
}: ICourseCardAdminProps) => {
  const history = useHistory();
  return (
    <Card
      className="clickable mb-4"
      onClick={() => history.push("/dash/admin-tasks/?id=coursename")}
    >
      <div className="course-card-top-pink" />
      <Card.Body className="px-4">
        <div className="course-card-body">
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{students}</Card.Text>
          </div>
          <div>{tasks}</div>
        </div>
      </Card.Body>
    </Card>
  );
};
