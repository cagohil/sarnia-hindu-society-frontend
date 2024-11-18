/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from "react";
import imageContext from "../../context/gallery/ImageContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from 'react-bootstrap/Modal';


function imageitem(props) {
  const { images, updateImage } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(imageContext);
  const { deleteImage } = context;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const host = "http://localhost:8000";
  // const host = "http://3.15.117.216:8000";
  const host = "https://sarnia.vercel.app";

  const backgroundStyle = {
    maxHeight: '300px',
    minHeight: '300px',
    overflow: "hidden",
    float: "initial",
    backgroundImage: `url(${host}/resources/image/${images.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer"
  }

  const backParentStyle = {
    boxShadow: "2px 2px 8px #666",
    MozBoxShadow: "2px 2px 8px #666",
    WebkitBoxShadow: "2px 2px 8px #666",
    width: "100%" ,
  }


  const backgroundModalStyle = {
    height: "600px",
    backgroundImage: `url(${host}/resources/image/${images.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "2px 2px 8px #666",
  }


  const BtnStyle = {
    width: "100%",
    zIndex: "1",
  }

  const handleDeleteBtn = (e) => {
    try {
      e.preventDefault()
      deleteImage(images._id);
      toast.success("Delete Successfully!");
    } catch (error) {
      toast.error('Internal Server Error')
    }
  }

  const handleEditBtn = () => {
    updateImage(images);
  }



  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4" style={{ fontFamily: "roboto, sans-serif" }}>
        <div className="mb-4 " style={{...backParentStyle}} >
          <div onClick={handleShow} className="" style={{ ...backgroundStyle }} data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">


          </div>
          {!localStorage.getItem('adminToken') ?
            <div></div>
            : <>
              <div className="btn-group" style={{ ...BtnStyle }} role="group" aria-label="Basic mixed styles example">
                <button type="button" onClick={handleEditBtn} style={{ borderRadius:'0' }} className="btn btn-warning"><i className="mr-1 fa-solid fa-pen-to-square"></i>Edit</button>

                <button type="button" onClick={handleDeleteBtn} style={{ borderRadius:'0' }} className="btn btn-danger"><i className="mr-1 fa-solid fa-trash-can "></i>Delete</button>
              </div></>}

        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="backgroundModalStyle" style={{ ...backgroundModalStyle }}>
        </Modal.Body>
      </Modal>

    </>
  );
}

export default imageitem;
