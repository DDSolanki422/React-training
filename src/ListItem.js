import React,{Component} from 'react';

export default class ListItem2 extends Component {
    render() {
        return (
            <li>
                {this.props.quantity}× {this.props.children}
            </li>
        );
    }
}