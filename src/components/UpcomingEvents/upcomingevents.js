import React from "react";
import AddEvent from "./addevent";
import Event from "./event";
import deepa from "../../images/deepa.png"

const upcomingevents = () => {
  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, Times, seri" }}>
      <div style={{ maxWidth: "1400px", margin: "auto" }}>
        <div className="container-fluid pl-0 pr-0 pt-3 pb-3">
          <div >
            <div className="inpagecontent  mb-3">
              <div style={{display:"flex", justifyContent:"space-between", maxWidth:"500px", margin:"auto"}}>
                <img src={deepa} style={{width:"40px"}} alt="deepa" />
                <h1 className="headclass mb-0 mt-1 text-center">Upcoming Events</h1>
                <img src={deepa} style={{width:"40px"}} alt="deepa2" />
              </div>
            </div>
            <div  >
              <Event />
            </div>
            {!localStorage.getItem('adminToken') ? <div></div>
              : <div className="inpagecontent pt-0 pb-0">
                <AddEvent />
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default upcomingevents;
