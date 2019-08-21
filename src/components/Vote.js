import React from 'react';
import { readMore } from '../utils/helpers.js';

const Vote = (props) => {
  return (
    <div className='grid-12'>
      <div>
        <span className='label label-blue'>{props.voteDate}</span>
      </div>
      {props.isLong ? (
        <div className='span-5'>
          <p>
            {props.bill.shortTitle}
            <span className='votes-more-title more'>{props.bill.longTitle}</span>
            <br />
            {props.bill.shortDescription}
            <span className='votes-more-desc more'>{props.bill.longDescription}</span>
            <span className='dots'>...</span>
            <button onClick={(e) => readMore(e)}>Read more</button>
          </p>
        </div>
      ) : (
        <div className='span-5'>
          <p>{props.bill.shortTitle}</p>
          <p>{props.bill.description}</p>
        </div>
      )}
      <div className='span-3'>{props.vote.question}</div>
      <div className={props.vote.position.toLowerCase()}>
        <div>{props.vote.position}</div>
      </div>
      <div>{props.vote.result}</div>
    </div>
  );
}

export default Vote;
