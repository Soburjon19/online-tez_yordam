import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Img/Click-medic.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="colum">
        <form className="form" action="https://formspree.io/f/mnqyjdle" method="post">


          <label>ismingiz</label>
          <input type="text" name="Ismi" />
          <label>Telefon raqamingiz</label>
          <input type="number" name="telefon raqami" />


          <label>Shikoyatingiz</label>
          <textarea name="shikoyati" />
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="colum">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47932.71043352056!2d69.4321152!3d41.3350839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7b6319561b%3A0x9901dee733440a1!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQkNCa0KTQkA!5e0!3m2!1sru!2s!4v1674886820234!5m2!1sru!2s" 
        width="600" height="350" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      {/* <div className="footerBackground p-5">
        <div className="container">
          <div className="row">
            <div className="container col-md-4 col-lg-4 col-sm-12">
              <img width="190px" className="logo shadow" src={logo} alt="" />
            </div>
            <div className="col-md-4  col-lg-4 text-start col-sm-12 footerContact">
              <h5 className="footerAlert mt-3 mb-4 shadow">biz bilan Aloqa</h5>
              <small>online tashxis</small> <br />
              <small>Email: soburjon@icloud.com</small> <br />
              <small>Phone Soburjon: +998974545686 </small> <br />
              <small> Phone Davron: +998998290833 </small> <br />
              <small>Phone Islom: +998998005034</small> <br />
            </div>
            <div className="col-md-4 col-lg-4 text-start col-sm-12 footerContact">
              <h5 className="footerAlert mt-3 mb-4 shadow">kampaniya</h5>
              <Link to="/">Uy</Link> <br />
              <Link to="/about-us">Haqida </Link> <br />
              <Link to="/">Doctors</Link> <br />
              <Link to="/">Karyera</Link> <br />
              <Link to="/faq">FAQ</Link> <br />
              <Link to="/">Registratsiya</Link> <br />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Footer;
