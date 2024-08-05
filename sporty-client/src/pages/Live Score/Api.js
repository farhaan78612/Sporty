const API_KEY = "2777fafe-9dab-4525-91b3-6bfa57aa5f92";
// const API_KEY = "182f1faa-27e0-4ae8-b405-9dcddeb11a89";
export const getMatchesInfo = () => {
  const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log("ERROR: ", err));
};
