import { combineReducers } from 'redux';
import ArticlesReducer from './getArticles';

const rootReducer = combineReducers({
  articles: ArticlesReducer
});

export default rootReducer;
