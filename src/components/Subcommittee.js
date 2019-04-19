import React from 'react';

const Subcommittee = (props) => {
  return (
    <li>
      <h4>{props.subcommittee.name}</h4>
      <p>{props.subcommittee.begin_date} to {props.subcommittee.end_date}</p>
    </li>
  );
}

export default Subcommittee;
