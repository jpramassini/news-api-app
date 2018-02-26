import { combineReducers } from 'redux';
import ArticlesReducer from './get-articles-reducer';
import QueryReducer from './query-reducer';

const rootReducer = combineReducers({
  articles: ArticlesReducer,
  userArticles: QueryReducer
});

export default rootReducer;
