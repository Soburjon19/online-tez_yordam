import React from "react";

const Product = () => {
  return (
    <div>
      {/* <div className="bannerBg">
        <div className="row">
          <div
            className="col-md-6 col-lg-6 col-12"
            style={{ textAlign: "left" }}
          >
            <p className="headingTag fw-bold contact-heading">
              Click Medic Products
            </p>
            <p
              className="text-white contact-heading"
              style={{ textAlign: "left", marginTop: "-10px" }}
            >
              Simple and easy insurance, telemedicine and health bundles for you
              and family. All available through affordable monthly payments via
              your mobile wallet.
            </p>
            <button className="contact-btn btn btn-outline-dark text-white mb-3">
              Learn More
              <i className="ms-2 fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-3 col-lg-4 col-sm-8">
            <img
              className="img-fluid"
              src="https://cheesyworks.com/assets/img/g3.gif"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="afterbanner mt-3">
        <div className="row text-start p-5">
          <div className="col-md-7 col-lg-7  col-sm-12 text-dark fs-6">
            <p className="afterbannePText productTextFirst ">
              Provides your family access to qualified doctors 24x7 on call. Get
              protection against income loss due to illness. Also save
              out-of-pocket expenses through coverage of medicines, specialist
              visits & medical tests. along with 24/7 tele doctor consultation
              and more. We have multiple packages for you based on your needs.
              Click on "Check our packages” to view details.
            </p>
            <p className="mt-3 afterbannePText productTextFirst">
              We are a leading global mobile-enabled health and insurance
              service provider. We offer affordable, all-in-one, family health
              services, covering insurance, health screening and tele-medicine.
              For the last 10 years, we have been serving millions of customers
              in Asia & Africa leveraging mobile technology to deliver easy and
              cost-effective digital health and insurance services through
              frictionless mobile payments.
            </p>
            <br />
            <br />
            <div className="text-end" style={{ marginTop: "-18px" }}>
              <button className="btn-outline-danger btn me-2 fw-bold text-dark">
                Click to see our packages
              </button>
            </div>
          </div>
          <div className="col-md-5  col-lg-5 col-sm-12 ">
            <h2 className="fw-bold ">Click Medic secure life Life</h2>
            <img
              src="https://milvikbd.com/_next/image?url=%2FHealth-Banner.png&w=256&q=75"
              alt=""
            />
          </div>
        </div>
      </div>{" "}
      <div className="afterbanner mt-3">
        <div className="row text-start p-5">
          <h2 className="fw-bold">Click Medic Health</h2>
          <div className="col-md-5  col-lg-5 col-sm-12 ">
            <img
              src="https://milvikbd.com/_next/image?url=%2FLife-Banner.png&w=256&q=75"
              alt=""
            />
          </div>
          <div className="col-md-7 col-lg-7  col-sm-12 text-dark fs-6">
            <p className=" productTextLast mb-3">
              Protect your loved ones from financial crisis in case of the death
              of the earning member of the family. Also, get compensated for
              partial or total physical disability. We have multiple packages
              for you based on your needs. Click on "Check our packages” to view
              details.
            </p>
            <p className="afterbannePText">
              We are a leading global mobile-enabled health and insurance
              service provider. We offer affordable, all-in-one, family health
              services, covering insurance, health screening and tele-medicine.
              For the last 10 years, we have been serving millions of customers
              in Asia & Africa leveraging mobile technology to deliver easy and
              cost-effective digital health and insurance services through
              frictionless mobile payments.
            </p>
            <br />
            <br />
            <div style={{ marginTop: "-18px" }}>
              <button className="btn-outline-warning btn me-2 fw-bold text-dark">
                Click here to our packages
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="productCM p-5">
        <div className="container my-5">
          <div className="row g-4">
            <h1>
              Benefits of{" "}
              <span className="fw-bold primarycolor">
                Click Medic Health & Life Users
              </span>
            </h1>
            <p className="text-muted  mb-5">
              The bundled Tele-medicine is what makes it different! Along with
              affordable microinsurance, Milvik has these value additions for
              its health & life users.
            </p>
            <div className="col-md-3">
              <div className="card h-100 alert alert-danger p-4">
                <img
                  className="mx-auto mb-3"
                  width="20%"
                  src="https://milvikbd.com/_next/image?url=%2FRed.svg&w=48&q=75"
                  alt=""
                />
                <div className="text-start card-title fs-5 fw-bold">
                  {" "}
                  24/7 Tele Doctor Services
                </div>
                <div className="card-body text-start">
                  Access to our experienced team of tele doctors to support you
                  any time day and night. Looking for experts? Get on-demand
                  specialists for you or your family when you need them.
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 alert alert-success p-4">
                <img
                  className="mx-auto mb-3"
                  width="20%"
                  src="https://milvikbd.com/_next/image?url=%2FGreenlike.svg&w=48&q=75"
                  alt=""
                />
                <div className="text-start card-title fs-5 text-dark fw-bold">
                  {" "}
                  Outpatient coverage
                </div>
                <div className="card-body text-start">
                  Including doctor fees, prescribed medicine and health check
                  ups.
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 alert alert-primary p-4">
                <img
                  className="mx-auto mb-3"
                  width="20%"
                  src="https://milvikbd.com/_next/image?url=%2FBluelike.svg&w=48&q=75"
                  alt=""
                />
                <div className="text-start card-title text-dark fw-bold fs-5">
                  {" "}
                  Health & Wellness Partners
                </div>
                <div className="card-body text-start">
                  Up to 30% discount from 150+ partner hospitals and diagnostic
                  centers.
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 alert alert-warning p-4">
                <img
                  className="mx-auto mb-3"
                  width="20%"
                  src="https://milvikbd.com/_next/image?url=%2Fyellowlike.svg&w=48&q=75"
                  alt=""
                />
                <div className="text-start card-title fs-5 text-dark fw-bold">
                  {" "}
                  Hospital Cashback
                </div>
                <div className="card-body text-start">
                  Our product provides cashback on hospital stays in any
                  hospital in Bangladesh with no minimum stay requirement. You
                  can apply for claims at your convenience. Click on detailed
                  packages to learn more.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 container">
        <div className="shadow-lg">
          <ViewDetails></ViewDetails>
        </div>
      </div> */}
    </div>
  );
};

export default Product;
