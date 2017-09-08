import React, { Component } from 'react';
import  './CommentBox.css'

export default class  CommentBox extends Component{
    render(){
      let  status = "empty" ;
      return (
        <div className="myBox">
          This is an  info Box, which is currently {status}.
        </div>
      );
    }  // eo render()
  }
  