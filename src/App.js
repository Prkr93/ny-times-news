import {getFeatured} from './apiCalls';
import {useState, useEffect} from 'react';
import Articles from './Components/Articles/Articles';


const App = () => {
  const [articles, setArticles] = useState({});

  useEffect(() => {
    getFeatured()
    .then(data => {
      setArticles(data)
    })
  }, [])




  return (
    <div className="App">
      <Articles
        articles={articles}
      />
    </div>
  )
};

export default App;
