import React from "react";
import Main from "../connections/Main";
import Navbar from "../connections/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-page d-flex flex-column flex-md-row">
        <div className="home-left d-flex justify-content-center align-items-center">
          <div className="home-head text-center text-md-left">
            <h1 className="headline">It's a Big World out there,</h1>
            <h2 className="head-bold my-2">Go Explore.</h2>
          </div>
        </div>

        <div className="home-right d-flex align-items-center justify-content-center">
          <div className="home-img">
            <img
              src="https://i.pinimg.com/originals/88/ea/d9/88ead9d543a3f4565efa4fff857aa2d9.gif"
              alt="Exploration GIF"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
