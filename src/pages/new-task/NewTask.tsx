import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export const NewTask = () => {
  const [formState, setFormState] = useState({
    taskName: "",
    taskType: "Assignment",
    startDate: null,
    deadline: null,
    isSuggested: false,
  });

  const handleTaskNameChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const setIsSuggested = () => {
    setFormState({ ...formState, isSuggested: true });
  };

  const setIsHardDeadline = () => {
    setFormState({ ...formState, isSuggested: false });
  };

  return (
    <>
      <Col className="px-4" lg="8">
        <h3>New Task Details</h3>
        <Form>
          <Form.Group className="mb-3" controlId="TaskName">
            <Form.Label>Task name</Form.Label>
            <Form.Control
              type="input"
              placeholder="Task name"
              name="taskName"
              onChange={handleTaskNameChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="taskType">
            <Form.Label>Task Type</Form.Label>
            <Form.Select name="taskType" onChange={handleTaskNameChange}>
              <option>Assignment</option>
              <option>Quiz</option>
              <option>Lecture</option>
              <option>Tutorial</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="start">
            <Form.Label>Start Date and Time</Form.Label>
            <Form.Control
              type="datetime-local"
              placeholder="Task name"
              name="startDate"
              onChange={handleTaskNameChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="deadline">
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              type="datetime-local"
              placeholder="Task name"
              name="deadline"
              onChange={handleTaskNameChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="deadline">
            <Form.Check
              type="radio"
              id="deadlineSuggested"
              label="Suggested completion date"
              checked={formState.isSuggested}
              onChange={setIsSuggested}
            />
            <Form.Check
              type="radio"
              id="deadlineHard"
              label="Hard deadline"
              checked={!formState.isSuggested}
              onChange={setIsHardDeadline}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Create Task
          </Button>
        </Form>
      </Col>
      <Col className="px-4" lg="4">
        <h3>Notification Settings</h3>
      </Col>
    </>
  );
};
