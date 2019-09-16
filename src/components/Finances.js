import React from 'react';
import Cash from './Cash.js';
import Contributors from './Contributors.js';
import Industries from './Industries.js';
import Sectors from './Sectors.js';

const Finances = (props) => {
  const votesmart = `https://votesmart.org/candidate/campaign-finance/${props.votesmart}`
  if (props.cid) {
    return (
      <div className='finances politician-info'>
        <div className='flex wrap'>
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
