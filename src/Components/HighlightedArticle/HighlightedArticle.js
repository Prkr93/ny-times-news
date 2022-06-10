const HighlightedArticle = ({highlightedArticle}) => {
  return (
    <div>
      <p className="abstract">{highlightedArticle.abstract}</p>
      <p className="byline">{highlightedArticle.byline}</p>
      <p className="created_date">{highlightedArticle.created_date}</p>
      <p className="item_type">{highlightedArticle.item_type}</p>
      <p className="kicker">{highlightedArticle.kicker}</p>
      <p className="published_date">{highlightedArticle.published_date}</p>
      <p className="section">{highlightedArticle.section}</p>
      <p className="short_url">{highlightedArticle.short_url}</p>
      <p className="subsection">{highlightedArticle.subsection}</p>
      <p className="title">{highlightedArticle.title}</p>
      <p className="updated_date">{highlightedArticle.updated_date}</p>
      <p className="uri">{highlightedArticle.uri}</p>
      <p className="url">{highlightedArticle.url}</p>
    </div>
  )
}

export default HighlightedArticle;
