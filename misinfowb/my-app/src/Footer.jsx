import React from 'react';
import "./style.css";
import { getImageURL } from './utils/image-util';

export default function Footer() {

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-logo">
                        <img src={getImageURL("logo.png")}></img>
                        <p>misinfo games.</p>
                    </div>
                    <p>2025 UW Information School Gamer Group</p>
                </div>
                <div className="footer-right">
                    <div className="footer-team">
                        <h2>Team</h2>
                        <p>Renee Singh</p>
                        <p>Johnny Cho </p>
                        <p>Nila Ragu</p>
                        <p>Celina Qu</p>
                        <p>Sungha Kang</p>

                    </div>
                    <div className="footer-contact">
                        <h2>Contact</h2>
                        <p>renees7@uw.edu</p>
                        <p>yhcho@uw.edu</p>
                        <p>nragu@uw.edu</p>
                    </div>
                </div>
            </div>
        </footer >
    );
};