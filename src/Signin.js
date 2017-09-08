
import React,{Component} from 'react';
import UserMenu from './Usermenu';

export default class SignIn extends Component{
    constructor(){
        super();
        this.state={
            showshowMenu:false,
            liked:false
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({liked: !this.state.liked})
    }
    render(){        
        let menu=null;
        if(this.state.showMenu){
            menu=<UserMenu />
        }
        let  text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <div>
                <h4>OS List</h4>
                <input type="radio" name="showMenu" onClick={()=>{this.setState({showMenu:true});}} value="Show"/> Show
                <br/>
                <input type="radio" name="showMenu" onClick={()=>{this.setState({showMenu:false});}} value="Hide"/>  Hide
                {menu}
                <p onClick={this.handleClick}>
                    You {text} this. Click to toggle.
                </p>
            
            </div>
            
        );
    }
} 