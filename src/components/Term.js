import React from 'react';
import { formatDate } from '../utils/helpers.js';
import Sponsors from './Sponsors.js';
import PieChart from './PieChart.js';
import Committees from './Committees.js';

const Term = (props) => {
  const startDate = formatDate(props.term.start_date);
  const endDate = formatDate(props.term.end_date)
  const label = 'Voted ' + props.term.votes_with_party_pct + '% With Party' ;

  return (
    <li className='card terms-item'>
      <h3>The {props.term.congress} United States Congress</h3>
      <p className='label'>{startDate} to {endDate}</p>
      <div className='flex flex-align-center terms-data'>
        <Sponsors sponsored={'sponsored'} bills={props.term.bills_sponsored} />
        <Sponsors sponsored={'cosponsored'} bills={props.term.bills_cosponsored} />
        <PieChart data={props.term.votes_with_party_pct} label={label} id={props.term.congress} type='votes'/>
      </div>
      <p>{props.term.votes_with_party_pct}</p>
      <p>{props.term.missed_votes_pct}</p>
      <div className='committees flex flex-wrap'>
        <Committees committees={props.term.committees} type='Committees'/>
        <Committees committees={props.term.subcommittees} type='Subcommittees'/>
      </div>
    </li>
  );
}

export default Term;
