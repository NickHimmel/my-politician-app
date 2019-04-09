import React from 'react';

const Intro = (props) => {
  console.log(props.data)
  return (
    <div>
      <h2>{props.data.name} ({props.data.party})</h2>
      <h3>{props.data.role} for {props.data.state}'s {props.data.district} District</h3>
    </div>
  );
}

export default Intro;
