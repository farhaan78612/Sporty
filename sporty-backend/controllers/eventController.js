// controllers/eventController.js
import { getLeagues, getRealTimeEvents } from "../services/sportsService.js";

export const fetchLeagues = async (req, res) => {
  const sport = req.query.sport;
  try {
    const leagues = await getLeagues(sport);
    res.json(leagues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchEvents = async (req, res) => {
  const leagueId = req.query.leagueId;
  try {
    const events = await getRealTimeEvents(leagueId);
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
