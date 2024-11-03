import React from 'react';
import "./style.css";

export default function SearchFilter() {
    
    return (
        <div>
        <div className="search-container">
          <div className="search-input">
            <input className="searchbar" type="text" placeholder="Search by title..."/>
          </div>
          <div className="search-button">
            <p>Search</p>
          </div>
        </div>
        <div className="filter-container">
          <div className="filter-item">
            <h5>Format:</h5>
            <form>
              <p><label><input type="checkbox" className="filter"/>Online</label></p>
              <p><label><input type="checkbox" className="filter"/>Physical</label></p>
            </form>
          </div>
          <div className="filter-item">
            <h5>Target Players:</h5>
            <form>
              <p><label><input type="checkbox" className="filter"/>Elementary</label></p>
              <p><label><input type="checkbox" className="filter"/>Middle School</label></p>
              <p><label><input type="checkbox" className="filter"/>High School</label></p>
              <p><label><input type="checkbox" className="filter"/>Tertiary Education</label></p>
            </form>
          </div>
          <div className="filter-item">
            <h5>Type:</h5>
            <form>
              <p><label><input type="checkbox" className="filter"/>Single-player</label></p>
              <p><label><input type="checkbox" className="filter"/>Multi-player</label></p>
              <p><label><input type="checkbox" className="filter"/>Online</label></p>
              <p><label><input type="checkbox" className="filter"/>Virtual</label></p>
            </form>
          </div>
          <div className="filter-item">
            <h5>Genre:</h5>
            <form>
              <p><label><input type="checkbox" className="filter"/>Action</label></p>
              <p><label><input type="checkbox" className="filter"/>Puzzle</label></p>
              <p><label><input type="checkbox" className="filter"/>Roleplaying</label></p>
              <p><label><input type="checkbox" className="filter"/>Simulation</label></p>
            </form>
          </div>
        </div>
      </div>
    );
};