import axios from 'axios';

export const startfetchId = () => {
  return {
    type: 'START_FETCH_ID'
  };
};

export const completefetchId = (data) => {
  return {
    type: 'COMPLETE_FETCH_ID',
    data
  };
};

export const startFetchPolitician = () => {
  return {
    type: 'START_FETCH_POLITICIAN'
  };
};

export const completeFetchPolitician = (data) => {
  return {
    type: 'COMPLETE_FETCH_POLITICIAN',
    data
  };
};

export const fetchId = (abbreviation, state, district) => {
  return (dispatch, getState) => {
    dispatch(startfetchId());
    axios.get(`https://api.propublica.org/congress/v1/members/house/${abbreviation}/${district}/current.json`, {
        headers: {
          'X-API-Key': 'S3n7PyLwWE7DJIX8DtlpAn4VqFgYnbvQZ843SBsB'
        }})
      .then(function (response) {
        dispatch(completefetchId({
          id: response.data.results[0].id,
          nextElection: response.data.results[0].next_election,
          state: state
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const fetchPolitician = (id) => {
  return (dispatch, getState) => {
    dispatch(startFetchPolitician());
    axios.get(`https://api.propublica.org/congress/v1/members/${id}.json`, {
        headers: {
          'X-API-Key': 'S3n7PyLwWE7DJIX8DtlpAn4VqFgYnbvQZ843SBsB'
        }})
      .then(function (response) {
        dispatch(completeFetchPolitician(response.data.results[0]));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};
