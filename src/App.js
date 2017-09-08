import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './CommentBox';
import {Anotherdiv,msg} from './Anotherdiv';
import {user} from './UserName';
import User from './User';
import GenericComponent from './GenericComponent'
import TwoWayDataBinding from './TwoWayDataBinding';
import AjaxExample from './Ajax-example'
import FilteredList from './Filtered-list'
import $ from 'jquery'


class App extends Component {
  render() {
    return (
      /* <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div> */
      <section>
        <div>View 2: Using ES6</div>
        <hr/>
        <CommentBox />
        <hr/>
        <Anotherdiv {...msg}/>
        <hr/>
        <User user={user} />
        <hr/>
        <GenericComponent things="cadbury" />
        <hr/>
        <p> without the props</p>
        <GenericComponent />
        <hr/>
        <TwoWayDataBinding />
        <AjaxExample  pr={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}/> 
       
        <hr/>
        <FilteredList />
      </section>
    );
  }
}

export default App;
