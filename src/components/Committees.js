import React from 'react';
const shortid = require('shortid');

const Committees = (props) => {

  const committees = props.committees.map((committee) =>
    <li key={shortid.generate()}>
      <p>{committee.name}</p>
    </li>
  );

  return (
    <div>
      {
        props.committees.length > 0 &&
        <div>
          <h4>{props.type}</h4>
          <ul>
            {committees}
          </ul>
        </div>
      }
    </div>
  );
}

export default Committees;
