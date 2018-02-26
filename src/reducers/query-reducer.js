export default function queryReducer(state=[{title:'Loading'}], action){
  switch(action.type){
    case "RETURN_USER_ARTICLES":
      return action.userArticles;
    default:
      return state;
  }
}
