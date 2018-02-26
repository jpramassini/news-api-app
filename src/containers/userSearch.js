import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getTopArticleswithUserQuery} from '../actions';

const countriesObject = require("../searchArrays/countries.json");

class UserSearch extends Component {

  toTitleCase(str)
  {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  renderOptionsFromJSON(){
    let countriesArray = [];
    console.log("COUNTRIES ARRAY");
    console.log(countriesObject);
    for(var key in countriesObject){
      if(countriesObject.hasOwnProperty(key) ){
        console.log(key);
        countriesArray.push(this.toTitleCase(key));
      }
    }
    console.log(countriesArray);
    return countriesArray.map((country) => {
      if(country == "United States"){
        return <option selected="selected">{country}</option>
      } else{
      return (<option>{country}</option>)
    }
    });
  }

  render(){
    return(
      <div>
        <form>
          <input type="text" placeholder="Search..."></input>
          <label for="countries">Countries</label>
          <select name="countries">
            {this.renderOptionsFromJSON()}
          </select>
          <label for="category">Category</label>
          <select name="category">
            <option>All</option>
            <option>Business</option>
            <option>Entertainment</option>
            <option>Health</option>
            <option>Science</option>
            <option>Sports</option>
            <option>Technology</option>
          </select>
          <label for="Sort by">Sort by:</label>
          <select name="Sort by">
            <option>Relevance</option>
            <option>Popularity</option>
            <option>Most Recent</option>
          </select>
        </form>
      </div>
    )
  }

}

function mapStateToProps(state){
  return{
    currentQuery: state.currentQuery
  }
}

export default connect(mapStateToProps)(UserSearch);
