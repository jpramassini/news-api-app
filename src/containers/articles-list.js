import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopArticles } from '../actions';

class ArticlesList extends Component {

componentDidMount(){
  if(this.props.topStories == true){
    getTopArticles(this.props.store.dispatch);
  }
}

renderList() {
  console.log(this.props.articles)
  console.log(this.props.articles.totalResults)
  const noDescription = "No description provided, read the story for more.";
  if(this.props.topStories == true){
  return this.props.articles.map((article) => {
    //console.log(article.title);
    //console.log(article.url);
    return(
        <div key={article.url} className='card content-card'>
          <a href={article.url} target="_blank">
            <img className="card-img-top my-card-image" src={article.urlToImage ? article.urlToImage : "./assets/placeholder-nowfeed.png"}></img>
            <div className="card-header reem-kufi-font">
              <h2 className="card-title">{article.title}</h2>
            </div>
            <div className="card-body">
              <p className="card-text merriweather-font">{article.description ? article.description : noDescription}</p>
              <a className="btn btn-outline-dark reem-kufi-font" href={article.url} target="_blank">Full story</a>
            </div>
          </a>
        </div>
    )
    });
  } else {
    return this.props.userArticles.map((article) => {
      //console.log(article.title);
      //console.log(article.url);
      return(
          <div key={article.url} className='card content-card'>
            <a href={article.url} target="_blank">
              <img className="card-img-top my-card-image" src={article.urlToImage ? article.urlToImage : "./assets/placeholder-nowfeed.png"}></img>
              <div className="card-header reem-kufi-font">
                <h2 className="card-title">{article.title}</h2>
              </div>
              <div className="card-body">
                <p className="card-text merriweather-font">{article.description ? article.description : noDescription}</p>
                <a className="btn btn-outline-dark reem-kufi-font" href={article.url} target="_blank">Full story</a>
              </div>
            </a>
          </div>
      )
      });
  }
}
  render(){
    if(this.props.topStories == true){
    return(
      <div className="top-stories-wrapper">
        <div className = "padding-div">
          <h2 id="topstories" className="merriweather-font section-heading-dark text-center">Top stories right now.</h2>
        </div>
        <div className="card-grid">
          {this.renderList()}
        </div>
      </div>
    );
  } else {
    return(
      <div className="top-stories-wrapper">
        <div className = "padding-div">
          <h2 id="topstories" className="merriweather-font section-heading-dark text-center">Your articles:</h2>
        </div>
        <div className="card-grid">
          {this.renderList()}
        </div>
      </div>
    )
  }
  }
}

  function mapStateToProps(state) {
    return {
      articles: state.articles,
      userArticles: state.userArticles
    }
  }

export default connect(mapStateToProps)(ArticlesList);
