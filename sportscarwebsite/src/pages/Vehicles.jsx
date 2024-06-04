import React, { useContext } from 'react';
import { AppContext } from '../App';
import './vehicles.css';
import bgImg from '../images/Bugatti.jpg';
import PageTitle from '../components/PageTitle';

function Vehicles() {
  const { data: cars, setData: setCars } = useContext(AppContext);
  return (
    <div id='vehicles' className='page vehicles'>
      <img src={bgImg} alt="" className="img-fluid page-img" />
      <div className="container">
        <PageTitle 
          title='vehicles catalogue' 
          subtitle='Here are our new arrivals'
        />
        <div className="row">
          {cars && 
            cars.length > 0 && 
            cars.map(car => <h1 key={car._id}>{car.title}</h1>)}
        </div>
      </div>
    </div>
  )
}

export default Vehicles
