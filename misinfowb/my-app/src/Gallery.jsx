import React from 'react';
import "./style.css";
import { data } from './data';

export default function Gallery() {

  return (

    <div class="gallery-container">
      {data.map((item) => {
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

  );
};