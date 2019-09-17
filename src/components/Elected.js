import React from 'react';

const Elected = (props) => {
  return (
    <div className='flex'>
      {props.firstElection &&
        <p className='elected label'>First Elected in {props.firstElection}</p>
      }
      <p className='elected label'>Up for reelection in {props.nextElection}</p>
    </div>
  );
}

export default Elected;
