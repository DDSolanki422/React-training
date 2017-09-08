
import React from 'react';

export default class FilteredList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            filterValue:'',            
            filteritems:this.props.items
        }
        this.handleChange=this.handleChange.bind(this);

    }
    handleChange(e){
        let val=e.target.value;
        var filteredItems=this.props.items.filter(function(element){
            return element.toLowerCase().search(val) !== -1;
        })
        this.setState({filteritems:filteredItems})

    }
    render(){
        return (
            <section>
                Filter Input: <input type="text" onInput={this.handleChange} defaultValue={this.state.filterValue}/>
                <ul>
                    {this.state.filteritems.map(function(item){
                        return <li key={item}>{item}</li>
                    })
                    }
                </ul>
            </section>
        );
    }
}
FilteredList.defaultProps={
    items:["Apples",
    "Bread",
    "Vada",
    "Oats",
    "Oranges",
    "Grapes",
    "Banana"]
}