import sha1 from 'sha1';
import {createEmptyValue} from 'react-rte';

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
    content: createEmptyValue(),
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
