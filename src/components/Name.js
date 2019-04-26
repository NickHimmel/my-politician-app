import React from 'react';

const Name = (props) => {
  return (
    <div>
      <h3>{props.firstName} {props.lastName} ({props.party})</h3>
    </div>
  );
}

export default Name;
