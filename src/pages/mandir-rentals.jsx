import React from "react";

const MandirRentals = () => {
  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, Times, serif" }}>
      <div className="container pt-3 pb-3">
        <div
          className="inpagecontent"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1 className="headclass">Mandir Rentals:</h1>
          <div>
            <p>
              The Sarnia Hindu Society (SHS) welcomes its members, as well as
              private individuals or organizations represented by an SHS member,
              to rent our serene temple premises for a day. Perfect for special
              events, ceremonies, or gatherings, the Mandir is available for a
              nominal pre-determined fee, in accordance with our established
              rules and guidelines. This fee offsets immediate operational
              expenses, with any surplus directed toward long-term maintenance
              and enhancements of the facility. To initiate a rental, please
              follow the steps below or contact us at{" "}
              <a href="mailto:pay@sarniahindusociety.com">
                pay@sarniahindusociety.com
              </a>{" "}
              for assistance.
            </p>

            <h4 className="mt-4 mb-2">Rental Process:</h4>
            <ol className="mandir-rental-steps">
              <li>
                <strong>Complete the Application:</strong> Download the latest{" "}
                <a
                  href="/assets/SHS-Mandir-Rental.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rental Agreement
                </a>
                , review, sign, and email a scanned copy to{" "}
                <a href="mailto:pay@sarniahindusociety.com">
                  pay@sarniahindusociety.com
                </a>
                .
              </li>
              <li>
                <strong>Application Review:</strong> SHS will evaluate your
                application. If approved, you’ll receive an email with an online
                payment link and additional instructions.
              </li>
              <li>
                <strong>Secure Your Reservation:</strong> Complete the payment
                online to confirm your booking.
              </li>
              <li>
                <strong>Key Collection:</strong> One day prior to your event,
                submit a refundable deposit of $100 (cash or cheque) to an SHS
                official to collect the temple key. Further instructions will be
                emailed upon payment confirmation.
              </li>
              <li>
                <strong>Post-Event:</strong> After your event, return the keys
                to an SHS official. Your deposit will be refunded (cash or
                cheque) provided the facility is returned in its original
                condition—undamaged, properly cleaned and after property
                inspection by SHS official.
              </li>
            </ol>

            <p className="mt-3">
              For any questions or to begin the reservation process, reach out
              to us at{" "}
              <a href="mailto:pay@sarniahindusociety.com">
                pay@sarniahindusociety.com
              </a>
              . We look forward to hosting your event at the Mandir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MandirRentals;
