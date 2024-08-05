import React from 'react';
import './BaseballInfo.css';

const BaseballInfo = () => {
  return (
    <div className="BaseballInfo">
      <div className="content-Baseball">
        <h1 style={{textAlign:"center"}}>All About Baseball</h1>
      <section>
        <h2>Introduction</h2>
        <p>Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game is played on a diamond-shaped field with four bases arranged in a square.</p>
      </section>
      <section>
        <h2>History of Baseball</h2>
        <p>Baseball has roots in older bat-and-ball games played in England. It evolved into its modern form in North America, with the first official rules being written in 1845 by Alexander Cartwright, known as the "father of modern baseball."</p>
      </section>
      <section>
        <h2>Basic Rules</h2>
        <h3>Objective</h3>
        <p>The main objective is to score runs by hitting the ball and running to a series of four bases arranged in a diamond. The team with the most runs at the end of nine innings wins.</p>
        <h3>Players</h3>
        <p>Each team consists of nine players. The team in the field has a pitcher, catcher, four infielders, and three outfielders. The batting team takes turns hitting against the pitcher.</p>
        <h3>Innings</h3>
        <p>A game is divided into nine innings. Each inning consists of two halves: the top half where the visiting team bats and the bottom half where the home team bats.</p>
        <h3>Pitching and Hitting</h3>
        <p>The pitcher throws the ball towards the catcher, and the batter attempts to hit the ball into play. If the batter hits the ball, they try to reach base safely; if they miss or the ball is caught, they are out.</p>
      </section>
      <section>
        <h2>Equipment</h2>
        <p>Players use a variety of equipment, including bats, gloves, and protective gear. The ball used in baseball is small, hard, and white with red stitching.</p>
      </section>
      <section>
        <h2>Major Leagues</h2>
        <h3>Major League Baseball (MLB)</h3>
        <p>MLB is the highest level of professional baseball in the United States and Canada. It consists of 30 teams divided into the American League and the National League.</p>
        <h3>World Baseball Classic (WBC)</h3>
        <p>The WBC is an international baseball tournament sanctioned by the International Baseball Federation and MLB, featuring teams from around the world.</p>
      </section>
    </div>
    </div>
  );
}

export default BaseballInfo;
