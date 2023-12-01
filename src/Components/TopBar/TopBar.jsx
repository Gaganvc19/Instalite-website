import { Link } from "react-router-dom";
import React from "react";
import "./topbar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="write/">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
