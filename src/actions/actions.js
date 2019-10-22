import axios from 'axios';

export const startFetchPoliticians = () => {
  return {
    type: 'START_FETCH_POLITICIANS'
  };
};

export const completeFetchPoliticians = (data) => {
  return {
    type: 'COMPLETE_FETCH_POLITICIANS',
    data
  };
};

export const closePolitician = () => {
  return {
    type: 'CLOSE_POLITICIAN'
  };
};

export const setId = (data) => {
  return {
    type: 'SET_ID',
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

export const startFetchFinances = () => {
  return {
    type: 'START_FETCH_FINANCES'
  };
};

export const completeFetchFinances = (data) => {
  return {
    type: 'COMPLETE_FETCH_FINANCES',
    data
  };
};

export const hasNoCid = () => {
  return {
    type: 'HAS_NO_CID'
  };
};

export const fetchPoliticians = (abbreviation, state, district) => {
  return (dispatch, getState) => {
    dispatch(startFetchPoliticians());
    const token = process.env.REACT_APP_PROPUBLICA_API_KEY;
    const AUTH_HEADER = {
      headers: {
        'X-API-Key': token
      }
    };
    Promise.all([
      axios.get(`https://api.propublica.org/congress/v1/members/house/${abbreviation}/${district}/current.json`, AUTH_HEADER),
      axios.get(`https://api.propublica.org/congress/v1/members/senate/${abbreviation}/current.json`, AUTH_HEADER)
    ]).then(function ([house, senate]) {
        dispatch(completeFetchPoliticians({
          state: state,
          district: house.data.results[0].district,
          house: house.data.results[0],
          senate: senate.data.results
        }));
        dispatch(fetchPolitician(house.data.results[0].id, house.data.results[0].next_election));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const fetchPolitician = (id, nextElection) => {
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
        dispatch(setId({
          id: politician.data.results[0].crp_id,
          votesmart: politician.data.results[0].votesmart_id
        }));
        dispatch(completeFetchPolitician({
          politician: politician.data.results[0],
          nextElection: nextElection,
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

export const fetchFinances = (cid) => {
  return (dispatch, getState) => {
    dispatch(startFetchFinances());
    const token = process.env.REACT_APP_OPEN_SECRETS_API_KEY;
    const REQUEST_HEADER = {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
    if (cid) {
      Promise.all([
        axios.get(`https://cors-anywhere.herokuapp.com/https://www.opensecrets.org/api/?method=candSummary&cid=${cid}&output=json&apikey=${token}`, REQUEST_HEADER),
        axios.get(`https://cors-anywhere.herokuapp.com/https://www.opensecrets.org/api/?method=candContrib&cid=${cid}&output=json&apikey=${token}`, REQUEST_HEADER),
        axios.get(`https://cors-anywhere.herokuapp.com/https://www.opensecrets.org/api/?method=candIndustry&cid=${cid}&output=json&apikey=${token}`, REQUEST_HEADER),
        axios.get(`https://cors-anywhere.herokuapp.com/https://www.opensecrets.org/api/?method=candSector&cid=${cid}&output=json&apikey=${token}`, REQUEST_HEADER)
      ]).then(function ([summary, contributors, industry, sector]) {
        dispatch(completeFetchFinances({
          summary: summary.data.response.summary['@attributes'],
          contributors: contributors.data.response.contributors,
          industries: industry.data.response.industries.industry,
          sectors: sector.data.response.sectors.sector
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      dispatch(hasNoCid());
    }
  }
};
