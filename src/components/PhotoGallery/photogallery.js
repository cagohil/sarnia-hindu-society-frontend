import React from "react";
import AddImage from "./addimage";
import Image from "./image";
import deepa from "../../assets/images/deepa.png"

const photogallery = () => {
  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, Times, seri" }}>
      <div className="pl-3 pr-3" style={{ maxWidth: "1400px", margin: "auto" }}>
        <div className="container-fluid pl-0 pr-0 pt-3 pb-3">
          <div >
            <div className="inpagecontent  mb-3">
              <div style={{display:"flex", justifyContent:"space-between", maxWidth:"500px", margin:"auto"}}>
                <img src={deepa} style={{width:"40px"}} alt="deepa" />
                <h1 className="headclass mb-0 mt-1 text-center">Photo Gallery</h1>
                <img src={deepa} style={{width:"40px"}} alt="deepa2" />
              </div>
            </div>
            <div  >
              <Image />
            </div>
            {!localStorage.getItem('adminToken') ? <div></div>
              : <div className="inpagecontent pt-0 pb-0">
                <AddImage />
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default photogallery;
