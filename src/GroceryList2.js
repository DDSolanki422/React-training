import React,{Component} from 'react';
import ListItem2 from './ListItem'


export default class GroceryList2 extends Component {
    render() {   // can be made static, since only one instance created.
       return (
           <ul>
               <ListItem2 quantity="2">Breads</ListItem2>
               <ListItem2 quantity="16">Eggs</ListItem2>
               <ListItem2 quantity="12">Milk</ListItem2>
           </ul>
       );
   }
}