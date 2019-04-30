import axios from 'axios';

export const startfetchRepresentatives = () => {
  return {
    type: 'START_FETCH_REPRESENTATIVES'
  };
};

export const completefetchRepresentatives = (data) => {
  return {
    type: 'COMPLETE_FETCH_REPRESENTATIVES',
    data
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

export const fetchId = (abbreviation, state, district) => {
  return (dispatch, getState) => {
    dispatch(startfetchRepresentatives());
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
        dispatch(completefetchRepresentatives({
          state: state,
          district: house.data.results[0].district,
          house: house.data.results[0],
          senate: senate.data.results
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
        dispatch(setId({
          id: politician.data.results[0].crp_id
        }));
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

export const fetchFinances = (cid) => {
  return (dispatch, getState) => {
    dispatch(startFetchFinances());
    const token = process.env.REACT_APP_OPEN_SECRETS_API_KEY;
    Promise.all([
      axios.get(`https://www.opensecrets.org/api/?method=candSummary&cid=${cid}&output=json&apikey=${token}`),
      axios.get(`https://www.opensecrets.org/api/?method=candContrib&cid=${cid}&output=json&apikey=${token}`),
      axios.get(`https://www.opensecrets.org/api/?method=candIndustry&cid=${cid}&output=json&apikey=${token}`),
      axios.get(`https://www.opensecrets.org/api/?method=candSector&cid=${cid}&output=json&apikey=${token}`)
    ]).then(function ([summary, contributors, industry, sector]) {
      console.log(summary.data.response.summary['@attributes']);
      console.log(contributors.data.response.contributors.contributor);
      console.log(industry.data.response.industries.industry);
      console.log(sector.data.response.sectors.sector);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
};
