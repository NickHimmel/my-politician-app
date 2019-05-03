import React from 'react';
import Committee from './Committee.js';
import Subcommittee from './Subcommittee.js';
const shortid = require('shortid');

const Term = (props) => {

  const bills = (sponsored, cosponsored) => {
    if (sponsored) {
      return (
        <div>
        <p>Bills Sponsored: {sponsored}</p>
        <p>Bills Cosponsored: {cosponsored}</p>
        </div>
      )
    }
  };

  const votes = (votes, missed) => {
    if (votes) {
      return (
        <div>
          <p>Votes with Party: {votes}%</p>
          <p>Missed Votes: {missed}%</p>
        </div>
      )
    }
  };

  const committees = props.term.committees.map((committee) =>
    <Committee committee={committee}  key={shortid.generate()}/>
  );

  const subCommittees = props.term.subcommittees.map((subcommittee) =>
    <Subcommittee subcommittee={subcommittee}  key={shortid.generate()}/>
  );
  
  return (
    <li className='card terms-item'>
      <h4>The {props.term.congress} United States Congress</h4>
      <p>{props.term.start_date} to {props.term.end_date}</p>
      {bills(props.term.bills_sponsored, props.term.bills_cosponsored)}
      {votes(props.term.votes_with_party_pct, props.term.missed_votes_pct)}
      <h4>Committees</h4>
      <ul>
        {committees}
      </ul>
      <h4>Subcommittees</h4>
      <ul>
        {subCommittees}
      </ul>
    </li>
  );
}

export default Term;
