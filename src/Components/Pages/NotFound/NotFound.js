import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="text-center mt-5 mb-4 row row-cols-md-12 row-cols-lg-12 row-cols-sm-12">
        <div className="col">
          <img
            className="img-fluid"
            src="https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif"
            alt=""
          />
        </div>
      </div>
      <Link to="/home_page">
        <button className="btn btn-outline-secondary btn-lg shadow my-5">
          Back to home page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
