import './styles.css';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {Router, Route, Redirect, IndexRedirect, hashHistory} from 'react-router';
import {AppContainer} from 'react-hot-loader';
import RedBox from 'redbox-react';
import App from './components/App';
import Content from './components/Content';
import ContentView from './components/ContentView';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

if (module.hot) {
  module.hot.accept('./components/App', () => renderApp());
  module.hot.accept('./rootReducer', () => {
    const nextReducer = require('./rootReducer').default;

    store.replaceReducer(nextReducer);
  });
}

renderApp();

function renderApp() {
  render(
    <AppContainer errorReporter={RedBox}>
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRedirect to="/view" />
            <Route path="/memo/:memoId" component={Content} />
            <Route path="/view" component={ContentView} />
            <Redirect from="*" to="/view" />
          </Route>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
}
