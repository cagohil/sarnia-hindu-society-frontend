import React from "react";
import AddSchedule from "./addschedule";
import Schedule from "./schedule";
import deepa from "../../images/deepa.png"

const mainschedule = () => {
  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, Times, seri" }}>
      <div style={{ maxWidth: "1400px", margin: "auto" }}>
        <div className="container-fluid pl-3 pr-3 pt-3 pb-3">
          <div >
            <div className="inpagecontent  mb-3">
              <div style={{display:"flex", justifyContent:"space-between", maxWidth:"500px", margin:"auto"}}>
                <img src={deepa} style={{width:"40px"}} alt="deepa" />
                <h1 className="headclass mb-0 mt-1 text-center">Monthly Mandir Schedule</h1>
                <img src={deepa} style={{width:"40px"}} alt="deepa2" />
              </div>
            </div>
            <div  >
              <Schedule />
            </div>
            {!localStorage.getItem('adminToken') ? <div></div>
              : <div className="inpagecontent pt-0 pb-0">
                <AddSchedule />
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default mainschedule;
