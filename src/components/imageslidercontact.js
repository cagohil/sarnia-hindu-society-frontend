import Carousel from 'react-bootstrap/Carousel';
import image1 from "../images/contact-image-1.jpg";
import image2 from "../images/contact-image-2.png";

function imageslidercontact() {
  return (
    <Carousel fade className='slide-image-contact'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default imageslidercontact;