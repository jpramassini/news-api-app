import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import App from './components/App';
import reducers from './reducers/index'
//import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>
  ,
  document.getElementById('root'));
