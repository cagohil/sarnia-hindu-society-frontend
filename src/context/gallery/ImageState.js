import { useState } from "react";
import ImageContext from "./ImageContext";

const ImageState = (props) => {
  const host = "https://sarnia.vercel.app";


  const imageTample = [];
  const [image, setImage] = useState(imageTample);


    //Get all Image
    const getImage = async () => {
      //API Call
      const response = await fetch(`${host}/api/gallery/fetchallimages`, {
        method: "GET",
        headers: {
          "Content-Type": "multipart/form-data"
        },
      });
      const json = await response.json()
    console.log(json)
    setImage(json)
    };
  


  //Add a Images
  const addImage = async (title, image) => {
    //API Call
    const response = await fetch(`${host}/api/gallery/addimage`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        adminToken:localStorage.getItem('adminToken'),
      },
      body: JSON.stringify({title, image}),
    });
    const images = await response.json();
    setImage(image.concat(images));
  };



  //Delete a Image
  const deleteImage = async(id) => {
    // API Call
    const response = await fetch(`${host}/api/gallery/deleteimage/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "multipart/form-data",
        adminToken:localStorage.getItem('adminToken'),
      },
    });
    const json = response.json();
    console.log(json);

    const newImage = image.filter((images) => {
      return images._id !== id;
    });
    setImage(newImage);
  };



  return (
    <ImageContext.Provider value={{ image, getImage, addImage, deleteImage}}>
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageState;
