// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import PhotoGallery from "./components/PhotoGallery/photogallery";


import Home from "./pages";
import AboutCityOfSarnia from "./pages/about-city-of-sarnia";
import WhatWeDo from "./pages/what-we-do";
import BoardOfDirectors from "./pages/board-of-directors";
import Education from "./pages/education";
import AartiAudios from "./pages/aarti-audios";
import SHSBhajanBook from "./pages/shs-bhajan-book"
import Schedule from "./pages/monthly-mandir-schedule";
import MandirRentals from "./pages/mandir-rentals";


import Events from "./pages/upcoming-events";
import Login from "./pages/login";
import Donation from "./pages/donation";
import Contact from "./pages/contact";
import Membership from "./pages/membership";
import SanatanKids from "./pages/sanatan-kids";

// Browser Router
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import EventState from "./context/event/EventState";
import ImageState from "./context/gallery/ImageState";
import MemberState from "./context/member/MemberState";
import ScheduleState from "./context/schedule/ScheduleState";


function App() {
  return (
    <>
      <EventState>
        <ImageState>
          <MemberState>
            <ScheduleState>
            <div className="mainDiv">
              <Header />
              <ToastContainer />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* <Route path="/events" element={<Events />} /> */}
                  <Route path="/sanatan-kids" element={<SanatanKids />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/membership" element={<Membership />} />
                  <Route path="/gallery" element={<PhotoGallery />} />


                  <Route path="/about-city-of-sarnia" element={<AboutCityOfSarnia />} />
                  <Route path="/what-we-do" element={<WhatWeDo />} />
                  <Route path="/board-of-directors-and-other-function" element={<BoardOfDirectors />}/>
                  <Route path="/education" element={<Education />} />
                  <Route path="/aarti-audios" element={<AartiAudios />} />
                  <Route path="/shs-bhajan-book" element={<SHSBhajanBook />} />
                  <Route path="/mandir-rentals" element={<MandirRentals />} />

                  <Route path="/login" element={<Login />} />


                  <Route path="/donation" element={<Donation />} />
                </Routes>
              </main>
              <Footer />
            </div>
            </ScheduleState>
          </MemberState>
        </ImageState>
      </EventState>
    </>
  );
}

export default App;
