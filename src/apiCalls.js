let apiKey = process.env.REACT_APP_NYTIMES_API_KEY;

const getFeatured = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)
          .then(res => res.json())
}

export {getFeatured};
