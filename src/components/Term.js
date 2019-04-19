import React from 'react';
import Committee from './Committee.js';

const Term = (props) => {
  const committees = props.term.committees.map((committee) =>
    <div>
      <h3>Committees</h3>
      <ul>
        <Committee committee={committee}  key={props.term.congress}/>
      </ul>
    </div>
  );
  return (
    <li>
      <h4>The {props.term.congress} United States Congress</h4>
      <p>{props.term.start_date} to {props.term.end_date}</p>
      <p>Bills Sponsored: {props.term.bills_sponsored}</p>
      <p>Bills Cosponsored: {props.term.bills_cosponsored}</p>
      <p>Votes with Party: {props.term.votes_with_party_pct}%</p>
      <p>Missed Votes: {props.term.missed_votes_pct}%</p>
      {committees}
    </li>
  );
}

export default Term;
