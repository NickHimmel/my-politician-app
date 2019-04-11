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

export const startFetchRecord = () => {
  return {
    type: 'START_FETCH_POLITICIAN'
  };
};

export const completeFetchRecord = (data) => {
  return {
    type: 'COMPLETE_FETCH_RECORD',
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
          state: state
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const fetchRecord = (id) => {
  return (dispatch, getState) => {
    console.log(id)
    dispatch(startFetchRecord());
    axios.get(`https://api.propublica.org/congress/v1/members/O000172.json`, {
        headers: {
          'X-API-Key': 'S3n7PyLwWE7DJIX8DtlpAn4VqFgYnbvQZ843SBsB'
        }})
      .then(function (response) {
        console.log(response)
        dispatch(completeFetchRecord(response));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};
