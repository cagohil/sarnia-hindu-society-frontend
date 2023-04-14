import React, { useState} from "react";
// import eventContext from "../../context/eventContext";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


export default function AddMember() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [members, setMembers] = React.useState({ memberimage: "", name:"", designation:"", about:""});
  // const host = "http://localhost:8000";
  // const host = "http://3.15.117.216:8000";
  const host = "https://sarniahindusociety.org:8000";


  const onChange = (e) => {
    setMembers({ ...members, [e.target.name]: e.target.value })
  }

  const handleImage = (e) => {
    setMembers({ ...members, memberimage: e.target.files[0] })
    console.log(members.memberimage)
  }

  const handleSubmit = async (e, memberimage, name, designation, about ) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('memberimage', members.memberimage);
    formData.append('name', members.name);
    formData.append('designation', members.designation);
    formData.append('about', members.about);

    console.log(members.image)

    axios.post( `${host}/api/members/addmember`, formData, {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
          adminToken:localStorage.getItem('adminToken'),
        },
      })
    .then((response) => {
      console.log(response)
      toast.success('Add Member Successfully!');
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
      <h1 className="headclass mt-2 pt-1">Add Member</h1>
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
          <Modal.Title className="headclass m-2">Add Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form style={{ margin: "auto" }} method="post" onSubmit={handleSubmit} encType='multipart/form-data'>

            <input name='memberimage' type="file" autoComplete='off' accept=".png, .jpg, .jpeg" onChange={handleImage} className="pt-1 input-connect w-100" />

            <input name='name' type="text" placeholder="Name" autoComplete='off' value={members.name}  onChange={onChange}  className="input-connect w-100" />

            <input name='designation' type="text" placeholder="Designation" autoComplete='off' value={members.designation}  onChange={onChange}  className="input-connect w-100" />

            <textarea name='about' type="text" placeholder="About"  rows='5' value={members.about} onChange={onChange} cols='30' autoComplete='off' className="input-connect2 w-100" />

            <button onClick={handleClose} type="submit" className="mt-4 w-100 btn btn-primary">Add Member</button>
          </form>
        </Modal.Body>
      </Modal>

    </div>
  );
}
