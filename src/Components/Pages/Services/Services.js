import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import "../HomePage/Home.css";
import Service from "../Service/Service";

const Services = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("./fakedb.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="container mt-5 ">
      {/* <h2 className="fw-bold">
        Our <span className="text-primary">Specialist</span>
      </h2>
      <div
        className="bg-primary"
        style={{
          width: "180px",
          height: "5px",
          marginBottom: "-50px",
        }}
      ></div> */}

      
      {users.length === 0 ? (
        <Spinner variant="danger" animation="grow" />
      ) : (
        <Row xs={1} lg={3} md={2} className="g-4 h-100 mt-5">
          {users.map((user) => (
            <Service user={user} key={user.id}></Service>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Services;
