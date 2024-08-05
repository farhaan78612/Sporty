import React from 'react';
import './CricketInfo.css';

const CricketInfo = () => {
    return (
        <div className="cricket-info">
            <div className='content'>
            <h1>About Cricket</h1>
            <section>
                <h2>Introduction</h2>
                <p>Cricket is a bat-and-ball game played between two teams of eleven players on a field at the center of which is a 22-yard pitch with a wicket at each end, each comprising two bails balanced on three stumps. It is one of the most popular sports in the world.</p>
            </section>

            <section>
                <h2>History of Cricket</h2>
                <p>Cricket originated in England and has a rich history dating back to the 16th century. It has since evolved and spread globally, becoming a major sport in countries like Australia, India, Pakistan, and the West Indies.</p>
            </section>

            <section>
                <h2>Rules of Cricket</h2>
                <article>
                    <h3>The Game Structure</h3>
                    <p>Cricket is played with a bat and ball and involves two competing sides (teams) of 11 players. The game is divided into innings where one team bats while the other team fields.</p>
                </article>

                <article>
                    <h3>Pitch and Equipment</h3>
                    <p>The pitch is a rectangular area in the middle of the field, 22 yards long. Each end of the pitch has three wooden stumps topped by two bails.</p>
                </article>

                <article>
                    <h3>Basic Rules</h3>
                    <ul>
                        <li>The batting team tries to score runs by hitting the ball bowled at the wicket with the bat.</li>
                        <li>The fielding team tries to prevent runs and dismiss the batsmen.</li>
                        <li>Each team has 11 players including batsmen, bowlers, and fielders.</li>
                        <li>The game can be played in various formats including Test matches, One Day Internationals (ODIs), and Twenty20 (T20).</li>
                    </ul>
                </article>

                <article>
                    <h3>Scoring Runs</h3>
                    <p>Runs are scored by the batsmen running to the opposite end of the pitch, or by hitting the ball to the boundary. Four runs are scored if the ball hits the boundary after touching the ground, and six runs if it clears the boundary without touching the ground.</p>
                </article>

                <article>
                    <h3>Ways to Get Out</h3>
                    <p>A batsman can be dismissed in several ways, including:</p>
                    <ul>
                        <li><strong>Bowled:</strong> The ball is bowled and hits the stumps.</li>
                        <li><strong>LBW (Leg Before Wicket):</strong> The ball hits the batsman's leg in line with the stumps.</li>
                        <li><strong>Run Out:</strong> A fielder hits the stumps with the ball while the batsmen are running between wickets.</li>
                        <li><strong>Catch:</strong> A fielder catches the ball on the full after the batsman hits it.</li>
                        <li><strong>Stumped:</strong> The wicketkeeper hits the stumps with the ball while the batsman is out of his crease and not attempting a run.</li>
                    </ul>
                </article>
            </section>

            <section>
                <h2>Formats of Cricket</h2>
                <article>
                    <h3>Test Cricket</h3>
                    <p>Test cricket is the longest form of the game, played over five days with each team having two innings. It is considered the ultimate test of a team's endurance and skill.</p>
                </article>

                <article>
                    <h3>One Day Internationals (ODIs)</h3>
                    <p>ODIs are a limited overs format, with each team facing a set number of overs, usually 50. The team with the most runs at the end of the game wins.</p>
                </article>

                <article>
                    <h3>Twenty20 (T20)</h3>
                    <p>T20 is the shortest format, with each team having a single innings of 20 overs. It is known for its fast pace and high entertainment value.</p>
                </article>
            </section>

            <section>
                <h2>Popular Cricket Tournaments</h2>
                <ul>
                    <li>ICC Cricket World Cup</li>
                    <li>ICC T20 World Cup</li>
                    <li>The Ashes</li>
                    <li>Indian Premier League (IPL)</li>
                    <li>Big Bash League (BBL)</li>
                </ul>
            </section>

            <section>
                <h2>Famous Cricketers</h2>
                <ul>
                    <li>Sir Don Bradman</li>
                    <li>Sachin Tendulkar</li>
                    <li>Viv Richards</li>
                    <li>Brian Lara</li>
                    <li>Ricky Ponting</li>
                </ul>
            </section>

            <section>
                <h2>Cricket Terminology</h2>
                <ul>
                    <li><strong>Wicket:</strong> The set of stumps and bails. Also refers to the pitch or a dismissal.</li>
                    <li><strong>Over:</strong> A set of six consecutive balls bowled by a single bowler.</li>
                    <li><strong>Innings:</strong> The period in which a team bats, ending when 10 batsmen are out or a set number of overs have been bowled.</li>
                    <li><strong>Duck:</strong> A batsman getting out without scoring any runs.</li>
                    <li><strong>Century:</strong> A batsman scoring 100 runs in a single innings.</li>
                </ul>
            </section>
            </div>
        </div>
    );
};

export default CricketInfo;
