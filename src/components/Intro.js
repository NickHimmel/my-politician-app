import React from 'react';

const Intro = (props) => {
  console.log(props.data)
  return (
    <div>
      <h1>{props.data.name}</h1>
      <h1>{props.data.id}</h1>
      <h2>Party: {props.data.party} District: {props.data.district}</h2>

    </div>
  );
}

export default Intro;
