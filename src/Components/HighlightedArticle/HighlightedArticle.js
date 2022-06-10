import './HighlightedArticle.css';

const HighlightedArticle = ({highlightedArticle, setHighlightedArticle}) => {


  return (
    <section className='highlighted'>
      <button onClick={() => setHighlightedArticle({})}>{`Back to ${highlightedArticle.section.charAt(0).toUpperCase() + highlightedArticle.section.slice(1)}`}</button>
      {highlightedArticle.multimedia && <img className="multimedia" src={highlightedArticle.multimedia[0].url}/>}

      <p className="title">{highlightedArticle.title}</p>
      <p className="abstract">{highlightedArticle.abstract}</p>
      <p className="byline">{highlightedArticle.byline}</p>
      <p className="kicker">{highlightedArticle.kicker}</p>
      <p className="section">{highlightedArticle.section}</p>
      <p className="subsection">{highlightedArticle.subsection}</p>
      <p className="item_type">{highlightedArticle.item_type}</p>
      <p className="created_date">Created: {highlightedArticle.created_date}</p>
      <p className="published_date">Published: {highlightedArticle.published_date}</p>
      <p className="updated_date">Updated: {highlightedArticle.updated_date}</p>
      <a href={highlightedArticle.url} label='See Full Article'>See Full Article</a>
    </section>
  )
}

export default HighlightedArticle;
