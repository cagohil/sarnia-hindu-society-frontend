// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import BoardOfDirectors from "./components/InfoComponents/boardOfDirectors";
import WhatWeDo from "./components/InfoComponents/whatWeDo";
import Contact from "./components/Contact/contactus";
import Aarti from "./components/aarti";
import Donation from "./components/InfoComponents/donation";
import Events from "./components/UpcomingEvents/mainevent";
import Schedule from "./components/Schedule/mainschedule";
import Education from "./components/InfoComponents/education";
import PhotoGallery from "./components/PhotoGallery/photogallery";
import Login from "./components/login";
import SarniaCity from "./components/InfoComponents/sarniacity";
import BhajanBook from "./components/bhajanbook"

// Browser Router
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Membership from "./components/Membership/membership";
import EventState from "./context/EventState";
import ImageState from "./context/ImageState";
import MemberState from "./context/memberState";
import ScheduleState from "./context/scheduleState";


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
                  <Route
                    path="/board-of-directors-and-other-function"
                    element={<BoardOfDirectors />}
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/what-we-do" element={<WhatWeDo />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/aarti" element={<Aarti />} />
                  <Route path="/bhajan" element={<BhajanBook />} />
                  <Route path="/donation" element={<Donation />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/membership" element={<Membership />} />
                  <Route path="/gallery" element={<PhotoGallery />} />
                  <Route path="/sarniacity" element={<SarniaCity />} />
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
