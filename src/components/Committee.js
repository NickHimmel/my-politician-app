import React from 'react';

const Committee = (props) => {
  return (
    <li>
      <h4>{props.committee.name}</h4>
      <p>{props.committee.begin_date} to {props.committee.end_date}</p>
    </li>
  );
}

export default Committee;
