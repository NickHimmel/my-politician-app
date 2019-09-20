import React from 'react';

const Sponsors = (props) => {

  return (
    <div className='flex flex-center flex-column sponsors'>
      <h2>{props.bills}</h2>
      <p className='small-type'>bills {props.sponsored}</p>
    </div>
  );
}

export default Sponsors;
