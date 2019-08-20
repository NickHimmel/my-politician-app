import React from 'react';

const Vote = (props) => {
  return (
    <div className='grid-12'>
      <div>
        <span className='label label-blue'>{props.voteDate}</span>
      </div>
      <div className='span-5'>
        <p>{props.vote.description}</p>
        <p>{props.vote.bill.title}</p>
      </div>
      <div className='span-3'>{props.vote.question}</div>
      <div className={props.vote.position.toLowerCase()}>
        <div>{props.vote.position}</div>
      </div>
      <div>{props.vote.result}</div>
    </div>
  );
}

export default Vote;
