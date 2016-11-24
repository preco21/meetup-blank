function contentRecucer(
  state = {
    currentContentId: null,
    contents: [],
  },
  action = {},
) {
  switch (action.type) {
    case 'SET_CURRENT_CONTENT': {
      return {
        ...state,
        currentContentId: action.id,
      };
    }
    case 'CREATE_CONTENT': {
      return {
        ...state,
        currentContentId: action.id,
        contents: [
          ...state.contents,
          {
            id: action.id,
            name: action.name,
            contentState: action.content,
          },
        ],
      };
    }
    case 'UPDATE_CONTENT_NAME': {
      return {
        ...state,
        contents: state.contents.map((elem) => {
          if (elem.id === action.id) {
            return {
              ...elem,
              name: action.name,
            };
          }

          return elem;
        }),
      };
    }
    case 'UPDATE_CONTENT': {
      return {
        ...state,
        contents: state.contents.map((elem) => {
          if (elem.id === action.id) {
            return {
              ...elem,
              contentState: action.content,
            };
          }

          return elem;
        }),
      };
    }
    case 'REMOVE_CONTENT': {
      return {
        ...state,
        currentId: null,
        contents: state.contents.filter(({id}) => id !== action.id),
      };
    }
    default: {
      return state;
    }
  }
}

export {
  contentRecucer as default,
};
