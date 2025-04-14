import React, { useState } from 'react';
import "./style.css";
import { getImageURL } from './utils/image-util';

export default function Tags({ labels, tagData }) {

    return (
        <div className="tag-container">
            {labels.map((item) => (
                tagData[item].map((tag) => (
                    <div className='tag-item'>
                        <img src={getImageURL(`${tag}.png`)} alt="Icon" />
                        <p>{tag}</p>
                    </div >
                ))
            ))}
        </div>
    )

}
