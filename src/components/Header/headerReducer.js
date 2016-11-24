const title = 'Blank';

function headerReducer(
  state = {
    isOpened: false,
    title,
  },
  action = {},
) {
  switch (action.type) {
    case 'DEFAULT_TITLE': {
      return {
        ...state,
        title,
      };
    }
    case 'SET_TITLE': {
      return {
        ...state,
        title: `${title} - ${action.title}`,
      };
    }
    case 'TOGGLE_MENU': {
      return {
        ...state,
        isOpened: typeof action.isOpened === 'boolean'
          ? action.isOpened
          : !state.isOpened,
      };
    }
    default: {
      return state;
    }
  }
}

export {
  headerReducer as default,
};
