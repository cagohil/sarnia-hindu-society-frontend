//Schedule.jsx
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import scheduleContext from "../context/schedule/ScheduleContext";
import AddEditModal from "../components/Schedule/AddEditModal";
import Loader from "../components/Loader";
import deepa from "../assets/images/deepa.png";

const Schedule = () => {
  const context = useContext(scheduleContext);
  const { schedule, getSchedule, deleteSchedule, editSchedule, addSchedule, loading } =
    context;
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState({ id: "", title: "", time: "" });

  useEffect(() => {
    getSchedule();
  }, []);

  const openModal = (scheduleItem = { _id: "", title: "", time: "" }, editMode = false) => {
    setCurrentSchedule({
      id: scheduleItem._id,
      title: scheduleItem.title,
      time: scheduleItem.time,
    });
    setIsEditMode(editMode);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentSchedule({ id: "", title: "", time: "" });
  };

  const handleSave = (title, time) => {
    if (isEditMode) {
      if (currentSchedule.id) {
        editSchedule(currentSchedule.id, title, time);
      } else {
        toast.error("Invalid schedule ID.");
      }
    } else {
      addSchedule(title, time);
    }
    closeModal();
  };

  return (
      <div style={{ fontFamily: "Georgia, Times New Roman, Times, serif" }}>
      <div style={{ maxWidth: "1400px", margin: "auto" }}>
        <div className="container-fluid pl-3 pr-3 pt-3 pb-3">
          <div className="inpagecontent mb-3">
            <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "500px", margin: "auto" }}>
              <img src={deepa} style={{ width: "40px" }} alt="deepa" />
              <h1 className="headclass mb-0 mt-1 text-center">Monthly Mandir Schedule</h1>
              <img src={deepa} style={{ width: "40px" }} alt="deepa2" />
            </div>
          </div>

          <div className="row inpagecontent" style={{ maxWidth: "1400px", margin: "auto" }}>
            <p>
              <div className="mt-3 mb-1" style={{ color: "#690000" }}>
                <strong>Monthly Sunday Mandir Schedule:</strong>
              </div>
              SHS conducts its regular Mandir program on second Sunday of every month. Given below is the usual schedule of activities conducted.
            </p>

            <div className="col-sm-12 col-md-6 col-lg-4 scheduleData pl-0">
              <table className="table table-bordered" style={{ maxWidth: "500px" }}>
                <tbody>
                {loading && <Loader />}
                  {schedule.map((scheduleItem) => (
                    <tr className="text-break" key={scheduleItem._id}>
                      <td>{scheduleItem.title}</td>
                      <td>{scheduleItem.time}</td>
                      {localStorage.getItem("adminToken") && (
                        <>
                        <td>
                            <Link
                              style={{ cursor: "pointer" }}
                              onClick={() => openModal(scheduleItem, true)}
                            >
                              <i className="mr-1 fa-solid fa-pen-to-square"></i>
                            </Link>
                          </td>
                          <td>
                            <Link
                              style={{ cursor: "pointer" }}
                              onClick={(e) => {
                                e.preventDefault();
                                deleteSchedule(scheduleItem._id);
                                
                              }}
                            >
                              <i className="mr-1 fa-solid fa-trash-can"></i>
                            </Link>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-8 d-flex align-items-center scheduleData">
              <div>
                <h5 style={{ color: "#690000" }}><strong>Notes:</strong></h5>
                <ul>
                  <li className="pb-2">
                    The programs may be started 30 minutes earlier at 10:00 am, on the day of Havan (instead of Sandhya).
                  </li>
                  <li>The above timings are as planned, and subject to minor adjustments to suit contingency requirements.</li>
                </ul>
              </div>
            </div>

            {localStorage.getItem("adminToken") && (
              <div className="p-3">
                <button className="btn btn-primary" onClick={() => openModal()}>
                  Add Schedule
                </button>
              </div>
            )}
          </div>

          <AddEditModal
            show={showModal}
            onClose={closeModal}
            onSave={handleSave}
            isEditMode={isEditMode}
            scheduleData={currentSchedule}
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
