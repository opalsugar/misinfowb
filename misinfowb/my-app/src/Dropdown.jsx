import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import "./style.css";
import { filterData } from './filterData';
import { getImageURL } from './utils/image-util';

export default function Dropdown({ filters, filterActive, handleDropdown, option, setOption }) {

    return (
        <div className="filter-container">
            {
                filters.map((item) => (
                    <div className="filter-item">
                        <div className={`filter-button ${filterActive[item.title] ? "active" : ""}`} onClick={() => handleDropdown(item.title)}>
                            <img src={getImageURL(item['title-icon'])} alt="Game" />
                            <p className="filter-title">{item.title}</p>
                            <p className='dropdown-icon'><FaChevronDown style={{ 'color': 'white' }} /></p>
                        </div>
                        <div className={`filter-content ${filterActive[item.title] ? "" : "hidden"}`}>
                            {item.tags.map((tag) => (
                                <p onClick={() => setOption(item.title, tag)}>{tag}</p>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>

    );

}