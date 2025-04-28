import React from 'react';
import { getImageURL } from './utils/image-util';
import "./style.css";

export default function Header() {

  return (
    <div>
      <header>
        <div className="overlay">
          <div className="logo-container">
            <img src={getImageURL("logo.png")}></img>
            <p>misinfo games.</p>
          </div>
          <div className="header-about">
            <h1>Welcome to the misinformation game directory!</h1>
            <p>This collection of games includes interactive, research-based games designed to educate players on
              misinformation and its impact on society. Through gamified, educational experiences, you will
              develop critical thinking skills, learn to identify misinformation, and explore media and information
              literacy strategies. Use this as a resource for education, or just to have fun while learning more about misinformation!</p>
          </div>
        </div>
      </header >
    </div >
  );
};