export const startFetchPolition = () => {
  return {
    type: 'START_FETCH_POLITICIAN'
  };
};

export const completeFetchPolition = (data) => {
  return {
    type: 'COMPLETE_FETCH_POLITICIAN'
  };
};

export const fetchPolition = (state, district) => {
  return (dispatch, getState) => {
    dispatch(startFetchPolition());
  };
};
