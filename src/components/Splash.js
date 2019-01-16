import React from 'react';
import { NavLink } from 'react-router-dom';


const Splash = () => {
  return (

  <div className="splash-page">

    <NavLink to="/RoomIndex" exact className="">RoomIndex</NavLink>
  </div>
  );
};

export default Splash;
