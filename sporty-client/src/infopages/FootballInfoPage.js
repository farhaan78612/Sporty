// src/FootballInfoPage.js
import React from 'react';
import './FootballInfoPage.css';

const FootballInfoPage = () => {
  return (
    <div className="football-info-page">
    <div className='content-football'>
        <h1 style={{textAlign:"center"}}>Football: The Beautiful Game</h1>
      <section className="introduction">
        <h2>Introduction</h2>
        <p>Football, also known as soccer in some countries, is one of the most popular sports in the world. It is played by millions of people in over 200 countries, making it a truly global sport. The game is known for its simplicity and the passion it ignites in fans and players alike.</p>
      </section>

      <section className="history">
        <h2>History</h2>
        <p>The origins of football can be traced back to ancient civilizations, but the modern version of the game was codified in England in the 19th century. The Football Association, the first governing body of the sport, was formed in 1863, which led to the establishment of standardized rules.</p>
      </section>

      <section className="rules">
        <h2>Rules of the Game</h2>
        <ul>
          <li>A football match is played between two teams of 11 players each.</li>
          <li>The objective is to score more goals than the opposing team within the 90 minutes of play.</li>
          <li>The game is played on a rectangular field with a goal at each end.</li>
          <li>Players can use any part of their body except their hands and arms to move the ball.</li>
          <li>The goalkeeper is the only player allowed to use their hands, but only within the penalty area.</li>
        </ul>
      </section>

      <section className="tournaments">
        <h2>Famous Tournaments</h2>
        <h3>FIFA World Cup</h3>
        <p>The FIFA World Cup is the most prestigious tournament in international football. It is held every four years and features teams from around the world competing for the title of world champions.</p>

        <h3>UEFA Champions League</h3>
        <p>The UEFA Champions League is the premier club competition in Europe, featuring the best teams from the continent competing for the prestigious trophy.</p>
      </section>

      <section className="notable-players">
        <h2>Notable Players</h2>
        <ul>
          <li><strong>Pele:</strong> A Brazilian legend, considered one of the greatest players of all time.</li>
          <li><strong>Diego Maradona:</strong> An Argentine maestro known for his incredible skill and famous "Hand of God" goal.</li>
          <li><strong>Lionel Messi:</strong> An Argentine forward widely regarded as one of the best players in modern football.</li>
          <li><strong>Cristiano Ronaldo:</strong> A Portuguese forward known for his remarkable goal-scoring ability and athleticism.</li>
        </ul>
      </section>
      </div>
    </div>
  );
};

export default FootballInfoPage;
