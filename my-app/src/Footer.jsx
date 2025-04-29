import React from 'react';
import "./style.css";
import { getImageURL } from './utils/image-util';

export default function Footer() {

    return (
        <footer>
            <div className='footer-title'>
                <h4>Misinformation Games Directory</h4>
                <p>University of Washington GAMER Group</p>
            </div>
            <div className="footer-container">
                <div className="footer-team">
                    <h5>Team</h5>
                    <p>Johnny Cho - Project Manager</p>
                    <p>Renee Singh - Developer </p>
                    <p>Nila Ragu - UX Designer</p>
                    <p>Celina Qu - UX Designer</p>
                    <p>Sungha Kang - Researcher</p>
                </div>
                <div className="footer-contact">
                    <h5>Contact</h5>
                    <p>yhcho@uw.edu</p>
                    <p>renees7@uw.edu</p>
                    <p>nragu@uw.edu</p>
                </div>
            </div>
        </footer >
    );
};