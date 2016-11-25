import {combineReducers} from 'redux';
import header from './components/Header/headerReducer';
import content from './components/Content/contentReducer';

const rootReducer = combineReducers({
  header,
  content,
});

export {
  rootReducer as default,
};
