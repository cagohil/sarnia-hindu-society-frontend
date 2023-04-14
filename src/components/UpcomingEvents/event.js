/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useRef, useState } from "react";
import eventContext from "../../context/eventContext";
import EventItem from "./eventitem";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';




function event() {
  const context = useContext(eventContext);
  const { event, getEvent} = context;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [events, setEvents] = React.useState({id: "", etitle: "", edate:"", emonth:"", edescription: "", etime: "", eaddress:"",});
  const [events, setEvents] = React.useState({ title: "", date:"", month:"", eventimage:"", description: "", time:"", address:"" });

  const host = "https://sarniahindusociety.org:8000";




  useEffect(() => {
    getEvent();
    // eslint-disable-next-line 
  }, []);


  const upadate = useRef(null)
  const updateEvent = (currentEvent) => {
    upadate.current.click()
    setEvents({
      id: currentEvent._id, 
      title: currentEvent.title, 
      date: currentEvent.date,
      month: currentEvent.month,
      description: currentEvent.description, 
      time: currentEvent.time,
      address: currentEvent.address,
    })
  }

  // const handleClick = (e) => {
  //   console.log('updating note')
  //   editEvent(
  //     events.id, 
  //     events.etitle, 
  //     events.edate,
  //     events.emonth,
  //     events.edescription, 
  //     events.etime,
  //     events.eaddress
  //     );
  //   handleClose()
  //   toast.success("Edit Successfully!");
  // }


  const onChange = (e) => {
    setEvents({ ...events, [e.target.name]: e.target.value })
  }

  const handleImage = (e) => {
    setEvents({ ...events, eventimage: e.target.files[0] })
    console.log(events.eventimage)
  }

  const handleSubmit = async (e, title, date, month, eventimage, description, time, address) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('id', events._id);
    formData.append('title', events.title);
    formData.append('date', events.date);
    formData.append('month', events.month);
    formData.append('eventimage', events.eventimage);
    formData.append('description', events.description);
    formData.append('time', events.time);
    formData.append('address', events.address);

    console.log(events.image)

    axios.put( `${host}/api/events/updateevent/${events.id}`, formData, {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
          adminToken:localStorage.getItem('adminToken'),
        },
        // body: JSON.stringify({title, date, month, eventimage, description, time, address}),
      })
    .then((response) => {
      console.log(response)
      // const event = await response.json();
      // setEvents(events.concat(event));
      toast.success('edit Event Successfully!');
      setTimeout(() => {
        window.location.reload(false);
      }, 1500);
    })
    .catch((error) => {
      console.log(error)
      toast.error('Internal Server Error')
    });
}


  return (
    <div>
      <Button ref={upadate} className="d-none" variant="primary" onClick={handleShow}></Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="headclass m-2">Edit Event Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form style={{ margin: "auto" }} method="put" onSubmit={handleSubmit} encType='multipart/form-data'>
            <input name='title' type="text" placeholder="Title" autoComplete='off' value={events.title}  onChange={onChange}  className="input-connect w-100" />

            <input name='date' type="text" placeholder="Date" autoComplete='off' value={events.date}  onChange={onChange}  className="input-connect w-100" />

            <input name='month' type="text" placeholder="Month" autoComplete='off' value={events.month}  onChange={onChange}  className="input-connect w-100" />

            <input name='eventimage' type="file" autoComplete='off' accept=".png, .jpg, .jpeg" onChange={handleImage} className="pt-1 input-connect w-100" />

            <textarea name='description' type="text" placeholder="Description"  rows='5' value={events.description} onChange={onChange} cols='30' autoComplete='off' className="input-connect2 w-100" />

            <input name='time' type="text" placeholder="Time" autoComplete='off' value={events.time}  onChange={onChange}  className="input-connect w-100" />

            <input name='address' type="text" placeholder="Address" autoComplete='off' value={events.address} onChange={onChange} className="input-connect w-100" />

            <button onClick={handleClose} type="submit" className="mt-4 w-100 btn btn-primary">Update</button>
          </form>
        </Modal.Body>
      </Modal>
      <div
        className="row"
        style={{ justifyContent: "start", alignItems: "center" }}>
        {event.map((events) => {
          return <EventItem key={events._id} updateEvent={updateEvent} events={events} />;
        })}
      </div>
    </div>
  );
}

export default event;
