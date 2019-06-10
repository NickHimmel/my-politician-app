import React from 'react';
import Summary from './Summary.js';
import Contributors from './Contributors.js';
import Industries from './Industries.js';
import Sectors from './Sectors.js';

const Finances = (props) => {
  const votesmart = `https://votesmart.org/candidate/campaign-finance/${props.votesmart}`
  if (props.cid) {
    return (
      <div id='active' className='finances politician-info'>
        <Summary summary={props.finances.summary}/>
        <Contributors contributors={props.finances.contributors}/>
        <Industries industries={props.finances.industries} />
        <Sectors sectors={props.finances.sectors}/>
      </div>
    )} else {
      return (
        <a href={votesmart} target='_blank' rel='noopener noreferrer'>Finances</a>
      )
    }
}

export default Finances
