import React from 'react';
import "./style.css";

export default function Nav() {

    return (
        <header>
        <nav>
          <div className="nav-container">
            <div className="nav-item"> <i className="fa-solid fa-gamepad"></i>
            </div>
            <div className="nav-item nav-tabs">
              <a href="./index.html">Home</a>
            </div>
          </div>
        </nav>
      </header>
    );
};