export default function articlesReducer(state = [{title:'Loading...'}], action) {
  switch(action.type){
    case "GET_TOP_ARTICLES":
      return action.articles;
    default:
      return state;
  }
}
