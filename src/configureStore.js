import localforage from 'localforage';
import {createValueFromString} from 'react-rte';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {autoRehydrate, persistStore, createTransform} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import reducers from './reducers';

const contentTransform = createTransform(
  (state) => ({
    ...state,
    contents: state.contents.map((elem) => ({
      ...elem,
      contentState: elem.contentState.toString('html'),
    })),
  }),
  (state) => ({
    ...state,
    contents: state.contents.map((elem) => ({
      ...elem,
      contentState: createValueFromString(elem.contentState, 'html'),
    })),
  }),
  {
    whitelist: ['content'],
  },
);

function configureStore() {
  const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(reduxThunk),
    autoRehydrate(),
  ));

  persistStore(store, {storage: localforage, transforms: [contentTransform]});

  if (module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(reducers));
  }

  return store;
}

export {
  configureStore as default,
};
