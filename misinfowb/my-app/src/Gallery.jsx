import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import { gameData } from './data';
import { filterData } from './filterData';
import { getImageURL } from './utils/image-util';
import Dropdown from './Dropdown';
import Tags from './Tags';

export default function Gallery() {
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    Format: "",
    Age: "",
    Type: "",
    Genre: "",
  });

  const [filterActive, setFilterActive] = useState({
    Format: false,
    Age: false,
    Type: false,
    Genre: false
  });

  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  };

  const handleDropdown = (category) => {
    setFilterActive((prevActive) => ({
      ...prevActive,
      [category]: !prevActive[category]
    }));
  };

  const updateFilters = (category, tag) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: tag
    }));
  };

  return (
    <div className="main-section">
      <div className="search-and-filter">

        <div className="search-container">
          <img src={getImageURL("search.png")} />
          <input className="searchbar" onChange={handleSearchInput} value={search} type="text" placeholder="Search by title..." />
        </div>

        <Dropdown filters={filterData} option={filters} filterActive={filterActive} handleDropdown={handleDropdown} setOption={updateFilters} />

      </div>
      {<div className="gallery-container">
        {gameData.filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        }).filter((item) => {
          return filters.Format === "" || item.format.includes(filters.Format);
        }).filter((item) => {
          return filters.Age === "" || item.age.includes(filters.Age);
        }).filter((item) => {
          return filters.Type === "" || item.type.includes(filters.Type);
        }).filter((item) => {
          return filters.Genre === "" || item.genre.includes(filters.Age);
        }).map((item) => {
          return (
            <div className="gallery-item">
              <div className="gallery-image">
                <img src={getImageURL(item.img)} alt="Game" />
              </div>
              <Link className="gallery-link" to={`/misinfowb/${item.id}`}>
                <h1>{item.title}</h1>
                <Tags labels={['format', 'age', 'type', 'genre']} tagData={item} />
              </Link>
              <p>{item.desc}</p>
            </div>
          )

        })
        }
      </div>}
    </div>
  );
};

/*               <p>Format: {item.format.toString()}</p>
              <p>Genre: {item.genre.toString()}</p>
              <p>Type: {item.type.toString()}</p>
              <p>Target players: {item['Target players'].toString()}</p>
              */