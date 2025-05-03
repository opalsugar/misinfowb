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
    Format: [],
    Age: [],
    Type: [],
    Genre: [],
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
    if (!filters[category].includes(tag)) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [category]: [...prevFilters[category], tag]
      }));
    }
  };

  const handleDelete = (category, tag) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category].filter(item => { return (item !== tag) })
    }))

  };

  return (
    <div className="main-section">
      <div className="search-and-filter">

        <div className="search-container">
          <img src={getImageURL("search.png")} />
          <input className="searchbar" onChange={handleSearchInput} value={search} type="text" placeholder="Search by title..." />
        </div>

        <div className="filter-container">
          <Dropdown filters={filterData} option={filters} filterActive={filterActive} handleDropdown={handleDropdown} setOption={updateFilters} />
          <div className="active-filters-container">
            <p>Click the tag to delete active filters:</p>
            {filters.Format.map((filter) => {
              return (
                <div className="active-filter-item" onClick={() => handleDelete("Format", filter)}>
                  <img src={getImageURL("delete.png")} alt="Icon" />
                  <p>{filter.toString()}</p>
                </div>
              )
            })}
            {filters.Age.map((filter) => {
              return (
                <div className="active-filter-item" onClick={() => handleDelete("Age", filter)}>
                  <img src={getImageURL("delete.png")} alt="Icon" />
                  <p>{filter.toString()}</p>
                </div>
              )
            })}
            {filters.Type.map((filter) => {
              return (
                <div className="active-filter-item" onClick={() => handleDelete("Type", filter)}>
                  <img src={getImageURL("delete.png")} alt="Icon" />
                  <p>{filter.toString()}</p>
                </div>
              )
            })}
            {filters.Genre.map((filter) => {
              return (
                <div className="active-filter-item" onClick={() => handleDelete("Genre", filter)}>
                  <img src={getImageURL("delete.png")} alt="Icon" />
                  <p>{filter.toString()}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
      {<div className="gallery-container">
        {gameData.filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        }).filter((item) => {
          return filters.Format.every((filter) => {
            return item.format.includes(filter);
          })
        }).filter((item) => {
          return filters.Age.every((filter) => {
            return item.age.includes(filter);
          })
        }).filter((item) => {
          return filters.Type.every((filter) => {
            return item.type.includes(filter);
          })
        }).filter((item) => {
          return filters.Genre.every((filter) => {
            return item.genre.includes(filter);
          })
        }).map((item) => {
          return (
            <div className="gallery-item">
              <div className="gallery-image">
                <img src={getImageURL(item.img)} alt={item.alt_text} />
              </div>
              <Link className="gallery-link test" to={`/misinfowb/${item.id}`}>
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