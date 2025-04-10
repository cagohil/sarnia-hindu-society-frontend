import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/images/contact-image-1.jpg";
import image2 from "../assets/images/contact-image-2.png";
import { Link } from "react-router-dom";

const ContactForm = ({ contactUsForm = true, MembershipAndDonationCards = false }) => {
  AOS.init();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_87qe8t7",
        "template_lojbowq",
        form.current,
        "BCuvHiaPQHvkFutW7"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Submitted Successfully!");
          setTimeout(() => {
            e.target.reset();
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          toast.error("Please try again.");
        }
      );
  };

  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, Times, serif" }}>
      <div className="container-fluid contact-container pt-0 pl-0 pr-0">
        <div style={{ maxWidth: "1400px", margin: "auto" }}>
          <div className="row">
            {/* Mandir Info Section */}
            <div className="col-lg-3 m-0 col-xl-3 p-0 col-md-12 col-margin">
              <div className="container">
                <div className="inpagecontent">
                  <div
                    className=""
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      paddingBottom: "5px",
                    }}
                  >
                    <div className="mandir-info-sec">
                      <div className="text-start">
                        <p className="headclass">MANDIR INFO</p>
                      </div>
                      <div
                        className="mt-4 mb-3"
                        style={{ color: "#690000", fontSize: "17px" }}
                      >
                        <strong>
                          <Link to="/schedule">
                            <i className="fa-solid fa-calendar-days mr-2"></i>
                            Second Sunday of every Month <br />
                            10:30 AM to 1:00 PM
                          </Link>
                        </strong>
                      </div>
                      <div
                        className="mt-4 mb-3"
                        style={{ color: "#690000", fontSize: "17px" }}
                      >
                        <strong>
                          <a href="mailto:info@sarniahindusociety.com">
                            <i className="fa-solid fa-envelope mr-2"></i>
                            info@sarniahindusociety.com
                          </a>
                        </strong>
                      </div>
                      <div
                        className="mt-4 mb-3"
                        style={{ color: "#690000", fontSize: "17px" }}
                      >
                        <strong>
                          <a href="https://www.google.com/maps/place/217+College+Ave+N,+Sarnia,+ON+N7T+6B5,+Canada/@42.9746337,-82.4041141,17z/data=!3m1!4b1!4m5!3m4!1s0x88259cc5b5978ccf:0x22020c816248f77a!8m2!3d42.9746337!4d-82.4019201">
                            <i className="fa-solid fa-location-dot mr-2"></i>217
                            College Ave North, Sarnia,
                            <br /> Ontario, N7T 6B5
                          </a>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Carousel Section */}
            <div className="col-lg-4 col-xl-4 imageBox pr-0 pl-0 col-md-12 col-margin">
              <Carousel fade className="slide-image-contact">
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
            </div>

            {/* Contact Us Form Section */}
            {contactUsForm && (
              <div className="col-lg-5 col-xl-5 m-0 p-0 col-md-12 col-margin">
                <div className="container">
                  <div className="inpagecontent4">
                    <div className="text-center">
                      <p className="headclass">CONNECT WITH US</p>
                      <form ref={form} onSubmit={sendEmail}>
                        <p className="contact-p">
                          <input
                            name="Name"
                            type="text"
                            placeholder="Enter your Name"
                            autoComplete="off"
                            required
                            className="input-connect"
                          />
                        </p>
                        <p className="contact-p">
                          <input
                            name="Email"
                            type="email"
                            placeholder="Enter your email id"
                            autoComplete="off"
                            required
                            className="input-connect"
                          />
                        </p>
                        <p className="contact-p">
                          <textarea
                            name="Message"
                            type="text"
                            placeholder="Enter your message"
                            rows="3"
                            cols="30"
                            autoComplete="off"
                            className="input-connect2"
                          />
                        </p>
                        <button
                          data-aos="flip-up"
                          data-aos-easing="linear"
                          data-aos-duration="1000"
                          className="join-now-btn"
                          type="submit"
                          value="Send"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}



            {/* Membership and Donation cards Section */}
            {MembershipAndDonationCards && (
              <div className="col-lg-5 col-xl-5 m-0 p-0 col-md-12 col-margin">
                <div className="container">
                <div className="inpagecontentsmall inpagecontent" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
                <div>
                  <p>
                  It is through the kindness of devotees like you that we are able to keep our traditions alive and make a positive impact on the lives of many.
                  </p>

                  <a
                  target="_blank"
                  href="https://www.zeffy.com/fundraising/donations-to-shs--2025"
                  rel="noopener noreferrer"
                >
                  <button className="join-now-btn-small join-now-btn">DONATE NOW</button>
                </a>
                </div>
                
              </div>


              <div className="inpagecontentsmall inpagecontent" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
                <div>
                  <p>
                  *Being part of SHS mandir community can be a deeply rewarding experience, offering both spiritual growth and a sense of belonging. *
                  </p>

                  <a
                  target="_blank"
                  href="https://www.zeffy.com/ticketing/sarnia-hindu-society-memberships--2024"
                  rel="noopener noreferrer"
                >
                  <button className="join-now-btn-small join-now-btn">JOIN US</button>
                </a>
                </div>
                
              </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
