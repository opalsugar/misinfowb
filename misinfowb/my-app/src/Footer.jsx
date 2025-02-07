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
                <div className="footer-team">
                    <p>Team</p>
                    <p>Renee Singh</p>
                    <p>Johnny Cho </p>
                    <p>Nila Ragu</p>
                    <p>Celina Qu</p>

                </div>
                <div className="footer-contact">
                    <p>Contact</p>
                    <p>yhcho@uw.edu</p>
                </div>
            </div>
        </footer >
    );
};