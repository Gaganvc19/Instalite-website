import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbbFUD7fqn7HS92Duklohb3eR-_WGO4e7ku56ZtN9&s"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet,</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>
    </div>
  );
}
