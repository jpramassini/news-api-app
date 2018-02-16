import React, { Component } from 'react';
import {getTopArticles} from '../actions';
import ArticlesList from '../containers/articles-list'

class App extends Component {
  render() {
    return (
      <ArticlesList store={this.props.store}/>
    );
  }
}

export default App;
