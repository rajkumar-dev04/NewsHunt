import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class StarBuzz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=bollywood%20celebrity%20india&apiKey=c051cc2707dc4b6485b99584bfdcdb37";

    let response = await fetch(url);
    let data = await response.json();

    console.log("StarBuzz API data:", data);

    this.setState({
      articles: data.articles || []
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>StarBuzz News</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
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

export default StarBuzz