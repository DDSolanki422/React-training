import React,{Component} from 'react';

export let  msg = {
    name: "ES6: ",
    message: "its cool"
};

export  class Anotherdiv extends Component{
render() {
    return <div>Info:  {this.props.name} {this.props.message}</div>;
  }
};

