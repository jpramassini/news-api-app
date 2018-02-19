import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getTopArticles} from '../actions';

class ArticlesList extends Component {

componentDidMount(){
  getTopArticles(this.props.store.dispatch);
}

renderList() {
  console.log(this.props.articles)
  console.log(this.props.articles.totalResults)
  const noDescription = "No description provided, read the story for more.";
  return this.props.articles.map((article) => {
    //console.log(article.title);
    console.log(article.url);
    return(
      <div key={article.title} className='card content-card'>
        <img className="card-img-top my-card-image" src={article.urlToImage ? article.urlToImage : "./assets/import_placeholder.png"}></img>
        <div className="card-header reem-kufi-font">
          <h2 className="card-title">{article.title}</h2>
        </div>
        <div className="card-body">
          <p className="card-text merriweather-font">{article.description ? article.description : noDescription}</p>
          <a className="btn btn-outline-dark" href={article.url} target="_blank">Full story</a>
      </div>
      </div>
    )
  });
}
onload(){}
render(){
  return(
    <div className="card-grid">
      {this.renderList()}
    </div>
  )
  }
}

  function mapStateToProps(state) {
    return {
      articles: state.articles
    }
  }

export default connect(mapStateToProps)(ArticlesList);
