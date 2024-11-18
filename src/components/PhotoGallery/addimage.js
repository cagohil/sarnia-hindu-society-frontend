import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


export default function AddImage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [photo, setPhoto] = React.useState({ title: "", image: "" });
  const host = "https://sarnia.vercel.app";



  // const context = useContext(imageContext);
  // const {addImage} = context;
  // const [images, setImages] = React.useState({title: "", image:""});

  // const handleSubmitButton = (e)=>{
  //   e.preventDefault()
  // toast.success('Added Successfully!')
  // handleClose()
  // }

  // const onChange = (e)=>{
  //   setImages({...images, [e.target.name]: e.target.value})
  // }



  const onChange = (e) => {
    setPhoto({ ...photo, [e.target.name]: e.target.value })
  }

  const handleImage = (e) => {
    setPhoto({ ...photo, image: e.target.files[0] })
    console.log(photo.image)
  }

  const handleSubmit = async (e, title, image) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', photo.title);
    formData.append('image', photo.image);

    console.log(photo.image)

    axios.post( `${host}/api/gallery/addimage`, formData, {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
          adminToken:localStorage.getItem('adminToken'),
        },
        body: JSON.stringify({title, image}),
      })
    .then((response) => {
      console.log(response)
      toast.success('Add Image Successfully!');
      setTimeout(() => {
        window.location.reload(false);
      }, 1500);
    })
    .catch((error) => {
      console.log(error)
      toast.error('Internal Server Error');
    });
}

return (
  <div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1 className="headclass mt-2 pt-1">Upload Images</h1>
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
        <Modal.Title className="headclass m-2">Upload Images</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form style={{ margin: "auto" }} method="post" onSubmit={handleSubmit} encType='multipart/form-data'>
          <input name='title' type="text" placeholder="Title" autoComplete='off' value={photo.title} onChange={onChange} className="mb-2 input-connect w-100" />
          <input name='image' type="file" autoComplete='off' accept=".png, .jpg, .jpeg" onChange={handleImage} className="pt-1 input-connect w-100" />
          <button onClick={handleClose} type="submit" className="mt-4 w-100 btn btn-primary">Upload</button>
        </form>
      </Modal.Body>
    </Modal>

  </div>
);
}
