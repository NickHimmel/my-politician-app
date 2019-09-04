import React from 'react';
import { formatDate, isActive, resultsAre, billPassage } from '../utils/helpers.js';
import Bill from './Bill.js';

const shortid = require('shortid');

const Bills = (props) => {
  const bills = props.bills.map((bill) => {
    const billDate = formatDate(bill.introduced_date);

    let active = isActive(bill.active),
        activeClass = resultsAre(active),
        housePassage = billPassage(bill.house_passage),
        senatePassage = billPassage(bill.senate_passage);

    return (
      <Bill key={shortid.generate()} bill={bill} active={active} activeClass={activeClass} billDate={billDate} housePassage={housePassage} senatePassage={senatePassage}/>
    )
  });
  return (
    <div className='bills politician-info'>
      <div className='grid-12 grid-12-header'>
        <div></div>
        <div className='label span-4'>Title</div>
        <div className='label'>Cosponsors</div>
        <div className='label span-3'>Last Action</div>
        <div className='label grid-centered'>Active</div>
        <div className='label grid-centered'>Passed in the House</div>
        <div className='label grid-centered'>Passed in the House</div>
      </div>
      {bills}
    </div>
  );
}

export default Bills;
