import React, { Component } from "react";
import {Card } from 'react-bootstrap'
class FollowingCard extends Component {
import 

   render(){
   return(
      
      <Card className='card'>
         <Card.Body>
         <Card.Title><h4>Following</h4></Card.Title>
        <Card.Title><h3>{this.props.following.login}</h3></Card.Title>
         <Card.Img src={this.props.following.avatar_url}/>
         <a href={this.props.following.html_url}>Github Link</a>
         </Card.Body> 
      </Card>
      
   )
}
}
export default FollowingCard;

