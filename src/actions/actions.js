import axios from 'axios';

export const startFetchPolition = () => {
  return {
    type: 'START_FETCH_POLITICIAN'
  };
};

export const completeFetchPolition = (data) => {
  return {
    type: 'COMPLETE_FETCH_POLITICIAN',
    data
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
        dispatch(completeFetchPolition(
          response.data.results[0]
        ));
        // console.log(response.data.results[0]['id']);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// export const fetchHistory = (id) => {
//   return (dispatch, getState) => {
//     https://api.propublica.org/congress/v1/members/{member-id}.json
//     "https://api.propublica.org/congress/v1/members/K000388/votes.json"
//   }
// }
