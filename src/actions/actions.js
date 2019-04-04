import axios from 'axios';

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
    axios.get(`https://api.propublica.org/congress/v1/members/house/${state}/${district}/current.json`, {
        headers: {
          'X-API-Key': 'S3n7PyLwWE7DJIX8DtlpAn4VqFgYnbvQZ843SBsB'
        }})
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
