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
