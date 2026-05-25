import React from 'react'
import "./main.css"
import welcome from "../Images/img.jpeg";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Welcome = () => {
  return (
    <>
      <Navbar />
      <div className='welcome-container'>
        <div className='first'>
          <div>
            <h1>Welcome to <span className='logo-name'>  News Aggregator</span> </h1>
          </div>
          <div className='lower-text'>
            <h1>Get latest and Breaking <span className='colored-text'>News !</span></h1>
            <h1> <span className='colored-text'>At </span>Single Click</h1>
          </div>
          <div className='para'>
            <p>Kartheek Nitin Pawar (21BRS1067) <br/>
Harsh Gupta (21BPS1584) <br/>
Rahul Gupta (21BCE3304) <br/>
Shylesh G (21BPS1502) <br/>
Thunga Pavanth (21BEC0806)</p>

          </div>
          <div className='btns'>
          </div>
        </div>
        <div className='second'>
          <img src={welcome} className="img" alt='back'></img>
        </div>
        <Footer/>

      </div>
    </>
  )
}

export default Welcome