import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class Business extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=india business&apiKey=c051cc2707dc4b6485b99584bfdcdb37";

    let response = await fetch(url);
    let data = await response.json();

    this.setState({
      articles: data.articles || []
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Business News</h2>

        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <Newsitem
                title={element.title}
                description={element.description}
                newsUrl={element.url}
                imageUrl={element.urlToImage}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Business;
