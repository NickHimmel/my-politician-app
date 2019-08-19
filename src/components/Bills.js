import React from 'react';
import { formatDate } from '../utils/helpers.js';
import Bill from './Bill.js';

const shortid = require('shortid');

const Bills = (props) => {
  const bills = props.bills.map((bill) => {
    const billDate = formatDate(bill.introduced_date);

    let isActive = 'no',
        housePassage = 'no',
        senatePassage = 'no';

    console.log(bill)

    if (bill.active === null) {
      isActive = '';
    } else if (bill.active) {
      isActive = 'yes';
    }

    if(bill.house_passage) {
      housePassage = formatDate(bill.house_passage);
    }

    if(bill.senate_passage) {
      senatePassage = formatDate(bill.senate_passage);
    }

    return (
      <Bill key={shortid.generate()} bill={bill} isActive={isActive} billDate={billDate} housePassage={housePassage} senatePassage={senatePassage}/>
    )
  });
  return (
    <div className='bills politician-info'>
      <div className='grid-12 grid-12-header'>
        <div></div>
        <div className='span-3 bills-title'>Title</div>
        <div>Number of Cosponsors</div>
        <div className='span-3'>Last Action</div>
        <div>Is Active</div>
        <div>Passed in the House/Senate</div>
      </div>
      {bills}
    </div>
  );
}

export default Bills;
