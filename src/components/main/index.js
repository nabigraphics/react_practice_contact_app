import React from 'react';
import Header from './header';
import Search from './search';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';
class Main extends React.Component{
  constructor(){
    super();
    this.setChange = this.setChange.bind(this);
  }
  setChange(e){
    if(e.key === "Enter"){
      let lang = this.props.lang;
      let name = e.target.value;
      console.log(lang + " : " + name);
      this.props.handleChange(lang,name);
    }
  }
  render(){
    return(
        <div className="main">
          <Header/>
          <div className="search">
            <Search lang={this.props.handleSelected} title={this.setChange}/>
          </div>
        </div>
    )
  }
}

export default Main;