import React from 'react';

const Title = (props) => {
  return (
    <div>
      <h3>{props.name} ({props.party})</h3>
      <h4>Next Election: {props.nextElection}</h4>
    </div>
  );
}

export default Title;
