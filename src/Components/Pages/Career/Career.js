import React from "react";

const Career = () => {
  return (
    <div>
      <div className="bannerBg">
        <div className="row">
          <div
            className="col-md-6 col-lg-6 col-12"
            style={{ textAlign: "left" }}
          >
            <p className="headingTag fw-bold contact-heading">
              Fly With Your Bright Career
            </p>
            <p
              className="text-white contact-heading"
              style={{ textAlign: "left", marginTop: "-10px" }}
            >
              Click Medic provides simple, affordable health and insurance
              services
            </p>
            <button className="contact-btn btn btn-outline-dark text-white mb-3">
              Learn More
              <i className="ms-2 fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-4 col-lg-4 col-sm-8">
            <img
              className="img-fluid"
              src="https://thumbs.gfycat.com/QuickWeightyDoe-max-1mb.gif"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="accordion-item container my-5">
        <h2 className="accordion-header" id="headingOne">
          <button
            className=" accordion-button my-accordion"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#one-8"
            aria-expanded="true"
            aria-controls="collapse-8"
          >
            <span className="fw-bold text-center fs-1">We are hiring ? </span>
          </button>
        </h2>
        <div
          id="one-8"
          className="accordion-collapse collapse  "
          aria-labelledby="headingOne"
          data-bs-parent="#one-8"
        >
          <div className="accordion-body text-start">
            <p className="mb-0 mt-5">
              Job Title
              <br />
              <strong>Tele-Sales Associate</strong>
              <p className="mb-0 mt-5">
                <small>Job Description</small>
              </p>{" "}
              <p className="mb-0">
                <strong>
                  Click Medic Bangladesh Ltd. (Globally known as BIMA) is
                  looking for some enthusiastic and result oriented full-time
                  "Telesales Associates" for its Dhaka office. They will be
                  responsible for selling our mobile-based insurance &
                  healthcare services to customers over phone. This is a
                  permanent role
                </strong>
              </p>
              <p className="mb-0 mt-5">Location </p>
              <strong>Work at Office (Mohakhali, Dhaka)</strong>
              <p>Number Of Openings</p> <strong>20</strong>
              <p className="mb-0 mt-5">Experience</p>
              <strong>Minimum 6 months working in Call center</strong>{" "}
              <p className="mb-0 mt-5">Education</p>
              <strong>Completion of Graduation or Diploma</strong>
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="accordion-item container my-5">
        <h2 className="accordion-header" id="headingOne">
          <button
            className=" accordion-button my-accordion"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#one-9"
            aria-expanded="true"
            aria-controls="collapse-9"
          >
            <span className="fw-bold text-center fs-1">We are hiring ? </span>
          </button>
        </h2>
        <div
          id="one-9"
          className="accordion-collapse collapse  "
          aria-labelledby="headingOne"
          data-bs-parent="#one-9"
        >
          <div className="accordion-body text-start">
            <p className="mb-0 mt-5">
              Job Title
              <br />
              <strong>Computer Operator</strong>
              <p className="mb-0 mt-5">
                <small>Job Description</small>
              </p>{" "}
              <p className="mb-0">
                <strong>
                  Click Medic Bangladesh Ltd. (Globally known as BIMA) is
                  looking for some enthusiastic and result oriented full-time
                  "computer Operator" for its Dhaka office. They will be
                  responsible for selling our mobile-based insurance &
                  healthcare services to customers over phone.They will be
                  responsible for selling our mobile-based insurance &some
                  enthusiastic and result oriented full-time "computer Operator"
                  for its Dhaka office. They will be responsible for selling our
                  mobile-based insurance & healthcare services to customers over
                  phone.They will be responsible for selling our mobile-based
                  insurance & healthcare services to customers over phone. This
                  is a permanent role
                </strong>
              </p>
              <p className="mb-0 mt-5">Location </p>
              <strong>Work at Office (Mohakhali, Dhaka)</strong>
              <p className="mb-0 mt-5">Number Of Openings</p>{" "}
              <strong>20</strong>
              <p className="mb-0 mt-5">Experience</p>
              <strong>Minimum 6 months working in Call center</strong>{" "}
              <p className="mb-0 mt-5">Education</p>
              <strong>Completion of Graduation or Diploma</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
