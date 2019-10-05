import React, { Component } from "react";
import { Card } from "react-bootstrap";
export class UserCard extends Component {
  render() {
    return (
      <>
        <h1>GitHub Project</h1>
        <Card style={{ width: "18rem" }}>
          <h2>{this.props.user.login}</h2>
          <Card.Img src={this.props.user.avatar_url} />
          <p>Following: {this.props.user.following}</p>
        </Card>
      </>
    );
  }
}

export default UserCard;
