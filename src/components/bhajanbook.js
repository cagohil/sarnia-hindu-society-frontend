import React from "react";
import BhajanBookImg from "../images/Bhajan-book.png"
import BhajanBookPDF from "../images/Open-SHS-Bhajan-Book.pdf.pdf"
import deepa from "../images/deepa.png"


const bhajanbook = () => {
  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, Times, seri" }}>
      <div className="container pt-3 pb-3" >
      <div className="inpagecontent  mb-3">
          <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "500px", margin: "auto" }}>
            <img src={deepa} style={{ width: "40px" }} alt="deepa" />
            <h1 className="headclass mb-0 mt-1 text-center">SHS Bhajan book</h1>
            <img src={deepa} style={{ width: "40px" }} alt="deepa2" />
          </div>
        </div>

        <div className="inpagecontent bhajancard text-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
        <p><a target="_blank" without rel="noreferrer" href={BhajanBookPDF}><img style={{width:"220px", margin:"15px 0px 0px 0px"}} src={BhajanBookImg} alt="Bhajan-Book-Img" /></a></p>
        <a className="text-primary" target="_blank" without rel="noreferrer" href={BhajanBookPDF}>click</a> here to open a SHS Bhajan <br /> book PDF file.
        </div>
      </div>
    </div>
  );
};
export default bhajanbook;
