import React from 'react';
import { readMore } from '../utils/helpers.js';

const Vote = (props) => {
  return (
    <div className='grid-12'>
      <div className='span-1 span-mobile-5 row-1'>
        <span className='label blue'>{props.voteDate}</span>
      </div>
      <div className='span-5 votes-bill span-mobile-full row-2'>
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
      <div className='span-2 span-mobile-question span-mobile-full row-3'>{props.vote.question}</div>
      <div className='span-2 status uppercase flex flex-center span-mobile-6 row-4'>
        <div className={'flex flex-center ' + props.voteResult.className}>{props.vote.position}</div>
      </div>
      <div className='span-2 status uppercase flex flex-center row-2 span-mobile-6 row-4'>
        <div className={'flex flex-center ' + props.billResult.className}>{props.vote.result}</div>
      </div>
    </div>
  );
}

export default Vote;
