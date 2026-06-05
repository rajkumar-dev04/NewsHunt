import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  searchNews = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.search);
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          background: "linear-gradient(90deg, #0f172a, #1e293b)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
        }}
      >
        <div className="container">

          <Link
            className="navbar-brand"
            to="/" onClick={() => this.props.handleSearch("")}
            style={{
              fontSize: "2rem",
              fontWeight: "800",
              color: "#ffffff",
              textDecoration: "none",
              lineHeight: "1"
            }}
          >
            News Hunt
            <div
              style={{
                fontSize: "11px",
                color: "#94a3b8",
                letterSpacing: "2px",
                marginTop: "3px"
              }}
            >
              HUNT EVERY HEADLINE
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item mx-2">
                <Link className="nav-link text-light" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item mx-2">
  <Link className="nav-link text-light" to="/Sports">
    Sports
  </Link>
</li>

              <li className="nav-item mx-2">
                <Link className="nav-link text-light" to="/business">
                  Business
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link text-light" to="/StarBuzz">
                  StarBuzz
                </Link>
              </li>

            </ul>

            <form
              className="d-flex"
              onSubmit={this.searchNews}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search news..."
                value={this.state.search}
                onChange={(e) =>
                  this.setState({ search: e.target.value })
                }
                style={{
                  borderRadius: "25px"
                }}
              />

              <button
                className="btn btn-warning"
                type="submit"
                style={{
                  borderRadius: "25px",
                  fontWeight: "600"
                }}
              >
                Search
              </button>
              <button
  className="btn btn-light ms-2"
  type="button"
  onClick={() => {
    this.setState({ search: "" });
    this.props.handleSearch("");
  }}
>
  Clear
</button>
            </form>

          </div>

        </div>
      </nav>
    )
  }
}

export default Navbar