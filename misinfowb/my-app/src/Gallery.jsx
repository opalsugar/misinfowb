import React from 'react';
import "./style.css";

export default function Gallery() {

    return (
        <div class="gallery-container">
        <div class="gallery-item">
          <div class="gallery-image">
            <img src="./img/euphorigen.jpg" alt="Game"/>
          </div>
          <a href="./game1.html">
            <h1>The Euphorigen Investigation</h1>
          </a>
          <p>A digital media literacy game where players work together to investigate misleading information and
            uncover
            the truth behind Euphorigen, a fictional substance. Players collaborate as journalists to verify facts
            and
            identify misinformation.</p>
        </div>
        <div class="gallery-item">
          <div class="gallery-image">
            <img src="./img/galaxy.png" alt="Game"/>
          </div>
          <h1>The Galaxy Escape Room: Mission</h1>
          <p>Galaxy Escape Room is a space-themed puzzle adventure where players must solve a series of challenging
            puzzles and decipher clues to escape from a futuristic spaceship. Set against the backdrop of outer
            space,
            players work against the clock to repair systems, unlock hidden mysteries, and navigate through various
            rooms to complete their mission before time runs out.</p>
        </div>
        <div class="gallery-item">
          <div class="gallery-image">
            <img src="./img/libertas.png" alt="Game"/>
          </div>
          <h1>Libertas Veritas: Freedom and Truth</h1>
          <p>Libertas Veritas: Freedom and Truth is a thought-provoking game where players navigate complex
            political
            and social environments to uncover hidden truths while preserving freedom of speech. Through
            decision-making
            and investigative tasks, players explore themes of liberty, justice, and misinformation in a dynamic,
            story-driven setting.</p>
        </div>
        <div class="gallery-item">
          <div class="gallery-image">
            <img src="./img/badnews.png" alt="Game"/>
          </div>
          <h1>Bad News</h1>
          <p>Bad News is a misinformation game designed to teach players about the tactics used to spread fake news,
            including emotional manipulation and disinformation strategies. Players take on the role of a fake news
            creator and learn how to spot fake news by creating it.</p>
        </div>
        <div class="gallery-item">
          <div class="gallery-image">
            <img src="./img/harmonysq.png" alt="Game"/>
          </div>
          <h1>Breaking Harmony Square</h1>
          <p>Breaking Harmony square is a misinformation game which teaches players about the creation and spread of
            misinformation online. The game has players post misinformation to get likes, teaching them how
            misinformation is made and spread, and what some of its goals are.</p>
        </div>
        <div class="gallery-item">
          <div class="gallery-image">
            <img src="./img/fakey.pn" alt="Game"/>
          </div>
          <h1>Fakey</h1>
          <p>Fakey is a media literacy game where players interact with a simulated social media feed, deciding
            whether
            to like, share, or fact-check articles and posts. The goal is to train players to recognize
            misinformation,
            fake news, and clickbait by challenging them to assess the credibility of content. Through these
            choices,
            players learn to improve their critical thinking skills and become more discerning consumers of
            information
            online, all while navigating the fast-paced environment of a typical news feed.</p>
        </div>
      </div>
    );
};