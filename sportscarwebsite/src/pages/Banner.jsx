import React, { useState, useContext } from 'react';
import './banner.css';
import { AppContext } from '../App';
import SlideBtn from '../components/SlideBtn';

function Banner() {
  const { data: cars, setData: setCars } = useContext(AppContext);

  const handleSlideChange = ind => {
    if (ind >= 5){
      ind = -1;
    }

    setCars(
      cars.map((car, index) =>{
        car.active = false;
        if (index === ind + 1){
          car.active = true;
        }
        return car;
      })
    );
  };

  return (
    <div className='banner'>
      {cars && 
        cars.length > 0 && 
        cars.slice(0,6).map((car, index) => (
            <div key={car._id} className={`slide ${car.active ? 'active' : undefined}`}>
              <div className="container-fluid">
                <div className="row banner top">
                  <div className="col-lg-4 padding-0 banner-top-left">
                    <div className="banner-title">
                      <h1>Get Your Dream {car.make}</h1>
                      <span className='slide-number'>0{car._id}</span>
                    </div>
                    <SlideBtn index = {index} slideChange = {handleSlideChange}/>
                  </div>
                  <div className="col-lg-8 padding-0 banner-top-right">
                    <div className="banner-image">
                      <img 
                        src={car.bannerImg} 
                        alt="" 
                        className="img-fluid active" 
                      />
                      <video 
                        className='banner-video' 
                        src={car.video} 
                        autoPlay 
                        loop 
                        muted></video>
                    </div>
                  </div>
                </div>
                <div className="row banner bottom">
                  <div className="col-lg-4 padding-0"></div>
                  <div className="col-lg-5 padding-0"></div>
                  <div className="col-lg-3 padding-0"></div>
                </div>
              </div>
            </div>
        ))}
    </div>
  )
}

export default Banner
