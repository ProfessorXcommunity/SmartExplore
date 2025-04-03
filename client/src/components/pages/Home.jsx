import React from "react";
import Main from "../connections/Main";
import Navbar from "../connections/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-page d-flex">
        <div className="home-left col-6 d-flex justify-content-center align-items-center">
          <div className="home-head d-flex flex-column col-10">
            <h1 className="headline">
              It's a Big World out there,
              <span>
                <h2 className="head-bold my-2">Go Explore.</h2>
              </span>
            </h1>

            {/* <p className="headpara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              asperiores ut dignissimos? Fugit earum accusantium ratione qui
              inventore repellendus odio.
            </p> */}
          </div>
        </div>
        <div className="home-right col-6">
          <div className="home-img d-flex align-items-center justify-content-center ">
            <img
              src="https://i.pinimg.com/originals/88/ea/d9/88ead9d543a3f4565efa4fff857aa2d9.gif"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
