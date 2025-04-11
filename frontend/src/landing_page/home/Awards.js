import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>Trust with confidence</h1>

          <p className="mb-5">
            That's why 1.5+ crore customers trust us with ₹4.5+ lakh crores of
            equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and options</p>
                </li>
                <li>
                  <p>Commodative derivatives</p>
                </li>
                <li>
                  <p>Currently derivatives</p>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct nutual funds</p>
                </li>
                <li>
                  <p>Bomds & Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          <img src="media\images\pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
