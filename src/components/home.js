import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactFoarm from "./Contact/contactFoarm";
import ImageSlider from "./imageslider";
import UpcomingEvents from "./UpcomingEvents/upcomingevents";


AOS.init();
const Home = () => {
  return (
    <div style={{ fontFamily:"Georgia, Times New Roman, Times, seri" }}>
      <div className="container-fluid home-container">
        <div style={{maxWidth:'1400px', margin:"auto"}}>
        <div className="row pt-3">
          <div className="col-lg-4 col-xl-4 col-md-12 imageBox" >
            <ImageSlider />
          </div>
          <div className="col-lg-8 col-xl-8 col-md-12 m-0 p-0 ">
          <div className="container">
            <div className="home-text">
              <div>
                <h1 className='headclass headclass2'>About Us</h1>
                <div>
                  <p className="text-home">
                  Sarnia’s Hindu Mandir (temple) is at 217 College Avenue North at George Street and was incorporated in 1987. It is the only Hindu Mandir in the Lambton County area. The other nearest one is in London-ON on the Canadian side, and none in Port Huron, Michigan, on the US side across the St. Clair River.
                  </p>
                  <p className="text-home">
                  Sarnia Hindu Society (SHS) is a registered charitable, religious, and cultural organization. Its Business Registration Number is 89237-3044-RR001. SHS organization is managed by elected Board Members & other volunteers, and donations by members & casual visitors. 
                  </p>
                  <p className="text-home">
                  Any donations in cash and in-kind are always welcome & highly appreciated. These are essential for the upkeep of the Mandir services and enhancing its regular operations. Membership subscriptions and donations are income tax deductible.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      <UpcomingEvents/>
      <ContactFoarm />
        </div>
      </div>
    </div>
  );
};
export default Home;
