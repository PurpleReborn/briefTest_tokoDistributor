import http from '../../helpers/http';

export const getItemsBanner = () => {
  return async dispatch => {
    try {
      const {data} = await http().get(
        'https://gardien.tokodistributor.co.id/api-web/v2/utility/home/banner-web',
      );
      dispatch({
        type: 'GET_ITEM_BANNER',
        payload: data.data,
      });
    } catch (err) {
      dispatch({
        type: 'GET_ITEM_BANNER_FAILED',
        payload: err.response.data.message,
      });
    }
  };
};

export const getCategory = () => {
  return async dispatch => {
    try {
      const {data} = await http().get(
        'https://gardien.tokodistributor.co.id/api-web/v2/utility/home/box-category?with_staple=true',
      );
      dispatch({
        type: 'GET_CATEGORY',
        payload: data.data,
      });
    } catch (err) {
      dispatch({
        type: 'GET_CATEGORY_FAILED',
        payload: err.response.data.message,
      });
    }
  };
};

export const getItemsPagination = page => {
  return async dispatch => {
    try {
      const {data} = await http().get(
        `https://gardien.tokodistributor.co.id/api-web/v2/product-recommendation?page=${page}`,
      );
      console.log(page);
      dispatch({
        type: 'GET_ITEM_PAGINATION',
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: 'GET_ITEM_PAGINATION_FAILED',
        payload: err.response.data.message,
      });
    }
  };
};
