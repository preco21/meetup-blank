function defaultTitle() {
  return {
    type: 'DEFAULT_TITLE',
  };
}

function setTitle(title) {
  return {
    type: 'SET_TITLE',
    title,
  };
}

function toggleMenu(open) {
  return {
    type: 'TOGGLE_MENU',
    isOpened: open,
  };
}

export {
  defaultTitle,
  setTitle,
  toggleMenu,
};
