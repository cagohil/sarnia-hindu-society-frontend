/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ImageItem from "./imageitem";
import imageContext from "../../context/gallery/ImageContext";



function image() {
  const context = useContext(imageContext);
  const { image, getImage} = context;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [images, setPhoto] = React.useState({ title: "", image: "" });
  const host = "https://sarnia.vercel.app";


  const upadate = useRef(null)
  const updateImage = (currentImage) => {
    upadate.current.click()
    setPhoto({
      id: currentImage._id, 
      title: currentImage.title, 
      image: currentImage.image,
    })
  }


  useEffect(() => {
    getImage();
    // eslint-disable-next-line 
  }, []);


  const onChange = (e) => {
    setPhoto({ ...images, [e.target.name]: e.target.value })
  }

  const handleImage = (e) => {
    setPhoto({ ...images, image: e.target.files[0] })
    console.log(images.image)
  }


  const handleSubmit = async (e, title) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', images.title);
    formData.append('image', images.image);
    formData.append('id', images._id);



    console.log(images.image)

    axios.put( `${host}/api/gallery/updateimage/${images.id}`, formData, {
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
      toast.success('Replace Image Successfully!');
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
          <Modal.Title className="headclass m-2">Edit Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form style={{ margin: "auto" }} method="put" onSubmit={handleSubmit} encType='multipart/form-data'>
          <input name='title' type="text" placeholder="Title" autoComplete='off' value={images.title} onChange={onChange} className="mb-2 input-connect w-100" />
          <input name='image' type="file" autoComplete='off' accept=".png, .jpg, .jpeg" onChange={handleImage} className="pt-1 input-connect w-100" />
          <button onClick={handleClose} type="submit" className="mt-4 w-100 btn btn-primary">Update</button>
        </form>
        </Modal.Body>
      </Modal>

      <div
        className="row"
        style={{ justifyContent: "start", alignItems: "center" }}>
        {image.map((images) => {
          return <ImageItem key={images._id} updateImage={updateImage} images={images}/>;
        })}
      </div>
    </div>
  );
}

export default image;
