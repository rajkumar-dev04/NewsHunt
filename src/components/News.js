import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

  componentDidMount() {
  let url = "https://newsapi.org/v2/everything?q=india&apiKey=c051cc2707dc4b6485b99584bfdcdb37";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("API RESPONSE:", data);
console.log("ARTICLES:", data.articles);
    if (data.articles) {
      this.setState({
        articles: data.articles
      });
    }
  })
  .catch((error) => {
    console.error("Error fetching news:", error);
  });
}

  render() {
    console.log("STATE ARTICLES:", this.state.articles);
    let filteredArticles = (this.state.articles || []).filter((article) => {
  if (!this.props.searchText) {
    return true;
  }

  let search = this.props.searchText.toLowerCase();

  let title = article.title || "";
  let description = article.description || "";
  let content = article.content || "";

  return (
    title.toLowerCase().includes(search) ||
    description.toLowerCase().includes(search) ||
    content.toLowerCase().includes(search)
      );
    });

    return (
      <div className="container my-3">
        <h2>News Hub</h2>

        <div className="row">
          {filteredArticles.map((element) => {
            return (
              <div className="col-md-4" key={element.title}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  content={element.content}
                  newsUrl={element.url}
                  imageUrl={element.urlToImage}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default News