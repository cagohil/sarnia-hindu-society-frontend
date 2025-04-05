import React from "react";
import Membership from "../components/Membership/index";

const boardOfDirectors = () => {
  return (
    <div>
      <div style={{ fontFamily: "Georgia, Times New Roman, Times, seri" }}>
        <div>
          <div className="container pt-3 pb-3">
            <div className="">
              <div className="inpagecontent" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
                <h1 className="headclass">
                  Board of Directors and other Functions
                </h1>
                <div>
                  <p>
                    Various bylaws and articles are expressly embodied in a
                    written & registered Constitution that governs the official
                    functioning of SHS. Any amendments as deemed appropriate are
                    proposed, considered, debated and finalized by the Board,
                    then endorsed by the general membership with any changes,
                    approved by the statutory authorities, and finally become an
                    integral part of the SHS Constitution. In February of each
                    calendar year, the SHS members elect the Board of Directors
                    for running its affairs. Anyone aspiring to serve on the
                    Board can do so by having his or her name proposed before
                    the election.
                    <br />
                  </p>
                  <p>
                    The Board currently consists of nine elected directors and
                    the official Priest being the 10th Ex-Officio Director. Any
                    vacancies occurring due to resignations are duly filled in
                    by the Board until the AGM, then new Board Members are
                    elected at the AGM. Any member can serve as a Director on
                    the Board for a period of maximum six consecutive years,
                    after being duly re-elected. Out of the 9 Directors, the
                    Board elects the President, Vice President, Secretary and
                    Treasurer, with their respective functions specified in the
                    SHS Constitution. Other standby and contingency priests are
                    designated to conduct the regular as well as special Puja.
                    Havan & Sandhya are conducted by other designated
                    Coordinators.
                  </p>
                </div>
              </div>

              <Membership />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default boardOfDirectors;
