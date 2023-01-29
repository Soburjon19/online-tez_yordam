import React from "react";
import { Link } from "react-router-dom";
import "../HomePage/Home.css";

const FAQ = () => {
  return (
    <>
      <div className="bannerBg">
        <div className="row">
          <div
            className="col-md-6 col-lg-6 col-12 "
            style={{ textAlign: "left" }}
          >
            <p className="headingTag fw-bold contact-heading">
              frequently asked question
            </p>
            <p
              className="text-white contact-heading"
              style={{ textAlign: "left", marginTop: "-10px" }}
            >
              Click Medic provides simple, affordable health and insurance
              services
            </p>
            <Link to="/home_page">
              <button className="contact-btn btn btn-outline-dark text-white">
                Home
                <i className="ms-2 fas fa-long-arrow-alt-left"></i>
              </button>
            </Link>
          </div>
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-4 col-lg-4 col-sm-8">
            <img
              width="100%"
              className="img-fluid"
              src="https://i.pinimg.com/originals/ee/26/bd/ee26bdd08023258a495c2745f750be35.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <section className="accordions alert alert-primary">
        <div className="about-our-course" id="about-our-course">
          <div className="container">
            <h1 className="section-title fw-bold text-center mb-3 mt-5 text-dark">
              Some Question ??
            </h1>
            <div className="row question">
              <div className="col-md-12 col-sm-12 col-lg-12 ">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-1"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <span className="fw-bold">
                        Onlayn tashxis xizmati nima?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="one-1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-1"
                    >
                      <div className="accordion-body">
                        <strong>
                        OPTIMUS guruhi tomonidan online tashxisni to'liq xizmatni yaratldi
                           web ilova va web sog'liqni saqlash yechimlari
                            Inson salomatini saqlash va xavfsizlik ehtiyojlariga xizmat qiladi.
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-2"
                        aria-expanded="false"
                        aria-controls="collapse-2"
                      >
                        <span className="fw-bold">
                        online tashxis tomonidan qanday xizmatlar taklif etiladi?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="one-2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-2"
                    >
                      <div className="accordion-body">
                        <strong>
                          online tashxis tomonidan barcha kasalik alomatlarini kritsangiz unga yechim  topadi va shifokorlarga yo'naltiradi hamda vaqtni tejashga yordam beradi.
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-3"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        <span className="fw-bold">
                          online tashxis tomonda amalga oshrladigan xizmatlar ?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="one-3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-3"
                    >
                      <div className="accordion-body">
                        <strong>
                        bizda xizmatlar 24/7 shifokorlar o'z ichiga oladi
                           xizmatlar, online tarzda va doktor kp'rigidan ham o'tadi, oylik salomatligni  saqlash dasturi.
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-33"
                        aria-expanded="true"
                        aria-controls="collapse-33"
                      >
                        <span className="fw-bold">
                        Online tashxisdan qanday ro'yxatdan o'tish mumkin?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="one-33"
                      className="accordion-collapse collapse  "
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-33"
                    >
                      <div className="accordion-body">
                        <strong>
                         ro'yhadan o'gan holda va tugulgan yil oy kun tuliq tuldiriladi hamda kasalik haqida .
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-4"
                        aria-expanded="true"
                        aria-controls="collapse-4"
                      >
                        <span className="fw-bold">What is hospital Cash ?</span>
                      </button>
                    </h2>
                    <div
                      id="one-4"
                      className="accordion-collapse collapse  "
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-4"
                    >
                      <div className="accordion-body">
                        <strong>
                          Hospital cash is a daily fixed amount for each day of
                          in-patient hospitalization.
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-5"
                        aria-expanded="true"
                        aria-controls="collapse-5"
                      >
                        <span className="fw-bold">
                          What is an out-patient cash benefits ?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="one-5"
                      className="accordion-collapse collapse  "
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-5"
                    >
                      <div className="accordion-body">
                        <strong>
                          Milvik Health offers out-patient benefits for medicine
                          purchase, diagnostic tests, and doctor visits provided
                          that the medicine, test, or external doctor visit were
                          prescribed by Milvik tele-doctors.
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-6"
                        aria-expanded="true"
                        aria-controls="collapse-6"
                      >
                        <span className="fw-bold">
                          Who Can Register for Click medic ?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="one-6"
                      className="accordion-collapse collapse  "
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-6"
                    >
                      <div className="accordion-body">
                        <strong>
                          Any Bangladeshi individual, aged between 18-58 years
                          can register for Milvik Life. However, upon
                          registration, customers will be eligible for coverage
                          until the age of 60. For detailed terms and conditions
                          please visit -
                          https://milvikbd.com/general-terms-conditions/?lang=en
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-7"
                        aria-expanded="true"
                        aria-controls="collapse-7"
                      >
                        <span className="fw-bold">
                          What are the waiting periods of Click Medic ?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="one-7"
                      className="accordion-collapse collapse  "
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-7"
                    >
                      <div className="accordion-body">
                        <strong>
                          Accidental deaths are covered from the 1st day of the
                          month following registration. Natural death and death
                          due to pre-existing conditions cannot be claimed in
                          the first 3 months from the date of registration.
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-8"
                        aria-expanded="true"
                        aria-controls="collapse-8"
                      >
                        <span className="fw-bold">
                          From when i Can claim the benefits for Click Medic ?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="one-8"
                      className="accordion-collapse collapse  "
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-8"
                    >
                      <div className="accordion-body">
                        <strong>
                          Coverage starts from the 1st day of the month
                          following registration. For example, if you register
                          on 10th July, your coverage will start from 1st August
                          (for accidental reasons only). You can claim for
                          non-accidental reasons from one month later i.e. from
                          10th August in the above example. Please note, to be
                          eligible for claim, the incident must happen after the
                          coverage period starts. However, for pre-existing
                          diseases you cannot claim before 6 months from the
                          registration confirmation (the day of the first
                          payment) date and for maternity reasons you cannot
                          claim before 12 months from the registration
                          confirmation (the day of the first payment) date.
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-9"
                        aria-expanded="true"
                        aria-controls="collapse-9"
                      >
                        <span className="fw-bold">
                          What is the medical test cost?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="one-9"
                      className="accordion-collapse collapse  "
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-9"
                    >
                      <div className="accordion-body">
                        <strong>
                          Milvik has a network of 100+ partner hospitals across
                          the country where Milvik customers can get 10%-40%
                          discount on the selected services i.e. pathology,
                          radiology, hospitalization etc.
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-10"
                        aria-expanded="true"
                        aria-controls="collapse10"
                      >
                        <span className="fw-bold">
                          What is the tele doctor service and who can able to
                          for the service ?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="one-10"
                      className="accordion-collapse collapse  "
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-10"
                    >
                      <div className="accordion-body">
                        <strong>
                          Mivlik has in-house qualified doctors who are
                          available 24/7. Only the subscribers of Milvik Health
                          and their insured relatives and other immediate family
                          members (parents, spouse, children and parents-in-law)
                          can avail the tele-doctor service. 😉
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-11"
                        aria-expanded="true"
                        aria-controls="collapse-11"
                      >
                        <span className="fw-bold">
                          How do i talk with Click Medic online doctor ?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="one-11"
                      className="accordion-collapse collapse  "
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-11"
                    >
                      <div className="accordion-body">
                        <strong>
                          To talk to our tele-doctor please call our helpline
                          number 09610500599. Our customer service officer will
                          keep your request and call you back shortly and
                          provide you with the consultation. Thus, you don’t
                          have to bear the call charge during the consultation.
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-12"
                        aria-expanded="true"
                        aria-controls="collapse-12"
                      >
                        <span className="fw-bold">
                          What happens if a tele doctor cannot solved my
                          problem?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="one-12"
                      className="accordion-collapse collapse  "
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-12"
                    >
                      <div className="accordion-body">
                        <strong>
                          Tele-doctor service, by nature, can solve only primary
                          health issues. For critical problems you will be
                          referred to specialist doctors or hospitals. For
                          emergency cases, please visit the hospital instead of
                          taking consultation over the phone.
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-13"
                        aria-expanded="true"
                        aria-controls="collapse-13"
                      >
                        <span className="fw-bold">
                          What is the pyment methood for Click Medic ?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="one-13"
                      className="accordion-collapse collapse  "
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-13"
                    >
                      <div className="accordion-body">
                        <strong>
                          Currently we accept payment through bKash only. After
                          registration, a payment gateway link will be sent to
                          you via SMS, you have to click on the link and make
                          the payment.
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className=" accordion-button my-accordion"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#one-14"
                        aria-expanded="true"
                        aria-controls="collapse-14"
                      >
                        <span className="fw-bold">
                          What are the payments frequencies available ?
                        </span>
                      </button>
                    </h2>
                    <div
                      id="one-14"
                      className="accordion-collapse collapse  "
                      aria-labelledby="headingOne"
                      data-bs-parent="#one-14"
                    >
                      <div className="accordion-body">
                        <strong>
                          For Milvik Life we have daily and monthly payment
                          frequencies and for health we have monthly payment
                          frequency available.
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
