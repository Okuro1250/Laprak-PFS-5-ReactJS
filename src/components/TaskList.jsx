import React from "react";
import { Button, Card, Badge } from "react-bootstrap";

const priorityVariant = {
  High: "danger",
  Medium: "warning",
  Low: "success",
};

const statusVariant = {
  "To Do": "secondary",
  "In Progress": "primary",
  Done: "success",
};

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Card className="task-card mb-3" key={task.id}>
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="task-name">{task.name}</h5>

              <div className="mb-2">
                <span className="task-label">Priority</span>
                <Badge
                  bg={priorityVariant[task.priority] || "secondary"}
                  className="priority-badge"
                  text={task.priority === "Medium" ? "dark" : undefined}
                >
                  {task.priority}
                </Badge>
              </div>

              <div>
                <span className="task-label">Status</span>
                <Badge
                  bg={statusVariant[task.status] || "secondary"}
                  className="status-badge"
                >
                  {task.status}
                </Badge>
              </div>
            </div>

            <div className="d-flex gap-2">
              <Button
                className="edit-btn"
                variant="outline-primary"
                onClick={() => showEditForm(task)}
              >
                <i className="bi bi-pencil-square"></i> Edit
              </Button>

              <Button
                className="delete-btn"
                variant="outline-danger"
                onClick={() => deleteTask(task.id)}
              >
                <i className="bi bi-trash"></i> Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}

      {tasks.length === 0 && (
        <div className="empty-state">
          <i className="bi bi-clipboard-check"></i>
          <h5>Everything is clear!</h5>
          <p>Belum ada tugas. Yuk, tambahkan tugas pertamamu.</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
