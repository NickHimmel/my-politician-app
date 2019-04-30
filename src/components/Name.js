import React from 'react';

const Name = (props) => {
  return (
    <div>
      <h3>{props.firstName} {props.lastName} ({props.party})</h3>
      <p>Next Election: {props.nextElection}</p>
    </div>
  );
}

export default Name;
