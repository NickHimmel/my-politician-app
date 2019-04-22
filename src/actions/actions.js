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
    const token = process.env.REACT_APP_PROPUBLICA_API_KEY;
    const AUTH_HEADER = {
      headers: {
        'X-API-Key': token
      }
    };
    axios.get(`https://api.propublica.org/congress/v1/members/house/${abbreviation}/${district}/current.json`, AUTH_HEADER)
      .then(function (response) {
        dispatch(completefetchId({
          id: response.data.results[0].id,
          name: response.data.results[0].name,
          district: response.data.results[0].district,
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
    const token = process.env.REACT_APP_PROPUBLICA_API_KEY;
    const AUTH_HEADER = {
      headers: {
        'X-API-Key': token
      }
    }
    Promise.all([
      axios.get(`https://api.propublica.org/congress/v1/members/${id}.json`, AUTH_HEADER),
      axios.get(`https://api.propublica.org/congress/v1/members/${id}/votes.json`, AUTH_HEADER),
      axios.get(`https://api.propublica.org/congress/v1/members/${id}/bills/introduced.json`, AUTH_HEADER)
    ]).then(function ([politician, votes, bills]) {
        dispatch(completeFetchPolitician({
          politician: politician.data.results[0],
          roles: politician.data.results[0].roles,
          votes: votes.data.results[0].votes,
          bills: bills.data.results[0].bills
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};
