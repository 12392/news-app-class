import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
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
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
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
};

export default Newsitem;
