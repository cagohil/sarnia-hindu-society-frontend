//Events.js (main file)
import React, { useContext, useState, useEffect } from "react";
import AddEditEvent from "./AddEditEvent";
import EventItem from "./EventItem";
import eventContext from "../../context/event/EventContext";
import deepa from "../../assets/images/deepa.png";
import Loader from "../Loader";


const Events = () => {
  const { event, getEvent, addEvent, editEvent, deleteEvent, loading } = useContext(eventContext);

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    getEvent();
  }, []);

  const handleSave = (data) => {
    if (isEdit) {
      editEvent(data._id, data.title, data.description, data.time, data.date, data.address);
    } else {
      addEvent(data.title, data.description, data.time, data.date, data.address);
    }
    setShowModal(false);
  };

  const handleEdit = (event) => {
    setCurrentEvent(event);
    setIsEdit(true);
    setShowModal(true);
  };

  const handleAdd = () => {
    setCurrentEvent(null);
    setIsEdit(false);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    deleteEvent(id);
  };

  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, Times, serif" }}>
      <div style={{ maxWidth: "1400px", margin: "auto" }}>
        <div className="container-fluid pl-0 pr-0 pt-3 pb-3">
          <div className="inpagecontent mb-3">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "500px",
                margin: "auto",
              }}
            >
              <img src={deepa} style={{ width: "40px" }} alt="decorative" />
              <h1 className="headclass mb-0 mt-1 text-center">Upcoming Events</h1>
              <img src={deepa} style={{ width: "40px" }} alt="decorative" />
            </div>
          </div>
          <div className="row">
          
            {event.map((ev) => (
              <EventItem
                key={ev._id}
                event={ev}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))}
            {loading && <Loader />}
          </div>
          {localStorage.getItem("adminToken") && (
            <div className="text-right">
              <button className="btn btn-primary" onClick={handleAdd}>
                Add Event
              </button>
            </div>
          )}
        </div>
      </div>
      <AddEditEvent
        show={showModal}
        handleClose={() => setShowModal(false)}
        isEdit={isEdit}
        currentEvent={currentEvent}
        handleSave={handleSave}
      />
    </div>
  );
};

export default Events;
