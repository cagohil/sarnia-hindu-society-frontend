import React, { useContext , useState} from "react";
// import eventContext from "../../context/eventContext";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';




export default function AddEvent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [events, setEvents] = React.useState({ title: "", date:"", month:"", eventimage:"", description: "", time:"", address:"" });
  // const host = "http://localhost:8000";
  // const host = "http://3.15.117.216:8000";
  const host = "https://sarniahindusociety.org:8000";



  // const context = useContext(eventContext);
  // const {addEvent} = context;
  // const [events, setEvents] = React.useState({title: "", description:"", eventDate:""});

  // const handleClick = (e)=>{
  //   e.preventDefault()
  //   addEvent(events.title, events.description, events.eventDate);
  //   setEvents({title: "", description:"", eventDate:""})
  // toast.success('Added Successfully!')
  // handleClose()
  // }

  // const onChange = (e)=>{
  //   setEvents({...events, [e.target.name]: e.target.value})
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
    formData.append('title', events.title);
    formData.append('date', events.date);
    formData.append('month', events.month);
    formData.append('eventimage', events.eventimage);
    formData.append('description', events.description);
    formData.append('time', events.time);
    formData.append('address', events.address);

    console.log(events.image)

    axios.post( `${host}/api/events/addevent`, formData, {
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
      toast.success('Add Event Successfully!');
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
      <div style={{ display: "flex", justifyContent: "space-between"}}>
      <h1 className="headclass mt-2 pt-1">Add Events</h1>
        <button
         onClick={handleShow}
          style={{ border: "0", backgroundColor: "transparent" }}>
          <div style={{ fontSize: "40px", color: "#690000",  }}>
            <i className="fa-solid fa-circle-plus"></i>
          </div>
        </button>
      </div>

      <Button className="d-none" variant="primary" onClick={handleShow}></Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="headclass m-2">Add Events</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form style={{ margin: "auto" }} method="post" onSubmit={handleSubmit} encType='multipart/form-data'>
            <input name='title' type="text" placeholder="Title" autoComplete='off' value={events.title}  onChange={onChange}  className="input-connect w-100" />

            <input name='date' type="text" placeholder="Date" autoComplete='off' value={events.date}  onChange={onChange}  className="input-connect w-100" />

            <input name='month' type="text" placeholder="Month" autoComplete='off' value={events.month}  onChange={onChange}  className="input-connect w-100" />

            <input name='eventimage' type="file" autoComplete='off' accept=".png, .jpg, .jpeg" onChange={handleImage} className="pt-1 input-connect w-100" />

            <textarea name='description' type="text" placeholder="Description"  rows='5' value={events.description} onChange={onChange} cols='30' autoComplete='off' className="input-connect2 w-100" />

            <input name='time' type="text" placeholder="Time" autoComplete='off' value={events.time}  onChange={onChange}  className="input-connect w-100" />

            <input name='address' type="text" placeholder="Address" autoComplete='off' value={events.address} onChange={onChange} className="input-connect w-100" />

            <button onClick={handleClose} type="submit" className="mt-4 w-100 btn btn-primary">Add Event</button>
          </form>
        </Modal.Body>
      </Modal>

    </div>
  );
}
