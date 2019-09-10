import React from 'react';
import { readMore } from '../utils/helpers.js';

const Vote = (props) => {
  return (
    <div className='grid-12'>
      <div>
        <span className='label label-blue'>{props.voteDate}</span>
      </div>
      <div className='span-5 votes-bill'>
        <p className='bold'>
          {props.bill.shortTitle}
          <span className='more-title more'>{props.bill.longTitle}</span>
        </p>
        <p className='grid-light'>
          {props.bill.shortDescription}
          <span className='more-desc more'>{props.bill.longDescription}</span>
        </p>
        {props.isLong &&
          <button className='read-more' onClick={(e) => readMore(e)}>Read more</button>
        }
      </div>
      <div className='span-2'>{props.vote.question}</div>
      <div className='span-2 status'>
        <div className={props.voteResult.className}>{props.vote.position}</div>
      </div>
      <div className='span-2 status'>
        <div className={props.billResult.className}>{props.vote.result}</div>
      </div>
    </div>
  );
}

export default Vote;
