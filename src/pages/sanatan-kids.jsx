//example of design and all
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const SanatanKids = () => {
  return (
    <div className="sanatan-kids-page">
      <div style={{ fontFamily: "'Poppins', 'Georgia', Times New Roman, Times, serif" }}>
        <div className="page-hero" style={{ 
          background: "linear-gradient(rgba(255, 166, 0, 0.1), rgba(255, 87, 34, 0.1))",
          borderBottom: "2px solid #ff9800",
          padding: "30px 0" 
        }}>
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div data-aos="fade-down" data-aos-duration="800">
                  <h1 className="headclass" style={{ 
                    color: "#B30000", 
                    fontSize: "2.5rem",
                    marginBottom: "15px",
                    fontWeight: "700",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
                  }}>Sanatan Kids</h1>
                  <div className="hero-divider" style={{
                    width: "120px",
                    height: "3px",
                    background: "linear-gradient(to right, #FFA500, #B30000)",
                    margin: "0 auto 20px"
                  }}></div>
                  <p className="lead" style={{ fontSize: "1.1rem", color: "#333" }}>
                    Nurturing young minds through Hindu heritage and cultural exploration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-4 pb-4">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="inpagecontent" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">
                <div className="welcome-section mb-4 p-4" style={{
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
                }}>
                  <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
                    Welcome to our vibrant monthly Sanatan Kids program at SHS, where Sanatan Hindu kids come 
                    together to explore and celebrate Indian culture and religion.
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
                    Our program is designed to help children from all parts of India connect with their Hindu 
                    heritage through fun and educational activities, all conducted in English. We meet every 
                    fourth Sunday from 10 AM to 12 PM, and each gathering is a delightful mix of learning and 
                    fun, occasionally topped off with a pizza party!
                  </p>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="content-card h-100" style={{
                      border: "1px solid #FFA500",
                      borderLeft: "5px solid #FFA500",
                      borderRadius: "8px",
                      padding: "20px",
                      background: "#fffaf0",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
                    }} data-aos="fade-right" data-aos-delay="100">
                      <h3 style={{ color: "#690000", borderBottom: "2px solid #FFA500", paddingBottom: "8px", marginBottom: "15px" }}>
                        <i className="fa-solid fa-star me-2"></i>
                        <strong>Engaging Activities</strong>
                      </h3>
                      <div style={{ margin: "15px 0" }}>
                        <div className="activity-item" style={{ marginBottom: "8px", display: "flex", alignItems: "flex-start" }}>
                          <i className="fa-solid fa-om" style={{ color: "#690000", marginRight: "10px", marginTop: "3px" }}></i>
                          <span>Learning Hindu mantras</span>
                        </div>
                        <div className="activity-item" style={{ marginBottom: "8px", display: "flex", alignItems: "flex-start" }}>
                          <i className="fa-solid fa-music" style={{ color: "#690000", marginRight: "10px", marginTop: "3px" }}></i>
                          <span>Learning traditional Indian dance</span>
                        </div>
                        <div className="activity-item" style={{ marginBottom: "8px", display: "flex", alignItems: "flex-start" }}>
                          <i className="fa-solid fa-hands-praying" style={{ color: "#690000", marginRight: "10px", marginTop: "3px" }}></i>
                          <span>Crafting Indian idols</span>
                        </div>
                        <div className="activity-item" style={{ marginBottom: "8px", display: "flex", alignItems: "flex-start" }}>
                          <i className="fa-solid fa-lightbulb" style={{ color: "#690000", marginRight: "10px", marginTop: "3px" }}></i>
                          <span>Performing on stage for Diwali</span>
                        </div>
                        <div className="activity-item" style={{ marginBottom: "8px", display: "flex", alignItems: "flex-start" }}>
                          <i className="fa-solid fa-puzzle-piece" style={{ color: "#690000", marginRight: "10px", marginTop: "3px" }}></i>
                          <span>Playing Indian games</span>
                        </div>
                        <div className="activity-item" style={{ marginBottom: "8px", display: "flex", alignItems: "flex-start" }}>
                          <i className="fa-solid fa-spa" style={{ color: "#690000", marginRight: "10px", marginTop: "3px" }}></i>
                          <span>Practicing yoga and meditation</span>
                        </div>
                        <div className="activity-item" style={{ marginBottom: "8px", display: "flex", alignItems: "flex-start" }}>
                          <i className="fa-solid fa-microphone" style={{ color: "#690000", marginRight: "10px", marginTop: "3px" }}></i>
                          <span>Developing public speaking skills</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <div className="content-card h-100" style={{
                      border: "1px solid #4CAF50",
                      borderLeft: "5px solid #4CAF50",
                      borderRadius: "8px",
                      padding: "20px",
                      background: "#f0fff4",
                      boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
                    }} data-aos="fade-left" data-aos-delay="200">
                      <h3 style={{ color: "#690000", borderBottom: "2px solid #4CAF50", paddingBottom: "8px", marginBottom: "15px" }}>
                        <i className="fa-solid fa-check-circle me-2"></i>
                        <strong>Why Join Us?</strong>
                      </h3>
                      <div style={{ margin: "15px 0" }}>
                        <div className="benefit-item" style={{ marginBottom: "10px" }}>
                          <div style={{ fontWeight: "600", color: "#444" }}>Make New Friends</div>
                          <p className="mb-2" style={{ fontSize: "14px", marginLeft: "5px" }}>Meet other kids who share your interests and make lifelong friends.</p>
                        </div>
                        <div className="benefit-item" style={{ marginBottom: "10px" }}>
                          <div style={{ fontWeight: "600", color: "#444" }}>Fun and Learning Combined</div>
                          <p className="mb-2" style={{ fontSize: "14px", marginLeft: "5px" }}>Enjoy a perfect blend of fun activities and educational experiences.</p>
                        </div>
                        <div className="benefit-item" style={{ marginBottom: "10px" }}>
                          <div style={{ fontWeight: "600", color: "#444" }}>Cultural Connection</div>
                          <p className="mb-2" style={{ fontSize: "14px", marginLeft: "5px" }}>Deepen your understanding of Indian culture and traditions in an engaging way.</p>
                        </div>
                        <div className="benefit-item" style={{ marginBottom: "10px" }}>
                          <div style={{ fontWeight: "600", color: "#444" }}>Confidence Building</div>
                          <p className="mb-1" style={{ fontSize: "14px", marginLeft: "5px" }}>Gain confidence through public speaking and performing in front of an audience.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="highlights-section mb-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="content-card" style={{
                    border: "1px solid #9C27B0",
                    borderRadius: "8px",
                    padding: "20px",
                    background: "#f9f0ff",
                    boxShadow: "0 3px 10px rgba(0,0,0,0.1)"
                  }}>
                    <h3 style={{ color: "#690000", borderBottom: "2px solid #9C27B0", paddingBottom: "8px", marginBottom: "15px" }}>
                      <i className="fa-solid fa-crown me-2"></i>
                      <strong>Special Highlights</strong>
                    </h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div style={{ margin: "10px 0" }}>
                          <div className="highlight-item" style={{ marginBottom: "12px", display: "flex", alignItems: "flex-start" }}>
                            <i className="fa-solid fa-angle-right" style={{ color: "#690000", marginRight: "10px", marginTop: "5px" }}></i>
                            <div>
                              <strong>Festival Celebrations:</strong> Participate in vibrant celebrations of festivals like Diwali, Holi, and more.
                            </div>
                          </div>
                          <div className="highlight-item" style={{ marginBottom: "12px", display: "flex", alignItems: "flex-start" }}>
                            <i className="fa-solid fa-angle-right" style={{ color: "#690000", marginRight: "10px", marginTop: "5px" }}></i>
                            <div>
                              <strong>Guest Speakers:</strong> Learn from inspiring guest speakers who share their knowledge and experiences.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div style={{ margin: "10px 0" }}>
                          <div className="highlight-item" style={{ marginBottom: "12px", display: "flex", alignItems: "flex-start" }}>
                            <i className="fa-solid fa-angle-right" style={{ color: "#690000", marginRight: "10px", marginTop: "5px" }}></i>
                            <div>
                              <strong>Field Trips:</strong> Enjoy occasional field trips to places of cultural significance.
                            </div>
                          </div>
                          <div className="highlight-item" style={{ marginBottom: "12px", display: "flex", alignItems: "flex-start" }}>
                            <i className="fa-solid fa-angle-right" style={{ color: "#690000", marginRight: "10px", marginTop: "5px" }}></i>
                            <div>
                              <strong>Certificates and Awards:</strong> Earn certificates and awards for participation and achievements.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="growth-section mb-4 p-4" style={{
                  background: "linear-gradient(to right, rgba(255,166,0,0.1), rgba(255,255,255,0.9))",
                  borderRadius: "8px",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
                  borderLeft: "4px solid #FFA500"
                }} data-aos="fade-up" data-aos-delay="150">
                  <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
                    Our program not only helps kids connect with their culture but also enhances their social skills 
                    and emotional well-being. Through activities like preparing and speaking on Hindu festival topics, 
                    children grow in confidence and self-expression.
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
                    <i className="fa-solid fa-chart-line me-2" style={{ color: "#690000" }}></i>
                    <strong>Our Growth Story:</strong> Starting with just 3-5 kids, our program has blossomed to over 30 children in the past two years. 
                    Join us as we continue to nurture and celebrate our rich heritage together!
                  </p>
                </div>

                <div className="join-us-section" data-aos="zoom-in" data-aos-delay="200">
                  <div className="content-card" style={{
                    border: "none",
                    borderRadius: "8px",
                    padding: "25px",
                    background: "linear-gradient(135deg, #FF8C00, #FF5722)",
                    color: "white",
                    boxShadow: "0 5px 15px rgba(255,87,34,0.3)"
                  }}>
                    <h3 style={{ textAlign: "center", color: "white", marginBottom: "20px", fontWeight: "700" }}>
                      <i className="fa-solid fa-calendar-check me-2"></i>
                      Join Us Every Fourth Sunday!
                    </h3>
                    <div className="row text-center justify-content-center">
                      <div className="col-md-4 mb-3">
                        <div style={{ 
                          background: "rgba(255,255,255,0.2)", 
                          padding: "15px", 
                          borderRadius: "8px",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center"
                        }}>
                          <i className="fa-solid fa-clock mb-2" style={{ fontSize: "24px" }}></i>
                          <strong className="d-block mb-1">When</strong>
                          <span>Every fourth Sunday</span>
                          <span>10 AM to 12 PM</span>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div style={{ 
                          background: "rgba(255,255,255,0.2)", 
                          padding: "15px", 
                          borderRadius: "8px",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center"
                        }}>
                          <i className="fa-solid fa-location-dot mb-2" style={{ fontSize: "24px" }}></i>
                          <strong className="d-block mb-1">Where</strong>
                          <span>SHS Temple</span>
                          <span>217 College Ave N Sarnia</span>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div style={{ 
                          background: "rgba(255,255,255,0.2)", 
                          padding: "15px", 
                          borderRadius: "8px",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center"
                        }}>
                          <i className="fa-solid fa-hand-sparkles mb-2" style={{ fontSize: "24px" }}></i>
                          <strong className="d-block mb-1">What to Bring</strong>
                          <span>Just your enthusiasm</span>
                          <span>and a smile!</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <p style={{ fontWeight: "500", fontSize: "16px" }}>
                        We can't wait to see you there! Let's learn, play, and grow together in a fun and supportive environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SanatanKids;