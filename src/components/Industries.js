import React from 'react';
const shortid = require('shortid');

const Industries = (props) => {
  const industries = props.contributors.map((industry) =>
    <li key={shortid.generate()}>
    </li>
  );
  return (
    <div className="industries">
      <h3>Last Twenty Bills Sponsored</h3>
      <ul>
        {industries}
      </ul>
    </div>
  );
}

export default Industries;
