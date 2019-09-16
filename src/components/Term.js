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
            <div><h2>{props.term.bills_sponsored}</h2><p className='label'>bills sponsored</p></div>
        }
        {
          props.term.bills_cosponsored &&
            <div><h2>{props.term.bills_cosponsored}</h2><p className='label'>bills cosponsored</p></div>
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
