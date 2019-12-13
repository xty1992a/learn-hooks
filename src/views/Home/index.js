import React, { Component } from "react";
import Search from "components/Search";

export default class Home extends Component {
  state = {
    query: {
      pageIndex: 1,
      pageSize: 3,
      searchStr: ""
    }
  };

  constructor(props) {
    super(props);
  }

  onSearchChange = keywords => {
    this.setState({
      query: {
        ...this.state.query,
        searchStr: keywords
      }
    });
  };

  onSearch = e => {
    console.log("search ", e);
  };

  render() {
    return (
      <div className="home">
        <Search
          value={this.state.query.searchStr}
          onInput={this.onSearchChange}
          onSearch={this.onSearch}
        />
      </div>
    );
  }
}
