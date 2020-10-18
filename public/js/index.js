import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import createStore from '../reducks/store/store';
import * as History from 'history';
import '../assets/mystyle.css';
import { HashRouter } from 'react-router-dom';
import App from './App';

const history = History.createBrowserHistory();
export const store = createStore(history);

// index.jsがreactの元となるファイルになる
const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  app
);