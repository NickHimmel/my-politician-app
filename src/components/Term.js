import React from 'react';
import { formatDate } from '../utils/helpers.js';
import Sponsors from './Sponsors.js';
import PieChart from './PieChart.js';
import Committees from './Committees.js';

const Term = (props) => {
  const startDate = formatDate(props.term.start_date);
  const endDate = formatDate(props.term.end_date)

  return (
    <li className='card terms-item'>
      <h3>The {props.term.congress} United States Congress</h3>
      <p>&#9660;</p>
      <p>&#9664;</p>
      <p className='label'>{startDate} to {endDate}</p>
      <div className='flex flex-align-center flex-wrap terms-data'>
        {
          props.term.bills_sponsored &&
          <Sponsors sponsored={'sponsored'} bills={props.term.bills_sponsored} />
        }
        {
          props.term.bills_cosponsored &&
          <Sponsors sponsored={'cosponsored'} bills={props.term.bills_cosponsored} />
        }
        {
          props.term.votes_with_party_pct &&
            <PieChart data={props.term.votes_with_party_pct} label='Votes With Party' id={props.term.congress} type='votes-with-party'/>
        }
        {
          props.term.missed_votes_pct &&
            <PieChart data={props.term.missed_votes_pct} label='Missed Votes' id={props.term.congress} type='missed-votes'/>
        }
      </div>
      <div className='committees flex flex-wrap'>
        <Committees committees={props.term.committees} type='Committees'/>
        <Committees committees={props.term.subcommittees} type='Subcommittees'/>
      </div>
    </li>
  );
}

export default Term;
