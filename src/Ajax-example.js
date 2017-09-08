
import React from 'react';
import axios from 'axios';
//console.log(axios);

export default class AjaxExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            lastGistUrl: ''
        }
    }
    componentWillMount(){
        var self=this;
        axios.get('https://api.github.com/users/octocat/gists').then((res)=>{
            console.log(res);
            res=res.data;
            this.setState({username:res[0].owner.login,
                lastGistUrl:res[0].html_url})
        })

        
    }
    render(){
       return (
        <div>
            {this.state.username}: last gist is <a href={this.state.lastGistUrl}>here</a>.
        </div>
       );
        
    }
}