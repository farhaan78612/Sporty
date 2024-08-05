import React from 'react';
import './OlympicsInfo.css';

const OlympicsInfo = () => {
  return (
    <div className="OlympicsInfo">
      <div className='content-olympics'>
        <h1 style={{textAlign:"center"}}>All About the Olympics</h1>
      <section>
        <h2>Introduction</h2>
        <p>The Olympics are a leading international sporting event featuring summer and winter sports competitions, where thousands of athletes from around the world participate in a variety of competitions.</p>
      </section>
      <section>
        <h2>History of the Olympics</h2>
        <p>The modern Olympic Games were first held in 1896 in Athens, Greece. The Olympics were inspired by the ancient Olympic Games, which were held in Olympia, Greece, from the 8th century BC to the 4th century AD.</p>
      </section>
      <section>
        <h2>Olympic Symbols</h2>
        <h3>Olympic Rings</h3>
        <p>The Olympic rings represent the five continents of the world united by Olympism. The colors of the rings, along with the white background, were chosen because every nation had at least one of them on its national flag.</p>
        <h3>Olympic Flame</h3>
        <p>The Olympic flame symbolizes the continuity between the ancient and modern Games. The flame is lit at Olympia and travels to the host city through the Olympic torch relay.</p>
      </section>
      <section>
        <h2>Summer Olympics</h2>
        <p>The Summer Olympics feature a wide range of sports, including athletics, swimming, gymnastics, and team sports such as basketball and soccer. The event is held every four years, with athletes competing for gold, silver, and bronze medals.</p>
      </section>
      <section>
        <h2>Winter Olympics</h2>
        <p>The Winter Olympics focus on sports practiced on snow and ice, including skiing, ice skating, and ice hockey. Like the Summer Olympics, the Winter Games are held every four years.</p>
      </section>
      <section>
        <h2>Notable Olympic Moments</h2>
        <p>The Olympics have produced countless memorable moments, such as Jesse Owens winning four gold medals in 1936, the "Miracle on Ice" in 1980, and Usain Bolt's record-breaking sprints.</p>
      </section>
    </div>
    </div>
  );
}

export default OlympicsInfo;
