import React, { Component } from "react";
import {Card, } from 'react-bootstrap'
class FollowingCard extends Component {
import 

   render(){
   return(
      <Card style={{width: '18rem'}}>
         <Card.Body>
        <Card.Title><h2>{this.props.following.login}</h2></Card.Title>
         <Card.Img src={this.props.following.avatar_url}/>
         <a href={this.props.following.html_url}>Github Link</a>
         </Card.Body> 
      </Card>
   )
}
}
export default FollowingCard;

