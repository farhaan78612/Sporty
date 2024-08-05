// services/sportsService.js
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.THESPORTSDB_API_KEY;
const baseUrl = "https://www.thesportsdb.com/api/v1/json";

export const getLeagues = async (sport) => {
  try {
    const response = await axios.get(
      `${baseUrl}/${apiKey}/search_all_leagues.php`,
      {
        params: { s: sport },
      }
    );
    return response.data.countries;
  } catch (error) {
    console.error("Error fetching leagues:", error);
    throw error;
  }
};

export const getRealTimeEvents = async (leagueId) => {
  try {
    const response = await axios.get(
      `${baseUrl}/${apiKey}/eventsnextleague.php`,
      {
        params: { id: leagueId },
      }
    );
    return response.data.events;
  } catch (error) {
    console.error("Error fetching real-time events:", error);
    throw error;
  }
};
