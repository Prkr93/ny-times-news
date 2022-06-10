import {useState, useEffect} from 'react';
import {useParams, Redirect, Link} from 'react-router-dom';
import {getFeatured} from '../../apiCalls';
import HighlightedArticle from '../HighlightedArticle/HighlightedArticle';
import './Articles.css';

const Articles = () => {
  const {section, article} = useParams();
  const [articles, setArticles] = useState({});
  const [highlightedArticle, setHighlightedArticle] = useState({});


  useEffect(() => {
    getFeatured(section)
    .then(data => {
      setArticles(data)
      if (article) {
        let featured = data.results.find(a => {
          let url = a.short_url.split('/');
          url = url[url.length - 1];
          if (url === article) {
            return a;
          }
        })
        setHighlightedArticle(featured)
      }
    })
  }, []);

  let featuredArticles = <p>Loading</p>;
  // <div </div>
  // <div className="des_facet">{article.des_facet}</div>
  // <div className="geo_facet">{article.geo_facet}</div>
  // <div className="material_type_facet">{article.material_type_facet}</div>
  // <div className="org_facet">{article.org_facet}</div>
  // <div className="per_facet">{article.per_facet}</div>

  const makePopUp = (a) => {
    setHighlightedArticle(a)
  }




  if (articles.results) {
    featuredArticles = articles.results.map(a => {
      return (
        <article className='article'>
          {a.multimedia && <img className="multimedia" src={a.multimedia[0].url}/>}
          <p className="title">{a.title}</p>
          <p className="byline">{a.byline}</p>
          <p className="created_date">{a.created_date}</p>
          <button onClick={() => makePopUp(a)}>Read More</button>
        </article>
      )
    })
  }


  return (
    <section className='articles'>
      {!Object.keys(highlightedArticle).length && featuredArticles}
      {!!Object.keys(highlightedArticle).length && <HighlightedArticle highlightedArticle={highlightedArticle} setHighlightedArticle={setHighlightedArticle}/>}
    </section>
  )
}

export default Articles;
