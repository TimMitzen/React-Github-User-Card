import React, { Component } from "react";
import FollowingCard from "../components/FollowingCard";

class Following extends Component {
  render() {
    return (
      <>
        {this.props.follow.map((follow, index) => (
          <FollowingCard key={index} following={follow} />
        ))}
      </>
    );
  }
}
export default Following;
