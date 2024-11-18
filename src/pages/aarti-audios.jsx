import React from "react";
import audio from "../assets/audios/JayAdhyashaktiAarti.mp3";
import audio2 from "../assets/audios/JayAdhyashaktiAarti.ogg";
import deepa from "../assets/images/deepa.png";

const AartiAudios = () => {
  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, Times, seri" }}>
      <div className="container">
        <div className="inpagecontent  mb-3 mt-3">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "500px",
              margin: "auto",
            }}
          >
            <img src={deepa} style={{ width: "40px" }} alt="deepa" />
            <h1 className="headclass mb-0 mt-1 text-center">Aarti Audios</h1>
            <img src={deepa} style={{ width: "40px" }} alt="deepa2" />
          </div>
        </div>

        <div
          style={{
            justifyContent: "start",
            display: "flex",
            flexWrap: "wrap",
            paddingBottom: "20px",
          }}
        >
          <div
            className="audioBox"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="px-4 pt-3" style={{ fontSize: "20px" }}>
              <p className="m-0">Jay Adhyashakti Aarti</p>
            </div>
            <audio controls className="audio">
              <source src={audio2} type="audio/ogg" />
              <source src={audio} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AartiAudios;
