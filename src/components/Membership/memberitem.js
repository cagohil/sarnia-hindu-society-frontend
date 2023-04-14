import React, { useContext } from "react";
import memberContext from "../../context/memberContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

// const host = "http://localhost:8000";
// const host = "http://3.15.117.216:8000";
const host = "https://sarniahindusociety.org:8000";



function memberitem(props) {
  const { members, updateMember } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(memberContext);
  const { deleteMember } = context;


  const imageCardStyle = {
    minHeight: '230px',
    overflow: "hidden",
    float: "initial",
    backgroundImage: `url(${host}/resources/memberimage/${members.memberimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }


  const eventDateMonthStyle = {
    display: "inline-block",
    margin: "15px",
    padding: "5px 15px",
    borderRadius: "4px",
    boxShadow: "5px 3px 15px rgb(0 0 0 / 20%)",
    backgroundColor: "rgb(105, 0, 0)",
  }

  const eventDateStyle = {
    fontSize: "14px",
    fontWeight: "500",
    color: "#ffffff"
  }

  const BtnStyle = {
    bottom: "0px",
    padding: "0px 0px 0px 0px",
    width:"100%",
  }


  const handleDeleteBtn = (e) => {
    try {
      e.preventDefault()
      deleteMember(members._id);
      toast.success("Delete Successfully!");
    } catch (error) {
      toast.error('Internal Server Error')
    }
  }

  const handleEditBtn = () =>{
    updateMember(members);
  }


  return (
    <div className="col-sm-6 col-md-4 col-lg-2 " style={{fontFamily: "roboto, sans-serif"}}>
      <div >
        <div className="mb-3 membercard" data-aos="flip-right" data-aos-easing="linear" data-aos-duration="1000">
          <div className="imagecard" style={{ ...imageCardStyle }}>
            <div className="text-center" style={{ ...eventDateMonthStyle }}>
              <div className="date" style={{ ...eventDateStyle }}><p className="mb-0" style={{ wordWrap: "break-word"}}>{members.designation}</p>
              </div>
            </div>
          </div>
          <div className="data membaerdetail ">
            <div className="name" style={{ color: "#690000", fontSize: "22px", fontWeight: "700" }}>
              <strong>{members.name}</strong>
            </div>
            <div className="about">
              <p className="mb-0" style={{ wordWrap: "break-word", color: "#555555" }}>{members.about}</p>
            </div>

            {/* {!localStorage.getItem('adminToken') ? <div></div>
              : <div className="mt-3" style={{ display: "flex" }}>
                <Link style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault()
                    deleteMember(members._id);
                    toast.success("Delete Successfully!");
                  }}
                  className="mr-3"><i className="mr-1 fa-solid fa-trash-can"></i>Delete</Link>
              </div>} */}

          </div>
          {!localStorage.getItem('adminToken') ?
              <div></div>
              : <>
              <div className="btn-group" style={{ ...BtnStyle }} role="group" aria-label="Basic mixed styles example">
                  <button type="button" onClick={handleEditBtn} style={{ borderRadius:'0' }} className="btn btn-warning"><i  className="fa-solid fa-pen-to-square"></i></button>

                  <button type="button" onClick={handleDeleteBtn} style={{ borderRadius:'0' }} className="btn btn-danger"><i className="fa-solid fa-trash-can "></i></button>
                </div></>}

        </div>
      </div>
    </div>
  );
}

export default memberitem;
