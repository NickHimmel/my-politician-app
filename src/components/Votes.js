import React from 'react';
import { formatDate } from '../utils/helpers.js';
import Vote from './Vote.js';

const shortid = require('shortid');

const Votes = (props) => {
  const votes = props.votes.map((vote) => {
    const voteDate = formatDate(vote.date);

    return (
      <Vote key={shortid.generate()} vote={vote} voteDate={voteDate}/>
    );
  });
  return (
    <div className='votes politician-info'>
          <div className='grid-12 grid-12-header'>
            <div></div>
            <div className='label span-5'>Bill</div>
            <div className='label span-3'>Question Voted On</div>
            <div className='label grid-12-centered'>Vote</div>
            <div className='label grid-12-centered'>Result</div>
          </div>
          {votes}
    </div>
  );
}

export default Votes;
