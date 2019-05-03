import React from 'react';

const TermList = (props) => {

  return (
    <div>
      {
        props.dataOne &&
        <div>
          <p>{props.textOne}{props.dataOne}{props.percentage}</p>
          <p>{props.textTwo}{props.dataTwo}{props.percentage}</p>
        </div>
      }
    </div>
  );
}

export default TermList;
