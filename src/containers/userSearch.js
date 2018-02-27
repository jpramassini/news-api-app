import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticleswithUserQuery } from '../actions';

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
    let country;
    let countryLowered;
    let category;
    let categoryVal;
    let search;
    let sortBy;
    let sortByVal;
    // Getting individual elements of form.
    if(this.props.type=="topHeadlinesSort"){
      country = document.getElementById("country");
      countryLowered = country.options[country.selectedIndex].text.toLowerCase();
      category = document.getElementById("category");
      categoryVal = category.options[category.selectedIndex].text.toLowerCase();
      if(categoryVal == "all"){
        categoryVal = ""
      };
    } else {
    search = document.getElementById("search");
    sortBy = document.getElementById("sortBy");
    sortByVal = sortBy.options[sortBy.selectedIndex].text.toLowerCase();

    if(sortByVal == "most recent"){
      sortByVal = "publishedAt"
    };
  }
    // assigning to JSON object which will be passed to action.
    let queryParams = {};
    if(this.props.type == "topHeadlinesSort"){
      queryParams = {};
      queryParams.country = countriesObject[countryLowered];
      queryParams.category = categoryVal;
    } else {
      queryParams = {};
      queryParams.q = search.value;
      queryParams.sortBy = sortByVal;
    }
    console.log(queryParams);
    getArticleswithUserQuery(this.props.store.dispatch, queryParams, null)
  }

  render(){
    if(this.props.type == "topHeadlinesSort"){
      return(
        <div>
          <form>

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
            <input type="submit" value="Search" />

          </form>
        </div>
      )
    } else {
    return(
      <div>
        <form onSubmit={this.sendParams.bind(this)}>
          <input id="search" type="text" placeholder="Search..."></input>

          <label for="Sort by">Sort by:</label>
          <select id="sortBy" name="Sort by">
            <option>Popularity</option>
            <option>Most Recent</option>
            <option>Relevance</option>
          </select>
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
  }

}

function mapStateToProps(state){
  return{
    userArticles:state.currentQuery
  }
}

export default connect(mapStateToProps)(UserSearch);
