import React, { useState } from "react";
import "./ListCard.css";
import toast from "react-hot-toast";
import axios from "axios";

const API_KEY = "2777fafe-9dab-4525-91b3-6bfa57aa5f92";
// const API_KEY = "182f1faa-27e0-4ae8-b405-9dcddeb11a89";

const ListCard = ({ matchData }) => {
  const [open, setOpen] = useState(false);
  const [currentMatchData, setCurrentMatchData] = useState(matchData);

  const handleClick = async (id) => {
    if (currentMatchData.matchStarted) {
      if (!open) {
        setOpen(true);
      } else {
        await refreshScore(id);
      }
    } else {
      toast.error("Match not Started Yet");
    }
  };

  const refreshScore = async (id) => {
    try {
      const response = await axios.get(
        `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`
      );
      const updatedMatchData = response.data.matches.find(
        (match) => match.id === id
      );
      setCurrentMatchData(updatedMatchData);
    } catch (error) {
      // toast.error("Error refreshing score");
      // console.error("Error fetching score:", error);
    }
    setOpen(false); // Reset to show "See Score" button again
  };

  return (
    <>
      <div className="listMatches card" id="card-background">
        <div className="listMatchesCards">
          <div style={{ height: "auto", width: "auto" }}>
            <div className="listMatchesCards__top">
              <h4>
                {!currentMatchData.matchType
                  ? "N/A"
                  : currentMatchData.matchType}
              </h4>
              <h4>
                {currentMatchData.matchStarted === true
                  ? "Match Started"
                  : "Match Not Started Yet"}
              </h4>
            </div>
            <div className="listMatchesCards__date">
              <h5>{new Date(currentMatchData.dateTimeGMT).toLocaleString()}</h5>
            </div>
            <div className="listMatchesCards__info">
              <h3>{currentMatchData.teams[0]}</h3>
              <img src="./Versus.png" alt="" />
              <h3>{currentMatchData.teams[1]}</h3>
            </div>
            <div className="listMatchesCards__Scores">
              <h4>
                Venue:{" "}
                <span
                  style={{ color: "#555", fontWeight: 600, fontSize: "large" }}
                >
                  {currentMatchData.venue}
                </span>
              </h4>
            </div>
            {open && (
              <div className="listMatchesCards__Scores">
                <div className="inngs">
                  <span>Innings 1</span>
                  <span>Innings 2</span>
                </div>
                <div id="score">
                  {currentMatchData.score.map((score, index) => (
                    <div key={index} style={{}}>
                      <div>
                        <h4>{score.inning.replace(" Inning 1", "")}</h4>
                      </div>
                      <div>
                        <h4>
                          {score.r}/{score.w}
                        </h4>
                        <h4>{`over${score.o > 1 ? "s" : ""}: ${score.o}`}</h4>
                      </div>
                    </div>
                  ))}
                </div>
                <h4>
                  Status:{" "}
                  <span
                    style={{
                      color: "#555",
                      fontWeight: 600,
                      fontSize: "large",
                    }}
                  >
                    {currentMatchData.status}
                  </span>
                </h4>
              </div>
            )}
          </div>

          <div className="listMatchesCards__button">
            <button onClick={() => handleClick(currentMatchData.id)}>
              {!open ? "See Score" : "Refresh"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCard;
