import React from 'react';
import Summary from './Summary.js';
import Contributors from './Contributors.js';
import Industries from './Industries.js';
import Sectors from './Sectors.js';

const Finances = (props) => {
  const votesmart = `https://votesmart.org/candidate/campaign-finance/${props.votesmart}`
  if (props.cid) {
    return (
      <div id="active" className="finances politician-info">
        <h3>Finances</h3>
        <div className="finances-inner">
          <Summary summary={props.summary}/>
          <Contributors contributors={props.contributors}/>
          <Industries industries={props.industries} />
          <Sectors sectors={props.sectors}/>
        </div>
      </div>
    )} else {
      return (
        <a href={votesmart} target="_blank" rel="noopener noreferrer">Finances</a>
      )
    }
}

export default Finances
