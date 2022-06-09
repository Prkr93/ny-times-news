import {getFeatured} from './apiCalls';
import {useState, useEffect} from 'react';
import Articles from './Components/Articles/Articles';
import Menu from './Components/Menu/Menu';


const App = () => {
  const [articles, setArticles] = useState({});
  const [featuredSection, setFeaturedSection] = useState('home');

  useEffect(() => {
    getFeatured(featuredSection)
    .then(data => {
      setArticles(data)
    })
  }, [featuredSection])


  return (
    <div className="App">
      <Menu
        featuredSection={featuredSection}
        setFeaturedSection={setFeaturedSection}
      />
      <Articles
        articles={articles}
      />
    </div>
  )
};

export default App;
