import React from 'react';
import "./style.css";

export default function Backdrop() {

  return (
    <div className="backdrop-container">
      <div className="backdrop-welcome">
        <h1>Welcome to the misinformation game directory!</h1>
      </div>
      <div className="backdrop-about">
        <p>This collection of games includes interactive, research-based games designed to educate players on
          misinformation and its impact on society. Through gamified, educational experiences, you will
          develop critical thinking skills, learn to identify misinformation, and explore media and information
          literacy strategies. Use this as a resource for education, or just to have fun while learning more about misinformation!</p>
      </div>
    </div>

  );

};  