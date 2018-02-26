import NewsAPI from '../myNewsApi';
import thunk from 'redux-thunk';

export function getTopArticles(dispatch){
  const newsapi = new NewsAPI('69ed1615a8cd47518b3146645d8478e9');
  newsapi.v2.topHeadlines({
      country: 'us'
    }).then(response => {
      console.log(response.articles);
      console.log("GET_TOP_ARTICLES");
      dispatch(receiveFirstPageArticles(response.articles));
    })
  }
/*
export function getTopArticleswithUserQuery(dispatch, queryParams){
  const newsapi = new NewsAPI('69ed1615a8cd47518b3146645d8478e9');
  newsapi.v2.topHeadlines(queryParams).then(response => {
    console.log("USER_ARTICLES_RETURNED")
    dispatch(returnUserSearch(response.articles));
  })
}
*/

function receiveFirstPageArticles(articles){
  return{
    type: 'GET_TOP_ARTICLES',
    articles
  }
}
/*
function return returnUserSearch(articles){
  return{
    type: 'USER_ARTICLES_RETURNED',
    articles
  }
}
*/
