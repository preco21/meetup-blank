import {combineReducers} from 'redux';
import header from './components/Header/headerReducer';
import content from './components/Content/contentReducer';

const reducers = combineReducers({
  header,
  content,
});

export {
  reducers as default,
};
