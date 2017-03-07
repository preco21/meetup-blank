import './styles.css';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import RedBox from 'redbox-react';
import {Router, Route, Redirect, IndexRedirect, hashHistory} from 'react-router';
import configureStore from './configureStore';
import App from './components/App';
import Content from './components/Content';
import ContentView from './components/ContentView';

const store = configureStore();

renderApp();
applyHotLoader();

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

function applyHotLoader() {
  if (module.hot) {
    module.hot.accept('./components/App', renderApp);
  }
}
