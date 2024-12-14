import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

export default function Nav() {

  return (
    <header>
      <nav>
        <div className="nav-container">
          <div className="nav-item"> <i className="fa-solid fa-gamepad"></i>
          </div>
          <div className="nav-item nav-tabs">
            <Link to="/misinfowb/">
              Home
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};