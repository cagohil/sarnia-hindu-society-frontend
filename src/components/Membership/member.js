/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import memberContext from "../../context/memberContext";
import MemberItem from "./memberitem";

function member() {
  const context = useContext(memberContext);
  const { member, getMember } = context;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [members, setMembers] = React.useState({ memberimage: "", name:"", designation:"", about:""});
  const host = "https://sarniahindusociety.org:8000";


  useEffect(() => {
    getMember();
    // eslint-disable-next-line 
  }, []);

  const upadate = useRef(null)
  const updateMember = (currentMember) => {
    upadate.current.click()
    setMembers({
      id: currentMember._id,
      memberimage: currentMember.memberimage,
      name: currentMember.name,
      designation: currentMember.designation,
      about: currentMember.about,
    })
  }


  const onChange = (e) => {
    setMembers({ ...members, [e.target.name]: e.target.value })
  }

  const handleImage = (e) => {
    setMembers({ ...members, memberimage: e.target.files[0] })
    console.log(members.memberimage)
  }


  const handleSubmit = async (e, title) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('memberimage', members.memberimage);
    formData.append('name', members.name);
    formData.append('designation', members.designation);
    formData.append('about', members.about);
    formData.append('id', members._id);

    console.log(members.image)

    axios.put(`${host}/api/members/updatemember/${members.id}`, formData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        adminToken: localStorage.getItem('adminToken'),
      },
    })
      .then((response) => {
        console.log(response)
        toast.success('Updated Member Info');
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
          <Modal.Title className="headclass m-2">Edit Member Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={{ margin: "auto" }} method="put" onSubmit={handleSubmit} encType='multipart/form-data'>
            <input name='memberimage' type="file" autoComplete='off' accept=".png, .jpg, .jpeg" onChange={handleImage} className="pt-1 input-connect w-100" />

            <input name='name' type="text" placeholder="Name" autoComplete='off' value={members.name} onChange={onChange} className="input-connect w-100" />

            <input name='designation' type="text" placeholder="Designation" autoComplete='off' value={members.designation} onChange={onChange} className="input-connect w-100" />

            <textarea name='about' type="text" placeholder="About" rows='5' value={members.about} onChange={onChange} cols='30' autoComplete='off' className="input-connect2 w-100" />
            <button onClick={handleClose} type="submit" className="mt-4 w-100 btn btn-primary">Update</button>
          </form>
        </Modal.Body>
      </Modal>

      <div
        className="row"
        style={{ justifyContent: "start", alignItems: "center" }}>
        {member.map((members) => {
          return <MemberItem key={members._id} updateMember={updateMember} members={members} />;
        })}
      </div>
    </div>
  );
}

export default member;
