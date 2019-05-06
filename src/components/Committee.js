import React from 'react';
const shortid = require('shortid');

const Committee = (props) => {

  const committees = props.committees.map((committee) =>
    <li key={shortid.generate()}>
      <h4>{committee.name}</h4>
      <p>{committee.begin_date} to {committee.end_date}</p>
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

export default Committee;
