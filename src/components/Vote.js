import React from 'react';
import { readMore } from '../utils/helpers.js';

const Vote = (props) => {
  return (
    <div className='grid-12'>
      <div>
        <span className='label label-blue'>{props.voteDate}</span>
      </div>
      {props.isLong ? (
        <div className='span-5 votes-bill'>
          <p className='votes-title'>
            {props.bill.shortTitle}
            <span className='votes-more-title more'>{props.bill.longTitle}</span>
          </p>
          <p className='votes-description'>
            {props.bill.shortDescription}
            <span className='votes-more-desc more'>{props.bill.longDescription}</span>
          </p>
          <span className='dots'>...</span><button className='read-more' onClick={(e) => readMore(e)}>Read more</button>
        </div>
      ) : (
        <div className='span-5 votes-bill'>
          <p className='votes-title'>{props.bill.shortTitle}</p>
          <p className='votes-description'>{props.bill.description}</p>
        </div>
      )}
      <div className='span-3'>{props.vote.question}</div>
      <div className='status'>
        <div className={props.vote.position.toLowerCase()}><span>{props.vote.position}</span></div>
      </div>
      <div>{props.vote.result}</div>
    </div>
  );
}

export default Vote;
