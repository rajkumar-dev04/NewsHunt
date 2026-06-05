import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let { title, description, newsUrl, content, imageUrl } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>

          <img
            src={imageUrl || "/no-image.png"}
            className="card-img-top"
            alt="news"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/no-image.png";
            }}
          />

          <div className="card-body">
            <h5 className="card-title">
              {title || "No title available"}
            </h5>

            <p className="card-text">
              {description || content || "No description available"}
            </p>

            <a
              href={newsUrl || "/"}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Read More
            </a>
          </div>

        </div>
      </div>
    )
  }
}

export default Newsitem