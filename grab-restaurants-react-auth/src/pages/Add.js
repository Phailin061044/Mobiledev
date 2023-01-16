import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const [restaurant, setRestaurants] = useState({
    name: "",
    type: "",
    imageurl: "",
  });
  const navigate = useNavigate();
  const [error, seterror] = useState(false);

  const handleChange = (e) => {
    //e คือ event
    setRestaurants((prev) => ({ ...prev, [e.target.name]: e.target.value })); //แก้ไขข้อมูลเมื่อมีคนมาเพิ่ม
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/apis/restaurants", restaurant);
      navigate();
    } catch (error) {
      console.log(error);
      seterror(true);
    }
  };
  return (
    <div className="container">
      <h1>Grab Restaurant</h1>
      <div className="row form">
        <div className="col-6 card justify-content-center">
          <h5 className="card-header">Add new restaurant</h5>
          <div className="error">{error && "Something went wrong !!!!"}</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Restaurant Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Restaurant name"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Restaurant Type</label>
                <input
                  type="text"
                  className="form-control"
                  name="type"
                  placeholder="Restaurant type"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Restaurant Image</label>
                <input
                  type="text"
                  className="form-control"
                  name="imageurl"
                  placeholder="Restaurant Image"
                  onChange={handleChange}
                />
              </div>
              <Link to="" className="btn btn-success" onClick={handleClick}>
                Add
              </Link>{" "}
              <Link to="" className="btn btn-danger">
                cancle
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
