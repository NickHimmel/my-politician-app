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

export const fetchPolition = (abbreviation, state, district) => {
  return (dispatch, getState) => {
    dispatch(startFetchPolition());
    axios.get(`https://api.propublica.org/congress/v1/members/house/${abbreviation}/${district}/current.json`, {
        headers: {
          'X-API-Key': 'S3n7PyLwWE7DJIX8DtlpAn4VqFgYnbvQZ843SBsB'
        }})
      .then(function (response) {
        const politician = {...response.data.results[0], state: state};
        dispatch(completeFetchPolition(politician));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const fetchData = (id) => {
  return (dispatch, getState) => {
    // `https://api.propublica.org/congress/v1/members/${id}.json`
  }
}
