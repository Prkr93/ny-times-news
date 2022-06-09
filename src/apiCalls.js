let apiKey = process.env.REACT_APP_NYTIMES_API_KEY;

const getFeatured = (str) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${str}.json?api-key=${apiKey}`)
          .then(res => res.json())
}

export {getFeatured};
