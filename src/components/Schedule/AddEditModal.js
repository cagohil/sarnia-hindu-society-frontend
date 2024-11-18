// AddEditModal.js
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const AddEditModal = ({ show, onClose, onSave, isEditMode, scheduleData }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (isEditMode && scheduleData) {
      setTitle(scheduleData.title || "");
      setTime(scheduleData.time || "");
    } else {
      setTitle("");
      setTime("");
    }
  }, [isEditMode, scheduleData]);

  const handleSubmit = () => {
    if (!title || !time) {
      alert("Both Title and Time are required.");
      return;
    }
    onSave(title, time);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isEditMode ? "Edit Schedule" : "Add Schedule"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="scheduleTitle">Title</label>
            <input
              id="scheduleTitle"
              type="text"
              className="form-control"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scheduleTime">Time</label>
            <input
              id="scheduleTime"
              type="text"
              className="form-control"
              placeholder="Enter Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {isEditMode ? "Save Changes" : "Add Schedule"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEditModal;
