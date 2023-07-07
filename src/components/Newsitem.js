import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="container my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
            style={{ width: "271px", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
