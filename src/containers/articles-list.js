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
  return this.props.articles.map((article) => {
    console.log(article.title);
    return(
      <div key={article.title} className='card my-card'>
        <img className="card-image" src={article.urlToImage}></img>
        <a className="card-title" ref={article.url} target="_blank">{article.title}</a>
        <p className="card-text">{article.description}</p>
      </div>
    )
  });
}

render(){
  return(
    <div className="col-sm-9">
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
