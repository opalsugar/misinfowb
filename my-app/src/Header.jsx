import React from 'react';
import { getImageURL } from './utils/image-util';
import "./style.css";

export default function Header() {

  return (
    <div className="logo-container">
      <img src={getImageURL("logo.png")}></img>
      <p>misinfo games.</p>
    </div>

  );
};