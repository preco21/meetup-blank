import {hashHistory} from 'react-router';
import {toggleMenu as headerToggleMenu} from '../Header/headerActions';
import {setCurrentContent, createContent, deleteContent} from '../Content/contentActions';

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

function deleteMemo(id) {
  return (dispatch) => {
    dispatch(deleteContent(id));
    hashHistory.push('/');
  };
}

export {
  openMemo,
  toggleMenu,
  createNewMemo,
  deleteMemo,
};
