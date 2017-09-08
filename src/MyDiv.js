
import React,{Component} from 'react';


export default class MyDiv extends Component{
    render(){
    return (<div><div>JS is {this.props.name} </div>
        <div>JS is {this.props.name} </div></div>
    );
    }
}

