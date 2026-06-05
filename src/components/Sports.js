import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class Sports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
        {
          title: "India Wins Thrilling T20 Match",
          description: "India defeated Australia by 5 wickets.",
          url: "https://example.com",
          urlToImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
        },
        {
          title: "Virat Kohli Breaks Another Record",
          description: "Virat becomes the fastest batter to score 15,000 runs.",
          url: "https://example.com",
          urlToImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018"
        }
      ]
    };
  }

  componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=india sports&apiKey=c051cc2707dc4b6485b99584bfdcdb37";
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ articles: data.articles })
    }).catch((error) => {
      console.error("Error fetching news:", error);
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Sports News</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.title}>
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

export default Sports