import React, { Component } from "react";
import { Card } from "react-bootstrap";
export class UserCard extends Component {
  render() {
    return (

        
        <Card className ='card'>
        <Card.Body>
         <Card.Title><h2>{this.props.user.login}</h2> </Card.Title>
          <Card.Img src={this.props.user.avatar_url} />
          <Card.Text><p>Following: {this.props.user.following}</p></Card.Text>
          </Card.Body>
          
        </Card>
      
    );
  }
}

export default UserCard;
