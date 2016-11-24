import {hashHistory} from 'react-router';
import {toggleMenu as headerToggleMenu} from '../Header/headerActions';
import {setCurrentContent, createContent} from '../Content/contentActions';

function toggleMenu(open) {
  return (dispatch) => dispatch(headerToggleMenu(open));
}

function createNewMemo(name, open) {
  return (dispatch, getState) => {
    dispatch(createContent(name));
    dispatch(headerToggleMenu(open));

    const {content: {currentContentId}} = getState();

    hashHistory.push(`/memo/${currentContentId}`);
  };
}

function openMemo(id, open) {
  return (dispatch, getState) => {
    dispatch(setCurrentContent(id));
    dispatch(headerToggleMenu(open));

    const {content: {currentContentId}} = getState();

    hashHistory.push(`/memo/${currentContentId}`);
  };
}

export {
  openMemo,
  toggleMenu,
  createNewMemo,
};
