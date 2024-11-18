import React from "react";
import Member from "./member";
import deepa from "../../assets/images/deepa.png"
import AddMember from "./addmember";
import MembershipInfo from "../InfoComponents/memberShipInfo"

const membership = () => {
  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, Times, seri" }}>
      <div style={{ maxWidth: "1400px", margin: "auto" }}>
        <div className="container-fluid pl-3 pr-3 pt-3 pb-1">
          <div >
            <div className="inpagecontent  mb-3">
              <div style={{display:"flex", justifyContent:"space-between", maxWidth:"500px", margin:"auto"}}>
                <img src={deepa} style={{width:"40px"}} alt="deepa" />
                <h1 className="headclass mb-0 mt-1 text-center">list of Board Members</h1>
                <img src={deepa} style={{width:"40px"}} alt="deepa2" />
              </div>
            </div>
            <div  >
              <Member />
            </div>
            {!localStorage.getItem('adminToken') ? <div></div>
              : <div className="inpagecontent pt-0 pb-0">
                <AddMember />
              </div>}
          </div>
        </div>
        <MembershipInfo/>
      </div>
    </div>
  );
};

export default membership;
