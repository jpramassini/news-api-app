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
        return(<option selected="selected">{country}</option>)
      } else
      return (<option>{country}</option>)
    });
  }

  sendParams(event){
    event.preventDefault();
    const sender = event.target;
    console.log(sender);
    // Getting individual elements of form.
    const search = document.getElementById("search");
    const country = document.getElementById("country");
    const countryLowered = country.options[country.selectedIndex].text.toLowerCase();
    const category = document.getElementById("category");
    let categoryVal = category.options[category.selectedIndex].text.toLowerCase();
    const sortBy = document.getElementById("sortBy");
    let sortByVal = sortBy.options[sortBy.selectedIndex].text.toLowerCase();

    if(sortByVal == "most recent"){
      sortByVal = "publishedAt"
    };
    if(categoryVal == "all"){
      categoryVal = ""
    };
    // assigning to JSON object which will be passed to action.
    let queryParams = {};
    queryParams.q = search.value;
    queryParams.country = countriesObject[countryLowered];
    queryParams.category = categoryVal;
    queryParams.sortBy = sortByVal;
    console.log(queryParams);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.sendParams}>
          <input id="search" type="text" placeholder="Search..."></input>
          <label for="countries">Countries</label>
          <select id = "country" name="countries">
            {this.renderOptionsFromJSON()}
          </select>
          <label for="category">Category</label>
          <select id="category" name="category">
            <option>All</option>
            <option>Business</option>
            <option>Entertainment</option>
            <option>Health</option>
            <option>Science</option>
            <option>Sports</option>
            <option>Technology</option>
          </select>
          <label for="Sort by">Sort by:</label>
          <select id="sortBy" name="Sort by">
            <option>Relevance</option>
            <option>Popularity</option>
            <option>Most Recent</option>
          </select>
          <input type="submit" value="Search" />
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
