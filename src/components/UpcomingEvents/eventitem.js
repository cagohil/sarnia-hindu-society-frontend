import React, { useContext } from "react";
import eventContext from "../../context/eventContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


  function eventitem(props) {
    const { events, updateEvent  } = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const context = useContext(eventContext);
    const { deleteEvent } = context;
    
    const host = "https://sarniahindusociety.org:8000";
    
  const eventImageStyle = {
    maxHeight:'230px',
    minHeight:'230px',
    overflow:"hidden",
    float:"initial",
    backgroundImage:`url(${host}/resources/eventimage/${events.eventimage})`,
    backgroundSize:"cover",
    backgroundPosition:"center"
  }

  const backParentStyle = {
    boxShadow: "2px 2px 8px #666",
    MozBoxShadow: "2px 2px 8px #666",
    WebkitBoxShadow: "2px 2px 8px #666",
    width: "100%" ,
  }


  const eventDateMonthStyle = {
    display:"inline-block",
    margin:"15px",
    padding:"10px 15px",
    borderRadius:"4px",
  }

  const eventDateStyle = {
    fontSize:"23px",
    fontWeight:"600",
    lineHeight:"23px",
    color:"#111111"
  }

  const eventMonthStyle = {
    fontSize:"13px",
    fontWeight:"600",
    lineHeight:"15px",
    color:"#555555"
  }

  const BtnStyle = {
    bottom: "0px",
    width:"100%"
  }

  const handleDeleteBtn = (e) => {
    try {
      e.preventDefault()
      deleteEvent(events._id);
      toast.success("Delete Successfully!");
    } catch (error) {
      toast.error('Internal Server Error')
    }
  }

  const handleEditBtn = () => {
      updateEvent(events);
  }

  return (
    <div className="col-sm-12 col-md-6 col-lg-3" >
      <div >
        <div className="mb-3 " style={{ ...backParentStyle }} data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
          <div className="imagecard " style={{...eventImageStyle}}>
            <div className="date-month bg-white text-center" style={{...eventDateMonthStyle}}>
              <div className="date" style={{...eventDateStyle}}>{events.date}</div>
              <div className="month text-capitalize" style={{...eventMonthStyle}}>{events.month}</div>
            </div>
          </div>
          <div className="data inpageevent">
              <div className="data-title" style={{ color: "#690000" , fontSize:"22px", fontWeight:"700"}}>
                  <strong>{events.title}</strong>
              </div>
              <div className="data-description">
                  <p className="mb-0" style={{wordWrap:"break-word"}}>{events.description}</p>
              </div>
              <div className="data-time">
                  <p className="mb-0" style={{wordWrap:"break-word",color:"#555555"}}><i className="fa-solid fa-clock py-2 pr-2"></i>{events.time}</p>
              </div>
              <div className="data-address">
                  <p className="mb-0" style={{wordWrap:"break-word",color:"#555555"}}><i className="fa-solid fa-location-dot py-2 pr-2"></i>{events.address}</p>
              </div>
                  {/* {!localStorage.getItem('adminToken')?<div></div>
                  :<div className="mt-3" style={{ display: "flex" }}>
                <Link style={{ cursor: "pointer" }}
                    onClick={(e) => {
                    e.preventDefault()
                    deleteEvent(events._id);
                    toast.success("Delete Successfully!");}}
                className="mr-3"><i className="mr-1 fa-solid fa-trash-can"></i>Delete</Link>
                <Link style={{ cursor: "pointer" }} className=" mr-3" 
                    onClick={() => {updateEvent(events);}}>
                <i  className="mr-1 fa-solid fa-pen-to-square"></i>Edit</Link>
              </div>} */}
          </div>
          {!localStorage.getItem('adminToken') ?
              <div></div>
              : <>
              <div className="btn-group" style={{ ...BtnStyle }} role="group" aria-label="Basic mixed styles example">
                  <button type="button" style={{ borderRadius:'0' }} onClick={handleEditBtn} className="btn btn-warning"><i  className="mr-1 fa-solid fa-pen-to-square"></i>Edit</button>

                  <button type="button" style={{ borderRadius:'0' }} onClick={handleDeleteBtn} className="btn btn-danger"><i className="mr-1 fa-solid fa-trash-can "></i>Delete</button>
                </div></>}
        </div>
      </div>
    </div>
  );
}

export default eventitem;
