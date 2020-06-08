import React, { Component } from "react";
import CharacterList from "./CharacterList";
import HeroList from "./HeroList";
import "../styles/index.css";
import Squadstats from "./Squadstats";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Supersquad</h2>
        <div className="col-md-4">
          {" "}
          <CharacterList></CharacterList>
        </div>
        <div className="col-md-4">
          {" "}
          <HeroList></HeroList>
        </div>
        <div className="col-md-4">
          <Squadstats></Squadstats>
        </div>
      </div>
    );
  }
}

export default App;
