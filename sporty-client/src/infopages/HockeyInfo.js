import React from 'react';
import './HockeyInfo.css';

const HockeyInfo = () => {
  return (
    <div className="HockeyInfo">
    <div className='content-hockey'>
        <h1 style={{textAlign:"center"}}>All About Hockey</h1>
      <section>
        <h2>Introduction</h2>
        <p>Hockey is a fast-paced sport played on ice, where two teams of skaters use sticks to shoot a puck into their opponent's net to score points. It is a thrilling and dynamic game known for its physicality and speed.</p>
      </section>
      <section>
        <h2>History of Hockey</h2>
        <p>The origins of hockey can be traced back to the 19th century in Canada. The first recorded indoor hockey game was played in Montreal in 1875. Since then, hockey has evolved into a popular international sport with leagues and tournaments held around the world.</p>
      </section>
      <section>
        <h2>Basic Rules</h2>
        <h3>Objective</h3>
        <p>The primary objective in hockey is to score more goals than the opposing team. A goal is scored when the puck completely crosses the goal line between the two goalposts and below the crossbar.</p>
        <h3>Players</h3>
        <p>Each team typically has six players on the ice: three forwards, two defensemen, and one goaltender. Teams can make substitutions on the fly during play.</p>
        <h3>Periods</h3>
        <p>A standard hockey game is divided into three periods, each lasting 20 minutes of play. If the game is tied at the end of regulation time, it may go into overtime or a shootout, depending on the league or tournament rules.</p>
        <h3>Penalties</h3>
        <p>Players can be penalized for various infractions, such as tripping, high-sticking, or fighting. Penalties usually result in the offending player being sent to the penalty box for a specified amount of time, giving the opposing team a power play.</p>
      </section>
      <section>
        <h2>Equipment</h2>
        <p>Hockey players wear specialized equipment for protection and performance. This includes skates, helmets, gloves, shoulder pads, elbow pads, shin guards, and a stick. Goaltenders wear additional padding and a mask to protect against high-speed pucks.</p>
      </section>
      <section>
        <h2>Leagues and Tournaments</h2>
        <h3>National Hockey League (NHL)</h3>
        <p>The NHL is the premier professional hockey league in North America, consisting of 32 teams from the United States and Canada. It is widely regarded as the top league in the world for its high level of competition and talent.</p>
        <h3>International Ice Hockey Federation (IIHF)</h3>
        <p>The IIHF governs international ice hockey competitions, including the World Championships and the Winter Olympics. These events showcase top talent from around the globe and are highly anticipated by fans.</p>
        <h3>Other Leagues</h3>
        <p>In addition to the NHL and IIHF, there are numerous other professional and amateur leagues worldwide, such as the Kontinental Hockey League (KHL) in Russia, the Swedish Hockey League (SHL), and various minor leagues in North America and Europe.</p>
      </section>
    </div>
    </div>
  );
}

export default HockeyInfo;
