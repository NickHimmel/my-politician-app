import React from 'react';

const Intro = (props) => {
  return (
    <div>
      <h2>{props.name} ({props.party})</h2>
      <h3>Representative for {props.state}'s {props.district} District</h3>
      <h4>Next Election: {props.nextElection}</h4>
    </div>
  );
}

export default Intro;
