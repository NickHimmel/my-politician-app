import React from 'react';
import { formatDate } from '../utils/helpers.js';
const shortid = require('shortid');

const Votes = (props) => {
  const votes = props.votes.map((vote) => {
    const voteDate = formatDate(vote.date);

    return (
      <div className='grid-12' key={shortid.generate()}>
        <div>
          <span className='label label-blue'>{voteDate}</span>
        </div>
        <div className='span-5'>
          <p>{vote.description}</p>
          <p>{vote.bill.title}</p>
        </div>
        <div className='span-3'>{vote.question}</div>
        <div className={vote.position.toLowerCase()}>
          <p>{vote.position}</p>
        </div>
        <div>{vote.result}</div>
      </div>
    );
  });
  return (
    <div className='votes politician-info'>
          <div className='grid-12 grid-12-header'>
            <div></div>
            <div className='span-5'>Bill</div>
            <div className='span-3'>Question Voted On</div>
            <div>Vote</div>
            <div>Result</div>
          </div>
          {votes}
    </div>
  );
}

export default Votes;
