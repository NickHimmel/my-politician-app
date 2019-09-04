import React from 'react';
import Cash from './Cash.js';
import Contributors from './Contributors.js';
import Industries from './Industries.js';
import Sectors from './Sectors.js';

const Finances = (props) => {
  const votesmart = `https://votesmart.org/candidate/campaign-finance/${props.votesmart}`
  if (props.cid) {
    return (
      <div id='active' className='finances politician-info'>
        <div className='finances-dates'>
          {props.finances.summary.first_elected &&
            <p className='label-light-blue align-center'>First Elected in {props.finances.summary.first_elected}</p>
          }
          <p className='label-light-blue align-center'>Up for reelection in {props.reelection}</p>
        </div>
        <p className='small-type'>Source: {props.finances.summary.origin}</p>
        <p className='small-type'>Last Updated: {props.finances.summary.last_updated}</p>
        <div class='finances-tables'>
          <Cash summary={props.finances.summary}/>
          <Contributors contributors={props.finances.contributors}/>
          <Industries industries={props.finances.industries} />
          <Sectors sectors={props.finances.sectors}/>
        </div>
      </div>
    )} else {
      return (
        <a href={votesmart} target='_blank' rel='noopener noreferrer'>Finances</a>
      )
    }
}

export default Finances
