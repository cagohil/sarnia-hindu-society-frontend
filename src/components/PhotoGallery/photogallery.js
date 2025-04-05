import React, { useState, useEffect } from "react";
import AddImage from "./addimage";
import Image from "./image";
import deepa from "../../assets/images/deepa.png";
import Loader from "../Loader"; // Import your Loader component

const Photogallery = () => {
  const [images, setImages] = useState([]); // State for images
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    // Simulate fetching images (replace with API call in real implementation)
    setTimeout(() => {
      // Replace with actual API data fetching logic
      setImages([]); // Set your fetched images here
      setLoading(false); // Set loading to false after fetching
    }, 1000);
  }, []);

  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, Times, serif" }}>
      <div className="pl-3 pr-3" style={{ maxWidth: "1400px", margin: "auto" }}>
        <div className="container-fluid pl-0 pr-0 pt-3 pb-3">
          <div>
            <div className="inpagecontent mb-3">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "500px",
                  margin: "auto",
                }}
              >
                <img src={deepa} style={{ width: "40px" }} alt="decorative" />
                <h1 className="headclass mb-0 mt-1 text-center">
                  Photo Gallery
                </h1>
                <img src={deepa} style={{ width: "40px" }} alt="decorative2" />
              </div>
            </div>
            <div>
              {loading && <Loader />} {/* Show loader while loading */}
              {!loading && images.length === 0 && (
                <div className="text-center">
                  <p>No images found. Please check back later!</p>
                </div>
              )}
              {!loading && images.length > 0 && (
                <div>
                  {/* Render your images */}
                  {images.map((image, index) => (
                    <Image key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              )}
            </div>
            {localStorage.getItem("adminToken") && (
              <div className="inpagecontent pt-0 pb-0">
                <AddImage />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photogallery;
