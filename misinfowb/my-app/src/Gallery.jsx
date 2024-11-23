import React, { useState } from 'react';
import "./style.css";
import { gameData } from './data';

export default function Gallery() {
  const [search, setSearch] = useState('');
  const [formatFilter, setFormatFilter] = useState([]);
  const [targetFilter, setTargetFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [genreFilter, setGenreFilter] = useState([]);

  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  };

  const handleFormat = (e) => {
    let isSelected = e.target.checked;
    let value = e.target.value;

    if (isSelected) {
      setFormatFilter([...formatFilter, value]);
    } else {
      setFormatFilter((formatFilter) => {
        return formatFilter.filter((tag) => {
          return tag !== e.target.value
        })
      })
    }
  };

  const handleTarget = (e) => {
    let isSelected = e.target.checked;
    let value = e.target.value;

    if (isSelected) {
      setTargetFilter([...targetFilter, value]);
    } else {
      setTargetFilter((targetFilter) => {
        return targetFilter.filter((tag) => {
          return tag !== e.target.value
        })
      })
    }
  };

  const handleType = (e) => {
    let isSelected = e.target.checked;
    let value = e.target.value;

    if (isSelected) {
      setTypeFilter([...typeFilter, value]);
    } else {
      setTypeFilter((typeFilter) => {
        return typeFilter.filter((tag) => {
          return tag !== e.target.value
        })
      })
    }
  };

  const handleGenre = (e) => {
    let isSelected = e.target.checked;
    let value = e.target.value;

    if (isSelected) {
      setGenreFilter([...genreFilter, value]);
    } else {
      setGenreFilter((genreFilter) => {
        return genreFilter.filter((tag) => {
          return tag !== e.target.value
        })
      })
    }
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
              <p><label><input type="checkbox" className="filter" value="Online" checked={formatFilter.includes("Online")} onChange={handleFormat} />Online</label></p>
              <p><label><input type="checkbox" className="filter" value="Physical" checked={formatFilter.includes("Physical")} onChange={handleFormat} />Physical</label></p>
            </form>
          </div>
          <div className="filter-item">
            <h5>Target Players:</h5>
            <form>
              <p><label><input type="checkbox" className="filter" value="Elementary" checked={targetFilter.includes("Elementary")} onChange={handleTarget} />Elementary</label></p>
              <p><label><input type="checkbox" className="filter" value="Middle School" checked={targetFilter.includes("Middle School")} onChange={handleTarget} />Middle School</label></p>
              <p><label><input type="checkbox" className="filter" value="High School" checked={targetFilter.includes("High School")} onChange={handleTarget} />High School</label></p>
              <p><label><input type="checkbox" className="filter" value="Everyone" checked={targetFilter.includes("Everyone")} onChange={handleTarget} />Everyone</label></p>
            </form>
          </div>
          <div className="filter-item">
            <h5>Type:</h5>
            <form>
              <p><label><input type="checkbox" className="filter" value="Single-player" checked={typeFilter.includes("Single-player")} onChange={handleType} />Single-player</label></p>
              <p><label><input type="checkbox" className="filter" value="Multi-player" checked={typeFilter.includes("Multi-player")} onChange={handleType} />Multi-player</label></p>
              <p><label><input type="checkbox" className="filter" value="Online" checked={typeFilter.includes("Online")} onChange={handleType} />Online</label></p>
              <p><label><input type="checkbox" className="filter" value="Virtual" checked={typeFilter.includes("Virtual")} onChange={handleType} />Virtual</label></p>
            </form>
          </div>
          <div className="filter-item">
            <h5>Genre:</h5>
            <form>
              <p><label><input type="checkbox" className="filter" value="Action" checked={genreFilter.includes("Action")} onChange={handleGenre} />Action</label></p>
              <p><label><input type="checkbox" className="filter" value="Puzzle" checked={genreFilter.includes("Puzzle")} onChange={handleGenre} />Puzzle</label></p>
              <p><label><input type="checkbox" className="filter" value="Roleplaying" checked={genreFilter.includes("Roleplaying")} onChange={handleGenre} />Roleplaying</label></p>
              <p><label><input type="checkbox" className="filter" value="Simulation" checked={genreFilter.includes("Simulation")} onChange={handleGenre} />Simulation</label></p>
            </form>
          </div>
        </div>
      </div>
      <div class="gallery-container">
        {gameData.filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        }).filter((item) => {
          return formatFilter.every((tag) => item.format.includes(tag));
        }).filter((item) => {
          return targetFilter.every((tag) => item['Target players'].includes(tag));
        }).filter((item) => {
          return typeFilter.every((tag) => item.type.includes(tag));
        }).filter((item) => {
          return genreFilter.every((tag) => item.genre.includes(tag));
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
              <p>Format: {item.format.toString()}</p>
              <p>Genre: {item.genre.toString()}</p>
              <p>Type: {item.type.toString()}</p>
              <p>Target players: {item['Target players'].toString()}</p>
            </div>
          )

        })}
      </div>
    </>
  );
};