
import React,{Component} from 'react';
import {UserName} from './UserName';
import SignIn from './Signin';
import GroceryList2 from './GroceryList2'


export default class User extends React.Component {
    render() {
        return <div>
                 <h3>City: {this.props.user.city}</h3>
                 <UserName name={this.props.user.name} />
                 <SignIn />
                 <GroceryList2 />
                </div>;
    }
}