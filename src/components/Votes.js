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
    <div className='votes politician-info'>
          <div className='grid-12 grid-12-header'>
            <div className='label span-bill span-mobile-full row-1'>Bill</div>
            <div className='label span-2 span-mobile-full row-2'>Question Voted On</div>
            <div className='label span-2 grid-centered span-mobile-6 row-3'>Vote</div>
            <div className='label span-2 grid-centered span-mobile-6 row-3'>Result</div>
          </div>
          {votes}
    </div>
  );
}

export default Votes;
