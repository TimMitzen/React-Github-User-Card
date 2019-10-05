import "./App.css";

import React, { Component } from "react";
import UserCard from "./components/UserCard";
import axios from "axios";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      follow: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/timmitzen")
      .then(result => {
        console.log("result", result);
        this.setState = {
          user: result.data
        };
      })
      .catch(error => {
        console.log(error, "error");
      });

    axios
      .get("https://api.github.com/users/timmitzen/following")
      .then(result => {
        console.log(result,"results")
        this.setState = {
          ...this.state,
          follow: result.data
        };
      })
      .catch(error => {
        console.log(error, "error");
      });
  }

  render() {
    return (
      <div>
        <UserCard user={this.state.user} />
        <p>{this.state.follow}</p>
      </div>
    );
  }
}

export default App;
