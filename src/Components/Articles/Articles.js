import {useState, useEffect} from 'react';


const Articles = ({articles}) => {

  let featuredArticles = <p>Loading</p>;
  // <div className="multimedia">{article.multimedia}</div>
  // <div className="des_facet">{article.des_facet}</div>
  // <div className="geo_facet">{article.geo_facet}</div>
  // <div className="material_type_facet">{article.material_type_facet}</div>
  // <div className="org_facet">{article.org_facet}</div>
  // <div className="per_facet">{article.per_facet}</div>

  if (articles.results) {
    featuredArticles = articles.results.map(article => {
      return (
        <article>
          <p className="abstract">{article.abstract}</p>
          <p className="byline">{article.byline}</p>
          <p className="created_date">{article.created_date}</p>
          <p className="item_type">{article.item_type}</p>
          <p className="kicker">{article.kicker}</p>
          <p className="published_date">{article.published_date}</p>
          <p className="section">{article.section}</p>
          <p className="short_url">{article.short_url}</p>
          <p className="subsection">{article.subsection}</p>
          <p className="title">{article.title}</p>
          <p className="updated_date">{article.updated_date}</p>
          <p className="uri">{article.uri}</p>
          <p className="url">{article.url}</p>
        </article>
      )
    })
  }



  return (
    <section>
      {featuredArticles}
    </section>
  )


}

export default Articles;
