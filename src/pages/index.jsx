import React from "react";
import Events from "../components/Events";
import ContactForm from "../components/contactForm";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/images/home-image-1.jpg";
import image2 from "../assets/images/home-image-2.png";
import image3 from "../assets/images/home-image-3.png";
import EventImage from "../assets/images/event-img.jpeg";
import NavratriTicketCard from "../components/TicketCard";
import DiwaliEvent from "../components/DiwaliTicketCard";

const Home = () => {
  const DiwaliLink =
    "https://www.zeffy.com/ticketing/8a3c5201-fdd2-4dc3-9a8d-79540d29625a";

  const EventLink =
    "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FToronto&showPrint=0&src=c2FybmlhaGluZHVzb2NpZXR5QGdtYWlsLmNvbQ&color=%23F09300";

  const YogaDayLink = "https://www.zeffy.com/ticketing/2025-international-yoga";

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
                        Sarnia's Hindu Mandir (temple) is at 217 College Avenue
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

          {/* Yoga Registration Button */}
          {/* <div className="yoga-day-container" style={{
            margin: "40px auto",
            maxWidth: "900px",
            textAlign: "center",
            padding: "30px 20px",
            background: "linear-gradient(135deg, #f9f5f0 0%, #ffffff 100%)",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: "1px solid rgba(255,152,0,0.2)",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{
              position: "absolute",
              top: "-50px",
              left: "-50px",
              width: "200px",
              height: "200px",
              background: "rgba(255,152,0,0.05)",
              borderRadius: "50%"
            }}></div>

            <div style={{
              position: "absolute",
              bottom: "-80px",
              right: "-80px",
              width: "250px",
              height: "250px",
              background: "rgba(179,0,0,0.05)",
              borderRadius: "50%"
            }}></div>

            <div style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              right: "10px",
              bottom: "10px",
              border: "1px dashed rgba(255,152,0,0.3)",
              borderRadius: "8px",
              pointerEvents: "none"
            }}></div>

            <div className="yoga-day-inner" style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              padding: "20px",
              zIndex: "2"
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "20px"
              }}>
                <div style={{ width: "60px", height: "60px" }}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3V21" stroke="#FF9800" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M8 7L12 3L16 7" stroke="#B30000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 17L12 21L8 17" stroke="#B30000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 12H21" stroke="#FF9800" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M7 8L3 12L7 16" stroke="#B30000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M17 16L21 12L17 8" stroke="#B30000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div style={{ width: "60px", height: "60px" }}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="#FF9800" stroke-width="1.5" />
                    <path d="M6 20C6 17.7909 7.79086 16 10 16H14C16.2091 16 18 17.7909 18 20" stroke="#B30000" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M12 12V16" stroke="#FF9800" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M10 8L14 12" stroke="#B30000" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M14 8L10 12" stroke="#B30000" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                </div>
              </div>

              <h3 style={{
                color: "#B30000",
                fontSize: "2rem",
                fontWeight: "700",
                marginBottom: "10px",
                textShadow: "1px 1px 2px rgba(0,0,0,0.05)",
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "1px"
              }}>
                International Yoga Day 2025
              </h3>

              <div style={{
                width: "100px",
                height: "4px",
                background: "linear-gradient(90deg, #FF9800, #B30000)",
                margin: "15px auto",
                borderRadius: "2px"
              }}></div>

              <p style={{
                fontSize: "1.1rem",
                color: "#555",
                maxWidth: "600px",
                margin: "0 auto 25px",
                lineHeight: "1.6",
                fontFamily: "'Poppins', sans-serif"
              }}>
                Celebrate Yoga Day with us! Experience yoga’s gift: revitalizing the mind, body, and spirit as a timeless way of life.
              </p>

              <div style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: "20px"
              }}>
                <a
                  href={YogaDayLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "14px 32px",
                    background: "linear-gradient(135deg, #B30000, #FF5722)",
                    color: "white !important",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    borderRadius: "8px",
                    textDecoration: "none",
                    boxShadow: "0 4px 15px rgba(179,0,0,0.2)",
                    border: "none",
                    transition: "all 0.3s ease",
                    fontFamily: "'Poppins', sans-serif"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(179,0,0,0.3)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(179,0,0,0.2)";
                  }}
                >
                  <span style={{
                    marginRight: "12px",
                    display: "inline-flex",
                    alignItems: "center",
                    color: "white"
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "8px" }}>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="1.5" />
                      <path d="M12 16V12L14 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Register Now
                  </span>
                </a>
              </div>

              <div style={{
                width: "80px",
                height: "80px",
                marginTop: "20px",
                opacity: "0.8"
              }}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#FF9800" stroke-width="1.5" />
                  <path d="M12 8V4" stroke="#FF9800" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M12 20V16" stroke="#FF9800" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M8 12H4" stroke="#FF9800" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M20 12H16" stroke="#FF9800" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M15.6569 15.6569L18 18" stroke="#B30000" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M6 6L8.34315 8.34315" stroke="#B30000" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M8.34315 15.6569L6 18" stroke="#B30000" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M15.6569 8.34315L18 6" stroke="#B30000" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </div>
            </div>
          </div> */}

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

          {/* navrtri card start here */}

          {/* <NavratriTicketCard /> */}

          {/* navrtri card end */}

          {/* <NavratriTicketCard /> */}

          {/* <Events /> */}

          <DiwaliEvent />

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