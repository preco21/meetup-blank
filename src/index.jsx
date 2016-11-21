import './styles.css';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import RedBox from 'redbox-react';
import App from './components/App';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

renderApp();

if (module.hot) {
  module.hot.accept('./components/App', () => renderApp());
  module.hot.accept('./rootReducer', () => {
    const nextReducer = require('./rootReducer').default;

    store.replaceReducer(nextReducer);
  });
}

function renderApp() {
  render(
    <AppContainer errorReporter={RedBox}>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
}
