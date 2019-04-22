import React from 'react';
const shortid = require('shortid');

const Votes = (props) => {
  const votes = props.votes.map((vote) =>
    <li key={shortid.generate()}>
      <h3>{vote.bill.title}</h3>
      <p>{vote.description}</p>
    </li>
  );
  return (
    <div>
      <h3>Last Twenty Votes</h3>
      <ul>
        {votes}
      </ul>
    </div>
  );
}

export default Votes;
