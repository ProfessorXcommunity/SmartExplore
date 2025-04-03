import React from 'react'
import frontvid from '../../videos/video-1.mp4'
import { Link, NavLink } from 'react-router-dom'
import './Getstarted.css'
const Getstarted = () => {
    return (
<>
            <div className="get-container">
                <video src={frontvid} autoPlay loop muted />
                <div className="get-head d-flex  align-items-center justify-content-center flex-column">

                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
                <Link to="/home" classname="get-btns">

                <button className="get-btn">GET STARTED</button>
                </Link>
                </div>
            </div>
</>
    )
}

export default Getstarted
