import localforage from 'localforage';
import {persistStore, createTransform} from 'redux-persist';
import {createValueFromString} from 'react-rte';

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

function configurePersist(store, cb) {
  persistStore(store, {storage: localforage, transforms: [contentTransform]}, cb);
}

export {
  configurePersist as default,
};
