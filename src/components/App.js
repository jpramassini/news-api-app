import React, { Component } from 'react';
import {getTopArticles} from '../actions';
import ArticlesList from '../containers/articles-list';
import Navbar from './NavBar';
import LandingPage from './LandingPage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LandingPage />
        <ArticlesList store={this.props.store}/>

      </div>
    );
  }
}

export default App;
