import sha1 from 'sha1';
import {EditorState} from 'draft-js';

function setCurrentContent(id) {
  return {
    type: 'SET_CURRENT_CONTENT',
    id,
  };
}

function createContent(name) {
  return {
    type: 'CREATE_CONTENT',
    id: sha1((new Date()).toString()),
    name,
    content: EditorState.createEmpty(),
  };
}

function updateContentName(id, name) {
  return {
    type: 'UPDATE_CONTENT_NAME',
    id,
    name,
  };
}

function updateContent(id, content) {
  return {
    type: 'UPDATE_CONTENT',
    id,
    content,
  };
}

function removeContent(id) {
  return {
    type: 'UPDATE_CONTENT',
    id,
  };
}

export {
  setCurrentContent,
  createContent,
  updateContentName,
  updateContent,
  removeContent,
};
