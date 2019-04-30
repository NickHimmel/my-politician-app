import React from 'react';
const shortid = require('shortid');

const Sectors = (props) => {
  const sectors = props.contributors.map((sector) =>
    <li key={shortid.generate()}>
    </li>
  );
  return (
    <div className="sectors">
      <h3>Last Twenty Bills Sponsored</h3>
      <ul>
        {sectors}
      </ul>
    </div>
  );
}

export default Sectors;
