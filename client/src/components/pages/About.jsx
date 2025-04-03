import React from "react";
import Navbar from "../connections/Navbar";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="about-header">
          <h1>About Us</h1>
          <p>
            Discover and explore the world effortlessly! Our platform helps you
            find the best nearby hotels, restaurants, and attractions using
            Google Maps. Capture and save your travel memories, and share your
            experiences with others.
          </p>
        </div>

        <div className="about-features">
          <div className="feature-card">
            <h2>🔍 Explore Nearby Places</h2>
            <p>
              Find the best hotels, restaurants, and attractions near you with
              real-time location-based recommendations.
            </p>
          </div>

          <div className="feature-card">
            <h2>📸 Save & Share Memories</h2>
            <p>
              Capture your favorite travel moments, save them for later, and
              share them with friends and the community.
            </p>
          </div>
        </div>

        <footer className="about-footer">
          <p>Start your journey with us today!</p>
        </footer>
      </div>
    </>
  );
};

export default About;
