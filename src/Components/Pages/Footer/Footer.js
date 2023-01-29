import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Img/Click-medic.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="colum">
        <form className="form" action="https://formspree.io/f/mnqyjdle" method="post">


          <label>Ism Familya </label>
          <input type="text" name="Ismi" />
          <label>Telefon raqamingiz</label>
          <input type="number" name="telefon raqami" />
          <label>Manzilingiz</label>
          <input name="https://yandex.uz/maps/org/18660414568/?ll=69.427294%2C41.327940&z=16.18" placeholder="Akfa University, ВУЗ, Ташкент, Мирзо-Улугбекский район, ул. Миллий Бог"/>

          <label>Shikoyatingiz</label>
          <textarea name="shikoyati" />
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="colum">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47932.71043352056!2d69.4321152!3d41.3350839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7b6319561b%3A0x9901dee733440a1!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQkNCa0KTQkA!5e0!3m2!1sru!2s!4v1674886820234!5m2!1sru!2s" 
        width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default Footer;
