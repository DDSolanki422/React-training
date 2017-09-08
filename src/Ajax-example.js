
import React from 'react';
import axios from 'axios';
//console.log(axios);

export default class AjaxExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }
    componentWillMount(){
        var self=this;
        this.props.pr.then((res)=>{
            console.log(res);
            res=res.items;
            this.setState({items:res});         
        })

        
    }
    render(){
       return (
        <ul>
            {this.state.items.map((item,index)=>{
                return (<li keys={item.id+'-index-'+index}>
                        <p> {index+1}. JS Name: {item.name}</p>
                        <p>Stars: {item.stargazers_count}</p>
                </li>);
            })}
        </ul>
       );
        
    }
}