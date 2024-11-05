import React, { useState } from 'react';
import "./style.css";
import { gameData } from './data';

export default function Gallery() {
  const [search, setSearch] = useState('');

  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  };

  return (
    <>
      <div>
        <div className="search-container">
          <div className="search-input">
            <input className="searchbar" onChange={handleSearchInput} value={search} type="text" placeholder="Search by title..." />
          </div>
        </div>
        <div className="filter-container">
          <div className="filter-item">
            <h5>Format:</h5>
            <form>
              <p><label><input type="checkbox" className="filter" />Online</label></p>
              <p><label><input type="checkbox" className="filter" />Physical</label></p>
            </form>
          </div>
          <div className="filter-item">
            <h5>Target Players:</h5>
            <form>
              <p><label><input type="checkbox" className="filter" />Elementary</label></p>
              <p><label><input type="checkbox" className="filter" />Middle School</label></p>
              <p><label><input type="checkbox" className="filter" />High School</label></p>
              <p><label><input type="checkbox" className="filter" />Tertiary Education</label></p>
            </form>
          </div>
          <div className="filter-item">
            <h5>Type:</h5>
            <form>
              <p><label><input type="checkbox" className="filter" />Single-player</label></p>
              <p><label><input type="checkbox" className="filter" />Multi-player</label></p>
              <p><label><input type="checkbox" className="filter" />Online</label></p>
              <p><label><input type="checkbox" className="filter" />Virtual</label></p>
            </form>
          </div>
          <div className="filter-item">
            <h5>Genre:</h5>
            <form>
              <p><label><input type="checkbox" className="filter" />Action</label></p>
              <p><label><input type="checkbox" className="filter" />Puzzle</label></p>
              <p><label><input type="checkbox" className="filter" />Roleplaying</label></p>
              <p><label><input type="checkbox" className="filter" />Simulation</label></p>
            </form>
          </div>
        </div>
      </div>
      <div class="gallery-container">
        {gameData.filter((data) => {
          return data.title.toLowerCase().includes(search.toLowerCase());
        }).map((item) => {
          return (
            <div className="gallery-item">
              <div className="gallery-image">
                <img src={item.img} alt="Game" />
              </div>
              <a href="./game1.html">
                <h1>{item.title}</h1>
              </a>
              <p>{item.desc}</p>
              <p>Format: {item.format}</p>
              <p>Genre: {item.genre}</p>
              <p>Type: {item.type}</p>
              <p>Target players: {item['Target players']}</p>
            </div>
          )

        })}
      </div>
    </>
  );
};