import React from 'react';

const Intro = (props) => {
  console.log(props.data)
  return (
    <div>
      <h2>Name (Party)</h2>
      <h3>Role for {props.state}'s District</h3>
      <h4>Next Election</h4>
    </div>
  );
}

export default Intro;
