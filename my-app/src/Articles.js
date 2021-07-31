import React from "react";
import { Link, withRouter } from "react-router-dom";
import articles from "./data/articles.json";

class Articles extends React.Component {
  state = {
    search: ""
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ search: value });
  };
  render() {
    let filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(this.state.search)
    );
    return (
      <>
        <input
          placeholder="search"
          className="search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <ul className="articles">
          {filteredArticles.map((article) => (
            <li>
              <Link to={"articles/" + article.slug}>
                <h3>{article.title}</h3>
              </Link>
              <small>{article.author}</small>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(Articles);





