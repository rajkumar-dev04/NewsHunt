import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: [
        {
          title: "US Jobs Report Set to Reveal Solid Growth",
          description: "Jobs week is coming up in the US...",
          url: "https://www.bloomberg.com",
          urlToImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c"
        },
        {
          title: "Salmonella outbreak tied to supplements",
          description: "Two moringa-containing supplement products...",
          url: "https://www.ctinsider.com",
          urlToImage: "https://images.unsplash.com/photo-1495020689067-958852a7765e"
        },
        {
          title: "YouTuber Banned From Cedar Point",
          description: "Allen Ferrell has been barred...",
          url: "https://kotaku.com",
          urlToImage: "https://img.magnific.com/free-vector/businessman-reading-newspaper-park-avatar-character_24877-57835.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
          title: "The Best New TV Shows of 2024",
          description: "From 'The Last of Us' to 'The Bear,' here are the best new TV shows of 2024.",
          url: "https://www.theverge.com",
          urlToImage: "https://sm.ign.com/t/ign_ap/gallery/t/the-top-10/the-top-100-best-tv-shows-of-all-time_zbxt.600.jpg"
        },
        {
          title: "Gizmodo News",
          description: "Latest updates from technology world...",
          url: "https://gizmodo.com",
          urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6BaUR9AgXe72HGzdtl7nI2GT0b4BfLo09A&s"
        },
        {
          title: "The Verge",
          description: "Latest updates from technology world...",
          url: "https://www.theverge.com",
          urlToImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLf-G0_ugTW12Z_FQItdiG0g8w4LvjuaNzdw&s"
        }
      ]
    }
  }
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