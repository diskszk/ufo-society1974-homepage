import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import createStore from '../reducks/store/store';
import { ConnectedRouter } from 'connected-react-router'
import * as History from 'history';
import '../assets/mystyle.css';
import App from './App';

const history = History.createBrowserHistory();
export const store = createStore(history);

// index.jsがreactの元となるファイルになる
const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  app
);