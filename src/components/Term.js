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
      <div>
        {
          props.term.bills_sponsored &&
            <p>{props.term.bills_sponsored} <span>bills sponsored</span></p>
        }
        {
          props.term.bills_cosponsored &&
            <p>{props.term.bills_cosponsored} <span>bills cosponsored</span></p>
        }
      </div>
      <div className='committees'>
        <Committees committees={props.term.committees} type='Committees'/>
        <Committees committees={props.term.subcommittees} type='Subcommittees'/>
      </div>
    </li>
  );
}

export default Term;
