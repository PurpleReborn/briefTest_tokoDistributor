const initialState = {
  data: [],
  message: '',
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEM_BANNER': {
      return {
        ...state,
        data: action.payload,
      };
    }
    case 'GET_ITEM_BANNER_FAILED': {
      return {
        ...state,
        message: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default items;
