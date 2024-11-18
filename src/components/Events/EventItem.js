//EventItem.js
import React from "react";

const EventItem = ({ event, handleEdit, handleDelete }) => {
  return (
    <div className="col-sm-12 mb-3">
      <div style={{ boxShadow: "2px 2px 8px #666", width: "100%" }}>
        <div className="data inpageevent">
          <div style={{ color: "#690000", fontSize: "22px", fontWeight: "700" }}>
            <strong>{event.title}</strong>
          </div>
          <p>{event.description}</p>
          <p style={{ color: "#555555" }}>
            <i className="fa-solid fa-clock pr-2"></i>
            {event.time}
          </p>
          <p style={{ color: "#555555" }}>
            <i className="fa-solid fa-calendar-days pr-2"></i>
            {event.date}
          </p>
          <p style={{ color: "#555555" }}>
            <i className="fa-solid fa-location-dot pr-2"></i>
            {event.address}
          </p>
        </div>
        {localStorage.getItem("adminToken") && (
          <div className="btn-group w-100">
            <button className="btn btn-warning" onClick={() => handleEdit(event)}>
              <i className="fa-solid fa-pen-to-square"></i> Edit
            </button>
            <button className="btn btn-danger" onClick={() => handleDelete(event._id)}>
              <i className="fa-solid fa-trash-can"></i> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventItem;
