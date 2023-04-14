import React, { useContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import scheduleContext from "../../context/scheduleContext";


export default function AddEvent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const context = useContext(scheduleContext);
  const { addSchedule } = context;
  const [schedules, setSchedules] = React.useState({ title: "", time: "" });


  const handleClick = (e) => {
    e.preventDefault()
    addSchedule(schedules.title, schedules.time);
    setSchedules({ title: "", time: "" })
    toast.success('Added Successfully!')
    handleClose()
  }

  const onChange = (e) => {
    setSchedules({ ...schedules, [e.target.name]: e.target.value })
  }


  return (
    <div className="mt-3">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 className="headclass mt-2 pt-1">Add Schedule</h1>
        <button
          onClick={handleShow}
          style={{ border: "0", backgroundColor: "transparent" }}>
          <div style={{ fontSize: "40px", color: "#690000", }}>
            <i className="fa-solid fa-circle-plus"></i>
          </div>
        </button>
      </div>

      <Button className="d-none" variant="primary" onClick={handleShow}></Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="headclass m-2">Add Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={{ margin: "auto" }} >
            <input name='title' type="text" placeholder="Title" autoComplete='off' value={schedules.title} onChange={onChange} className="input-connect w-100" />

            <input name='time' type="text" placeholder="Time" autoComplete='off' value={schedules.time} onChange={onChange} className="input-connect w-100" />

            <button onClick={handleClick} type="submit" className="mt-4 w-100 btn btn-primary">Add Schedule</button>
          </form>
        </Modal.Body>
      </Modal>

    </div>
  );
}
