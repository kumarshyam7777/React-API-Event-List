import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    //this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      term: "",
    };
  }

    // onInputChange(event) {
    //   console.log(event.target.value);
    // }

  onFormSubmit =(e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
