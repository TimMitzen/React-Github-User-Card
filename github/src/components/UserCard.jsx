

import React, { Component } from 'react'

export class UserCard extends Component {
  
   render() {
      
      return (
         <>
            <h1>GitHub</h1>
         
         <div>
            
               <p>UserName: {this.props.user.login}</p>
               <p>Avatar: {this.props.user.avatar_url}</p>
               <p>Following: {this.props.user.following}</p>
         </div>
         </>
      )
   }
}

export default UserCard;
