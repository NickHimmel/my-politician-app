import React from 'react';
import Committee from './Committee.js';

const Term = (props) => {

  return (
    <li className='card terms-item'>
      <p className='label'>The {props.term.congress} United States Congress</p>
      <p>{props.term.start_date} to {props.term.end_date}</p>
      <Committee committees={props.term.committees} type='Committees'/>
      <Committee committees={props.term.subcommittees} type='Subcommittees'/>
    </li>
  );
}

export default Term;
