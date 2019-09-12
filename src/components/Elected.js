import React from 'react';

const Elected = (props) => {
  return (
    <div className='elected'>
      {props.firstElection &&
        <p className='label'>First Elected in {props.firstElection}</p>
      }
      <p className='label'>Up for reelection in {props.nextElection}</p>
    </div>
  );
}

export default Elected;
