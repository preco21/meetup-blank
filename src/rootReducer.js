import {combineReducers} from 'redux';
import header from './components/Header/headerReducer';
import content from './components/Content/contentReducer';
// import sideBar from './components/SideBar/sideb';

const rootReducer = combineReducers({
  header,
  content,
  // sideBar,
});

export {
  rootReducer as default,
};
