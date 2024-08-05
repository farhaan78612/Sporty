import React, { useEffect, useState } from "react";
import { getMatchesInfo } from "../Live Score/Api.js";
import { IoIosSearch } from "react-icons/io";
import ListCard from "../Live Score/ListCard.js";
import "./GetMatches.css";

const GetMatches = () => {
  const [matches, setMatches] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const type = matches.filter((match) => {
    return (
      match.matchType?.toLowerCase().includes(search.toLowerCase()) ||
      match.teams?.[0]?.toLowerCase().includes(search.toLowerCase()) ||
      match.teams?.[1]?.toLowerCase().includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    getMatchesInfo()
      .then((e) => {
        setMatches(e.data);
        // console.log(e);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div id={!loading ? "live-score" : "love-score-loading"}>
        {/* Live Score Navbar Start */}
        <div className="sporty__headerNavbar">
          <div className="sporty__headerSearchIcon">
            <IoIosSearch />
            <input
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        {/* End of Live Score Navbar */}
        <div className="sporty__matchStrip">
          <h2>Live Cricket Score</h2>
        </div>
        {!loading ? (
          <div className="listMaches">
            {type.length !== 0
              ? type.map((match) => (
                  <ListCard key={match.id} matchData={match} />
                ))
              : matches.map((match) => (
                  <ListCard key={match.id} matchData={match} />
                ))}
          </div>
        ) : (
          <>{<img src="./image/loading.gif" alt="Loading" />}</>
        )}
      </div>
    </>
  );
};

export default GetMatches;
