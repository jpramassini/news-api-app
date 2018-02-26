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
          <ArticlesList topStories={true} store={this.props.store}/>
        </Fade>
        <UserSearch />

      </div>
    );
  }
  */

  render() {
    return(
      <div>
        <UserSearch store={this.props.store}/>
        <ArticlesList topStories={false} store={this.props.store} />
      </div>
    )
  }
}

export default App;
