import Carousel from 'react-bootstrap/Carousel';
import image1 from "../images/home-image-1.jpg";
import image2 from '../images/home-image-2.png';
import image3 from '../images/home-image-3.png';

function imageslider() {
  return (
    <Carousel fade className='slide-image'>
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
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default imageslider;