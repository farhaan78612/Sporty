const NEWSAPI_KEY = "4aedc4080a3342f6a9ca5a0f504daeb3";

export const getNews = () => {
  const url = `https://newsapi.org/v2/top-headlines?apiKey=${NEWSAPI_KEY}&q=olympics`;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log("ERROR: ", err));
};
