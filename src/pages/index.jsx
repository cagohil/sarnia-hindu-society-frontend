import React from "react";
import Events from "../components/Events";
import ContactForm from "../components/contactForm";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/images/home-image-1.jpg";
import image2 from "../assets/images/home-image-2.png";
import image3 from "../assets/images/home-image-3.png";
import EventImage from "../assets/images/event-img.jpeg";

const Home = () => {
  const DiwaliLink =
    "https://www.zeffy.com/ticketing/8a3c5201-fdd2-4dc3-9a8d-79540d29625a";

  const EventLink =
    "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FToronto&showPrint=0&src=c2FybmlhaGluZHVzb2NpZXR5QGdtYWlsLmNvbQ&color=%23F09300";

  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, Times, seri" }}>
      <div className="container-fluid home-container">
        <div style={{ maxWidth: "1400px", margin: "auto" }}>
          <div className="row pt-3">
            <div className="col-lg-4 col-xl-4 col-md-12 imageBox">
              <Carousel fade className="slide-image">
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
            </div>
            <div className="col-lg-8 col-xl-8 col-md-12 m-0 p-0 ">
              <div className="container">
                <div className="home-text">
                  <div>
                    <h1 className="headclass headclass2">About Us</h1>
                    <div>
                      <p className="text-home">
                        Sarnia’s Hindu Mandir (temple) is at 217 College Avenue
                        North at George Street and was incorporated in 1987. It
                        is the only Hindu Mandir in the Lambton County area. The
                        other nearest one is in London-ON on the Canadian side,
                        and none in Port Huron, Michigan, on the US side across
                        the St. Clair River.
                      </p>
                      <p className="text-home">
                        Sarnia Hindu Society (SHS) is a registered charitable,
                        religious, and cultural organization. Its Business
                        Registration Number is 89237-3044-RR001. SHS
                        organization is managed by elected Board Members & other
                        volunteers, and donations by members & casual visitors.
                      </p>
                      <p className="text-home">
                        Any donations in cash and in-kind are always welcome &
                        highly appreciated. These are essential for the upkeep
                        of the Mandir services and enhancing its regular
                        operations. Membership subscriptions and donations are
                        income tax deductible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Diwali Link btn start here*/}
          {/* <div className="inpagecontent mb-3 mt-3">
            <a href={DiwaliLink} className="link-btn">
              <img src={deepa} className="deepa" alt="deepa" />
              <h1 className="headclass mb-0 text-center">
                <a href={DiwaliLink} className="hover-link">
                  SHS Diwali 2024 <br /> Buy Tickets
                </a>
              </h1>
              <img src={deepa} className="deepa" alt="deepa" />
            </a>
          </div> */}
          {/* Diwali Link btn end here*/}

          {/* <Events /> */}

          <div className="traditional-calendar-widget">
            <h3 className="calendar-title">Upcoming Events Calendar</h3>
            <a
              href={EventLink}
              rel="noreferrer"
              target="_blank"
              className="calendar-link"
            >
              <img
                src={EventImage}
                alt="Click to view our event calendar"
                className="calendar-thumbnail"
              />
              <span className="click-prompt">Click to View Calendar →</span>
            </a>
          </div>

          <ContactForm
            contactUsForm={false}
            MembershipAndDonationCards={true}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
