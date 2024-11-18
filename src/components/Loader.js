import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
        zIndex: 9999,
        margin:"auto",
        color: "black"
      }}
    >
      <Spinner animation="border" role="status" variant="dark">
      </Spinner>
    </div>
  );
};

export default Loader;
