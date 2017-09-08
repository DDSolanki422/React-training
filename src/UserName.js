import React,{Component} from 'react';

export const user={name:'Ram',city:'Bangalore'}

export class UserName extends Component{
    render(){
        return <div>name: {this.props.name} </div>;
    }
}