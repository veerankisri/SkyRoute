import React from "react";
import Search from "../Search/Search";
import video from '../../assets/video.mp4';
import aeroplane from '../../assets/takeoff.png';
// Assuming you have a CSS file to style the Home component

const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video' />
        </div>
        <img src={aeroplane} alt="Aeroplane" className='plane' />
      </div>
      <Search />
    </div>
  );
}

export default Home;
