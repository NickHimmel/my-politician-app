import React from 'react';
import TermList from './TermList.js';
import Committee from './Committee.js';

const Term = (props) => {

  return (
    <li className='card terms-item'>
      <p className='label'>The {props.term.congress} United States Congress</p>
      <p>{props.term.start_date} to {props.term.end_date}</p>
      <TermList dataOne={props.term.bills_sponsored} dataTwo={props.term.bills_cosponsored} textOne ='Bills Sponsored: ' textTwo='Bills Cosponsored '/>
      <TermList dataOne={props.term.votes_with_party_pct} dataTwo={props.term.missed_votes_pct} textOne ='Votes with Party: ' textTwo='Missed Votes: ' percentage='%'/>
      <Committee committees={props.term.committees} type='Committees'/>
      <Committee committees={props.term.subcommittees} type='Subcommittees'/>
    </li>
  );
}

export default Term;
