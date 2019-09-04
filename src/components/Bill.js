import React from 'react';

const Bill = (props) => {
  return (
    <div className='grid-12'>
      <div><span className='label label-blue'>{props.billDate}</span></div>
      <div className='span-4 grid-bold'>
        <p>{props.bill.short_title}</p>
      </div>
      <div>{props.bill.cosponsors}</div>
      <div className='span-3 grid-light'>
        <p>{props.bill.latest_major_action}</p>
      </div>
      <div className='status'>
        <div className={props.activeClass.className}>
          {props.active}
        </div>
      </div>
      <div className='status'>
        <div className={props.housePassage.isPassed}>
          {props.housePassage.isPassed}
          <br />
          {props.housePassage.date}
        </div>
      </div>
      <div className='status'>
        <div className={props.senatePassage.isPassed}>
          {props.senatePassage.isPassed}
        </div>
      </div>
    </div>
  );
}

export default Bill;
