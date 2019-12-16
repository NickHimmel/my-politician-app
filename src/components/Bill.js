import React from 'react';

const Bill = (props) => {
  return (
    <div className='grid-12'>
      <div className='span-mobile-5 row-1'><span className='label blue'>{props.billDate}</span></div>
      <div className='span-4 bold span-mobile-11 row-2'>
        <p>{props.bill.short_title}</p>
      </div>
      <div className='row-2'>{props.bill.cosponsors}</div>
      <div className='span-3 grid-light span-mobile-full row-3'>
        <p>{props.bill.latest_major_action}</p>
      </div>
      <div className='status uppercase flex flex-center span-mobile-4 row-4'>
        <div className={'flex flex-center ' + props.activeClass.className}>
          {props.active}
        </div>
      </div>
      <div className='status uppercase flex flex-center span-mobile-4 row-4'>
        <div className={'flex flex-center ' + props.housePassage.isPassed}>
          {props.housePassage.isPassed}
          <br />
          {props.housePassage.date}
        </div>
      </div>
      <div className='status uppercase flex flex-center span-mobile-4 row-4'>
        <div className={'flex flex-center ' + props.senatePassage.isPassed}>
          {props.senatePassage.isPassed}
        </div>
      </div>
    </div>
  );
}

export default Bill;
