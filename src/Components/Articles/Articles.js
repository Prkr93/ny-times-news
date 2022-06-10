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
        <article className='article' onClick={() => makePopUp(a)}>
          {a.multimedia && <img className="multimedia" src={a.multimedia[0].url}/>}
          <p className="abstract">{a.abstract}</p>
          <p className="byline">{a.byline}</p>
          <p className="created_date">{a.created_date}</p>
          <p className="item_type">{a.item_type}</p>
          <p className="kicker">{a.kicker}</p>
          <p className="published_date">{a.published_date}</p>
          <p className="section">{a.section}</p>
          <p className="short_url">{a.short_url}</p>
          <p className="subsection">{a.subsection}</p>
          <p className="title">{a.title}</p>
          <p className="updated_date">{a.updated_date}</p>
          <p className="uri">{a.uri}</p>
          <p className="url">{a.url}</p>
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
