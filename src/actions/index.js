import NewsAPI from '../myNewsApi';
//import thunk from 'redux-thunk';
const newsapi = new NewsAPI('69ed1615a8cd47518b3146645d8478e9');

export function getTopArticles(dispatch){
  newsapi.v2.topHeadlines({
      country: 'us'
    })
    .then(response => {
      console.log(response.articles);
      console.log("GET_TOP_ARTICLES");
      dispatch(receiveFirstPageArticles(response.articles));
    })
  }

export function getArticleswithUserQuery(dispatch, queryParams, senderType){
  if(senderType == "search"){
  console.log("search")
  newsapi.v2.everything(queryParams)
    .then(response => {
      console.log(response.articles);
      dispatch(returnUserSearch(response.articles));
    })
  } else {
    console.log("topHeadlines")
    newsapi.v2.topHeadlines(queryParams)
      .then(response => {
        console.log(response.articles);
        dispatch(returnUserSearch(response.articles));
      })
  }
}

function receiveFirstPageArticles(articles){
  return{
    type: 'GET_TOP_ARTICLES',
    articles
  }
}

function returnUserSearch(articles){
  return{
    type: 'RETURN_USER_ARTICLES',
    userArticles:articles
  }
}
