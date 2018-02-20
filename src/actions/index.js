import NewsAPI from 'newsapi';
import thunk from 'redux-thunk';

export function getTopArticles(dispatch){
  const newsapi = new NewsAPI('69ed1615a8cd47518b3146645d8478e9');
  newsapi.v2.topHeadlines({
      country: 'us'
    }).then(response => {
      console.log(response.articles);
      console.log("GET_TOP_ARTICLES");
      dispatch(receiveArticles(response.articles));
    })
  }

function receiveArticles(articles){
  return{
    type: 'GET_TOP_ARTICLES',
    articles
  }
}
