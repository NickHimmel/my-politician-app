import React from 'react';

const Bill = (props) => {
  return (
    <div className='grid-12'>
      <div><span className='label label-blue'>{props.billDate}</span></div>
      <div className='span-3'><p>{props.bill.short_title}</p></div>
      <div>{props.bill.cosponsors}</div>
      <div className='span-3'><p>{props.bill.latest_major_action}</p></div>
      <div>{props.isActive}</div>
      <div>{props.housePassage} / {props.senatePassage} </div>
    </div>
  );
}

export default Bill;
