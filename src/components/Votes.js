import React from 'react';
const shortid = require('shortid');

const Votes = (props) => {
  const votes = props.votes.map((vote) =>
    <li key={shortid.generate()}>
      <p>The {vote.congress} United States Congress</p>
      <p>{vote.date}</p>
      <h3>{vote.bill.title}</h3>
      <p>{vote.description}</p>
      <p>Voted: {vote.position}</p>
      <p>Question voted on: {vote.question}</p>
      <p>Result: {vote.result}</p>
    </li>
  );
  return (
    <div className="votes hidden">
      <h3>Last Twenty Votes</h3>
      <ul>
        {votes}
      </ul>
    </div>
  );
}

export default Votes;
