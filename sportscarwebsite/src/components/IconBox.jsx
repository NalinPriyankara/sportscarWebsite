import React from 'react';
import './iconBox.css';

function IconBox({ icon, title, description }) {
  return (
    <div className="icon-box">
        <div className="icon">
            <i className={icon}></i>
        </div>
        <h4 className="title">
            <a href="#">{title}</a>
        </h4>
        <p className="description">
            {description ? description : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat!`}
        </p>
    </div>
  )
}

export default IconBox
