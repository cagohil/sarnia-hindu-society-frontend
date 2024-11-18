//AddEditEvent.js
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AddEditEvent = ({ show, handleClose, isEdit, currentEvent, handleSave }) => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    time: "",
    date: "",
    address: "",
  });

  useEffect(() => {
    if (isEdit && currentEvent) {
      setEventData(currentEvent);
    } else {
      setEventData({ title: "", description: "", time: "", date: "", address: "" });
    }
  }, [isEdit, currentEvent]);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleSave(eventData);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? "Edit Event" : "Add Event"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            placeholder="Title"
            className="form-control mb-2"
          />
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            placeholder="Description"
            className="form-control mb-2"
          />
          <input
            type="text"
            name="time"
            value={eventData.time}
            onChange={handleChange}
            placeholder="Time"
            className="form-control mb-2"
          />
          <input
            type="text"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            placeholder="Date"
            className="form-control mb-2"
          />
          <input
            type="text"
            name="address"
            value={eventData.address}
            onChange={handleChange}
            placeholder="Address"
            className="form-control mb-2"
          />
          <Button variant="primary" className="w-100" onClick={handleSubmit}>
            {isEdit ? "Save Changes" : "Add Event"}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddEditEvent;
