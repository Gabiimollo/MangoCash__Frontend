import React from 'react';
import './Loader.css'

const Loader = ({textCard}) => {
  return (
    <div className="card-loader">
      <div className="card-content">
        <h3>{textCard}</h3>
        <div className="wrapper">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="shadow" />
          <div className="shadow" />
          <div className="shadow" />
        </div>
      </div>
    </div>
  );
}                    
  
export default Loader;
