/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import scheduleContext from "../../context/scheduleContext";



function schedule() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(scheduleContext);
  const { schedule, editSchedule, getSchedule, deleteSchedule } = context;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [schedules, setSchedules] = React.useState({ id: "", etitle: "", etime: "" });


  useEffect(() => {
    getSchedule();
    // eslint-disable-next-line 
  }, []);


  const update = useRef(null)
  const updateSchedule = (currentSchedule) => {
    update.current.click()
    setSchedules({
      id: currentSchedule._id,
      etitle: currentSchedule.title,
      etime: currentSchedule.time,
    })
  }

  const handleClick = (e) => {
    console.log('updating schedule')
    editSchedule(
      schedules.id,
      schedules.etitle,
      schedules.etime,
    );
    handleClose()
    toast.success("Edit Successfully!");
  }

  const onChange = (e) => {
    setSchedules({ ...schedules, [e.target.name]: e.target.value })
  }



  return (
    <div>



      <div
        className="row inpagecontent"
        style={{ maxWidth: "1400px", margin: "auto" }}>
        <p>
          <div className="mt-3 mb-1" style={{ color: "#690000" }}>
            <strong>Monthly Sunday Mandir Schedule:</strong>
          </div>
          SHS conducts its regular Mandir program on second Sunday of every
          month. Given below is the usual schedule of activities conducted.
          It is sometimes adjusted if required.
        </p>

        <div className="col-sm-12 col-md-6 col-lg-4 scheduleData pl-0" >

          <table className="table table-bordered" style={{ maxWidth: "500px" }}>
            <tbody>
              {schedule.map((schedules) => {
                return <tr className="text-break" key={schedules._id}>
                  <td className="d-none">id: {schedules._id}</td>
                  <td >{schedules.title}</td>
                  <td >{schedules.time}</td>

                  {!localStorage.getItem('adminToken') ? <div className="d-none"></div>
                    : <><td>
                      <Link style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          e.preventDefault();
                          deleteSchedule(schedules._id);
                          toast.success("Delete Successfully!");
                        }}
                      ><i className="mr-1 fa-solid fa-trash-can"></i></Link>
                    </td><td>
                        <Link style={{ cursor: "pointer" }}
                          onClick={() => { updateSchedule(schedules); }}>
                          <i className="mr-1 fa-solid fa-pen-to-square"></i></Link>
                      </td></>}

                </tr>
              })}
            </tbody>
          </table>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-8 d-flex align-items-center scheduleData" >
          <p>
            <div className="mb-1" style={{ color: "#690000" }}>
              <strong >Notes:</strong>
            </div>
            <li className="pb-2">
              The programs may be started 30 minutes earlier at 10:00 am, on the day of Havan (instead of Sandhya) or to accommodate a long Puja or a special event, if so advised by the Priest in consultation with the Host of the Day or by the President with the consent of the Board.
            </li>
            <li>
              The above timings are as planned, and subject to minor adjustments to suit contingency requirements.
            </li>
          </p>

        </div>
      </div>

      <div>
        <Button ref={update} className="d-none" variant="primary" onClick={handleShow}></Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="headclass m-2">Edit Schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form style={{ margin: "auto" }} >
              <input name='etitle' type="text" placeholder="Title" autoComplete='off' value={schedules.etitle} onChange={onChange} className="input-connect w-100" />

              <input name='etime' type="text" placeholder="Time" autoComplete='off' value={schedules.etime} onChange={onChange} className="input-connect w-100" />

              <Button className="w-100 mt-2" variant="primary" onClick={handleClick}>Edit Schedule</Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>

    </div>
  );
}

export default schedule;
