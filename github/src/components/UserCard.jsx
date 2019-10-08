import React, { Component } from "react";
import { Card } from "react-bootstrap";
export class UserCard extends Component {
  render() {
    return (

        
        <Card className ='card'>
        <Card.Body>
           <Card.Title><h4>GitHub User:</h4></Card.Title>
         <Card.Title><h2>User: {this.props.user.login}</h2> </Card.Title>
          <Card.Img src={this.props.user.avatar_url} />
          <Card.Text><a href={this.props.user.html_url}>Github Link</a></Card.Text>
          </Card.Body>
          
        </Card>
      
    );
  }
}

export default UserCard;
//user card aka me