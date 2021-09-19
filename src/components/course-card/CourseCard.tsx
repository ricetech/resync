import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
interface ICourseCardProps {
  title: string;
  profs: string[];
  tasks: number;
}

export const CourseCard = ({ title, profs, tasks }: ICourseCardProps) => {
  const history = useHistory();
  return (
    <Card
      className="clickable mb-4"
      onClick={() => history.push("/dash/task/?id=coursename")}
    >
      <div className="course-card-top-pink" />
      <Card.Body className="px-4">
        <div className="course-card-body">
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{profs.toString()}</Card.Text>
          </div>
          <div>{tasks}</div>
        </div>
      </Card.Body>
    </Card>
  );
};
