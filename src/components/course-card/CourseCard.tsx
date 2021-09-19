import React from "react";
import { Card } from "react-bootstrap";

interface ICourseCardProps {
  title: string;
  profs: string[];
  tasks: number;
}

const handleCourseClick = () => {};

export const CourseCard = ({ title, profs, tasks }: ICourseCardProps) => {
  return (
    <Card className="clickable mb-4" onClick={handleCourseClick}>
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
