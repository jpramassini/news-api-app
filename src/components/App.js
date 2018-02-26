import React, { Component } from 'react';
import {getTopArticles} from '../actions';
import ArticlesList from '../containers/articles-list';
import UserSearch from '../containers/userSearch';
import Navbar from './NavBar';
import LandingPage from './LandingPage';
import Fade from 'react-reveal/Fade';

class App extends Component {
  /*
  render() {
    return (
      <div>
        <Navbar />
        <Fade>
          <LandingPage />
        </Fade>
        <Fade>
          <ArticlesList store={this.props.store}/>
        </Fade>
        <UserSearch />

      </div>
    );
  }
  */

  render() {
    return(
      <div>
        <UserSearch />
      </div>
    )
  }
}

export default App;
