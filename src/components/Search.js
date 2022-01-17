import React from "react";


class Search extends React.Component {
  state = {
    search: ''
  }

  

  searchHandle = (e) => {
    this.setState({search: e.target.value})
  }

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search)
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              placeholder="Search..."
              type="search"
              className="validate"
              value={this.state.search}
              onChange={this.searchHandle}
              onKeyDown={this.handleKey}
            />
            <button className="btn search-btn" onClick={() => this.props.searchMovie(this.state.search)}>
              Search
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Search