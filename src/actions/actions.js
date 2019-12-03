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
    const house = fetch(`https://api.propublica.org/congress/v1/members/house/${abbreviation}/${district}/current.json`, AUTH_HEADER).then(function(response){return response.json()});
    const senate = fetch(`https://api.propublica.org/congress/v1/members/senate/${abbreviation}/current.json`, AUTH_HEADER).then(function(response){return response.json()});

    Promise.all([
      house,
      senate
    ]).then(([house, senate]) => {
        dispatch(completeFetchPoliticians({
          state: state,
          district: house.results[0].district,
          house: house.results[0],
          senate: senate.results
        }));
        dispatch(fetchPolitician(house.results[0].id, house.results[0].next_election));
      })
      .catch((error) => {
        console.log('request failed', error);
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
    const politician = fetch(`https://api.propublica.org/congress/v1/members/${id}.json`, AUTH_HEADER).then((response) => response.json());
    const votes = fetch(`https://api.propublica.org/congress/v1/members/${id}/votes.json`, AUTH_HEADER).then((response) => response.json());
    const bills = fetch(`https://api.propublica.org/congress/v1/members/${id}/bills/introduced.json`, AUTH_HEADER).then((response) => response.json());

    Promise.all([
      politician,
      votes,
      bills
    ]).then(function ([politician, votes, bills]) {
        dispatch(setId({
          id: politician.results[0].crp_id,
          votesmart: politician.results[0].votesmart_id
        }));
        dispatch(completeFetchPolitician({
          politician: politician.results[0],
          nextElection: nextElection,
          roles: politician.results[0].roles,
          votes: votes.results[0].votes,
          bills: bills.results[0].bills
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
    const summary = fetch(`api/?method=candSummary&cid=${cid}&output=json&apikey=${token}`).then((response) => response.json());
    const contributors = fetch(`api/?method=candContrib&cid=${cid}&output=json&apikey=${token}`).then((response) => response.json());
    const industry = fetch(`api/?method=candIndustry&cid=${cid}&output=json&apikey=${token}`).then((response) => response.json());
    const sector = fetch(`api/?method=candSector&cid=${cid}&output=json&apikey=${token}`).then((response) => response.json());

    if (cid) {
      Promise.all([
        summary,
        contributors,
        industry,
        sector
      ]).then(([summary, contributors, industry, sector]) => {
        dispatch(completeFetchFinances({
          summary: summary.response.summary['@attributes'],
          contributors: contributors.response.contributors,
          industries: industry.response.industries.industry,
          sectors: sector.response.sectors.sector
        }));
      })
      .catch((error) => {
        console.log('request failed', error);
      });
    } else {
      dispatch(hasNoCid());
    }
  }
};
