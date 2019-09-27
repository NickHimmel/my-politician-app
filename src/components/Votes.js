import React from 'react';
import { formatDate, sliceText, resultsAre } from '../utils/helpers.js';
import Vote from './Vote.js';

const shortid = require('shortid');

const Votes = (props) => {
  const votes = props.votes.map((vote) => {
    const voteDate = formatDate(vote.date);
    const bill = sliceText(vote.description, vote.bill.title);
    const voteResult = resultsAre(vote.position);
    const billResult = resultsAre(vote.result);

    return (
      <Vote key={shortid.generate()} vote={vote} voteDate={voteDate} bill={bill} isLong={bill.isLong} voteResult={voteResult} billResult={billResult}/>
    );
  });
  return (
    <div>
      <h3 className='nav-mobile-headers'>Last 20 Votes</h3>
      <div className='votes politician-info'>
            <div className='grid-12 grid-12-header'>
              <div></div>
              <div className='label span-5'>Bill</div>
              <div className='label span-2'>Question Voted On</div>
              <div className='label span-2 grid-centered'>Vote</div>
              <div className='label span-2 grid-centered'>Result</div>
            </div>
            {votes}
      </div>
    </div>
  );
}

export default Votes;
