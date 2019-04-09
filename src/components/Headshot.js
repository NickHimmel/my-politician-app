import React from 'react';

const Headshot = (props) => {
  const headshot = `https://theunitedstates.io/images/congress/225x275/${props.id}.jpg`
  return (
    <div>
      <img src={headshot} alt="Representative's Headshot"/>
    </div>
  );
}

export default Headshot;
