import React from "react";
import ScheduleTable from "./scheduletable";

const schedule = () => {
  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, Times, seri" }}>
      <div>
        <div className="container pt-3 pb-3">
          <div className="inpagecontent" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
            <h1 className="headclass">Monthly Mandir Schedule</h1>
            <p>
              <div className="mt-3 mb-1" style={{ color: "#690000" }}>
                <strong>Monthly Sunday Mandir Schedule:</strong>
              </div>
              SHS conducts its regular Mandir program on second Sunday of every
              month. Given below is the usual schedule of activities conducted.
              It is sometimes adjusted if required.
            </p>
            <ScheduleTable />
            <p>
              <div className="mt-3 mb-1" style={{ color: "#690000" }}>
                <strong >Notes:</strong>
              </div>
              <ol>
                <li className="pb-2">
                The programs may be started 30 minutes earlier at 10:00 am, on the day of Havan (instead of Sandhya) or to accommodate a long Puja or a special event, if so advised by the Priest in consultation with the Host of the Day or by the President with the consent of the Board.
                </li>
                <li>
                The above timings are as planned, and subject to minor adjustments to suit contingency requirements.
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default schedule;
