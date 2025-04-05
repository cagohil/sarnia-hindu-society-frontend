import React from "react";

const membershipinfo = () => {
  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, Times, seri" }}>
      <div>
        <div className=" pb-3 pl-3 pr-3" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
          <div className="">
            <div className="inpagecontent">
              {/* <h1 className="headclass">Membership</h1>
              <div className="mt-3 mb-2" style={{ color: "#690000" }}>
                    <strong>list of 2022-2023 Board Members:</strong>
              </div>
              <p>
                1. Nirav Popawala – President <br />
                2. Jaysh Jethwa – Vice President <br />
                3. Chinna Rama – Secretary <br />
                4. Parthiban Lakshmanan – Treasurer <br />
                5. Uttam Bansal - Priest <br />
                6. Shilpa Mehta <br />
                7. Jigar Shah <br />
                8. Bhavesh Mehta <br/>
                9. Poonam Vyas-Desai <br />
                <strong>Harshad Mehta – Representative Compliance Committee</strong> */}

                {/* <ol>
                  <li>Nirav Popawala – President</li>
                  <li>Jaysh Jethwa – Vice President</li>
                  <li>Chinna Rama – Secretary</li>
                  <li>Parthiban Lakshmanan – Treasurer</li>
                  <li>Uttam Bansal - Priest</li>
                  <li>Shilpa Mehta</li>
                  <li>Jigar Shah</li>
                  <li>Bhavesh Mehta</li>
                  <li>Poonam Vyas-Desai</li>
                </ol> */}
              {/* </p> */}
              <div>
                <p>
                  Yearly membership fee - $50/ Family <br />
                  Life time membership fee - $1000/ Family
                </p>
              </div>
                <div className="mt-2 mb-1" style={{ color: "#690000" }}>
                    Membership and Donations by e-transfer to <br />
                    <strong><a href="mailto:info@sarniahindusociety.com"><i className="fa-solid fa-envelope mr-1"></i>info@sarniahindusociety.com</a></strong>
                    <br />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default membershipinfo;
