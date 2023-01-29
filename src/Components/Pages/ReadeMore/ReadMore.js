import React, { useEffect, useState } from "react";
import { ThemeProvider, ToastContainer } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ReadeMore.css";

const ReadMore = () => {
  const { details } = useParams();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("../fakedb.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const macthedItem = users?.find((user) => user?.name === details);
  /* const { name, title, education, experience, pic } = macthedItem; */


  // const notify = () =>{
  //   toast.success('Siz shamolagansiz!', {
  //     position: "top-center",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "colored",
  //     });
  // }


  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-10 my-5 ">
          <div class="row row-cols-1 row-cols-md-1 g-4">
            {/* <div class="col">
              <div class="card">
                <img
                  src={macthedItem?.pic}
                  class="img-fluid card-img-top"
                  alt="..."
                />
                <div class="card-body text-start">
                  <h5 class="card-title fw-bold text-dark">
                    {macthedItem?.name}
                  </h5>
                  <p class="card-text">{macthedItem?.institute}</p>
                  <p class="card-text">{macthedItem?.education}</p>
                  <p class="card-text">{macthedItem?.about}</p>
                </div>
              </div>
            </div>{" "} */}
            <div class="col alert alert-primary">
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    Ism
                  </label>
                  <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Familya
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                  />
                </div>
                {/* <div class="col-12 text-start">
                  <label for="inputEmail" class="form-label">
                    Email
                  </label>
                  <input type="text" class="form-control" id="inputAddress" />
                </div>
                <div class="col-12 text-start">
                  <label for="inputPassword" class="form-label">
                    Paro'l
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                  />
                </div> */}
                <div className="text-start mb-0 ">
                  <label for="inputPhoneNumber">telefon raqamingiz</label>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text px-5" id="basic-addon2">
                    +998
                  </span>
                  <input
                    type="text"
                    class="py-2 form-control"
                    placeholder="123456789"
                    aria-label="Recipient's username"
                  />
                </div>
                <div class="col-md-6 text-start">
                  <label for="inpuDistricts" class="form-label">
                    Viloyat
                  </label>
                  <select id="inputState" class="form-select">
                    <option selected>tanlang...</option>
                    <option>Andijon viloyati</option>
                    <option>Buxoro viloyati</option>
                    <option>Farg'ona viloyati</option>
                    <option>Jizzax viloyati</option>
                    <option>Xorazm viloyati</option>
                    <option>Namangan viloyati</option>
                    <option>Navoiy viloyati</option>
                    <option>Qoraqalpog'iston viloyati</option>
                    <option>Samarqand viloyati</option>
                    <option>Qashqadaryo viloyati</option>
                    <option>Sirdaryo viloyati</option>
                    <option>Surxondaryo viloyati</option>
                    <option>Toshkent viloyati</option>
                  </select>
                </div>
                <div class="col-md-6 text-start">
                  <label for="inputCity" class="form-label">
                    Shaxar
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                {/* <div class="col-md-6 text-start">
                  <label for="inputThana" class="form-label">
                    Thana
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4 text-start">
                  <label for="inputUninon" class="form-label">
                    Uninon
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-2 text-start">
                  <label for="inputZip" class="form-label">
                    Zip
                  </label>
                  <input type="text" class="form-control" id="inputZip" />
                </div> */}
                <div class="col-md-12 text-start">
                  <label for="birthday" class="form-label">
                  Tug'ilgan sana
                  </label>
                  <input type="date" class="form-control" id="inputCity" />
                </div>
                {/* <div class="col-md-6 text-start">
                  <label for="inputThana" class="form-label">
                    Fee
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    placeholder={macthedItem?.fee}
                    id="inputCity"
                  />
                </div>
                <div class="col-md-6 text-start">
                  <label for="inputCity" class="form-label">
                    Shift
                  </label>
                  <input
                    disabled
                    type="text"
                    class="form-control"
                    id="inputCity"
                    placeholder={macthedItem?.schedule}
                  />
                </div> */}
                <div class="col-md-3">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                      <label for="vehicle1"> Bosh og'rig'i</label>
                </div>
                <div class="col-md-3">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                      <label for="vehicle1"> Isitma</label>
                </div>
                <div class="col-md-3">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                      <label for="vehicle1"> Holsizlik</label>
                </div>
                <div class="col-md-3">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                      <label for="vehicle1"> Oshqazon og'rig'i</label>
                </div>
                <div class="col-md-3">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                      <label for="vehicle1"> Ko'ngil aynishi</label>
                </div>
                <div class="col-md-3">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                      <label for="vehicle1"> Ich ketishi</label>
                </div>
                <div class="col-md-3">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                      <label for="vehicle1"> Bosh aylanishi</label>
                </div>
                <div class="col-md-3">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                      <label for="vehicle1"> Bel og'rig'i</label>
                </div>
                <div class="col-md-3">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                      <label for="vehicle1"> Tomoq og'rigi</label>
                </div>
                <div class="col-md-3">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                      <label for="vehicle1"> Terida toshmalar</label>
                </div>
                <div class="col-md-3">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                      <label for="vehicle1">Kichik tomirlarda yorilish</label>
                </div>
                <div class="col-md-3">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                      <label for="vehicle1"> Yo'tal</label>
                </div>

                <div class="col-12">

                <button type="submit" class="btn btn-primary">
                    
                    Tashxisingizni biling
                    
                  </button>

                  {/* <ThemeProvider theme={theme}>
                    <GlobalStyle/>
                    <button type="submit" class="btn btn-primary" onClick={notify}>
                    Tashxisingizni biling
                  </button>
                  </ThemeProvider>
                  <ToastContainer/> */}
                  
                  
                  {/* <script>
                    function myalert() {
                      alert("Siz shamolagansiz")
                    }
                  </script> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5 rows-col-1">
        <Link to="/home_page">
          <button className="btn btn-outline-secondary btn-lg shadow px-5">
            <i className="ms-2 fas fa-long-arrow-alt-left"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReadMore;
