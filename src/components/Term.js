import React from 'react';
import Committee from './Committee.js';
import Subcommittee from './Subcommittee.js';

const Term = (props) => {
  const committees = props.term.committees.map((committee) =>
    <Committee committee={committee}  key={committee.code}/>
  );
  const subCommittees = props.term.subcommittees.map((subcommittee) =>
    <Subcommittee subcommittee={subcommittee}  key={subcommittee.code}/>
  );
  return (
    <li>
      <h4>The {props.term.congress} United States Congress</h4>
      <p>{props.term.start_date} to {props.term.end_date}</p>
      <p>Bills Sponsored: {props.term.bills_sponsored}</p>
      <p>Bills Cosponsored: {props.term.bills_cosponsored}</p>
      <p>Votes with Party: {props.term.votes_with_party_pct}%</p>
      <p>Missed Votes: {props.term.missed_votes_pct}%</p>
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
