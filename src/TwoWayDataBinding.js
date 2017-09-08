
import React from 'react';

export default class TwoWayDataBinding extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            value1:'This line fades away ... abd springs back!',
            opacityClass:'full-opacity'
        }
        this.handleChange=this.handleChange.bind(this);
        
    }
    componentWillMount(){
        console.log("Component will mount");
        this.timer=setInterval(()=>{
            if(this.state.opacityClass=='full-opacity'){
                this.setState({opacityClass:'no-opacity'});
            }
            else{
                this.setState({opacityClass:'full-opacity'});
            }
            
        },3000)
    }
    handleChange(e){
        let val=e.target.value;      
        this.setState({value:val});
    }
    render(){
        return (
            <div>
                <h4> Two Way Data Binding </h4>
                <input type="text" onInput={this.handleChange} defaultValue={this.state.value} />
                {this.state.value}
                <hr/>
                <input type="text" defaultValue={this.state.value1} id="fade-away" className={this.state.opacityClass} />

            </div>
        );
    }
    componentDidMount(){
        console.log("componentDidMount");
        //this.componentUnMount();
    }
    componentDidUpdate(){
        //console.log("componentDidUpdate");
        //this.componentUnMount();
    }
    componentUnMount(){
        console.log("Component Unmount");
        clearInterval(this.timer);
    }
} 