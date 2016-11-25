import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {autoRehydrate} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import reducers from './reducers';

function configureStore() {
  const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(reduxThunk),
    autoRehydrate(),
  ));

  if (module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(reducers));
  }

  return store;
}

export {
  configureStore as default,
};
