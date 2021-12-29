import "../api/unsplash";
import React, { Component } from "react";

import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  onSearchSubmit = async (term) => {
    //console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className={"ui container"} style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found : {this.state.images.length} images.
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
