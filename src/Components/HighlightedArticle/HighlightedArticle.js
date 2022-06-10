import './HighlightedArticle.css';

const HighlightedArticle = ({highlightedArticle, setHighlightedArticle}) => {


  return (
    <section className='highlighted'>
      <button className='button' onClick={() => setHighlightedArticle({})}>{`Back to ${highlightedArticle.section.charAt(0).toUpperCase() + highlightedArticle.section.slice(1)}`}</button>
      <article>
        <div className='media'>
          {highlightedArticle.multimedia && <img className="multimedia" src={highlightedArticle.multimedia[0].url}/>}
        </div>
        <div className='content'>
          <h2 className="title">{highlightedArticle.title}</h2>
          <p className="abstract">{highlightedArticle.abstract}</p>
          <p className="byline">{highlightedArticle.byline}</p>
          <p className="kicker">{highlightedArticle.kicker}</p>
          <p className="section"><h4 className='label'>Section:</h4> {highlightedArticle.section}</p>
          <p className="subsection"><h4 className='label'>SubSection:</h4> {highlightedArticle.subsection}</p>
          <p className="item_type">{highlightedArticle.item_type}</p>
          <p className="created_date"><h4 className='label'>Created:</h4> {highlightedArticle.created_date}</p>
          <p className="published_date"><h4 className='label'>Published:</h4> {highlightedArticle.published_date}</p>
          <p className="updated_date"><h4 className='label'>Updated:</h4> {highlightedArticle.updated_date}</p>
        </div>
      </article>
      <button className='button'>
        <a href={highlightedArticle.url} label='See Full Article'>See Full Article</a>
      </button>
    </section>
  )
}

export default HighlightedArticle;
