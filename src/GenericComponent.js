import React from 'react'


export default class GenericComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { thing: this.props.things };
        console.log("constructor: " ,  this.props.things) ;
    }

    render () {
        console.log("render: " ,  this.props.things) ;
         return( <div> {this.props.things} </div>)
     }
}
GenericComponent.defaultProps = { things: "biscuit" };