const initialState = {
  data: [],
  dataPagination: [],
  message: '',
  pageInfo: {},
  data2: [],
  category: [],
  errMsg: '',
  sccMsg: '',
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
        message: action.payload.code_message,
      };
    }
    case 'GET_ITEM_PAGINATION': {
      return {
        ...state,
        // dataPagination: [...state.dataPagination, ...action.payload.data],
        dataPagination: action.payload.data,
        pageInfo: action.payload.meta,
      };
    }
    case 'GET_ITEM_PAGINATION_FAILED': {
      return {
        ...state,
        errMsg: action.payload.code_message,
      };
    }
    case 'GET_CATEGORY': {
      return {
        ...state,
        category: action.payload,
      };
    }
    case 'GET_CATEGORY_FAILED': {
      return {
        ...state,
        errMsg: action.payload.code_message,
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
