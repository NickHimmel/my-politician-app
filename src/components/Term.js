import React from 'react';
import { formatDate } from '../utils/helpers.js';
import Committees from './Committees.js';

const Term = (props) => {
  const startDate = formatDate(props.term.start_date);
  const endDate = formatDate(props.term.end_date)
  return (
    <li className='card terms-item'>
      <h3>The {props.term.congress} United States Congress</h3>
      <p className='label'>{startDate} to {endDate}</p>
      <Committees committees={props.term.committees} type='Committees'/>
      <Committees committees={props.term.subcommittees} type='Subcommittees'/>
    </li>
  );
}

export default Term;
